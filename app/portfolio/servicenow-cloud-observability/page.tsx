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
  AlertCircle,
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
  Link
} from "lucide-react";

export default function ServiceObservabilityPage() {
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
    "name": "Service Observability - ServiceNow Observability Implementation",
    "description": "Break down silos to resolve issues quickly across teams. Integrate observability capabilities into your existing workflows for alerting and incident management.",
    "applicationCategory": "Service Observability"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Service Observability and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Service Observability helps break down silos to resolve issues quickly across teams. It integrates observability capabilities into existing workflows for alerting and incident management, enabling data-driven decisions based on business impact."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main features of Service Observability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service Observability includes Critical signal aggregation, Unified view into performance, Extensible data integration, and Service-oriented view to organize metrics across application, compute infrastructure, and databases."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: TrendingUp,
      title: "Improve service availability",
      description: "Gain an end-to-end view of the performance of business-critical services to bridge IT and business.",
      color: "from-teal-500 to-cyan-500",
      stats: "99.9% service availability"
    },
    {
      icon: Link,
      title: "Eliminate tool silos",
      description: "Maximize your existing technology investments. Consolidate data from multiple toolsets into one platform for faster root cause analysis.",
      color: "from-cyan-500 to-blue-500",
      stats: "80% faster root cause analysis"
    },
    {
      icon: Timer,
      title: "Reduce MTTR",
      description: "Calculate blast radius and reduce mean time to resolution (MTTR) by overlaying changes of your application to underlying infrastructure.",
      color: "from-blue-500 to-indigo-500",
      stats: "60% reduction in MTTR"
    },
    {
      icon: Target,
      title: "Tie innovation to performance",
      description: "Adopt service level objectives (SLOs) across your organization so security, application, and operations teams can communicate effectively.",
      color: "from-indigo-500 to-purple-500",
      stats: "SLO-driven innovation"
    }
  ];

  // Features (Exact from ServiceNow)
  const features = [
    {
      icon: Layers2,
      title: "Critical signal aggregation",
      description: "Centralize critical signals and unify workflows to enhance collaboration, agility, and reliability.",
      capabilities: [
        "Centralized critical signal collection",
        "Unified workflow enhancement",
        "Collaboration improvement",
        "Reliability and agility boost"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: BarChart4,
      title: "Unified view into performance",
      description: "Actionable dashboards and observability tabs help make investigations and resolutions faster.",
      capabilities: [
        "Actionable performance dashboards",
        "Observability tabs for faster investigation",
        "Resolution acceleration",
        "Performance visualization"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Extensible data integration",
      description: "Centralize data from existing monitoring tools, cloud providers, ServiceNow agents, and third-party tools for a full-stack view of service health.",
      capabilities: [
        "Monitoring tool integration",
        "Cloud provider data centralization",
        "ServiceNow agent connectivity",
        "Third-party tool integration"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Network,
      title: "Service-oriented view",
      description: "Organize metrics across application, compute infrastructure, and databases, to enable faster root cause analysis without fragmented data.",
      capabilities: [
        "Application metrics organization",
        "Infrastructure visibility",
        "Database performance tracking",
        "Fragmentation elimination"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Related Applications (From ServiceNow)
  const relatedApps = [
    {
      icon: Bot,
      title: "Now Assist for IT Operations",
      description: "Prevent issues and triage alerts quickly, with greater accuracy, using generative AI.",
      details: [
        "Generative AI-powered assistance",
        "Issue prevention capabilities",
        "Alert triage automation",
        "Accuracy improvement"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MonitorSpeaker,
      title: "Event Management",
      description: "Reduce event floods from monitoring tools and gain insight into business service health.",
      details: [
        "Event flood reduction",
        "Monitoring tool integration",
        "Business service insights",
        "Health monitoring"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Predictive AIOps",
      description: "Predict and prevent service outages before they impact end users.",
      details: [
        "Service outage prediction",
        "Proactive prevention",
        "End-user impact mitigation",
        "AI-powered insights"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Service Reliability Management",
      description: "Empower IT teams to maintain and continuously improve the reliability of their services.",
      details: [
        "IT team empowerment",
        "Service reliability maintenance",
        "Continuous improvement",
        "Reliability optimization"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Observability vs Monitoring (Educational content)
  const observabilityFeatures = [
    {
      icon: Eye,
      title: "Full-Stack Visibility",
      description: "Complete visibility across applications, infrastructure, and user experience with correlated data.",
      benefit: "Comprehensive understanding of system behavior"
    },
    {
      icon: Workflow,
      title: "Contextual Insights",
      description: "Rich context about system state, dependencies, and business impact for informed decision-making.",
      benefit: "Faster problem identification and resolution"
    },
    {
      icon: BarChart3,
      title: "Proactive Detection",
      description: "Identify potential issues before they impact users through intelligent pattern recognition.",
      benefit: "Reduced downtime and improved user experience"
    },
    {
      icon: Users2,
      title: "Cross-Team Collaboration",
      description: "Break down silos between development, operations, and business teams with shared insights.",
      benefit: "Enhanced collaboration and faster resolution"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Service Observability and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Service Observability helps organizations break down silos to resolve issues quickly across teams. It provides:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Integration of observability capabilities into existing workflows for alerting and incident management</li>
            <li>Data-driven decision making based on business impact</li>
            <li>End-to-end view of business-critical service performance</li>
            <li>Consolidated data from multiple toolsets for faster root cause analysis</li>
            <li>Service level objectives (SLOs) adoption across organizations</li>
          </ul>
          <p className="mt-3 text-sm text-teal-600">
            <strong>Available with IT Operations Management</strong> for comprehensive AIOps capabilities.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main features of Service Observability?",
      answer: (
        <div>
          <p className="mb-3">Service Observability includes four core features:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Critical Signal Aggregation:</strong> Centralize critical signals and unify workflows to enhance collaboration, agility, and reliability</li>
            <li><strong>Unified View into Performance:</strong> Actionable dashboards and observability tabs for faster investigations and resolutions</li>
            <li><strong>Extensible Data Integration:</strong> Centralize data from monitoring tools, cloud providers, ServiceNow agents, and third-party tools</li>
            <li><strong>Service-Oriented View:</strong> Organize metrics across application, compute infrastructure, and databases for faster root cause analysis</li>
          </ul>
          <p className="mt-3">
            All features work together to provide <strong>full-stack visibility</strong> and faster issue resolution.
          </p>
        </div>
      )
    },

    {
      question: "How does Service Observability differ from traditional monitoring?",
      answer: (
        <div>
          <p className="mb-3">Service Observability goes beyond traditional monitoring by providing:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Traditional Monitoring:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Reactive alerting based on predefined thresholds</li>
                <li>Siloed data from individual tools</li>
                <li>Limited context about system behavior</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Service Observability:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Proactive insights with full-stack visibility</li>
                <li>Unified data across all systems and tools</li>
                <li>Rich context about dependencies and business impact</li>
                <li>AI-powered pattern recognition and prediction</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            This enables organizations to understand not just <em>what</em> is happening, but <em>why</em> and <em>what to do about it</em>.
          </p>
        </div>
      )
    },

    {
      question: "What related applications work with Service Observability?",
      answer: (
        <div>
          <p className="mb-3">
            Service Observability integrates seamlessly with related ServiceNow applications:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Now Assist for IT Operations:</strong> Prevent issues and triage alerts with generative AI</li>
            <li><strong>Event Management:</strong> Reduce event floods and gain business service health insights</li>
            <li><strong>Predictive AIOps:</strong> Predict and prevent service outages before user impact</li>
            <li><strong>Service Reliability Management:</strong> Maintain and continuously improve service reliability</li>
          </ul>
          <p className="mt-3">
            These applications create a comprehensive observability and AIOps ecosystem for modern IT operations.
          </p>
        </div>
      )
    },

    {
      question: "How does Service Observability support SLOs and SLAs?",
      answer: (
        <div>
          <p className="mb-3">Service Observability enables comprehensive SLO and SLA management through:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Service Level Objectives (SLOs):</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Organization-wide SLO adoption for effective team communication</li>
                <li>Performance targets tied to business impact</li>
                <li>Innovation aligned with performance objectives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Service Level Agreements (SLAs):</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Real-time SLA performance tracking</li>
                <li>Proactive SLA breach prevention</li>
                <li>Business impact visibility for SLA decisions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Cross-Team Alignment:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Security, application, and operations team coordination</li>
                <li>Shared performance metrics and objectives</li>
                <li>Unified approach to service quality</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Service Observability implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Service Observability implementation costs depend on scale, integrations, and ITOM package:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Observability (ITOM Professional):</strong> Starting from $200K - includes basic observability with existing ITOM infrastructure</li>
            <li><strong>Advanced Observability Implementation:</strong> $350K-$500K - includes full-stack visibility, AI integration, and custom dashboards</li>
            <li><strong>Enterprise Observability Suite:</strong> $600K+ - complete observability with predictive AIOps, SLO management, and advanced analytics</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through MTTR reduction (60%), improved service availability (99.9%), and operational efficiency gains.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Observability ROI Calculator", url: "/observability-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for Service Observability?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on existing ITOM infrastructure and integration complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Basic Service Observability:</strong> 12-16 weeks with existing ITOM foundation</li>
            <li><strong>Advanced Observability Implementation:</strong> 16-22 weeks including full-stack integration and custom dashboards</li>
            <li><strong>Enterprise Observability Suite:</strong> 20-28 weeks for complete suite with predictive AIOps and SLO management</li>
          </ul>
          <p className="mt-3">
            Our methodology: Assessment & Planning (3-4 weeks) → Data Integration & Configuration (8-12 weeks) → Dashboard & Analytics Setup (4-6 weeks) → Go-Live & Optimization (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Service Observability integrate with existing monitoring tools?",
      answer: (
        <div>
          <p className="mb-3">Service Observability provides extensible data integration capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Monitoring Tool Integration:</strong> Centralize data from existing monitoring tools without replacement</li>
            <li><strong>Cloud Provider Support:</strong> Native integration with AWS, Azure, GCP, and other cloud platforms</li>
            <li><strong>ServiceNow Agent Connectivity:</strong> Leverage existing ServiceNow infrastructure and agents</li>
            <li><strong>Third-Party Tools:</strong> Extensible framework for custom tool integration</li>
            <li><strong>OpenTelemetry Support:</strong> Standards-based telemetry data collection</li>
            <li><strong>API-First Architecture:</strong> RESTful APIs for custom integrations</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maximize existing investments while gaining unified visibility and 80% faster root cause analysis.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on observability implementation success stories)
  const caseStudies = [
    {
      title: "Global E-Commerce Platform Achieves 99.9% Availability with Service Observability",
      client: "Leading E-Commerce Company",
      industry: "E-Commerce Technology",
      challenge: "Managing complex microservices architecture with multiple monitoring tools creating data silos and slow incident resolution during peak shopping seasons",
      solution: "ServiceNow Service Observability with unified dashboards, critical signal aggregation, and SLO management for peak performance optimization",
      results: [
        { metric: "99.9%", description: "Service availability achieved" },
        { metric: "60%", description: "Reduction in MTTR" },
        { metric: "80%", description: "Faster root cause analysis" },
        { metric: "Zero", description: "Peak season outages" }
      ],
      testimonial: "ServiceNow Service Observability transformed our ability to maintain 99.9% availability during peak shopping seasons while reducing MTTR by 60% through unified visibility.",
      executive: "Head of Site Reliability Engineering",
      logo: "/images/clients/ecommerce-logo.png"
    },
    {
      title: "Financial Services Firm Eliminates Tool Silos with Unified Observability",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Multiple monitoring tools creating fragmented visibility across critical trading systems with regulatory compliance requirements and zero-tolerance for downtime",
      solution: "Service Observability with extensible data integration, service-oriented views, and compliance-ready dashboards for financial trading operations",
      results: [
        { metric: "Unified", description: "Cross-tool visibility" },
        { metric: "100%", description: "Regulatory compliance" },
        { metric: "45%", description: "Faster incident response" },
        { metric: "Zero", description: "Trading system outages" }
      ],
      testimonial: "Service Observability eliminated our tool silos and provided the unified visibility we needed for critical trading systems while maintaining 100% regulatory compliance.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/investment-bank-logo.png"
    },
    {
      title: "Healthcare Network Improves Patient Care with Proactive Observability",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Ensuring 24/7 availability of critical healthcare systems affecting patient care with complex interdependencies and strict uptime requirements",
      solution: "Complete Service Observability suite with predictive AIOps, SLO management, and healthcare-specific performance dashboards",
      results: [
        { metric: "24/7", description: "Critical system availability" },
        { metric: "Proactive", description: "Issue detection" },
        { metric: "50%", description: "Improved response times" },
        { metric: "Enhanced", description: "Patient care delivery" }
      ],
      testimonial: "Service Observability enabled us to maintain 24/7 availability of critical healthcare systems with proactive issue detection that directly improves patient care delivery.",
      executive: "Director of Healthcare IT Operations",
      logo: "/images/clients/healthcare-system-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Service Observability - Complete ServiceNow Observability Portfolio | ifBash</title>
        <meta
          name="description"
          content="Break down silos to resolve issues quickly across teams. Integrate observability capabilities into your existing workflows for alerting and incident management with ServiceNow Service Observability."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Service Observability"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Service Observability
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-teal-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Full-Stack Observability
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    AIOps Ready
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                    Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                      Observability
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-teal-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-cyan-300">Break down silos to resolve issues quickly</span> across teams. Integrate observability capabilities into your existing workflows for{' '}
                  <span className="font-semibold text-blue-300">alerting and incident management</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Service Observability
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-blue-400 group-hover:text-blue-300" />
                      Get Data Sheet
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Service Observability Platform"
                      className="w-full h-full object-cover"
                      gradient="from-teal-600 to-cyan-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Unified</div>
                      <div className="text-xs text-teal-200">Visibility</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Data-Driven</div>
                      <div className="text-xs text-cyan-200">Decisions</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart4 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Network className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Benefits of Service
                </span>
                <br />
                <span className="text-gray-800">
                  Observability
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Make data-driven decisions based on business impact with comprehensive service observability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Impact Achieved</div>
                      <div className="text-teal-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Features of Service
                </span>
                <br />
                <span className="text-gray-800">
                  Observability
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive features designed to provide unified visibility and faster issue resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
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

        {/* Observability vs Monitoring Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Observability vs Monitoring
                </span>
                <br />
                <span className="text-gray-800">
                  Next-Generation Insights
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Move beyond traditional monitoring to comprehensive observability with full-stack visibility and contextual insights.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {observabilityFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Key Benefit</div>
                      <div className="text-blue-600 text-sm">{feature.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Applications Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Related Applications
                </span>
                <br />
                <span className="text-gray-800">
                  Complete AIOps Ecosystem
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Service Observability works seamlessly with related ServiceNow applications for comprehensive IT operations management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {relatedApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{app.title}</h3>
                      <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs px-2 py-1 mt-1">
                        Related App
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Service Observability
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Service Observability implementation and capabilities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg sm:rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-pink-900 via-red-900 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-pink-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Observability Success
                </span>
              </h2>
              <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their observability capabilities and achieved business impact with Service Observability.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-lg sm:rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-200 border border-pink-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-200 border border-red-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-900/30 to-red-900/30 rounded-xl p-4 border-l-4 border-pink-400">
                              <Quote className="h-6 w-6 text-pink-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-pink-300">— {study.executive}</p>
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
                                <span className="text-pink-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-pink-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Enhance Your Service Observability?
                </h2>
                <p className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discover how Service Observability can break down silos and accelerate issue resolution across your teams.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Observability Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">observability@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-orange-200 mx-auto mb-2" />
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
        }
      `}</style>
    </>
  );
}
