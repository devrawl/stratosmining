---
title: Automatically Claim the Faucet
author: DevRawl
description: Short guide on how to setup a short script that will try to claim the faucet every few hours in order to gather some test tokens on Incentive Testnet.
---

<small> Last update: March 02, 2023</small>

If you want to setup a Validator node, a SDS node, purchase ozone etc, you need stos test tokens.

Currently, the only place to get test tokens is from the faucet. Unfortunately, there is a limit of a few claims a day.

A simple work-around this is to leave a small script running in the background that tries to claim the faucet every 60 minutes so you can go to work or to sleep and the next day, maybe, you will see some more tokens in your wallet.

Open a terminal and run:

```sh
tmux new -t faucet
nano $HOME/faucet.sh
```

Paste the following lines but replace **st1xxx** with your wallet address:

```sh
#!/bin/bash

while true;
do /usr/bin/curl --header "Content-Type: application/json" --request POST --data '{"denom":"stos","address":"st1xxx"}' https://faucet-tropos.thestratos.org/credit;
sleep 3900;
done
```

Save and close the file (Ctrl + X, then press Y and Enter).

Next, from the terminal, make it executable and run it:

```sh
cd $HOME
chmod +x faucet.sh
./faucet.sh
```

Now, this will try to get some tokens every 65 minutes. 

Detach from the tmux: press and hold CTRL, then press B, release all keys and press D. Come back in the morning and check your wallet.
