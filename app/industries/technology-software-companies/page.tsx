'use client';
import React, { useState, useEffect } from 'react';
import {
  Code, GitBranch, CloudLightning, Users, Monitor, Shield,
  CheckCircle, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  MessageCircle, Search, Rocket, Lightbulb, Cog,
} from 'lucide-react';

const A = '#7c3aed';
const AG = 'linear-gradient(135deg, #7c3aed, #6d28d9)';
const AS = 'rgba(124,58,237,0.30)';

const caseStudies = [
  {
    client: 'TechFlow Systems', industry: 'Software Development', timeline: '12 weeks',
    challenge: '45% of production deployments were delayed by 11 days due to manual change approvals and undocumented environment dependencies. No shared release calendar caused routine hotfix collisions across 150 active projects.',
    solution: 'ServiceNow DevOps with automated CI/CD orchestration, centralised release calendar with conflict detection, and one-click rollback runbooks. Low-risk changes auto-approved via configurable risk scoring; human approvals routed via mobile within 30-minute SLA.',
    results: ['78% reduction in deployment lead time', '91% reduction in failed deployments requiring rollback', '$41M in revenue acceleration from faster feature delivery', 'Change approval cycle from 3.2 days to 4 hours'],
    testimonial: 'Once ifBash automated risk scoring and mobile approvals, change approval went from 3.2 days to 4 hours. Our engineers stopped context-switching and started shipping.',
  },
  {
    client: 'CloudTech Innovations', industry: 'Cloud Services', timeline: '16 weeks',
    challenge: 'Multi-cloud incidents across AWS, Azure, and GCP averaged 4.7 hours to resolve. Three separate monitoring tools produced uncorrelated alerts; engineers spent the first 2 hours identifying the source of impact.',
    solution: 'ServiceNow AIOps consolidating alert streams from all three cloud environments into a single correlated incident queue with automated root-cause hypothesis generation and templated customer communications.',
    results: ['89% faster incident resolution (4.7 hrs to 31 min MTTR)', 'CSAT recovered from 67% to 89% within 6 months', '$28M annual cloud cost optimisation from right-sizing alerts', 'Customer communications sent within 8 minutes of detection'],
    testimonial: 'ifBash consolidated everything into one correlated view. Mean time to resolve dropped from nearly 5 hours to 31 minutes.',
  },
  {
    client: 'DataAnalytics Pro', industry: 'Data & Analytics', timeline: '14 weeks',
    challenge: 'New customer onboarding took 45 days due to 14 manual handoffs between sales, provisioning, and training with no SLA enforcement. 34% of first-year churn cited slow time-to-value, representing $23M in lost ARR.',
    solution: 'Automated onboarding orchestration in ServiceNow with SLA timers on each handoff step, automated provisioning API calls, and a customer-facing progress tracker. Health scores from product usage trigger proactive CSM outreach.',
    results: ['Onboarding cycle from 45 days to 6 days on average', 'First-year churn rate from 34% to 9%', '$31M in recovered annual recurring revenue', 'CSM proactive outreach within 24 hours of engagement drop'],
    testimonial: 'ifBash turned 45-day onboarding into 6 days by automating the handoffs. Churn in year one dropped from a third of customers to under 10%.',
  },
];

const features = [
  { icon: Code, title: 'DevOps & Development Lifecycle', description: 'Change risk scoring auto-approves low-risk deployments in under 30 minutes. Centralised release calendar prevents hotfix collisions. One-click rollback runbooks auto-generated at deployment time.' },
  { icon: CloudLightning, title: 'Cloud Operations Management', description: 'AIOps correlation engine ingests alert streams from AWS, Azure, and GCP simultaneously, grouping related alerts into a single incident with root-cause hypothesis generated before the engineer opens the ticket.' },
  { icon: Users, title: 'Customer Success Automation', description: 'Onboarding workflows enforce SLA timers on every handoff with automated escalation when overdue. Daily customer health scores from usage and support data trigger proactive CSM outreach.' },
  { icon: Monitor, title: 'IT Service Management', description: 'ML-based incident classification routes tickets to the correct assignment group with 91% accuracy, eliminating the manual triage queue. Problem management opens investigations after 3 linked incidents on the same CI.' },
  { icon: GitBranch, title: 'Product Lifecycle Management', description: 'Feature requests from support tickets, NPS feedback, and sales-reported gaps are auto-ingested and tagged with customer count and ARR at risk. Weighted scoring produces a ranked backlog updated daily.' },
  { icon: Shield, title: 'Security & Compliance Operations', description: 'Vulnerability scan results from Tenable, Qualys, or CrowdStrike flow in as prioritised remediation tickets with CVSS-based SLAs. SOC 2, ISO 27001, and FedRAMP evidence collected continuously.' },
];

const methodology = [
  { phase: 'Discovery', duration: 'Weeks 1-2', icon: Search, color: 'from-violet-500 to-purple-600', features: ['Development process analysis', 'Service delivery assessment'] },
  { phase: 'Design & Automate', duration: 'Weeks 3-8', icon: Lightbulb, color: 'from-purple-600 to-pink-600', features: ['ServiceNow tech setup', 'DevOps pipeline automation'] },
  { phase: 'Development', duration: 'Weeks 9-11', icon: Cog, color: 'from-pink-600 to-rose-500', features: ['Automated testing', 'Security validation'] },
  { phase: 'Deployment', duration: 'Weeks 12-14', icon: Rocket, color: 'from-rose-500 to-orange-500', features: ['Production deployment', 'Monitoring setup'] },
];

const faqs = [
  { question: 'How does ServiceNow accelerate software development lifecycles?', answer: 'A risk-scoring model auto-approves low-risk changes in under 30 minutes. High-risk changes route to mobile approval with a 30-minute SLA. Clients see change approval cycles drop from 2-4 days to under 4 hours.' },
  { question: 'What cloud operations capabilities does ServiceNow provide?', answer: 'AIOps ingests alerts from AWS CloudWatch, Azure Monitor, and GCP Operations, grouping related alerts into a single incident with auto-generated root-cause hypothesis. Weekly right-sizing analysis identifies over-provisioned resources.' },
  { question: 'How can ServiceNow improve customer success for technology companies?', answer: 'ServiceNow enforces SLA timers on every internal handoff in the onboarding workflow. Daily health scores from product usage trigger proactive outreach 30-45 days before customers would submit a cancellation.' },
  { question: 'What IT service management features are included for tech companies?', answer: 'ML-based incident auto-routing (89-91% accuracy) eliminates the manual triage queue. Problem management opens investigations when 3 incidents share the same CI within 30 days.' },
  { question: 'What ROI can technology companies expect from ServiceNow?', answer: 'TechFlow recovered $41M in revenue acceleration. CloudTech achieved $28M in annual cloud cost savings. DataAnalytics Pro recovered $31M in ARR by cutting churn. Typical payback: 6-12 months.' },
];

export default function TechnologySoftware() {
  const [currentCase, setCurrentCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    const id = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-white overflow-hidden">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase mb-6 inline-block" style={{ color: A }}>Technology &amp; Software Companies</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  Ship faster.<br /><span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Retain more customers.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  DevOps automation, cross-cloud AIOps, and customer success workflows on one platform — 78% faster deployments, 89% faster MTTR, 73% less first-year churn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:flex items-center justify-center py-8">
                <div className="w-28 h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2" style={{ borderColor: A, boxShadow: `0 0 40px ${AS}` }}>
                  <Code className="h-8 w-8 mb-1" style={{ color: A }} />
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ServiceNow</div>
                </div>
                <div className="absolute flex items-center gap-2 bottom-4 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">GitHub - Jira - Datadog - AWS - Azure - GCP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-20" style={{ background: '#07071a' }}>
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>The Technology Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Built for engineering orgs. <span style={{ color: A }}>Delivered with precision.</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${A}18` }}>
                    <f.icon className="h-5 w-5" style={{ color: A }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The 14-Week Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">A high-velocity delivery model prioritising working software over documentation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {methodology.map((step, index) => (
                <div key={index}>
                  <div className="mb-6 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center" style={{ color: A }}>
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6">
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
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">Real numbers. Real tech companies.</h2>
            </div>
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
                          <div>
                            <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">{study.challenge}</p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: A }}>Solution</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                          </div>
                          <blockquote className="mt-6 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}50` }}>&ldquo;{study.testimonial}&rdquo;</blockquote>
                        </div>
                        <div className="p-5 grid grid-cols-2 gap-3 bg-gray-50 rounded-2xl">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                              <CheckCircle className="h-4 w-4 text-green-500 mb-2" />
                              <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
              {caseStudies.map((_, i) => (
                <button key={i} onClick={() => setCurrentCase(i)} className="rounded-full transition-all duration-300" style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }} aria-label={`Case ${i + 1}`} />
              ))}
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4 leading-tight">Common questions.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your technology transformation.</p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
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
        <section className="py-24" style={{ background: '#07071a' }}>
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to ship 78% faster?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your environment. We'll scope your implementation in 48 hours — no commitment required.</p>
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
              Free Strategy Call <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
