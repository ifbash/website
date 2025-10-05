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
  UserIcon
} from "lucide-react";

export default function HRServiceDeliveryPage() {
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
    "name": "HR Service Delivery - ServiceNow HRSD Implementation",
    "description": "Streamline HR workflows, boost enterprise HR productivity, and improve employee satisfaction with ServiceNow HR Service Delivery, our HR management software.",
    "applicationCategory": "HR Service Delivery"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow HR Service Delivery and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow HRSD improves productivity by making it easy for employees to get the help and guidance they need, all in one place. It reduces costs with AI-driven self-service and streamlined case resolution while optimizing manual processes from hire to retire."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Employee Journey Management and how does it enhance employee experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employee Journey Management builds complete workflows to support employees through complex moments with enterprise-wide capabilities connecting disparate processes and siloed systems with no coding required."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow HRSD content)
  const benefits = [
    {
      icon: Zap,
      title: "Simplify access to services",
      description: "Scalable services and support for employees happens when you transform complex business processes. Focus on improving operational efficiency using simplified workflows.",
      color: "from-blue-500 to-cyan-500",
      stats: "Streamlined service access"
    },
    {
      icon: Globe,
      title: "Engage employees anywhere",
      description: "Keep pace with employees who need information and services fast—sometimes on the go. Streamline their self-service with embedded experiences across any digital channel.",
      color: "from-cyan-500 to-teal-500",
      stats: "Multi-channel engagement"
    },
    {
      icon: Heart,
      title: "Improve employee service experience",
      description: "Enable self-service and make it easy for deskless workers to access employee resources. Provide tools and information they need to work efficiently anywhere.",
      color: "from-teal-500 to-green-500",
      stats: "Enhanced employee experience"
    },
    {
      icon: TrendingUp,
      title: "Deliver intelligent self-service experiences",
      description: "Reduce case volumes and help employees get results faster with AI-driven automation and intelligent service delivery across the enterprise.",
      color: "from-green-500 to-emerald-500",
      stats: "AI-powered productivity"
    }
  ];

  // Key Features (From ServiceNow HRSD content)
  const keyFeatures = [
    {
      icon: Bot,
      title: "Now Assist for HRSD",
      description: "Accelerate productivity with generative AI experiences on the ServiceNow AI Platform with intelligent case summarization and resolution notes.",
      capabilities: [
        "Generative AI case assistance",
        "Intelligent case summarization",
        "Automated resolution notes",
        "AI-powered productivity"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserIcon,
      title: "Employee Center",
      description: "Provide a single, unified portal for service delivery across the enterprise with multi-departmental access and personalized experiences.",
      capabilities: [
        "Unified service portal",
        "Multi-departmental access",
        "Personalized employee experience",
        "Cross-enterprise service delivery"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Route,
      title: "Employee Journey Management",
      description: "Build complete workflows to support employees through complex moments with enterprise-wide capabilities and no-code workflow creation.",
      capabilities: [
        "Complete workflow automation",
        "No-code journey creation",
        "Complex moment support",
        "Enterprise-wide connectivity"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Issue Auto Resolution",
      description: "Use AI-powered automation to solve routine employee requests quickly with intelligent routing and automated problem resolution.",
      capabilities: [
        "AI-powered issue resolution",
        "Automated routine requests",
        "Intelligent case routing",
        "Rapid problem solving"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Case and Knowledge Management",
      description: "Standardize documentation, interactions, and fulfillment of employee requests with comprehensive knowledge base and case tracking.",
      capabilities: [
        "Standardized documentation",
        "Case lifecycle management",
        "Knowledge base integration",
        "Request fulfillment tracking"
      ],
      color: "from-emerald-500 to-blue-600"
    },
    {
      icon: Layout,
      title: "HR Agent Workspace",
      description: "Connect HR teams to the information they need fast, in a personalized workspace with comprehensive agent tools and real-time insights.",
      capabilities: [
        "Personalized agent interface",
        "Real-time information access",
        "Integrated HR tools",
        "Agent productivity enhancement"
      ],
      color: "from-blue-600 to-indigo-500"
    },
    {
      icon: MessageCircle,
      title: "Virtual Agent",
      description: "Resolve issues fast with an intelligent chatbot that understands simple, human language with 24/7 automated support capabilities.",
      capabilities: [
        "Natural language processing",
        "24/7 automated support",
        "Intelligent conversation flow",
        "Context-aware responses"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Anticipate trends, prioritize resources, and continuously improve with real-time analytics and workforce optimization insights.",
      capabilities: [
        "Real-time HR analytics",
        "Trend prediction",
        "Resource optimization",
        "Performance measurement"
      ],
      color: "from-purple-500 to-violet-500"
    }
  ];

  // Role-Based Applications
  const roleBasedApps = [
    {
      role: "Chief HR Officer",
      description: "Inspire and execute HR strategies that help boost workforce performance and deliver a superior employee experience. Set the agenda for workplace culture.",
      applications: [
        "Employee Center - Unified portal for enhanced employee engagement",
        "Employee Journey Management - Complete workflow automation across enterprise",
        "ServiceNow AI Platform - Digitize business and accelerate innovation at scale"
      ],
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "VP of HR", 
      description: "Partner with internal organizations to understand employees' needs and expectations. Drive digital transformation for HR to improve productivity and retention.",
      applications: [
        "Employee Center - Track impact of employee experience initiatives",
        "Employee Journey Management - Empower managers and drive hybrid workforce productivity",
        "Case and Knowledge Management - Standardize documentation and request fulfillment"
      ],
      icon: TrendingUp,
      color: "from-cyan-500 to-teal-500"
    },
    {
      role: "Director of HR Operations",
      description: "Deliver end-to-end HR services economically at scale. Standardize and automate processes for greater efficiency and business value.",
      applications: [
        "Workspaces - Improve agent efficiency with single workspace for resolution facilitation",
        "Case and Knowledge Management - Gain visibility into employee inquiries for service improvements",
        "Process Mining - Strengthen efficiencies by analyzing and improving HR workflow processes"
      ],
      icon: Cog,
      color: "from-teal-500 to-green-500"
    },
    {
      role: "Head of Employee Experience",
      description: "Set overall employee engagement strategy. Work with cross-functional teams to foster environment where employees feel valued and connected.",
      applications: [
        "Employee Center - Unified portal for easy help from HR, IT, facilities, and other departments",
        "Employee Journey Management - Capture feedback, gain insight, and improve employee experience",
        "Virtual Agent - Resolve issues faster and support employees 24/7 with intelligent chatbots"
      ],
      icon: Heart,
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Package Tiers
  const packageTiers = [
    {
      name: "HRSD Professional",
      description: "For teams and companies that need to manage HRSD and deliver effectively with essential HR service capabilities",
      features: [
        "Now Assist for HRSD",
        "Case and Knowledge Management",
        "Now Mobile",
        "HR Agent Workspace",
        "Employee Relations",
        "Employee Center",
        "Performance Analytics",
        "Virtual Agent",
        "Predictive Intelligence",
        "Manager Hub"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Professional Package"
    },
    {
      name: "HRSD Enterprise",
      description: "For strategic partners looking for comprehensive HRSD experience to help them meet enterprise-scale goals and requirements",
      features: [
        "All Professional features",
        "Employee Journey Management", 
        "Alumni Service Center",
        "Workforce Optimization",
        "Employee Document Management",
        "Universal Request",
        "Process Mining",
        "Advanced Analytics",
        "Enterprise Integrations"
      ],
      color: "from-cyan-500 to-teal-500",
      price: "Enterprise Package"
    }
  ];

  // Advanced HR Capabilities
  const advancedCapabilities = [
    {
      title: "Alumni Service Center",
      description: "Stay connected and engaged with your former employees through dedicated alumni portal with networking and re-engagement capabilities.",
      icon: GraduationCap,
      benefit: "Alumni engagement"
    },
    {
      title: "Workforce Optimization",
      description: "Manage teams effectively with real-time visibility into agent scheduling and performance with comprehensive workforce analytics.",
      icon: Users2,
      benefit: "Team optimization"
    },
    {
      title: "Employee Document Management",
      description: "Provide a secure, unified view of employee documents from hire to retire with comprehensive document lifecycle management.",
      icon: FileText,
      benefit: "Document centralization"
    },
    {
      title: "Process Mining for HR",
      description: "Improve outcomes by optimizing process flows to streamline work with data-driven insights into HR process efficiency.",
      icon: TrendingUp,
      benefit: "Process optimization"
    },
    {
      title: "Predictive Intelligence",
      description: "Simplify and accelerate everyday work with built-in machine learning for case prioritization, routing, and resolution prediction.",
      icon: Brain,
      benefit: "Predictive automation"
    },
    {
      title: "Universal Request",
      description: "Provide a unified employee service experience and improve agent collaboration across departments with streamlined request management.",
      icon: Workflow,
      benefit: "Unified service experience"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow HR Service Delivery and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow HR Service Delivery (HRSD) transforms how organizations deliver HR services to employees:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Improves productivity by making it easy for employees to get the help and guidance they need, all in one place</li>
            <li>Reduces costs with AI-driven self-service and streamlined case resolution from hire to retire</li>
            <li>Optimizes manual and inefficient processes through employee self-service, digitization, and AI automation</li>
            <li>Replaces manual and siloed processes with cross-functional workflows connecting HR, IT, Legal, and other departments</li>
            <li>Provides a single, unified portal for service delivery across the enterprise with personalized employee experiences</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> with Now Assist for HRSD providing generative AI experiences and intelligent automation capabilities.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Employee Journey Management and how does it enhance employee experience?",
      answer: (
        <div>
          <p className="mb-3">Employee Journey Management provides comprehensive employee lifecycle support:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Complete Workflow Automation:</strong> Build complete workflows that span the enterprise, connecting disparate processes and siloed systems</li>
            <li><strong>No-Code Journey Creation:</strong> Managers can personalize workflows with no-code tools to fit unique needs of departments, teams, and individuals</li>
            <li><strong>Complex Moment Support:</strong> Support employees through career journey including onboarding, transitions, relocations, and offboarding</li>
            <li><strong>Manager Empowerment:</strong> Help managers be more effective and support employees throughout their career journeys with personalized guidance</li>
            <li><strong>Real-Time Insights:</strong> Journey insights and progress tracking with attention alerts for overdue tasks and approvals</li>
            <li><strong>Cross-Department Integration:</strong> Connects HR, IT, Legal, and Workplace Services in unified employee experience</li>
            <li><strong>Personalized Content:</strong> Deliver employee-centric learning experiences in the flow of work with contextual content</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach creates great employee experiences in moments that matter with automated processes and accelerated time-to-value.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow HRSD?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow HRSD provides comprehensive HR service delivery capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Core HR Service Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Employee Center:</strong> Unified portal for service delivery across enterprise with multi-departmental access</li>
                <li><strong>Case and Knowledge Management:</strong> Standardized documentation and fulfillment of employee requests</li>
                <li><strong>Virtual Agent:</strong> 24/7 intelligent chatbot support with natural language processing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">AI-Powered Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Now Assist for HRSD:</strong> Generative AI experiences with case summarization and resolution automation</li>
                <li><strong>Issue Auto Resolution:</strong> AI-powered automation for routine employee requests</li>
                <li><strong>Predictive Intelligence:</strong> Machine learning for case prioritization and resolution prediction</li>
                <li><strong>Performance Analytics:</strong> Real-time analytics with trend prediction and resource optimization</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How do role-based applications work in ServiceNow HRSD?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow HRSD provides role-based applications tailored to different HR professionals and their specific needs:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Chief HR Officer:</strong> Strategic HR execution with Employee Center, Employee Journey Management, and AI Platform for workforce performance</li>
            <li><strong>VP of HR:</strong> Digital transformation leadership with employee experience tracking, hybrid workforce empowerment, and productivity optimization</li>
            <li><strong>Director of HR Operations:</strong> Operational efficiency with agent workspaces, service improvement insights, and process mining for workflow optimization</li>
            <li><strong>Head of Employee Experience:</strong> Employee engagement strategy with unified portal access, feedback capture, and 24/7 intelligent support</li>
          </ul>
          <p className="mt-3">
            Each role receives tailored applications, dashboards, and workflows optimized for their specific responsibilities and decision-making requirements.
          </p>
        </div>
      )
    },

    {
      question: "What package tiers are available for ServiceNow HRSD?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow HRSD offers two main package tiers to meet different organizational needs:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">HRSD Professional:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Now Assist for HRSD, Case and Knowledge Management, HR Agent Workspace</li>
                <li>Employee Center, Virtual Agent, Performance Analytics, Predictive Intelligence</li>
                <li>Essential capabilities for teams managing HRSD and effective service delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">HRSD Enterprise:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Professional features plus Employee Journey Management and Alumni Service Center</li>
                <li>Workforce Optimization, Employee Document Management, Universal Request</li>
                <li>Comprehensive HRSD experience for strategic partners meeting enterprise-scale goals</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-green-600">
            <strong>Note:</strong> Employee Center and Manager Hub are available to license separately with flexible deployment options.
          </p>
        </div>
      )
    },

    {
      question: "How much does ServiceNow HR Service Delivery implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, HR complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HRSD Professional Implementation:</strong> Starting from $180K - includes Employee Center, case management, and virtual agent for mid-size organizations</li>
            <li><strong>HRSD Enterprise Implementation:</strong> $300K-$480K - includes employee journey management, workforce optimization, and advanced analytics for large enterprises</li>
            <li><strong>HRSD Complete Suite:</strong> $550K+ - comprehensive solution with Now Assist, alumni service center, and enterprise-scale HR automation</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-12 months through HR case deflection (40%), employee satisfaction improvements (35%), and operational cost reduction (30%). Employee self-service can reduce HR workload by 50%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "HRSD ROI Calculator", url: "/hrsd-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow HRSD?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on HR program maturity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HRSD Professional:</strong> 8-14 weeks for Employee Center, case management, virtual agent, and core HR service delivery workflows</li>
            <li><strong>HRSD Enterprise:</strong> 14-20 weeks including employee journey management, workforce optimization, and advanced HR automation</li>
            <li><strong>HRSD Complete Suite:</strong> 20-26 weeks for comprehensive solution with Now Assist, alumni services, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: HR Service Assessment & Employee Journey Analysis (2-3 weeks) → Core HRSD Platform & Employee Center Configuration (4-6 weeks) → Case Management & Virtual Agent Setup (3-5 weeks) → Advanced Features & Analytics Integration (3-5 weeks) → Go-Live & HR Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does HRSD integrate with existing HR systems and third-party applications?",
      answer: (
        <div>
          <p className="mb-3">HRSD provides extensive integration capabilities for comprehensive HR ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HCM Integration:</strong> Oracle HCM, SAP SuccessFactors integration for employee data synchronization and unified experiences</li>
            <li><strong>Authentication Systems:</strong> Integration with authentication software and identity management platforms</li>
            <li><strong>Document Management:</strong> Adobe Sign integration for electronic signatures and document workflow automation</li>
            <li><strong>Productivity Tools:</strong> Integration with Microsoft 365, Google Workspace, and collaboration platforms</li>
            <li><strong>Learning Management Systems:</strong> Integration with training platforms for employee development workflows</li>
            <li><strong>Payroll Systems:</strong> Connection with payroll platforms for comprehensive employee lifecycle management</li>
            <li><strong>Communication Tools:</strong> Integration with Slack, Microsoft Teams, and other communication platforms</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified HR service delivery while maintaining existing HR technology investments and operational workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on HRSD success stories)
  const caseStudies = [
    {
      title: "Ryder Transforms HR Processes with Comprehensive HRSD Implementation",
      client: "Ryder System Inc.",
      industry: "Transportation & Logistics",
      challenge: "Complex transportation operations requiring streamlined HR processes with improved employee service delivery and operational efficiency across global workforce",
      solution: "ServiceNow HRSD with Employee Center, case management automation, and comprehensive HR service delivery for transportation and logistics operations",
      results: [
        { metric: "Processes", description: "Easier and organized" },
        { metric: "3 Years", description: "Successful implementation" },
        { metric: "HR", description: "Operations streamlined" },
        { metric: "Employee", description: "Services centralized" }
      ],
      testimonial: "Three years into using HR Service Delivery, we can definitely attest that it makes processes easier and more organized.",
      executive: "Galyna Kruglov, Group Director of Employee Services Operations",
      logo: "/images/clients/ryder-logo.png"
    },
    {
      title: "Siemens GBS Enriches Employee Experience with Intuitive Connected Workflows",
      client: "Siemens Global Business Services",
      industry: "Industrial Technology",
      challenge: "Global business services requiring enriched employee experience with intuitive, connected workflows across multiple business units and geographical locations",
      solution: "ServiceNow HRSD with Employee Journey Management, connected workflows, and comprehensive employee experience optimization for industrial operations",
      results: [
        { metric: "Employee", description: "Experience enriched" },
        { metric: "Intuitive", description: "Workflows deployed" },
        { metric: "Connected", description: "Systems integrated" },
        { metric: "Global", description: "Services unified" }
      ],
      testimonial: "ServiceNow HRSD enabled us to enrich employee experience with intuitive, connected workflows across our global business services operations.",
      executive: "HR Director",
      logo: "/images/clients/siemens-logo.png"
    },
    {
      title: "Expedia Group Supports Complete Employee Journey with Unified Portal",
      client: "Expedia Group",
      industry: "Travel Technology",
      challenge: "Travel technology operations requiring complete employee journey support with unified portal for seamless employee experience across diverse workforce",
      solution: "ServiceNow HRSD with unified employee portal, comprehensive journey management, and travel industry-specific HR service delivery optimization",
      results: [
        { metric: "Complete", description: "Employee journey" },
        { metric: "Unified", description: "Portal deployed" },
        { metric: "Travel", description: "Technology optimized" },
        { metric: "Employee", description: "Experience enhanced" }
      ],
      testimonial: "ServiceNow HRSD provided unified portal support for our complete employee journey, enhancing experience across our diverse travel technology workforce.",
      executive: "VP of Employee Experience",
      logo: "/images/clients/expedia-logo.png"
    },
    {
      title: "Mondelēz International Achieves 76% Self-Service Increase with HRSD Enhancement",
      client: "Mondelēz International",
      industry: "Consumer Goods",
      challenge: "Global consumer goods operations requiring enhanced employee experience with significant self-service improvements and operational efficiency across manufacturing",
      solution: "ServiceNow HRSD with self-service optimization, employee experience enhancement, and consumer goods industry-specific HR automation",
      results: [
        { metric: "76%", description: "Self-service increase" },
        { metric: "Employee", description: "Experience enhanced" },
        { metric: "Consumer Goods", description: "Operations optimized" },
        { metric: "Manufacturing", description: "Workforce supported" }
      ],
      testimonial: "ServiceNow HRSD enhancement resulted in a remarkable 76% increase in self-service, significantly improving our employee experience across global operations.",
      executive: "Chief Human Resources Officer",
      logo: "/images/clients/mondelez-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>HR Service Delivery - ServiceNow HRSD Portfolio | ifBash</title>
        <meta
          name="description"
          content="Streamline HR workflows, boost enterprise HR productivity, and improve employee satisfaction with ServiceNow HR Service Delivery, our HR management software."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss HRSD Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss HRSD Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-cyan-600 hover:to-teal-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered HRSD
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-green-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-green-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Employee Experience
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-semibold">
                    HR Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 font-semibold">
                      Delivery
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-cyan-300">Improve productivity by making it easy for employees</span> to get the help and guidance they need, all in one place.{' '}
                  <span className="font-semibold text-teal-300">Reduce costs with AI-driven self-service</span> and streamlined case resolution.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get HRSD Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-green-400 group-hover:text-green-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* HR Platform Badge */}
                <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 backdrop-blur-sm rounded-xl p-4 border border-blue-300/20">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-blue-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete HR Service Platform</div>
                      <div className="text-sm text-blue-200">From hire to retire with AI-powered automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow HR Service Delivery Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-cyan-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Employee</div>
                      <div className="text-xs text-blue-200">Center</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Journey</div>
                      <div className="text-xs text-cyan-200">Management</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <UserIcon className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Route className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Transform HR Service
                </span>
                <br />
                <span className="text-gray-800">
                  Delivery Experience
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Deliver intelligent self-service experiences to reduce case volumes and help employees get results faster with comprehensive HR automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
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
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-green-600">
                  Key HRSD Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete HR Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive HR service delivery features from AI-powered assistance to employee journey management with intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  HR Professional Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Tailored applications for different HR roles, from strategic leadership to operational excellence and employee experience optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600">
                  HRSD Package Tiers
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable HR Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the HRSD package that meets your business needs, from professional HR service delivery to enterprise-scale employee experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8">
              {packageTiers.map((tier, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-700 mb-1">Package Type</div>
                      <div className="text-green-600 text-lg font-bold">{tier.price}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise HR Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced HR capabilities including alumni services, workforce optimization, and comprehensive employee document management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Key Benefit</div>
                      <div className="text-emerald-600 text-lg font-bold">{capability.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About HR Service Delivery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about HRSD implementation, employee experience optimization, and HR service transformation.
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
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real HRSD Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their HR service delivery with AI-powered HRSD solutions and employee experience optimization.
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
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/30">
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform HR Service Delivery?
                </h2>
                <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive HR service delivery with employee experience optimization and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact HRSD Experts
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
                    <p className="text-white text-sm font-medium">hrsd-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-purple-200 mx-auto mb-2" />
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
