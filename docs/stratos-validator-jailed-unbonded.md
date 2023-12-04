---
title: Validator is Jailed
author: DevRawl
description: Why is my Stratos Decentralized Network Full-Chain Validator Node jailed and how to re-activate (unjail) it?
---

<small> Last update: Dcember 4, 2023</small>

### Jailed Validator

If you see your validator in this state in explorer, here's how to fix it.


- First and most important thing, open the screen or tmux where your node was running an see _WHY_ your node crashed. If you can't figure it out, you are welcome to join <a href="https://discord.com/invite/tpQGpC2nMh" target="_blank">Discord</a> and we'll try to solve it together.
- Once the issue has been solved, restart your node and wait for it to reach the latest block height.
- When a validator gets jailed, there is a 6 hours cool-down period. 
- Once your node is running, has synced to latest block height and 6 hours have passed since you got jailed, you can run this command:


```
stchaind tx slashing unjail \
--from=st1xxxx \
--chain-id=stratos-1 \
--keyring-backend=file \
--gas=auto \
--gas-adjustment=1.5 \
--gas-prices=1000000000wei

```


Replace st1xxx with your wallet (shown in your validator page under **Self-Delegate Address**)

Explorer page: <a href="https://explorer.thestratos.org/stratos/validators" target="_blank">Link</a>


