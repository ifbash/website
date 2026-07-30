---
title: 'Scoped or global: why your ServiceNow app broke on upgrade'
description: >-
  A custom application built in global scope works perfectly until the first
  platform upgrade, and then costs more to repair than it did to build. The choice
  is made in the first hour of development and is very hard to reverse afterwards.
date: '2026-07-30'
updated: '2026-07-30'
author: ifBash
tags:
  - ServiceNow
  - App Engine
  - Custom Apps
published: true
---

There is a particular conversation that happens after a ServiceNow upgrade. A
custom application that has worked for two years stops working, or starts
behaving strangely in ways nobody can reproduce reliably. The team that built it
has moved on. The documentation, if it exists, describes what the application
does rather than why it was built the way it was.

Almost always, the root cause was decided in the first hour of development, by
someone choosing global scope because it was the path of least resistance.

## What scope actually changes

A scoped application runs inside a boundary. It gets its own namespace, and
crucially it can only reach outside that boundary through interfaces the platform
explicitly supports. Global scope has no such boundary — code can read and write
anything, extend core tables directly, and call internal functions that were
never intended as a public interface.

That difference sounds like a restriction, and during development it feels like
one. It is the entire reason scoped applications survive upgrades.

When the platform upgrades, supported interfaces are maintained. Their behaviour
is documented, deprecation is announced, and changes are managed. Internal
functions carry none of those guarantees. They are internal precisely so they can
change, and they do — usually without any announcement, because from the
platform's point of view nothing public changed at all.

A global application that depends on internal behaviour is depending on something
nobody promised to keep stable.

## Why global scope keeps getting chosen anyway

Not through carelessness. There are three recurring reasons, and two of them are
understandable.

**It is faster on day one.** Scoped applications require you to work out the
supported way to do something. Global scope lets you do it the direct way. When
the deadline is close and the requirement is small, the direct way wins.

**The requirement genuinely spans the platform.** Some applications need to
reach into core tables in ways that scoped applications find awkward. This is a
real constraint, not an excuse — but it is far rarer than the frequency of global
applications suggests.

**Nobody made a decision at all.** This is the most common reason. Development
began in global scope because that is where a quick experiment starts, the
experiment became useful, and the useful thing went to production without anyone
revisiting the question. There is no decision to point at, which is also why
there is no documentation explaining it.

## Extend task, or create a standalone table?

The second decision, and it is separate from scope.

Extending `task` inherits a great deal of platform behaviour for nothing: SLAs,
approvals, assignment, work notes, the activity stream. For anything that looks
like a piece of work moving through states, this is usually correct and saves
substantial effort.

It also inherits every field on `task`, including ones your application has no
use for, and it means your records live in a table that many other things query.
On a large instance that has performance implications, and it makes your data
model harder to reason about because most of the columns are irrelevant to you.

A standalone table gives a clean model that reflects exactly your domain, and
requires you to rebuild whatever `task` already does that you need.

The heuristic we use: **if the thing has an assignee and moves through states,
extend `task`. If it is reference data, configuration, or a record that is read
far more often than it is worked, make it standalone.** What matters most is that
it is decided per application rather than by habit, because both defaults are
wrong about half the time.

## The governance problem low-code creates

Everything above concerns applications built by people who know the platform. The
other failure mode arrives when low-code tooling is put in front of business
teams without a review step.

The output is predictable: a large number of small applications, each owned by
whoever happened to build it, several of which do overlapping things, some of
which hold production data, and none of which anybody wants to maintain. This is
not an argument against citizen development — it is an argument that citizen
development without a gate produces technical debt with a friendly interface.

The gate does not need to be heavy. A short review before anything reaches
production, checking three things, catches most of it:

- Does something already exist that does this?
- Is it scoped, and if not, why not?
- Who owns it in six months?

That third question eliminates a surprising number of applications before they are
built, which is the cheapest possible time to eliminate them.

## If you have inherited a global application already

Rewriting is not automatically the answer, and the honest calculation depends on
things specific to your instance.

Start by finding out what it actually depends on. An application in global scope
is not necessarily using unsupported interfaces — it just has permission to. If
it happens to use supported APIs throughout, converting it to scoped is
substantially less work than a rewrite, and the constraint becomes a safety net
rather than an obstacle.

If it does depend on internal behaviour, you have a choice between rewriting it
and accepting that every upgrade carries a testing burden and some risk. That is
a legitimate decision to make deliberately — some applications are not worth
rewriting — but it should be a decision with a cost attached to it, reviewed when
the cost changes, rather than a situation nobody has looked at.

What makes this tractable either way is knowing which case you are in, and that
is a day or two of investigation rather than a project.

## The short version

Choose scoped unless you can articulate why not, and write down the reason when
you cannot. Decide `task` versus standalone per application rather than by
default. Put a lightweight review in front of anything reaching production.

None of it slows the first application down much. All of it decides whether the
tenth one is an asset or a liability.
