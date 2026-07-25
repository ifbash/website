---
title: Never let the model choose the priority
description: >-
  A language model can read a ticket better than a keyword rule ever will. It
  should still not be the thing that decides P1 or P3 — because ServiceNow
  already derives that, deterministically, and handing it to a model breaks
  something your service desk depends on.
date: '2026-07-25'
updated: '2026-07-25'
author: ifBash
tags:
  - ServiceNow
  - AI Agents
  - ITSM
published: true
---

Ask an LLM to triage a support ticket and it will happily return a priority.
Ask it twice and you may get two different answers. Ask it about a ticket
written in frustrated capitals and it will tend to inflate.

That is not a prompt problem. It is a design mistake, and it is worth being
precise about why — because the fix also explains where AI genuinely belongs in
ITSM.

## Priority is derived, not decided

In ServiceNow, priority is not an opinion. It falls out of a matrix:

| | Urgency High | Urgency Medium | Urgency Low |
|---|---|---|---|
| **Impact High** | P1 Critical | P2 High | P3 Moderate |
| **Impact Medium** | P2 High | P3 Moderate | P4 Low |
| **Impact Low** | P3 Moderate | P4 Low | P5 Planning |

Impact is how much of the business is affected. Urgency is how fast it must
move. Feed those two in, and priority comes out — the same way, every time, for
every ticket, auditable after the fact.

Your SLAs hang off that value. So do escalation rules, major-incident triggers,
and half your reporting. It is one of the few genuinely deterministic things in
a service desk, and that determinism is a feature.

Ask a model for the priority directly and you have replaced a rule your auditors
can inspect with a judgement nobody can reproduce.

## Split the job properly

The two halves of triage are not the same kind of work.

**Judging impact and urgency is a reading task.** It needs comprehension: does
"nobody on the third floor can print" mean one person or forty? Does "month-end
today" imply a deadline? Is "this is the third time I'm raising this" a
statement about scope, or about how annoyed someone is? Keyword rules are bad at
this. Models are good at it.

**Turning those two values into a priority is a lookup.** Nine cells. It belongs
in code, where it is version-controlled and testable.

So the model returns impact and urgency, and the platform applies the matrix.
You get the comprehension benefit without giving up reproducibility. When
someone asks why a ticket became P1, the answer is "impact 1, urgency 1" — and
the reason those were set is a sentence the model recorded, not a black box.

## Tone is not urgency

This is the failure mode worth designing against explicitly.

Consider: *"This is the third time I'm raising this. The system is slow. Nobody
has come back to me and I'm considering going to the CIO."*

Every escalation signal in that message is about **service quality**, not
**blast radius**. One person, one degraded system, no stated deadline. That is
not a P1. It may well be a complaint that deserves a manager's attention, but
inflating its priority pushes it past genuinely business-stopping work.

An unconstrained model reads the anger and escalates. Tell it explicitly that
impact and urgency are judged separately, and that tone is not evidence of
either, and it stops. That single instruction does more for triage accuracy than
any amount of prompt polishing.

## What good looks like

A triage agent worth deploying should, for every ticket:

- return **impact** and **urgency** separately, with a one-line reason for each
- return a **category and assignment group**, so the ticket lands in the right
  queue first time
- draft a **first response** that acknowledges the specific situation without
  promising a fix time
- say plainly when a ticket is **too vague to classify**, rather than inventing
  detail to fill the fields

And it should never return a priority. The platform does that.

## The measurable win

The gain here is not "faster resolution" in the abstract. It is narrower and
more defensible: **the reassignment that never happens.**

Most slow tickets were not worked slowly. They sat in the wrong queue for a day
first, because whoever skimmed them at 9am was skimming forty others. Correct
classification on arrival removes that hop. It is unglamorous, it is where the
time actually goes, and unlike most AI claims it is directly countable in your
own instance — count reassignments before, count them after.

We put a working version of this on our [work page](/work). Paste in a real
ticket — messy, angry, vague, whatever you actually receive — and watch it get
classified. The priority you see is computed from the matrix, in code. The model
never picks it.
