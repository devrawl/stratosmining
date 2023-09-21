---
title: Frequently Asked Questions
author: DevRawl
description: Stratos Decentralized Network Frequently Asked Questions. Is there an airdrop? Find out here.
---

<small> Last update: September 21, 2023</small>

??? info "What is Mesos?"

    Mesos is the name of the Stratos Permanent Testnet, just like Ethereum has its "Goerli" testnet. It will run the same software version as the Mainnet, but with test tokens that have no value (there will be a faucet that disperses test tokens on request).

    Its purpose is to allow users, developers and node operators to test every aspect of Stratos Network without spending actual tokens with value and potentially lose them if errors are made.

 

??? info "Can i stake STOS?"

    Yes, you can delegate our stos coins to a validator from the Stratos Wallet. See [Staking](../staking).
    
    Anyone with access to a server can setup a validator or a resource node to generate some extra rewards. 
    
    However, you will need to bridge the ERC-20 tokens to Stratos native coins for staking.

 

??? info "Is there an Airdrop / Private sale / Giveaway?"

    No, Stratos doesn't run any IDO or private sale (those ended a long time ago), no promotional coins sale, no airdrops and no giveaways. 
    
    If you see any similar offerings, just ignore them. Those are just scammers trying to scam you. 
    
    It happens with every project, not just with Stratos, scammers will create similar named telegram channels and force-invite you to join them, then post different pre-sale, airdrops or giveaway promotions. 
    
    If you are new and don't pay attention, you will think you have joined an official channel. Always pay attention to the channel name: 
    
    **The real Stratos telegram channels:** 
    
    - <a href="https://t.me/StratosCommunity" target="_blank">StratosCommunity</a>
    - <a href="https://t.me/Stratos_announcement" target="_blank">Stratos\_announcement</a>
    - <a href="https://t.me/Stratostrade" target="_blank">Stratostrade</a> (unofficial but supported by the team)

    **Examples of fake and scam channels:** 
    
    - <r>StratosCommunity\_ENG</r>
    - <r>Stratos\_announcemet</r>
    - <r>Stratos\_Community\_Official</r>
    - <r>StratosCommunnity</r>
    
     You can help trying to get these channels closed by reporting them.
    !!! note
        **What you can do to avoid getting forced-invited on scam channels is:** 
        
        Go to Telegram “Settings” and then “Privacy and Security” and then “Groups & Channels.” 
        
        Change who can add you to groups from “Everyone” to “My Contacts.”

 

??? info "When was Stratos launched, what was the IDO price and how were the tokens vested?"

    Stratos TGE has taken place on 9th of June 2021. Token sale have taken place as follows:
    
	 - Seed round 
	 - 6,000,000 tokens were sold at $0.065 
	 - Private round 
	 - 9,500,000 tokens were sold at $0.09 
	 - Private round 2 
	 - 4,500,000 tokens were sold at $0.13 
	 - IDO (Polkastarter) - 1,000,000 tokens were sold at $0.30 
	 
	 Vesting period was TGE date + quarterly over 9 months which means that all pre-sale tokens have been released by **9th of March 2022**. 
	 
	 Total raised was $2,130,000

 

??? info "What are the requirements to run a Validator / SDS node?"

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

 

??? info "What is Ozone?"

    You can think of Ozone as a virtual currency used to buy traffic on the Stratos storage network. If anyone would want to upload or download files, he will first need to make a prepay transaction within the Stratos blockchain, basically convert stos to ozone. The amount of ozone purchased will then be used to purchase traffic on the network. At the end of each epoch, the consumed ozone is automatically sold back to the Volume Pool to generate rewards for the resource nodes.

 

??? info "Is stratos smart contracts / EVM / AWS S3 compatible?"

    Stratos blockchain supports smart contracts and it's EVM compatible but only partially AWS S3 compatible (with all major features that could satisfy most business cases).

 

??? info "Will Stratos join the AI narrative?"

    AI and blockchain technology are two different things. Stratos, as an infrastructure service provider, could offer storage and computing power for AI based applications but other than that, we won't see much of Stratos and AI in the same sentence.

 

??? info "How is Stratos decentralized storage different from centralized cloud solutions?"

    Centralized cloud providers like Google/AWS/Azure use custom, high-end servers but that's one of the reasons their services are so expensive. In terms of performance, Stratos will probably not be able to match that in the beginning but once the network becomes more mature and more nodes join the network, the performance will be, at least, comparable.

    However, Stratos storage selling point is file ownership and security. Being a decentralized provider means that you are the only one that has access to your files, you're not at risk of being censored or your files being deleted for various reasons. Also, the way Stratos storage has been designed, your files are securely stored on the network. Each file is split into multiple pieces, encrypted and stored on different nodes. This means that even if a node breaks encryption, it will only have a portion of your file which will be pretty much useless.

    Another major selling point for Stratos is storage price. CDN (Content Delivery Network) is a major use case of Stratos so if, for example, websites that stream video through CDN (YouTube, Netflix, TikTok etc) would use Stratos, their storage costs could decrease by 90%.

 

??? info "Will projects built on other blockchains be able to switch to Stratos?"

    Yes, projects built on other blockchains can easily embed the Stratos SDK in order to use our storage network, without having to modify their current code. Moreover, projects that currently use IFPS storage can seamlessly migrate to Stratos thanks to IFPS compatibility.

If you have a question, you are welcomed to join TG/Discord and ask there.

