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
  Home
} from "lucide-react";

export default function WorkplaceServiceDeliveryPage() {
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
    "name": "Workplace Service Delivery - ServiceNow WSD Implementation",
    "description": "Our facility management software, ServiceNow Workplace Service Delivery (WSD), automates and simplifies your tasks for a smooth-running workplace.",
    "applicationCategory": "Workplace Service Delivery"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Workplace Service Delivery and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Workplace Service Delivery makes it easy for employees to reserve, navigate, and request service for any space. It optimizes workplace operations with intelligent building integrations, enhances space planning, and streamlines facilities management."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Workplace Space Management and how does it optimize workplace utilization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Workplace Space Management provides workplace administrators with tools to plan, design, and optimize workspaces with accurate data to efficiently manage spaces, improve floor space utilization, and optimize real estate spend based on utilization data."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Workplace Service Delivery content)
  const benefits = [
    {
      icon: Home,
      title: "Transform the workplace experience",
      description: "Simplify self-service for reservations, space navigation, and service requests across all digital channels. Modernize workplace services and enhance employee connectivity.",
      color: "from-green-500 to-emerald-500",
      stats: "Modern workplace services"
    },
    {
      icon: BarChart3,
      title: "Plan and optimize spaces",
      description: "Make data-driven decisions on real estate optimization and consolidation. Equip space planners with intuitive tools to create, publish, and manage workplace areas.",
      color: "from-emerald-500 to-teal-500",
      stats: "Data-driven space planning"
    },
    {
      icon: Wrench,
      title: "Streamline facilities management",
      description: "Use a single tool to associate and track workplace maintenance of enterprise assets. Create corrective and preventive maintenance plans across workplace locations.",
      color: "from-teal-500 to-cyan-500",
      stats: "Unified facility management"
    },
    {
      icon: Building2,
      title: "Deliver intelligent building insights",
      description: "Optimize workplace operations with cutting-edge intelligent building integrations, enhance space planning, and streamline facilities management with real-time data.",
      color: "from-cyan-500 to-blue-500",
      stats: "Intelligent building operations"
    }
  ];

  // Key Features (From ServiceNow Workplace Service Delivery content)
  const keyFeatures = [
    {
      icon: Layout,
      title: "Workplace Central",
      description: "Enable workplace managers to monitor and administer activities from a single workspace with comprehensive oversight and management capabilities.",
      capabilities: [
        "Single workspace management",
        "Activity monitoring",
        "Administrative oversight",
        "Centralized workplace control"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users2,
      title: "Workplace Concierge",
      description: "Improve employee collaboration with workplace insights and on-site presence visibility for enhanced workplace coordination and connectivity.",
      capabilities: [
        "Employee presence visibility",
        "Workplace insights",
        "Collaboration enhancement",
        "Real-time coordination"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Map,
      title: "Workplace Space Management",
      description: "Optimize the use of space with planning, insights, and reporting. Provide facilities teams with tools to measure spaces and track utilization.",
      capabilities: [
        "Space optimization planning",
        "Utilization tracking",
        "Reporting and insights",
        "Floor space measurement"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Workplace Case Management",
      description: "Standardize documentation, interactions, and fulfillment of employee inquiries and requests with comprehensive case tracking and resolution.",
      capabilities: [
        "Standardized documentation",
        "Request fulfillment",
        "Case tracking",
        "Employee inquiry management"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Workplace Agent for mobile",
      description: "Enable mobility and improve productivity for workplace agents with an intuitive mobile experience for field service management.",
      capabilities: [
        "Mobile workplace management",
        "Field service productivity",
        "Intuitive mobile interface",
        "Real-time workplace updates"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "Workplace Reservation Management",
      description: "Empower employees to easily make self-service, single-click reservations and add services or requests with comprehensive booking capabilities.",
      capabilities: [
        "Self-service reservations",
        "Single-click booking",
        "Service integration",
        "Request management"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Wrench,
      title: "Workplace Maintenance Management",
      description: "Create and manage preventive maintenance plans across workplace locations with comprehensive asset management and scheduling capabilities.",
      capabilities: [
        "Preventive maintenance planning",
        "Asset management",
        "Location-wide scheduling",
        "Maintenance tracking"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Workplace Indoor Mapping",
      description: "Navigate and find spaces or collaborators using indoor maps and a location directory with comprehensive wayfinding and space discovery.",
      capabilities: [
        "Indoor navigation",
        "Space discovery",
        "Location directory",
        "Wayfinding assistance"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Role-Based Applications
  const roleBasedApps = [
    {
      role: "Head of Workplace Services",
      description: "Provide a workplace experience that meets employees' needs and expectations. Drive digital transformation in the workplace to improve productivity and efficiency.",
      applications: [
        "Workplace Central - Monitor and drive key workplace decisions from single workspace",
        "Workplace Case Management - Standardize interaction and fulfillment of workplace inquiries",
        "Workplace Space Management - Optimize space usage with planning, insights, and reporting"
      ],
      icon: UserCog,
      color: "from-green-500 to-emerald-500"
    },
    {
      role: "Head of Facilities", 
      description: "Drive effective facilities management to minimize costs and enhance operational efficiency. Implement automated maintenance and repair processes.",
      applications: [
        "Workplace Maintenance Management - View corrective and preventive maintenance activities across locations",
        "Workplace Central - Gain insights into maintenance reports for efficient workplace operations",
        "Workplace Lease Administration - Manage workplace assets, track contracts, and optimize space usage"
      ],
      icon: Wrench,
      color: "from-emerald-500 to-teal-500"
    },
    {
      role: "Head of Corporate Real Estate",
      description: "Use space to reduce costs and maximize efficiency. Implement data-driven insights and analytics to assess real estate portfolio performance.",
      applications: [
        "Workplace Space Management - Manage workspaces with insights to optimize floor space and room usage",
        "Workplace Lease Administration - Track leases associated with corporate real estate contracts",
        "Reporting - Identify and automate frequently run reports using built-in tools"
      ],
      icon: Building2,
      color: "from-teal-500 to-cyan-500"
    },
    {
      role: "CIO",
      description: "Drive the adoption of efficient technology solutions to enhance workplace services and facilities management with comprehensive digital transformation.",
      applications: [
        "Reporting - Visualize data using predefined reports and dashboards customized for workflows",
        "Performance Analytics - Track performance to spot improvement areas and identify service bottlenecks",
        "Virtual Agent - Deliver smart interactions using generative AI and automated problem solutions"
      ],
      icon: Cpu,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  // Package Tiers
  const packageTiers = [
    {
      name: "Workplace Service Delivery Professional",
      description: "Essential workplace management capabilities for organizations looking to modernize workplace services and employee experiences",
      features: [
        "Workplace Case Management",
        "Workplace Reservation Management",
        "Workplace Visitor Management",
        "Workplace Central",
        "Workplace Agent for mobile",
        "Workplace Indoor Mapping",
        "Virtual Agent",
        "Performance Analytics",
        "Employee Center"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Professional Package"
    },
    {
      name: "Workplace Service Delivery Enterprise",
      description: "Comprehensive workplace management solution with advanced space optimization, maintenance management, and enterprise-scale capabilities",
      features: [
        "All Professional features",
        "Workplace Space Management", 
        "Workplace Move Management",
        "Workplace Lease Administration",
        "Workplace Maintenance Management",
        "Workplace Concierge",
        "Workplace Connectors",
        "Advanced Analytics",
        "Enterprise Integrations"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Enterprise Package"
    }
  ];

  // Advanced Workplace Capabilities
  const advancedCapabilities = [
    {
      title: "Workplace Move Management",
      description: "Orchestrate individual, mass employee, and asset space relocation in the workplace with comprehensive move planning and execution capabilities.",
      icon: Route,
      benefit: "Efficient space relocation"
    },
    {
      title: "Workplace Lease Administration",
      description: "Track contracts in a centralized workspace with comprehensive lease management, space tracking, and contract optimization capabilities.",
      icon: FileText,
      benefit: "Centralized lease management"
    },
    {
      title: "Workplace Visitor Management",
      description: "Register and welcome guests with a simple, automated arrival and seamless communication process for enhanced visitor experience.",
      icon: Users,
      benefit: "Streamlined visitor experience"
    },
    {
      title: "Workplace Connectors",
      description: "Integrate with workplace occupancy sensors to enhance in-office employee experiences and make smarter workplace decisions with real-time data.",
      icon: Plug,
      benefit: "Smart building integration"
    },
    {
      title: "Health and Safety Management",
      description: "Support employee health and workplace safety with comprehensive health monitoring, safety protocol management, and compliance tracking.",
      icon: Shield,
      benefit: "Enhanced workplace safety"
    },
    {
      title: "Hybrid Workforce Support",
      description: "Enable hybrid workplace with digital experiences for employees and provide modern management for facilities and real estate teams.",
      icon: Globe,
      benefit: "Hybrid work optimization"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Workplace Service Delivery and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Workplace Service Delivery (WSD) transforms how organizations manage and deliver workplace services:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Makes it easy for employees to reserve, navigate, and request service for any space with comprehensive self-service capabilities</li>
            <li>Optimizes workplace operations with cutting-edge intelligent building integrations and real-time data insights</li>
            <li>Enhances space planning and streamlines facilities management through unified platform approach</li>
            <li>Provides employees with a single place to manage workplace tasks like reserving rooms, ordering supplies, and reporting maintenance issues</li>
            <li>Enables workplace teams to plan, design, and optimize workspaces to drive positive employee experiences</li>
          </ul>
          <p className="mt-3 text-sm text-green-600">
            <strong>Built on ServiceNow AI Platform</strong> with intelligent building integrations, AI-powered insights, and comprehensive workplace automation capabilities.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Workplace Space Management and how does it optimize workplace utilization?",
      answer: (
        <div>
          <p className="mb-3">Workplace Space Management provides comprehensive space optimization capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Space Planning and Design:</strong> Workplace administrators and space planners get tools and visibility to plan, design, and optimize workspaces effectively</li>
            <li><strong>Utilization Tracking:</strong> Leverage tools to gain accurate workplace data to efficiently design and manage spaces and improve floor space utilization</li>
            <li><strong>Cost Center Management:</strong> Provide facilities teams with single solution to measure spaces, assign cost centers, and track utilization for cost optimization</li>
            <li><strong>Neighborhood Creation:</strong> Create open and restricted neighborhoods and assign employees, departments, or groups for organized space allocation</li>
            <li><strong>Scenario Planning:</strong> Allow space planners to build multiple space scenarios to assess current allocations and determine optimal seating arrangements</li>
            <li><strong>Real Estate Optimization:</strong> Optimize floor space, meeting room usage, and real estate spend based on utilization data from connected applications</li>
            <li><strong>Indoor Mapping Integration:</strong> Reflect space changes within map view included with Workplace Indoor Mapping for visual space management</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach enables data-driven space decisions and maximizes workplace efficiency through intelligent space utilization.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Workplace Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow WSD provides comprehensive workplace management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-emerald-600 mb-2">Core Workplace Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Workplace Central:</strong> Single workspace for workplace managers to monitor and administer activities</li>
                <li><strong>Workplace Reservation Management:</strong> Self-service, single-click reservations with service integration</li>
                <li><strong>Workplace Indoor Mapping:</strong> Navigate and find spaces using indoor maps and location directory</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Advanced Workplace Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Workplace Space Management:</strong> Optimize space usage with planning, insights, and utilization reporting</li>
                <li><strong>Workplace Maintenance Management:</strong> Create and manage preventive maintenance plans across locations</li>
                <li><strong>Workplace Visitor Management:</strong> Automated guest registration and seamless communication process</li>
                <li><strong>Workplace Concierge:</strong> Employee collaboration with workplace insights and presence visibility</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How do role-based applications work in ServiceNow Workplace Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow WSD provides role-based applications tailored to different workplace professionals and their specific responsibilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Head of Workplace Services:</strong> Workplace Central for key decisions, Case Management for inquiry standardization, and Space Management for optimization</li>
            <li><strong>Head of Facilities:</strong> Maintenance Management for preventive activities, Central for maintenance insights, and Lease Administration for asset management</li>
            <li><strong>Head of Corporate Real Estate:</strong> Space Management for floor optimization, Lease Administration for contract tracking, and Reporting for automated analytics</li>
            <li><strong>CIO:</strong> Reporting for data visualization, Performance Analytics for service bottleneck identification, and Virtual Agent for AI-powered interactions</li>
          </ul>
          <p className="mt-3">
            Each role receives tailored applications, dashboards, and workflows optimized for their specific workplace management responsibilities and decision-making requirements.
          </p>
        </div>
      )
    },

    {
      question: "What package tiers are available for ServiceNow Workplace Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow WSD offers two main package tiers to meet different organizational workplace needs:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Workplace Service Delivery Professional:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Workplace Case Management, Reservation Management, Visitor Management, and Workplace Central</li>
                <li>Workplace Agent for mobile, Indoor Mapping, Virtual Agent, and Performance Analytics</li>
                <li>Essential capabilities for organizations modernizing workplace services and employee experiences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Workplace Service Delivery Enterprise:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Professional features plus Workplace Space Management and Move Management</li>
                <li>Workplace Lease Administration, Maintenance Management, Concierge, and Workplace Connectors</li>
                <li>Comprehensive solution with advanced space optimization and enterprise-scale workplace management</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-green-600">
            <strong>Note:</strong> Employee Center is available across both packages with flexible deployment options for unified workplace service delivery.
          </p>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Workplace Service Delivery implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, workplace complexity, and facility management requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>WSD Professional Implementation:</strong> Starting from $320K - includes reservation management, visitor management, and indoor mapping for mid-size organizations</li>
            <li><strong>WSD Enterprise Implementation:</strong> $480K-$720K - includes space management, maintenance management, and advanced workplace optimization for large enterprises</li>
            <li><strong>WSD Complete Suite:</strong> $850K+ - comprehensive solution with lease administration, workplace connectors, and enterprise-scale facility management</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-15 months through workplace efficiency improvements (35%), facility cost reduction (30%), and space optimization (25%). Self-service reservations can reduce administrative workload by 45%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Workplace ROI Calculator", url: "/workplace-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Workplace Service Delivery?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on workplace program maturity and facility management scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>WSD Professional:</strong> 10-16 weeks for reservation management, visitor management, indoor mapping, and core workplace service workflows</li>
            <li><strong>WSD Enterprise:</strong> 16-22 weeks including space management, maintenance management, and comprehensive workplace optimization</li>
            <li><strong>WSD Complete Suite:</strong> 22-28 weeks for complete solution with lease administration, workplace connectors, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Workplace Assessment & Space Analysis (2-3 weeks) → Core WSD Platform & Reservation Configuration (4-6 weeks) → Space Management & Indoor Mapping Setup (4-6 weeks) → Advanced Features & Maintenance Integration (3-5 weeks) → Go-Live & Workplace Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Workplace Service Delivery integrate with existing facility management systems and building technologies?",
      answer: (
        <div>
          <p className="mb-3">WSD provides extensive integration capabilities for comprehensive workplace ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Building Management Systems:</strong> Integration with HVAC, lighting, and environmental controls for intelligent building management</li>
            <li><strong>Occupancy Sensors:</strong> Workplace Connectors integrate with occupancy sensors for real-time space utilization data</li>
            <li><strong>Access Control Systems:</strong> Integration with badge readers and security systems for visitor management and space access</li>
            <li><strong>Calendar Applications:</strong> Integration with Outlook, Google Calendar, and other scheduling platforms for reservation synchronization</li>
            <li><strong>Facility Management Tools:</strong> Integration with CMMS systems and maintenance platforms for comprehensive asset management</li>
            <li><strong>Real Estate Systems:</strong> Integration with lease management and property management systems for comprehensive real estate oversight</li>
            <li><strong>Communication Platforms:</strong> Integration with Microsoft Teams, Slack, and other collaboration tools for workplace coordination</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified workplace service delivery while maintaining existing facility technology investments and operational workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on Workplace Service Delivery success stories)
  const caseStudies = [
    {
      title: "Accenture Transforms Workplace Experience with Comprehensive WSD Implementation",
      client: "",
      industry: "Professional Services",
      challenge: "Global professional services requiring modern workplace experience with hybrid work support, space optimization, and comprehensive workplace service delivery across multiple locations",
      solution: "ServiceNow Workplace Service Delivery with space management, reservation systems, and professional services workplace optimization for enhanced employee experience",
      results: [
        { metric: "Workplace", description: "Experience transformed" },
        { metric: "Hybrid", description: "Work enabled" },
        { metric: "Global", description: "Locations optimized" },
        { metric: "Client", description: "Services enhanced" }
      ],
      testimonial: "The future of the workplace is a hot topic. With the help of WSD not only can we create the right formula for our own business, but also recommend how WSD can help clients achieve their objectives related to the office experience.",
      executive: "Lisette Smyrnios, Managing Director, Global Workplace",
      logo: "/images/clients/accenture-logo.png"
    },
    {
      title: "NBA Reduces Costs and Transforms Facilities Management with Workplace Service Delivery",
      client: "",
      industry: "Sports & Entertainment",
      challenge: "Sports organization requiring cost reduction and facilities management transformation with comprehensive venue management and enhanced operational efficiency",
      solution: "ServiceNow Workplace Service Delivery with facilities management optimization, maintenance workflows, and sports venue-specific workplace management",
      results: [
        { metric: "Cost", description: "Reduction achieved" },
        { metric: "Facilities", description: "Management transformed" },
        { metric: "Sports", description: "Venues optimized" },
        { metric: "Operational", description: "Efficiency improved" }
      ],
      testimonial: "ServiceNow Workplace Service Delivery enabled us to reduce costs and transform our facilities management, enhancing operational efficiency across our venues.",
      executive: "Facilities Management Director",
      logo: "/images/clients/nba-logo.png"
    },
    {
      title: "KPMG UK Optimizes Processes with Office Concierge for 265,000 Colleagues",
      client: "",
      industry: "Professional Services",
      challenge: "Large-scale professional services requiring process optimization with comprehensive workplace concierge services for massive workforce across UK operations",
      solution: "ServiceNow Workplace Service Delivery with Office Concierge, process optimization, and professional services workplace management for enhanced colleague experience",
      results: [
        { metric: "265,000", description: "Colleagues empowered" },
        { metric: "Office", description: "Concierge deployed" },
        { metric: "Process", description: "Optimization achieved" },
        { metric: "UK", description: "Operations enhanced" }
      ],
      testimonial: "ServiceNow Workplace Service Delivery with Office Concierge optimized our processes, empowering our 265,000 colleagues with enhanced workplace services.",
      executive: "Head of Workplace Services",
      logo: "/images/clients/kpmg-uk-logo.png"
    },
    {
      title: "HJF Enhances Employee Workplace Experiences with Digital Workflows",
      client: "",
      industry: "Healthcare Research",
      challenge: "Healthcare research organization requiring enhanced employee workplace experiences with digital workflow automation for research facility management",
      solution: "ServiceNow Workplace Service Delivery with digital workflows, research facility optimization, and healthcare-specific workplace service enhancement",
      results: [
        { metric: "Employee", description: "Experience enhanced" },
        { metric: "Digital", description: "Workflows deployed" },
        { metric: "Healthcare", description: "Research optimized" },
        { metric: "Facility", description: "Management improved" }
      ],
      testimonial: "ServiceNow Workplace Service Delivery enhanced our employee workplace experiences through comprehensive digital workflows and research facility optimization.",
      executive: "Chief Operations Officer",
      logo: "/images/clients/hjf-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Workplace Service Delivery - ServiceNow WSD Portfolio | ifBash</title>
        <meta
          name="description"
          content="Our facility management software, ServiceNow Workplace Service Delivery (WSD), automates and simplifies your tasks for a smooth-running workplace."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Workplace Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Workplace Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Smart Buildings
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Workplace Experience
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 font-semibold">
                    Workplace Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                      Delivery
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-emerald-300">Make it easy for employees to reserve, navigate, and request service</span> for any space.{' '}
                  <span className="font-semibold text-teal-300">Optimize workplace operations with intelligent building integrations</span> and streamlined facilities management.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Workplace Implementation
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

                {/* Facility Management Badge */}
                <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-sm rounded-xl p-4 border border-green-300/20">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-green-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Facility Management Software</div>
                      <div className="text-sm text-green-200">Space optimization, reservations, and intelligent building automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Workplace Service Delivery Platform"
                      className="w-full h-full object-cover"
                      gradient="from-green-600 to-emerald-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Space</div>
                      <div className="text-xs text-green-200">Management</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Indoor</div>
                      <div className="text-xs text-emerald-200">Mapping</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Building2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Map className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                  Transform Workplace
                </span>
                <br />
                <span className="text-gray-800">
                  Service Experience
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Deliver modern workplace services and intelligent building insights with comprehensive space optimization and streamlined facility management.
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

        {/* Key Features Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Key Workplace Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete WSD Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive workplace service delivery features from space management to indoor mapping with intelligent building integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
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

        {/* Role-Based Applications Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  Workplace Professional Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Tailored applications for different workplace roles, from facilities management to corporate real estate and technology leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Package Tiers Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  WSD Package Tiers
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Workplace Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the Workplace Service Delivery package that meets your business needs, from professional workplace services to enterprise-scale facility management.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {packageTiers.map((tier, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {tier.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Package Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Package Type</div>
                      <div className="text-blue-600 text-lg font-bold">{tier.price}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Workplace Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced workplace capabilities including move management, lease administration, and comprehensive hybrid workforce support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Key Benefit</div>
                      <div className="text-blue-600 text-lg font-bold">{capability.benefit}</div>
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
                  About Workplace Service Delivery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Workplace Service Delivery implementation, space management, and facility optimization.
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Workplace Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their workplace service delivery with comprehensive facility management and space optimization solutions.
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
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-200 border border-indigo-400/30">
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

                            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-4 border-l-4 border-purple-400">
                              <Quote className="h-6 w-6 text-purple-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-purple-300">— {study.executive}</p>
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Workplace Service Delivery?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive workplace service delivery with intelligent building automation and facility optimization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Workplace Experts
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
                    <p className="text-white text-sm font-medium">workplace-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-blue-200 mx-auto mb-2" />
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
