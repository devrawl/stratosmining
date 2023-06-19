---
title: Upload and Download Files on SDS
author: DevRawl
description: This article explains how to use ppd executable to upload and download files on and from the Stratos Decentralized Network.
---

<small> Last update: March 12, 2023</small>

If you are running a SDS node, it's beneficial to the network to upload and download files, in order to generate traffic and network load, which helps testing the stability and limits of the storage network.

This is not a mandatory step but as a testnet participant, it's kind of your duty to do so :)

### Get some files

First of all, get some files on your server, save them to your $HOME folder. 

!!! tip
    You can use WinSCP to upload files to your server through SSH.

They can be any type of file, video, music, documents, etc but don't use sensitive or private files.

This is an example file:

```
/home/user/video02.avi
```

!!! note

In order to upload files, your server needs a working SDS node installation.

### Purchase some ozone

Open the ppd terminal with:

```sh
cd $HOME/rsnode
ppd terminal
```

Purchase some ozone (from ppd terminal) with:

!!! note
    You will need to have some stos in your wallet before making the purchase so either claim the faucet or join discord or telegram and request a few stos test tokens.

```
prepay 1stos 0.01stos
```

this will purchase ozone for 1 stos.

!!! note
    Ozone is the currency spent when paying for storing data on the storage network. It's a token used only in the stratos ecosystem, you cannot withdraw it, trade it or sell it. It has no value in the real world.

### Upload a file

To upload a file to a sds node, run this command in ppd terminal:

```
put /home/user/video02.avi
```

Response:

!!! info
    fileName~~~~~~~~ video02.avi
    fileHash~~~~~~~~ v05ahm56nv1p2s941ib8pdk75q8oe61fe874alc2

This will give you an unique fileHash for this file. After the upload is completed, run this command to make it available for others to download:

```
sharefile v05ahm56nv1p2s941ib8pdk75q8oe61fe874alc2 0 0
```

Response:

!!! info
    ShareId 0f1e9398bfdf166k
    ShareLink yyLA2h_0f1e9398bfdf166y

### Share the file with others

Invite other SDS node operators to download your file by running this command in their nodes:

```
getsharefile yyLA2h_0f1e9398bfdf166y
```

!!! warning
    Keep in mind: this is not a way to generate rewards. You will only be doing this to test the network.

The files you are uploading and downloading, are stored on other people's resource nodes and they are getting the rewards. But if other people do the same thing as you, their files might get stored on your resource node and you will then get a reward.

It's basically a community effort, everyone takes part and everybody wins.

 

### Downloading files

I've prepared a few test files for you to test and try to download. These files are not stored on my resource node and I won't get any rewards if you download them.

Also, i have no control over the nodes where these files are stored so the download might be slow or even break before completion.

To download these files, you will need to have ozone (see upload section on how to purchase ozone).

Open **ppd terminal** and run any or all of these commands:

20 MB file:
```
getsharefile gTqe3Y_e41bd742ab460b66
```

50 MB file:
```
getsharefile WdIDYN_fb12948cf78315b2
```

100 MB file:
```
getsharefile KG3glX_ffce0e6ae2507de7
```

500 MB file:
```
getsharefile z2FNvk_1c0acadfa02b2c63
```


Thank you for being a part of Stratos testnet!