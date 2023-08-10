---
title: Setup a Full-Chain Node
author: DevRawl
description: HowTo install a Full-Chain node on Stratos Network and configure it as a Blockchain Validator.
---

<small> Last update: July 22, 2023</small>


<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fHirnLca1Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>


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
sudo apt install build-essential curl tmux libgmp3-dev flex bison --yes

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

### Enable State Sync

- Get the last block height

```shell
curl -s http://rpc-mesos.thestratos.org/block | jq -r '.result.block.header.height'
```

```
Example response:
326121
```

- Get the hash for the block

Since snapshots are generated every 1,000 blocks, you'll need to obtain the hash for the block number at 1,000-interval heights. 

For example, in the above response we got `326121` so we will need to request the hash for height `326000`.

If latest block would have been `374521`, we will request the hash for `374000` and so on.

Always use the most recent block height, rounded down to the nearest lower multiple of 1,000.

```shell
curl -s http://rpc-mesos.thestratos.org/block?height=326000 | jq -r '.result.block_id.hash'
```

```
Example response:
C524665A353CB6C5E03D4B73B3151FA00862704A0966E01C5E97F1DE1B08B1B4
```

- Setup config.toml

Edit the state sync section of `.stchaind/config/config.toml` as follows:

Remember to use the latest height rounded down to last 1,000 round number and its hash.

```toml
#######################################################
###         State Sync Configuration Options        ###
#######################################################
[statesync]
# State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine
# snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in
# the network to take and serve state machine snapshots. State sync is not attempted if the node
# has any local state (LastBlockHeight > 0). The node will have a truncated block history,
# starting from the height of the snapshot.
enable = true

# RPC servers (comma-separated) for light client verification of the synced state machine and
# retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding
# header hash obtained from a trusted source, and a period during which validators can be trusted.
#
# For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2
# weeks) during which they can be financially punished (slashed) for misbehavior.
rpc_servers = "35.160.97.156:26657,rpc-mesos.thestratos.org:80"
trust_height = 326000
trust_hash = "C524665A353CB6C5E03D4B73B3151FA00862704A0966E01C5E97F1DE1B08B1B4"
trust_period = "168h0m0s"

# Time to spend discovering snapshots before initiating a restore.
discovery_time = "15s"

# Temporary directory for state sync snapshot chunks, defaults to the OS tempdir (typically /tmp).
# Will create a new, randomly named directory within, and remove it when done.
temp_dir = "./tmp"

# The timeout duration before re-requesting a chunk, possibly from a different
# peer (default: 1 minute).
chunk_request_timeout = "10s"

# The number of concurrent chunk fetchers to run (default: 1).
chunk_fetchers = "4"
```

- Edit your node name

Find the following values and edit them accordingly:

```
# A custom human readable name for this node
moniker = "node"
```

You can save and close the `config.toml` file.

- Disable JSON-RPC

The EVM RPC will prevent your node from starting using state sync, so you can temporarily disable it by editing `.stchaind/config/app.toml`:

You can re-enable it once node's sync is up to date (node restart required).

```
[json-rpc]
# Enable defines if the gRPC server should be enabled.
enable = false
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

```
{"level":"info","server":"node","module":"statesync","format":1,"height":326000,"time":"2023-08-10T21:35:36Z","message":"Discovered new snapshot"}
{"level":"info","server":"node","module":"statesync","format":1,"height":325000,"time":"2023-08-10T21:35:36Z","message":"Discovered new snapshot"}
{"level":"info","server":"node","module":"statesync","format":1,"height":326000,"time":"2023-08-10T21:35:53Z","message":"Snapshot accepted, restoring"}
```

After a while, you should start to see these messages:

```
{"level":"info","server":"node","module":"state","app_hash":"3F44580F60F95CADA57D2532B77894D101A30C841D197A8F972D0CEB6DBC4F2A","height":329687,"num_txs":0,"time":"2023-08-10T21:36:15Z","message":"committed state"}
{"level":"info","server":"node","module":"txindex","height":329687,"time":"2023-08-10T21:36:15Z","message":"indexed block exents"}
{"level":"info","server":"node","module":"state","height":329688,"num_invalid_txs":0,"num_valid_txs":0,"time":"2023-08-10T21:36:15Z","message":"executed block"}
{"level":"info","commit":"","time":"2023-08-10T21:36:15Z","message":"commit synced"}
{"level":"info","server":"node","module":"state","app_hash":"3EEAF7EA60E7E83CDE5DAB49E9E65C2D34D2B7DE24127C0792F2036410CAE690","height":329688,"num_txs":0,"time":"2023-08-10T21:36:15Z","message":"committed state"}
{"level":"info","server":"node","module":"txindex","height":329688,"time":"2023-08-10T21:36:15Z","message":"indexed block exents"}
{"level":"info","server":"node","module":"state","height":329689,"num_invalid_txs":0,"num_valid_txs":0,"time":"2023-08-10T21:36:15Z","message":"executed block"}
{"level":"info","commit":"","time":"2023-08-10T21:36:15Z","message":"commit synced"}
```

This means that the node has started to sync but it's going to take a bit to reach the latest block height. You can check the latest height on <a href="https://explorer-mesos.thestratos.org/" target="_blank">Stratos Explorer</a>.

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

<a href="https://docs.thestratos.org/docs-stratos-chain/setup-and-run-a-stratos-chain-full-node/" target="_blank">Official Guide - Full Chain Node</a>

<a href="https://docs.thestratos.org/docs-stratos-chain/how-to-become-a-validator/" target="_blank">Official Guide - How to become a validator</a>

