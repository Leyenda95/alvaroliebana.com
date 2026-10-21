---
layout: ../../layouts/PostLayout.astro
lang: en
title: What Midnight brings that is new
description: It is not about hiding everything, but about you deciding who sees what. And what changes when a blockchain is designed around selective disclosure.
date: 2026-10-15
---

In the [previous article](/blog/onchain-privacy) I went through the different ways blockchains try to add privacy. Most start from a public ledger and add a privacy layer on top, or hide everything and leave little room to verify anything. Midnight starts from a different premise, and that is what I find interesting. It also has a second idea that gets talked about far less: it is designed to cooperate with other networks, not to compete with them.

## Rational privacy

Midnight calls its model *rational privacy*. Data is private by default, and an application can reveal exactly what a specific interaction needs, to whoever needs it. Its documentation puts it well: it is not about hiding everything, but about you deciding who sees what.

That matters because the real world is not all or nothing. A bank has to show certain data to a regulator without publishing all its accounts. A shop wants to know what sells without knowing who bought it. Privacy coins cannot express that, and fully public chains cannot either.

That is why many use cases have never made it to blockchain, or only halfway, with the data kept on a company's server. These are exactly the cases Midnight opens the door to:

- **Confidential traceability.** Following a product from its origin to the shop, and paying each supplier along the way, without competitors seeing who you buy from or at what price.
- **Secret ballots.** Votes where anyone can check the result, without anyone knowing how each person voted.
- **Healthcare without exposing your records.** Proving you meet the requirements for a treatment or an insurance policy without showing your medical history.

## Selective disclosure, on two levels

### In the code

On Midnight, selective disclosure starts in Compact, the language of its smart contracts. A contract is split into three parts: what runs locally on your machine, the public state on the chain, and the circuit that connects the two.

The rule that changes how applications are designed is `disclose()`. Any value derived from private data has to be explicitly marked before it can be made public, whether it is stored on the chain, returned from a circuit or sent to another contract. If you forget, the compiler refuses to compile. Privacy is the default, and revealing is a deliberate decision you can see in the code.

Most alternatives have nothing like it. In Solidity, Ethereum's language, marking a variable as `private` only stops other contracts from reading it: anyone can read it from outside, just like the data you send in every transaction. And in general-purpose zero-knowledge languages such as Circom, it is the developer who decides by hand what leaves the circuit. Nothing warns them if a value computed from a secret ends up public.

On a public chain, whatever is exposed gets exploited within seconds. In 2020, two researchers at Paradigm tried to rescue around 12,000 dollars stuck in a Uniswap contract. Bots watching pending transactions spotted their move, copied it and took the money before them. They told the story in an article that became famous: *Ethereum is a Dark Forest*.

### On the chain

Almost every blockchain has a single public ledger: whatever is written in it, everyone sees, forever. Midnight has two.

The first is public, like on any other network: anyone can read and verify it. The second is private and does not even live on the chain, but on each user's device, with their data and their secrets. Between the two there is a bridge that only lets ZK proofs through. The network never sees your private data: it receives a proof that the data follows the rules, and that is enough.

A single application can move between both worlds: public tokens when transparency helps, shielded ones when it does not. And when regulation requires a look inside, *viewing keys* open only the door that is needed: an auditor can read specific shielded transactions without them becoming public to anyone else.

## Hybrid tokenomics: NIGHT and DUST

Most blockchains use a single token for everything: security, governance and fees. Midnight separates those functions.

- **NIGHT** is the public token, used for staking and governance.
- **DUST** is a shielded resource generated over time by holding NIGHT. It pays for transactions, cannot be transferred and decays when the NIGHT behind it is spent.

This design achieves two things. Fees are predictable, because they do not depend on the token's market price. And since DUST is shielded, using an application does not leave the same metadata trail that paying fees with a public token would.

## Built to cooperate, not to compete

The economics of almost every blockchain are designed to keep users in: to use Ethereum you need ETH, to use Solana you need SOL, and each network gains more the more users it captures. Midnight criticises that winner-takes-all mindset and proposes the opposite, what it calls *cooperative tokenomics*: being a privacy layer that any network can use, without its users changing network or token.

- **Pay with what you already have.** An Ethereum or Solana user will be able to use a Midnight application paying with their own token, without holding NIGHT or knowing what DUST is. Behind the scenes, someone who does hold NIGHT leases or sells them the DUST they are not using.
- **Listen to other networks.** Midnight will be able to react to what happens on other chains. For example, you lock ETH on Ethereum and, in return, receive the capacity to make transactions on Midnight.
- **Win when others win.** Part of those payments will go to Midnight's treasury. The network will do better the more other networks use it, not the more users it takes from them.

It is the same idea I described in the article on [abstraction](/blog/abstraction), applied to economics: users should not have to care which chain they are on, or which token they pay with.

## A final thought

For years, using a blockchain has meant choosing between two extremes: showing everything or hiding everything. Midnight proposes something much closer to how the real world works: private by default, always verifiable, and able to reveal just enough to whoever needs it.

It does not solve everything on its own. I always like to recall what Charles Hoskinson says in his book *Proving Nothing*: zero-knowledge proofs do not eliminate trust, they split it into smaller pieces, and a badly designed application can still leak information. But the starting point is the right one.

## References

- [Midnight docs: Compact as a privacy-first language](https://docs.midnight.network/concepts/how-midnight-works/compact-privacy-first-language)
- [Midnight docs: Explicit disclosure in Compact](https://docs.midnight.network/compact/reference/explicit-disclosure)
- [Midnight docs: Ledgers](https://docs.midnight.network/concepts/ledgers)
- Dan Robinson and Georgios Konstantopoulos, [*Ethereum is a Dark Forest*](https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest), Paradigm (2020)
- [Midnight tokenomics and incentives whitepaper](https://midnight.network/whitepaper)
- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
