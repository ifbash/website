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
  AlertCircle,
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
  Crown
} from "lucide-react";

export default function ITServiceManagementPage() {
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
    "name": "IT Service Management - ServiceNow ITSM Implementation",
    "description": "Transform the impact and delivery of IT with resilient, productivity-boosting services. Streamline IT operations with comprehensive incident, problem, and change management.",
    "applicationCategory": "IT Service Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow IT Service Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow ITSM is an approach to managing end-to-end IT delivery. It provides scalable workflows to manage and deliver IT services through a single cloud-based platform, helping IT teams provision all relevant IT services."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main modules of ServiceNow ITSM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITSM includes core modules like Incident Management, Problem Management, Change Management, Knowledge Management, Service Catalog, Request Management, and Release Management, all designed following ITIL standards."
        }
      }
    ]
  };

  // Benefits (Based on ServiceNow research)
  const benefits = [
    {
      icon: Workflow,
      title: "Streamline IT operations",
      description: "Transform IT operations with automated workflows, reduce manual tasks, and deliver resilient services that boost productivity and user satisfaction.",
      color: "from-blue-500 to-indigo-500",
      stats: "70% reduction in manual tasks"
    },
    {
      icon: Timer,
      title: "Faster incident resolution",
      description: "Restore services quickly with intelligent routing, automated assignment, and AI-powered recommendations to resolve issues before they impact users.",
      color: "from-indigo-500 to-purple-500",
      stats: "60% faster resolution times"
    },
    {
      icon: Shield,
      title: "Proactive problem management",
      description: "Identify and eliminate root causes of recurring incidents, prevent future issues, and maintain service stability with structured problem resolution.",
      color: "from-purple-500 to-pink-500",
      stats: "85% reduction in recurring issues"
    },
    {
      icon: TrendingUp,
      title: "Continuous service improvement",
      description: "Drive continuous improvement with performance analytics, process mining, and predictive intelligence to optimize IT service delivery.",
      color: "from-green-500 to-emerald-500",
      stats: "40% improvement in service quality"
    }
  ];

  // Core ITSM Modules (Based on ServiceNow and ITIL standards)
  const coreModules = [
    {
      icon: AlertTriangle,
      title: "Incident Management",
      description: "Restore services and resolve issues quickly. Keep employees productive by ensuring they can easily contact support to track and fix issues.",
      capabilities: [
        "Automated incident detection and classification",
        "Intelligent routing and assignment",
        "AI-powered resolution recommendations",
        "Self-service portal with virtual agents"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: HelpCircle,
      title: "Problem Management",
      description: "Identify and manage root causes of IT incidents. Prevent recurring issues and minimize service disruptions with structured problem resolution.",
      capabilities: [
        "Root cause analysis and investigation",
        "Known error database management", 
        "Proactive problem identification",
        "Workaround documentation and solutions"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: GitMerge,
      title: "Change Management",
      description: "Plan, approve, and implement IT changes with confidence. Minimize risk and ensure successful change delivery with structured workflows.",
      capabilities: [
        "Risk-aware change planning and approval",
        "Automated change scheduling",
        "Change impact assessment",
        "Emergency and standard change processes"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FileText,
      title: "Knowledge Management",
      description: "Create, store, and share knowledge articles to enable self-service and faster issue resolution with centralized knowledge repository.",
      capabilities: [
        "Centralized knowledge repository",
        "AI-powered knowledge suggestions",
        "Article lifecycle management",
        "Self-service knowledge portal"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Service Catalog",
      description: "Provide users with an intuitive interface to request services and products with self-service capabilities and automated fulfillment.",
      capabilities: [
        "Interactive user interface",
        "Self-service request portal",
        "Automated service fulfillment",
        "Mobile-friendly catalog browsing"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: User,
      title: "Request Management",
      description: "Handle service requests efficiently with automated workflows, approval processes, and service level management.",
      capabilities: [
        "Automated request routing",
        "Multi-level approval workflows",
        "Service level tracking",
        "Request lifecycle management"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Rocket,
      title: "Release Management",
      description: "Deliver new features and updates seamlessly with coordinated release planning, testing, and deployment processes.",
      capabilities: [
        "Release planning and coordination",
        "Automated deployment workflows",
        "Testing and validation processes",
        "Rollback and recovery procedures"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Bot,
      title: "Now Assist for ITSM",
      description: "AI-powered virtual agent that automates repetitive tasks, accelerates ticket resolution, and enhances user experiences.",
      capabilities: [
        "Natural language processing",
        "Automated task execution",
        "Intelligent recommendations",
        "24/7 virtual assistance"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // ITSM Package Options (Based on ServiceNow research)
  const packageOptions = [
    {
      icon: Package,
      title: "ITSM Standard",
      description: "Essential ITSM capabilities for growing businesses. Includes core incident, problem, change, and request management with Walk-Up Experience.",
      details: [
        "Incident Management",
        "Problem Management", 
        "Change Management",
        "Request Management",
        "Walk-Up Experience",
        "Asset and Cost Management"
      ],
      color: "from-blue-500 to-indigo-500",
      ideal: "Growing businesses and smaller IT teams"
    },
    {
      icon: Zap,
      title: "ITSM Pro",
      description: "Advanced automation and self-service capabilities. Includes Predictive Intelligence and Performance Analytics for scaling businesses.",
      details: [
        "All Standard features",
        "Predictive Intelligence",
        "Performance Analytics", 
        "Advanced Automation",
        "Self-Service Optimization",
        "Proactive Issue Prevention"
      ],
      color: "from-indigo-500 to-purple-500",
      ideal: "Scaling businesses focused on automation"
    },
    {
      icon: Crown,
      title: "ITSM Enterprise",
      description: "Maximum process optimization for large enterprises. Includes Workforce Optimization, Process Mining, and advanced compliance features.",
      details: [
        "All Pro features",
        "Workforce Optimization",
        "Process Mining",
        "Advanced Compliance",
        "Vendor Relationship Management",
        "Enterprise-Scale Operations"
      ],
      color: "from-purple-500 to-pink-500",
      ideal: "Large enterprises with complex processes"
    }
  ];

  // Platform Capabilities
  const platformCapabilities = [
    {
      icon: Brain,
      title: "AI and Machine Learning",
      description: "Leverage AI for intelligent ticket routing, predictive analytics, and automated resolution recommendations.",
      details: [
        "Intelligent incident assignment",
        "Predictive issue detection",
        "Automated resolution suggestions",
        "Natural language processing"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate routine tasks and processes with visual workflow designer and no-code automation capabilities.",
      details: [
        "Visual workflow designer",
        "No-code automation",
        "Task orchestration",
        "Process optimization"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Analytics and Reporting",
      description: "Gain insights into service performance with real-time dashboards, KPI tracking, and comprehensive reporting.",
      details: [
        "Real-time dashboards",
        "KPI and SLA tracking",
        "Performance analytics",
        "Custom reporting"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      description: "Enable mobile workforce with native mobile apps for agents and end-users with full ITSM functionality.",
      details: [
        "Native mobile apps",
        "Mobile-optimized interfaces",
        "Offline capabilities",
        "Push notifications"
      ],
      color: "from-yellow-500 to-green-500"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow IT Service Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow ITSM is an approach to managing end-to-end IT delivery that helps organizations:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide scalable workflows to manage and deliver IT services through a single cloud-based platform</li>
            <li>Assist IT teams in the provisioning of all relevant IT services</li>
            <li>Transform the impact and delivery of IT with resilient, productivity-boosting services</li>
            <li>Automate routine tasks and reduce manual effort</li>
            <li>Improve user satisfaction with faster resolution times</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow Platform</strong> with AI and automation capabilities.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main modules of ServiceNow ITSM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow ITSM includes eight core modules designed following ITIL standards:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Incident Management:</strong> Restore services and resolve issues quickly with automated workflows</li>
            <li><strong>Problem Management:</strong> Identify and manage root causes to prevent recurring incidents</li>
            <li><strong>Change Management:</strong> Plan, approve, and implement IT changes with minimal risk</li>
            <li><strong>Knowledge Management:</strong> Create and share knowledge articles for self-service</li>
            <li><strong>Service Catalog:</strong> Provide intuitive interface for service and product requests</li>
            <li><strong>Request Management:</strong> Handle service requests with automated workflows</li>
            <li><strong>Release Management:</strong> Deliver updates seamlessly with coordinated processes</li>
            <li><strong>Now Assist for ITSM:</strong> AI-powered virtual agent for task automation</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are the different ITSM package options?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers three ITSM packages to meet different business needs:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">ITSM Standard</h4>
              <p className="text-sm mb-2">Ideal for growing businesses and smaller IT teams needing essential ITSM capabilities.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Core incident, problem, change, and request management</li>
                <li>Walk-Up Experience for in-person support</li>
                <li>Asset and cost management foundation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">ITSM Pro</h4>
              <p className="text-sm mb-2">For scaling businesses focused on automation and self-service optimization.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus advanced automation</li>
                <li>Predictive Intelligence for proactive issue prevention</li>
                <li>Performance Analytics for continuous improvement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">ITSM Enterprise</h4>
              <p className="text-sm mb-2">For large enterprises seeking maximum process optimization and compliance.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Pro features plus enterprise-scale capabilities</li>
                <li>Workforce Optimization and Process Mining</li>
                <li>Advanced compliance and vendor management</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ITSM integrate with ITIL best practices?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow ITSM is designed to align with ITIL (Information Technology Infrastructure Library) standards:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITIL Process Alignment:</strong> All ITSM modules follow ITIL best practices and frameworks</li>
            <li><strong>Service Lifecycle Management:</strong> Supports complete ITIL service lifecycle from strategy to continual improvement</li>
            <li><strong>Standard Workflows:</strong> Pre-built workflows based on ITIL processes</li>
            <li><strong>Best Practice Templates:</strong> Ready-to-use templates for ITIL implementation</li>
            <li><strong>Compliance Support:</strong> Built-in compliance features for ITIL standards</li>
          </ul>
          <p className="mt-3">
            This ensures organizations can implement industry-standard IT service management practices.
          </p>
        </div>
      )
    },

    {
      question: "How does Now Assist enhance ITSM capabilities?",
      answer: (
        <div>
          <p className="mb-3">Now Assist for ITSM provides AI-powered capabilities that transform service delivery:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">AI-Powered Automation:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Natural language processing for user interactions</li>
                <li>Automated task execution and workflow completion</li>
                <li>Intelligent ticket routing and assignment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Enhanced User Experience:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>24/7 virtual assistance for end-users</li>
                <li>Contextual knowledge recommendations</li>
                <li>Self-service capabilities with AI guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Agent Productivity:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>AI-powered resolution suggestions</li>
                <li>Automated case summarization</li>
                <li>Predictive insights for proactive service</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow ITSM implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on package selection, organization size, and customization requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITSM Standard Implementation:</strong> Starting from $150K - includes core modules and basic configuration</li>
            <li><strong>ITSM Pro Implementation:</strong> $250K-$400K - includes advanced automation and predictive intelligence</li>
            <li><strong>ITSM Enterprise Implementation:</strong> $500K+ - full enterprise suite with process optimization and advanced features</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-9 months through productivity gains (40-60%), cost reduction, and improved user satisfaction.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "ITSM ROI Calculator", url: "/itsm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow ITSM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on package scope and organizational complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITSM Standard:</strong> 12-16 weeks for core incident, problem, and change management</li>
            <li><strong>ITSM Pro:</strong> 16-22 weeks including automation, analytics, and predictive intelligence</li>
            <li><strong>ITSM Enterprise:</strong> 20-28 weeks for complete suite with workforce optimization and process mining</li>
          </ul>
          <p className="mt-3">
            Our methodology: Requirements & Design (3-4 weeks) → Configuration & Development (8-12 weeks) → Testing & Training (3-4 weeks) → Go-Live & Support (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow ITSM support mobile and remote workforce?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow ITSM provides comprehensive mobile and remote workforce support:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Native Mobile Apps:</strong> Full-featured mobile applications for agents and end-users</li>
            <li><strong>Mobile-Optimized Interfaces:</strong> Responsive design for all ITSM processes</li>
            <li><strong>Offline Capabilities:</strong> Work offline and sync when connected</li>
            <li><strong>Virtual Agent Support:</strong> AI-powered assistance available 24/7</li>
            <li><strong>Self-Service Portal:</strong> Complete self-service capabilities on mobile devices</li>
            <li><strong>Push Notifications:</strong> Real-time alerts and updates</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations see 50% improvement in agent productivity and 70% increase in user satisfaction.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ITSM implementation success stories)
  const caseStudies = [
    {
      title: "Global Technology Company Transforms IT Service Delivery",
      client: "Fortune 100 Technology Leader",
      industry: "Technology Services",
      challenge: "Managing thousands of daily incidents across global operations with inconsistent processes and poor user satisfaction scores",
      solution: "ServiceNow ITSM Enterprise with complete incident, problem, and change management implementation plus AI-powered automation",
      results: [
        { metric: "60%", description: "Faster incident resolution" },
        { metric: "85%", description: "Reduction in recurring issues" },
        { metric: "40%", description: "Improvement in user satisfaction" },
        { metric: "70%", description: "Reduction in manual tasks" }
      ],
      testimonial: "ServiceNow ITSM transformed our IT service delivery with 60% faster incident resolution and 85% reduction in recurring issues through AI-powered automation.",
      executive: "Chief Information Officer",
      logo: "/images/clients/tech-leader-logo.png"
    },
    {
      title: "Healthcare System Achieves Service Excellence with ITSM Pro",
      client: "Leading Healthcare Network",
      industry: "Healthcare",
      challenge: "Critical healthcare systems requiring 24/7 availability with strict compliance requirements and rapid incident response needs",
      solution: "ServiceNow ITSM Pro with predictive intelligence, automated workflows, and compliance management for healthcare operations",
      results: [
        { metric: "99.9%", description: "System uptime achieved" },
        { metric: "50%", description: "Faster emergency response" },
        { metric: "100%", description: "Compliance maintained" },
        { metric: "35%", description: "Cost reduction achieved" }
      ],
      testimonial: "ServiceNow ITSM Pro enabled us to achieve 99.9% uptime for critical healthcare systems while maintaining 100% compliance and reducing costs by 35%.",
      executive: "IT Director, Healthcare Network",
      logo: "/images/clients/healthcare-logo.png"
    },
    {
      title: "Financial Services Firm Scales ITSM Operations Globally",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Scaling ITSM operations across multiple countries with different regulatory requirements while maintaining security and performance",
      solution: "ServiceNow ITSM Enterprise with global deployment, advanced security, and multi-language support for international operations",
      results: [
        { metric: "Global", description: "Multi-country deployment" },
        { metric: "45%", description: "Improvement in SLA compliance" },
        { metric: "30%", description: "Reduction in operational costs" },
        { metric: "Enhanced", description: "Security and governance" }
      ],
      testimonial: "ServiceNow ITSM enabled us to scale globally while improving SLA compliance by 45% and reducing operational costs by 30% across all regions.",
      executive: "Head of Global IT Operations",
      logo: "/images/clients/financial-services-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>IT Service Management - Complete ServiceNow ITSM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Transform the impact and delivery of IT with resilient, productivity-boosting services. Streamline IT operations with comprehensive ServiceNow ITSM including incident, problem, and change management."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss ITSM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss ITSM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8 justify-start px-2 sm:px-0">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-purple-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete ITSM Suite
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-indigo-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    ITIL Aligned
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 font-semibold">
                    IT Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Transform the impact and delivery of IT</span> with resilient, productivity-boosting services.{' '}
                  <span className="font-semibold text-indigo-300">Streamline IT operations</span> with comprehensive incident, problem, and change management.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get ITSM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-indigo-400 group-hover:text-indigo-300" />
                      Explore ITSM
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow IT Service Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">ITIL-Based</div>
                      <div className="text-xs text-blue-200">Best Practices</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                      <div className="text-xs text-purple-200">Automation</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Settings className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  Benefits of IT Service
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform IT operations with comprehensive service management that boosts productivity and user satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Impact Achieved</div>
                      <div className="text-blue-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core ITSM Modules Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Core ITSM Modules
                </span>
                <br />
                <span className="text-gray-800">
                  ITIL-Aligned Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive ITSM modules designed following ITIL best practices for end-to-end service management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {coreModules.map((module, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {module.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {module.capabilities.map((capability, idx) => (
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

        {/* ITSM Package Options Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
                  ITSM Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the ITSM package that matches your organization's needs and growth trajectory.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-8">
              {packageOptions.map((pkg, index) => (
                <div key={index} className="group bg-white p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-3 mb-6 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700">Ideal for: {pkg.ideal}</div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
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

        {/* Platform Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Platform Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  AI-Powered Service Delivery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced platform capabilities that enhance ITSM with AI, automation, and analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {platformCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{capability.title}</h3>
                      <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs px-2 py-1 mt-1">
                        Platform Feature
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {capability.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-cyan-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-green-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About IT Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about ITSM implementation, modules, and benefits.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-teal-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-r from-teal-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real ITSM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their IT service delivery with ServiceNow ITSM implementation.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-200 border border-teal-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-emerald-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 rounded-xl p-4 border-l-4 border-teal-400">
                              <Quote className="h-6 w-6 text-teal-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-teal-300">— {study.executive}</p>
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
                                <span className="text-teal-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-teal-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 p-4 sm:p-8 md:p-16 rounded-xl sm:rounded-3xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your IT Service Delivery?
                </h2>
                <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss ITSM implementation and streamline your IT operations with best-practice workflows.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-3 sm:px-8 py-2 sm:py-4 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact ITSM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-3 sm:px-8 py-2 sm:py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Explore ITSM Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">itsm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-green-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-emerald-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Book Consultation</p>
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

        /* Prevent horizontal scroll */
        :root {
          overflow-x: hidden;
          max-width: 100vw;
        }

        body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .text-content {
            font-size: 0.875rem;
            line-height: 1.4;
          }
          
          .card {
            padding: 0.75rem;
          }
          
          .grid-gap {
            gap: 0.5rem;
          }

          /* Prevent text overflow */
          h1, h2, h3, p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Adjust mobile font sizes */
          .text-mobile-sm {
            font-size: 0.75rem;
          }
          
          .text-mobile-base {
            font-size: 0.875rem;
          }

          /* Reduce padding on mobile */
          .mobile-padding {
            padding: 0.5rem;
          }

          /* Ensure images don't overflow */
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
