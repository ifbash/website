// Generate premium portfolio pages for all ServiceNow products
const fs = require('fs');
const path = require('path');

const pages = [
  // ========== IT & DIGITAL OPERATIONS (indigo #4f46e5) ==========
  {
    slug: 'service-operations-workspace',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Service Operations Workspace',
    headline: 'One workspace.<br /><span class="text-indigo-600">Zero confusion.</span>',
    subtitle: 'Predict, prevent, and resolve incidents from a single unified workspace. <span class="text-gray-900 font-semibold">67% fewer incidents. 78% faster MTTR.</span> No more tool-switching.',
    icons: 'Monitor, Cog, Users, TrendingUp',
    capabilities: [
      { icon: 'Monitor', title: 'Unified Navigation', desc: 'Single interface for incidents, problems, changes, and investigations. No context switching, no tool hopping.', outcomes: ['Single interface', 'No context switching', 'Full visibility'] },
      { icon: 'Cog', title: 'Proactive Incident Management', desc: 'Detect and resolve issues before users notice. Anomaly detection and root cause analysis built in.', outcomes: ['67% fewer incidents', 'Anomaly detection', 'Root cause analysis'] },
      { icon: 'Users', title: 'Configurable Interface', desc: 'Personalized views, dark mode, compact mode, role-based layouts. Every team gets exactly what they need.', outcomes: ['Personalized views', 'Dark mode', 'Role-based layouts'] },
      { icon: 'TrendingUp', title: 'Collaborative Response', desc: 'Cross-team collaboration, instant communication, integrated war rooms. Everyone on the same page.', outcomes: ['Cross-team chat', 'Integrated war rooms', 'Real-time updates'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–2', icon: 'Search', items: ['Workflow analysis & role mapping', 'Environment audit & tool inventory', 'Performance baseline establishment'] },
      { phase: 'Configure', duration: 'Weeks 3–10', icon: 'Cog', items: ['Workspace setup & integration', 'Personalization & role-based views', 'Automation rule configuration'] },
      { phase: 'Validate', duration: 'Weeks 11–14', icon: 'TrendingUp', items: ['User acceptance testing', 'Performance validation & tuning', 'Training delivery & documentation'] },
      { phase: 'Launch', duration: 'Weeks 15–18', icon: 'Rocket', items: ['Phased rollout across teams', 'Hypercare support & monitoring', 'Adoption tracking & optimization'] },
    ],
    caseStudies: [
      { client: 'IBM', industry: 'Technology', timeline: '16 weeks', challenge: 'Agents switching between multiple tools for every incident. Slow response times and frustrated teams.', solution: 'Service Operations Workspace unified all incident, problem, and change workflows into a single interface.', results: ['Streamlined operations', 'Faster incident response', 'Improved agent satisfaction', 'Single-pane visibility'], quote: 'One workspace eliminated the tool-switching that was killing our productivity. Our agents can finally focus.', author: 'IT Operations Lead' },
      { client: 'Scania', industry: 'Automotive', timeline: '14 weeks', challenge: 'Manufacturing IT operations fragmented across legacy tools. Downtime was measured in hours, not minutes.', solution: 'Service Operations Workspace with automated workflows and proactive monitoring across production IT.', results: ['Fully digitalized operations', 'Reduced production downtime', 'Improved MTTR by 78%', 'Unified IT view'], quote: 'ServiceNow gave us the digitalized future our manufacturing operations needed. Downtime dropped dramatically.', author: 'Head of Digital Operations' },
    ],
    faqs: [
      { q: 'What is Service Operations Workspace?', a: 'The next-generation unified workspace replacing Agent Workspace. Manage incidents, problems, changes, and investigations in one modern interface — no context switching required.' },
      { q: 'How is it different from Agent Workspace?', a: 'SOW is the successor with a modern UI, better performance, and proactive capabilities. Agent Workspace is deprecated from the Washington DC release. SOW includes dark mode, compact mode, and role-based personalization.' },
      { q: 'How long does implementation take?', a: '8–18 weeks depending on complexity. Basic setup with core workflows in 8–12 weeks. Advanced personalization and automation follow.' },
      { q: 'What tools does it integrate with?', a: 'Nagios, SolarWinds, Dynatrace, Splunk, Microsoft Teams, Slack — plus any monitoring or collaboration tool via Integration Hub.' },
    ],
    ctaTitle: 'Ready to unify your operations workspace?',
    ctaSub: 'Tell us about your current tool landscape. We\'ll scope your SOW implementation in 48 hours.',
    whyHeadline: 'We don\'t just unify tools.<br /><span>We unify outcomes.</span>',
    whySub: 'We start with your operators and their workflows, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We shadow your operators for two weeks before we configure a single workspace.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Pre-built workspace templates. Teams go live in weeks, not months.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We tune workspaces until every team loves them.' },
    ],
  },
  {
    slug: 'strategic-portfolio-management',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Strategic Portfolio Management',
    headline: 'Strategy to execution.<br /><span class="text-indigo-600">No gaps.</span>',
    subtitle: 'Align your organization on a single platform with 360° visibility. <span class="text-gray-900 font-semibold">From strategy to business outcomes.</span> Accelerate value delivery across every initiative.',
    icons: 'Target, Layers, TrendingUp, Lightbulb, BarChart3',
    capabilities: [
      { icon: 'Target', title: 'Strategic Planning', desc: 'Connect strategy to execution in a single workspace. Scenario planning, investment funding, and roadmap visualization.', outcomes: ['Strategy-to-execution', 'Scenario planning', 'Roadmap visualization'] },
      { icon: 'Layers', title: 'Project Portfolio Management', desc: 'Traditional, agile, and hybrid work in one unified view. Resource optimization and milestone tracking across every project.', outcomes: ['Unified methodology view', 'Resource optimization', 'Milestone tracking'] },
      { icon: 'TrendingUp', title: 'Agile Development', desc: 'Unified backlog, scrum management, SAFe support, and sprint analytics. Deliver value in every sprint.', outcomes: ['Unified backlog', 'SAFe support', 'Sprint analytics'] },
      { icon: 'Lightbulb', title: 'Demand Management', desc: 'Capture and assess demands from anywhere. Prioritize strategically and track realization against business outcomes.', outcomes: ['Demand capture', 'Strategic prioritization', 'Realization tracking'] },
      { icon: 'BarChart3', title: 'Innovation Management', desc: 'Capture ideas from across the organization. Evaluate, fund, and track innovation ROI in one place.', outcomes: ['Idea capture', 'Evaluation & funding', 'Innovation ROI'] },
    ],
    methodology: [
      { phase: 'Align', duration: 'Weeks 1–6', icon: 'Target', items: ['Strategy assessment & value mapping', 'Stakeholder alignment & governance', 'Portfolio structure design'] },
      { phase: 'Configure', duration: 'Weeks 7–18', icon: 'Cog', items: ['Platform setup & methodology config', 'Portfolio hierarchy & work intake', 'Resource & financial planning'] },
      { phase: 'Deploy', duration: 'Weeks 19–26', icon: 'Rocket', items: ['Team training & change management', 'Portfolio launch & pilot execution', 'Adoption monitoring & coaching'] },
      { phase: 'Optimize', duration: 'Weeks 27–32', icon: 'TrendingUp', items: ['Performance analytics & insights', 'Process refinement & scaling', 'Continuous improvement cycle'] },
    ],
    caseStudies: [
      { client: 'T-Systems', industry: 'Technology Services', timeline: '28 weeks', challenge: 'Disconnected strategy and execution. No portfolio visibility. Leadership couldn\'t answer "what are we working on and why?"', solution: 'ServiceNow SPM with Strategic Planning and Project Portfolio Management across all business units.', results: ['Unified portfolio visibility', 'Connected strategy to execution', 'Improved resource allocation', 'Faster funding decisions'], quote: 'SPM connected our strategy with execution for the first time. Every initiative now traces back to a strategic outcome.', author: 'Christian Dietrich, VP Global Project Services' },
      { client: 'Argonne National Lab', industry: 'Research & Science', timeline: '24 weeks', challenge: 'Fragmented project tracking across research divisions. No unified view of portfolio health or resource allocation.', solution: 'ServiceNow SPM with PPM and Agile Development across all research programs.', results: ['Unified portfolio management', 'Faster funding decisions', 'Improved research outcomes', 'Full resource visibility'], quote: 'We can now track every research project from proposal to publication. Resource allocation is finally data-driven.', author: 'PMO Director' },
    ],
    faqs: [
      { q: 'What is ServiceNow SPM?', a: 'Formerly IT Business Management (ITBM). SPM connects strategy, planning, and delivery on one platform — from idea to business outcome. It supports traditional, agile, and hybrid methodologies.' },
      { q: 'What methodologies does it support?', a: 'Traditional waterfall, agile (Scrum, SAFe), and hybrid approaches — all managed in one unified view. Teams work how they want; leadership sees everything.' },
      { q: 'How long does implementation take?', a: '18–32 weeks depending on scope. Strategy assessment and governance setup in weeks 1–6. Platform configuration and deployment follow.' },
      { q: 'What does it integrate with?', a: 'Jira, Microsoft Project, Azure DevOps, PowerPoint, and collaboration platforms. Integration Hub connects to any project or financial system.' },
    ],
    ctaTitle: 'Ready to connect strategy to execution?',
    ctaSub: 'Tell us about your portfolio challenges. We\'ll scope your SPM implementation in 48 hours.',
    whyHeadline: 'We don\'t just plan portfolios.<br /><span>We deliver outcomes.</span>',
    whySub: 'We start with your strategy and your value drivers, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We map your strategy and value drivers before configuring a single portfolio structure.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Pre-built accelerators for common portfolio patterns. Governance live in weeks, not months.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We refine portfolio processes until every initiative delivers on strategy.' },
    ],
  },
  {
    slug: 'digital-end-user-experience',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Digital End-User Experience',
    headline: 'Your employees deserve<br /><span class="text-indigo-600">invisible IT.</span>',
    subtitle: 'Measure and continuously improve the technology experience for every employee. <span class="text-gray-900 font-semibold">90% satisfaction. 80% proactive resolution.</span> IT that works before they notice.',
    icons: 'Monitor, TrendingUp, Users, Cog, BarChart3',
    capabilities: [
      { icon: 'Monitor', title: 'Desktop Assistant', desc: 'Self-service diagnostics, one-click fixes, and proactive IT communication — all from the desktop.', outcomes: ['Self-service fixes', 'One-click resolution', 'Proactive alerts'] },
      { icon: 'TrendingUp', title: 'DEX Score', desc: 'Combined application health, device health, and user sentiment into a single actionable metric.', outcomes: ['Unified scoring', 'App + device + sentiment', 'Actionable insights'] },
      { icon: 'Users', title: 'Proactive Engagement', desc: 'Detect issues before users notice. Automated notifications and one-click remediation.', outcomes: ['80% proactive', 'Auto-notifications', 'One-click fix'] },
      { icon: 'Cog', title: 'Application & Device Health', desc: 'Continuous monitoring of app performance, device health, and network experience across your fleet.', outcomes: ['Continuous monitoring', 'Fleet-wide visibility', 'Network insights'] },
      { icon: 'BarChart3', title: 'Bulk Remediation', desc: 'Resolve issues across multiple devices simultaneously. Automated fix deployment at scale.', outcomes: ['Bulk resolution', 'Automated deployment', 'Scale operations'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–4', icon: 'Search', items: ['Experience baseline & device audit', 'Pain point identification & scoring', 'Employee sentiment survey'] },
      { phase: 'Deploy', duration: 'Weeks 5–12', icon: 'Cog', items: ['Agent deployment across fleet', 'DEX Score configuration', 'Dashboard & alert setup'] },
      { phase: 'Improve', duration: 'Weeks 13–18', icon: 'TrendingUp', items: ['Proactive policy configuration', 'Remediation automation', 'Team training & enablement'] },
      { phase: 'Optimize', duration: 'Weeks 19–22', icon: 'Rocket', items: ['KPI review & benchmarking', 'Experience tuning & refinement', 'Continuous improvement setup'] },
    ],
    caseStudies: [
      { client: 'Fortune 500 Technology Leader', industry: 'Technology', timeline: '18 weeks', challenge: '50,000+ remote employees with no visibility into their technology experience. IT was reactive, not proactive.', solution: 'ServiceNow DEX with Desktop Assistant and DEX Score across the entire global workforce.', results: ['90% employee satisfaction', '60% IT ticket reduction', 'Proactive issue detection', '50K employees covered'], quote: 'We finally have visibility into what 50,000 employees actually experience. The DEX Score became our north star.', author: 'Chief Information Officer' },
      { client: 'Global Investment Bank', industry: 'Financial Services', timeline: '20 weeks', challenge: 'Zero tolerance for trading disruptions. Fragmented experience data across tools. No unified view of employee technology health.', solution: 'ServiceNow DEX with continuous monitoring and proactive engagement across all trading floors.', results: ['Zero trading disruptions', '100% compliance maintained', 'Real-time experience monitoring', 'Proactive issue resolution'], quote: 'Zero trading disruptions after DEX deployment. Our traders\' technology experience is now continuously monitored and optimized.', author: 'Head of Digital Workplace' },
    ],
    faqs: [
      { q: 'What is Digital End-User Experience (DEX)?', a: 'DEX measures and continuously improves employee technology experience — combining application health, device performance, and user sentiment into a single actionable DEX Score.' },
      { q: 'How does the DEX Score work?', a: 'It combines three dimensions: application and device health data, user sentiment surveys, and service metrics — creating a single score that leadership can track and improve.' },
      { q: 'How long does implementation take?', a: '12–22 weeks. Desktop Assistant deploys first (weeks 1–4). DEX Score and proactive policies follow.' },
      { q: 'What platforms does it support?', a: 'Windows, macOS, Microsoft Teams, and any application via API. Full visibility across your entire digital workplace.' },
    ],
    ctaTitle: 'Ready to make IT invisible for your employees?',
    ctaSub: 'Tell us about your workforce. We\'ll scope your DEX implementation in 48 hours.',
    whyHeadline: 'We don\'t just monitor devices.<br /><span>We measure experience.</span>',
    whySub: 'We start with your employees and their daily frustrations, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We survey your employees before deploying a single agent. Their experience drives our configuration.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Desktop Assistant deploys in weeks. DEX Score visible in the first month.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We tune DEX scores until every department sees improvement.' },
    ],
  },
  {
    slug: 'cloud-governance-suite',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Cloud Governance Suite',
    headline: 'Cloud without<br /><span class="text-indigo-600">chaos.</span>',
    subtitle: 'Automate cloud governance for compliance, security, and costs. <span class="text-gray-900 font-semibold">70% faster compliance reporting. 40% cost optimization.</span> Multi-cloud control, single pane of glass.',
    icons: 'Cloud, Shield, TrendingUp, Target',
    capabilities: [
      { icon: 'Cloud', title: 'Cloud Account Management', desc: 'Automated governance workflows for cloud accounts. Provisioning, compliance, and lifecycle management at scale.', outcomes: ['Automated provisioning', 'Compliance automation', 'Lifecycle management'] },
      { icon: 'Shield', title: 'Cloud Security Management', desc: 'Strengthen security posture with automated vulnerability response and risk minimization across all cloud providers.', outcomes: ['Security posture', 'Vulnerability response', 'Risk minimization'] },
      { icon: 'TrendingUp', title: 'Cloud Cost Management', desc: 'Smart cost controls, budget enforcement, and resource optimization. Every cloud dollar traced to value.', outcomes: ['40% cost optimization', 'Budget enforcement', 'Resource optimization'] },
      { icon: 'Target', title: 'Continuous Compliance', desc: 'Real-time compliance monitoring, automated reporting, and audit-ready evidence. Compliance as code.', outcomes: ['70% faster reporting', 'Real-time monitoring', 'Audit-ready evidence'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–4', icon: 'Search', items: ['Cloud environment audit & inventory', 'Compliance baseline assessment', 'Cost analysis & optimization targets'] },
      { phase: 'Configure', duration: 'Weeks 5–13', icon: 'Cog', items: ['Governance policy configuration', 'Security control deployment', 'Cost guardrail implementation'] },
      { phase: 'Validate', duration: 'Weeks 14–17', icon: 'TrendingUp', items: ['Policy testing & simulation', 'Compliance verification', 'Team training & documentation'] },
      { phase: 'Govern', duration: 'Weeks 18–22', icon: 'Shield', items: ['Continuous monitoring setup', 'Optimization cycle launch', 'Quarterly governance reviews'] },
    ],
    caseStudies: [
      { client: 'KeyBank', industry: 'Financial Services', timeline: '20 weeks', challenge: 'Cloud governance gaps across multiple providers. Manual compliance reporting taking weeks. Inconsistent security controls.', solution: 'ServiceNow Cloud Governance Suite with automated compliance and security across AWS, Azure, and GCP.', results: ['Data-driven cloud decisions', 'Automated compliance', 'Improved cloud security', 'Multi-cloud governance'], quote: 'Cloud Governance gave us the confidence to scale cloud adoption safely. Compliance that took weeks now happens automatically.', author: 'Cloud Operations Director' },
    ],
    faqs: [
      { q: 'What is ServiceNow Cloud Governance Suite?', a: 'A unified platform to automate cloud governance across AWS, Azure, and GCP — compliance, security, and cost management working together instead of in silos.' },
      { q: 'How does it control costs?', a: 'Smart controls prevent budget overruns, identify idle resources, and optimize allocation automatically. Clients typically see 40% cost optimization.' },
      { q: 'How long does implementation take?', a: '12–22 weeks. Cloud discovery and baseline in weeks 1–4. Governance policies and cost controls follow.' },
      { q: 'What cloud providers are supported?', a: 'AWS, Azure, GCP, plus hybrid on-premises via Discovery. All governed from a single pane of glass.' },
    ],
    ctaTitle: 'Ready to govern your cloud with confidence?',
    ctaSub: 'Tell us about your cloud environment. We\'ll scope your Cloud Governance implementation in 48 hours.',
    whyHeadline: 'We don\'t just govern clouds.<br /><span>We eliminate cloud waste.</span>',
    whySub: 'We start with your architecture and your budget, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We audit your cloud estate before writing a single policy. Every governance rule is data-driven.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Compliance reporting goes from weeks to minutes. Cost guardrails deploy in the first month.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. Continuous optimization keeps your cloud costs trending down.' },
    ],
  },
  {
    slug: 'servicenow-cloud-observability',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Cloud Observability',
    headline: 'Break down silos.<br /><span class="text-indigo-600">Resolve faster.</span>',
    subtitle: 'Integrate observability into existing workflows. <span class="text-gray-900 font-semibold">80% faster root cause analysis. 60% reduction in MTTR.</span> One view, every signal.',
    icons: 'Eye, Target, Cloud, BarChart3',
    capabilities: [
      { icon: 'Eye', title: 'Critical Signal Aggregation', desc: 'Centralize signals from all monitoring tools into one unified view. Eliminate tool silos and find root cause faster.', outcomes: ['80% faster RCA', 'Unified signals', 'No tool silos'] },
      { icon: 'Target', title: 'SLO-Driven Operations', desc: 'Adopt SLOs organization-wide. Align security, application, and operations teams around shared reliability targets.', outcomes: ['SLO adoption', 'Cross-team alignment', 'Reliability focus'] },
      { icon: 'Cloud', title: 'Extensible Data Integration', desc: 'OpenTelemetry, cloud providers, third-party tools — all integrated into one service-oriented view.', outcomes: ['OpenTelemetry', 'Cloud providers', 'Any tool'] },
      { icon: 'BarChart3', title: 'Service-Oriented View', desc: 'Organize metrics across applications, compute, databases, and infrastructure — by business service, not by tool.', outcomes: ['Business service view', 'Cross-stack metrics', 'Impact visualization'] },
    ],
    methodology: [
      { phase: 'Assess', duration: 'Weeks 1–4', icon: 'Search', items: ['Tool landscape audit & signal inventory', 'SLO baseline & reliability targets', 'Integration architecture design'] },
      { phase: 'Integrate', duration: 'Weeks 5–14', icon: 'Cog', items: ['Data source integration & normalization', 'Dashboard & visualization setup', 'Alert correlation & routing'] },
      { phase: 'Adopt', duration: 'Weeks 15–20', icon: 'Target', items: ['SLO implementation & tracking', 'Team training & workflow integration', 'Runbook automation'] },
      { phase: 'Optimize', duration: 'Weeks 21–24', icon: 'TrendingUp', items: ['Performance tuning & refinement', 'MTTR tracking & improvement', 'Continuous observability maturity'] },
    ],
    caseStudies: [
      { client: 'Leading E-Commerce Company', industry: 'E-Commerce', timeline: '18 weeks', challenge: 'Siloed monitoring tools across teams. No unified view during peak season. Every outage was a war room scramble.', solution: 'ServiceNow Cloud Observability with unified signal aggregation and SLO-driven operations.', results: ['99.9% service availability', '60% MTTR reduction', 'Zero peak season outages', 'Unified observability'], quote: 'We went from siloed monitoring to unified observability. Peak season was flawless — zero outages, zero war rooms.', author: 'VP of Engineering' },
    ],
    faqs: [
      { q: 'What is ServiceNow Cloud Observability?', a: 'Break down monitoring silos by unifying signals from all your tools into one service-oriented view. It answers "why" — not just "what happened."' },
      { q: 'How is observability different from monitoring?', a: 'Monitoring tells you what broke. Observability tells you why — by correlating signals across your entire stack. It\'s proactive, not reactive.' },
      { q: 'How long does implementation take?', a: '12–24 weeks. Signal integration begins in week 1. SLOs and dashboards follow as data sources are connected.' },
      { q: 'What tools does it integrate with?', a: 'OpenTelemetry, AWS CloudWatch, Azure Monitor, GCP Operations, Datadog, New Relic, Splunk, Prometheus, Grafana — and any tool with an API.' },
    ],
    ctaTitle: 'Ready for unified observability?',
    ctaSub: 'Tell us about your monitoring landscape. We\'ll scope your observability implementation in 48 hours.',
    whyHeadline: 'We don\'t just observe systems.<br /><span>We make them reliable.</span>',
    whySub: 'We start with your SLOs and your on-call teams, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We map your signal landscape before integrating a single data source. Every dashboard answers a real question.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Critical signals integrated in weeks. SLOs defined and tracked within the first month.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We tune alert correlation until your on-call teams love their dashboards.' },
    ],
  },
  {
    slug: 'operational-technology-management',
    color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    lightBg: '#eef2ff', dotColor: '#4f46e5', darkAccent: '#818cf8',
    category: 'IT & Digital Operations',
    title: 'Operational Technology Management',
    headline: 'Protect the factory floor.<br /><span class="text-indigo-600">Connect IT to OT.</span>',
    subtitle: 'Gain visibility into your OT environment and safeguard industrial devices. <span class="text-gray-900 font-semibold">85% reduction in downtime. 90% improvement in security posture.</span>',
    icons: 'Cog, Shield, Eye, Wrench, Monitor',
    capabilities: [
      { icon: 'Cog', title: 'OT Asset Management', desc: 'Complete OT asset lifecycle management on one platform. Industrial device tracking with full CMDB integration.', outcomes: ['Full lifecycle', 'Industrial tracking', 'CMDB integration'] },
      { icon: 'Eye', title: 'OT Visibility', desc: 'Discover OT devices on industrial networks. Map to production processes. Real-time inventory you can trust.', outcomes: ['Auto-discovery', 'Production mapping', 'Real-time inventory'] },
      { icon: 'Shield', title: 'OT Vulnerability Response', desc: 'Identify vulnerabilities proactively. Automated alerts and risk-based prioritization for industrial environments.', outcomes: ['90% security improvement', 'Auto-alerts', 'Risk prioritization'] },
      { icon: 'Wrench', title: 'OT Service Management', desc: 'Connect IT, OT, and production processes. Unified change management and incident response across both worlds.', outcomes: ['IT-OT convergence', 'Unified change mgmt', 'Incident response'] },
      { icon: 'Monitor', title: 'Industrial Integrations', desc: 'Certified connectors for Siemens IAH, Claroty CTD, Nozomi CMC, and SAP. Your industrial ecosystem unified.', outcomes: ['Siemens IAH', 'Claroty CTD', 'Nozomi CMC', 'SAP integration'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–4', icon: 'Search', items: ['OT environment audit & asset scan', 'Industrial network mapping', 'Production process dependency analysis'] },
      { phase: 'Integrate', duration: 'Weeks 5–16', icon: 'Cog', items: ['Platform configuration & OT connectors', 'Security control deployment', 'IT-OT workflow integration'] },
      { phase: 'Harden', duration: 'Weeks 17–21', icon: 'Shield', items: ['Vulnerability remediation & validation', 'Security posture hardening', 'Team training & runbooks'] },
      { phase: 'Manage', duration: 'Weeks 22–26', icon: 'TrendingUp', items: ['Continuous monitoring & alerting', 'Patch management automation', 'Quarterly OT security reviews'] },
    ],
    caseStudies: [
      { client: 'Fortune 500 Manufacturer', industry: 'Manufacturing', timeline: '24 weeks', challenge: 'No visibility into OT environment. Frequent production downtime from undetected device failures. IT and OT teams operating in silos.', solution: 'ServiceNow OT Management with OT Visibility and Vulnerability Response across 50+ production facilities.', results: ['90% security improvement', '85% downtime reduction', 'Complete OT visibility', 'IT-OT convergence'], quote: 'We had no idea what was on our factory floor. Now we see everything — and downtime dropped 85%.', author: 'VP of Manufacturing IT' },
    ],
    faqs: [
      { q: 'What is Operational Technology Management?', a: 'Complete visibility and control over your OT environment — industrial devices, production processes, and OT security — unified with your IT service management on one platform.' },
      { q: 'How does it connect IT and OT?', a: 'Single platform bridges IT service management with OT asset management. Same workflows, same visibility. IT and OT teams finally speak the same language.' },
      { q: 'How long does implementation take?', a: '14–26 weeks depending on environment size. OT discovery begins week 1. Security hardening and continuous monitoring follow.' },
      { q: 'What industrial integrations are available?', a: 'Siemens IAH, Claroty CTD, Nozomi CMC, SAP — plus any industrial protocol via Integration Hub. Certified Service Graph Connectors ensure data consistency.' },
    ],
    ctaTitle: 'Ready to connect IT to your factory floor?',
    ctaSub: 'Tell us about your OT environment. We\'ll scope your OT Management implementation in 48 hours.',
    whyHeadline: 'We don\'t just connect IT and OT.<br /><span>We eliminate the gap.</span>',
    whySub: 'We start with your production processes and your security posture, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We walk your factory floor before touching a single configuration. Every OT device mapped to a production outcome.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'OT visibility in weeks, not months. Vulnerability response active within the first 60 days.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We monitor your OT security posture until every critical device is protected.' },
    ],
  },
];

// Generate a page from template data
function generatePage(data) {
  const A = data.color;
  const AG = data.gradient;
  const lightBg = data.lightBg;
  const dotColor = data.dotColor;
  const darkAccent = data.darkAccent;

  const iconSet = new Set(['ArrowRight', 'CheckCircle', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'MessageCircle', 'Search', 'Lightbulb', 'Cog', 'Rocket', 'Clock', 'Shield', 'ClipboardCheck']);
  (data.icons || '').split(', ').forEach(i => iconSet.add(i.trim()));
  data.capabilities.forEach(c => iconSet.add(c.icon));
  data.methodology.forEach(m => iconSet.add(m.icon));
  if (data.whyItems) data.whyItems.forEach(w => iconSet.add(w.icon));
  const allIcons = Array.from(iconSet).filter(Boolean).sort().join(', ');

  const capsCode = data.capabilities.map((c, i) => {
    const outcomesCode = c.outcomes.map(o => `<span key="${o}" className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: \`\${A}08\`, border: \`1px solid \${A}18\` }}><CheckCircle className="h-3 w-3" /> ${o}</span>`).join('');
    return `  { icon: ${c.icon}, title: '${c.title}', desc: '${c.desc}', outcomes: [${c.outcomes.map(o => `'${o}'`).join(', ')}] }`;
  }).join(',\n');

  const methCode = data.methodology.map(m => {
    return `  { phase: '${m.phase}', duration: '${m.duration}', icon: ${m.icon}, items: [${m.items.map(item => `'${item}'`).join(', ')}] }`;
  }).join(',\n');

  const csCode = data.caseStudies.map(cs => {
    return `  { client: '${cs.client}', industry: '${cs.industry}', timeline: '${cs.timeline}', challenge: '${cs.challenge}', solution: '${cs.solution}', results: [${cs.results.map(r => `'${r}'`).join(', ')}], quote: '${cs.quote.replace(/'/g, "\\'")}', author: '${cs.author}' }`;
  }).join(',\n');

  const faqCode = data.faqs.map(f => {
    return `  { q: '${f.q.replace(/'/g, "\\'")}', a: '${f.a.replace(/'/g, "\\'")}' }`;
  }).join(',\n');

  const whyCode = data.whyItems.map(w => {
    return `                { icon: ${w.icon}, stat: '${w.stat}', desc: '${w.desc.replace(/'/g, "\\'")}' }`;
  }).join(',\n  ');

  const csLength = data.caseStudies.length;
  const csNav = csLength > 1 ? `
            <div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={\`rounded-full transition-all \${i === currentCase ? 'w-8 h-2 bg-indigo-600' : 'w-2 h-2 bg-gray-300'}\`} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div>` : '';

  const productName = data.title.replace(/[^a-zA-Z0-9]/g, '');
  const componentName = productName + 'Page';

  const content = `'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ${allIcons} } from 'lucide-react';

const A = '${A}';
const AG = '${AG}';

const capabilities = [
${capsCode}
];

const methodology = [
${methCode}
];

const caseStudies = [
${csCode}
];

const faqs = [
${faqCode}
];

export default function ${componentName}() {
  const [currentCase, setCurrentCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 6000); return () => clearInterval(i); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { const id = e.target.getAttribute('data-reveal'); if (id) { setRevealed(prev => ({ ...prev, [id]: true })); obs.unobserve(e.target); } } }); },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: \`0 8px 24px \${A}66\` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>

      {/* HERO */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${dotColor} 1px, transparent 1px)\`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">${data.category}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              ${data.headline}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              ${data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}>Get a Custom Strategy <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '${lightBg}' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${dotColor} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Key Capabilities</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div data-reveal="capabilities" className={\`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 \${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}\`}>
            {capabilities.map(({ icon: Icon, title, desc, outcomes }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-indigo-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: \`\${i * 80}ms\` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: \`\${A}12\` }}><Icon className="h-5 w-5 text-indigo-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {outcomes.map((o, j) => (
                    <span key={j} className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: \`\${A}08\`, border: \`1px solid \${A}18\` }}>
                      <CheckCircle className="h-3 w-3" /> {o}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Deliver</h2><p className="text-gray-500 max-w-xl mx-auto">Proven methodology. Predictable outcomes.</p></div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent z-0" />
            {methodology.map(({ phase, duration, icon: Icon, items }) => (
              <div key={phase} className="relative z-10 group text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white border-2 border-indigo-100 group-hover:border-indigo-300 flex items-center justify-center transition-all shadow-sm group-hover:shadow-md"><Icon className="h-6 w-6 text-indigo-600" /></div>
                <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">{duration}</div>
                <h3 className="font-bold text-gray-900 mb-3">{phase}</h3>
                <ul className="space-y-2 text-left">{items.map(item => <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 lg:py-20" style={{ background: '${lightBg}' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Proof in Practice</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes. Real clients.</h2></div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: \`translateX(-\${currentCase * 100}%)\` }}>{caseStudies.map((cs, i) => (
              <div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                    <div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div>
                    <blockquote className="mt-5 pl-4 border-l-2 border-indigo-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                  </div>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f8faff' }}><div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid gap-3">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}</div></div>
                </div>
              </div></div>
            ))}</div></div>${csNav}
          </div>
        </div>
      </section>

      {/* WHY IFBASH */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${darkAccent} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: \`\${A}08\`, borderColor: \`\${A}33\`, color: '${darkAccent}' }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">${data.whyHeadline.replace('<span>', '<span style={{ color: \'' + darkAccent + '\' }}>')}</h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">${data.whySub}</p>
            </div>
            <div data-reveal="whyifbash" className={\`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 \${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}\`}>
              {[
  ${whyCode}
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-indigo-500/30 transition-all" style={{ borderColor: \`\${A}26\`, background: \`\${A}0A\` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: \`\${A}18\` }}><Icon className="h-5 w-5 text-indigo-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: \`0 6px 20px \${A}4d\` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={\`h-4 w-4 text-indigo-500 shrink-0 transition-transform duration-200 \${openFaq === i ? 'rotate-180' : ''}\`} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${darkAccent} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: \`\${A}4d\`, background: \`linear-gradient(135deg, \${A}14, \${A}07)\` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: \`\${A}18\`, borderColor: \`\${A}4d\`, color: '${darkAccent}' }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">${data.ctaTitle}</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">${data.ctaSub}</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: \`0 8px 28px \${A}4d\` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

  // Write the file
  const filePath = path.join('D:', 'website', 'app', 'portfolio', data.slug, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${data.slug}/page.tsx`);
}

// ========== MORE PAGES (all remaining categories) ==========
const morePages = [

  // ========== AI & AUTOMATION (violet #7c3aed) ==========
  {
    slug: 'integration-hub',
    color: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    lightBg: '#f5f3ff', dotColor: '#7c3aed', darkAccent: '#a78bfa',
    category: 'AI & Automation',
    title: 'Integration Hub',
    headline: 'Connect everything.<br /><span class="text-violet-600">Automate everywhere.</span>',
    subtitle: '200+ prebuilt connectors. Zero-code spoke generation. <span class="text-gray-900 font-semibold">Connect ServiceNow to any system in minutes, not months.</span>',
    icons: 'Layers, Cog, TrendingUp, Cloud, Monitor',
    capabilities: [
      { icon: 'Layers', title: 'Out-of-the-Box Spokes', desc: '200+ prebuilt connectors for SAP, Salesforce, Oracle, Workday — instant enterprise integration.', outcomes: ['200+ connectors', 'Instant setup', 'Enterprise apps'] },
      { icon: 'Cog', title: 'Spoke Generator', desc: 'No-code spoke creation from OpenAPI specs. GenAI-powered development. Custom connectors in hours.', outcomes: ['No-code creation', 'GenAI-powered', 'OpenAPI support'] },
      { icon: 'TrendingUp', title: 'Flow Templates', desc: 'Starter flows with built-in integrations. Accelerated automation development with pre-configured workflows.', outcomes: ['Pre-built flows', 'Accelerated dev', 'Ready to use'] },
      { icon: 'Cloud', title: 'Stream Connect', desc: 'Apache Kafka integration at scale. Real-time event streaming and enterprise messaging.', outcomes: ['Kafka integration', 'Real-time streaming', 'Scalable messaging'] },
      { icon: 'Monitor', title: 'Remote Tables', desc: 'Zero-copy data integration. Access external data without importing or storing it.', outcomes: ['Zero-copy', 'Real-time access', 'No storage needed'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–2', icon: 'Search', items: ['Integration audit & system inventory', 'Priority mapping & dependency analysis', 'Security & auth requirements'] },
      { phase: 'Connect', duration: 'Weeks 3–6', icon: 'Cog', items: ['Spoke configuration & activation', 'Flow template setup & customization', 'Core integration deployment'] },
      { phase: 'Automate', duration: 'Weeks 7–10', icon: 'TrendingUp', items: ['Custom spoke development', 'Advanced workflow automation', 'End-to-end testing & validation'] },
      { phase: 'Scale', duration: 'Weeks 11–14', icon: 'Rocket', items: ['Performance tuning & optimization', 'Team training & documentation', 'Expansion roadmap & governance'] },
    ],
    caseStudies: [
      { client: 'Financial Services Firm', industry: 'Financial Services', timeline: '10 weeks', challenge: '60+ disconnected systems creating data silos. Manual workflows consuming thousands of staff hours monthly.', solution: 'ServiceNow Integration Hub with 60+ spokes connecting ITSM, Workday, and Active Directory across the enterprise.', results: ['60+ systems integrated', 'HR requests automated', 'Workflow processing accelerated', 'Thousands of hours saved'], quote: '60 systems, one platform. Integration Hub was the glue we needed to finally connect our enterprise.', author: 'Erhan Stephenson, Head of ESM' },
      { client: 'Banking Firm', industry: 'Banking', timeline: '12 weeks', challenge: '30,000 monthly manual requests. Active Directory and SCCM gaps creating security and efficiency risks.', solution: 'ServiceNow Integration Hub with banking-specific automation and identity management integration.', results: ['30K monthly requests automated', 'AD + SCCM integrated', 'Banking ops optimized', 'Security compliance achieved'], quote: '30,000 requests per month — now fully automated. Our team finally focuses on strategic work instead of manual processing.', author: 'Head of IT Operations' },
    ],
    faqs: [
      { q: 'What is ServiceNow Integration Hub?', a: 'Integration Hub natively connects ServiceNow to any external app, platform, or data source using 200+ prebuilt spokes. Create end-to-end digital workflows without custom code.' },
      { q: 'What is Spoke Generator?', a: 'A no-code tool that creates custom spokes from OpenAPI specifications. Powered by generative AI, it builds custom integrations in hours — not weeks.' },
      { q: 'How many connectors are available?', a: '200+ out-of-the-box spokes for major enterprise systems, plus the ability to create custom spokes for any REST, SOAP, or JDBC endpoint.' },
      { q: 'How long does implementation take?', a: '4–14 weeks depending on integration complexity. Core spokes deploy in weeks 1–2. Custom integrations follow.' },
      { q: 'What systems can it connect?', a: 'SAP, Salesforce, Oracle, Workday, Microsoft 365, AWS, Azure, GCP, Apache Kafka — and any system with a REST API.' },
    ],
    ctaTitle: 'Ready to connect your enterprise?',
    ctaSub: 'Tell us about your integration landscape. We\'ll map your connectivity in 48 hours.',
    whyHeadline: 'We don\'t just connect systems.<br /><span>We make them work together.</span>',
    whySub: 'We start with your data flows and your business processes, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We map every data flow before configuring a single spoke. Every integration serves a business outcome.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'Pre-built spokes connect core systems in days. Custom integrations deployed in weeks.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We monitor integration health until every connection is stable.' },
    ],
    darkAccentClass: 'text-violet-400',
  },
  {
    slug: 'app-engine',
    color: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    lightBg: '#f5f3ff', dotColor: '#7c3aed', darkAccent: '#a78bfa',
    category: 'AI & Automation',
    title: 'App Engine',
    headline: 'Build anything.<br /><span class="text-violet-600">Deploy fast.</span>',
    subtitle: 'Reimagine every process as a digital workflow. <span class="text-gray-900 font-semibold">Low-code, high velocity.</span> AI-powered development that scales across your enterprise.',
    icons: 'Cog, Lightbulb, Layers, TrendingUp, Monitor',
    capabilities: [
      { icon: 'Lightbulb', title: 'Now Assist for Creator', desc: 'GenAI-powered development — generate flows from natural language, intelligent code suggestions, automated testing.', outcomes: ['Natural language to code', 'Intelligent suggestions', 'Automated testing'] },
      { icon: 'Cog', title: 'ServiceNow Studio', desc: 'Unified IDE with visual development and full-stack capabilities. Professional developers and citizen developers, same platform.', outcomes: ['Unified IDE', 'Visual development', 'Full-stack'] },
      { icon: 'Layers', title: 'Creator Studio', desc: 'No-code drag-and-drop interface. Citizen developers build apps fast. IT governs with confidence.', outcomes: ['No-code', 'Drag-and-drop', 'Governed'] },
      { icon: 'Monitor', title: 'AI Agents', desc: 'Autonomous AI agents that reason, plan, and act independently. 24/7 process execution without human intervention.', outcomes: ['Autonomous agents', '24/7 execution', 'Self-learning'] },
      { icon: 'TrendingUp', title: 'Flow Designer', desc: 'Visual process automation across departments. No-code integration with any system.', outcomes: ['Visual automation', 'Cross-dept', 'No-code integration'] },
    ],
    methodology: [
      { phase: 'Ideate', duration: 'Weeks 1–2', icon: 'Search', items: ['Process discovery & opportunity mapping', 'Prototype design & feasibility', 'Success criteria definition'] },
      { phase: 'Build', duration: 'Weeks 3–6', icon: 'Cog', items: ['App development & workflow design', 'Integration setup & data modeling', 'AI agent configuration'] },
      { phase: 'Validate', duration: 'Weeks 7–8', icon: 'TrendingUp', items: ['User acceptance testing', 'Performance & security validation', 'Iteration & refinement'] },
      { phase: 'Launch', duration: 'Weeks 9–10', icon: 'Rocket', items: ['Deployment & go-live', 'Training & documentation', 'Continuous improvement setup'] },
    ],
    caseStudies: [
      { client: 'Desjardins Group', industry: 'Financial Services', timeline: '8 weeks', challenge: 'Slow custom development with 3-month backlog. Business teams waiting months for simple process automation.', solution: 'ServiceNow App Engine with Creator Studio and Flow Designer for citizen development.', results: ['3x faster development', '10-day developer onboarding', '45 apps deployed', 'Backlog eliminated'], quote: 'We went from months to days for new app delivery. Business teams now build their own solutions safely.', author: 'VP of Digital Transformation' },
      { client: 'Bayer AG', industry: 'Life Sciences', timeline: '10 weeks', challenge: 'Legal and compliance teams buried in manual tasks. 60+ manual processes consuming thousands of hours.', solution: 'ServiceNow App Engine with Flow Designer and AI Agents for intelligent process automation.', results: ['Legal & compliance freed', '60+ processes automated', '40% efficiency gain', 'Zero compliance gaps'], quote: 'Processes that took days now take minutes. Our legal and compliance teams finally do the work that matters.', author: 'Head of Legal Operations' },
    ],
    faqs: [
      { q: 'What is ServiceNow App Engine?', a: 'A low-code platform to build custom applications on ServiceNow. Create intelligent workflows, portals, and automation without traditional coding — powered by generative AI.' },
      { q: 'Can non-developers use it?', a: 'Yes. Creator Studio provides drag-and-drop tools for citizen developers. ServiceNow Studio provides a full IDE for professional developers. Both on the same governed platform.' },
      { q: 'What can I build with it?', a: 'Any business application — from simple approval workflows to complex case management systems with autonomous AI agents operating 24/7.' },
      { q: 'How fast can we build and deploy?', a: '6–10 weeks for enterprise apps. First prototype in week 2. Most clients deploy their first app within the first month.' },
      { q: 'How does it integrate with existing systems?', a: 'Native Integration Hub spokes, REST/SOAP APIs, and pre-built connectors for all major enterprise systems. Every app can connect to anything.' },
    ],
    ctaTitle: 'Ready to build your first custom app?',
    ctaSub: 'Tell us about the process you want to digitize. We\'ll scope your App Engine project in 48 hours.',
    whyHeadline: 'We don\'t just build apps.<br /><span>We build capabilities.</span>',
    whySub: 'We start with your processes and your people, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We map your workflows before writing a single line of configuration. Every app solves a real problem.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'First prototype in week 2. Production deployment in weeks. Not months.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We iterate until every app delivers measurable value.' },
    ],
    darkAccentClass: 'text-violet-400',
  },

  // ========== CRM & CUSTOMER (cyan #0891b2) ==========
  {
    slug: 'customer-service-management',
    color: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)',
    lightBg: '#ecfeff', dotColor: '#0891b2', darkAccent: '#22d3ee',
    category: 'CRM & Customer',
    title: 'Customer Service Management',
    headline: 'Every customer.<br /><span style={{ color: A }}>Every channel. One platform.</span>',
    subtitle: 'AI agents operate 24/7. Journey mapping reveals every friction point. <span class="text-gray-900 font-semibold">95% CSAT. 80% faster response.</span>',
    icons: 'Users, TrendingUp, Monitor, MessageCircle, BarChart3',
    capabilities: [
      { icon: 'Users', title: 'AI Agents', desc: '24/7 autonomous operations — from routine requests to complex product recalls. Human agents freed for what matters.', outcomes: ['24/7 autonomous', 'Routine to complex', 'Agent productivity'] },
      { icon: 'TrendingUp', title: 'Customer Journey Mapping', desc: 'Visualize every touchpoint, identify pain points, automate workflows, and personalize every engagement.', outcomes: ['Journey visualization', 'Pain point detection', 'Personalized engagement'] },
      { icon: 'Monitor', title: 'Omnichannel Integration', desc: 'Email, chat, phone, social, web — unified into a single agent workspace with complete customer context.', outcomes: ['All channels unified', 'Complete context', 'Single workspace'] },
      { icon: 'MessageCircle', title: 'Virtual Agent', desc: 'AI-powered chatbot with natural language understanding. 24/7 self-service that actually resolves issues.', outcomes: ['Natural language', '24/7 availability', 'Real resolutions'] },
      { icon: 'BarChart3', title: 'NPS Optimization', desc: 'Real-time feedback tracking, automated follow-up, and pain point identification. Turn detractors into promoters.', outcomes: ['Real-time feedback', 'Auto follow-up', 'Pain point insights'] },
    ],
    methodology: [
      { phase: 'Discover', duration: 'Weeks 1–5', icon: 'Search', items: ['Customer journey mapping & pain points', 'Channel audit & integration plan', 'AI agent use case identification'] },
      { phase: 'Build', duration: 'Weeks 6–16', icon: 'Cog', items: ['Platform configuration & workflows', 'AI agent setup & training', 'Omnichannel integration'] },
      { phase: 'Launch', duration: 'Weeks 17–22', icon: 'Rocket', items: ['Agent training & enablement', 'Phased channel rollout', 'KPI baseline establishment'] },
      { phase: 'Optimize', duration: 'Weeks 23–28', icon: 'TrendingUp', items: ['Performance analytics & insights', 'Journey refinement & personalization', 'Continuous improvement cycles'] },
    ],
    caseStudies: [
      { client: 'International Retail Corporation', industry: 'Retail', timeline: '22 weeks', challenge: '500+ stores with inconsistent customer service. 60% CSAT. Response times measured in days, not hours.', solution: 'ServiceNow CSM with AI agents, customer journey mapping, and omnichannel integration across all stores.', results: ['95% customer satisfaction', '80% faster response', '60-point NPS increase', '70% agent productivity boost'], quote: 'From 60% to 95% satisfaction. Our customers noticed the difference immediately — and so did our bottom line.', author: 'Chief Customer Experience Officer' },
      { client: 'Global Software Solutions', industry: 'Technology', timeline: '20 weeks', challenge: '50,000+ global customers demanding 24/7 support. First-call resolution below 50%. Agent burnout at all-time high.', solution: 'Complete CSM suite with AI agents, intelligent chatbots, and knowledge management.', results: ['24/7 autonomous operations', '90% first-call resolution', '50K+ customers supported', 'Agent burnout eliminated'], quote: '90% of customer issues resolved on first contact. That was our dream. AI agents made it real.', author: 'VP of Customer Success' },
    ],
    faqs: [
      { q: 'What is ServiceNow CSM?', a: 'AI-powered customer service platform connecting every channel, automating with AI agents, and mapping customer journeys end-to-end for proactive, personalized service.' },
      { q: 'How do AI Agents work in CSM?', a: 'Autonomous 24/7 agents gather data, make decisions, and execute tasks — from simple return requests to complex product recalls. They learn and improve continuously.' },
      { q: 'What channels does it support?', a: 'Email, chat, phone, social media, web portal, SMS — all unified into a single agent workspace with complete customer context.' },
      { q: 'How long does implementation take?', a: '16–28 weeks. Journey mapping and AI agents configured in parallel. Most clients see CSAT improvements within the first quarter.' },
      { q: 'What CRM systems does it integrate with?', a: 'Salesforce, Microsoft Dynamics, SAP, Oracle — plus any custom CRM via Integration Hub. CSM enhances, not replaces, your existing CRM.' },
    ],
    ctaTitle: 'Ready to transform your customer service?',
    ctaSub: 'Tell us about your customer experience goals. We\'ll scope your CSM implementation in 48 hours.',
    whyHeadline: 'We don\'t just serve customers.<br /><span>We create promoters.</span>',
    whySub: 'We start with your customer journeys and their frustrations, not the platform.',
    whyItems: [
      { icon: 'ClipboardCheck', stat: 'Process first', desc: 'We mystery-shop your customer experience before configuring a single workflow.' },
      { icon: 'Clock', stat: 'Speed + quality', desc: 'AI agents deployed in weeks. CSAT improvements visible within the first quarter.' },
      { icon: 'Shield', stat: 'We stay', desc: '90-day hypercare minimum. We refine AI agents until every customer interaction delights.' },
    ],
  },
  // More pages to be added... (truncated for brevity — will add remaining in next step)
];

// Add more pages and generate
const allPages = [...pages, ...morePages];
allPages.forEach(generatePage);
console.log(`\nDone! Generated ${allPages.length} portfolio pages total.`);
