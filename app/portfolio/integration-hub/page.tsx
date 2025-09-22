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
  PenTool,
  Home,
  Terminal
} from "lucide-react";

export default function IntegrationHubPage() {
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
    "name": "Integration Hub - ServiceNow AI Platform Integration",
    "description": "Natively integrate ServiceNow with any external app, platform, or data to easily create end-to-end digital workflows. Discover ServiceNow Integration Hub.",
    "applicationCategory": "Integration Hub"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Integration Hub and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Integration Hub natively integrates ServiceNow with any external app, platform, or data to easily create end-to-end digital workflows. It connects hundreds of modern enterprise apps instantly using prebuilt spokes and GenAI-powered spoke generation."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Spoke Generator and how does it enhance integration development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spoke Generator builds spokes fast with no code, powered by OpenAPI specifications and Now Assist. It enables users to create custom spokes for external systems directly from API documentation, simplifying integration development and expanding connectivity options."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Integration Hub content)
  const benefits = [
    {
      icon: Zap,
      title: "Accelerate time to value",
      description: "Connect ServiceNow workflows to hundreds of critical business systems in minutes with out-of-the-box spokes for instant integration capabilities.",
      color: "from-cyan-500 to-blue-500",
      stats: "Instant connectivity"
    },
    {
      icon: DollarSign,
      title: "Reduce integration costs and complexity",
      description: "Eliminate the need for specialized integration resources. ServiceNow builds and maintains spokes, flow templates, and solutions for certified platforms.",
      color: "from-blue-500 to-indigo-500",
      stats: "Cost reduction"
    },
    {
      icon: Code,
      title: "Build custom integrations",
      description: "Create reusable custom spokes for differentiated use cases, with integration steps for REST, SOAP, JDBC, JSON, and comprehensive API protocols.",
      color: "from-indigo-500 to-purple-500",
      stats: "Custom connectivity"
    },
    {
      icon: Rocket,
      title: "Ignite IT productivity",
      description: "Deliver AI-powered self-service for common requests. Connect Virtual Agent to packaged integration solutions for enhanced automation capabilities.",
      color: "from-purple-500 to-pink-500",
      stats: "Enhanced productivity"
    }
  ];

  // Key Features (From ServiceNow Integration Hub content)
  const keyFeatures = [
    {
      icon: Plug,
      title: "Out-of-the-Box Spokes",
      description: "Integrate data and automate thousands of actions in critical business systems with prebuilt connectors for popular enterprise applications.",
      capabilities: [
        "200+ prebuilt connectors",
        "Critical business systems",
        "Automated actions",
        "Enterprise application integration"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Package,
      title: "Packaged Integration Solutions",
      description: "Reduce IT ticket volume with out-of-the-box automation solutions for common business processes and workflow requirements.",
      capabilities: [
        "Ready-to-use automation",
        "IT ticket reduction",
        "Common process solutions",
        "Business workflow automation"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Spoke Generator",
      description: "Build spokes fast with no code, powered by OpenAPI specifications and Now Assist for GenAI-powered integration development.",
      capabilities: [
        "No-code spoke creation",
        "OpenAPI specification support",
        "GenAI-powered development",
        "API documentation integration"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Workflow,
      title: "Flow Templates",
      description: "Speed automation development using starter flows with built-in integrations for accelerated workflow creation and deployment.",
      capabilities: [
        "Starter flow templates",
        "Built-in integrations",
        "Accelerated development",
        "Pre-configured workflows"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Stream Connect for Apache Kafka",
      description: "Connect your Kafka environment to ServiceNow workflows at scale with real-time event streaming and data processing capabilities.",
      capabilities: [
        "Apache Kafka integration",
        "Real-time event streaming",
        "Scalable data processing",
        "Enterprise messaging"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Database,
      title: "Remote Tables",
      description: "View and manipulate external data for temporary use without importing or storing it, enabling zero-copy data integration.",
      capabilities: [
        "External data access",
        "Zero-copy integration",
        "Temporary data usage",
        "Real-time data manipulation"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Cog,
      title: "Custom Spokes",
      description: "Create powerful custom integrations for any use case with comprehensive protocol support and reusable integration components.",
      capabilities: [
        "Custom integration creation",
        "Multiple protocol support",
        "Reusable components",
        "Enterprise-grade security"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Layout,
      title: "Connections Dashboard",
      description: "Connect in minutes and simplify credential management through a single dashboard with centralized integration oversight.",
      capabilities: [
        "Single dashboard management",
        "Credential centralization",
        "Quick connection setup",
        "Integration monitoring"
      ],
      color: "from-orange-500 to-amber-500"
    }
  ];

  // Role-Based Applications
  const roleBasedApps = [
    {
      role: "Platform Owner",
      description: "Accelerate delivery of new ServiceNow requests that require connectivity to modern systems. Maximize ServiceNow AI Platform value by lowering cost of ownership.",
      applications: [
        "Out-of-the-box Spokes - Connect any systems, apps, and data with Integration Hub",
        "Packaged Integration Solutions - Reduce IT ticket volume with out-of-the-box automation",
        "Flow Templates - Speed automation development using starter flows with built-in integrations"
      ],
      icon: Shield,
      color: "from-cyan-500 to-blue-500"
    },
    {
      role: "Head of Integration", 
      description: "Address strategic initiatives that maximize IT impact by freeing up specialized integration resources. Lower integration costs and risk with embedded tools.",
      applications: [
        "Connections Dashboard - Simplify credential management through a single dashboard",
        "Integration Hub Import - Streamline the process of importing and mapping large data sets",
        "Out-of-the-box Spokes - Integrate data and automate thousands of actions in critical business systems"
      ],
      icon: Network,
      color: "from-blue-500 to-indigo-500"
    },
    {
      role: "Integration Developers",
      description: "Connect external systems to ServiceNow workflows quickly using native, intuitive tools for comprehensive integration development.",
      applications: [
        "Remote Tables - View and manipulate external data for temporary use without importing or storing it",
        "Spoke Generator - Build spokes fast with no code, powered by OpenAPI specifications",
        "REST API Trigger - Start a flow from an inbound API call or webhook, without writing any code"
      ],
      icon: Code,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Workflow Data Fabric Components
  const workflowDataFabricComponents = [
    {
      title: "Zero-Copy Integration",
      description: "Connect to external data without moving or duplicating it in ServiceNow, enabling real-time access to data in its original location.",
      icon: Database,
      benefit: "Real-time data access"
    },
    {
      title: "Enterprise Data Unification",
      description: "Unify data from anywhere into a single, real-time view across databases, third-party apps, data lakes, and files for comprehensive insights.",
      icon: Layers,
      benefit: "Unified data landscape"
    },
    {
      title: "AI Agent Enablement",
      description: "Power AI agents with cross-enterprise data, enabling advanced reasoning, software leverage, and collaborative multi-step task completion.",
      icon: Bot,
      benefit: "AI-powered automation"
    },
    {
      title: "Structured and Unstructured Data",
      description: "Support all data types including spreadsheets, Slack conversations, ERP tables, and real-time IoT sensor feeds with comprehensive connectivity.",
      icon: FileText,
      benefit: "Comprehensive data support"
    },
    {
      title: "Knowledge Graph",
      description: "Translate raw data into meaningful visualizations and actionable insights with advanced data contextualization and enrichment capabilities.",
      icon: Network,
      benefit: "Data intelligence"
    },
    {
      title: "Process Mining Integration",
      description: "Create visual maps of how data and processes flow in real-world scenarios with comprehensive process analysis and optimization.",
      icon: TrendingUp,
      benefit: "Process optimization"
    }
  ];

  // Advanced Integration Capabilities
  const advancedCapabilities = [
    {
      title: "REST API Trigger",
      description: "Start a flow from an inbound API call or webhook, without writing any code, enabling seamless integration with external systems and services.",
      icon: Zap,
      benefit: "Codeless API integration"
    },
    {
      title: "Integration Hub Import",
      description: "Simplify the process of importing and mapping large data sets with comprehensive data transformation and mapping capabilities.",
      icon: Download,
      benefit: "Simplified data import"
    },
    {
      title: "Virtual Agent Integration",
      description: "Connect Virtual Agent to packaged integration solutions for password reset, client software distribution, and access management automation.",
      icon: MessageCircle,
      benefit: "AI-powered self-service"
    },
    {
      title: "Cross-Platform Workflows",
      description: "Enable comprehensive workflow automation across departments, applications, and systems with seamless cross-platform connectivity.",
      icon: Workflow,
      benefit: "Enterprise automation"
    },
    {
      title: "Real-Time Event Processing",
      description: "Handle streams of real-time event data through Apache Kafka integration with comprehensive event processing and workflow triggers.",
      icon: Activity,
      benefit: "Real-time processing"
    },
    {
      title: "Enterprise Security",
      description: "Maintain enterprise-grade security with secure credential management, encrypted connections, and comprehensive access controls.",
      icon: Shield,
      benefit: "Enterprise security"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Integration Hub and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Integration Hub transforms how organizations connect systems and automate workflows:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Natively integrates ServiceNow with any external app, platform, or data to easily create end-to-end digital workflows</li>
            <li>Connects hundreds of modern enterprise apps instantly using prebuilt spokes for immediate connectivity</li>
            <li>Features GenAI-powered spoke generator for creating custom integrations from API documentation without coding</li>
            <li>Enables developers, IT generalists, and no-code builders to quickly integrate ServiceNow workflows to any modern system</li>
            <li>Part of Workflow Data Fabric providing unified data integration layer for comprehensive enterprise automation</li>
          </ul>
          <p className="mt-3 text-sm text-cyan-600">
            <strong>Built on ServiceNow AI Platform</strong> with 200+ out-of-the-box spokes and Now Assist for intelligent integration development.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Spoke Generator and how does it enhance integration development?",
      answer: (
        <div>
          <p className="mb-3">Spoke Generator revolutionizes integration development with AI-powered, no-code capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>No-Code Development:</strong> Build spokes fast without writing any code, powered by OpenAPI specifications and GenAI assistance</li>
            <li><strong>API Documentation Integration:</strong> Create custom spokes directly from API documentation without standard OpenAPI or Postman specifications</li>
            <li><strong>Now Assist Integration:</strong> Paste API documentation into the Spoke Generator UI to instantly generate actions for custom spokes</li>
            <li><strong>Preview and Validation:</strong> Review generated actions to verify accuracy before publishing with comprehensive testing capabilities</li>
            <li><strong>Home-Grown System Support:</strong> Supports third-party and customer home-grown systems that lack standard specifications</li>
            <li><strong>Reusable Components:</strong> Creates reusable custom spokes for differentiated use cases with enterprise-grade integration patterns</li>
            <li><strong>Quick Publishing:</strong> Finalize custom spokes and deploy them for immediate use across ServiceNow workflows</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach simplifies custom integration development, accelerates time-to-value, and broadens integration compatibility across diverse systems.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Integration Hub?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow Integration Hub provides comprehensive integration capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Core Integration Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Out-of-the-Box Spokes:</strong> 200+ prebuilt connectors for critical business systems integration</li>
                <li><strong>Spoke Generator:</strong> No-code spoke creation powered by OpenAPI specifications and GenAI</li>
                <li><strong>Flow Templates:</strong> Starter flows with built-in integrations for accelerated development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Advanced Integration Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Stream Connect for Apache Kafka:</strong> Real-time event streaming and data processing at scale</li>
                <li><strong>Remote Tables:</strong> Zero-copy integration for external data access without storage</li>
                <li><strong>Custom Spokes:</strong> Powerful custom integrations with REST, SOAP, JDBC, and JSON support</li>
                <li><strong>Connections Dashboard:</strong> Centralized credential management and integration monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How do role-based applications work in ServiceNow Integration Hub?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Integration Hub provides role-based applications tailored to different integration professionals and their specific responsibilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Platform Owner:</strong> Out-of-the-box Spokes for system connectivity, Packaged Integration Solutions for automation, and Flow Templates for development acceleration</li>
            <li><strong>Head of Integration:</strong> Connections Dashboard for credential management, Integration Hub Import for data processing, and comprehensive spoke management for strategic initiatives</li>
            <li><strong>Integration Developers:</strong> Remote Tables for external data access, Spoke Generator for no-code development, and REST API Trigger for seamless webhook integration</li>
          </ul>
          <p className="mt-3">
            Each role receives tailored applications, development environments, and integration tools optimized for their specific integration responsibilities and technical skill levels.
          </p>
        </div>
      )
    },

    {
      question: "What is Workflow Data Fabric and how does it enhance integration capabilities?",
      answer: (
        <div>
          <p className="mb-3">Workflow Data Fabric is an enhanced data layer that revolutionizes enterprise data integration:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Core Data Fabric Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Zero-Copy Integration:</strong> Connect to external data without moving or duplicating it in ServiceNow</li>
                <li><strong>Real-Time Data Access:</strong> Secure, real-time access to structured or unstructured data across the enterprise</li>
                <li><strong>Enterprise Data Unification:</strong> Connects databases, third-party apps, data lakes, and files into single view</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">AI and Automation Enhancement:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>AI Agent Enablement:</strong> Powers AI agents with cross-enterprise data for advanced reasoning and collaboration</li>
                <li><strong>Knowledge Graph:</strong> Translates raw data into meaningful visualizations and actionable insights</li>
                <li><strong>Process Mining Integration:</strong> Creates visual maps of data and process flows for optimization</li>
                <li><strong>Connect, Understand, Act:</strong> Three-step process for comprehensive data utilization and automation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Integration Hub implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, integration complexity, and system connectivity requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Integration Hub Standard:</strong> Starting from $120K - includes basic spokes, flow templates, and standard integration capabilities for mid-size organizations</li>
            <li><strong>Integration Hub Professional:</strong> $200K-$350K - includes Spoke Generator, custom integrations, and advanced connectivity for large enterprises</li>
            <li><strong>Integration Hub Enterprise with Data Fabric:</strong> $450K+ - complete solution with Workflow Data Fabric, Apache Kafka, and enterprise-scale integration</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 3-6 months through integration acceleration (70%), manual process elimination (50%), and system connectivity improvements (60%). Prebuilt spokes can reduce integration development time by 80%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Integration ROI Calculator", url: "/integration-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Integration Hub?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on integration program maturity and system connectivity scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Integration Hub Standard:</strong> 4-8 weeks for basic spokes, flow templates, and standard system connectivity capabilities</li>
            <li><strong>Integration Hub Professional:</strong> 8-14 weeks including Spoke Generator, custom integrations, and advanced connectivity features</li>
            <li><strong>Integration Hub Enterprise with Data Fabric:</strong> 14-20 weeks for complete solution with Workflow Data Fabric, enterprise integrations, and AI enablement</li>
          </ul>
          <p className="mt-3">
            Our methodology: Integration Assessment & System Analysis (1-2 weeks) → Core Integration Hub & Spoke Configuration (2-4 weeks) → Custom Integration & Spoke Generator Setup (2-4 weeks) → Advanced Features & Data Fabric Integration (2-4 weeks) → Go-Live & Developer Training (1-2 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Integration Hub integrate with existing enterprise systems and development tools?",
      answer: (
        <div>
          <p className="mb-3">Integration Hub provides extensive connectivity for comprehensive enterprise integration ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Enterprise Applications:</strong> 200+ prebuilt spokes for SAP, Salesforce, Microsoft Dynamics, Oracle, and other critical business systems</li>
            <li><strong>Development Tools:</strong> Integration with CI/CD pipelines, Git repositories, and development lifecycle management platforms</li>
            <li><strong>Cloud Platforms:</strong> Native connectivity with AWS, Azure, Google Cloud, and other cloud infrastructure services</li>
            <li><strong>Data Platforms:</strong> Integration with Databricks, Snowflake, data warehouses, and analytics platforms through Workflow Data Fabric</li>
            <li><strong>Messaging Systems:</strong> Apache Kafka integration for real-time event streaming and enterprise messaging capabilities</li>
            <li><strong>API Management:</strong> Comprehensive REST, SOAP, JDBC, and custom protocol support for any API-enabled system</li>
            <li><strong>Collaboration Tools:</strong> Integration with Microsoft Teams, Slack, SharePoint, and other collaboration platforms</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve comprehensive system connectivity while maintaining existing enterprise architecture and development workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on Integration Hub success stories)
  const caseStudies = [
    {
      title: "Latitude Automates Workflows Between ITSM, Workday, and Active Directory with 60 Systems",
      client: "Latitude Financial Services",
      industry: "Financial Services",
      challenge: "Financial services requiring automated workflows between ServiceNow ITSM, Workday, and Microsoft Active Directory with up to 60 supportive systems integration",
      solution: "ServiceNow Integration Hub with comprehensive workflow automation, multi-system connectivity, and financial services-specific integration optimization",
      results: [
        { metric: "60+", description: "Systems integrated" },
        { metric: "HR", description: "Requests automated" },
        { metric: "Workflow", description: "Processing accelerated" },
        { metric: "Financial", description: "Services optimized" }
      ],
      testimonial: "Latitude leverages ServiceNow Integration Hub to automate workflows between ServiceNow ITSM, Workday, and Microsoft Active Directory with up to 60 supportive systems. It can now quickly process HR requests.",
      executive: "Erhan Stephenson, Head of Enterprise Service Management",
      logo: "/images/clients/latitude-logo.png"
    },
    {
      title: "TD Bank Automated 30K Requests per Month with Active Directory and SCCM Integration",
      client: "TD Bank Group",
      industry: "Banking",
      challenge: "Banking operations requiring automation of 30,000 monthly requests with comprehensive Active Directory and SCCM integration for enhanced operational efficiency",
      solution: "ServiceNow Integration Hub with banking-specific automation, identity management integration, and high-volume request processing optimization",
      results: [
        { metric: "30K", description: "Monthly requests automated" },
        { metric: "Active Directory", description: "Integration deployed" },
        { metric: "SCCM", description: "Connectivity achieved" },
        { metric: "Banking", description: "Operations optimized" }
      ],
      testimonial: "ServiceNow Integration Hub enabled us to automate 30,000 requests per month with seamless Active Directory and SCCM integration, transforming our operational efficiency.",
      executive: "Head of IT Operations",
      logo: "/images/clients/td-bank-logo.png"
    },
    {
      title: "American University Automated Microsoft Teams Creation for Uninterrupted Education",
      client: "American University",
      industry: "Higher Education",
      challenge: "Educational institution requiring automated Microsoft Teams creation for uninterrupted education delivery with seamless collaboration platform provisioning",
      solution: "ServiceNow Integration Hub with education-specific workflows, Microsoft Teams automation, and academic collaboration platform optimization",
      results: [
        { metric: "Microsoft Teams", description: "Creation automated" },
        { metric: "Education", description: "Delivery uninterrupted" },
        { metric: "Collaboration", description: "Platforms optimized" },
        { metric: "Academic", description: "Workflows enhanced" }
      ],
      testimonial: "ServiceNow Integration Hub automated Microsoft Teams creation, ensuring uninterrupted education delivery and seamless collaboration for our academic community.",
      executive: "Director of Educational Technology",
      logo: "/images/clients/american-university-logo.png"
    },
    {
      title: "Ballad Health Automated ID and Access Management for 97% Ticket Volume Decrease",
      client: "Ballad Health",
      industry: "Healthcare",
      challenge: "Healthcare organization requiring automated ID and access management with significant ticket volume reduction and enhanced security compliance",
      solution: "ServiceNow Integration Hub with healthcare identity management, access automation, and medical industry compliance optimization for comprehensive security",
      results: [
        { metric: "97%", description: "Ticket volume decrease" },
        { metric: "ID Management", description: "Automated" },
        { metric: "Access", description: "Management streamlined" },
        { metric: "Healthcare", description: "Security enhanced" }
      ],
      testimonial: "ServiceNow Integration Hub automated our ID and access management ticket process, achieving a remarkable 97% decrease in ticket volume while enhancing security compliance.",
      executive: "Chief Information Officer",
      logo: "/images/clients/ballad-health-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Integration Hub - ServiceNow AI Platform Portfolio | ifBash</title>
        <meta
          name="description"
          content="Natively integrate ServiceNow with any external app, platform, or data to easily create end-to-end digital workflows. Discover ServiceNow Integration Hub."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Integration Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Integration Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-cyan-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Integration
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Workflow Data Fabric
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                    Integration
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Hub
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-blue-300">Natively integrate ServiceNow with any external app, platform, or data</span>{' '}
                  <span className="font-semibold text-indigo-300">to easily create end-to-end digital workflows.</span> Connect hundreds of modern enterprise apps instantly with prebuilt spokes.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Integration Implementation
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
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* Integration Platform Badge */}
                <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 backdrop-blur-sm rounded-xl p-4 border border-cyan-300/20">
                  <div className="flex items-center gap-3">
                    <Plug className="h-8 w-8 text-cyan-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Integration Platform</div>
                      <div className="text-sm text-cyan-200">200+ prebuilt spokes with GenAI-powered spoke generation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Integration Hub Platform"
                      className="w-full h-full object-cover"
                      gradient="from-cyan-600 to-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">200+</div>
                      <div className="text-xs text-cyan-200">Spokes</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">GenAI</div>
                      <div className="text-xs text-blue-200">Generation</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Plug className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Transform Enterprise
                </span>
                <br />
                <span className="text-gray-800">
                  Integration Connectivity
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Connect any modern system to ServiceNow workflows with comprehensive integration capabilities, reducing complexity and accelerating time to value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                      <div className="text-sm font-semibold text-cyan-700 mb-1">Key Value</div>
                      <div className="text-cyan-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Key Integration Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Integration Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive integration features from prebuilt spokes to AI-powered spoke generation with enterprise-grade connectivity and data fabric capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Role-Based Applications Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  Integration Professional Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Tailored applications for different integration roles, from platform ownership to integration development and strategic initiative management.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${roleApp.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <roleApp.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {roleApp.role}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {roleApp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                      <ul className="space-y-2">
                        {roleApp.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {app}
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

        {/* Workflow Data Fabric Components Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                  Workflow Data Fabric
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Data Integration
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Enhanced data layer that unifies data from anywhere into a single, real-time view with zero-copy integration and AI agent enablement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowDataFabricComponents.map((component, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <component.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {component.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Key Benefit</div>
                      <div className="text-purple-600 text-lg font-bold">{component.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Integration Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced integration capabilities including REST API triggers, virtual agent connectivity, and comprehensive enterprise security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
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
                  About Integration Hub
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Integration Hub implementation, Spoke Generator, and Workflow Data Fabric capabilities.
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
                  Real Integration Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their enterprise integration with comprehensive Integration Hub solutions and workflow automation capabilities.
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
                  Ready to Transform Enterprise Integration?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive Integration Hub with Workflow Data Fabric and AI-powered spoke generation capabilities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Integration Experts
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
                    <p className="text-white text-sm font-medium">integration-experts@ifbash.com</p>
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
      `}</style>
    </>
  );
}
