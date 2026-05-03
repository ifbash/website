'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  TestTube2,
  Stethoscope,
  Play, 
  Users, 
  Zap, 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Bot, 
  Brain, 
  Workflow, 
  Database, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Globe, 
  Settings, 
  Target, 
  Lightbulb, 
  Rocket, 
  Heart, 
  Building, 
  Factory, 
  HeartPulse, 
  Car, 
  Briefcase, 
  MonitorSmartphone, 
  Quote, 
  Video, 
  FileText, 
  Download, 
  ExternalLink, 
  Timer, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Activity, 
  Cpu, 
  CloudLightning, 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  Layers, 
  Cog, 
  ShoppingBag, 
  Store, 
  Microscope, 
  Music, 
  MessageCircle, 
  Wrench, 
  Clock, 
  Gauge, 
  Network, 
  RefreshCw,        // ✅ Fixed: Replace Sync with RefreshCw
  CloudDownload,    // ✅ Fixed: Replace CloudArrowDown with CloudDownload
  Server,           // ✅ Fixed: Replace ServerStack with Server
  Search, 
  ChevronDown, 
  Wind, 
  Sun, 
  Battery, 
  Fuel, 
  Power, 
  Plug
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
    image: "/images/case-studies/regional-health.jpg",
    testimonial: "ifBash mapped every gap in our discharge process and built workflows that close them automatically. Readmission rates dropped faster than any initiative we'd run in the past decade."
  },
  {
    client: "BioMed Research Institute",
    industry: "Life Sciences Research",
    challenge: "Clinical trial management across 45 concurrent studies used 6 separate tracking systems — protocol deviations averaged 3.2 per study per quarter, site activation took 94 days on average, and manual data queries added 8 weeks to each trial close-out",
    solution: "Unified clinical trial operations platform on ServiceNow with automated protocol deviation alerts, electronic TMF integration, site activation checklists with SLA tracking, and CTMS data reconciliation reducing manual query resolution by eliminating re-keying between systems",
    results: ["78% faster trial completion (avg 94-day site activation → 21 days)", "Protocol deviations down from 3.2 to 0.4 per study per quarter", "$134M savings across active portfolio", "FDA audit with zero Form 483 observations"],
    timeline: "18 weeks rollout",
    image: "/images/case-studies/biomed-research.jpg",
    testimonial: "The platform surfaced protocol deviations the same day they occurred — we used to find them in monthly reviews. That shift alone cut our data-lock time by six weeks per trial."
  },
  {
    client: "MedDevice Solutions",
    industry: "Medical Devices",
    challenge: "2,300 medical devices across 14 clinical sites with 45% missing current calibration records, manual PM scheduling fulfilled only 67% of required intervals, and technician dispatch averaging 4.2 hours from fault detection to arrival",
    solution: "ServiceNow Asset Management with IoT-connected condition monitoring on 1,800 devices, automated PM work-order generation 30 days ahead of due dates, and an on-call dispatch engine that routes the nearest qualified technician within defined response SLAs",
    results: ["91% improvement in on-time PM completion (67% → 99.1%)", "100% of devices with current calibration records", "Mean time to repair reduced from 4.2 hrs to 38 min", "$67M in avoided equipment replacement and downtime costs"],
    timeline: "22 weeks deployment",
    image: "/images/case-studies/meddevice-solutions.jpg",
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
    rating: 5,
    avatar: "/images/testimonials/patricia-williams-cmo.jpg"
  },
  {
    name: "Dr. Michael Chang",
    title: "Research Director",
    company: "BioMed Research Institute",
    story: "We discovered that our site activation delays were entirely process-driven — not regulatory. Once ifBash mapped the bottlenecks, it was clear that 70% of the delay came from document handoffs with no SLA. The platform eliminated that. Our FDA audit last year was the cleanest in our institute's history.",
    metric: "Site activation time cut from 94 days to 21 days; zero Form 483 observations",
    rating: 5,
    avatar: "/images/testimonials/michael-chang-research.jpg"
  },
  {
    name: "Jennifer Park",
    title: "VP of Operations",
    company: "MedDevice Solutions",
    story: "The audit that prompted this project found 45% of our devices with lapsed calibration — that was an unacceptable patient safety exposure. ifBash built the PM scheduling logic so that no due date can pass without an open work order. Mean time to repair went from over four hours to under forty minutes.",
    metric: "100% calibration compliance; MTTR reduced from 4.2 hrs to 38 minutes",
    rating: 5,
    avatar: "/images/testimonials/jennifer-park-ops.jpg"
  },
  {
    name: "Dr. Robert Kim",
    title: "Clinical Director",
    company: "Pacific Medical Network",
    story: "Patient portal adoption was stuck at 22% for three years. ifBash analysed the drop-off points and found most patients never completed the activation email step. The new automated onboarding sequence — sent within 2 hours of registration — pushed activation to 73%. Higher portal engagement directly improved care plan adherence rates.",
    metric: "Portal activation rate up from 22% to 73%; care plan adherence improved 31%",
    rating: 5,
    avatar: "/images/testimonials/robert-kim-clinical.jpg"
  }
];

// Healthcare Solutions
const healthcareSolutions = [
  {
    icon: HeartPulse,
    title: "Patient Care Management",
    description: "Unified care plans shared across all treating facilities in real time, with automated post-discharge follow-up workflows triggered within 2 hours of patient release. A configurable readmission risk model scores every inpatient daily and routes high-risk cases (score ≥ 0.70) to the next available care coordinator automatically.",
    benefits: ["Cross-facility care plan synchronisation", "Automated 48-hr post-discharge outreach", "Real-time readmission risk scoring"],
    gradient: "from-red-500 to-rose-500",
    useCases: ["Discharge planning", "High-risk patient routing", "Care gap closure"]
  },
  {
    icon: TestTube2,
    title: "Clinical Trial Management",
    description: "Centralised trial operations hub connecting CTMS, eTMF, and EDC systems to eliminate re-keying between platforms. Protocol deviation alerts fire the same day a deviation is recorded, site activation checklists enforce step-by-step SLA tracking, and data-query resolution workflows cut manual close-out effort by an average of 8 weeks per trial.",
    benefits: ["Same-day protocol deviation alerting", "SLA-enforced site activation", "Automated CTMS–EDC reconciliation"],
    gradient: "from-rose-500 to-pink-500",
    useCases: ["Site activation", "Protocol compliance", "Regulatory submission"]
  },
  {
    icon: Stethoscope,
    title: "Medical Device Lifecycle",
    description: "IoT-connected condition monitoring on capital equipment feeds into an automated PM scheduling engine that generates work orders 30 days before due dates and closes them only after completion is confirmed. Technician dispatch routing selects the nearest qualified engineer and targets a response SLA of under 45 minutes for critical devices.",
    benefits: ["IoT condition monitoring integration", "30-day advance PM work-order generation", "Sub-45-minute critical device dispatch"],
    gradient: "from-pink-500 to-fuchsia-500",
    useCases: ["Preventive maintenance scheduling", "Calibration compliance", "Technician dispatch"]
  },
  {
    icon: Brain,
    title: "Healthcare Analytics & AI",
    description: "Machine-learning models built on historical EHR and claims data identify patients at risk of deterioration, avoidable admissions, or chronic condition gaps 30–90 days before clinical intervention is typically triggered. Population health dashboards segment patients by payer, diagnosis, and risk tier, enabling proactive outreach prioritisation by care team.",
    benefits: ["30–90-day predictive deterioration scoring", "Population risk segmentation by payer and diagnosis", "Care gap identification and automated outreach queuing"],
    gradient: "from-fuchsia-500 to-purple-500",
    useCases: ["Chronic disease management", "Preventive care prioritisation", "Avoidable admission reduction"]
  },
  {
    icon: Shield,
    title: "Healthcare Compliance & Security",
    description: "HIPAA-aligned access controls enforce role-based data visibility so clinicians see only the patient records their current assignment authorises. Automated audit logs capture every PHI access event and generate HIPAA breach-risk assessments within 1 hour of any anomalous access pattern. Business Associate Agreement workflows track third-party vendor compliance annually.",
    benefits: ["Role-based PHI access with automated audit logs", "1-hour anomalous access alerting", "Annual BAA renewal workflow enforcement"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["HIPAA access control", "Breach risk detection", "Vendor BAA management"]
  },
  {
    icon: Users,
    title: "Patient Experience Management",
    description: "Automated patient portal onboarding emails sent within 2 hours of registration, with a 3-step activation sequence that has lifted average activation rates from below 30% to above 70% across implementations. Post-visit HCAHPS surveys trigger automatically at 48 hours and 7 days; responses below threshold scores route instantly to the patient relations team for follow-up.",
    benefits: ["2-hour post-registration portal onboarding", "Automated HCAHPS survey triggering at 48 hrs and 7 days", "Sub-threshold score routing to patient relations"],
    gradient: "from-violet-500 to-indigo-500",
    useCases: ["Portal activation", "HCAHPS survey management", "Patient relations escalation"]
  }
];

// Healthcare Metrics
const healthcareMetrics = [
  {
    title: "Readmission Reduction Rate",
    description: "Average reduction in 30-day readmissions across healthcare network implementations using predictive risk scoring and automated follow-up workflows",
    stat: "87% Reduction",
    icon: HeartPulse
  },
  {
    title: "HCAHPS Score Improvement",
    description: "Average improvement in HCAHPS care coordination domain scores, measured 6 months post-implementation against pre-implementation baseline",
    stat: "43 Points Higher",
    icon: Award
  },
  {
    title: "Healthcare Cost Savings",
    description: "Avoided costs from reduced readmissions, preventable ER visits, and streamlined care coordination in the first year post-deployment",
    stat: "$97M Avoided",
    icon: DollarSign
  },
  {
    title: "PM Compliance Rate",
    description: "On-time preventive maintenance completion rate for medical devices after automated scheduling and SLA enforcement go live",
    stat: "99.1% On-Time",
    icon: Heart
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Healthcare Assessment & Planning",
    duration: "Week 1-4",
    activities: ["Clinical workflow analysis", "Patient journey mapping", "Compliance requirements review", "Integration planning", "Security assessment"],
    deliverables: ["Healthcare digital strategy", "Clinical workflow optimization", "Compliance framework", "Security architecture"],
    icon: Search,
    color: "from-red-500 to-rose-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-14",
    activities: ["ServiceNow healthcare setup", "Clinical system integration", "Patient portal development", "Workflow automation", "Compliance implementation"],
    deliverables: ["Healthcare platform", "Integrated clinical systems", "Patient portal", "Automated workflows"],
    icon: Settings,
    color: "from-rose-500 to-pink-500"
  },
  {
    phase: "Testing & Validation",
    duration: "Week 15-18",
    activities: ["Clinical testing", "Patient experience validation", "Compliance verification", "Security testing", "Staff training"],
    deliverables: ["Validated healthcare platform", "Compliance certification", "Security validation", "Training materials"],
    icon: CheckCircle,
    color: "from-pink-500 to-fuchsia-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 19-22",
    activities: ["Production deployment", "Patient onboarding", "Clinical team training", "Performance monitoring", "Continuous improvement"],
    deliverables: ["Live healthcare platform", "Trained clinical staff", "Patient access", "Monitoring systems"],
    icon: Rocket,
    color: "from-fuchsia-500 to-purple-500"
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
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
      {/* Fixed Chat Button */}
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <a href="/get-started"
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Healthcare Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Healthcare Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Healthcare Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Heart Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <HeartPulse className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-red-500/90 to-rose-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-rose-700 transition-all duration-300">
                    ✓ 87% Less Readmissions
                  </Badge>
                  <Badge className="bg-gradient-to-r from-rose-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                    ✓ HIPAA Compliant
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-fuchsia-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300">
                    ✓ $97M Savings
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 font-semibold">
                    Healthcare & Life Sciences
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Patient-Centered{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 font-semibold">
                      Innovation
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-red-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform healthcare delivery with <span className="font-semibold text-rose-300">patient-centered care</span>, clinical excellence, and intelligent healthcare operations. Achieve <span className="font-semibold text-pink-300">87% fewer readmissions</span> with <span className="font-semibold text-fuchsia-300">$97M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-red-600/20 via-rose-600/20 to-pink-600/20 hover:from-red-600/30 hover:via-rose-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-red-400/20 hover:border-red-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">87%</div>
                    <div className="text-xs sm:text-sm text-red-100">Less Readmissions</div>
                  </div>
                  <div className="group bg-gradient-to-br from-rose-600/20 via-pink-600/20 to-fuchsia-600/20 hover:from-rose-600/30 hover:via-pink-600/30 hover:to-fuchsia-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-rose-400/20 hover:border-rose-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400">43pts</div>
                    <div className="text-xs sm:text-sm text-rose-100">HCAHPS Gain</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-pink-600/20 via-fuchsia-600/20 to-purple-600/20 hover:from-pink-600/30 hover:via-fuchsia-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">$97M</div>
                    <div className="text-xs sm:text-sm text-pink-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-rose-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Healthcare Operations
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-fuchsia-400 group-hover:text-fuchsia-300" />
                      Watch Healthcare Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-red-500/15 to-rose-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Patient Care Management Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-red-600 to-rose-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">87%</div>
                      <div className="text-xs text-red-200">Less Readmissions</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">$97M</div>
                      <div className="text-xs text-rose-200">Savings</div>
                    </div>
                  </div>
                  
                  {/* Floating Healthcare Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <HeartPulse className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Stethoscope className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-rose-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                  Healthcare Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Save Lives
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of healthcare delivery with intelligent solutions designed for patient-centered care.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {healthcareSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-2 mb-4 sm:mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Healthcare Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {healthcareMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/50 to-yellow-900" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-yellow-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
                  Our Implementation
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                A proven four-phase approach that ensures successful ServiceNow implementation for healthcare operations.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {implementationApproach.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-${step.color.split(' ')[1]}/20 to-${step.color.split(' ')[3]}/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                    <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl opacity-50" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
                          {step.phase}
                        </h3>
                        <ul className="space-y-3">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                                <CheckCircle className="h-3 w-3 text-white group-hover/item:text-white/90 transition-colors duration-200" />
                              </div>
                              <span className="text-sm text-white/80 group-hover:item:text-white transition-colors duration-200">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 hover:from-yellow-700 hover:via-amber-700 hover:to-orange-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Energy Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-pink-600">
                  Healthcare Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how healthcare leaders have transformed their operations with ServiceNow solutions that save lives and improve outcomes.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-rose-500 to-red-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-red-600">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-blue-600">Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-600">Results</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-4 border-l-4 border-rose-500">
                          <Quote className="h-6 w-6 text-rose-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Healthcare Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-rose-600 to-red-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-rose-200">
                          <div className="text-lg font-bold text-rose-600">{study.timeline.split(' ')[0]}</div>
                          <div className="text-xs text-gray-600">Weeks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-rose-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
                  What Healthcare Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-rose-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from healthcare executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <HeartPulse className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-rose-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4 sm:mb-6">
                            {story.story}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-3">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-rose-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-pink-300 font-semibold">{story.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-pink-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-rose-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Healthcare Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for healthcare and life sciences.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-red-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-red-600 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFaq === index && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-8 sm:mt-16">
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-red-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join healthcare leaders saving lives with better care. Get patient-centered solutions that deliver 87% fewer readmissions and $97M savings.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-red-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Healthcare Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 0.75s;
        }

        .delay-150 {
          animation-delay: 1.5s;
        }

        .delay-300 {
          animation-delay: 3s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </>
  );
}
