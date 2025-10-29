'use client';

import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Play, 
  Users, 
  Zap, 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Bot,
  Brain,
  Workflow,
  Database,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Globe,
  Settings,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Building,
  Factory,
  HeartPulse,
  Car,
  Briefcase,
  MonitorSmartphone,
  Quote,
  Video,
  FileText,
  Download,
  ExternalLink,
  Timer,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  CloudLightning,
  GraduationCap,
  BookOpen,
  UserCheck,
  Layers,
  Cog,
  ShoppingBag,
  Store,
  Microscope,
  Music,
  MessageCircle,
  Wrench,
  Clock,
  Gauge,
  Network,
  RefreshCw,
  CloudDownload,
  Server,
  Search,
  ChevronDown,
  Compass,
  Map,
  Route,
  Navigation,
  TrendingDown,
  LineChart,
  Sparkles,
  Wand2,
  Infinity,
  CircuitBoard,
  BrainCircuit,
  Building2,
  User
} from 'lucide-react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Case Studies Data
const caseStudies = [
  {
    client: "AutoTech Industries",
    industry: "Manufacturing",
    challenge: "Manual quality control processes causing 34% production delays and $8.7M annual losses",
    solution: "Agentic AI-powered quality control system with computer vision and predictive maintenance",
    results: ["89% reduction in defect rates", "156% increase in production efficiency", "$12.4M annual cost savings", "Zero unplanned downtime"],
    timeline: "14 weeks implementation",
    image: "/images/case-studies/autotech-manufacturing.jpg",
    testimonial: "ifBash's agentic AI solution transformed our manufacturing floor. Our AI agents now predict issues before they happen and automatically optimize production."
  },
  {
    client: "HealthCare+ Network",
    industry: "Healthcare",
    challenge: "Patient data analysis taking 47 hours per case, causing treatment delays and compliance risks",
    solution: "Generative AI-powered patient data analysis with automated report generation and compliance checking",
    results: ["94% faster patient data processing", "73% improvement in diagnosis accuracy", "100% compliance adherence", "267% ROI in first year"],
    timeline: "18 weeks rollout",
    image: "/images/case-studies/healthcare-network.jpg",
    testimonial: "The generative AI agents analyze patient data in minutes instead of days. Our clinicians now focus on patient care instead of paperwork."
  },
  {
    client: "FinanceFlow Corp",
    industry: "Financial Services",
    challenge: "Fraud detection systems missing 23% of sophisticated attacks, costing $15.6M annually",
    solution: "Multi-agent AI system with real-time fraud detection and automated response protocols",
    results: ["97% fraud detection accuracy", "83% reduction in false positives", "$18.9M in prevented losses", "2.3 second average response time"],
    timeline: "16 weeks deployment",
    image: "/images/case-studies/financeflow-financial.jpg",
    testimonial: "Our AI agents work 24/7 to protect our customers. The sophistication of these autonomous systems is remarkable - they learn and adapt constantly."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Elena Vasquez",
    title: "Chief Innovation Officer",
    company: "AutoTech Industries",
    story: "ifBash's agentic AI didn't just automate our processes - it revolutionized how we think about manufacturing intelligence. Our AI agents are like having expert technicians working 24/7.",
    metric: "156% increase in production efficiency with zero unplanned downtime",
    rating: 5,
    avatar: "/images/testimonials/elena-vasquez.jpg"
  },
  {
    name: "Dr. James Wilson",
    title: "Medical Director",
    company: "HealthCare+ Network", 
    story: "The generative AI agents analyze complex patient data in minutes that used to take our team days. This isn't just automation - it's augmented intelligence that makes our clinicians superhuman.",
    metric: "94% faster patient data processing with 73% better accuracy",
    rating: 5,
    avatar: "/images/testimonials/james-wilson.jpg"
  },
  {
    name: "Maria Santos",
    title: "Head of Risk Management",
    company: "FinanceFlow Corp",
    story: "The multi-agent fraud detection system is incredible. These AI agents collaborate, learn from each other, and catch sophisticated attacks our old systems missed completely.",
    metric: "$18.9M in prevented fraud losses in the first year",
    rating: 5,
    avatar: "/images/testimonials/maria-santos.jpg"
  },
  {
    name: "David Park",
    title: "VP of Operations",
    company: "RetailMax Enterprise",
    story: "Our agentic AI handles customer service, inventory management, and demand forecasting simultaneously. It's like having an army of intelligent assistants that never sleep.",
    metric: "238% improvement in customer satisfaction scores",
    rating: 5,
    avatar: "/images/testimonials/david-park.jpg"
  }
];

// AI Implementation Methodology
const aiMethodology = [
  {
    phase: "AI Assessment & Planning",
    duration: "Week 1-3",
    activities: ["AI readiness evaluation", "Use case identification", "Data quality assessment", "Agent architecture design", "ROI modeling"],
    deliverables: ["AI strategy blueprint", "Agent specifications", "Data preparation plan", "Implementation roadmap"],
    icon: BrainCircuit,
    color: "from-violet-500 to-purple-500"
  },
  {
    phase: "Agent Development & Training",
    duration: "Week 4-8",
    activities: ["AI model development", "Agent training", "Workflow integration", "Testing protocols", "Performance optimization"],
    deliverables: ["Trained AI agents", "Integration framework", "Testing results", "Performance benchmarks"],
    icon: Bot,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Orchestration & Integration",
    duration: "Week 9-12",
    activities: ["Multi-agent orchestration", "System integration", "Security implementation", "User interface development", "Change management"],
    deliverables: ["Orchestrated AI system", "Integrated platform", "Security framework", "User training materials"],
    icon: Network,
    color: "from-pink-500 to-rose-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 13-16",
    activities: ["Production deployment", "Performance monitoring", "Continuous learning", "User adoption", "Optimization cycles"],
    deliverables: ["Live AI system", "Monitoring dashboard", "Learning protocols", "Optimization reports"],
    icon: Sparkles,
    color: "from-rose-500 to-orange-500"
  }
];

// AI Service Features
const aiServices = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Development",
    description: "Build autonomous AI agents that reason, learn, and act independently to solve complex business problems",
    benefits: ["Autonomous decision-making", "Continuous learning", "Multi-agent coordination"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Deploy generative AI to create content, code, insights, and solutions that accelerate business processes",
    benefits: ["Content generation", "Code automation", "Insight synthesis"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Orchestrate complex workflows with AI agents that adapt, optimize, and scale automatically",
    benefits: ["Adaptive workflows", "Smart optimization", "Auto-scaling"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "AI Agent Orchestration",
    description: "Coordinate multiple AI agents to work together seamlessly across departments and systems",
    benefits: ["Multi-agent coordination", "Cross-system integration", "Seamless collaboration"],
    gradient: "from-rose-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description: "Deploy AI that processes and responds to data in real-time for immediate business impact",
    benefits: ["Real-time processing", "Instant responses", "Immediate insights"],
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: CircuitBoard,
    title: "AI Platform Integration",
    description: "Seamlessly integrate AI capabilities with existing ServiceNow platform and enterprise systems",
    benefits: ["Platform integration", "Enterprise connectivity", "Unified experience"],
    gradient: "from-amber-500 to-yellow-500"
  }
];

// AI Capabilities
const aiCapabilities = [
  {
    title: "Agentic AI Agents Deployed",
    description: "Autonomous AI agents working across industries solving complex business challenges",
    stat: "500+ AI Agents",
    icon: Bot
  },
  {
    title: "Process Automation Rate",
    description: "Average improvement in process efficiency through intelligent automation",
    stat: "234% Improvement",
    icon: Zap
  },
  {
    title: "AI Model Accuracy", 
    description: "Average accuracy across deployed generative AI and agentic AI solutions",
    stat: "97.3% Accuracy",
    icon: Target
  },
  {
    title: "ROI Achievement Time",
    description: "Average time to achieve positive ROI from AI automation implementations",
    stat: "12 Weeks ROI",
    icon: TrendingUp
  }
];

// FAQ Data
const faqs = [
  {
    question: "What is the difference between agentic AI and generative AI in ServiceNow?",
    answer: "Agentic AI refers to autonomous agents that can reason, make decisions, and take actions independently, while generative AI creates content, code, or insights. We combine both - agentic AI agents use generative AI capabilities to create solutions while operating autonomously within your ServiceNow platform."
  },
  {
    question: "How quickly can AI agents be deployed in our ServiceNow environment?",
    answer: "Simple AI agents can be deployed in 2-4 weeks, while complex multi-agent systems typically take 12-16 weeks. Our methodology includes rapid prototyping, so you'll see working agents within the first few weeks of engagement."
  },
  {
    question: "What types of business processes can agentic AI automate?",
    answer: "Agentic AI excels at complex, decision-heavy processes like incident resolution, fraud detection, quality control, customer service, compliance monitoring, and predictive maintenance. These agents can handle multi-step workflows that traditionally required human judgment."
  },
  {
    question: "How do you ensure AI agents make safe and compliant decisions?",
    answer: "We implement comprehensive governance frameworks including decision boundaries, approval workflows, audit trails, and continuous monitoring. All agents operate within defined parameters and can escalate to humans when needed."
  },
  {
    question: "Can AI agents integrate with our existing enterprise systems beyond ServiceNow?",
    answer: "Yes, our AI agents can integrate with ERP, CRM, HR systems, databases, and APIs. We use ServiceNow's Integration Hub and custom connectors to ensure seamless data flow across your entire technology stack."
  },
  {
    question: "How do you measure the ROI of agentic AI implementations?",
    answer: "We track multiple metrics including process efficiency gains, cost reduction, error reduction, response time improvements, and employee productivity increases. Most clients see positive ROI within 12 weeks of deployment."
  },
  {
    question: "What kind of training and support do you provide for AI agent management?",
    answer: "We provide comprehensive training on agent management, monitoring, and optimization. This includes admin training, end-user workshops, monitoring dashboards, and ongoing support for agent performance tuning."
  },
  {
    question: "How do generative AI capabilities enhance traditional ServiceNow workflows?",
    answer: "Generative AI adds content creation, code generation, insight synthesis, and natural language processing to workflows. This enables automated report generation, intelligent responses, code assistance, and dynamic content creation within ServiceNow processes."
  }
];

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  companySize: z.string(),
  serviceInterest: z.string(),
  message: z.string().min(10, "Please provide more details about your needs")
});

export default function SmartAutomationAgenticAI() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      companySize: "",
      serviceInterest: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement form submission logic
    console.log(values);
  }

  return (
    <>
      {/* Fixed Chat Button */}
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <a href="/get-started"
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with AI Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with AI Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </a>
      </div>

      <div className="bg-gray-50" >
        {/* Hero Section */}
        <section className="relative min-h-[70vh] w-[100vw] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0 ">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating AI Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* AI Circuit Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <CircuitBoard className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[95%] xl:w-[90%] mx-auto relative z-10">
            {/* Get Started Section - New Form Section */}
        
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="get-started">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600">
                  Get Started with ifBash
                </span>
                <br />
                <span className="text-primary-foreground">
                  Your AI Journey Awaits
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-primary-foreground max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Fill out the form below and our team of AI experts will reach out to you within 24 hours to discuss your project requirements and how we can help you achieve your automation goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <User className="w-4 h-4 mr-2 text-violet-600" />
                                First Name
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <User className="w-4 h-4 mr-2 text-violet-600" />
                                Last Name
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Mail className="w-4 h-4 mr-2 text-violet-600" />
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Phone className="w-4 h-4 mr-2 text-violet-600" />
                                Phone Number
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="(123) 456-7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Company Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Building2 className="w-4 h-4 mr-2 text-violet-600" />
                                Company Name
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="Your Company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Briefcase className="w-4 h-4 mr-2 text-violet-600" />
                                Job Title
                              </FormLabel>
                              <FormControl>
                                <Input className="bg-gray-50 border-gray-200" placeholder="Your Job Title" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Users className="w-4 h-4 mr-2 text-violet-600" />
                                Company Size
                              </FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} >
                                  
                                
                                  <SelectTrigger >
                                    <SelectValue placeholder="Select company size" className="bg-gray-50" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1-10">1-10 employees</SelectItem>
                                    <SelectItem value="11-50">11-50 employees</SelectItem>
                                    <SelectItem value="51-200">51-200 employees</SelectItem>
                                    <SelectItem value="201-500">201-500 employees</SelectItem>
                                    <SelectItem value="500+">500+ employees</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="serviceInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center text-primary-foreground">
                                <Globe className="w-4 h-4 mr-2 text-violet-600" />
                                Interested Services
                              </FormLabel>
                              <FormControl>
                                <Select  onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select services of interest" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="ai-development">Agentic AI Development</SelectItem>
                                    <SelectItem value="generative-ai">Generative AI Solutions</SelectItem>
                                    <SelectItem value="intelligent-automation">Intelligent Automation</SelectItem>
                                    <SelectItem value="ai-orchestration">AI Agent Orchestration</SelectItem>
                                    <SelectItem value="real-time-intelligence">Real-time Intelligence</SelectItem>
                                    <SelectItem value="platform-integration">AI Platform Integration</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-primary-foreground">
                              <MessageCircle className="w-4 h-4 mr-2 text-violet-600" />
                              Tell us about your needs
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                className="bg-gray-50 border-gray-200 min-h-[120px]"
                                placeholder="Please describe your ServiceNow requirements..."
                                {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit"
                      className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                    >
                      Submit Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                  Why Choose ifBash
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-violet-600 mr-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-foreground">
                        Expert team with deep AI and ServiceNow expertise.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-violet-600 mr-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-foreground">
                        Proven methodology for rapid and successful AI deployments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-violet-600 mr-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-foreground">
                        Comprehensive support and training for your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                  Additional Ways to Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-violet-600 mr-3" />
                    <span className="text-primary-foreground">+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-violet-600 mr-3" />
                    <span className="text-primary-foreground">info@ifbash.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-violet-600 mr-3" />
                    <span className="text-primary-foreground">www.ifbash.com</span>
                  </div>
                </div>
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
        }
      `}</style>
    
    </>
  );
}
