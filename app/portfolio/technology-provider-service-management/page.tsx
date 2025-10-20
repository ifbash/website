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
  Users as Patients,
  ShoppingCartIcon as CartIcon,
  Package2,
  Antenna,
  Waves,
  Flag,
  Landmark,
  Rss,
  Plug
} from "lucide-react";

export default function TechnologyProviderServiceManagementPage() {
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
    "name": "Technology Provider Service Management - ServiceNow TPSM Implementation",
    "description": "Elevate the experience for your XaaS customers with an AI-powered self-service platform. Fuel growth and streamline work across your ecosystem with one platform for sales, service, and support powered by AI.",
    "applicationCategory": "Technology Provider Service Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Technology Provider Service Management and how does it help tech providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow TPSM fuels growth and streamlines work across your ecosystem with one platform for sales, service, and support powered by AI, connecting XaaS customers, operations teams, and partners with digital workflows."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Service Bridge and how does it enhance customer collaboration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service Bridge gives enterprise customers an integrated experience with connected workflows, enabling seamless collaboration between technology providers and their customers through unified service delivery processes."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow TPSM content)
  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimize offer management to support growth",
      description: "Harmonize processes and manage your offerings portfolio end to end. Enable structured onboarding and accelerate product and service launch delivery.",
      color: "from-emerald-500 to-teal-500",
      stats: "Accelerated growth"
    },
    {
      icon: Zap,
      title: "Provide fast and proactive services",
      description: "Accelerate customer service productivity with generative AI. Turn real-time insights into real-time action, and enable tech support to generate cases.",
      color: "from-teal-500 to-cyan-500",
      stats: "AI-powered productivity"
    },
    {
      icon: Network,
      title: "Connect your ecosystem to create new value",
      description: "Collaborate seamlessly across the ecosystem. Onboard customers and partners rapidly to unlock growth opportunities and revenue streams.",
      color: "from-cyan-500 to-blue-500",
      stats: "Ecosystem collaboration"
    },
    {
      icon: Bot,
      title: "Improve the efficiency of digital operations",
      description: "Optimize processes with AI and machine learning, and drive continuous improvement with analytics for operational excellence.",
      color: "from-blue-500 to-indigo-500",
      stats: "Digital optimization"
    }
  ];

  // Featured Apps and Capabilities (From ServiceNow TPSM content)
  const featuredApps = [
    {
      icon: Bot,
      title: "Now Assist for Technology",
      description: "Understand and resolve service issues faster with instant AI-powered summaries, accelerating customer service productivity with generative AI.",
      capabilities: [
        "Instant service issue summaries",
        "AI-powered case resolution",
        "Service productivity acceleration",
        "Generative AI integration"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Link,
      title: "Service Bridge",
      description: "Give your enterprise customers an integrated experience with connected workflows, enabling seamless collaboration across ecosystems.",
      capabilities: [
        "Enterprise customer integration",
        "Connected workflow automation",
        "Seamless ecosystem collaboration",
        "Multi-party service delivery"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Bell,
      title: "Proactive Service Experience Workflows",
      description: "Identify impacted customers and communicate planned maintenance and service disruptions with automated notification systems.",
      capabilities: [
        "Customer impact identification",
        "Proactive communication",
        "Maintenance notification automation",
        "Service disruption management"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "Technology Product Support Case Application",
      description: "Gain an end-to-end case management application for tech product support with comprehensive tracking and resolution workflows.",
      capabilities: [
        "End-to-end case management",
        "Tech product support integration",
        "Comprehensive tracking systems",
        "Resolution workflow automation"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "Operations Account 360 Degree",
      description: "Get business context and comprehensive account data to make the right decisions fast with unified customer visibility.",
      capabilities: [
        "Comprehensive account data",
        "Business context intelligence",
        "Fast decision-making support",
        "Unified customer visibility"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Account Lifecycle Events",
      description: "Provide structured, repeatable, and transparent onboarding experience for customers and stakeholders throughout their journey.",
      capabilities: [
        "Structured onboarding processes",
        "Repeatable customer workflows",
        "Transparent communication",
        "Stakeholder journey management"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Advanced Product Catalog",
      description: "Visualize and track product offerings and their components in a single configurable workspace for comprehensive portfolio management.",
      capabilities: [
        "Product offering visualization",
        "Component tracking systems",
        "Configurable workspace design",
        "Portfolio management integration"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Layout,
      title: "Digital Portfolio Management",
      description: "Make informed decisions with a unified view of services, products, and apps for strategic portfolio optimization.",
      capabilities: [
        "Unified service view",
        "Product and app management",
        "Strategic decision support",
        "Portfolio optimization tools"
      ],
      color: "from-rose-500 to-red-500"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "Service Operations Workspace",
      description: "Manage incidents proactively with clear visibility when services are at risk and automated workflow orchestration.",
      icon: Monitor,
      benefit: "Proactive service management"
    },
    {
      title: "Service-Aware CMDB",
      description: "Simplify service management using a single common data model and structure for unified configuration management.",
      icon: Database,
      benefit: "Unified data management"
    },
    {
      title: "Process Mining",
      description: "Improve outcomes by optimizing process flows to streamline work and identify operational bottlenecks automatically.",
      icon: BarChart3,
      benefit: "Process optimization"
    },
    {
      title: "Workforce Optimization",
      description: "Manage teams effectively with real-time visibility into agent scheduling, performance, and resource allocation.",
      icon: Users2,
      benefit: "Team productivity enhancement"
    },
    {
      title: "Predictive Intelligence",
      description: "Simplify and accelerate everyday work with built-in machine learning for predictive analytics and automation.",
      icon: Brain,
      benefit: "ML-powered insights"
    },
    {
      title: "Remote Process Sync",
      description: "Enhance scalability of the Service Bridge application by simplifying customer setup and improving supportability.",
      icon: RefreshCw,
      benefit: "Scalable integration"
    }
  ];

  // Package Tiers (From TPSM content)
  const packageTiers = [
    {
      name: "TPSM Standard",
      description: "Essential technology provider service management capabilities for growing tech companies",
      features: [
        "Customer Service Management",
        "Walk-Up Experience",
        "Communities",
        "Engagement Messenger",
        "Digital Portfolio Management",
        "Universal Request"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting Package"
    },
    {
      name: "TPSM Professional", 
      description: "Advanced TPSM capabilities with AI-powered features for established technology providers",
      features: [
        "All Standard features",
        "Proactive Customer Service Operations",
        "Virtual Agent",
        "Predictive Intelligence",
        "DevOps Integration",
        "Platform Analytics Advanced"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Professional Package"
    },
    {
      name: "TPSM Enterprise",
      description: "Complete TPSM solution with advanced analytics and optimization for enterprise-scale technology operations",
      features: [
        "All Professional features",
        "Workforce Optimization",
        "Process Mining",
        "Advanced Analytics",
        "Enterprise Integration",
        "Full AI Capabilities"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Enterprise Package"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Technology Provider Service Management and how does it help tech providers?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Technology Provider Service Management (TPSM) fuels growth and streamlines work across your ecosystem:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>One platform for sales, service, and support powered by AI to eliminate silos and manual handoffs</li>
            <li>Connects XaaS customers, operations teams, and partners with digital workflows for seamless collaboration</li>
            <li>Enables structured onboarding processes and accelerates product and service launch delivery</li>
            <li>Provides fast and proactive services with generative AI-powered customer service productivity</li>
            <li>Optimizes processes with AI and machine learning for continuous improvement and analytics</li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600">
            <strong>Built on ServiceNow AI Platform</strong> specifically designed for technology provider transformation.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Service Bridge and how does it enhance customer collaboration?",
      answer: (
        <div>
          <p className="mb-3">Service Bridge is a key TPSM capability that transforms enterprise customer collaboration:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Connected Workflows:</strong> Gives enterprise customers an integrated experience with seamless workflow automation</li>
            <li><strong>Multi-Instance Collaboration:</strong> Enables technology providers to connect their ServiceNow instance with customer instances</li>
            <li><strong>Remote Catalog:</strong> Allows enterprise customers to make requests directly from their own ServiceNow instance</li>
            <li><strong>Remote Task Management:</strong> Reduces swivel-chairing and increases automation with multi-party workflows</li>
            <li><strong>Remote Process Sync:</strong> Enhances scalability by simplifying customer setup and improving supportability</li>
            <li><strong>Ecosystem Integration:</strong> Connects entire technology ecosystems for unified service delivery</li>
          </ul>
          <p className="mt-3">
            This enables technology providers to collaborate seamlessly with customers and accelerate time to revenue through integrated experiences.
          </p>
        </div>
      )
    },

    {
      question: "What are the key featured apps and capabilities in TPSM?",
      answer: (
        <div>
          <p className="mb-3">TPSM provides comprehensive applications and capabilities designed for technology providers:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">AI-Powered Service:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Now Assist for Technology:</strong> AI-powered summaries and faster service issue resolution</li>
                <li><strong>Proactive Service Workflows:</strong> Identify impacted customers and communicate service disruptions</li>
                <li><strong>Predictive Intelligence:</strong> Built-in machine learning for accelerated everyday work</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Customer Experience:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Service Bridge:</strong> Integrated experience with connected workflows for enterprise customers</li>
                <li><strong>Operations Account 360°:</strong> Comprehensive account data and business context</li>
                <li><strong>Account Lifecycle Events:</strong> Structured, repeatable onboarding experiences</li>
                <li><strong>Advanced Product Catalog:</strong> Visualize and track product offerings in configurable workspace</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Now Assist for Technology enhance service productivity?",
      answer: (
        <div>
          <p className="mb-3">
            Now Assist for Technology leverages generative AI to accelerate customer service productivity:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Instant Summaries:</strong> AI-powered case and incident summaries for faster understanding and resolution</li>
            <li><strong>Service Issue Resolution:</strong> Generative AI assistance for complex technical support scenarios</li>
            <li><strong>Real-Time Insights:</strong> Turn real-time data into actionable insights for proactive service delivery</li>
            <li><strong>Case Generation:</strong> Enable technical support teams to auto-generate cases with AI assistance</li>
            <li><strong>Content Creation:</strong> AI-powered knowledge article generation and service documentation</li>
            <li><strong>Workflow Automation:</strong> Intelligent automation of repetitive service tasks and processes</li>
            <li><strong>Agent Assistance:</strong> Contextual recommendations and next-best-action guidance for service agents</li>
          </ul>
          <p className="mt-3">
            This comprehensive AI integration helps technology providers deliver faster, more accurate, and proactive customer service experiences.
          </p>
        </div>
      )
    },

    {
      question: "What advanced capabilities does TPSM provide for operational excellence?",
      answer: (
        <div>
          <p className="mb-3">TPSM offers advanced capabilities designed for technology provider operational excellence:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Service Operations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Service Operations Workspace with proactive incident management and service risk visibility</li>
                <li>Service-Aware CMDB with single common data model for unified configuration management</li>
                <li>Investigate Framework for comprehensive incident inspection and log data review</li>
                <li>Problem Management with root cause identification and proactive disruption prevention</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Analytics and Optimization:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Process Mining to optimize process flows and streamline work activities</li>
                <li>Performance Analytics with real-time insights for trend anticipation and resource prioritization</li>
                <li>Workforce Optimization with agent scheduling and performance visibility</li>
                <li>Predictive Intelligence with machine learning for automated decision support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Portfolio Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Digital Portfolio Management with unified view of services, products, and applications</li>
                <li>Visual Workflow and Automation with drag-and-drop interface for process optimization</li>
                <li>Common Service Data Model (CSDM) for prescriptive service modeling guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Technology Provider Service Management cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on technology provider size, service complexity, and package selection:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TPSM Standard Implementation:</strong> Starting from $400K - includes customer service management, basic AI features, and standard integrations for growing tech providers</li>
            <li><strong>TPSM Professional Implementation:</strong> $600K-$900K - includes Now Assist for Technology, Service Bridge, and comprehensive automation for established providers</li>
            <li><strong>TPSM Enterprise Implementation:</strong> $1M+ - complete solution with workforce optimization, process mining, and enterprise-scale ecosystem integration</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through customer service productivity gains (40%), ecosystem collaboration improvements (35%), and operational cost reduction (25%). Lenovo accelerated time to revenue significantly.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "TPSM ROI Calculator", url: "/tpsm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow TPSM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on technology provider complexity and package selection:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TPSM Standard:</strong> 14-18 weeks for customer service management, basic Service Bridge, and core technology provider workflows</li>
            <li><strong>TPSM Professional:</strong> 18-24 weeks including Now Assist for Technology, advanced automation, and comprehensive ecosystem integration</li>
            <li><strong>TPSM Enterprise:</strong> 24-30 weeks for complete solution with workforce optimization, process mining, and extensive partner integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Technology Provider Assessment & Service Design (3-4 weeks) → Core Platform & Service Bridge Configuration (8-12 weeks) → AI Integration & Ecosystem Testing (4-6 weeks) → Go-Live & Team Training (3-4 weeks) → Customer Onboarding & Optimization (2-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow TPSM integrate with existing technology provider systems and third-party platforms?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TPSM provides comprehensive integration capabilities for technology provider ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Customer Experience Platforms:</strong> Adobe Experience Platform integration for comprehensive customer profiles</li>
            <li><strong>Communication Systems:</strong> Microsoft Teams, Slack, and enterprise communication platform integration</li>
            <li><strong>Field Service Tools:</strong> CareAR integration for faster resolutions and enhanced customer experiences</li>
            <li><strong>Contact Center Solutions:</strong> Genesys integration for elevated agent interactions and customer experience</li>
            <li><strong>Analytics Platforms:</strong> Advanced analytics and reporting platform connectivity for insights</li>
            <li><strong>Partner Ecosystems:</strong> Service Bridge enables multi-party collaboration across partner networks</li>
            <li><strong>Legacy System Connectivity:</strong> API-driven integration preserving existing technology investments</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Technology providers maintain existing infrastructure while gaining unified service management and AI-powered capabilities across entire ecosystems.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on TPSM success stories)
  const caseStudies = [
    {
      title: "Lenovo Accelerates Time to Revenue with ServiceNow TPSM Collaboration",
      client: "Lenovo",
      industry: "Technology Hardware & Services",
      challenge: "Need to collaborate seamlessly with large enterprise customers and accelerate time to revenue while managing complex technology service portfolios and partnerships",
      solution: "ServiceNow TPSM with Service Bridge, Automation Engine, and comprehensive customer collaboration capabilities for enterprise-grade service delivery",
      results: [
        { metric: "Seamless", description: "Customer collaboration" },
        { metric: "Accelerated", description: "Time to revenue" },
        { metric: "Service Bridge", description: "Integration deployed" },
        { metric: "Enterprise", description: "Customer success" }
      ],
      testimonial: "With the ServiceNow AI Platform, we can collaborate seamlessly with our customers and accelerate time to revenue.",
      executive: "Director, Solutions and Services Group International Sales and Presales",
      logo: "/images/clients/lenovo-logo.png"
    },
    {
      title: "Auxilion Differentiates with ServiceNow TPSM Performance Excellence",
      client: "Auxilion",
      industry: "Technology Service Provider",
      challenge: "Need to continuously improve performance and efficiency while differentiating service offerings in competitive technology provider market",
      solution: "ServiceNow Technology Provider Service Management with comprehensive performance optimization, operational excellence, and service differentiation capabilities",
      results: [
        { metric: "Ultimate", description: "Service differentiator" },
        { metric: "Continuous", description: "Performance improvement" },
        { metric: "Enhanced", description: "Operational efficiency" },
        { metric: "Competitive", description: "Market advantage" }
      ],
      testimonial: "ServiceNow TPSM is the ultimate differentiator for Auxilion, enabling us to continuously improve our performance and efficiency in serving technology customers.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/auxilion-logo.png"
    },
    {
      title: "Global Tech Provider Transforms XaaS Operations with ServiceNow TPSM",
      client: "Enterprise Technology Solutions",
      industry: "XaaS Technology Provider",
      challenge: "Complex everything-as-a-service operations requiring unified platform for sales, service, and support with seamless customer experiences at scale",
      solution: "ServiceNow TPSM with comprehensive XaaS capabilities, AI-powered automation, and integrated ecosystem management for scalable service delivery",
      results: [
        { metric: "XaaS", description: "Operations transformed" },
        { metric: "AI-Powered", description: "Automation deployed" },
        { metric: "Unified", description: "Platform implementation" },
        { metric: "Scalable", description: "Service delivery" }
      ],
      testimonial: "ServiceNow TPSM enabled us to transform our XaaS operations with a unified platform that delivers exceptional customer experiences at scale.",
      executive: "VP of Technology Services",
      logo: "/images/clients/tech-solutions-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Technology Provider Service Management - ServiceNow TPSM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Elevate the experience for your XaaS customers with an AI-powered self-service platform. Fuel growth and streamline work across your ecosystem with one platform for sales, service, and support powered by AI."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss TPSM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss TPSM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Now Assist AI
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    XaaS Ready
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    Technology Provider
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                      Service Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-teal-300">Elevate the experience for your XaaS customers</span> with an AI-powered platform that{' '}
                  <span className="font-semibold text-cyan-300">fuels growth and streamlines work across your ecosystem</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get TPSM Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* Service Bridge Badge */}
                <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 backdrop-blur-sm rounded-xl p-4 border border-emerald-300/20">
                  <div className="flex items-center gap-3">
                    <Link className="h-8 w-8 text-emerald-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Service Bridge Ecosystem</div>
                      <div className="text-sm text-emerald-200">Connected workflows for seamless collaboration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Technology Provider Service Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-emerald-600 to-teal-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Service</div>
                      <div className="text-xs text-emerald-200">Bridge</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">XaaS</div>
                      <div className="text-xs text-teal-200">Powered</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Plug className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Bot className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Transform Technology
                </span>
                <br />
                <span className="text-gray-800">
                  Provider Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Fuel growth and streamline work across your ecosystem with AI-powered service management for technology providers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Key Value</div>
                      <div className="text-emerald-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Featured Apps & Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete TPSM Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive applications designed for technology providers, from AI-powered assistance to ecosystem collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Advanced Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Operational Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced technology provider capabilities including process mining, workforce optimization, and predictive intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                      <div className="text-sm font-semibold text-cyan-700 mb-1">Key Benefit</div>
                      <div className="text-cyan-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Tiers Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  TPSM Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the TPSM package that meets your technology provider needs, from essential capabilities to enterprise-scale solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {packageTiers.map((tier, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-full h-4 rounded-t-xl bg-gradient-to-r ${tier.color} mb-6`} />
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                      <p className="text-blue-600 font-semibold">{tier.price}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">
                      {tier.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-center">Package Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
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

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Technology Provider Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about TPSM implementation, Service Bridge, and technology provider transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-indigo-500 to-purple-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-r from-purple-900 via-pink-900 to-rose-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real TPSM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how technology providers transformed their operations with AI-powered Service Management solutions.
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
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-rose-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-rose-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-purple-400">
                              <Quote className="h-6 w-6 text-purple-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-purple-300">— {study.executive}</p>
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
                                <span className="text-purple-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-purple-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Technology Provider Operations?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive technology provider service management with Service Bridge and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact TPSM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">tpsm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Watch Demo</p>
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

          /* Adjust card layouts */
          .card-grid {
            grid-template-columns: 1fr;
          }

          /* Reduce padding */
          .section-padding {
            padding: 1rem;
          }

          /* Adjust image sizes */
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
