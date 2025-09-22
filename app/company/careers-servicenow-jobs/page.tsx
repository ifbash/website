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
  Phone
} from "lucide-react";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % employeeStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // SEO JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IfBash Careers - Join Our ServiceNow Team",
    "description": "Join ifBash's growing team of ServiceNow experts. Competitive benefits, remote work options, career growth opportunities. Build your future in digital transformation.",
    "url": "https://ifbash.com/careers",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      }
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "IfBash",
      "url": "https://ifbash.com"
    }
  };

  // Job Openings
  const jobOpenings = [
    {
      id: 1,
      title: "Senior ServiceNow Developer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead ServiceNow development projects and mentor junior developers in enterprise automation solutions.",
      skills: ["ServiceNow", "JavaScript", "REST APIs", "ITIL", "Agile"],
      salary: "₹15-25 LPA"
    },
    {
      id: 2,
      title: "ServiceNow Solution Architect",
      department: "Consulting",
      location: "Hybrid / Remote",
      type: "Full-time", 
      experience: "7+ years",
      description: "Design and architect enterprise ServiceNow solutions for Fortune 500 clients across multiple industries.",
      skills: ["ServiceNow", "Enterprise Architecture", "ITSM", "ITOM", "CSM"],
      salary: "₹20-35 LPA"
    },
    {
      id: 3,
      title: "Business Process Consultant",
      department: "Consulting",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Analyze and optimize business processes to maximize ServiceNow implementation value for clients.",
      skills: ["Process Optimization", "ITIL", "Change Management", "ServiceNow", "Analytics"],
      salary: "₹12-20 LPA"
    },
    {
      id: 4,
      title: "UX/UI Designer - ServiceNow",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years", 
      description: "Create intuitive user experiences for ServiceNow applications and portals that delight end users.",
      skills: ["UI/UX Design", "ServiceNow Portal", "Figma", "HTML/CSS", "User Research"],
      salary: "₹10-18 LPA"
    },
    {
      id: 5,
      title: "Technical Project Manager",
      department: "Operations",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead complex ServiceNow implementation projects from initiation to successful delivery.",
      skills: ["Project Management", "ServiceNow", "Agile", "Scrum", "Client Management"],
      salary: "₹15-25 LPA"
    },
    {
      id: 6,
      title: "ServiceNow Sales Engineer",
      department: "Sales",
      location: "Bangalore / Remote", 
      type: "Full-time",
      experience: "4+ years",
      description: "Drive pre-sales technical activities and demonstrate ServiceNow value to prospective clients.",
      skills: ["ServiceNow", "Technical Sales", "Solution Design", "Presentations", "CRM"],
      salary: "₹12-22 LPA"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical coverage and wellness programs for you and your family",
      items: ["Premium health insurance", "Mental health support", "Fitness membership", "Wellness stipend"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear advancement paths",
      items: ["ServiceNow certifications", "Conference attendance", "Mentorship programs", "Leadership training"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Work-Life Balance",
      description: "Flexible work arrangements that support your personal life",
      items: ["Remote work options", "Flexible hours", "Unlimited PTO", "Sabbatical programs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive compensation and comprehensive financial benefits",
      items: ["Competitive salary", "Performance bonuses", "ESOP participation", "Retirement planning"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  // Company Culture Values
  const cultureValues = [
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "We believe the best solutions come from diverse teams working together toward common goals.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "We invest in our people's growth because curious minds drive innovation and transformation.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Client-Centric Impact",
      description: "Every project we undertake is focused on delivering measurable value to our clients.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We build lasting relationships through transparency, honesty, and reliable delivery.",
      color: "from-pink-500 to-red-500"
    }
  ];

  // Employee Stories
  const employeeStories = [
    {
      name: "Priya Sharma",
      title: "Senior ServiceNow Developer",
      story: "ifBash gave me the opportunity to work on cutting-edge projects while providing continuous learning and growth. The mentorship here is incredible.",
      experience: "2 years at ifBash",
      rating: 5,
      department: "Engineering"
    },
    {
      name: "Rajesh Kumar",
      title: "Solution Architect",
      story: "The collaborative culture and challenging projects have accelerated my career beyond my expectations. ifBash truly invests in its people.",
      experience: "3 years at ifBash",
      rating: 5,
      department: "Consulting"
    },
    {
      name: "Anita Patel",
      title: "UX Designer",
      story: "Working at ifBash has been transformative. The team's support and the innovative projects have helped me grow both professionally and personally.",
      experience: "1.5 years at ifBash",
      rating: 5,
      department: "Design"
    }
  ];

  const departments = ["All", "Engineering", "Consulting", "Design", "Operations", "Sales"];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Careers at IfBash - Join Our ServiceNow Team | Remote & Hyderabad Jobs</title>
        <meta
          name="description"
          content="Join ifBash's growing team of ServiceNow experts. Competitive benefits, remote work options, career growth opportunities. Build your future in digital transformation with us."
        />
        <meta
          name="keywords"
          content="ifbash careers, ServiceNow jobs, remote jobs India, Hyderabad tech jobs, digital transformation careers, ServiceNow developer jobs, solution architect jobs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Careers at IfBash - Join Our ServiceNow Team" />
        <meta property="og:description" content="Join our growing team of ServiceNow experts. Competitive benefits, remote work options, and career growth opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/careers" />

        <link rel="canonical" href="https://ifbash.com/careers" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with HR"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with HR
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-green-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                    ✓ Remote-First Culture
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    ✓ Competitive Benefits
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    ✓ Career Growth
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  Join the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 font-semibold">
                    ifBash Team
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    Build Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Future
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
                  Help organizations transform their "what if" questions into intelligent automation solutions. Build your career while making a real impact on the{' '}
                  <span className="font-semibold text-blue-300">future of work</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() =>
  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 hover:from-green-700 hover:via-blue-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Meet the Team
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ifBash Team Culture and Growth"
                      className="w-full h-full object-cover"
                      gradient="from-green-600 to-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">50+</div>
                      <div className="text-xs text-green-200">Team Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Remote</div>
                      <div className="text-xs text-blue-200">First Culture</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why ifBash Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                  Why Choose
                </span>
                <br />
                <span className="text-gray-800">
                  ifBash?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Join a team where curiosity meets action, where every "if" becomes an opportunity to create transformational solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Perks Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Benefits & Perks
                </span>
                <br />
                <span className="text-gray-800">
                  We Invest in Our People
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive benefits designed to support your personal and professional growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{benefit.description}</p>
                      <ul className="space-y-3">
                        {benefit.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
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

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Open Positions
                </span>
                <br />
                <span className="text-gray-800">
                  Find Your Next Opportunity
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Join our mission to transform organizations through intelligent automation and ServiceNow excellence.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDepartment === dept
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="group bg-white rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{job.title}</h3>
                        <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                          {job.department}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                          {job.salary}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                        <span className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap className="h-5 w-5 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-xl text-sm font-medium border border-blue-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                        className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5 inline" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-6">
                  <Briefcase className="h-20 w-20 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No positions found</h3>
                <p className="text-gray-500 text-lg">Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </section>

        {/* Employee Stories Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
                  What Our Team Says
                </span>
                <br />
                <span className="text-white">
                  About Working at ifBash
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Hear from our team members about their growth journey and experiences at ifBash.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {employeeStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-6">
                            <User className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-blue-200">{story.title}</p>
                            <p className="text-purple-200 text-sm">{story.experience}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-purple-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                            "{story.story}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-3">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-blue-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/30">
                              {story.department}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {employeeStories.map((_, index) => (
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Make Your Mark?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Don't see the perfect role? We're always looking for exceptional talent to join our growing team. Send us your resume and let's explore opportunities together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Us Your Resume
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Calendar className="mr-2 h-5 w-5 inline" />
                    Schedule a Chat
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">careers@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
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
