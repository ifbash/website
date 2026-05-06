'use client';
import React, { useState } from 'react';
import {
  Microscope, Shield, Beaker, Activity, Truck, ArrowRight, CheckCircle,
  MessageCircle, ChevronDown, FileText, Search, Settings, Rocket,
} from 'lucide-react';

const A = '#059669';
const AG = 'linear-gradient(135deg, #059669, #10b981)';
const AS = 'rgba(5,150,105,0.30)';

const features = [
  { icon: Microscope, title: 'Clinical Trial Operations', desc: 'ServiceNow connects CTMS, eTMF, and EDC into a single operations hub with SLA-enforced site activation checklists and same-day protocol deviation alerting.' },
  { icon: FileText, title: 'Regulatory Submission Management', desc: 'Automated eCTD assembly from validated source systems with pre-submission completeness checks against FDA and EMA checklists.' },
  { icon: Shield, title: 'GxP Quality Management', desc: 'Electronic batch records with mandatory sequential entry, CAPA tracking through effectiveness verification, and 21 CFR Part 11 audit trails.' },
  { icon: Activity, title: 'Pharmacovigilance & Safety', desc: 'Automated adverse event intake from EDC and patient portals with cross-therapeutic-area signal detection and SLA-enforced expedited reporting.' },
  { icon: Beaker, title: 'Lab Operations Management', desc: 'LIMS integration for unified sample tracking, automated equipment calibration scheduling, and 21 CFR Part 11 electronic signature enforcement.' },
  { icon: Truck, title: 'Pharma Supply Chain & Cold Chain', desc: 'Real-time cold chain excursion alerts with auto-launched investigation workflows and same-day recall scope identification from distribution data.' },
];

const caseStudies = [
  { client: 'AstraGene Therapeutics', industry: 'Clinical-Stage Biopharma', timeline: '24-week implementation',
    challenge: '14 active clinical trials across 37 global sites managed through spreadsheets and three disconnected systems. Site activation averaged 112 days; protocol deviations discovered 9 days after occurrence.',
    solution: 'ifBash deployed a unified clinical trial operations platform integrating Medidata Rave, Veeva Vault eTMF, and Oracle Clinical CTMS. Site activation checklists with SLA timers; daily cross-system deviation scans alert QA within 24 hours.',
    results: ['Site activation: 112 days to 19 days', 'Deviation identification: 9 days to 6 hours', 'Trial close-out reduced by 8 weeks', 'Development cycle shortened by 41%'],
    quote: 'Deviations are flagged within hours. Site activation went from four months to three weeks.' },
  { client: 'PrecisionMed Devices', industry: 'Medical Device Manufacturer', timeline: '20-week implementation',
    challenge: '28% CAPA closure rate within target dates and two FDA Form 483 observations in 18 months. Complaint intake was manual via emailed PDF forms.',
    solution: 'ServiceNow QMS configured with CAPA workflows enforcing root-cause investigation templates and auto-scheduled verification activities. Complaint intake replaced with structured portal with e-signatures.',
    results: ['CAPA on-time closure: 28% to 94%', 'Complaint-to-investigation: 11 days to 4 hours', 'Zero FDA Form 483 in latest audit', 'Design change cycle reduced by 67%'],
    quote: 'ifBash rebuilt the entire QMS on ServiceNow. CAPA closure went from 28% to 94%.' },
];

const metricsData = [
  { stat: '41%', label: 'Faster development cycles', sub: 'Average across implemented portfolios' },
  { stat: '112d', label: 'Site activation baseline', sub: 'Reduced to 19 days post-implementation' },
  { stat: '94%', label: 'CAPA on-time closure', sub: 'Up from 28%' },
  { stat: '48h', label: 'Regulatory impact flagging', sub: 'From guideline publication to notification' },
];

const processSteps = [
  { phase: 'Assessment & Regulatory Mapping', duration: 'Weeks 1-4', icon: Search, items: ['Current-state clinical and regulatory workflow audit', 'GxP compliance gap analysis'] },
  { phase: 'Platform Configuration & Integration', duration: 'Weeks 5-16', icon: Settings, items: ['ServiceNow Life Sciences platform configuration', 'CTMS, eTMF, and EDC integration'] },
  { phase: 'Validation & Testing', duration: 'Weeks 17-22', icon: Shield, items: ['IQ/OQ/PQ validation for GxP workflows', '21 CFR Part 11 e-signature and audit trail testing'] },
  { phase: 'Deployment & Inspection Preparation', duration: 'Weeks 23-28', icon: Rocket, items: ['Phased production deployment by site', 'Role-specific training and 90-day hypercare'] },
];

const faqs = [
  { q: 'How does ServiceNow integrate with existing clinical trial systems?', a: 'ServiceNow connects to Medidata Rave, Veeva Vault CTMS/eTMF, and Oracle Clinical through Integration Hub. Protocol deviations are pulled into ServiceNow within hours.' },
  { q: 'What 21 CFR Part 11 compliance features does ServiceNow provide?', a: 'All Part 11 requirements: system-generated audit trails, electronic signatures with unique credentials, signature-to-record binding, and role-based authority enforcement.' },
  { q: 'Can ServiceNow improve pharmacovigilance case processing?', a: 'Yes. Adverse event intake routes into structured case management with SLA timers enforcing 7-day and 15-day regulatory reporting deadlines.' },
  { q: 'How does ServiceNow handle cold chain monitoring?', a: 'Temperature sensor data from logistics partners is ingested in real time. Excursions trigger automatic quarantine holds and deviation investigation workflows.' },
  { q: 'What ROI have life sciences companies seen?', a: 'AstraGene shortened development cycles by 41%. PrecisionMed improved CAPA closure from 28% to 94% and achieved its first clean FDA audit.' },
];

export default function LifeSciencesPharma() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Free Life Sciences Consultation">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Life Sciences &amp; Pharmaceuticals</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-5xl mx-auto mb-6 mt-6">
              From lab to patient: <span style={{ color: A }}>how pharma companies use ServiceNow</span><br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-400">to cut trial timelines by 41%</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
              Clinical trial operations, regulatory submission management, GxP quality, and cold chain compliance — built on ServiceNow for FDA-regulated environments.
            </p>
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-base" style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}>
              Accelerate Your Trials <ArrowRight className="h-5 w-5" />
            </a>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-12 border-t border-white/[0.06]">
              {metricsData.map((m, i) => (
                <div key={i}><div className="text-2xl sm:text-3xl font-bold text-white">{m.stat}</div><div className="text-sm font-semibold text-slate-300 mt-0.5">{m.label}</div><div className="text-xs text-slate-500 mt-0.5">{m.sub}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-gray-50">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Platform Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 tracking-tight">Purpose-Built for <span style={{ color: A }}>Life Sciences</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: AG }}><f.icon className="h-5 w-5 text-white" /></div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 tracking-tight">Life Sciences <span style={{ color: A }}>Success Stories</span></h2>
            </div>
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {caseStudies.map((s, i) => (
                <button key={i} onClick={() => setActiveCase(i)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCase === i ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} style={activeCase === i ? { background: AG } : {}}>{s.client}</button>
              ))}
            </div>
            {caseStudies.map((study, i) => activeCase === i && (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-start bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
                <div>
                  <div className="flex gap-2 mb-6 flex-wrap"><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${A}18`, color: A }}>{study.industry}</span><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">{study.timeline}</span></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                  <div><div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#dc2626' }}>Challenge</div><p className="text-gray-600 text-sm leading-relaxed mb-5">{study.challenge}</p></div>
                  <div><div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: A }}>Solution</div><p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p></div>
                  <div className="mt-6 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}50` }}>&ldquo;{study.quote}&rdquo;</div>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-3">{study.results.map((r, idx) => (<div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border shadow-sm" style={{ borderColor: `${A}30` }}><div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${A}18` }}><CheckCircle className="h-3.5 w-3.5" style={{ color: A }} /></div><span className="text-gray-700 text-sm font-medium leading-relaxed">{r}</span></div>))}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-gray-50">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Methodology</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 tracking-tight">The Life Sciences Implementation Roadmap</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl p-px shadow-lg" style={{ background: AG }}><div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center"><step.icon className="h-6 w-6" style={{ color: A }} /></div></div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{step.phase}</h3>
                  <ul className="space-y-2">{step.items.map((item, idx) => (<li key={idx} className="flex items-center gap-2 text-xs text-gray-500 justify-center"><span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>))}</ul>
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
                <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
                <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>Ask us directly <ArrowRight className="h-4 w-4" /></a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 hover:border-emerald-200 rounded-xl overflow-hidden transition-colors">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} />
                    </button>
                    {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm">{faq.a}</p></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: '#07071a' }}>
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Ready to cut trial timelines <span style={{ color: A }}>by 41%?</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">Schedule a free consultation. We will map your current clinical, regulatory, and quality workflows and build a business case specific to your portfolio.</p>
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-base" style={{ background: AG, boxShadow: `0 12px 32px ${AS}` }}>
              Schedule Your Consultation <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
