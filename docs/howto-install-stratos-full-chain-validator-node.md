---
title: Setup a Full-Chain Node
author: DevRawl
description: HowTo install a Full-Chain node on Stratos Network and configure it as a Blockchain Validator.
---

<small> Last update: July 22, 2023</small>

### Introduction

- There are NO REWARDS for running a validator in testnet. You should only run a validator if you want to learn about running a node, test your hardware, etc.
- Activating and becoming a validator on TestNet requires test tokens that have no real value. You can only acquire test tokens from the faucet or you can request them on Telegram / Discord.
- Activating and becoming a validator on MainNet requires real value tokens. <small><o>MainNet is not live at the moment.</o></small>

### Requirements

- A working Ubuntu 18.04+ installation with SSH access
- Decent hardware: 8 cores, 2.5GHz / core, 32 GB RAM, 2 TB free space available.
- Low latency and decent speed bandwidth: anything wired with 10MBps or higher. Don't setup on WiFi.

### Environment Setup

Login as a regular user for security reasons. Not recommended to run as root unless you know exactly what you're doing. If you don't have a regular user account, just open a terminal as root and type 

```sh
adduser john
```

set the password and press Enter for every question. Now open a SSH and login as that user.

!!! info
    Copy each command one by one and wait for the first one to finish before running the next one. I haven’t grouped every command in one line so you understand better what’s going on.

```sh
sudo apt update
sudo apt upgrade
sudo apt install build-essential curl tmux snapd libgmp3-dev flex bison --yes

wget https://crypto.stanford.edu/pbc/files/pbc-0.5.14.tar.gz
tar xfz pbc-0.5.14.tar.gz && cd pbc-0.5.14
./configure
make
sudo make install
sudo ldconfig

mkdir $HOME/bin 
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.profile 
source ~/.profile
```

Change the maximum amount of allowed opened files. Edit /etc/security/limits.conf:

```sh
sudo nano /etc/security/limits.conf
```

Add these lines at the end of the file, before # End of file.

```
*		hard	nofile		64000
*		soft	nofile		64000
```

If you reall, really want to run things as root, you will need to add these lines for root too:

```
root		hard	nofile		64000
root		soft	nofile		64000
```

Exit terminal and re-login through SSH or run su - your-username to apply settings. 

Check with:

```
ulimit -n
```

You should get a response of "64000", if you get any other response such as "1024", try rebooting the server.


### Download the executables

Run these commands, one by one, from a terminal, logged in as a regular user:


```
wget https://github.com/stratosnet/stratos-chain/releases/download/v0.10.0/stchaind -P $HOME/bin
chmod +x $HOME/bin/stchaind
```

Check files for integrity:

```
md5sum $HOME/bin/stchaind

# Expected response:
# e7e52a3831f8c22864badbf4c268adb5  /home/your-username/bin/stchaind
```

Verify installation:

```
stchaind version

# Expected response:
# v0.10.0
```


### Initialize the node

=== "TestNet"

    ```sh
    cd $HOME
    stchaind init MyNodeName --chain-id mesos-1
    ```

=== "MainNet"

    ```sh
    Unavailable at the moment.
    ```

Replace MyNodeName with the name you want to give your node. 

This step will create .stchaind folder and config files.

### Download config & genesis files

=== "TestNet"

    ```sh
    wget https://raw.githubusercontent.com/stratosnet/stratos-chain-testnet/main/config.toml -O $HOME/.stchaind/config/config.toml
    wget https://raw.githubusercontent.com/stratosnet/stratos-chain-testnet/main/genesis.json -O $HOME/.stchaind/config/genesis.json
    ```

=== "MainNet"

    ```sh
    Unavailable at the moment.
    ```

Get your external ip by running this command. Save the ip address for next step:

```sh
curl ifconfig.co
```

Open the config file

```sh
nano $HOME/.stchaind/config/config.toml
```

Find the following values and edit them accordingly:

```
# A custom human readable name for this node
moniker = "node"
```

Replace node with MyNodeName you used while initializing the node.


### Start the node

The node must be running at all times so we'll run it in a tmux window so it's running in the background even when you close your ssh terminal:

```sh
tmux new -s node
cd $HOME
stchaind start
```

Wait a few minutes, your node will probably get a list of errors such as these. It's normal, just wait somewhere between a few minutes to half an hour.

!!! info
			E[2023-04-05|15:01:34.535] Stopping peer for error                      module=p2p peer="Peer{MConn{3.114.5.73:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF
			E[2023-04-05|15:02:05.356] Stopping peer for error                      module=p2p peer="Peer{MConn{3.114.5.73:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF
			E[2023-04-05|15:02:35.337] Stopping peer for error                      module=p2p peer="Peer{MConn{3.114.5.73:26656} e3818948f8fff908c2db2e3cf73902e516998734 out}" err=EOF

After a while, you should start to see these messages:

!!! info

			I[2023-04-05|15:10:08.770] Executed block                               module=state height=462 validTxs=0 invalidTxs=0
			I[2023-04-05|15:10:08.773] Committed state                              module=state height=462 txs=0 appHash=0F1991858B4357756F969CFD3D3580649C2FAB70FC140BC27442E9A1E4815653
			I[2023-04-05|15:10:08.779] Executed block                               module=state height=463 validTxs=0 invalidTxs=0
			I[2023-04-05|15:10:08.782] Committed state                              module=state height=463 txs=0 appHash=6DF50E9BCAE47B59E4ED26FF3A7365A97BFC678EA09A68B16CDBD83AB59491E6

This means that the node has started to sync but it's going to take a while to reach the latest block height. As you can see in the example above, node has sync to height 463, you can check the latest height on <a href="https://explorer-mesos.thestratos.org/" target="_blank">Stratos Explorer</a>.

Leave the node running in background by detaching from tmux: 

Press and hold CTRL, then press B, release all keys and press D. Once in a while, you can check the node status by running this command:

```
stchaind status
```

and look for

!!! info
    "catching_up":false

When _catching_up_ shows false and _latest_block_height_ matches the one on Explorer page, you're ready to setup the node as Validator.

### Create a wallet

Once your node reaches the latest block height, run this command to generate a wallet address:

=== "TestNet"

    ```sh
    stchaind keys add WalletName --hd-path="m/44'/606'/0'/0/0" --keyring-backend=test
    ```

=== "MainNet"

    ```sh
    Unavailable at the moment.
    ```

You can enter anything you want for _WalletName_

Save the address , pubkey and mnemonic phrase for later use.

### Get some tokens from faucet

<small><o>Only available for TestNet</o></small>

Open a terminal and run:

```sh
curl --header "Content-Type: application/json" --request POST --data '{"denom":"stos","address":"st1xxx"} ' https://faucet-mesos.thestratos.org/credit
```

Replace st1xxx with the address you generated earlier.

!!! info
    Remember that faucet is limited to only a few requests per day.

You can check your wallet balance directly on the <a href="https://explorer-mesos.thestratos.org/" target="_blank">Stratos Explorer</a>  (just search for your st1xxx wallet address) or directly from terminal:

```
stchaind query bank balances st1xxx
```

## How to create a Validator

Once your node has reached the latest block height and you managed to gather enough tokens to become an active validator, follow these steps.

### Get a validator pubkey:

Run this command in a terminal:

```
stchaind tendermint show-validator
```

You should get reply like:

!!! info
    {"@type":"/cosmos.crypto.ed25519.PubKey","key":"31E7NyvztPzXoEAuxbqGiZ4LiwhJ1pQksbQp7cQVbnc="}

### Create the validator

Use the following command:

=== "TestNet"

    ```sh
    stchaind tx staking create-validator \
    --amount=10stos \
    --pubkey='{"@type":"/cosmos.crypto.ed25519.PubKey","key":"ZZZZZZZZZZZZZZZZZZ"}' \
    --moniker="MyNodeName" \
    --commission-rate=0.10 \
    --commission-max-rate=0.20 \
    --commission-max-change-rate=0.01 \
    --min-self-delegation=1 \
    --from=st1xxxxxxxxxxxxxxxxxxx \
    --chain-id=mesos-1 \
    --keyring-backend=test \
    --gas=auto \
    --gas-adjustment=1.5 \
    --gas-prices=1000000000wei -y
    ```

=== "MainNet"

    ```sh
    Unavailable at the moment.
    ```

In the above command, edit the following:

!!! info

    **amount**: enter the amount of stos you want to self-delegate

    **pubkey**: use the pubkey you got earlier

    **moniker**: use the MyNodeName you entered in config and for init

    **from**: replace st1xxxxx with your wallet address


You can delegate more tokens with this command (example for 10 tokens):

=== "TestNet"

    ```sh
    stchaind tx staking delegate stvaloper1zzzz 10stos \
    --from=st1xxxx \
    --chain-id=mesos-1 \
    --keyring-backend=test \
    --gas=auto
    --gas-adjustment=1.5    
    --gas-prices=1000000000wei
    ```

=== "MainNet"

    ```sh
    Unavailable at the moment.
    ```

Replace:

!!! info

    **10stos**: enter the amount you want to delegate

    **stvaloper1zzzz**: get your operator address by clicking your node name in <a href="https://explorer-tropos.thestratos.org/validators" target="_blank">Stratos Explorer</a>

    **st1xxxx**: replace with your wallet address

Have fun!

### Resources

<a href="https://github.com/stratosnet/sds/wiki/Tropos-Incentive-Testnet" target="_blank">Official Guide - Full Version</a>

<a href="https://github.com/stratosnet/stratos-chain/wiki/How-to-Become-a-Validator" target="_blank">Official Guide - How to become a validator</a>

