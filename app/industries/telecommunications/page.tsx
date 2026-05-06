'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, MessageCircle, Radio, Satellite, Antenna, Signal, Server, Users, Search, Settings, Shield, Rocket } from 'lucide-react';

const A = '#7c3aed';
const AG = 'linear-gradient(135deg, #7c3aed, #a855f7)';

const solutions = [
  { icon: Radio, title: 'Network Operations & AIOps', desc: 'ITOM AIOps correlates alerts from Nokia NetAct, Ericsson OSS, and third-party NMS into single incident records — deduplicating 70–80% of alerts. Predictive degradation alerts fire when tower throughput drops below 85% of 30-day baseline.' },
  { icon: Antenna, title: '5G Infrastructure Deployment', desc: 'Site deployment workflows enforce permit-confirmed gates before contractor dispatch. Programme dashboard shows every site\'s current stage, blocker, and critical path. Landlord approval auto-escalates 14 days from deadline.' },
  { icon: Signal, title: 'Customer Experience Automation', desc: 'CSM unified agent workspace consolidates account, network, billing, and ticket history. AI playbooks recommend top 3 likely causes. Proactive outage notifications reach customers within 8 minutes of fault confirmation.' },
  { icon: Satellite, title: 'Service Assurance & SLA', desc: 'SLA jeopardy alerting fires before breach. Automated synthetic testing at 5-minute intervals on Tier 1 services. Service health dashboards segmented by type, tier, and region.' },
  { icon: Server, title: 'Field Service Transformation', desc: 'Automated dispatch routes nearest qualified technician by skills, proximity, and workload. Mobile app with full asset history and resolution playbooks. 94% first-time fix rate across deployments.' },
  { icon: Users, title: 'Capacity Planning & Optimisation', desc: 'Predictive models using network utilisation data forecast congestion 90 days ahead. Automated upgrade recommendations with cost-benefit scoring. CAPEX optimisation through usage-based triggers.' },
];

const caseStudies = [
  {
    client: 'CellServe Telecom', industry: 'Mobile Network Operator', timeline: '16 weeks',
    challenge: 'Field dispatch was manual — a printout sorted alphabetically, not by priority or proximity. Average dispatch-to-arrival: 4.5 hours. Repeat visits at 34% because techs lacked site history and resolution data.',
    solution: 'FSM with automated skill-and-proximity-based dispatch. Mobile app gives techs full asset history, site photos, and resolution playbooks. Repeat-visit triggers fire if same asset faults within 14 days.',
    results: ['Dispatch-to-arrival: 4.5 hrs to 38 min', 'Repeat visits: 34% to 6%', 'First-time fix: 64% to 94%', '$41M annual savings'],
    quote: 'We went from dispatching alphabetically to dispatching intelligently. The techs now have everything before they arrive.', author: 'VP Field Operations',
  },
  {
    client: 'NexGen Communications', industry: 'Infrastructure Provider', timeline: '20 weeks',
    challenge: '5G rollout across 1,400 sites tracked in spreadsheets. 67% of sites missed milestones. $78M in contractor overruns from mobilising crews to sites without confirmed permits.',
    solution: 'ServiceNow programme management with permit-gated deployment workflows. Every site visible on a single dashboard with stage, blocker, owner, and critical path date.',
    results: ['On-time deployment: 33% to 92%', 'Contractor overruns: $78M to $0', 'Permit-to-mobilise: 45 days to 12 days', '1,400 sites deployed in 14 months'],
    quote: 'When a permit is delayed, we know within hours — not when the contractor shows up to a locked gate.', author: 'VP Infrastructure',
  },
];

const methodology = [
  { phase: 'Assessment & Strategy', duration: 'Weeks 1-4', icon: Search, items: ['Network infrastructure and OSS/BSS landscape audit', 'NOC alert volume and MTTR baseline analysis', 'Customer experience and service quality assessment'] },
  { phase: 'Configuration & Integration', duration: 'Weeks 5-20', icon: Settings, items: ['ServiceNow ITOM AIOps and event management setup', 'NMS, OSS, and NetCool alert feed integration', 'FSM dispatch algorithm and mobile workbench configuration'] },
  { phase: 'Testing & Validation', duration: 'Weeks 21-26', icon: Shield, items: ['Alert correlation accuracy testing against 90-day historical data', 'Dispatch algorithm performance simulation', 'UAT with NOC engineers and field technicians'] },
  { phase: 'Deployment & Optimisation', duration: 'Weeks 27-30', icon: Rocket, items: ['Phased rollout by region or network domain', 'NOC, field ops, and customer service team training', 'Hypercare with daily MTTR and dispatch KPI review'] },
];

const faqs = [
  { q: 'How does AIOps reduce NOC alert volume?', a: 'Multi-NMS alert correlation deduplicates 70–80% of alerts. Each incident auto-populates with fault location, affected customer count, and probable cause — eliminating manual cross-referencing.' },
  { q: 'How fast can field service dispatch improve?', a: 'CellServe went from 4.5-hour manual dispatch to 38-minute automated dispatch. First-time fix rate improved from 64% to 94% through mobile access to full site history.' },
  { q: 'Can ServiceNow manage 5G deployment programmes?', a: 'Yes. NexGen deployed 1,400 sites in 14 months with permit-gated workflows. On-time deployment went from 33% to 92%. Contractor overruns eliminated.' },
  { q: 'What OSS/NMS systems do you integrate with?', a: 'Nokia NetAct, Ericsson OSS, Huawei iManager, and third-party NMS platforms via Integration Hub with custom connectors where needed.' },
  { q: 'How long does a telecom implementation take?', a: '16-20 weeks from assessment to network-wide go-live. Field service deployments can show ROI in as little as 8 weeks.' },
];

export default function TelecommunicationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Free Consultation"><MessageCircle className="h-6 w-6" /></Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden flex items-center min-h-[85vh]" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #7c3aed, transparent 70%)' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6"><span className="inline-block w-8 h-px bg-violet-500" /><span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Telecommunications</span></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">38-minute dispatch.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">94% first-time fix.</span></h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">Network operations, field service, and customer experience — unified on ServiceNow. From 5G rollout to NOC automation.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }}>Modernise Your Network Ops <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-violet-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">See Client Results</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ v: '38 min', l: 'Dispatch-to-arrival' }, { v: '94%', l: 'First-time fix rate' }, { v: '92%', l: 'On-time deployment' }, { v: '89%', l: 'Faster resolution' }].map(({ v, l }) => (
                <div key={l} className="rounded-2xl border border-white/8 p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}><div className="text-2xl font-bold text-white mb-1">{v}</div><div className="text-sm text-slate-400">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Capabilities</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Network ops, field service, and CX — on one platform.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl p-6 border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-violet-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Telecom transformations.</h2>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-semibold text-violet-600 bg-violet-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div>
                    <div><div className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div>
                  </div>
                  <div className="rounded-xl p-5 border border-violet-200" style={{ background: '#f5f3ff' }}>
                    <div className="text-xs text-green-700 uppercase tracking-widest font-semibold mb-3">Results</div>
                    <div className="space-y-2">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-violet-500 shrink-0" />{r}</div>)}</div>
                  </div>
                </div>
                <blockquote className="mt-5 pl-4 border-l-2 border-violet-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Methodology</span>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">The Telecom Implementation Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
            {methodology.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl p-px shadow-lg transition-transform group-hover:-translate-y-1" style={{ background: AG }}>
                    <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center"><step.icon className="h-6 w-6" style={{ color: A }} /></div>
                  </div>
                  <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{step.phase}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 justify-center"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: A }} />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 hover:border-violet-200 rounded-xl overflow-hidden transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-violet-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to modernise your network operations?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us about your network. We&apos;ll scope the transformation in 48 hours.</p>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 12px 32px ${A}4d` }}>Start Your Transformation <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
