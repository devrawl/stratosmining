---
title: Staking on Stratos Chain
author: DevRawl
description: Stake your STOS coins by delegating to a Stratos Validator.
---

# General information

!!! tip "Validator details:"

    - Name: <a>0xDevRawl</a>

    - Chain: <a>Stratos Network</a>

    - Operator address: <a>stvaloper1zy9qal508nvc9h0xqmyz500mkuxhteu7wn4sgp</a>

    - Commission: <a>5%</a>

    - Expected reward rate: <a>TBA</a>

    - Payout frequency: <a> every ~6 seconds</a>

    - Unbonding period: <a>21 days</a>

    - Explorer: <a>TBA</a>

    - Uptime:   <a id="counter"></a>

---

# How to stake

TBA

---

# Frequently Asked Questions

??? tip "What is a Validator?"

    One of the core components of proof-of-stake is a validator. Like miners on proof-of-work, validators are responsible for processing transactions on Stratos Network and, by doing so, helping secure the network. 

    In return, they receive an incentive for their participation, in the form of STOS coins.

??? tip "What is a delegation?"

    Delegation refers to the process of entrusting (also known as 'staking') your STOS coins to a validator on a Stratos blockchain, which works under a Proof-of-Stake algorithm. 

    In PoS networks, validators are responsible for creating new blocks and validating transactions, and they are chosen based on the number of coins they hold as collateral. 

    Delegation allows cryptocurrency holders, who may not have the technical expertise or the desire to become validators themselves, to participate in network consensus and earn rewards by lending their coins to validators.

??? tip "Why should you delegate?"

    - **Passive income**: If you plan to hold on STOS for a while, you can accumulate more coins by staking them.

    - **Support Network Security**: Validators play a crucial role in maintaining the security and integrity of PoS blockchain networks. By delegating your coins to a validator, you contribute to the network's overall security.

    - **No Technical Expertise Required**: Delegating doesn't require you to run complex server setups or maintain technical infrastructure, as validators do. It's a straightforward process that allows you to participate in network consensus without the need for specialized knowledge.

??? tip "What are the risks of delegating?"

    - **Slashing**: Validators and delegators in PoS networks can face slashing penalties if they act maliciously or negligently. Slashing involves the loss of a portion of your staked coins as a penalty. This can happen if a validator produces invalid blocks, double signs, or violates network rules. Delegators who have delegated their coins to a validator that gets slashed may also suffer losses.

    - **Validator Downtime**: Validators are responsible for maintaining an always-on infrastructure. If your chosen validator experiences frequent downtime or disruptions, it can impact your staking rewards. Validators that fail to produce blocks consistently may result in missed reward opportunities for delegators.

    - **Market Volatility**: The value of the cryptocurrency you stake can fluctuate significantly in the market. If the price of the staked cryptocurrency falls, it may offset the staking rewards you earn, and you could end up with fewer assets than you initially staked.

    - **Validator Reputation**: Choosing a reputable validator is crucial. If you delegate your coins to a validator with a poor track record or one that behaves maliciously, you risk losing staking rewards and even part of your staked coins through slashing.

??? tip "How is 0xDevRawl mitigating slashing risks?"

    There are two major slashing risks:

    - **Double-signing**: Signing two or more blocks at the same height. This usually doesn't happen by accident, but rather by malicious intent. I am staking my own coins to this validator so I have no reason to put them at risk.

    - **Downtime**: Offline time / absence to sign transactions. The server running this validator is behind two redundant UPSs which can provide around 60 minutes of run time in case of a power outage. Server also has two dedicated 1Gbps internet connections (one is used as back-up in case the other goes down). There is no guarantee the validator won't *ever* have downtime, but the risk is minimal. Moreover, the slashing penalty for downtime is very low (around 0.002%).

??? tip "Can your delegated coins be moved?"

    No. Coins ownership remains with the delegator. When you stake your coins in a PoS network, you're essentially locking them up as collateral to participate in network consensus and earn rewards. However, you don't lose ownership of these coins; they still belong to you, and you retain control over them.

??? tip "Can you undelegate / redelegate?"

    Sure. If you want to change validators, you can redelegate your coins to a different validator, with 0 lock-up time. You can also undelegate and get the coins back into your wallet but there's a 21 days lock-up period for that action.

---

<br>

 <script src="../js/count.js"></script> 