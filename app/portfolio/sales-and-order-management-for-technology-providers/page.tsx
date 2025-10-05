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
  Package2
} from "lucide-react";

export default function SalesOrderManagementTechProvidersPage() {
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
    "name": "Sales and Order Management for Technology Providers - ServiceNow SOMTP Implementation",
    "description": "Streamline sales and order management to capture revenue faster, reduce costs, and capitalize on XaaS with one AI platform for technology providers.",
    "applicationCategory": "Sales and Order Management for Technology Providers"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Sales and Order Management for Technology Providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SOMTP helps technology providers define new services quickly, simplify sales and order fulfillment processes, and manage post-sales activities to boost services revenue and customer loyalty with one AI platform."
        }
      },
      {
        "@type": "Question", 
        "name": "What is XaaS and how does ServiceNow support it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "XaaS (Everything as a Service) is a business model where organizations deliver products and services through subscription-based cloud offerings. ServiceNow supports XaaS with comprehensive order management, catalog-driven orchestration, and automated fulfillment capabilities."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow SOMTP content)
  const benefits = [
    {
      icon: Zap,
      title: "Define new services quickly",
      description: "Respond faster to changing market conditions by defining new services through catalog-driven order orchestration and flexible configuration capabilities.",
      color: "from-green-500 to-emerald-500",
      stats: "Faster time to market"
    },
    {
      icon: TrendingUp,
      title: "Accelerate revenue",
      description: "Capture customer needs accurately, promote related products, and fulfill orders using automation and AI to drive faster revenue growth.",
      color: "from-emerald-500 to-teal-500",
      stats: "Revenue acceleration"
    },
    {
      icon: Heart,
      title: "Boost customer retention",
      description: "Simplify managing post-sale activities to increase revenue and keep customers engaged through seamless service delivery and support.",
      color: "from-teal-500 to-cyan-500",
      stats: "Enhanced customer loyalty"
    },
    {
      icon: Cloud,
      title: "Capitalize on XaaS opportunities",
      description: "Support everything-as-a-service business models with comprehensive order management and automated fulfillment for subscription-based offerings.",
      color: "from-cyan-500 to-blue-500",
      stats: "XaaS enablement"
    }
  ];

  // Featured Apps and Capabilities (From ServiceNow SOMTP content)
  const featuredApps = [
    {
      icon: Target,
      title: "Opportunity Management",
      description: "Identify customer needs and create opportunities as you manage the sales lifecycle with comprehensive opportunity tracking and management.",
      capabilities: [
        "Customer needs identification",
        "Opportunity creation and tracking",
        "Sales lifecycle management",
        "Kanban view for opportunities"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Quote Management",
      description: "Manage the quote lifecycle and track as customer needs or product configurations change with dynamic quote generation and approval.",
      capabilities: [
        "Quote lifecycle management",
        "Configuration change tracking",
        "Dynamic quote generation",
        "Approval workflow automation"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: ShoppingCart,
      title: "Order Capture",
      description: "Capture new, change, and disconnect orders using a single guided user workspace with streamlined order entry processes.",
      capabilities: [
        "Single workspace interface",
        "Guided order capture",
        "Change order management",
        "Disconnect order processing"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Order Management Workspace",
      description: "Gain clear visibility across the entire order lifecycle with a single dashboard to track and manage orders from capture to fulfillment.",
      capabilities: [
        "Complete order lifecycle visibility",
        "Single dashboard interface",
        "Order tracking and management",
        "Real-time status updates"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Workflow,
      title: "Catalog Driven Orchestration",
      description: "Speed fulfillment with dynamic orchestration workflows driven by an advanced product catalog for automated order processing.",
      capabilities: [
        "Dynamic orchestration workflows",
        "Advanced product catalog",
        "Automated order processing",
        "Fulfillment acceleration"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Layers,
      title: "Staggered Order Decomposition",
      description: "Improve flexibility with staggered decomposition workflows powered by internal and external data for complex order handling.",
      capabilities: [
        "Staggered workflow decomposition",
        "Internal and external data integration",
        "Complex order handling",
        "Flexible workflow management"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: AlertTriangle,
      title: "Order Fallout Management",
      description: "Limit customer impact for order errors and manage order fallout proactively with automated detection and resolution capabilities.",
      capabilities: [
        "Proactive fallout management",
        "Error impact limitation",
        "Automated detection systems",
        "Resolution workflow automation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Order Fulfillment",
      description: "Auto-create and assign order fulfillment tasks for detailed fulfillment tracking with comprehensive task management and monitoring.",
      capabilities: [
        "Auto-created fulfillment tasks",
        "Task assignment automation",
        "Detailed tracking systems",
        "Fulfillment monitoring"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  // XaaS Capabilities
  const xaasCapabilities = [
    {
      title: "Subscription Management",
      description: "Manage recurring services and subscription-based offerings with automated billing and lifecycle management.",
      icon: RefreshCw,
      benefit: "Recurring revenue optimization"
    },
    {
      title: "Service Catalog Management",
      description: "Configure and manage complex service catalogs for technology offerings with dynamic pricing and bundling.",
      icon: Database,
      benefit: "Flexible service configuration"
    },
    {
      title: "Partner Ecosystem Integration",
      description: "Integrate with partner offerings and accept orders from Service Bridge connected ecosystem customers.",
      icon: Network,
      benefit: "Ecosystem expansion"
    },
    {
      title: "Self-Service Ordering",
      description: "Enable customers to order services through self-service portals with guided configuration and ordering.",
      icon: Globe,
      benefit: "Enhanced customer experience"
    },
    {
      title: "Usage-Based Billing",
      description: "Support pay-as-you-go and consumption-based pricing models for modern XaaS business requirements.",
      icon: Calculator,
      benefit: "Flexible pricing models"
    },
    {
      title: "Service Level Management",
      description: "Track and manage service level agreements for ongoing XaaS offerings with automated monitoring.",
      icon: Gauge,
      benefit: "SLA compliance automation"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Sales and Order Management for Technology Providers?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Sales and Order Management for Technology Providers (SOMTP) empowers organizations with one AI platform to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Define new product and service offerings quickly with flexible configuration capabilities</li>
            <li>Simplify sales and order fulfillment processes through automation and AI</li>
            <li>Manage post-sales activities to boost services revenue and customer loyalty</li>
            <li>Reduce costs, increase productivity, and eliminate repetitive sales and order tasks</li>
            <li>Support XaaS (Everything as a Service) business models with comprehensive management</li>
          </ul>
          <p className="mt-3 text-sm text-green-600">
            <strong>Built on ServiceNow AI Platform</strong> for enterprise automation and scalability.
          </p>
        </div>
      )
    },
    
    {
      question: "What is XaaS and how does ServiceNow support it?",
      answer: (
        <div>
          <p className="mb-3">XaaS (Everything as a Service) is a business model encompassing all service-based offerings:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Delivery Model:</strong> Transforms products into subscription-based services delivered over the internet</li>
            <li><strong>Flexible Consumption:</strong> Pay-as-you-go and usage-based pricing models replace upfront purchases</li>
            <li><strong>Scalable Solutions:</strong> Rapid scaling and customization based on customer needs and market conditions</li>
            <li><strong>ServiceNow XaaS Support:</strong> Comprehensive order management, catalog-driven orchestration, and automated fulfillment</li>
            <li><strong>Revenue Optimization:</strong> Convert one-time buyers into service subscribers with ongoing value delivery</li>
          </ul>
          <p className="mt-3">
            ServiceNow enables technology providers to capitalize on XaaS opportunities with complete lifecycle management from order capture to ongoing service delivery.
          </p>
        </div>
      )
    },

    {
      question: "What are the key featured apps and capabilities in SOMTP?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SOMTP comprises comprehensive applications and capabilities for technology providers:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-emerald-600 mb-2">Sales Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Opportunity Management:</strong> Identify customer needs and manage sales lifecycle with Kanban views</li>
                <li><strong>Quote Management:</strong> Manage quote lifecycle and track configuration changes</li>
                <li><strong>Order Capture:</strong> Single workspace for new, change, and disconnect orders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Order Operations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Order Management Workspace:</strong> Complete visibility across order lifecycle</li>
                <li><strong>Catalog Driven Orchestration:</strong> Dynamic workflows for automated processing</li>
                <li><strong>Staggered Order Decomposition:</strong> Flexible workflows for complex orders</li>
                <li><strong>Order Fallout Management:</strong> Proactive error detection and resolution</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow SOMTP accelerate time to market for technology providers?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow SOMTP accelerates time to market through multiple capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Fast Product Configuration:</strong> Support complex product and service bundles through easily configurable commercial and technical catalogs</li>
            <li><strong>Flexible Pricing Options:</strong> Empower agents with pricing flexibility to maximize revenue and simplify quote generation</li>
            <li><strong>Single Catalog Approach:</strong> Deliver consistent catalog across leads, opportunities, quotes, order capture, and post-sales service</li>
            <li><strong>Partner Integration:</strong> Easily publish partner offerings and accept orders from Service Bridge connected ecosystem</li>
            <li><strong>Automated Workflows:</strong> Reduce manual processes and accelerate order-to-delivery cycles</li>
            <li><strong>AI-Powered Intelligence:</strong> Leverage AI for intelligent product recommendations and pricing optimization</li>
          </ul>
          <p className="mt-3">
            This approach enables technology providers to launch new offerings faster and respond quickly to changing market conditions.
          </p>
        </div>
      )
    },

    {
      question: "What order management capabilities does ServiceNow provide for technology providers?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow provides comprehensive order management capabilities specifically designed for technology providers:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Core Order Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>End-to-end order lifecycle management from capture to fulfillment</li>
                <li>Real-time order tracking and visibility across all stages</li>
                <li>Automated order processing and workflow orchestration</li>
                <li>Integration with CRM, ERP, and billing systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Advanced Order Handling:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>In-flight change management for order modifications</li>
                <li>Fallout management for proactive issue resolution</li>
                <li>Jeopardy management with SLA monitoring and alerts</li>
                <li>Order decomposition for complex multi-service offerings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Technology Provider Specific:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Support for subscription-based and consumption models</li>
                <li>Multi-tenant service provisioning and management</li>
                <li>Partner ecosystem integration and order routing</li>
                <li>Automated service activation and configuration</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Sales and Order Management for Technology Providers cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on technology provider size, service complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SOMTP Standard Implementation:</strong> Starting from $300K - includes core order management, basic catalog, and standard integrations for growing tech providers</li>
            <li><strong>SOMTP Professional Implementation:</strong> $500K-$750K - includes advanced orchestration, XaaS capabilities, and comprehensive integrations for established providers</li>
            <li><strong>Enterprise SOMTP Suite:</strong> $800K+ - complete solution with AI automation, partner ecosystem integration, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through revenue acceleration (30%), operational efficiency (40%), and improved customer retention (25%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SOMTP ROI Calculator", url: "/somtp-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow SOMTP?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on service complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SOMTP Standard:</strong> 16-20 weeks for core order management, basic catalog setup, and standard system integrations</li>
            <li><strong>SOMTP Professional:</strong> 20-26 weeks including advanced orchestration, XaaS configuration, and comprehensive partner integrations</li>
            <li><strong>Enterprise SOMTP Suite:</strong> 26-34 weeks for complete solution with AI capabilities, complex workflows, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            Our methodology: Business Process Analysis & Catalog Design (4-6 weeks) → Core Platform Configuration & Order Management Setup (10-14 weeks) → Integration & Workflow Testing (6-8 weeks) → Go-Live & User Training (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow SOMTP integrate with existing technology provider systems?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SOMTP provides comprehensive integration capabilities for technology providers:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CRM Integration:</strong> Native connectivity with Salesforce, Microsoft Dynamics, and other CRM platforms</li>
            <li><strong>ERP Systems:</strong> Integration with SAP, Oracle, NetSuite for financial and resource management</li>
            <li><strong>Billing Platforms:</strong> Connection with usage-based billing and subscription management systems</li>
            <li><strong>Provisioning Systems:</strong> Integration with service provisioning and activation platforms</li>
            <li><strong>Partner Ecosystems:</strong> Service Bridge integration for partner catalog and order management</li>
            <li><strong>Cloud Platforms:</strong> Integration with AWS, Azure, Google Cloud for service delivery</li>
            <li><strong>Monitoring Tools:</strong> Connection with service monitoring and performance management systems</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Technology providers maintain existing investments while gaining unified order management and XaaS capabilities.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SOMTP success stories)
  const caseStudies = [
    {
      title: "Pure Storage Puts AI to Work with ServiceNow Order Management",
      client: "Pure Storage",
      industry: "Technology Storage Solutions",
      challenge: "Complex storage solutions requiring streamlined order management processes and improved customer experience with AI-powered automation needs",
      solution: "ServiceNow Sales and Order Management for Technology Providers with AI-powered workflows, automated order processing, and comprehensive customer experience management",
      results: [
        { metric: "AI-Powered", description: "Automation implementation" },
        { metric: "Streamlined", description: "Order management" },
        { metric: "Enhanced", description: "Customer experience" },
        { metric: "Automated", description: "Workflow processing" }
      ],
      testimonial: "ServiceNow has made the promise of AI a reality. We're putting it to work for our people and to the benefit of our customers.",
      executive: "VP of Global Support",
      logo: "/images/clients/pure-storage-logo.png"
    },
    {
      title: "Global Technology Provider Accelerates Revenue with Advanced Order Management",
      client: "Enterprise Technology Solutions",
      industry: "Technology Services",
      challenge: "Lengthy order-to-delivery cycles and complex service configurations affecting revenue growth and customer satisfaction in competitive market",
      solution: "ServiceNow SOMTP with catalog-driven orchestration, automated fulfillment workflows, and comprehensive partner ecosystem integration",
      results: [
        { metric: "Catalog-Driven", description: "Orchestration deployment" },
        { metric: "Automated", description: "Fulfillment workflows" },
        { metric: "Partner", description: "Ecosystem integration" },
        { metric: "Revenue", description: "Acceleration achieved" }
      ],
      testimonial: "ServiceNow SOMTP transformed our order management capabilities, enabling us to accelerate revenue growth while maintaining exceptional customer experiences.",
      executive: "Chief Revenue Officer",
      logo: "/images/clients/tech-solutions-logo.png"
    },
    {
      title: "SaaS Provider Optimizes XaaS Operations with ServiceNow Platform",
      client: "Cloud Software Corporation",
      industry: "Software as a Service",
      challenge: "Managing subscription-based services and complex billing models across multiple customer segments with scalability and automation requirements",
      solution: "Complete ServiceNow SOMTP implementation with XaaS capabilities, subscription management, usage-based billing, and automated service provisioning",
      results: [
        { metric: "XaaS", description: "Capabilities enabled" },
        { metric: "Subscription", description: "Management automation" },
        { metric: "Usage-Based", description: "Billing implementation" },
        { metric: "Service", description: "Provisioning automation" }
      ],
      testimonial: "ServiceNow SOMTP enabled us to fully capitalize on XaaS opportunities with automated subscription management and seamless service provisioning.",
      executive: "VP of Operations",
      logo: "/images/clients/cloud-software-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Sales and Order Management for Technology Providers - ServiceNow SOMTP Portfolio | ifBash</title>
        <meta
          name="description"
          content="Streamline sales and order management to capture revenue faster, reduce costs, and capitalize on XaaS with one AI platform for technology providers."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SOMTP Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SOMTP Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen  width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered SOMTP
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    XaaS Ready
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 font-semibold">
                    Sales & Order Management
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                      for Tech Providers
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-emerald-300">Streamline sales and order management</span> to capture revenue faster, reduce costs, and{' '}
                  <span className="font-semibold text-teal-300">capitalize on XaaS opportunities</span> with one AI platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SOMTP Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-teal-400 group-hover:text-teal-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* XaaS Badge */}
                <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-sm rounded-xl p-4 border border-green-300/20">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-8 w-8 text-green-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Everything as a Service (XaaS) Ready</div>
                      <div className="text-sm text-green-200">Comprehensive platform for technology provider success</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Sales and Order Management for Technology Providers Platform"
                      className="w-full h-full object-cover"
                      gradient="from-green-600 to-emerald-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">XaaS</div>
                      <div className="text-xs text-green-200">Enabled</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Driven</div>
                      <div className="text-xs text-emerald-200">Automation</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Package2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Workflow className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Transform Technology
                </span>
                <br />
                <span className="text-gray-800">
                  Provider Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Define services quickly, accelerate revenue, and boost customer retention with comprehensive order management and XaaS capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-700 mb-1">Key Value</div>
                      <div className="text-green-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete SOMTP Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive applications that scale with technology provider needs, from opportunity management to order fulfillment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* XaaS Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  XaaS Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Everything as a Service
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive XaaS capabilities enabling technology providers to deliver subscription-based services and capitalize on modern business models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {xaasCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Key Benefit</div>
                      <div className="text-teal-600 text-lg font-bold">{capability.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About SOMTP for Technology Providers
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SOMTP implementation, XaaS capabilities, and technology provider transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-blue-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SOMTP Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                See how technology providers transformed their operations with AI-powered Sales and Order Management solutions.
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
                              <Badge className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border border-blue-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30">
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

                            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-4 border-l-4 border-blue-400">
                              <Quote className="h-6 w-6 text-blue-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-blue-300">— {study.executive}</p>
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
                                <span className="text-blue-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-blue-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Accelerate Technology Provider Growth?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive sales and order management with XaaS capabilities and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SOMTP Experts
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
                    <Mail className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">somtp-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
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
