---
title: Auto Upload Files to SDS
author: DevRawl
description: This article explains how to setup a small script to automatically upload and download files on and from the Stratos Decentralized Network.
---

<small> Last update: March 02, 2023</small>

!!! danger "Warning"

    At the moment, you can't setup a storage node on Mesos testnet. Will be soon updated.

### Introduction

During testnet, we are supposed to test the limits of the SDS network by uploading as many files as we can. 

You can <a href="https://stratosmining.info/howto-upload-download-files-from-stratos-sds/" target="_blank">follow the guide from here</a> if you want to upload real files and share with the others but, in my opinion, it's also beneficial for the network to try and generate as much traffic as we can so we can stress-test the network.

!!! info
    Keep in mind that every file you will be uploading, it will be stored on other people's nodes, not on yours. 
    
    So this is not a method to try to get rewards, you can't do that. Nodes that will store your files are chosen randomly, you have no control over which node will save your file. 
    
    And since you only get rewarded once you actually store someone else's file, this is not a way to try to get rewards.

However, if other people will upload more and more files, chances are increasing that your node will store some files at some point and get rewarded for it.

It's basically a community effort: one for all and all for one. With a lottery twist because it's random.

Keep in mind that you will need to have:

- a running SDS node installed under $HOME/rsnode
- some ozone in your wallet

### Purchase some ozone

To buy some ozone, make sure you have some stos tokens in your wallet, then run this:

```
cd $HOME/rsnode
ppd terminal
```

Let's say, for example, you have 10+ stos available in your wallet. Run this command inside ppd terminal to buy ozone for 10stos:

```
prepay 10stos 0.01stos
```

expected result:

!!! info

			   Request Accepted
			    [INFO]2022/04/08 17:35:49 prepay.go:22: Sending prepay message to SP! st1x5vrjhrjpnddqa0vtzr9xxxxxxxxxxxxxx
			    [INFO]2022/04/08 17:35:49 prepay.go:35: get RspPrepay RES\_SUCCESS
			    [INFO]2022/04/08 17:35:49 prepay.go:44: The prepay transaction was broadcast
    
Check if ozone purchase was successful by running this inside ppd terminal:

```
getoz st1xxx
```

Replace *st1xxx* with your own wallet address. You will be prompted to enter the wallet password that you entered while you generated the config with *ppd config*

expected result:

!!! info

			Enter password:
			 Request Accepted
			[INFO]2022/04/08 17:37:13 get\_wallet\_oz.go:16: Querying current ozone balance of the wallet: st1xxxx
			[INFO]2022/04/08 17:37:13 get\_wallet\_oz.go:27: get GetWalletOz RSP, the current ozone balance of st1xxxx = 72098348827413


### Create the script

Open a linux terminal and run these commands:

```sh
mkdir $HOME/upload
nano $HOME/rsnode/upload.sh
```

Paste the following code in upload.sh file:

```sh
#!/bin/bash

while true;
do /usr/bin/head -c 30M /dev/urandom > "$HOME/upload/test-$(date '+%Y%m%d%H%M')"; 
ppd terminal exec put "$HOME/upload/test-$(date '+%Y%m%d%H%M')";
sleep 900;
/usr/bin/rm -rf "$HOME/upload/test*";
sleep 1;
done
```

Save the file with CTRL + X, then Y. 

### Run the script

Now run these commands from the terminal:

```sh
tmux new -t upload
cd $HOME/rsnode
chmod +x upload.sh 
./upload.sh
```

What this will do is generate a 30 MB file and try to upload it to SDS network every 15 minutes, then delete the generated files so it doesn't fill up your hard drive.

You can leave the script running and detach from the tmux: Press and hold the CTRL key, then press B, release all keys and press D.

Leave it running for a few hours or a day, then open a ppd terminal and run 'list' and see how many test-files you managed to upload.