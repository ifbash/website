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
  Plug,
  Lock,
  Bug,
  Container,
  Crosshair,
  GraduationCap as CapIcon,
  ExternalLinkIcon,
  Layers as LayersIcon,
  ShieldIcon,
  UserIcon,
  TreeIcon,
  PenTool,
  Home,
  Terminal,
  Handshake
} from "lucide-react";

export default function SourcingProcurementOperationsPage() {
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
    "name": "Sourcing and Procurement Operations - ServiceNow SPO",
    "description": "Deliver a streamlined buying experience, digitize processes with self-service, align work teams, and boost productivity with Procurement Service Management.",
    "applicationCategory": "Sourcing and Procurement Operations"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Sourcing and Procurement Operations and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Sourcing and Procurement Operations creates a single engagement layer across systems to make indirect procurement easier. It orchestrates teams and end-to-end processes efficiently while using AI to eliminate manual work and improve employee experience."
        }
      },
      {
        "@type": "Question", 
        "name": "What is ShoppingHub and how does it enhance the employee procurement experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ShoppingHub makes it easy for employees to buy the goods and services they need with a user-friendly portal. It provides seamless procurement experience with vendor catalogs, purchase requests, and order tracking all from one centralized platform."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Sourcing and Procurement Operations content)
  const benefits = [
    {
      icon: Zap,
      title: "Boost employee efficiency",
      description: "Free up procurement specialists for high-value tasks with intelligent automation. Accelerate processes by connecting and orchestrating stakeholders, data, and systems within centralized workflows.",
      color: "from-blue-500 to-indigo-500",
      stats: "Intelligent automation"
    },
    {
      icon: Heart,
      title: "Deliver great experiences",
      description: "Increase employee engagement with user-friendly, omnichannel experiences. Integrate suppliers into the value chain to enhance collaboration and provide connected, interactive experiences.",
      color: "from-indigo-500 to-purple-500",
      stats: "Enhanced engagement"
    },
    {
      icon: Eye,
      title: "Gain end-to-end visibility",
      description: "Obtain insight into procurement processes with SLAs for managers and status reports for employees. Enable continuous improvement with real-time KPI benchmarking.",
      color: "from-purple-500 to-pink-500",
      stats: "Complete visibility"
    },
    {
      icon: Target,
      title: "Align work with priorities",
      description: "Align work with procurement priorities, boost productivity, and seamlessly integrate technologies into a lifecycle management model with comprehensive automation.",
      color: "from-pink-500 to-rose-500",
      stats: "Strategic alignment"
    }
  ];

  // Key Features (From ServiceNow Sourcing and Procurement Operations content)
  const keyFeatures = [
    {
      icon: MessageCircle,
      title: "Procurement Case Management",
      description: "Resolve common requests with a virtual agent and a searchable knowledge base for comprehensive procurement inquiry and case management.",
      capabilities: [
        "Virtual agent support",
        "Searchable knowledge base",
        "Automated case creation",
        "Request fulfillment workflows"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: ShoppingCart,
      title: "ShoppingHub",
      description: "Make it easy for employees to buy the goods and services they need with user-friendly portal and comprehensive vendor catalog integration.",
      capabilities: [
        "Employee self-service portal",
        "Vendor catalog integration",
        "Purchase request workflows",
        "Order tracking capabilities"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Layout,
      title: "Employee Center",
      description: "Provide a single, unified portal for service delivery across the enterprise with comprehensive procurement service integration.",
      capabilities: [
        "Unified service portal",
        "Enterprise-wide access",
        "Procurement service integration",
        "Cross-department workflows"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Knowledge Management",
      description: "Improve business efficiency with easy knowledge sharing and collaboration through centralized information and AI-powered insights.",
      capabilities: [
        "Centralized knowledge base",
        "AI-powered insights",
        "Collaborative information sharing",
        "Contextual knowledge delivery"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Smartphone,
      title: "Now Mobile",
      description: "Find answers, get help, and make requests across departments from a single, native mobile app for enhanced mobility and productivity.",
      capabilities: [
        "Native mobile application",
        "Cross-department requests",
        "Self-service capabilities",
        "Mobile-optimized workflows"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Reporting",
      description: "Create on-demand reports using a single data model for instant, up-to-date insights with comprehensive procurement analytics and KPI tracking.",
      capabilities: [
        "On-demand reporting",
        "Single data model",
        "Real-time insights",
        "KPI tracking"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Bot,
      title: "Virtual Agent for SPO",
      description: "AI-powered conversational intake for purchase requests, sourcing cases, and general procurement inquiries with intelligent automation.",
      capabilities: [
        "Conversational AI interface",
        "Purchase request automation",
        "Off-catalog request capture",
        "Intelligent inquiry routing"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Workflow,
      title: "Sourcing and Purchasing Automation",
      description: "End-to-end procurement automation from sourcing requests through invoices with comprehensive workflow orchestration and process management.",
      capabilities: [
        "End-to-end automation",
        "Sourcing request management",
        "Purchase order processing",
        "Contract lifecycle management"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Procurement Process Automation Benefits
  const procurementProcessBenefits = [
    {
      title: "Streamlined Employee Experience",
      description: "Purpose-built Purchase and Expense service catalog enables employees to easily submit requests using enterprise service management with single front door access.",
      icon: UserCheck,
      benefit: "Enhanced user experience"
    },
    {
      title: "Automated Routine Requests",
      description: "Virtual Agent provides end-to-end intelligent conversational experience enabling instant resolution and freeing procurement teams for strategic priorities.",
      icon: Bot,
      benefit: "Intelligent automation"
    },
    {
      title: "Single System of Action",
      description: "Eliminates risk of manual handoffs and swivel-chairing between disparate systems by orchestrating information and tasks from one unified platform.",
      icon: Layers,
      benefit: "Unified platform"
    },
    {
      title: "End-to-End Visibility",
      description: "Procurement leaders gain real-time visibility into task status, workload priorities, bottlenecks, and process improvements without manual updates.",
      icon: Eye,
      benefit: "Complete transparency"
    },
    {
      title: "Configurable Digital Workflows",
      description: "Process automation orchestrates information and tasks across siloed teams with specialized workspaces and visual task sequencing guides.",
      icon: Cog,
      benefit: "Process automation"
    },
    {
      title: "Supplier Integration",
      description: "Integrate suppliers into the value chain enhancing collaboration and providing connected, interactive experiences for comprehensive supplier management.",
      icon: Handshake,
      benefit: "Supplier collaboration"
    }
  ];

  // Advanced SPO Capabilities
  const advancedCapabilities = [
    {
      title: "Now Assist for SPO",
      description: "AI-powered procurement assistance with Virtual Agent conversational intake for purchase requests, sourcing cases, and general procurement inquiries.",
      icon: Sparkles,
      benefit: "AI-powered assistance"
    },
    {
      title: "Purchase Assignment Rules",
      description: "Automated assignment rules for purchase requisitions and sourcing requests ensuring proper routing to procurement specialists and approval workflows.",
      icon: Route,
      benefit: "Intelligent routing"
    },
    {
      title: "Vendor Catalog Integration",
      description: "Seamless integration with vendor catalogs enabling employees to browse, compare, and purchase from approved suppliers within ShoppingHub portal.",
      icon: Store,
      benefit: "Vendor connectivity"
    },
    {
      title: "Contract Lifecycle Management",
      description: "Connected contract management solution providing self-service contract creation, AI-powered legal assistance, and automated workflow management.",
      icon: FileCheck,
      benefit: "Contract automation"
    },
    {
      title: "Multi-Channel Access",
      description: "Omnichannel procurement experience available on desktop and mobile with consistent user interface and functionality across all platforms.",
      icon: Globe,
      benefit: "Omnichannel access"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive procurement analytics with real-time KPI benchmarking, performance tracking, and continuous improvement capabilities.",
      icon: TrendingUp,
      benefit: "Data-driven insights"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Sourcing and Procurement Operations and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Sourcing and Procurement Operations transforms how organizations manage procurement processes:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Creates a single engagement layer across systems to make indirect procurement easier and more efficient</li>
            <li>Orchestrates teams and end-to-end processes efficiently with comprehensive workflow automation and collaboration</li>
            <li>Uses AI to eliminate manual work, improve employee experience, and speed business processes significantly</li>
            <li>Provides employees with simple automated AI-assisted tools for shopping, sourcing, and procurement activities</li>
            <li>Part of Source-to-Pay Operations solution offering comprehensive procurement lifecycle management from request to payment</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> with ShoppingHub, Procurement Case Management, and Virtual Agent providing comprehensive procurement automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What is ShoppingHub and how does it enhance the employee procurement experience?",
      answer: (
        <div>
          <p className="mb-3">ShoppingHub revolutionizes employee procurement with comprehensive self-service capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>User-Friendly Interface:</strong> Seamless experience for employees to request goods and services, available on both desktop and mobile platforms</li>
            <li><strong>Vendor Catalog Integration:</strong> Direct access to vendor catalogs enabling employees to browse, compare, and purchase from approved suppliers</li>
            <li><strong>Simplified Procurement:</strong> Easy navigation through categories, suppliers, and delivery options with streamlined purchasing workflows</li>
            <li><strong>Order Tracking:</strong> Real-time visibility into order status, delivery tracking, and procurement process progression</li>
            <li><strong>Off-Catalog Requests:</strong> Capability for employees to place requests for products or services not currently listed in ShoppingHub portal</li>
            <li><strong>Service Portal Configuration:</strong> Configurable service portal allowing quick access to ShoppingHub with purchasing and sourcing capabilities</li>
            <li><strong>Automated Workflows:</strong> Sourcing and Purchasing Automation workflows support user interface purchasing experience for shoppers</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach removes manual tasks, reduces errors, and provides real-time visibility into procurement processes for enhanced efficiency.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Sourcing and Procurement Operations?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SPO provides comprehensive procurement automation capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Core Procurement Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>ShoppingHub:</strong> Employee self-service portal for goods and services procurement with vendor catalog integration</li>
                <li><strong>Procurement Case Management:</strong> Virtual agent support with searchable knowledge base for inquiry resolution</li>
                <li><strong>Employee Center:</strong> Unified portal for service delivery across the enterprise with procurement service integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Advanced Procurement Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Virtual Agent for SPO:</strong> AI-powered conversational intake for purchase requests and procurement inquiries</li>
                <li><strong>Sourcing and Purchasing Automation:</strong> End-to-end procurement workflows from sourcing requests through invoices</li>
                <li><strong>Knowledge Management:</strong> AI-powered insights with collaborative information sharing and contextual knowledge delivery</li>
                <li><strong>Now Mobile:</strong> Native mobile application for cross-department requests and self-service capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Procurement Case Management handle employee requests and inquiries?",
      answer: (
        <div>
          <p className="mb-3">
            Procurement Case Management provides comprehensive request handling and inquiry resolution:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Virtual Agent Resolution:</strong> Resolves common requests with intelligent virtual agent instead of requiring procurement expert intervention</li>
            <li><strong>Searchable Knowledge Base:</strong> Comprehensive knowledge sharing across the enterprise with AI-powered contextual information</li>
            <li><strong>Automated Case Creation:</strong> Automatic case creation for procurement requests with proper routing and assignment workflows</li>
            <li><strong>Single System of Action:</strong> Orchestrates information and tasks across work teams eliminating manual handoffs and system swivel-chairing</li>
            <li><strong>Configurable Workflows:</strong> Digital workflows and process automation with specialized workspaces and visual task sequencing</li>
            <li><strong>47% Workload Handling:</strong> Addresses up to 47% of total procurement workload including order changes, cancellations, and general inquiries</li>
            <li><strong>End-to-End Visibility:</strong> Real-time visibility into case workload, team performance, and procurement process status for leaders</li>
          </ul>
          <p className="mt-3">
            This systematic approach transforms procurement from tactical to strategic by enabling self-service resolution and automated workflow management.
          </p>
        </div>
      )
    },

    {
      question: "What integration capabilities does SPO provide with existing procurement and enterprise systems?",
      answer: (
        <div>
          <p className="mb-3">SPO provides extensive integration capabilities for comprehensive procurement ecosystem connectivity:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Core System Integration:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>ERP Integration:</strong> Simple integrations with existing systems of record ensuring real-time data synchronization</li>
                <li><strong>Vendor System Connectivity:</strong> Direct integration with vendor catalogs and supplier systems for seamless procurement</li>
                <li><strong>Contract Management:</strong> Connected CLM solution with self-service contract creation and AI-powered legal assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Advanced Integration Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Single System of Action:</strong> Connects all procurement systems to work together in real-time without replacing existing investments</li>
                <li><strong>Employee Center Integration:</strong> Unified portal access with procurement case types, knowledge articles, and purchasing tasks</li>
                <li><strong>Service Portal Configuration:</strong> Configurable portals enabling quick ShoppingHub access with comprehensive functionality</li>
                <li><strong>Mobile Integration:</strong> Native mobile access with consistent functionality across desktop and mobile platforms</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Sourcing and Procurement Operations implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, procurement complexity, and system integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPO Standard:</strong> Starting from $220K - includes ShoppingHub, basic case management, and standard procurement workflows for mid-size organizations</li>
            <li><strong>SPO Professional:</strong> $320K-$480K - includes Virtual Agent, advanced analytics, and comprehensive procurement automation for large enterprises</li>
            <li><strong>SPO Enterprise with Source-to-Pay:</strong> $650K+ - complete solution with contract management, supplier lifecycle, and enterprise-scale procurement operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 4-8 months through procurement cycle time reduction (50%), manual work elimination (40%), and operational efficiency gains (35%). ShoppingHub can reduce procurement request handling time by 60%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Procurement ROI Calculator", url: "/procurement-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Sourcing and Procurement Operations?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on procurement process maturity and system integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPO Standard:</strong> 6-10 weeks for ShoppingHub, basic case management, and standard procurement workflow automation</li>
            <li><strong>SPO Professional:</strong> 10-16 weeks including Virtual Agent, advanced analytics, procurement case management, and comprehensive automation</li>
            <li><strong>SPO Enterprise with Source-to-Pay:</strong> 16-22 weeks for complete solution with contract management, supplier lifecycle, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Procurement Assessment & Process Analysis (2-3 weeks) → Core SPO Platform & ShoppingHub Configuration (3-5 weeks) → Case Management & Virtual Agent Setup (2-4 weeks) → Advanced Features & System Integration (3-5 weeks) → Go-Live & Procurement Team Training (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does SPO integrate with existing procurement systems and supplier networks?",
      answer: (
        <div>
          <p className="mb-3">SPO provides comprehensive integration capabilities for complete procurement ecosystem connectivity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ERP System Integration:</strong> Native integration with SAP, Oracle, Microsoft Dynamics, and other major ERP systems for procurement data synchronization</li>
            <li><strong>Supplier Catalog Integration:</strong> Direct connection with supplier catalogs, vendor portals, and e-procurement platforms for seamless purchasing</li>
            <li><strong>Contract Management Systems:</strong> Integration with CLM solutions for contract creation, negotiation tracking, and obligation management</li>
            <li><strong>Financial System Connectivity:</strong> Integration with accounting, budgeting, and financial planning systems for spend management and approval workflows</li>
            <li><strong>Inventory and Asset Management:</strong> Connection with inventory management systems for stock tracking, asset procurement, and supply chain optimization</li>
            <li><strong>Supplier Network Platforms:</strong> Integration with supplier networks, e-marketplaces, and procurement consortiums for expanded sourcing capabilities</li>
            <li><strong>Communication Platforms:</strong> Integration with Microsoft Teams, Slack, and email systems for procurement notifications and collaboration</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified procurement operations while maintaining existing system investments and supplier relationship continuity.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SPO success stories)
  const caseStudies = [
    {
      title: "Dropbox Cuts Procurement Cycle Times by 50% in Eight Weeks with Complete Spend Control",
      client: "Dropbox Inc.",
      industry: "Technology",
      challenge: "Technology company requiring 50% reduction in procurement cycle times with complete corporate spend control and comprehensive procurement automation optimization",
      solution: "ServiceNow Sourcing and Procurement Operations with technology-specific workflows, spend management, and comprehensive procurement automation",
      results: [
        { metric: "50%", description: "Cycle time reduction" },
        { metric: "8 Weeks", description: "Implementation time" },
        { metric: "Complete", description: "Spend control" },
        { metric: "Corporate", description: "Procurement optimized" }
      ],
      testimonial: "With ServiceNow, we've cut procurement cycle times by more than 50% in just eight weeks, and we have complete control of our corporate spend.",
      executive: "Reunan Varene, Director of Source to Pay",
      logo: "/images/clients/dropbox-logo.png"
    },
    {
      title: "Global Manufacturing Company Automates 80% of Procurement Requests with ShoppingHub",
      client: "Fortune 500 Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manufacturing operations requiring automation of 80% procurement requests with comprehensive ShoppingHub deployment and supplier catalog integration",
      solution: "ServiceNow SPO with manufacturing-specific procurement workflows, ShoppingHub portal, and comprehensive supplier catalog integration optimization",
      results: [
        { metric: "80%", description: "Requests automated" },
        { metric: "ShoppingHub", description: "Portal deployed" },
        { metric: "Supplier", description: "Catalogs integrated" },
        { metric: "Manufacturing", description: "Procurement optimized" }
      ],
      testimonial: "ServiceNow SPO with ShoppingHub automated 80% of our procurement requests, transforming employee experience and supplier relationships.",
      executive: "Chief Procurement Officer",
      logo: "/images/clients/manufacturing-corp-logo.png"
    },
    {
      title: "Healthcare Network Reduces Procurement Workload by 47% with Virtual Agent Case Management",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Healthcare operations requiring 47% procurement workload reduction with Virtual Agent case management and comprehensive healthcare compliance automation",
      solution: "ServiceNow SPO with healthcare-specific case management, Virtual Agent deployment, and medical industry procurement compliance optimization",
      results: [
        { metric: "47%", description: "Workload reduction" },
        { metric: "Virtual Agent", description: "Case management" },
        { metric: "Healthcare", description: "Compliance optimized" },
        { metric: "Procurement", description: "Operations automated" }
      ],
      testimonial: "ServiceNow SPO reduced our procurement workload by 47% through Virtual Agent case management, enabling strategic focus on healthcare operations.",
      executive: "VP of Supply Chain Operations",
      logo: "/images/clients/healthcare-network-logo.png"
    },
    {
      title: "Financial Services Firm Achieves End-to-End Procurement Visibility with Real-Time Analytics",
      client: "Global Financial Services Corporation",
      industry: "Financial Services",
      challenge: "Financial services requiring end-to-end procurement visibility with real-time analytics and comprehensive regulatory compliance management",
      solution: "ServiceNow SPO with financial services-specific workflows, real-time analytics, and comprehensive regulatory compliance procurement optimization",
      results: [
        { metric: "End-to-End", description: "Visibility achieved" },
        { metric: "Real-Time", description: "Analytics deployed" },
        { metric: "Regulatory", description: "Compliance ensured" },
        { metric: "Financial", description: "Services optimized" }
      ],
      testimonial: "ServiceNow SPO achieved end-to-end procurement visibility with real-time analytics, ensuring regulatory compliance and operational excellence.",
      executive: "Chief Operating Officer",
      logo: "/images/clients/financial-services-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Sourcing and Procurement Operations - ServiceNow SPO Portfolio | ifBash</title>
        <meta
          name="description"
          content="Deliver a streamlined buying experience, digitize processes with self-service, align work teams, and boost productivity with Procurement Service Management."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SPO Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SPO Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
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
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Procurement
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    ShoppingHub
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Sourcing and Procurement
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                      Operations
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-indigo-300">Deliver a streamlined buying experience, digitize processes with self-service,</span>{' '}
                  <span className="font-semibold text-purple-300">align work teams, and boost productivity</span> with comprehensive procurement automation.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SPO Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      Watch Video
                    </span>
                  </button>
                </div>

                {/* Procurement Platform Badge */}
                <div className="bg-gradient-to-r from-blue-500/15 to-indigo-500/15 backdrop-blur-sm rounded-xl p-4 border border-blue-300/20">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-8 w-8 text-blue-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Procurement Automation Platform</div>
                      <div className="text-sm text-blue-200">ShoppingHub with AI-powered case management and virtual agents</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Sourcing and Procurement Operations Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-indigo-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Shopping</div>
                      <div className="text-xs text-blue-200">Hub Portal</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI</div>
                      <div className="text-xs text-indigo-200">Virtual Agent</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ShoppingCart className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Bot className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Transform Procurement
                </span>
                <br />
                <span className="text-gray-800">
                  Process Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Connect purchasing processes and streamline procurement to build efficiencies with intelligent automation and comprehensive workflow orchestration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
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

        {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Key SPO Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Procurement Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive procurement features from ShoppingHub to Virtual Agent with AI-powered automation and end-to-end workflow orchestration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Procurement Process Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                  Procurement Process Benefits
                </span>
                <br />
                <span className="text-gray-800">
                  Operational Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Achieve operational excellence through streamlined employee experience, automated routine requests, and comprehensive end-to-end visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {procurementProcessBenefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Key Benefit</div>
                      <div className="text-purple-600 text-lg font-bold">{benefit.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise SPO Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced SPO capabilities including Now Assist, contract lifecycle management, and comprehensive multi-channel procurement access.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200">
                      <div className="text-sm font-semibold text-pink-700 mb-1">Key Benefit</div>
                      <div className="text-pink-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About SPO
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Sourcing and Procurement Operations implementation, ShoppingHub, and procurement automation.
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-900 via-rose-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-rose-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SPO Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their procurement operations with comprehensive SPO solutions and ShoppingHub automation capabilities.
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
                            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                  <div className="text-2xl font-bold text-yellow-400 mb-1">{result.metric}</div>
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
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Procurement Operations?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive SPO with ShoppingHub and AI-powered procurement automation capabilities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SPO Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Read Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">spo-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Watch Video</p>
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
