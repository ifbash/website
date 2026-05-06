'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, MessageCircle, TrendingUp, ShoppingCart, Target, Shield, Globe, Users } from 'lucide-react';

const A = '#0891b2';
const AG = 'linear-gradient(135deg, #0891b2, #0d9488)';

const solutions = [
  { icon: TrendingUp, title: 'Demand Planning & Forecasting', desc: 'ITOM aggregates demand signals from retailer POS, warehouse outbound, and historical shipments. ML models generate 13-week rolling forecasts at SKU-location level with automated retraining when MAPE exceeds 18%.' },
  { icon: ShoppingCart, title: 'Order Management & Fulfillment', desc: 'CSM manages the full order-to-cash lifecycle with automated SLA milestone tracking. Fulfillment exceptions trigger coordinated resolution across sales, logistics, and finance — no manual handoffs between departments.' },
  { icon: Target, title: 'Trade Promotion Management', desc: 'Custom App Engine application managing planning, deduction accrual, claim submission, and reconciliation. Deduction aging dashboards flag claims exceeding 45 days unresolved with auto-escalation.' },
  { icon: Shield, title: 'Quality & Compliance', desc: 'ITSM tracks every consumer complaint and quality hold from report through CAPA closure. FSMA and GFSI audit readiness maintained through automated evidence collection and recurring defect pattern detection.' },
  { icon: Globe, title: 'Supply Chain Visibility', desc: 'ITOM Discovery maps the supply chain network into an operational topology view. Supplier portals provide real-time inventory, schedule, and quality hold visibility with single-source risk scoring per active SKU.' },
  { icon: Users, title: 'Customer Service Automation', desc: 'CSM with Virtual Agent handles order status inquiries and disputes through conversational self-service, resolving 40–55% of contacts without agent involvement. Agent workspace auto-loads full account and order context.' },
];

const caseStudies = [
  {
    client: 'GreatWest Foods', industry: 'CPG Manufacturer', timeline: '26 weeks',
    challenge: 'Demand forecasting driven by spreadsheets with 36% MAPE accuracy. $94M in lost revenue from stockouts at top-20 retailers. Trade promotion deductions of $67M annually with 41% unresolved beyond 90 days.',
    solution: 'ServiceNow ITOM for demand sensing, App Engine for trade promotion lifecycle, and Integration Hub connecting retailer POS data, WMS, and ERP into a single demand-to-cash platform.',
    results: ['Forecast accuracy: 36% MAPE → 11%', 'Stockouts at top-20 retailers: eliminated', 'Deduction resolution: 41% → 94% within 90 days', '$94M revenue recovery in year one'],
    quote: 'We went from spreadsheets to a platform where demand signals update automatically. Stockouts at our biggest retail partners went from "monthly crisis" to "hasn\'t happened in a year."', author: 'VP Supply Chain',
  },
  {
    client: 'Coastal Distributors', industry: 'Food & Beverage Distributor', timeline: '20 weeks',
    challenge: 'Order-to-cash cycle averaging 16 days with $126M in disputed AR — mostly deductions retailers took without documentation. Customer service handled 2,400 deduction-related inquiries monthly with 12-day average resolution.',
    solution: 'ServiceNow CSM with automated deduction intake, retailer portal for document submission, and workflow routing disputed amounts to sales, logistics, or finance based on deduction code.',
    results: ['Order-to-cash: 16 days → 3.5 days', 'Disputed AR: $126M → $31M within 6 months', 'Deduction inquiries: 2,400/month → 340/month', 'Customer service handle time reduced 67%'],
    quote: 'Retailers were deducting without documentation and we had no systematic way to dispute it. Now every deduction requires evidence. AR disputes dropped 75% in two quarters.', author: 'VP Finance',
  },
];

const faqs = [
  { q: 'How does ServiceNow improve demand forecasting for CPG?', a: 'ITOM aggregates POS, warehouse, and shipment data into ML models generating 13-week SKU-location forecasts. GreatWest Foods improved forecast accuracy from 36% MAPE to 11%.' },
  { q: 'Can ServiceNow manage trade promotion deduction workflows?', a: 'Yes. App Engine handles the full lifecycle — planning, accrual, claim, reconciliation. Coastal Distributors reduced disputed AR from $126M to $31M in 6 months.' },
  { q: 'How fast can order-to-cash cycles improve?', a: 'Coastal Distributors reduced order-to-cash from 16 days to 3.5 days through automated milestone tracking and exception workflows. Most clients see 50–70% cycle time reduction.' },
  { q: 'What systems do you integrate with for consumer goods?', a: 'Retailer POS (Walmart Retail Link, Target Partners Online), WMS, ERP (SAP, Oracle), and TPM systems. All through Integration Hub with pre-built and custom connectors.' },
  { q: 'How long does a CPG implementation take?', a: '20–26 weeks depending on scope. Demand planning and order management typically go live first (12–14 weeks), with trade promotion and quality following.' },
];

export default function ConsumerGoodsRetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Free Consultation"><MessageCircle className="h-6 w-6" /></Link>
      </div>

      {/* HERO — centered */}
      <section className="relative overflow-hidden flex items-center min-h-[85vh]" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #0891b2, transparent 70%)' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-20 text-center">
          <div className="flex justify-center gap-2 mb-8">
            {['Demand Planning', 'Trade Promotion', 'Supply Chain'].map((label, i) => {
              const c = ['bg-cyan-500/15 border-cyan-500/30 text-cyan-300', 'bg-teal-500/15 border-teal-500/30 text-teal-300', 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'];
              return <span key={label} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c[i]}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{label}</span>;
            })}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] max-w-4xl mx-auto mb-6">Consumer goods move fast.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Your systems should too.</span></h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">ServiceNow for CPG — demand planning, trade promotion, order management, and quality. From retailer shelf to supplier portal, on one platform.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }}>Modernise Your CPG Operations <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">See Client Results</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ v: '89%', l: 'Forecast accuracy' }, { v: '3.5 days', l: 'Order-to-cash' }, { v: '94%', l: 'Deduction resolution' }, { v: '55%', l: 'Contact deflection' }].map(({ v, l }) => (
              <div key={l} className="rounded-2xl border border-white/8 p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}><div className="text-2xl font-bold text-white mb-1">{v}</div><div className="text-sm text-slate-400">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-cyan-600" /><span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase">Capabilities</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Demand to cash. On one platform.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-cyan-600" /></div>
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
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-cyan-600" /><span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">CPG transformations.</h2>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-semibold text-cyan-600 bg-cyan-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div>
                    <div><div className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div>
                  </div>
                  <div className="rounded-xl p-5 border border-cyan-200" style={{ background: '#ecfeff' }}>
                    <div className="text-xs text-green-700 uppercase tracking-widest font-semibold mb-3">Results</div>
                    <div className="space-y-2">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-cyan-500 shrink-0" />{r}</div>)}</div>
                  </div>
                </div>
                <blockquote className="mt-5 pl-4 border-l-2 border-cyan-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
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
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-cyan-600" /><span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 hover:border-cyan-200 rounded-xl overflow-hidden transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-cyan-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to modernise your CPG operations?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us about your demand planning and trade promotion challenges. We&apos;ll scope the solution in 48 hours.</p>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 12px 32px ${A}4d` }}>Start Your Transformation <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
