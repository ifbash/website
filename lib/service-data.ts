// Content for the six ServiceNow service pages.
//
// Extracted from the former static pages, then cleaned: fabricated case
// studies, executive quotes, week-range durations, and outcome percentages
// were removed. Do not reintroduce numbers that cannot be evidenced.
import { Workflow, Layers, Gauge, ShieldCheck, Database, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceEntry {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  offerings: { icon: LucideIcon; title: string; desc: string; points: string[] }[];
  phases: { phase: string; items: string[] }[];
  faqs: { q: string; a: string }[];
}

export const serviceEntries: ServiceEntry[] = [
  {
    slug: 'ai-automation',
    metaTitle: 'ServiceNow Agentic AI & Automation — Agents That Think, Decide, Act',
    metaDescription: 'Autonomous agents handling complex reasoning — your teams stay focused on strategy.',
    offerings: [
      { icon: Workflow, title: 'Agentic AI', desc: 'Agents that reason, not just follow rules. Defined goals, decision loops, escalation thresholds you control. Full audit trail.', points: [] },
      { icon: Layers, title: 'Generative AI', desc: 'Draft generation, data synthesis, incident summarisation, knowledge article creation. Every output human-reviewable.', points: [] },
      { icon: Gauge, title: 'Intelligent Automation', desc: 'AI triage replacing manual queues. Agents handle routine cases, escalate exceptions. You define the boundary.', points: [] },
      { icon: ShieldCheck, title: 'Agent Orchestration', desc: 'Multiple specialised agents coordinated in real time. Cross-agent context passing, single audit log, defined capability boundaries per agent.', points: [] },
      { icon: Database, title: 'Real-time Intelligence', desc: 'Agents processing events as they happen — fraud signals, equipment anomalies, compliance triggers — with sub-second response.', points: [] },
      { icon: Sparkles, title: 'Enterprise Integration', desc: 'Agents connected to ServiceNow data layer plus ERP, CRM, IoT, databases. Authenticated, audited API calls with full logging.', points: [] },
    ],
    phases: [
      { phase: 'AI Assessment', items: [
          'AI readiness evaluation & use case scoring',
          'Data quality audit & agent architecture design'
        ] },
      { phase: 'Build & Train', items: [
          'Agent development & model training cycles',
          'Workflow integration & sandbox testing',
          'Performance validation against agreed benchmarks'
        ] },
      { phase: 'Orchestrate', items: [
          'Multi-agent coordination layer deployment',
          'System integration with authenticated APIs',
          'Security review & change management'
        ] },
      { phase: 'Deploy & Optimise', items: [
          'Production deployment with hypercare',
          'Continuous learning loops & performance tuning',
          '90-day outcome review against KPIs'
        ] },
    ],
    faqs: [
      { q: 'What\'s the difference between agentic AI and generative AI in ServiceNow?', a: 'Generative AI produces content — drafts, summaries, code. Agentic AI takes actions — reads data, makes decisions, calls APIs, updates records. We combine both: agents use generative AI to reason, then use agentic capabilities to act. Agentic systems require governance, audit trails, and escalation logic.' },
      { q: 'How fast can AI agents go live?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'Which processes deliver the highest AI return?', a: 'High-volume, clear-decision-criteria processes: IT incident triage, fraud detection, compliance monitoring, procurement approvals, HR case classification.' },
      { q: 'How do you ensure agents make safe decisions?', a: 'Defined capability boundaries per agent, confidence thresholds for auto-escalation, approval workflows for high-risk actions, full decision audit trails. Governance designed in week one, not bolted on after go-live.' },
      { q: 'How do you measure AI return?', a: 'Specific metrics agreed pre-deployment: cases handled, resolution time, error rate, FTE hours saved, false positive rate. Live dashboard tracks every metric from day one.' },
      { q: 'Can agents integrate with systems beyond ServiceNow?', a: 'Yes. ERP (SAP, Oracle), IoT/OT platforms (SCADA), CRM (Salesforce), HR (Workday), custom databases. Integration Hub plus direct API connectors. Every connection authenticated, rate-limited, and logged.' },
    ],
  },
  {
    slug: 'crm-customer-experience',
    metaTitle: 'ServiceNow CRM & Customer Experience — CRM That Converts, Relationships That Last',
    metaDescription: 'Unify every customer channel into a single ServiceNow platform. AI handles routine conversations. Agents handle what matters.',
    offerings: [
      { icon: Workflow, title: 'Customer Service Management', desc: 'Unified omnichannel CSM. AI triage handles routine cases. Agents get full context before they say hello.', points: [] },
      { icon: Layers, title: 'Customer Retention', desc: 'Health scores computed daily from product usage and support patterns. Proactive CSM outreach triggers when engagement drops.', points: [] },
      { icon: Gauge, title: 'Sales Force Automation', desc: 'Lead scoring, opportunity routing, AI-assisted proposals. Pipeline visibility from first touch to close.', points: [] },
      { icon: ShieldCheck, title: 'Field Service Excellence', desc: 'Automated dispatch, mobile technician app, real-time customer tracking. Right tech, right parts, first visit.', points: [] },
      { icon: Database, title: 'Conversational AI', desc: 'Virtual agents handling routine conversations across chat, SMS, and voice. Escalates to human with full context.', points: [] },
      { icon: Sparkles, title: 'Agent Experience', desc: 'Single-screen unified desktop. AI suggests next actions. Knowledge articles surface automatically based on case context.', points: [] },
    ],
    phases: [
      { phase: 'Map the journey', items: [
          'Full channel audit & contact driver analysis',
          'Customer journey mapping with drop-off points'
        ] },
      { phase: 'Unify the data', items: [
          'Single customer record across all channels',
          'AI model training on historical interactions',
          'Self-service portal & virtual agent deployment'
        ] },
      { phase: 'Automate the routine', items: [
          'AI triage & auto-resolution workflows',
          'Agent desktop with unified context view',
          'Proactive outreach triggers configured'
        ] },
      { phase: 'Measure & optimise', items: [
          'CSAT, handle time, resolution rate dashboards',
          'Monthly KPI reviews & tuning',
          '90-day hypercare with outcome validation'
        ] },
    ],
    faqs: [
      { q: 'How fast can you unify our customer channels?', a: 'Week 4: first channels go live. By go-live, all channels feed a single customer record with full interaction history.' },
      { q: 'Can AI really handle customer conversations?', a: 'Yes — for defined, high-volume cases: order status, returns, FAQs, appointment booking. Complex cases escalate with full context.' },
      { q: 'What return can we expect from ServiceNow CRM?', a: 'Outcomes depend on your starting point, so we agree the measures with you up front and report against those rather than quoting figures from engagements you cannot verify.' },
      { q: 'How do you handle data migration from our existing CRM?', a: 'Migration mapping starts week one of discovery. We clean, deduplicate, and migrate existing customer data, interaction history, and knowledge base. Zero data loss — verified at every stage.' },
      { q: 'Does this work for B2B and B2C?', a: 'Both. B2B: account hierarchies, contract management, SLA-driven support. B2C: high-volume case management, self-service, social channel integration. The platform handles both natively.' },
    ],
  },
  {
    slug: 'custom-apps',
    metaTitle: 'ServiceNow Custom App Development — Built for Your Business, Not the Other Way Around',
    metaDescription: 'When off-the-shelf doesn\\',
    offerings: [
      { icon: Workflow, title: 'Custom App Development', desc: 'Full-lifecycle development on scoped applications using supported APIs only — your app survives every platform upgrade. Working prototype by week 4.', points: [] },
      { icon: Layers, title: 'Integration Development', desc: 'Custom connectors for SCADA, IoT, proprietary ERPs, legacy mainframes, and industry-specific APIs. REST, SOAP, GraphQL — tested under production load before go-live.', points: [] },
      { icon: Gauge, title: 'AI-Powered Custom Modules', desc: 'ML models for prediction, NLP for document processing, agentic AI for autonomous workflows — embedded directly into your custom apps with defined accuracy thresholds and human override paths.', points: [] },
      { icon: ShieldCheck, title: 'Platform Extensions', desc: 'Custom tables, Flow Designer automations, Service Portal widgets, and mobile screens — all within ServiceNow\'s extensibility framework so they survive upgrades without conflict.', points: [] },
      { icon: Database, title: 'App Migration & Modernisation', desc: 'Legacy apps on deprecated APIs analysed, re-architected, and migrated to current architecture. Old and new run in parallel until parity confirmed before decommissioning.', points: [] },
      { icon: Sparkles, title: 'Regulated & Compliance Apps', desc: 'Built to FDA 21 CFR Part 11, HIPAA, SOX, FedRAMP — compliance drives architecture from day one. E-signature, full audit chain, data residency controls included.', points: [] },
    ],
    phases: [
      { phase: 'Discovery & Spec', items: [
          'Requirements workshops & technical architecture',
          'API mapping & prototype wireframes',
          'Feasibility validation & scope lock'
        ] },
      { phase: 'Design & Build', items: [
          'UI/UX design & custom development',
          'Integration build & unit testing',
          'Code review cycles & sprint demos'
        ] },
      { phase: 'Test & Harden', items: [
          'UAT facilitation & performance testing',
          'Security review & bug resolution',
          'Documentation & training materials'
        ] },
      { phase: 'Deploy & Support', items: [
          'Production deployment & user training',
          'Hypercare period with daily check-ins',
          'Ongoing enhancement sprints available'
        ] },
    ],
    faqs: [
      { q: 'When should we build custom vs use native ServiceNow?', a: 'Build custom when native modules can\'t meet your requirements without heavy workarounds, when you have industry-specific compliance needs, or when deep integration with proprietary systems is required.' },
      { q: 'How do custom apps survive ServiceNow upgrades?', a: 'We build exclusively on supported APIs using scoped applications. Every app includes upgrade testing in our validation cycle.' },
      { q: 'How long does a custom app take to build?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'Can you build apps that work with non-ServiceNow systems?', a: 'Yes — SCADA, IoT, ERP (SAP, Oracle), legacy mainframes, industry APIs, custom databases. If it has an API or data source, we connect it.' },
      { q: 'How do you handle security in custom applications?', a: 'RBAC, encryption, input validation, XSS protection, SQL injection prevention — built in from architecture. Regulated apps include e-signature, audit trail, and data residency.' },
    ],
  },
  {
    slug: 'digital-transformation',
    metaTitle: 'ServiceNow Digital Transformation — Stop Managing Silos, Start Running Your Business',
    // Also the hero sub-heading in components/site/service-page.tsx. This was
    // empty until 2026-07-30, so the hero ran straight from the h1 into the CTA
    // with no explanatory line. Copy taken from the openGraph description in
    // app/services/digital-transformation/layout.tsx so the two agree.
    metaDescription:
      'Transformation measured in workflows, not slide decks. Operations unified onto a single ServiceNow platform, sequenced so each phase earns the next.',
    offerings: [
      { icon: Workflow, title: 'Digital Strategy', desc: 'Digital Strategy delivered and documented as part of the engagement.', points: [] },
      { icon: Layers, title: 'Modernisation', desc: 'Seamless legacy migration with zero unplanned downtime for users.', points: [] },
      { icon: Gauge, title: 'Process Engineering', desc: 'Eliminating handoffs through activity mining and automated workflows.', points: [] },
      { icon: ShieldCheck, title: 'AI Automation', desc: 'Deploying AI for triage, forecasting, and autonomous routing.', points: [] },
      { icon: Database, title: 'Data Platform', desc: 'Consolidating fragmented data into a single, live ServiceNow data layer.', points: [] },
      { icon: Sparkles, title: 'Change Management', desc: 'Driving adoption through champion networks and role-specific training.', points: [] },
    ],
    phases: [
      { phase: 'Discovery & Roadmap', items: [
          'As-is assessment',
          'Maturity scoring',
          'Business case creation'
        ] },
      { phase: 'Architecture & Design', items: [
          'Target architecture',
          'Data strategy',
          'Governance framework'
        ] },
      { phase: 'Build & Integrate', items: [
          'Platform build',
          'AI/automation layer',
          'Iterative testing'
        ] },
      { phase: 'Scale & Optimise', items: [
          'Full rollout',
          'Training & adoption',
          'KPI tracking'
        ] },
    ],
    faqs: [
      { q: 'How long does a digital transformation typically take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'Where do you start when the organisation has multiple legacy systems?', a: 'Week one of discovery, we run a full system inventory and activity mining exercise. We always start with the highest-pain area.' },
      { q: 'How do you handle change resistance across the organisation?', a: 'We don\'t treat change management as a training event at the end. Champions are identified by department in week one. We run role-specific training and track adoption rates in a live dashboard from day one.' },
      { q: 'What return can we realistically expect?', a: 'Outcomes depend on your starting point, so we agree the measures with you up front and report against those rather than quoting figures from engagements you cannot verify.' },
      { q: 'Can you transform one department at a time?', a: 'Yes — and for most organisations it\'s the right approach. We call it proof-by-phase: start with the highest-impact area, deliver measurable results, then use that proof to get buy-in for the next phase.' },
      { q: 'How does ServiceNow fit into a broader digital transformation?', a: 'ServiceNow becomes the system of action — the layer that orchestrates work across every other system you own (SAP, Oracle, Workday). It routes work, automates decisions, and surfaces exceptions.' },
    ],
  },
  {
    slug: 'managed-services-support',
    metaTitle: 'ServiceNow Managed Services & 24/7 Support — While You Sleep, We Watch',
    metaDescription: 'Proactive support that stops incidents before your users notice.',
    offerings: [
      { icon: Workflow, title: '24/7 Platform Monitoring', desc: 'Degradation detected in seconds — usually before users report it. NOC staffed 24/7/365 by engineers who know your instance.', points: [] },
      { icon: Layers, title: 'Incident Management', desc: 'Tiered SLA-backed response. Every incident closes with root cause analysis and preventive action.', points: [] },
      { icon: Gauge, title: 'Compliance & Security', desc: '90-day compliance cycle producing audit-ready reports before auditors ask. Security patches tested in sandbox, then production with rollback plan ready.', points: [] },
      { icon: ShieldCheck, title: 'Performance Optimisation', desc: 'Query analysis, script profiling, and cache optimisation run continuously — not just when something breaks.', points: [] },
      { icon: Database, title: 'Platform Administration', desc: 'Certified admins handling configuration changes through documented change management. Release management for all upgrades with zero unplanned downtime.', points: [] },
      { icon: Sparkles, title: 'Proactive Health Checks', desc: 'Monthly technical health report covering performance, technical debt, upgrade readiness, and adoption. Quarterly strategic review with platform owner.', points: [] },
    ],
    phases: [
      { phase: 'Onboarding & Baseline', items: [
          'Full platform audit & SLA definition',
          'Runbook creation & team introduction'
        ] },
      { phase: 'Stabilise & Optimise', items: [
          'Performance tuning & backlog clearance',
          'Alert calibration & quick wins',
          'Baseline reporting established'
        ] },
      { phase: 'Proactive Management', items: [
          '24/7 monitoring with incident prevention',
          'Capacity planning & monthly health reports',
          '90-day compliance review cycle'
        ] },
      { phase: 'Continuous Improvement', items: [
          'Platform upgrades with zero-downtime',
          'Feature adoption & cost optimisation',
          'Quarterly business reviews & roadmap'
        ] },
    ],
    faqs: [
      { q: 'What does managed services include?', a: '24/7 monitoring, incident management with SLA-backed response, performance optimisation, compliance management, platform administration, upgrades, and proactive health checks. Dedicated pod of engineers as your team extension.' },
      { q: 'What SLAs do you guarantee?', a: 'Response and resolution targets are set per priority level and written into your contract rather than published here as a generic figure — yours depend on coverage hours, environment count, and what counts as critical for your business. We agree them before the retainer starts.' },
      { q: 'How quickly can managed services start?', a: 'For a new deployment we run onboarding in parallel with the final implementation phase, so there is no gap between go-live and support. For an existing platform we start with an audit, monitoring setup, and runbook creation before taking the pager.' },
      { q: 'Do you handle platform upgrades?', a: 'Yes — planning, sandbox testing, user communication, rollback planning, and production deployment.' },
      { q: 'Can you support an environment implemented by another vendor?', a: 'Yes — inheriting someone else\'s build is normal work for us. We start with an audit that identifies technical debt, configuration risk, and quick wins, then take over ongoing management from there.' },
    ],
  },
  {
    slug: 'servicenow-implementation',
    metaTitle: 'ServiceNow Implementation — Live and Adopted, Not Just Configured',
    metaDescription: 'Pre-built accelerators, parallel workstreams, and phase gates that catch scope creep. ServiceNow implementations scoped in writing within two working days of the first call.',
    offerings: [
      { icon: Workflow, title: 'Rapid Implementation', desc: 'Pre-built accelerators and parallel workstreams, with working configuration demoed early rather than revealed at the end.', points: [] },
      { icon: Layers, title: 'Seamless Integration', desc: 'Custom connectors for proprietary systems.', points: [] },
      { icon: Gauge, title: 'Enterprise Security', desc: 'Security model designed before workflows — RBAC, audit trails, and compliance mapped at the start rather than retrofitted.', points: [] },
      { icon: ShieldCheck, title: 'Change Management', desc: 'Department champions, role-specific training, live adoption dashboards.', points: [] },
      { icon: Database, title: 'Performance Tracking', desc: 'KPI framework agreed upfront. Monthly reviews. 90-day optimisation cycle post go-live.', points: [] },
      { icon: Sparkles, title: 'Ongoing Support', desc: 'Original build team stays on. 24/7 monitoring, 15-min P1 response, continuous improvement.', points: [] },
    ],
    phases: [
      { phase: 'Discovery', items: [
          'Current state analysis & process mapping',
          'Risk assessment & stakeholder alignment',
          'Security & compliance requirements defined'
        ] },
      { phase: 'Design', items: [
          'Instance setup & workflow architecture',
          'Integration design with existing systems',
          'UX design & role-based access model'
        ] },
      { phase: 'Build', items: [
          'Custom development & integration build',
          'Automated testing runs parallel to build',
          'Client validation at each sprint review'
        ] },
      { phase: 'Go-Live', items: [
          'Data migration with zero-downtime cutover',
          'Role-specific training for all user groups',
          'Hypercare: daily check-ins, 90-day KPI review'
        ] },
    ],
    faqs: [
      { q: 'Are you a ServiceNow partner?', a: 'No. We are not in ServiceNow’s official partner programme, and we will not imply otherwise. What we are is ServiceNow specialists — certified engineers who implement, extend, integrate, and run the platform every day, and who then build the AI layer on top of it. If your procurement process requires a badged partner, tell us on the first call and we will say so plainly instead of wasting your time.' },
      { q: 'How long does a typical implementation take?', a: 'The compressed timeline comes from pre-built accelerators and parallel workstreams — testing runs alongside build, not after it.' },
      { q: 'Can you integrate with our existing systems?', a: 'We will answer this specifically for your environment during scoping — a general answer here would risk misleading you.' },
      { q: 'What support do you provide after go-live?', a: 'Structured hypercare: daily check-ins for two weeks, weekly reviews through week 12, formal 90-day outcome review. The same engineers who built your platform can continue managing it.' },
      { q: 'How do you handle security and compliance?', a: 'Security architecture is designed before any workflow. RBAC, encryption, audit trails, and compliance mappings (SOC 2, HIPAA, SOX) are defined in weeks 1–2.' },
      { q: 'How do you handle platform upgrades?', a: 'We will answer this specifically for your environment during scoping — a general answer here would risk misleading you.' },
    ],
  },
];

export function getServiceEntry(slug: string) {
  return serviceEntries.find((e) => e.slug === slug) ?? null;
}
