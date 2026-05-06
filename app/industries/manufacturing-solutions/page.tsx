'use client';
import React, { useState, useEffect } from 'react';
import {
  Factory, Wrench, Package, Shield, BarChart, Network,
  CheckCircle, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  MessageCircle, Search, Rocket, Lightbulb, Cog,
} from 'lucide-react';

const A = '#ea580c';
const AG = 'linear-gradient(135deg, #ea580c, #dc2626)';
const AS = 'rgba(234,88,12,0.30)';

const caseStudies = [
  { client: 'SteelTech Industries', industry: 'Steel Manufacturing', timeline: '20 weeks',
    challenge: 'Unplanned downtime across 12 facilities cost $89M annually. 73% of failures occurred on assets that missed scheduled PMs because manual work orders were never acknowledged before due dates.',
    solution: 'ServiceNow Predictive Maintenance with IoT sensors on 840 critical assets, automated work-order generation 21 days ahead of PM due dates, and mobile photo confirmation before closing work orders.',
    results: ['87% reduction in unplanned downtime', 'PM completion rate from 66% to 99.2% on-time', '$97M annual cost savings from avoided production halts', 'MTBF extended from 41 days to 9 months'] },
  { client: 'GlobalTech Assembly', industry: 'Electronics Manufacturing', timeline: '18 weeks',
    challenge: 'A 23% defect rate on PCB assemblies cost $67M/year. Inspection data lived in a separate QMS — defect clusters took 19 days to trace to root cause.',
    solution: 'ServiceNow Quality Management integrated with MES and AOI tags each defect with shift, operator, and material lot at capture. SPC fires line-stop recommendations when defects cross 2-sigma limits.',
    results: ['91% reduction in field defect rate over 12 months', 'Root-cause investigation from 19 days to 6 hours', '$74M annual cost avoidance in rework and warranty claims', 'Zero product recalls in 18 months'] },
  { client: 'ChemPro Manufacturing', industry: 'Chemical Processing', timeline: '22 weeks',
    challenge: 'Four EPA findings and $45M in fines over 24 months: 28% of daily emissions readings were missing because data entry was manual.',
    solution: 'ServiceNow EHS Management integrated with SCADA and CEM auto-populates regulatory reports and triggers a two-step escalation when parameters approach 90% of permit threshold.',
    results: ['100% of regulatory reports auto-populated from live data', 'Permit threshold alerts actioned within 8 minutes on average', '$52M in avoided fines since go-live', 'Zero environmental violations in 28 months'] },
];

const features = [
  { icon: Factory, title: 'Smart Manufacturing & Industry 4.0', description: 'OPC-UA and MQTT connectors pull real-time machine data from PLCs and SCADA into a unified production dashboard refreshed every 60 seconds.' },
  { icon: Wrench, title: 'Predictive Maintenance', description: 'IoT sensors flag failures 14-21 days ahead, auto-generating work orders with technician skill code, parts list, and safety permit attached.' },
  { icon: Package, title: 'Supply Chain & Inventory', description: 'Bin-level inventory sensors trigger replenishment POs when stock falls below reorder point. Supplier scorecards update weekly.' },
  { icon: Shield, title: 'Safety & EHS Compliance', description: 'SCADA and CEM sensor data flows directly into regulatory reports. Two-step escalation fires when a parameter crosses 90% of its permit threshold.' },
  { icon: BarChart, title: 'Quality Management (SPC / CAPA)', description: 'Each defect is tagged at capture with shift, operator, machine, and lot. SPC control charts fire line-stop recommendations before the process drifts out of spec.' },
  { icon: Network, title: 'Digital Twin & Simulation', description: 'A ServiceNow-orchestrated digital twin maps live sensor readings and maintenance history so engineers can simulate outage impact before scheduling.' },
];

const methodology = [
  { phase: 'Discovery', duration: 'Weeks 1-4', icon: Search, color: 'from-orange-500 to-red-500', features: ['Production line analysis', 'Safety compliance audit'] },
  { phase: 'Design & Integrate', duration: 'Weeks 5-12', icon: Lightbulb, color: 'from-red-500 to-pink-500', features: ['ServiceNow manufacturing setup', 'Quality system integration'] },
  { phase: 'Development', duration: 'Weeks 13-18', icon: Cog, color: 'from-pink-500 to-purple-500', features: ['System testing', 'Process validation'] },
  { phase: 'Deployment', duration: 'Weeks 19-24', icon: Rocket, color: 'from-purple-500 to-indigo-500', features: ['Production deployment', 'Team training'] },
];

const faqs = [
  { question: 'How does ServiceNow enable Industry 4.0 transformation?', answer: 'ServiceNow uses OPC-UA and MQTT connectors to pull live data from PLCs and SCADA into a unified platform without replacing existing control infrastructure.' },
  { question: 'What predictive maintenance capabilities does ServiceNow offer?', answer: 'IoT sensor data feeds a health-scoring model that flags assets trending toward failure 14-21 days ahead, auto-generating work orders with correct skill code, parts, and permits.' },
  { question: 'How can ServiceNow improve manufacturing quality management?', answer: 'ServiceNow tags every defect at capture with shift, operator, machine, and lot. Clients typically see field defect rates drop 80-91% within 12 months.' },
  { question: 'What safety and compliance features does ServiceNow provide?', answer: 'SCADA and CEM sensors populate regulatory reports automatically. A two-stage alert fires at 90% of permit threshold notifying the on-call EHS officer and plant leadership.' },
  { question: 'How does ServiceNow integrate with existing manufacturing systems?', answer: 'Pre-built connectors for SAP, Oracle ERP, Rockwell, Siemens, ABB, and major MES platforms. Most integrations are live by Week 12.' },
  { question: 'What ROI can manufacturers expect?', answer: 'SteelTech recovered $97M in Year 1 from avoided downtime. GlobalTech eliminated $74M in rework costs. Typical payback: 9-14 months.' },
];

export default function ManufacturingIndustrial() {
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
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Manufacturing &amp; Industrial</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  99.2% uptime.<br /><span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Not a target. A result.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  OPC-UA, MQTT, and IoT sensors connected to ServiceNow &mdash; predictive maintenance, real-time SPC quality, and automated EHS compliance from one platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm sm:text-base hover:border-orange-400 hover:text-orange-600">
                    See Client Results
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:flex items-center justify-center py-8">
                <div className="w-28 h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2" style={{ borderColor: A, boxShadow: `0 0 40px ${AS}` }}>
                  <Factory className="h-8 w-8 mb-1" style={{ color: A }} />
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ServiceNow</div>
                </div>
                <div className="absolute flex items-center gap-2 bottom-4 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">OPC-UA - MQTT - MES - ERP</span>
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
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>The Manufacturing Advantage</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for the plant floor. <span style={{ color: A }}>Delivered with precision.</span></h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Real numbers.<br />Real manufacturers.</h2>
            </div>
            <div className="relative">
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
                          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ background: '#f8faff' }}>
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
                <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button key={i} onClick={() => setCurrentCase(i)} className="rounded-full transition-all duration-300" style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }} aria-label={`Case study ${i + 1}`} />
                  ))}
                </div>
                <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The Manufacturing Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                A proven four-phase approach delivering measurable results within 24 weeks.
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
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl">
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
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your manufacturing transformation.</p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-orange-200">
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />New engagements open &mdash; 24-week go-live
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to achieve 99.2% uptime?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your operations. We&rsquo;ll scope your implementation in 48 hours and show you exactly how we&rsquo;d approach it &mdash; no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-orange-500 hover:text-white transition-all text-base">
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
