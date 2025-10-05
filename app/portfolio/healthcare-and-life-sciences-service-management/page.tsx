'use client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Rocket,
  Target,
  Brain,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  Search,
  Filter,
  Calendar,
  User,
  GraduationCap,
  Coffee,
  Briefcase,
  Code,
  Lightbulb,
  Award,
  Shield,
  Zap,
  Settings,
  Database,
  TrendingUp,
  Quote,
  Play,
  Mail,
  Phone,
  Building,
  Factory,
  Stethoscope,
  Car,
  Banknote,
  ShoppingCart,
  Radio,
  Fuel,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Eye,
  BarChart3,
  Timer,
  Gauge,
  Video,
  Mic,
  Users2,
  Trophy,
  Presentation,
  ChevronRight,
  Share2,
  Bell,
  PlusCircle,
  Tag,
  Newspaper,
  Layers,
  Network,
  Cpu,
  Monitor,
  GitBranch,
  Workflow,
  PieChart,
  LineChart,
  Activity,
  Cloud,
  CloudLightning,
  Compass,
  Package,
  AlertTriangle,
  TrendingDown,
  RefreshCw,
  MousePointer,
  Layout,
  UserCheck,
  Palette,
  BarChart,
  GitCommit,
  Info,
  List,
  Server,
  TabletSmartphone,
  Sparkles,
  Boxes,
  Component,
  Layers3,
  ChevronDown,
  Building2,
  Cog,
  TreePine,
  Map,
  FileBarChart,
  CloudCog,
  CreditCard,
  ShieldCheck,
  Banknote as CostIcon,
  CloudDrizzle,
  Wrench,
  Search as DiscoverIcon,
  AlertTriangle as AlertIcon,
  HardHat,
  Laptop,
  HardDrive,
  Smartphone,
  ChevronUp,
  Bot,
  Radar,
  Route,
  FileX,
  MonitorSpeaker,
  CircuitBoard,
  Gauge as GaugeIcon,
  ChevronRightIcon,
  HelpCircle,
  RepeatIcon,
  GitMerge,
  Shuffle,
  BarChart4,
  Layers2,
  Link,
  Navigation,
  Gamepad2,
  TestTube2,
  Smile,
  Leaf,
  Headphones,
  ThumbsUp,
  MessageSquare,
  Headset,
  Truck,
  ShoppingBag,
  Store,
  Receipt,
  Calculator,
  HandCoins,
  Percent,
  FileCheck,
  Building as BankIcon,
  Scale,
  HeartPulse,
  UserCog,
  FileUser,
  Users as Patients
} from "lucide-react";

export default function HealthcareLifeSciencesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // SEO JSON-LD with FAQ Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Healthcare and Life Sciences - ServiceNow HCLS Implementation",
    "description": "Gain visibility to deliver focused patient care with Healthcare and Life Sciences Management. Patient 360, EMR Help, digital workflows, and AI automation.",
    "applicationCategory": "Healthcare and Life Sciences Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Healthcare and Life Sciences Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow HCLS centralizes shared services and removes operational barriers impacting care teams. It provides Patient 360 view, EMR integration, digital workflows, and AI automation for consumer-grade healthcare experiences."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Patient 360 and how does it improve patient care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patient 360 pulls data from disparate systems into a single, comprehensive view of patient information, providing healthcare practitioners with complete visibility for more informed decision-making and personalized care."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow HCLS content)
  const benefits = [
    {
      icon: Users,
      title: "Unite teams and information",
      description: "Liberate practitioners from repetitive tasks by giving them the tools and 360-degree patient visibility they need. Improve the experience for both patient and clinician.",
      color: "from-blue-500 to-indigo-500",
      stats: "360-degree patient visibility"
    },
    {
      icon: Heart,
      title: "Improve the care experience",
      description: "Enable patients to access care or make requests from anywhere. Improve the care experience along with patient satisfaction and engagement.",
      color: "from-indigo-500 to-purple-500",
      stats: "Enhanced patient satisfaction"
    },
    {
      icon: Workflow,
      title: "Streamline operations",
      description: "Digitize internal processes to become more proactive, predictive, and resilient, all while maintaining security and compliance. Remove operational barriers that impact care teams.",
      color: "from-purple-500 to-pink-500",
      stats: "Digitized processes"
    },
    {
      icon: Brain,
      title: "AI-powered healthcare workflows",
      description: "Put AI to work with business-ready capabilities that empower healthcare teams with intelligent automation and smart answers at their fingertips.",
      color: "from-pink-500 to-rose-500",
      stats: "AI-enabled intelligence"
    }
  ];

  // Featured Apps and Capabilities (From ServiceNow HCLS content)
  const featuredApps = [
    {
      icon: Stethoscope,
      title: "EMR Help",
      description: "Report healthcare cases for any issue from within the electronic medical record, optimizing clinician time and enabling seamless service requests.",
      capabilities: [
        "EMR system integration",
        "Service request automation",
        "Clinician time optimization",
        "Issue routing to right teams"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "HL7 FHIR Data Model",
      description: "Gain data tables for organizations, patients, practitioners, insurance, revenue cycle, and clinical information with industry-standard compliance.",
      capabilities: [
        "Industry-standard data model",
        "Patient information tables",
        "Revenue cycle integration",
        "Clinical data management"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: UserCog,
      title: "Patient Support Services",
      description: "Facilitate the process of onboarding patients into support services with streamlined workflows and automated coordination.",
      capabilities: [
        "Patient onboarding automation",
        "Support service coordination",
        "Workflow streamlining",
        "Service facilitation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Patient 360",
      description: "Pull data from disparate systems into a single, comprehensive view of patient information for enhanced decision-making and personalized care.",
      capabilities: [
        "Comprehensive patient view",
        "Disparate system integration",
        "Enhanced decision-making",
        "Personalized care delivery"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Calendar,
      title: "Pre-Visit Management",
      description: "Streamline patient procedure authorization and scheduling with automated workflows that reduce administrative burden and improve efficiency.",
      capabilities: [
        "Procedure authorization",
        "Scheduling automation",
        "Administrative reduction",
        "Workflow efficiency"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: FileCheck,
      title: "Consent Management",
      description: "Manage consent forms and program enrollment digitally and securely, ensuring compliance and streamlined patient interactions.",
      capabilities: [
        "Digital consent forms",
        "Program enrollment automation",
        "Security compliance",
        "Patient interaction streamlining"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      description: "Replace paper documents with easy-to-manage, route, and store digital documents for improved efficiency and accessibility.",
      capabilities: [
        "Paper replacement automation",
        "Document routing",
        "Digital storage",
        "Accessibility improvement"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Bot,
      title: "Virtual Agent",
      description: "Resolve issues fast with an intelligent chatbot that understands simple, human language and provides 24/7 patient support.",
      capabilities: [
        "Intelligent chatbot",
        "Natural language processing",
        "24/7 patient support",
        "Fast issue resolution"
      ],
      color: "from-yellow-500 to-lime-500"
    }
  ];

  // Additional Key Features
  const additionalFeatures = [
    {
      title: "Omnichannel Support",
      description: "Support patients and handle customer interactions from any channel with unified communication capabilities.",
      icon: MessageSquare,
      benefit: "Unified patient communication"
    },
    {
      title: "Self-Service Portal",
      description: "Equip patients with a self-service portal and suite of helpful capabilities for enhanced engagement.",
      icon: Globe,
      benefit: "Enhanced patient engagement"
    },
    {
      title: "Knowledge Management",
      description: "Improve business efficiency with easy knowledge sharing and collaboration across healthcare teams.",
      icon: BookOpen,
      benefit: "Improved collaboration"
    },
    {
      title: "Predictive Intelligence",
      description: "Simplify and accelerate everyday work with built-in machine learning for healthcare operations.",
      icon: Brain,
      benefit: "ML-powered insights"
    },
    {
      title: "Performance Analytics",
      description: "Anticipate trends, prioritize resources, and continuously improve with real-time healthcare analytics.",
      icon: BarChart3,
      benefit: "Real-time optimization"
    },
    {
      title: "Case Management",
      description: "Standardize documentation and fulfillment of employee inquiries and requests across healthcare operations.",
      icon: FileUser,
      benefit: "Standardized processes"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Healthcare and Life Sciences Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Healthcare and Life Sciences Service Management (HCLS) centralizes shared services and removes operational barriers impacting care teams:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Creates consumer-grade healthcare experiences for patients and providers</li>
            <li>Unites teams and information with 360-degree patient visibility</li>
            <li>Streamlines operations through digitized internal processes</li>
            <li>Maintains security and compliance while improving care delivery</li>
            <li>Leverages AI and automation for intelligent healthcare workflows</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> for enterprise automation with little coding required.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Patient 360 and how does it improve patient care?",
      answer: (
        <div>
          <p className="mb-3">Patient 360 is a comprehensive view that revolutionizes patient care delivery:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Single Patient View:</strong> Pulls data from disparate systems into one comprehensive patient information view</li>
            <li><strong>Enhanced Decision-Making:</strong> Provides healthcare practitioners with complete patient history, treatment plans, and relevant details</li>
            <li><strong>Personalized Care:</strong> Enables tailored patient care based on individual patient needs and medical history</li>
            <li><strong>Holistic Medical View:</strong> Access to complete medical history, medication, and essential details in organized manner</li>
            <li><strong>Workflow Optimization:</strong> Quick access to vital patient information for more effective patient care</li>
          </ul>
          <p className="mt-3">
            Healthcare professionals can now make more informed decisions and provide truly personalized care with complete patient visibility.
          </p>
        </div>
      )
    },

    {
      question: "What are the key featured apps and capabilities in ServiceNow HCLS?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow HCLS comprises comprehensive apps and capabilities that scale with healthcare needs:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Core Clinical Applications:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>EMR Help:</strong> Report healthcare cases from within electronic medical records</li>
                <li><strong>HL7 FHIR Data Model:</strong> Industry-standard data tables for comprehensive healthcare information</li>
                <li><strong>Patient 360:</strong> Single comprehensive view of patient information from disparate systems</li>
                <li><strong>Pre-Visit Management:</strong> Streamlined patient procedure authorization and scheduling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Digital Workflow Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Consent Management:</strong> Digital and secure consent forms and program enrollment</li>
                <li><strong>Digital Documentation:</strong> Paperless document management with routing capabilities</li>
                <li><strong>Virtual Agent:</strong> AI-powered chatbot for patient support and issue resolution</li>
                <li><strong>Omnichannel Support:</strong> Multi-channel patient interaction management</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow HCLS integrate with Electronic Medical Records (EMR)?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow integrates seamlessly with EMR platforms for enhanced clinical workflows:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>EMR Help Integration:</strong> Enables care teams to manage requests directly at the point of care within EMR systems</li>
            <li><strong>Epic Integration:</strong> Native integration with Epic allows reporting issues and managing requests without leaving clinical workflows</li>
            <li><strong>Streamlined Operations:</strong> Care Team Operations are boosted with efficiency, freeing up time for patient-centered care</li>
            <li><strong>Request Management:</strong> Handle facilities management, procurement, patient transportation, and care coordination from within EMR</li>
            <li><strong>Clinical Workflow Continuity:</strong> Support staff can operate within existing clinical workflows without system disruption</li>
          </ul>
          <p className="mt-3">
            This integration ensures healthcare providers can focus on high-quality, reliable care while maintaining operational efficiency.
          </p>
        </div>
      )
    },

    {
      question: "What AI and automation capabilities does ServiceNow HCLS provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow HCLS leverages comprehensive AI and automation for healthcare transformation:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">AI-Powered Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Predictive Intelligence with built-in machine learning for healthcare operations</li>
                <li>Virtual Agent with natural language processing for patient support</li>
                <li>Performance Analytics for trend anticipation and resource prioritization</li>
                <li>Guided Decisions with contextual next-best-action recommendations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Workflow Automation:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Automated healthcare workflows for patient onboarding and scheduling</li>
                <li>Digital Documentation automation replacing paper-based processes</li>
                <li>Case Management with standardized documentation and fulfillment</li>
                <li>Pre-Visit Management with automated authorization and scheduling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Clinical Decision Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>AI-driven insights for treatment outcomes and patient care decisions</li>
                <li>Predictive analytics for inventory management and resource planning</li>
                <li>Real-time patient monitoring with automated alerts for condition changes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Healthcare and Life Sciences implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on healthcare organization size, complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HCLS Standard Implementation:</strong> Starting from $350K - includes Patient 360, EMR Help, basic digital workflows for mid-size healthcare providers</li>
            <li><strong>HCLS Professional Implementation:</strong> $500K-$750K - includes advanced AI capabilities, comprehensive integrations, and full digital transformation for large health systems</li>
            <li><strong>Enterprise HCLS Suite:</strong> $800K+ - complete solution with custom clinical workflows, AI automation, regulatory compliance, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through operational efficiency (40%), improved patient satisfaction (35%), and reduced administrative burden (50%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "HCLS ROI Calculator", url: "/hcls-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow HCLS?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on healthcare complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HCLS Standard:</strong> 16-20 weeks for core capabilities including Patient 360, EMR Help, and basic digital workflows</li>
            <li><strong>HCLS Professional:</strong> 20-26 weeks including AI automation, advanced analytics, and comprehensive EMR integration</li>
            <li><strong>Enterprise HCLS Suite:</strong> 26-34 weeks for complete solution with custom clinical workflows, AI capabilities, and regulatory compliance</li>
          </ul>
          <p className="mt-3">
            Our methodology: Healthcare Assessment & Compliance Review (4-6 weeks) → Core Platform Configuration & Patient 360 Setup (10-14 weeks) → EMR Integration & Testing (6-8 weeks) → Go-Live & Clinical Training (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow HCLS ensure healthcare compliance and data security?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow HCLS provides comprehensive compliance and security for healthcare organizations:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HIPAA Compliance:</strong> Built-in HIPAA compliance ensuring patient privacy and data security standards</li>
            <li><strong>Regulatory Adherence:</strong> Compliance with healthcare regulations and industry standards for patient data handling</li>
            <li><strong>Data Security:</strong> Enterprise-grade security with encryption, access controls, and audit trails</li>
            <li><strong>HL7 FHIR Standards:</strong> Industry-standard data model ensuring interoperability and compliance</li>
            <li><strong>Audit Capabilities:</strong> Comprehensive audit trails for regulatory reporting and compliance validation</li>
            <li><strong>Secure Integrations:</strong> HIPAA-compliant integration with EHR systems and clinical applications</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Healthcare organizations maintain full regulatory compliance while achieving operational excellence and improved patient care.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on HCLS success stories)
  const caseStudies = [
    {
      title: "Gold Coast Health Builds Workflows Across Entire Organization",
      client: "Gold Coast Health",
      industry: "Healthcare Provider",
      challenge: "Need to build workflows across entire organization for both non-clinical and clinical operations while maintaining efficiency and care quality",
      solution: "ServiceNow Healthcare and Life Sciences Service Management with comprehensive workflow automation, Patient 360 integration, and clinical system connectivity",
      results: [
        { metric: "Organization-wide", description: "Workflow automation" },
        { metric: "Clinical", description: "Process integration" },
        { metric: "Non-clinical", description: "Operation streamlining" },
        { metric: "Enhanced", description: "Care coordination" }
      ],
      testimonial: "The ServiceNow Healthcare and Life Sciences Service Management solution allows us to build workflows across our entire organization for non-clinical and clinical workflows.",
      executive: "Executive Director, Strategy, Transformation, Major Capital and Digital",
      logo: "/images/clients/gold-coast-health-logo.png"
    },
    {
      title: "Omnicare Reaches 90% First-Contact Resolution Rate",
      client: "Omnicare",
      industry: "Healthcare Services",
      challenge: "Complex patient service requests requiring multiple touchpoints and lengthy resolution times affecting patient satisfaction and operational efficiency",
      solution: "ServiceNow HCLS with omnichannel support, virtual agent capabilities, and streamlined case management for pharmaceutical care services",
      results: [
        { metric: "90%", description: "First-contact resolution rate" },
        { metric: "Omnichannel", description: "Patient support" },
        { metric: "Streamlined", description: "Case management" },
        { metric: "Enhanced", description: "Patient satisfaction" }
      ],
      testimonial: "ServiceNow HCLS enabled us to achieve 90% first-contact resolution rate, dramatically improving patient satisfaction and operational efficiency.",
      executive: "VP of Patient Services",
      logo: "/images/clients/omnicare-logo.png"
    },
    {
      title: "Orbita Achieves 70% Reduction in Nurse Response Times",
      client: "Orbita",
      industry: "Healthcare Technology",
      challenge: "Lengthy nurse response times for patient requests and clinical support affecting patient care quality and operational workflow efficiency",
      solution: "ServiceNow HCLS with AI-powered virtual agent, automated request routing, and integrated clinical workflow management for healthcare technology platform",
      results: [
        { metric: "70%", description: "Reduction in response times" },
        { metric: "AI-Powered", description: "Virtual agent deployment" },
        { metric: "Automated", description: "Request routing" },
        { metric: "Improved", description: "Clinical workflows" }
      ],
      testimonial: "ServiceNow HCLS with AI-powered capabilities reduced our nurse response times by 70%, significantly improving patient care and clinical efficiency.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/orbita-logo.png"
    },
    {
      title: "Siemens Reaches 87% Employee Satisfaction Rate in Healthcare Division",
      client: "Siemens Healthcare",
      industry: "Medical Technology",
      challenge: "Complex employee service requests and support needs across global healthcare technology operations affecting productivity and satisfaction",
      solution: "ServiceNow HCLS with comprehensive case management, self-service capabilities, and integrated support services for healthcare technology workforce",
      results: [
        { metric: "87%", description: "Employee satisfaction rate" },
        { metric: "Global", description: "Healthcare operations" },
        { metric: "Self-Service", description: "Capability deployment" },
        { metric: "Integrated", description: "Support services" }
      ],
      testimonial: "ServiceNow HCLS helped us achieve 87% employee satisfaction rate across our global healthcare technology operations through integrated support services.",
      executive: "Head of Digital Transformation",
      logo: "/images/clients/siemens-healthcare-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Healthcare and Life Sciences - Complete ServiceNow HCLS Portfolio | ifBash</title>
        <meta
          name="description"
          content="Gain visibility to deliver focused patient care with Healthcare and Life Sciences Management. Patient 360, EMR Help, digital workflows, and AI automation."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss HCLS Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss HCLS Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered HCLS
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Patient 360
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Healthcare & Life
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                      Sciences
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-indigo-300">Gain visibility to deliver focused patient care</span> with Patient 360, EMR integration, digital workflows, and{' '}
                  <span className="font-semibold text-purple-300">AI-powered healthcare automation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get HCLS Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Get Data Sheet
                    </span>
                  </button>
                </div>

                {/* Healthcare AI Badge */}
                <div className="bg-gradient-to-r from-blue-500/15 to-indigo-500/15 backdrop-blur-sm rounded-xl p-4 border border-blue-300/20">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="h-8 w-8 text-blue-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Consumer-Grade Healthcare Experiences</div>
                      <div className="text-sm text-blue-200">AI-powered platform for patient care transformation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Healthcare and Life Sciences Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-indigo-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Patient</div>
                      <div className="text-xs text-blue-200">360° View</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">EMR</div>
                      <div className="text-xs text-indigo-200">Integration</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Stethoscope className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <HeartPulse className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Transform Healthcare
                </span>
                <br />
                <span className="text-gray-800">
                  Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Create consumer-grade healthcare experiences with unified teams, improved care delivery, and AI-powered automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Key Value</div>
                      <div className="text-blue-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Healthcare Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive healthcare applications that scale with your needs, from Patient 360 to EMR integration and AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {app.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {app.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                  Additional Healthcare
                </span>
                <br />
                <span className="text-gray-800">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Extended healthcare capabilities including analytics, knowledge management, and intelligent automation for comprehensive care delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Key Benefit</div>
                      <div className="text-purple-600 text-lg font-bold">{feature.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Healthcare and Life Sciences
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about HCLS implementation, Patient 360, EMR integration, and healthcare transformation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 focus:outline-none focus:bg-gray-50/50"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        activeFAQ === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-pink-500 to-rose-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.text}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real HCLS Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how healthcare organizations transformed their operations with AI-powered Healthcare and Life Sciences Management.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-200 border border-red-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-red-400">
                              <Quote className="h-6 w-6 text-red-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-red-300">— {study.executive}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                  <div className="text-2xl font-bold text-green-400 mb-1">{result.metric}</div>
                                  <div className="text-xs text-gray-300">{result.description}</div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                  ))}
                                </div>
                                <span className="text-red-200 text-sm">(5.0/5.0)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-red-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Patient Care?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive healthcare and life sciences management with Patient 360 and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact HCLS Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">hcls-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Book Demo</p>
                  </div>
                </div>
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
