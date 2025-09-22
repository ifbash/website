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
NetworkIcon,
PenTool,
Home,
Terminal,
CreditCard as PaymentIcon
} from "lucide-react";

export default function AccountsPayableOperationsPage() {
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
  "name": "Accounts Payable Operations - ServiceNow AP Automation",
  "description": "Streamline accounts payable processes. Pay suppliers confidently and accurately and free your finance teams from repetitive, error-prone manual tasks.",
  "applicationCategory": "Accounts Payable Operations"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ServiceNow Accounts Payable Operations and how does it help organizations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ServiceNow Accounts Payable Operations simplifies and coordinates the activities required to pay suppliers confidently and accurately. It modernizes siloed and manual accounts payable processes, freeing teams from error-prone tasks with comprehensive automation."
      }
    },
    {
      "@type": "Question", 
      "name": "What is Document Intelligence and how does it enhance invoice processing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Document Intelligence automates data capture from invoice documents and integrates the data into ServiceNow workflows. It uses AI-based extraction to digitize invoices, create invoice records automatically, and handle two-way and three-way matching processes."
      }
    }
  ]
};

// Core Benefits (From ServiceNow Accounts Payable Operations content)
const benefits = [
  {
    icon: Users2,
    title: "Unify teams and workflows",
    description: "Bring together invoices, purchase orders, and approvals from a variety of systems, to pay suppliers accurately and efficiently while taking advantage of early payment discounts.",
    color: "from-green-500 to-emerald-500",
    stats: "Unified AP workflows"
  },
  {
    icon: Eye,
    title: "Simplify how work gets done",
    description: "Get visibility into the entire accounts payable process, from invoice submission and ingestion through payment release with comprehensive exception tracking and management.",
    color: "from-emerald-500 to-teal-500",
    stats: "Complete process visibility"
  },
  {
    icon: Zap,
    title: "Accelerate transactions",
    description: "Automate mundane tasks and error-prone manual activities like non-PO invoice approvals. Boost productivity and scale while empowering strategic work focus.",
    color: "from-teal-500 to-cyan-500",
    stats: "Automated AP processing"
  },
  {
    icon: Shield,
    title: "Ensure compliance and accuracy",
    description: "Maintain auditable records of all AP activities with comprehensive compliance management and fraud prevention through automated validation and exception handling.",
    color: "from-cyan-500 to-blue-500",
    stats: "Compliance assurance"
  }
];

// Key Features (From ServiceNow Accounts Payable Operations content)
const keyFeatures = [
  {
    icon: Brain,
    title: "Document Intelligence",
    description: "Automate data capture and integrate the data into ServiceNow workflows with AI-powered invoice digitization and extraction capabilities.",
    capabilities: [
      "AI-powered invoice extraction",
      "Automated data digitization",
      "Configurable field extraction",
      "Pre-trained AI models"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "Procurement Case Management",
    description: "Resolve common requests with a virtual agent and a searchable knowledge base for comprehensive supplier inquiry and case management.",
    capabilities: [
      "Virtual agent support",
      "Searchable knowledge base",
      "Supplier inquiry management",
      "Automated case creation"
    ],
    color: "from-emerald-500 to-teal-500"
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
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Knowledge Management",
    description: "Improve business efficiency with easy knowledge sharing and collaboration through centralized information and contextual knowledge powered by AI.",
    capabilities: [
      "Centralized knowledge base",
      "AI-powered insights",
      "Collaborative information sharing",
      "Contextual knowledge delivery"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: FileCheck,
    title: "Invoice Processing Automation",
    description: "Automated invoice ingestion, validation, and processing with comprehensive exception handling and two-way/three-way matching capabilities.",
    capabilities: [
      "Automated invoice ingestion",
      "Exception rule engine",
      "Two-way/three-way matching",
      "Validation workflows"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Supplier Management",
    description: "Comprehensive supplier lifecycle management with self-service portals, payment status tracking, and dispute resolution capabilities.",
    capabilities: [
      "Supplier self-service portal",
      "Payment status tracking",
      "Dispute resolution",
      "Vendor information management"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Real-time visibility into AP operations with comprehensive reporting, KPI monitoring, and predictive analytics for data-driven decision making.",
    capabilities: [
      "Real-time dashboards",
      "KPI monitoring",
      "Predictive analytics",
      "Comprehensive reporting"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Plug,
    title: "ERP Integration",
    description: "Seamless integration with ERP systems providing real-time visibility into financial data and facilitating comprehensive decision-making processes.",
    capabilities: [
      "ERP system integration",
      "Real-time data sync",
      "Financial visibility",
      "Decision support"
    ],
    color: "from-pink-500 to-rose-500"
  }
];

// AP Process Automation Benefits (FIXED SYNTAX)
const apProcessBenefits = [
  {
    title: "Automated Invoice Digitization",
    description: "Transform email PDF invoices into digital records automatically using AI-based Document Intelligence with 38+ configurable extraction fields.",
    icon: FileText,
    benefit: "Digital transformation"
  },
  {
    title: "Exception Management",
    description: "Automated exception detection and handling with pre-configured rules engine for supplier mismatches, receipt validation, and data accuracy.",
    icon: AlertTriangle,
    benefit: "Automated exception handling"
  },
  {
    title: "Two-Way/Three-Way Matching",
    description: "Intelligent matching processes that automatically determine matching requirements based on purchase orders, receipts, and invoices.",
    icon: CheckCircle,
    benefit: "Intelligent matching"
  },
  {
    title: "Cost Savings and Efficiency",
    description: "Reduce operational costs through automation, minimize manual data entry errors, and accelerate invoice processing times for better supplier relationships.",
    icon: DollarSign,
    benefit: "Operational cost reduction"
  },
  {
    title: "Compliance and Audit",
    description: "Maintain clear and auditable records of all AP activities with comprehensive regulatory compliance management and audit trail capabilities.",
    icon: Shield,
    benefit: "Regulatory compliance"
  },
  {
    title: "Scalability and Growth",
    description: "Cloud-based solution that scales with business growth, supporting increased invoice volumes without proportional staff increases.",
    icon: TrendingUp,
    benefit: "Business scalability"
  }
];

// Advanced AP Capabilities (FIXED SYNTAX)
const advancedCapabilities = [
  {
    title: "Now Assist for AP Operations",
    description: "Field Extractor Skill automatically extracts invoice numbers from email descriptions and updates reference fields for enhanced automation.",
    icon: Bot,
    benefit: "AI-powered assistance"
  },
  {
    title: "Early Payment Discounts",
    description: "Automated identification and capture of early payment discount opportunities to optimize cash flow and reduce supplier costs.",
    icon: Percent,
    benefit: "Cash flow optimization"
  },
  {
    title: "Fraud Prevention",
    description: "Built-in fraud detection capabilities with automated validation rules and suspicious activity monitoring for enhanced security.",
    icon: Lock,
    benefit: "Fraud prevention"
  },
  {
    title: "Supplier Self-Service",
    description: "Dedicated supplier portal for invoice submission, payment status tracking, and dispute resolution without AP team intervention.",
    icon: UserCheck,
    benefit: "Supplier empowerment"
  },
  {
    title: "Multi-Currency Support",
    description: "Comprehensive multi-currency processing with automatic currency conversion and localization support for global operations.",
    icon: Globe,
    benefit: "Global operations"
  },
  {
    title: "Workflow Orchestration",
    description: "Advanced workflow orchestration across teams and systems with automated task assignment and escalation management.",
    icon: Workflow,
    benefit: "Process orchestration"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What is ServiceNow Accounts Payable Operations and how does it help organizations?",
    answer: (
      <div>
        <p className="mb-3">
          ServiceNow Accounts Payable Operations transforms how organizations manage supplier payments and AP processes:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Simplifies and coordinates the activities required to pay suppliers confidently and accurately with comprehensive automation</li>
          <li>Modernizes siloed and manual accounts payable processes, freeing teams from error-prone manual tasks</li>
          <li>Eliminates mundane activities like entering emailed PDFs as invoices into backend systems through AI-powered digitization</li>
          <li>Automates time-consuming processes like manually matching invoices with purchase orders and goods receipts</li>
          <li>Part of Source-to-Pay Operations solution providing end-to-end procurement and payment automation</li>
        </ul>
        <p className="mt-3 text-sm text-green-600">
          <strong>Built on ServiceNow AI Platform</strong> with Document Intelligence providing AI-based invoice extraction and workflow automation capabilities.
        </p>
      </div>
    )
  },
  
  {
    question: "What is Document Intelligence and how does it enhance invoice processing?",
    answer: (
      <div>
        <p className="mb-3">Document Intelligence revolutionizes invoice processing with AI-powered automation:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>AI-Based Data Extraction:</strong> Uses pre-trained AI models to automatically extract relevant contents from invoice documents received as email attachments</li>
          <li><strong>Configurable Field Extraction:</strong> Supports 38+ out-of-the-box common invoice fields with ability to add and configure additional fields based on requirements</li>
          <li><strong>Automated Invoice Creation:</strong> Creates invoice records in Draft state and associates extracted information with newly created invoice records automatically</li>
          <li><strong>Confidence-Based Processing:</strong> Determines extraction confidence and processes invoices automatically when confidence exceeds threshold values</li>
          <li><strong>Exception Handling:</strong> Automatically identifies and handles extraction errors, data mismatches, and validation issues through comprehensive exception management</li>
          <li><strong>Currency Processing:</strong> Intelligent currency identification and transformation with support for purchase order currencies and session-based defaults</li>
          <li><strong>Required Field Validation:</strong> Verifies required fields are populated and creates tasks for AP specialists when manual intervention is needed</li>
        </ul>
        <p className="mt-3">
          This comprehensive AI-powered approach eliminates manual invoice entry, reduces processing time, and ensures data accuracy across the entire AP workflow.
        </p>
      </div>
    )
  },

  {
    question: "What are the key features and capabilities of ServiceNow Accounts Payable Operations?",
    answer: (
      <div>
        <p className="mb-3">ServiceNow AP Operations provides comprehensive accounts payable automation capabilities:</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-emerald-600 mb-2">Core AP Features:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Document Intelligence:</strong> AI-powered invoice extraction and digitization with 38+ configurable fields</li>
              <li><strong>Invoice Processing Automation:</strong> End-to-end invoice workflow from ingestion through payment release</li>
              <li><strong>Exception Management:</strong> Automated exception detection with pre-configured rules engine for error handling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2">Advanced AP Capabilities:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Procurement Case Management:</strong> Virtual agent support with searchable knowledge base for supplier inquiries</li>
              <li><strong>Two-Way/Three-Way Matching:</strong> Intelligent matching processes for purchase orders, receipts, and invoices</li>
              <li><strong>Real-Time Analytics:</strong> Comprehensive dashboards, KPI monitoring, and predictive analytics for decision-making</li>
              <li><strong>Supplier Self-Service:</strong> Dedicated portal for invoice submission, payment tracking, and dispute resolution</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  {
    question: "How does AP Operations handle invoice exceptions and validation?",
    answer: (
      <div>
        <p className="mb-3">
          AP Operations provides comprehensive exception management and validation capabilities:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Automated Exception Detection:</strong> Pre-configured exception rules engine automatically identifies issues that could block invoice payment</li>
          <li><strong>Common Exception Types:</strong> Handles supplier mismatches, insufficient goods receipts, data inaccuracies, quantity mismatches, and invoice data validation errors</li>
          <li><strong>Contextual Information:</strong> Provides AP specialists with complete contextual information about invoices and exceptions for efficient resolution</li>
          <li><strong>Task Assignment:</strong> Automatically creates and assigns tasks to appropriate personnel (requesters, AP specialists) for exception resolution</li>
          <li><strong>Validation Workflows:</strong> Comprehensive validation processes for required fields, line items, currency codes, and matching requirements</li>
          <li><strong>Visual Exception Tracking:</strong> Clear visibility into which line items are causing exceptions and tracking of resolution progress</li>
        </ul>
        <p className="mt-3">
          This systematic approach ensures payment accuracy, reduces manual intervention, and maintains comprehensive audit trails for all exception handling activities.
        </p>
      </div>
    )
  },

  {
    question: "What integration capabilities does AP Operations provide with ERP systems?",
    answer: (
      <div>
        <p className="mb-3">AP Operations provides extensive ERP integration capabilities for comprehensive financial system connectivity:</p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Core ERP Integration:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Real-Time Data Synchronization:</strong> Seamless integration with ERP systems for real-time financial data visibility</li>
              <li><strong>Purchase Order Integration:</strong> Automatic retrieval and matching of purchase order data from ERP systems</li>
              <li><strong>Invoice Data Transfer:</strong> Automated transfer of processed invoice data back to ERP systems for payment processing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Advanced Integration Features:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Multi-ERP Support:</strong> Compatible with major ERP systems including SAP, Oracle, Microsoft Dynamics, and others</li>
              <li><strong>API Integration:</strong> Comprehensive REST and SOAP API support for custom integrations and data exchange</li>
              <li><strong>Data Transformation:</strong> Intelligent data mapping and transformation capabilities for seamless system compatibility</li>
              <li><strong>Audit Trail Maintenance:</strong> Complete audit trail preservation across integrated systems for compliance and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  {
    question: "How much does ServiceNow Accounts Payable Operations implementation cost?",
    answer: (
      <div>
        <p className="mb-3">
          Implementation costs depend on organization size, invoice volume, and integration complexity:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>AP Operations Standard:</strong> Starting from $180K - includes basic invoice processing, Document Intelligence, and standard AP workflows for mid-size organizations</li>
          <li><strong>AP Operations Professional:</strong> $280K-$420K - includes Procurement Case Management, advanced analytics, and comprehensive AP automation for large enterprises</li>
          <li><strong>AP Operations Enterprise:</strong> $500K+ - complete solution with advanced integrations, multi-currency support, and enterprise-scale AP operations</li>
        </ul>
        <p className="mt-3">
          ROI typically achieved within 6-12 months through manual task elimination (60%), error reduction (45%), and early payment discount capture (25%). Document Intelligence can reduce invoice processing time by 80%.
        </p>
      </div>
    ),
    links: [
      { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
      { text: "AP ROI Calculator", url: "/ap-roi-calculator" }
    ]
  },

  {
    question: "What is the typical implementation timeline for ServiceNow Accounts Payable Operations?",
    answer: (
      <div>
        <p className="mb-3">Implementation timeline depends on AP process maturity and system integration scope:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>AP Operations Standard:</strong> 8-12 weeks for basic invoice processing, Document Intelligence setup, and standard AP workflow automation</li>
          <li><strong>AP Operations Professional:</strong> 12-18 weeks including Procurement Case Management, advanced analytics, and comprehensive exception handling</li>
          <li><strong>AP Operations Enterprise:</strong> 18-24 weeks for complete solution with advanced ERP integrations, multi-currency support, and enterprise AP operations</li>
        </ul>
        <p className="mt-3">
          Our methodology: AP Process Assessment & Analysis (2-3 weeks) → Core AP Operations & Document Intelligence Configuration (4-6 weeks) → ERP Integration & Data Migration (3-5 weeks) → Advanced Features & Case Management Setup (3-5 weeks) → Go-Live & Finance Team Training (2-3 weeks).
        </p>
      </div>
    )
  },

  {
    question: "How does AP Operations integrate with existing financial systems and procurement workflows?",
    answer: (
      <div>
        <p className="mb-3">AP Operations provides comprehensive integration capabilities for complete financial ecosystem connectivity:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>ERP System Integration:</strong> Native integration with SAP, Oracle, Microsoft Dynamics, and other major ERP systems for real-time data synchronization</li>
          <li><strong>Procurement System Connectivity:</strong> Integration with procurement platforms for purchase order, requisition, and sourcing data exchange</li>
          <li><strong>Banking and Payment Systems:</strong> Integration with payment platforms, banks, and treasury management systems for automated payment processing</li>
          <li><strong>Document Management:</strong> Integration with SharePoint, ECM systems, and cloud storage for invoice and document management</li>
          <li><strong>Email and Communication:</strong> Email integration for invoice ingestion, supplier communication, and notification management</li>
          <li><strong>Reporting and Analytics:</strong> Integration with BI tools, data warehouses, and financial reporting systems for comprehensive analytics</li>
          <li><strong>Supplier Portals:</strong> Integration with existing supplier portals or creation of new self-service supplier interfaces</li>
        </ul>
        <p className="mt-3 text-green-600">
          <strong>Result:</strong> Organizations achieve unified AP operations while maintaining existing financial system investments and procurement workflow continuity.
        </p>
      </div>
    )
  }
];

// Case Studies (Based on AP Operations success stories)
const caseStudies = [
  {
    title: "Global Manufacturing Company Automates 10K+ Monthly Invoices with Document Intelligence",
    client: "Fortune 500 Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "Manufacturing operations requiring automation of 10,000+ monthly invoices with comprehensive Document Intelligence and exception handling for enhanced AP efficiency",
    solution: "ServiceNow Accounts Payable Operations with Document Intelligence, automated invoice processing, and manufacturing-specific AP workflow optimization",
    results: [
      { metric: "10K+", description: "Monthly invoices automated" },
      { metric: "Document", description: "Intelligence deployed" },
      { metric: "Exception", description: "Handling automated" },
      { metric: "Manufacturing", description: "AP optimized" }
    ],
    testimonial: "ServiceNow AP Operations with Document Intelligence automated our 10,000+ monthly invoices, eliminating manual data entry and reducing processing time by 80%.",
    executive: "Chief Financial Officer",
    logo: "/images/clients/manufacturing-corp-logo.png"
  },
  {
    title: "Healthcare System Eliminates Manual Invoice Entry with AI-Powered Extraction",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "Healthcare operations requiring elimination of manual invoice entry with AI-powered extraction and comprehensive supplier payment automation",
    solution: "ServiceNow Accounts Payable Operations with healthcare-specific AP workflows, Document Intelligence, and medical industry compliance optimization",
    results: [
      { metric: "Manual", description: "Entry eliminated" },
      { metric: "AI-Powered", description: "Extraction deployed" },
      { metric: "Healthcare", description: "AP optimized" },
      { metric: "Supplier", description: "Payments automated" }
    ],
    testimonial: "ServiceNow AP Operations eliminated manual invoice entry through AI-powered extraction, transforming our healthcare financial operations and compliance management.",
    executive: "VP of Financial Operations",
    logo: "/images/clients/healthcare-network-logo.png"
  },
  {
    title: "Retail Chain Achieves 60% Cost Reduction with Comprehensive AP Automation",
    client: "National Retail Chain",
    industry: "Retail",
    challenge: "Retail operations requiring 60% cost reduction through comprehensive AP automation with multi-location invoice processing and supplier management",
    solution: "ServiceNow Accounts Payable Operations with retail-specific workflows, multi-location processing, and comprehensive supplier lifecycle management",
    results: [
      { metric: "60%", description: "Cost reduction achieved" },
      { metric: "AP", description: "Automation deployed" },
      { metric: "Multi-Location", description: "Processing enabled" },
      { metric: "Retail", description: "Operations optimized" }
    ],
    testimonial: "ServiceNow AP Operations achieved 60% cost reduction through comprehensive automation, enabling efficient multi-location invoice processing and supplier management.",
    executive: "Director of Finance",
    logo: "/images/clients/retail-chain-logo.png"
  },
  {
    title: "Technology Company Streamlines Global AP Operations with Multi-Currency Support",
    client: "Global Technology Corporation",
    industry: "Technology",
    challenge: "Technology operations requiring global AP operations streamlining with multi-currency support and comprehensive international supplier payment automation",
    solution: "ServiceNow Accounts Payable Operations with global AP workflows, multi-currency processing, and technology industry-specific automation optimization",
    results: [
      { metric: "Global", description: "AP operations streamlined" },
      { metric: "Multi-Currency", description: "Support enabled" },
      { metric: "International", description: "Suppliers automated" },
      { metric: "Technology", description: "Industry optimized" }
    ],
    testimonial: "ServiceNow AP Operations streamlined our global operations with comprehensive multi-currency support, enabling efficient international supplier payment automation.",
    executive: "Global Finance Director",
    logo: "/images/clients/technology-corp-logo.png"
  }
];

return (
  <>
    <Head>
      <title>Accounts Payable Operations - ServiceNow AP Portfolio | ifBash</title>
      <meta
        name="description"
        content="Streamline accounts payable processes. Pay suppliers confidently and accurately and free your finance teams from repetitive, error-prone manual tasks."
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
        className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
        aria-label="Discuss AP Implementation"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
          Discuss AP Implementation
        </span>
        <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-20"></div>
      </button>
    </div>

    <div className="min-h-screen bg-gray-50">
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
                  Document Intelligence
                </Badge>
                <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                  <Trophy className="w-3 h-3 mr-1" />
                  AP Automation
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 font-semibold">
                  Accounts Payable
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    Operations
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
                <span className="font-semibold text-emerald-300">Streamline accounts payable processes.</span>{' '}
                <span className="font-semibold text-teal-300">Pay suppliers confidently and accurately</span> and free your finance teams from repetitive, error-prone manual tasks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700"
                  style={{
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Get AP Implementation
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
  <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
  Watch Video
</span>
</button>

              </div>

              {/* AP Automation Badge */}
              <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-sm rounded-xl p-4 border border-green-300/20">
                <div className="flex items-center gap-3">
                  <PaymentIcon className="h-8 w-8 text-green-300" />
                  <div>
                    <div className="text-lg font-bold text-white">Complete AP Automation Platform</div>
                    <div className="text-sm text-green-200">Document Intelligence with AI-powered invoice processing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative lg:h-[600px]">
              <div className="relative z-20 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                  <PlaceholderImage
                    title="ServiceNow Accounts Payable Operations Platform"
                    className="w-full h-full object-cover"
                    gradient="from-green-600 to-emerald-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">AI</div>
                    <div className="text-xs text-green-200">Invoice Processing</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Auto</div>
                    <div className="text-xs text-emerald-200">Supplier Payments</div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <PaymentIcon className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                  <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                Modernize Accounts Payable
              </span>
              <br />
              <span className="text-gray-800">
                Process Automation
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform AP operations with comprehensive automation, eliminate manual tasks, and ensure accurate supplier payments with AI-powered processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
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

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Key AP Features
              </span>
              <br />
              <span className="text-gray-800">
                Complete Automation Platform
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AP features from Document Intelligence to supplier management with AI-powered automation and real-time analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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

      {/* AP Process Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                AP Process Benefits
              </span>
              <br />
              <span className="text-gray-800">
                Operational Excellence
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Achieve operational excellence through automated invoice digitization, intelligent exception management, and comprehensive compliance assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apProcessBenefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                    <div className="text-sm font-semibold text-teal-700 mb-1">Key Benefit</div>
                    <div className="text-teal-600 text-lg font-bold">{benefit.benefit}</div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                Advanced Capabilities
              </span>
              <br />
              <span className="text-gray-800">
                Enterprise AP Features
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Advanced AP capabilities including Now Assist, fraud prevention, and comprehensive supplier self-service with global multi-currency support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Frequently Asked Questions
              </span>
              <br />
              <span className="text-gray-800">
                About AP Operations
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about Accounts Payable Operations implementation, Document Intelligence, and AP automation.
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
                      <div className="w-full h-px bg-gradient-to-r from-blue-500 to-indigo-500 mb-4" />
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer}
                        {faq.links && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {faq.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                ServiceNow Case Studies
              </span>
              <br />
              <span className="text-white">
                Real AP Success Stories
              </span>
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              See how organizations transformed their accounts payable operations with comprehensive AP automation and Document Intelligence solutions.
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
                            <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 mr-3">
                              {study.industry}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30">
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

                          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-4 border-l-4 border-indigo-400">
                            <Quote className="h-6 w-6 text-indigo-400 mb-2" />
                            <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                            <p className="text-sm font-semibold text-indigo-300">— {study.executive}</p>
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
                              <span className="text-indigo-200 text-sm">(5.0/5.0)</span>
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
                      ? 'bg-indigo-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Accounts Payable Operations?
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with our ServiceNow experts to implement comprehensive AP automation with Document Intelligence and AI-powered invoice processing capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact AP Experts
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
                  <Mail className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">ap-experts@ifbash.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Phone className="h-6 w-6 text-purple-200 mx-auto mb-2" />
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
