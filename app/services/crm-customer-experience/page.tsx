'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Heart, Zap, TrendingUp, Target, Smile, ThumbsUp, MessageSquare, Headphones, Clock } from 'lucide-react';

const A = '#2563eb';
const AG = 'linear-gradient(135deg, #2563eb, #7c3aed)';

const caseStudies = [
  { client: 'RetailMax Enterprise', industry: 'Retail', timeline: '14 weeks', challenge: '7 disconnected contact channels with no shared history. Agents spent 4 minutes per contact reconstructing context. CSAT: 41%. Contact centre turnover: 67% annually.', solution: 'Unified ServiceNow CRM consolidating all 7 channels into a single customer record. AI handles routine enquiries autonomously. Agents see full context before first response.', results: ['CSAT: 41% → 89% in 6 months', 'Handle time: 11 min → 3.2 min', 'Turnover: 67% → 24%'], quote: 'Our agents used to spend half the call figuring out who they were talking to. Now everything is there before they say hello.', author: 'Jennifer Walsh, CCO' },
  { client: 'TechServe Solutions', industry: 'Technology', timeline: '12 weeks', challenge: 'Employee IT requests averaging 5.7 days through a single inbox. No routing, no self-service. 34% of requests were password resets requiring engineer involvement.', solution: 'AI-driven employee experience platform with intelligent self-service portal, automated resolution for 34 common request types, and smart routing for complex cases.', results: ['5.7 days → 9 hours resolution', '34 request types fully automated', 'Employee satisfaction: 34% → 91%'], quote: 'I reset my own password for the first time in 12 years. It took 30 seconds. That\'s what changes how people feel about work.', author: 'David Park, VP Operations' },
  { client: 'HealthFirst Network', industry: 'Healthcare', timeline: '18 weeks', challenge: '45 locations with separate patient intake and discharge processes. Patients transferred between facilities had to re-provide history. No live bed availability view.', solution: 'Integrated CX and EX platform unifying patient records and staff workflows. Patient history travels with the patient. Bed availability live across all 45 sites.', results: ['Re-registration at transfer: eliminated', 'Transfer coordination: 45 min → 8 min', 'Patient satisfaction: 61% → 96%'], quote: 'A patient transferred from Northside to Central and their nurse already had full history on screen. That has never happened before.', author: 'Dr. Sarah Park, CMO' },
];

const services = [
  { icon: Smile, title: 'Customer Service Management', desc: 'Unified omnichannel CSM. AI triage handles routine cases. Agents get full context before they say hello.', benefits: ['7-channel unification', 'AI auto-resolution for common requests'] },
  { icon: Heart, title: 'Customer Retention', desc: 'Health scores computed daily from product usage and support patterns. Proactive CSM outreach triggers when engagement drops.', benefits: ['Daily customer health scoring', 'Automated churn prevention workflows'] },
  { icon: TrendingUp, title: 'Sales Force Automation', desc: 'Lead scoring, opportunity routing, AI-assisted proposals. Pipeline visibility from first touch to close.', benefits: ['AI lead scoring & routing', 'Real-time pipeline dashboards'] },
  { icon: ThumbsUp, title: 'Field Service Excellence', desc: 'Automated dispatch, mobile technician app, real-time customer tracking. Right tech, right parts, first visit.', benefits: ['Skill-based auto-dispatch', 'Customer live-tracking portal'] },
  { icon: MessageSquare, title: 'Conversational AI', desc: 'Virtual agents handling routine conversations across chat, SMS, and voice. Escalates to human with full context.', benefits: ['Multi-channel virtual agents', 'Context-preserving handoff'] },
  { icon: Headphones, title: 'Agent Experience', desc: 'Single-screen unified desktop. AI suggests next actions. Knowledge articles surface automatically based on case context.', benefits: ['Unified agent desktop', 'AI-suggested responses & KB articles'] },
];

const methodology = [
  { phase: 'Map the journey', duration: 'Weeks 1–3', features: ['Full channel audit & contact driver analysis', 'Customer journey mapping with drop-off points', 'ROI modelling prioritised by impact'] },
  { phase: 'Unify the data', duration: 'Weeks 4–8', features: ['Single customer record across all channels', 'AI model training on historical interactions', 'Self-service portal & virtual agent deployment'] },
  { phase: 'Automate the routine', duration: 'Weeks 9–12', features: ['AI triage & auto-resolution workflows', 'Agent desktop with unified context view', 'Proactive outreach triggers configured'] },
  { phase: 'Measure & optimise', duration: 'Weeks 13–16', features: ['CSAT, handle time, resolution rate dashboards', 'Monthly KPI reviews & tuning', '90-day hypercare with outcome validation'] },
];

const faqs = [
  { q: 'How fast can you unify our customer channels?', a: '12–16 weeks from kickoff to unified platform. Week 4: first channels go live. By go-live, all channels feed a single customer record with full interaction history.' },
  { q: 'Can AI really handle customer conversations?', a: 'Yes — for defined, high-volume cases: order status, returns, FAQs, appointment booking. Virtual agents resolve 40–60% of inbound contacts autonomously. Complex cases escalate with full context.' },
  { q: 'What ROI can we expect from ServiceNow CRM?', a: 'Our clients average 89% CSAT (from ~40% baseline), 60% reduction in handle time, and 40% reduction in contact centre turnover. KPIs agreed upfront and tracked live.' },
  { q: 'How do you handle data migration from our existing CRM?', a: 'Migration mapping starts week one of discovery. We clean, deduplicate, and migrate existing customer data, interaction history, and knowledge base. Zero data loss — verified at every stage.' },
  { q: 'Does this work for B2B and B2C?', a: 'Both. B2B: account hierarchies, contract management, SLA-driven support. B2C: high-volume case management, self-service, social channel integration. The platform handles both natively.' },
];

export default function CRMCustomerExperiencePage() {
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
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}66` }} aria-label="Free CRM Consultation"><MessageCircle className="h-6 w-6" /></a>
      </div>

      {/* HERO — dark */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-8 h-px bg-blue-600" />
                <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">CRM & Customer Experience</span>
              </div>
              <div className="max-w-3xl mb-5">
                <h1 className="text-6xl sm:text-6xl lg:text-6xl font-bold text-gray-900 leading-[1.0] tracking-tight">
                  CRM that
                  <br></br>
                  <span className="text-blue-600">converts.</span>
                  <br></br>
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Relationships that last.</span>
                </h1>
              </div>
              <br></br>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
                Unify every customer channel into a single ServiceNow platform. AI handles routine conversations. Agents handle what matters. Customers feel the difference.
              </p>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}>Transform Your CRM <ArrowRight className="h-4 w-4" /></a>
                <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-blue-400 text-gray-600 hover:text-blue-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</a>
              </div>
            </div>

            {/* Right — Unified Channels visual */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border-2 bg-white flex flex-col items-center justify-center shadow-xl z-10" style={{ borderColor: '#2563eb', boxShadow: '0 0 40px rgba(37,99,235,0.12)' }}>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider">Customer</span>
                  <span className="text-[11px] font-black text-blue-600">Record</span>
                </div>

                {/* Outer ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-blue-100" />

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  {[0, 51, 102, 153, 204, 255, 306].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line key={i} x1="160" y1="160" x2={160 + Math.cos(rad) * 125} y2={160 + Math.sin(rad) * 125} stroke="rgba(37,99,235,0.12)" strokeWidth="0.5" />
                    );
                  })}
                </svg>

                {/* Channel nodes — positioned ON the ring */}
                {[
                  { label: 'Email', angle: 0, color: '#f59e0b' },
                  { label: 'Chat', angle: 51, color: '#10b981' },
                  { label: 'Phone', angle: 102, color: '#3b82f6' },
                  { label: 'Social', angle: 153, color: '#8b5cf6' },
                  { label: 'In-Store', angle: 204, color: '#ef4444' },
                  { label: 'App', angle: 255, color: '#06b6d4' },
                  { label: 'SMS', angle: 306, color: '#f97316' },
                ].map(({ label, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 160 + Math.cos(rad) * 140;
                  const y = 160 + Math.sin(rad) * 140;
                  return (
                    <div key={i} className="absolute flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-[10px] font-semibold text-gray-500">{label}</span>
                    </div>
                  );
                })}

                {/* ServiceNow + ifBash badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 border text-[10px] font-bold tracking-wider" style={{ borderColor: 'rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.06)', color: '#2563eb' }}>
                  ServiceNow + ifBash
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — light */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#eff6ff' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">What We Build</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Customer and employee experiences that actually work.</h2></div>
          <div data-reveal="services" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {services.map(({ icon: Icon, title, desc, benefits }, i) => (
              <div key={title} className="group rounded-2xl p-6 border border-blue-200 bg-white hover:border-blue-400 transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${A}12` }}><Icon className="h-5 w-5 text-blue-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="space-y-1">{benefits.map(b => <div key={b} className="flex items-center gap-2 text-xs text-gray-500"><CheckCircle className="h-3 w-3 text-blue-600 shrink-0" />{b}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">How We Deliver</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Four phases. Measurable at every step.</h2>
          <p className="text-gray-500 mb-10">CRM that shows ROI before the full programme is committed.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {methodology.map((step, i) => (
              <div key={i} className="group"><div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mb-3 transition-colors">{i + 1}</div><span className="inline-block text-xs font-medium text-blue-500 bg-blue-50 rounded-full px-3 py-1 mb-3">{step.duration}</span><h3 className="font-bold text-gray-900 mb-3">{step.phase}</h3><ul className="space-y-2">{step.features.map((f, j) => <li key={j} className="flex items-start gap-2 text-sm text-gray-500"><CheckCircle className="h-3.5 w-3.5 text-blue-400 mt-0.5 shrink-0" />{f}</li>)}</ul></div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 lg:py-20" style={{ background: '#eff6ff' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real customers. Real outcomes.</h2></div>
          <div className="relative"><div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (<div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"><div className="grid lg:grid-cols-2 gap-8"><div><div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div><h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3><div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div><blockquote className="mt-5 pl-4 border-l-2 border-blue-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote></div><div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f4f6ff' }}><div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid gap-3">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}</div><div className="px-5 py-3 border-t border-gray-100 flex justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-blue-600">{cs.timeline}</span></div></div></div></div></div>))}</div></div><div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div></div>
        </div>
      </section>

      {/* WHY IFBASH */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="max-w-4xl mx-auto"><div className="text-center mb-12"><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}33`, color: '#60a5fa' }}>Why ifBash</div><h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t just deploy CRM.<br /><span style={{ color: '#60a5fa' }}>We design experiences.</span></h2><p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your customers and your agents, not the platform.</p></div><div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{[{ icon: Smile, stat: '89% CSAT average', desc: 'Across all CRM engagements. Baseline averages ~40%. The difference is context.' }, { icon: Zap, stat: '60% faster handle time', desc: 'Full context before first response. AI handles routine contacts autonomously.' }, { icon: Clock, stat: 'We stay', desc: '90-day hypercare minimum. Live CSAT and handle time dashboards from day one.' }].map(({ icon: Icon, stat, desc }) => (<div key={stat} className="rounded-2xl border p-6 text-center hover:border-blue-500/30 transition-all" style={{ borderColor: `${A}26`, background: `${A}0A` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}26` }}><Icon className="h-5 w-5 text-blue-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>))}</div></div></div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white"><div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="grid lg:grid-cols-3 gap-10"><div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><a href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}4d` }}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div><div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={`h-4 w-4 text-blue-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div></div></div></section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}><div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '32px 32px' }} /><div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center"><div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}4d`, background: `linear-gradient(135deg, ${A}14, ${A}07)` }}><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}4d`, color: '#60a5fa' }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new CRM engagements</div><h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to transform your customer experience?</h2><p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your channels. We&apos;ll map your unified CRM architecture in 48 hours.</p><a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}4d` }}>Free CRM Strategy Call <ArrowRight className="h-4 w-4" /></a></div></div></section>
    </>
  );
}
