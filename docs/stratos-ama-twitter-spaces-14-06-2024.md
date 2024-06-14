---
title: AMA on Twitter 14.06.2024
author: DevRawl
description: Stratos Decentralized Network AMA on Twitter Spaces with Bin Zhu and Claire Bearzh, aired on June 14, 2024.
---

## Welcomes

<claire>Claire</claire>

Once again, thank you for joining us for another Stratos Community AMA. Today, we all are updating our community about some of the Stratos' V12 updates and also answer all of your questions just to get further connected with our amazing community. So today, joining us here, we have Bin Zhu, our founder. Hi, Bin. Would you like to give everyone a first recent overall update first, and then we can jump into the Q&A session?

---

## Updates

<bin>Bin</bin>

Hi, everyone. We launched version V12 about two weeks ago. At that time, we encountered a small issue with the meta node, causing the network to be unstable for a couple of days. However, everything has been running smoothly this week. The node size and the number of nodes are steadily increasing as the network stabilizes.

Following the V12 launch, we introduced three new features. Firstly, you can now stake tokens using MetaMask. By using Exoswap with MetaMask, you can easily stake and unstake without needing to download the Stratos wallet. This is more convenient and secure for those who already have MetaMask and hardware wallets, eliminating security concerns.

Secondly, we launched the SDS dashboard. Although we previously had an SDS dashboard contributed by a community member, it mainly shows registered SDS nodes without showing the status of each node. The current dashboard provides more accurate numbers, focusing only on registered nodes.

Some nodes might be temporarily offline, while others may be permanently offline. The current dashboard displays their locations and the real-time status of each node. If a node goes offline, this will be shown on the dashboard. You might notice some nodes appearing in locations that seem odd, like in the ocean. This happens because we show node locations with a random offset of 50 to 100 kilometers to protect the privacy of miners. We don't display the exact server location, so nodes near the ocean might appear as if they are in the ocean. This slight inaccuracy ensures that the nodes' real locations are not disclosed, safeguarding the miners' privacy.

The third major feature is video streaming. The Stratos network now performs well enough to stream videos directly.

Currently, we have video streaming demos available, which you can see on our Twitter. You can check them out there. We've also added a guide on that page. By following the guide, you can create your own video website. On the back-end, you only need to link your wallet to pay for traffic costs. Simultaneously, any content you upload that generates traffic will earn you rewards, following an 'share to earn' model.

You can upload videos, audio, or images without needing to complete any KYC process. We don't need to know who or where you are. If your content attracts a lot of viewers who download, watch, or play it, all the traffic belongs to you. Every 10 minutes, the proof of traffic consensus generates relevant rewards, which you can then check. The amount you earn depends on the traffic generated during each 10-minute interval.

But that's just the demo. In the future, we plan to push this feature even further. Currently, creating a website and using the SDS requires some professional technical skills. As a result, most participants are miners who already have an SDS node. However, we will soon provide a decentralized Dropbox, allowing users to upload their content easily. This application, similar to the Stratos wallet, will enable anyone, even those without technical skills or an SDS node, to upload their videos.
These are the three features introduced after the V12 launch. Additionally, any project wanting to cross the chain to prepay gas can use our new features. These updates are all available post-V12. That's the update. Thank you.

---

## Node Weight Calculation

<claire>Claire</claire>

Thank you, Bin, for the brief update. We understand that maybe a lot of our community members couldn't join us at this time, so we have gathered some questions beforehand from the communities. We will be addressing some of them. At the same time, we will be following the comment section. If you want to send any questions live to be answered, please feel free to just leave a comment or leave a reply. 

We're very delighted to see that this time a lot of questions are actually related to the technical part. I'll start with the technical questions regarding to resource node and meta node first. 

The first question is that, what is the algorithm for calculating weight for a resource node? It will be correct to describe in details this somewhere so that owners of the resource nodes can clearly understand the cause and effect relationships of changes in the indicator. Bin, can you give this a brief answers? I know this can be very detailed, but maybe you can answer this first.

---

<bin>Bin</bin>

Yes, this is the document we published when the mainnet was launched at the end of last year. Some new participants might not be aware of it, but you can refer to the previous technical documentation. The basic idea is that each node has a weight, and the total score weight is 10,000. Initially, you start with 2,000. By staying online and successfully performing tasks such as uploading, downloading, and data transport, you earn additional points. Every successful action, like receiving and sending files, adds to your score based on the job's weight. If you complete all tasks successfully, your score will increase rapidly.

To keep your node in good standing, ensure it remains online and performs its tasks efficiently. When we randomly select SDS nodes to perform tasks, maintaining a high score and weight will be beneficial. For instance, out of 100 nodes, we might assign 10 tasks, and nodes with higher scores are more likely to be chosen.

Okay, we randomly select nodes, but having a higher weight increases the likelihood of being chosen. However, this is not a guarantee. If there are two nodes, where Node A has a much higher score than Node B, Node A has a greater chance of being selected to accomplish new tasks.

It’s important to note that everything is based on probabilities and not certainties. We cannot assign all tasks to the top-performing servers or SDS nodes. Even if your score is higher, it only means you have a higher possibility of being selected, not that all tasks will be assigned to you exclusively. That’s how the system works. Thank you.

---

## Future Node Requirements

<claire>Claire</claire>

Thank you. And for anyone who raised this question, please also feel free to refer to our documentation as well. Next question is, is there an understanding of how the system requirements for resource notes will change in the future and with what frequency? Will these changes be accepted by the team or by the validator's vote?

---


<bin>Bin</bin>

I guess the question refers to activation amount? Some have asked if we can reduce the deposit amount to allow more people to participate as SDS owners. However, this decision hinges on token prices and server costs. Running a server involves hardware expenses, whether purchased or rented from a data center, along with monthly bandwidth costs. These are significant factors in our decision-making process.

Commitment is essential; hence, the deposit requirement ensures contributors are willing to invest. Currently, considering the token's price isn't high, deposits of 800 or 1,600 tokens are reasonable for running a node. Therefore, at present, we won't decrease the deposit threshold, requiring 1,600 tokens for activation. In the future, should token prices increase significantly, we may propose and put to a vote whether to adjust the deposit requirements.

Based on the current situation, we believe there's no need to reduce the deposit requirement. This ties into the question of why we impose a deposit rather than allowing unrestricted participation, akin to validators in other systems. The key feature that sets Stratos apart is its high performance. By requiring a deposit, we ensure commitment from participants. If someone simply wishes to experiment without investment, they could add and withdraw nodes freely. However, this flexibility could destabilize the network. For example, a node may store replicated files and data, but if the operator withdraws or shuts down the server, all information is relocated to other SDS nodes to maintain network stability.

At the same time, allowing unfettered addition and removal of nodes creates uncertainty and generates temporary traffic as data is relocated across servers. Without a deposit requirement, there's no deterrent for such actions, posing a significant risk to the Stratos network's stability and performance. This is why we emphasize the need for a deposit before activating a node.

While you can remove a node, there's a 180-day waiting period to reclaim your deposited tokens, instilling responsibility and commitment. Your deposited tokens signify your commitment to maintaining network stability. Without this requirement, there's a lack of accountability, potentially undermining the seriousness of participating in the network. Hence, we strongly encourage token deposits to ensure network integrity. Thank you.

---

## Community MetaNodes

<claire>Claire</claire>

Thank you for the detailed explanations. Moving forward, on what principle is it planned to increase the number of meta nodes? And on what principle would candidates be submitted for approval by validators? How much is supposed to be blocked by meta nodes? Can the largest token holders claim to open a meta node in the future when the time is right?

---

<bin>Bin</bin>

Yes, currently we have seven meta-nodes located in North America, Asia, and Europe. In the future, we may open this opportunity to selected token holders or trusted third parties, subject to a voting process. However, at present, our team is focused on developing the decentralized database. This involves potentially modifying existing code and adding new features to the current meta-nodes.

Once these developments are complete, we plan to introduce a decentralized computing network. It's important to finalize all components before considering third-party involvement in hosting meta-nodes. Our aim is to streamline the setup process, making it straightforward for selected third parties to operate meta-nodes effectively.

---

## Stratos Subnets

<claire>Claire</claire>

Got it. I think we also learned that the database and computing part, it's also now being in the development stage as well. Definitely great news for the community. Next one is, is the possibility of creating subnets operating exclusively in a particular country or region being considered in the future in order to meet local legislation?

---

<bin>Bin</bin>

Yes, that's a significant concern, and it's been raised by community members privately as well. Certain countries have stringent firewall laws, making it difficult for them to connect to meta-nodes and communicate with other SDS nodes. We understand this challenge.

Typically, subnets need to aggregate and communicate with the main network. However, if a standalone network is established due to firewall restrictions, it operates independently and cannot communicate with the Stratos network. While such networks can have SDS nodes, they remain isolated due to these firewall issues.

Currently, we do not have plans to support such scenarios. If countries face strict connectivity issues, they might consider using VPNs or alternative methods. However, if they choose this route, it would not be considered part of the Stratos network as they would be utilizing our code independently.

We appreciate your understanding on this matter. Thank you.

---

## Node Activation Fee

<claire>Claire</claire>

Okay, thank you. Next. Well, there's one question which is quite particularly, maybe we can't really give a full answer because there's a lot of a condition. Briefly, are there any plans to change the quantity of blocked tokens and lockup period when creating a resource node? Because such decisions should be made with the increase of the Stratos token price. There are many any conditions and scenarios, but this is just the brief question.

---


<bin>Bin</bin>

Yes, I just addressed that question. Based on the current token price, we do not plan to reduce the amount required for deposit to activate a new SDS node. If token prices increase significantly in the future and depositing tokens becomes a more challenging aspect of node activation, we may reconsider.

However, for now, considering the other costs involved such as hardware purchases and monthly internet fees, we believe the current deposit requirement is manageable and appropriate.

---

## Data Safety while AI Training

<claire>Claire</claire>

Next, we're moving on to several use case-related questions. Is it possible to grant access to AI algorithm data without directly providing access to the underlying data itself using Stratos? For instance, to train behavior models using urban video surveillance recordings where direct third-party access isn't feasible. These are just examples.

---

<bin>Bin</bin>

Currently, our primary collaboration with AI projects involves facilitating data transport for GPU-based training. This is a significant use case in our partnerships with AI projects. Simultaneously, we are developing our decentralized database. Once completed, we aim to collaborate further by enabling storage of trained data, known as vector data in the AI industry.

Our decentralized database will support traditional key-value data storage as well as vector data storage. This means AI projects can store original data before GPU training and vector data afterward in the Stratos decentralized database. They can then utilize our SDK or API to access this AI data.

As for training AI models, we currently focus more on CPU-based training within our computing network. Many projects already focus on GPU training, and we partner with some of them. Our emphasis on CPU training aims to minimize costs for miners. Additionally, we specialize in streaming processing, record processing, and format conversion for video and audio data.

In summary, our current focus is on CPU-based tasks rather than GPU training to avoid increasing costs for miners and to cater to specific data processing needs. Thank you.

---

## Kuernetes Implementation

<claire>Claire</claire>

Thank you. AI is definitely one of the biggest narrative and the partners that we are currently actively engaging with. Next. Will it be possible to implement Kubernetes systems on the computing network? And this would allow Stratos to be used for the needs of corporate or government applications. This includes applications that consume significant computing resources such as CAE applications.

---

<bin>Bin</bin>

Yeah, Kubernetes is a great topic. Currently, Kubernetes and other computing frameworks typically operate in public or private clouds where strict networking and low latency are crucial. For instance, Google Cloud and AWS provide robust environments for creating Kubernetes clusters where VMs need to communicate efficiently and with minimal latency.

In our current setup, with over 700 nodes online across various countries, our network performs well and is stable for tasks like video playback, demonstrating good performance. However, deploying Kubernetes across all our nodes would require even more stringent network performance, especially low latencies, which we need to ensure can handle the demands.

Before considering launching Kubernetes on our network, it's essential to prove its robustness and capability. Nevertheless, users can already leverage our nodes for a variety of tasks without Kubernetes. Our computing network isn't tied to any specific framework like Kubernetes but aims to meet general computing needs similar to frameworks such as Apache Spark, which operates efficiently on CPU-based tasks like streaming processing.

Our goal is to enable users to access stored data, perform real-time streaming processing, apply filters, and prepare data for subsequent tasks effectively. This could involve processing data at high throughputs, such as 100,000 to millions of operations per second. Users can then further process data, whether through GPU processing for image tasks or storing in our decentralized database for storage, retrieval, or aggregation.

Currently, Kubernetes integration is not part of our immediate plans. If we decide to incorporate Kubernetes, rigorous validation of our network's strength and performance would precede such integration. For now, our focus remains on delivering a versatile computing network that supports diverse data processing needs effectively."

---

## Special Type of Node

<claire>Claire</claire>

Thank you, Bin. Next question is, does the team have plans to create a separate type of resource node that could be used according to a specific schedule or algorithm in such, like corporate big data centers?

---

<bin>Bin</bin>

We currently do not require or plan for miners to purchase or build dedicated or specific servers. Hardware can be costly, and our focus is on functionality rather than specific hardware specifications. 

As long as your server meets basic requirements such as good CPU performance, sufficient memory, and stable network connectivity, it's suitable for our network. This can range from VMs in cloud platforms like Google Cloud or AWS to physical servers in your own premises.

There are no stringent requirements regarding where your server comes from; what matters is its reliability and performance. While we may explore specific hardware needs in the future based on partnerships or significant demands like enhancing gaming performance through streaming, such cases would involve collaborating closely with miners to meet specific hardware specifications.

Currently, we encourage miners to use general-purpose hardware that meets basic operational needs. We remain open to adapting to future opportunities or demands that may require dedicated hardware solutions.

---

## Marketing

<claire>Claire</claire>

Okay. Now, let's just change up a little bit, moving to some general questions. First of all, I know a lot of people are curious about what are the current marketing strategies in place for Stratos. 

Like, are we collaborating with influencers, etc to raise awareness? I can answer this question a little bit. And Bin, if you have anything, feel free to just jump in as well. 

So first of all, I think for the overall marketing strategies, as the nature of the Stratos project, as an infrastructure and DePIN project, our approach has never changed. We really leverage most through partnerships and ecosystem buildings to raise our awareness. 

At the same time, we do have a group of dedicated medium-sized influencers that we're constantly communicating with them on what's coming up, our recent partnerships, so that they help us to retweet and also boost the awareness together. But I understand a lot of people are hoping to see big YouTube or Twitter influencers. 

I think we also have our internal analysis in terms of the outcomes and effectiveness of it. We always just wait for a better timing to actually incorporate with bigger influencers.

This is just a quick summary of what we are doing in terms of marketing strategy. Of course, meanwhile, we understand the complexities and difficulties of a lot of the technical terms, so we try our best to create more educational content to help people understand our advantages and technologies. 

For example, we are also preparing tutorials for the video streaming API functions just to help more developers and builders to understand the amazing technology of this. Bin, do you have anything you want to add on to this?

---

<bin>Bin</bin>

Yeah, I think everyone is currently assessing the market situation. During our last AMA, I mentioned that sentiment among crypto OGs is that this isn't a bull market; rather, it feels more like a challenging period. The focus remains largely on Bitcoin and major ETFs, with limited interest flowing into other coins. Individual investors are more inclined towards meme tokens on platforms like Solana and Ethereum, impacting overall market performance.

Even with the launch of V2 and our collaborations with various groups who are actively promoting their tokens, market movements have been subdued. It's clear that attention is fixated on broader economic factors such as SEC decisions and interest rate trends, overshadowing interest in alternative tokens.

In this environment, we're leveraging this time to stabilize and enhance our network capabilities. Our priority is to advance features like video streaming and the decentralized Dropbox-like, while concurrently developing our decentralized database, slated for release this year. Amidst market noise, our strategy is to focus on product development rather than market speculation.

We anticipate a future where we can collaborate more extensively with QLs and media entities to amplify awareness of our current and upcoming products. For now, our emphasis remains on building robust products and positioning ourselves for future opportunities as market conditions evolve. Thank you.

---

## DBox and Wallet

<claire>Claire</claire>

Thank you, Bin. And also, since you mentioned about the decentralized job Dropbox. People also ask the question about when are we expecting the Dropbox and also the mobile wallet as those are two important applications that users can interact with.

---

<bin>Bin</bin>

We previously mentioned our collaboration with a third party to develop the Decentralized Dropbox-like feature. They completed the initial phase and shared their designs with us, but we haven't received recent updates from them. However, we have a contingency plan, Plan B, in place. Our internal team is concurrently developing the Dropbox feature. This ensures continuity regardless of external circumstances.

Once our own Dropbox-like feature is integrated into the Stratos wallet, users will find it conveniently accessible within the application. This integrated functionality will allow seamless token transfers and file management. Users, whether they own an SDS node or not, will be able to upload, download, and eventually share videos through our platform.

Upon its completion, we plan to launch promotional activities to encourage users to engage with the new Dropbox-like feature actively. Stay tuned for more details as we progress. Thank you.

---

## Listings / Increasing Volume

<claire>Claire</claire>

All right. And in terms of liquidities and exchanges, do we have any plans or listing on more exchanges to increase the trading volumes and its abilities?

---

<bin>Bin</bin>

As mentioned earlier, we have been collaborating with the market maker DWF for a while now. They are a major player in the market, focusing solely on market-making without engaging in speculative trading. This means they fulfill natural trading requirements without artificially generating trading volumes.

If you look at our exchanges, particularly AscendEX, they generate substantial daily trading volumes. However, this volume isn't verifiable for platforms like CoinMarketCap and can create a poor experience for users looking to trade our tokens on AscendEX compared to exchanges like MEXC or Gate.

Therefore, we are proceeding cautiously in increasing our daily trading volume. Our aim is to foster organic trading activity. Recently, we discussed with our market maker ways to deepen liquidity. Just days ago, we explored connections with several new exchanges through them. Additionally, we've taken steps towards potentially listing on Binance, which recently opened doors for smaller projects like ours.

In the current market environment, characterized by lower trading volumes across the board, we recognize the importance of increasing our volume to meet exchange listing requirements. We're exploring strategies to achieve this, whether through partnerships with market makers or initiatives involving our community. However, we're mindful not to artificially inflate volumes, as this could hinder genuine trading activities on exchanges. Striking this balance is crucial for us moving forward.

---

## Current Partnerships

<claire>Claire</claire>

Okay, thank you, Bin. I think now we can ask if anyone Anyone here would like to come up and ask your question directly as we pretty much go through major of the questions that we have gathered from the community. So if you still have questions, you can take the time just to request to speak, and I will pull you up. 

Meanwhile, there is a question in the comment section that in the In previous AMAs, there was talk about paying for storage with STOS. For non-crypto-related companies, we are third party. People are curious, are there actually people who pay with STOS from all of those partnerships, or how is that being planned in terms of leveraging for the non-crypto-related companies?

---

<bin>Bin</bin>

At present, we do not have any non-crypto projects paying with stablecoin for our services, where we convert the payment to our native token. However, for any project interested in utilizing our platform, we offer them a dedicated trial space at no cost. The foundation covers these expenses to allow them to experiment freely. 

For instance, if an AI project joins us, we provide them with a wallet and allocate a certain amount of free storage space, such as 10 terabytes or 100 terabytes, for their use.

Currently, there are no traditional companies paying for our services directly with fiat currency.

---

## Reducing Node Requirements

<claire>Claire</claire>

Okay, thank Thank you, Bin. I saw that UnderstandingCrypto is on the mic. Do you have a question that you would like to raise? Or you can just feel free to unmute yourself.

---

<claire>UnderstandingCrypto</claire>

Yeah, certainly. I heard somebody ask a question before about resource node requirements, and Mr. Bin did respond that at some point they may consider reducing this requirement. 

My question now is, wouldn't that be bad or wouldn't the consequences of that be negative for token holders? Because I understand that the whole idea of getting into a token early is so that when the demand goes higher, you just make more because you saw the opportunity earlier than everyone else. 

If you get in early and you're holding or maybe you start up your own resource node and the price gets higher later on in the future, that will be advantageous for us, the early investors. But if that requirement is reduced, then the demand also drops as tokens to stake before they can start up a resource node. 

Is this actually a consideration for the future? Will you actually be considering to reduce Is this a requirement or it's just something you think about later?

---

<bin>Bin</bin>

Thank you for the question, as it touches on various dimensions of demand within our network. Activating SDS nodes is one aspect of demand, but we must also consider the broader network utilization. 

Increased traffic on the network translates to higher ozone and token usage, which in turn creates additional demand. If the token price rises significantly, say to $5, $10, or higher, the cost to start an SDS node at 1,600 tokens becomes substantial, possibly exceeding hardware costs. 

In such scenarios, we may consider reducing the barrier, perhaps to 1,000 tokens, to encourage more SDS participation.

New SDS nodes strengthen and expand the network, enhancing its capacity to handle more traffic. As traffic increases, more users pay for storage, which benefits miners. Miners not only earn rewards from block mining every 10 minutes but also from users paying for network traffic. 

This dual revenue stream resembles Bitcoin mining, where miners also profit from transaction fees alongside block rewards.

In essence, a thriving ecosystem balances SDS activation requirements with network growth to ensure robustness and sustainable rewards for miners.

---

<claire>UnderstandingCrypto</claire> 

That happened a lot with the Bitcoin Ordinals. They gained a lot more by transaction fees than mining alone.

---

<bin>Bin</bin>

Yeah, exactly. The Stratos network thrives on increased traffic. That's why we're focused on demonstrating video streaming capabilities and providing guides for users to easily create their own video pages or websites. Our goal is for more people to generate content, share videos, and contribute to increased network activity. Transaction fees from these activities are a significant source of income for miners, complementing token mining rewards.

Even though we may consider lowering the requirement to activate new SDS nodes in the future, right now our priority is ensuring the network remains robust and healthy. As the network expands and traffic grows, we'll evaluate reducing entry requirements accordingly.

---

<claire>UnderstandingCrypto</claire>

Yeah, it makes a lot of sense. Thank you. Thank you so much. That's the only question that I got.

---

## Closing Words

<claire>Claire</claire>

All right. I think we covered a lot of the questions from the community today, from technicals to marketing and general projects related stuff. Thank you, everyone, for joining us for this one-hour Community AMA. You guys know that whenever you have a question, you can still try to keep it updated with us in the Telegram group chat if we aren't able to cover it today. 

Thank you very much for your attention and your time. Bin, any closing remarks?

<bin>Bin</bin>

Yeah, I'm incredibly proud to be part of Stratos. Regardless of the market conditions, our team remains dedicated to building and delivering the most valuable products for the decentralized world, for Web3. We're not just about talking; we're about delivering. 

I hope our community recognizes this commitment, and together, we'll continue to demonstrate our value step by step.


Currently, we've completed the storage component and have already begun working on the next phase post-V12. We're also focused on educating more people about the network's capabilities, particularly in video applications. Leveraging our network's strengths, we're actively engaging with various projects and traditional companies to showcase what Stratos can offer.

As always, we'll keep everyone informed about any significant developments. Thank you.

---

<claire>Claire</claire>

Thank you, Bin, for your great insights throughout this whole session. Thank you, everyone. See you very soon.


---

<br>