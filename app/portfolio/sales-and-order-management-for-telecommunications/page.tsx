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
  Waves
} from "lucide-react";

export default function TelecomOrderManagementPage() {
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
    "name": "Sales and Order Management for Telecommunications - ServiceNow Telecom OM Implementation",
    "description": "Telecom order management turns services into revenue quickly while building for customer success. TM Forum Open APIs aligned, AI-powered automation for CSPs.",
    "applicationCategory": "Telecommunications Order Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Sales and Order Management for Telecommunications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Telecom Order Management helps CSPs define new services quickly, simplify sales and order fulfillment processes, and manage post-sales activities to boost services revenue and customer loyalty with TM Forum Open APIs alignment."
        }
      },
      {
        "@type": "Question", 
        "name": "What are TM Forum Open APIs and how does ServiceNow support them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TM Forum Open APIs are industry-standard APIs for telecommunications. ServiceNow has achieved Gold Tier certification with 15+ certified Open APIs including Product Order, Service Order, Service Qualification, Product Catalog, and Service Catalog APIs."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Telecom OM content)
  const benefits = [
    {
      icon: Zap,
      title: "Define new services quickly",
      description: "Respond faster to changing market conditions by rapidly defining new services through catalog-driven order orchestration and flexible configuration.",
      color: "from-sky-500 to-blue-500",
      stats: "Faster service launch"
    },
    {
      icon: TrendingUp,
      title: "Accelerate revenue",
      description: "Capture customer needs, promote related products, and fulfill orders accurately by using automation and AI to turn services into revenue quickly.",
      color: "from-blue-500 to-indigo-500",
      stats: "Revenue acceleration"
    },
    {
      icon: Heart,
      title: "Boost customer retention",
      description: "Simplify managing post-sale activities to increase revenue, raise satisfaction, and encourage customers to return with superior service delivery.",
      color: "from-indigo-500 to-purple-500",
      stats: "Enhanced customer loyalty"
    },
    {
      icon: Network,
      title: "Industry standards alignment",
      description: "Enable seamless interoperability with existing ecosystems by aligning ServiceNow's APIs with TM Forum Open APIs for telecommunications.",
      color: "from-purple-500 to-pink-500",
      stats: "TM Forum certified"
    }
  ];

  // Featured Apps and Capabilities (From ServiceNow Telecom OM content)
  const featuredApps = [
    {
      icon: Target,
      title: "Opportunity Management",
      description: "Identify customer needs and create opportunities as you manage the sales lifecycle with comprehensive Kanban view management.",
      capabilities: [
        "Customer needs identification",
        "Opportunity lifecycle management",
        "Sales cycle tracking",
        "Kanban visualization"
      ],
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "Quote Management",
      description: "Manage the quote lifecycle and track as customer needs or product configurations change with dynamic pricing and approval workflows.",
      capabilities: [
        "Quote lifecycle management",
        "Configuration change tracking",
        "Dynamic pricing models",
        "Approval workflow automation"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Network,
      title: "Aligned to Industry Standards",
      description: "Enable seamless interoperability with existing ecosystems by aligning ServiceNow's out-of-the-box APIs with TM Forum Open APIs.",
      capabilities: [
        "TM Forum Open API alignment",
        "Industry standard compliance",
        "Seamless ecosystem integration",
        "Gold Tier certification"
      ],
      color: "from-indigo-500 to-purple-500"
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
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Catalog-Driven Orchestration",
      description: "Speed fulfillment with dynamic orchestration workflows driven by an advanced product catalog for automated telecom service processing.",
      capabilities: [
        "Dynamic orchestration workflows",
        "Advanced telecom product catalog",
        "Automated service processing",
        "Fulfillment acceleration"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Layers,
      title: "Staggered Decomposition",
      description: "Improve flexibility with staggered decomposition workflows powered by internal and external data for complex telecom service orders.",
      capabilities: [
        "Staggered workflow decomposition",
        "Internal and external data integration",
        "Complex telecom order handling",
        "Flexible service management"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: AlertTriangle,
      title: "Order Fallout Management",
      description: "Limit customer impact for order errors and proactively manage order fallout with automated detection and resolution capabilities.",
      capabilities: [
        "Proactive fallout management",
        "Error impact limitation",
        "Automated detection systems",
        "Resolution workflow automation"
      ],
      color: "from-red-500 to-orange-500"
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
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // TM Forum Open APIs
  const tmForumApis = [
    {
      title: "TMF622 Product Order",
      description: "Standardized API for product order management enabling seamless order processing across telecom ecosystems.",
      icon: Package,
      status: "Gold Certified"
    },
    {
      title: "TMF641 Service Order", 
      description: "Service order management API for comprehensive service lifecycle management and orchestration.",
      icon: Cog,
      status: "Gold Certified"
    },
    {
      title: "TMF645 Service Qualification",
      description: "Service qualification API enabling automated feasibility checks and service validation processes.",
      icon: CheckCircle,
      status: "Certified"
    },
    {
      title: "TMF620 Product Catalog",
      description: "Product catalog management API for managing complex telecom product offerings and configurations.",
      icon: Database,
      status: "Certified"
    },
    {
      title: "TMF633 Service Catalog",
      description: "Service catalog API enabling comprehensive service portfolio management and service definition.",
      icon: Layers,
      status: "Certified"
    },
    {
      title: "TMF637 Product Inventory",
      description: "Product inventory management API for tracking and managing telecom product instances and resources.",
      icon: Package2,
      status: "Certified"
    }
  ];

  // Telecom-Specific Capabilities
  const telecomCapabilities = [
    {
      title: "5G Services Management",
      description: "Reference order management flows that decompose slice service orders and trigger required network changes.",
      icon: Antenna,
      benefit: "Next-generation service delivery"
    },
    {
      title: "MACD Orders Processing",
      description: "Efficiently process move, add, change, and delete requests with automated workflow management.",
      icon: RefreshCw,
      benefit: "Streamlined service changes"
    },
    {
      title: "Network Inventory Integration",
      description: "Associate customer orders with required network resources to deliver seamless service delivery experience.",
      icon: Network,
      benefit: "Unified network management"
    },
    {
      title: "Service Bridge Ecosystem",
      description: "Publish product catalog offerings and accept order requests from Service Bridge connected ecosystem.",
      icon: Link,
      benefit: "Partner ecosystem integration"
    },
    {
      title: "Jeopardy Management",
      description: "Proactively manage risk during order fulfillment process with automated alerts and resolution workflows.",
      icon: AlertTriangle,
      benefit: "Proactive risk management"
    },
    {
      title: "Zero-Touch Automation",
      description: "Accelerate order delivery with dynamic order decomposition and orchestration for telecom services.",
      icon: Bot,
      benefit: "Automated service delivery"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Sales and Order Management for Telecommunications?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Sales and Order Management for Telecommunications (OMT) empowers Communication Service Providers (CSPs) with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Rapid definition of new product and service offerings through catalog-driven orchestration</li>
            <li>Simplified sales and order fulfillment processes with automation and AI capabilities</li>
            <li>Post-sales activity management to boost services revenue and customer loyalty</li>
            <li>Industry-standard TM Forum Open API alignment for seamless ecosystem integration</li>
            <li>Support for 5G services, network slicing, and next-generation telecom complexity</li>
          </ul>
          <p className="mt-3 text-sm text-sky-600">
            <strong>Built on ServiceNow AI Platform</strong> with TM Forum Gold Tier certification for telecommunications.
          </p>
        </div>
      )
    },
    
    {
      question: "What are TM Forum Open APIs and how does ServiceNow support them?",
      answer: (
        <div>
          <p className="mb-3">TM Forum Open APIs are industry-standard APIs for telecommunications interoperability:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Industry Standards:</strong> Open Digital Framework APIs enabling seamless integration across telecom ecosystems</li>
            <li><strong>ServiceNow Gold Tier:</strong> Achieved Gold Tier certification with 15+ certified Open APIs for comprehensive support</li>
            <li><strong>Key APIs Supported:</strong> TMF622 Product Order, TMF641 Service Order, TMF645 Service Qualification, TMF620 Product Catalog, TMF633 Service Catalog, TMF637 Product Inventory</li>
            <li><strong>Ecosystem Integration:</strong> Enables CSPs to integrate with existing BSS/OSS environments cost-effectively</li>
            <li><strong>Future-Ready Architecture:</strong> Supports composable, AI-ready architectures for next-generation telecom services</li>
          </ul>
          <p className="mt-3">
            This standards alignment reduces integration costs and accelerates deployment for telecommunications providers globally.
          </p>
        </div>
      )
    },

    {
      question: "What telecom-specific capabilities does ServiceNow Order Management provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow provides comprehensive telecom-specific order management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">5G and Next-Gen Services:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>5G Services Management:</strong> Network slice order decomposition and orchestration</li>
                <li><strong>Network Inventory Integration:</strong> Associate orders with required network resources</li>
                <li><strong>Zero-Touch Automation:</strong> Dynamic order decomposition and automated fulfillment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Telecom Operations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>MACD Orders:</strong> Move, add, change, delete request processing</li>
                <li><strong>Service Bridge:</strong> Partner ecosystem integration and catalog publishing</li>
                <li><strong>Jeopardy Management:</strong> Proactive risk management during fulfillment</li>
                <li><strong>Process Mining:</strong> AI-driven bottleneck identification and removal</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow OMT handle complex telecom order fulfillment?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow OMT provides comprehensive order fulfillment capabilities for complex telecom services:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Catalog-Driven Orchestration:</strong> Dynamic workflows driven by advanced telecom product catalogs</li>
            <li><strong>Staggered Decomposition:</strong> Flexible workflows for complex multi-service orders with internal and external data</li>
            <li><strong>Order Timeline View:</strong> Single pane of glass for end-to-end order visibility and tracking</li>
            <li><strong>Automated Task Assignment:</strong> Auto-creation and assignment of fulfillment tasks with detailed tracking</li>
            <li><strong>Fallout Management:</strong> Proactive detection and resolution of order issues to minimize customer impact</li>
            <li><strong>Integration Capabilities:</strong> Connect with Field Service Management, Network Inventory, and Strategic Portfolio Management</li>
          </ul>
          <p className="mt-3">
            This approach ensures CSPs can handle next-generation service complexity while maintaining operational efficiency.
          </p>
        </div>
      )
    },

    {
      question: "What pricing and contract management capabilities are included?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow OMT provides comprehensive pricing and contract management for telecom services:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Advanced Pricing Models:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>One-time, recurring, account-based, and multi-currency pricing support</li>
                <li>Cost books providing cost and margin visibility for healthy profit margins</li>
                <li>Dynamic pricing based on customer segments and service complexity</li>
                <li>Usage-based billing for consumption models and 5G services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contract Lifecycle Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Streamlined quote-to-contract processes with automated workflows</li>
                <li>Contract lifecycle management from sales through execution</li>
                <li>Renewal workflow automation for contract and entitlement renewals</li>
                <li>Service level agreement management and monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Product Portfolio Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Support for complex product bundles and combined offerings</li>
                <li>Commercial and technical catalog management</li>
                <li>Partner product integration and ecosystem management</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Telecommunications Order Management cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on CSP size, service complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OMT Standard Implementation:</strong> Starting from $400K - includes core order management, basic TM Forum APIs, and standard integrations for regional CSPs</li>
            <li><strong>OMT Professional Implementation:</strong> $600K-$900K - includes 5G services, advanced orchestration, comprehensive TM Forum API integration for national CSPs</li>
            <li><strong>Enterprise OMT Suite:</strong> $1M+ - complete solution with AI automation, network inventory integration, partner ecosystems for global CSPs</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through revenue acceleration (35%), operational efficiency (45%), and improved customer satisfaction (30%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "OMT ROI Calculator", url: "/omt-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow OMT?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on telecom service complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OMT Standard:</strong> 18-24 weeks for core order management, basic TM Forum API integration, and standard BSS/OSS connectivity</li>
            <li><strong>OMT Professional:</strong> 24-30 weeks including 5G services, network inventory integration, and comprehensive partner ecosystem setup</li>
            <li><strong>Enterprise OMT Suite:</strong> 30-38 weeks for complete solution with AI automation, complex orchestration, and extensive network integration</li>
          </ul>
          <p className="mt-3">
            Our methodology: Telecom Assessment & API Planning (4-6 weeks) → Core Platform & Catalog Configuration (12-16 weeks) → Network Integration & TM Forum API Setup (8-10 weeks) → Go-Live & CSP Training (6-8 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow OMT integrate with existing telecom BSS/OSS systems?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow OMT provides comprehensive integration capabilities for telecom ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TM Forum Open APIs:</strong> Gold Tier certified integration with 15+ Open APIs for standards-based connectivity</li>
            <li><strong>BSS/OSS Integration:</strong> Native connectivity with billing, provisioning, and assurance systems</li>
            <li><strong>Network Systems:</strong> Integration with SDN controllers, NFV orchestrators, and network inventory systems</li>
            <li><strong>CRM/ERP Systems:</strong> Connection with customer management and enterprise resource planning platforms</li>
            <li><strong>Partner Ecosystems:</strong> Service Bridge integration for multi-partner service delivery</li>
            <li><strong>Legacy System Modernization:</strong> Gradual modernization approach preserving existing investments</li>
            <li><strong>5G Network Integration:</strong> Native support for network slicing and edge computing orchestration</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> CSPs maintain existing investments while gaining unified order management and next-generation service capabilities.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on OMT success stories)
  const caseStudies = [
    {
      title: "ATN International Connects Remote Communities with ServiceNow Support",
      client: "ATN International",
      industry: "Telecommunications Service Provider",
      challenge: "Expanding superfast broadband connectivity to remote communities while managing complex service delivery and customer experience requirements",
      solution: "ServiceNow Order Management for Telecommunications with comprehensive service orchestration, customer experience management, and network integration capabilities",
      results: [
        { metric: "Remote", description: "Community connectivity" },
        { metric: "Superfast", description: "Broadband deployment" },
        { metric: "Enhanced", description: "Customer experience" },
        { metric: "Scalable", description: "Service delivery" }
      ],
      testimonial: "With support from ServiceNow, we can connect more communities in remote areas with superfast broadband.",
      executive: "Chief Customer Experience Officer",
      logo: "/images/clients/atn-international-logo.png"
    },
    {
      title: "LUMEN Creates Scalable Platform Blueprint with ServiceNow OMT",
      client: "LUMEN",
      industry: "Enterprise Communications",
      challenge: "Need to create scalable platform blueprint for rapidly bringing wide range of new revenue streams to market while managing complex service offerings",
      solution: "ServiceNow Sales and Order Management for Telecommunications with comprehensive platform blueprint, revenue stream management, and scalable architecture",
      results: [
        { metric: "Platform", description: "Blueprint creation" },
        { metric: "Scalable", description: "Architecture deployment" },
        { metric: "Revenue", description: "Stream diversification" },
        { metric: "Market", description: "Acceleration achieved" }
      ],
      testimonial: "With ServiceNow's support, we've created a platform blueprint that we can rapidly replicate and scale to bring a wide range of new revenue streams to market.",
      executive: "VP Platform Applications, SASE",
      logo: "/images/clients/lumen-logo.png"
    },
    {
      title: "Global CSP Achieves TM Forum Integration Excellence with ServiceNow",
      client: "International Telecommunications Group",
      industry: "Global Communications Services",
      challenge: "Complex multi-vendor ecosystem integration requiring TM Forum Open API compliance and seamless interoperability across global operations",
      solution: "ServiceNow OMT with Gold Tier TM Forum certification, comprehensive Open API integration, and global ecosystem orchestration capabilities",
      results: [
        { metric: "15+", description: "TM Forum APIs certified" },
        { metric: "Gold Tier", description: "Certification achieved" },
        { metric: "Multi-Vendor", description: "Ecosystem integration" },
        { metric: "Global", description: "Operations unified" }
      ],
      testimonial: "ServiceNow's Gold Tier TM Forum certification enabled us to achieve seamless integration across our multi-vendor ecosystem while maintaining industry standards compliance.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/telecom-group-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Sales and Order Management for Telecommunications - ServiceNow Telecom OM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Telecom order management turns services into revenue quickly while building for customer success. TM Forum Open APIs aligned, AI-powered automation for CSPs."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Telecom OM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Telecom OM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-sky-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sky-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-sky-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered OMT
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    TM Forum Gold
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 font-semibold">
                    Telecommunications
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Order Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-blue-300">Telecom order management turns services into revenue quickly</span> while building for customer success with{' '}
                  <span className="font-semibold text-indigo-300">TM Forum Open APIs and AI automation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Telecom OM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-indigo-400 group-hover:text-indigo-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* TM Forum Badge */}
                <div className="bg-gradient-to-r from-sky-500/15 to-blue-500/15 backdrop-blur-sm rounded-xl p-4 border border-sky-300/20">
                  <div className="flex items-center gap-3">
                    <Antenna className="h-8 w-8 text-sky-300" />
                    <div>
                      <div className="text-lg font-bold text-white">TM Forum Gold Tier Certified</div>
                      <div className="text-sm text-sky-200">15+ Open APIs for telecommunications industry standards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-sky-500/15 to-blue-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Telecommunications Order Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-sky-600 to-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">5G Ready</div>
                      <div className="text-xs text-sky-200">Services</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">TM Forum</div>
                      <div className="text-xs text-blue-200">Certified</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Antenna className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Network className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-sky-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  Transform Telecom
                </span>
                <br />
                <span className="text-gray-800">
                  Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Define services quickly, accelerate revenue, and boost customer retention with TM Forum certified order management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sky-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-200">
                      <div className="text-sm font-semibold text-sky-700 mb-1">Key Value</div>
                      <div className="text-sky-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Telecom OM Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive applications that scale with telecom provider needs, from opportunity management to 5G service orchestration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* TM Forum APIs Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  TM Forum Open APIs
                </span>
                <br />
                <span className="text-gray-800">
                  Gold Tier Certified
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Industry-standard APIs enabling seamless interoperability with existing telecom ecosystems and vendor solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tmForumApis.map((api, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <api.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {api.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {api.description}
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Certification Status</div>
                      <div className="text-indigo-600 text-lg font-bold">{api.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Telecom Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                  Telecom-Specific
                </span>
                <br />
                <span className="text-gray-800">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced telecommunications capabilities including 5G services, network integration, and CSP-specific automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {telecomCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Key Benefit</div>
                      <div className="text-purple-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Telecommunications Order Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about telecom OM implementation, TM Forum APIs, and CSP transformation.
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Telecom Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                See how telecommunications providers transformed their operations with AI-powered Order Management solutions.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-200 border border-rose-400/30 mr-3">
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

                            <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-rose-400">
                              <Quote className="h-6 w-6 text-rose-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-rose-300">— {study.executive}</p>
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
                                <span className="text-rose-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-rose-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Accelerate Telecom Revenue?
                </h2>
                <p className="text-lg md:text-xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive telecommunications order management with TM Forum Open APIs and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Telecom Experts
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
                    <Mail className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">telecom-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
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
      `}</style>
    </>
  );
}
