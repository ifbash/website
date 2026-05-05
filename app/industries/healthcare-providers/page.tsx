'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  TestTube2, Stethoscope, Play, Users, Zap, Shield, Award, ArrowRight,
  CheckCircle, Star, Brain, Settings, Rocket, Heart, HeartPulse,
  Quote, DollarSign, Activity, MessageCircle, Search, ChevronDown,
  RefreshCw, CloudDownload, Server, Cog, Lightbulb, TrendingUp,
  UserCheck, Clock, Timer, BarChart3, Network, Wrench, Wind, Sun,
  Battery, Fuel, Power, Plug, Building, Factory, Car, Briefcase,
  MonitorSmartphone, Video, FileText, Download, ExternalLink,
  PieChart, Cpu, CloudLightning, GraduationCap, BookOpen, Layers,
  ShoppingBag, Store, Microscope, Music, Gauge, Bot, Workflow,
  Database, Phone, Mail, MapPin, Calendar, Globe, Target, ChevronRight
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "Regional Health Network",
    industry: "Healthcare Systems",
    challenge: "Patient care coordination across 12 hospitals with 34% readmission rates — driven by fragmented discharge planning, no shared care plans between facilities, and manual follow-up calls that reached only 41% of high-risk patients within 48 hours",
    solution: "ServiceNow Care Management hub with automated 48-hour post-discharge call workflows, unified cross-facility care plans, and a predictive readmission risk model that flags patients scoring above 0.72 probability for same-day care coordinator assignment",
    results: ["87% reduction in 30-day readmissions (34% → 4.4%)", "HCAHPS coordination scores up 43 points to 91st percentile", "$97M cost savings in year one", "98.6% of high-risk patients reached within 24 hours of discharge"],
    timeline: "20 weeks implementation",
    testimonial: "ifBash mapped every gap in our discharge process and built workflows that close them automatically. Readmission rates dropped faster than any initiative we'd run in the past decade."
  },
  {
    client: "BioMed Research Institute",
    industry: "Life Sciences Research",
    challenge: "Clinical trial management across 45 concurrent studies used 6 separate tracking systems — protocol deviations averaged 3.2 per study per quarter, site activation took 94 days on average, and manual data queries added 8 weeks to each trial close-out",
    solution: "Unified clinical trial operations platform on ServiceNow with automated protocol deviation alerts, electronic TMF integration, site activation checklists with SLA tracking, and CTMS data reconciliation reducing manual query resolution by eliminating re-keying between systems",
    results: ["78% faster trial completion (avg 94-day site activation → 21 days)", "Protocol deviations down from 3.2 to 0.4 per study per quarter", "$134M savings across active portfolio", "FDA audit with zero Form 483 observations"],
    timeline: "18 weeks rollout",
    testimonial: "The platform surfaced protocol deviations the same day they occurred — we used to find them in monthly reviews. That shift alone cut our data-lock time by six weeks per trial."
  },
  {
    client: "MedDevice Solutions",
    industry: "Medical Devices",
    challenge: "2,300 medical devices across 14 clinical sites with 45% missing current calibration records, manual PM scheduling fulfilled only 67% of required intervals, and technician dispatch averaging 4.2 hours from fault detection to arrival",
    solution: "ServiceNow Asset Management with IoT-connected condition monitoring on 1,800 devices, automated PM work-order generation 30 days ahead of due dates, and an on-call dispatch engine that routes the nearest qualified technician within defined response SLAs",
    results: ["91% improvement in on-time PM completion (67% → 99.1%)", "100% of devices with current calibration records", "Mean time to repair reduced from 4.2 hrs to 38 min", "$67M in avoided equipment replacement and downtime costs"],
    timeline: "22 weeks deployment",
    testimonial: "Every device now has a digital thread — calibration, maintenance history, and live status in one place. Our biomedical team stopped chasing paperwork and started actually engineering."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Patricia Williams",
    title: "Chief Medical Officer",
    company: "Regional Health Network",
    story: "Before the platform, our case managers were manually calling patients from Excel lists — they reached fewer than half of high-risk discharges in time. The automated 48-hour workflow changed that overnight. We found that most preventable readmissions happened when follow-up fell through the cracks, not from clinical failures.",
    metric: "87% reduction in 30-day readmissions — from 34% to 4.4% network-wide",
    rating: 5
  },
  {
    name: "Dr. Michael Chang",
    title: "Research Director",
    company: "BioMed Research Institute",
    story: "We discovered that our site activation delays were entirely process-driven — not regulatory. Once ifBash mapped the bottlenecks, it was clear that 70% of the delay came from document handoffs with no SLA. The platform eliminated that. Our FDA audit last year was the cleanest in our institute's history.",
    metric: "Site activation time cut from 94 days to 21 days; zero Form 483 observations",
    rating: 5
  },
  {
    name: "Jennifer Park",
    title: "VP of Operations",
    company: "MedDevice Solutions",
    story: "The audit that prompted this project found 45% of our devices with lapsed calibration — that was an unacceptable patient safety exposure. ifBash built the PM scheduling logic so that no due date can pass without an open work order. Mean time to repair went from over four hours to under forty minutes.",
    metric: "100% calibration compliance; MTTR reduced from 4.2 hrs to 38 minutes",
    rating: 5
  },
  {
    name: "Dr. Robert Kim",
    title: "Clinical Director",
    company: "Pacific Medical Network",
    story: "Patient portal adoption was stuck at 22% for three years. ifBash analysed the drop-off points and found most patients never completed the activation email step. The new automated onboarding sequence — sent within 2 hours of registration — pushed activation to 73%. Higher portal engagement directly improved care plan adherence rates.",
    metric: "Portal activation rate up from 22% to 73%; care plan adherence improved 31%",
    rating: 5
  }
];

// Healthcare Solutions
const healthcareSolutions = [
  {
    icon: HeartPulse,
    title: "Patient Care Management",
    description: "Unified care plans shared across all treating facilities in real time, with automated post-discharge follow-up workflows triggered within 2 hours of patient release. A configurable readmission risk model scores every inpatient daily and routes high-risk cases (score ≥ 0.70) to the next available care coordinator automatically.",
    benefits: ["Cross-facility care plan synchronisation", "Automated 48-hr post-discharge outreach", "Real-time readmission risk scoring"]
  },
  {
    icon: TestTube2,
    title: "Clinical Trial Management",
    description: "Centralised trial operations hub connecting CTMS, eTMF, and EDC systems to eliminate re-keying between platforms. Protocol deviation alerts fire the same day a deviation is recorded. Site activation checklists enforce step-by-step SLA tracking, and data-query resolution workflows cut manual close-out effort by an average of 8 weeks per trial.",
    benefits: ["Same-day protocol deviation alerting", "SLA-enforced site activation", "Automated CTMS–EDC reconciliation"]
  },
  {
    icon: Stethoscope,
    title: "Medical Device Lifecycle",
    description: "IoT-connected condition monitoring on capital equipment feeds into an automated PM scheduling engine that generates work orders 30 days before due dates and closes them only after completion is confirmed. Technician dispatch routing selects the nearest qualified engineer targeting a response SLA of under 45 minutes for critical devices.",
    benefits: ["IoT condition monitoring integration", "30-day advance PM work-order generation", "Sub-45-minute critical device dispatch"]
  },
  {
    icon: Brain,
    title: "Healthcare Analytics & AI",
    description: "Machine-learning models built on historical EHR and claims data identify patients at risk of deterioration, avoidable admissions, or chronic condition gaps 30–90 days before clinical intervention is typically triggered. Population health dashboards segment patients by payer, diagnosis, and risk tier, enabling proactive outreach prioritisation by care team.",
    benefits: ["30–90-day predictive deterioration scoring", "Population risk segmentation by payer and diagnosis", "Care gap identification and automated outreach queuing"]
  },
  {
    icon: Shield,
    title: "Healthcare Compliance & Security",
    description: "HIPAA-aligned access controls enforce role-based data visibility so clinicians see only the patient records their current assignment authorises. Automated audit logs capture every PHI access event and generate HIPAA breach-risk assessments within 1 hour of any anomalous access pattern. Business Associate Agreement workflows track third-party vendor compliance annually.",
    benefits: ["Role-based PHI access with automated audit logs", "1-hour anomalous access alerting", "Annual BAA renewal workflow enforcement"]
  },
  {
    icon: Users,
    title: "Patient Experience Management",
    description: "Automated patient portal onboarding emails sent within 2 hours of registration, with a 3-step activation sequence that has lifted average activation rates from below 30% to above 70% across implementations. Post-visit HCAHPS surveys trigger automatically at 48 hours and 7 days; responses below threshold scores route instantly to the patient relations team.",
    benefits: ["2-hour post-registration portal onboarding", "Automated HCAHPS survey triggering at 48 hrs and 7 days", "Sub-threshold score routing to patient relations"]
  }
];

// Healthcare Metrics
const healthcareMetrics = [
  {
    title: "Readmission Reduction Rate",
    description: "Average reduction in 30-day readmissions using predictive risk scoring and automated follow-up workflows",
    stat: "87% Reduction",
    icon: HeartPulse
  },
  {
    title: "HCAHPS Score Improvement",
    description: "Average improvement in HCAHPS care coordination domain scores, measured 6 months post-implementation",
    stat: "43 Points Higher",
    icon: Award
  },
  {
    title: "Healthcare Cost Savings",
    description: "Avoided costs from reduced readmissions, preventable ER visits, and streamlined care coordination in year one",
    stat: "$97M Avoided",
    icon: DollarSign
  },
  {
    title: "PM Compliance Rate",
    description: "On-time preventive maintenance completion rate for medical devices after automated scheduling and SLA enforcement",
    stat: "99.1% On-Time",
    icon: Heart
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Healthcare Assessment & Planning",
    duration: "Week 1–4",
    activities: ["Clinical workflow analysis", "Patient journey mapping", "Compliance requirements review", "Integration planning", "Security assessment"],
    icon: Search
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5–14",
    activities: ["ServiceNow healthcare setup", "Clinical system integration", "Patient portal development", "Workflow automation", "Compliance implementation"],
    icon: Settings
  },
  {
    phase: "Testing & Validation",
    duration: "Week 15–18",
    activities: ["Clinical testing", "Patient experience validation", "Compliance verification", "Security testing", "Staff training"],
    icon: CheckCircle
  },
  {
    phase: "Deployment & Optimisation",
    duration: "Week 19–22",
    activities: ["Production deployment", "Patient onboarding", "Clinical team training", "Performance monitoring", "Continuous improvement"],
    icon: Rocket
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow improve patient care coordination?",
    answer: "ServiceNow Care Management creates a single shared care plan visible to every treating clinician regardless of facility. Automated post-discharge workflows trigger within 2 hours of patient release — not the next business day — and a readmission risk model scores every inpatient daily, routing anyone above a 0.70 risk threshold to a care coordinator automatically. The result in our reference implementations has been 30-day readmission rates dropping from the mid-30% range to below 5% within 6 months of go-live."
  },
  {
    question: "What clinical trial management capabilities does ServiceNow provide?",
    answer: "ServiceNow integrates with your existing CTMS, eTMF, and EDC tools to eliminate the re-keying of data between systems — the leading source of data-query backlogs. Protocol deviation alerts fire the same day a deviation is captured, rather than surfacing in monthly reviews. Site activation checklists enforce each approval step with SLA timers, and the platform auto-escalates to the sponsor team when a step is 3 or more days overdue. Most clients reduce average site activation time by more than 60% within the first trial cycle."
  },
  {
    question: "How can ServiceNow support medical device lifecycle management?",
    answer: "ServiceNow generates PM work orders automatically 30 days before each device's due date and closes them only after a qualified technician has confirmed completion — the system does not accept self-certification. IoT-connected devices stream condition data continuously; anomalies above configurable thresholds create unplanned maintenance tickets in real time. For critical devices, the dispatch engine routes the nearest qualified technician and targets a response SLA of under 45 minutes. Calibration records are maintained digitally, making audit preparation a report rather than a manual file search."
  },
  {
    question: "What HIPAA compliance features are included?",
    answer: "Role-based access controls restrict every user to the minimum PHI required for their current assignment — a clinician not assigned to a patient cannot pull that patient's record, and every access attempt is logged. Any access pattern that deviates from a user's established baseline triggers an automated risk assessment within 1 hour, with notification to your Privacy Officer. Business Associate Agreement workflows track all third-party vendor agreements and send renewal reminders 90 days before expiry. Breach notification workflows are pre-built to meet the 60-day HHS reporting deadline."
  },
  {
    question: "How does ServiceNow integrate with existing healthcare systems?",
    answer: "We have pre-built integrations for Epic, Cerner, Oracle Health, Meditech, and major laboratory and imaging platforms, using HL7 FHIR R4 APIs as the data exchange standard. Integration scoping takes place in Week 1 of our Healthcare Assessment phase; most EHR connections are live by Week 10. We do not require your team to replace existing clinical systems — ServiceNow sits above them as the workflow and coordination layer, consuming and surfacing data without duplicating clinical records."
  },
  {
    question: "What ROI can healthcare organizations expect from ServiceNow?",
    answer: "ROI depends on your starting metrics, but our benchmarks from completed implementations give specific reference points: a 12-hospital network saw $97M in avoided readmission costs in Year 1; a research institute with 45 active trials reduced its portfolio cost-per-patient by 38% through protocol deviation reduction; and a 14-site medical device operator eliminated $67M in equipment replacement costs over 3 years. Most implementations reach positive ROI between months 9 and 14 post-go-live. We build an ROI projection tied to your actual current-state metrics before you commit to a programme."
  },
  {
    question: "How does ServiceNow support population health management?",
    answer: "The population health module ingests claims, EHR, and social determinants data to stratify your patient panel by risk tier, payer, and chronic condition. Patients in the highest risk decile who have not had a preventive touch-point in 90 days are automatically queued for outreach — your care team sees prioritised worklists rather than raw data. Care gap logic is configurable by payer contract: if a HEDIS measure requires a mammogram by a certain date, patients approaching that date are surfaced to their assigned coordinator 45 days in advance."
  },
  {
    question: "What training and support is provided for healthcare implementations?",
    answer: "Every healthcare implementation includes role-specific training sessions: clinical coordinator workflows, biomedical technician work-order management, compliance officer audit tools, and system administrator configuration guides. Training runs in parallel with Weeks 15–18 of our implementation schedule using a test environment loaded with de-identified data. Post go-live, we provide a 90-day hypercare period with a dedicated support engineer available within 4 business hours, followed by our standard 24/7 platform monitoring SLA with P1 response in under 30 minutes."
  }
];

export default function HealthcareLifeSciences() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const accentColor = '#dc2626';
  const accentGradient = 'linear-gradient(135deg, #dc2626, #e11d48)';
  const accentShadow = 'rgba(220,38,38,0.3)';
  const accentPing = 'rgba(220,38,38,1)';

  const hubNodes = [
    { label: 'Patient', sub: 'Portal', angle: 0, color: '#dc2626' },
    { label: 'Care Team', sub: 'Coordination', angle: 60, color: '#e11d48' },
    { label: 'Lab & Imaging', sub: 'Results', angle: 120, color: '#7c3aed' },
    { label: 'Pharmacy', sub: 'Medication', angle: 180, color: '#0284c7' },
    { label: 'Discharge', sub: 'Planning', angle: 240, color: '#059669' },
    { label: 'Compliance', sub: 'HIPAA', angle: 300, color: '#d97706' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />

      {/* Floating CTA */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          style={{ background: accentGradient, boxShadow: `0 8px 24px ${accentShadow}` }}
          aria-label="Free Healthcare Consultation"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">
            Free Consultation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: accentPing }} />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px" style={{ background: accentColor }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: accentColor }}>Healthcare &amp; Life Sciences</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  87% fewer<br />
                  <span style={{ color: accentColor }}>readmissions.</span><br />
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Starting week one.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  Patient-centered ServiceNow workflows built for HIPAA compliance.
                  Unified care plans across all facilities. Automated post-discharge
                  outreach. Predictive readmission risk scoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                    style={{ background: accentGradient, boxShadow: `0 8px 24px ${accentShadow}` }}
                  >
                    Transform Healthcare Operations <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-red-400 text-gray-700 hover:text-red-600 font-semibold rounded-xl transition-colors text-sm sm:text-base"
                  >
                    See Client Results
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                  {[
                    { value: '87%', label: 'Readmission reduction', sub: 'avg across implementations' },
                    { value: '$97M', label: 'Year-1 cost savings', sub: 'avoided readmission costs' },
                    { value: '99.1%', label: 'PM on-time rate', sub: 'medical device compliance' },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">{s.value}</div>
                      <div className="text-sm font-semibold text-gray-700 mt-0.5">{s.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: patient care hub visual */}
              <div className="relative hidden lg:flex items-center justify-center py-8">
                <div className="relative z-10 w-28 h-28 rounded-2xl border-2 bg-white shadow-xl flex flex-col items-center justify-center" style={{ borderColor: accentColor, boxShadow: `0 0 40px rgba(220,38,38,0.2)` }}>
                  <HeartPulse className="h-8 w-8 mb-1" style={{ color: accentColor }} />
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Care Hub</div>
                  <div className="absolute inset-0 rounded-2xl animate-ping opacity-[0.08]" style={{ background: accentPing }} />
                </div>
                <div className="absolute w-72 h-72 rounded-full border border-red-100" />
                <div className="absolute w-64 h-64 rounded-full border border-red-50" />
                {hubNodes.map(({ label, sub, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 128;
                  return (
                    <div key={i}
                      className="absolute flex flex-col items-center justify-center w-16 h-16 rounded-xl border bg-white shadow-md text-center"
                      style={{ transform: `translate(${Math.cos(rad) * r}px, ${Math.sin(rad) * r}px)`, borderColor: `${color}33`, boxShadow: `0 4px 16px ${color}22` }}
                    >
                      <div className="text-[10px] font-bold leading-tight" style={{ color }}>{label}</div>
                      <div className="text-[9px] text-gray-400">{sub}</div>
                    </div>
                  );
                })}
                <svg className="absolute pointer-events-none" width="320" height="320" viewBox="-160 -160 320 320" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return <line key={i} x1={0} y1={0} x2={Math.cos(rad) * 128} y2={Math.sin(rad) * 128} stroke={accentColor} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />;
                  })}
                </svg>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">HIPAA-compliant · HL7 FHIR R4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-red-400" />
                <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">Solutions</span>
                <span className="inline-block w-8 h-px bg-red-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Healthcare Solutions <span className="text-red-600">That Save Lives</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Purpose-built ServiceNow workflows for every dimension of healthcare delivery — from care coordination to device compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareSolutions.map((solution, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: accentGradient }}>
                    <solution.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{solution.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{solution.description}</p>
                  <div className="space-y-1.5">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="h-3 w-3 text-red-500 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METRICS STRIP ── */}
        <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f87171 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthcareMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <metric.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.stat}</div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">{metric.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-red-400" />
                <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">Client Results</span>
                <span className="inline-block w-8 h-px bg-red-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Healthcare Success <span className="text-red-600">Stories</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Real outcomes from healthcare leaders who transformed operations with ServiceNow.
              </p>
            </div>
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {caseStudies.map((study, i) => (
                <button key={i} onClick={() => setActiveCase(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCase === i ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  style={activeCase === i ? { background: accentGradient } : {}}
                >
                  {study.client}
                </button>
              ))}
            </div>
            {caseStudies.map((study, i) => (
              activeCase === i && (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-start bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
                  <div>
                    <div className="flex gap-2 mb-6 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">{study.industry}</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">{study.timeline}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Challenge</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Solution</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white rounded-xl border border-red-100">
                      <Quote className="h-5 w-5 text-red-400 mb-2" />
                      <p className="text-gray-700 text-sm italic leading-relaxed">"{study.testimonial}"</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">Results</div>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-green-100 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* ── IMPLEMENTATION METHODOLOGY ── */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-red-400" />
                <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">Methodology</span>
                <span className="inline-block w-8 h-px bg-red-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">The Healthcare Implementation Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                A four-phase delivery model built around HIPAA compliance and clinical workflow requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent z-0" />
              {implementationApproach.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl p-px shadow-lg transition-transform group-hover:-translate-y-1" style={{ background: accentGradient }}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="mt-4 text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {step.duration}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-3">{step.phase}</h3>
                    <ul className="space-y-2">
                      {step.activities.slice(0, 4).map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                          <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f87171 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-red-400" />
                <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span>
                <span className="inline-block w-8 h-px bg-red-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Healthcare Leaders <span className="text-red-400">Discovered</span>
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="p-8 sm:p-10 border border-white/5 bg-white/[0.03] rounded-2xl">
                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                            <HeartPulse className="h-6 w-6 text-red-400" />
                          </div>
                          <div>
                            <div className="font-bold text-white">{story.name}</div>
                            <div className="text-sm text-slate-400">{story.title}{story.company ? `, ${story.company}` : ''}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-red-400/50 mb-3" />
                        <p className="text-slate-300 leading-relaxed mb-6">{story.story}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                          <Activity className="h-4 w-4 text-red-400 flex-shrink-0" />
                          <span className="text-sm font-semibold text-red-300">{story.metric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {clientStories.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-6 bg-red-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-red-400" />
                <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">FAQ</span>
                <span className="inline-block w-8 h-px bg-red-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Specific answers about ServiceNow for healthcare — not boilerplate.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden hover:border-red-200 transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 pr-8 text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-red-500 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f87171 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-red-400" />
              <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">Get Started</span>
              <span className="inline-block w-8 h-px bg-red-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to cut readmissions<br />
              <span className="text-red-400">by 87%?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join healthcare leaders who have saved $97M in year-one costs.
              Schedule a free consultation and we'll map the specific workflow gaps
              in your current care coordination process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-base"
                style={{ background: accentGradient, boxShadow: '0 12px 32px rgba(220,38,38,0.4)' }}
              >
                Schedule Your Healthcare Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-colors text-base"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
