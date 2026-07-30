---
title: What NCA ECC actually asks of a ServiceNow instance
description: >-
  Saudi Arabia's Essential Cybersecurity Controls are mandatory for government
  entities and critical national infrastructure. Most of the framework has nothing
  to do with your platform. Four control families land on it directly, and they
  are cheaper to design for than to retrofit.
date: '2026-07-30'
updated: '2026-07-30'
author: ifBash
tags:
  - ServiceNow
  - Middle East
  - Compliance
published: true
---

If you run ServiceNow inside a Saudi government entity, or an organisation
classified as critical national infrastructure, the National Cybersecurity
Authority's Essential Cybersecurity Controls apply to you. They are mandatory,
they are audited, and most guidance about them is written for network and
infrastructure teams rather than for a workflow platform.

That leaves platform teams with a practical problem. ECC is a broad framework.
Most of it — network segmentation, physical security, cryptography standards — has
nothing to do with your instance. A handful of control families land on it
directly, and those are worth designing for rather than discovering during an
assessment.

This is a description of where a ServiceNow instance intersects the framework. It
is not a compliance opinion, and it is not a substitute for your assessor.

## Where the platform is actually in scope

Four areas, in rough order of how often they come up.

### Identity and access management

ECC expects access to be granted on a least-privilege basis, reviewed
periodically, and revoked promptly when it is no longer needed. On a ServiceNow
instance that translates into questions an auditor can ask directly:

- Who has the `admin` role, and who approved each grant?
- When was the last access review, and what evidence exists that it happened?
- What happens to a user's roles when they leave, and how quickly?

The platform can answer all three well, but only if access is granted through a
request with an approver rather than by an administrator editing a user record.
The distinction matters enormously at assessment time: a role granted through a
request leaves a dated record with a named approver, and a role granted directly
leaves an audit log entry that says an admin did something.

Design decision: **is role assignment a request, or an administrative action?**
Make it a request, and access review becomes a report. Leave it administrative,
and every review is a manual reconstruction.

### Change management

ECC expects changes to be authorised, tested and documented, with segregation
between the person requesting a change and the person approving it. This is the
control family where ServiceNow is strongest, because change management is a core
capability rather than something bolted on.

The part teams get wrong is enforcing segregation in configuration rather than
stating it in a policy document. If the platform permits a requester to approve
their own change — even for a change type considered low risk — then the control
exists on paper and not in the system. Auditors test the system.

Design decision: **which change types may bypass approval, and can the requester
ever be the approver?** Enforce the answer with roles and approval rules, not
with a process document.

### Event and incident logging

ECC expects security-relevant events to be logged, retained and monitored. For an
instance this covers administrative actions, failed authentication, role changes
and configuration changes to security-relevant tables.

Two things usually need attention. First, retention: platform log retention
defaults are set for operational troubleshooting, not for a compliance retention
period, and the two are rarely the same number. Second, monitoring: logs that are
retained but never reviewed satisfy the letter of a logging control and none of
its intent.

Design decision: **what is the retention period for each log type, and who reads
them?** Both answers belong in the design document, because changing retention
after the fact does not recover data you already discarded.

### Third-party and supplier access

ECC pays close attention to access granted to parties outside the organisation —
which includes your implementation partner. Expect to be asked how vendor access
is granted, time-bounded, monitored and revoked.

This is worth settling before an implementation begins rather than during it. A
partner working through named individual accounts with a defined end date, on
least privilege, produces a clean answer. A partner sharing a generic
integration account with a permanent `admin` role produces a finding.

Design decision: **how does partner access work, and what evidence exists that it
was revoked?** If your partner cannot answer this crisply, that is information
about the partner.

## Data classification is the decision that gets expensive

Alongside ECC, the National Data Management Office standards cover data
classification, retention and cross-border transfer, and the Personal Data
Protection Law adds consent and retention requirements on personal data.

Classification is the one to settle early, because it propagates. Once you know
which data in your instance is classified at which level, you know which tables
need restricted access, which fields cannot leave the Kingdom, and which
integrations need reviewing. Once workflows are built and integrated, revisiting
classification means revisiting all of it.

This is also where the AI question lands. If a workflow uses a hosted language
model, some record content leaves the instance to reach it. Where a data class
cannot be transferred outside the Kingdom, that class cannot pass through a
hosted model, and no configuration setting changes that. It is an architectural
constraint, and it is much better understood at design time than discovered during
an assessment. We have written separately about what that means for agents in
practice.

## What none of this means

It is worth being precise about the limits of what a platform contributes.

**A configured instance is not a certified organisation.** ECC compliance is
assessed at the entity level and covers a great deal that has nothing to do with
ServiceNow. Mapping platform configuration to control families supports an
assessment; it does not constitute one.

**Nobody can sell you ECC compliance as a product.** What can be delivered is a
platform designed against the relevant control families, with the mapping handed
over in writing so your assessor can see what was done and why. Where a control
requires an accredited audit, that audit is yours.

Any supplier claiming their implementation makes you ECC compliant is describing
something that does not exist.

## A short pre-assessment checklist

If you are preparing for an assessment on an existing instance, these five
questions surface most of the gaps:

1. Can you produce a dated list of who holds `admin`, and who approved each?
2. Can a change requester approve their own change, for any change type?
3. What is your log retention period, and does it match your compliance
   obligation rather than your storage preference?
4. Which partner accounts are active right now, and what is their end date?
5. Is your data classification recorded in the platform, or in a spreadsheet
   somewhere else?

The instances that assess well are rarely the ones with the most controls
configured. They are the ones where somebody decided these five things
deliberately, wrote the decisions down, and built to them.
