---
title: Port Forwarding and Firewall for SDS Node
author: DevRawl
description: This article explains how to setup port forward and firewall in order to run a SDS node.
---

<small> Last update: August 30, 2023</small>

## Server behind router

If you're running a server at home for example and you have a local network that has internet connectivity through a router, you have to forward the SDS port so it's accessible from the outside.

For example, if your server has ip address 192.168.1.10, you have to open your router settings page, go to port forward and add a rule for port 18081. Every router configuration page is different but you should be looking for something like this:

![](assets/images/Screenshot-2023-01-25-034231.jpg)

After adding the rule, find your external ip:

```
curl ifconfig.co
```

Next, open a test listening port on your linux server:

```
nc -l 18081
```

Check your port conectivity on a site like <a href="https://portchecker.co/" target="_blank">PortChecker</a> .

Enter your external ip address and port 18081, it should say that port is OPEN.

You can now close _nc_ with Ctrl + C


## If firewall is enabled

To check if your firewall is active, type:

```
sudo ufw status
```

If you see Status: Inactive, skip this. 

If you see Status: active, open the following port with:

```
sudo ufw allow 18081
```

 