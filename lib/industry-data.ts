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

/**
 * Gulf regulatory and national-transformation framing.
 *
 * The site's compliance language was written for US and EU buyers — FedRAMP,
 * HIPAA, 21 CFR Part 11, GDPR. All of that stays: it is true and it matters to
 * those buyers. This block is ADDITIVE, for the Middle East buyers who ask a
 * different set of questions.
 *
 * TRUTH POLICY: `note` describes what the framework requires and what we design
 * to. It must never claim ifBash holds a certification, nor assert an
 * authorisation on ServiceNow's behalf that isn't independently verifiable.
 * "We map configuration to these control families" is a description of method.
 * "We are NCA-certified" would be a lie. Keep to the former.
 */
export interface RegionalContext {
  /** Frameworks a Gulf buyer in this sector actually raises in procurement. */
  frameworks: { name: string; jurisdiction: string; note: string }[];
  /** How platform work here maps to national transformation programmes. */
  visionAlignment: string;
}

export interface IndustryEntry {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Where AI agents genuinely fit in this sector — and where they don't. */
  aiAngle: string;
  capabilities: { icon: LucideIcon; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  /** Optional. Pages without it render exactly as they did before. */
  regional?: RegionalContext;
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
    regional: {
      visionAlignment:
        'Utilities across the Gulf are running the same two programmes at once: replacing paper-and-phone operations with digital workflow, and standing up generation capacity that did not exist five years ago. Saudi Vision 2030 sets a renewable generation target and a local content expectation on the supply chain behind it; the UAE Energy Strategy runs a parallel clean-energy build. Both create the same platform problem — asset, outage, permit-to-work, and contractor data spread across systems that were never meant to reconcile.',
      frameworks: [
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'The National Cybersecurity Authority\'s Essential Cybersecurity Controls apply to government bodies and critical national infrastructure, which includes most utilities. We map access control, change management, logging, and third-party access to the relevant control families.',
        },
        {
          name: 'IKTVA / local content',
          jurisdiction: 'Saudi Arabia',
          note: 'In-Kingdom Total Value Add scoring shapes supplier selection across the energy supply chain. Where local content reporting is a contractual obligation, the supplier and contract data that feeds it can be modelled in the platform rather than assembled by hand each cycle.',
        },
        {
          name: 'NDMO data standards',
          jurisdiction: 'Saudi Arabia',
          note: 'National Data Management Office standards cover classification, retention, and cross-border transfer. Classification is a configuration decision that gets much more expensive after go-live, so we settle it during design.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Both jurisdictions now have personal data protection law — Saudi PDPL under SDAIA, and UAE Federal Decree-Law 45/2021. Relevant wherever customer or contractor personal data enters a workflow.',
        },
      ],
    },
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
    regional: {
      visionAlignment:
        'HIPAA is the reference point for US providers and stays on this page for them. A Gulf hospital group is regulated somewhere else entirely: the Saudi Health Council and MOH on the Saudi side, DHA and SEHA in the UAE, each with its own record-keeping and reporting expectations. Vision 2030\'s health transformation is converting hospitals into corporatised clusters, which turns internal service delivery — referrals, bed management, facilities, IT — into a cross-entity problem instead of a per-hospital one.',
      frameworks: [
        {
          name: 'MOH / Saudi Health Council',
          jurisdiction: 'Saudi Arabia',
          note: 'Sector reporting and patient record handling requirements sit alongside the cluster operating model. Where a workflow crosses cluster boundaries, ownership and audit trail need to be explicit in the data model, not implied by who happens to open the record.',
        },
        {
          name: 'DHA / SEHA',
          jurisdiction: 'UAE',
          note: 'Emirate-level health authorities set their own licensing and data expectations. Multi-emirate groups end up with more than one regulator over the same process, which is a configuration question before it is a compliance one.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Health data is the highest-sensitivity category under both laws. Consent, retention, and cross-border transfer need answering during design — retrofitting them after go-live means reworking every integration that touches patient data.',
        },
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Applies where a provider is classed as critical national infrastructure. We map platform access control, logging, and change management to the relevant control families.',
        },
      ],
    },
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
    regional: {
      visionAlignment:
        '21 CFR Part 11 governs electronic records for the US market and remains the right reference for anyone filing with the FDA. For a manufacturer or distributor operating in the Gulf, the equivalent authority is the SFDA in Saudi Arabia and MOHAP in the UAE. Vision 2030 includes localising pharmaceutical and medical device manufacturing, which means validation and quality systems being stood up in-region — often for the first time, and usually against a deadline tied to a licence.',
      frameworks: [
        {
          name: 'SFDA',
          jurisdiction: 'Saudi Arabia',
          note: 'The Saudi Food and Drug Authority licenses products, facilities, and distribution. GxP records, deviation handling, and batch documentation need to survive an SFDA inspection, which is a different evidence set from an FDA one even where the underlying process is identical.',
        },
        {
          name: 'MOHAP',
          jurisdiction: 'UAE',
          note: 'Product registration and pharmacovigilance reporting run through the Ministry of Health and Prevention. Adverse event intake with regulator-specific SLA timers is straightforward to model once the reporting deadlines are known.',
        },
        {
          name: '21 CFR Part 11 / EU Annex 11',
          jurisdiction: 'US / EU',
          note: 'Still relevant, and unchanged on this page — most Gulf manufacturers export, and an export market brings its own electronic-records regime with it. Systems validated once against the stricter of the two are cheaper to keep validated.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Applies to patient and trial subject data. Where a study spans jurisdictions, cross-border transfer conditions differ, and that difference belongs in the data model rather than in a policy document nobody reads.',
        },
      ],
    },
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
    regional: {
      visionAlignment:
        'FedRAMP is the authorisation a US federal buyer asks about, and it stays on this page for them. It carries no weight with a Saudi or Emirati government entity, which answers to an entirely separate stack: the Digital Government Authority and NCA in Saudi Arabia, TDRA and DESC in the UAE. Vision 2030 and the UAE\'s digital government agenda both set explicit targets for moving citizen services onto digital channels, and both measure the entity, not the supplier — so the reporting a platform can produce is part of the value, not an afterthought.',
      frameworks: [
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Essential Cybersecurity Controls are mandatory for government entities. Access control, logging, change management, and third-party access are the control families a workflow platform touches directly, and we hand over the mapping with the build.',
        },
        {
          name: 'DGA',
          jurisdiction: 'Saudi Arabia',
          note: 'The Digital Government Authority sets standards for digital service delivery and maturity reporting. Where an entity is measured on service digitisation, the platform should produce that evidence as a by-product of running the service.',
        },
        {
          name: 'NDMO / PDPL',
          jurisdiction: 'Saudi Arabia',
          note: 'National Data Management Office standards plus PDPL cover classification, retention, and cross-border transfer of citizen data. Classification decided during design; retrofitted classification means revisiting every integration.',
        },
        {
          name: 'TDRA / DESC',
          jurisdiction: 'UAE',
          note: 'Federal digital government regulation via TDRA, with Dubai entities additionally in scope for Dubai Electronic Security Center requirements. Multi-emirate programmes routinely have two sets of controls over one process.',
        },
        {
          name: 'Etimad / local content',
          jurisdiction: 'Saudi Arabia',
          note: 'Government procurement runs through Etimad, with local content weighting in evaluation. Worth knowing before a tender that the commercial structure, not just the technical response, is being scored.',
        },
      ],
    },
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
    regional: {
      visionAlignment:
        'Gulf operators are among the most aggressive 5G deployers anywhere, and the regulators moved with them. Saudi Arabia\'s CST and the UAE\'s TDRA both set service quality and reporting obligations that land on operations teams as recurring evidence work. Vision 2030 treats connectivity as enabling infrastructure for everything else in the programme, which means network programme delivery is scrutinised at a national level rather than only a commercial one.',
      frameworks: [
        {
          name: 'CST',
          jurisdiction: 'Saudi Arabia',
          note: 'The Communications, Space and Technology Commission sets licensing and service quality obligations. Where quality-of-service reporting is periodic and mandatory, it is cheaper to generate it from operational records than to compile it.',
        },
        {
          name: 'TDRA',
          jurisdiction: 'UAE',
          note: 'Telecommunications and Digital Government Regulatory Authority requirements cover service standards and consumer protection. Complaint handling with regulator-facing SLA timers is a workflow problem with a well-defined shape.',
        },
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Operators are critical national infrastructure. Access control, change management, and third-party access mapping applies to the platform as directly as it does to the network.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Subscriber data at telecom scale makes retention and consent handling an architectural decision. Both laws constrain cross-border transfer, which matters for any centralised regional instance.',
        },
      ],
    },
  },
  // ── Gulf-priority verticals ───────────────────────────────────────────
  // The ten above were written for a US and EU audience. These five carry the
  // largest platform spend in the Middle East and had no page to land on.
  // Same rule as everywhere else: no outcome numbers that cannot be sourced,
  // no named clients, no claimed accreditations.
  {
    slug: 'banking-financial-services',
    metaTitle: 'ServiceNow Banking & Financial Services — Regulated Change, Without the Paper Trail',
    metaDescription: 'SAMA audits. Change windows that need three approvals. Complaint SLAs measured by the regulator. ifBash delivers ServiceNow that produces the evidence as the work happens, instead of assembling it the week before an inspection.',
    keywords: [],
    aiAngle: 'Agents suit the reading work in a regulated bank: summarising a complaint file against policy, drafting the first version of a change record from the ticket it came from, or pulling the evidence for one control into a single view. What they should not do is approve anything. In SAMA-regulated change, the approval is the control — an agent that can grant it has removed the thing the framework exists to enforce.',
    capabilities: [
      { icon: ShieldCheck, title: 'Regulated Change', desc: 'Change, approval, and rollback modelled so the audit trail is a by-product of the process rather than a report someone runs afterwards. Segregation of duties enforced in configuration, not in a policy document.' },
      { icon: Workflow, title: 'Complaint Handling', desc: 'Regulator-facing complaint workflows with the reporting deadline as an SLA timer on the record, so an approaching breach is visible while it can still be prevented.' },
      { icon: Database, title: 'Privileged Access', desc: 'Access requests, recertification, and revocation as workflow with a dated record of who approved what — the question every framework asks and most banks answer manually.' },
      { icon: Gauge, title: 'Vendor & Outsourcing Risk', desc: 'Third-party assessments, contract dates, and control evidence in one register, so an outsourcing review is a query rather than a project.' },
      { icon: Layers, title: 'Core Integration', desc: 'Connectors into core banking, card, and payment systems through Integration Hub, tested under production load before go-live rather than during it.' },
      { icon: Sparkles, title: 'Islamic Finance Products', desc: 'Product-specific workflow where Sharia-compliant structures differ from conventional ones — separate approval paths and documentation sets, modelled rather than worked around.' },
    ],
    faqs: [
      { q: 'How does ServiceNow support SAMA Cyber Security Framework requirements?', a: 'The controls a workflow platform touches directly are change management, privileged access, and incident handling. Each becomes a record with an approver, a timestamp, and retained evidence. We map the configuration to the relevant control families and hand over the mapping — the accredited assessment itself is yours or your assessor\'s.' },
      { q: 'Can change management satisfy segregation of duties?', a: 'Yes, and this is configuration rather than process documentation. The requester, approver, and implementer are enforced as distinct roles, and a change cannot advance without the approval existing as a dated record.' },
      { q: 'How do you handle customer data under PDPL?', a: 'Consent, retention period, and cross-border transfer are settled during design, because each one constrains the data model. Retrofitting them means revisiting every integration that touches customer records.' },
      { q: 'Do you work with Islamic banking products?', a: 'Where product structures differ, the workflow differs — separate approval chains, different documentation, and in some cases a distinct product record. We model the difference rather than forcing one path to serve both.' },
      { q: 'How long does a banking implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else\'s project.' },
    ],
    regional: {
      visionAlignment:
        'Gulf financial services is being reshaped by two forces at once: regulators that have moved faster than most of the world on cybersecurity and data protection, and national programmes pushing digital payments and financial inclusion. Saudi Vision 2030 sets explicit targets for non-cash transactions and for the sector\'s contribution to GDP, and the Financial Sector Development Programme sits underneath it. The practical consequence for a bank is that change volume goes up while the evidence burden on each change also goes up.',
      frameworks: [
        {
          name: 'SAMA CSF',
          jurisdiction: 'Saudi Arabia',
          note: 'Saudi Central Bank Cyber Security Framework, applying to banks, insurers, and financing companies. Change management, privileged access, and incident handling are the control families a workflow platform is most directly in scope for.',
        },
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Applies in addition to SAMA requirements for institutions classed as critical national infrastructure. Overlapping control sets over one process is normal here, and worth mapping once rather than twice.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Customer financial data is high-sensitivity under both regimes. Cross-border transfer restrictions matter for any regional instance serving more than one country.',
        },
        {
          name: 'CBUAE / DIFC / ADGM',
          jurisdiction: 'UAE',
          note: 'Central Bank requirements on the mainland, with DIFC and ADGM operating separate data protection regimes. A group spanning mainland and free zone answers to more than one.',
        },
      ],
    },
  },
  {
    slug: 'giga-projects',
    metaTitle: 'ServiceNow for Giga-Projects — Systems That Exist Before the Buildings Do',
    metaDescription: 'A new city has no legacy systems and no IT department yet. It has thousands of contractors, a fixed deadline, and every process still to be defined. ifBash builds the operational platform while the asset is still under construction.',
    keywords: [],
    aiAngle: 'On a programme of this size the bottleneck is reading, not deciding. Agents work well on contractor submittal review — checking a document set against the required list and flagging what is missing before it reaches an engineer — and on drafting the first version of an RFI response from the specification it refers to. Anything with a safety or commercial consequence keeps a named human approver, because on a live construction site the cost of a confidently wrong answer is measured in more than money.',
    capabilities: [
      { icon: Workflow, title: 'Contractor Onboarding', desc: 'Prequalification, insurance, permits, and induction as one workflow across thousands of vendors, so a contractor cannot reach site with an expired document nobody checked.' },
      { icon: ShieldCheck, title: 'Permit to Work', desc: 'Permits, isolations, and safety approvals as records with expiry and dependency, rather than paper in a site office — the difference matters most during handover between construction and operations.' },
      { icon: Layers, title: 'Asset Data From Day One', desc: 'Asset registers populated during construction instead of reconstructed after it. What gets captured at commissioning is what operations will have to run on for thirty years.' },
      { icon: Database, title: 'Programme Reporting', desc: 'Package-level status rolled up without a reporting team rekeying it, so a delay is visible while there is still time to act on the critical path.' },
      { icon: Gauge, title: 'Local Content Tracking', desc: 'Supplier and spend data structured so local content reporting is produced from records rather than assembled manually each cycle.' },
      { icon: Sparkles, title: 'Greenfield Service Design', desc: 'No legacy to migrate is an advantage only if the model is designed rather than inherited. We define the service catalogue and operating model before there is an organisation to argue about it.' },
    ],
    faqs: [
      { q: 'Why implement a service platform before the asset is operational?', a: 'Because the asset data and permit history created during construction is what operations inherits. Capturing it as it happens is cheaper than reconstructing it from contractor archives after handover, and handover is when the gaps become expensive.' },
      { q: 'Can it handle thousands of contractors and subcontractors?', a: 'Vendor onboarding, document expiry, and site access are the mechanics of this, and they are ordinary workflow problems at unusual scale. The design question is hierarchy — a subcontractor three tiers down still needs a valid permit.' },
      { q: 'How does this support local content reporting?', a: 'Local content is calculated from supplier, contract, and spend data. If those live in structured records with the right attributes from the start, reporting is a query. If they do not, it is a quarterly manual exercise.' },
      { q: 'What happens at handover from construction to operations?', a: 'The asset register, permit history, and warranty data transfer as records rather than as a document dump. We model that transition during design, because it is the point where most programmes lose their data.' },
      { q: 'How long does a giga-project implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else\'s project.' },
    ],
    regional: {
      visionAlignment:
        'Giga-projects are a Gulf category with no real equivalent elsewhere: capital programmes large enough to have their own regulators, their own utilities, and eventually their own residents. NEOM, Qiddiya, Diriyah, the Red Sea developments and ROSHN are all Vision 2030 delivery vehicles, which means they are measured against national targets rather than only commercial ones. For a platform team the defining feature is greenfield — no legacy systems, no accumulated process, and no organisation yet to inherit either. That is an opportunity and a trap: whatever gets configured first becomes the operating model by default.',
      frameworks: [
        {
          name: 'Local content / LCGPA',
          jurisdiction: 'Saudi Arabia',
          note: 'Local Content and Government Procurement Authority requirements shape supplier selection and reporting on programmes of this scale. The data that feeds it is supplier and spend data, which is a modelling decision.',
        },
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Applies where a programme operates critical infrastructure — which most eventually do, once utilities and transport come online. Easier to design to it than to retrofit at the point the classification lands.',
        },
        {
          name: 'NDMO data standards',
          jurisdiction: 'Saudi Arabia',
          note: 'Classification and retention standards apply to the enormous volume of design, contractor, and resident data a programme accumulates. Deciding this early is materially cheaper.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia',
          note: 'Relevant from the first contractor record onward, and again later for residents and visitors. Two very different populations under one law.',
        },
      ],
    },
  },
  {
    slug: 'aviation-airports',
    metaTitle: 'ServiceNow Aviation & Airports — When Every Delay Has a Downstream Cost',
    metaDescription: 'Ground handling, terminal systems, and maintenance all running on separate tools. ifBash delivers ServiceNow that connects them, so a fault on a baggage belt is visible to the people whose schedule it is about to break.',
    keywords: [],
    aiAngle: 'Agents fit the triage layer: reading an incoming fault report, matching it to the asset and its maintenance history, and routing it with the context already attached. Where they do not belong is anything touching airworthiness or safety-of-life decisions — those need a qualified human and a regulator-legible record of who decided.',
    capabilities: [
      { icon: Workflow, title: 'Terminal Operations', desc: 'Faults on gates, belts, bridges, and screening equipment as records connected to the flights they affect, rather than as separate maintenance tickets nobody correlates.' },
      { icon: ShieldCheck, title: 'Safety & Compliance Reporting', desc: 'Safety reports and corrective actions with the regulatory reporting deadline as an SLA on the record, and the evidence retained against the action rather than in a mailbox.' },
      { icon: Layers, title: 'Asset & Maintenance', desc: 'Airport and ground equipment asset registers with maintenance schedules, warranty, and failure history in one place — so replace-or-repair is a decision with data behind it.' },
      { icon: Database, title: 'Ground Handling Coordination', desc: 'Turnaround tasks and exceptions visible across handling agents, so a missing crew or a late fuel bowser surfaces before it becomes a delay code.' },
      { icon: Gauge, title: 'Passenger Service Requests', desc: 'Lost baggage, accessibility requests, and complaints as connected cases with ownership, instead of three systems that each know part of the story.' },
      { icon: Sparkles, title: 'Multi-Entity Operations', desc: 'Airports run on many organisations sharing one site. Workflows modelled so an authority, an operator, and a handling agent can each own their part without the record fragmenting.' },
    ],
    faqs: [
      { q: 'Can ServiceNow connect terminal equipment faults to flight impact?', a: 'Yes, and this is where most of the value is. A belt fault is only meaningful once you know which flights depend on it. That is an integration between the asset record and the operational schedule.' },
      { q: 'How do you handle multiple organisations on one site?', a: 'Domain separation and clear record ownership. An authority, an operator, and a handling agent each need their own view and their own accountability without the underlying record splitting into three versions.' },
      { q: 'Does this cover aircraft maintenance?', a: 'Airworthiness-regulated maintenance normally stays in a dedicated MRO system, and we would tell you to keep it there. What ServiceNow does well is the ground equipment, facilities, and IT around it, plus the workflow that connects them.' },
      { q: 'What about GACA and civil aviation reporting?', a: 'Safety reporting obligations become SLA-timed records with retained evidence. The reporting format is jurisdiction-specific, so we confirm it during scoping rather than assuming.' },
      { q: 'How long does an aviation implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else\'s project.' },
    ],
    regional: {
      visionAlignment:
        'Aviation is central to Gulf economic strategy in a way it is almost nowhere else. Saudi Arabia\'s Vision 2030 tourism and logistics targets depend on airport capacity and a new national carrier; the UAE and Qatar built their economies partly on hub connectivity. That produces sustained capital investment in terminals and ground infrastructure, and a corresponding need for operational systems that can absorb new assets without a re-implementation each time.',
      frameworks: [
        {
          name: 'GACA',
          jurisdiction: 'Saudi Arabia',
          note: 'General Authority of Civil Aviation sets safety and operational reporting obligations. Where reporting is periodic and mandatory, generating it from operational records beats compiling it.',
        },
        {
          name: 'NCA ECC',
          jurisdiction: 'Saudi Arabia',
          note: 'Airports are critical national infrastructure. Access control and change management mapping applies to operational technology as well as IT.',
        },
        {
          name: 'GCAA',
          jurisdiction: 'UAE',
          note: 'General Civil Aviation Authority requirements, with emirate-level operators adding their own. Multi-airport groups commonly hold more than one set.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Passenger data at airport scale, including biometric processing where deployed, is the highest-sensitivity category in both laws.',
        },
      ],
    },
  },
  {
    slug: 'construction-real-estate',
    metaTitle: 'ServiceNow Construction & Real Estate — From Handover to Thirty Years of Operation',
    metaDescription: 'Snag lists in spreadsheets. Warranty claims nobody can evidence. Tenant requests by WhatsApp. ifBash delivers ServiceNow that carries a building from practical completion into facilities operation without losing its history.',
    keywords: [],
    aiAngle: 'Agents are useful where the input is unstructured and the output is a draft: turning a tenant\'s description of a fault into a routed work order with the right asset attached, or reading a snag photo set and grouping it by trade. Commercial decisions — a warranty claim, a variation, a retention release — stay with a named human, because those are contractual positions rather than tasks.',
    capabilities: [
      { icon: Workflow, title: 'Handover & Snagging', desc: 'Defects captured against the asset and the responsible contractor, with warranty dates attached — so a claim eighteen months later has evidence behind it instead of an argument.' },
      { icon: Layers, title: 'Facilities Operations', desc: 'Planned and reactive maintenance on one asset register, so the cost of running a building is visible per asset rather than as a single line in a budget.' },
      { icon: Database, title: 'Tenant & Occupier Services', desc: 'Requests, complaints, and access as cases with ownership and response times, replacing the phone-and-messaging layer that leaves no record.' },
      { icon: ShieldCheck, title: 'Compliance & Inspection', desc: 'Statutory inspections — fire, lift, electrical — as scheduled records with certificates retained against the asset and expiry visible before it lapses.' },
      { icon: Gauge, title: 'Portfolio Reporting', desc: 'Condition, cost, and incident data comparable across buildings, which is the prerequisite for deciding where capital should go next.' },
      { icon: Sparkles, title: 'Contractor Management', desc: 'Service providers with scope, SLA, and performance history in one register, so a renewal conversation has evidence on both sides.' },
    ],
    faqs: [
      { q: 'What is the highest-value place to start?', a: 'Handover. The defect, warranty, and asset data created at practical completion is what facilities management runs on for the life of the building, and it is the data most often lost between the two teams.' },
      { q: 'Can it manage warranty claims against contractors?', a: 'Yes — defect, asset, contractor, and warranty period held together as records, so a claim is supported by dated evidence rather than reconstructed from email.' },
      { q: 'How does it handle mixed-use portfolios?', a: 'Residential, retail, and commercial have different service expectations and different response times. Those are configuration — one platform, distinct service definitions per asset class.' },
      { q: 'Does this replace a BIM or design system?', a: 'No, and it should not try to. BIM stays where it is. What ServiceNow adds is the operational layer that consumes asset data and produces maintenance and service history against it.' },
      { q: 'How long does a real estate implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else\'s project.' },
    ],
    regional: {
      visionAlignment:
        'The Gulf development pipeline creates an unusual operational problem: a very large volume of assets reaching handover at roughly the same time, into facilities organisations that are being built at the same moment. Saudi Vision 2030 housing targets and the ROSHN and NHC programmes behind them, plus sustained development across the UAE and Qatar, mean the constraint is rarely construction capacity — it is having an operating model ready for the building on the day it completes.',
      frameworks: [
        {
          name: 'Municipal / civil defence',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Statutory inspection and fire safety certification regimes are municipal and emirate-level. Certificate expiry belongs on the asset record, where it is visible before it lapses.',
        },
        {
          name: 'Local content / LCGPA',
          jurisdiction: 'Saudi Arabia',
          note: 'Applies to development programmes with government or PIF-linked ownership. Supplier and spend structure determines whether reporting is a query or a manual exercise.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Tenant and resident personal data, including access control and CCTV where integrated, falls in scope. Retention is the question that gets asked first.',
        },
        {
          name: 'Sustainability reporting',
          jurisdiction: 'Regional',
          note: 'Energy and water consumption reporting is increasingly a condition of development approval. Meter and consumption data structured against assets makes it produceable rather than estimated.',
        },
      ],
    },
  },
  {
    slug: 'hospitality',
    metaTitle: 'ServiceNow Hospitality — The Back of House Guests Never See',
    metaDescription: 'A guest complaint that never reaches maintenance. An engineering job logged twice. ifBash delivers ServiceNow that connects housekeeping, engineering, and guest services so a problem in one is visible to the others.',
    keywords: [],
    aiAngle: 'Agents handle the intake layer well — reading a guest message in whatever language it arrives in, classifying it, and routing it to the right department with the room and asset attached. What they should not do is resolve a service recovery decision. Compensation is a commercial judgement, and a guest who has already had a bad night should be talking to a person.',
    capabilities: [
      { icon: Workflow, title: 'Guest Request Routing', desc: 'Requests from any channel becoming a single case with a room, an owner, and a response time — instead of a radio call nobody logged.' },
      { icon: Layers, title: 'Engineering & Maintenance', desc: 'Planned and reactive work on a room and equipment asset register, so a recurring fault is visible as a pattern rather than as six unconnected jobs.' },
      { icon: Database, title: 'Housekeeping Coordination', desc: 'Room status, inspection, and turnaround exceptions visible to front desk, so a room is not sold before it is genuinely ready.' },
      { icon: ShieldCheck, title: 'Compliance & Safety', desc: 'Fire, food safety, and pool or spa inspections as scheduled records with certificates retained and expiry surfaced in advance.' },
      { icon: Gauge, title: 'Multi-Property Operations', desc: 'Shared service definitions across a portfolio with per-property variation, so a group can compare performance without forcing every hotel into one process.' },
      { icon: Sparkles, title: 'Seasonal Workforce', desc: 'Onboarding, access, and equipment issue as workflow — built for high turnover and for demand peaks around Hajj, Umrah, and the events calendar.' },
    ],
    faqs: [
      { q: 'Does this replace our property management system?', a: 'No. The PMS keeps reservations, rates, and folios. ServiceNow handles the operational layer around it — engineering, housekeeping coordination, and guest service cases — and integrates so a case can reference a stay.' },
      { q: 'Can it handle guest requests in Arabic and English?', a: 'The workflow is language-agnostic and case records handle either. Where an AI agent does the intake classification, it reads both. Be clear-eyed about the limit though: routing a request is not the same as replying to a guest in their language, and we would not present it as such.' },
      { q: 'How does it work across a multi-property group?', a: 'Shared service catalogue with per-property configuration. Group-level reporting needs comparable definitions, which is the part worth agreeing before build rather than after.' },
      { q: 'What about seasonal demand peaks?', a: 'The workforce and access side is workflow — onboarding, provisioning, and revocation at volume. The operational side is capacity planning, which the data supports once a few cycles of history exist.' },
      { q: 'How long does a hospitality implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else\'s project.' },
    ],
    regional: {
      visionAlignment:
        'Hospitality is one of the clearest Vision 2030 growth targets, and the Saudi build-out is happening alongside religious tourism volumes that already make the Kingdom one of the largest hospitality markets in the region. Add the UAE and Qatar event calendars and the operational pattern is distinctive: extreme, predictable demand peaks against a largely seasonal workforce. Both halves of that are workflow problems before they are staffing problems.',
      frameworks: [
        {
          name: 'Ministry of Tourism licensing',
          jurisdiction: 'Saudi Arabia',
          note: 'Property classification and licensing carries inspection and record-keeping obligations. Certificate expiry belongs on the asset record.',
        },
        {
          name: 'Municipal food safety',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Food and beverage inspection regimes are municipal. Scheduled inspection records with retained evidence make an unannounced visit a non-event.',
        },
        {
          name: 'PDPL',
          jurisdiction: 'Saudi Arabia / UAE',
          note: 'Guest data including identity documents is in scope, and retention limits matter where a PMS has historically kept everything indefinitely.',
        },
        {
          name: 'Civil defence / fire safety',
          jurisdiction: 'Regional',
          note: 'Certification and periodic inspection is a condition of operation. Expiry visible in advance rather than discovered during an audit.',
        },
      ],
    },
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
