"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  ChevronUp,
  Rocket,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "ServiceNow Implementation", href: "/services/servicenow-implementation" },
    { label: "Agentic AI & Automation", href: "/services/ai-automation" },
    { label: "CRM & Customer Experience", href: "/services/crm-customer-experience" },
    { label: "Managed Services", href: "/services/managed-services-support" },
    { label: "Custom App Development", href: "/services/custom-apps" },
    { label: "Digital Transformation", href: "/services/digital-transformation" },
  ],
  Industries: [
    { label: "Manufacturing", href: "/industries/manufacturing-solutions" },
    { label: "Healthcare", href: "/industries/healthcare-providers" },
    { label: "Financial Services", href: "/industries/technology-software-companies" },
    { label: "Technology", href: "/industries/technology-software-companies" },
    { label: "Energy & Utilities", href: "/industries/energy-utilities" },
    { label: "Public Sector", href: "/industries/public-sector-government" },
  ],
  Company: [
    { label: "About ifBash", href: "/company/about-us" },
    { label: "Client Success Stories", href: "/company/case-studies-client-success" },
    { label: "Careers", href: "/company/careers-servicenow-jobs" },
    { label: "News & Events", href: "/company/news-events-servicenow" },
    { label: "Learning Center", href: "/learning-center-servicenow" },
  ],
};

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#020210", borderTop: "3px solid transparent", borderImage: "linear-gradient(90deg, #4f46e5, #7c3aed, #2563eb) 1" }}>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #4f46e5, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top — logo + newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 py-16 border-b border-white/8">
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="ifBash" width={160} height={36} className="object-contain mb-6" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Your AI partner for ServiceNow. We deliver IT, Employee & Customer workflows infused with agentic AI — 1,500+ enterprises, 73-day average go-live.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Rocket, value: "1,500+", label: "Implementations" },
                { icon: Zap, value: "73 days", label: "Avg go-live" },
                { icon: TrendingUp, value: "180%", label: "Avg ROI" },
                { icon: Users, value: "50+", label: "Certified experts" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span className="text-white font-semibold text-sm">{value}</span>
                  <span className="text-slate-500 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <h3 className="text-white font-semibold mb-2">Stay ahead on ServiceNow</h3>
            <p className="text-slate-400 text-sm mb-4">Best practices, AI trends, and implementation insights — monthly.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-white/8 border border-white/12 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5 shrink-0"
                style={{ background: isSubscribed ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#4f46e5,#7c3aed)", boxShadow: "0 4px 16px rgba(79,70,229,0.3)" }}
              >
                {isSubscribed ? "✓ Done" : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Middle — links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                <span className="text-slate-400 text-sm">connect@ifbash.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-indigo-400 shrink-0" />
                <span className="text-slate-400 text-sm">24/7 support available</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-indigo-400 shrink-0" />
                <span className="text-slate-400 text-sm">Serving clients worldwide</span>
              </div>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", boxShadow: "0 4px 16px rgba(79,70,229,0.3)" }}
              >
                Start a project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-slate-600 text-xs">© 2026 ifBash. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {[
              { href: "https://linkedin.com/company/ifbash", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/ifbashx", icon: Twitter, label: "Twitter" },
              { href: "https://youtube.com/@c-ifbash", icon: Youtube, label: "YouTube" },
              { href: "https://facebook.com/ifbash", icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/8 hover:border-indigo-500/30 flex items-center justify-center transition-all duration-200">
                <Icon className="h-3.5 w-3.5 text-slate-400 hover:text-white" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="text-slate-600 hover:text-slate-300 text-xs transition-colors">{label}</Link>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
