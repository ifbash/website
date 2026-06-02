'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Search, Cog, TrendingUp, Monitor, Eye, BarChart3, Clock, Shield, ClipboardCheck } from 'lucide-react';

const A = '#4f46e5';
const AG = 'linear-gradient(135deg, #4f46e5, #7c3aed)';

const capabilities = [
  { icon: Monitor, title: 'Software Asset Management', desc: 'License optimization, compliance tracking, audit-ready reporting. Know exactly what you own and what you use.', outcomes: ['License optimization', 'Compliance tracking', 'Audit-ready'] },
  { icon: Cog, title: 'Hardware Asset Management', desc: 'Full lifecycle tracking from procurement to retirement. Automated provisioning and disposal workflows.', outcomes: ['Full lifecycle', 'Auto-provisioning', 'Retirement workflows'] },
  { icon: TrendingUp, title: 'Enterprise Asset Management', desc: 'CapEx/OpEx control, preventive maintenance, risk mitigation. Every asset accounted for across the enterprise.', outcomes: ['CapEx/OpEx control', 'Preventive maintenance', 'Risk mitigation'] },
  { icon: BarChart3, title: 'SaaS License Management', desc: 'Usage insights, cost optimization, renewal management. Stop paying for licenses nobody uses.', outcomes: ['Usage insights', 'Cost optimization', 'Renewal alerts'] },
  { icon: Eye, title: 'Cloud Cost Management', desc: 'Multi-cloud visibility, resource optimization, spend governance. Every cloud dollar traced to value.', outcomes: ['Multi-cloud visibility', 'Resource optimization', 'Spend governance'] },
  { icon: Shield, title: 'Contract & Renewal Management', desc: 'Guided renewals, automated alerts, vendor management. Never miss a renewal or overpay again.', outcomes: ['Guided renewals', 'Automated alerts', 'Vendor oversight'] },
];

const methodology = [
  { phase: 'Discover', duration: 'Weeks 1–5', icon: Search, items: ['Asset discovery & inventory baseline', 'License position analysis', 'Cost optimization opportunities'] },
  { phase: 'Configure', duration: 'Weeks 6–13', icon: Cog, items: ['Platform setup & asset workflows', 'Integration configuration (AD, ERP)', 'Automation rules & policies'] },
  { phase: 'Optimize', duration: 'Weeks 14–19', icon: TrendingUp, items: ['Cost analysis & license optimization', 'Compliance audit preparation', 'Waste identification & elimination'] },
  { phase: 'Govern', duration: 'Weeks 20–24', icon: Shield, items: ['Dashboard & KPI framework', 'Policy enforcement automation', 'Continuous monitoring & alerts'] },
];

const caseStudies = [
  { client: 'Uniper', industry: 'Energy & Utilities', timeline: '20 weeks', challenge: 'Limited asset visibility across global operations. Rising software license costs with no clear optimization path.', solution: 'ServiceNow ITAM with Software Asset Management and Hardware Asset Management across all global sites.', results: ['EUR 2M cost reduction', 'Complete asset visibility', 'Audit-ready compliance', 'Global deployment'], quote: 'ServiceNow ITAM delivered EUR 2M in cost savings through complete visibility into our global asset landscape.', author: 'IT Asset Manager' },
  { client: 'Covea Insurance', industry: 'Financial Services', timeline: '16 weeks', challenge: 'No centralized asset tracking. Compliance risk from shadow IT. Manual processes consuming weeks of staff time.', solution: 'ServiceNow ITAM with automated asset discovery, tracking, and compliance reporting.', results: ['GBP 450K+ first-year ROI', 'Automated compliance', 'Centralized asset data', 'Shadow IT eliminated'], quote: 'The ROI was clear within the first year — over GBP 450K in savings from license optimization and automated tracking alone.', author: 'Head of IT Operations' },
];

const faqs = [
  { q: 'What is ServiceNow ITAM and what does it cover?', a: 'ITAM is a single platform to manage hardware, software, cloud, and enterprise assets across their entire lifecycle — from procurement to retirement. AI-powered insights eliminate waste and reduce risk.' },
  { q: 'How much can we save with ITAM?', a: 'Clients typically see 30–50% cost reduction through license optimization, waste elimination, and automated asset tracking. Most achieve ROI within 6–12 months.' },
  { q: 'What assets does it manage?', a: 'Software licenses, hardware devices, SaaS subscriptions, cloud resources, and enterprise equipment — all in one unified data model with complete lifecycle tracking.' },
  { q: 'How long does implementation take?', a: '16–24 weeks depending on scope. Asset discovery and inventory baseline in weeks 1–5. Optimization and governance follow.' },
  { q: 'What systems does it integrate with?', a: 'Azure AD, BigFix, Jamf Pro, Coupa, plus any ERP or procurement system. Service Graph Connectors keep third-party data consistent.' },
];

export default function ITAMPage() {
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

      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">IT & Digital Operations</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              Know every asset.
              <br />
              <span className="text-indigo-600">Cut every waste.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Automate the end-to-end lifecycle for software, hardware, and cloud assets. <span className="text-gray-900 font-semibold">30–50% cost reduction. 90% risk reduction.</span> Full visibility, zero waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }}>Get a Custom Strategy <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#eef2ff' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Key Capabilities</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need. Nothing you don&apos;t.</h2></div>
          <div data-reveal="capabilities" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {capabilities.map(({ icon: Icon, title, desc, outcomes }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-indigo-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${A}12` }}><Icon className="h-5 w-5 text-indigo-600" /></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Deliver</h2><p className="text-gray-500 max-w-xl mx-auto">Proven methodology. Predictable outcomes. Asset visibility from week one.</p></div>
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

      <section className="py-16 lg:py-20" style={{ background: '#eef2ff' }}>
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

      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #818cf8 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}33`, color: '#818cf8' }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t just track assets.<br /><span style={{ color: '#818cf8' }}>We eliminate waste.</span></h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your balance sheet and your risk profile, not the platform.</p>
            </div>
            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: ClipboardCheck, stat: 'Process first', desc: 'We inventory your entire asset landscape before recommending a single optimization.' },
                { icon: Clock, stat: 'Speed + quality', desc: 'Automated discovery and license reconciliation in weeks, not months. Audit-ready from day one.' },
                { icon: Shield, stat: 'We stay', desc: '90-day hypercare minimum. Continuous optimization cycles keep your costs trending down.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-indigo-500/30 transition-all" style={{ borderColor: `${A}26`, background: `${A}0A` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}18` }}><Icon className="h-5 w-5 text-indigo-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}4d` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={`h-4 w-4 text-indigo-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #818cf8 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}4d`, background: `linear-gradient(135deg, ${A}14, ${A}07)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}4d`, color: '#818cf8' }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to take control of your IT assets?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your asset landscape. We&apos;ll scope your ITAM implementation in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}4d` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
