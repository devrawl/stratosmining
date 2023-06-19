---
title: Run a Node in Windows
author: DevRawl
description: HowTo configure VirtualBox to run Ubuntu and a Stratos Decentralized Resource Node from Windows.
---

<small> Last update: March 12, 2023</small>

## Introduction

If you are curious about running a Stratos resource node (SDS) but aren't yet prepared to commit to purchasing or renting a dedicated server specifically for this task, here's how to test it first on windows, for free, using VirtualBox.

Stratos is still in testnet phrase so even if you break something, you won't lose any coins. Running a SDS node on testnet is free and it's also a great opportunity to learn and get used to running a node if you plan to do so in mainnet. You can also earn some incentive rewards for doing so.

!!! warning
 
    This method isn't recommended, nor is it supported.

    It should only be used for testing purposes because it might return unexpected results.

## Requirements

- **A computer powerful enough to run two operating systems at the same time (Windows + Linux).** Usually, a 4-core 64-bit CPU with 8GB RAM and around 50GB of free space should be enough for testing.
- **Access to your router to enable port forward.** This is a very important step as you won't be able to run the node if its port isn't accessible from external connections.

!!! note
    VirtualBox only supports 64-bit CPUs so it's a good idea to check first by right-clicking on 'My Computer' or 'This PC' and then click on 'Properties': ![](assets/images/explorer_p0tj74fTMF.jpg)

## Setting up the environment

1. Disable Hyper-V in Windows as this will most likely interfere with VirtualBox: - Press Windows button on your keyboard and search for "turn windows features on or off ![](assets/images/1.jpg) 
	
	Un-check the Hyper-V box:
	
	![](assets/images/OptionalFeatures_J6yqJ0xuXA.png)
	
2. Enable virtualization in BIOS - Most motherboards will have this feature turned off by default so reboot the computer and press DEL to enter BIOS setup. Each BIOS is different but usually you will find the virtualization option under CPU / Advanced or under Advanced / Virtualization. Here, you will need to look for an option called "VT-d technology", "Secure Virtual Machine Mode", "SVM Mode" or something similar and enable it. 

	![](assets/images/2.jpg) ![](assets/images/3.jpg)
	
3. Forward port from router - Usually, a home network will have a router with an external IP address and all the devices behind it (including your computer) will have a local IP address. So you will need to add a rule that will force all traffic coming to your external IP address on a certain port to be forwarded to your computer local IP address. First, find your local IP and your router IP. Press Windows button on your keyboard, type cmd and press enter. Here, type:
    
```
ipconfig /all
```
    
![](assets/images/4.jpg)
    
Red box is your local IP and green box is the router IP.
    
Next, access your router configuration, usually through a browser at http://router.ip. Most routers will have the URL, username and password written on the back so you can check there. Another place to look for router login data is in your router manual.
    
Once you managed to access the router configuration page, you will need to add a port forward rule. You will need to forward port **18081** to your local IP address (red box). Again, each router config page is different but you should look for something similar to this.
    
![](assets/images/Screenshot-2023-01-25-034231.jpg)

 

## Setting up VirtualBox

Go to <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">VirtualBox Download Page</a> and click on Windows Hosts 

![](assets/images/firefox_KBJF41Iu9m.jpg)

Run the installation package. You should be all good with the default setting during the install. Open it and you should see this:

![](assets/images/VirtualBox_Q4kDC4B0IA.jpg)

Next, download the <a href="https://ubuntu.com/download/server" target="_blank">Ubuntu Server ISO</a> version 22.04.2 LTS. 

It's a 1.8GB file called 'ubuntu-22.04.2-live-server-amd64.iso'.

Once you got it, click the New button in VirtualBox and fill these fields:

![](assets/images/VirtualBox_CovArPosdO.jpg)

For 'Folder', chose a folder on the drive you have the most available free space (it's D:\\ in my case). Also make sure to select the downloaded ISO image and check the 'Skip Unattended Installation'. Then click Next.

Depending on your hardware, you can choose here lower or higher values but it's a good practice not to select more than half of your total resources. Usually, a 2GB of ram and 2CPUs should be enough.

![](assets/images/VirtualBox_M5aK98EwBZ.jpg)

Next, for the virtual drive. Again, depending on your available free space, you can play around with the settings but make sure you have at least 25GB of space allocated to this drive but you can select more if you have it.

![](assets/images/VirtualBox_F4R09eJ7zv.jpg)

Next screen will be the summary of your virtual machine. You can click Finish.

![](assets/images/VirtualBox_Hsgy0bzasb.jpg)

You will be taken back to VirtualBox main screen, here you can select the newly created virtual machine and press the Start button. You will be greeted with this screen. Select 'Try or Install Ubuntu Server" and press Enter.

![](assets/images/VirtualBoxVM_rN2TNt9nAM.jpg)

On the next screen, choose your language and press Enter.

![](assets/images/VirtualBoxVM_zOyBNmmT3l.jpg)

Select your keyboard configuration and press Enter.

![](assets/images/VirtualBoxVM_ZLjJRih12t.jpg)

Choose installation type, default is fine, just press Enter.

![](assets/images/VirtualBoxVM_uclWeuZP2U.jpg)

Network setup should automatically allocate an IP so again press Enter.

![](assets/images/VirtualBoxVM_9JkycKKDrQ.jpg)

For proxy, again press Enter.

![](assets/images/VirtualBoxVM_GIaq0VPcjT.jpg)

For archive mirror, it's going to automatically select the mirror closest to you (mine starts with ro.) so you're good just pressing Enter here.

![](assets/images/VirtualBoxVM_y1dGTLuqnS.jpg)

In the storage configuration, it's going to detect the virtual drive you created earlier, leave it selected for 'Use an entire disk' but uncheck 'Set up this disk as an LVM group' as we don't need that in this setup type. You can go through the menu using your keyboard arrow keys and Space or Enter to check or uncheck boxes, then use the arrow keys to go down to Done and press enter.

![](assets/images/VirtualBoxVM_Y6UDezgMR2.jpg)

Next, you will see the installation summary, press Enter.

![](assets/images/VirtualBoxVM_LGBWxOHkqV.jpg)

For the next prompt, just use the arrow keys to select Continue and press Enter. It's only going to erase the virtual disk you created earlier and will not affect any of your current Windows drives.

![](assets/images/VirtualBoxVM_RZYMMGd5Zs.jpg)

In the next screen, you can write anything you want but you will have to enter an username and password and you must remember them.

![](assets/images/VirtualBoxVM_bDxXaTENy0.jpg)

Choose 'Skip for now' and press Enter.

![](assets/images/VirtualBoxVM_jwrRvXapfM.jpg)

In the next screen, check the 'Install OpenSSH Server' as it will be easier to work in your linux box with a SSH client.

![](assets/images/VirtualBoxVM_e2PVvTtK35.jpg)

Next, you can leave everything unchecked and use arrow keys or Tab to select Done, then press Enter.

![](assets/images/VirtualBoxVM_lgC3P4nnWp.jpg)

Ubuntu has now started to install, go get a cup or coffee or something while it's working :)

![](assets/images/VirtualBoxVM_CW7YLtkoCv.jpg)

Once the 'Cancel update and reboot' button has turned into 'Reboot now', you can select it and press Enter.

![](assets/images/VirtualBoxVM_Xpc4M3JGDz.jpg)

Press enter here 🥲

![](assets/images/VirtualBoxVM_7huirPt1Q8.jpg)

Your new installation will boot up and you will be greeted with this screen:

![](assets/images/VirtualBoxVM_j4aSo1Y4x2.jpg)

Now, what i like to do next is use a SSH client such as putty to login to this linux installation because you will have issues if you use this window (copy / paste won't work properly and so on). That is why we selected 'Install OpenSSH server' earlier. To do this, click on Machine and select Settings.

![](assets/images/tLKnYYFZXQ.jpg)

Go to Network, click Advanced and click Port Forward.

![](assets/images/VirtualBoxVM_FucDXKftlq.jpg)

Here, add 3 rules like in this screenshot. Port 22 will be used for connecting with a SSH client and port 18081 will be used to run the SDS node. Notice there are two rules for port 18081, one for Protocol TCP and another for Protocol UDP: (add a new rule from the small green + button in the upper right corner)

![](assets/images/VirtualBoxVM_q801FSwoBv.jpg)

Press OK on both dialogs and <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">download PUTTY</a>. It's enough to get the 'Alternative binary files' / 64-bit x86 putty.exe. Download it and open it.

In the PuTTY dialog, enter these settings:

- 127.0.0.1 for hostname, 
- 22 for port and 
- SSH for connection type. 
 
I also like to go to Window / Appearance and under Font settings, click Change.. button and select Fixedsys (regular, size 10) as font. It looks better. 

Then click OK. You should be prompted by this notice, just press 'Accept'.

![](assets/images/putty_OVg959R1r6.jpg)

Next, enter the username and password you entered during the Ubuntu setup (note that password isn't shown so don't worry if you type and letters don't appear).

![](assets/images/putty_uLnsEUIPHo.jpg)

 

## Port forward testing

!!! warning
    This is a very important step and your node won't run if you don't manage to make it work.

 
What you need to do next is make sure the 18081 port is correctly forwarded otherwise you won't be able to run the SDS node.

Get your external ip address by running

```
curl ifconfig.co
```

Then open a test listening port on 18081 with

```
nc -l 18081
```

![](assets/images/putty_3jAcODEBgK.jpg)

Go to <a href="https://portchecker.co/" target="_blank">portchecker.co</a> and enter your external ip and port 18081. You should see that port is opened.

![](assets/images/22.jpg)

If you "port is closed", means that your port forwarding is wrong, re-check it both in router configuration and in virtual box configuration.

Another possible case would be if your Windows is running a 3rd party firewall such as McAfee, Norton, BitDefender etc. Try disabling it and go through the port testing again.

If you do see port 18081 is open, it's now time for the fun part of installing a SDS node, or did you think this was over? 🥹

Go to <a href="https://stratosmining.info/howto-install-stratos-sds-node/" target="_blank">HowTo Install SDS v0.9.0</a> guide and start directly from Setup part.