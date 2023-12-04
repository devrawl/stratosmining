---
title: SDS Node is Suspended
author: DevRawl
description: How to unsuspend a Stratos Resource Node if it got suspended for bad performance.
---

<small> Last update: December 4, 2023</small>


## Full error

While running a SDS node, you might see this error sometimes about being suspended:

!!! failure "" 

        register_to_sp.go:42: Register failed This node is suspended due to bad performance, cannot register.

Or, when you run the **status** command, you sometimes might see this:

!!! warning ""

        Activation: Active | Registration Status: Unknown | Mining: SUSPEND | Initial tier: 2 | Ongoing tier: 0 | Weight score: 8000

 Both cases show that your node is suspended and it's not currently mining. This could be a result of many issues, but there are two main ones:

- Meta nodes had a temporary connection problem, couldn't reach your node so they assumed it's down (not your fault)
- Your node is not reachable due to firewall or improper port forward (your fault).

Usually if the issue is on your end (second case), you need to make sure that port 18081 (or whatever port you setup in config) is not firewalled. Also, if you are behind a router, you need to forward port 18081 to whatever local ip you're running SDS on.

!!! info ""
    Read about how to port forward or unfirewall your connection in the <a href="https://stratosmining.info/howto-setup-port-forward-firewall/" target="_blank">Port Forward Overview</a>.


 

## How to unsuspend a node

First, you need to open the ppd terminal:

```
cd $HOME/rsnode
ppd terminal
```

Next, you need to update the stake with +1 STOS:

```
updatedeposit 1stos 0.01stos
```

Wait for the following messages:

!!! info ""
        [INFO] 2023/12/04 08:44:29 update_stake.go:44: get RspUpdateDepositPP RES_SUCCESS
        [INFO] 2023/12/04 08:44:37 update_stake.go:59: The UpdateDeposit transaction was broadcast
        [INFO] 2023/12/04 08:44:39 update_stake.go:74: get NoticeUpdatedDepositPP, DepositBalance: 1603000000000000000000, NodeTier: 2, Weight_Score: 2000
        [INFO] 2023/12/04 08:44:45 state_change.go:32: State change has been completed, will start registering automatically


 
## Confirm

Wait a couple of minutes and test if successful by running this command in ppd terminal:

```
status
```

You should see something similar to:

!!! info ""
        Activation: Active | Registration Status: Registered | Mining: ONLINE | Initial tier: 2 | Ongoing tier: 2 | Weight score: 2000