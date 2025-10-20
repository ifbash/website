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
  CloudDrizzle
} from "lucide-react";

export default function CloudGovernanceSuitePage() {
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
    "name": "Cloud Governance Suite - ServiceNow Cloud Transformation",
    "description": "Automate cloud governance for better compliance, security, and costs. Streamline cloud governance to keep your cloud services aligned with regulations, security policies, and budgets.",
    "applicationCategory": "Cloud Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Cloud Governance Suite and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Cloud Governance Suite automates cloud governance for better compliance, security, and costs. It streamlines cloud governance to keep your cloud services aligned with regulations, security policies, and budgets across multi-cloud and hybrid environments."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main components of Cloud Governance Suite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud Governance Suite includes Cloud Account Management for scaling processes and compliance, Cloud Security Management for strengthening security and minimizing risk, and Cloud Cost Management for visualizing spend with smart cost controls."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: CloudCog,
      title: "Scale cloud processes and improve compliance",
      description: "Automate governance workflows for cloud accounts and save time collecting compliance data.",
      color: "from-blue-500 to-indigo-500",
      stats: "70% faster compliance reporting"
    },
    {
      icon: ShieldCheck,
      title: "Strengthen cloud security and minimize risk exposure",
      description: "Increase resiliency by strengthening cloud security, reducing risks, streamlining vulnerability management, and enabling rapid recovery.",
      color: "from-indigo-500 to-purple-500",
      stats: "85% reduction in security risks"
    },
    {
      icon: CostIcon,
      title: "Visualize cloud spend with smart controls for cost efficiency",
      description: "Implement cloud cost controls to optimize spending, prevent budget overruns, and support efficient resource use.",
      color: "from-green-500 to-emerald-500",
      stats: "40% cost optimization achieved"
    },
    {
      icon: CloudLightning,
      title: "Accelerate cloud transformation",
      description: "Quickly migrate to cloud-based services and correctly assess and respond to cloud security risks to safely innovate.",
      color: "from-purple-500 to-pink-500",
      stats: "60% faster cloud adoption"
    }
  ];

  // Core Solutions (Exact from ServiceNow)
  const coreSolutions = [
    {
      icon: CloudCog,
      title: "Cloud Account Management",
      description: "Scale cloud processes and improve compliance. Automate governance workflows for cloud accounts and save time collecting compliance data.",
      capabilities: [
        "Automated governance workflows",
        "Cloud account scaling",
        "Compliance data collection",
        "Process optimization"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: ShieldCheck,
      title: "Cloud Security Management",
      description: "Strengthen cloud security and minimize risk exposure. Increase resiliency by strengthening cloud security and reducing risks.",
      capabilities: [
        "Cloud security strengthening",
        "Risk exposure minimization",
        "Vulnerability management streamlining",
        "Rapid recovery enablement"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: CostIcon,
      title: "Cloud Cost Management",
      description: "Visualize cloud spend with smart controls for cost efficiency. Implement cloud cost controls to optimize spending and prevent budget overruns.",
      capabilities: [
        "Cloud spend visualization",
        "Smart cost controls",
        "Budget overrun prevention",
        "Resource usage optimization"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Featured Products (From ServiceNow)
  const featuredProducts = [
    {
      icon: Rocket,
      title: "Cloud Accelerate",
      description: "Automate governance workflows for cloud accounts and resources.",
      details: [
        "Governance workflow automation",
        "Cloud account management",
        "Resource provisioning",
        "Compliance automation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Discovery",
      description: "Get a holistic view of your technology estate across hybrid and multi-cloud.",
      details: [
        "Holistic technology view",
        "Hybrid cloud visibility",
        "Multi-cloud discovery",
        "Estate management"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Response",
      description: "Identify, prioritize, and remediate vulnerabilities across the business.",
      details: [
        "Vulnerability identification",
        "Risk prioritization",
        "Remediation automation",
        "Business-wide coverage"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: BarChart3,
      title: "Cloud Cost Management",
      description: "Optimize cloud spend and usage from the simplicity of a single platform.",
      details: [
        "Spend optimization",
        "Usage analytics",
        "Single platform management",
        "Cost control automation"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // AI Platform Integration (From ServiceNow)
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "Turn on pre-built AI with Now Assist for agents, employees, customers, and developers.",
      details: [
        "Pre-built AI capabilities",
        "Now Assist integration",
        "Multi-stakeholder support",
        "Instant AI activation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Intelligent Chatbot",
      description: "Answer questions, resolve common issues, and kick off workflows instantly with a virtual assistant.",
      details: [
        "Instant question answering",
        "Common issue resolution",
        "Workflow automation",
        "Virtual assistant capabilities"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Activity,
      title: "Process Mining",
      description: "Enable fast, data-driven improvements with process mining.",
      details: [
        "Fast process improvements",
        "Data-driven insights",
        "Mining automation",
        "Performance optimization"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: CloudLightning,
      title: "ServiceNow AI Platform",
      description: "Deploy AI built directly into a single, trusted enterprise platform.",
      details: [
        "Built-in AI deployment",
        "Single platform integration",
        "Enterprise trust",
        "AI-powered automation"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Cloud Governance Suite and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Cloud Governance Suite automates cloud governance for better compliance, security, and costs. It helps organizations:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Streamline cloud governance to keep services aligned with regulations</li>
            <li>Maintain security policies and budget controls</li>
            <li>Scale cloud processes while improving compliance</li>
            <li>Strengthen cloud security and minimize risk exposure</li>
            <li>Visualize cloud spend with smart cost controls</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> for intelligent cloud transformation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main components of Cloud Governance Suite?",
      answer: (
        <div>
          <p className="mb-3">Cloud Governance Suite includes three core components:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Cloud Account Management:</strong> Scale cloud processes and improve compliance with automated governance workflows</li>
            <li><strong>Cloud Security Management:</strong> Strengthen cloud security, minimize risk exposure, and streamline vulnerability management</li>
            <li><strong>Cloud Cost Management:</strong> Visualize cloud spend with smart controls for cost efficiency and budget optimization</li>
          </ul>
          <p className="mt-3">
            Plus integrated <strong>AI capabilities</strong> with Now Assist and intelligent automation.
          </p>
        </div>
      )
    },

    {
      question: "What featured products are included in Cloud Governance Suite?",
      answer: (
        <div>
          <p className="mb-3">Cloud Governance Suite includes four key featured products:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Cloud Accelerate</h4>
              <p className="text-sm mb-2">Automate governance workflows for cloud accounts and resources.</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Discovery</h4>
              <p className="text-sm mb-2">Get a holistic view of your technology estate across hybrid and multi-cloud.</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Vulnerability Response</h4>
              <p className="text-sm mb-2">Identify, prioritize, and remediate vulnerabilities across the business.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Cloud Cost Management</h4>
              <p className="text-sm mb-2">Optimize cloud spend and usage from the simplicity of a single platform.</p>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Cloud Governance Suite integrate with AI and automation?",
      answer: (
        <div>
          <p className="mb-3">
            Cloud Governance Suite leverages the ServiceNow AI Platform for intelligent automation:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Generative AI:</strong> Pre-built AI with Now Assist for agents, employees, customers, and developers</li>
            <li><strong>Intelligent Chatbot:</strong> Answer questions and resolve issues with virtual assistant</li>
            <li><strong>Process Mining:</strong> Enable fast, data-driven improvements</li>
            <li><strong>AI Platform Integration:</strong> Deploy AI built directly into trusted enterprise platform</li>
          </ul>
          <p className="mt-3">
            All AI capabilities are integrated into the cloud governance workflows for intelligent automation.
          </p>
        </div>
      )
    },

    {
      question: "What industries benefit most from Cloud Governance Suite?",
      answer: (
        <div>
          <p className="mb-3">Cloud Governance Suite is particularly valuable for regulated industries:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Banking & Financial Services:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Transform IT and accelerate cloud migration</li>
                <li>Be audit-ready with automated compliance</li>
                <li>Assess and respond to cloud security risks safely</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Healthcare & Life Sciences:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Maintain HIPAA and regulatory compliance</li>
                <li>Secure patient data in cloud environments</li>
                <li>Optimize costs while ensuring security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Government & Public Sector:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Meet strict security and compliance requirements</li>
                <li>Manage multi-cloud environments efficiently</li>
                <li>Control costs with smart governance</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Cloud Governance Suite implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on cloud complexity, scope, and customization requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Basic Implementation:</strong> Starting from $150K - includes core cloud governance and cost management</li>
            <li><strong>Advanced Implementation:</strong> $250K-$350K - includes security management, AI integration, and multi-cloud support</li>
            <li><strong>Enterprise Implementation:</strong> $450K+ - full suite with custom integrations, advanced analytics, and strategic consulting</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-9 months through cost optimization, compliance automation, and risk reduction.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Cost Calculator", url: "/cloud-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for Cloud Governance Suite?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on cloud environment complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Standard Implementation:</strong> 12-16 weeks for basic cloud governance with cost management</li>
            <li><strong>Advanced Implementation:</strong> 16-22 weeks including security management and multi-cloud discovery</li>
            <li><strong>Enterprise Implementation:</strong> 20-28 weeks for complex multi-cloud environments with full AI integration</li>
          </ul>
          <p className="mt-3">
            Our methodology: Discovery & Assessment (3-4 weeks) → Configuration & Integration (8-12 weeks) → Testing & Security (3-4 weeks) → Go-Live & Optimization (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Cloud Governance Suite support multi-cloud and hybrid environments?",
      answer: (
        <div>
          <p className="mb-3">Cloud Governance Suite provides comprehensive multi-cloud and hybrid support:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Discovery:</strong> Holistic view of technology estate across hybrid and multi-cloud</li>
            <li><strong>Cloud Accelerate:</strong> Unified governance workflows across all cloud providers</li>
            <li><strong>Cost Management:</strong> Consolidated spend visibility across AWS, Azure, Google Cloud, and more</li>
            <li><strong>Security Management:</strong> Consistent security policies across all cloud environments</li>
            <li><strong>Compliance:</strong> Automated compliance reporting across hybrid infrastructure</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations typically see 60% faster cloud adoption and 40% cost optimization.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ServiceNow content)
  const caseStudies = [
    {
      title: "KeyBank Harnesses Data for Evidence-Based Decision-Making",
      client: "KeyBank",
      industry: "Financial Services",
      challenge: "Managing complex cloud transformation while maintaining regulatory compliance and optimizing costs across multiple cloud environments",
      solution: "ServiceNow Cloud Governance Suite with AI and machine learning for efficient change management and data-driven decision making",
      results: [
        { metric: "Data-Driven", description: "Decision making implemented" },
        { metric: "Efficient", description: "Change management" },
        { metric: "AI-Powered", description: "Cloud governance" },
        { metric: "Optimized", description: "Cloud operations" }
      ],
      testimonial: "KeyBank relies on data-driven technology in the cloud along with AI and machine learning to efficiently manage change and make evidence-based decisions.",
      executive: "KeyBank Technology Leadership",
      logo: "/images/clients/keybank-logo.png"
    },
    {
      title: "ServiceNow Adopts AIOps to Transform IT Operations",
      client: "ServiceNow",
      industry: "Technology Services",
      challenge: "Transforming internal IT operations with AIOps while managing complex cloud infrastructure and delivering great employee experiences",
      solution: "Internal implementation of ServiceNow AIOps with Cloud Governance Suite for intelligent IT operations and cloud management",
      results: [
        { metric: "Enhanced", description: "IT operations agility" },
        { metric: "Intelligent", description: "Experience delivery" },
        { metric: "AIOps", description: "Implementation success" },
        { metric: "Improved", description: "Employee satisfaction" }
      ],
      testimonial: "ServiceNow is using AIOps to gain agility and intelligently deliver great experiences for our employees while optimizing our cloud operations.",
      executive: "ServiceNow Internal IT Team",
      logo: "/images/clients/servicenow-logo.png"
    },
    {
      title: "Open House Targets One Trillion in Sales with Cloud Management",
      client: "Open House",
      industry: "Real Estate",
      challenge: "Managing more than 240 internal systems efficiently while scaling operations to target one trillion in sales",
      solution: "ServiceNow Cloud Governance Suite for comprehensive system management and cloud optimization across complex real estate operations",
      results: [
        { metric: "240+", description: "Systems managed efficiently" },
        { metric: "1 Trillion", description: "Sales target enabled" },
        { metric: "Streamlined", description: "Cloud governance" },
        { metric: "Scalable", description: "Operations platform" }
      ],
      testimonial: "ServiceNow enables Open House to manage more than 240 internal systems efficiently, supporting our ambitious growth targets through intelligent cloud governance.",
      executive: "Open House IT Leadership",
      logo: "/images/clients/openhouse-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Cloud Governance Suite - Complete ServiceNow Cloud Transformation | ifBash</title>
        <meta
          name="description"
          content="Automate cloud governance for better compliance, security, and costs. Streamline cloud governance to keep your cloud services aligned with regulations, security policies, and budgets."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Cloud Governance Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Cloud Governance
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-cyan-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden width-sm-fix w-screen max-w-[100vw]">
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
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-4 sm:mb-8">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete Cloud Suite
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Enterprise Ready
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                    Cloud Governance
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Suite
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-blue-300">Automate cloud governance</span> for better compliance, security, and costs. Streamline cloud governance to keep your cloud services{' '}
                  <span className="font-semibold text-indigo-300">aligned with regulations, security policies, and budgets</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Cloud Governance
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-indigo-400 group-hover:text-indigo-300" />
                      Read Report
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Cloud Governance Suite Platform"
                      className="w-full h-full object-cover"
                      gradient="from-cyan-600 to-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Automated</div>
                      <div className="text-xs text-cyan-200">Governance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Smart</div>
                      <div className="text-xs text-blue-200">Controls</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Cloud className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ShieldCheck className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Benefits of Cloud
                </span>
                <br />
                <span className="text-gray-800">
                  Governance Suite
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Streamline cloud governance with automated compliance, enhanced security, and intelligent cost optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
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
                      <div className="text-sm font-semibold text-cyan-700 mb-1">Impact Achieved</div>
                      <div className="text-cyan-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Solutions Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Core Cloud Governance
                </span>
                <br />
                <span className="text-gray-800">
                  Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive cloud governance solutions designed to streamline operations and optimize performance.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {coreSolutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {solution.capabilities.map((capability, idx) => (
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

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Featured Products
                </span>
                <br />
                <span className="text-gray-800">
                  Cloud Management Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Integrated cloud management products that provide comprehensive governance and optimization capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Product Details:</h4>
                      <ul className="space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
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

        {/* AI Platform Integration Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  AI Platform for
                </span>
                <br />
                <span className="text-gray-800">
                  Business Transformation
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Put AI to work today with trusted AI and data platform, purpose-built for work, and actionable in every corner of your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{capability.title}</h3>
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs px-2 py-1 mt-1">
                        AI-Powered
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">AI Features:</h4>
                    <ul className="space-y-2">
                      {capability.details.map((detail, idx) => (
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
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Cloud Governance Suite
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about cloud governance implementation and capabilities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
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
                        <div className="w-full h-px bg-gradient-to-r from-red-500 to-purple-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Cloud Governance Success
                </span>
              </h2>
              <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
                See how enterprise customers achieved cloud governance excellence and transformation with ServiceNow.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-8 md:p-12">
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
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Streamline Your Cloud Governance?
                </h2>
                <p className="text-lg md:text-xl text-pink-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss Cloud Governance Suite implementation and accelerate your cloud transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Cloud Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Read Report
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">cloud-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
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

        :root {
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
          
          .card-content {
            padding: 0.75rem;
          }

          .grid-container {
            gap: 0.75rem;
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
