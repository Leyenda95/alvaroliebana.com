---
layout: ../../layouts/PostLayout.astro
lang: en
title: "Where is our data? The everyday moments we give our privacy away"
description: We rarely lose our privacy in one big moment. We lose it in small, ordinary acts that nobody notices. Blockchain could give us back control, if it stops showing everything.
date: 2026-10-16
---

When we think about losing our privacy, we imagine a hack or a leak, something dramatic that happens to us. In reality, most of our data slips away in small, ordinary moments, and almost always with our consent, given with a click we do not remember.

And yet we already have a technology designed to give people back control. Blockchain lets you own something without depending on an intermediary and check that the rules are followed without trusting anyone. The problem is that the first networks were designed to show everything. At the end of this article we will look at the new generation of networks on its way to fix that.

These are the moments where, in my experience, we give away the most.

## When we pay

Every card payment links a name to a place, a time, an amount and, more and more, to what we bought. Add a loyalty card and the shop knows your full basket, every week, for years. That history says a lot: whether you have children, whether you are on a diet, when you get paid, when money is tight.

Or whether you are pregnant. In 2012, *The New York Times* told how the retailer Target had learned to detect pregnancies from seemingly harmless purchases, such as unscented lotion or calcium supplements. According to the article, a father stormed into a store, angry that they were sending his teenage daughter coupons for baby clothes and cribs. Days later he called to apologise: his daughter was pregnant, and he had not known.

It does not always stay in the shop. In 2014, the US Federal Trade Commission (FTC) studied nine large data brokers and described an industry that collects billions of data points on nearly every consumer, mostly without their knowledge. One of them held around 3,000 different data points on *each* person, covering almost every American. Purchase data is one of their main sources.

This is the problem that led me to retail. Shops need to understand demand, and shoppers should not have to hand over their lives in return.

## When we carry our phones

Your phone is the most detailed diary ever kept, and you are not the one writing it. Location is the most sensitive part: where you sleep, where you work or which medical clinic you visit.

It is often collected by apps that have nothing to do with location, such as a flashlight app or a game, through the advertising code built into them. In 2024, the FTC took action against several companies, including X-Mode, InMarket, Gravy Analytics and Mobilewalla, for buying and selling this kind of location data, in some cases from sensitive places, and with weak or no consent.

## When we see an ad

Many ads are chosen in an auction that takes milliseconds while a page loads. To run that auction, information about you and your device, such as the page you are on, your approximate location or even labels like "new parent", "interested in travel" or "prone to depression", is sent to many potential buyers. Only one wins the auction and shows its ad, but all the others have already received your data. Some companies have built profiles just by listening to these auctions.

## When we browse and share

Cookies, trackers and social media buttons let companies follow us from site to site. Social networks add what we tell them ourselves: our photos, our friends, our opinions, how long we look at each post.

## When we look after our health

Fitness apps, period trackers, smartwatches and connected scales collect some of the most intimate data there is. Outside healthcare, that data does not always get the same protection as a medical record.

## When we use a public blockchain

The most widely used blockchains are public: every transaction is visible to anyone, forever. Addresses do not carry your name, but once one is linked to your identity (when you buy on an exchange, pay in a shop or register a name like alvaro.eth), anyone can rebuild your balance and your whole history. In 2018, researchers at Princeton University showed that the trackers on online shops could do exactly that: they found a customer's crypto payment on the chain and linked it to their cookies. And because the chain never forgets, it worked on past payments too.

That is why many of the best use cases for blockchain have been left on the shelf. No company wants its competitors to see which suppliers it pays and how much. Nobody wants their colleagues to see their salary. And no hospital can publish a medical record, not even encrypted, because what is secure today could be decrypted tomorrow, and the chain keeps it forever.

The law does not allow it either. The GDPR gives you the right to have your data erased, and a public chain cannot erase anything. European data protection authorities made it clear in their blockchain guidelines: personal data is best kept off-chain. So we have a technology that could solve many of the problems we have just seen, and we cannot use it where it is needed most.

## The new generation: prove, don't hand over

Most of these moments where we lose privacy ask for far more data than they need. A bar needs to know you are of age, not your date of birth or your address. A shop needs to know what sells, not who bought it.

That is the idea behind selective disclosure: proving exactly what is needed and nothing more. And it is opening a new era of privacy in blockchain, with networks going after that gap: the use cases a public chain cannot touch without falling back on centralised intermediaries. Zcash has spent years showing that private payments are possible. Midnight, designed from scratch around this idea, takes it beyond payments to its contracts: data is private unless it is explicitly disclosed, and you can prove something, to a regulator for example, without showing anything else.

If we get there, the change will go far beyond crypto: a safer internet, where data belongs to people again and where the shop, the bar or the bank get exactly what they need, and nothing more.

Privacy should not depend on reading every privacy policy, but on systems that never ask for more than they need.

## References

- Charles Duhigg, [*How Companies Learn Your Secrets*](https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html), *The New York Times Magazine* (2012)
- US Federal Trade Commission, [*Data Brokers: A Call for Transparency and Accountability*](https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014) (2014)
- Jon Keegan and Joel Eastwood, [*From Heavy Purchasers of Pregnancy Tests to the Depression-Prone: We Found 650,000 Ways Advertisers Label You*](https://themarkup.org/privacy/2023/06/08/from-heavy-purchasers-of-pregnancy-tests-to-the-depression-prone-we-found-650000-ways-advertisers-label-you), *The Markup* (2023)
- Goldfeder, Kalodner, Reisman and Narayanan, [*When the cookie meets the blockchain: Privacy risks of web payments via cryptocurrencies*](https://petsymposium.org/popets/2018/popets-2018-0038.php) (2018)
- European Data Protection Board, [*Guidelines 02/2025 on processing of personal data through blockchain technologies*](https://www.edpb.europa.eu/system/files/2026-07/edpb_guidelines_202502_blockchain_v2_en.pdf) (2026)
- [Midnight docs: Compact as a privacy-first language](https://docs.midnight.network/concepts/how-midnight-works/compact-privacy-first-language)
- [General Data Protection Regulation (GDPR)](https://gdpr-info.eu)
