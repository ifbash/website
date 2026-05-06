'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Users, MessageCircle, Heart, Zap, TrendingUp, Target, BarChart3, Smile, ThumbsUp, MessageSquare, Headphones } from 'lucide-react';

const caseStudies = [
  {
    client: 'RetailMax Enterprise', industry: 'Retail', timeline: '14 weeks',
    challenge: '7 disconnected contact channels — email, chat, phone, social, in-store, app, SMS — with no shared history. Agents spent 4 minutes per contact reconstructing context. CSAT: 41%. Contact centre turnover: 67% annually.',
    solution: 'Unified ServiceNow CRM consolidating all 7 channels into a single customer record. AI handles routine enquiries autonomously. Agents see full context before first response.',
    results: ['CSAT: 41% → 89% in 6 months', 'Handle time: 11 min → 3.2 min', 'Turnover: 67% → 24%'],
    quote: 'Our agents used to spend half the call figuring out who they were talking to. Now everything is there before they say hello.', author: 'Jennifer Walsh, CCO',
  },
  {
    client: 'TechServe Solutions', industry: 'Technology', timeline: '12 weeks',
    challenge: 'Employee IT requests averaging 5.7 days through a single inbox. No routing, no self-service. 34% of requests were password resets or access grants that required engineer involvement.',
    solution: 'AI-driven employee experience platform with intelligent self-service portal, automated resolution for 34 common request types, and smart routing for complex cases.',
    results: ['5.7 days → 9 hours resolution', '34 request types fully automated', 'Employee satisfaction: 34% → 91%'],
    quote: 'I reset my own password for the first time in 12 years. It took 30 seconds. That\'s what changes how people feel about work.', author: 'David Park, VP Operations',
  },
  {
    client: 'HealthFirst Network', industry: 'Healthcare', timeline: '18 weeks',
    challenge: '45 locations with separate patient intake, appointment, and discharge processes. Patients transferred between facilities had to re-provide history. Staff had no live bed availability view.',
    solution: 'Integrated CX and EX platform unifying patient records, staff workflows, and inter-facility coordination. Patient history travels with the patient. Bed availability live across all 45 sites.',
    results: ['Re-registration at transfer: eliminated', 'Transfer coordination: 45 min → 8 min', 'Patient satisfaction: 61% → 96%'],
    quote: 'A patient transferred from Northside to Central and their nurse already had full history on screen. That has never happened before.', author: 'Dr. Sarah Park, CMO',
  },
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
  { q: 'Can AI really handle customer conversations?', a: 'Yes — for defined, high-volume cases: order status, returns, FAQs, appointment booking. Our virtual agents resolve 40–60% of inbound contacts autonomously. Complex or emotional cases escalate to human agents with full context.' },
  { q: 'What ROI can we expect from ServiceNow CRM?', a: 'Our clients average 89% CSAT (from ~40% baseline), 60% reduction in handle time, and 40% reduction in contact centre turnover. We agree specific KPIs before starting and track them live.' },
  { q: 'How do you handle data migration from our existing CRM?', a: 'Migration mapping starts week one of discovery. We clean, deduplicate, and migrate your existing customer data, interaction history, and knowledge base. Zero data loss — verified at every stage.' },
  { q: 'Does this work for B2B and B2C?', a: 'Both. B2B: account hierarchies, contract management, SLA-driven support. B2C: high-volume case management, self-service, social channel integration. The platform handles both natively.' },
  { q: 'What about integration with our marketing and sales tools?', a: 'Native connectors for Salesforce, HubSpot, Marketo, and major commerce platforms. Custom connectors for proprietary systems. All bi-directional — CRM reads from and writes to your existing stack.' },
];

export default function CRMCustomerExperiencePage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 6000); return () => clearInterval(i); }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }} aria-label="Free CRM Consultation">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free CRM Consultation</span>
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-4 pb-3">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block w-8 h-px bg-blue-600" />
                <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">CRM & Customer Experience</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-4">
                CRM that <span className="text-blue-600">converts.</span><br />
                <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Relationships that last.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-6">
                Unify every customer channel into a single ServiceNow platform. AI handles routine conversations. Agents handle what matters. Customers feel the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}>Transform Your CRM <ArrowRight className="h-4 w-4" /></a>
                <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-colors">See Client Results</a>
              </div>
            </div>

            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {[{ v: '89%', l: 'Average CSAT', note: 'From ~40% baseline' }, { v: '60%', l: 'Faster handle time', note: 'Context before first response' }, { v: '7', l: 'Channels unified', note: 'Into one customer record' }, { v: '40%', l: 'Auto-resolution rate', note: 'AI handles routine contacts' }].map(({ v, l, note }) => (
                <div key={l} className="rounded-2xl border border-gray-200 p-5 text-center hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{v}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{l}</div>
                  <div className="text-xs text-gray-400">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-400" /><span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">What We Build</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Customer and employee experiences that actually work.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, benefits }) => (
              <div key={title} className="group rounded-2xl p-6 border border-white/8 hover:border-blue-500/40 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 group-hover:bg-blue-500/25 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-blue-400" /></div>
                <h3 className="font-bold text-white mb-2 text-base">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
                <div className="space-y-1.5">
                  {benefits.map(b => <div key={b} className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle className="h-3.5 w-3.5 text-blue-400 shrink-0" />{b}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">How We Deliver</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Four phases. Measurable at every step.</h2>
          <p className="text-gray-500 mb-10">CRM that shows ROI before the full programme is committed.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {methodology.map((step, i) => (
              <div key={i} className="relative group"
                style={{ opacity: phasesVisible ? 1 : 0, transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease', transitionDelay: `${i * 120}ms` }}>
                <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mb-3 transition-colors">{i + 1}</div>
                <span className="inline-block text-xs font-medium text-blue-500 bg-blue-50 rounded-full px-3 py-1 mb-3">{step.duration}</span>
                <h3 className="font-bold text-gray-900 mb-3">{step.phase}</h3>
                <ul className="space-y-2">
                  {step.features.map((f, j) => <li key={j} className="flex items-start gap-2 text-sm text-gray-500"><CheckCircle className="h-3.5 w-3.5 text-blue-400 mt-0.5 shrink-0" />{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real customers. Real outcomes.</h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>
                {caseStudies.map((cs, i) => (
                  <div key={i} className="w-full shrink-0">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8">
                      <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                          <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                          <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                          <div className="space-y-4">
                            <div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div>
                            <div><div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div>
                          </div>
                          <blockquote className="mt-5 pl-4 border-l-2 border-blue-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                        </div>
                        <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f4f6ff' }}>
                          <div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div>
                          <div className="p-5 grid grid-cols-1 gap-3">
                            {cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}
                          </div>
                          <div className="px-5 py-3 border-t border-gray-100 flex justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-blue-600">{cs.timeline}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button>
              <div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div>
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions.</h2>
              <p className="text-gray-500 text-sm mb-8">Straight answers about CRM on ServiceNow.</p>
              <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}>Ask us directly <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-blue-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #2563eb, transparent 70%)' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-2 text-blue-300 text-sm mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Accepting new CRM engagements</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to transform your customer experience?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us about your channels and your biggest CX pain point. We&apos;ll map your unified CRM architecture in 48 hours — no commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 32px rgba(37,99,235,0.4)' }}>Free CRM Strategy Call <ArrowRight className="h-5 w-5" /></a>
            <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-white transition-all text-base">View all case studies</a>
          </div>
        </div>
      </section>
    </>
  );
}
