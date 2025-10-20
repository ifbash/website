'use client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Users, Lightbulb, Award, ArrowRight, Globe, Target, Zap, Heart, Shield, TrendingUp, CheckCircle, Star,
  Phone, Mail, Calendar, MapPin, Building, Rocket, Code, Database, Cloud, Settings, Quote, MessageCircle,
  Eye, Brain, Compass, Timer, Play
} from "lucide-react";

export default function AboutUsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IfBash - ServiceNow Solutions & Digital Transformation Experts",
    "alternateName": ["IfBash", "ServiceNow Specialists", "Digital Transformation Company"],
    "description": "Leading ServiceNow solutions provider in Hyderabad & globally. Expert team delivering AI-powered digital transformation, workflow automation, and enterprise innovation. 9+ years experience, 1000+ implementations, certified specialists driving business excellence.",
    "url": "https://ifbash.com",
    "logo": "https://ifbash.com/images/ifbash-logo.png",
    "foundingDate": "2016",
    "founder": {
      "@type": "Person",
      "name": "IfBash Leadership Team"
    },
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India",
      "postalCode": "500001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXX-XXXXXX",
      "contactType": "customer service",
      "email": "info@ifbash.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ifbash",
      "https://twitter.com/ifbash",
      "https://www.youtube.com/c/ifbash"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "knowsAbout": [
      "ServiceNow Implementation",
      "Digital Transformation",
      "Workflow Automation",
      "AI Integration",
      "Enterprise Solutions",
      "Cloud Migration",
      "ITSM",
      "ITOM",
      "CSM",
      "HRSD"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "award": [
      "ServiceNow Elite Partner",
      "Digital Transformation Leader",
      "Innovation Excellence Award"
    ]
  };

  const stats = [
    { number: "9+", label: "Years Experience", description: "ServiceNow expertise", icon: Timer },
    { number: "1000+", label: "Implementations", description: "Successful projects", icon: Rocket },
    { number: "50+", label: "Certified Experts", description: "ServiceNow specialists", icon: Users },
    { number: "25+", label: "Countries Served", description: "Global presence", icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We drive innovation by leveraging ServiceNow and emerging technologies like AI to solve complex business challenges and deliver measurable results that transform organizations.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50",
      metric: "500+ innovations delivered"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our culture is built on teamwork, transparency, and a shared commitment to client success. We believe in partnership-driven approaches that create lasting value.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      metric: "98% client satisfaction rate"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions with continuous improvement, best practices, and measurable business outcomes.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      metric: "Elite Partner recognition"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution we deliver is focused on achieving tangible business results, driving efficiency, reducing costs, and enabling organizational growth through technology.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      metric: "$2.5B+ value generated"
    }
  ];

  const philosophyCards = [
    {
      icon: Eye,
      title: "The Power of \"if\"",
      subtitle: "Curiosity Unleashed",
      description: "Every transformation begins with a question. 'What if we could do things better?' This simple word represents our relentless curiosity and our refusal to accept the status quo.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      stats: "Driving curiosity across 1000+ transformations"
    },
    {
      icon: Zap,
      title: "The Commitment to \"Bash\"",
      subtitle: "Action Delivered",
      description: "We turn every question into intelligent action. Through technology, creativity, and expertise, we transform possibilities into realities that drive measurable business impact.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      stats: "$2.5B+ in client value generated through action"
    }
  ];

  const timeline = [
    { year: "2016", event: "Founded with AI-first vision", impact: "Pioneered intelligent automation consulting" },
    { year: "2018", event: "ServiceNow Elite Partnership", impact: "Became top 1% of global partners" },
    { year: "2020", event: "100+ Fortune 500 clients", impact: "Established enterprise leadership" },
    { year: "2021", event: "AI Innovation Lab launched", impact: "Developed proprietary automation frameworks" },
    { year: "2022", event: "Global expansion completed", impact: "Serving clients across 6 continents" },
    { year: "2023", event: "Partner of the Year Award", impact: "Recognized as #1 ServiceNow innovator" },
    { year: "2024", event: "Next-Gen AI Platform", impact: "Launching revolutionary automation solutions" }
  ];

  const expertise = [
    { icon: Code, title: "ServiceNow Development", description: "Custom applications and workflows", color: "from-blue-500 to-indigo-500" },
    { icon: Database, title: "Data Integration", description: "Seamless system connectivity", color: "from-indigo-500 to-purple-500" },
    { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud implementations", color: "from-purple-500 to-pink-500" },
    { icon: Settings, title: "Process Automation", description: "Intelligent workflow optimization", color: "from-pink-500 to-red-500" },
    { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade governance", color: "from-red-500 to-orange-500" },
    { icon: TrendingUp, title: "Digital Strategy", description: "Transformation roadmaps", color: "from-orange-500 to-yellow-500" }
  ];

  const testimonials = [
    {
      quote: "ifBash didn't just implement ServiceNow—they transformed how we think about automation. Their 'if + Bash' philosophy is exactly what enterprise transformation needs.",
      author: "Maria Rodriguez",
      title: "CTO, Fortune 100 Financial Services",
      company: "GlobalTech Financial",
      result: "$45M operational savings in first year",
      rating: 5
    },
    {
      quote: "The intellectual rigor combined with flawless execution makes ifBash unlike any consulting partner we've worked with. They're true innovation partners.",
      author: "James Wilson",
      title: "Chief Digital Officer",
      company: "MegaCorp Industries",
      result: "156% improvement in process efficiency",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts | Hyderabad</title>
        <meta name="description" content="Leading ServiceNow solutions provider in Hyderabad & globally. Expert team delivering AI-powered digital transformation, workflow automation, and enterprise innovation. 9+ years experience, 1000+ implementations, certified specialists driving business excellence." />
        <meta name="keywords" content="about ifbash, ServiceNow experts, digital transformation company, workflow automation specialists, enterprise solutions, ServiceNow implementation, Hyderabad technology company, AI-powered solutions" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts" />
        <meta property="og:description" content="Expert team delivering AI-powered digital transformation with 9+ years experience, 1000+ implementations, and certified ServiceNow specialists driving business excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/about" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts" />
        <meta name="twitter:description" content="Expert team delivering AI-powered digital transformation with 9+ years experience, 1000+ implementations, and certified ServiceNow specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://ifbash.com/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <a href='/get-started' className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with ifBash Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          {/* THIS IS THE KEY CONTAINER PATTERN */}
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ 9+ Years Experience
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ 1000+ Implementations
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
                    ✓ Elite Partner Status
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-1 sm:px-0">
                  Transforming Businesses with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    ServiceNow Excellence
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  We are a global team of ServiceNow experts dedicated to helping organizations achieve{' '}
                  <span className="font-semibold text-indigo-300">digital transformation</span>, operational excellence, and innovation through world-class workflow automation and AI-powered platform solutions.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  {stats.map((stat, index) => (
                    <div key={index} className="group bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                        <stat.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a 
                    href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <span className="relative flex items-center justify-center">
                      <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Contact Our Team
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                      Our Journey
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 w-full">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="IfBash team collaboration and innovation"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-indigo-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">2016</div>
                      <div className="text-xs text-blue-200">Founded</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Global</div>
                      <div className="text-xs text-indigo-200">Presence</div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Globe className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100/50 to-transparent rounded-full filter blur-3xl" />
          </div>
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="philosophy-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  The Philosophy Behind
                </span>
                <br />
                <span className="text-gray-800">IfBash</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-4xl mx-auto leading-relaxed">
                The name <strong className="text-indigo-600">ifBash</strong> embodies our philosophy and approach to problem-solving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
              {philosophyCards.map((card, index) => (
                <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <card.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{card.title}</h3>
                    <div className="text-base sm:text-lg font-medium text-blue-600 mb-4">{card.subtitle}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-lg">{card.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm font-semibold text-blue-700 mb-1">Impact Metric</div>
                    <div className="text-blue-600 text-sm">{card.stats}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-8 border border-indigo-200/50 max-w-xs sm:max-w-4xl mx-auto">
                <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our story is about combining <strong className="text-indigo-600">vision and execution</strong>. We believe every "if" deserves a "Bash"—and that's how we help organizations transform, grow, and succeed through intelligent automation and digital excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="timeline">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Our Journey
                </span>
                <br />
                <span className="text-white">Through Innovation</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                From startup vision to global ServiceNow leader - here's how we've grown and evolved.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-8 md:space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:border-white/30 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">{event.year}</div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">{event.event}</h3>
                        <p className="text-sm sm:text-base text-blue-200 leading-relaxed">{event.impact}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-8 sm:mb-16" data-animate id="values-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Mission & Values
                </span>
                <br />
                <span className="text-gray-800">That Drive Our Success</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-4xl mx-auto leading-relaxed">
                Our mission is to empower organizations worldwide through innovative ServiceNow solutions that drive digital transformation, enhance operational efficiency, and create lasting business value
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <value.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                    <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-1">Achievement</div>
                    <div className="text-gray-700 text-xs sm:text-sm">{value.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-8 sm:mb-16" data-animate id="expertise-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Comprehensive ServiceNow
                </span>
                <br />
                <span className="text-gray-800">Solutions & Services</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-4xl mx-auto leading-relaxed">
                Our team of certified experts delivers end-to-end ServiceNow solutions across all modules and industries, ensuring successful digital transformation outcomes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
                  What Our Clients Say
                </span>
                <br />
                <span className="text-white">About Working With Us</span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from business leaders who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                            <Globe className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold">{testimonial.author}</h3>
                            <p className="text-sm sm:text-base text-blue-200">{testimonial.title}, {testimonial.company}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-purple-400 mb-4" />
                          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                            {testimonial.quote}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-blue-200 text-sm">({testimonial.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-left sm:text-right">
                            <div className="text-purple-300 font-semibold text-sm sm:text-base">{testimonial.result}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Quote Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm text-center max-w-xs sm:max-w-5xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              
              <blockquote className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 italic mb-4 sm:mb-8 leading-relaxed font-light">
                "We don't just implement technology; we craft digital experiences that transform how organizations work, connect, and grow."
              </blockquote>
              
              <div className="text-gray-600 font-semibold text-base sm:text-lg">
                - IfBash Leadership Team
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center relative z-10">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-6">
              Partner With Us for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                ServiceNow Success
              </span>
            </h2>
            
            <p className="text-xs sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-10 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
              Connect with our team of certified ServiceNow experts to discover how we can help your organization achieve its digital transformation goals and drive measurable business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mb-6 sm:mb-12">
              <a
                href="/get-started" className="w-full sm:w-auto min-h-[48px] flex sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 touch-manipulation"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Our Team
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 touch-manipulation"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <Phone className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Call Us</p>
                <p className="text-blue-200 text-sm">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <Mail className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Email Us</p>
                <p className="text-indigo-200 text-sm">contact@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Visit Us</p>
                <p className="text-purple-200 text-sm">Hyderabad, India</p>
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
