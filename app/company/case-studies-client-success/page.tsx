'use client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Users, ArrowRight, CheckCircle, Star, Heart, Rocket, Target, Brain, Globe, MapPin, Clock, DollarSign,
  MessageCircle, Search, Filter, Calendar, User, GraduationCap, Coffee, Briefcase, Code, Lightbulb,
  Award, Shield, Zap, Settings, Database, TrendingUp, Quote, Play, Mail, Phone, Building, Factory,
  Stethoscope, Car, Banknote, ShoppingCart, Radio, Fuel, BookOpen, FileText, Download, ExternalLink,
  Eye, BarChart3, Timer, Gauge
} from "lucide-react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSolution, setSelectedSolution] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "IfBash Case Studies - ServiceNow Success Stories",
    "description": "Explore real ServiceNow transformation success stories from Fortune 500 companies. See measurable results, ROI, and business impact across industries.",
    "url": "https://ifbash.com/case-studies",
    "publisher": {
      "@type": "Organization",
      "name": "IfBash",
      "url": "https://ifbash.com"
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation at GlobalTech Financial",
      client: "GlobalTech Financial",
      industry: "Financial Services",
      solution: "ITSM & Digital Workflows",
      challenge: "Legacy IT service management across 15,000 employees with 67% of tickets unresolved within SLA, costing $12M annually in productivity losses.",
      approach: "Implemented comprehensive ServiceNow ITSM platform with AI-powered incident management, automated workflows, and self-service portals.",
      results: [
        { metric: "89%", description: "Reduction in average resolution time" },
        { metric: "156%", description: "Improvement in first-call resolution" },
        { metric: "$14.5M", description: "Annual cost savings achieved" },
        { metric: "97%", description: "Employee satisfaction score" }
      ],
      timeline: "6 months",
      teamSize: "12 consultants",
      roi: "340%",
      testimonial: "ifBash transformed our IT operations from reactive firefighting to proactive service excellence. The results exceeded our most optimistic projections.",
      clientContact: "Sarah Johnson, CIO",
      image: "/images/case-studies/globaltech-financial.jpg",
      technologies: ["ServiceNow ITSM", "AI/ML", "Integration Hub", "Mobile App"],
      featured: true
    },
    {
      id: 2,
      title: "Manufacturing Excellence at AutoParts Industries",
      client: "AutoParts Industries",
      industry: "Manufacturing",
      solution: "Asset Management & IoT",
      challenge: "Equipment downtime across 23 facilities costing $8M monthly due to reactive maintenance and lack of asset visibility.",
      approach: "Deployed ServiceNow Asset Management with IoT integration for predictive maintenance and real-time asset monitoring.",
      results: [
        { metric: "78%", description: "Reduction in unplanned downtime" },
        { metric: "234%", description: "ROI within first year" },
        { metric: "$96M", description: "Annual savings from optimized operations" },
        { metric: "92%", description: "Equipment uptime achievement" }
      ],
      timeline: "8 months",
      teamSize: "15 specialists",
      roi: "234%",
      testimonial: "The predictive maintenance capabilities have revolutionized our operations. We've eliminated surprise failures and optimized our entire manufacturing process.",
      clientContact: "Michael Chen, COO",
      image: "/images/case-studies/autoparts-industries.jpg",
      technologies: ["ServiceNow Asset Management", "IoT Sensors", "Predictive Analytics", "Mobile Workforce"],
      featured: false
    },
    {
      id: 3,
      title: "Healthcare Innovation at MedCare Systems",
      client: "MedCare Systems",
      industry: "Healthcare",
      solution: "Patient Experience & Compliance",
      challenge: "Patient care coordination across 8 hospitals with 34% readmission rates and $45M in compliance penalties annually.",
      approach: "Implemented patient care workflows, compliance automation, and integrated communication systems across all facilities.",
      results: [
        { metric: "67%", description: "Reduction in patient readmissions" },
        { metric: "189%", description: "Improvement in care coordination" },
        { metric: "$52M", description: "Reduction in compliance costs" },
        { metric: "94%", description: "Patient satisfaction score" }
      ],
      timeline: "10 months",
      teamSize: "18 experts",
      roi: "280%",
      testimonial: "Patient outcomes have dramatically improved while our compliance costs plummeted. ifBash understood the complexity of healthcare operations.",
      clientContact: "Dr. Amanda Rodriguez, Chief Medical Officer",
      image: "/images/case-studies/medcare-systems.jpg",
      technologies: ["ServiceNow Healthcare", "Compliance Management", "Patient Portal", "Integration Platform"],
      featured: true
    },
    {
      id: 4,
      title: "Retail Revolution at ShopGlobal Corp",
      client: "ShopGlobal Corp",
      industry: "Retail",
      solution: "Customer Service & Inventory",
      challenge: "Customer service inefficiencies across 890 stores with 45% cart abandonment rate costing $67M in lost sales annually.",
      approach: "Deployed omnichannel customer service platform with real-time inventory visibility and automated order management.",
      results: [
        { metric: "123%", description: "Increase in customer satisfaction" },
        { metric: "78%", description: "Reduction in cart abandonment" },
        { metric: "$89M", description: "Additional revenue captured" },
        { metric: "91%", description: "Order fulfillment accuracy" }
      ],
      timeline: "7 months",
      teamSize: "14 consultants",
      roi: "320%",
      testimonial: "Our customer experience transformation exceeded expectations. Sales increased while operational costs decreased significantly.",
      clientContact: "Jennifer Park, VP of Operations",
      image: "/images/case-studies/shopglobal-corp.jpg",
      technologies: ["ServiceNow Customer Service", "Inventory Management", "Mobile App", "Analytics"],
      featured: false
    },
    {
      id: 5,
      title: "Energy Optimization at PowerGrid Solutions",
      client: "PowerGrid Solutions",
      industry: "Energy & Utilities",
      solution: "Asset Performance & Grid Management",
      challenge: "Grid reliability issues across 2,300 substations with 45-hour average outage resolution costing $234M annually.",
      approach: "Implemented smart grid management with predictive analytics and automated fault detection across the entire network.",
      results: [
        { metric: "89%", description: "Reduction in outage duration" },
        { metric: "156%", description: "Improvement in grid reliability" },
        { metric: "$278M", description: "Annual cost avoidance" },
        { metric: "99.8%", description: "Grid availability achieved" }
      ],
      timeline: "12 months",
      teamSize: "20 specialists",
      roi: "290%",
      testimonial: "Grid reliability reached industry-leading levels. Our customers now experience minimal disruptions while our operational costs decreased.",
      clientContact: "Robert Kim, Chief Technology Officer",
      image: "/images/case-studies/powergrid-solutions.jpg",
      technologies: ["ServiceNow Asset Management", "Smart Grid Analytics", "IoT Integration", "Mobile Workforce"],
      featured: true
    },
    {
      id: 6,
      title: "Government Modernization at StateGov Agency",
      client: "StateGov Agency",
      industry: "Government",
      solution: "Citizen Services & Compliance",
      challenge: "Citizen service delivery across 45 departments with 23-day average response time and 34% citizen satisfaction rate.",
      approach: "Modernized citizen services with digital portals, automated workflows, and integrated department communications.",
      results: [
        { metric: "87%", description: "Reduction in service response time" },
        { metric: "234%", description: "Improvement in citizen satisfaction" },
        { metric: "$45M", description: "Annual operational savings" },
        { metric: "96%", description: "Digital service adoption rate" }
      ],
      timeline: "14 months",
      teamSize: "22 experts",
      roi: "180%",
      testimonial: "Citizens now receive faster, more efficient services while our departments collaborate seamlessly. Digital transformation succeeded beyond expectations.",
      clientContact: "Maria Santos, Director of Digital Services",
      image: "/images/case-studies/stategov-agency.jpg",
      technologies: ["ServiceNow Government", "Citizen Portal", "Workflow Automation", "Security Framework"],
      featured: false
    }
  ];

  const clientTestimonials = [
    {
      quote: "ifBash didn't just implement ServiceNow—they transformed our entire approach to IT service management. The results speak for themselves.",
      author: "Sarah Johnson",
      title: "CIO, GlobalTech Financial",
      company: "Fortune 500 Financial Services",
      result: "$14.5M annual savings",
      rating: 5,
      industry: "Financial Services"
    },
    {
      quote: "The manufacturing expertise and technical excellence ifBash brought to our transformation was exceptional. We achieved ROI faster than anticipated.",
      author: "Michael Chen",
      title: "COO, AutoParts Industries",
      company: "Global Manufacturing Leader",
      result: "234% ROI in first year",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      quote: "Patient outcomes improved dramatically while compliance costs plummeted. ifBash understood the unique complexities of healthcare operations.",
      author: "Dr. Amanda Rodriguez",
      title: "Chief Medical Officer, MedCare Systems",
      company: "Healthcare Network",
      result: "67% reduction in readmissions",
      rating: 5,
      industry: "Healthcare"
    }
  ];

  const industries = ["All", "Financial Services", "Manufacturing", "Healthcare", "Retail", "Energy & Utilities", "Government"];
  const solutions = ["All", "ITSM & Digital Workflows", "Asset Management & IoT", "Patient Experience & Compliance", "Customer Service & Inventory", "Asset Performance & Grid Management", "Citizen Services & Compliance"];

  const successMetrics = [
    { number: "300%+", label: "Average ROI", description: "Return on investment achieved", icon: TrendingUp },
    { number: "6-14", label: "Months", description: "Typical implementation timeline", icon: Timer },
    { number: "$500M+", label: "Value Created", description: "Total client value generated", icon: DollarSign },
    { number: "98%", label: "Success Rate", description: "Project completion success", icon: Target }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesSolution = selectedSolution === "All" || study.solution === selectedSolution;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSolution && matchesSearch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Head>
        <title>Case Studies - ServiceNow Success Stories | ifBash Digital Transformation Results</title>
        <meta name="description" content="Explore real ServiceNow transformation success stories from Fortune 500 companies. See measurable results, ROI, and business impact across industries with ifBash solutions." />
        <meta name="keywords" content="ServiceNow case studies, digital transformation success stories, enterprise automation results, ServiceNow ROI, business transformation examples, ifbash success stories" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Case Studies - ServiceNow Success Stories | ifBash" />
        <meta property="og:description" content="Explore real ServiceNow transformation success stories with measurable results and ROI across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/case-studies" />
        <link rel="canonical" href="https://ifbash.com/case-studies" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Your Project"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[120px] sm:min-w-[140px] text-center">
            Discuss Your Project
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-purple-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ Fortune 500 Clients
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ 300%+ ROI
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ Proven Results
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-1 sm:px-0">
                  Real{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 font-semibold">
                    Success Stories
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Measurable{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Results
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-purple-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Explore how Fortune 500 companies achieved{' '}
                  <span className="font-semibold text-blue-300">digital transformation success</span>{' '}
                  with our ServiceNow solutions. From concept to measurable ROI, see the impact of intelligent automation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="group bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                        <metric.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.number}</div>
                      <div className="text-xs sm:text-sm text-purple-200">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('case-studies');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700"
                  >
                    <span className="relative flex items-center justify-center">
                      Explore Success Stories
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      Start Your Project
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 w-full">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Enterprise Transformation Success Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-purple-600 to-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">300%+</div>
                      <div className="text-xs text-purple-200">Avg ROI</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">$500M+</div>
                      <div className="text-xs text-blue-200">Value Created</div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                  Featured Success
                </span>
                <br />
                <span className="text-gray-800">Stories</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Discover how industry leaders achieved remarkable transformation results with our ServiceNow solutions.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <div key={study.id} className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                          {study.timeline} timeline
                        </Badge>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                          {study.roi} ROI
                        </Badge>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.title}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-2">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-2">Approach</h4>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{study.approach}</p>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-green-600 mb-3">Results</h4>
                          <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <div className="text-lg sm:text-2xl font-bold text-green-600 mr-2 sm:mr-3">{result.metric}</div>
                                <span className="text-gray-700 text-xs sm:text-sm">{result.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-l-4 border-purple-500">
                          <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed mb-3 text-sm sm:text-base">"{study.testimonial}"</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-600">— {study.clientContact}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs sm:text-sm border border-blue-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Success Story`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-purple-600 to-blue-600"
                          />
                        </div>
                        
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-3 sm:px-4 py-1 sm:py-2 shadow-lg border border-purple-200">
                          <div className="text-base sm:text-lg font-bold text-purple-600">{study.roi}</div>
                          <div className="text-xs text-gray-600">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Section */}
        <section id="case-studies" className="py-8 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  All Case Studies
                </span>
                <br />
                <span className="text-gray-800">Explore by Industry & Solution</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Browse our complete collection of client success stories across industries and solution types.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8 sm:mb-12 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Filter by Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Filter by Solution</label>
                  <select
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                  >
                    {solutions.map((solution) => (
                      <option key={solution} value={solution}>{solution}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 sm:mb-6">
                    <PlaceholderImage
                      title={`${study.client} Case Study`}
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-2 sm:px-3 py-1">
                      {study.industry}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 sm:px-3 py-1">
                      {study.roi} ROI
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {study.client}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                    <div className="text-center p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-base sm:text-lg font-bold text-blue-600">{study.results[0].metric}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">{study.results[0].description}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-base sm:text-lg font-bold text-green-600">{study.results[1].metric}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">{study.results[1].description}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs sm:text-sm text-gray-500">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                      {study.timeline}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-6">
                  <FileText className="h-20 w-20 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No case studies found</h3>
                <p className="text-gray-500 text-lg">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  What Our Clients Say
                </span>
                <br />
                <span className="text-white">About Their Transformation</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear directly from executives who achieved remarkable results with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientTestimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <User className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold">{testimonial.author}</h3>
                            <p className="text-sm sm:text-base text-blue-200">{testimonial.title}</p>
                            <p className="text-purple-200 text-xs sm:text-sm">{testimonial.company}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-blue-400 mb-4" />
                          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-blue-200 text-sm">({testimonial.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-blue-300 font-semibold text-sm sm:text-base">{testimonial.result}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                {clientTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-10 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                  Join Fortune 500 companies who achieved transformational results with our ServiceNow solutions. Let's discuss how we can help you achieve similar success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                    Download Case Studies
                  </button>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">info@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">Schedule a Call</p>
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
