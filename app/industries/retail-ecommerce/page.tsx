'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShoppingBag, Package, BarChart3, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const A = '#db2777';
const AG = 'linear-gradient(135deg, #db2777, #e11d48)';

const unifiedCommerce = [
  {
    icon: ShoppingBag,
    title: 'One View of Every Order',
    before: 'Orders from website, two marketplaces, and wholesale landed in three separate systems. CS checked three tabs to answer "where\'s my order?" Returns took 12 days.',
    after: 'Unified order management ingesting from Shopify, Amazon, and wholesale ERP. Returns auto-generate warehouse tasks and refund triggers. Single-screen customer view.',
    result: 'Returns: 12 days → 3 days. WISMO tickets fell by nearly half.',
  },
  {
    icon: Package,
    title: 'BOPIS That Works',
    before: 'Stores and online were separate businesses. BOPIS failed 30% of the time. Inventory was four hours stale. Store managers resented the website.',
    after: 'POS, ecommerce, and WMS connected into a single inventory pool updated every 60 seconds. BOPIS with real-time stock checks and two-hour SLAs.',
    result: 'BOPIS accuracy: 70% → 98.5%. In-store purchases from pickup visits rose by a third.',
  },
  {
    icon: BarChart3,
    title: 'Inventory That Thinks Ahead',
    before: 'Forecasting was spreadsheet-driven. Stockouts at top retailers were a monthly crisis. Seasonal demand either overwhelmed stock or left costly excess.',
    after: 'ML models generate 13-week rolling SKU-location forecasts. At-risk SKUs flagged 14+ days before stockout. Transfer orders auto-generated between locations.',
    result: 'Stockouts at top retailers eliminated. Seasonal buying went from reactive to predictive.',
  },
];

const caseStudies = [
  {
    label: 'D2C Unification',
    context: 'Fast-growing D2C brand · 10 weeks',
    problem: 'Went from £20M to £200M in three years. Orders from website, two marketplaces, and wholesale landed in three separate systems. CS checked three tabs per inquiry.',
    whatWeDid: 'Unified order management ingesting orders from Shopify, Amazon, and wholesale ERP. Returns auto-generate warehouse tasks and refund triggers.',
    shift: 'Returns went from 12 days to 3. WISMO tickets fell sharply. CS handles more volume with fewer agents — and satisfaction went up.',
    quote: 'Our CS team went from 34 agents handling 8,000 tickets to 22 agents handling 11,000 — and satisfaction went up.',
    author: 'VP Customer Experience',
  },
  {
    label: 'Omnichannel Retail',
    context: 'National retailer · 14 weeks',
    problem: 'Stores and online were separate businesses. BOPIS failed 30% of the time. Online customers couldn\'t return in store. Inventory was four hours stale.',
    whatWeDid: 'Connected POS, ecommerce, and WMS into a single inventory pool updated every 60 seconds. BOPIS with real-time stock checks and two-hour SLAs.',
    shift: 'BOPIS accuracy crossed 98%. In-store purchases from pickup visits rose by a third. Store managers went from resenting online to seeing it as foot traffic.',
    quote: 'Store managers went from hating the online business to seeing it as a traffic driver. BOPIS accuracy went from 70% to 98.5%.',
    author: 'SVP Retail Operations',
  },
];

const faqs = [
  { q: 'How fast can you unify our retail channels?', a: '10–14 weeks from kickoff. Real-time inventory sync across online, POS, and warehouse goes live within 6 weeks.' },
  { q: 'Can ServiceNow handle BOPIS and curbside?', a: 'Yes. Real-time store inventory checks, two-hour SLAs, and automated customer notifications. One retailer went from 70% to 98.5% accuracy.' },
  { q: 'What platforms do you integrate with?', a: 'Shopify, Magento, Salesforce Commerce Cloud. POS: NCR, Toast, Square. WMS: Manhattan, Blue Yonder. All via Integration Hub.' },
  { q: 'How fast can returns processing improve?', a: 'One D2C client went from 12-day returns to 3 days through automated warehouse tasks and refund triggers.' },
  { q: 'How long does a retail implementation take?', a: '10–14 weeks. Order management and inventory go live first (6–8 weeks), with omnichannel following.' },
];

export default function RetailEcommerce() {
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { setVisible(true); }, []);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }) }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center" style={{ background: '#0d0408', minHeight: 'calc(100vh - 56px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(219,39,119,0.14) 0%, transparent 60%)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              Your channels are everywhere.
              <br />
              <span style={{ color: A }}>Your inventory should be too.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Orders from six places. Inventory four hours stale. Returns taking two weeks. <span className="text-white font-semibold">ifBash delivers ServiceNow</span> that unifies every channel — online, in-store, and marketplace — in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our retail team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#unified" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-pink-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                See unified commerce
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIFIED COMMERCE ── */}
      <section id="unified" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> What Unifies
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                Three disconnects that disappear on one platform.
              </h2>
            </div>

            <div data-reveal="commerce" className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${revealed.commerce ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {unifiedCommerce.map((x, i) => (
                <div key={i} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: AG }}>
                    <x.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{x.title}</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="text-red-400 shrink-0 font-bold">✕</span>
                      <p className="text-gray-500 leading-relaxed">{x.before}</p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: A }} />
                      <p className="text-gray-700 leading-relaxed font-medium">{x.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">{x.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#fdf2f8' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Commerce</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the checkout.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-pink-400 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-pink-400 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeCase * 100}%)` }}>
              {caseStudies.map((x, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                      <div className="lg:col-span-3">
                        <span className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4" style={{ color: A, backgroundColor: `${A}08` }}>{x.context}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-5">{x.label}</h3>
                        <div className="space-y-4">
                          <div className="rounded-xl border border-red-100 bg-red-50/30 p-4">
                            <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">The Problem</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{x.problem}</p>
                          </div>
                          <div className="rounded-xl border p-4" style={{ borderColor: `${A}20`, background: `${A}03` }}>
                            <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: A }}>What We Did</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{x.whatWeDid}</p>
                          </div>
                        </div>
                        <blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}40` }}>
                          &ldquo;{x.quote}&rdquo;
                          <span className="block text-xs text-gray-400 mt-1 not-italic">— {x.author}</span>
                        </blockquote>
                      </div>
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#fdf2f8' }}>
                        <div className="px-4 py-3 bg-white border-b border-gray-100">
                          <span className="text-sm font-semibold text-gray-800">What Shifted</span>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-800 leading-relaxed font-medium">{x.shift}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            {caseStudies.map((_, i) => (
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-pink-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}25`, color: A }}>
                Why ifBash
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">
                We don&apos;t configure software.
                <br />
                <span style={{ color: A }}>We configure growth.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your ops teams, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: BarChart3, stat: 'Ops teams first', desc: 'We shadow your warehouse and CS teams before we configure a single workflow.' },
                { icon: ShoppingBag, stat: 'Revenue from week 1', desc: 'First unified orders go live in weeks, not months.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track fulfillment speed and CSAT until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-pink-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}15` }}>
                    <Icon className="h-5 w-5" style={{ color: A }} />
                  </div>
                  <div className="text-sm font-bold text-white mb-2">{stat}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}40` }}>
                Ask us directly <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((x, i) => (
                <div key={i} className="border border-gray-200 hover:border-pink-200 rounded-xl overflow-hidden transition-colors bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{x.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 border-t border-gray-100 pt-3">
                      <p className="text-gray-600 text-sm leading-relaxed">{x.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to unify your commerce?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest channel gap. We&apos;ll scope the approach in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }} aria-label="Free Consultation">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </Link>
      </div>
    </>
  );
}
