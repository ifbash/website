"use client";

import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
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
  Video,
  Mic,
  Building,
  Newspaper,
  CalendarDays,
  Share2,
  Download,
  Play
} from "lucide-react";

interface ColorClasses {
  bg: string;
  light: string;
  badge: string;
  button: string;
  text: string;
}

export default function NewsEventsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Enhanced JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "News & Events - IfBash ServiceNow Solutions | Latest Updates & Industry Events",
    "description": "Stay updated with IfBash's latest ServiceNow news, industry insights, digital transformation events, webinars, and thought leadership content. Join our community events and workshops.",
    "url": "https://ifbash.com/news-events",
    "mainEntity": {
      "@type": "Organization",
      "name": "IfBash - ServiceNow Solutions & Digital Transformation Experts",
      "url": "https://ifbash.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ifbash.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "News & Events",
          "item": "https://ifbash.com/news-events"
        }
      ]
    }
  };

  const newsArticles = [
    {
      id: 1,
      type: "news",
      title: "IfBash Achieves ServiceNow Elite Partner Status for 2024",
      excerpt: "We're thrilled to announce our achievement of ServiceNow Elite Partner status, recognizing our expertise in digital transformation and client success.",
      date: "2024-08-25",
      readTime: "3 min read",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      featured: true,
      color: "emerald"
    },
    {
      id: 2,
      type: "news",
      title: "AI-Powered ServiceNow Solutions: Transforming Enterprise Workflows",
      excerpt: "Explore how IfBash is leveraging AI and machine learning to revolutionize ServiceNow implementations and deliver unprecedented business value.",
      date: "2024-08-20",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "purple"
    },
    {
      id: 3,
      type: "event",
      title: "ServiceNow Knowledge 2025: Join IfBash at the Premier Event",
      excerpt: "Meet our team at ServiceNow Knowledge 2025 in Las Vegas. Discover our latest innovations and connect with our experts at booth #234.",
      date: "2025-05-05",
      readTime: "Event",
      category: "Upcoming Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      featured: true,
      isUpcoming: true,
      color: "orange"
    },
    {
      id: 4,
      type: "webinar",
      title: "Webinar: ServiceNow CSM Best Practices for 2024",
      excerpt: "Join our experts for an exclusive webinar on Customer Service Management best practices, featuring real-world case studies and implementation tips.",
      date: "2024-09-15",
      readTime: "1 hour",
      category: "Webinar",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
      featured: false,
      isUpcoming: true,
      color: "red"
    },
    {
      id: 5,
      type: "news",
      title: "IfBash Expands Global Presence with New European Operations",
      excerpt: "As part of our global expansion strategy, we're excited to announce the opening of our European operations center in Amsterdam.",
      date: "2024-08-10",
      readTime: "4 min read",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      featured: false,
      color: "indigo"
    },
    {
      id: 6,
      type: "event",
      title: "Digital Transformation Summit: Hyderabad Tech Week 2024",
      excerpt: "IfBash is proud to sponsor Hyderabad Tech Week 2024. Join us for keynotes on ServiceNow innovation and digital transformation trends.",
      date: "2024-09-25",
      readTime: "Event",
      category: "Industry Events",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      featured: false,
      isUpcoming: true,
      color: "teal"
    }
  ];

  const upcomingEvents = newsArticles.filter(item => item.isUpcoming);
  
  const filteredItems = newsArticles.filter(item => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const featuredNews = newsArticles.filter(item => item.featured);

  const stats = [
    { number: "50+", label: "News Articles", description: "Published this year", color: "from-orange-500 to-red-500" },
    { number: "25+", label: "Events Hosted", description: "Global webinars", color: "from-purple-500 to-pink-500" },
    { number: "10K+", label: "Community Members", description: "Industry professionals", color: "from-green-500 to-emerald-500" },
    { number: "15+", label: "Industry Awards", description: "Recognition received", color: "from-indigo-500 to-blue-500" }
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
      purple: {
        bg: "from-purple-500 to-violet-600",
        light: "from-purple-50 to-violet-50",
        badge: "bg-purple-100 text-purple-800 border-purple-200",
        button: "from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800",
        text: "text-purple-600"
      },
      orange: {
        bg: "from-orange-500 to-red-600",
        light: "from-orange-50 to-red-50",
        badge: "bg-orange-100 text-orange-800 border-orange-200",
        button: "from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800",
        text: "text-orange-600"
      },
      red: {
        bg: "from-red-500 to-rose-600",
        light: "from-red-50 to-rose-50",
        badge: "bg-red-100 text-red-800 border-red-200",
        button: "from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800",
        text: "text-red-600"
      },
      indigo: {
        bg: "from-indigo-500 to-blue-600",
        light: "from-indigo-50 to-blue-50",
        badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
        button: "from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800",
        text: "text-indigo-600"
      },
      teal: {
        bg: "from-teal-500 to-cyan-600",
        light: "from-teal-50 to-cyan-50",
        badge: "bg-teal-100 text-teal-800 border-teal-200",
        button: "from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800",
        text: "text-teal-600"
      }
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <>
      <Head>
        <title>News & Events - IfBash ServiceNow Solutions | Latest Updates & Industry Events</title>
        <meta
          name="description"
          content="Stay updated with IfBash's latest ServiceNow news, industry insights, digital transformation events, webinars, and thought leadership content. Join our community events and workshops."
        />
        <meta
          name="keywords"
          content="IfBash news, ServiceNow events, digital transformation webinars, ServiceNow partner events, industry insights, technology news, Hyderabad tech events"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="News & Events - IfBash ServiceNow Solutions | Latest Updates & Industry Events" />
        <meta property="og:description" content="Stay updated with IfBash's latest ServiceNow news, industry insights, digital transformation events, webinars, and thought leadership content." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/news-events" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Events - IfBash ServiceNow Solutions | Latest Updates & Industry Events" />
        <meta name="twitter:description" content="Stay updated with IfBash's latest ServiceNow news, industry insights, digital transformation events, webinars, and thought leadership content." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />

        <link rel="canonical" href="https://ifbash.com/news-events" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Fixed Social Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a href="https://linkedin.com/company/ifbash" target="_blank" rel="noopener noreferrer" className="group relative flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </a>
        <a href="https://twitter.com/ifbash" target="_blank" rel="noopener noreferrer" className="group relative flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Twitter className="h-5 w-5" />
          </div>
        </a>
        <a href="https://youtube.com/ifbash" target="_blank" rel="noopener noreferrer" className="group relative flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </div>
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* Hero Section - Vibrant Multi-Color Gradient */}
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-orange-500/20"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Newspaper className="h-8 w-8 text-purple-200" />
                  <Badge className="bg-purple-800/50 text-purple-100 border-purple-600 px-4 py-2">
                    News & Events
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                  Stay Connected with
                  <span className="block bg-gradient-to-r from-pink-200 via-purple-200 to-orange-200 bg-clip-text text-transparent font-light">
                    IfBash Updates
                  </span>
                </h1>
                
                <p className="text-xl text-purple-100 leading-relaxed mb-8 max-w-2xl">
                  Discover the latest ServiceNow innovations, industry insights, and upcoming events from IfBash. Join our community of digital transformation leaders and stay ahead of the curve.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-white text-purple-900 hover:bg-purple-50 rounded-xl transition-all duration-300 shadow-xl"
                    onClick={() => document.getElementById('latest-news')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Latest News
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
                    onClick={() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <CalendarDays className="mr-2 h-5 w-5" />
                    View Events
                  </Button>
                </div>
              </div>

              {/* Colorful Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
                    <div className="relative">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-purple-200 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-purple-300 text-xs">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News Section - Warm Orange Theme */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 mb-6 px-4 py-2 border border-orange-200">
                Featured Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Latest Highlights from
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  IfBash Community
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Stay informed with our most important announcements, breakthrough innovations, and industry-leading insights
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => {
                const colors = getColorClasses(item.color);
                return (
                  <Card key={item.id} className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${colors.bg} text-white shadow-lg`}>
                          {item.isUpcoming ? 'Upcoming' : 'Latest'}
                        </Badge>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                        <Badge className={colors.badge}>
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <Button variant="ghost" className={`p-0 h-auto font-semibold bg-gradient-to-r ${colors.bg} bg-clip-text text-transparent hover:opacity-80`}>
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content Section - Clean White with Colorful Elements */}
        <section id="latest-news" className="py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 mb-6 px-4 py-2 border border-indigo-200">
                All Content
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Explore All Our
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  News & Events
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through our comprehensive collection of news articles, event announcements, and industry insights
              </p>
            </div>

            {/* Colorful Filters and Search */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {[
                    { key: "all", label: "All Content", icon: Globe, color: "from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800" },
                    { key: "news", label: "News", icon: Newspaper, color: "from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800" },
                    { key: "event", label: "Events", icon: CalendarDays, color: "from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800" },
                    { key: "webinar", label: "Webinars", icon: Video, color: "from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800" }
                  ].map(tab => (
                    <Button
                      key={tab.key}
                      className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                        activeTab === tab.key 
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-lg` 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                      }`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </Button>
                  ))}
                </div>
                
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news, events, topics..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Colorful Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => {
                const colors = getColorClasses(item.color);
                return (
                  <Card key={item.id} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.isUpcoming && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                            Upcoming
                          </Badge>
                        )}
                        <Badge className={`bg-gradient-to-r ${colors.bg} text-white shadow-lg`}>
                          {item.type === 'news' ? 'News' :
                           item.type === 'event' ? 'Event' :
                           'Webinar'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                      </div>
                      <Badge className={colors.badge}>
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 mt-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" className={`p-0 h-auto font-semibold bg-gradient-to-r ${colors.bg} bg-clip-text text-transparent hover:opacity-80`}>
                          {item.type === 'event' || item.type === 'webinar' ? 'Learn More' : 'Read More'}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No content found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Events Highlight */}
        <section id="upcoming-events" className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 border border-green-200">
                Don't Miss Out
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Upcoming Events &
                <span className="block text-green-600">
                  Webinars
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Join us for exclusive events, webinars, and industry gatherings where you can connect with ServiceNow experts and fellow professionals
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white">
                        {event.type === 'webinar' ? 'Upcoming Webinar' : 'Upcoming Event'}
                      </Badge>
                    </div>
                    {event.type === 'webinar' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                          <Play className="w-5 h-5 mr-2" />
                          Register Now
                        </Button>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.readTime}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {event.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {event.excerpt}
                    </p>
                    <div className="flex gap-3">
                      <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex-1">
                        {event.type === 'webinar' ? 'Register Now' : 'Learn More'}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-blue-50 rounded-2xl p-12 shadow-lg border border-blue-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Stay in the Loop</h3>
              <p className="text-xl mb-8 text-blue-700">
                Subscribe to our newsletter and never miss important updates, event announcements, or industry insights from IfBash.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-600 mt-4">
                No spam, unsubscribe at any time. Your privacy is important to us.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Rich Multi-Color Gradient */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-teal-500/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              Connect With Us
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the IfBash
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-orange-200 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Connect with our team of ServiceNow experts, attend our events, and be part of the digital transformation conversation that's shaping the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-purple-900 hover:bg-purple-50 rounded-xl transition-all duration-300 shadow-xl">
                <Users className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Meeting
              </Button>
            </div>
            
            {/* Contact Information with Different Colors */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Phone className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-orange-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Mail className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-teal-200 text-xs">news@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <MapPin className="h-6 w-6 text-green-200 mx-auto mb-2" />
                <p className="text-white text-sm">Visit Us</p>
                <p className="text-green-200 text-xs">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
