---
title: SDS Node is Suspended
author: DevRawl
description: How to unsuspend a Stratos Resource Node if it got suspended for bad performance.
---

<small> Last update: March 12, 2023</small>

!!! danger "Warning"

    At the moment, you can't setup a storage node on Mesos testnet. Will be soon updated.


## Full error

While running a SDS node, you might see this error sometimes about being suspended:

!!! failure "" 
    register\_to\_sp.go\:100: This node is suspended due to bad performance, cannot start mining

Or, when you run the **status** command, you sometimes might see this:

!!! warning ""
    Activation: Active | Mining: SUSPEND | Initial tier: 1 | Ongoing tier: 0 | Weight score: 8000

 Both cases show that your node is suspended and it's not currently mining. This could be a result of many issues, but there are two main ones:

- Meta nodes had a temporary connection problem, couldn't reach your node so they assumed it's down (not your fault)
- Your node is not reachable due to firewall or improper port forward (your fault).

Usually if the issue is on your end (second case), you need to make sure that port 18081 (or whatever port you setup in config) is not firewalled. Also, if you are behind a router, you need to forward port 18081 to whatever local ip you're running SDS on.

!!! info ""
    Read about how to port forward or unfirewall your connection in the <a href="https://stratosmining.info/howto-install-stratos-sds-node/" target="_blank"> SDS Node Tutorial</a>


 

## How to unsuspend a node

First, you need to open the ppd terminal:

```
cd $HOME/rsnode
ppd terminal
```

Next, you need to update the stake with +1 STOS:

```
updatestake 1stos 0.01stos 1
```

Wait for the following messages:

!!! info ""
    update\_stake.go:51: The UpdateStake transaction was broadcast

 

## Activate the mining

Wait a couple of minutes after the updatestake command, then inside ppd terminal, run:

```
startmining
```

You should get the following messages:

!!! info ""
    register\_to\_sp.go\:100: This node is suspended. A request to unsuspend has been sent. The node will start mining automatically if the request is successful.

    register\_to\_sp.go:104: start mining

 
## Confirm

Wait a couple of minutes and test if successful by running this command in ppd terminal:

```
status
```

You should see something similar to:

!!! info ""
    Activation: Active | Mining: ONLINE | Initial tier: 1 | Ongoing tier: 1 | Weight score: 5000