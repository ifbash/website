"use client";

import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  MapPin, 
  Search, 
  Users,
  Trophy,
  Zap,
  ChevronRight,
  Globe,
  Star,
  Award,
  Phone,
  Mail,
  LinkedinIcon,
  Twitter,
  Youtube,
  ArrowRight,
  Eye,
  ExternalLink,
  Filter,
  BookOpen,
  Download,
  Play,
  Building,
  DollarSign,
  BarChart3,
  CheckCircle,
  Target,
  Lightbulb,
  Quote,
  FileText,
  PieChart,
  Settings,
  Rocket,
  Shield
} from "lucide-react";

interface ColorClasses {
  bg: string;
  light: string;
  badge: string;
  button: string;
  text: string;
}

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedSolution, setSelectedSolution] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Enhanced JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies & Success Stories - IfBash ServiceNow Solutions | Client Results & ROI",
    "description": "Explore IfBash's ServiceNow case studies and client success stories. See how we've delivered digital transformation, improved efficiency, and achieved measurable ROI for Fortune 500 companies globally.",
    "url": "https://ifbash.com/case-studies",
    "mainEntity": {
      "@type": "Organization",
      "name": "IfBash - ServiceNow Solutions & Digital Transformation Experts",
      "url": "https://ifbash.com"
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Global Healthcare Provider Transforms Patient Management",
      client: "Fortune 500 Healthcare Company",
      industry: "Healthcare",
      solution: "ITSM & CSM",
      challenge: "Fragmented patient data systems causing delays in care delivery and poor patient experience",
      results: {
        efficiency: "65% faster case resolution",
        satisfaction: "40% increase in patient satisfaction",
        cost: "$2.3M annual cost savings",
        timeframe: "8 months implementation"
      },
      description: "Implemented comprehensive ServiceNow ITSM and CSM solution to unify patient management processes across 50+ facilities, enabling seamless care coordination and improved patient outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      featured: true,
      color: "emerald",
      testimonial: "IfBash transformed our patient management entirely. The efficiency gains have been remarkable, and our staff can now focus on what matters most - patient care.",
      clientRole: "CTO, Healthcare Systems"
    },
    {
      id: 2,
      title: "Manufacturing Giant Achieves Zero-Downtime Operations",
      client: "Global Manufacturing Leader",
      industry: "Manufacturing",
      solution: "ITOM & ITAM",
      challenge: "Frequent production line downtime due to poor IT asset visibility and reactive maintenance",
      results: {
        uptime: "99.7% system uptime achieved",
        efficiency: "75% reduction in downtime",
        cost: "$5.2M annual savings",
        timeframe: "12 months rollout"
      },
      description: "Deployed ServiceNow ITOM and ITAM to provide real-time visibility into IT infrastructure, enabling predictive maintenance and eliminating unexpected production stops.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
      featured: true,
      color: "orange",
      testimonial: "The predictive analytics and automated workflows have revolutionized our operations. We've gone from reactive to proactive, with incredible results.",
      clientRole: "VP of Operations"
    },
    {
      id: 3,
      title: "Financial Services Firm Streamlines Compliance & Risk",
      client: "Top-Tier Investment Bank",
      industry: "Financial Services",
      solution: "GRC & SecOps",
      challenge: "Manual compliance processes creating regulatory risks and inefficient audit preparations",
      results: {
        compliance: "100% audit success rate",
        efficiency: "80% faster compliance reporting",
        risk: "90% reduction in compliance violations",
        timeframe: "6 months implementation"
      },
      description: "Implemented ServiceNow GRC and Security Operations to automate compliance workflows, streamline risk assessments, and ensure regulatory adherence across all business units.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "purple",
      testimonial: "IfBash's expertise in financial regulations made all the difference. Our compliance team can now focus on strategic initiatives rather than manual reporting.",
      clientRole: "Chief Risk Officer"
    },
    {
      id: 4,
      title: "Retail Chain Revolutionizes Employee Experience",
      client: "International Retail Corporation",
      industry: "Retail",
      solution: "HRSD & Employee Workflows",
      challenge: "Inconsistent HR processes across 500+ stores leading to poor employee satisfaction",
      results: {
        satisfaction: "85% employee satisfaction increase",
        efficiency: "70% faster HR case resolution",
        retention: "35% improvement in retention rates",
        timeframe: "10 months deployment"
      },
      description: "Deployed ServiceNow HRSD to standardize HR processes globally, create self-service portals, and automate employee lifecycle management from onboarding to offboarding.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "teal",
      testimonial: "Our employees now have a unified experience regardless of location. The self-service capabilities have transformed our HR operations completely.",
      clientRole: "CHRO"
    },
    {
      id: 5,
      title: "Technology Company Scales Customer Support Operations",
      client: "Leading SaaS Provider",
      industry: "Technology",
      solution: "CSM & Knowledge Management",
      challenge: "Rapid growth overwhelming customer support team with increasing ticket volumes",
      results: {
        response: "50% faster first response time",
        resolution: "60% improvement in resolution rates",
        satisfaction: "45% increase in CSAT scores",
        timeframe: "4 months implementation"
      },
      description: "Implemented ServiceNow CSM with AI-powered knowledge management to scale customer support operations, enabling self-service and intelligent ticket routing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "indigo",
      testimonial: "The AI-powered knowledge base has been a game-changer. Our customers find answers instantly, and our team handles complex issues more efficiently.",
      clientRole: "VP of Customer Success"
    },
    {
      id: 6,
      title: "Energy Company Modernizes Asset Management",
      client: "Renewable Energy Corporation",
      industry: "Energy",
      solution: "ITAM & Field Service Management",
      challenge: "Inefficient tracking of energy assets across multiple geographic locations",
      results: {
        visibility: "100% asset visibility achieved",
        maintenance: "55% reduction in maintenance costs",
        efficiency: "40% improvement in asset utilization",
        timeframe: "14 months rollout"
      },
      description: "Deployed comprehensive ServiceNow ITAM and Field Service Management to track renewable energy assets, optimize maintenance schedules, and improve operational efficiency.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "green",
      testimonial: "IfBash helped us gain complete visibility into our renewable energy assets. The predictive maintenance capabilities have significantly reduced our operational costs.",
      clientRole: "Chief Operations Officer"
    }
  ];

  const industries = ["all", "Healthcare", "Manufacturing", "Financial Services", "Retail", "Technology", "Energy"];
  const solutions = ["all", "ITSM & CSM", "ITOM & ITAM", "GRC & SecOps", "HRSD & Employee Workflows", "CSM & Knowledge Management"];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesSolution = selectedSolution === "all" || study.solution === selectedSolution;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSolution && matchesSearch;
  });

  const featuredStudies = caseStudies.filter(study => study.featured);

  const stats = [
    { number: "50+", label: "Success Stories", description: "Delivered globally", color: "from-emerald-500 to-green-600" },
    { number: "$25M+", label: "Client Savings", description: "Annual cost reductions", color: "from-orange-500 to-red-600" },
    { number: "99%", label: "Client Satisfaction", description: "Success rate", color: "from-purple-500 to-violet-600" },
    { number: "15+", label: "Industries Served", description: "Global reach", color: "from-teal-500 to-cyan-600" }
  ];

  const getColorClasses = (color: string): ColorClasses => {
    const colorMap: Record<string, ColorClasses> = {
      emerald: {
        bg: "from-emerald-500 to-green-600",
        light: "from-emerald-50 to-green-50",
        badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
        button: "from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800",
        text: "text-emerald-600"
      },
      orange: {
        bg: "from-orange-500 to-red-600",
        light: "from-orange-50 to-red-50",
        badge: "bg-orange-100 text-orange-800 border-orange-200",
        button: "from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800",
        text: "text-orange-600"
      },
      purple: {
        bg: "from-purple-500 to-violet-600",
        light: "from-purple-50 to-violet-50",
        badge: "bg-purple-100 text-purple-800 border-purple-200",
        button: "from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800",
        text: "text-purple-600"
      },
      teal: {
        bg: "from-teal-500 to-cyan-600",
        light: "from-teal-50 to-cyan-50",
        badge: "bg-teal-100 text-teal-800 border-teal-200",
        button: "from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800",
        text: "text-teal-600"
      },
      indigo: {
        bg: "from-indigo-500 to-blue-600",
        light: "from-indigo-50 to-blue-50",
        badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
        button: "from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800",
        text: "text-indigo-600"
      },
      green: {
        bg: "from-green-500 to-emerald-600",
        light: "from-green-50 to-emerald-50",
        badge: "bg-green-100 text-green-800 border-green-200",
        button: "from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800",
        text: "text-green-600"
      }
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <>
      <Head>
        <title>Case Studies & Success Stories - IfBash ServiceNow Solutions | Client Results & ROI</title>
        <meta name="description" content="Explore IfBash's ServiceNow case studies and client success stories. See how we've delivered digital transformation, improved efficiency, and achieved measurable ROI for Fortune 500 companies globally." />
        <meta name="keywords" content="ServiceNow case studies, client success stories, digital transformation results, ServiceNow ROI, enterprise solutions, IfBash portfolio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ifbash.com/case-studies" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Fixed Social Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a href="https://linkedin.com/company/ifbash" target="_blank" rel="noopener noreferrer" className="group relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </a>
        <a href="https://twitter.com/ifbash" target="_blank" rel="noopener noreferrer" className="group relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Twitter className="h-5 w-5" />
          </div>
        </a>
        <a href="https://youtube.com/ifbash" target="_blank" rel="noopener noreferrer" className="group relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </div>
        </a>
      </div>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section - Rich Gradient */}
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-orange-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Trophy className="h-8 w-8 text-emerald-400" />
                  <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 px-4 py-2">
                    Case Studies & Success Stories
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                  Proven Results in
                  <span className="block bg-gradient-to-r from-emerald-400 via-orange-400 to-purple-400 bg-clip-text text-transparent font-light">
                    Digital Transformation
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                  Discover how IfBash has helped Fortune 500 companies achieve remarkable results through ServiceNow solutions. Real clients, measurable outcomes, transformative impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-xl"
                    onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Explore Case Studies
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
                    onClick={() => document.getElementById('featured-results')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <BarChart3 className="mr-2 h-5 w-5" />
                    View Results
                  </Button>
                </div>
              </div>

              {/* Colorful Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
                    <div className="relative">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-gray-400 text-xs">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section id="featured-results" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 to-orange-100 text-emerald-800 mb-6 px-4 py-2 border border-emerald-200">
                Featured Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Transformative Results That
                <span className="block bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                  Speak for Themselves
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our clients achieve exceptional outcomes through strategic ServiceNow implementations. Here are some of our most impactful success stories.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study, index) => {
                const colors = getColorClasses(study.color);
                return (
                  <Card key={study.id} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${colors.bg} text-white shadow-lg`}>
                          Featured Case Study
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 font-semibold text-gray-700">
                              <Building className="w-4 h-4" />
                              {study.industry}
                            </span>
                            <span className="flex items-center gap-1 font-semibold text-gray-700">
                              <Settings className="w-4 h-4" />
                              {study.solution}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r hover:from-emerald-600 hover:to-orange-600 transition-all duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      
                      {/* Key Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className={`bg-gradient-to-br ${colors.light} p-3 rounded-lg border`}>
                            <div className="text-lg font-bold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-gradient-to-b from-emerald-500 to-orange-500">
                        <Quote className="w-5 h-5 text-gray-400 mb-2" />
                        <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold text-gray-600">— {study.clientRole}</p>
                      </div>

                      <div className="flex gap-3">
                        <Button className={`bg-gradient-to-r ${colors.button} text-white flex-1`}>
                          Read Full Case Study
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Case Studies Section */}
        <section id="case-studies" className="py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 mb-6 px-4 py-2 border border-purple-200">
                Complete Portfolio
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Explore All Our
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive portfolio of ServiceNow implementations across industries and solutions
              </p>
            </div>

            {/* Filters and Search */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 appearance-none"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>
                        {industry === "all" ? "All Industries" : industry}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <Settings className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 appearance-none"
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                  >
                    {solutions.map(solution => (
                      <option key={solution} value={solution}>
                        {solution === "all" ? "All Solutions" : solution}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => {
                const colors = getColorClasses(study.color);
                return (
                  <Card key={study.id} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={colors.badge}>
                          {study.industry}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {study.solution}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                        {study.description}
                      </p>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-sm font-bold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button variant="ghost" className={`p-0 h-auto font-semibold bg-gradient-to-r ${colors.bg} bg-clip-text text-transparent hover:opacity-80`}>
                          Read Case Study
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Results Summary Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-800 mb-6 px-4 py-2 border border-indigo-200">
                Impact Summary
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Collective Impact Across
                <span className="block bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                  All Our Clients
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, label: "Average ROI", value: "320%", color: "from-green-500 to-emerald-600" },
                { icon: Clock, label: "Faster Resolution", value: "65%", color: "from-blue-500 to-indigo-600" },
                { icon: DollarSign, label: "Cost Savings", value: "$25M+", color: "from-orange-500 to-red-600" },
                { icon: Star, label: "Client Satisfaction", value: "99%", color: "from-purple-500 to-pink-600" }
              ].map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-orange-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Your Success Story?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Create Your Next
              <span className="block bg-gradient-to-r from-emerald-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join our portfolio of successful clients. Partner with IfBash to transform your organization through proven ServiceNow solutions and achieve measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-xl">
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Case Studies
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-emerald-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-orange-300 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-orange-200 text-xs">success@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <MapPin className="h-6 w-6 text-purple-300 mx-auto mb-2" />
                <p className="text-white text-sm">Visit Us</p>
                <p className="text-purple-200 text-xs">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
