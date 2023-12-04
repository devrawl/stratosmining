---
title: Upload and Download Files on SDS
author: DevRawl
description: This article explains how to use ppd executable to upload and download files on and from the Stratos Decentralized Network.
---

<small> Last update: December 4, 2023</small>

!!! tip "Note"

    At the moment, you can only upload and/or download files through a running SDS node.

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

### Register the node

Run the following command in ppd terminal:

```sh
rp
```

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

The files you are uploading and downloading, are stored on other people's resource nodes and they are getting the rewards. 

 

### Downloading files

I've prepared a few test files for you to test and try to download. These files are not stored on my resource node and I won't get any rewards if you download them.

Also, i have no control over the nodes where these files are stored so the download might be slow or even break before completion.

To download these files, you will need to have ozone (see upload section on how to purchase ozone).

Open **ppd terminal** and run any or all of these commands:


```sh
getsharefile M4a24B_554279dff1dde78b
getsharefile sRcjQ3_6e12d3a303c77053
getsharefile pb4RFB_d78b535a6d74d947
getsharefile juxQsw_2155a990c0ebfa52
getsharefile byunZp_ad15cfc463c04230
getsharefile lXt6q7_b3b4a5121ebc8535
getsharefile fnW2dP_05b51f08ecc60b6e
getsharefile iiIx9l_68c709bccffa63a9
getsharefile iy4h48_b2c77f855f0a898e
getsharefile NjLdNK_2ddeb1ed5be1de97
getsharefile j9LUEx_90ed3f65cf4b1ef3
getsharefile L1DSL1_1ef999af0b0db173
getsharefile Do07HI_62d14e56c6c50b67
getsharefile L6yAq7_1591594af56af540
getsharefile jCTAMZ_b7b3f59f72fdcac5
getsharefile yHdr3R_6fe75bfbf0fe641f
getsharefile jVPW3B_f57ac139f54e9b45
getsharefile CWDf0h_2ac8ea474edb36fa
getsharefile vvpE6t_5f98c99594c6c674
```



Thank you for being a part of Stratos network!