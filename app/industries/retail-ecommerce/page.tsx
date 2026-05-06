'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, MessageCircle, ShoppingBag, Package, Truck, Users, BarChart3, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

const A = '#db2777';
const AG = 'linear-gradient(135deg, #db2777, #e11d48)';

const features = [
  { icon: ShoppingBag, title: 'Unified commerce engine', desc: 'Connect online store, POS, marketplaces, and mobile into a single order management workflow. Inventory updates everywhere in real time — no batch syncs, no "our system says it\'s in stock but it isn\'t."' },
  { icon: Package, title: 'Order management for the hard cases', desc: 'Split shipments, partial cancellations, pre-orders, backorders — we configure ServiceNow Order Management for every edge case your ops team actually encounters, not just the happy path.' },
  { icon: Users, title: 'Customer service with full context', desc: 'CSM connects your commerce platform, loyalty system, and marketing tools. Agents see every purchase, return, interaction, and preference before they say "hello."' },
  { icon: Truck, title: 'Last mile, first priority', desc: 'FSM integration with logistics providers for real-time tracking, reliable delivery windows, and instant rebooking. Ops team gets a live delivery map — not a spreadsheet.' },
  { icon: BarChart3, title: 'Inventory intelligence', desc: 'Predictive analytics forecast demand, flag at-risk SKUs 14+ days before stockout, and auto-generate transfer orders between locations. Seasonal demand forecasting with ML.' },
  { icon: Globe, title: 'Multi-brand, one platform', desc: 'Shared commerce backbone with local configurations for payment methods, tax rules, and return policies. New brand launches go from months to weeks on App Engine.' },
];

const caseStudies = [
  {
    client: 'A fast-growing D2C brand', industry: 'Direct-to-Consumer', timeline: '10 weeks',
    problem: 'Went from $20M to $200M in three years. Orders from website, two marketplaces, and wholesale landed in separate systems. CS checked three tabs for "where\'s my order?" Returns: 12 days.',
    whatWeDid: 'Unified order management ingesting orders from Shopify, Amazon, and wholesale ERP into one view. Returns auto-generate warehouse tasks and refund triggers. CS got single-screen customer view.',
    results: [{ m: '3 days', l: 'Return processing — down from 12' }, { m: '42%', l: 'Fewer WISMO tickets' }, { m: '$4.2M', l: 'Year-one savings' }],
    quote: 'Our CS team went from 34 agents handling 8,000 tickets to 22 agents handling 11,000 — and satisfaction went up.', author: 'VP Customer Experience',
  },
  {
    client: 'A national retailer with 200+ stores', industry: 'Omnichannel Retail', timeline: '14 weeks',
    problem: 'Stores and online operated as separate businesses. BOPIS failed 30% of the time — inventory was 4 hours stale. Online customers couldn\'t return in store.',
    whatWeDid: 'Connected POS, ecommerce, and WMS into single inventory pool updated every 60 seconds. BOPIS with real-time checks, 2-hour SLAs, and automated notifications.',
    results: [{ m: '98.5%', l: 'BOPIS accuracy — up from 70%' }, { m: '34%', l: 'BOPIS-driven in-store purchases increase' }, { m: '$18M', l: 'Annual inventory savings' }],
    quote: 'Store managers went from hating the online business to seeing it as a traffic driver.', author: 'SVP Retail Operations',
  },
];

const faqs = [
  { q: 'How fast can you unify our retail channels?', a: '10–14 weeks from kickoff to unified platform. Real-time inventory sync across online, POS, and warehouse within the first 6 weeks.' },
  { q: 'Can ServiceNow handle BOPIS and curbside?', a: 'Yes. Real-time store inventory checks, 2-hour fulfillment SLAs, and automated customer notifications. One retailer went from 70% to 98.5% BOPIS accuracy.' },
  { q: 'What ecommerce platforms do you integrate with?', a: 'Shopify, Magento, Salesforce Commerce Cloud, and custom platforms. POS: NCR, Toast, Square. WMS: Manhattan, Blue Yonder. All via Integration Hub.' },
  { q: 'How fast can returns processing improve?', a: 'One D2C client went from 12-day returns to 3 days through automated warehouse tasks and refund triggers. Self-service returns portal included.' },
  { q: 'How long does a retail implementation take?', a: '10–14 weeks. Order management and inventory typically go live first (6–8 weeks), with BOPIS and full omnichannel following.' },
];

export default function RetailEcommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Talk retail"><MessageCircle className="h-6 w-6" /></Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#07071a', minHeight: '75vh' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #db2777, transparent 60%)' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 text-center">
          <div className="flex justify-center gap-2 mb-8">
            {['Omnichannel', 'Order Management', 'Customer Experience'].map((l, i) => {
              const c = ['bg-pink-500/15 border-pink-500/30 text-pink-300', 'bg-rose-500/15 border-rose-500/30 text-rose-300', 'bg-red-500/15 border-red-500/30 text-red-300'];
              return <span key={l} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c[i]}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{l}</span>;
            })}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] max-w-4xl mx-auto mb-6">Retail moves fast.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">Your systems should too.</span></h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12">Omnichannel order management, real-time inventory, and customer service that knows who your customers are — all on ServiceNow.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[{ v: '60s', l: 'Inventory sync' }, { v: '42%', l: 'Fewer WISMO tickets' }, { v: '98.5%', l: 'BOPIS accuracy' }, { v: '3 days', l: 'Return processing' }].map(({ v, l }) => (
              <div key={l} className="rounded-2xl border border-white/8 p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}><div className="text-2xl font-bold text-white mb-1">{v}</div><div className="text-sm text-slate-400">{l}</div></div>
            ))}
          </div>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${A}4d` }}>Talk about your retail stack <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-pink-600" /><span className="text-pink-600 text-sm font-semibold tracking-widest uppercase">Capabilities</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Everything retail needs. One platform.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group border border-gray-200 hover:border-pink-300 rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-pink-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-pink-400" /><span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">Client Stories</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Retail transformations we&apos;ve delivered.</h2>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-white/8 rounded-2xl p-6 lg:p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-pink-400 bg-pink-500/15 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-slate-400"><Clock className="h-3 w-3 inline mr-1" />{cs.timeline}</span></div>
                <h3 className="text-lg font-bold text-white mb-5">{cs.client}</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div><div className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">The situation</div><p className="text-sm text-slate-400">{cs.problem}</p></div>
                  <div><div className="text-xs font-semibold text-pink-400 uppercase tracking-widest mb-1">What we built</div><p className="text-sm text-slate-400">{cs.whatWeDid}</p></div>
                </div>
                <div className="mt-5 p-5 rounded-xl border border-green-500/20" style={{ background: 'rgba(16,185,129,0.06)' }}><div className="text-xs text-green-400 uppercase tracking-widest font-semibold mb-3">Results</div><div className="grid sm:grid-cols-3 gap-4">{cs.results.map(r => <div key={r.l}><div className="text-lg font-bold text-green-400">{r.m}</div><div className="text-xs text-slate-400">{r.l}</div></div>)}</div></div>
                <blockquote className="mt-4 border-l-2 border-pink-500/30 pl-4 text-sm text-slate-300 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-slate-500 mt-1 not-italic">— {cs.author}</span></blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-pink-600" /><span className="text-pink-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 hover:border-pink-200 rounded-xl overflow-hidden transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-pink-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Your customers expect seamless. Let&apos;s build it.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us about your commerce stack. We&apos;ll map out what ServiceNow can do — in your first call.</p>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${A}4d` }}>Start the conversation <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
