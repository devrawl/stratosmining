---
title: Drive Pooling and Data Backup
author: DevRawl
description: HowTo pool multiple hard drives into one single large virtual drive and use it in a single folder. HowTo backup the data with SnapRAID.
---

<small> Last update: July 22, 2023</small>

## Use Case

Running a Stratos Resource Node requires pretty high storage capabilities and even if you start with a rather large drive of, let's say 6TB, it will eventually get filled.

Instead of purchasing a very large drive which could get very expensive, you can use several smaller drives, pooled into a single storage point.


!!! note ""

    The following guide will be used as an example setup for:

    - Using MergerFS to pool drives together
    - Using SnapRAID as a parity calculator (data protection)
    - 4 drives (except the OS drive) as storage (3 drives) and as parity (1 drive)

    You will have to modify the guide to fit your setup (number of drives, etc).

As an example, if you have 4 x 6TB drives, you can mount them in a single pool like so:

```
# df -h
Filesystem                        Size  Used Avail Use% Mounted on
/dev/sdb1                         5.4T     0  5.4T   0% /mnt/disk1
/dev/sdc1                         5.4T     0  5.4T   0% /mnt/disk2
/dev/sdd1                         5.4T     0  5.4T   0% /mnt/disk3
/dev/sde1                         5.4T     0  5.4T   0% /mnt/parity1
mergerfs                         16.2T     0 16.2T   0% /mnt/storage
```

You can now configure your Stratos Node to use the `/mnt/storage` path for storing data which now has a `16.2Tb` of available space.

!!! note ""
    In this example setup we will be using:

    - `/dev/sdb1` for storage
    - `/dev/sdc1` for storage
    - `/dev/sdd1` for storage
    - `/dev/sde1` for parity which will be used to restore data if one of the storage drives crashes.

A couple of things to remember if using this type of setup:

!!! failure ""

    - You can use all 4 drives for storage but you will have no protection over the data stored.
    - You can have different sizes for each disk, however, the parity drive has to be equal or larger than the largest storage drive.

## MergerFS Setup

MergerFS is basically a piece of software that will make your OS think that multiple drives are actually a single drive.

### Key features

!!! info ""

    - Pools multiple drives into one mountable volume
    - Supports addition and removal of devices with no rebuild times
    - Permits drives with mismatched sizes with no penalties
    - Each drive has an individually readable filesystem (ext4, xfs, zfs, etc)
    - Drives may contain data when mounted via Mergerfs
    - Simple configuration with one line in /etc/fstab

### Installation

First, go to MergerFS <a href="https://github.com/trapexit/mergerfs/releases" target="_blank">download page</a> and select the package for your distribution. 

Go to `Assets` and click `Show all 55 assets`.

If you're using Ubuntu 22.04 (Jammy Jellyfish), you will need to get the ` mergerfs_2.36.0.ubuntu-jammy_amd64.deb ` file. If you're using a SSH connection, just right click the deb file, select copy link and download it to your server with:

```
wget https://github.com/trapexit/mergerfs/releases/download/2.36.0/mergerfs_2.36.0.ubuntu-jammy_amd64.deb
```

To install the package, run:

```
sudo dpkg -i mergerfs_2.36.0.ubuntu-jammy_amd64.deb
```

### Identify drives


!!! warning ""
    This guide will assume you have a `sda` partition reserved for the operating system.

To identify the storage partitions, run this command:

```
ls -al /dev/disk/by-id/
```

You will see something similar to this:

```
ata-M.2_SATA_III_SSD_1197078A09BF00125893 -> ../../sda
ata-M.2_SATA_III_SSD_1197078A09BF00125893-part1 -> ../../sda1
ata-M.2_SATA_III_SSD_1197078A09BF00125893-part2 -> ../../sda2
ata-ST1000DM003-1CH162_Z1D2CHWL -> ../../sdb
ata-TOSHIBA_DT01ACA050_84PR5NUHS -> ../../sdc
ata-ST6000NE000-2KR101_WSD1ZM6P -> ../../sdd
ata-ADATA_SP550_2G2520036769 -> ../../sde
```

### Format drives

!!! failure ""
    Go through this step only if you want to delete everything on the drives and/or want to remove their partitions, which will also delete the data.

    Skip this step if you already have the partitions formated or want to keep some of the data on them.

    You also need to go through this step for brand new drives.


To format the /dev/sdb drive and create a large partition, run:

```
sudo gdisk /dev/sdb
```

This will load an interactive menu where you will need to enter a few letters:

!!! success ""
    GPT fdisk (gdisk) version 1.0.8    

    Partition table scan:

      - MBR: protective
      - BSD: not present
      - APM: not present
      - GPT: present    

    Found valid GPT with protective MBR; using GPT.    

    Command (? for help): **o** <o><- type o and press enter</o><br>    
    This option deletes all partitions and creates a new protective MBR.<br>
    Proceed? (Y/N): **y** <o><- type y and press enter</o>    

    Command (? for help): **n** <o><- type n and press enter</o> <br>
    Partition number (1-128, default 1): **1** <o><- type 1 and press enter</o><br>
    First sector (34-614366, default = 2048) or {+-}size{KMGTP}: <o><- press enter</o><br>
    Last sector (2048-614366, default = 614366) or {+-}size{KMGTP}: <o><- press enter</o> <br>
    Current type is 8300 (Linux filesystem)<br>
    Hex code or GUID (L to show codes, Enter = 8300): **8300** <o><- type 8300 and press enter</o><br> 
    Changed type of partition to 'Linux filesystem'    

    Command (? for help): **w** <o><- type w and press enter</o> 

    Final checks complete. About to write GPT data. THIS WILL OVERWRITE EXISTING PARTITIONS!!    

    Do you want to proceed? (Y/N): **y** <o><- type y and press enter</o>  


Next, create the filesystem:

```
sudo mkfs.ext4 /dev/sdb1
```

!!! note ""
    You need to repeat the these steps for every drive you have (`/dev/sdc`, `/dev/sdd`, etc)

After formatting, the following command:

```
ls -al /dev/disk/by-id/
```

Will return something similar to this:

```
ata-M.2_SATA_III_SSD_1197078A09BF00125893 -> ../../sda
ata-M.2_SATA_III_SSD_1197078A09BF00125893-part1 -> ../../sda1
ata-M.2_SATA_III_SSD_1197078A09BF00125893-part2 -> ../../sda2
ata-ST1000DM003-1CH162_Z1D2CHWL -> ../../sdb
ata-ST1000DM003-1CH162_Z1D2CHWL-part1 -> ../../sdb1
ata-TOSHIBA_DT01ACA050_84PR5NUHS -> ../../sdc
ata-TOSHIBA_DT01ACA050_84PR5NUHS-part1 -> ../../sdc1
ata-ST6000NE000-2KR101_WSD1ZM6P -> ../../sdd
ata-ST6000NE000-2KR101_WSD1ZM6P-part1 -> ../../sdd1
ata-ADATA_SP550_2G2520036769 -> ../../sde
ata-ADATA_SP550_2G2520036769-part1 -> ../../sde1
```

### Create Mount Points
 
We will now create the mounting points for each partition:

```
mkdir /mnt/disk1
mkdir /mnt/disk2
mkdir /mnt/disk3
mkdir /mnt/parity1
mkdir /mnt/storage
```

Now, add the following to your `/etc/fstab` file:

```
sudo nano /etc/fstab
```

Add:

```
/dev/disk/by-id/ata-ST1000DM003-1CH162_Z1D2CHWL-part1 /mnt/parity1 ext4 defaults 0 0
/dev/disk/by-id/ata-TOSHIBA_DT01ACA050_84PR5NUHS-part1 /mnt/disk1   ext4 defaults 0 0
/dev/disk/by-id/ata-ST6000NE000-2KR101_WSD1ZM6P-part1 /mnt/disk2   ext4 defaults 0 0
/dev/disk/by-id/aata-ADATA_SP550_2G2520036769-part1 /mnt/disk3   ext4 defaults 0 0

/mnt/disk* /mnt/storage fuse.mergerfs defaults,nonempty,allow_other,use_ino,cache.files=off,moveonenospc=true,dropcacheonclose=true,minfreespace=1G,fsname=mergerfs 0 0
```

Save the file with Ctrl + x, press Y and enter.

Now load the new fstab:

```
sudo mount -a
```

Check it with

```
df -h
```

You should see something similar to this:

```
Filesystem                        Size  Used Avail Use% Mounted on
/dev/sdb1                         5.4T     0  5.4T   0% /mnt/disk1
/dev/sdc1                         5.4T     0  5.4T   0% /mnt/disk2
/dev/sdd1                         5.4T     0  5.4T   0% /mnt/disk3
/dev/sde1                         5.4T     0  5.4T   0% /mnt/parity1
mergerfs                         16.2T     0 16.2T   0% /mnt/storage
```



## SnapRAID Setup

SnapRAID is a backup software for disk arrays and it's best suited for setups that store data which isn't frequently changed so it's ideal for protecting data on a Stratos Storage Node.

### Key Features

!!! info ""

    - Has the ability to recover data from disk failures.
    - All your data is hashed to ensure data integrity and to avoid silent corruption.
    - If the failed disks are too many to allow a recovery, you lose the data only on the failed disks. All the data in the other disks is safe.
    - If you accidentally delete some files in a disk, you can recover them.
    - You can start with already filled disks.
    - The disks can have different sizes.
    - You can add disks at any time.
    - It doesn't lock-in your data. You can stop using it at any time without the need to reformat or move data.
    - To access a file, a single disk needs to spin, saving power and producing less noise.

### Installation

Make sure you have `build-essentials` installed on your server:

```
sudo apt install build-essential
```

Go to SnapRAID <a href="https://www.snapraid.it/download" target="_blank">download page</a> and copy the link to the Sources file, then:

```
wget https://github.com/amadvance/snapraid/releases/download/v12.2/snapraid-12.2.tar.gz
```

Compile and install it with:

```
tar xfz snapraid-12.2.tar.gz
cd snapraid-12.2
./configure
make
sudo make install
```

Verify the installation with:

```
snapraid --version
```

You should get<br>
`snapraid v12.2 by Andrea Mazzoleni, http://www.snapraid.it`

### Configuration

Create the config file:

```
sudo nano /etc/snapraid.conf
```

Paste the following lines. This is an example configuration so you will have to edit it to fit your configuration (number of drives, etc).

```
# SnapRAID configuration file

# Parity location(s)
1-parity /mnt/parity1/snapraid.parity

# Content file location(s)
content /var/snapraid.content
content /mnt/disk1/.snapraid.content

# Data disks
data d1 /mnt/disk1
data d2 /mnt/disk2
data d3 /mnt/disk3

# Excludes hidden files and directories
exclude tmp/
exclude /lost+found/
```

### Usage

A downside with SnapRAID is that data isn't automatically protected. You will need to run:

```
sudo snapraid sync
```

in order to protect your data. This means that if a drive fails, you will lose the data you stored since the last time you ran `sync`.

#### Running

To keep this risk at a minimum, we'll set a crontab job to run `sync` every 12 hours:

Make sure `snapraid` executable path is:

```
type snapraid
```
`snapraid is /usr/local/bin/snapraid`

Open crontab editor:

```
sudo crontab -e
```

!!! info ""
    If this is the first time running crontab, you will be asked to set a default text editor. Just enter the number corresponding to `/bin/nano` and press Enter.

Add this line to crontab(edit path if it's installed somewhere else):

```
0 */12 * * * /usr/local/bin/snapraid sync
```

#### Scrubbing

To periodically check the data and parity for errors, you can run the `scrub` command.

```
sudo snapraid scrub
```

This command verifies the data in your array comparing it with the hash computed in the "sync" command. 

#### Recovering a failed drive

You will need a new drive or an external USB drive.

!!! failure ""
    Keep in mind that the new drive's size has to be at least the same size as the failed one.

Create a new mounting point and mount the new drive to it:

```
mkdir /mnt/backup
sudo mount /dev/sdf /mnt/backup
```

Edit the snapraid config file:

```
sudo nano /etc/snapraid.conf
```

If, for example, data drive d2 failed, replace it with the new one:

```
# Data disks
data d1 /mnt/disk1
# data d2 /mnt/disk2
data d2 /mnt/backup
data d3 /mnt/disk3
```

Run the fix command, storing the log in an external file with: 

```
sudo snapraid -d d2 -l fix.log fix
```

(Optional) Run a check on the recovered files with:

```
sudo snapraid -d d2 -a check
```

Run the `sync` command to re-synchronize the array with the new disk:

```
sudo snapraid sync
```

After you recovered the data and replaced the disk, you will need to [create the mounting points](https://stratosmining.info/drive-pooling-data-backup/#create-mount-points) for the new drive.