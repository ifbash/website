"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowRight,
  Linkedin,
  X,
  Youtube,
  Facebook,
  ChevronUp,
  Mic,
} from "lucide-react";
import Image from "next/image";
import { servicenowServices, industryItems, companyItems } from "@/components/nav-data";

const pick = (items: { title: string; href: string }[], titles: string[]) =>
  titles
    .map((t) => items.find((i) => i.title === t))
    .filter((i): i is { title: string; href: string } => Boolean(i))
    .map(({ title, href }) => ({ label: title, href }));

// Mirrors the three practices in the header. ServiceNow first as the
// proven practice; the other two get equal column weight.
const footerLinks = {
  ServiceNow: [
    ...pick(servicenowServices, [
      "ServiceNow Implementation",
      "CRM & Customer Experience",
      "Managed Services",
      "Custom App Development",
    ]),
    { label: "All Services", href: "/services" },
    { label: "Full Product Portfolio", href: "/portfolio" },
  ],
  "AI & Agents": [
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "Voice Agents", href: "/services/voice-agents" },
    { label: "AI Engineering on Claude", href: "/services/claude-ai-engineering" },
    { label: "ServiceNow AI Automation", href: "/services/ai-automation" },
    { label: "Try the live agent", href: "/agent" },
  ],
  "Web & Mobile": [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Practice overview", href: "/services/web-mobile-development" },
    { label: "Our work & demos", href: "/work" },
    { label: "How we engage", href: "/engage" },
  ],
  Industries: [
    ...pick(industryItems, [
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Technology",
      "Energy & Utilities",
      "Public Sector",
    ]),
    { label: "All Industries", href: "/industries" },
  ],
  Company: companyItems.map(({ title, href }) => ({ label: title, href })),
};

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [newsletterState, setNewsletterState] = React.useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || newsletterState === "sending") return;
    setNewsletterState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, serviceInterest: "Newsletter signup", message: "Newsletter subscription request", source: "footer newsletter" }),
      });
      const data = await res.json();
      if (data.ok) {
        setNewsletterState("done");
        setEmail("");
        setTimeout(() => setNewsletterState("idle"), 4000);
      } else {
        setNewsletterState("error");
      }
    } catch {
      setNewsletterState("error");
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#141210", borderTop: "3px solid #1B3A5C" }}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top — logo + newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 py-10 border-b border-[#2E2921] items-start">
          <div>
            <Link href="/">
              {/* Sized and styled to match the header exactly. The explicit inline
                  width/height is what the header does too — without it the box was
                  160x36 instead of 160x34 and `object-contain` let the mark render
                  visibly larger down here than up top.

                  White is a deliberate choice for the dark footer. It is done with a
                  filter because /public has no reversed brand asset; a real white
                  logo (or an inline SVG using currentColor) would be sharper and is
                  the better fix whenever that file exists. */}
              <Image
                src="/images/logo.png"
                alt="ifBash"
                width={160}
                height={34}
                className="object-contain mb-4"
                style={{ width: '160px', height: '34px', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-[#A39C8B] text-sm leading-relaxed max-w-sm mb-2">
              We implement and run ServiceNow, then build the AI layer on top — agents and assistants engineered on Claude, and the web &amp; mobile surfaces they live in.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Stay ahead on AI agents &amp; ServiceNow</h3>
            <p className="text-[#A39C8B] text-sm mb-4">Agent patterns, AI trends, and implementation insights — monthly.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <label htmlFor="footer-newsletter" className="sr-only">Email address for the newsletter</label>
              <input
                id="footer-newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-full text-sm bg-[#221E17] border border-[#2E2921] text-white placeholder-[#8C8472] focus:outline-none focus:border-[#1B3A5C]/60 transition-colors"
              />
              <button
                type="submit"
                disabled={newsletterState === "sending"}
                className="px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5 shrink-0 disabled:opacity-60"
                style={{ background: newsletterState === "done" ? "#3E7A52" : "#1B3A5C", boxShadow: "0 4px 16px rgba(27,58,92,0.3)" }}
              >
                {newsletterState === "done" ? "✓ Done" : newsletterState === "sending" ? "…" : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
            {newsletterState === "error" && (
              <p className="text-red-400 text-xs mt-2">Could not subscribe right now — email us at connect@ifbash.com instead.</p>
            )}
          </div>
        </div>

        {/* Middle — links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 py-14 border-b border-[#2E2921]">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-[#A39C8B] hover:text-[#E9EFF5] text-sm transition-colors">
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
                <Mail className="h-4 w-4 text-[#7C9AB8] shrink-0" />
                <span className="text-[#A39C8B] text-sm">connect@ifbash.com</span>
              </div>
              <div className="flex items-center gap-2.5 mb-6">
                <MapPin className="h-4 w-4 text-[#7C9AB8] shrink-0" />
                <span className="text-[#A39C8B] text-sm">Serving clients worldwide</span>
              </div>

              <div className="pt-4 border-t border-[#2E2921] mt-6">
                <p className="text-[#A39C8B] text-xs mb-3 leading-relaxed">
                  Ready to move on ServiceNow — or build your first agent? Start with a conversation, no commitment.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5 self-start"
                    style={{ background: "#1B3A5C", boxShadow: "0 4px 16px rgba(27,58,92,0.3)" }}
                  >
                    Start a project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/agent"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#F3F0E9] border border-[#2E2921] hover:border-[#1B3A5C]/60 hover:text-white transition-all self-start"
                  >
                    <Mic className="h-3.5 w-3.5" /> Talk to our agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-[#8C8472] text-xs">© 2026 ifBash. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {[
              { href: "https://linkedin.com/company/ifbash", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/ifbashx", icon: X, label: "X" },
              { href: "https://youtube.com/@c-ifbash", icon: Youtube, label: "YouTube" },
              { href: "https://facebook.com/ifbash", icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg bg-[#221E17] hover:bg-[#1B3A5C]/20 border border-[#2E2921] hover:border-[#1B3A5C]/40 flex items-center justify-center transition-all duration-200">
                <Icon className="h-3.5 w-3.5 text-[#A39C8B] hover:text-white" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="text-[#8C8472] hover:text-[#F3F0E9] text-xs transition-colors">{label}</Link>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-7 h-7 rounded-lg bg-[#221E17] hover:bg-[#2E2921] border border-[#2E2921] flex items-center justify-center transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-3.5 w-3.5 text-[#A39C8B]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
