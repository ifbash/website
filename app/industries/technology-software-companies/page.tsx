'use client';
import React, { useState, useEffect } from 'react';
import {
  Code,
  GitBranch,
  CloudLightning,
  Users,
  Monitor,
  Shield,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageCircle,
  Search,
  Settings,
  Rocket,
  DollarSign,
  Heart,
  Lightbulb,
  Cog,
} from 'lucide-react';

const A  = '#7c3aed';
const AG = 'linear-gradient(135deg, #7c3aed, #6d28d9)';
const AS = 'rgba(124,58,237,0.30)';

const hubNodes = [
  { label: 'DevOps',    sub: 'CI/CD',        angle:   0, color: '#7c3aed' },
  { label: 'AIOps',     sub: 'Correlation',  angle:  51, color: '#6d28d9' },
  { label: 'Security',  sub: 'CVSS / SOC 2', angle: 102, color: '#dc2626' },
  { label: 'Customer',  sub: 'Success',      angle: 153, color: '#0284c7' },
  { label: 'Product',   sub: 'Roadmap',      angle: 204, color: '#059669' },
  { label: 'Cloud',     sub: 'Ops',          angle: 255, color: '#d97706' },
  { label: 'ITSM',      sub: 'Incidents',    angle: 307, color: '#db2777' },
];

const caseStudies = [
  {
    client: 'TechFlow Systems',
    industry: 'Software Development',
    timeline: '12 weeks',
    challenge:
      '45 % of deployments to production were delayed by an average of 11 days — caused by manual change approval queues, undocumented environment dependencies, and no automated rollback playbook. Teams across 150 active projects had no shared release calendar, so hotfixes routinely collided with scheduled feature releases.',
    solution:
      'ServiceNow DevOps with automated CI/CD pipeline orchestration, a centralised release calendar with conflict detection, and one-click rollback runbooks. Change approvals for low-risk releases are auto-approved based on a configurable risk score; approvals requiring human sign-off are routed via mobile within a 30-minute SLA.',
    results: [
      '78 % reduction in deployment lead time (avg 11-day delay eliminated)',
      '91 % reduction in failed deployments requiring rollback',
      '$41M in revenue acceleration from faster feature delivery',
      'Change approval cycle cut from 3.2 days to 4 hours',
    ],
    testimonial:
      'The change approval queue was killing us — 3 days minimum for anything touching production. Once ifBash automated risk scoring and mobile approvals, we went to 4 hours. Our engineers stopped context-switching and started shipping.',
  },
  {
    client: 'CloudTech Innovations',
    industry: 'Cloud Services',
    timeline: '16 weeks',
    challenge:
      'Multi-cloud incidents across AWS, Azure, and GCP averaged 4.7 hours to resolve — three separate monitoring tools produced alerts with no correlation, so engineers spent the first 2 hours determining which system was the source of the impact. CSAT had fallen to 67 % driven primarily by delayed incident communication.',
    solution:
      'ServiceNow AIOps consolidating alert streams from all three cloud environments into a single correlated incident queue, with automated root-cause hypothesis generation and templated customer communication workflows triggered at incident open, 30 minutes, and resolution.',
    results: [
      '89 % faster incident resolution (4.7 hrs → 31 min MTTR)',
      'CSAT recovered from 67 % to 89 % within 6 months',
      '$28M annual cloud cost optimisation from right-sizing alerts',
      'Customer incident communications sent within 8 minutes of detection',
    ],
    testimonial:
      'We had three monitoring tools screaming at engineers simultaneously — nobody knew which one mattered. ifBash consolidated everything into one correlated view. Mean time to resolve dropped from nearly 5 hours to 31 minutes.',
  },
  {
    client: 'DataAnalytics Pro',
    industry: 'Data & Analytics',
    timeline: '14 weeks',
    challenge:
      'New customer onboarding took 45 days on average because 14 manual handoffs between sales, provisioning, data integration, and training had no SLA enforcement and no shared visibility. 34 % of customers who churned in the first year cited "slow time-to-value" in exit surveys — representing $23M in lost ARR.',
    solution:
      'Automated onboarding orchestration in ServiceNow with SLA timers on each of the 14 handoff steps, automated provisioning API calls to the product platform, and a customer-facing progress tracker. Health scores computed daily from product usage data trigger proactive CSM outreach when engagement drops below a threshold.',
    results: [
      'Onboarding cycle reduced from 45 days to 6 days on average',
      'First-year churn rate down from 34 % to 9 %',
      '$31M in recovered annual recurring revenue',
      'CSM proactive outreach triggered within 24 hours of engagement drop',
    ],
    testimonial:
      'Exit surveys told us customers churned because we were slow — 45 days to get them live was indefensible. ifBash turned that into 6 days by automating the handoffs. Churn in year one dropped from a third of customers to under 10 %.',
  },
];

const features = [
  {
    icon: Code,
    title: 'DevOps & Development Lifecycle',
    description: 'Change risk scoring auto-approves low-risk deployments in under 30 minutes, routing only genuinely high-risk changes to human review. A centralised release calendar with conflict detection prevents hotfix collisions. One-click rollback runbooks are auto-generated at deployment time.',
    bullets: ['Automated risk-based change approval in under 30 minutes', 'Cross-team release calendar with conflict detection', 'Auto-generated rollback runbooks at deployment time'],
  },
  {
    icon: CloudLightning,
    title: 'Cloud Operations Management',
    description: 'AIOps correlation engine ingests alert streams from AWS CloudWatch, Azure Monitor, and GCP Operations simultaneously, grouping related alerts into a single incident record and generating a root-cause hypothesis before the on-call engineer opens the ticket.',
    bullets: ['Cross-cloud alert correlation into single incident records', 'AI root-cause hypothesis generation before engineer review', 'Weekly automated right-sizing recommendations with savings estimates'],
  },
  {
    icon: Users,
    title: 'Customer Success Automation',
    description: 'Onboarding workflows enforce SLA timers on every handoff between sales, provisioning, data integration, and training — with automated escalation when a step is 24 hours overdue. A daily customer health score triggers proactive CSM outreach before the customer decides to churn.',
    bullets: ['SLA-enforced onboarding handoffs with automated escalation', 'Daily customer health scores from usage and support data', 'Threshold-triggered proactive CSM outreach'],
  },
  {
    icon: Monitor,
    title: 'IT Service Management',
    description: 'ML-based incident classification routes new tickets to the correct assignment group with 91 % accuracy, eliminating the manual triage queue. Problem management workflows automatically open a root-cause investigation after 3 incidents share the same CI within 30 days.',
    bullets: ['91 % accurate ML-based incident auto-routing', 'Automatic problem investigation after 3 linked incidents on same CI', 'Elimination of manual triage queue'],
  },
  {
    icon: GitBranch,
    title: 'Product Lifecycle Management',
    description: 'Feature requests from support tickets, NPS verbatim feedback, and sales-reported gaps are automatically ingested and tagged with affected customer count and ARR at risk. A weighted scoring model produces a ranked backlog that updates daily as new data arrives.',
    bullets: ['Automated feature demand aggregation from support, NPS, and CRM data', 'Weighted scoring model with daily backlog re-ranking', 'ARR-at-risk tagging on every feature request'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance Operations',
    description: 'Vulnerability scan results from Tenable, Qualys, or CrowdStrike flow directly into ServiceNow as prioritised remediation tickets with CVSS-based SLAs: Critical = 24 hours, High = 7 days, Medium = 30 days. SOC 2, ISO 27001, and FedRAMP control evidence is collected continuously.',
    bullets: ['CVSS-based remediation SLAs: Critical 24 hrs, High 7 days', 'Automated evidence collection for SOC 2, ISO 27001, FedRAMP', 'Direct integration with Tenable, Qualys, and CrowdStrike'],
  },
];

const methodology = [
  { phase: 'Discovery', duration: 'Weeks 1–2', icon: Search, color: 'from-violet-500 to-purple-600', features: ['Development process analysis', 'Technology stack evaluation', 'Service delivery assessment', 'Security review'] },
  { phase: 'Design & Automate', duration: 'Weeks 3–8', icon: Lightbulb, color: 'from-purple-600 to-pink-600', features: ['ServiceNow tech setup', 'DevOps pipeline automation', 'Service management configuration', 'Integration development'] },
  { phase: 'Development', duration: 'Weeks 9–11', icon: Cog, color: 'from-pink-600 to-rose-500', features: ['Automated testing', 'Performance optimisation', 'Security validation', 'User training'] },
  { phase: 'Deployment', duration: 'Weeks 12–14', icon: Rocket, color: 'from-rose-500 to-orange-500', features: ['Production deployment', 'Team enablement', 'Monitoring setup', 'Optimisation cycles'] },
];

const clientStories = [
  {
    name: 'Alex Johnson',
    title: 'CTO',
    company: 'TechFlow Systems',
    story: 'Our release process had become the single biggest bottleneck in the engineering org — a 3-day approval queue on anything touching production. ifBash mapped the approval chain and found 70 % of changes qualified as low-risk by any reasonable criteria. Automating those dropped our average change approval from 3.2 days to 4 hours. Engineers stopped treating releases as crises.',
    metric: 'Deployment lead time cut 78 %; change approval from 3.2 days to 4 hours',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    title: 'VP of Engineering',
    company: 'CloudTech Innovations',
    story: 'Three monitoring tools, each alert firing independently with no correlation — that was the daily reality for our on-call engineers. They were spending the first two hours of every incident just figuring out which cloud was the source. ifBash consolidated everything into one correlated view. MTTR went from nearly 5 hours to 31 minutes. CSAT recovered 22 points in 6 months.',
    metric: 'MTTR from 4.7 hrs to 31 min; CSAT from 67 % to 89 %',
    rating: 5,
  },
  {
    name: 'Dr. Robert Kim',
    title: 'Chief Data Officer',
    company: 'DataAnalytics Pro',
    story: 'Exit surveys were brutal — customers kept saying we were slow to get them live. Forty-five days was simply not competitive. The root cause was 14 manual handoffs with no SLA and no shared visibility. ifBash automated the provisioning steps and put SLA timers on the rest. We got to 6 days average. First-year churn fell from 34 % to 9 %.',
    metric: 'Onboarding from 45 days to 6 days; first-year churn from 34 % to 9 %',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    title: 'Head of Product',
    company: 'Nexus Software Group',
    story: 'Feature prioritisation was a quarterly argument between every stakeholder in the business — no shared scoring, no data, just politics. ifBash built a weighted scoring model in ServiceNow that factors in customer impact, strategic alignment, and engineering effort. The board stopped debating roadmap and started executing. We shipped 40 % more features in the first two quarters after go-live.',
    metric: 'Feature throughput up 40 % in first two quarters; roadmap review cycle from 6 weeks to 2',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'How does ServiceNow accelerate software development lifecycles?',
    answer: 'The primary bottleneck ServiceNow removes is the manual change approval queue. A risk-scoring model evaluates each change request against 12 criteria — affected CIs, test coverage, deployment history — and auto-approves low-risk changes in under 30 minutes. High-risk changes go to a mobile approval workflow with a 30-minute SLA for the approver. A shared release calendar with conflict detection prevents hotfix collisions. In completed implementations, the average change approval cycle has dropped from 2–4 days to under 4 hours, and deployment failure rates have fallen by 85–91 %.',
  },
  {
    question: 'What cloud operations capabilities does ServiceNow provide?',
    answer: 'ServiceNow\'s AIOps module ingests alert streams from AWS CloudWatch, Azure Monitor, GCP Operations, and most APM platforms simultaneously. Related alerts are grouped into a single correlated incident record — engineers see one incident, not 40 alerts — and a root-cause hypothesis is generated automatically based on the affected CI and historical incident patterns. A weekly right-sizing analysis identifies over-provisioned resources and calculates the exact monthly saving available from each change.',
  },
  {
    question: 'How can ServiceNow improve customer success for technology companies?',
    answer: 'The key mechanism is enforcing SLA timers on every internal handoff in the onboarding workflow. Most tech companies have 10–18 handoff steps between sales close and customer go-live — each one manually initiated, with no escalation path when it stalls. ServiceNow automates the handoffs that can be automated (provisioning API calls, welcome email sequences) and puts 24-hour SLA timers on the human-required steps. On the retention side, daily health scores from product usage data trigger proactive outreach before customers disengage — typically 30–45 days before they would submit a cancellation.',
  },
  {
    question: 'What IT service management features are included for tech companies?',
    answer: 'ServiceNow ITSM includes ML-based incident auto-routing (typically 89–91 % accuracy on classification to the correct assignment group), eliminating the manual triage queue that adds 45–90 minutes to every incident. Problem management automatically opens a root-cause investigation when 3 incidents share the same configuration item within a 30-day rolling window. Change management integrates directly with your CI/CD pipeline so each deployment creates a change record automatically, maintaining a continuous audit trail without manual documentation.',
  },
  {
    question: 'How does ServiceNow support product lifecycle management?',
    answer: 'ServiceNow aggregates feature demand from multiple sources — customer support tickets, NPS verbatim comments, sales-reported gaps, and direct customer submissions — and tags each request with the number of affected accounts and associated ARR at risk. A configurable weighted scoring model (you set the weights for customer impact, strategic fit, and engineering effort) ranks the backlog daily as new data arrives.',
  },
  {
    question: 'What ROI can technology companies expect from ServiceNow?',
    answer: 'Our reference implementations give specific numbers: TechFlow Systems recovered $41M in revenue acceleration by cutting deployment lead time 78 %. CloudTech Innovations achieved $28M in annual cloud cost savings while recovering CSAT from 67 % to 89 %. DataAnalytics Pro recovered $31M in ARR by cutting first-year churn from 34 % to 9 %. Before committing to a programme, we build a projection model tied to your own current-state metrics to give you a specific payback period estimate.',
  },
  {
    question: 'How does ServiceNow integrate with existing development tools?',
    answer: 'We have pre-built integrations for GitHub, GitLab, Bitbucket, Jenkins, GitHub Actions, Jira, Confluence, PagerDuty, Datadog, New Relic, and all major cloud provider monitoring platforms. Integration scoping occurs in Week 1 of the Technology Assessment phase. Most tool integrations are live by Week 8. ServiceNow sits above your existing tools as an orchestration and intelligence layer — it does not replace GitHub or Jira, it reads from them and coordinates across them.',
  },
  {
    question: 'What security and compliance features are available?',
    answer: 'Vulnerability scan results from Tenable, Qualys, or CrowdStrike are ingested directly as remediation tickets with CVSS-based SLAs enforced: Critical vulnerabilities require remediation confirmation within 24 hours; High within 7 days; Medium within 30 days. Overdue remediation tickets auto-escalate to the CISO\'s dashboard. For compliance, control evidence for SOC 2, ISO 27001, and FedRAMP is collected continuously from integrated systems — so your next audit produces a report rather than a weeks-long evidence-gathering exercise.',
  },
];

export default function TechnologySoftware() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase]               = useState(0);
  const [openFaq, setOpenFaq]                       = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setCurrentTestimonial(p => (p + 1) % clientStories.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000);
    return () => clearInterval(id);
  }, []);

  const cs = caseStudies[currentCase];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Free Strategy Call">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free Strategy Call</span>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Technology &amp; Software Companies</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  Ship faster.<br />
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Retain more customers.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  DevOps automation, cross-cloud AIOps, and customer success workflows on one platform — 78 % faster deployments, 89 % faster MTTR, 73 % less first-year churn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm sm:text-base hover:border-violet-400 hover:text-violet-600">
                    See Client Results
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:flex items-center justify-center py-8">
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2" style={{ borderColor: A, boxShadow: `0 0 40px ${AS}` }}>
                  <Code className="h-8 w-8 mb-1" style={{ color: A }} />
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ServiceNow</div>
                  <div className="absolute inset-0 rounded-2xl animate-ping opacity-[0.08]" style={{ background: A }} />
                </div>
                <div className="absolute w-72 h-72 rounded-full border" style={{ borderColor: `${A}22` }} />
                <div className="absolute w-64 h-64 rounded-full border" style={{ borderColor: `${A}11` }} />
                {hubNodes.map(({ label, sub, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 128;
                  return (
                    <div key={i} className="absolute flex flex-col items-center justify-center w-16 h-16 rounded-xl border bg-white shadow-md text-center" style={{ transform: `translate(${Math.cos(rad) * r}px, ${Math.sin(rad) * r}px)`, borderColor: `${color}33`, boxShadow: `0 4px 16px ${color}22` }}>
                      <div className="text-[11px] font-bold" style={{ color }}>{label}</div>
                      <div className="text-[9px] text-gray-400">{sub}</div>
                    </div>
                  );
                })}
                <svg className="absolute pointer-events-none" width="320" height="320" viewBox="-160 -160 320 320" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                  {hubNodes.map(({ angle }, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return <line key={i} x1={0} y1={0} x2={Math.cos(rad) * 128} y2={Math.sin(rad) * 128} stroke={A} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />;
                  })}
                </svg>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">GitHub · Jira · Datadog · AWS · Azure · GCP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS DARK */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>The Technology Advantage</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Built for engineering orgs. <span style={{ color: A }}>Delivered with precision.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${A}18` }}>
                    <f.icon className="h-5 w-5" style={{ color: A }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">{f.description}</p>
                  <div className="space-y-1">
                    {f.bullets.slice(0, 2).map((b, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="h-3 w-3 flex-shrink-0" style={{ color: A }} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The 14-Week Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">A high-velocity delivery model that prioritizes working software over exhaustive documentation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
              {methodology.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-lg transition-transform group-hover:-translate-y-1`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center" style={{ color: A }}>
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>
                      {step.duration}
                    </div>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.phase}</h3>
                    <ul className="space-y-3">
                      {step.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Real numbers.<br />Real tech companies.</h2>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentCase * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-5">
                              <span className="text-xs font-semibold rounded-full px-3 py-1" style={{ color: A, backgroundColor: `${A}12` }}>{study.industry}</span>
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                            <div className="space-y-5">
                              <div>
                                <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: A }}>Solution</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                              </div>
                            </div>
                            <blockquote className="mt-6 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}50` }}>
                              &ldquo;{study.testimonial}&rdquo;
                            </blockquote>
                          </div>
                          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#f8faff' }}>
                            <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-800">Outcomes</span>
                              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                                  <CheckCircle className="h-4 w-4 text-green-500 mb-2" />
                                  <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                                </div>
                              ))}
                            </div>
                            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-xs text-gray-400">Delivered in</span>
                              <span className="text-sm font-bold" style={{ color: A }}>{study.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors" aria-label="Previous">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button key={i} onClick={() => setCurrentCase(i)} className="rounded-full transition-all duration-300" style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }} aria-label={`Case study ${i + 1}`} />
                  ))}
                </div>
                <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors" aria-label="Next">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: `radial-gradient(ellipse at top right, ${A}, transparent 60%)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Voices</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What tech leaders say.</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-2xl p-8 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0" style={{ backgroundColor: `${A}20`, borderColor: `${A}40` }}>
                            <Users className="h-6 w-6" style={{ color: A }} />
                          </div>
                          <div>
                            <div className="font-bold text-white">{story.name}</div>
                            <div className="text-sm text-slate-400">{story.title} · {story.company}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-5 text-base">&ldquo;{story.story}&rdquo;</p>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                          <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                          <span className="text-green-400 text-sm font-medium">{story.metric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {clientStories.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)} className="h-1.5 rounded-full transition-all duration-300" style={{ width: index === currentTestimonial ? 32 : 6, backgroundColor: index === currentTestimonial ? A : 'rgba(255,255,255,0.2)' }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Common questions.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your technology transformation.</p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 hover:border-violet-200 rounded-xl overflow-hidden transition-colors">
                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} style={{ color: A }} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${A}, transparent 70%)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Accepting new engagements &middot; 14-week go-live
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to ship 78 % faster?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your environment. We&apos;ll scope your implementation in 48 hours and show you exactly how we&apos;d approach it — no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-violet-500 hover:text-white transition-all text-base">
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
