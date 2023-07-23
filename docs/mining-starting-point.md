---
title: Mining Starting Point
author: DevRawl
description: Starting point for your journey as a Stratos Node Operator. What are the server requirements.
---

<small> Last update: July 22, 2023</small>

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

---

## HDD or SSD

As a rule of thumb, it would only make sense to choose SSD if your connection bandwidth can reach transfer speeds similar to SSDs. 

For example, if you have a true 100Mbps connection, it means that you can transfer data at around 12MB/s (because megabytes is megabits divided by 8). 

A standard HDD will have a read/write speed of 80MB/s to 160MB/s. This means that regardless whether you have a HDD or a SSD, you will always write data at 12MB/s.

On the other hand, if you have a true 2Gbps connection (250MB/s), you will never reach that maximum download speed because your HDD won't be able to write that fast so that's a situation when you'd want to have a SSD.

---

## Self-managed server

This is the recommended way to run a node.

Managing your own server means that the data stored on this machine is only accessible to you and not some hosting company that could delete everything and close your account anytime they wish.

This is true decentralization.

Running your own server only requires two things:

!!! info ""
    - Stable internet connection with 100Mbps bandwidth
    - Stable electricity connection

---

### CPU

With the minimum hardware requirements in mind, here's a list of CPUs that meet each tier level:

| CPU Model | Segment | Cores | GHz (Idle/Turbo) |  Aprox. Cost (USD) |
| --------- | ------- | ----- | ---------------- | ----------- |
| <strong><g>Tier 1 or Validator</g></strong> |
| Xeon E5-2650 v3 | Server | 10 | 2.3 / 3.0  | 118 |
| Xeon E5-2680 v2 | Server | 10 | 2.8 / 3.6 | 135 |
| Xeon E5-2680 v3 | Server | 12 | 2.5 / 3.3 | 150 |
| Ryzen 7 1700 | Desktop | 8 | 3.0 / 3.7 | 149 |
| Ryzen 7 5700G | Desktop | 8 | 3.8 / 4.6 | 150 |
| Core i7-10700F | Desktop | 8 | 2.9 / 4.8 | 194 |
| Core i5-13400 | Desktop | 10 | 2.5 / 4.6 | 219 |
| Ryzen 7 3700X | Desktop | 8 | 3.6 / 4.4 | 222 |
| Core i7-11700F | Desktop | 8 | 2.5 / 4.9 | 230 |
| Core i5-12600K | Desktop | 10 | 3.7 / 4.9 | 249 |
| Core i7-10700 | Desktop | 8 | 2.9 / 4.8 | 250 |
| <strong><g>Tier 2</g></strong> |
| Xeon E5-2650 v3[¹](#) | Server | 10 | 2.3 / 3.0  | 118 |
| Xeon E5-2680 v2[¹](#) | Server | 10 | 2.8 / 3.6 | 135 |
| Xeon E5-2680 v3[¹](#) | Server | 12 | 2.5 / 3.3 | 150 |
| Core i7-13700KF | Desktop | 16 | 3.4 / 5.4 | 413 |
| Core i9-12900KF | Desktop | 16 | 3.2 / 5.2 | 435 |
| Core i9-12900K | Desktop | 16 | 3.2 / 5.2 | 442 |
| Core i7-13700K | Desktop | 16 | 3.4 / 5.4 | 444 |
| Ryzen 9 5950X | Desktop | 16 | 3.4 / 4.9 | 489 |
| Ryzen 9 7950X | Desktop | 16 | 4.5 / 5.7 | 582 |
| Ryzen 9 7950X3D | Desktop | 16 | 4.2 / 5.7 | 739 |
| EPYC 7302 | Server | 16 | 3.0 / 3.3 | 955 |
| <strong><g>Tier 3</g></strong> |
| Ryzen Threadripper 2990WX | Server | 32 | 3.0 / 4.2 | 1452 |
| Ryzen Threadripper 3970X | Server | 32 | 3.7 / 4.5 | 1909 |

<small> ¹ &nbsp;&nbsp; In server configurations with 2 x CPU</small>

!!! tip

    CPUs and pre-built systems are generally much cheaper if purchased as refurbished / used. 

    Generally, there's no issue in purchasing used hardware as CPUs and RAMs tend to have a very long life-span. 

    However, avoid purchasing used HDDs / SSDs (or even refurbished if they're not from a reputable source).

---

### Storage

The advantage of running a self-managed server is the ability to increase storage when needed at a relatively low price compared to cloud hosted servers.

Sure, hard drives are expensive, especially the high capacity ones, but that's a one-time cost. Increasing the storage space on a cloud hosted server will surely bring your monthly invoice close to a drive purchase cost.

Stratos resource layer uses the Proof-of-Traffic algorithm consensus which means that you will get rewards each time traffic comes to/from your node. 

Having a disk filled at maximum capacity won't bring any more traffic to your node and you won't get any more rewards but that can easily be fixed by adding a new storage drive to your computer.

---

### GPU

Regardless if you run a Full-Chain node or a Storage Node, you won't be needing any powerful video card. Because Stratos uses a PoS and a PoT algorithm, your node will only use CPU, storage and bandwidth and even those in small amounts.

An on-board graphic card will only come useful on first-time install of the Linux OS and initial setup. 

---

### Peripherals

You will only use a monitor and a keyboard on the first-time install of the Linux operating system. After that, all interactions will be made through the network connection.

Once the OS is setup, you can leave the computer running without any monitor attached to it.

However, it is possible that it won't boot without a keyboard attached.

A mouse will never be needed.

---

### Network

Depending on the tier level you're going for, you will need to have a minimum connection bandwidth: 

- Tier 1: 50 Mbps upload / 100 Mbps download
- Tier 2: 100 Mbps upload / 100 Mbps download
- Tier 3: 1 Gbps upload / 1 Gbps download

The network speed checks won't be performed at maximum limit but rather close to the maximum limit. For example, if you activate a Tier 2 node and your network speed tests results in a 80-90 Mbps average speed, you will be fine.

However, if your average speed will be, for example, 20-30 Mbps for a Tier 2 node, you will most likely get suspended.

You will also need an external IP address (or access to network router so you can forward ports). Resource nodes use the TCP/IP model so your node port must be accessible from the Internet.

---

### UPS

Having your computer connected to an UPS is always a good option, even if your electricity connection is stable and only cuts off a few times a year. But you never know when that brutal shutdown will have irreversible effects on your components, especially on your storage drives.

Having an UPS is also good if your electricity cuts off frequently, this will allow you to keep your computer running until power comes back on (short cut-offs) but will also allow you to safely shut down your computer if a longer cut-off is expected.

An average UPS will usually have two 7Ah batteries and an average computer will have a 500W power supply so that will probably last for around 25 minutes on a full load.

However, a Stratos resource node will mostly be idle, the power consumption will be very low, even when reading and writing data so most likely, you will get a few hours of backup time from that UPS.

---

## Cloud-hosted server

Cloud-hosted, rented servers, VPS and so on are not a good option if you plan to run a Stratos Resource Nodes because:

!!! info ""
    - Data will be stored in a centralized facility and we're all about decentralization.
    - Cheaper rental option will have a very low amount of available disk space.
    - Increasing available storage will increase the monthly cost. By a lot. And fast.

Basically, to meet the storage nodes hardware requirements, you will need to pay a lot for renting a server which will most likely result in a negative profit (server cost / mining rewards).

!!! success ""
    However, you can still use a cloud-hosted server if you only plan to run a Full-Chain (Validator) node.

The hardware resources for running a Full-Chain node are not as high as for running a SDS storage node and most likely, any entry level to mid level type of rented server will be enough for a Full-Chain node.

As for the storage needed for a Full-Chain node, a 2TB drive should be enough.

---

## IMPORTANT INFO

Whichever hosting solution will you choose, please remember:

!!! failure ""

    A SDS Resource Node will need to be activated by pledging an activation fee, as follows:
    
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