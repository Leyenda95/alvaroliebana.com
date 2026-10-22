---
layout: ../../layouts/PostLayout.astro
lang: en
title: "Quinelings: AI decisions that prove themselves"
description: Charles Hoskinson introduces creatures made of code that keep every step of a task. What they are, how they work and what they could bring.
date: 2026-10-21
---

On 19 October 2026, Charles Hoskinson introduced Quinelings with a striking line: "self-replicating digital lifeforms made entirely of code". Behind the animated creatures there is a much more practical idea: turning an AI agent's task into something you can keep, examine and run again. Not that this is impossible today: a company can already keep a log of what its agent does. What changes is who you have to trust to believe it.

## What a quine is

Let's start at the beginning. A normal program takes a task and returns a result. A *quine* is a program whose result is its own code: you run it and it produces exactly the text it was written with. It is like a recipe that, when you follow it, gives you a copy of the recipe itself as the dish.

Here is an example in Python, just two lines long:

```python
s = 's = %r\nprint(s %% s)'
print(s % s)
```

And this is what it returns when you run it:

```
s = 's = %r\nprint(s %% s)'
print(s % s)
```

Exactly the same text. The trick is that the program keeps a template of itself in `s` and fills it in with its own content: `%r` inserts the text of `s` as it is, in quotes, and `%%` becomes a single `%`. There are several ways to do it, but this is the simplest.

In 1984, Ken Thompson used a quine to show that you cannot trust a program just because you have read its code. Quinelings use the same idea for the opposite purpose: being able to check what it does.

## What a Quineling is

A Quineling is a task packaged into a small program that you can run, open to see every step, and copy without losing anything. It has two parts:

- **The instructions.** The steps of the task, written by a person or by an AI agent in its own format, QDL, which forces you to declare the goal, the inputs, each step and the result.
- **The body.** An animated creature generated mathematically from those instructions, where each region belongs to a step. Selecting a region shows the values that step used and the result it produced.

Because it is a quine, it can generate its own complete code, as we saw in the example above. With that code, anyone can rebuild exactly the same Quineling and run it with new data, without depending on its creator's server or permission. Today, the explanation of what an agent did lives in the systems of whoever runs it; a Quineling carries it with it. That code can also be downloaded as a "genome", a file of numbers or colours, built on the same idea as a QR code, from which the exact program can be recovered. The creature's drawing, on the other hand, does not hold the code and only helps you find your way around the program.

That is why Hoskinson presents them as "living thoughts".

## Why "lifeforms"

It is a metaphor, like when we call certain programs "viruses". Quinelings share traits with living things:

- **They have a body:** the animated creature.
- **They have DNA:** the code that defines everything.
- **They reproduce:** they generate exact copies of themselves.
- **They have offspring:** two Quinelings can be combined to create a new one.

Metaphors aside, they are programs that can rebuild themselves, with a drawing that represents them, and that can be combined to create new programs.

## What they are for: an example

Imagine a shop asks its AI agent how much coffee to order. Today the answer would be a piece of text: "Order 120 kg, sales are up and it is worth keeping a margin". It may be right, but to know where it comes from you would have to trust whoever runs the agent.

With a Quineling, the agent delivers the decision together with the calculation that produces it:

- **Data:** sales over the last four weeks, 90, 95, 100 and 115 kg, supplied by the shop.
- **Rule:** use the average plus a 20% margin.
- **Steps:** average = 100 kg → × 1.2 = 120 kg → minus current stock.

Selecting "120 kg" shows exactly where it comes from. You can change the margin and run it again, or pass the Quineling to another shop so it applies the same rule to its own sales. The explanation and the calculation are the same thing. A company could keep that calculation in its logs, but you would have to believe it is the one it used; here anyone can repeat it and get the same result. If you want to try it, the example on the website that adds up three water readings is the best place to start.

## The Ranch: combining Quinelings

In the Ranch, two Quinelings can have offspring. One way is to chain them: the result of one becomes an input for the other. If one calculates the kilometres of a trip and the other the fuel cost per kilometre, the offspring directly calculates how much the trip costs. They only combine if they fit: the data type and the unit have to match, so kilometres can only go where kilometres are expected.

## And in Midnight City?

The new Quinelings website already links to Midnight City, Midnight's city populated by autonomous AI agents, but how the two will connect has not been published yet. What follows is how I imagine it.

Since its second version, in July 2026, each user gives their agent a general goal, such as accumulating minerals, and the agent decides the steps to get there. The natural next step would be for those decisions to be made as Quinelings: instead of simply accepting a job or making a payment, the agent would deliver the calculation that led it there, and anyone could inspect and repeat it. The Ranch would fit too: two agents could combine their strategies to create a new one, as long as the data fits.

And this is where Midnight could take it further. A Quineling shows everything: the data, the rule and every step. In a city where agents handle their owners' money and data, that is not always acceptable. With Midnight's tools, an agent could:

- **Prove without revealing.** Generate a zero-knowledge proof that it ran its Quineling exactly as written, without revealing its data or its strategy, which competitors could exploit. This is the genuinely new part: until now, auditing a decision meant seeing its data.
- **A sealed rule.** Publish a fingerprint of its Quineling on the chain before deciding. A log can be kept today, but whoever keeps it can change it; that fingerprint cannot be rewritten by anyone, not even its creator.
- **Everyone sees their share.** The agent's owner would see the full Quineling, while an auditor would only see the steps they need to review. And everyone else, only the proof that it was followed.

In short: on one hand, Quinelings make a decision checkable. On the other, Midnight makes it checkable without showing everything. Together, your agent could explain every decision to you without telling the whole city.

## Why it matters

More and more decisions will be made by AI agents, and today we trust them almost blindly: an answer and a text explanation, with no simple way to check that the explanation really matches what they did. A Quineling does not show what the model thought internally, but the instructions it declares, and it guarantees they run exactly as stated. The explanation and the calculation become the same thing.

None of these pieces is impossible on its own. What is new is that checking a decision no longer depends on trusting whoever runs the agent, and starts depending on mathematics. It is the idea running through this whole blog: it is not about trusting, but about being able to check. If an agent is going to decide for us, we need to be able to see how it did it.

## References

- [Official Quinelings website](https://charleshoskinson.github.io/quinelings/index.html)
- [Quinelings repository on GitHub](https://github.com/CharlesHoskinson/quinelings)
- [Quinelings Agent SDK](https://charleshoskinson.github.io/quinelings/sdk.html)
- Charles Hoskinson, [announcement on X](https://x.com/IOHK_Charles/status/2112276565925179638) (19 October 2026)
- [Midnight City V2](https://midnight.network/blog/deploy-agents-into-midnight-city-v2)
- Ken Thompson, [*Reflections on Trusting Trust*](https://dl.acm.org/doi/10.1145/358198.358210) (1984)
