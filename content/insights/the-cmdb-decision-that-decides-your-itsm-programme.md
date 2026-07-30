---
title: The CMDB decision that decides your ITSM programme
description: >-
  Incident, problem and change go live quickly and look like success. The thing
  that determines whether any of it still works in year two is the configuration
  data underneath, and the expensive choice is how much of it to build before
  go-live.
date: '2026-07-30'
updated: '2026-07-30'
author: ifBash
tags:
  - ServiceNow
  - ITSM
  - CMDB
published: true
---

Almost every ServiceNow ITSM programme has the same shape in its first three
months. Incident goes live. Request goes live. Change follows. The forms work,
the approvals route, and the steering committee sees a demo that does what the
business case promised.

Then somebody tries to use it for something that matters — assessing the risk of
a change, or working out what else broke during a major incident — and the
answers are not trustworthy. Not because the workflow is wrong, but because the
configuration data underneath it was never built to carry that weight.

This is the most common way an ITSM programme fails while appearing to succeed.

## Why the workflow is the easy part

Incident, problem, change and request are well-understood processes with a
well-understood implementation. The platform ships them. Configuring them for
your organisation is real work, but it is bounded work, and you can see it
happening.

The configuration management database is different in three ways that matter:

- **It is never finished.** A workflow reaches a defined end state. A CMDB has to
  stay accurate against an estate that changes every day.
- **Its value is indirect.** Nobody asks for a CMDB. They ask for change impact
  analysis, or for a service view during an outage, and those are CMDB features
  wearing different names.
- **It fails silently.** A broken workflow throws an error. A CMDB that is
  seventy per cent accurate produces confident answers that are wrong, and it can
  do that for a long time before anyone checks.

That last point is the dangerous one. Teams do not lose faith in a CMDB because
it breaks. They lose faith because someone finally verifies an impact assessment
by hand and finds it missed half the affected systems.

## The decision, stated plainly

**How much configuration data do you build before go-live?**

The two failure modes are symmetrical, and both are common.

Build too little and the workflows go live without the data to support the
capabilities that justified the investment. Change impact analysis becomes a
field somebody fills in from memory. The service view during an outage is a list
of servers with no relationship to anything a business stakeholder recognises.

Build too much and you spend the first several months of the programme populating
a data model nobody is consuming yet. Configuration items go stale before their
first real use, because nothing in the daily operation depends on them being
right. You arrive at go-live with an impressive CMDB that has already started
decaying and a delivery team that has burned its credibility on a phase the
business could not see.

## What we do instead

Populate exactly what the workflows you are launching consume, and extend it when
a new workflow genuinely needs a new class.

In practice that usually means hardware and applications discovered and owned
before incident and change go live, because change impact and incident triage
both read from them. It usually does not mean modelling every relationship type
the platform supports, because nothing is reading most of them yet.

The test for whether a class belongs in scope is simple and worth applying
honestly: **name the workflow that will read this data next month.** If you
cannot, it is not ready to be populated. It will be, once something depends on
it — and populating it then costs less, because the workflow that consumes it
also exercises it, which is what keeps data accurate.

## Service modelling is a separate decision

Service mapping is what turns a CMDB from an inventory into something that can
answer business questions. It is also the most expensive thing in most ITOM and
ITSM programmes, and the cost is not evenly distributed.

Pattern-based discovery works well on standard technology stacks and poorly on
bespoke ones. A service composed of common web servers, application servers and
databases maps largely automatically. A service that runs on something unusual,
or that was assembled over fifteen years, needs manual modelling and then needs
that model maintained.

So the useful question is not whether to do service mapping. It is which services
are worth the effort. For a handful of business-critical services the answer is
almost always yes. For the long tail it is almost always no, and pretending
otherwise is where large budgets disappear without a visible result.

## The organisational question hiding inside the technical one

Every CMDB discussion eventually reaches ownership: who owns a configuration item
when no team wants it?

This arrives disguised as a data quality problem. It is not. Unassigned
configuration items are how a CMDB rots, because nothing prompts anyone to
correct them and nobody is accountable when they are wrong. Discovery will find
the asset. Discovery cannot decide who is responsible for it.

Settle the ownership rule during design — including what happens to items that
nobody claims — rather than leaving it to whoever runs Discovery to work out
later. It is a governance decision that the platform can enforce and cannot make.

## What this means if you are scoping a programme now

Three questions worth asking your implementation partner, whoever that is:

1. **Which configuration item classes will exist at go-live, and which workflow
   reads each one?** A partner who answers with a list of classes rather than a
   list of consumers is planning to populate data speculatively.
2. **Which services are being mapped, and why those?** A complete map is a
   warning sign, not an ambition.
3. **What is the ownership rule for an unclaimed item?** If there is no answer,
   the CMDB has an expiry date nobody has written down.

None of this makes an ITSM implementation slower. It makes the part that usually
decays later hold its value, which is the difference between a platform that
still answers questions in year three and one that everybody has quietly stopped
trusting.
