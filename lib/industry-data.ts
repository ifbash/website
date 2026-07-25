// Content for the 10 industry pages.
//
// Capability titles, FAQs, and metadata carry over from the former static
// pages. The capability descriptions were REWRITTEN: the originals were
// built around fabricated metrics ("42% fewer clinical IT tickets",
// "Dispatch: 4.5h to 38min") that could not be evidenced.
//
// Do not reintroduce outcome numbers here unless they can be sourced.
import { Workflow, Layers, Gauge, ShieldCheck, Database, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { industryItems } from '@/components/nav-data';

export interface IndustryEntry {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Where AI agents genuinely fit in this sector — and where they don't. */
  aiAngle: string;
  capabilities: { icon: LucideIcon; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const industryEntries: IndustryEntry[] = [
  {
    slug: 'automotive-manufacturing',
    metaTitle: 'ServiceNow Automotive & Manufacturing — Quality Built In, Not Inspected In',
    metaDescription: 'PPAP rejections. Recall delays. Audit scrambles. ifBash delivers ServiceNow that builds quality into production — not inspected in at the end.',
    keywords: [],
    aiAngle: 'Agents are a good fit where quality documentation is repetitive: drafting a deviation summary from the evidence attached to a record, or answering supplier questions about submission requirements without a quality engineer being interrupted.',
    capabilities: [
      { icon: Workflow, title: 'PPAP & APQP', desc: 'Part submission and advanced quality planning run as workflows with evidence attached as work happens — so a submission package is assembled continuously, not reconstructed the week before a deadline.' },
      { icon: Layers, title: 'Recall Readiness', desc: 'Traceability from supplier lot through to VIN, with the containment workflow and regulator-facing record modelled before you need them rather than improvised during an event.' },
      { icon: Gauge, title: 'IATF 16949', desc: 'Audit evidence produced as a by-product of normal operations and mapped to the clauses, instead of gathered by a task force in the weeks before an audit.' },
    ],
    faqs: [
      { q: 'How does ServiceNow improve PPAP and APQP?', a: 'CMM data, material certs, and FMEAs connected into a single workspace. PPAP packages auto-assemble to OEM portal specs with 21-day missing-element alerts.' },
      { q: 'Can ServiceNow manage vehicle recalls end to end?', a: 'Yes. VIN query, owner letters, dealer scheduling, and per-VIN remedy tracking — all automated. NHTSA-format reports generated on demand.' },
      { q: 'How does it support IATF 16949 compliance?', a: 'Structured workflows enforce IATF 16949 and CSRs. Real-time dashboards show open NCs and clause coverage. Evidence collected continuously — no more audit scrambles.' },
      { q: 'Can ServiceNow ingest live production data?', a: 'Yes. OPC-UA connectors pull real-time PLC data into shift-level OEE dashboards by line, model, and variant.' },
      { q: 'How long does an automotive implementation take?', a: 'PPAP and quality go live first, with recall management and production analytics following in later phases.' },
    ],
  },
  {
    slug: 'consumer-goods-retail',
    metaTitle: 'ServiceNow Consumer Goods & Retail — From Supplier to Shelf, Without the Gaps',
    metaDescription: 'Stockouts at your biggest retailers. Deductions unresolved for months. Forecasts that miss by miles. ifBash delivers ServiceNow that connects demand planning, order-to-cash, and trade promotion.',
    keywords: [],
    aiAngle: 'Agents work well on deduction triage — reading the claim, matching it to shipment and promotion records, and preparing the dispute pack for a human to approve rather than assemble.',
    capabilities: [
      { icon: Workflow, title: 'Demand Planning', desc: 'Forecast exceptions routed to the planner who can actually act on them, with the underlying demand signals attached to the task rather than in a separate report.' },
      { icon: Layers, title: 'Order-to-Cash', desc: 'Order, fulfilment, invoice, and dispute handled as one connected flow, so a deduction can be traced back to the shipment that caused it.' },
      { icon: Gauge, title: 'Trade Promotion', desc: 'Promotion claims and deductions managed as cases with evidence, ageing, and a named owner — instead of a spreadsheet nobody reconciles.' },
    ],
    faqs: [
      { q: 'How does ServiceNow improve demand forecasting for CPG?', a: 'ITOM aggregates POS, warehouse, and shipment data into ML models generating 13-week SKU-location forecasts. Accuracy improves substantially within the first quarter.' },
      { q: 'Can ServiceNow manage trade promotion deductions?', a: 'Yes. App Engine handles the full lifecycle — planning, accrual, claim, reconciliation.' },
      { q: 'How fast can order-to-cash cycles improve?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What systems do you integrate with?', a: 'Retailer POS (Walmart Retail Link, Target Partners Online), WMS, ERP (SAP, Oracle), and TPM systems. All through Integration Hub.' },
      { q: 'How long does a CPG implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'energy-utilities',
    metaTitle: 'ServiceNow Energy & Utilities — Modernise Your Grid Operations',
    metaDescription: 'Aging infrastructure. Renewable integration. Regulatory pressure. ifBash delivers ServiceNow that unifies grid data, automates outage response, and provides the evidence layer for compliance.',
    keywords: [],
    aiAngle: 'Agents help most in outage communication: turning technical incident data into the customer-facing update, in the right language, without a person rewriting the same message twenty times.',
    capabilities: [
      { icon: Workflow, title: 'Outage Response', desc: 'Detection, crew dispatch, and customer communication driven from one record, so the field crew and the contact centre are never working from different versions of the truth.' },
      { icon: Layers, title: 'Asset Performance', desc: 'Condition and maintenance history held against each asset, with work orders raised from the data rather than from a calendar.' },
      { icon: Gauge, title: 'NERC CIP Compliance', desc: 'Control evidence collected as normal operations happen, mapped to the standard, and available for audit without a reconstruction exercise.' },
    ],
    faqs: [
      { q: 'How does ServiceNow improve grid reliability?', a: 'SCADA, ADMS, and substation RTU data unified into a single incident record with auto-identified fault location and generated switching sequences.' },
      { q: 'What renewable capabilities does it provide?', a: 'Automated weather API integration, ML models for P50/P90 forecasting, day-ahead bidding automation, and predictive maintenance on turbine components.' },
      { q: 'How does it help with NERC CIP?', a: 'GRC maps NERC CIP requirements to assets with automated evidence collection and an audit-window compliance calendar.' },
      { q: 'Can it handle demand response and storage?', a: 'Yes. Automated dispatch across customer segments, plus real-time storage schedule updates from market pricing and BMS data.' },
      { q: 'How long does an energy implementation take?', a: 'Grid operations go live first, with renewables and demand response following in later phases.' },
    ],
  },
  {
    slug: 'healthcare-providers',
    metaTitle: 'ServiceNow Healthcare Consulting — Connect Your Care Network',
    metaDescription: 'Every handoff between facilities is where care breaks down. ifBash delivers HIPAA-compliant ServiceNow that connects hospitals, clinics, and providers into a single care network — no gaps, no missed handoffs.',
    keywords: [],
    aiAngle: 'Agents belong on the administrative side of care, not clinical decisions — answering staff questions about systems and process, chasing an outstanding referral, or handling patient appointment queries out of hours.',
    capabilities: [
      { icon: Workflow, title: 'Clinical Service Desk', desc: 'A service desk that understands clinical urgency — a device fault in theatre is not the same ticket as a password reset, and the routing and escalation reflect that.' },
      { icon: Layers, title: 'Patient Flow & Operations', desc: 'Bed, transfer, and discharge steps tracked as workflow, so a delay is visible while it can still be fixed rather than in next month’s report.' },
      { icon: Gauge, title: 'Care Team Collaboration', desc: 'Referrals and handoffs as tracked work with an owner and a due state, instead of a message that may or may not have been read.' },
      { icon: ShieldCheck, title: 'Patient Digital Front Door', desc: 'Appointments, forms, and requests through one portal, built to the accessibility standard your patient population actually requires.' },
    ],
    faqs: [
      { q: 'What EHR systems does ServiceNow integrate with?', a: 'Epic, Oracle Health (Cerner), and Meditech via HL7 FHIR R4. Custom integrations with any EHR through Integration Hub.' },
      { q: 'How long does a healthcare implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What HIPAA compliance comes built in?', a: 'Role-based PHI access controls, full audit logging, automated anomaly detection with Privacy Officer notification, and BAA lifecycle management.' },
      { q: 'Will patients actually use the digital portal?', a: 'We will answer this specifically for your environment during scoping — healthcare providers organisations vary enough that a general answer would mislead.' },
      { q: 'How do you handle multi-facility rollouts?', a: 'Phased deployment — one facility at a time, starting with the one that needs it most. We don\'t move on until each site is stable.' },
    ],
  },
  {
    slug: 'life-sciences-pharma',
    metaTitle: 'ServiceNow Life Sciences & Pharma Consulting — From Lab to Patient, Faster',
    metaDescription: 'Clinical operations stalled by spreadsheets. Quality systems that fail audits. ifBash delivers FDA-compliant ServiceNow that connects trials, quality, and safety on one validated platform.',
    keywords: [],
    aiAngle: 'Agents are useful for regulated document work where a human still signs: drafting the narrative, retrieving the applicable SOP with citations, and flagging where the evidence is incomplete.',
    capabilities: [
      { icon: Workflow, title: 'Clinical Operations', desc: 'Study start-up, site activation, and issue management as governed workflow, with the audit trail produced by the system rather than assembled afterwards.' },
      { icon: Layers, title: 'Quality & Compliance', desc: 'Deviations, CAPAs, and change control on a validated platform, with electronic records and signatures configured to your validation approach.' },
      { icon: Gauge, title: 'Pharmacovigilance', desc: 'Adverse event intake, triage, and submission tracked against the reporting obligations that apply to your products and markets.' },
    ],
    faqs: [
      { q: 'How does ServiceNow integrate with clinical trial systems?', a: 'Connects to Medidata Rave, Veeva Vault CTMS/eTMF, and Oracle Clinical through Integration Hub. Protocol deviations flow into ServiceNow within hours.' },
      { q: 'What 21 CFR Part 11 compliance is included?', a: 'System-generated audit trails, electronic signatures with unique credentials, signature-to-record binding, and role-based authority enforcement — all built in, not bolted on.' },
      { q: 'Can ServiceNow improve pharmacovigilance?', a: 'Yes. Adverse event intake routes into structured case management with SLA timers enforcing 7-day and 15-day regulatory reporting deadlines.' },
      { q: 'How does it handle cold chain monitoring?', a: 'Temperature sensor data ingested in real time. Any excursion triggers automatic quarantine holds and deviation investigation workflows.' },
      { q: 'How long does a life sciences implementation take?', a: 'Clinical operations and quality go live first, with regulatory and safety following in later phases. IQ/OQ/PQ validation runs in parallel.' },
    ],
  },
  {
    slug: 'manufacturing-solutions',
    metaTitle: 'ServiceNow Manufacturing — Eliminate Unplanned Downtime',
    metaDescription: 'ServiceNow and AI delivery for manufacturing solutions — implementation, integration, agents, and ongoing support from one team.',
    keywords: [],
    aiAngle: 'Agents fit where the answer already exists but nobody can find it fast — retrieving the right maintenance procedure for a specific asset, or drafting a supplier corrective action request from the non-conformance record.',
    capabilities: [
      { icon: Workflow, title: 'Predictive Maintenance', desc: 'Equipment condition data turned into scheduled work before failure, with the full maintenance history held against the asset rather than in a technician’s memory.' },
      { icon: Layers, title: 'Quality Management', desc: 'Non-conformance, containment, and supplier corrective action as one connected workflow rather than three parallel spreadsheets.' },
      { icon: Gauge, title: 'Supply Chain Visibility', desc: 'Supplier commitments, exceptions, and escalations in one place, so a late part becomes a task with an owner instead of a surprise at the line.' },
    ],
    faqs: [
      { q: 'How does ServiceNow connect to factory floor equipment?', a: 'OPC-UA and MQTT connectors pull real-time data from PLCs and SCADA. IoT sensors feed health-scoring models that generate work orders before failure occurs.' },
      { q: 'Can it improve supplier quality and delivery?', a: 'Yes. Supplier scorecards pull inspection, delivery, and quality data weekly. 30-day early-warning flags identify at-risk suppliers before disruptions reach production.' },
      { q: 'How does it handle EHS compliance?', a: 'SCADA and CEM sensor data flows directly into EPA and state regulatory report templates with threshold-based escalation.' },
      { q: 'What maintenance improvements can manufacturers expect?', a: 'Outcomes depend on your starting point, so we agree the measures with you up front and report against those rather than quoting figures from engagements you cannot verify.' },
      { q: 'How long does a manufacturing implementation take?', a: 'Predictive maintenance and quality go live first, with supply chain and EHS following in later phases.' },
    ],
  },
  {
    slug: 'public-sector-government',
    metaTitle: 'ServiceNow Government & Public Sector — Respond in Hours, Not Weeks',
    metaDescription: 'Phone lines. Paper forms. Weeks of waiting. ifBash delivers FedRAMP-authorised ServiceNow that digitises citizen services, connects legacy systems, and makes government actually responsive.',
    keywords: [],
    aiAngle: 'Agents suit high-volume, low-complexity citizen contact: eligibility questions, application status, and form guidance — with a clear route to a person, and no pretence of being one.',
    capabilities: [
      { icon: Workflow, title: 'Citizen Services', desc: 'Requests arriving online, by phone, or in person land in one queue with one status, so nobody has to explain their situation twice.' },
      { icon: Layers, title: 'Permits & Licensing', desc: 'Application, review, inspection, and issue handled as a tracked case — with the applicant able to see exactly where it has reached.' },
      { icon: Gauge, title: 'Legacy Modernisation', desc: 'A workflow layer over the systems you cannot replace yet, so service quality improves without waiting for a decade-long replacement programme.' },
    ],
    faqs: [
      { q: 'What FedRAMP authorisation does ServiceNow hold?', a: 'ServiceNow holds FedRAMP Moderate Authorisation across its platform and High Authorisation for specific federal environments.' },
      { q: 'Can you integrate with decades-old legacy systems?', a: 'Yes. Integration Hub provides pre-built connectors plus a REST/SOAP API gateway. Legacy systems need connecting, not replacing.' },
      { q: 'How do non-digital citizens access services?', a: 'Web, phone, SMS, and in-person all feed the same case record. Agents can submit on behalf of citizens who don\'t use digital channels.' },
      { q: 'What accessibility standards does the portal meet?', a: 'WCAG 2.1 AA — screen reader compatible, keyboard navigable, multi-language support.' },
      { q: 'How long does a government implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    metaTitle: 'ServiceNow Retail & E-Commerce — Unify Every Channel in Real Time',
    metaDescription: 'Orders from six places. Inventory four hours stale. Returns taking two weeks. ifBash delivers ServiceNow that unifies every channel — online, in-store, and marketplace — in real time.',
    keywords: [],
    aiAngle: 'Agents earn their place on order and returns queries, which are high-volume, well-bounded, and answerable from data the system already holds.',
    capabilities: [
      { icon: Workflow, title: 'One View of Every Order', desc: 'Orders from web, store, and marketplace in a single record, so support answers customers from the same data the warehouse is working from.' },
      { icon: Layers, title: 'BOPIS That Works', desc: 'Pickup and curbside as an orchestrated workflow — reserve, pick, notify, hand over — with every step owned and timed.' },
      { icon: Gauge, title: 'Inventory That Thinks Ahead', desc: 'Stock exceptions raised as work before a channel oversells, rather than reported after the customer has already been disappointed.' },
    ],
    faqs: [
      { q: 'How fast can you unify our retail channels?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'Can ServiceNow handle BOPIS and curbside?', a: 'Yes. Real-time store inventory checks, two-hour SLAs, and automated customer notifications.' },
      { q: 'What platforms do you integrate with?', a: 'Shopify, Magento, Salesforce Commerce Cloud. POS: NCR, Toast, Square. WMS: Manhattan, Blue Yonder. All via Integration Hub.' },
      { q: 'How fast can returns processing improve?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'How long does a retail implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'technology-software-companies',
    metaTitle: 'ServiceNow Technology & Software — Ship Faster, Ship Smarter',
    metaDescription: 'Three-day change approvals. Incidents that take hours to triage. Customers who churn before anyone notices. ifBash delivers ServiceNow that automates DevOps, AIOps, and customer success.',
    keywords: [],
    aiAngle: 'Agents are strong on internal support — answering engineering questions from your own runbooks and documentation with citations, so the answer is checkable rather than plausible.',
    capabilities: [
      { icon: Workflow, title: 'Deployments That Flow', desc: 'Change and release governed through the pipeline rather than a weekly meeting, with risk assessed from the actual change record.' },
      { icon: Layers, title: 'One Correlated View', desc: 'Alerts from multiple monitoring tools correlated into a single incident, so triage begins with a probable cause instead of a noise floor.' },
      { icon: Gauge, title: 'Churn That Stops', desc: 'Support signal, product usage, and account health in one view, with renewal risk raised as work while there is still time to act on it.' },
    ],
    faqs: [
      { q: 'How does ServiceNow accelerate software delivery?', a: 'Risk-scoring auto-approves low-risk changes in under 30 minutes. High-risk changes route to mobile approval. Teams see change cycles drop from days to hours.' },
      { q: 'What cloud platforms does it work with?', a: 'AIOps ingests alerts from AWS CloudWatch, Azure Monitor, and GCP Operations, grouping related alerts into a single incident with root-cause analysis.' },
      { q: 'Can ServiceNow reduce customer churn?', a: 'We will answer this specifically for your environment during scoping — technology software companies organisations vary enough that a general answer would mislead.' },
      { q: 'How long does a tech implementation take?', a: 'DevOps goes live first, with AIOps and customer success following in later phases.' },
      { q: 'What compliance frameworks are covered?', a: 'SOC 2, ISO 27001, FedRAMP. Evidence collected continuously — not assembled the week before an audit.' },
    ],
  },
  {
    slug: 'telecommunications',
    metaTitle: 'ServiceNow Telecommunications — Automate Your Network Operations',
    metaDescription: 'Field dispatch by printout. Alerts from three NMS with no correlation. 5G rollouts tracked in spreadsheets. ifBash delivers ServiceNow that automates network ops, field service, and deployment.',
    keywords: [],
    aiAngle: 'Agents fit outage and appointment communication, and first-line triage where the top intents are narrow enough to handle properly rather than approximately.',
    capabilities: [
      { icon: Workflow, title: 'Field Service', desc: 'Dispatch by skill and proximity, with the full site and asset history on the technician’s device before they arrive rather than after the first failed visit.' },
      { icon: Layers, title: '5G Deployment', desc: 'Site rollout run as a governed programme — permits, milestones, and crew mobilisation tracked against one plan instead of a spreadsheet per region.' },
      { icon: Gauge, title: 'Network AIOps', desc: 'Events from multiple network management systems correlated into actionable incidents, with the affected service attached to each one.' },
    ],
    faqs: [
      { q: 'How does ServiceNow improve network operations?', a: 'AIOps correlates alerts from Nokia NetAct, Ericsson OSS, and third-party NMS into single incident records with auto-generated root-cause analysis.' },
      { q: 'Can ServiceNow manage 5G rollouts?', a: 'Yes. Permit-gated deployment workflows ensure no contractor is dispatched without confirmed permits. Every site visible on a single dashboard.' },
      { q: 'How fast are customer outage notifications?', a: 'Notifications fire from the incident record itself, so customers hear about a fault without anyone composing a message. AI playbooks surface the most likely causes before an engineer opens the ticket.' },
      { q: 'What field service capabilities are included?', a: 'We will answer this specifically for your environment during scoping — telecommunications organisations vary enough that a general answer would mislead.' },
      { q: 'How long does a telecom implementation take?', a: 'Field service and network ops go live first, with 5G programme management and CX following.' },
    ],
  },
];

export function getIndustryEntry(slug: string) {
  return industryEntries.find((e) => e.slug === slug) ?? null;
}

/** Short display name + icon, taken from the nav so the two cannot drift. */
export function industryMeta(slug: string) {
  const item = industryItems.find((i) => i.href === `/industries/${slug}`);
  return item ? { title: item.title, icon: item.icon } : null;
}

export const industrySlugs = industryEntries.map((e) => e.slug);
