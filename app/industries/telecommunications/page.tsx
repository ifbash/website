'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
ChevronRight, Play, Users, Zap, Shield, Award, ArrowRight, CheckCircle, Star, Bot, Brain, Workflow, Database, Phone, Mail, MapPin, Calendar, TrendingUp, Globe, Settings, Target, Lightbulb, Rocket, Heart, Building, Factory, HeartPulse, Car, Briefcase, MonitorSmartphone, Quote, Video, FileText, Download, ExternalLink, Timer, DollarSign, BarChart3, PieChart, Activity, Cpu, CloudLightning, GraduationCap, BookOpen, UserCheck, Layers, Cog, ShoppingBag, Store, Microscope, Music, MessageCircle, Wrench, Clock, Gauge, Network, RefreshCw, CloudDownload, Server, Search, ChevronDown, Radio, Wifi, Satellite, Antenna, Signal
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "GlobalTel Networks",
    industry: "Wireless Communications",
    challenge: "Network outages across 12,000 cell towers averaged 67 minutes to resolve because the NOC operated three separate monitoring tools with no alert correlation — engineers spent the first 35 minutes on average determining fault location and affected node before any remediation work began. $234M in annual churn was traced to this resolution delay in a network satisfaction study",
    solution: "ServiceNow Telecommunications Service Management with AIOps correlation unifying alerts from all three monitoring platforms into a single incident record, auto-populated with fault location, affected customer count, and a ranked list of probable causes based on historical tower maintenance records",
    results: ["89% faster outage resolution — avg MTTR from 67 min to 7 min", "Network availability improved from 97.4% to 99.9%", "Annual customer churn reduced saving an estimated $278M", "NOC alert volume reduced 76% through correlation deduplication"],
    timeline: "28 weeks implementation",
    image: "/images/case-studies/globaltel-networks.jpg",
    testimonial: "Engineers were triaging for 35 minutes before touching a single config. ifBash's correlation engine hands them a pre-populated incident with fault location and probable cause. We went from 67 minutes to 7 minutes mean time to resolve."
  },
  {
    client: "ConnectCorp Telecom",
    industry: "Broadband Services",
    challenge: "First-call resolution at 45% and 23-minute average wait times were driven by agents using 5 separate systems to look up account history, network status, equipment details, billing, and prior tickets — each requiring a separate login. Agents unable to resolve in the first call created repeat contact spirals averaging 3.4 interactions per issue",
    solution: "ServiceNow unified agent workspace consolidating all 5 data sources into a single screen with automatic account identification on inbound contact, pre-populated with the customer's last 3 interactions, current network status for their node, and an AI-recommended resolution playbook based on symptom matching",
    results: ["First-call resolution from 45% to 91%", "Average handle time reduced from 23 min to 8 min", "Repeat contact rate cut from 3.4 to 1.1 interactions per issue", "$134M in recovered revenue from churn reduction and agent capacity redeployment"],
    timeline: "22 weeks rollout",
    image: "/images/case-studies/connectcorp-telecom.jpg",
    testimonial: "Five systems, five logins, every call. Agents were copying account numbers between browser tabs while customers waited. The unified workspace put everything on one screen — first-call resolution doubled and handle time fell by two thirds."
  },
  {
    client: "5GFuture Solutions",
    industry: "5G Infrastructure",
    challenge: "34% of 5G site deployments across 890 sites were delayed by an average of 6 weeks — primarily due to permit and landlord agreement tracking across 12 project managers with no shared system. $156M in deployment cost overruns came from duplicate contractor mobilisations triggered when permit status was unknown",
    solution: "ServiceNow Project Portfolio Management configured for telecom site deployment with automated permit tracking, landlord approval workflow, contractor mobilisation gating (no contractor dispatch without confirmed permit), and a programme-level dashboard showing every site's status, blocker, and critical path date",
    results: ["Deployment delays reduced from 34% of sites to 4%", "Duplicate contractor mobilisations eliminated — $189M in cost savings", "Average site activation cycle shortened from 19 weeks to 11 weeks", "All 890 sites tracked in one dashboard with real-time critical path visibility"],
    timeline: "32 weeks deployment",
    image: "/images/case-studies/5gfuture-solutions.jpg",
    testimonial: "We had 12 project managers each running their own spreadsheet. Nobody knew the true permit status across the programme. ifBash built one source of truth — contractors can't be mobilised without confirmed permits, and delays dropped from 34% to 4% of sites."
  }
];

// Client Stories
const clientStories = [
  {
    name: "David Chen",
    title: "Chief Technology Officer",
    company: "GlobalTel Networks",
    story: "The NOC was drowning — three tools, no correlation, engineers triaging for half an hour before touching a config. What we found when ifBash did the analysis: 76% of our alert volume was duplicate notifications of the same fault. Once the correlation engine deduplicated those, engineers could actually focus. MTTR went from 67 minutes to 7.",
    metric: "MTTR cut from 67 min to 7 min; alert volume reduced 76% through deduplication",
    rating: 5,
    avatar: "/images/testimonials/david-chen-cto.jpg"
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Customer Experience",
    company: "ConnectCorp Telecom",
    story: "The root cause of our low first-call resolution wasn't agent skill — it was that agents needed 5 separate logins to answer one customer question. By the time they'd pulled account history, network status, and billing, the call had already failed. The unified workspace eliminated that. FCR went from 45% to 91% without any change to headcount or training.",
    metric: "First-call resolution from 45% to 91%; average handle time from 23 min to 8 min",
    rating: 5,
    avatar: "/images/testimonials/maria-rodriguez-cx.jpg"
  },
  {
    name: "Jennifer Park",
    title: "Head of 5G Deployment",
    company: "5GFuture Solutions",
    story: "The $156M overrun came from contractor mobilisations on sites that didn't have permits yet — because nobody had a single view of where each site actually was in the process. Twelve project managers, twelve spreadsheets. ifBash's platform became the one source of truth, and we built a rule that contractors cannot be dispatched without a confirmed permit record. Duplicate mobilisations stopped immediately.",
    metric: "Site delays reduced from 34% to 4%; $189M in overrun costs eliminated",
    rating: 5,
    avatar: "/images/testimonials/jennifer-park-5g.jpg"
  },
  {
    name: "Michael Torres",
    title: "Network Operations Director",
    company: "TowerLink Infrastructure",
    story: "We used to find out about degraded service from customer complaints. ifBash connected our network performance data to a predictive model that fires an alert when a tower's traffic throughput drops below 85% of its 30-day baseline — before it fails completely. Proactive interventions now account for 63% of our maintenance work. Customer-reported outages are down 58%.",
    metric: "63% of maintenance now proactive; customer-reported outages down 58%",
    rating: 5,
    avatar: "/images/testimonials/michael-torres-netops.jpg"
  }
];

// Telecommunications Solutions
const telecomSolutions = [
  {
    icon: Antenna,
    title: "Network Operations & Management",
    description: "AIOps correlation engine unifies alert streams from existing NMS, OSS, and APM tools into a single incident record — reducing duplicate alert noise by 70–80% before a human sees it. Each incident is auto-populated with fault location, affected customer count, and a ranked probable-cause list based on historical maintenance records for that node. Predictive degradation alerts fire when throughput or error rates on a tower drop below a configurable 30-day baseline, enabling proactive intervention before the threshold breach becomes a customer-impacting outage.",
    benefits: ["Multi-NMS alert correlation with 70–80% deduplication", "Auto-populated fault location and probable-cause ranking", "Predictive degradation alerts at configurable baseline thresholds"],
    gradient: "from-sky-500 to-blue-500",
    useCases: ["NOC alert correlation", "Proactive degradation detection", "Outage MTTR reduction"]
  },
  {
    icon: Signal,
    title: "5G Infrastructure Deployment",
    description: "Site deployment workflows enforce a permit-confirmed gate before any contractor mobilisation work order can be issued — eliminating the duplicate mobilisation cost that arises when contractors are dispatched to sites without permits. A programme-level dashboard shows every site's current stage, active blocker, responsible owner, and critical path date, replacing the multi-spreadsheet visibility gap that causes schedule overruns. Landlord approval workflows track outstanding agreements and auto-escalate to senior leadership when a site is within 14 days of a schedule-critical deadline.",
    benefits: ["Contractor dispatch gated on confirmed permit record", "Programme-level dashboard with critical path visibility per site", "Landlord agreement tracking with 14-day deadline escalation"],
    gradient: "from-blue-500 to-indigo-500",
    useCases: ["5G site permit tracking", "Contractor mobilisation control", "Programme schedule management"]
  },
  {
    icon: Phone,
    title: "Customer Experience Automation",
    description: "Agent workspace consolidates account history, current network node status, billing, equipment details, and prior ticket history from separate CRM, OSS, and billing systems into a single screen — identified automatically on inbound contact. AI resolution playbooks recommend the top 3 likely causes and resolution steps based on symptom matching against historical tickets. Proactive outage notification workflows contact affected customers within 8 minutes of a confirmed fault, cutting inbound call volume during outages by 40–60%.",
    benefits: ["Single-screen unified agent workspace from 5+ source systems", "AI resolution playbooks based on symptom matching", "Proactive outage notifications within 8 minutes of fault confirmation"],
    gradient: "from-indigo-500 to-purple-500",
    useCases: ["Unified agent desktop", "AI-assisted resolution", "Proactive outage communications"]
  },
  {
    icon: Wifi,
    title: "Service Assurance & Quality",
    description: "SLA monitoring tracks every committed service level by customer contract, firing a jeopardy alert to the account team when an SLA is at risk of breach — not after it has breached. Automated synthetic testing runs end-to-end service path checks on configurable intervals (as frequent as every 5 minutes on Tier 1 services) and opens a fault ticket automatically if a test fails twice consecutively, before any customer reports the issue.",
    benefits: ["SLA jeopardy alerting before breach — not after", "Automated synthetic service path testing at 5-minute intervals", "Fault ticket auto-creation on consecutive synthetic test failure"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["SLA breach prevention", "Synthetic service testing", "Tier 1 service monitoring"]
  },
  {
    icon: Satellite,
    title: "Network Planning & Optimization",
    description: "Traffic demand forecasts generated from 18 months of historical throughput data identify cells that will exceed 80% utilisation within 90 days, triggering a capacity expansion review with lead time to procure and install before congestion impacts service. Spectrum utilisation reports surface underused frequency allocations that can be redeployed to high-demand cells without additional capital expenditure.",
    benefits: ["90-day ahead capacity utilisation forecasting", "Automated 80%-threshold expansion review trigger", "Spectrum redeployment opportunity identification"],
    gradient: "from-violet-500 to-fuchsia-500",
    useCases: ["Capacity planning", "Congestion prevention", "Spectrum optimisation"]
  },
  {
    icon: Radio,
    title: "Digital Services Innovation",
    description: "API gateway management tracks usage, latency, and error rates across every published API product, with automated deprecation workflows that notify consuming developers 90 days before a version is retired. New digital service launches use a pre-built go-live checklist enforcing security review, load testing sign-off, and support team readiness before the launch gate is approved — preventing the post-launch incident spikes that accompany rushed releases.",
    benefits: ["API product usage and latency monitoring with 90-day deprecation notices", "Pre-built digital service launch checklist with gate enforcement", "Support readiness sign-off required before go-live approval"],
    gradient: "from-fuchsia-500 to-pink-500",
    useCases: ["API lifecycle management", "Digital service launch governance", "Developer notification workflows"]
  }
];

// Telecommunications Metrics
const telecomMetrics = [
  {
    title: "Network Uptime Improvement",
    description: "Average improvement in network availability and service reliability",
    stat: "99.9% Uptime",
    icon: Signal
  },
  {
    title: "Outage Resolution Speed",
    description: "Average improvement in network outage resolution and recovery times",
    stat: "89% Faster",
    icon: Zap
  },
  {
    title: "Customer Satisfaction Rate", 
    description: "Average improvement in customer satisfaction and service quality scores",
    stat: "94% Satisfaction",
    icon: Heart
  },
  {
    title: "Cost Savings Achievement",
    description: "Average cost reduction through telecommunications process optimization",
    stat: "$278M Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Telecom Assessment & Strategy",
    duration: "Week 1-4",
    activities: ["Network infrastructure analysis", "Service quality assessment", "Customer experience evaluation", "Technology stack review", "Integration planning"],
    deliverables: ["Telecommunications strategy", "Network optimization plan", "Customer experience roadmap", "Integration architecture"],
    icon: Search,
    color: "from-sky-500 to-blue-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-20",
    activities: ["ServiceNow telecom setup", "Network system integration", "Customer service automation", "5G deployment platform", "Service assurance implementation"],
    deliverables: ["Telecommunications platform", "Integrated network systems", "Automated workflows", "Service management"],
    icon: Settings,
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Testing & Optimization",
    duration: "Week 21-26",
    activities: ["Network testing", "Service validation", "Performance optimization", "Security testing", "Team training"],
    deliverables: ["Optimized telecom platform", "Performance benchmarks", "Security validation", "Training materials"],
    icon: CheckCircle,
    color: "from-indigo-500 to-purple-500"
  },
  {
    phase: "Launch & Continuous Improvement",
    duration: "Week 27-30",
    activities: ["Production launch", "Network monitoring", "Customer onboarding", "Performance tracking", "Optimization cycles"],
    deliverables: ["Live telecommunications platform", "Network operations center", "Customer portal", "Monitoring systems"],
    icon: Rocket,
    color: "from-purple-500 to-violet-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow improve telecommunications network operations?",
    answer: "The primary change ServiceNow makes is replacing parallel, uncorrelated alert streams from multiple NMS tools with a single correlated incident record. In a typical telecom NOC, the same physical fault generates 20–80 duplicate alerts across different monitoring platforms — engineers spend 30–45 minutes determining the source before any remediation starts. ServiceNow's AIOps module correlates those alerts into one incident, auto-populated with the fault location and a probable-cause ranking, so engineers start remediation within minutes. Predictive alerts fire when a tower's throughput or error rate drops below its 30-day baseline, enabling proactive intervention before customers are impacted."
  },
  {
    question: "What 5G deployment capabilities does ServiceNow provide?",
    answer: "ServiceNow's deployment management module enforces a permit-confirmed gate before any contractor mobilisation — the single most common source of overrun cost in 5G programmes. A programme dashboard shows every site's current stage, active blocker, responsible owner, and critical path date in real time, replacing the 12-spreadsheet visibility problem that causes schedule slippage. Landlord and municipal permit approval workflows track outstanding agreements and auto-escalate to senior leadership when a site is within 14 days of a critical deadline. In our largest 5G implementation, deployment delays dropped from 34% of sites to 4% and $189M in overrun costs were eliminated."
  },
  {
    question: "How can ServiceNow enhance customer experience for telecom companies?",
    answer: "The most impactful change is the unified agent workspace. Most telecom customer service teams use 4–6 separate systems — CRM, OSS, billing, ticketing, equipment portal — each requiring a separate login and manual cross-referencing. ServiceNow consolidates all of them into one screen, identified automatically on inbound contact with the customer's account history, current network node status, and their last 3 interactions pre-loaded. AI playbooks recommend the top 3 probable causes and resolution steps based on symptom matching. First-call resolution rates typically improve from the 40–55% range to above 85% within 3 months of go-live."
  },
  {
    question: "What service assurance features are available for telecommunications?",
    answer: "SLA jeopardy monitoring checks every contracted service level against current performance every 15 minutes, firing an alert to the account team when a metric is trending toward breach with enough lead time to intervene — not after the breach has already happened. Automated synthetic testing runs end-to-end service path checks on Tier 1 services every 5 minutes; if a test fails twice consecutively, a fault ticket is opened and the NOC is notified before any customer calls in. This combination has shifted the ratio of proactive vs. reactive interventions from roughly 30/70 to 65/35 in completed implementations."
  },
  {
    question: "How does ServiceNow support network planning and optimization?",
    answer: "Traffic demand forecasts use 18 months of historical throughput data to identify cells that will exceed 80% utilisation within a 90-day horizon, triggering a capacity expansion review with enough lead time to procure and install equipment before congestion affects service. This eliminates the reactive capacity crunch that occurs when a cell reaches saturation without warning. Spectrum utilisation reports identify underused frequency allocations that can be redeployed to high-demand cells — capturing capacity improvements without additional capital expenditure."
  },
  {
    question: "What ROI can telecommunications companies expect from ServiceNow?",
    answer: "Our reference implementations give concrete anchors: GlobalTel Networks recovered an estimated $278M in annual churn by cutting MTTR from 67 minutes to 7. ConnectCorp Telecom recovered $134M through churn reduction and redeployed agent capacity after FCR rose from 45% to 91%. 5GFuture Solutions eliminated $189M in deployment overruns by enforcing permit gating. Common to all three is that ROI is driven by a small number of specific operational changes rather than diffuse efficiency gains. We build a projection model against your own current-state metrics before you commit — typical payback periods range from 10 to 18 months."
  },
  {
    question: "How does ServiceNow integrate with existing telecom systems?",
    answer: "We have pre-built integrations for Nokia NetAct, Ericsson OSS, IBM Tivoli Netcool, Salesforce CRM, Amdocs BSS, and major network equipment vendor APIs. Integration scoping occurs in Weeks 1–4 of the Telecom Assessment phase; most OSS and CRM connections are operational by Week 20. ServiceNow sits above your existing OSS/BSS infrastructure as an orchestration and intelligence layer — reading from your NMS, correlating across sources, and creating coordinated workflows, without replacing the systems your network engineers depend on."
  },
  {
    question: "What digital services innovation capabilities are included?",
    answer: "API gateway management in ServiceNow tracks usage volume, latency percentiles, and error rates for every published API product, with automated developer notification workflows that send deprecation notices 90 days before a version is retired — eliminating the partner disruption caused by unannounced API changes. New digital service launches use a pre-built go-live checklist enforcing security review, load testing sign-off, and support team readiness before the launch gate opens. This governance step prevents the post-launch incident spikes that routinely accompany releases that bypass adequate pre-launch validation."
  }
];

export default function Telecommunications() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Telecom Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Telecom Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-sky-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sky-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Telecom Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Radio Tower Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Radio className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-sky-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                    ✓ 99.9% Network Uptime
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    ✓ 89% Faster Resolution
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    ✓ $278M Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 font-semibold">
                    Telecommunications
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Network{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-sky-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform telecommunications operations with <span className="font-semibold text-blue-300">intelligent network management</span>, 5G deployment acceleration, and exceptional customer experiences. Achieve <span className="font-semibold text-indigo-300">99.9% uptime</span> with <span className="font-semibold text-purple-300">$278M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-sky-600/20 via-blue-600/20 to-indigo-600/20 hover:from-sky-600/30 hover:via-blue-600/30 hover:to-indigo-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">99.9%</div>
                    <div className="text-xs sm:text-sm text-sky-100">Uptime</div>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 hover:from-blue-600/30 hover:via-indigo-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">89%</div>
                    <div className="text-xs sm:text-sm text-blue-100">Faster</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-violet-600/20 hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-violet-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">$278M</div>
                    <div className="text-xs sm:text-sm text-indigo-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Network Operations
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Watch Telecom Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-sky-500/15 to-blue-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Network Operations Center Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-sky-600 to-blue-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-xs text-sky-200">Uptime</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">89%</div>
                      <div className="text-xs text-blue-200">Faster</div>
                    </div>
                  </div>
                  
                  {/* Floating Telecom Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Radio className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Antenna className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-sky-50/30 relative overflow-hidden">
          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="solutions-overview">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  Telecommunications Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Connect Everything
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of telecommunications operations with intelligent solutions designed for the connected world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {telecomSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-sky-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-sky-50 text-sky-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Telecommunications Metrics Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {telecomMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-sky-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/50 to-sky-900" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sky-700/20 via-transparent to-transparent animate-pulse-slow" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
  </div>

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400">
          Our Implementation
        </span>
        <span className="text-white"> Methodology</span>
      </h2>
      <p className="text-gray-300 text-lg">
        A proven four-phase approach that ensures successful telecommunications implementations with maximum efficiency.
      </p>
    </div>

    <div className="relative">
      {/* Journey Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 transform -translate-y-1/2 opacity-50" />
      
      {/* Journey Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {implementationApproach.map((step, index) => (
          <div key={index} className="relative group h-full">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
            <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
              style={{
                boxShadow: "0 0 40px rgba(14, 165, 233, 0.1)"
              }}>
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
                      <span className="text-sm text-white/80 group-hover/item:text-white transition-colors duration-200">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center mt-16">
      <a href="/get-started"
        className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700 transform hover:scale-105"
        style={{
          boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="relative flex items-center justify-center">
          Start Your Telecommunications Transformation
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </a>
    </div>
  </div>
</section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="case-studies">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
                  Telecommunications Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how telecommunications leaders have transformed their operations with ServiceNow solutions that connect the world.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <Badge className="bg-gradient-to-r from-blue-500 to-sky-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-red-600 mb-2">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-green-600 mb-3">Results</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 border-l-4 border-blue-500">
                          <Quote className="h-6 w-6 text-blue-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Telecommunications Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-blue-600 to-sky-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-blue-200">
                          <div className="text-lg font-bold text-blue-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="testimonials">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-400">
                  What Telecommunications Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Hear from telecommunications executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mr-6">
                            <Radio className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-blue-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-indigo-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
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
                            <span className="text-blue-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-indigo-300 font-semibold">{story.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-indigo-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-sky-50/20 relative overflow-hidden">
          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="faq">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Telecommunications Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for telecommunications and network operations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sky-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-sky-600 transition-transform duration-200 flex-shrink-0 ${
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
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Network Operations?
                </h3>
                <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                  Join telecommunications leaders connecting the world. Get network solutions that deliver 99.9% uptime and $278M savings.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-lg font-semibold bg-white text-sky-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Telecommunications Consultation
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
