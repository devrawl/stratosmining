---
title: Wrong Block Header AppHash
author: DevRawl
description: What is the handshake error on replay wrong Block.Header.AppHash while running a Stratos Full-Chain Node.
---

<small> Last update: March 12, 2023</small>

Full error output:
!!! failure ""
	    I[2023-03-31|13:31:46.055] starting ABCI with Tendermint                module=main
	    ERROR: error during handshake: error on replay: wrong Block.Header.AppHash.  Expected 3488F66A1C1F432B151FEE77E9EA59AF8D2594D5A611161F25A9249727D6BD6E, got 46ABEA3F008170EF6594D4B689F41023A0746588271970B5E2BB0CF4034F8FF0

A similar error is

!!! failure ""
    panic: version 83412 was already saved to different hash

I've noticed that these errors show up after a node has 'violently' crashed, mostly due to the 'too many open files' error, the consensus for the current height is broken and the only way I know of is to reset your node and start the sync process again.

Also, make sure you have <a href="https://stratosmining.info/stratos-validator-socket-too-many-open-files/" target="_blank">increased the open files limit</a> before resetting the node.

This command will delete the addressbook, remove all blockchain history and reset the private validator file to genesis state:
```
stchaind unsafe-reset-all
```

Start the node again in a screen or a tmux and leave it to reach the latest block height.
```
tmux new -s node
stchaind start
```

