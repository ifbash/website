'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, FileText, Briefcase, Shield, Globe, Network,
  ArrowRight, CheckCircle, MessageCircle, ChevronDown,
  Search, Settings, Rocket
} from 'lucide-react';

const A = '#1d4ed8';
const AG = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
const AS = 'rgba(29,78,216,0.30)';

const features = [
  { icon: Users, title: 'Citizen Service Management', description: 'A unified digital portal where citizens submit requests, track status in real time, and receive updates without phone calls, with auto-routing by type and location and SLA enforcement.' },
  { icon: FileText, title: 'Permit & License Management', description: 'Digital permit workflows with structured online forms, SLA-enforced review stages, and auto-triggered renewal workflows 60 days before licence expiry.' },
  { icon: Briefcase, title: 'Case & Social Services Management', description: '360-degree citizen history across departments with guided eligibility determination and automated document generation and outcomes tracking.' },
  { icon: Shield, title: 'Regulatory Compliance & Audit Management', description: 'FedRAMP and GDPR control mapping with automated evidence collection, policy management with role-based attestation, and real-time audit readiness dashboards.' },
  { icon: Globe, title: 'Digital Forms & Citizen Engagement', description: 'Dynamic adaptive forms reducing completion time by 60% across web, mobile, SMS, and email channels with a unified citizen timeline.' },
  { icon: Network, title: 'Inter-Agency Workflow Orchestration', description: 'Integration Hub connects ServiceNow to existing ERP, HR, and legacy systems creating cross-agency workflows with automated handoffs and end-to-end visibility.' },
];

const caseStudies = [
  { client: 'City of Westbrook', industry: 'Municipal Government (450K residents)', timeline: '26-week implementation',
    challenge: 'Service requests went through a phone line staffed 8 AM to 4 PM weekdays with 12-day average response and 23% satisfaction. Permit approval required visiting three offices with paper documents.',
    solution: 'ifBash deployed ServiceNow CSM with a 24/7 citizen portal and digitised permit workflows with SLA timers per service type.',
    results: ['Average response from 12 days to 6 hours (98% improvement)', 'Citizen satisfaction from 23% to 83% within 8 months', 'Permit processing from 34 business days to 6 days', '$4.2M annual operational savings'] },
  { client: 'Federal Agency for Immigration Services', industry: 'Federal Government Agency', timeline: '34-week implementation',
    challenge: '2.3 million active cases on a 23-year-old legacy system that could not share data with 14 agencies. Caseworkers spent 40% of time on data entry; average processing was 287 days.',
    solution: 'ifBash deployed a FedRAMP-authorized ServiceNow instance with App Engine, integrating 14 agencies via Integration Hub and an applicant portal for real-time status.',
    results: ['Case processing from 287 days to 73 (75% improvement)', 'Data entry time from 40% to 8% of work hours', 'Call volume reduced 62% through portal self-service', 'FedRAMP Moderate Authorization with zero findings'] },
];

const metricsData = [
  { stat: '98%', label: 'Faster service response', sub: '12 days to 6 hours' },
  { stat: '75%', label: 'Faster case processing', sub: '287 days to 73' },
  { stat: '83%', label: 'Citizen satisfaction', sub: 'Up from 23%' },
  { stat: '$4.2M', label: 'Annual savings', sub: 'Single municipality' },
];

const implementationSteps = [
  { phase: 'Government Assessment', duration: 'Weeks 1-4', icon: Search, items: ['Citizen service journey mapping and pain-point analysis', 'Regulatory and compliance requirements review'] },
  { phase: 'Platform Configuration', duration: 'Weeks 5-16', icon: Settings, items: ['ServiceNow government platform configuration and branding', 'App Engine development for permit, license, and case workflows'] },
  { phase: 'Testing & Validation', duration: 'Weeks 17-24', icon: Shield, items: ['FedRAMP control testing and evidence documentation', 'UAT with citizen and staff representative groups'] },
  { phase: 'Deployment & Onboarding', duration: 'Weeks 25-30', icon: Rocket, items: ['Phased production deployment by department and service category', '90-day hypercare with dedicated government support engineer'] },
];

const faqs = [
  { q: 'What FedRAMP authorisation does ServiceNow hold for government deployments?', a: 'ServiceNow holds FedRAMP Moderate Authorization across its platform and FedRAMP High Authorization for specific federal environments.' },
  { q: 'Can ServiceNow integrate with legacy government systems that are decades old?', a: 'Yes. Integration Hub provides pre-built connectors for common government systems plus a REST/SOAP API gateway, orchestrating across legacy systems without requiring replacement.' },
  { q: 'How does ServiceNow serve citizens who do not use digital channels?', a: 'The platform supports web, phone, SMS, and in-person channels feeding the same case record, with agents submitting requests on behalf of non-digital citizens.' },
  { q: 'What accessibility standards does the citizen portal meet?', a: 'The citizen portal meets WCAG 2.1 AA standards with screen reader compatibility, keyboard navigation, and multi-language support.' },
  { q: 'How long does a typical government ServiceNow implementation take?', a: 'Our standard programme runs 30 weeks: 4 assessment, 12 configuration, 8 testing including FedRAMP validation, and 6 deployment with citizen onboarding.' },
];

export default function PublicSectorGovernment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }} aria-label="Free Government Consultation">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free Consultation</span>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </Link>
      </div>

      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #1d4ed8, transparent 70%)' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-20 sm:pt-28 pb-16 sm:pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Public Sector &amp; Government
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                  Citizens expect <span style={{ color: A }}>Amazon.</span><br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-400">Most governments deliver 1980s.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                  ServiceNow bridges the expectation gap. Digital citizen portals, automated permit workflows, FedRAMP-compliant case management, and inter-agency coordination &mdash; delivered without replacing your legacy systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base" style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}>
                    Modernise Government Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm sm:text-base">
                    See Client Results
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
                  {metricsData.map((m, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-white">{m.stat}</div>
                      <div className="text-sm font-semibold text-slate-300 mt-0.5">{m.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Before/after visual */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border p-6" style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(239,68,68,0.3)', backgroundColor: 'rgba(239,68,68,0.05)' }}>
                      <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">Before</div>
                      <div className="space-y-2">
                        {['Phone line 8 AM-4 PM', '12-day response time', '23% satisfaction', 'Paper forms & 3-office visits'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-red-300"><span className="w-1 h-1 rounded-full bg-red-400" />{item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl p-4 border" style={{ borderColor: `${A}40`, backgroundColor: `${A}10` }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: A }}>After</div>
                      <div className="space-y-2">
                        {['24/7 digital portal', '6-hour response time', '83% satisfaction', 'Online forms & auto-routing'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs" style={{ color: `${A}CC` }}><span className="w-1 h-1 rounded-full" style={{ backgroundColor: A }} />{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] text-center">
                    <span className="text-xs text-slate-500">City of Westbrook &middot; 450K residents &middot; 26-week implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Platform Capabilities</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Built for Government <span style={{ color: A }}>Service Delivery</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: AG }}><f.icon className="h-5 w-5 text-white" /></div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Government <span style={{ color: A }}>Success Stories</span></h2>
            </div>
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {caseStudies.map((s, i) => (
                <button key={i} onClick={() => setActiveCase(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCase === i ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  style={activeCase === i ? { background: AG } : {}}>{s.client}</button>
              ))}
            </div>
            {caseStudies.map((study, i) => (
              activeCase === i && (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-start bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
                  <div>
                    <div className="flex gap-2 mb-6 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${A}18`, color: A }}>{study.industry}</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">{study.timeline}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#dc2626' }}>Challenge</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: A }}>Solution</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#059669' }}>Results</div>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((r, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border shadow-sm" style={{ borderColor: `${A}30` }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${A}18` }}><CheckCircle className="h-3.5 w-3.5" style={{ color: A }} /></div>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Methodology</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">The Government Implementation Roadmap</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl p-px shadow-lg transition-transform group-hover:-translate-y-1" style={{ background: AG }}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center"><step.icon className="h-6 w-6" style={{ color: A }} /></div>
                    </div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>{step.duration}</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-3">{step.phase}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 justify-center"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: A }} />{item}</li>
                      ))}
                    </ul>
                  </div>
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
                  <div key={i} className="border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden transition-colors">
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
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Get Started</span>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to deliver the service<br /><span style={{ color: A }}>your citizens expect?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a free consultation. We will map your current service delivery gaps, assess your compliance requirements, and build a business case specific to your agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-base" style={{ background: AG, boxShadow: `0 12px 32px ${AS}` }}>
                Schedule Your Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-base">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
