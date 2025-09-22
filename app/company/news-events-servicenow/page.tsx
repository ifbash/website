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
Newspaper
} from "lucide-react";

// TypeScript interfaces
interface EventDetails {
  time?: string;
  duration?: string;
  location?: string;
  registrationRequired?: boolean;
}

interface NewsEvent {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  type: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured: boolean;
  tags: string[];
  eventDetails?: EventDetails;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  duration: string;
  attendees: string;
  speaker?: string;
  location?: string;
}

export default function NewsEventsPage() {
const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedType, setSelectedType] = useState("All");
const [searchTerm, setSearchTerm] = useState("");
const [currentFeatured, setCurrentFeatured] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentFeatured(prev => (prev + 1) % featuredNews.length);
  }, 8000);
  return () => clearInterval(interval);
}, []);

// Utility functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const isUpcoming = (dateString: string) => {
  return new Date(dateString) > new Date();
};

// SEO JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "IfBash News & Events - ServiceNow Industry Updates",
  "description": "Stay updated with latest ServiceNow news, industry insights, webinars, and events from ifBash. Digital transformation trends, thought leadership, and expert perspectives.",
  "url": "https://ifbash.com/news-events",
  "publisher": {
    "@type": "Organization",
    "name": "IfBash",
    "url": "https://ifbash.com"
  }
};

// Featured News
const featuredNews: NewsEvent[] = [
  {
    id: 1,
    title: "ifBash Named ServiceNow Partner of the Year 2024",
    excerpt: "Recognized for outstanding innovation and client success in digital transformation initiatives across Fortune 500 companies.",
    category: "Company News",
    type: "Award",
    date: "2024-09-15",
    readTime: "3 min read",
    author: "Sarah Johnson, CEO",
    image: "/images/news/partner-of-year-2024.jpg",
    featured: true,
    tags: ["Awards", "ServiceNow", "Recognition"]
  },
  {
    id: 2,
    title: "AI-Powered Automation: The Future of Enterprise Operations",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes and transforming enterprise operations at scale.",
    category: "Industry Insights",
    type: "Thought Leadership",
    date: "2024-09-10",
    readTime: "7 min read",
    author: "Dr. Michael Torres, CTO",
    image: "/images/news/ai-automation-future.jpg",
    featured: true,
    tags: ["AI", "Automation", "Enterprise"]
  },
  {
    id: 3,
    title: "ServiceNow Washington DC Summit 2024: Key Takeaways",
    excerpt: "Comprehensive coverage of the latest ServiceNow announcements, product updates, and industry trends from the DC Summit.",
    category: "Event Coverage",
    type: "Conference",
    date: "2024-09-05",
    readTime: "10 min read",
    author: "Jennifer Park, Solution Architect",
    image: "/images/news/servicenow-summit-dc.jpg",
    featured: true,
    tags: ["ServiceNow", "Summit", "Updates"]
  }
];

// All News & Events
const allNewsEvents: NewsEvent[] = [
  ...featuredNews,
  {
    id: 4,
    title: "Webinar: Modernizing IT Service Management with ServiceNow",
    excerpt: "Join our experts for an in-depth discussion on transforming ITSM processes and achieving operational excellence.",
    category: "Webinars",
    type: "Webinar",
    date: "2024-10-15",
    readTime: "60 min",
    author: "ifBash Expert Panel",
    image: "/images/news/itsm-webinar.jpg",
    featured: false,
    tags: ["ITSM", "Webinar", "Modernization"],
    eventDetails: {
      time: "2:00 PM IST",
      duration: "60 minutes",
      registrationRequired: true
    }
  },
  {
    id: 5,
    title: "How Manufacturing Leaders Achieve 300% ROI with ServiceNow",
    excerpt: "Case study analysis revealing the strategies and implementations that drive exceptional returns in manufacturing.",
    category: "Case Studies",
    type: "Analysis",
    date: "2024-09-20",
    readTime: "8 min read",
    author: "David Kim, Industry Lead",
    image: "/images/news/manufacturing-roi-study.jpg",
    featured: false,
    tags: ["Manufacturing", "ROI", "Case Study"]
  },
  {
    id: 6,
    title: "ifBash Expands Global Presence with New European Office",
    excerpt: "Opening our Amsterdam office to better serve European clients and expand our ServiceNow consulting capabilities.",
    category: "Company News",
    type: "Expansion",
    date: "2024-09-18",
    readTime: "4 min read",
    author: "Maria Santos, VP Global Operations",
    image: "/images/news/amsterdam-office-opening.jpg",
    featured: false,
    tags: ["Expansion", "Europe", "Growth"]
  },
  {
    id: 7,
    title: "Digital Transformation Trends: What to Expect in 2025",
    excerpt: "Industry forecast covering emerging technologies, automation trends, and strategic priorities for digital leaders.",
    category: "Industry Insights",
    type: "Forecast",
    date: "2024-09-12",
    readTime: "12 min read",
    author: "Research Team",
    image: "/images/news/2025-digital-trends.jpg",
    featured: false,
    tags: ["Trends", "2025", "Digital Transformation"]
  },
  {
    id: 8,
    title: "Healthcare Innovation Summit: Transforming Patient Care",
    excerpt: "Join healthcare leaders discussing technology's role in improving patient outcomes and operational efficiency.",
    category: "Events",
    type: "Summit",
    date: "2024-11-20",
    readTime: "Full day",
    author: "Healthcare Practice Team",
    image: "/images/news/healthcare-innovation-summit.jpg",
    featured: false,
    tags: ["Healthcare", "Innovation", "Patient Care"],
    eventDetails: {
      location: "Mumbai, India",
      time: "9:00 AM IST",
      duration: "8 hours",
      registrationRequired: true
    }
  },
  {
    id: 9,
    title: "ServiceNow Security Operations: Best Practices Guide",
    excerpt: "Comprehensive guide covering security automation, incident response, and threat intelligence with ServiceNow.",
    category: "Resources",
    type: "Guide",
    date: "2024-09-08",
    readTime: "15 min read",
    author: "Security Practice Team",
    image: "/images/news/security-ops-guide.jpg",
    featured: false,
    tags: ["Security", "Best Practices", "Guide"]
  },
  {
    id: 10,
    title: "Client Spotlight: Financial Services Digital Transformation",
    excerpt: "How a leading bank achieved 89% efficiency improvement and $45M savings through comprehensive ServiceNow implementation.",
    category: "Client Stories",
    type: "Success Story",
    date: "2024-09-03",
    readTime: "6 min read",
    author: "Client Success Team",
    image: "/images/news/financial-transformation-story.jpg",
    featured: false,
    tags: ["Financial Services", "Success Story", "Transformation"]
  }
];

// Upcoming Events
const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: "ServiceNow ITSM Masterclass",
    date: "2024-10-15",
    time: "2:00 PM IST",
    type: "Webinar",
    duration: "90 minutes",
    attendees: "250+ registered",
    speaker: "ifBash Expert Panel"
  },
  {
    id: 2,
    title: "Healthcare Innovation Summit",
    date: "2024-11-20",
    time: "9:00 AM IST",
    type: "In-Person",
    duration: "Full day",
    location: "Mumbai, India",
    attendees: "500+ expected"
  },
  {
    id: 3,
    title: "Manufacturing Digital Forum",
    date: "2024-12-05",
    time: "10:00 AM IST",
    type: "Hybrid",
    duration: "4 hours",
    location: "Pune, India",
    attendees: "300+ registered"
  }
];

// Filters
const categories = ["All", "Company News", "Industry Insights", "Webinars", "Events", "Case Studies", "Resources", "Client Stories", "Event Coverage"];
const types = ["All", "Award", "Thought Leadership", "Conference", "Webinar", "Analysis", "Expansion", "Forecast", "Summit", "Guide", "Success Story"];

// Filter logic
const filteredNews = allNewsEvents.filter(item => {
  const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
  const matchesType = selectedType === "All" || item.type === selectedType;
  const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  return matchesCategory && matchesType && matchesSearch;
});

return (
  <>
    <Head>
      <title>News & Events - Latest ServiceNow Updates & Industry Insights | ifBash</title>
      <meta
        name="description"
        content="Stay updated with latest ServiceNow news, industry insights, webinars, and events from ifBash. Digital transformation trends, thought leadership, and expert perspectives."
      />
      <meta
        name="keywords"
        content="ServiceNow news, digital transformation insights, ifbash events, ServiceNow webinars, industry trends, thought leadership, enterprise automation news"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="News & Events - Latest ServiceNow Updates | ifBash" />
      <meta property="og:description" content="Stay updated with latest ServiceNow news, industry insights, webinars, and events from digital transformation experts." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ifbash.com/news-events" />

      <link rel="canonical" href="https://ifbash.com/news-events" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>

    {/* Fixed Chat Button */}
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
      <button 
        onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
        className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
        aria-label="Get Latest Updates"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[140px] text-center">
          Get Latest Updates
        </span>
        <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
      </button>
    </div>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float delay-150 opacity-40" />
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              {/* Trust Badges */}
              <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                <Badge className="bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  ✓ Industry Leaders
                </Badge>
                <Badge className="bg-gradient-to-r from-red-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                  ✓ Expert Insights
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                  ✓ Latest Updates
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                News &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                  Events
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                  Stay{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 font-semibold">
                    Connected
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
                Stay updated with the latest{' '}
                <span className="font-semibold text-red-300">ServiceNow innovations</span>, industry insights, expert perspectives, and exclusive events. Join our community of{' '}
                <span className="font-semibold text-pink-300">digital transformation leaders</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <button 
                  onClick={() => {
                    const latestNewsElement = document.getElementById('latest-news');
                    if (latestNewsElement) {
                      latestNewsElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700"
                  style={{
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Explore Latest News
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative flex items-center justify-center">
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                    View Events
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side Visual Content */}
            <div className="relative lg:h-[600px]">
              <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                  <PlaceholderImage
                    title="Latest ServiceNow News and Industry Updates"
                    className="w-full h-full object-cover"
                    gradient="from-orange-600 to-red-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">50+</div>
                    <div className="text-xs text-orange-200">Articles</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">25+</div>
                    <div className="text-xs text-red-200">Events</div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Newspaper className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                  <div className="w-full h-full bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                Featured
              </span>
              <br />
              <span className="text-gray-800">
                News & Updates
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest announcements, industry insights, and thought leadership content.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFeatured * 100}%)` }}>
                {featuredNews.map((news, index) => (
                  <div key={news.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center mb-4">
                          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm px-4 py-2">
                            {news.category}
                          </Badge>
                          <Badge className="ml-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 text-sm px-4 py-2">
                            {news.type}
                          </Badge>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                          {news.title}
                        </h3>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                          {news.excerpt}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-2" />
                            {formatDate(news.date)}
                            <span className="mx-2">•</span>
                            {news.readTime}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <User className="h-4 w-4 mr-2" />
                            {news.author}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {news.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 text-sm rounded-full border border-orange-200">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg group">
                          Read Full Article
                          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>

                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <PlaceholderImage
                            title={news.title}
                            className="w-full h-full object-cover"
                            gradient="from-orange-600 to-red-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatured(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeatured 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
                Upcoming Events
              </span>
              <br />
              <span className="text-gray-800">
                Join Our Community
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Connect with industry experts, learn from thought leaders, and network with peers at our upcoming events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800 text-sm px-4 py-2">
                    {event.type}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{new Date(event.date).getDate()}</div>
                    <div className="text-xs text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-red-500" />
                    <span className="text-sm">{event.time} • {event.duration}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 text-pink-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm">{event.attendees}</span>
                  </div>
                  {event.speaker && (
                    <div className="flex items-center text-gray-600">
                      <Mic className="h-4 w-4 mr-3 text-orange-500" />
                      <span className="text-sm">{event.speaker}</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News & Events Section */}
      <section id="latest-news" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                All News & Events
              </span>
              <br />
              <span className="text-gray-800">
                Browse Our Complete Collection
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive archive of news, insights, events, and thought leadership content.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search news and events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* News & Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <PlaceholderImage
                    title={item.title}
                    className="w-full h-full object-cover"
                    gradient="from-red-600 to-pink-600"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`text-xs px-3 py-1 ${
                    isUpcoming(item.date) 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' 
                      : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800'
                  }`}>
                    {item.category}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-xs px-3 py-1">
                    {item.type}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gradient-to-r from-gray-100 to-red-50 text-gray-700 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {formatDate(item.date)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.readTime}
                  </div>
                </div>

                {item.eventDetails && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="text-sm text-green-800 font-semibold mb-1">Event Details</div>
                    <div className="text-xs text-green-700">
                      {item.eventDetails.time} • {item.eventDetails.duration}
                      {item.eventDetails.location && ` • ${item.eventDetails.location}`}
                    </div>
                  </div>
                )}

                <button className="mt-4 w-full text-red-600 hover:text-red-700 font-medium text-sm flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  {isUpcoming(item.date) ? 'Register Now' : 'Read More'}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <Newspaper className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No news or events found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Stay in the Loop
              </h2>
              <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Subscribe to our newsletter for the latest ServiceNow insights, industry trends, event updates, and exclusive content delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                  />
                  <button className="px-6 py-3 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Bell className="mr-2 h-5 w-5 inline" />
                  Get Event Notifications
                </button>
                <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Share2 className="mr-2 h-5 w-5 inline" />
                  Follow on Social
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">news@ifbash.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Event Calendar</p>
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

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
