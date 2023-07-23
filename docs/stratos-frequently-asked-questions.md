---
title: Frequently Asked Questions
author: DevRawl
description: Stratos Decentralized Network Frequently Asked Questions. Is there an airdrop? Find out here.
---

<small> Last update: July 22, 2023</small>

??? info "When Mainnet?"

    As of 22nd of July 2023, the project is in the final testing phase. Mesos Testnet will be running the same software version of the Mainnet and final test are being conducted to make sure the storage module is working properly alongside the blockchain module.

    Once every scenario is tested with no functionality issues arising, team will decide a Mainnet date.

 

??? info "What is Mesos?"

    Mesos is the name of the Stratos Permanent Testnet, just like Ethereum has its "Goerli" testnet. It will run the same software version as the Mainnet, but with test tokens that have no value (there will be a faucet that disperses test tokens on request).

    Its purpose is to allow users, developers and node operators to test every aspect of Stratos Network without spending actual tokens with value and potentially lose them if errors are made.

 

??? info "When staking?"

    Once mainnet is live, we will be able to delegate our tokens to a validator from the Stratos Wallet. 
    
    Anyone with access to a server can setup a validator or a resource node to generate some extra rewards. 
    
    Until mainnet is live, you cannot use your ERC20 stos tokens for staking.

 

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

 

??? info "How to send my stos tokens to Stratos wallet?"

    At the moment, stos is an ERC20 token that uses the Ethereum blockchain and cannot be directly transferred to the Stratos wallet. 
    
    Also, you shouldn't attempt to send erc20 tokens to the Stratos wallet, those are running on different networks and your coins will be lost. 
    
    Once mainnet is launched, we will provide documentation on how you will be able to convert the stos erc20 token to the stos native coin that will use the Stratos blockchain.

 

??? info "How much will it cost to activate a validator on Stratos blockchain?"

    There will be a fixed number of available validator spots (probably 75 or 100), this means that the cost will be variable based on demand. For example, if all 100 spots have been filled but you want to run a validator yourself, you will need to delegate more coins than the lowest active validator has in his name. Let's say you look at the validators list, you sort it by the amount of tokens delegated to their name and you see that the one on place 100 has the lowest amount of tokens delegated, let's say 50. So, you will need to delegate 51 tokens to your own validator, this way, you will take place 100 and he will become inactive. Needless to say that if demand for a validator spot is high, the minimum amount of tokens needed to become an active validator will increase also.

 

??? info "How much will it cost to activate a resource node on Stratos Storage Network?"

    The activation cost for a SDS node will be fixed, divided by tree tiers: 
    
	- tier 1: 800 stos 
	- tier 2: 1600 stos 
	- tier 3: 3600 stos


    Each tier will have different hardware requirements and the higher the tier, the higher the rewards it will get.

    A fact worth mentioning: the activation fee is not something you 'pay'. It will be kept in a type of escrow to ensure you will keep your node in optimal condition. This means that if you run a node for a few months without any incidents and decide to stop, you will get your activation fee back (after a period of time). 
    
    However, if during the mining period, your node doesn't successfully complete required tasks (fails to transfer or store a file), it goes offline without setting maintenance mode first and so on, there will be penalties subtracted from the amount of rewards you generated and, if those aren't sufficient, from the activation fee. 
    
    Also, the activation amount generates staking rewards just like they would if they were delegated to a validator.

 

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

