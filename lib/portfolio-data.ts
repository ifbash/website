// Generated from the 38 former static portfolio pages, then cleaned:
// every fabricated client, executive quote, and unverifiable metric was
// removed. Do not reintroduce numbers that cannot be evidenced.
//
// Titles, categories, and nav icons come from components/nav-data.ts —
// this file holds only the page body content.
import { Workflow, Layers, Gauge, ShieldCheck, Database, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { portfolioCategories, slug } from '@/components/nav-data';

export interface PortfolioCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}

export interface PortfolioEntry {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  capabilities: PortfolioCapability[];
  phases: { phase: string; items: string[] }[];
  faqs: { q: string; a: string }[];
}

export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: 'accounts-payable-operations',
    metaTitle: 'ServiceNow AP Operations — Accounts Payable Automation',
    metaDescription: 'Streamline accounts payable processes. Pay suppliers confidently and accurately with AI-powered automation.',
    keywords: [
      'ServiceNow AP operations',
      'accounts payable',
      'invoice automation',
      'document intelligence',
      'payment operations',
      'supplier management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Document Intelligence', desc: 'Manual data entry eliminated entirely, configured on ServiceNow and governed the same way as the rest of your platform.', points: [
          'AI extraction',
          'No manual entry'
        ] },
      { icon: Layers, title: 'Invoice Processing Automation', desc: 'Automated ingestion, validation, and processing. Two-way and three-way matching built in.', points: [
          'Auto-ingestion',
          '2/3-way matching',
          'Validation workflows'
        ] },
      { icon: Gauge, title: 'Exception Management', desc: 'Automated exception detection with pre-configured rules. Supplier mismatches and duplicates handled automatically.', points: [
          'Auto-detection',
          'Pre-configured rules',
          'Contextual resolution'
        ] },
      { icon: ShieldCheck, title: 'Real-Time Analytics', desc: 'Complete AP visibility with real-time dashboards, KPI monitoring, and predictive insights.', points: [
          'Real-time dashboards',
          'KPI monitoring',
          'Predictive insights'
        ] },
      { icon: Database, title: 'ERP Integration', desc: 'Seamless integration with SAP, Oracle, and Microsoft Dynamics. Real-time data sync, no duplication.', points: [
          'SAP/Oracle/Dynamics',
          'Real-time sync',
          'No duplication'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'AP process audit & pain point analysis',
          'Invoice volume assessment & benchmarking',
          'ERP integration requirements gathering'
        ] },
      { phase: 'Build', items: [
          'Document Intelligence configuration',
          'Invoice processing workflows setup',
          'ERP integration & data mapping'
        ] },
      { phase: 'Validate', items: [
          'Exception rule testing & refinement',
          'User acceptance testing',
          'AP team training & enablement'
        ] },
      { phase: 'Launch', items: [
          'Phased go-live & hypercare',
          'KPI monitoring & benchmarking',
          'Continuous optimization setup'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Accounts Payable Operations?', a: 'AP Operations modernizes siloed manual AP processes with AI-powered document intelligence, automated invoice processing, and seamless ERP integration — all on one unified platform.' },
      { q: 'What is Document Intelligence?', a: 'We will answer this specifically for your environment during scoping — ServiceNow AP Operations varies enough between organisations that a general answer would mislead.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What ERP systems does it integrate with?', a: 'SAP, Oracle, Microsoft Dynamics — plus any financial system via Integration Hub. Real-time data sync eliminates duplicate data entry across systems.' },
      { q: 'What outcomes should we expect?', a: 'The outcomes depend entirely on your starting point, so we agree the measures with you up front and report against those rather than quoting figures from engagements you cannot verify. ServiceNow AP Operations is scoped against your own baseline.' },
    ],
  },
  {
    slug: 'app-engine',
    metaTitle: 'ServiceNow App Engine — Low-Code Application Development',
    metaDescription: 'Reimagine every process as a digital workflow. Low-code, high velocity. AI-powered development that scales.',
    keywords: [
      'ServiceNow App Engine',
      'low-code development',
      'custom apps',
      'Creator Studio',
      'Now Assist',
      'workflow automation',
      'citizen development'
    ],
    capabilities: [
      { icon: Workflow, title: 'Now Assist for Creator', desc: 'GenAI-powered development — generate flows from natural language, intelligent code suggestions, automated testing.', points: [
          'Natural language to code',
          'Intelligent suggestions',
          'Automated testing'
        ] },
      { icon: Layers, title: 'ServiceNow Studio', desc: 'Unified IDE with visual development and full-stack capabilities. Professional developers and citizen developers, same platform.', points: [
          'Unified IDE',
          'Visual development',
          'Full-stack'
        ] },
      { icon: Gauge, title: 'Creator Studio', desc: 'No-code drag-and-drop interface. Citizen developers build apps fast. IT governs with confidence.', points: [
          'No-code',
          'Drag-and-drop',
          'Governed'
        ] },
      { icon: ShieldCheck, title: 'AI Agents', desc: 'Autonomous AI agents that reason, plan, and act independently. 24/7 process execution without human intervention.', points: [
          'Autonomous agents',
          '24/7 execution',
          'Self-learning'
        ] },
      { icon: Database, title: 'Flow Designer', desc: 'Visual process automation across departments. No-code integration with any system.', points: [
          'Visual automation',
          'Cross-dept',
          'No-code integration'
        ] },
    ],
    phases: [
      { phase: 'Ideate', items: [
          'Process discovery & opportunity mapping',
          'Prototype design & feasibility',
          'Success criteria definition'
        ] },
      { phase: 'Build', items: [
          'App development & workflow design',
          'Integration setup & data modeling',
          'AI agent configuration'
        ] },
      { phase: 'Validate', items: [
          'User acceptance testing',
          'Performance & security validation',
          'Iteration & refinement'
        ] },
      { phase: 'Launch', items: [
          'Deployment & go-live',
          'Training & documentation',
          'Continuous improvement setup'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow App Engine?', a: 'A low-code platform to build custom applications on ServiceNow. Create intelligent workflows, portals, and automation without traditional coding — powered by generative AI.' },
      { q: 'Can non-developers use it?', a: 'Yes. Creator Studio provides drag-and-drop tools for citizen developers. ServiceNow Studio provides a full IDE for professional developers. Both on the same governed platform.' },
      { q: 'What can I build with it?', a: 'Any business application — from simple approval workflows to complex case management systems with autonomous AI agents operating 24/7.' },
      { q: 'How fast can we build and deploy?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'How does it integrate with existing systems?', a: 'Native Integration Hub spokes, REST/SOAP APIs, and pre-built connectors for all major enterprise systems. Every app can connect to anything.' },
    ],
  },
  {
    slug: 'cloud-governance-suite',
    metaTitle: 'ServiceNow Cloud Governance — Automated Cloud Compliance',
    metaDescription: 'ServiceNow Cloud Governance delivered by ifBash: automated governance workflows for cloud accounts. provisioning, compliance, and lifecycle management at scale.',
    keywords: [
      'ServiceNow cloud governance',
      'cloud compliance',
      'cloud security',
      'cloud cost management',
      'multi-cloud governance',
      'cloud automation'
    ],
    capabilities: [
      { icon: Workflow, title: 'Cloud Account Management', desc: 'Automated governance workflows for cloud accounts. Provisioning, compliance, and lifecycle management at scale.', points: [
          'Automated provisioning',
          'Compliance automation',
          'Lifecycle management'
        ] },
      { icon: Layers, title: 'Cloud Security Management', desc: 'Strengthen security posture with automated vulnerability response and risk minimization across all cloud providers.', points: [
          'Security posture',
          'Vulnerability response',
          'Risk minimization'
        ] },
      { icon: Gauge, title: 'Cloud Cost Management', desc: 'Smart cost controls, budget enforcement, and resource optimization. Every cloud dollar traced to value.', points: [
          'Budget enforcement',
          'Resource optimization'
        ] },
      { icon: ShieldCheck, title: 'Continuous Compliance', desc: 'Real-time compliance monitoring, automated reporting, and audit-ready evidence. Compliance as code.', points: [
          'Real-time monitoring',
          'Audit-ready evidence'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Cloud environment audit & inventory',
          'Compliance baseline assessment',
          'Cost analysis & optimization targets'
        ] },
      { phase: 'Configure', items: [
          'Governance policy configuration',
          'Security control deployment',
          'Cost guardrail implementation'
        ] },
      { phase: 'Validate', items: [
          'Policy testing & simulation',
          'Compliance verification',
          'Team training & documentation'
        ] },
      { phase: 'Govern', items: [
          'Continuous monitoring setup',
          'Optimization cycle launch',
          'Quarterly governance reviews'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Cloud Governance Suite?', a: 'A unified platform to automate cloud governance across AWS, Azure, and GCP — compliance, security, and cost management working together instead of in silos.' },
      { q: 'How does it control costs?', a: 'Smart controls prevent budget overruns, identify idle resources, and optimize allocation automatically.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What cloud providers are supported?', a: 'AWS, Azure, GCP, plus hybrid on-premises via Discovery. All governed from a single pane of glass.' },
    ],
  },
  {
    slug: 'configure-price-quote',
    metaTitle: 'ServiceNow CPQ — AI-Powered Configure Price Quote',
    metaDescription: 'AI-powered CPQ that drives omnichannel revenue. Zero errors, zero wait time.',
    keywords: [
      'ServiceNow CPQ',
      'configure price quote',
      'guided selling',
      'dynamic pricing',
      'quote automation',
      'subscription management',
      'sales configuration'
    ],
    capabilities: [
      { icon: Workflow, title: 'Guided Configuration', desc: 'AI-guided selling flows that simplify complex product configurations. Constraint-based logic handles any product hierarchy.', points: [
          'AI-guided selling',
          'Constraint logic',
          'Visual configurator'
        ] },
      { icon: Layers, title: 'Dynamic Pricing', desc: 'Volume-based, tiered, customer-specific, and geographic pricing — all calculated in real time with no manual errors.', points: [
          'Real-time pricing',
          'Volume discounts',
          'Geo-pricing'
        ] },
      { icon: Gauge, title: 'Subscription Management', desc: 'Recurring services, ramped deals, renewal automation, and usage-based billing. Every revenue model supported.', points: [
          'Recurring revenue',
          'Renewal automation',
          'Usage billing'
        ] },
      { icon: ShieldCheck, title: 'Self-Service Quoting', desc: 'Customer and partner self-service portals. Generate accurate quotes anywhere, anytime, without sales involvement.', points: [
          'Customer self-service',
          'Partner portal',
          'Anywhere access'
        ] },
      { icon: Database, title: 'No-Code Administration', desc: 'Visual rule builder with drag-and-drop pricing logic. Real-time updates without developer dependency.', points: [
          'Visual rule builder',
          'No-code changes',
          'Real-time updates'
        ] },
    ],
    phases: [
      { phase: 'Model', items: [
          'Product catalog audit & hierarchy',
          'Pricing rule analysis & mapping',
          'Configuration logic documentation'
        ] },
      { phase: 'Build', items: [
          'CPQ configuration & logic engine',
          'Pricing engine setup & testing',
          'CRM/eCommerce integration'
        ] },
      { phase: 'Validate', items: [
          'Quote accuracy testing & QA',
          'Performance validation at scale',
          'Sales team training & enablement'
        ] },
      { phase: 'Launch', items: [
          'Phased rollout by region',
          'KPI monitoring & optimization',
          'Continuous pricing refinement'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow CPQ?', a: 'AI-powered configure-price-quote that handles complex product configurations, dynamic pricing, and automated quote generation in real time.' },
      { q: 'Can it handle complex product hierarchies?', a: 'Yes. The constraint-based logic engine handles multi-level hierarchies, dependencies, exclusions, and complex rules — all in real time as selections are made.' },
      { q: 'What pricing models does it support?', a: 'Volume-based, tiered, subscription, usage-based, geographic, customer-specific, channel-specific — all configurable without writing a single line of code.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What CRM systems does it integrate with?', a: 'Salesforce, Microsoft Dynamics, SAP, Oracle — plus e-commerce platforms, billing systems, and any custom CRM via Integration Hub.' },
    ],
  },
  {
    slug: 'customer-service-management',
    metaTitle: 'ServiceNow CSM — AI-Powered Customer Service',
    metaDescription: 'ServiceNow CSM delivered by ifBash: 24/7 autonomous operations — from routine requests to complex product recalls. human agents freed for what matters.',
    keywords: [
      'ServiceNow CSM',
      'customer service management',
      'AI agents',
      'customer journey mapping',
      'omnichannel',
      'NPS',
      'virtual agent'
    ],
    capabilities: [
      { icon: Workflow, title: 'AI Agents', desc: '24/7 autonomous operations — from routine requests to complex product recalls. Human agents freed for what matters.', points: [
          '24/7 autonomous',
          'Routine to complex',
          'Agent productivity'
        ] },
      { icon: Layers, title: 'Customer Journey Mapping', desc: 'Visualize every touchpoint, identify pain points, automate workflows, and personalize every engagement.', points: [
          'Journey visualization',
          'Pain point detection',
          'Personalized engagement'
        ] },
      { icon: Gauge, title: 'Omnichannel Integration', desc: 'Email, chat, phone, social, web — unified into a single agent workspace with complete customer context.', points: [
          'All channels unified',
          'Complete context',
          'Single workspace'
        ] },
      { icon: ShieldCheck, title: 'Virtual Agent', desc: 'AI-powered chatbot with natural language understanding. 24/7 self-service that actually resolves issues.', points: [
          'Natural language',
          '24/7 availability',
          'Real resolutions'
        ] },
      { icon: Database, title: 'NPS Optimization', desc: 'Real-time feedback tracking, automated follow-up, and pain point identification. Turn detractors into promoters.', points: [
          'Real-time feedback',
          'Auto follow-up',
          'Pain point insights'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Customer journey mapping & pain points',
          'Channel audit & integration plan',
          'AI agent use case identification'
        ] },
      { phase: 'Build', items: [
          'Platform configuration & workflows',
          'AI agent setup & training',
          'Omnichannel integration'
        ] },
      { phase: 'Launch', items: [
          'Agent training & enablement',
          'Phased channel rollout',
          'KPI baseline establishment'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics & insights',
          'Journey refinement & personalization',
          'Continuous improvement cycles'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow CSM?', a: 'AI-powered customer service platform connecting every channel, automating with AI agents, and mapping customer journeys end-to-end for proactive, personalized service.' },
      { q: 'How do AI Agents work in CSM?', a: 'Autonomous 24/7 agents gather data, make decisions, and execute tasks — from simple return requests to complex product recalls. They learn and improve continuously.' },
      { q: 'What channels does it support?', a: 'Email, chat, phone, social media, web portal, SMS — all unified into a single agent workspace with complete customer context.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What CRM systems does it integrate with?', a: 'Salesforce, Microsoft Dynamics, SAP, Oracle — plus any custom CRM via Integration Hub. CSM enhances, not replaces, your existing CRM.' },
    ],
  },
  {
    slug: 'digital-end-user-experience',
    metaTitle: 'ServiceNow DEX — Digital End-User Experience Management',
    metaDescription: 'Measure and continuously improve the technology experience for your employees.',
    keywords: [
      'ServiceNow DEX',
      'digital end-user experience',
      'employee experience',
      'desktop assistant',
      'DEX score',
      'proactive IT support'
    ],
    capabilities: [
      { icon: Workflow, title: 'Desktop Assistant', desc: 'Self-service diagnostics, one-click fixes, and proactive IT communication — all from the desktop.', points: [
          'Self-service fixes',
          'One-click resolution',
          'Proactive alerts'
        ] },
      { icon: Layers, title: 'DEX Score', desc: 'Combined application health, device health, and user sentiment into a single actionable metric.', points: [
          'Unified scoring',
          'App + device + sentiment',
          'Actionable insights'
        ] },
      { icon: Gauge, title: 'Proactive Engagement', desc: 'Detect issues before users notice. Automated notifications and one-click remediation.', points: [
          'Auto-notifications',
          'One-click fix'
        ] },
      { icon: ShieldCheck, title: 'Application & Device Health', desc: 'Continuous monitoring of app performance, device health, and network experience across your fleet.', points: [
          'Continuous monitoring',
          'Fleet-wide visibility',
          'Network insights'
        ] },
      { icon: Database, title: 'Bulk Remediation', desc: 'Resolve issues across multiple devices simultaneously. Automated fix deployment at scale.', points: [
          'Bulk resolution',
          'Automated deployment',
          'Scale operations'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Experience baseline & device audit',
          'Pain point identification & scoring',
          'Employee sentiment survey'
        ] },
      { phase: 'Deploy', items: [
          'Agent deployment across fleet',
          'DEX Score configuration',
          'Dashboard & alert setup'
        ] },
      { phase: 'Improve', items: [
          'Proactive policy configuration',
          'Remediation automation',
          'Team training & enablement'
        ] },
      { phase: 'Optimize', items: [
          'KPI review & benchmarking',
          'Experience tuning & refinement',
          'Continuous improvement setup'
        ] },
    ],
    faqs: [
      { q: 'What is Digital End-User Experience (DEX)?', a: 'DEX measures and continuously improves employee technology experience — combining application health, device performance, and user sentiment into a single actionable DEX Score.' },
      { q: 'How does the DEX Score work?', a: 'It combines three dimensions: application and device health data, user sentiment surveys, and service metrics — creating a single score that leadership can track and improve.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What platforms does it support?', a: 'Windows, macOS, Microsoft Teams, and any application via API. Full visibility across your entire digital workplace.' },
    ],
  },
  {
    slug: 'enterprise-architecture',
    metaTitle: 'ServiceNow EA — Enterprise Architecture Consulting',
    metaDescription: 'Data-driven insights to assess, monitor, and align your application portfolio to business capabilities.',
    keywords: [
      'ServiceNow enterprise architecture',
      'EA',
      'application rationalization',
      'technology portfolio management',
      'APM',
      'business capability management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Application Rationalization', desc: 'Data-driven invest/sustain/retire decisions for every application. Eliminate redundancies and cut maintenance costs.', points: [
          'Invest/sustain/retire',
          'Redundancy elimination',
          'TCO analysis'
        ] },
      { icon: Layers, title: 'Business Capability Management', desc: 'Remove process and technology gaps. Align capabilities to strategy and track maturity over time.', points: [
          'Gap elimination',
          'Strategy alignment',
          'Maturity tracking'
        ] },
      { icon: Gauge, title: 'Technology Portfolio Management', desc: 'Lifecycle monitoring, risk assessment, and technology standards enforcement across your entire portfolio.', points: [
          'Lifecycle monitoring',
          'Risk assessment',
          'Standards enforcement'
        ] },
      { icon: ShieldCheck, title: 'Enterprise Modeling', desc: 'CSDM-aligned visualization of your entire tech estate. Relationship mapping and impact analysis in real time.', points: [
          'CSDM-aligned',
          'Relationship mapping',
          'Impact analysis'
        ] },
      { icon: Database, title: 'Digital Integration Management', desc: 'API landscape visualization, integration health monitoring, and dependency tracking across all systems.', points: [
          'API landscape view',
          'Health monitoring',
          'Dependency tracking'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Application inventory & capability mapping',
          'Redundancy & overlap analysis',
          'Cost baseline & TCO modeling'
        ] },
      { phase: 'Design', items: [
          'Target architecture definition',
          'Rationalization roadmap',
          'Technology standards & guardrails'
        ] },
      { phase: 'Transform', items: [
          'Migration execution & tracking',
          'Application retirement & consolidation',
          'Capability realignment & validation'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Enterprise Architecture?', a: 'A data-driven platform to assess, model, and optimize your entire technology portfolio aligned to business capabilities. It replaces spreadsheets and opinion with real data.' },
      { q: 'How does application rationalization work?', a: 'We analyze your portfolio against business capabilities, identify redundancies, and help you make data-driven decisions: invest, sustain, migrate, or retire each application.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What does it integrate with?', a: 'Application Portfolio Management, PowerPoint for executive reporting, Apptio ITFM for financial management, and third-party EA tools.' },
      { q: 'Who benefits most from EA?', a: 'CIOs, enterprise architects, and application portfolio managers who need to connect technology investments to business outcomes.' },
    ],
  },
  {
    slug: 'field-service-management',
    metaTitle: 'ServiceNow FSM — Intelligent Field Service Management',
    metaDescription: 'ServiceNow FSM delivered by ifBash: skill-based auto-assignment, location optimization, real-time schedule adjustment. the right tech, every time.',
    keywords: [
      'ServiceNow FSM',
      'field service management',
      'dynamic scheduling',
      'mobile workforce',
      'route optimization',
      'dispatcher workspace',
      'preventive maintenance'
    ],
    capabilities: [
      { icon: Workflow, title: 'Dynamic Scheduling', desc: 'Skill-based auto-assignment, location optimization, real-time schedule adjustment. The right tech, every time.', points: [
          'Auto-assignment',
          'Real-time adjustment'
        ] },
      { icon: Layers, title: 'Mobile Agent', desc: 'Native iOS/Android with full offline capabilities. Everything a technician needs — in their pocket.', points: [
          'Native mobile',
          'Offline capable',
          'Full FSM'
        ] },
      { icon: Gauge, title: 'Schedule Optimization', desc: 'AI-powered route optimization across your entire fleet. Minimize travel, maximize jobs per day.', points: [
          'AI routing',
          'More jobs/day'
        ] },
      { icon: ShieldCheck, title: 'Preventive Maintenance', desc: 'Automated maintenance scheduling and issue prediction. Fix problems before customers notice.', points: [
          'Auto-scheduling',
          'Issue prediction'
        ] },
      { icon: Database, title: 'Dispatcher Workspace', desc: 'Unified view of all field operations. Real-time tracking, drag-and-drop scheduling, instant communication.', points: [
          'Unified view',
          'Real-time tracking',
          'Drag-and-drop'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Field operations audit & resource analysis',
          'Technology baseline & integration inventory',
          'KPI baseline & success criteria'
        ] },
      { phase: 'Configure', items: [
          'Platform setup & scheduling config',
          'Mobile deployment & device rollout',
          'Route optimization & GIS integration'
        ] },
      { phase: 'Launch', items: [
          'Pilot rollout & technician training',
          'KPI monitoring & adjustment',
          'Feedback collection & iteration'
        ] },
      { phase: 'Scale', items: [
          'Full deployment across all regions',
          'Optimization cycles & refinement',
          'Continuous improvement program'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Field Service Management?', a: 'Intelligent field service management combining dynamic scheduling, mobile workforce enablement, route optimization, and preventive maintenance — all on one AI-powered platform.' },
      { q: 'Does it work offline?', a: 'Yes. Mobile Agent provides full FSM functionality offline and automatically syncs when connectivity returns. Technicians never lose access to critical job information.' },
      { q: 'How does dynamic scheduling work?', a: 'AI considers skills, location, availability, priority, SLA, and travel time to assign the right technician automatically. Schedule adjusts in real time as conditions change.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What industries benefit most?', a: 'Telecom, utilities, healthcare, manufacturing, HVAC, security, transportation, and retail — any organization with a mobile workforce.' },
    ],
  },
  {
    slug: 'financial-services-operations',
    metaTitle: 'ServiceNow FSO — Financial Services Operations',
    metaDescription: 'Connect your entire financial institution. Disputes built with Visa. AI-powered risk and compliance.',
    keywords: [
      'ServiceNow FSO',
      'financial services operations',
      'banking operations',
      'disputes management',
      'Visa compliance',
      'payment operations'
    ],
    capabilities: [
      { icon: Workflow, title: 'Disputes Management', desc: 'Built with Visa. Single connected workflow from claim to resolution. Full compliance, accelerated processing.', points: [
          'Visa compliant',
          'Single workflow',
          'Accelerated resolution'
        ] },
      { icon: Layers, title: 'Payment Operations', desc: 'Payment inquiries, claims processing, debit approvals, and BCNR/PiE resolution — all automated and tracked.', points: [
          'Payment inquiries',
          'Claims processing',
          'Automated approvals'
        ] },
      { icon: Gauge, title: 'Card Operations', desc: 'New cards, limit changes, blocking, unblocking, and account closure — automated from request to fulfillment.', points: [
          'Card lifecycle',
          'Limit management',
          'Auto-fulfillment'
        ] },
      { icon: ShieldCheck, title: 'Intelligent Automation', desc: 'ML-powered fraud detection, AI risk assessment, and document processing with NLP — proactive protection.', points: [
          'Fraud detection',
          'AI risk assessment',
          'NLP document processing'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Process audit & compliance baseline',
          'Integration mapping',
          'Risk assessment framework'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Disputes management setup',
          'Risk automation deployment'
        ] },
      { phase: 'Validate', items: [
          'Compliance verification',
          'User acceptance testing',
          'Regulator alignment'
        ] },
      { phase: 'Launch', items: [
          'Phased rollout by region',
          'Team training',
          'Continuous monitoring'
        ] },
    ],
    faqs: [
      { q: 'What is FSO?', a: 'Purpose-built for financial institutions — connect banking, payments, disputes, and compliance on one AI-powered platform with Visa-integrated disputes management.' },
      { q: 'How does Disputes Built with Visa work?', a: 'A preconfigured Visa-compliant workflow that runs disputes as one connected process from claim through to resolution, rather than across three disconnected systems.' },
      { q: 'What operations does it cover?', a: 'Payment operations, card operations, complaint management, risk and compliance, and legacy system integration — all unified on one platform.' },
      { q: 'What integrations?', a: 'Visa, Guidewire Cloud, core banking systems — plus any financial system via Integration Hub.' },
    ],
  },
  {
    slug: 'healthcare-and-life-sciences-service-management',
    metaTitle: 'ServiceNow HCLS — Healthcare & Life Sciences',
    metaDescription: 'ServiceNow HCLS delivered by ifBash: single comprehensive patient view from disparate systems. enhanced clinical decisions with complete context.',
    keywords: [
      'ServiceNow HCLS',
      'healthcare service management',
      'life sciences',
      'Patient 360',
      'EMR integration',
      'HL7 FHIR',
      'HIPAA compliance'
    ],
    capabilities: [
      { icon: Workflow, title: 'Patient 360', desc: 'Single comprehensive patient view from disparate systems. Enhanced clinical decisions with complete context.', points: [
          'Unified patient view',
          'Clinical context',
          'Better decisions'
        ] },
      { icon: Layers, title: 'EMR Help', desc: 'Report healthcare cases from within EMR. Epic integration with clinical workflow support built in.', points: [
          'Epic integration',
          'Clinical workflows',
          'In-EMR reporting'
        ] },
      { icon: Gauge, title: 'HL7 FHIR Data Model', desc: 'Industry-standard interoperability with FHIR R4. Seamless data exchange across every system.', points: [
          'FHIR R4 standard',
          'Interoperability',
          'Seamless exchange'
        ] },
      { icon: ShieldCheck, title: 'Patient Support Services', desc: 'Onboarding automation, pre-visit management, consent management, and digital documentation — paperless and efficient.', points: [
          'Onboarding automation',
          'Consent management',
          'Digital docs'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Clinical workflow audit',
          'EMR integration baseline',
          'Compliance review'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'EMR integration',
          'Patient 360 setup'
        ] },
      { phase: 'Validate', items: [
          'HIPAA compliance check',
          'Clinical validation',
          'Staff training'
        ] },
      { phase: 'Launch', items: [
          'Phased rollout by facility',
          'Hypercare support',
          'Continuous monitoring'
        ] },
    ],
    faqs: [
      { q: 'What is HCLS?', a: 'Healthcare and Life Sciences Service Management — connects clinical and operational workflows on one HIPAA-compliant platform with Patient 360 and EMR integration.' },
      { q: 'What EMR systems does it integrate with?', a: 'Epic, Oracle Health (Cerner), Meditech via HL7 FHIR R4. Custom integrations with any EMR through Integration Hub.' },
      { q: 'What is Patient 360?', a: 'Single comprehensive view of patient data from all systems — appointments, history, care plans, communications, and preferences in one place.' },
      { q: 'Is it HIPAA compliant?', a: 'Yes — role-based PHI access, full audit logging, automated anomaly detection, and BAA lifecycle management built in.' },
    ],
  },
  {
    slug: 'hr-service-delivery',
    metaTitle: 'ServiceNow HRSD — HR Service Delivery Consulting',
    metaDescription: 'Improve productivity with AI-driven self-service and streamlined HR case resolution.',
    keywords: [
      'ServiceNow HRSD',
      'HR service delivery',
      'employee center',
      'employee journey',
      'HR automation',
      'virtual agent',
      'knowledge management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Employee Center', desc: 'Single unified portal for all employee services. HR, IT, facilities — one place, one experience, one login.', points: [
          'Unified portal',
          'Cross-department',
          'Personalized'
        ] },
      { icon: Layers, title: 'Employee Journey Management', desc: 'Complete workflow automation for onboarding, transfers, relocations, and offboarding. No-code journey creation.', points: [
          'No-code journeys',
          'Lifecycle automation',
          'Complete visibility'
        ] },
      { icon: Gauge, title: 'Case & Knowledge Management', desc: 'Standardized documentation, intelligent routing, and AI-powered knowledge suggestions. Answers before tickets.', points: [
          'Standardized docs',
          'Intelligent routing',
          'AI knowledge'
        ] },
      { icon: ShieldCheck, title: 'Virtual Agent', desc: '24/7 AI-powered support with natural language understanding. Resolve HR issues fast without human intervention.', points: [
          '24/7 availability',
          'Natural language',
          'Auto-resolution'
        ] },
      { icon: Database, title: 'Performance Analytics', desc: 'Real-time HR metrics, trend prediction, and resource optimization. Data-driven people decisions.', points: [
          'Real-time metrics',
          'Trend prediction',
          'Resource insights'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Employee journey mapping & pain points',
          'HR process audit & integration plan',
          'Success criteria & KPI baseline'
        ] },
      { phase: 'Build', items: [
          'Employee Center configuration',
          'Case & knowledge management setup',
          'Virtual Agent training & deployment'
        ] },
      { phase: 'Launch', items: [
          'HR team training & enablement',
          'Phased employee rollout',
          'KPI monitoring & adjustment'
        ] },
      { phase: 'Optimize', items: [
          'Journey refinement & personalization',
          'Self-service adoption campaigns',
          'Continuous improvement cycles'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow HR Service Delivery?', a: 'HRSD provides a unified employee portal, AI-powered case management, and automated employee journeys — from onboarding to offboarding — all on one platform. It replaces siloed HR tools with a single, intelligent experience.' },
      { q: 'What is Employee Journey Management?', a: 'Complete workflow automation for key employee moments: onboarding, promotions, transfers, parental leave, and offboarding. No-code journey creation with cross-department integration across HR, IT, and facilities.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What HR systems does it integrate with?', a: 'Oracle HCM, SAP SuccessFactors, Workday — plus LMS, payroll, ATS, and productivity tools like Microsoft 365 and Google Workspace.' },
      { q: 'What outcomes should we expect?', a: 'The outcomes depend entirely on your starting point, so we agree the measures with you up front and report against those rather than quoting figures from engagements you cannot verify. ServiceNow HRSD is scoped against your own baseline.' },
    ],
  },
  {
    slug: 'integrated-risk-management',
    metaTitle: 'ServiceNow IRM — Integrated Risk Management',
    metaDescription: 'Make risk-informed decisions and increase efficiency with integrated risk management.',
    keywords: [
      'ServiceNow IRM',
      'integrated risk management',
      'GRC',
      'policy compliance',
      'operational risk',
      'audit management',
      'regulatory change'
    ],
    capabilities: [
      { icon: Workflow, title: 'Policy & Compliance Management', desc: 'Automate policy lifecycles and continuously monitor for compliance. Regulatory requirement mapping with automated acknowledgments.', points: [
          'Automated lifecycles',
          'Continuous monitoring',
          'Regulatory mapping'
        ] },
      { icon: Layers, title: 'Risk Management', desc: 'Fine-grained business impact analysis. Prioritize and respond to risks with real-time business context.', points: [
          'Impact analysis',
          'Risk prioritization',
          'Business context'
        ] },
      { icon: Gauge, title: 'Audit Management', desc: 'Risk-based audit scoping and planning. Cross-functional automation that eliminates spreadsheet-driven audits.', points: [
          'Risk-based scoping',
          'Cross-functional',
          'No spreadsheets'
        ] },
      { icon: ShieldCheck, title: 'Operational Resilience', desc: 'Real-time visibility into resilience of technology, people, processes, and facilities. Manage business disruptions proactively.', points: [
          'Real-time visibility',
          '4-corner resilience',
          'Disruption management'
        ] },
      { icon: Database, title: 'Regulatory Change Management', desc: 'Integration with leading regulatory content providers. Automated change tracking and compliance impact assessment.', points: [
          'Content integration',
          'Auto-change tracking',
          'Impact assessment'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Risk & compliance maturity audit',
          'Policy & control framework mapping',
          'Regulatory requirement inventory'
        ] },
      { phase: 'Build', items: [
          'Platform configuration & taxonomy',
          'Policy & compliance workflow setup',
          'Risk assessment & scoring configuration'
        ] },
      { phase: 'Integrate', items: [
          'Regulatory content integration',
          'Audit automation & reporting',
          'Operational resilience setup'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics & dashboards',
          'Continuous control monitoring',
          'Quarterly risk posture reviews'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Integrated Risk Management?', a: 'IRM transforms inefficient, siloed GRC processes into an integrated risk program with continuous monitoring, intelligent automation, and real-time visibility across the enterprise.' },
      { q: 'How does Operational Resilience Management work?', a: 'Real-time visibility into the resilience of your technology, people, processes, and facilities. Identify vulnerabilities across all four dimensions and manage business disruptions proactively.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What frameworks does it support?', a: 'NIST, ISO 27001, SOC 2, HIPAA, SOX, GDPR, PCI DSS — plus custom frameworks. Use Case Accelerators provide pre-built templates for popular regulations.' },
      { q: 'How does it integrate with regulatory content?', a: 'Integration with leading regulatory content providers keeps you current with changing regulations. Automated alerts when rules change and impact your compliance posture.' },
    ],
  },
  {
    slug: 'integration-hub',
    metaTitle: 'ServiceNow Integration Hub — Enterprise Workflow Automation',
    metaDescription: 'Zero-code spoke generation. Connect ServiceNow to any system in minutes, not months.',
    keywords: [
      'ServiceNow Integration Hub',
      'workflow automation',
      'enterprise integration',
      'API integration',
      'spoke generator',
      'iPaaS',
      'ServiceNow connectors'
    ],
    capabilities: [
      { icon: Workflow, title: 'Out-of-the-Box Spokes', desc: 'Prebuilt connectors for SAP, Salesforce, Oracle, Workday — instant enterprise integration.', points: [
          'Instant setup',
          'Enterprise apps'
        ] },
      { icon: Layers, title: 'Spoke Generator', desc: 'No-code spoke creation from OpenAPI specs. GenAI-powered development. Custom connectors in hours.', points: [
          'No-code creation',
          'GenAI-powered',
          'OpenAPI support'
        ] },
      { icon: Gauge, title: 'Flow Templates', desc: 'Starter flows with built-in integrations. Accelerated automation development with pre-configured workflows.', points: [
          'Pre-built flows',
          'Accelerated dev',
          'Ready to use'
        ] },
      { icon: ShieldCheck, title: 'Stream Connect', desc: 'Apache Kafka integration at scale. Real-time event streaming and enterprise messaging.', points: [
          'Kafka integration',
          'Real-time streaming',
          'Scalable messaging'
        ] },
      { icon: Database, title: 'Remote Tables', desc: 'Zero-copy data integration. Access external data without importing or storing it.', points: [
          'Zero-copy',
          'Real-time access',
          'No storage needed'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Integration audit & system inventory',
          'Priority mapping & dependency analysis',
          'Security & auth requirements'
        ] },
      { phase: 'Connect', items: [
          'Spoke configuration & activation',
          'Flow template setup & customization',
          'Core integration deployment'
        ] },
      { phase: 'Automate', items: [
          'Custom spoke development',
          'Advanced workflow automation',
          'End-to-end testing & validation'
        ] },
      { phase: 'Scale', items: [
          'Performance tuning & optimization',
          'Team training & documentation',
          'Expansion roadmap & governance'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Integration Hub?', a: 'Yes. ServiceNow ships connectors for the major enterprise systems, and Integration Hub covers the rest via REST, SOAP, or a custom spoke. We confirm every integration in scoping before committing to it.' },
      { q: 'What is Spoke Generator?', a: 'A no-code tool that creates custom spokes from OpenAPI specifications. Powered by generative AI, it builds custom integrations in hours — not weeks.' },
      { q: 'How many connectors are available?', a: 'We will answer this specifically for your environment during scoping — ServiceNow Integration Hub varies enough between organisations that a general answer would mislead.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What systems can it connect?', a: 'SAP, Salesforce, Oracle, Workday, Microsoft 365, AWS, Azure, GCP, Apache Kafka — and any system with a REST API.' },
    ],
  },
  {
    slug: 'it-asset-management',
    metaTitle: 'ServiceNow ITAM — IT Asset Management Consulting',
    metaDescription: 'Automate the end-to-end lifecycle for software, hardware, and cloud assets. ifBash delivers enterprise ITAM.',
    keywords: [
      'ServiceNow ITAM',
      'IT asset management',
      'software asset management',
      'hardware asset management',
      'SAM',
      'HAM',
      'license optimization'
    ],
    capabilities: [
      { icon: Workflow, title: 'Software Asset Management', desc: 'License optimization, compliance tracking, audit-ready reporting. Know exactly what you own and what you use.', points: [
          'License optimization',
          'Compliance tracking',
          'Audit-ready'
        ] },
      { icon: Layers, title: 'Hardware Asset Management', desc: 'Full lifecycle tracking from procurement to retirement. Automated provisioning and disposal workflows.', points: [
          'Full lifecycle',
          'Auto-provisioning',
          'Retirement workflows'
        ] },
      { icon: Gauge, title: 'Enterprise Asset Management', desc: 'CapEx/OpEx control, preventive maintenance, risk mitigation. Every asset accounted for across the enterprise.', points: [
          'CapEx/OpEx control',
          'Preventive maintenance',
          'Risk mitigation'
        ] },
      { icon: ShieldCheck, title: 'SaaS License Management', desc: 'Usage insights, cost optimization, renewal management. Stop paying for licenses nobody uses.', points: [
          'Usage insights',
          'Cost optimization',
          'Renewal alerts'
        ] },
      { icon: Database, title: 'Cloud Cost Management', desc: 'Multi-cloud visibility, resource optimization, spend governance. Every cloud dollar traced to value.', points: [
          'Multi-cloud visibility',
          'Resource optimization',
          'Spend governance'
        ] },
      { icon: Sparkles, title: 'Contract & Renewal Management', desc: 'Guided renewals, automated alerts, vendor management. Never miss a renewal or overpay again.', points: [
          'Guided renewals',
          'Automated alerts',
          'Vendor oversight'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Asset discovery & inventory baseline',
          'License position analysis',
          'Cost optimization opportunities'
        ] },
      { phase: 'Configure', items: [
          'Platform setup & asset workflows',
          'Integration configuration (AD, ERP)',
          'Automation rules & policies'
        ] },
      { phase: 'Optimize', items: [
          'Cost analysis & license optimization',
          'Compliance audit preparation',
          'Waste identification & elimination'
        ] },
      { phase: 'Govern', items: [
          'Dashboard & KPI framework',
          'Policy enforcement automation',
          'Continuous monitoring & alerts'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow ITAM and what does it cover?', a: 'ITAM is a single platform to manage hardware, software, cloud, and enterprise assets across their entire lifecycle — from procurement to retirement. AI-powered insights eliminate waste and reduce risk.' },
      { q: 'How much can we save with ITAM?', a: 'We price a fixed scope after scoping rather than publishing a number that could not survive contact with your requirements. You get the figure in writing within 48 hours of the first call.' },
      { q: 'What assets does it manage?', a: 'Software licenses, hardware devices, SaaS subscriptions, cloud resources, and enterprise equipment — all in one unified data model with complete lifecycle tracking.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What systems does it integrate with?', a: 'Azure AD, BigFix, Jamf Pro, Coupa, plus any ERP or procurement system. Service Graph Connectors keep third-party data consistent.' },
    ],
  },
  {
    slug: 'it-operations-management',
    metaTitle: 'ServiceNow ITOM — AI-Powered IT Operations Management',
    metaDescription: 'Gain full visibility across on-premises and cloud infrastructure. ifBash delivers enterprise ITOM.',
    keywords: [
      'ServiceNow ITOM',
      'IT operations management',
      'ServiceNow Discovery',
      'Service Mapping',
      'AIOps',
      'IT operations visibility',
      'cloud management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Discovery', desc: 'Holistic view across on-prem data centers and cloud. Automated infrastructure inventory, dependency mapping, and real-time updates.', points: [
          'Complete visibility',
          'Auto-discovery',
          'Dependency maps'
        ] },
      { icon: Layers, title: 'Service Mapping', desc: 'Map IT components to business services in dynamic environments. Visualize the impact of change before it happens.', points: [
          'Real-time maps',
          'Impact visualization',
          'Dynamic updates'
        ] },
      { icon: Gauge, title: 'Event Management', desc: 'Reduce event floods from monitoring tools. Intelligent correlation surfaces what matters, not what makes noise.', points: [
          'Intelligent correlation',
          'Service health view'
        ] },
      { icon: ShieldCheck, title: 'AIOps & Agentic Workflows', desc: 'Generative AI triages alerts faster and more accurately. Autonomous resolution for known issues — your team focuses on what matters.', points: [
          'GenAI triage',
          'Auto-resolution'
        ] },
      { icon: Database, title: 'Cloud Accelerate', desc: 'Automated cloud service delivery with continuous governance. Speed cloud adoption without sacrificing control.', points: [
          'Continuous governance',
          'Multi-cloud support'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Environment discovery & infrastructure mapping',
          'Dependency analysis & service topology',
          'Event source inventory & baselining'
        ] },
      { phase: 'Configure', items: [
          'Platform setup & Service Mapping',
          'Event correlation rules & topology',
          'Cloud connector configuration'
        ] },
      { phase: 'Automate', items: [
          'AIOps configuration & tuning',
          'Agentic workflow deployment',
          'Alert correlation validation'
        ] },
      { phase: 'Optimize', items: [
          'Dashboard creation & KPI framework',
          'Team training & knowledge transfer',
          'Continuous improvement cycle'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow ITOM and how does it help?', a: 'ITOM gives you complete visibility across your entire IT estate — on-premises, cloud, and everything in between. Discover infrastructure, map services, manage events, and predict issues with AIOps before they impact users.' },
      { q: 'How does AIOps reduce false positives?', a: 'We will answer this specifically for your environment during scoping — ServiceNow ITOM varies enough between organisations that a general answer would mislead.' },
      { q: 'What environments does it support?', a: 'On-prem data centers, AWS, Azure, GCP, Kubernetes, serverless — everything. Discovery automatically finds and maps your entire IT estate.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What integrations are available?', a: 'AWS, Azure, GCP, Kubernetes, SolarWinds, Puppet, Infoblox, and any system with a REST API. Service Graph Connectors keep third-party data consistent.' },
    ],
  },
  {
    slug: 'it-service-management',
    metaTitle: 'ServiceNow ITSM — AI-Powered IT Service Management',
    metaDescription: 'Transform IT service delivery with AI-powered incident, problem, and change management. ifBash delivers enterprise ITSM.',
    keywords: [
      'ServiceNow ITSM',
      'IT service management',
      'incident management',
      'problem management',
      'change management',
      'ITSM implementation',
      'ITIL ServiceNow'
    ],
    capabilities: [
      { icon: Workflow, title: 'Incident Management', desc: 'Automated detection, intelligent routing, AI-powered resolution recommendations. Restore services before users notice.', points: [
          'Intelligent routing',
          'AI recommendations'
        ] },
      { icon: Layers, title: 'Problem Management', desc: 'Root cause analysis, known error database, proactive problem identification. Eliminate recurring issues permanently.', points: [
          'Root cause automation',
          'Known error DB'
        ] },
      { icon: Gauge, title: 'Change Management', desc: 'Risk-aware planning, automated scheduling, impact assessment. Deploy changes with confidence, not fear.', points: [
          'Risk-aware approvals',
          'Automated scheduling',
          'Impact visualization'
        ] },
      { icon: ShieldCheck, title: 'Knowledge Management', desc: 'Centralized knowledge base, AI-powered suggestions, self-service portal. Answers before tickets.', points: [
          'AI-powered suggestions',
          'Self-service portal',
          'Article lifecycle'
        ] },
      { icon: Database, title: 'Service Catalog', desc: 'Interactive portal, automated fulfillment, mobile-friendly browsing. Your services, one click away.', points: [
          'Automated fulfillment',
          'Mobile-friendly',
          'Self-service'
        ] },
      { icon: Sparkles, title: 'Request Management', desc: 'Automated routing, multi-level approvals, SLA tracking. Every request handled with precision.', points: [
          'Automated routing',
          'Multi-level approvals',
          'SLA compliance'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Current state analysis & process mapping',
          'Stakeholder alignment & requirements',
          'Security & compliance scope defined'
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
          'Role-specific training for all user groups',
          'Hypercare: daily check-ins, 90-day KPI review'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow ITSM and how does it help?', a: 'ServiceNow ITSM is a cloud-based platform that unifies incident, problem, change, and request management. It automates routine tasks, provides AI-powered recommendations, and gives you complete visibility into IT service delivery — all on a single platform.' },
      { q: 'How long does a typical ITSM implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What modules are included?', a: 'Incident Management, Problem Management, Change Management, Knowledge Management, Service Catalog, Request Management, Release Management, and Now Assist for ITSM — AI-powered virtual agent and automation.' },
      { q: 'Can it integrate with our existing tools?', a: 'Yes. ServiceNow ships connectors for the major enterprise systems, and Integration Hub covers the rest via REST, SOAP, or a custom spoke. We confirm every integration in scoping before committing to it.' },
      { q: 'What support do you provide after go-live?', a: 'Structured hypercare: daily check-ins for two weeks, weekly reviews through week 12, formal 90-day outcome review. The same engineers who built your platform can continue managing it.' },
    ],
  },
  {
    slug: 'legal-service-delivery',
    metaTitle: 'ServiceNow LSD — Legal Service Delivery',
    metaDescription: 'Transform legal operations with comprehensive automation and real-time insights.',
    keywords: [
      'ServiceNow LSD',
      'legal service delivery',
      'contract management',
      'matter management',
      'legal operations',
      'legal portal',
      'compliance'
    ],
    capabilities: [
      { icon: Workflow, title: 'Contract Management Pro', desc: 'Streamline contract workflows from request through obligation management. Template-based automation with eSignature integration.', points: [
          'Contract lifecycle',
          'Template automation',
          'eSignature'
        ] },
      { icon: Layers, title: 'Self-Service Legal Portal', desc: 'Employees submit legal requests, track progress, and access resources — all in one self-service portal.', points: [
          'Self-service',
          'Progress tracking',
          'Resource access'
        ] },
      { icon: Gauge, title: 'Matter Management', desc: 'Comprehensive matter tracking with litigation support, document management, and project coordination.', points: [
          'Matter tracking',
          'Litigation support',
          'Document management'
        ] },
      { icon: ShieldCheck, title: 'Legal Analytics', desc: 'Real-time dashboards, SLA tracking, and customizable reports for legal operations performance.', points: [
          'Real-time dashboards',
          'SLA tracking',
          'Custom reports'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Legal process audit',
          'Contract workflow mapping',
          'Integration requirements'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Portal & contract management setup',
          'Matter management deployment'
        ] },
      { phase: 'Launch', items: [
          'Legal team training',
          'Phased rollout',
          'KPI baseline'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Contract process refinement',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is Legal Service Delivery?', a: 'Unified legal operations platform — automate contract management, matter tracking, and legal request handling with a self-service portal for the entire organization.' },
      { q: 'What is Contract Management Pro?', a: 'Complete contract lifecycle management — self-service intake, template-based generation, eSignature, cloud storage, and obligation management.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What integrations does it support?', a: 'eSignature platforms, document management (SharePoint, OneDrive), CLM tools, legal research tools, and financial systems.' },
    ],
  },
  {
    slug: 'operational-technology-management',
    metaTitle: 'ServiceNow OT Management — Industrial Operations Security',
    metaDescription: 'ServiceNow OT Management delivered by ifBash: complete ot asset lifecycle management on one platform. industrial device tracking with full cmdb integration.',
    keywords: [
      'ServiceNow OT management',
      'operational technology',
      'industrial security',
      'OT asset management',
      'OT vulnerability response',
      'IT-OT convergence'
    ],
    capabilities: [
      { icon: Workflow, title: 'OT Asset Management', desc: 'Complete OT asset lifecycle management on one platform. Industrial device tracking with full CMDB integration.', points: [
          'Full lifecycle',
          'Industrial tracking',
          'CMDB integration'
        ] },
      { icon: Layers, title: 'OT Visibility', desc: 'Discover OT devices on industrial networks. Map to production processes. Real-time inventory you can trust.', points: [
          'Auto-discovery',
          'Production mapping',
          'Real-time inventory'
        ] },
      { icon: Gauge, title: 'OT Vulnerability Response', desc: 'Identify vulnerabilities proactively. Automated alerts and risk-based prioritization for industrial environments.', points: [
          'Auto-alerts',
          'Risk prioritization'
        ] },
      { icon: ShieldCheck, title: 'OT Service Management', desc: 'Connect IT, OT, and production processes. Unified change management and incident response across both worlds.', points: [
          'IT-OT convergence',
          'Unified change mgmt',
          'Incident response'
        ] },
      { icon: Database, title: 'Industrial Integrations', desc: 'Certified connectors for Siemens IAH, Claroty CTD, Nozomi CMC, and SAP. Your industrial ecosystem unified.', points: [
          'Siemens IAH',
          'Claroty CTD',
          'Nozomi CMC',
          'SAP integration'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'OT environment audit & asset scan',
          'Industrial network mapping',
          'Production process dependency analysis'
        ] },
      { phase: 'Integrate', items: [
          'Platform configuration & OT connectors',
          'Security control deployment',
          'IT-OT workflow integration'
        ] },
      { phase: 'Harden', items: [
          'Vulnerability remediation & validation',
          'Security posture hardening',
          'Team training & runbooks'
        ] },
      { phase: 'Manage', items: [
          'Continuous monitoring & alerting',
          'Patch management automation',
          'Quarterly OT security reviews'
        ] },
    ],
    faqs: [
      { q: 'What is Operational Technology Management?', a: 'Complete visibility and control over your OT environment — industrial devices, production processes, and OT security — unified with your IT service management on one platform.' },
      { q: 'How does it connect IT and OT?', a: 'Single platform bridges IT service management with OT asset management. Same workflows, same visibility. IT and OT teams finally speak the same language.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What industrial integrations are available?', a: 'Siemens IAH, Claroty CTD, Nozomi CMC, SAP — plus any industrial protocol via Integration Hub. Certified Service Graph Connectors ensure data consistency.' },
    ],
  },
  {
    slug: 'privacy-management',
    metaTitle: 'ServiceNow Privacy Management — Data Privacy Compliance',
    metaDescription: 'Identify and manage privacy risks across the enterprise with workflow automation.',
    keywords: [
      'ServiceNow privacy management',
      'GDPR',
      'CCPA',
      'HIPAA',
      'privacy compliance',
      'data protection',
      'ROPA',
      'PIA'
    ],
    capabilities: [
      { icon: Workflow, title: 'Privacy Case Management', desc: 'Triage, investigate, and resolve privacy breaches with comprehensive incident management and regulatory reporting.', points: [
          'Incident triage',
          'Breach investigation',
          'Regulatory reporting'
        ] },
      { icon: Layers, title: 'Agnostic Framework', desc: 'Import any privacy regulation into a common taxonomy. GDPR, CCPA, HIPAA, LGPD — all in one place.', points: [
          'Multi-regulation',
          'Common taxonomy',
          'Global compliance'
        ] },
      { icon: Gauge, title: 'Control Testing Automation', desc: 'Replace point-in-time audits with continuous monitoring. Identify violations and respond faster.', points: [
          'Continuous monitoring',
          'Auto-violation detection',
          'Real-time compliance'
        ] },
      { icon: ShieldCheck, title: 'Processing Activity Identification', desc: 'Automated ROPA management with data flow mapping. Detect application record changes automatically.', points: [
          'ROPA automation',
          'Data flow mapping',
          'Change detection'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Privacy regulation inventory',
          'Data processing audit',
          'Compliance gap analysis'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Regulation framework setup',
          'ROPA & PIA configuration'
        ] },
      { phase: 'Validate', items: [
          'Control testing validation',
          'Privacy impact assessments',
          'DPO training'
        ] },
      { phase: 'Optimize', items: [
          'Continuous compliance monitoring',
          'Automated reporting',
          'Quarterly privacy reviews'
        ] },
    ],
    faqs: [
      { q: 'What is Privacy Management?', a: 'Unified privacy data compliance with workflow automation for GDPR, CCPA, HIPAA, and more. Manage privacy incidents, automate compliance, and centralize data processing records.' },
      { q: 'What regulations does it support?', a: 'GDPR, CCPA, HIPAA, LGPD, PIPEDA, and custom regulations — all managed through an agnostic framework with a common taxonomy.' },
      { q: 'What is ROPA management?', a: 'Record of Processing Activities — automated detection, comprehensive documentation, CMDB integration, and data flow mapping for global compliance.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'public-sector-digital-services',
    metaTitle: 'ServiceNow PSDS — Public Sector Digital Services',
    metaDescription: 'ServiceNow PSDS delivered by ifBash: consumer-grade self-service, service catalog, mobile access, and virtual agents — with anonymous access support.',
    keywords: [
      'ServiceNow PSDS',
      'public sector',
      'government digital services',
      'FedRAMP',
      'citizen engagement',
      'government transformation'
    ],
    capabilities: [
      { icon: Workflow, title: 'Government Services Portal', desc: 'Consumer-grade self-service, service catalog, mobile access, and virtual agents — with anonymous access support.', points: [
          'Self-service portal',
          'Mobile access',
          'Anonymous access'
        ] },
      { icon: Layers, title: 'Government Data Model', desc: 'Unified data model for service delivery. Agency-specific customization with constituent relationship tracking.', points: [
          'Unified model',
          'Agency customization',
          'Constituent tracking'
        ] },
      { icon: Gauge, title: 'Omnichannel Engagement', desc: 'Web, phone, chat, social, in-person — unified view with consistent experience across every channel.', points: [
          'All channels',
          'Unified view',
          'Consistent experience'
        ] },
      { icon: ShieldCheck, title: 'Compliance & Security', desc: 'FedRAMP High authorized. FISMA compliance. PII protection with full audit trails and continuous monitoring.', points: [
          'FedRAMP High',
          'FISMA compliant',
          'PII protected'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Constituent journey mapping',
          'Process audit & compliance baseline',
          'Service catalog inventory'
        ] },
      { phase: 'Build', items: [
          'Portal configuration',
          'Service catalog setup',
          'Workflow automation'
        ] },
      { phase: 'Launch', items: [
          'Staff training',
          'Phased rollout',
          'Constituent communication'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Service refinement',
          'Scaling guidance'
        ] },
    ],
    faqs: [
      { q: 'What is PSDS?', a: 'Public Sector Digital Services — consumer-grade digital experiences for government agencies, powered by AI on a FedRAMP High authorized platform.' },
      { q: 'Is it FedRAMP authorized?', a: 'Yes — FedRAMP High authorization, FISMA compliance, encryption at rest and in transit, full audit trails, and continuous monitoring.' },
      { q: 'What services can be digitized?', a: 'Permits, licenses, benefits, case management, service requests, appointments, payments — any constituent-facing government service.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'sales-and-order-management',
    metaTitle: 'ServiceNow SOM — Sales & Order Management',
    metaDescription: 'Streamline lead-to-cash with AI-powered CPQ and intelligent order management.',
    keywords: [
      'ServiceNow SOM',
      'sales order management',
      'lead-to-cash',
      'CPQ',
      'order management',
      'sales automation',
      'omnichannel sales'
    ],
    capabilities: [
      { icon: Workflow, title: 'Lead Management', desc: 'Create and nurture leads from multiple channels with AI-powered recommendations and automated workflows for lead conversion.', points: [] },
      { icon: Layers, title: 'Configure Price Quote (CPQ)', desc: 'Intelligently guide product, pricing, and quoting decisions across channels to deliver fast, accurate, customer-centric deals.', points: [] },
      { icon: Gauge, title: 'Salesforce Automation', desc: 'Automate sales processes including lead and opportunity management, sales forecasting, and territory management.', points: [] },
      { icon: ShieldCheck, title: 'Order Management', desc: 'Track and coordinate orders from inception to fulfillment with efficient processes among teams, software, and partners.', points: [] },
      { icon: Database, title: 'Omnichannel Integration', desc: 'Seamless, integrated approach to sales, support, and service across online, in-store, mobile, and partner channels.', points: [] },
      { icon: Sparkles, title: 'Lead-to-Cash Process', desc: 'Complete business process encompassing all activities from selling to customers through order fulfillment and service delivery.', points: [] },
    ],
    phases: [
    ],
    faqs: [
    ],
  },
  {
    slug: 'sales-and-order-management-for-technology-providers',
    metaTitle: 'ServiceNow SOM for Technology Providers — Sales & Order',
    metaDescription: 'Streamline lead-to-cash for technology providers with AI-powered CPQ and intelligent order management.',
    keywords: [
      'ServiceNow SOM',
      'technology providers',
      'lead-to-cash',
      'CPQ',
      'order management',
      'sales automation',
      'XaaS'
    ],
    capabilities: [
      { icon: Workflow, title: 'Tech Product CPQ', desc: 'Handle complex technology product configurations, subscription bundles, and usage-based pricing with AI-powered logic.', points: [
          'Complex configs',
          'Subscription bundles',
          'Usage pricing'
        ] },
      { icon: Layers, title: 'Lead-to-Cash for XaaS', desc: 'Complete commercial process optimized for technology providers — from trial to subscription to renewal.', points: [
          'Trial-to-paid',
          'Subscription flow',
          'Renewal automation'
        ] },
      { icon: Gauge, title: 'Partner Portal', desc: 'Enable channel partners with self-service quoting and order management. Consistent experience across direct and indirect sales.', points: [
          'Partner self-service',
          'Channel consistency',
          'Indirect sales'
        ] },
    ],
    phases: [
      { phase: 'Map', items: [
          'Lead-to-cash process mapping',
          'Product catalog & pricing audit',
          'Partner ecosystem analysis'
        ] },
      { phase: 'Build', items: [
          'CPQ configuration for tech products',
          'Order management workflows',
          'Partner portal deployment'
        ] },
      { phase: 'Launch', items: [
          'Sales team & partner training',
          'Phased rollout',
          'KPI monitoring'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Pricing optimization',
          'Scaling guidance'
        ] },
    ],
    faqs: [
      { q: 'What is SOM for Technology Providers?', a: 'Purpose-built sales and order management for technology providers — AI-powered CPQ for complex tech products, subscription management, and unified partner selling.' },
      { q: 'How does it handle subscriptions?', a: 'Usage-based pricing, ramped deals, renewal automation, and subscription bundles — all configured and quoted automatically.' },
      { q: 'What makes it different from standard SOM?', a: 'Optimized for technology provider business models — XaaS, subscriptions, channel partners, and complex product hierarchies.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'sales-and-order-management-for-telecommunications',
    metaTitle: 'ServiceNow SOM for Telecom — Sales & Order Management',
    metaDescription: 'Streamline lead-to-cash for telecommunications with AI-powered CPQ and intelligent order management.',
    keywords: [
      'ServiceNow SOM',
      'telecom',
      'lead-to-cash',
      'CPQ',
      'order management',
      'CSP',
      'sales automation'
    ],
    capabilities: [
      { icon: Workflow, title: 'Telecom Product CPQ', desc: 'Handle complex telecom product bundles, service tiers, and usage-based pricing with AI-powered configuration.', points: [
          'Complex bundles',
          'Service tiers',
          'Usage pricing'
        ] },
      { icon: Layers, title: 'Lead-to-Cash for CSPs', desc: 'Complete commercial process optimized for telecom — from lead capture through service activation.', points: [
          'Lead-to-activation',
          'Service provisioning',
          'Automated fulfillment'
        ] },
      { icon: Gauge, title: 'Omnichannel Sales', desc: 'Consistent experience across retail, online, partner, and B2B channels. One platform, every channel.', points: [
          'Retail + online',
          'Partner channels',
          'B2B sales'
        ] },
    ],
    phases: [
      { phase: 'Map', items: [
          'Lead-to-cash process mapping',
          'Product catalog & plan audit',
          'Channel ecosystem analysis'
        ] },
      { phase: 'Build', items: [
          'CPQ configuration for telecom',
          'Order management workflows',
          'Channel integration'
        ] },
      { phase: 'Launch', items: [
          'Sales team & channel training',
          'Phased rollout',
          'KPI monitoring'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Offer optimization',
          'Scaling guidance'
        ] },
    ],
    faqs: [
      { q: 'What is SOM for Telecommunications?', a: 'Purpose-built sales and order management for CSPs — AI-powered CPQ for complex telecom bundles, omnichannel sales, and automated order fulfillment.' },
      { q: 'How does it handle telecom product complexity?', a: 'Multi-play bundles (mobile, broadband, TV, IoT), service tiers, promotional pricing, and contract terms — all configured and quoted automatically.' },
      { q: 'What channels does it support?', a: 'Retail stores, online, contact center, partners, and B2B — all with consistent pricing, quoting, and order management.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'security-incident-response',
    metaTitle: 'ServiceNow SIR — Security Incident Response',
    metaDescription: 'Respond rapidly to evolving threats with MITRE ATT&CK integration and AI-powered incident response.',
    keywords: [
      'ServiceNow SIR',
      'security incident response',
      'MITRE ATT&CK',
      'SOC automation',
      'incident management',
      'threat response'
    ],
    capabilities: [
      { icon: Workflow, title: 'Workflow Management', desc: 'Automated assignment, intelligent prioritization, and cross-team orchestration. Every incident follows the right path.', points: [
          'Automated assignment',
          'Intelligent prioritization',
          'Cross-team orchestration'
        ] },
      { icon: Layers, title: 'Operations Dashboard', desc: 'Real-time SOC performance visibility. Know where to evolve your team and workflows for maximum impact.', points: [
          'Real-time visibility',
          'Performance metrics',
          'Evolution insights'
        ] },
      { icon: Gauge, title: 'MITRE ATT&CK Framework', desc: 'Tactic and technique mapping, advanced threat context, and threat hunting enhancement built into every incident.', points: [
          'TTP mapping',
          'Threat context',
          'Hunting enhancement'
        ] },
      { icon: ShieldCheck, title: 'Major Incident Management', desc: 'Dedicated workspace for ransomware, data breaches, and critical threats. Coordinated response across every team.', points: [
          'Ransomware response',
          'Data breach management',
          'Crisis coordination'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Incident response maturity audit',
          'Playbook & workflow mapping',
          'Tool integration baseline'
        ] },
      { phase: 'Build', items: [
          'SIR platform configuration',
          'MITRE ATT&CK mapping & integration',
          'Playbook automation & testing'
        ] },
      { phase: 'Launch', items: [
          'SOC team training & simulation',
          'Phased go-live & monitoring',
          'KPI baseline establishment'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics & tuning',
          'Playbook refinement & expansion',
          'Quarterly maturity assessment'
        ] },
    ],
    faqs: [
      { q: 'What is Security Incident Response?', a: 'SIR manages the complete lifecycle of security incidents — from detection and analysis to containment, eradication, and recovery — with AI-powered automation and MITRE ATT&CK integration.' },
      { q: 'How does MITRE ATT&CK integration help?', a: 'Incidents are automatically mapped to ATT&CK tactics and techniques. Analysts instantly understand attacker behavior, see detection coverage gaps, and know the next investigative steps.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'How does it handle major incidents like ransomware?', a: 'Dedicated major incident workspace with crisis coordination, evidence management, communication templates, and recovery planning — all in one place.' },
      { q: 'What tools does it integrate with?', a: 'Splunk, QRadar, ArcSight, CrowdStrike, SentinelOne, Microsoft Sentinel — plus any SIEM, EDR, or threat intel platform via Integration Hub.' },
    ],
  },
  {
    slug: 'security-operations',
    metaTitle: 'ServiceNow SecOps — Security Operations Consulting',
    metaDescription: 'Simplify and automate threat and vulnerability management with AI-powered security operations.',
    keywords: [
      'ServiceNow SecOps',
      'security operations',
      'SIR',
      'vulnerability response',
      'threat intelligence',
      'MITRE ATT&CK',
      'security automation'
    ],
    capabilities: [
      { icon: Workflow, title: 'Security Incident Response', desc: 'Prioritize and respond to threats with intelligent workflows and MITRE ATT&CK integration for accelerated investigation.', points: [
          'Intelligent prioritization',
          'MITRE ATT&CK mapped',
          'Automated workflows'
        ] },
      { icon: Layers, title: 'Vulnerability Response', desc: 'Risk-based vulnerability management across your entire infrastructure. Prioritize by business impact, not just CVSS score.', points: [
          'Risk-based prioritization',
          'Business impact context',
          'Automated remediation'
        ] },
      { icon: Gauge, title: 'Security Posture Control', desc: '360° visibility into your attack surface. Detect security control gaps and unmanaged assets before attackers do.', points: [
          '360° visibility',
          'Control gap detection',
          'Unmanaged asset alerts'
        ] },
      { icon: ShieldCheck, title: 'Threat Intelligence', desc: 'Advanced threat hunting, modeling, and analysis. Correlate intelligence across your entire security ecosystem.', points: [
          'Threat hunting',
          'Intelligence correlation',
          'IOC management'
        ] },
      { icon: Database, title: 'Performance Analytics', desc: 'Real-time security metrics, trend analysis, and resource prioritization. Know your security posture at every moment.', points: [
          'Real-time metrics',
          'Trend analysis',
          'Resource optimization'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Security tool audit & integration plan',
          'Threat landscape & risk assessment',
          'Response workflow & playbook mapping'
        ] },
      { phase: 'Build', items: [
          'Platform configuration & IR setup',
          'Vulnerability management deployment',
          'SIEM & security tool integration'
        ] },
      { phase: 'Automate', items: [
          'Playbook automation & testing',
          'AI/ML model configuration & tuning',
          'Team training & incident simulation'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics & tuning',
          'Continuous improvement cycles',
          'Quarterly security posture reviews'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Security Operations?', a: 'SecOps connects your disparate security tools into orchestrated, automated workflows. It prioritizes vulnerabilities by business impact, accelerates incident response with MITRE ATT&CK, and gives you complete visibility into your security posture — all on one platform.' },
      { q: 'How does MITRE ATT&CK integration work?', a: 'Incidents are automatically mapped to ATT&CK tactics and techniques, giving analysts instant context on attacker behavior. Detection coverage gaps become visible. Investigation accelerates from hours to minutes.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What security tools does it integrate with?', a: 'Splunk, IBM QRadar, ArcSight, CrowdStrike, SentinelOne, Tenable, Qualys, Rapid7 — plus any SIEM, EDR, or threat intel platform via Integration Hub.' },
      { q: 'How does it improve SOC efficiency?', a: 'Automated playbooks handle routine tasks. AI triages alerts by business impact. Analysts focus on real threats instead of chasing false positives.' },
    ],
  },
  {
    slug: 'security-posture-control',
    metaTitle: 'ServiceNow SPC — Security Posture Control',
    metaDescription: 'Get 360-degree visibility into your attack surface. Detect and remediate security control gaps.',
    keywords: [
      'ServiceNow SPC',
      'security posture control',
      'attack surface',
      'security control gaps',
      'CMDB security',
      'vulnerability prioritization'
    ],
    capabilities: [
      { icon: Workflow, title: 'Security Tool Coverage Gaps', desc: 'Out-of-the-box policies monitor assets for missing endpoint protection and vulnerability scanner coverage.', points: [
          'Coverage gap detection',
          'Missing protection alerts',
          'Scanner coverage'
        ] },
      { icon: Layers, title: 'Custom Search & Policies', desc: 'Search for assets by OS, hostname, and security tool configuration. Continuous monitoring policies.', points: [
          'Custom search',
          'OS filtering',
          'Tool configuration'
        ] },
      { icon: Gauge, title: 'Asset Risk Engine', desc: 'Central risk calculator for all assets. Policy-based scoring with vulnerability data integration.', points: [
          'Central risk scoring',
          'Policy-based',
          'VR integration'
        ] },
      { icon: ShieldCheck, title: 'Remediation Automation', desc: 'Automated response workflows with assignment, prioritization, and remediation target setting.', points: [
          'Auto-workflows',
          'Assignment automation',
          'Target setting'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Asset inventory & CMDB audit',
          'Security tool coverage baseline',
          'Policy gap analysis'
        ] },
      { phase: 'Build', items: [
          'SPC platform configuration',
          'CMDB integration',
          'Policy deployment'
        ] },
      { phase: 'Validate', items: [
          'Coverage gap validation',
          'Custom policy tuning',
          'Team training'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Policy refinement',
          'Continuous monitoring'
        ] },
    ],
    faqs: [
      { q: 'What is SPC?', a: 'Security Posture Control — 360-degree visibility into your attack surface. Detect security control gaps, unmanaged assets, and prioritize vulnerabilities by asset risk.' },
      { q: 'How does it integrate with CMDB?', a: 'Service Graph Connectors enrich CMDB data. SPC uses this to calculate asset risk and identify coverage gaps automatically.' },
      { q: 'What out-of-the-box policies are provided?', a: 'Assets missing security tools, unmanaged assets, scanner coverage gaps, high-risk combinations, internet-exposed cloud assets, and CIS compliance checks.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'service-operations-workspace',
    metaTitle: 'ServiceNow SOW — Unified Service Operations Workspace',
    metaDescription: 'Predict, prevent, and resolve incidents from a single workspace. ifBash delivers unified operations.',
    keywords: [
      'ServiceNow SOW',
      'Service Operations Workspace',
      'unified operations',
      'incident management',
      'agent workspace',
      'IT operations'
    ],
    capabilities: [
      { icon: Workflow, title: 'Unified Navigation', desc: 'Single interface for incidents, problems, changes, and investigations. No context switching, no tool hopping.', points: [
          'Single interface',
          'No context switching',
          'Full visibility'
        ] },
      { icon: Layers, title: 'Proactive Incident Management', desc: 'Detect and resolve issues before users notice. Anomaly detection and root cause analysis built in.', points: [
          'Anomaly detection',
          'Root cause analysis'
        ] },
      { icon: Gauge, title: 'Configurable Interface', desc: 'Personalized views, dark mode, compact mode, role-based layouts. Every team gets exactly what they need.', points: [
          'Personalized views',
          'Dark mode',
          'Role-based layouts'
        ] },
      { icon: ShieldCheck, title: 'Collaborative Response', desc: 'Cross-team collaboration, instant communication, integrated war rooms. Everyone on the same page.', points: [
          'Cross-team chat',
          'Integrated war rooms',
          'Real-time updates'
        ] },
    ],
    phases: [
      { phase: 'Discover', items: [
          'Workflow analysis & role mapping',
          'Environment audit & tool inventory',
          'Performance baseline establishment'
        ] },
      { phase: 'Configure', items: [
          'Workspace setup & integration',
          'Personalization & role-based views',
          'Automation rule configuration'
        ] },
      { phase: 'Validate', items: [
          'User acceptance testing',
          'Performance validation & tuning',
          'Training delivery & documentation'
        ] },
      { phase: 'Launch', items: [
          'Phased rollout across teams',
          'Hypercare support & monitoring',
          'Adoption tracking & optimization'
        ] },
    ],
    faqs: [
      { q: 'What is Service Operations Workspace?', a: 'The next-generation unified workspace replacing Agent Workspace. Manage incidents, problems, changes, and investigations in one modern interface — no context switching required.' },
      { q: 'How is it different from Agent Workspace?', a: 'SOW is the successor with a modern UI, better performance, and proactive capabilities. Agent Workspace is deprecated from the Washington DC release. SOW includes dark mode, compact mode, and role-based personalization.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What tools does it integrate with?', a: 'Nagios, SolarWinds, Dynatrace, Splunk, Microsoft Teams, Slack — plus any monitoring or collaboration tool via Integration Hub.' },
    ],
  },
  {
    slug: 'servicenow-cloud-observability',
    metaTitle: 'ServiceNow Cloud Observability — Unified Service Visibility',
    metaDescription: 'Break down monitoring silos and resolve issues faster. ifBash delivers cloud observability.',
    keywords: [
      'ServiceNow cloud observability',
      'service observability',
      'SLO',
      'unified monitoring',
      'MTTR reduction',
      'observability platform'
    ],
    capabilities: [
      { icon: Workflow, title: 'Critical Signal Aggregation', desc: 'Centralize signals from all monitoring tools into one unified view. Eliminate tool silos and find root cause faster.', points: [
          'Unified signals',
          'No tool silos'
        ] },
      { icon: Layers, title: 'SLO-Driven Operations', desc: 'Adopt SLOs organization-wide. Align security, application, and operations teams around shared reliability targets.', points: [
          'SLO adoption',
          'Cross-team alignment',
          'Reliability focus'
        ] },
      { icon: Gauge, title: 'Extensible Data Integration', desc: 'OpenTelemetry, cloud providers, third-party tools — all integrated into one service-oriented view.', points: [
          'OpenTelemetry',
          'Cloud providers',
          'Any tool'
        ] },
      { icon: ShieldCheck, title: 'Service-Oriented View', desc: 'Organize metrics across applications, compute, databases, and infrastructure — by business service, not by tool.', points: [
          'Business service view',
          'Cross-stack metrics',
          'Impact visualization'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Tool landscape audit & signal inventory',
          'SLO baseline & reliability targets',
          'Integration architecture design'
        ] },
      { phase: 'Integrate', items: [
          'Data source integration & normalization',
          'Dashboard & visualization setup',
          'Alert correlation & routing'
        ] },
      { phase: 'Adopt', items: [
          'SLO implementation & tracking',
          'Team training & workflow integration',
          'Runbook automation'
        ] },
      { phase: 'Optimize', items: [
          'Performance tuning & refinement',
          'MTTR tracking & improvement',
          'Continuous observability maturity'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow Cloud Observability?', a: 'Break down monitoring silos by unifying signals from all your tools into one service-oriented view. It answers "why" — not just "what happened."' },
      { q: 'How is observability different from monitoring?', a: 'Monitoring tells you what broke. Observability tells you why — by correlating signals across your entire stack. It\'s proactive, not reactive.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What tools does it integrate with?', a: 'OpenTelemetry, AWS CloudWatch, Azure Monitor, GCP Operations, Datadog, New Relic, Splunk, Prometheus, Grafana — and any tool with an API.' },
    ],
  },
  {
    slug: 'sourcing-and-procurement-operations',
    metaTitle: 'ServiceNow SPO — Sourcing & Procurement Operations',
    metaDescription: 'Deliver a streamlined buying experience with self-service procurement and intelligent automation.',
    keywords: [
      'ServiceNow SPO',
      'sourcing procurement',
      'ShoppingHub',
      'procurement automation',
      'purchase requests',
      'supplier management'
    ],
    capabilities: [
      { icon: Workflow, title: 'ShoppingHub', desc: 'User-friendly portal for goods and services. Vendor catalog integration with purchase request workflows.', points: [
          'Self-service portal',
          'Vendor catalogs',
          'Purchase workflows'
        ] },
      { icon: Layers, title: 'Procurement Case Management', desc: 'Virtual Agent resolves common requests. Searchable knowledge base. Automated case creation and routing.', points: [
          'Virtual Agent',
          'Knowledge base',
          'Auto-case creation'
        ] },
      { icon: Gauge, title: 'Sourcing & Purchasing Automation', desc: 'End-to-end procurement automation from sourcing requests through invoices and payment.', points: [
          'End-to-end automation',
          'Sourcing to payment',
          'Invoice processing'
        ] },
      { icon: ShieldCheck, title: 'Real-Time Analytics', desc: 'On-demand reports with single data model. KPI tracking and instant procurement insights.', points: [
          'On-demand reports',
          'KPI tracking',
          'Real-time insights'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Procurement process audit',
          'Vendor catalog inventory',
          'Integration requirements'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'ShoppingHub setup',
          'ERP integration'
        ] },
      { phase: 'Automate', items: [
          'Virtual Agent training',
          'Workflow automation',
          'Testing & validation'
        ] },
      { phase: 'Launch', items: [
          'Employee rollout',
          'Supplier onboarding',
          'KPI monitoring'
        ] },
    ],
    faqs: [
      { q: 'What is SPO?', a: 'Sourcing and Procurement Operations — a single engagement layer across systems that orchestrates teams and processes with AI to eliminate manual procurement work.' },
      { q: 'What is ShoppingHub?', a: 'A user-friendly portal where employees buy goods and services. Vendor catalog integration, order tracking, and off-catalog requests — all self-service.' },
      { q: 'How much does the Virtual Agent handle?', a: 'We price a fixed scope after scoping rather than publishing a number that could not survive contact with your requirements. You get the figure in writing within 48 hours of the first call.' },
      { q: 'What ERP systems integrate?', a: 'SAP, Oracle, Microsoft Dynamics, plus supplier catalogs, CLM tools, and financial systems via Integration Hub.' },
    ],
  },
  {
    slug: 'strategic-portfolio-management',
    metaTitle: 'ServiceNow SPM — Strategic Portfolio Management',
    metaDescription: 'Align your organization on a single platform with 360-degree visibility from strategy to business outcomes. ifBash delivers SPM.',
    keywords: [
      'ServiceNow SPM',
      'strategic portfolio management',
      'ITBM',
      'project portfolio management',
      'agile development',
      'demand management',
      'innovation management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Strategic Planning', desc: 'Connect strategy to execution in a single workspace. Scenario planning, investment funding, and roadmap visualization.', points: [
          'Strategy-to-execution',
          'Scenario planning',
          'Roadmap visualization'
        ] },
      { icon: Layers, title: 'Project Portfolio Management', desc: 'Traditional, agile, and hybrid work in one unified view. Resource optimization and milestone tracking across every project.', points: [
          'Unified methodology view',
          'Resource optimization',
          'Milestone tracking'
        ] },
      { icon: Gauge, title: 'Agile Development', desc: 'Unified backlog, scrum management, SAFe support, and sprint analytics. Deliver value in every sprint.', points: [
          'Unified backlog',
          'SAFe support',
          'Sprint analytics'
        ] },
      { icon: ShieldCheck, title: 'Demand Management', desc: 'Capture and assess demands from anywhere. Prioritize strategically and track realization against business outcomes.', points: [
          'Demand capture',
          'Strategic prioritization',
          'Realization tracking'
        ] },
      { icon: Database, title: 'Innovation Management', desc: 'Capture ideas from across the organization, configured on ServiceNow and governed the same way as the rest of your platform.', points: [
          'Idea capture',
          'Evaluation & funding'
        ] },
    ],
    phases: [
      { phase: 'Align', items: [
          'Strategy assessment & value mapping',
          'Stakeholder alignment & governance',
          'Portfolio structure design'
        ] },
      { phase: 'Configure', items: [
          'Platform setup & methodology config',
          'Portfolio hierarchy & work intake',
          'Resource & financial planning'
        ] },
      { phase: 'Deploy', items: [
          'Team training & change management',
          'Portfolio launch & pilot execution',
          'Adoption monitoring & coaching'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics & insights',
          'Process refinement & scaling',
          'Continuous improvement cycle'
        ] },
    ],
    faqs: [
      { q: 'What is ServiceNow SPM?', a: 'Formerly IT Business Management (ITBM). SPM connects strategy, planning, and delivery on one platform — from idea to business outcome. It supports traditional, agile, and hybrid methodologies.' },
      { q: 'What methodologies does it support?', a: 'Traditional waterfall, agile (Scrum, SAFe), and hybrid approaches — all managed in one unified view. Teams work how they want; leadership sees everything.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What does it integrate with?', a: 'Jira, Microsoft Project, Azure DevOps, PowerPoint, and collaboration platforms. Integration Hub connects to any project or financial system.' },
    ],
  },
  {
    slug: 'supplier-lifecycle-operations',
    metaTitle: 'ServiceNow SLO — Supplier Lifecycle Operations',
    metaDescription: 'Create a unified digital experience for teams and suppliers from onboarding to ongoing engagement.',
    keywords: [
      'ServiceNow SLO',
      'supplier lifecycle',
      'supplier onboarding',
      'supplier portal',
      'supplier collaboration',
      'vendor management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Supplier Collaboration Portal', desc: 'Unified portal for suppliers to participate in, monitor, and update cases. Self-registration and real-time communication.', points: [
          'Unified portal',
          'Self-registration',
          'Real-time comms'
        ] },
      { icon: Layers, title: 'Onboarding Playbooks', desc: 'Flexible, unified playbooks orchestrate all teams needed for supplier onboarding. Automated and repeatable.', points: [
          'Unified playbooks',
          'Team orchestration',
          'Automated onboarding'
        ] },
      { icon: Gauge, title: 'Performance Analytics', desc: 'Anticipate trends, prioritize resources, and continuously improve with real-time supplier analytics.', points: [
          'Real-time analytics',
          'Trend prediction',
          'Continuous improvement'
        ] },
      { icon: ShieldCheck, title: 'Third-Party Intelligence', desc: 'Craft.co integration for supplier intelligence — financial data, news, and market intelligence in one view.', points: [
          'Supplier intelligence',
          'Financial data',
          'Market insights'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Supplier inventory & classification',
          'Onboarding process audit',
          'Integration requirements'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Portal & playbook setup',
          'Intelligence integration'
        ] },
      { phase: 'Launch', items: [
          'Supplier rollout & training',
          'Team enablement',
          'KPI baseline'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Portal adoption campaigns',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is SLO?', a: 'Supplier Lifecycle Operations — unified digital experience for teams and suppliers covering onboarding, offboarding, and ongoing engagement with automated playbooks and intelligence.' },
      { q: 'How does the Supplier Collaboration Portal work?', a: 'Suppliers self-register, access real-time information, collaborate on tasks, and manage requests — all through a single, unified portal.' },
      { q: 'What third-party intelligence is available?', a: 'Craft.co integration provides supplier financial data, news, market intelligence, and automated risk monitoring.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'talent-development',
    metaTitle: 'ServiceNow Talent Development — Skills Intelligence',
    metaDescription: 'Gain insights into workforce skills. Empower people to own their growth with AI and skills intelligence.',
    keywords: [
      'ServiceNow talent development',
      'skills intelligence',
      'career hub',
      'manager hub',
      'opportunity marketplace',
      'workforce planning'
    ],
    capabilities: [
      { icon: Workflow, title: 'Manager Hub', desc: 'Comprehensive team insights, skill visibility, and AI-powered management recommendations for people leaders.', points: [
          'Team skills visibility',
          'Gap identification',
          'AI recommendations'
        ] },
      { icon: Layers, title: 'Career Hub', desc: 'Personalized growth plans and career path mapping. Enable employees to take action on their career aspirations.', points: [
          'Personalized plans',
          'Career mapping',
          'Goal alignment'
        ] },
      { icon: Gauge, title: 'Skills Intelligence', desc: 'AI-driven platform that analyzes, aggregates, and normalizes skills data from across your organization.', points: [
          'AI-powered analysis',
          'Skills normalization',
          'Gap detection'
        ] },
      { icon: ShieldCheck, title: 'Opportunity Marketplace', desc: 'AI algorithms match employees with internal jobs aligned with their skills, aspirations, and preferences.', points: [
          'AI job matching',
          'Internal mobility',
          'Skills-based matching'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Skills inventory & gap analysis',
          'HR system integration audit',
          'Employee journey mapping'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Skills Intelligence setup',
          'Career & Manager Hub deployment'
        ] },
      { phase: 'Launch', items: [
          'Employee rollout & training',
          'Manager enablement program',
          'KPI baseline establishment'
        ] },
      { phase: 'Optimize', items: [
          'Skills intelligence refinement',
          'Adoption analytics',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is Talent Development?', a: 'AI and skills intelligence platform for proactive talent development — personalized growth plans, career path mapping, and strategic workforce planning all in one place.' },
      { q: 'What is Skills Intelligence?', a: 'AI-driven platform using NLP and ML to analyze, aggregate, and normalize skills data from across your organization — identifying gaps and detecting emerging trends.' },
      { q: 'What is Opportunity Marketplace?', a: 'AI-powered job matching that connects employees with internal opportunities aligned with their skills, aspirations, and preferences — promoting internal mobility.' },
      { q: 'What HR systems does it integrate with?', a: 'Oracle HCM, SAP SuccessFactors, Workday — plus LMS, performance management, ATS, and employee survey tools.' },
    ],
  },
  {
    slug: 'technology-provider-service-management',
    metaTitle: 'ServiceNow TPSM — Technology Provider Service Management',
    metaDescription: 'Elevate XaaS customer experience with AI-powered platform. Service Bridge connects your ecosystem.',
    keywords: [
      'ServiceNow TPSM',
      'technology provider',
      'XaaS',
      'Service Bridge',
      'customer success',
      'proactive service',
      'technology service management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Service Bridge', desc: 'Connected workflows across enterprise customer instances. Remote catalog and collaborative task management.', points: [
          'Connected workflows',
          'Remote catalog',
          'Collaborative tasks'
        ] },
      { icon: Layers, title: 'Now Assist for Technology', desc: 'GenAI-powered case summaries, faster issue resolution, and content generation for technology providers.', points: [
          'GenAI summaries',
          'Faster resolution',
          'Content generation'
        ] },
      { icon: Gauge, title: 'Proactive Service Experience', desc: 'Identify customer impact before they call. Automated notifications and predictive issue detection.', points: [
          'Predictive detection',
          'Auto-notifications',
          'Proactive support'
        ] },
      { icon: ShieldCheck, title: 'Operations Account 360', desc: 'Comprehensive account data, unified visibility, and customer health scoring in one view.', points: [
          'Account visibility',
          'Health scoring',
          'Unified data'
        ] },
    ],
    phases: [
      { phase: 'Onboard', items: [
          'Ecosystem assessment',
          'Customer journey mapping',
          'Integration audit'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Service Bridge setup',
          'AI deployment'
        ] },
      { phase: 'Connect', items: [
          'Customer instance linking',
          'Proactive workflows',
          'Portal launch'
        ] },
      { phase: 'Scale', items: [
          'Performance analytics',
          'Expansion roadmap',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is TPSM?', a: 'Purpose-built for technology providers — manage sales, service, and support for your XaaS customers on one AI-powered platform with Service Bridge connecting your ecosystem.' },
      { q: 'What is Service Bridge?', a: 'Connects your ServiceNow instance to your customers instances for seamless collaborative workflows, remote catalog sharing, and joint task management.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What integrations?', a: 'Adobe Experience Platform, Microsoft Teams, Slack, CareAR, Genesys — plus any customer system via Integration Hub.' },
    ],
  },
  {
    slug: 'telecommunications-service-management',
    metaTitle: 'ServiceNow TSM — Telecom Service Management',
    metaDescription: 'Connect telecom operations from network to customer on a single AI-powered platform. NVIDIA-powered AI.',
    keywords: [
      'ServiceNow TSM',
      'telecom service management',
      'CSP',
      '5G service orchestration',
      'NVIDIA AI',
      'OSS/BSS',
      'telecom operations'
    ],
    capabilities: [
      { icon: Workflow, title: 'Now Assist for Telco', desc: 'Built with NVIDIA AI Enterprise, Triton Inference Server, and NeMo. Instant case summarization and resolution guidance.', points: [
          'NVIDIA AI powered',
          'Instant summaries',
          'Resolution guidance'
        ] },
      { icon: Layers, title: '5G Services Management', desc: 'Network slice template models and automated service orchestration for next-generation service delivery.', points: [
          '5G orchestration',
          'Network slices',
          'Service automation'
        ] },
      { icon: Gauge, title: 'Service Bridge', desc: 'Enterprise customer integration with connected partner workflows and collaborative operations management.', points: [
          'Customer integration',
          'Partner workflows',
          'Collaborative ops'
        ] },
      { icon: ShieldCheck, title: '360 Degree Customer View', desc: 'Complete service history, network service mapping, and proactive insights in one unified view.', points: [
          'Complete history',
          'Service mapping',
          'Proactive insights'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Network ops audit',
          'Customer journey mapping',
          'Integration baseline'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          '5G service modeling',
          'NVIDIA AI setup'
        ] },
      { phase: 'Connect', items: [
          'OSS/BSS integration',
          'Customer portal launch',
          'Team training'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Service refinement',
          'Scaling guidance'
        ] },
    ],
    faqs: [
      { q: 'What is TSM?', a: 'Purpose-built for CSPs — connect network operations to customer service on a single AI-powered platform with NVIDIA AI integration.' },
      { q: 'How does NVIDIA AI power it?', a: 'Now Assist for Telco uses NVIDIA AI Enterprise, Triton Inference Server, and NeMo for telecom-specific AI capabilities and faster resolution.' },
      { q: 'Does it support 5G?', a: 'Yes — 5G network slice templates, automated service orchestration, and service-aware install base management.' },
      { q: 'What telecom integrations?', a: 'TM Forum APIs, OSS/BSS, Adobe, Genesys, Microsoft Teams, Slack — plus any telecom system via Integration Hub.' },
    ],
  },
  {
    slug: 'third-party-risk-management',
    metaTitle: 'ServiceNow TPRM — Third-Party Risk Management',
    metaDescription: 'Take control of the third-party risk lifecycle from onboarding to retirement.',
    keywords: [
      'ServiceNow TPRM',
      'third-party risk management',
      'vendor risk',
      'supplier risk',
      'concentration risk',
      'risk intelligence',
      'VRM'
    ],
    capabilities: [
      { icon: Workflow, title: 'Third-Party Portal', desc: 'Single collaboration platform for all vendor risk management activities. Connect and collaborate in one place.', points: [
          'Single platform',
          'Vendor communication',
          'Assessment management'
        ] },
      { icon: Layers, title: 'Concentration Risk Map', desc: 'Geographical visualization of all third parties, engagements, and risk postures. See concentration risk instantly.', points: [
          'Geographic mapping',
          'Risk posture overview',
          'Concentration analytics'
        ] },
      { icon: Gauge, title: 'Risk Intelligence & Monitoring', desc: 'Integrate targeted risk intelligence scores. Continuous monitoring with real-time updates from BitSight and SecurityScorecard.', points: [
          'Risk intelligence',
          'Continuous monitoring',
          'Real-time scores'
        ] },
      { icon: ShieldCheck, title: 'Onboarding & Due Diligence', desc: 'Automated onboarding, offboarding, and renewal due diligence. Assessments at every relationship stage.', points: [
          'Auto-onboarding',
          'Due diligence',
          'Renewal assessments'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Vendor inventory & classification',
          'Risk framework definition',
          'Intelligence source integration'
        ] },
      { phase: 'Build', items: [
          'TPRM platform configuration',
          'Portal & assessment setup',
          'Concentration risk mapping'
        ] },
      { phase: 'Automate', items: [
          'Continuous monitoring setup',
          'Automated assessment workflows',
          'Issue management configuration'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Risk posture refinement',
          'Quarterly vendor reviews'
        ] },
    ],
    faqs: [
      { q: 'What is TPRM?', a: 'Third-Party Risk Management — continuously monitor critical vendors, manage the complete lifecycle from onboarding to retirement, and visualize concentration risk across your entire vendor ecosystem.' },
      { q: 'What is the Concentration Risk Map?', a: 'Geographical visualization of all third parties, their engagements, and associated risk postures. Instantly see where your concentration risk lies.' },
      { q: 'What risk intelligence providers integrate?', a: 'BitSight, SecurityScorecard, CyberGRX, Shared Assessments, Ethicontrol, IntSights — plus any provider via Integration Hub.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'threat-intelligence-security-center',
    metaTitle: 'ServiceNow TISC — Threat Intelligence Security Center',
    metaDescription: 'Gain advanced threat intelligence with threat hunting, modeling, and analysis built into ServiceNow.',
    keywords: [
      'ServiceNow TISC',
      'threat intelligence',
      'threat hunting',
      'threat modeling',
      'IOC',
      'MITRE ATT&CK',
      'security analytics'
    ],
    capabilities: [
      { icon: Workflow, title: 'Threat Analyst Workspace', desc: 'Purpose-built workspace for threat modeling, hunting, and intelligence visualization. Everything in one place.', points: [
          'Threat modeling',
          'Threat hunting',
          'Intel visualization'
        ] },
      { icon: Layers, title: 'MITRE ATT&CK Integration', desc: 'Automated technique extraction and rollup. Complete framework integration for accelerated threat analysis.', points: [
          'Auto-extraction',
          'Framework integration',
          'Accelerated analysis'
        ] },
      { icon: Gauge, title: 'Customizable Threat Scoring', desc: 'Prioritize observables based on precise threat scores calculated from up to seven related criteria lists.', points: [
          'Custom scoring',
          'Multi-criteria',
          'Observable prioritization'
        ] },
      { icon: ShieldCheck, title: 'Threat-Specific Playbooks', desc: 'Automated actions and continually updated playbooks. Scale your threat intelligence operations.', points: [
          'Automated actions',
          'Updated playbooks',
          'Scalable operations'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Threat intelligence maturity audit',
          'Feed inventory & quality assessment',
          'Analyst workflow mapping'
        ] },
      { phase: 'Build', items: [
          'TISC platform configuration',
          'Threat feed integration',
          'MITRE ATT&CK setup'
        ] },
      { phase: 'Automate', items: [
          'Playbook development',
          'Scoring configuration',
          'Analyst workspace customization'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'Intel quality metrics',
          'Continuous refinement'
        ] },
    ],
    faqs: [
      { q: 'What is TISC?', a: 'Threat Intelligence Security Center — integrates threat intelligence into your ServiceNow AI Platform with advanced hunting, modeling, analysis, and automated MITRE ATT&CK mapping.' },
      { q: 'What is the Threat Analyst Workspace?', a: 'A purpose-built interface for threat analysts with interactive hunting canvas, threat modeling tools, case management, and intelligence visualization — all in one place.' },
      { q: 'How does threat scoring work?', a: 'Customizable scoring using up to seven related criteria lists. Prioritize observables based on precise threat scores tailored to your environment.' },
      { q: 'What feeds does it support?', a: 'OSINT feeds, premium intelligence, STIX/TAXII, custom feeds — plus SIEM, EDR, and firewall data correlation.' },
    ],
  },
  {
    slug: 'vulnerability-response',
    metaTitle: 'ServiceNow VR — Vulnerability Response Management',
    metaDescription: 'Prioritize and respond to vulnerabilities with risk-based management and threat intelligence.',
    keywords: [
      'ServiceNow VR',
      'vulnerability response',
      'risk-based prioritization',
      'patch orchestration',
      'container security',
      'vulnerability management'
    ],
    capabilities: [
      { icon: Workflow, title: 'Application Vulnerabilities', desc: 'Assess dynamic and static testing results. Track vulnerable items and coordinate remediation across teams.', points: [
          'Dynamic testing',
          'Static analysis',
          'Coordinated fixes'
        ] },
      { icon: Layers, title: 'Patch Orchestration', desc: 'Quickly identify, recommend, and schedule patches for critical vulnerabilities with automated deployment.', points: [
          'Critical patch ID',
          'Auto-recommendations',
          'Scheduled deployment'
        ] },
      { icon: Gauge, title: 'Container Security', desc: 'Reduce risks from dynamic cloud deployments, configured on ServiceNow and governed the same way as the rest of your platform.', points: [
          'Runtime insights',
          'Container visibility'
        ] },
      { icon: ShieldCheck, title: 'Configuration Compliance', desc: 'Find and fix misconfigured software. Prioritize and remediate cloud configuration issues automatically.', points: [
          'Misconfig detection',
          'Cloud compliance',
          'Auto-remediation'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Vulnerability scanner audit',
          'Risk framework definition',
          'Integration baseline'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Scanner integration',
          'Risk scoring setup'
        ] },
      { phase: 'Automate', items: [
          'Patch orchestration',
          'Container security',
          'Compliance automation'
        ] },
      { phase: 'Optimize', items: [
          'Performance analytics',
          'VR program maturity',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is Vulnerability Response?', a: 'Risk-based vulnerability management that prioritizes by business impact — not just CVSS score. Integrates with all major scanners and provides automated patch orchestration.' },
      { q: 'How does container security work?', a: 'We will answer this specifically for your environment during scoping — ServiceNow VR varies enough between organisations that a general answer would mislead.' },
      { q: 'What scanners does it integrate with?', a: 'Tenable, Qualys, Rapid7, Wiz, Prisma Cloud, Sysdig — plus any scanner via Integration Hub.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
    ],
  },
  {
    slug: 'workplace-service-delivery',
    metaTitle: 'ServiceNow WSD — Workplace Service Delivery',
    metaDescription: 'Make it easy for employees to reserve, navigate, and request service for any space.',
    keywords: [
      'ServiceNow WSD',
      'workplace service delivery',
      'space management',
      'facilities management',
      'workplace reservation',
      'intelligent building',
      'hybrid work'
    ],
    capabilities: [
      { icon: Workflow, title: 'Workplace Central', desc: 'Single workspace for workplace managers to monitor and administer all activities — reservations, maintenance, visitors.', points: [
          'Single workspace',
          'Activity monitoring',
          'Administrative control'
        ] },
      { icon: Layers, title: 'Workplace Space Management', desc: 'Optimize space with planning, utilization insights, and reporting. Make data-driven real estate decisions.', points: [
          'Space optimization',
          'Utilization tracking',
          'Data-driven planning'
        ] },
      { icon: Gauge, title: 'Workplace Reservation Management', desc: 'Empower employees with self-service, single-click reservations for desks, rooms, and facilities.', points: [
          'Self-service',
          'Single-click booking',
          'Service integration'
        ] },
      { icon: ShieldCheck, title: 'Intelligent Building Insights', desc: 'Optimize workplace operations with cutting-edge building integrations — occupancy sensors, access control, BMS.', points: [
          'Building integrations',
          'Occupancy insights',
          'Access control'
        ] },
    ],
    phases: [
      { phase: 'Assess', items: [
          'Workplace audit & space inventory',
          'Employee experience survey',
          'Building system integration audit'
        ] },
      { phase: 'Build', items: [
          'Platform configuration',
          'Space & reservation setup',
          'Building system integration'
        ] },
      { phase: 'Launch', items: [
          'Employee rollout & training',
          'Facilities team enablement',
          'KPI baseline'
        ] },
      { phase: 'Optimize', items: [
          'Space utilization analytics',
          'Experience refinement',
          'Continuous improvement'
        ] },
    ],
    faqs: [
      { q: 'What is Workplace Service Delivery?', a: 'Unified workplace management — employees reserve, navigate, and request service for any space. Facilities teams optimize operations with intelligent building integrations.' },
      { q: 'How does Space Management work?', a: 'Space planning and design, utilization tracking, cost center management, neighborhood creation, and scenario planning — all data-driven.' },
      { q: 'How long does implementation take?', a: 'It depends on scope, data quality, and how many systems are in play. We give you a specific timeline in the written plan that follows your scoping call — not a range lifted from someone else’s project.' },
      { q: 'What building systems integrate?', a: 'BMS, occupancy sensors, access control, calendar apps (Outlook/Google), CMMS, and real estate systems.' },
    ],
  },
];

/** Title, category, and icon for a slug — sourced from the nav so the two
 *  can never drift apart. */
export function portfolioMeta(entrySlug: string) {
  for (const cat of portfolioCategories) {
    for (const item of cat.items) {
      if (slug(item.title) === entrySlug) {
        return { title: item.title, category: cat.label, icon: item.icon };
      }
    }
  }
  return null;
}

export function getPortfolioEntry(entrySlug: string) {
  return portfolioEntries.find((e) => e.slug === entrySlug) ?? null;
}

/** Up to three siblings from the same category, for the footer of each page. */
export function relatedPortfolio(entrySlug: string, limit = 3) {
  const self = portfolioMeta(entrySlug);
  if (!self) return [];
  const cat = portfolioCategories.find((c) => c.label === self.category);
  if (!cat) return [];
  return cat.items
    .filter((i) => slug(i.title) !== entrySlug)
    .slice(0, limit)
    .map((i) => ({ title: i.title, href: `/portfolio/${slug(i.title)}`, icon: i.icon }));
}

export const portfolioSlugs = portfolioEntries.map((e) => e.slug);
