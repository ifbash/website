---
title: What an AI agent actually costs to run
description: >-
  Everyone quotes a build price. Almost nobody quotes the running cost, and the
  arithmetic is not obvious — the conversation you resend every turn is where
  the money goes. Here is the full calculation, including the caching setting
  that silently does nothing.
date: '2026-07-25'
updated: '2026-07-25'
author: ifBash
tags:
  - AI Agents
  - Cost Engineering
  - Claude
published: true
---

A proposal for an AI agent usually has a build price and a go-live date. It
rarely has the number the finance director actually asks for three months later:
what does this cost per month, forever?

That number is calculable before you build anything. Here is how.

## The part people get wrong

The intuitive model is "messages × price per message". That undercounts, often
by a factor of three or four, because a language model has no memory between
calls. Every turn resends the entire conversation so far.

Turn one sends the system prompt plus one question. Turn six sends the system
prompt plus five previous questions plus five previous answers plus the new
question. The input grows on every turn while the output stays roughly flat.

For a six-turn conversation with a 600-token system prompt, roughly 60 tokens
per question and 250 per answer, the input side totals about 8,600 tokens — not
the ~4,000 a per-message estimate suggests.

## Running the numbers

Using Anthropic list prices as of July 2026, for that same six-turn
conversation at 2,000 conversations a month:

| Model | Per conversation | Per month |
|---|---|---|
| Haiku 4.5 | ~$0.016 | ~$32 |
| Sonnet 5 | ~$0.048 | ~$97 |
| Opus 5 | ~$0.068 | ~$136 |

Two things follow immediately.

**The model choice is most of the decision.** Not the prompt, not the
architecture — the model. A support agent answering scripted questions from a
short system prompt does not need the expensive one, and the gap is 4x.

**The absolute numbers are small.** A support agent handling 2,000
conversations a month costs less than most teams' coffee budget. The risk in
these projects has never really been the token bill; it is building the wrong
thing, or building something nobody can maintain. Be suspicious of any proposal
where inference cost is presented as the main commercial consideration.

## The setting that silently does nothing

Prompt caching lets a model re-read a fixed prefix — your system prompt, your
tool definitions — at roughly a tenth of the normal input rate. It is the first
optimisation everyone reaches for.

It has a minimum. If your cacheable prefix is shorter than the model's floor,
the cache marker is simply ignored. No error. No warning. No saving.

Those floors differ per model, and they are not intuitive:

- Opus 5 — 512 tokens
- Sonnet 5 — 1,024 tokens
- Haiku 4.5 — 4,096 tokens

So a 600-token system prompt caches on Opus, and does nothing at all on Haiku or
Sonnet. Teams routinely ship caching, see no change in the bill, and conclude
caching does not work. It works; the prefix was too short to qualify.

If caching matters to your economics, the fix is usually to move more stable
content into the cached prefix — tool definitions, retrieval instructions,
few-shot examples — until it clears the floor. That is a design decision, not a
config flag.

## What actually moves the number

In rough order of impact:

1. **Model selection.** Route by task. Most agents have one hard path and
   several easy ones; they do not all need the same model.
2. **Conversation length.** Because history compounds, an agent that resolves in
   four turns costs far less than one that resolves in ten — and it is a better
   experience anyway.
3. **Context discipline.** Everything you attach is paid for on every subsequent
   turn. Retrieval that returns ten documents when two would do is a recurring
   cost, not a one-off.
4. **Caching**, once the prefix is genuinely over the floor.

## Work it out for yourself

We put the whole calculation behind sliders on our
[AI engineering page](/services/claude-ai-engineering) — move it to your own
volume and conversation length and watch the models diverge. The assumptions are
printed underneath it, because a number you cannot interrogate is not worth
much.

None of this replaces measuring your real traffic. It does mean the order of
magnitude should never be a surprise, and that anyone quoting you an agent
without a per-interaction cost has not finished the engineering.
