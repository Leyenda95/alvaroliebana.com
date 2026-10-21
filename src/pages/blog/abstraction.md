---
layout: ../../layouts/PostLayout.astro
lang: en
title: "Abstraction: the user should never see the chain"
description: Account abstraction, chain abstraction and why the best blockchain is the one nobody notices.
date: 2026-10-13
---

Think about the last time you sent an email. You did not choose a mail server, pay a fee in a special currency or keep a 24-word phrase in a drawer. The protocol was there, but it was invisible.

Many blockchains still make people see every gear. You need a seed phrase, you need the network's own token to pay fees, and you need to know which chain your funds are on and how to move them to another. For anyone outside the industry, that is a wall. Abstraction helps us take that wall down and build a much cleaner experience.

That wall has several layers, and each kind of abstraction (account, chain or fees) tackles one. Underneath all three there is a question worth keeping in mind: when something becomes invisible, who are you trusting?

## Account abstraction

On Ethereum, a normal account is a key pair. Whoever has the private key has the account, and if you lose it, the account is gone. That account also has no rules: you cannot tell it, for example, that it can only sign payments of up to 20 euros a day. With a bank, a limit like that is normal. With a normal Ethereum account, it is not possible.

Account abstraction turns the account itself into a program with its own rules. That opens up things that feel obvious in any other app:

- **Recovering the account** without a seed phrase, for example with trusted contacts, passkeys or the fingerprint or face you use to unlock your phone.
- **Someone else paying the fees**, so a new user does not need to buy ETH before doing anything.
- **Several actions in one step**, such as approving and swapping in a single confirmation.
- **Limited permissions.** Picture a blockchain game: instead of confirming every move with your wallet, you authorise a "session key" at the start that, for one hour, can only make moves in that game and spend at most 5 euros. You play without interruptions, and if someone stole that key, they could not touch anything else.

Ethereum got there in two steps:

**ERC-4337 (2023): a workaround that leaves Ethereum untouched.** By design, Ethereum only accepts transactions signed by a normal key. ERC-4337 works around that without changing the network: your account becomes a smart contract, a *smart wallet* with your rules. Instead of sending a transaction, you send a request describing what you want to do. Services called *bundlers* send it to a shared Ethereum contract that checks each account's rules and executes them. The downside is that, because the protocol itself did not change, wallets created before this upgrade did not benefit from it: you needed a new wallet, with a new address.

**EIP-7702 (2025): upgrading the account you already have.** It came with the Pectra upgrade and changes things from inside the protocol. Your existing account can now "install" a program: it points to a smart contract, and from then on, whenever your address is used, that program's rules apply.

Does that mean you can recover your account without the seed phrase? Partly. If you set up other ways to authorise actions in advance, such as a passkey or trusted contacts, you could keep using your account even if you lost the phrase. But the original key still has the final word, and it cannot be revoked: if someone steals it, they have full control.

## Chain abstraction

The account abstraction we have just seen brings the web3 experience closer to web2, but inside each network separately. Assets and apps live on dozens of networks, and crossing from one chain to another means bridges, wrapped tokens and manually switching networks, and often wallets too. Chain abstraction aims for a single experience: one balance, one account, and the system works out where things happen.

There is no single technology behind it, but several pieces that work together. These are the main ones:

- **Intents.** Instead of describing every step, the user states the outcome ("swap 1 ETH for at least 3,000 USDC before 12:00") and a network of *solvers* competes to execute it, also across chains. Unlike the ERC-4337 request, which says exactly what to execute and on which network, an intent only describes the outcome and lets someone else choose the route. The idea became popular on Ethereum through protocols like CoW Swap and UniswapX, and today there is a standard for cross-chain intents, ERC-7683, backed by Uniswap and Across.
- **Accounts that sign on other chains.** One account controls addresses on several networks, and the signatures are produced by a network of nodes without any of them holding the full key.
- **Unified balances.** Services that show you one balance and one address, even if your funds are spread across several networks underneath. They usually depend on the infrastructure of the company that provides them.
- **Cross-chain messaging.** The protocols that let one network verify what happened on another. They are the foundation the other pieces rely on.

## Fee abstraction

There is a quieter kind of abstraction: hiding the cost of using the network. Sponsoring someone else's fees is not new. With ERC-4337, an app can already pay your fees through a contract called a *paymaster*, and many networks allow it. But the underlying model does not change: someone still pays for every transaction in the network's token, at its market price at that moment, and sponsorship depends on contracts and intermediaries added on top.

## State of the art

Ethereum has been adding abstraction in layers. After EIP-7702, the next one is EIP-8141, planned for 2027: each account will define at the protocol level how it signs and who pays, without bundlers. Intents are also being standardised through the Open Intents Framework, backed by the Ethereum Foundation.

Other networks were born with this philosophy. On Starknet and zkSync every account is programmable from the start, on Sui and Aptos you can create an account by signing in with Google, and NEAR lets an account control addresses on other networks through its *chain signatures*.

### Midnight

Midnight, on mainnet since March 2026, does not add abstraction on top: it builds it into the design. The most visible part is fees, which are not paid with its token, NIGHT, but with DUST, a resource generated by holding NIGHT. Spending it leaves no trail, and any app can pay it for its users without contracts or intermediaries. Zswap also brings intents into the protocol itself, and privately.

But the most interesting part is what it offers other networks. Most compete to keep their users in. Midnight wants to be the opposite: a privacy layer any network can use without its users changing network or token. A fabric that connects networks instead of competing with them.

## Trust does not disappear, it moves

Every layer of abstraction hides complexity, and complexity is usually where the risk lives. When a solver executes my intent, I am trusting the solver network. When a node network signs for me on another chain, I am trusting that network. That is not a reason to avoid abstraction, but it is a reason to know what each layer asks you to trust.

Charles Hoskinson makes the same point about zero-knowledge proofs in his book *Proving Nothing*: they do not eliminate trust, they decompose it into smaller pieces. Good abstraction works the same way. The user should not need to see the chain, but someone should always be able to check what is underneath.

## References

- [ERC-4337: Account Abstraction Using Alt Mempool](https://eips.ethereum.org/EIPS/eip-4337)
- [EIP-7702: Set Code for EOAs](https://eips.ethereum.org/EIPS/eip-7702)
- [EIP-8141: Frame Transaction](https://eips.ethereum.org/EIPS/eip-8141)
- [ERC-7683: Cross Chain Intents](https://eips.ethereum.org/EIPS/eip-7683)
- [Ethereum Foundation: Protocol Priorities Update for 2026](https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026)
- [Sui documentation: zkLogin](https://docs.sui.io/concepts/cryptography/zklogin)
- [NEAR documentation: chain abstraction](https://docs.near.org/chain-abstraction/)
- [Midnight docs: Sponsor transaction fees with DUST](https://docs.midnight.network/guides/dust-sponsorship)
- [Midnight docs: Zswap](https://docs.midnight.network/concepts/zswap)
- [Midnight tokenomics and incentives whitepaper](https://midnight.network/whitepaper)
- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
