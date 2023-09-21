---
title: Stratos Mining Nodes
author: DevRawl
description: What type of nodes are available on Stratos Decentralized Network. What are the requirements and what are the expected rewards.
---

<small> Last update: September 21, 2023</small>

Currently, there are two types of nodes you can setup and run:

## Full-chain node (validator)

<small>(Available to be operated in <g>TestNet</g> / <g>MainNet</g>)</small>

This type of node will be processing transactions using the Proof of Stake mechanism. In practice, running a full-node only implies running a non-compromised and up-to-date version of the software with low network latency and without downtime. It is encouraged to run a full-node even if you do not plan to be a validator.

The full-chain validator is a full-node that participates in the Stratos Chain block generation cycle and also voting for the validity of a block proposed. There are currently 100 Validator spots available.

---

## SDS resource node

<small>(Available to be operated in <g>TestNet</g> / <o><del>MainNet</del></o>)</small>

The Stratos Decentralized Storage (SDS) network is a scalable, reliable, self-balancing elastic acceleration network. We can simply take it as a decentralized file system suitable for running on general-purpose hardware.

SDS is composed of many Resource Nodes that store data, and a few Meta Nodes that coordinate with each other.

A Node that provides their resource (disk/bandwidth/computation power) for SDS is called a Resource Node.

Resource Nodes will earn rewards during MainNet based on the amount of incoming traffic to the node.

---

## Minimum requirements

- <b>Hardware:</b>

    === "Validator"

        | CPU | RAM | Storage | Stake |
        | --- | --- | ------- | ----- |
        | 8 Cores[¹](#), 2.5GHz[²](#) | 32 GB | 2 TB | 1 STOS[³](#) |

        <small> ¹ &nbsp;&nbsp; Can be achieved using dual CPU server configurations (eg. 2cpu x 8cores, as long as the frequency per core is respected).<br>
        ² &nbsp;&nbsp; 2.5GHz refers to Base Frequency, not Turbo/Boost Frequency. <br>
        ³ &nbsp;&nbsp; Minimum stake is 1 STOS until all 100 validator spots are filled. After that, is marked decided.</small>     

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

## Incentive reward plan for nodes

Nodes will earn rewards in the form of STOS, which is the native coin for Stratos.

Each epoch (which is about 10 minutes) will distribute 80 TROS which are divided as follows:

- 60% (48 STOS) goes to resource layer (storage nodes).
- 20% (16 STOS) goes to value layer (blockchain nodes).
- 20% (16 STOS) goes to meta layer (meta nodes).

---

### Resource nodes

The 48 STOS will go to top 80% of nodes that received traffic over this period. The remaining 20% of nodes will continue to accumulate traffic until they are in top 80% of nodes, sorted by the amount of traffic they received, over the 10 minutes period.

As an example, let's imagine there are 4 resource nodes on the network and a total of 1GB has been transferred in the last 10 minutes:

!!! info ""
    - Node A has received 500MB
    - Node B has received 300MB
    - Node C has received 150MB
    - Node D has received 50MB

Since 80% of the total 1GB transferred has been stored on nodes A and B, they will be getting the rewards as follows:

!!! info ""
    - Node A: 500/(500+300)\*80 = 30 STOS
    - Node B: 300/(500+300)\*80 = 18 STOS

The remaining nodes (C, D) won't get any rewards over this 10 minute period but will keep accumulating traffic until they are part of the 80% nodes that stored the entire traffic generated over the next 10 minutes period.

This is an over-simplified example as there will be a lot more nodes running in MainNet.

**In practice**, we cannot estimate how much a node will be generating in rewards over a one month period. It's possible that the node will be part of the 80% each epoch but it's also possible it will never be part of the 80% so its monthly rewards will be zero.

---

### Blockchain nodes

The 16 STOS will be divided among the wallets that delegated (staked) their tokens to a validator. They will be distributed percentually, based on the amount of tokens staked. 

To the base reward, there will be added the chain transaction fee which will be variable depending on the number of transactions on-chain.

Validators can also set a individual commission rate which will be applied to the revenue received by the delegators in its pool.

---

### Meta nodes

Meta nodes are responsible for indexing, auditing and routing services between clients and resource nodes. They are also responsible for generating tasks (upload/download) and selecting the most appropriate node for a specific task. It's also in charge of performing network health checking which ensures that all nodes and data are in good condition.

For the moment, meta nodes are ran by the team in a closed source environment (for project code privacy) and are not available to be setup and run publicly. 

---

## Penalties

Both resource and blockchain nodes are subject to penalties if certain conditions are not met.

- Blockchain nodes will be slashed for 0.02% of their total delegation pool if they miss more than 95% of the last 10,000 blocks (that's around 15 hours of continuous downtime).
- Resource nodes are suspended after 1 hour of downtime. In suspended state, they won't receive new upload/download tasks. They can be unsuspended and returned to normal operation.
- Resource nodes are slashed after 7 days of downtime. The data stored on their nodes will be copied to a new node and the cost for this operation will be covered from their activation deposit. Can be re-activated but the data they stored will become obsolete and should be removed from storage.

---

## Activation fees

Blockchain nodes require a minimum of 1 STOS to become active validators, until all 100 validator spots are filled. After that, to become an active validator, you will need to delegate more STOS than the lowest amount an active validator has delegated.

Example: First 99 validators have 10 stos delegated to them and 1 validator has 5 stos delegated to him. In order to take his place, you will need to delegate 5+1 STOS so that validator will become inactive and your will take its place.

Keep in mind that people that are looking for a validator to delegate their tokens to, tend to take into consideration how much a validator have self-delegated so the more you self-delegate, the more chances you'll have for people to delegate their tokens to your validator.

---

Storage nodes require a fixed activation fee based on the tier level you want to be in. The higher the tier, the higher the potential earnings you will have:

- Tier 1: 800 STOS
- Tier 2: 1600 STOS
- Tier 3: 3200 STOS

This deposit is only used as a "proof of good faith". You will be able to retrieve it after a lock-down period. In this period, you will need to make sure that your node is in working order at all times and the data stored on it is protected (with backups).

The resource nodes will also have to follow the 99% uptime SLA (Service Level Agreement) so each node will have a maximum allowed maintenance downtime of 3.65 days each year.

Failure to meet these requirements will result in a portion of your activation fee being slashed. The maximum amount of value that can be slashed is defined by the amount of data your node is storing. In the event of your node experiencing downtime more than allowed, the data you store will be moved to a new node and your activation fee will cover that cost.

Example: your node is storing 50TB of data and goes offline (or loses the data due to a hardware failure). If the cost of transferring 1 TB will be $2 at global level for every customer, you will be slashed $2 x 50TB = $100.

You will still be able to run your node by re-activating it but you should delete the stored data because it will never be requested from your node again (so you will basically have a fresh node but without paying the activation fee again). 