'use client';
import React, { useState, useEffect } from 'react';
import {
  Car, Wrench, Package, Shield, BarChart, Network,
  CheckCircle, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  MessageCircle, Search, Rocket, Lightbulb, Cog,
  AlertTriangle, Truck,
} from 'lucide-react';

const A = '#1d4ed8';
const AG = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
const AS = 'rgba(29,78,216,0.30)';

const caseStudies = [
  { client: 'PrimeAxle Motors', industry: 'Passenger Vehicle OEM', timeline: '22 weeks',
    challenge: 'A recall affecting 340,000 vehicles took 19 days to identify owners and 47 days to reach 80% remedy completion. NHTSA issued a formal inquiry.',
    solution: 'ServiceNow Recall Management integrated with VIN registration, dealer management, and state DMV feeds. Recalls auto-generate owner letters, schedule appointments, and track remedy per VIN with NHTSA-ready reports.',
    results: ['Owner notification in 4 hours from recall decision', '80% remedy completion in 11 days vs. prior 47-day baseline', '$38M in regulatory exposure eliminated', 'NHTSA satisfaction: full compliance on first audit'] },
  { client: 'TorqueLine Components', industry: 'Tier-1 Automotive Supplier', timeline: '18 weeks',
    challenge: 'PPAP rejection rates from three OEM customers averaged 34%, causing 28-day launch delays and $12M in annual expediting costs. Quality records were assembled from five disconnected systems.',
    solution: 'ServiceNow APQP/PPAP workflow connecting CMM dimensional data, material certs, and process FMEAs into OEM-specific PPAP packages with 21-day missing-element alerts.',
    results: ['PPAP first-time acceptance from 66% to 97%', 'Average launch delay from 28 days to 3 days', '$11.4M annual expediting cost elimination', 'PPAP prep time from 40 hrs to 6 hrs per launch'] },
  { client: 'VeloFleet Logistics', industry: 'Commercial Fleet Operations', timeline: '16 weeks',
    challenge: 'A 2,400-vehicle fleet had an 18% unplanned breakdown rate with 4.2-hour roadside assist waits. PM schedules were spreadsheet-managed; 41% were overdue.',
    solution: 'ServiceNow Fleet Management with OBD-II telematics across all 2,400 vehicles, feeding real-time fault codes and fuel data into automated PM scheduling and driver behaviour analytics.',
    results: ['Unplanned breakdown rate from 18% to 2.3%', 'Scheduled PM compliance from 59% to 98% on-time', '14% fuel efficiency improvement ($2.8M annual saving)', 'Roadside assist wait from 4.2 hrs to 38 minutes'] },
];

const features = [
  { icon: Car, title: 'APQP / PPAP Workflow Automation', description: 'ServiceNow connects CMM dimensional data, material certs, and FMEAs into a single APQP workspace. PPAP packages auto-assemble to Ford, GM, Stellantis, and Toyota portal specs.' },
  { icon: AlertTriangle, title: 'Recall & Warranty Management', description: 'When a recall decision is logged, VIN registration is queried, owner communications generated, and remedy tracked per VIN in real time. NHTSA-format reports auto-generated on demand.' },
  { icon: Truck, title: 'Fleet Telematics & Predictive Maintenance', description: 'OBD-II telematics feeds real-time fault codes, mileage, and fuel data into automated PM scheduling. Assets trending toward failure generate work orders 14 days ahead.' },
  { icon: Shield, title: 'IATF 16949 Compliance Management', description: 'IATF 16949 and customer-specific requirements (CSRs) enforced through structured workflows. Audit readiness dashboards show open NC items and clause coverage in real time.' },
  { icon: Package, title: 'Supply Chain & Tier Management', description: 'Supplier scorecards pull incoming inspection, PPAP performance, and on-time delivery weekly. 30-day early-warning flags at-risk suppliers before disruptions reach the line.' },
  { icon: BarChart, title: 'Production Analytics & OEE', description: 'Live PLC data via OPC-UA populates shift-level OEE dashboards by line, model, and variant. Downtime events Pareto-ranked daily for morning operations meetings.' },
];

const methodology = [
  { phase: 'Discovery', duration: 'Weeks 1-4', icon: Search, color: 'from-blue-600 to-indigo-600', features: ['Production line assessment', 'Regulatory compliance gap analysis'] },
  { phase: 'Design & Integrate', duration: 'Weeks 5-12', icon: Lightbulb, color: 'from-indigo-600 to-violet-600', features: ['ServiceNow automotive setup', 'PPAP workflow configuration'] },
  { phase: 'Validation', duration: 'Weeks 13-18', icon: Cog, color: 'from-violet-600 to-purple-600', features: ['IATF 16949 compliance verification', 'PPAP submission dry-run'] },
  { phase: 'Deployment', duration: 'Weeks 19-22', icon: Rocket, color: 'from-purple-600 to-pink-600', features: ['Production cutover', 'Engineering and quality training'] },
];

const faqs = [
  { question: 'How does ServiceNow support IATF 16949 compliance?', answer: 'ServiceNow enforces IATF 16949 through structured quality workflows linked to part numbers and production lines. CSR overlays for Ford, GM, Stellantis, Toyota, and BMW are included.' },
  { question: 'Can ServiceNow automate PPAP submission to OEM portals?', answer: 'Yes. Pre-built connectors to Stellantis Covisint, Ford Supplier Portal, GM Global Supplier Quality, and Toyota SQIS. ServiceNow assembles PPAP packages to each OEM\'s element requirements.' },
  { question: 'How does the recall management workflow reduce NHTSA exposure?', answer: 'ServiceNow queries VIN registration and DMV feeds within minutes of a recall decision, generates owner communications, and tracks remedy completion in real time. Clients reduced notification time from 12-19 days to under 4 hours.' },
  { question: 'What telematics platforms does ServiceNow integrate with?', answer: 'Pre-built integrations with Geotab, Samsara, Verizon Connect, and Trimble. Supports OBD-II feeds and connected-vehicle APIs from Ford, GM OnStar, and Volvo Trucks.' },
  { question: 'How does ServiceNow handle Tier-2 supplier risk?', answer: 'A supplier network module lets Tier-1s submit critical sub-supplier data. A risk-scoring model evaluates financial stability and quality history. Procurement is alerted 30 days before schedule impact.' },
  { question: 'What ROI can automotive manufacturers expect?', answer: 'PrimeAxle eliminated $38M in regulatory exposure. TorqueLine recovered $11.4M in expediting costs. Typical payback: 8-14 months.' },
];

export default function AutomotiveManufacturing() {
  const [currentCase, setCurrentCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Automotive &amp; Mobility</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  97% PPAP.<br /><span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">First time. Every time.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  APQP/PPAP automation, recall management, and fleet telematics connected to ServiceNow &mdash; from OEM production lines to Tier-1 suppliers and commercial fleets.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm sm:text-base hover:border-blue-400 hover:text-blue-600">
                    See Client Results
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:flex items-center justify-center py-8">
                <div className="w-28 h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2" style={{ borderColor: A, boxShadow: `0 0 40px ${AS}` }}>
                  <Car className="h-8 w-8 mb-1" style={{ color: A }} />
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ServiceNow</div>
                </div>
                <div className="absolute flex items-center gap-2 bottom-4 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">APQP - PPAP - IATF - Telematics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>The Automotive Advantage</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for the vehicle lifecycle. <span style={{ color: A }}>Delivered with precision.</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${A}18` }}><f.icon className="h-5 w-5" style={{ color: A }} /></div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Real numbers.<br />Real automotive clients.</h2>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentCase * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-5">
                              <span className="text-xs font-semibold rounded-full px-3 py-1" style={{ color: A, backgroundColor: `${A}12` }}>{study.industry}</span>
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                            <div className="space-y-5">
                              <div>
                                <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: A }}>Solution</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#f8faff' }}>
                            <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-800">Outcomes</span>
                              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                                  <CheckCircle className="h-4 w-4 text-green-500 mb-2" />
                                  <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                                </div>
                              ))}
                            </div>
                            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-xs text-gray-400">Delivered in</span>
                              <span className="text-sm font-bold" style={{ color: A }}>{study.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button key={i} onClick={() => setCurrentCase(i)} className="rounded-full transition-all duration-300" style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }} aria-label={`Case study ${i + 1}`} />
                  ))}
                </div>
                <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The Automotive Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">A proven four-phase approach delivering measurable quality and compliance results within 22 weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
              {methodology.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-lg transition-transform group-hover:-translate-y-1`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center" style={{ color: A }}><step.icon className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.phase}</h3>
                    <ul className="space-y-3">
                      {step.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Common questions.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your automotive transformation.</p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-blue-200">
                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} style={{ color: A }} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${A}, transparent 70%)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Accepting new engagements - 22-week go-live
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to achieve 97% PPAP acceptance?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your quality or compliance challenge. We&rsquo;ll scope your implementation in 48 hours &mdash; no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-white transition-all text-base">
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
