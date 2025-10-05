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
  Rss
} from "lucide-react";

export default function TelecommunicationsServiceManagementPage() {
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
    "name": "Telecommunications Service Management - ServiceNow TSM Implementation",
    "description": "Connect your telecom operations—from the network to the customer—on a single platform. Enhance customer care and automate service assurance with AI-powered TSM.",
    "applicationCategory": "Telecommunications Service Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Telecommunications Service Management and how does it help CSPs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow TSM connects telecom operations from network to customer on a single AI platform, enhancing customer care, automating service assurance, and boosting agent productivity with Now Assist for Telco."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Now Assist for Telco and how does it leverage NVIDIA AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Now Assist for TSM is built on NVIDIA AI technology to boost agent productivity, speed time to resolution, and enhance customer experiences with GenAI-powered chat summarization and intelligent service assurance."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow TSM content)
  const benefits = [
    {
      icon: Zap,
      title: "Resolve issues proactively",
      description: "Bring customer support and service operations together to automate issue resolution and provide transparency to everyone involved.",
      color: "from-violet-500 to-purple-500",
      stats: "Proactive service delivery"
    },
    {
      icon: TrendingUp,
      title: "Unleash productivity",
      description: "Take customer service to the next level with AI-driven insights and tools that empower agents to do their work better and faster.",
      color: "from-purple-500 to-fuchsia-500",
      stats: "Enhanced agent productivity"
    },
    {
      icon: Network,
      title: "Deliver seamless experiences",
      description: "Connect people, processes, and systems across the ecosystem, making every service experience more seamless, transparent, and proactive.",
      color: "from-fuchsia-500 to-pink-500",
      stats: "Connected operations"
    },
    {
      icon: Bot,
      title: "AI-driven automation",
      description: "Unlock growth with AI-powered experiences in service and network operations using Now Assist for Telco powered by NVIDIA technology.",
      color: "from-pink-500 to-rose-500",
      stats: "NVIDIA-powered AI"
    }
  ];

  // Key Features (From ServiceNow TSM content)
  const keyFeatures = [
    {
      icon: Bot,
      title: "Now Assist for Telco",
      description: "Understand and resolve service issues faster with instant AI-powered summaries, case resolution assistance, and contextual recommendations.",
      capabilities: [
        "Instant case summarization",
        "AI-powered resolution guidance",
        "Technical jargon translation",
        "NVIDIA AI integration"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Account Lifecycle Events",
      description: "Provide structured, repeatable, and transparent onboarding experience for customers and stakeholders throughout their journey.",
      capabilities: [
        "Structured onboarding workflows",
        "Repeatable customer processes",
        "Transparent stakeholder communication",
        "Customer journey management"
      ],
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: Globe,
      title: "Self-Service Portal",
      description: "Drive proactive self-service from a portal integrated with knowledge, service catalogs, communities, and AI-powered chatbots.",
      capabilities: [
        "Integrated knowledge base",
        "Service catalog access",
        "Community engagement",
        "Virtual agent support"
      ],
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Engagement Messenger",
      description: "Embed self-service experiences on any web or mobile website to provide seamless customer interaction capabilities.",
      capabilities: [
        "Web and mobile integration",
        "Embedded self-service",
        "Seamless customer interaction",
        "Multi-channel support"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Link,
      title: "Service Bridge",
      description: "Give enterprise customers an integrated experience with connected workflows across partner ecosystems and service providers.",
      capabilities: [
        "Enterprise customer integration",
        "Connected partner workflows",
        "Ecosystem collaboration",
        "Unified service experience"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Eye,
      title: "360° Customer View",
      description: "Empower support teams with a comprehensive 360-degree view of customer accounts, service history, and interaction data.",
      capabilities: [
        "Complete customer visibility",
        "Service history tracking",
        "Interaction data analysis",
        "Support team enablement"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Workflow,
      title: "Service Operations Workspace",
      description: "Manage incidents proactively with clear visibility when services are at risk and automated workflow orchestration.",
      capabilities: [
        "Proactive incident management",
        "Service risk visibility",
        "Automated orchestration",
        "Real-time monitoring"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Database,
      title: "Service-Aware CMDB",
      description: "Streamline service and network operations with a single common data structure for unified configuration management.",
      capabilities: [
        "Common data structure",
        "Service awareness integration",
        "Network operations alignment",
        "Configuration management"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "5G Services Management",
      description: "Launch differentiated 5G services quickly with network slice template models and automated service orchestration.",
      icon: Antenna,
      benefit: "Next-generation service delivery"
    },
    {
      title: "Real-Time Service Health",
      description: "Gain data-driven automation and improve user experience through AI and machine learning with continuous monitoring.",
      icon: Activity,
      benefit: "Proactive service optimization"
    },
    {
      title: "Process Mining",
      description: "Improve outcomes by optimizing process flows to streamline work and identify operational bottlenecks automatically.",
      icon: BarChart3,
      benefit: "Operational excellence"
    },
    {
      title: "Workforce Optimization",
      description: "Manage teams effectively with real-time visibility into agent workload, performance metrics, and resource allocation.",
      icon: Users2,
      benefit: "Enhanced team productivity"
    },
    {
      title: "Advanced Product Catalog",
      description: "Manage, visualize, and track product offerings and their components in a single configurable workspace environment.",
      icon: Package,
      benefit: "Unified product management"
    },
    {
      title: "Service-Aware Install Base",
      description: "Model complex services and identify impacted customers to quickly prioritize work activities and resource allocation.",
      icon: Network,
      benefit: "Customer impact management"
    }
  ];

  // Package Tiers
  const packageTiers = [
    {
      name: "TSM Standard",
      description: "Essential telecommunications service management capabilities for growing CSPs",
      features: [
        "Customer Service Management",
        "Walk-Up Experience",
        "Communities",
        "Engagement Messenger",
        "Digital Portfolio Management",
        "Universal Request"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting Package"
    },
    {
      name: "TSM Professional", 
      description: "Advanced TSM capabilities with AI-powered features for established telecommunications providers",
      features: [
        "All Standard features",
        "Proactive Customer Service Operations",
        "Virtual Agent",
        "Predictive Intelligence",
        "DevOps Integration",
        "Now Assist for TSM"
      ],
      color: "from-purple-500 to-fuchsia-500",
      price: "Professional Package"
    },
    {
      name: "TSM Enterprise",
      description: "Complete TSM solution with advanced analytics and optimization for enterprise-scale operations",
      features: [
        "All Professional features",
        "Workforce Optimization",
        "Process Mining",
        "Advanced Analytics",
        "Enterprise Integration",
        "Full AI Capabilities"
      ],
      color: "from-fuchsia-500 to-pink-500",
      price: "Enterprise Package"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Telecommunications Service Management and how does it help CSPs?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Telecommunications Service Management (TSM) connects telecom operations from network to customer on a single AI platform:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Enhances customer care with AI-powered self-service and proactive support capabilities</li>
            <li>Automates service assurance with real-time monitoring and intelligent incident management</li>
            <li>Boosts agent productivity with Now Assist for Telco powered by NVIDIA AI technology</li>
            <li>Delivers seamless experiences through connected workflows and omnichannel engagement</li>
            <li>Provides 360-degree customer view with comprehensive account and service visibility</li>
          </ul>
          <p className="mt-3 text-sm text-violet-600">
            <strong>Built on ServiceNow AI Platform</strong> with industry-specific capabilities for telecommunications.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Now Assist for Telco and how does it leverage NVIDIA AI?",
      answer: (
        <div>
          <p className="mb-3">Now Assist for TSM is an industry-first generative AI solution built with NVIDIA partnership:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>NVIDIA AI Integration:</strong> Built using NVIDIA AI Enterprise software platform with Triton Inference Server and NeMo customization</li>
            <li><strong>Customer Care Enhancement:</strong> GenAI-powered chat summarization and agent assist capabilities boost productivity and enable call deflection</li>
            <li><strong>Service Assurance:</strong> Provides streamlined, accurate understanding of incidents with technical jargon translation and rapid resolution guidance</li>
            <li><strong>Incident Management:</strong> Handles complex scenarios like fiber cuts with specialized terminology deciphering and clear summary generation</li>
            <li><strong>Agent Productivity:</strong> Summarizes case activity, work notes, and customer interactions while guiding agents with next best actions</li>
          </ul>
          <p className="mt-3">
            This partnership helps telcos quickly and safely harness generative AI power for business-critical use cases while driving cost savings.
          </p>
        </div>
      )
    },

    {
      question: "What key features and capabilities does ServiceNow TSM provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TSM provides comprehensive features designed specifically for telecommunications operations:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Customer Experience:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Self-Service Portal:</strong> Integrated knowledge, service catalogs, communities, and virtual agents</li>
                <li><strong>Omnichannel Engagement:</strong> Customer interaction across preferred channels with unified experience</li>
                <li><strong>360° Customer View:</strong> Complete visibility of customer accounts, service history, and interactions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-fuchsia-600 mb-2">Operations Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Service Operations Workspace:</strong> Proactive incident management with service risk visibility</li>
                <li><strong>Service-Aware CMDB:</strong> Single common data structure for unified configuration management</li>
                <li><strong>Advanced Product Catalog:</strong> Manage and track product offerings in configurable workspace</li>
                <li><strong>5G Services:</strong> Launch differentiated services with network slice template models</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow TSM handle 5G services and network operations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow TSM provides comprehensive 5G and network operations capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>5G Service Orchestration:</strong> Launch differentiated 5G services quickly with network slice template models</li>
            <li><strong>Service-Aware Install Base:</strong> Model complex services and identify impacted customers for priority management</li>
            <li><strong>Real-Time Service Health:</strong> Data-driven automation with AI and ML for continuous service monitoring</li>
            <li><strong>Network Inventory Integration:</strong> Connect with Telecommunications Network Inventory (TNI) for unified asset management</li>
            <li><strong>Proactive Service Workflows:</strong> Empower agents with insights and tools for fast, transparent, proactive service delivery</li>
            <li><strong>Customer Impact Analysis:</strong> Quickly prioritize work activities based on service dependencies and customer impact</li>
          </ul>
          <p className="mt-3">
            This approach enables CSPs to deliver next-generation services while maintaining operational excellence and customer satisfaction.
          </p>
        </div>
      )
    },

    {
      question: "What are the different ServiceNow TSM package options and what's included?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TSM offers three comprehensive package tiers for different organizational needs:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">TSM Standard Package:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Customer Service Management and IT Service Management foundations</li>
                <li>Walk-Up Experience, Communities, and Engagement Messenger</li>
                <li>Digital Portfolio Management and Universal Request capabilities</li>
                <li>Core telecommunications data model and applications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">TSM Professional Package:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus advanced AI capabilities</li>
                <li>Proactive Customer Service Operations and Virtual Agent</li>
                <li>Predictive Intelligence and DevOps integration</li>
                <li>Now Assist for TSM with NVIDIA AI technology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">TSM Enterprise Package:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Professional features plus enterprise-scale capabilities</li>
                <li>Workforce Optimization and Process Mining</li>
                <li>Advanced Platform Analytics and Continual Improvement</li>
                <li>Full AI capabilities with comprehensive integration support</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Telecommunications Service Management cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on CSP size, service complexity, and package selection:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TSM Standard Implementation:</strong> Starting from $450K - includes customer service management, basic AI features, and standard integrations for regional CSPs</li>
            <li><strong>TSM Professional Implementation:</strong> $650K-$950K - includes Now Assist for Telco, advanced automation, and comprehensive service operations for national CSPs</li>
            <li><strong>TSM Enterprise Implementation:</strong> $1.2M+ - complete solution with workforce optimization, process mining, and enterprise-scale deployment for global CSPs</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through agent productivity gains (40%), customer satisfaction improvements (35%), and operational cost reduction (30%). Crown Castle achieved ~$1M savings in first year.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "TSM ROI Calculator", url: "/tsm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow TSM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on CSP complexity and package selection:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TSM Standard:</strong> 16-20 weeks for customer service management, self-service portal, and basic AI capabilities</li>
            <li><strong>TSM Professional:</strong> 20-26 weeks including Now Assist for Telco, advanced automation, and comprehensive service operations</li>
            <li><strong>TSM Enterprise:</strong> 26-34 weeks for complete solution with workforce optimization, process mining, and extensive integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: CSP Assessment & Service Design (4-6 weeks) → Core Platform & Customer Experience Configuration (10-14 weeks) → AI Integration & Testing (6-8 weeks) → Go-Live & Agent Training (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow TSM integrate with existing telecom systems and third-party tools?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TSM provides extensive integration capabilities for telecom ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TM Forum APIs:</strong> Native integration with TM Forum standards for catalog ordering and inventory management</li>
            <li><strong>Network Systems:</strong> Integration with OSS/BSS, network monitoring, and service assurance platforms</li>
            <li><strong>Customer Experience Tools:</strong> Adobe Experience Platform, Genesys, and other CX solutions</li>
            <li><strong>Communication Platforms:</strong> Microsoft Teams, Slack, and enterprise communication systems</li>
            <li><strong>Field Service Integration:</strong> CareAR and other field service productivity tools</li>
            <li><strong>Analytics Platforms:</strong> Real-time dashboards and business intelligence integration</li>
            <li><strong>Legacy System Connectivity:</strong> API-driven integration preserving existing investments</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> CSPs maintain existing infrastructure while gaining unified service management and AI-powered capabilities across the entire value chain.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on TSM success stories)
  const caseStudies = [
    {
      title: "Crown Castle Achieves Million-Dollar Annual Savings with ServiceNow",
      client: "Crown Castle",
      industry: "Wireless Infrastructure",
      challenge: "Manual processes across multiple systems for Network NOC operations causing costly delays, resource inefficiencies, and poor customer service experience",
      solution: "ServiceNow TSM with Customer Service Management, Field Service Management, and integrated network operations for enterprise-grade scalability",
      results: [
        { metric: "~$1M", description: "Annual savings achieved" },
        { metric: "10-15 Min", description: "Saved per agent interaction" },
        { metric: "Enterprise", description: "Grade solution deployed" },
        { metric: "Positive", description: "Customer feedback trend" }
      ],
      testimonial: "I've used other software, but I've never been able to accomplish this much with such a small team in the way I have with ServiceNow.",
      executive: "Operations Systems Program Manager",
      logo: "/images/clients/crown-castle-logo.png"
    },
    {
      title: "SoftBank Boosts Operational Efficiency with TSM Automation",
      client: "SoftBank",
      industry: "Telecommunications Service Provider",
      challenge: "Complex service operations requiring streamlined automation and improved operational efficiency across multiple service domains and customer touchpoints",
      solution: "ServiceNow Telecommunications Service Management with comprehensive automation, AI-powered workflows, and integrated service operations",
      results: [
        { metric: "Boosted", description: "Operational efficiency" },
        { metric: "Automated", description: "Service workflows" },
        { metric: "Streamlined", description: "Operations platform" },
        { metric: "Enhanced", description: "Service delivery" }
      ],
      testimonial: "ServiceNow TSM enabled us to boost operational efficiency through comprehensive automation and streamlined service delivery across our telecommunications operations.",
      executive: "VP of Service Operations",
      logo: "/images/clients/softbank-logo.png"
    },
    {
      title: "Radius Delivers New Installations 80% Faster with ServiceNow TSM",
      client: "Radius",
      industry: "Business Communications",
      challenge: "Lengthy installation processes and complex service delivery workflows affecting customer satisfaction and time-to-service for business communication solutions",
      solution: "ServiceNow TSM with accelerated service delivery, automated installation workflows, and comprehensive customer experience management",
      results: [
        { metric: "80%", description: "Faster installations" },
        { metric: "Accelerated", description: "Service delivery" },
        { metric: "Automated", description: "Installation workflows" },
        { metric: "Enhanced", description: "Customer experience" }
      ],
      testimonial: "ServiceNow TSM transformed our installation processes, enabling us to deliver new services to customers 80% faster while maintaining high quality standards.",
      executive: "Chief Operations Officer",
      logo: "/images/clients/radius-logo.png"
    },
    {
      title: "BT Group Automates 10,000 Transactions with ServiceNow Platform",
      client: "BT Group",
      industry: "Global Telecommunications",
      challenge: "Massive transaction volumes requiring automated processing and intelligent workflow management across global telecommunications operations",
      solution: "ServiceNow TSM with large-scale automation, intelligent transaction processing, and comprehensive service management for global operations",
      results: [
        { metric: "10,000", description: "Automated transactions" },
        { metric: "Large-Scale", description: "Automation deployment" },
        { metric: "Global", description: "Operations coverage" },
        { metric: "Intelligent", description: "Workflow processing" }
      ],
      testimonial: "ServiceNow TSM enabled us to automate 10,000 transactions while maintaining service quality and operational excellence across our global telecommunications network.",
      executive: "Head of Digital Transformation",
      logo: "/images/clients/bt-group-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Telecommunications Service Management - ServiceNow TSM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Connect your telecom operations—from the network to the customer—on a single platform. Enhance customer care and automate service assurance with AI-powered TSM."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss TSM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss TSM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-fuchsia-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-fuchsia-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Now Assist AI
                  </Badge>
                  <Badge className="bg-gradient-to-r from-fuchsia-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    NVIDIA Powered
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 font-semibold">
                    Telecommunications
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 font-semibold">
                      Service Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Connect your telecom operations—from the network to the customer</span> on a single platform with{' '}
                  <span className="font-semibold text-fuchsia-300">AI-powered service assurance and NVIDIA technology</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-fuchsia-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get TSM Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-fuchsia-400 group-hover:text-fuchsia-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* AI Partnership Badge */}
                <div className="bg-gradient-to-r from-violet-500/15 to-purple-500/15 backdrop-blur-sm rounded-xl p-4 border border-violet-300/20">
                  <div className="flex items-center gap-3">
                    <Bot className="h-8 w-8 text-violet-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Now Assist for Telco - NVIDIA Powered</div>
                      <div className="text-sm text-violet-200">Industry-first generative AI for telecommunications</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Telecommunications Service Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                      <div className="text-xs text-violet-200">Service Assurance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">360°</div>
                      <div className="text-xs text-purple-200">Customer View</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Rss className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                  Transform Telecom
                </span>
                <br />
                <span className="text-gray-800">
                  Service Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Unlock growth with AI-driven experiences, enhance customer care, and automate service workflows from network to customer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200">
                      <div className="text-sm font-semibold text-violet-700 mb-1">Key Value</div>
                      <div className="text-violet-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
                  Key TSM Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Telecom Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive features designed specifically for telecommunications service management, from AI-powered assistance to 360° customer visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, idx) => (
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Next-Generation Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced telecommunications capabilities including 5G services, process mining, and workforce optimization for operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-fuchsia-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-xl p-4 border border-fuchsia-200">
                      <div className="text-sm font-semibold text-fuchsia-700 mb-1">Key Benefit</div>
                      <div className="text-fuchsia-600 text-lg font-bold">{capability.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  TSM Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the TSM package that meets your business needs, from essential capabilities to enterprise-scale solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {packageTiers.map((tier, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-full h-4 rounded-t-xl bg-gradient-to-r ${tier.color} mb-6`} />
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                      <p className="text-pink-600 font-semibold">{tier.price}</p>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Telecommunications Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about TSM implementation, Now Assist for Telco, and service transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-rose-500 to-red-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-rose-600 hover:text-rose-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real TSM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how telecommunications providers transformed their operations with AI-powered Service Management solutions.
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
                              <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-200 border border-red-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-200 border border-rose-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-pink-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-pink-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-rose-900/30 rounded-xl p-4 border-l-4 border-red-400">
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
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Telecom Operations?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive telecommunications service management with Now Assist AI and NVIDIA-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact TSM Experts
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
                    <p className="text-white text-sm font-medium">tsm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-pink-200 mx-auto mb-2" />
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
