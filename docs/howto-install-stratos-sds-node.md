---
title: Setup a SDS Node
author: DevRawl
description: HowTo install and run a Stratos Decentralized Resource Node on Mesos Testnet and Mainnet.
---

<small> Last update: October 27, 2023</small>


## Rquirements

Running a SDS node requires the following resources:

- a linux server with ssh access
- proper port forward if you are behind a router 
- open port if firewall is active
- server should have a decent configuration: 

    | Type | CPU | RAM | Storage | Bandwidth | Stake |
    | ---- | --- | --- | ------- | --------- | ----- |
    | TIER 1 | 8 Cores[¹](#), 2.5GHz[²](#) | 16 GB | 4 TB | Up: 50Mbps Down: 100Mbps | 800 STOS |
    | TIER 2 | 16 Cores[¹](#), 2.5GHz[²](#) | 32 GB | 8 TB | Up: 100Mbps Down: 100Mbps | 1600 STOS |
    | TIER 3 | 32 Cores[¹](#), 2.5GHz[²](#) | 64 GB | 16 TB | Up: 1Gbps Down 1Gbps | 3200 STOS |

    <small> ¹ &nbsp;&nbsp; Can be achieved using dual CPU server configurations (eg. 2cpu x 8cores, as long as the frequency per core is respected).<br>
    ² &nbsp;&nbsp; 2.5GHz refers to Base Frequency, not Turbo/Boost Frequency. </small>

- <b>Software (tested version)</b>

    * Ubuntu 20.04
    * Go 1.19 linux/amd64 

!!! warning

    If you are behind router, you need proper port forwarding otherwise the node won't be able to start. 

    Check [this guide](../howto-setup-port-forward-firewall) and test your port forward setup before trying to install the node.
---

## Setup

!!! info
    Copy each command one by one and wait for the first one to finish before running the next one. 
    
    I haven’t grouped every command in one line so you understand better what’s going on.

Login to a terminal as a user (avoid using root) and install the prerequisites:

```sh
sudo apt install git build-essential curl tmux --yes
mkdir $HOME/bin
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.profile
source ~/.profile
```

Install go lang version 1.19. Currently, the compilation will fail with newer versions of go.

Check if you already have go installed:

```sh
go version
```

If you have a version newer than 1.19, remove it the same way you installed. For example:

```sh
sudo snap remove go
sudo apt remove golang-go
sudo rm -rf /usr/local/go
```

Install go 1.19:

```sh
wget https://go.dev/dl/go1.19.12.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.12.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile
source ~/.profile
go version
```

You should get `go version go1.19.12 linux/amd64`.

---

## Compile executables

Continue with these commands in terminal:

```sh
cd $HOME
git clone https://github.com/stratosnet/sds.git
cd sds
git checkout tags/v0.11.9
make build
cp target/ppd $HOME/bin
```

Test if ppd is setup correctly:

```
ppd version
```

should return:

!!! info
    v0.11.9

---

## Run config tool

Continue with these commands in terminal:

```sh
cd $HOME
mkdir rsnode
cd rsnode
ppd config -w -p
```

This will start the configuration tool

!!! info
    Enter password:  <span style="color:cyan">enter a password for the P2P key</span>
    
    Enter password again: <span style="color:cyan">re-enter a password for the P2P key</span>
    
    Enter wallet nickname: <span style="color:cyan">enter a wallet name (wallet1 for example)</span>
    
    Enter password: <span style="color:cyan">enter a password for the wallet</span>
    
    Enter password again: <span style="color:cyan">re-enter a password for the wallet</span>
    
    input bip39 mnemonic: <span style="color:cyan">press enter for a new wallet or paste the 12 words if you want to recover a wallet</span>
    
    input hd-path for the account <span style="color:cyan">press enter</span>
    
    save wallet password to config file: <span style="color:cyan">press Y and enter</span>

Result:
!!! note ""

    finished changing configuration file **WalletAddress: st1xxxxxx** < save this for later

---

## Edit the configuration file

Find your external ip with this command:

```
curl ifconfig.co
```

Save the resulting IP address for later. Now open the config file:

```
nano $HOME/rsnode/configs/config.toml
```

Make the following edits:

```sh
# IP address of the node. Eg: "127.0.0.1"
network_address = 'external.ip.from.curl.ifconfig'

```

Save the file by pressing CTRL + X , then Y and Enter.

---

## Starting the node

Your node should be running at all times so we will open it in a tmux window so it keeps running even after you close your SSH termina.

```sh
tmux new -s sds
cd $HOME/rsnode
ppd start
```

!!! tip
    To detach from this window, Press (and hold) CTRL, then press B and release both, then press D.

Your node is now running in the background. To re-attach to it, run:

```
tmux attach-session -t sds
```


 

## Activate node

You will interact the node through a custom terminal. Detach from the previous tmux or open a new SSH connection and run these commands:

```sh
cd $HOME/rsnode
ppd terminal
```

In this terminal, run the following commands to activate a resource node:

Replace 1600 with the amount specific for your intended tier:

- Tier1 - 800stos
- Tier2 - 1600stos
- Tier3 - 3200stos

```
rp
activate 1600stos 0.01stos
```

Your node should start mining on its own or you can try after a few minutes to run:

```
startmining
```

Wait for a minute or so and run

```
status
```

This will return a reply such as the following, pointing out that everything is working fine: 

!!! info ""
    Activation: Active | Registration Status: Registered | Mining: ONLINE | Initial tier: 1 | Ongoing tier: 1 | Weight score: 5010

---

## Support

If you run into any issues, you can find support on:

<a href="https://discord.com/invite/tpQGpC2nMh" target="_blank">Discord</a>

<a href="https://t.me/StratosCommunity" target="_blank">Telegram</a>