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
  Plug,
  Beaker
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "GlobalPharma Corp",
    industry: "Pharmaceutical Manufacturing",
    challenge: "Drug development lifecycle averaged 8.5 years, with regulatory submission preparation accounting for 18–24 months of that total. 67% of regulatory delays were caused by incomplete or inconsistent documentation — CTD sections assembled manually from 12 source systems with no version control, leading to 3–5 revision cycles per submission before acceptance",
    solution: "ServiceNow regulatory operations platform with a unified eCTD assembly workspace pulling documents from validated sources with audit-trailed version control, automated completeness checks against FDA and EMA submission checklists before submission, and a regulatory intelligence feed that monitors guideline updates and flags affected active submissions within 48 hours",
    results: ["34% reduction in average development cycle — 8.5 years to 5.6 years", "Regulatory submission revision cycles reduced from 3–5 per submission to 0.8 average", "$1.2B in development cost savings from faster time-to-approval", "100% FDA and EMA submissions accepted at first review in 24-month period post go-live"],
    timeline: "26 weeks implementation",
    image: "/images/case-studies/globalpharma-corp.jpg",
    testimonial: "Submission preparation was taking nearly two years because CTD assembly was a manual exercise across 12 systems. ifBash built the automated assembly workspace. Revision cycles dropped from 3–5 per submission to under one. First-review acceptance became the norm."
  },
  {
    client: "BioTech Innovations",
    industry: "Biotechnology Research",
    challenge: "Research data across 67 active studies lived in a combination of lab notebooks, LIMS, and shared network drives — with no cross-study linkage. Protocol deviations took an average of 11 days to identify because there was no systematic review between weekly team meetings. Cross-site collaboration between 4 global labs required manual file transfers that broke audit trails",
    solution: "ServiceNow research operations hub integrating LIMS, EDC, and eTMF into a single data model with automated cross-study protocol deviation detection (alerts fire within 24 hours of a deviation entry), a global experiment workflow that routes approvals electronically with full audit trail regardless of which site initiates, and a real-time cross-study analytics dashboard linking biomarker, efficacy, and safety data across all active programmes",
    results: ["78% improvement in research throughput measured by protocols completed per quarter", "Protocol deviation identification time cut from 11 days to 18 hours", "$156M in productivity gains from eliminated coordination delays", "Cross-site data sharing with full audit trail replacing manual file transfers"],
    timeline: "20 weeks rollout",
    image: "/images/case-studies/biotech-innovations.jpg",
    testimonial: "A protocol deviation discovered 11 days after the fact is a serious compliance risk. ifBash built automated daily scans that fire within 24 hours. Our deviation backlog — which investigators used to surface at weekly meetings — went to near zero."
  },
  {
    client: "VaccineProduction Inc",
    industry: "Vaccine Manufacturing",
    challenge: "23% batch failure rate in fill-finish operations was traced in root-cause analysis to bioburden exceedances from 4 specific equipment cleaning validation gaps and to operator documentation errors occurring in 31% of executed batch records. $45M in rejected product annually was almost entirely from these two failure modes",
    solution: "ServiceNow manufacturing quality platform with electronic batch records (eBR) replacing paper SOPs, forcing step completion in sequence with mandatory parameter entry before each stage advances. Real-time bioburden trending for the 4 identified equipment items triggers a cleaning re-validation work order automatically when trend data approaches the action limit — 5 days before the limit is typically breached",
    results: ["91% reduction in batch failure rate (23% → 2.1%)", "Operator documentation errors eliminated through eBR mandatory entry", "$52M in annual waste costs eliminated", "Zero regulatory violations in 28 months post go-live"],
    timeline: "24 weeks deployment",
    image: "/images/case-studies/vaccine-production.jpg",
    testimonial: "Paper batch records with optional free-text fields were at the heart of our failure rate. Operators were documenting after the fact from memory. eBR changed that — every step is entered at the moment of execution, in sequence. Batch failures dropped from 23% to just over 2%."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Amanda Foster",
    title: "Chief Scientific Officer",
    company: "GlobalPharma Corp",
    story: "CTD assembly was eating 18–24 months of our development timeline. The root cause was assembling documents manually from 12 validated source systems with no version control — every submission went through 3 to 5 revision cycles before FDA acceptance. ifBash built an automated assembly workspace that runs completeness checks before submission. First-review acceptance became normal rather than exceptional.",
    metric: "Regulatory revision cycles from 3–5 to 0.8 average; development cycle shortened 34%",
    rating: 5,
    avatar: "/images/testimonials/amanda-foster-cso.jpg"
  },
  {
    name: "Dr. Steven Liu",
    title: "Research Director",
    company: "BioTech Innovations",
    story: "We had 67 active studies with protocol deviations discovered at weekly team meetings — sometimes 11 days after the event. That's a compliance exposure. ifBash built automated daily scans that fire an alert within 24 hours of a deviation being entered anywhere in the system. Our QA team's weekly backlog review became a confirmation that everything had already been addressed.",
    metric: "Deviation identification time from 11 days to 18 hours; backlog effectively eliminated",
    rating: 5,
    avatar: "/images/testimonials/steven-liu-research.jpg"
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Quality",
    company: "VaccineProduction Inc",
    story: "Paper batch records let operators document steps after the fact, from memory, in free-text fields. That was the direct cause of 31% of our batch record errors and a major contributor to our 23% failure rate. eBR forces every entry at the point of execution, in sequence, with mandatory fields. You cannot advance to the next step without completing the current one. Batch failures went from 23% to 2.1%.",
    metric: "Batch failure rate from 23% to 2.1%; $52M in annual waste eliminated",
    rating: 5,
    avatar: "/images/testimonials/maria-rodriguez-quality.jpg"
  },
  {
    name: "Dr. Robert Johnson",
    title: "Head of Regulatory Affairs",
    company: "Meridian Life Sciences",
    story: "We received a guideline update from EMA affecting 3 of our active IND programmes and didn't realise it for 6 weeks because nobody was systematically monitoring for changes. ifBash's regulatory intelligence feed checks for guideline updates daily and flags affected submissions within 48 hours. We now act on changes before they become compliance gaps.",
    metric: "Regulatory guideline impact flagged within 48 hours of publication; 6-week blind spots eliminated",
    rating: 5,
    avatar: "/images/testimonials/robert-johnson-regulatory.jpg"
  }
];

// Pharmaceutical Solutions
const pharmaceuticalSolutions = [
  {
    icon: TestTube2,
    title: "Drug Development Lifecycle",
    description: "eCTD assembly workspace pulls documents from validated source systems with version-controlled audit trails — eliminating the manual cross-referencing across 12+ systems that makes regulatory submission preparation take 18–24 months. Automated completeness checks run against FDA and EMA submission checklists before submission; a regulatory intelligence feed monitors guideline updates daily and flags affected active submissions within 48 hours of publication.",
    benefits: ["Automated eCTD assembly from validated sources with audit trails", "Pre-submission completeness checks against FDA and EMA checklists", "48-hour regulatory guideline update flagging for affected submissions"],
    gradient: "from-indigo-500 to-purple-500",
    useCases: ["Regulatory submission preparation", "Guideline change monitoring", "CTD version control"]
  },
  {
    icon: Microscope,
    title: "Research Data Management",
    description: "LIMS, EDC, and eTMF data are unified in a single research operations hub — cross-study analytics link biomarker, efficacy, and safety data across all active programmes without manual data exports. Automated daily protocol deviation scans fire an alert within 24 hours of a deviation entry across any of the connected systems, replacing weekly team-meeting discovery with same-day notification. Global experiment workflows route approvals electronically with full audit trail regardless of which site initiates.",
    benefits: ["Cross-study analytics linking LIMS, EDC, and eTMF without manual exports", "24-hour automated protocol deviation detection and alerting", "Multi-site electronic experiment approval with full audit trail"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["Cross-programme analytics", "Protocol deviation monitoring", "Multi-site workflow coordination"]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance & Quality",
    description: "Electronic batch records enforce step-by-step execution — each stage requires mandatory parameter entry at the point of performance before the workflow advances, preventing the after-the-fact free-text documentation that drives batch record errors. CAPA workflows track corrective actions from root-cause documentation through effectiveness verification, with re-audit scheduled automatically. 21 CFR Part 11 and EU Annex 11 audit trails are maintained automatically for all electronic records.",
    benefits: ["eBR mandatory step entry enforcing real-time documentation", "CAPA tracking to effectiveness verification with scheduled re-audit", "21 CFR Part 11 and EU Annex 11 audit trails on all electronic records"],
    gradient: "from-violet-500 to-fuchsia-500",
    useCases: ["Electronic batch record execution", "CAPA management", "GMP audit readiness"]
  },
  {
    icon: Beaker,
    title: "Manufacturing Operations",
    description: "Real-time bioburden and critical process parameter trending for identified at-risk equipment items fires a cleaning re-validation or preventive maintenance work order when the trend approaches the action limit — typically 3–5 days before the limit is breached. Supply planning integrates with forecasted production schedules to identify API and excipient shortfall risks 90 days in advance, with automated procurement triggers when on-hand stock falls below a configurable safety stock level.",
    benefits: ["Real-time bioburden trending with pre-breach maintenance trigger", "90-day API and excipient shortfall forecasting", "Automated procurement trigger at configurable safety stock level"],
    gradient: "from-fuchsia-500 to-pink-500",
    useCases: ["Fill-finish process monitoring", "Raw material supply assurance", "Equipment cleaning validation tracking"]
  },
  {
    icon: Brain,
    title: "Clinical Trial Management",
    description: "Site activation checklists enforce each approval step with SLA timers and auto-escalate to the sponsor team when a step is 3 or more days overdue — converting 90+ day site activation timelines to under 25 days in practice. Protocol deviation alerts fire the same day a deviation is recorded in the EDC; CTMS and EDC data reconciliation eliminates the manual query resolution that adds 6–8 weeks to every trial close-out.",
    benefits: ["SLA-enforced site activation with 3-day overdue escalation", "Same-day protocol deviation alerting from EDC", "Automated CTMS–EDC reconciliation eliminating manual close-out queries"],
    gradient: "from-pink-500 to-rose-500",
    useCases: ["Site activation management", "Protocol compliance monitoring", "Trial close-out acceleration"]
  },
  {
    icon: Network,
    title: "Supply Chain & Distribution",
    description: "Cold chain monitoring integrates temperature sensor data from logistics partners directly into the supply record — excursions above the validated storage range trigger a quarantine hold and deviation investigation automatically, without waiting for a distribution report to be manually reviewed. Serialisation tracking maps every unit pack to its lot, manufacturing site, and regulatory approval by market, enabling same-day recall scope identification if a quality event is detected post-distribution.",
    benefits: ["Automated cold chain excursion quarantine trigger from sensor data", "Serialisation tracking with same-day recall scope identification", "Temperature deviation investigation workflow auto-launch on excursion"],
    gradient: "from-rose-500 to-red-500",
    useCases: ["Cold chain compliance", "Product serialisation", "Recall scope management"]
  }
];

// Pharmaceutical Metrics
const pharmaceuticalMetrics = [
  {
    title: "Development Speed Improvement",
    description: "Average acceleration in drug development and time-to-market",
    stat: "34% Faster",
    icon: Rocket
  },
  {
    title: "Regulatory Compliance Rate",
    description: "Average improvement in regulatory compliance and approval success",
    stat: "100% Compliant",
    icon: CheckCircle
  },
  {
    title: "Research Efficiency Gains", 
    description: "Average improvement in research productivity and data analysis speed",
    stat: "78% Efficient",
    icon: Brain
  },
  {
    title: "Cost Reduction Achievement",
    description: "Average cost savings through pharmaceutical process optimization",
    stat: "$1.2B Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Pharmaceutical Assessment & Strategy",
    duration: "Week 1-4",
    activities: ["Drug development process analysis", "Regulatory requirements mapping", "Research workflow assessment", "Compliance gap analysis", "Integration planning"],
    deliverables: ["Pharmaceutical digital strategy", "Regulatory compliance roadmap", "Research optimization plan", "Integration architecture"],
    icon: Search,
    color: "from-indigo-500 to-purple-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-18",
    activities: ["ServiceNow pharma setup", "Research system integration", "Regulatory workflow automation", "Clinical trial platform", "Quality system implementation"],
    deliverables: ["Pharmaceutical platform", "Integrated research systems", "Automated workflows", "Clinical trial management"],
    icon: Settings,
    color: "from-purple-500 to-violet-500"
  },
  {
    phase: "Testing & Validation",
    duration: "Week 19-24",
    activities: ["Regulatory testing", "Research workflow validation", "Quality system verification", "Compliance validation", "User training"],
    deliverables: ["Validated pharma platform", "Compliance certification", "Quality validation", "Training materials"],
    icon: CheckCircle,
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 25-28",
    activities: ["Production deployment", "Research team onboarding", "Regulatory training", "Performance monitoring", "Continuous improvement"],
    deliverables: ["Live pharmaceutical platform", "Trained research teams", "Regulatory compliance", "Monitoring systems"],
    icon: Rocket,
    color: "from-fuchsia-500 to-pink-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow accelerate drug development lifecycles?",
    answer: "The largest time reduction comes from automating regulatory submission preparation. Most organisations assemble CTD sections manually from 12 or more validated source systems — a process that takes 18–24 months and produces 3–5 revision cycles per submission because completeness checks are done manually and inconsistently. ServiceNow's eCTD assembly workspace pulls documents from validated sources with automatic version control, runs completeness and consistency checks against FDA and EMA checklists before submission, and maintains a live audit trail. In our reference implementation at GlobalPharma Corp, revision cycles dropped from 3–5 per submission to 0.8 on average, and all submissions in a 24-month period were accepted at first review."
  },
  {
    question: "What regulatory compliance capabilities does ServiceNow provide for pharmaceuticals?",
    answer: "ServiceNow covers three compliance layers: submission-level (eCTD assembly, completeness pre-checks, regulatory intelligence monitoring), record-level (21 CFR Part 11 and EU Annex 11 audit trails on all electronic records, electronic batch record enforcement), and programme-level (regulatory guideline change monitoring with 48-hour impact flagging to affected active submissions). The regulatory intelligence feed checks FDA, EMA, PMDA, and Health Canada guideline publications daily — so when a new guidance document affects an active IND or NDA, the relevant submission team is notified within 48 hours rather than discovering the change weeks later."
  },
  {
    question: "How can ServiceNow improve clinical trial management?",
    answer: "Site activation is typically the largest contributor to trial delays. ServiceNow enforces each activation step through a checklist workflow with SLA timers; when a step is 3 or more days overdue, the system auto-escalates to the sponsor team rather than waiting for the weekly status call. In practice this converts 90+ day site activation timelines to under 25 days. Protocol deviation detection is automated through daily EDC scans — alerts fire within 24 hours of a deviation entry rather than surfacing at weekly investigator meetings 5–11 days later. Trial close-out benefits from automated CTMS–EDC data reconciliation, eliminating the manual query resolution that typically adds 6–8 weeks to data lock."
  },
  {
    question: "What research data management features are available?",
    answer: "ServiceNow integrates LIMS, EDC, and eTMF systems into a unified data model so cross-study analytics link biomarker, efficacy, and safety data without manual data exports. This removes the 'data silo' barrier that prevents research teams from identifying patterns across programmes. Global experiment workflows route approvals electronically with full audit trail regardless of which site initiates, replacing the file-transfer process that breaks audit trails in multi-site research environments. Automated daily deviation scans operate across all connected systems and notify the QA team within 24 hours of any deviation entry — a significant improvement over the 11-day average identification time we found in our baseline assessments."
  },
  {
    question: "How does ServiceNow support pharmaceutical manufacturing quality?",
    answer: "Electronic batch records are the highest-impact change in manufacturing quality. eBR forces each step to be entered at the point of execution, in sequence, with mandatory parameter fields — making it structurally impossible to complete a batch record from memory after the fact. This eliminates the documentation error pattern that drives a significant portion of batch failures. On the equipment side, real-time critical process parameter trending for at-risk items fires a pre-emptive cleaning or maintenance work order when trend data approaches the action limit — typically 3–5 days before the limit is actually breached. CAPA workflows track corrective actions to effectiveness verification with a scheduled re-audit cycle."
  },
  {
    question: "What ROI can pharmaceutical companies expect from ServiceNow?",
    answer: "GlobalPharma Corp realised $1.2B in development cost savings by cutting their average development cycle from 8.5 years to 5.6 years — nearly 3 years of cost avoided per compound. BioTech Innovations recorded $156M in productivity gains from eliminated coordination delays across 67 active studies. VaccineProduction Inc eliminated $52M in annual waste by cutting batch failure rates from 23% to 2.1%. The pattern is that ROI in pharma comes from a small number of high-value process changes: submission efficiency, batch failure reduction, and research cycle time. We build a projection model against your own current-state metrics before you commit to a programme, with typical payback periods of 18–30 months depending on portfolio size."
  },
  {
    question: "How does ServiceNow integrate with existing pharmaceutical systems?",
    answer: "We have pre-built integrations for Veeva Vault (CTMS, eTMF, QMS), Oracle Clinical, Medidata Rave and Rave CDMS, LabWare and LabVantage LIMS, SAP EHS, and the major MES platforms used in GMP manufacturing. Integration scoping occurs in Weeks 1–4 of the Pharmaceutical Assessment phase; most LIMS and EDC connections are operational by Week 18. ServiceNow does not replace Veeva or Oracle — it orchestrates across them, creating unified workflows and cross-system analytics that the individual systems cannot provide on their own."
  },
  {
    question: "What training and support is provided for pharmaceutical implementations?",
    answer: "Training runs in a validated GxP test environment during Weeks 19–24 of implementation, using representative de-identified data from your own programmes. Role tracks include: regulatory affairs specialist (submission assembly, guideline monitoring), clinical operations (site activation checklists, deviation management), QA (batch record review, CAPA management), and system administrator (configuration, integrations, user access). All training materials are authored to support IQ/OQ/PQ validation documentation. Post go-live support includes a 90-day hypercare period with a dedicated pharma systems engineer, followed by 24/7 monitoring with P1 response in under 30 minutes and quarterly GxP compliance reviews."
  }
];

export default function PharmaceuticalsBiotech() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Pharma Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Pharma Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Pharma Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-violet-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Microscope Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Microscope className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 34% Faster Development
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-violet-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-violet-700 transition-all duration-300">
                    ✓ 100% FDA Compliant
                  </Badge>
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                    ✓ $1.2B Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 font-semibold">
                    Pharmaceuticals & Biotech
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Drug Discovery{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-indigo-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Accelerate life-saving innovations with <span className="font-semibold text-purple-300">intelligent drug development</span>, regulatory compliance, and research excellence. Achieve <span className="font-semibold text-violet-300">34% faster development</span> with <span className="font-semibold text-fuchsia-300">$1.2B savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-violet-600/20 hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-violet-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">34%</div>
                    <div className="text-xs sm:text-sm text-indigo-100">Faster</div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-fuchsia-600/20 hover:from-purple-600/30 hover:via-violet-600/30 hover:to-fuchsia-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">100%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Compliant</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 hover:from-violet-600/30 hover:via-fuchsia-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">$1.2B</div>
                    <div className="text-xs sm:text-sm text-violet-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-violet-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Accelerate Drug Development
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-fuchsia-400 group-hover:text-fuchsia-300" />
                      Watch Pharma Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Drug Development Platform"
                      className="w-full h-full object-cover"
                      gradient="from-indigo-600 to-purple-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">34%</div>
                      <div className="text-xs text-indigo-200">Faster</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs text-purple-200">Compliant</div>
                    </div>
                  </div>
                  
                  {/* Floating Pharma Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Microscope className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TestTube2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Pharmaceutical Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Save Lives
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of pharmaceutical operations with intelligent solutions designed for life-saving innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {pharmaceuticalSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100 hover:border-indigo-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                          <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pharmaceutical Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {pharmaceuticalMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-indigo-900" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                  Our Implementation
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                A proven four-phase approach that ensures successful pharmaceutical implementations with maximum value realization.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {implementationApproach.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
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
                        <ul className="space-y-3 mt-auto">
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
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Pharmaceutical Implementation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600">
                  Pharmaceutical Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how pharmaceutical leaders have transformed their operations with ServiceNow solutions that accelerate life-saving innovations.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm px-4 py-2">
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

                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border-l-4 border-purple-500">
                          <Quote className="h-6 w-6 text-purple-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Pharmaceutical Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-purple-600 to-indigo-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  What Pharmaceutical Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-purple-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from pharmaceutical executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Microscope className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-purple-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-violet-400 mb-4" />
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
                            <span className="text-purple-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-violet-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-violet-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Pharmaceutical Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for pharmaceuticals and biotechnology.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-indigo-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Accelerate Your Drug Development?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-indigo-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join pharmaceutical leaders bringing life-saving innovations to market faster. Get drug development solutions that deliver 34% faster development and $1.2B savings.
                </p>
                <a href="/get-started"
                  className="group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Pharmaceutical Consultation
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
