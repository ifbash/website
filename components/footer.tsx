"use client";

import * as React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Globe,
  Users,
  Target,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Star,
  ChevronUp,
  Code,
  Rocket,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div
        className="relative z-10"
        style={{
          background: "linear-gradient(135deg, #1a2e61 0%, #2a1810 50%, #1a2e61 100%)",
          color: "white",
        }}
      >
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Stay Ahead with ServiceNow Insights
                  </span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Get the latest ServiceNow trends, implementation best practices, and industry insights delivered directly to your inbox.
                </p>
              </div>
              <div className="lg:text-right">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribed}
                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 border-0"
                    style={{
                      background: isSubscribed ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    {isSubscribed ? (
                      <>
                        <Star className="h-4 w-4 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information & Company Highlights */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      {/* <p className="text-white font-medium">+1 (800) IFBASH-1</p> */}
                      <p className="text-white font-medium">24/7 Support Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">connect@ifbash.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      {/* <p className="text-white font-medium">Global Headquarters</p> */}
                      <p className="text-white font-medium">Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Values & Strengths */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                  Why Choose ifBash
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Globe className="h-6 w-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">Global Reach</p>
                      <p className="text-slate-400 text-xs">Worldwide Service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Users className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">Expert Team</p>
                      <p className="text-slate-400 text-xs">Certified Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Rocket className="h-6 w-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">Fast Delivery</p>
                      <p className="text-slate-400 text-xs">Rapid Implementation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Lightbulb className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">Innovation Focus</p>
                      <p className="text-slate-400 text-xs">Cutting-edge Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                  Ready to Transform?
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Start your ServiceNow journey with our expert team. From strategy to implementation, we're here to help you succeed.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center w-full justify-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Start Your Project
                  </Link>
                  <Link
                    href="/learning-center-servicenow"
                    className="inline-flex items-center w-full justify-center px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Learning Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Logo & Copyright */}
              <div className="flex items-center space-x-6">
                <Link href="/" className="flex items-center group">
                  <div className="w-[140px] h-[32px] relative">
                    <Image 
                      src="/images/logo.png" 
                      alt="ifBash Logo" 
                      width={140}
                      height={32}
                      className="object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                </Link>
                <div className="hidden lg:block w-px h-8 bg-white/20"></div>
                <p className="text-slate-400 text-sm">
                  © 2026 ifBash. All rights reserved.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <span className="text-slate-400 text-sm hidden md:inline">Follow us:</span>
                <div className="flex items-center space-x-3">
                  <Link
                    href="https://linkedin.com/company/ifbash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow ifBash on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://twitter.com/ifbashx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow ifBash on Twitter"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://youtube.com/@c-ifbash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Subscribe to ifBash on YouTube"
                  >
                    <Youtube className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://facebook.com/ifbash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-blue-800 transition-all duration-300 transform hover:scale-110"
                    aria-label="Like ifBash on Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
                <button
                  onClick={scrollToTop}
                  className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    </footer>
  );
}
