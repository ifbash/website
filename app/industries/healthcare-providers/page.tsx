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
    challenge: "Patient care coordination across 12 hospitals with 34% readmission rates and $89M in preventable costs",
    solution: "Integrated patient care platform with predictive analytics, care coordination, and automated clinical workflows",
    results: ["87% reduction in readmissions", "156% improvement in care quality", "$97M cost savings", "99% patient satisfaction"],
    timeline: "20 weeks implementation",
    image: "/images/case-studies/regional-health.jpg",
    testimonial: "ifBash revolutionized our patient care delivery. Readmission rates plummeted while quality scores reached the highest levels in our network's history."
  },
  {
    client: "BioMed Research Institute",
    industry: "Life Sciences Research",
    challenge: "Clinical trial management inefficiencies across 45 studies with 67% timeline delays costing $124M in extended research",
    solution: "Clinical trial management platform with automated protocols, regulatory compliance, and real-time monitoring",
    results: ["78% faster trial completion", "94% regulatory compliance", "$134M savings", "Zero protocol violations"],
    timeline: "18 weeks rollout",
    image: "/images/case-studies/biomed-research.jpg",
    testimonial: "The clinical trial platform ifBash developed transformed our research capabilities, accelerating drug development while maintaining perfect compliance."
  },
  {
    client: "MedDevice Solutions",
    industry: "Medical Devices",
    challenge: "Device lifecycle management across 2,300 medical devices with 45% compliance gaps and safety concerns",
    solution: "Medical device management system with predictive maintenance, compliance tracking, and safety monitoring",
    results: ["91% improvement in device uptime", "100% compliance achievement", "$67M cost avoidance", "Zero safety incidents"],
    timeline: "22 weeks deployment",
    image: "/images/case-studies/meddevice-solutions.jpg",
    testimonial: "Our medical device management transformation with ifBash ensures every device operates safely and efficiently with complete regulatory compliance."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Patricia Williams",
    title: "Chief Medical Officer",
    company: "Regional Health Network",
    story: "ifBash's healthcare expertise transformed our patient outcomes. We now predict and prevent readmissions while delivering the highest quality care in our network's history.",
    metric: "87% readmission reduction with $97M cost savings",
    rating: 5,
    avatar: "/images/testimonials/patricia-williams-cmo.jpg"
  },
  {
    name: "Dr. Michael Chang",
    title: "Research Director",
    company: "BioMed Research Institute", 
    story: "Clinical trial management was revolutionized by ifBash's platform. We accelerate life-saving research while maintaining perfect regulatory compliance.",
    metric: "78% faster trials with 94% compliance rate",
    rating: 5,
    avatar: "/images/testimonials/michael-chang-research.jpg"
  },
  {
    name: "Jennifer Park",
    title: "VP of Operations",
    company: "MedDevice Solutions",
    story: "Medical device safety is critical. ifBash's predictive maintenance platform ensures every device operates safely with zero incidents.",
    metric: "91% device uptime with zero safety incidents",
    rating: 5,
    avatar: "/images/testimonials/jennifer-park-ops.jpg"
  },
  {
    name: "Dr. Robert Kim",
    title: "Clinical Director",
    company: "AdvancedCare Systems",
    story: "The patient experience platform ifBash created delivers personalized care that patients love while improving our clinical outcomes dramatically.",
    metric: "234% improvement in patient engagement",
    rating: 5,
    avatar: "/images/testimonials/robert-kim-clinical.jpg"
  }
];

// Healthcare Solutions
const healthcareSolutions = [
  {
    icon: HeartPulse,
    title: "Patient Care Management",
    description: "Optimize patient outcomes with coordinated care workflows, predictive analytics, and personalized treatment plans",
    benefits: ["Care coordination", "Predictive analytics", "Personalized treatment"],
    gradient: "from-red-500 to-rose-500",
    useCases: ["Care planning", "Patient monitoring", "Outcome tracking"]
  },
  {
    icon: TestTube2,
    title: "Clinical Trial Management", 
    description: "Accelerate research with automated protocols, regulatory compliance, and real-time study monitoring",
    benefits: ["Protocol automation", "Compliance tracking", "Real-time monitoring"],
    gradient: "from-rose-500 to-pink-500",
    useCases: ["Study management", "Regulatory compliance", "Data collection"]
  },
  {
    icon: Stethoscope,
    title: "Medical Device Lifecycle",
    description: "Manage medical equipment with predictive maintenance, compliance tracking, and safety monitoring",
    benefits: ["Predictive maintenance", "Compliance tracking", "Safety monitoring"],
    gradient: "from-pink-500 to-fuchsia-500",
    useCases: ["Device maintenance", "Safety compliance", "Asset tracking"]
  },
  {
    icon: Brain,
    title: "Healthcare Analytics & AI",
    description: "Leverage AI for clinical decision support, population health management, and predictive care",
    benefits: ["Clinical decision support", "Population health", "Predictive care"],
    gradient: "from-fuchsia-500 to-purple-500",
    useCases: ["Clinical insights", "Health analytics", "Care optimization"]
  },
  {
    icon: Shield,
    title: "Healthcare Compliance & Security",
    description: "Ensure HIPAA compliance, data security, and regulatory adherence across all healthcare operations",
    benefits: ["HIPAA compliance", "Data security", "Regulatory adherence"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["Compliance management", "Security monitoring", "Risk assessment"]
  },
  {
    icon: Users,
    title: "Patient Experience Management",
    description: "Enhance patient satisfaction with seamless experiences, communication, and care coordination",
    benefits: ["Patient satisfaction", "Care communication", "Experience optimization"],
    gradient: "from-violet-500 to-indigo-500",
    useCases: ["Patient engagement", "Communication", "Satisfaction tracking"]
  }
];

// Healthcare Metrics
const healthcareMetrics = [
  {
    title: "Readmission Reduction Rate",
    description: "Average reduction in patient readmissions across healthcare implementations",
    stat: "87% Reduction",
    icon: HeartPulse
  },
  {
    title: "Care Quality Improvement",
    description: "Average improvement in clinical care quality scores and patient outcomes",
    stat: "156% Better",
    icon: Award
  },
  {
    title: "Healthcare Cost Savings", 
    description: "Average cost reduction achieved through healthcare process optimization",
    stat: "$97M Savings",
    icon: DollarSign
  },
  {
    title: "Patient Satisfaction Score",
    description: "Average improvement in patient satisfaction and experience ratings",
    stat: "99% Satisfaction",
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
    answer: "ServiceNow transforms patient care through unified care plans, automated clinical workflows, real-time communication between care teams, and predictive analytics for early intervention. Our platform ensures seamless coordination across all care providers while maintaining complete patient history visibility."
  },
  {
    question: "What clinical trial management capabilities does ServiceNow provide?",
    answer: "ServiceNow offers comprehensive clinical trial management including protocol automation, patient recruitment workflows, regulatory compliance tracking, data collection automation, and real-time study monitoring. Our platform accelerates research while ensuring FDA and international regulatory compliance."
  },
  {
    question: "How can ServiceNow support medical device lifecycle management?",
    answer: "ServiceNow provides end-to-end medical device management with predictive maintenance, compliance tracking, safety monitoring, inventory management, and automated reporting. Our platform ensures devices operate safely and efficiently while meeting all regulatory requirements."
  },
  {
    question: "What HIPAA compliance features are included?",
    answer: "ServiceNow provides comprehensive HIPAA compliance including data encryption, access controls, audit logging, patient consent management, breach notification workflows, and privacy controls. Our platform is designed to protect patient data while enabling healthcare innovation."
  },
  {
    question: "How does ServiceNow integrate with existing healthcare systems?",
    answer: "ServiceNow seamlessly integrates with electronic health records (EHR), hospital information systems (HIS), laboratory systems, imaging systems, and medical devices. Our extensive healthcare API library and HL7 FHIR support ensure smooth integration with existing healthcare technology stacks."
  },
  {
    question: "What ROI can healthcare organizations expect from ServiceNow?",
    answer: "Healthcare organizations typically see 30-50% improvements in care coordination efficiency, 40-70% reductions in readmissions, and 25-40% cost savings through process optimization. Most organizations achieve positive ROI within 12-18 months through improved patient outcomes and operational efficiency."
  },
  {
    question: "How does ServiceNow support population health management?",
    answer: "ServiceNow enables population health management through patient risk stratification, care gap identification, preventive care automation, chronic disease management, and health outcome tracking. Our platform helps healthcare organizations improve community health while reducing costs."
  },
  {
    question: "What training and support is provided for healthcare implementations?",
    answer: "We provide specialized healthcare training including clinical workflow optimization, HIPAA compliance procedures, patient safety protocols, and system administration. Our support includes 24/7 monitoring, security updates, compliance guidance, and ongoing clinical optimization services."
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
      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Healthcare Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with Healthcare Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
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

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
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

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 font-semibold">
                    Healthcare & Life Sciences
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    Patient-Centered{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 font-semibold">
                      Innovation
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed">
                  Transform healthcare delivery with <span className="font-semibold text-rose-300">patient-centered care</span>, clinical excellence, and intelligent healthcare operations. Achieve <span className="font-semibold text-pink-300">87% fewer readmissions</span> with <span className="font-semibold text-fuchsia-300">$97M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                  <div className="group bg-gradient-to-br from-red-600/20 via-rose-600/20 to-pink-600/20 hover:from-red-600/30 hover:via-rose-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-red-400/20 hover:border-red-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">87%</div>
                    <div className="text-xs sm:text-sm text-red-100">Less Readmissions</div>
                  </div>
                  <div className="group bg-gradient-to-br from-rose-600/20 via-pink-600/20 to-fuchsia-600/20 hover:from-rose-600/30 hover:via-pink-600/30 hover:to-fuchsia-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-rose-400/20 hover:border-rose-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400">156%</div>
                    <div className="text-xs sm:text-sm text-rose-100">Better Care</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-pink-600/20 via-fuchsia-600/20 to-purple-600/20 hover:from-pink-600/30 hover:via-fuchsia-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">$97M</div>
                    <div className="text-xs sm:text-sm text-pink-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
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
                  </button>
                  
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
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-red-500/15 to-rose-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="Patient Care Management Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-red-600 to-rose-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">87%</div>
                      <div className="text-xs text-red-200">Less Readmissions</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-rose-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="solutions-overview">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                  Healthcare Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Save Lives
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of healthcare delivery with intelligent solutions designed for patient-centered care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {healthcareSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthcareMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-red-900 to-rose-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="implementation">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">
                  Our Healthcare Implementation
                </span>
                <br />
                <span className="text-white">
                  Approach
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                A specialized 4-phase methodology designed specifically for healthcare requirements and patient safety standards.
              </p>
            </div>

            <div className="space-y-12">
              {implementationApproach.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                          <div className="text-red-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-red-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-red-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-rose-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-3xl p-8 backdrop-blur-sm border border-red-400/20 hover:border-red-400/40 transition-all duration-500 transform group-hover:scale-105`}>
                          <div className={`w-full h-full bg-gradient-to-br from-red-600/30 to-rose-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-red-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-red-300 mt-2">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < implementationApproach.length - 1 && (
                    <div className="flex justify-center mt-8 mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-red-500 to-rose-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button 
                onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-rose-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Healthcare Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="case-studies">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-pink-600">
                  Healthcare Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how healthcare leaders have transformed their operations with ServiceNow solutions that save lives and improve outcomes.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
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

                        <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-4 border-l-4 border-rose-500">
                          <Quote className="h-6 w-6 text-rose-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl p-6 overflow-hidden">
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="testimonials">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
                  What Healthcare Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                Hear from healthcare executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-6">
                            <HeartPulse className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-rose-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
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
              <div className="flex justify-center space-x-2 mt-8">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-rose-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="faq">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Healthcare Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for healthcare and life sciences.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
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
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h3>
                <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                  Join healthcare leaders saving lives with better care. Get patient-centered solutions that deliver 87% fewer readmissions and $97M savings.
                </p>
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Healthcare Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
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
