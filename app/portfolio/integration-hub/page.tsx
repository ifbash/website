'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ClipboardCheck, Clock, Cloud, Cog, Layers, Lightbulb, MessageCircle, Monitor, Rocket, Search, Shield, TrendingUp } from 'lucide-react';

const A = '#7c3aed';
const AG = 'linear-gradient(135deg, #7c3aed, #a78bfa)';

const capabilities = [
  { icon: Layers, title: 'Out-of-the-Box Spokes', desc: '200+ prebuilt connectors for SAP, Salesforce, Oracle, Workday — instant enterprise integration.', outcomes: ['200+ connectors', 'Instant setup', 'Enterprise apps'] },
  { icon: Cog, title: 'Spoke Generator', desc: 'No-code spoke creation from OpenAPI specs. GenAI-powered development. Custom connectors in hours.', outcomes: ['No-code creation', 'GenAI-powered', 'OpenAPI support'] },
  { icon: TrendingUp, title: 'Flow Templates', desc: 'Starter flows with built-in integrations. Accelerated automation development with pre-configured workflows.', outcomes: ['Pre-built flows', 'Accelerated dev', 'Ready to use'] },
  { icon: Cloud, title: 'Stream Connect', desc: 'Apache Kafka integration at scale. Real-time event streaming and enterprise messaging.', outcomes: ['Kafka integration', 'Real-time streaming', 'Scalable messaging'] },
  { icon: Monitor, title: 'Remote Tables', desc: 'Zero-copy data integration. Access external data without importing or storing it.', outcomes: ['Zero-copy', 'Real-time access', 'No storage needed'] }
];

const methodology = [
  { phase: 'Discover', duration: 'Weeks 1–2', icon: Search, items: ['Integration audit & system inventory', 'Priority mapping & dependency analysis', 'Security & auth requirements'] },
  { phase: 'Connect', duration: 'Weeks 3–6', icon: Cog, items: ['Spoke configuration & activation', 'Flow template setup & customization', 'Core integration deployment'] },
  { phase: 'Automate', duration: 'Weeks 7–10', icon: TrendingUp, items: ['Custom spoke development', 'Advanced workflow automation', 'End-to-end testing & validation'] },
  { phase: 'Scale', duration: 'Weeks 11–14', icon: Rocket, items: ['Performance tuning & optimization', 'Team training & documentation', 'Expansion roadmap & governance'] }
];

const caseStudies = [
  { client: 'Financial Services Firm', industry: 'Financial Services', timeline: '10 weeks', challenge: '60+ disconnected systems creating data silos. Manual workflows consuming thousands of staff hours monthly.', solution: 'ServiceNow Integration Hub with 60+ spokes connecting ITSM, Workday, and Active Directory across the enterprise.', results: ['60+ systems integrated', 'HR requests automated', 'Workflow processing accelerated', 'Thousands of hours saved'], quote: '60 systems, one platform. Integration Hub was the glue we needed to finally connect our enterprise.', author: 'Erhan Stephenson, Head of ESM' },
  { client: 'Banking Firm', industry: 'Banking', timeline: '12 weeks', challenge: '30,000 monthly manual requests. Active Directory and SCCM gaps creating security and efficiency risks.', solution: 'ServiceNow Integration Hub with banking-specific automation and identity management integration.', results: ['30K monthly requests automated', 'AD + SCCM integrated', 'Banking ops optimized', 'Security compliance achieved'], quote: '30,000 requests per month — now fully automated. Our team finally focuses on strategic work instead of manual processing.', author: 'Head of IT Operations' }
];

const faqs = [
  { q: 'What is ServiceNow Integration Hub?', a: 'Integration Hub natively connects ServiceNow to any external app, platform, or data source using 200+ prebuilt spokes. Create end-to-end digital workflows without custom code.' },
  { q: 'What is Spoke Generator?', a: 'A no-code tool that creates custom spokes from OpenAPI specifications. Powered by generative AI, it builds custom integrations in hours — not weeks.' },
  { q: 'How many connectors are available?', a: '200+ out-of-the-box spokes for major enterprise systems, plus the ability to create custom spokes for any REST, SOAP, or JDBC endpoint.' },
  { q: 'How long does implementation take?', a: '4–14 weeks depending on integration complexity. Core spokes deploy in weeks 1–2. Custom integrations follow.' },
  { q: 'What systems can it connect?', a: 'SAP, Salesforce, Oracle, Workday, Microsoft 365, AWS, Azure, GCP, Apache Kafka — and any system with a REST API.' }
];

export default function IntegrationHubPage() {
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
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}66` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>

      {/* HERO */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">AI & Automation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              Connect everything.<br /><span class="text-violet-600">Automate everywhere.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              200+ prebuilt connectors. Zero-code spoke generation. <span class="text-gray-900 font-semibold">Connect ServiceNow to any system in minutes, not months.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}>Get a Custom Strategy <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#f5f3ff' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Key Capabilities</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div data-reveal="capabilities" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {capabilities.map(({ icon: Icon, title, desc, outcomes }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-indigo-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${A}12` }}><Icon className="h-5 w-5 text-indigo-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {outcomes.map((o, j) => (
                    <span key={j} className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: `${A}08`, border: `1px solid ${A}18` }}>
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
      <section className="py-16 lg:py-20" style={{ background: '#f5f3ff' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Proof in Practice</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes. Real clients.</h2></div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (
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
            ))}</div></div>
            <div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-indigo-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div>
          </div>
        </div>
      </section>

      {/* WHY IFBASH */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #a78bfa 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}33`, color: '#a78bfa' }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don't just connect systems.<br /><span style={{ color: '#a78bfa' }}>We make them work together.</span></h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your data flows and your business processes, not the platform.</p>
            </div>
            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                  { icon: ClipboardCheck, stat: 'Process first', desc: 'We map every data flow before configuring a single spoke. Every integration serves a business outcome.' },
                  { icon: Clock, stat: 'Speed + quality', desc: 'Pre-built spokes connect core systems in days. Custom integrations deployed in weeks.' },
                  { icon: Shield, stat: 'We stay', desc: '90-day hypercare minimum. We monitor integration health until every connection is stable.' }
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-indigo-500/30 transition-all" style={{ borderColor: `${A}26`, background: `${A}0A` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}18` }}><Icon className="h-5 w-5 text-indigo-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}4d` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={`h-4 w-4 text-indigo-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #a78bfa 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}4d`, background: `linear-gradient(135deg, ${A}14, ${A}07)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}4d`, color: '#a78bfa' }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to connect your enterprise?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your integration landscape. We'll map your connectivity in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}4d` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
