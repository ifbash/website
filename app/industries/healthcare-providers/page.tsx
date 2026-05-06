'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HeartPulse, Stethoscope, Users, Shield, ArrowRight, CheckCircle, MessageCircle, ChevronDown, Search, Settings, Rocket, MonitorSmartphone } from 'lucide-react';

const A = '#e11d48';
const AG = 'linear-gradient(135deg, #e11d48, #be123c)';

const features = [
  { icon: HeartPulse, title: 'Patient Flow & Capacity', desc: 'Real-time bed capacity, ED wait times, and discharge pipeline across all facilities. Predictive extended-stay flagging based on diagnosis and LOS patterns.' },
  { icon: Stethoscope, title: 'Care Coordination', desc: 'Unified care plans shared across facilities in real time. Automated 2-hour post-discharge follow-up. Daily readmission risk scoring routes high-risk patients to coordinators.' },
  { icon: MonitorSmartphone, title: 'Virtual Care & Engagement', desc: '3-step portal activation lifting rates from under 30% to over 70%. Automated HCAHPS surveys. Telehealth scheduling with 24-hour and 1-hour reminders.' },
  { icon: Shield, title: 'HIPAA Compliance', desc: 'Role-based PHI access with automated anomaly detection. Every access attempt logged with baseline deviation alerting. BAA tracking with auto-renewal reminders.' },
  { icon: Users, title: 'Workforce Management', desc: 'Unified clinician portal for HR, credentialing, and scheduling. Automated license expiration notifications at 90/60/30 days. Self-service shift swap approvals.' },
  { icon: Settings, title: 'Clinical Asset Lifecycle', desc: 'IoT condition monitoring on medical equipment. Automated PM scheduling with verified completion. Sub-45-minute dispatch routing for critical devices.' },
];

const caseStudies = [
  {
    client: 'MercyCare Health Network', industry: '14-Hospital System', timeline: '24 weeks',
    challenge: 'No unified care coordination across 14 hospitals in 3 states. 34% 30-day readmission rate. High-risk patients identified through manual chart review — only 41% reached within 48 hours of discharge.',
    solution: 'ServiceNow Care Management with unified care plans visible to every facility. Predictive readmission model scores every inpatient daily. Patients above 0.72 threshold auto-routed to next available care coordinator. Integrated with Epic for real-time ADT feed.',
    results: ['30-day readmissions: 34% → 4.4%', 'Care coordination: 47th → 91st HCAHPS percentile', 'High-risk outreach: 41% → 98.6% within 24 hours', '$97M avoided readmission costs in Year 1'],
    quote: 'We had 14 hospitals running 14 different discharge processes. ifBash built a platform that eliminated the cracks.', author: 'Chief Medical Officer',
  },
  {
    client: 'PrimeCare Clinic Group', industry: '47-Location Clinic Chain', timeline: '20 weeks',
    challenge: '23-day average wait for primary care. 22% no-show rate costing $6.8M annually. Portal activation stuck at 22%. Contact centre handling 340,000 calls/year — 68% for appointment scheduling.',
    solution: 'ServiceNow CSM with real-time online scheduling across all 47 clinics. Intelligent routing redirecting urgent care patients to available slots. 3-step automated portal activation sequence. IVR self-service scheduling reducing contact centre volume.',
    results: ['Wait time: 23 days → 4 days for primary care', 'No-show rate: 22% → 7% through self-service rescheduling', 'Portal activation: 22% → 73%', 'Contact centre calls reduced 54%'],
    quote: 'Twenty-three days to see a doctor is not access — it\'s a barrier. No-shows went from 22% to 7% because patients could reschedule online.', author: 'VP of Operations',
  },
];

const hipaaAreas = [
  { title: 'Access Controls', items: ['Role-based PHI access enforcing minimum necessary per role', 'Break-glass emergency access with 1-hour Privacy Officer notification', 'Quarterly user access reviews with manager attestation workflow'] },
  { title: 'Audit Controls', items: ['Every PHI access logged: user, timestamp, record, action, location', 'Anomalous access pattern detection with automated alerting', 'Tamper-evident audit log storage meeting HIPAA retention requirements'] },
  { title: 'Transmission Security', items: ['PHI encrypted in transit (TLS 1.2+) and at rest (AES-256)', 'Integrity controls with automated tampering detection', 'Breach notification workflow pre-configured for 60-day HHS deadline'] },
];

const methodology = [
  { phase: 'Assessment', duration: 'Weeks 1–4', icon: Search, items: ['Clinical workflow mapping across all facilities', 'Readmission risk factor analysis & data source audit', 'EHR integration assessment (Epic, Meditech, Cerner)'] },
  { phase: 'Configure & Integrate', duration: 'Weeks 5–14', icon: Settings, items: ['Care Management platform configuration', 'EHR integration via HL7 FHIR R4', 'Readmission risk model development & calibration'] },
  { phase: 'Test & Validate', duration: 'Weeks 15–18', icon: Shield, items: ['HIPAA security controls testing & validation', 'Risk model accuracy validation against historical data', 'Clinical user acceptance testing'] },
  { phase: 'Deploy & Optimise', duration: 'Weeks 19–22', icon: Rocket, items: ['Phased facility deployment with staggered go-live', 'Portal onboarding campaign & materials', '90-day hypercare with monthly outcome review'] },
];

const faqs = [
  { q: 'How does ServiceNow improve care coordination across multiple facilities?', a: 'Shared care plans visible across all facilities, automated 2-hour post-discharge follow-up, and daily readmission risk scoring. MercyCare reduced 30-day readmissions from 34% to 4.4%.' },
  { q: 'What EHR integrations does ServiceNow support?', a: 'Pre-built integrations for Epic, Oracle Health (Cerner), and Meditech using HL7 FHIR R4. Custom integration supported through Integration Hub.' },
  { q: 'What HIPAA compliance features are built in?', a: 'Role-based PHI access controls, full audit logging of every access event, automated anomaly detection with 1-hour Privacy Officer notification, and BAA management.' },
  { q: 'How long does a healthcare implementation take?', a: '22 weeks: 4-week assessment, 10-week configuration and EHR integration, 4-week testing, 4-week phased deployment with hypercare.' },
  { q: 'What ROI have healthcare organisations seen?', a: 'MercyCare: $97M avoided readmission costs in Year 1. PrimeCare: $5.2M recovered from reduced no-shows. Typical payback: 9–14 months.' },
];

export default function HealthcareProviders() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Free Healthcare Consultation">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free Consultation</span>
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #e11d48, transparent 70%)' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Healthcare Providers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                87% fewer{' '}<span style={{ color: A }}>readmissions.</span><br />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-400">Starting week one.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                Unified care plans. Automated post-discharge follow-up. Predictive readmission risk scoring. HIPAA-compliant workflows integrated with your EHR.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }}>Transform Patient Outcomes <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-rose-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">See Client Results</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
                {[{ s: '87%', l: 'Readmission reduction', d: '34% → 4.4% at MercyCare' }, { s: '$97M', l: 'Year-1 cost savings', d: 'Avoided readmission costs' }, { s: '73%', l: 'Portal activation', d: 'Up from 22% at PrimeCare' }, { s: '91st', l: 'HCAHPS percentile', d: 'Care coordination scores' }].map((m, i) => (
                  <div key={i}><div className="text-2xl sm:text-3xl font-bold text-white">{m.s}</div><div className="text-sm font-semibold text-slate-300 mt-0.5">{m.l}</div><div className="text-xs text-slate-500 mt-0.5">{m.d}</div></div>
                ))}
              </div>
            </div>
            {/* Hub visual */}
            <div className="hidden lg:flex items-center justify-center py-8">
              <div className="relative">
                <div className="relative z-10 w-28 h-28 rounded-2xl border-2 bg-white shadow-xl flex flex-col items-center justify-center" style={{ borderColor: A, boxShadow: `0 0 40px ${A}4d` }}>
                  <HeartPulse className="h-8 w-8 mb-1" style={{ color: A }} /><div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Care Hub</div>
                </div>
                {[{ label: 'Care Team', angle: 0, color: '#e11d48' }, { label: 'Patient', angle: 60, color: '#be123c' }, { label: 'Lab', angle: 120, color: '#7c3aed' }, { label: 'Pharmacy', angle: 180, color: '#0284c7' }, { label: 'Discharge', angle: 240, color: '#059669' }, { label: 'HIPAA', angle: 300, color: '#d97706' }].map(({ label, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return <div key={i} className="absolute w-16 h-16 rounded-xl border bg-white shadow-md flex items-center justify-center" style={{ transform: `translate(${Math.cos(rad) * 128}px, ${Math.sin(rad) * 128}px)`, borderColor: `${color}33` }}><div className="text-[10px] font-bold" style={{ color }}>{label}</div></div>;
                })}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-xs font-semibold text-gray-600">HIPAA-compliant · HL7 FHIR R4</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Platform Capabilities</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Solutions that change outcomes.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl p-6 border border-gray-200 hover:border-rose-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: AG }}><Icon className="h-5 w-5 text-white" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-14 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: HeartPulse, s: '87%', l: 'Readmission Reduction' }, { icon: Shield, s: '$97M', l: 'Year-1 Cost Savings' }, { icon: Users, s: '91st', l: 'HCAHPS Percentile' }, { icon: Settings, s: '99.1%', l: 'PM On-Time Rate' }].map(({ icon: Icon, s, l }) => (
              <div key={l} className="text-center"><div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${A}18` }}><Icon className="h-6 w-6" style={{ color: A }} /></div><div className="text-3xl font-bold text-white mb-1">{s}</div><div className="text-sm font-semibold text-slate-300">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Healthcare success stories.</h2>
          </div>
          <div className="flex gap-2 mb-8 justify-center flex-wrap">
            {caseStudies.map((s, i) => (
              <button key={i} onClick={() => setActiveCase(i)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCase === i ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} style={activeCase === i ? { background: AG } : {}}>{s.client}</button>
            ))}
          </div>
          {caseStudies.map((study, i) => activeCase === i && (
            <div key={i} className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div>
                <div className="flex gap-2 mb-4 flex-wrap"><span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${A}18`, color: A }}>{study.industry}</span><span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">{study.timeline}</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-5">{study.client}</h3>
                <div className="space-y-4">
                  <div><div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#dc2626' }}>Challenge</div><p className="text-sm text-gray-600">{study.challenge}</p></div>
                  <div><div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: A }}>Solution</div><p className="text-sm text-gray-600">{study.solution}</p></div>
                </div>
                <blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}50` }}>&ldquo;{study.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {study.author}</span></blockquote>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#059669' }}>Results</div>
                <div className="space-y-3">
                  {study.results.map((r, j) => <div key={j} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: A }} /><span className="text-sm text-gray-700 font-medium">{r}</span></div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIPAA ── */}
      <section className="py-20 relative" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>HIPAA Compliance</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">HIPAA, HITRUST & privacy by design.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {hipaaAreas.map((area) => (
              <div key={area.title} className="rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}>
                <h3 className="font-bold text-white text-lg mb-3">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, j) => <li key={j} className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: A }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Methodology</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The healthcare implementation roadmap.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
            {methodology.map((step, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl p-px shadow-lg transition-transform group-hover:-translate-y-1" style={{ background: AG }}>
                  <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center"><step.icon className="h-6 w-6" style={{ color: A }} /></div>
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                <h3 className="font-bold text-gray-900 mb-3">{step.phase}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-500 justify-center"><span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently asked questions.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 hover:border-rose-200 rounded-xl overflow-hidden transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 pr-8 text-sm">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} />
                </button>
                {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100"><p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to cut readmissions by 87%?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">Schedule a free consultation. We&apos;ll map the specific workflow gaps in your care coordination process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 12px 32px ${A}4d` }}>Schedule Your Consultation <ArrowRight className="h-5 w-5" /></Link>
            <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-rose-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">View All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
