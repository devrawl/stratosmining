---
title: Stopping Peer for Error EOF
author: DevRawl
description: Explanation regaring the Stopping Peer for Error EOF you may encounter while running a Stratos Full-Chain Validator Node.
---

<small> Last update: March 12, 2023</small>

### Full error output

!!! failure ""
			E[2022-04-05|20:40:54.957] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF
			E[2022-04-05|20:41:25.253] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} b2a220bf37f59a6b25f53fb66772beb19a3f4e14 out}" err=EOF
			E[2022-04-05|20:41:55.777] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF
			E[2022-04-05|20:42:25.219] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} b2a220bf37f59a6b25f53fb66772beb19a3f4e14 out}" err=EOF
			E[2022-04-05|20:42:55.189] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} b2a220bf37f59a6b25f53fb66772beb19a3f4e14 out}" err=EOF
			E[2022-04-05|20:43:25.194] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} b2a220bf37f59a6b25f53fb66772beb19a3f4e14 out}" err=EOF
			E[2022-04-05|20:43:55.930] Stopping peer for error                      module=p2p peer="Peer{MConn{xx.xx.xx.xx:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF

This is a common error for nodes that have just been started. The node will usually start to sync on its own, after a few minutes or more. However, you should check that:

1. **Your external ip address in config file is correct:**
 
```
curl ifconfig.co
```
  
 example result: 
 
```

12.13.14.15
```

then run:

```
cat $HOME/.stchaind/config/config.toml | grep external\_address
```

 example result:
   
```
external\_address = "tcp://12.13.14.15:26656"
```

 The IP address must be the same in both results.

2. **Make sure port 26656 if correctly forwarded if you are behind a router.**

If your node has been printing the same result for over 1 hour without starting to sync, you can try to use my address book which I'll try to update as often as I can.

- Stop the node.

- Download and overwrite your addressbook:

```
wget https://stratosmining.info/addrbook.json -O $HOME/.stchaind/config/addrbook.json
```

- Start your node again.