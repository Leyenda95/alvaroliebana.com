---
layout: ../../layouts/PostLayout.astro
lang: en
title: "On-chain privacy: what it is, who is building it and how they differ"
description: Public ledgers made trust verifiable and everything visible. Here is how different networks try to fix the second part without breaking the first.
date: 2026-10-14
---

Bitcoin solved a hard problem: how to keep track of who owns each coin without needing a bank or anyone you have to trust. It did so by making every transaction public, and that transparency is what lets anyone verify the ledger, but it is also its greatest weakness.

A blockchain address is not your name, but it is not private either. As soon as someone links it to you, your whole history is in plain sight: what you received, what you spent, when and with whom. That is pseudonymity, not privacy. And chain analytics companies have built a business connecting those dots.

On-chain privacy is about keeping the verifiable part and hiding the rest.

## The main approaches

There is no single "privacy technology". Networks combine different tools, and each one hides different things and asks you to trust different things.

**Zero-knowledge proofs (ZK).** You prove something is true without revealing the data behind it: that a payment is valid without showing the amount, or that you are of age without showing your date of birth. The network checks the proof, not the data.

**Trusted execution environments (TEE).** The computation runs inside an isolated hardware enclave, so not even the machine's operator can read the data. In exchange, you trust the hardware manufacturer.

**Fully homomorphic encryption (FHE).** The computation runs directly on encrypted data, and only the final result is decrypted. Very powerful, but still expensive to run.

**Multi-party computation (MPC).** The computation is split across several independent computers, so none of them sees all the private data.

## Who is building it

**Privacy coins.** *Monero* makes privacy mandatory: it combines ring signatures, stealth addresses and confidential amounts so that sender, receiver and amount are hidden by default. *Zcash* uses zero-knowledge proofs (zk-SNARKs) and lets you choose between transparent and shielded transactions. Both focus on private payments, not general-purpose applications.

**Privacy tools on public chains.** Mixers such as *Tornado Cash* on Ethereum let you break the link between deposits and withdrawals.

**Programmable privacy with ZK.** This is the latest wave: not just private payments, but private applications. *Aztec* is building a privacy-focused layer 2 on Ethereum, with its own language, Noir, and a mainnet rolling out in phases since late 2025. *Aleo* is a layer 1 for private applications, with its language Leo. *Midnight*, on mainnet since March 2026, builds private smart contracts around selective disclosure: data is private by default, revealing anything is an explicit decision in the code, and fees are paid with a shielded resource that leaves no trail. I cover it in the [next article](/blog/what-midnight-brings).

**Confidential computing.** *Secret Network* and *Oasis Sapphire* run confidential smart contracts inside TEEs.

**FHE.** *Zama* brings fully homomorphic encryption to Ethereum smart contracts.

## How do they differ?

| Approach | What it hides | Programmable | What you trust |
|---|---|---|---|
| Privacy coins | Sender, receiver and amount | Payments only | The cryptography |
| Mixers | The link between deposit and withdrawal | No | The pool and its size |
| ZK platforms | Whatever each application decides | Yes | The proof system and its setup |
| TEE | Data during computation | Yes | The hardware manufacturer |
| FHE | Data during computation | Yes | The cryptography, at a high cost |

None of them is "the most private" in the abstract: each one hides different things and asks you to trust different things. So rather than looking for a winner, it is worth asking two questions: **what do you have to trust** and **what can you choose to reveal**.

## The two questions that matter

Zero-knowledge proofs do not eliminate trust, they break it down into smaller pieces: the initial setup, the programming language, witness generation, arithmetisation, the proof system, the cryptographic primitives and the on-chain verifier. Each one can fail in its own way, but each one is easier to audit than a single black box. That is why the best way to compare privacy networks is to ask which pieces you have to trust and whether anyone can check them.

The other question is what they let you reveal. The networks that will truly reach users and businesses will not be the ones that hide everything, but the ones that let you decide what to reveal. A shop does not need your entire purchase history to give you a discount. A bank does not need your whole financial life to know whether you can repay a loan. Proving just enough is the real promise of on-chain privacy.

## References

- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
- [Midnight docs: How privacy blockchains work](https://docs.midnight.network/concepts/how-privacy-blockchains-work)
- [Midnight docs: ZK vs FHE vs MPC](https://docs.midnight.network/concepts/zk-vs-fhe-vs-mpc)
- [Monero](https://www.getmonero.org) · [Zcash](https://z.cash) · [Aztec](https://aztec.network) · [Aleo](https://aleo.org) · [Zama](https://www.zama.ai)
