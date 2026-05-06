'use client';
import React, { useState, useEffect } from 'react';
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Users, MessageCircle,
  Search, Settings, Rocket, Zap, Wind, Battery, Gauge, AlertTriangle,
  Thermometer, Droplets,
} from 'lucide-react';

const A = '#d97706';
const AG = 'linear-gradient(135deg, #d97706, #eab308)';
const AS = 'rgba(217,119,6,0.30)';

const challenges = [
  { icon: Zap, title: 'Grid Reliability Under Pressure', stat: '47 hr avg outage', description: 'Average major outage duration across US distribution utilities is 47 hours. Fault isolation alone consumes 8-12 hours as engineers manually cross-reference SCADA alerts, GIS maps, and maintenance logs.' },
  { icon: Gauge, title: 'Aging Asset Infrastructure', stat: '60% of transformers >25 yrs', description: 'Most utilities lack condition-based monitoring, relying on calendar-based PM schedules that miss 40-60% of incipient failures.' },
  { icon: AlertTriangle, title: 'Regulatory & Compliance Pressure', stat: 'NERC CIP + EPA + state', description: 'NERC CIP reliability standards, EPA emissions reporting, and state-level renewable portfolio mandates create overlapping compliance obligations.' },
];

const solutions = [
  { icon: Zap, title: 'Grid Operations & Reliability', description: 'ServiceNow ITOM unifies SCADA, ADMS, and substation RTU alert streams into a single incident record with auto-identified fault location and location-based field crew dispatch.' },
  { icon: Thermometer, title: 'Asset Performance & Predictive Maintenance', description: 'IoT sensors stream condition data into health-scoring models; assets exceeding a 0.65 failure probability threshold generate pre-fault work orders automatically.' },
  { icon: Wind, title: 'Renewable Energy Operations', description: 'Automated weather API feeds update generation forecasts every 15 minutes, with ML-based P50/P90 forecasts and automated day-ahead bidding capped at 90% of P90.' },
  { icon: Users, title: 'Customer Experience & Engagement', description: 'Unified agent workspace consolidating multi-utility account data, proactive outage SMS within 8 minutes of fault confirmation, and usage anomaly detection.' },
  { icon: Droplets, title: 'Environmental & Sustainability Compliance', description: 'Continuous emissions monitoring data flows directly into EPA and state regulatory report templates with monthly Scope 1/2/3 carbon accounting.' },
  { icon: Battery, title: 'Energy Storage & Demand Response', description: 'Automated demand response dispatch across opted-in customer segments and 30-minute storage schedule updates from real-time LMP and BMS data.' },
];

const caseStudies = [
  { client: 'Heritage Power & Electric', industry: 'Investor-Owned Utility', timeline: '32 weeks',
    challenge: 'Average outage duration across 1,800 substations was 47 hours driven by manual fault-isolation across three separate systems. Median time from detection to dispatch was 9.4 hours.',
    solution: 'ServiceNow ITOM unified alert feeds from SCADA, ADMS, and substation RTUs into a single incident record with auto-generated switching sequences and location-based routing.',
    results: ['Outage: 47 hrs to 3.2 hrs (93% reduction)', 'Dispatch: 9.4 hrs to 38 min average', 'SAIFI: 1.8 to 0.14; SAIDI: 214 min to 19 min', 'PUC performance penalty avoided'] },
  { client: 'Summit Renewables', industry: 'Renewable Generation', timeline: '28 weeks',
    challenge: 'Wind turbine availability across 14 sites averaged 84%, driven by reactive maintenance. 67% of faults detected through unscheduled stops. Annual O&M costs reached $47M.',
    solution: 'ServiceNow ITOM with automated weather API feeds every 15 minutes, ML generation models producing P50/P90 forecasts, and vibration sensors flagging pre-fault conditions 14-21 days ahead.',
    results: ['Turbine availability: 84% to 97%', 'O&M costs: $47M to $28M (40% reduction)', 'Forecast accuracy: 51% to 93% MAPE', 'Zero imbalance charge events in 12 months'] },
];

const methodology = [
  { phase: 'Assessment & Strategy', duration: 'Weeks 1-5', icon: Search, color: 'from-amber-600 to-yellow-600', features: ['Grid infrastructure and SCADA landscape audit', 'Asset condition and PM effectiveness analysis'] },
  { phase: 'Configuration & Integration', duration: 'Weeks 6-22', icon: Settings, color: 'from-yellow-600 to-orange-600', features: ['ServiceNow ITOM event management setup', 'SCADA, ADMS, and RTU alert feed integration'] },
  { phase: 'Validation & Testing', duration: 'Weeks 23-28', icon: AlertTriangle, color: 'from-orange-600 to-red-600', features: ['Fault correlation accuracy testing', 'Regulatory report template validation'] },
  { phase: 'Deployment & Optimisation', duration: 'Weeks 29-34', icon: Rocket, color: 'from-red-600 to-amber-600', features: ['Phased rollout by region or asset class', 'Continuous model tuning and threshold optimisation'] },
];

const faqs = [
  { question: 'How does ServiceNow improve grid reliability for electric utilities?', answer: 'Unifying SCADA, ADMS, and substation RTU data into a single incident record with auto-identified fault location and generated switching sequences. Reference implementation reduced outage duration from 47 hours to 3.2 hours.' },
  { question: 'What renewable energy management capabilities does ServiceNow provide?', answer: 'Automated weather API feeds every 15 minutes, ML generation models for P50/P90 forecasts, day-ahead bidding capped at 90% of P90, and predictive maintenance on turbine gearboxes.' },
  { question: 'How does ServiceNow help with NERC CIP compliance?', answer: 'ServiceNow GRC maps NERC CIP requirements (CIP-002 through CIP-014) to your assets and processes with automated evidence collection. The compliance calendar tracks audit windows.' },
  { question: 'What asset performance management features are available?', answer: 'IoT sensors stream condition data into health-scoring models. Assets above 0.65 failure probability receive automated pre-fault work orders with the correct outage window and parts list.' },
  { question: 'What ROI can energy and utility companies expect?', answer: 'Heritage Power avoided a $24M PUC penalty by cutting SAIDI from 214 to 19 minutes. Summit Renewables reduced O&M costs from $47M to $28M. Typical payback: 12-20 months.' },
];

export default function EnergyUtilities() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentCase, setCurrentCase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Speak with an energy expert">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-20 sm:pt-28 pb-20 sm:pb-28">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Energy &amp; Utilities</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 mt-4">
                  Three challenges defining<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">energy operations today.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
                  Aging infrastructure, grid reliability pressure, and overlapping regulatory mandates. ServiceNow unifies the data, automates the response, and provides the compliance evidence layer.
                </p>
                <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                  Start Your Energy Transformation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-4">
                {challenges.map((ch, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.08] p-5 transition-all hover:bg-white/[0.05] hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110" style={{ backgroundColor: `${A}20` }}><ch.icon className="h-5 w-5" style={{ color: A }} /></div>
                      <div><h3 className="text-white font-semibold text-sm mb-1">{ch.title}</h3><div className="text-xs font-bold mb-1" style={{ color: A }}>{ch.stat}</div><p className="text-xs text-slate-400 leading-relaxed">{ch.description}</p></div>
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-white/[0.08] p-4 text-center transition-all hover:bg-white/[0.03]">
                  <span className="text-sm font-semibold text-slate-300">ServiceNow answers: </span>
                  <span className="text-sm font-bold" style={{ color: A }}>93% faster outage resolution &middot; 97% turbine availability &middot; automated NERC CIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Energy Capabilities</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                Built for the energy transition. <span style={{ color: A }}>Delivered on ServiceNow.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all hover:shadow-lg">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${A}18` }}><s.icon className="h-5 w-5" style={{ color: A }} /></div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-16 bg-white border-t border-b border-gray-100 relative">
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${A}30, transparent)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group"><div className="text-3xl sm:text-4xl font-bold transition-all group-hover:-translate-y-0.5" style={{ color: A }}>93%</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Faster outage resolution</div></div>
              <div className="text-center group"><div className="text-3xl sm:text-4xl font-bold transition-all group-hover:-translate-y-0.5" style={{ color: A }}>97%</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Turbine availability</div></div>
              <div className="text-center group"><div className="text-3xl sm:text-4xl font-bold transition-all group-hover:-translate-y-0.5" style={{ color: A }}>$52M</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Fines avoided (24 mo)</div></div>
              <div className="text-center group"><div className="text-3xl sm:text-4xl font-bold transition-all group-hover:-translate-y-0.5" style={{ color: A }}>12-20</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Month typical payback</div></div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">Real numbers. Real energy clients.</h2>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentCase * 100}%)` }}>
                {caseStudies.map((study, index) => (
                  <div key={index} className="w-full shrink-0">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                      <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 mb-5">
                            <span className="text-xs font-semibold rounded-full px-3 py-1" style={{ color: A, backgroundColor: `${A}12` }}>{study.industry}</span>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                          <div className="space-y-5">
                            <div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div><p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p></div>
                            <div><div className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: A }}>Solution</div><p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p></div>
                          </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ background: '#f8faff' }}>
                          <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-800">Outcomes</span>
                            <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                          </div>
                          <div className="p-5 grid grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100"><CheckCircle className="h-4 w-4 text-green-500 mb-2" /><p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p></div>
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
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex items-center gap-2">
                {caseStudies.map((_, i) => (
                  <button key={i} onClick={() => setCurrentCase(i)} className="rounded-full transition-all duration-300" style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }} aria-label={`Case study ${i + 1}`} />
                ))}
              </div>
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Methodology</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The Energy Implementation Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                A proven four-phase approach delivering measurable results within 34 weeks.
              </p>
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
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.phase}</h3>
                    <ul className="space-y-3">{step.features.map((item, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.03] pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4 leading-tight">Common questions.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your energy transformation.</p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>Ask us directly <ArrowRight className="h-4 w-4" /></a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-amber-200">
                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} style={{ color: A }} />
                    </button>
                    {openFaq === index && (<div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p></div>)}
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
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />New engagements open &mdash; 34-week go-live
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to improve grid reliability by 90%?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your reliability, asset, or compliance challenge. We will scope your implementation in 48 hours &mdash; no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-amber-500 hover:text-white transition-all text-base">
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
