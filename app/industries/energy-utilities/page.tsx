'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
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
    client: "PowerGrid Solutions",
    industry: "Electrical Utilities",
    challenge: "Outage resolution across 2,300 substations averaged 34 hours — because fault isolation required engineers to manually cross-reference SCADA alerts, maintenance logs, and switching records stored in three separate systems. $456M in annual downtime costs were driven primarily by the 8–12-hour delay between fault detection and field crew dispatch",
    solution: "ServiceNow Grid Operations platform integrating SCADA, GIS, and work management into a unified incident record. Fault location is auto-identified from SCADA topology data; field crew dispatch is automated using location-based routing; and switching order sequences are generated automatically from the fault record, eliminating the manual coordination step that caused most of the delay",
    results: ["89% reduction in outage duration (34 hrs avg → 3.7 hrs)", "Grid availability improved from 96.8% to 99.8%", "$523M in avoided downtime costs over 24 months", "Field crew dispatch time cut from 8 hrs to 42 min average"],
    timeline: "32 weeks implementation",
    image: "/images/case-studies/powergrid-solutions.jpg",
    testimonial: "The 8-hour gap between fault detection and crew dispatch was entirely process-driven — engineers were manually pulling switching records from three systems. ifBash automated the dispatch and the switching sequence. Outage duration dropped from 34 hours to under 4."
  },
  {
    client: "CleanEnergy Corp",
    industry: "Renewable Energy",
    challenge: "Energy output forecasting accuracy of 45% across 890 wind and solar sites meant the company was routinely over-committed on day-ahead energy contracts, paying $234M annually in imbalance charges when actual generation fell short of bids. Weather model inputs were manually downloaded and entered into the forecasting tool every 6 hours by a 3-person team",
    solution: "ServiceNow renewable operations hub with automated weather API ingestion (ECMWF and NOAA updated every 15 minutes), machine-learning generation forecasts by site and technology type, and automated day-ahead bidding recommendations capped at 90% of the P90 forecast for each site to eliminate the over-commitment pattern",
    results: ["Forecasting accuracy improved from 45% to 91% MAPE reduction", "Imbalance charges reduced by $234M in first year", "Day-ahead bidding time cut from 4 hrs manual work to 20 min review", "Zero over-commitment events in 18 months following go-live"],
    timeline: "28 weeks rollout",
    image: "/images/case-studies/cleanenergy-corp.jpg",
    testimonial: "Three people manually downloading weather files every six hours was our forecasting process. ifBash automated the data feeds and built the bidding logic. Imbalance charges — $234M of them — disappeared in the first year."
  },
  {
    client: "UtilityCorp Networks",
    industry: "Multi-Utility Services",
    challenge: "Customer service agents handling gas, water, and electric enquiries used 4 separate billing and account systems — one per service line plus a ticketing tool — with no integration. First-call resolution was 67% because agents could not see cross-service account status in one place; 23-minute average wait times were driven by the manual lookup time between systems",
    solution: "ServiceNow unified utility agent workspace consolidating gas, water, and electric account data, outage maps, service history, and ticketing into one screen identified automatically on inbound contact. Proactive outage SMS notifications reduce inbound call volume during outages by pre-answering the question before customers dial",
    results: ["First-call resolution from 67% to 94%", "Average wait time cut from 23 min to 3 min", "$167M in operational savings from reduced handling time and agent capacity redeployment", "Inbound call volume during outages reduced 52% through proactive notifications"],
    timeline: "24 weeks deployment",
    image: "/images/case-studies/utilitycorp-networks.jpg",
    testimonial: "Four systems, four logins, for every customer call. Agents were copying account numbers between tabs while customers waited. The unified workspace ended that — FCR went from 67% to 94% without adding a single agent."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Robert Chen",
    title: "Chief Operations Officer",
    company: "PowerGrid Solutions",
    story: "The 8-hour gap between fault detection and crew dispatch wasn't a staffing problem — it was engineers manually pulling switching records from three systems before they could issue a safe work order. ifBash automated the sequence generation from the fault record itself. Dispatch went from 8 hours to 42 minutes. Average outage duration fell from 34 hours to under 4.",
    metric: "Outage duration reduced 89%; field dispatch cut from 8 hrs to 42 min",
    rating: 5,
    avatar: "/images/testimonials/robert-chen-coo.jpg"
  },
  {
    name: "Dr. Sarah Martinez",
    title: "Director of Renewable Operations",
    company: "CleanEnergy Corp",
    story: "We had three people manually downloading weather files every six hours to feed the forecasting model — and still producing 45% accuracy. The model wasn't the problem; the data latency was. ifBash automated the weather API feeds to update every 15 minutes and rebuilt the bidding logic to cap submissions at P90. Imbalance charges were $234M last year. This year: zero.",
    metric: "Forecasting accuracy from 45% to 91% MAPE reduction; $234M in imbalance charges eliminated",
    rating: 5,
    avatar: "/images/testimonials/sarah-martinez-renewables.jpg"
  },
  {
    name: "Michael Torres",
    title: "Customer Experience Director",
    company: "UtilityCorp Networks",
    story: "Our agents were genuinely trying but couldn't do their job — four systems, four logins, no shared view of a customer's gas, water, and electric accounts. By the time they had the account context, the call had already failed. The unified workspace changed the conversation from 'let me look that up' to 'I can see your account and here's the answer.' FCR went from 67% to 94%.",
    metric: "First-call resolution from 67% to 94%; average handle time from 23 min to 8 min",
    rating: 5,
    avatar: "/images/testimonials/michael-torres-utility.jpg"
  },
  {
    name: "Jennifer Park",
    title: "VP of Grid Technology",
    company: "EnergyTech Advanced",
    story: "We used to learn about transformer degradation from a substation failure, not before it. ifBash connected our transformer monitoring sensors to a predictive model that scores each asset's health weekly. Assets approaching a failure probability of 0.65 or higher generate a pre-fault work order automatically. In the last 14 months we've intervened proactively on 47 assets that would have caused unplanned outages.",
    metric: "47 pre-fault interventions in 14 months; substation unplanned outages down 61%",
    rating: 5,
    avatar: "/images/testimonials/jennifer-park-smartgrid.jpg"
  }
];

// Energy & Utilities Solutions
const energySolutions = [
  {
    icon: Zap,
    title: "Smart Grid Management",
    description: "SCADA, GIS, and work management data are unified in a single incident record so fault location is auto-identified from grid topology — eliminating the manual cross-referencing that delays field crew dispatch. Switching order sequences are generated automatically from the fault record, and crew dispatch uses location-based routing to the nearest qualified team. Transformer and substation health scores are computed weekly; assets with a failure probability above 0.65 generate a pre-fault work order automatically.",
    benefits: ["Auto-identified fault location from SCADA topology", "Automated switching order generation from fault records", "Weekly asset health scoring with pre-fault work-order trigger at 0.65 probability"],
    gradient: "from-yellow-500 to-amber-500",
    useCases: ["Outage fault isolation", "Field crew dispatch", "Pre-fault substation maintenance"]
  },
  {
    icon: Sun,
    title: "Renewable Energy Integration",
    description: "Weather API feeds from ECMWF and NOAA update generation forecasts every 15 minutes — replacing manual weather file downloads that degrade forecast accuracy through data latency. Machine-learning generation models by site and technology type produce P50 and P90 forecasts; automated day-ahead bidding recommendations cap submissions at 90% of P90 to eliminate over-commitment imbalance charges. Battery storage dispatch is optimised daily against intraday price forecasts.",
    benefits: ["15-minute weather API feed refresh for P50/P90 forecasting", "Automated day-ahead bid recommendations capped at 90% of P90", "Daily battery dispatch optimisation against intraday price forecasts"],
    gradient: "from-amber-500 to-orange-500",
    useCases: ["Wind/solar generation forecasting", "Day-ahead energy bidding", "Battery storage dispatch optimisation"]
  },
  {
    icon: Gauge,
    title: "Asset Performance Management",
    description: "IoT sensors on transmission and distribution infrastructure stream condition data continuously; a configurable health-scoring model flags assets at risk of failure 30–60 days before the predicted fault date. Maintenance work orders are generated automatically with the correct outage window, clearance permit type, and required parts list attached. Regulatory inspection schedules and equipment certification expiry dates are tracked with automated 60-day advance reminders.",
    benefits: ["30–60-day predictive failure flagging on monitored assets", "Auto-generated work orders with clearance permits and parts lists", "Regulatory inspection and certification tracking with 60-day advance alerts"],
    gradient: "from-orange-500 to-red-500",
    useCases: ["Predictive transformer maintenance", "Regulatory inspection scheduling", "Asset certification compliance"]
  },
  {
    icon: Users,
    title: "Customer Experience Automation",
    description: "Unified agent workspace consolidates gas, water, and electric account data, outage maps, payment history, and service tickets from multiple billing and CRM systems into one screen, identified automatically on inbound contact. Proactive outage SMS and email notifications are sent to affected customers within 8 minutes of a confirmed fault — reducing inbound call volume during outages by 40–60%. Usage anomaly detection flags unusual consumption patterns and routes them to the account team for proactive outreach before the customer notices an unexpected bill.",
    benefits: ["Single unified screen from multiple billing and CRM systems", "Proactive outage notifications within 8 minutes of fault confirmation", "Usage anomaly detection with proactive account team routing"],
    gradient: "from-red-500 to-pink-500",
    useCases: ["Multi-utility agent desktop", "Outage communications automation", "Unusual usage early warning"]
  },
  {
    icon: Battery,
    title: "Energy Storage & Distribution",
    description: "Demand response programmes are automated end-to-end: eligible customer segments receive curtailment requests via the channel they've opted into (app, SMS, or email), acceptances are recorded automatically, and grid load adjustments are calculated and applied without manual coordination. Storage charge/discharge schedules are updated every 30 minutes based on real-time LMP prices and state-of-charge data from connected battery management systems.",
    benefits: ["Automated demand response dispatch across opted-in customer segments", "30-minute storage schedule updates from real-time LMP and BMS data", "Curtailment acceptance tracking and automated grid adjustment calculation"],
    gradient: "from-pink-500 to-purple-500",
    useCases: ["Demand response programme management", "Battery storage scheduling", "Peak load management"]
  },
  {
    icon: Wind,
    title: "Environmental & Sustainability Operations",
    description: "Continuous emissions monitoring data flows directly into EPA and state regulatory report templates — no manual transcription of hourly readings. Carbon accounting workflows calculate Scope 1, 2, and 3 emissions monthly from fuel consumption, purchased electricity, and supply chain data, producing draft GHG inventory reports ready for review rather than a weeks-long evidence-gathering exercise. Permit renewal calendars track 90-day and 30-day advance deadlines across all operating facilities.",
    benefits: ["CEM data auto-populated into EPA regulatory report templates", "Monthly Scope 1/2/3 carbon accounting from integrated fuel and electricity data", "Permit renewal tracking with 90-day and 30-day automated reminders"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["EPA emissions reporting", "GHG inventory management", "Environmental permit compliance"]
  }
];

// Energy Metrics
const energyMetrics = [
  {
    title: "Grid Reliability Improvement",
    description: "Average improvement in power grid reliability and availability",
    stat: "99.8% Reliability",
    icon: Zap
  },
  {
    title: "Outage Resolution Speed",
    description: "Average improvement in power outage resolution and recovery times",
    stat: "89% Faster",
    icon: Timer
  },
  {
    title: "Energy Optimization Achievement", 
    description: "Average improvement in energy generation and distribution efficiency",
    stat: "78% Better",
    icon: Sun
  },
  {
    title: "Cost Savings Achievement",
    description: "Average cost reduction through energy operations optimization",
    stat: "$523M Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Energy Assessment & Strategy",
    duration: "Week 1-5",
    activities: ["Grid infrastructure analysis", "Energy asset evaluation", "Customer experience assessment", "Sustainability review", "Integration planning"],
    deliverables: ["Energy digital strategy", "Grid optimization plan", "Customer experience roadmap", "Sustainability framework"],
    icon: Search,
    color: "from-yellow-500 to-amber-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 6-22",
    activities: ["ServiceNow energy setup", "Grid system integration", "Asset monitoring configuration", "Customer service automation", "Renewable energy platform"],
    deliverables: ["Energy platform", "Integrated grid systems", "Asset management", "Customer portal"],
    icon: Settings,
    color: "from-amber-500 to-orange-500"
  },
  {
    phase: "Testing & Optimization",
    duration: "Week 23-28",
    activities: ["Grid testing", "Asset validation", "Performance optimization", "Security testing", "Team training"],
    deliverables: ["Optimized energy platform", "Performance benchmarks", "Security validation", "Training materials"],
    icon: CheckCircle,
    color: "from-orange-500 to-red-500"
  },
  {
    phase: "Launch & Continuous Improvement",
    duration: "Week 29-34",
    activities: ["Production launch", "Grid monitoring", "Customer onboarding", "Performance tracking", "Optimization cycles"],
    deliverables: ["Live energy platform", "Grid operations center", "Customer portal", "Monitoring systems"],
    icon: Rocket,
    color: "from-red-500 to-pink-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow improve energy grid reliability?",
    answer: "The key mechanism is unifying SCADA, GIS, and work management data in a single incident record so fault location is identified automatically from grid topology — without engineers manually cross-referencing three systems. Switching order sequences are generated from the fault record rather than written from scratch under pressure. Field crew dispatch uses location-based routing to the nearest qualified team. In our reference implementation at PowerGrid Solutions, these changes reduced average outage duration from 34 hours to 3.7 hours. On the proactive side, weekly transformer health scoring triggers pre-fault work orders on assets exceeding a 0.65 failure probability threshold."
  },
  {
    question: "What renewable energy management capabilities does ServiceNow provide?",
    answer: "The core capability is replacing manual weather file downloads with automated API feeds from ECMWF and NOAA that refresh every 15 minutes — the data latency of manual processes is what degrades forecast accuracy. Machine-learning generation models trained on 18+ months of site-specific production data produce P50 and P90 forecasts by site and technology type. Day-ahead bidding recommendations are capped automatically at 90% of P90 to eliminate the over-commitment pattern that generates imbalance charges. Battery storage dispatch schedules update every 30 minutes from real-time LMP price feeds."
  },
  {
    question: "How can ServiceNow enhance customer experience for utility companies?",
    answer: "The unified agent workspace is the primary change — it consolidates gas, water, and electric account data, outage maps, payment history, and service tickets from multiple billing and CRM systems into a single screen identified automatically on inbound contact. This eliminates the 4–6-system lookup process that drives long handle times and low first-call resolution. Proactive outage notifications are sent within 8 minutes of fault confirmation — reducing inbound call volume during outages by 40–60% because customers already have the information before they dial. Usage anomaly detection flags unusual consumption and routes it to the account team before customers see an unexpected bill."
  },
  {
    question: "What asset performance management features are available for energy companies?",
    answer: "IoT sensors on transmission and distribution infrastructure stream condition data continuously into a configurable health-scoring model. Assets flagged above the failure probability threshold (typically 0.65) receive an automated pre-fault work order with the correct outage window, clearance permit type, and required parts list attached — so the maintenance team receives a complete job packet, not just an alert. Regulatory inspection schedules and equipment certification expiry dates are tracked in a unified compliance calendar with automated 60-day advance reminders, preventing the compliance gaps that arise when renewal dates are tracked in individual spreadsheets."
  },
  {
    question: "How does ServiceNow support energy storage and distribution optimization?",
    answer: "Battery charge/discharge schedules are optimised and updated every 30 minutes based on real-time locational marginal prices (LMP) from ISO/RTO feeds and state-of-charge data from connected battery management systems — replacing static daily schedules that miss intraday arbitrage opportunities. Demand response programmes are automated end-to-end: eligible customers are contacted via their preferred channel (app, SMS, email), acceptances are logged automatically, and grid load adjustment calculations are applied without manual coordination by the control room team."
  },
  {
    question: "What ROI can energy and utility companies expect from ServiceNow?",
    answer: "Our reference implementations provide specific anchors: PowerGrid Solutions avoided $523M in downtime costs over 24 months by cutting outage duration 89%. CleanEnergy Corp eliminated $234M in annual imbalance charges through better forecasting and automated bidding caps. UtilityCorp Networks saved $167M through reduced handling time and agent capacity redeployment after FCR rose from 67% to 94%. ROI is typically driven by two or three specific operational changes rather than a broad efficiency gain. We build a projection model against your own current-state metrics — downtime costs, imbalance charges, agent handle time — before you commit to a programme, with typical payback periods of 12–20 months."
  },
  {
    question: "How does ServiceNow integrate with existing energy management systems?",
    answer: "We have pre-built integrations for OSIsoft PI (AVEVA), GE Grid Solutions EMS/DMS, ABB Network Manager, major SCADA platforms, and AMI/smart meter head-end systems. Integration scoping occurs in Weeks 1–5 of the Energy Assessment phase; most SCADA and EMS connections are operational by Week 22. ServiceNow does not replace your existing SCADA or EMS — it reads from them and coordinates actions across them, providing the workflow and analytics layer that converts raw grid data into coordinated operational decisions."
  },
  {
    question: "What environmental and sustainability features are included?",
    answer: "Continuous emissions monitoring (CEM) data feeds directly into EPA and state regulatory report templates — hourly readings are auto-populated rather than manually transcribed, eliminating the data gaps that trigger inspection findings. Carbon accounting workflows calculate Scope 1, 2, and 3 emissions monthly from integrated fuel consumption, purchased electricity billing, and supply chain data, producing a draft GHG inventory report for review. Permit renewal calendars track advance deadlines across all operating facilities with automated reminders at 90 days and 30 days before expiry."
  }
];

export default function EnergyUtilities() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null); // ✅ FIXED: Added proper TypeScript typing
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-yellow-600 to-amber-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Energy Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Energy Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-yellow-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-yellow-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Energy Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-orange-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Lightning Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Zap className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-yellow-500/90 to-amber-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-yellow-600 hover:to-amber-700 transition-all duration-300">
                    ✓ 99.8% Grid Reliability
                  </Badge>
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-orange-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    ✓ 89% Faster Resolution
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    ✓ $523M Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 font-semibold">
                    Energy & Utilities
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Sustainable{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 font-semibold">
                      Operations
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-yellow-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform energy operations with <span className="font-semibold text-amber-300">smart grid intelligence</span>, renewable energy optimization, and sustainable utility management. Achieve <span className="font-semibold text-orange-300">99.8% grid reliability</span> with <span className="font-semibold text-red-300">$523M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-yellow-600/20 via-amber-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:via-amber-600/30 hover:to-orange-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">99.8%</div>
                    <div className="text-xs sm:text-sm text-yellow-100">Reliability</div>
                  </div>
                  <div className="group bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20 hover:from-amber-600/30 hover:via-orange-600/30 hover:to-red-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">89%</div>
                    <div className="text-xs sm:text-sm text-amber-100">Faster</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 hover:from-orange-600/30 hover:via-red-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">$523M</div>
                    <div className="text-xs sm:text-sm text-orange-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 hover:from-yellow-700 hover:via-amber-700 hover:to-orange-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Energy Operations
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-red-400 group-hover:text-red-300" />
                      Watch Energy Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-yellow-500/15 to-amber-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Smart Grid Management Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-yellow-600 to-amber-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                      <div className="text-xs text-yellow-200">Reliability</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">89%</div>
                      <div className="text-xs text-amber-200">Faster</div>
                    </div>
                  </div>
                  
                  {/* Floating Energy Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sun className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
                  Energy Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Power the Future
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of energy operations with intelligent solutions designed for sustainable utility management.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {energySolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-100 hover:border-yellow-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Energy Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {energyMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{metric.stat}</div>
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
                A proven four-phase approach that ensures successful ServiceNow implementation for energy operations.
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-yellow-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600">
                  Energy Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how energy leaders have transformed their operations with ServiceNow solutions that power sustainable operations.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-4 py-2">
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

                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border-l-4 border-amber-500">
                          <Quote className="h-6 w-6 text-amber-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-2 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Energy Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-amber-600 to-yellow-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-amber-200">
                          <div className="text-lg font-bold text-amber-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-amber-900 via-yellow-900 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-amber-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                  What Energy Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-amber-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from energy executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Zap className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-amber-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-orange-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4">
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
                            <span className="text-amber-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-orange-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-orange-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-yellow-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Energy Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for energy and utilities.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-yellow-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Energy Operations?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-yellow-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join energy leaders powering the future. Get smart grid solutions that deliver 99.8% reliability and $523M savings.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-yellow-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Energy Consultation
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
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
}
