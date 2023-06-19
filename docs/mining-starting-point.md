---
title: Mining Starting Point
author: DevRawl
description: Starting point for your journey as a Stratos Node Operator. What are the server requirements.
---

<small> Last update: March 12, 2023</small>

## Requirements

If you plan to run a node on the Stratos Network, here are some starting points:

- You can use a general-purpose computer or a low-end server.
- You don't need a powerful GPU.
- There are, however, some requirements: 

    === "Validator"

        | CPU | RAM | Storage | Stake |
        | --- | --- | ------- | ----- |
        | 8 Cores[¹](#), 2.5GHz[²](#) | 32 GB | 2 TB | 1 STOS[³](#) |

        <small> ¹ &nbsp;&nbsp; Can be achieved using dual CPU server configurations (eg. 2cpu x 8cores, as long as the frequency per core is respected).<br>
        ² &nbsp;&nbsp; 2.5GHz refers to Base Frequency, not Turbo/Boost Frequency. <br>
        ³ &nbsp;&nbsp; Minimum stake is 1 stos until all 100 validator spots are filled. After that, is marked decided.</small>     

    === "SDS Node"

        | Type | CPU | RAM | Storage | Bandwidth | Stake |
        | ---- | --- | --- | ------- | --------- | ----- |
        | TIER 1 | 8 Cores[¹](#), 2.5GHz[²](#) | 16 GB | 4 TB | Up: 50Mbps Down: 100Mbps | 800 STOS |
        | TIER 2 | 16 Cores[¹](#), 2.5GHz[²](#) | 32 GB | 8 TB | Up: 100Mbps Down: 100Mbps | 1600 STOS |
        | TIER 3 | 32 Cores[¹](#), 2.5GHz[²](#) | 64 GB | 16 TB | Up: 1Gbps Down 1Gbps | 3200 STOS |

        <small> ¹ &nbsp;&nbsp; Can be achieved using dual CPU server configurations (eg. 2cpu x 8cores, as long as the frequency per core is respected).<br>
        ² &nbsp;&nbsp; 2.5GHz refers to Base Frequency, not Turbo/Boost Frequency. </small>

    - <b>Software (tested version)</b>

        * Ubuntu 18.04+
        * Go 1.18+ linux/amd64 

## HDD or SSD

As a rule of thumb, it would only make sense to choose SSD if your connection bandwidth can reach transfer speeds similar to SSDs. 

For example, if you have a true 100Mbps connection, it means that you can transfer data at around 12MB/s (because megabytes is megabits divided by 8). 

A standard HDD will have a read/write speed of 80MB/s to 160MB/s. This means that regardless whether you have a HDD or a SSD, you will always write data at 12MB/s.

On the other hand, if you have a true 2Gbps connection (250MB/s), you will never reach that maximum download speed because your HDD won't be able to write that fast so that's a situation when you'd want to have a SSD.

## Self-managed server

This is the recommended way to run a node.

Managing your own server means that the data stored on this machine is only accessible to you and not some hosting company that could delete everything and close your account anytime they wish.

This is true decentralization.

Running your own server only requires two things:

!!! info ""
    - Stable internet connection with 100Mbps bandwidth
    - Stable electricity connection

### UPS

Having your computer connected to an UPS is always a good option, even if your electricity connection is stable and only cuts off a few times a year. But you never know when that brutal shutdown will have irreversible effects on your components, especially on your storage drives.

Having an UPS is also good if your electricity cuts off frequently, this will allow you to keep your computer running until power comes back on (short cut-offs) but will also allow you to safely shut down your computer if a longer cut-off is expected.

An average UPS will usually have two 7Ah batteries and an average computer will have a 500W power supply so that will probably last for around 25 minutes on a full load.

However, a Stratos resource node will mostly be idle, the power consumption will be very low, even when reading and writing data so most likely, you will get a few hours of backup time from that UPS.

### Storage

The advantage of running a self-managed server is the ability to increase storage when needed at a relatively low price compared to cloud hosted servers.

Sure, hard drives are expensive, especially the high capacity ones, but that's a one-time cost. Increasing the storage space on a cloud hosted server will surely bring your monthly invoice close to a drive purchase cost.

Stratos resource layer uses the Proof-of-Traffic algorithm consensus which means that you will get rewards each time traffic comes to/from your node. 

Having a full disk won't bring any more traffic to your node and you won't get any more rewards but that can easily be fixed by adding a new storage drive to your computer.

### GPU

Regardless if you run a Full-Chain node or a Storage Node, you won't be needing any powerful video card. Because Stratos uses a PoS and a PoT algorithm, your node will only use CPU, storage and bandwidth and even those in small amounts.

An on-board graphic card will only come useful on first-time install of the Linux OS and initial setup. 

### Peripherals

You will only use a monitor and a keyboard on the first-time install of the Linux operating system. After that, all interactions will be made through the network connection.

Once the OS is setup, you can leave the computer running without any monitor attached to it.

However, it is possible that it won't boot without a keyboard attached.

A mouse will never be needed.


## Cloud-hosted server

Cloud-hosted, rented servers, VPS and so on are not a good option if you plan to run a Stratos Resource Nodes because:

!!! info ""
    - Data will be stored in a centralized facility and we're all about decentralization.
    - Cheaper rental option will have a very low amount of available disk space.
    - Increasing available storage will increase the monthly cost. By a lot. And fast.

### Temporary cloud solution

!!! note ""
    You can rent a Storage VPS with 3.2 TB of available disk space for around $35 a month.

If you absolutely have no self-managed solution at the moment and you are looking to start running a Stratos Storage node for a limited period of time until a self-managed solution is available, you can rent a <a href="https://contabo.com/en/storage-vps/" target="_blank">storage VPS from Contabo</a>.  <br>(there is no ref code so you can just click the link :smile:)

I found that it's the best option comparing price vs storage available.

A couple of things to consider if choosing this option:

- The 3.2TB space is non-extendable, meaning that when that drive gets filled, you won't be able to extend it and your node will stop receiving traffic.
- The node setup (its files and folders) can always be moved to another server (just zip them up and move them).



!!! success ""
    However, you can still use a cloud-hosted server if you only plan to run a Full-Chain (Validator) node.

The hardware resources for running a Full-Chain node are not as high as for running a SDS storage node and most likely, any entry level to mid level type of rented server will be enough for a Full-Chain node.

As for storage needed for a Full-Chain node, a 500GB - 1TB drive should be enough.

## IMPORTANT INFO

Whatever hosting solution you chose, please remember:

!!! failure ""

    A SDS Resource Node will need to be activated by pleging an activation fee, as follows:
    
    - Tier 1 SDS Node: 800 STOS
    - Tier 2 SDS Node: 1600 STOS
    - Tier 3 SDS Node: 3600 STOS
    
    (The higher the tier, the higher the amount of traffic it will receive, but also, the higher the hardware requirements it will have.)

This isn't a `fee` you pay, but rather a `promise` that you will keep your Resource Node in good working condition. 

!!! success ""

    Whenever you decide to stop mining and IF you haven't been penalized for any reason during the mining period, you will get your activation fee back, in full. However:

!!! failure ""

	- The activation fee will be locked for at least 180 days. That's 6 months.
	- If you want to stop the mining process, there's a 14 days cool-down period.

This means that if you want to stop mining 10 days after you sent the activation fee, you will get it back in 180 days - 10 days + 14 days.

Another example, if you want to stop mining after 200 days, you will still have to wait 14 days cool-down period.

!!! note ""
    The 14 days cool-down period refers to the time you sent the `deactivation` command and the time you can actually shut down the node.
    
    This time period is required so that every file your node has stored, has enough time to be moved to other nodes.

!!! failure ""
    All the resource node will need to follow the 99% uptime SLA (Service Level Agreement), so each node has maximum 365 days X 1% = 3.65 days of combined downtime and maintenance period per year.

!!! failure ""
    If you shut down the node before the 14 days cool-down period or your node doesn't follow the uptime SLA, your activation fee will be slashed for the transfer cost of your stored files to other nodes.

The amount you will be slashed will depend on the cost of traffic and the amount of data your node has stored.

For example, if your node has 10TB of data stored, you will be slashed the same amount a regular client will pay to transfer 10TB of data to the Stratos Storage Network.