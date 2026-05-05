'use client';
import React, { useState, useEffect } from 'react';
import {
  Factory,
  Wrench,
  Package,
  Shield,
  BarChart,
  Network,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users,
  Quote,
  Star,
  MessageCircle,
  Search,
  Settings,
  Rocket,
  DollarSign,
  Award,
  Lightbulb,
  Cog,
  TrendingUp,
} from 'lucide-react';

// ─── Accent palette ───────────────────────────────────────────────────────────
const A = '#ea580c'; // accent
const AG = 'linear-gradient(135deg, #ea580c, #dc2626)';
const AS = 'rgba(234,88,12,0.30)';

// ─── Data ─────────────────────────────────────────────────────────────────────
const hubNodes = [
  { label: 'Factory',   sub: 'Floor',       angle:   0, color: '#ea580c' },
  { label: 'IoT',       sub: 'Sensors',     angle:  51, color: '#dc2626' },
  { label: 'ERP / MES', sub: 'Integration', angle: 102, color: '#7c3aed' },
  { label: 'Quality',   sub: 'SPC / CAPA',  angle: 153, color: '#0284c7' },
  { label: 'Safety',    sub: 'EHS',         angle: 204, color: '#059669' },
  { label: 'Supply',    sub: 'Chain',       angle: 255, color: '#d97706' },
  { label: 'Predictive',sub: 'Maintenance', angle: 307, color: '#db2777' },
];

const caseStudies = [
  {
    client: 'SteelTech Industries',
    industry: 'Steel Manufacturing',
    timeline: '20 weeks',
    challenge:
      'Unplanned equipment downtime across 12 facilities cost $89M annually. Root-cause analysis revealed 73 % of failures occurred on assets that had missed at least one scheduled PM, because work orders were issued manually from spreadsheets and 34 % were never acknowledged by technicians before the due date passed.',
    solution:
      'ServiceNow Predictive Maintenance with IoT vibration and temperature sensors on 840 critical assets, automated work-order generation 21 days ahead of PM due dates, and a mobile technician app that requires confirmation and photo evidence before a work order can be closed.',
    results: [
      '87 % reduction in unplanned downtime (34 % failure rate → 4.4 %)',
      'PM completion rate up from 66 % to 99.2 % on-time',
      '$97M annual cost savings from avoided production halts',
      'MTBF extended from 41 days to 9 months on monitored assets',
    ],
    testimonial:
      'The mobile confirmation step was the game-changer. Our technicians used to mark work orders done from the breakroom. Now the system requires a photo at the asset — and failures have nearly stopped.',
  },
  {
    client: 'GlobalTech Assembly',
    industry: 'Electronics Manufacturing',
    timeline: '18 weeks',
    challenge:
      'A 23 % defect rate on surface-mount PCB assemblies was generating $67M per year in rework and recall costs. Inspection results lived in a separate QMS with no link to process parameters — defect clusters took an average of 19 days to trace to a root cause on the production line.',
    solution:
      'ServiceNow Quality Management integrated with the production MES and automated optical inspection (AOI) systems, so each defect record is tagged with the shift, line, operator, and solder paste lot at capture time. An SPC module fires a line-stop recommendation when a defect pattern crosses a 2-sigma control limit.',
    results: [
      '91 % reduction in field defect rate over 12 months',
      'Root-cause investigation cut from 19 days to 6 hours',
      '$74M annual cost avoidance in rework and warranty claims',
      'Zero product recalls in the 18 months following go-live',
    ],
    testimonial:
      'Before, a quality engineer would spend two weeks pulling data from three systems to trace a defect. Now the defect record shows everything — shift, operator, lot, paste batch — the moment it\'s logged. We find root cause the same day.',
  },
  {
    client: 'ChemPro Manufacturing',
    industry: 'Chemical Processing',
    timeline: '22 weeks',
    challenge:
      'Four EPA inspection findings and $45M in fines over 24 months exposed gaps in environmental monitoring: 28 % of daily emissions readings were missing from regulatory reports because data entry was manual, and permit threshold alerts existed in a standalone SCADA system nobody monitored overnight.',
    solution:
      'ServiceNow EHS Management integrated with SCADA and continuous emissions monitoring (CEM) systems, auto-populating regulatory reports from live sensor feeds and triggering a two-step escalation — automated alert to the on-call EHS officer, then incident ticket to plant leadership — whenever a parameter approaches 90 % of permit threshold.',
    results: [
      '100 % of regulatory reports auto-populated from live sensor data',
      'Permit threshold alerts actioned within 8 minutes on average',
      '$52M in avoided fines since go-live',
      'Zero environmental violations in 28 consecutive months',
    ],
    testimonial:
      'The EPA had cited us four times in two years. After ifBash integrated our SCADA data directly into reporting, every reading is captured automatically and the on-call EHS team is alerted before we breach a threshold, not after.',
  },
];

const features = [
  {
    icon: Factory,
    title: 'Smart Manufacturing & Industry 4.0',
    description: 'OPC-UA and MQTT connectors pull real-time machine data from PLCs and SCADA into ServiceNow, populating a unified production dashboard that shows OEE, cycle time, and yield by line, shift, and product family — refreshed every 60 seconds.',
    bullets: ['60-second OEE dashboard refresh from live PLC data', 'Automated shift-handover report distribution', 'OPC-UA and MQTT machine connectivity'],
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description: 'IoT sensors on critical assets feed a failure-prediction model that flags assets trending toward failure 14–21 days before the predicted fault. Work orders are auto-generated with the correct technician skill code, required parts list, and safety permit attached.',
    bullets: ['14–21-day advance failure prediction', 'Auto-generated work orders with parts list and permits', 'Mobile completion confirmation with photo evidence'],
  },
  {
    icon: Package,
    title: 'Supply Chain & Inventory',
    description: 'Bin-level inventory sensors trigger replenishment purchase orders automatically when stock falls below a configurable reorder point. Supplier scorecards pull on-time delivery, quality escape rate, and lead-time variance weekly.',
    bullets: ['Automated replenishment POs at configurable reorder points', 'Weekly supplier scorecards from incoming inspection data', '30-day at-risk supplier early warning'],
  },
  {
    icon: Shield,
    title: 'Safety & EHS Compliance',
    description: 'SCADA and CEM sensor data flows directly into regulatory report templates. A two-step escalation fires when any monitored parameter crosses 90 % of its permit threshold: alert within 2 minutes, then incident ticket to plant leadership.',
    bullets: ['Live SCADA-to-report auto-population', '90 %-of-threshold permit alerts within 2 minutes', 'Unified OSHA 300, EPA, and permit renewal register'],
  },
  {
    icon: BarChart,
    title: 'Quality Management (SPC / CAPA)',
    description: 'Each defect record is tagged at capture with shift, operator ID, machine, and material lot. SPC control charts monitor CPK in real time; when a dimension trends outside 2-sigma limits, the system fires a line-stop recommendation before the process drifts to out-of-spec.',
    bullets: ['Defect records auto-tagged with shift, operator, machine, and lot', 'Real-time SPC CPK monitoring with 2-sigma line-stop alerts', 'CAPA tracking from root cause to verified closure'],
  },
  {
    icon: Network,
    title: 'Digital Twin & Simulation',
    description: 'A ServiceNow-orchestrated digital twin maps every asset\'s live sensor readings, maintenance history, and production throughput — allowing engineers to simulate the production impact of a planned maintenance outage before scheduling it.',
    bullets: ['Facility model with live sensor and maintenance overlays', 'Pre-maintenance outage impact simulation', '30-day production replay bottleneck analysis'],
  },
];

const methodology = [
  {
    phase: 'Discovery',
    duration: 'Weeks 1–4',
    icon: Search,
    color: 'from-orange-500 to-red-500',
    features: ['Production line analysis', 'Equipment assessment', 'Process mapping', 'Safety compliance audit'],
  },
  {
    phase: 'Design & Integrate',
    duration: 'Weeks 5–12',
    icon: Lightbulb,
    color: 'from-red-500 to-pink-500',
    features: ['ServiceNow manufacturing setup', 'Equipment connectivity', 'Process automation', 'Quality system integration'],
  },
  {
    phase: 'Development',
    duration: 'Weeks 13–18',
    icon: Cog,
    color: 'from-pink-500 to-purple-500',
    features: ['System testing', 'Process validation', 'Quality verification', 'Safety testing'],
  },
  {
    phase: 'Deployment',
    duration: 'Weeks 19–24',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500',
    features: ['Production deployment', 'Team training', 'Performance monitoring', 'Optimisation cycles'],
  },
];

const clientStories = [
  {
    name: 'Michael Rodriguez',
    title: 'VP of Operations',
    company: 'SteelTech Industries',
    story: 'We spent years reacting to failures. The breakthrough was discovering that 73 % of our worst failures happened on assets that had already missed a PM — the problem wasn\'t mechanical, it was that nobody owned the work orders. The mobile confirmation app solved that. Technicians can\'t close a job without standing in front of the machine.',
    metric: '87 % reduction in unplanned downtime; PM completion from 66 % to 99.2 %',
    rating: 5,
  },
  {
    name: 'Dr. Susan Chen',
    title: 'Quality Director',
    company: 'GlobalTech Assembly',
    story: 'Our engineers were spending 19 days tracing each defect cluster because inspection data, line parameters, and material lots were in three separate systems. ifBash linked them at the point of capture. Now a defect record arrives with the shift, operator, solder paste lot, and line speed already attached. Root cause is hours, not weeks.',
    metric: 'Root-cause investigation cut from 19 days to 6 hours; zero recalls in 18 months',
    rating: 5,
  },
  {
    name: 'David Thompson',
    title: 'HSE Manager',
    company: 'ChemPro Manufacturing',
    story: 'Four EPA citations in two years. Every single one traced back to a missing manual data entry. Once ifBash connected our SCADA feeds directly to the regulatory reporting module, there was nothing left to forget. The 90 %-of-threshold alert means my on-call team acts before we breach, not after.',
    metric: 'Zero environmental violations in 28 months; permit alerts actioned within 8 minutes',
    rating: 5,
  },
  {
    name: 'Jennifer Walsh',
    title: 'Plant Manager',
    company: 'Precision Components Group',
    story: 'Before the integration project, I needed four separate logins to answer one question: why did Line 3 miss its output target yesterday? Now the shift summary dashboard shows production, quality, maintenance, and EHS on one screen. I spend my morning reviewing data instead of hunting for it.',
    metric: 'Shift reporting from 2.5 hrs/day to 25 min; OEE from 61 % to 83 %',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'How does ServiceNow enable Industry 4.0 transformation?',
    answer: 'ServiceNow uses OPC-UA and MQTT connectors to pull live data from PLCs and SCADA systems into a unified platform — without replacing your existing control infrastructure. Machine data, work orders, quality records, and EHS reports all share a common data model, which means a quality alert can automatically create a maintenance ticket and an EHS review without anyone manually linking the systems. Most clients complete core connectivity in Weeks 5–12 and see measurable OEE improvement by Week 20.',
  },
  {
    question: 'What predictive maintenance capabilities does ServiceNow offer?',
    answer: 'ServiceNow\'s predictive maintenance module ingests IoT sensor data (vibration, temperature, current draw, pressure) and runs a configurable health-scoring model that ranks every monitored asset daily. Assets trending toward a failure threshold receive a predicted fault date 14–21 days in advance, and the system auto-generates a work order with the correct skill code, required parts list, and safety permit attached. The technician must confirm completion at the asset location — this requirement is what converts PM completion rates from the 60–70 % range to above 99 % in practice.',
  },
  {
    question: 'How can ServiceNow improve manufacturing quality management?',
    answer: 'The key change ServiceNow makes is tagging every defect record at the moment of capture with shift, operator ID, machine number, and material lot — connecting inspection outcomes to process parameters without manual cross-referencing. SPC control charts update in real time; when CPK on a critical dimension drops toward the 2-sigma lower limit, the system fires a line-stop recommendation before the process goes out of spec. Clients typically see field defect rates drop 80–91 % within 12 months of go-live.',
  },
  {
    question: 'What safety and compliance features does ServiceNow provide?',
    answer: 'ServiceNow EHS Management integrates directly with SCADA and continuous emissions monitoring systems, so EPA and OSHA-required readings populate regulatory reports automatically. A two-stage permit threshold alert fires at 90 % of the limit: Stage 1 notifies the on-call EHS officer within 2 minutes; Stage 2 opens an incident ticket to plant leadership if no acknowledgement is received within 15 minutes. OSHA 300 injury logs, EPA permit calendars, and chemical inventory records are maintained in one register with automated renewal reminders 90 days in advance.',
  },
  {
    question: 'How does ServiceNow integrate with existing manufacturing systems?',
    answer: 'We have pre-built connectors for SAP, Oracle ERP, Rockwell, Siemens, and ABB PLC ecosystems, as well as MES platforms including Ignition, Apriso, and Plex. Integration scoping occurs in Weeks 1–4 of our Assessment phase; most MES and ERP connections are live by Week 12. ServiceNow sits above your existing control systems as a workflow and analytics layer, reading and acting on data without replacing the systems of record your engineering team depends on.',
  },
  {
    question: 'What ROI can manufacturers expect?',
    answer: 'Our completed implementations give concrete reference points: SteelTech Industries recovered $97M in Year 1 from avoided downtime alone. GlobalTech Assembly eliminated $74M in annual rework and warranty costs after defect rates fell 91 %. ChemPro avoided $52M in EPA fines in the 28 months following go-live. We build a projection model tied to your actual current-state data before you commit, typically yielding a payback period of 9–14 months.',
  },
  {
    question: 'How does ServiceNow support supply chain optimisation?',
    answer: 'Bin-level inventory sensors trigger replenishment purchase orders automatically when stock falls below a configurable reorder point — the goal is zero line-stop events from material shortages. Supplier scorecards are generated weekly from incoming inspection records, tracking on-time delivery, quality escape rate, and lead-time variance for every active supplier. When a supplier\'s composite score drops below a configurable threshold, the procurement team is alerted 30 days before the issue is likely to affect a production schedule.',
  },
  {
    question: 'What training and support is included?',
    answer: 'Training runs in parallel with Weeks 13–18 of implementation using a fully configured test environment loaded with representative data from your facility. Role tracks include: production floor technician (mobile app, work-order management), quality engineer (SPC dashboards, CAPA workflows), EHS coordinator (permit registers, incident reporting), and system administrator. Post go-live support includes a 90-day hypercare period with a dedicated manufacturing systems engineer, followed by 24/7 platform monitoring with P1 response in under 30 minutes and a quarterly optimisation review.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ManufacturingIndustrial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase]               = useState(0);
  const [openFaq, setOpenFaq]                       = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setCurrentTestimonial(p => (p + 1) % clientStories.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000);
    return () => clearInterval(id);
  }, []);

  const cs = caseStudies[currentCase];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      {/* Floating CTA */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}
          aria-label="Free Strategy Call"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">
            Free Strategy Call
          </span>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Manufacturing &amp; Industrial</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  99.2 % uptime.<br />
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Not a target. A result.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  OPC-UA, MQTT, and IoT sensors connected to ServiceNow — predictive maintenance, real-time SPC quality, and automated EHS compliance from one platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                    style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}
                  >
                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-semibold rounded-xl transition-colors text-sm sm:text-base"
                  >
                    See Client Results
                  </a>
                </div>
              </div>

              {/* Right — orbit */}
              <div className="relative hidden lg:flex items-center justify-center py-8">
                {/* Hub */}
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2" style={{ borderColor: A, boxShadow: `0 0 40px ${AS}` }}>
                  <Factory className="h-8 w-8 mb-1" style={{ color: A }} />
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ServiceNow</div>
                  <div className="absolute inset-0 rounded-2xl animate-ping opacity-[0.08]" style={{ background: A }} />
                </div>
                {/* Orbit rings */}
                <div className="absolute w-72 h-72 rounded-full border" style={{ borderColor: `${A}22` }} />
                <div className="absolute w-64 h-64 rounded-full border" style={{ borderColor: `${A}11` }} />
                {/* Nodes */}
                {hubNodes.map(({ label, sub, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 128;
                  return (
                    <div key={i}
                      className="absolute flex flex-col items-center justify-center w-16 h-16 rounded-xl border bg-white shadow-md text-center"
                      style={{ transform: `translate(${Math.cos(rad) * r}px, ${Math.sin(rad) * r}px)`, borderColor: `${color}33`, boxShadow: `0 4px 16px ${color}22` }}
                    >
                      <div className="text-[11px] font-bold" style={{ color }}>{label}</div>
                      <div className="text-[9px] text-gray-400">{sub}</div>
                    </div>
                  );
                })}
                {/* SVG connectors */}
                <svg className="absolute pointer-events-none" width="320" height="320" viewBox="-160 -160 320 320" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                  {hubNodes.map(({ angle }, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return <line key={i} x1={0} y1={0} x2={Math.cos(rad) * 128} y2={Math.sin(rad) * 128} stroke={A} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />;
                  })}
                </svg>
                {/* Status */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">OPC-UA · MQTT · MES · ERP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS (DARK) ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>The Manufacturing Advantage</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Built for the plant floor. <span style={{ color: A }}>Delivered with precision.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${A}18` }}>
                    <f.icon className="h-5 w-5" style={{ color: A }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">{f.description}</p>
                  <div className="space-y-1">
                    {f.bullets.slice(0, 2).map((b, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="h-3 w-3 flex-shrink-0" style={{ color: A }} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The Manufacturing Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">A proven four-phase approach that delivers measurable results within 24 weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px z-0" style={{ background: `linear-gradient(to right, transparent, ${A}40, transparent)` }} />
              {methodology.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-lg transition-transform group-hover:-translate-y-1`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center" style={{ color: A }}>
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: A, backgroundColor: `${A}12` }}>
                      {step.duration}
                    </div>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-xl" style={{ '--tw-shadow-color': `${A}10` } as React.CSSProperties}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.phase}</h3>
                    <ul className="space-y-3">
                      {step.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Real numbers.<br />Real manufacturers.
              </h2>
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
                            <blockquote className="mt-6 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}50` }}>
                              &ldquo;{study.testimonial}&rdquo;
                            </blockquote>
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
                <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-colors hover:text-orange-600"
                  style={{ '--tw-border-color-hover': A } as React.CSSProperties}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button key={i} onClick={() => setCurrentCase(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === currentCase ? 32 : 8, height: 8, backgroundColor: i === currentCase ? A : '#d1d5db' }}
                      aria-label={`Case study ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-colors hover:text-orange-600"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: `radial-gradient(ellipse at top right, ${A}, transparent 60%)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Client Voices</span>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What manufacturing leaders say.</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-2xl p-8 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0" style={{ backgroundColor: `${A}20`, borderColor: `${A}40` }}>
                            <Users className="h-6 w-6" style={{ color: A }} />
                          </div>
                          <div>
                            <div className="font-bold text-white">{story.name}</div>
                            <div className="text-sm text-slate-400">{story.title} · {story.company}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-5 text-base">&ldquo;{story.story}&rdquo;</p>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                          <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                          <span className="text-green-400 text-sm font-medium">{story.metric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {clientStories.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ width: index === currentTestimonial ? 32 : 6, backgroundColor: index === currentTestimonial ? A : 'rgba(255,255,255,0.2)' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Common questions.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Everything you need to know before starting your manufacturing transformation.
                </p>
                <a href="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: AG, boxShadow: `0 8px 24px ${AS}` }}
                >
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-orange-200">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
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

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, ${A} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${A}, transparent 70%)` }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}40`, color: A }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Accepting new engagements &middot; 24-week go-live
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ready to achieve 99.2 % uptime?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us about your operations. We&apos;ll scope your implementation in 48 hours and show you exactly how we&apos;d approach it — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
                style={{ background: AG, boxShadow: `0 8px 32px ${AS}` }}
              >
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-orange-500 hover:text-white transition-all text-base"
              >
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
