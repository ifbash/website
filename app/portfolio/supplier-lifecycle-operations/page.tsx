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

export default function SupplierLifecycleOperationsPage() {
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
    "name": "Supplier Lifecycle Operations - ServiceNow SLO",
    "description": "With ServiceNow Supplier Lifecycle Operations, you can streamline supplier and procurement activities for easy onboarding and collaboration.",
    "applicationCategory": "Supplier Lifecycle Operations"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Supplier Lifecycle Operations and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Supplier Lifecycle Operations creates a unified digital experience that brings together teams and suppliers, making supplier onboarding, offboarding, and ongoing engagement easier to manage for everyone with comprehensive automation and collaboration capabilities."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Supplier Collaboration Portal and how does it enhance supplier engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Supplier Collaboration Portal provides a seamless unified employee portal experience for supplier contacts to easily communicate, collaborate on supplier tasks, complete onboarding activities, and access real-time information with self-service capabilities."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Supplier Lifecycle Operations content)
  const benefits = [
    {
      icon: Workflow,
      title: "Streamline supplier activities",
      description: "Create cases and manage supplier tasks in a single workspace. Integrate with third-party intelligence and data sources for comprehensive supplier management.",
      color: "from-orange-500 to-amber-500",
      stats: "Unified workspace"
    },
    {
      icon: Zap,
      title: "Onboard suppliers quickly",
      description: "Orchestrate all the teams needed for supplier onboarding with a flexible, unified playbook. Coordinate supplier-side and company-side tasks for accurate, real-time information.",
      color: "from-amber-500 to-yellow-500",
      stats: "Rapid onboarding"
    },
    {
      icon: Handshake,
      title: "Collaborate easily",
      description: "Provide suppliers with an easy-to-use portal. Enable suppliers and other contacts to participate in, monitor, and update cases with comprehensive collaboration tools.",
      color: "from-yellow-500 to-green-500",
      stats: "Enhanced collaboration"
    },
    {
      icon: Brain,
      title: "Simplify intelligence",
      description: "Get a single, comprehensive view of all the information for a supplier. Pull third-party details from a wide set of data sources, including supplier intelligence, news, finance, and more.",
      color: "from-green-500 to-emerald-500",
      stats: "Unified intelligence"
    }
  ];

  // Key Features (From ServiceNow Supplier Lifecycle Operations content)
  const keyFeatures = [
    {
      icon: MessageCircle,
      title: "Procurement Case Management",
      description: "Resolve common requests with a virtual agent and a searchable knowledge base for comprehensive supplier inquiry and case management.",
      capabilities: [
        "Virtual agent support",
        "Searchable knowledge base",
        "Automated case creation",
        "Request fulfillment workflows"
      ],
      color: "from-orange-500 to-amber-500"
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
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: BarChart3,
      title: "Reporting",
      description: "Create on-demand reports using a single data model for instant, up-to-date insights with comprehensive supplier analytics and performance tracking.",
      capabilities: [
        "On-demand reporting",
        "Single data model",
        "Real-time insights",
        "Performance tracking"
      ],
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: Smartphone,
      title: "Now Mobile",
      description: "Find answers, get help, and make requests across departments from a single, native mobile app for enhanced mobility and supplier management.",
      capabilities: [
        "Native mobile application",
        "Cross-department requests",
        "Self-service capabilities",
        "Mobile-optimized workflows"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Plug,
      title: "ERP Integration Framework",
      description: "Integrate easily between ServiceNow AI Platform and common ERP systems for seamless data synchronization and workflow automation.",
      capabilities: [
        "ERP system integration",
        "Data synchronization",
        "Workflow automation",
        "Real-time connectivity"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Anticipate trends, prioritize resources, and continuously improve with real-time analytics for data-driven supplier management decisions.",
      capabilities: [
        "Real-time analytics",
        "Trend analysis",
        "Resource prioritization",
        "Continuous improvement"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "Virtual Agent",
      description: "Make requests and resolve issues fast with an AI-powered conversational chatbot that understands simple, human language for supplier interactions.",
      capabilities: [
        "AI-powered conversations",
        "Natural language processing",
        "Automated issue resolution",
        "Supplier request handling"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Supplier Collaboration Portal",
      description: "Provide a seamless unified employee portal experience to easily communicate and collaborate on supplier tasks with comprehensive self-service capabilities.",
      capabilities: [
        "Unified portal experience",
        "Supplier task collaboration",
        "Self-service capabilities",
        "Real-time communication"
      ],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  // Supplier Management Process Benefits
  const supplierProcessBenefits = [
    {
      title: "Automated Supplier Onboarding",
      description: "Orchestrate all teams needed for supplier onboarding with flexible, unified playbooks that coordinate supplier-side and company-side tasks efficiently.",
      icon: UserCheck,
      benefit: "Streamlined onboarding"
    },
    {
      title: "Third-Party Intelligence Integration",
      description: "Pull supplier information from wide set of data sources including Craft.co integration for supplier intelligence, news, finance, and risk assessment.",
      icon: Database,
      benefit: "Comprehensive intelligence"
    },
    {
      title: "Supplier Risk Management",
      description: "Monitor supplier risk, compliance, and performance with real-time data integration and automated alerts for proactive supplier relationship management.",
      icon: Shield,
      benefit: "Risk mitigation"
    },
    {
      title: "Collaborative Workspaces",
      description: "Provide suppliers with dedicated workspaces where they can access real-time information, complete onboarding activities, and collaborate effectively.",
      icon: Layout,
      benefit: "Enhanced collaboration"
    },
    {
      title: "Now Assist for SLO",
      description: "Agentic workflows with AI-powered assistance to streamline supplier onboarding process by automating supplier registration and task management.",
      icon: Sparkles,
      benefit: "AI-powered automation"
    },
    {
      title: "Supplier Performance Tracking",
      description: "Track and measure supplier performance with comprehensive analytics, KPI monitoring, and continuous improvement capabilities for strategic decision-making.",
      icon: BarChart3,
      benefit: "Performance optimization"
    }
  ];

  // Advanced SLO Capabilities
  const advancedCapabilities = [
    {
      title: "App Engine Starter Integration",
      description: "Build apps at scale with low-code development environment and prebuilt templates with 10 custom tables for supplier lifecycle customization.",
      icon: Code,
      benefit: "Custom development"
    },
    {
      title: "Supplier Offboarding Automation",
      description: "Automated supplier offboarding processes ensuring proper contract termination, data archival, and compliance management for complete lifecycle control.",
      icon: FileX,
      benefit: "Complete lifecycle management"
    },
    {
      title: "Multi-Channel Communication",
      description: "Unified communication across email, portals, chat, and mobile ensuring suppliers can engage through their preferred channels seamlessly.",
      icon: MessageSquare,
      benefit: "Omnichannel engagement"
    },
    {
      title: "Supplier Data Management",
      description: "Centralized supplier data repository with automated data validation, cleansing, and enrichment from multiple internal and external sources.",
      icon: Database,
      benefit: "Data integrity"
    },
    {
      title: "Contract Lifecycle Integration",
      description: "Integrated contract lifecycle management ensuring supplier contracts are properly executed, tracked, and renewed throughout the supplier relationship.",
      icon: FileCheck,
      benefit: "Contract optimization"
    },
    {
      title: "Regulatory Compliance Management",
      description: "Automated compliance monitoring and reporting ensuring suppliers meet regulatory requirements with continuous compliance validation and documentation.",
      icon: Scale,
      benefit: "Compliance assurance"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Supplier Lifecycle Operations and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Supplier Lifecycle Operations transforms how organizations manage supplier relationships and processes:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Creates a unified digital experience that brings together teams and suppliers for streamlined collaboration and management</li>
            <li>Makes supplier onboarding, offboarding, and ongoing engagement easier to manage for everyone with comprehensive automation</li>
            <li>Reduces manual work in supplier management by orchestrating teams, actions, and tasks from a single unified view</li>
            <li>Ensures suppliers and contracts are in place when needed through automated workflow orchestration and task management</li>
            <li>Part of Source-to-Pay Operations solution providing end-to-end procurement and supplier lifecycle management capabilities</li>
          </ul>
          <p className="mt-3 text-sm text-orange-600">
            <strong>Built on ServiceNow AI Platform</strong> with Supplier Collaboration Portal, AI-powered virtual agents, and third-party intelligence integration.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Supplier Collaboration Portal and how does it enhance supplier engagement?",
      answer: (
        <div>
          <p className="mb-3">Supplier Collaboration Portal revolutionizes supplier engagement with comprehensive self-service capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Unified Portal Experience:</strong> Seamless unified employee portal experience for supplier contacts to easily communicate and collaborate on tasks</li>
            <li><strong>Self-Registration Capability:</strong> Suppliers can self-register to the portal, complete assigned tasks, and raise requests using the supplier catalog</li>
            <li><strong>Real-Time Information Access:</strong> Suppliers can access real-time information, receive support, and complete onboarding and other activities efficiently</li>
            <li><strong>Task Collaboration:</strong> Enable suppliers and other contacts to participate in, monitor, and update cases with comprehensive collaboration tools</li>
            <li><strong>Request Management:</strong> Suppliers can raise requests through the portal with detailed steps and user access controls for streamlined communication</li>
            <li><strong>Mobile Accessibility:</strong> Portal accessibility through Now Mobile enabling suppliers to engage anytime, anywhere with consistent functionality</li>
            <li><strong>Knowledge Base Integration:</strong> Access to centralized knowledge base with AI-powered insights and contextual information for self-service resolution</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach streamlines supplier collaboration, reduces manual communication overhead, and ensures suppliers have the tools they need for successful partnerships.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Supplier Lifecycle Operations?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SLO provides comprehensive supplier lifecycle management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">Core SLO Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Supplier Collaboration Portal:</strong> Unified portal experience for supplier task collaboration and self-service capabilities</li>
                <li><strong>Procurement Case Management:</strong> Virtual agent support with searchable knowledge base for comprehensive inquiry resolution</li>
                <li><strong>Performance Analytics:</strong> Real-time analytics for trend analysis, resource prioritization, and continuous improvement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600 mb-2">Advanced SLO Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Third-Party Intelligence:</strong> Craft.co integration for supplier intelligence, news, finance, and risk data aggregation</li>
                <li><strong>Now Assist for SLO:</strong> AI-powered agentic workflows for automated supplier registration and onboarding process</li>
                <li><strong>ERP Integration Framework:</strong> Seamless integration with common ERP systems for data synchronization and workflow automation</li>
                <li><strong>App Engine Starter:</strong> Low-code development environment with 10 custom tables for supplier lifecycle customization</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does SLO handle supplier onboarding and what are the key components?",
      answer: (
        <div>
          <p className="mb-3">
            SLO provides comprehensive supplier onboarding capabilities with automated workflow orchestration:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Supplier Onboarding Playbook:</strong> Flexible, unified playbook that provides activities and tasks for supplier owners and managers during onboarding</li>
            <li><strong>Team Orchestration:</strong> Coordinates all teams needed for supplier onboarding with supplier-side and company-side task management</li>
            <li><strong>Now Assist Automation:</strong> Agentic workflows that streamline the supplier onboarding process by automating supplier registration and documentation</li>
            <li><strong>Real-Time Information Coordination:</strong> Ensures accurate, real-time information flow between internal teams and external suppliers throughout onboarding</li>
            <li><strong>Task Assignment and Tracking:</strong> Automated task assignment with progress tracking and escalation management for timely completion</li>
            <li><strong>Compliance Validation:</strong> Automated compliance checks and documentation validation ensuring suppliers meet all regulatory requirements</li>
            <li><strong>Portal Self-Service:</strong> Suppliers can complete onboarding activities through the Supplier Collaboration Portal with guided workflows</li>
          </ul>
          <p className="mt-3">
            This systematic approach reduces onboarding time by up to 50% while ensuring compliance and accuracy throughout the supplier integration process.
          </p>
        </div>
      )
    },

    {
      question: "What third-party intelligence integrations does SLO provide for supplier risk management?",
      answer: (
        <div>
          <p className="mb-3">SLO provides extensive third-party intelligence capabilities for comprehensive supplier risk assessment:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Craft.co Integration:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Supplier Intelligence:</strong> Comprehensive supplier data aggregation from ERPs, internal datasets, and third-party sources</li>
                <li><strong>Financial Data:</strong> Real-time financial information, credit ratings, and financial stability indicators for supplier assessment</li>
                <li><strong>News and Market Intelligence:</strong> Current news, market trends, and industry developments affecting supplier relationships</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Risk Management Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Single Supplier View:</strong> Aggregated intelligence from multiple data sources displayed in unified supplier dashboard</li>
                <li><strong>Automated Risk Monitoring:</strong> Continuous monitoring of supplier risk factors with automated alerts and notifications</li>
                <li><strong>Compliance Tracking:</strong> Real-time compliance monitoring ensuring suppliers meet regulatory and contractual requirements</li>
                <li><strong>Performance Analytics:</strong> Comprehensive performance tracking with KPI monitoring and trend analysis for strategic decisions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Supplier Lifecycle Operations implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, supplier complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SLO Standard:</strong> Starting from $250K - includes Supplier Collaboration Portal, basic case management, and standard supplier workflows for mid-size organizations</li>
            <li><strong>SLO Professional:</strong> $350K-$520K - includes third-party intelligence, advanced analytics, and comprehensive supplier automation for large enterprises</li>
            <li><strong>SLO Enterprise with Source-to-Pay:</strong> $700K+ - complete solution with contract management, procurement integration, and enterprise-scale supplier operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-10 months through supplier onboarding acceleration (50%), manual work elimination (40%), and risk reduction (30%). Supplier Collaboration Portal can reduce communication overhead by 60%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Supplier ROI Calculator", url: "/supplier-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Supplier Lifecycle Operations?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on supplier process maturity and system integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SLO Standard:</strong> 8-12 weeks for Supplier Collaboration Portal, basic case management, and standard supplier workflow automation</li>
            <li><strong>SLO Professional:</strong> 12-18 weeks including third-party intelligence integration, advanced analytics, and comprehensive supplier automation</li>
            <li><strong>SLO Enterprise with Source-to-Pay:</strong> 18-24 weeks for complete solution with contract management, procurement integration, and enterprise supplier operations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Supplier Process Assessment & Analysis (2-3 weeks) → Core SLO Platform & Portal Configuration (4-6 weeks) → Third-Party Intelligence & ERP Integration (3-5 weeks) → Advanced Features & Analytics Setup (3-5 weeks) → Go-Live & Supplier Team Training (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does SLO integrate with existing supplier management systems and procurement workflows?",
      answer: (
        <div>
          <p className="mb-3">SLO provides comprehensive integration capabilities for complete supplier ecosystem connectivity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ERP System Integration:</strong> Native integration with SAP, Oracle, Microsoft Dynamics, and other major ERP systems through ERP Integration Framework</li>
            <li><strong>Procurement Platform Connectivity:</strong> Integration with procurement systems, sourcing platforms, and spend management solutions for unified workflows</li>
            <li><strong>Contract Management Integration:</strong> Seamless integration with CLM systems for contract lifecycle management and supplier agreement tracking</li>
            <li><strong>Third-Party Intelligence:</strong> Integration with Craft.co and other intelligence providers for comprehensive supplier risk and performance data</li>
            <li><strong>Communication Platform Integration:</strong> Integration with email, Teams, Slack, and other collaboration tools for unified supplier communication</li>
            <li><strong>Document Management:</strong> Integration with SharePoint, ECM systems, and cloud storage for supplier documentation and compliance records</li>
            <li><strong>Analytics and BI Tools:</strong> Integration with reporting platforms and business intelligence tools for comprehensive supplier analytics</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified supplier operations while maintaining existing system investments and supplier relationship continuity.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SLO success stories)
  const caseStudies = [
    {
      title: "Global Manufacturing Company Reduces Supplier Onboarding Time by 50% with SLO Playbooks",
      client: "Fortune 500 Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manufacturing operations requiring 50% reduction in supplier onboarding time with comprehensive SLO playbooks and automated workflow orchestration",
      solution: "ServiceNow Supplier Lifecycle Operations with manufacturing-specific playbooks, automated onboarding workflows, and comprehensive supplier collaboration optimization",
      results: [
        { metric: "50%", description: "Onboarding time reduced" },
        { metric: "SLO", description: "Playbooks deployed" },
        { metric: "Automated", description: "Workflows implemented" },
        { metric: "Manufacturing", description: "Operations optimized" }
      ],
      testimonial: "ServiceNow SLO with automated playbooks reduced our supplier onboarding time by 50%, transforming our manufacturing supply chain efficiency and supplier relationships.",
      executive: "Chief Procurement Officer",
      logo: "/images/clients/manufacturing-corp-logo.png"
    },
    {
      title: "Healthcare Network Enhances Supplier Collaboration with 60% Communication Overhead Reduction",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Healthcare operations requiring 60% communication overhead reduction with enhanced supplier collaboration and comprehensive compliance management automation",
      solution: "ServiceNow SLO with healthcare-specific supplier workflows, Supplier Collaboration Portal, and medical industry compliance optimization",
      results: [
        { metric: "60%", description: "Communication overhead reduced" },
        { metric: "Supplier", description: "Collaboration enhanced" },
        { metric: "Healthcare", description: "Compliance optimized" },
        { metric: "Portal", description: "Experience improved" }
      ],
      testimonial: "ServiceNow SLO enhanced our supplier collaboration with 60% communication overhead reduction, enabling efficient healthcare supply chain management and compliance.",
      executive: "VP of Supply Chain Operations",
      logo: "/images/clients/healthcare-network-logo.png"
    },
    {
      title: "Technology Company Achieves Unified Supplier Intelligence with Third-Party Data Integration",
      client: "Global Technology Corporation",
      industry: "Technology",
      challenge: "Technology operations requiring unified supplier intelligence with third-party data integration and comprehensive risk management automation",
      solution: "ServiceNow SLO with technology-specific intelligence workflows, Craft.co integration, and comprehensive supplier risk management optimization",
      results: [
        { metric: "Unified", description: "Supplier intelligence" },
        { metric: "Third-Party", description: "Data integrated" },
        { metric: "Risk", description: "Management automated" },
        { metric: "Technology", description: "Operations optimized" }
      ],
      testimonial: "ServiceNow SLO achieved unified supplier intelligence through comprehensive third-party data integration, enabling proactive risk management and strategic decisions.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/technology-corp-logo.png"
    },
    {
      title: "Financial Services Firm Streamlines Supplier Performance Tracking with Real-Time Analytics",
      client: "Global Financial Services Corporation",
      industry: "Financial Services",
      challenge: "Financial services requiring streamlined supplier performance tracking with real-time analytics and comprehensive regulatory compliance management",
      solution: "ServiceNow SLO with financial services-specific performance workflows, real-time analytics, and comprehensive regulatory compliance optimization",
      results: [
        { metric: "Performance", description: "Tracking streamlined" },
        { metric: "Real-Time", description: "Analytics deployed" },
        { metric: "Regulatory", description: "Compliance ensured" },
        { metric: "Financial", description: "Services optimized" }
      ],
      testimonial: "ServiceNow SLO streamlined our supplier performance tracking with real-time analytics, ensuring regulatory compliance and operational excellence in financial services.",
      executive: "Head of Vendor Management",
      logo: "/images/clients/financial-services-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Supplier Lifecycle Operations - ServiceNow SLO Portfolio | ifBash</title>
        <meta
          name="description"
          content="With ServiceNow Supplier Lifecycle Operations, you can streamline supplier and procurement activities for easy onboarding and collaboration."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SLO Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SLO Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-yellow-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-amber-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-yellow-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered SLO
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-500/90 to-green-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-yellow-600 hover:to-green-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Supplier Intelligence
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                    Supplier Lifecycle
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-green-400 font-semibold">
                      Operations
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-amber-300">Create a unified digital experience that brings together your teams and suppliers,</span>{' '}
                  <span className="font-semibold text-yellow-300">making supplier onboarding, offboarding, and ongoing engagement</span> easier to manage for everyone.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-yellow-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SLO Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-green-400 group-hover:text-green-300" />
                      Watch Video
                    </span>
                  </button>
                </div>

                {/* Supplier Lifecycle Platform Badge */}
                <div className="bg-gradient-to-r from-orange-500/15 to-amber-500/15 backdrop-blur-sm rounded-xl p-4 border border-orange-300/20">
                  <div className="flex items-center gap-3">
                    <Handshake className="h-8 w-8 text-orange-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Supplier Lifecycle Platform</div>
                      <div className="text-sm text-orange-200">Supplier Collaboration Portal with third-party intelligence integration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Supplier Lifecycle Operations Platform"
                      className="w-full h-full object-cover"
                      gradient="from-orange-600 to-amber-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Supplier</div>
                      <div className="text-xs text-orange-200">Portal</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI</div>
                      <div className="text-xs text-amber-200">Intelligence</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Handshake className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Transform Supplier
                </span>
                <br />
                <span className="text-gray-800">
                  Lifecycle Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Automate and simplify interactions and collaboration across the end-to-end relationship with suppliers through comprehensive lifecycle management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                      <div className="text-sm font-semibold text-orange-700 mb-1">Key Value</div>
                      <div className="text-orange-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-green-600">
                  Key SLO Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Supplier Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive supplier features from Collaboration Portal to third-party intelligence with AI-powered automation and real-time analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Supplier Process Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-green-600 to-emerald-600">
                  Supplier Process Benefits
                </span>
                <br />
                <span className="text-gray-800">
                  Operational Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Achieve operational excellence through automated supplier onboarding, comprehensive intelligence integration, and collaborative workspaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supplierProcessBenefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-4 border border-yellow-200">
                      <div className="text-sm font-semibold text-yellow-700 mb-1">Key Benefit</div>
                      <div className="text-yellow-600 text-lg font-bold">{benefit.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise SLO Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced SLO capabilities including App Engine integration, supplier offboarding automation, and comprehensive regulatory compliance management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-700 mb-1">Key Benefit</div>
                      <div className="text-green-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About SLO
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Supplier Lifecycle Operations implementation, Supplier Collaboration Portal, and supplier intelligence.
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
                        <div className="w-full h-px bg-gradient-to-r from-emerald-500 to-teal-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-cyan-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SLO Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their supplier lifecycle management with comprehensive SLO solutions and Supplier Collaboration Portal capabilities.
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
                              <Badge className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-200 border border-teal-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border border-cyan-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-4 border-l-4 border-teal-400">
                              <Quote className="h-6 w-6 text-teal-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-teal-300">— {study.executive}</p>
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Supplier Lifecycle Operations?
                </h2>
                <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive SLO with Supplier Collaboration Portal and AI-powered supplier intelligence capabilities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SLO Experts
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
                    <Mail className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">slo-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-cyan-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-blue-200 mx-auto mb-2" />
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
