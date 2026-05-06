'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Code, Layers, Cpu, GitBranch, Package, Shield } from 'lucide-react';

const A = '#ea580c';
const AG = 'linear-gradient(135deg, #ea580c, #d97706)';

const caseStudies = [
  { client: 'LogiTech Enterprises', industry: 'Logistics', timeline: '16 weeks', challenge: 'Off-the-shelf ServiceNow modules couldn\'t handle complex multi-carrier routing logic causing $4.2M in shipping errors.', solution: 'Custom ServiceNow app with real-time carrier API integration, ML-based routing engine, and automated exception handling.', results: ['94% reduction in shipping errors', '$5.1M annual savings', '47% faster order fulfilment'], quote: 'The custom app solved problems no off-the-shelf product could. It\'s now central to our entire logistics operation.', author: 'Alex Rivera, CTO' },
  { client: 'MediDevice Corp', industry: 'Healthcare', timeline: '20 weeks', challenge: 'FDA-regulated device tracking requiring custom audit trails, e-signatures, and compliance workflows not available natively.', solution: 'Purpose-built regulatory compliance app on ServiceNow with 21 CFR Part 11 e-signatures and full audit chain.', results: ['100% FDA compliance', 'Zero audit findings in 2 years', '78% faster compliance cycles'], quote: 'Our custom app handles FDA requirements that no standard tool can match. Flawless in every inspection.', author: 'Dr. Priya Nair, VP Quality' },
  { client: 'EnergyNet Grid', industry: 'Energy', timeline: '24 weeks', challenge: 'Grid incident management requiring real-time SCADA integration and custom escalation trees across 400+ technicians.', solution: 'Custom field operations app integrating SCADA, IoT sensors, and ServiceNow with intelligent escalation and geofencing.', results: ['67% faster incident response', '100% SCADA integration', 'Zero missed escalations'], quote: 'The custom app connects our physical grid to our digital operations seamlessly.', author: 'Tom Eriksen, Head of Grid Ops' },
];

const methodology = [
  { phase: 'Discovery & Spec', duration: 'Week 1–3', items: ['Requirements workshops & technical architecture', 'API mapping & prototype wireframes', 'Feasibility validation & scope lock'] },
  { phase: 'Design & Build', duration: 'Week 4–12', items: ['UI/UX design & custom development', 'Integration build & unit testing', 'Code review cycles & sprint demos'] },
  { phase: 'Test & Harden', duration: 'Week 13–16', items: ['UAT facilitation & performance testing', 'Security review & bug resolution', 'Documentation & training materials'] },
  { phase: 'Deploy & Support', duration: 'Week 17+', items: ['Production deployment & user training', 'Hypercare period with daily check-ins', 'Ongoing enhancement sprints available'] },
];

const services = [
  { icon: Code, title: 'Custom App Development', desc: 'Full-lifecycle development on scoped applications using supported APIs only — your app survives every platform upgrade. Working prototype by week 4. 100% delivery track record.', benefits: ['Upgrade-safe scoped architecture', 'Prototype by week 4'] },
  { icon: Layers, title: 'Integration Development', desc: 'Custom connectors for SCADA, IoT, proprietary ERPs, legacy mainframes, and industry-specific APIs. REST, SOAP, GraphQL — tested under production load before go-live.', benefits: ['REST, SOAP, GraphQL & message queues', 'Load-tested before production'] },
  { icon: Cpu, title: 'AI-Powered Custom Modules', desc: 'ML models for prediction, NLP for document processing, agentic AI for autonomous workflows — embedded directly into your custom apps with defined accuracy thresholds and human override paths.', benefits: ['ML with accuracy thresholds', 'Human override on every AI action'] },
  { icon: GitBranch, title: 'Platform Extensions', desc: 'Custom tables, Flow Designer automations, Service Portal widgets, and mobile screens — all within ServiceNow\'s extensibility framework so they survive upgrades without conflict.', benefits: ['Custom tables & relationships', 'Flow Designer automations'] },
  { icon: Package, title: 'App Migration & Modernisation', desc: 'Legacy apps on deprecated APIs analysed, re-architected, and migrated to current architecture. Old and new run in parallel until parity confirmed before decommissioning.', benefits: ['Legacy risk assessment first', 'Parallel run until parity confirmed'] },
  { icon: Shield, title: 'Regulated & Compliance Apps', desc: 'Built to FDA 21 CFR Part 11, HIPAA, SOX, FedRAMP — compliance drives architecture from day one. E-signature, full audit chain, data residency controls included.', benefits: ['21 CFR Part 11 e-signatures', 'Data residency & retention controls'] },
];

const faqs = [
  { q: 'When should we build custom vs use native ServiceNow?', a: 'Build custom when native modules can\'t meet your requirements without heavy workarounds, when you have industry-specific compliance needs, or when deep integration with proprietary systems is required.' },
  { q: 'How do custom apps survive ServiceNow upgrades?', a: 'We build exclusively on supported APIs using scoped applications. Every app includes upgrade testing in our validation cycle — zero upgrade failures across 200+ apps.' },
  { q: 'How long does a custom app take to build?', a: 'Simple: 8–12 weeks. Mid-complexity with integrations: 14–20 weeks. Enterprise-grade with ML or compliance: 20–28 weeks. Working prototype delivered by week 4 in every engagement.' },
  { q: 'Can you build apps that work with non-ServiceNow systems?', a: 'Yes — SCADA, IoT, ERP (SAP, Oracle), legacy mainframes, industry APIs, custom databases. If it has an API or data source, we connect it.' },
  { q: 'How do you handle security in custom applications?', a: 'RBAC, encryption, input validation, XSS protection, SQL injection prevention — built in from architecture. Regulated apps include e-signature, audit trail, and data residency.' },
];

export default function CustomAppsPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useState(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Discuss Your App"><MessageCircle className="h-6 w-6" /></a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%,rgba(234,88,12,0.18) 0%,transparent 65%)' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-20 pb-0">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 lg:pt-4">
              <div className="flex items-center gap-3 mb-6"><span className="inline-block w-8 h-px bg-orange-500" /><span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Custom App Development</span></div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] mb-5">Built for your business.<br /><span style={{ background: 'linear-gradient(90deg,#fb923c,#fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Not the other way around.</span></h1>
              <p className="text-base text-slate-400 mb-7 max-w-sm">When off-the-shelf doesn&apos;t fit, we build exactly what you need — <span className="text-orange-300 font-semibold">purpose-built on ServiceNow</span> with native performance and full upgrade safety.</p>
              <div className="flex flex-col gap-3 mb-8">
                <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }}>Spec Your Custom App <ArrowRight className="h-4 w-4" /></a>
                <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 hover:border-orange-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">See What We&apos;ve Built</a>
              </div>
            </div>
            {/* Code editor visual */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: '#0d1117', boxShadow: '0 0 80px rgba(234,88,12,0.12)' }}>
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8" style={{ background: '#161b22' }}><div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /></div><span className="ml-2 text-xs font-mono text-gray-500">logistic-router.js — scoped app</span></div>
                <div className="px-4 py-4 font-mono text-xs leading-[1.7]" style={{ minHeight: '200px' }}>
                  {[['text-orange-400','class '],['text-white','LogisticRouter '],['text-gray-400','extends '],['text-white','AbstractAjaxProcessor {']].map(([c,t],i)=><span key={i} className={c}>{t}</span>)}<br />
                  <span className="text-amber-400">  routeShipment</span><span className="text-white">(order) {'{'}</span><br />
                  <span className="text-blue-400">    var</span><span className="text-white"> carrier = </span><span className="text-blue-400">new</span><span className="text-white"> GlideRecord(</span><span className="text-green-400">&apos;x_ifb_carrier&apos;</span><span className="text-white">);</span><br />
                  <span className="text-white">    carrier.addQuery(</span><span className="text-green-400">&apos;region&apos;</span><span className="text-white">, order.destination);</span><br />
                  <span className="text-white">    carrier.query();</span><br />
                  <span className="text-blue-400">    if</span><span className="text-white"> (carrier.next()) {'{'}</span><br />
                  <span className="text-white">      order.setValue(</span><span className="text-green-400">&apos;carrier&apos;</span><span className="text-white">, carrier.sys_id);</span><br />
                  <span className="text-white">      order.update();</span><br />
                  <span className="text-blue-400">      return</span><span className="text-white"> carrier.sys_id;</span><br />
                  <span className="text-white">    {'}'}</span><br />
                  <span className="text-white">  {'}'}</span><br />
                  <span className="text-white">{'}'}</span><br />
                  <span className="text-slate-600 animate-pulse">█</span>
                </div>
                <div className="px-4 py-2 border-t border-white/8 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-slate-500 font-mono">✓ All APIs upgrade-safe · 0 warnings · deployed v2.4</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/8">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[{v:'200+',l:'Apps delivered'},{v:'16 wks',l:'Average delivery'},{v:'100%',l:'Upgrade-safe'},{v:'0',l:'Failed deliveries'}].map((s,i)=>(<div key={i} className="py-6 px-6 text-center"><div className="text-2xl font-bold text-orange-400">{s.v}</div><div className="text-xs text-slate-500 mt-1">{s.l}</div></div>))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-500" /><span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">What We Build</span></div><h2 className="text-3xl sm:text-4xl font-bold text-white">Any capability. Any complexity.</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, benefits }) => (
              <div key={title} className="group rounded-2xl p-6 border border-white/8 hover:border-orange-500/40 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 group-hover:bg-orange-500/25 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-orange-400" /></div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{desc}</p>
                <div className="space-y-1">{benefits.map(b => <div key={b} className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle className="h-3 w-3 text-orange-400 shrink-0" />{b}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">How We Build</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Prototype in 4 weeks. Live in 16.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodology.map((step, i) => (
              <div key={i} className="text-center" style={{ opacity: phasesVisible ? 1 : 0, transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease', transitionDelay: `${i * 120}ms` }}>
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-lg">{i + 1}</div>
                <div className="text-xs font-semibold text-orange-600 mb-2">{step.duration}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.phase}</h3>
                <ul className="space-y-1.5 text-left">{step.items.map((item, j) => <li key={j} className="flex items-start gap-2 text-xs text-gray-500"><span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 shrink-0" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Built different. Works perfectly.</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (
              <div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                    <div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div>
                    <blockquote className="mt-5 pl-4 border-l-2 border-orange-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                  </div>
                  <div className="rounded-xl p-5 border border-orange-200" style={{ background: '#fff8f0' }}><div className="text-xs text-green-700 uppercase tracking-widest font-semibold mb-3">Results</div><div className="space-y-2">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />{r}</div>)}</div></div>
                </div>
              </div></div>
            ))}</div></div>
            <div className="flex items-center justify-between mt-5">
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center"><ChevronLeft className="h-5 w-5 text-gray-500" /></button>
              <div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-orange-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div>
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center"><ChevronRight className="h-5 w-5 text-gray-500" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG }}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
            <div className="lg:col-span-2 space-y-3">{faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 hover:border-orange-200 rounded-xl overflow-hidden transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"><span className="font-semibold text-gray-800 pr-4 text-sm">{f.q}</span><ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} /></button>
                {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm">{f.a}</p></div>}
              </div>
            ))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Have something that can&apos;t be bought?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us what off-the-shelf can&apos;t do. We&apos;ll spec your app and show a working prototype in 4 weeks — no commitment.</p>
          <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${A}4d` }}>Start Your Custom App <ArrowRight className="h-5 w-5" /></a>
        </div>
      </section>
    </>
  );
}
