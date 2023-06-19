---
title: Stratos Mining Nodes
author: DevRawl
description: What type of nodes are available on Stratos Decentralized Network. What are the requirements and what are the expected rewards.
---

<small> Last update: June 18, 2023</small>

Currently, there are two types of nodes you can setup and run:

## Full-chain node (validator)

This type of node will be processing transactions using the Proof of Stake mechanism. In practice, running a full-node only implies running a non-compromised and up-to-date version of the software with low network latency and without downtime. It is encouraged to run a full-node even if you do not plan to be a validator.

The full-chain validator is a full-node that participates in the Stratos Chain block generation cycle and also voting for the validity of a block proposed. There are currently 100 Validator spots available.

## SDS resource node

The Stratos Decentralized Storage (SDS) network is a scalable, reliable, self-balancing elastic acceleration network. We can simply take it as a decentralized file system suitable for running on general-purpose hardware.

SDS is composed of many Resource Nodes that store data, and a few Meta Nodes that coordinate with each other.

A Node that provides their resource (disk/bandwidth/computation power) for SDS is called a Resource Node.

Resource Nodes will earn rewards during Incentive Tesnet based on the amount of incoming traffic to the node.

## Minimum requirements

- <b>Hardware:</b>

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

## Incentive reward plan for SDS

Resource nodes will earn rewards in the form of TROS, which is a virtual token. Each time a node stores a file, it will earn some TROS.

**In theory**, each epoch (which is about 10 minutes) will distribute 80 TROS to top 80% of nodes that received traffic over this period. The remaining 20% of nodes will continue to accumulate traffic until they are in top 80% of nodes, sorted by the amount of traffic they received, over the 10 minutes period.

As an example, let's imagine there are 4 resource nodes on the network and a total of 1GB has been transferred in the last 10 minutes:

!!! info ""
    - Node A has received 500MB
    - Node B has received 300MB
    - Node C has received 150MB
    - Node D has received 50MB

Since 80% of the total 1GB transferred has been stored on nodes A and B, they will be getting the rewards as follows:

!!! info ""
    - Node A: 500/(500+300)\*80 = 50 TROS
    - Node B: 300/(500+300)\*80 = 30 TROS

The remaining nodes (C, D) won't get any rewards over this 10 minute period but will keep accumulating traffic until they are part of the 80% nodes that stored the entire traffic generated over the next 10 minutes period.

This is an over-simplified example as there are currently ten of thousand of nodes.

The value of 1 TROS will be determined at the end of the Incentive Testnet, based on the amount of TROS that has been issued over the entire period. This testnet was allocated 1M STOS so if, for example, 2M TROS will be issued, the pairing will be:

!!! info ""
    2M TROS : 1M STOS => 1 TROS = 0.5 STOS

The rewards will be converted from TROS to STOS at the end of the testnet and won't be able to be withdrawn until then. This is a security measure against cheap/bad/fake nodes that can't handle any traffic and are created solely for the purpose of getting rewards. 

!!! warning ""
    Keep in mind that everytime your node goes offline, a 0.02 TROS penalty is applied to your total rewards balance.

**In practice**, we cannot estimate how much a node will be generating in rewards over a one month period. It's possible that the node will be part of the 80% each epoch but it's equally possible it will never be part of the 80% so its monthly rewards will be zero.

As a personal recommendation, you shouldn't purchase a VPN thinking your node will generate enough rewards to cover for the server cost because it may not happen. You should purchase a server if you are looking for the learning experience, to be part of building and testing a project and gathering the know-how on operating a node so when Mainnet launches, you will have everything it takes to immediately start running a node.