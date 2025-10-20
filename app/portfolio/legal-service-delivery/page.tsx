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
  PenTool
} from "lucide-react";

export default function LegalServiceDeliveryPage() {
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
    "name": "Legal Service Delivery - ServiceNow LSD Implementation",
    "description": "Transform legal operations with ServiceNow Legal Service Delivery. Automate legal workflows, centralize processes, and provide real-time insights for legal departments.",
    "applicationCategory": "Legal Service Delivery"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Legal Service Delivery and how does it help legal departments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Legal Service Delivery provides a unified experience between employees requesting legal support and legal teams serving them with automated workflows, centralized processes, and real-time insights for improved legal operations."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Contract Management Pro and how does it enhance legal workflows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contract Management Pro streamlines contract workflows from request through obligation management with template-based automation, self-service intake, eSignature integration, and comprehensive contract lifecycle management capabilities."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Legal Service Delivery content)
  const benefits = [
    {
      icon: Workflow,
      title: "Streamlined legal operations",
      description: "Legal teams spend less time on admin and more on high-value work. The platform removes manual email processes with self-service portal and workflow automation.",
      color: "from-indigo-500 to-purple-500",
      stats: "Operational efficiency"
    },
    {
      icon: ShieldCheck,
      title: "Improved compliance management",
      description: "Every matter is documented and auditable. Compliance and regulatory standards of the organization can be managed effectively with comprehensive tracking.",
      color: "from-purple-500 to-pink-500",
      stats: "Enhanced compliance"
    },
    {
      icon: Clock,
      title: "Faster request turnaround",
      description: "Workflow automation routing ensures timely legal responses across departments. Automates responses for common legal requests with virtual agents.",
      color: "from-pink-500 to-rose-500",
      stats: "Accelerated response times"
    },
    {
      icon: BarChart3,
      title: "Data insights and analytics",
      description: "Upper management gains real-time visibility into processing requests and performance metrics for continuous improvement and strategic decision-making.",
      color: "from-rose-500 to-red-500",
      stats: "Real-time insights"
    }
  ];

  // Key Features (From ServiceNow Legal Service Delivery content)
  const keyFeatures = [
    {
      icon: Layout,
      title: "Self-Service Legal Portal",
      description: "Employees can submit legal requests, track progress, and access relevant legal resources through a comprehensive one-stop shop for all legal needs.",
      capabilities: [
        "Legal request submission",
        "Progress tracking",
        "Resource access",
        "Self-service capabilities"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: PenTool,
      title: "Contract Management Pro",
      description: "Streamline contract workflows from request through obligation management with template-based automation and comprehensive lifecycle management.",
      capabilities: [
        "Contract lifecycle management",
        "Template-based automation",
        "eSignature integration",
        "Contract analytics"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Legal Request Management",
      description: "Unified experience for legal request handling with automated routing, prioritization, and comprehensive case management capabilities.",
      capabilities: [
        "Automated request routing",
        "Priority management",
        "Case tracking",
        "SLA compliance"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: FileText,
      title: "Matter Management",
      description: "Comprehensive matter tracking and management with litigation support, document management, and legal project coordination capabilities.",
      capabilities: [
        "Matter lifecycle tracking",
        "Litigation support",
        "Document management",
        "Project coordination"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Bot,
      title: "Legal Virtual Agent",
      description: "Automated responses for common legal requests with natural language processing and intelligent routing to appropriate legal resources.",
      capabilities: [
        "Natural language processing",
        "Automated legal responses",
        "Intelligent routing",
        "24/7 availability"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Legal Analytics & Reporting",
      description: "Real-time dashboards and customizable reports for legal operations with comprehensive KPIs, SLA tracking, and performance metrics.",
      capabilities: [
        "Real-time dashboards",
        "Custom reporting",
        "SLA tracking",
        "Performance metrics"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Automated compliance tracking and regulatory management with policy workflows, audit trails, and compliance reporting capabilities.",
      capabilities: [
        "Automated compliance tracking",
        "Regulatory management",
        "Policy workflows",
        "Audit trail maintenance"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users2,
      title: "Cross-Department Collaboration",
      description: "Seamless collaboration between legal, IT, HR, and other departments with unified workflows and centralized communication platform.",
      capabilities: [
        "Cross-departmental workflows",
        "Unified communication",
        "Collaborative decision-making",
        "Integrated project management"
      ],
      color: "from-yellow-500 to-green-500"
    }
  ];

  // Contract Management Capabilities
  const contractManagementCapabilities = [
    {
      title: "Automated Contract Generation",
      description: "Template-based contract creation with dynamic content generation for NDAs, sales contracts, and third-party agreements with legal-approved templates.",
      icon: FileText,
      benefit: "Automated contract creation"
    },
    {
      title: "eSignature Integration",
      description: "Seamless integration with Adobe Sign, DocuSign, and other leading eSignature platforms with support for wet signatures and compliance tracking.",
      icon: PenTool,
      benefit: "Digital signature workflows"
    },
    {
      title: "Contract Repository",
      description: "Centralized contract storage with metadata search capabilities, integration with cloud storage systems like OneDrive and Google Drive.",
      icon: Database,
      benefit: "Centralized contract storage"
    },
    {
      title: "Contract Lifecycle Tracking",
      description: "Comprehensive tracking from contract request through execution with automated notifications, renewal alerts, and obligation management.",
      icon: Route,
      benefit: "Lifecycle management"
    },
    {
      title: "Approval Workflows",
      description: "Automated approval processes with versioning control, stakeholder notifications, and configurable approval hierarchies for different contract types.",
      icon: CheckCircle,
      benefit: "Streamlined approvals"
    },
    {
      title: "Contract Analytics",
      description: "Comprehensive analytics on contract volume, turnaround times, approval bottlenecks, and contract performance with customizable dashboards.",
      icon: BarChart3,
      benefit: "Contract insights"
    }
  ];

  // Legal Operations Benefits
  const legalOperationsBenefits = [
    {
      title: "Process Modernization",
      description: "Transform traditional legal processes with digital workflows, automation, and self-service capabilities for enhanced operational efficiency.",
      icon: Zap,
      benefit: "Digital transformation"
    },
    {
      title: "Risk Reduction",
      description: "Comprehensive risk management through automated compliance tracking, audit trails, and standardized legal processes across the organization.",
      icon: Shield,
      benefit: "Risk mitigation"
    },
    {
      title: "Strategic Legal Functioning",
      description: "Enable legal teams to focus on strategic initiatives by automating routine tasks and providing data-driven insights for decision-making.",
      icon: Target,
      benefit: "Strategic focus"
    },
    {
      title: "Legal Demand Anticipation",
      description: "Predictive analytics and reporting capabilities help anticipate legal service demand and optimize resource allocation for better service delivery.",
      icon: TrendingUp,
      benefit: "Demand forecasting"
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational costs through automation, self-service capabilities, and improved efficiency in legal service delivery processes.",
      icon: DollarSign,
      benefit: "Cost reduction"
    },
    {
      title: "Enhanced Collaboration",
      description: "Improve collaboration between legal teams and other departments through unified workflows and centralized communication platforms.",
      icon: Users2,
      benefit: "Cross-team collaboration"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Legal Service Delivery and how does it help legal departments?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Legal Service Delivery (LSD) transforms legal operations through comprehensive automation and centralization:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provides a unified experience between employees requesting legal support and legal teams serving them</li>
            <li>Automates legal workflows, centralizes processes, and provides real-time insights for improved operational efficiency</li>
            <li>Replaces manual, email-based processes with standardized workflows and self-service capabilities</li>
            <li>Helps corporate legal departments provide employees with a front door to get answers, make requests, and receive guidance</li>
            <li>Enables legal teams to deliver legal services for the enterprise at the speed of business with comprehensive automation</li>
          </ul>
          <p className="mt-3 text-sm text-indigo-600">
            <strong>Built on ServiceNow AI Platform</strong> with workflow automation, virtual agents, and real-time analytics for comprehensive legal service delivery.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Contract Management Pro and how does it enhance legal workflows?",
      answer: (
        <div>
          <p className="mb-3">Contract Management Pro provides comprehensive contract lifecycle management capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Self-Service Contract Intake:</strong> Employees can request contracts through Employee Center with configurable intake forms for common contract types</li>
            <li><strong>Template-Based Automation:</strong> Contracts like NDAs can be completely automated using legal-approved templates without requiring legal involvement</li>
            <li><strong>Dynamic Contract Generation:</strong> Contracts are dynamically generated based on templates with variable content based on request details</li>
            <li><strong>Approval Workflows:</strong> Standard ServiceNow approval processes with versioning control and stakeholder notifications</li>
            <li><strong>eSignature Integration:</strong> Integration with Adobe Sign, DocuSign, and other leading eSignature platforms</li>
            <li><strong>Contract Storage:</strong> Contracts can be stored in ServiceNow or integrated with cloud storage systems like OneDrive and Google Drive</li>
            <li><strong>Obligation Management:</strong> Automated notifications for contract renewals, expirations, and other contractual obligations</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach accelerates legal contract workflows while maintaining compliance and providing complete audit trails.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Legal Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow LSD provides comprehensive legal operations capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Core Legal Service Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Self-Service Legal Portal:</strong> One-stop shop for legal requests, progress tracking, and resource access</li>
                <li><strong>Legal Request Management:</strong> Automated routing, prioritization, and case management with SLA compliance</li>
                <li><strong>Matter Management:</strong> Comprehensive litigation support, document management, and project coordination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-pink-600 mb-2">Advanced Legal Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Contract Management Pro:</strong> Complete contract lifecycle management with template automation and eSignature integration</li>
                <li><strong>Legal Virtual Agent:</strong> Automated responses for common legal requests with natural language processing</li>
                <li><strong>Legal Analytics:</strong> Real-time dashboards, custom reporting, and performance metrics for operational insights</li>
                <li><strong>Compliance Management:</strong> Automated compliance tracking, regulatory management, and audit trail maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Legal Service Delivery integrate with other ServiceNow products?",
      answer: (
        <div>
          <p className="mb-3">
            Legal Service Delivery works seamlessly with other ServiceNow products for comprehensive enterprise service delivery:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HR Service Delivery:</strong> Legal requests tied to HR cases for employment law, policy reviews, and compliance matters</li>
            <li><strong>IT Service Management:</strong> Legal support for technology contracts, vendor agreements, and IT compliance requirements</li>
            <li><strong>Procurement Service Delivery:</strong> Legal review and approval of procurement contracts and vendor agreements</li>
            <li><strong>Workplace Service Delivery:</strong> Legal support for facilities, real estate, and workplace compliance matters</li>
            <li><strong>Employee Center:</strong> Unified portal experience where legal services are embedded into everyday employee workflows</li>
            <li><strong>GRC (Governance, Risk & Compliance):</strong> Integration with risk management and compliance monitoring for comprehensive governance</li>
          </ul>
          <p className="mt-3">
            This integration ensures legal services are not siloed but embedded into operational workflows, enhancing organizational agility and compliance.
          </p>
        </div>
      )
    },

    {
      question: "What contract management capabilities are included in Legal Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">Legal Service Delivery provides comprehensive contract management capabilities:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Contract Creation & Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Template-Based Generation:</strong> Automated contract creation using legal-approved templates for NDAs, sales contracts, and vendor agreements</li>
                <li><strong>Self-Service Intake:</strong> Configurable intake forms for common contract requests through Employee Center</li>
                <li><strong>Third-Party Contract Reviews:</strong> Workflow for reviewing and approving external contracts with legal team collaboration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contract Execution & Storage:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>eSignature Integration:</strong> Native integration with Adobe Sign, DocuSign, and other leading eSignature platforms</li>
                <li><strong>Cloud Storage Integration:</strong> Contract storage in ServiceNow or integration with OneDrive, Google Drive, and other cloud platforms</li>
                <li><strong>Metadata Search:</strong> Advanced search capabilities using contract metadata and full-text search functionality</li>
                <li><strong>Obligation Management:</strong> Automated notifications for renewals, expirations, and other contractual obligations</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Legal Service Delivery implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, legal complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Legal Service Delivery Standard:</strong> Starting from $280K - includes basic legal workflows, self-service portal, and contract management for mid-size legal departments</li>
            <li><strong>Legal Service Delivery Professional:</strong> $420K-$630K - includes Contract Management Pro, advanced analytics, and comprehensive legal automation for large enterprises</li>
            <li><strong>Legal Service Delivery Enterprise:</strong> $750K+ - complete solution with full contract lifecycle management, advanced integrations, and enterprise-scale legal operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 10-18 months through legal process automation (45%), contract turnaround acceleration (40%), and operational cost reduction (35%). Self-service capabilities can reduce legal workload by 40%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Legal ROI Calculator", url: "/legal-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Legal Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on legal department maturity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Legal Service Delivery Standard:</strong> 12-18 weeks for basic legal workflows, self-service portal, request management, and core contract capabilities</li>
            <li><strong>Legal Service Delivery Professional:</strong> 18-24 weeks including Contract Management Pro, advanced analytics, and comprehensive legal automation</li>
            <li><strong>Legal Service Delivery Enterprise:</strong> 24-30 weeks for complete solution with full contract lifecycle management, advanced integrations, and enterprise legal operations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Legal Operations Assessment & Process Analysis (3-4 weeks) → Core LSD Platform & Portal Configuration (6-8 weeks) → Contract Management & Integration Setup (4-6 weeks) → Advanced Features & Analytics (3-5 weeks) → Go-Live & Legal Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Legal Service Delivery integrate with existing legal technology and external systems?",
      answer: (
        <div>
          <p className="mb-3">Legal Service Delivery provides extensive integration capabilities for comprehensive legal ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>eSignature Platforms:</strong> Native integration with Adobe Sign, DocuSign, and other leading electronic signature platforms</li>
            <li><strong>Document Management Systems:</strong> Integration with SharePoint, OneDrive, Google Drive, and other cloud storage platforms</li>
            <li><strong>Contract Lifecycle Management:</strong> Integration with enterprise CLM tools like Aavenir, Ironclad, and other contract management platforms</li>
            <li><strong>Legal Research Tools:</strong> Integration with legal research platforms and knowledge management systems</li>
            <li><strong>Financial Systems:</strong> Integration with ERP and financial systems for legal spend tracking and budget management</li>
            <li><strong>Collaboration Tools:</strong> Integration with Microsoft Teams, Slack, and other collaboration platforms for legal team communication</li>
            <li><strong>Identity Management:</strong> Integration with Active Directory and other identity management systems for secure access control</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified legal service delivery while maintaining existing legal technology investments and operational workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on Legal Service Delivery success stories)
  const caseStudies = [
    {
      title: "Snowflake Transforms Legal Operations with Comprehensive LSD Implementation",
      client: "Snowflake Inc.",
      industry: "Cloud Data Platform",
      challenge: "Rapidly growing cloud data company requiring scalable legal operations with automated workflows, contract management, and cross-department collaboration for business velocity",
      solution: "ServiceNow Legal Service Delivery with comprehensive workflow automation, self-service legal portal, and contract management for cloud technology legal operations",
      results: [
        { metric: "Legal", description: "Operations transformed" },
        { metric: "Cloud", description: "Business accelerated" },
        { metric: "Contract", description: "Workflows automated" },
        { metric: "Cross-Team", description: "Collaboration enhanced" }
      ],
      testimonial: "ServiceNow is the single cloud application platform all ServiceNow products run on. Automate, simplify, and connect work across the enterprise to move your business forward.",
      executive: "Aaron Bromagem, Senior Director, Legal Operations",
      logo: "/images/clients/snowflake-logo.png"
    },
    {
      title: "Global Technology Firm Implements Contract Management Pro for Automated Legal Workflows",
      client: "Fortune 500 Technology Corporation",
      industry: "Enterprise Technology",
      challenge: "Complex technology operations requiring automated contract generation, eSignature integration, and comprehensive contract lifecycle management across global teams",
      solution: "ServiceNow Legal Service Delivery with Contract Management Pro, automated NDA generation, and technology-specific legal workflow optimization",
      results: [
        { metric: "Contract", description: "Management automated" },
        { metric: "eSignature", description: "Integration deployed" },
        { metric: "Global", description: "Workflows standardized" },
        { metric: "Technology", description: "Legal optimized" }
      ],
      testimonial: "ServiceNow Legal Service Delivery with Contract Management Pro automated our contract workflows, enabling rapid contract generation and execution across our global operations.",
      executive: "Chief Legal Officer",
      logo: "/images/clients/enterprise-tech-logo.png"
    },
    {
      title: "Financial Services Organization Achieves Compliance Automation with Legal Analytics",
      client: "International Banking Group",
      industry: "Financial Services",
      challenge: "Financial services operations requiring automated compliance management, regulatory tracking, and comprehensive legal analytics for regulatory reporting",
      solution: "ServiceNow Legal Service Delivery with compliance automation, regulatory workflow management, and financial services legal analytics optimization",
      results: [
        { metric: "Compliance", description: "Automation achieved" },
        { metric: "Regulatory", description: "Tracking enhanced" },
        { metric: "Financial", description: "Legal optimized" },
        { metric: "Analytics", description: "Reporting automated" }
      ],
      testimonial: "ServiceNow Legal Service Delivery provided comprehensive compliance automation and regulatory tracking, enhancing our legal analytics and reporting capabilities.",
      executive: "General Counsel",
      logo: "/images/clients/banking-group-logo.png"
    },
    {
      title: "Manufacturing Company Deploys Cross-Department Legal Collaboration Platform",
      client: "Global Manufacturing Enterprise",
      industry: "Industrial Manufacturing",
      challenge: "Manufacturing operations requiring cross-department legal collaboration with procurement, HR, and IT integration for comprehensive legal service delivery",
      solution: "ServiceNow Legal Service Delivery with cross-departmental workflows, manufacturing compliance management, and integrated legal service optimization",
      results: [
        { metric: "Cross-Department", description: "Collaboration enhanced" },
        { metric: "Manufacturing", description: "Compliance managed" },
        { metric: "Legal", description: "Service delivery integrated" },
        { metric: "Operational", description: "Efficiency improved" }
      ],
      testimonial: "ServiceNow Legal Service Delivery enabled seamless cross-department legal collaboration, enhancing our manufacturing compliance and operational legal efficiency.",
      executive: "VP of Legal Affairs",
      logo: "/images/clients/manufacturing-enterprise-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Legal Service Delivery - ServiceNow LSD Portfolio | ifBash</title>
        <meta
          name="description"
          content="Transform legal operations with ServiceNow Legal Service Delivery. Automate legal workflows, centralize processes, and provide real-time insights for legal departments."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Legal Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Legal Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Legal Automation
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-rose-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-pink-600 hover:to-rose-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Contract Management
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                    Legal Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 font-semibold">
                      Delivery
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Transform legal operations with comprehensive automation.</span>{' '}
                  <span className="font-semibold text-pink-300">Automate legal workflows, centralize processes,</span> and provide real-time insights for legal departments.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Legal Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-rose-400 group-hover:text-rose-300" />
                      Watch Overview
                    </span>
                  </button>
                </div>

                {/* Legal Operations Badge */}
                <div className="bg-gradient-to-r from-indigo-500/15 to-purple-500/15 backdrop-blur-sm rounded-xl p-4 border border-indigo-300/20">
                  <div className="flex items-center gap-3">
                    <Scale className="h-8 w-8 text-indigo-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Legal Operations Platform</div>
                      <div className="text-sm text-indigo-200">Contract management, workflow automation, and compliance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Legal Service Delivery Platform"
                      className="w-full h-full object-cover"
                      gradient="from-indigo-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Legal</div>
                      <div className="text-xs text-indigo-200">Operations</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Contract</div>
                      <div className="text-xs text-purple-200">Management</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Scale className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <PenTool className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Transform Legal
                </span>
                <br />
                <span className="text-gray-800">
                  Service Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Modernize legal operations, replace inefficient manual processes, and deliver legal services at the speed of business with comprehensive automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Key Value</div>
                      <div className="text-indigo-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                  Key Legal Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Legal Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive legal service delivery features from self-service portals to contract management with automated workflows and real-time analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Contract Management Capabilities Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Contract Management Pro
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Contract Lifecycle
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive contract lifecycle management from request through obligation management with template automation and eSignature integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contractManagementCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
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

        {/* Legal Operations Benefits Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-orange-600">
                  Legal Operations Benefits
                </span>
                <br />
                <span className="text-gray-800">
                  Strategic Legal Value
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform legal departments into strategic business partners through process modernization, risk reduction, and operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalOperationsBenefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-4 border border-rose-200">
                      <div className="text-sm font-semibold text-rose-700 mb-1">Key Benefit</div>
                      <div className="text-rose-600 text-lg font-bold">{benefit.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Legal Service Delivery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Legal Service Delivery implementation, contract management, and legal operations transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-red-500 to-orange-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-900 via-red-900 to-rose-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-orange-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Legal Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their legal operations with comprehensive Legal Service Delivery automation and contract management solutions.
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
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 border border-orange-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-200 border border-red-400/30">
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

                            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-4 border-l-4 border-orange-400">
                              <Quote className="h-6 w-6 text-orange-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-orange-300">— {study.executive}</p>
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
                                <span className="text-orange-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-orange-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Legal Service Delivery?
                </h2>
                <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive legal service delivery with contract management automation and operational excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Legal Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Watch Overview
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">legal-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Watch Overview</p>
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
