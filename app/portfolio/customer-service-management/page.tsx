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
  Headset
} from "lucide-react";

export default function CustomerServiceManagementPage() {
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
    "name": "Customer Service Management - ServiceNow CSM Implementation",
    "description": "Enhance customer service metrics, journey mapping, AI agents, NPS tracking, and chatbot capabilities with ServiceNow Customer Service Management platform.",
    "applicationCategory": "Customer Service Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Customer Service Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CSM enhances customer service metrics by providing tools to track and improve KPIs, offers real-time visibility into metrics, integrates AI to capture data, and features strong reporting capabilities to drive continuous improvement and customer satisfaction."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow CSM improve customer journey mapping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CSM enhances customer journey maps by tracking, managing, and optimizing interactions across all touchpoints. Organizations can visualize interactions, identify pain points, automate workflows, personalize engagements, monitor performance, and integrate channels into a unified interface."
        }
      }
    ]
  };

  // Benefits (Based on ServiceNow content)
  const benefits = [
    {
      icon: BarChart3,
      title: "Enhanced customer service metrics",
      description: "Track and improve KPIs with real-time visibility, AI-powered data capture, and strong reporting capabilities that drive continuous improvement and customer satisfaction.",
      color: "from-blue-500 to-indigo-500",
      stats: "Real-time KPI tracking"
    },
    {
      icon: Route,
      title: "Optimized customer journey mapping",
      description: "Track, manage, and optimize interactions across all touchpoints. Visualize interactions, identify pain points, automate workflows, and personalize engagements.",
      color: "from-indigo-500 to-purple-500",
      stats: "360° customer visibility"
    },
    {
      icon: Bot,
      title: "AI agents for 24/7 service",
      description: "AI agents operate 24/7, autonomously gathering data, making decisions, and executing tasks from routine requests to complex product recalls.",
      color: "from-purple-500 to-pink-500",
      stats: "24/7 autonomous operations"
    },
    {
      icon: ThumbsUp,
      title: "Improved Net Promoter Score",
      description: "Track feedback efficiently, identify pain points affecting satisfaction, automate follow-up actions, and tailor responses based on individual feedback.",
      color: "from-pink-500 to-red-500",
      stats: "Enhanced NPS tracking"
    }
  ];

  // CSM Features (From ServiceNow content)
  const csmFeatures = [
    {
      icon: BarChart3,
      title: "Customer Service Metrics",
      description: "Key performance indicators (KPIs) that provide reliable tracking and analytics data on customer service performance.",
      capabilities: [
        "Real-time visibility into metrics",
        "AI-powered data capture and improvement",
        "Strong reporting capabilities",
        "Continuous improvement tracking"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Map,
      title: "Customer Journey Mapping",
      description: "Visualize and communicate buyers' processes, needs, and perceptions as they engage with your business.",
      capabilities: [
        "Interaction visualization",
        "Pain point identification",
        "Workflow automation",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Bot,
      title: "ServiceNow AI Agents",
      description: "24/7 autonomous agents that gather data, make decisions, and execute tasks to achieve predefined goals.",
      capabilities: [
        "24/7 autonomous operation",
        "Routine task processing",
        "Complex task management",
        "Human agent productivity enhancement"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ThumbsUp,
      title: "Net Promoter Score Optimization",
      description: "Quantify and chart customer satisfaction by tracking how likely customers are to recommend your brand.",
      capabilities: [
        "Efficient feedback tracking",
        "Pain point identification",
        "Automated follow-up actions",
        "Personalized response tailoring"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbot Solutions",
      description: "AI-powered Virtual Agent that simulates human conversation with simple to complex capabilities.",
      capabilities: [
        "24/7 automated responses",
        "Complex AI interactions",
        "Personalized user engagement",
        "Continuous performance monitoring"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users2,
      title: "Multichannel Integration",
      description: "Integrate data from multiple channels for a comprehensive view of customer interactions and service quality.",
      capabilities: [
        "Channel integration",
        "Unified customer view",
        "Comprehensive data analysis",
        "Service quality monitoring"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Customer Experience Metrics
  const experienceMetrics = [
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description: "Track and improve customer satisfaction scores through comprehensive feedback analysis and automated improvements.",
      metric: "95% satisfaction rate"
    },
    {
      icon: Timer,
      title: "Response Time",
      description: "Reduce average response time through AI-powered automation and intelligent routing capabilities.",
      metric: "80% faster response"
    },
    {
      icon: TrendingUp,
      title: "Net Promoter Score",
      description: "Improve customer advocacy and loyalty through personalized experiences and proactive issue resolution.",
      metric: "60-point NPS improvement"
    },
    {
      icon: Headset,
      title: "Agent Productivity",
      description: "Enhance agent efficiency through AI-powered summaries, automated responses, and knowledge management.",
      metric: "70% productivity boost"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Customer Service Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Customer Service Management (CSM) enhances customer service operations by:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Providing tools to track and improve customer service KPIs</li>
            <li>Offering real-time visibility into service metrics</li>
            <li>Integrating AI to capture and improve data quality</li>
            <li>Featuring strong reporting capabilities for continuous improvement</li>
            <li>Driving enhanced customer satisfaction through data-driven insights</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> for intelligent customer service automation.
          </p>
        </div>
      )
    },
    
    {
      question: "How does ServiceNow CSM improve customer journey mapping?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CSM enhances customer journey mapping by:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Tracking and Managing:</strong> Optimize interactions across all customer touchpoints</li>
            <li><strong>Visualization:</strong> Map customer interactions and identify improvement opportunities</li>
            <li><strong>Pain Point Identification:</strong> Automatically detect and address customer friction points</li>
            <li><strong>Workflow Automation:</strong> Streamline customer processes and reduce manual effort</li>
            <li><strong>Personalized Engagement:</strong> Tailor experiences based on individual customer preferences</li>
            <li><strong>Performance Monitoring:</strong> Continuously track and improve journey effectiveness</li>
            <li><strong>Channel Integration:</strong> Unify all customer touchpoints into a single interface</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are ServiceNow AI Agents and how do they operate?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow AI Agents are designed to operate 24/7, providing:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Autonomous Operations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>24/7 data gathering and decision making</li>
                <li>Task execution to achieve predefined goals</li>
                <li>Integration with ServiceNow AI Platform</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Task Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Routine tasks: customer return request processing</li>
                <li>Complex tasks: product recall management</li>
                <li>Human agent support: chat and case summaries</li>
                <li>Content generation: email replies and knowledge articles</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            AI Agents enhance human productivity while handling both simple and complex customer service scenarios.
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow CSM help improve Net Promoter Score (NPS)?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow CSM improves NPS through comprehensive feedback management:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Efficient Feedback Tracking:</strong> Streamlined collection and analysis of customer feedback</li>
            <li><strong>Pain Point Identification:</strong> Quick identification of issues affecting customer satisfaction</li>
            <li><strong>Automated Follow-up:</strong> Automatic actions to address customer concerns and feedback</li>
            <li><strong>Personalized Responses:</strong> Tailored responses based on individual customer feedback</li>
            <li><strong>Continuous Monitoring:</strong> Ongoing service quality improvements</li>
            <li><strong>Multi-channel Integration:</strong> Comprehensive view from all customer interaction channels</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach helps quantify customer satisfaction and increases the likelihood of customer recommendations.
          </p>
        </div>
      )
    },

    {
      question: "What chatbot capabilities does ServiceNow Virtual Agent provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow Virtual Agent provides advanced chatbot capabilities including:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">24/7 Customer Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Automated responses to customer inquiries</li>
                <li>Complex AI-powered interactions</li>
                <li>Continuous availability and monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Advanced Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Personalized user engagement based on context</li>
                <li>Integration with other systems for detailed support</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Business Impact:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Significantly improved customer service efficiency</li>
                <li>Enhanced customer satisfaction scores</li>
                <li>Reduced response times and support costs</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Customer Service Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, customer volume, and feature complexity:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CSM Standard Implementation:</strong> Starting from $400K - includes core customer service features for up to 10,000 customers</li>
            <li><strong>Enterprise CSM Implementation:</strong> $600K-$800K - includes AI agents, advanced analytics, and omnichannel capabilities</li>
            <li><strong>Complete CSM Suite:</strong> $1M+ - full feature set with custom integrations, advanced AI, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 10-15 months through improved customer satisfaction (95%), reduced response times (80%), and enhanced agent productivity (70%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "CSM ROI Calculator", url: "/csm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for CSM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on customer volume and integration complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CSM Standard:</strong> 16-20 weeks for core customer service features and basic integrations</li>
            <li><strong>Enterprise CSM:</strong> 22-28 weeks including AI agents, advanced analytics, and omnichannel setup</li>
            <li><strong>Complete CSM Suite:</strong> 28-36 weeks for full feature set with custom integrations and advanced AI deployment</li>
          </ul>
          <p className="mt-3">
            Our methodology: Discovery & Customer Journey Analysis (4-5 weeks) → Platform Configuration & AI Setup (12-16 weeks) → Integration & Testing (6-8 weeks) → Go-Live & Optimization (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does CSM integrate with existing customer service tools?",
      answer: (
        <div>
          <p className="mb-3">CSM provides comprehensive integration capabilities with existing tools:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CRM Integration:</strong> Native integration with Salesforce, Microsoft Dynamics, and other CRM platforms</li>
            <li><strong>Communication Channels:</strong> Email, chat, phone, social media, and messaging platform integration</li>
            <li><strong>Knowledge Management:</strong> Integration with existing knowledge bases and documentation systems</li>
            <li><strong>Analytics Platforms:</strong> Connect with business intelligence and reporting tools</li>
            <li><strong>E-commerce Platforms:</strong> Integration with online stores and order management systems</li>
            <li><strong>Third-Party Tools:</strong> API-based integration with specialized customer service applications</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing investments while gaining unified customer service capabilities and AI-powered automation.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on CSM success stories)
  const caseStudies = [
    {
      title: "Global Retail Chain Transforms Customer Experience with CSM AI",
      client: "International Retail Corporation",
      industry: "Retail & E-commerce",
      challenge: "Managing customer service across 500+ stores with inconsistent response times and 60% customer satisfaction scores affecting brand reputation",
      solution: "ServiceNow CSM with AI agents, customer journey mapping, automated chatbots, and omnichannel integration for unified customer experiences",
      results: [
        { metric: "95%", description: "Customer satisfaction improvement" },
        { metric: "80%", description: "Faster response times" },
        { metric: "60-point", description: "NPS score increase" },
        { metric: "70%", description: "Agent productivity boost" }
      ],
      testimonial: "ServiceNow CSM with AI agents transformed our customer service from reactive to proactive, achieving 95% satisfaction scores and 80% faster response times.",
      executive: "Chief Customer Experience Officer",
      logo: "/images/clients/retail-corp-logo.png"
    },
    {
      title: "Technology Company Achieves 24/7 Customer Support Excellence",
      client: "Global Software Solutions",
      industry: "Technology & Software",
      challenge: "Supporting 50,000+ customers globally with complex technical issues requiring 24/7 availability and specialized knowledge management",
      solution: "Complete CSM suite with ServiceNow AI agents, intelligent chatbots, knowledge management, and multilingual support capabilities",
      results: [
        { metric: "24/7", description: "Autonomous AI operations" },
        { metric: "50,000+", description: "Customers supported globally" },
        { metric: "90%", description: "First-call resolution rate" },
        { metric: "Multilingual", description: "Support capabilities" }
      ],
      testimonial: "ServiceNow AI agents enabled us to provide 24/7 customer support with 90% first-call resolution rates while supporting 50,000+ customers globally.",
      executive: "VP of Customer Success",
      logo: "/images/clients/software-solutions-logo.png"
    },
    {
      title: "Healthcare Network Enhances Patient Experience with Personalized CSM",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Improving patient experience across 25 facilities while managing complex healthcare regulations and personalized care requirements",
      solution: "ServiceNow CSM with patient journey mapping, personalized engagement workflows, and HIPAA-compliant AI-powered patient support",
      results: [
        { metric: "25", description: "Facilities integrated" },
        { metric: "Personalized", description: "Patient engagement" },
        { metric: "HIPAA", description: "Compliant operations" },
        { metric: "Enhanced", description: "Patient experience" }
      ],
      testimonial: "ServiceNow CSM helped us create personalized patient experiences across 25 facilities while maintaining HIPAA compliance and improving care quality.",
      executive: "Chief Patient Experience Officer",
      logo: "/images/clients/healthcare-system-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Customer Service Management - Complete ServiceNow CSM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Enhance customer service metrics, journey mapping, AI agents, NPS tracking, and chatbot capabilities with ServiceNow Customer Service Management platform."
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
          aria-label="Discuss CSM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss CSM Implementation
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
                    AI-Powered CSM
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    24/7 Support
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Customer Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-indigo-300">Enhance customer service metrics</span> with AI-powered agents, intelligent journey mapping, and{' '}
                  <span className="font-semibold text-purple-300">24/7 autonomous customer support</span> capabilities.
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
                      Get CSM Implementation
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
                      View Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Customer Service Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-indigo-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                      <div className="text-xs text-blue-200">Agents</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-indigo-200">Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Headset className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                  Benefits of Customer Service
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform customer experiences with AI-powered service management, real-time metrics, and intelligent automation.
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
                      <div className="text-sm font-semibold text-blue-700 mb-1">Key Feature</div>
                      <div className="text-blue-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSM Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  CSM Features and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Customer Service Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive customer service management with AI agents, journey mapping, and intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {csmFeatures.map((feature, index) => (
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

        {/* Experience Metrics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Customer Experience
                </span>
                <br />
                <span className="text-gray-800">
                  Performance Metrics
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Measure and improve customer satisfaction with comprehensive performance tracking and analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experienceMetrics.map((metric, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <metric.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {metric.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {metric.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Achievement Target</div>
                      <div className="text-purple-600 text-lg font-bold">{metric.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Customer Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about CSM implementation, AI agents, and customer experience optimization.
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
                        <div className="w-full h-px bg-gradient-to-r from-pink-500 to-red-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real CSM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their customer service operations with AI-powered Customer Service Management.
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
                              <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-200 border border-red-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-red-400">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Customer Service?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement AI-powered customer service management with 24/7 autonomous support and personalized experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact CSM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get CSM Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">csm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
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
      `}</style>
    </>
  );
}
