'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Search, Cog, Rocket, TrendingUp, Shield, Target, Clock, ClipboardCheck, BarChart3 } from 'lucide-react';

const A = '#059669';
const AG = 'linear-gradient(135deg, #059669, #10b981)';

const capabilities = [
  { icon: TrendingUp, title: 'Document Intelligence', desc: 'AI-powered invoice extraction with 38+ configurable fields. Manual data entry eliminated entirely.', outcomes: ['38+ fields', 'AI extraction', 'No manual entry'] },
  { icon: Cog, title: 'Invoice Processing Automation', desc: 'Automated ingestion, validation, and processing. Two-way and three-way matching built in.', outcomes: ['Auto-ingestion', '2/3-way matching', 'Validation workflows'] },
  { icon: Shield, title: 'Exception Management', desc: 'Automated exception detection with pre-configured rules. Supplier mismatches and duplicates handled automatically.', outcomes: ['Auto-detection', 'Pre-configured rules', 'Contextual resolution'] },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Complete AP visibility with real-time dashboards, KPI monitoring, and predictive insights.', outcomes: ['Real-time dashboards', 'KPI monitoring', 'Predictive insights'] },
  { icon: Target, title: 'ERP Integration', desc: 'Seamless integration with SAP, Oracle, and Microsoft Dynamics. Real-time data sync, no duplication.', outcomes: ['SAP/Oracle/Dynamics', 'Real-time sync', 'No duplication'] },
];

const methodology = [
  { phase: 'Assess', duration: 'Weeks 1–3', icon: Search, items: ['AP process audit & pain point analysis', 'Invoice volume assessment & benchmarking', 'ERP integration requirements gathering'] },
  { phase: 'Build', duration: 'Weeks 4–12', icon: Cog, items: ['Document Intelligence configuration', 'Invoice processing workflows setup', 'ERP integration & data mapping'] },
  { phase: 'Validate', duration: 'Weeks 13–18', icon: Shield, items: ['Exception rule testing & refinement', 'User acceptance testing', 'AP team training & enablement'] },
  { phase: 'Launch', duration: 'Weeks 19–22', icon: Rocket, items: ['Phased go-live & hypercare', 'KPI monitoring & benchmarking', 'Continuous optimization setup'] },
];

const caseStudies = [
  { client: 'Fortune 500 Manufacturing Corp', industry: 'Manufacturing', timeline: '20 weeks', challenge: '10,000+ monthly invoices processed manually. Weeks-long approval cycles. AP team buried in data entry and error correction.', solution: 'ServiceNow AP Operations with Document Intelligence and automated invoice processing across all global sites.', results: ['10K+ invoices automated', '80% faster processing', '60% cost reduction', 'Manual entry eliminated'], quote: '10,000 invoices a month — now processed automatically. Our AP team finally does strategic work instead of data entry.', author: 'Chief Financial Officer' },
  { client: 'National Retail Chain', industry: 'Retail', timeline: '16 weeks', challenge: 'Multi-location invoice processing with no standardization. 60% of AP staff time spent on manual data entry and supplier follow-up.', solution: 'ServiceNow AP Operations with Document Intelligence and supplier lifecycle management across all locations.', results: ['60% cost reduction achieved', 'Multi-location processing', 'Supplier payments automated', 'AP team refocused on strategy'], quote: '60% cost reduction through comprehensive automation. Every location now processes invoices the same way — automatically.', author: 'Director of Finance' },
];

const faqs = [
  { q: 'What is ServiceNow Accounts Payable Operations?', a: 'AP Operations modernizes siloed manual AP processes with AI-powered document intelligence, automated invoice processing, and seamless ERP integration — all on one unified platform.' },
  { q: 'What is Document Intelligence?', a: 'AI-based extraction that digitizes invoice data from PDFs and emails. 38+ configurable extraction fields with trained AI models that improve accuracy with every invoice processed.' },
  { q: 'How long does implementation take?', a: '8–22 weeks depending on complexity. Invoice processing and Document Intelligence configured first (weeks 1–12). ERP integration and optimization follow.' },
  { q: 'What ERP systems does it integrate with?', a: 'SAP, Oracle, Microsoft Dynamics — plus any financial system via Integration Hub. Real-time data sync eliminates duplicate data entry across systems.' },
  { q: 'What ROI can we expect?', a: 'Clients typically see 80% faster invoice processing, 60% cost reduction, and ROI within 6–12 months. Most eliminate manual data entry entirely.' },
];

export default function AccountsPayableOperationsPage() {
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
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}66` }} aria-label="Free Strategy Call"><MessageCircle className="h-6 w-6" /></Link>
      </div>
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Finance & Supply Chain</span></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">Pay suppliers confidently.<br /><span style={{ color: A }}>Free your finance team.</span></h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">Streamline accounts payable with AI-powered document intelligence and automated invoice processing. <span className="text-gray-900 font-semibold">80% faster invoice processing. 60% cost reduction.</span></p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }}>Get a Custom Strategy <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-emerald-400 text-gray-600 hover:text-emerald-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#ecfdf5' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Key Capabilities</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need. Nothing you don&apos;t.</h2></div>
          <div data-reveal="capabilities" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {capabilities.map(({ icon: Icon, title, desc, outcomes }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-emerald-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${A}12` }}><Icon className="h-5 w-5" style={{ color: A }} /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">{outcomes.map((o, j) => (<span key={j} className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: `${A}08`, border: `1px solid ${A}18` }}><CheckCircle className="h-3 w-3" /> {o}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Deliver</h2><p className="text-gray-500 max-w-xl mx-auto">Proven methodology. Predictable outcomes.</p></div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent z-0" />
            {methodology.map(({ phase, duration, icon: Icon, items }) => (
              <div key={phase} className="relative z-10 group text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white border-2 border-emerald-100 group-hover:border-emerald-300 flex items-center justify-center transition-all shadow-sm group-hover:shadow-md"><Icon className="h-6 w-6" style={{ color: A }} /></div>
                <div className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3" style={{ color: A, background: `${A}12` }}>{duration}</div>
                <h3 className="font-bold text-gray-900 mb-3">{phase}</h3>
                <ul className="space-y-2 text-left">{items.map(item => <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: '#ecfdf5' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Practice</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes. Real clients.</h2></div>
          <div className="relative"><div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (<div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"><div className="grid lg:grid-cols-2 gap-8"><div><div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold rounded-full px-3 py-1" style={{ color: A, background: `${A}12` }}>{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div><h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3><div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: A }}>Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div><blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}40` }}>&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote></div><div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: `${A}04` }}><div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid gap-3">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}</div></div></div></div></div>))}</div></div>
            <div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300'}`} style={i === currentCase ? { backgroundColor: A } : {}} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}><div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #34d399 1px, transparent 1px)`, backgroundSize: '32px 32px' }} /><div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="max-w-4xl mx-auto"><div className="text-center mb-12"><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}33`, color: A }}>Why ifBash</div><h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t just process invoices.<br /><span style={{ color: A }}>We eliminate the busywork.</span></h2><p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your AP team and their daily frustrations, not the platform.</p></div><div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{[{ icon: ClipboardCheck, stat: 'Process first', desc: 'We audit your invoice workflow before configuring a single extraction rule.' },{ icon: Clock, stat: 'Speed + quality', desc: 'Document Intelligence training in weeks. 10K+ invoices automated within the first quarter.' },{ icon: Shield, stat: 'We stay', desc: '90-day hypercare minimum. We tune extraction models until every invoice is processed perfectly.' }].map(({ icon: Icon, stat, desc }) => (<div key={stat} className="rounded-2xl border p-6 text-center transition-all" style={{ borderColor: `${A}26`, background: `${A}0A` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}18` }}><Icon className="h-5 w-5" style={{ color: A }} /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>))}</div></div></div></section>
      <section className="py-16 lg:py-20 bg-white"><div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="grid lg:grid-cols-3 gap-10"><div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}4d` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div><div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-emerald-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div></div></div></section>
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}><div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #34d399 1px, transparent 1px)`, backgroundSize: '32px 32px' }} /><div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center"><div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}4d`, background: `linear-gradient(135deg, ${A}14, ${A}07)` }}><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}4d`, color: A }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements</div><h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to transform your accounts payable?</h2><p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your AP operations. We&apos;ll scope your implementation in 48 hours.</p><Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}4d` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </>
  );
}
