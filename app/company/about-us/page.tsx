'use client';
import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Users, Globe, Rocket, Clock, Shield, Heart, Star, Quote, MessageCircle,
  Eye, Zap, TrendingUp, Target
} from 'lucide-react';
import Link from 'next/link';

const milestones = [
  { year: '2016', title: 'Three architects, one idea', body: 'Three senior ServiceNow architects left big consulting firms because they were tired of watching clients get billed for months of "discovery" before anyone wrote a line of code. They started ifBash in a shared office in Hyderabad with a simple bet: deliver in weeks what the big firms deliver in months — and prove it with real metrics, not slide decks.' },
  { year: '2017', title: 'First 50 clients — all referrals', body: 'No sales team. No marketing budget. Every single client in the first two years came from someone who had seen the work and told a colleague. That pattern — do great work, earn trust, get referred — still drives how we grow today.' },
  { year: '2019', title: 'ServiceNow Elite Partner', body: 'Achieved Elite Partner status faster than any India-based firm at the time. The certification wasn\'t the goal — it was a byproduct of the depth of work the team was already doing across ITSM, ITOM, and CSM.' },
  { year: '2021', title: '1,000 go-lives, zero failed launches', body: 'Crossed 1,000 successful implementations. More importantly: not a single client had rolled back or abandoned a deployment. The team\'s methodology — aggressive automation of testing, pre-built accelerators, and relentless focus on adoption metrics — had become a system.' },
  { year: '2023', title: 'AI practice goes from experiment to core', body: 'Started embedding Now Assist, predictive analytics, and virtual agents into every new deployment. Launched a dedicated AI team of 12 engineers focused exclusively on agentic automation — autonomous agents that resolve incidents, route cases, and predict failures without human intervention.' },
  { year: '2025', title: 'Innovation Partner of the Year', body: 'Named ServiceNow Innovation Partner of the Year. The award recognized not just volume of work but the measurable outcomes: across the client portfolio, average incident resolution had dropped 73%, operational costs fell 60%, and client ROI averaged 180% in the first year.' },
];

const values = [
  { icon: Eye, title: 'Start with the question', body: 'Every engagement begins the same way: we sit with the people who actually do the work — not just the stakeholders — and ask "what should be better?" The answers surprise us every time, and they shape everything that follows.' },
  { icon: Zap, title: 'Ship fast, measure everything', body: 'Our average implementation timeline is 73 days — not because we rush, but because we\'ve automated the parts that used to take months. Testing, environment setup, data migration — all accelerated by frameworks we\'ve built and refined across 1,500+ projects.' },
  { icon: Heart, title: 'Care about the outcome, not the contract', body: 'We\'ve walked away from deals where the client wanted a body shop. We only take work where we can be measured on results — resolution times, cost reduction, user adoption. If we can\'t point to a number we improved, we didn\'t do our job.' },
  { icon: TrendingUp, title: 'Earn trust through proof', body: 'Every client gets a live dashboard showing real metrics from day one of go-live. Not a quarterly report — a real-time view of what\'s working, what\'s improving, and what needs attention. Transparency builds trust faster than any sales pitch.' },
];

const testimonials = [
  { quote: 'We vetted seven firms. ifBash was the only one that said "we can go live in 12 weeks" — and actually did it in 11. The other firms quoted 6-8 months. Two years later, our incident resolution is 78% faster and the platform has paid for itself 3 times over.', author: 'Operations Director', context: 'Fortune 500 Manufacturer', metric: '78% faster resolution · 11-week delivery · 3x ROI' },
  { quote: 'What set them apart wasn\'t just the technical skill — it was that they pushed back. When we wanted to over-customise, they showed us how a simpler configuration would get us 90% of the value in half the time. That honest advice saved us months and millions.', author: 'VP of IT', context: 'Global Financial Services Firm', metric: '50% faster delivery · $2M saved in year one' },
  { quote: 'The AI piece is what really surprised us. We expected workflow automation. We didn\'t expect virtual agents resolving 40% of L1 tickets within three months of go-live. Our service desk team went from drowning in tickets to actually having time to solve problems.', author: 'Head of Service Delivery', context: 'Healthcare Network', metric: '40% L1 auto-resolution · 3 months to value' },
];

export default function AboutUsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.35)' }} aria-label="Talk to our team">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">Talk to our team</span>
        </Link>
      </div>

      {/* ── HERO: centered, story-first ── */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#07071a', minHeight: '90vh' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #4f46e5, transparent 60%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] opacity-[0.06]" style={{ background: 'radial-gradient(ellipse at bottom, #7c3aed, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-24 lg:py-32 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Hyderabad · Global', 'Since 2016', '1,500+ Go-Lives'].map((label, i) => {
              const c = ['bg-indigo-500/15 border-indigo-500/30 text-indigo-300', 'bg-violet-500/15 border-violet-500/30 text-violet-300', 'bg-blue-500/15 border-blue-500/30 text-blue-300'];
              return <span key={label} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c[i]}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{label}</span>;
            })}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight max-w-4xl mx-auto mb-6">
            We started with a question.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">It became a company.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Three ServiceNow architects left big consulting because they were tired of watching clients get billed for months of &ldquo;discovery&rdquo; before anyone delivered anything real. They bet they could do better — faster delivery, honest advice, and results you could measure.
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Nine years and 1,500 implementations later, that bet paid off.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.35)' }}>
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all text-sm">
              See the proof
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { v: '1,500+', l: 'Implementations', s: 'Zero failed launches' },
              { v: '73', l: 'Days average delivery', s: 'From kickoff to go-live' },
              { v: '98%', l: 'Client retention', s: 'Most come from referrals' },
              { v: '180%', l: 'Average client ROI', s: 'Measured first year' },
            ].map(({ v, l, s }) => (
              <div key={l} className="rounded-2xl border border-white/8 p-5 text-center transition-all hover:border-indigo-500/30 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{v}</div>
                <div className="text-sm font-semibold text-slate-300 mb-1">{l}</div>
                <div className="text-xs text-slate-500">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STORY: timeline as narrative ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">From three people in a shared office<br />to a global ServiceNow partner.</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-violet-300 to-transparent" />
            <div className="space-y-10">
              {milestones.map(({ year, title, body }) => (
                <div key={year} className="flex gap-5 sm:gap-8 items-start relative pl-10 sm:pl-14">
                  <div className="absolute left-[12px] sm:left-[20px] w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 border-4 border-white shadow z-10" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-indigo-600">{year}</span>
                      <h3 className="font-bold text-gray-900 text-base">{title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK: values ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-full opacity-10" style={{ background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-violet-400" />
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">How We Think</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">Principles that actually guide decisions.</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="group flex gap-5 p-6 rounded-2xl border border-white/8 hover:border-violet-500/30 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE: team note ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-px bg-indigo-600" />
                <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                50+ people across 6 countries.<br />
                One standard for quality.
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>We&apos;re ServiceNow architects, AI engineers, solution consultants, UX designers, and project managers. Most of us came from enterprise IT backgrounds — we&apos;ve been on the client side, so we know what it feels like when a consulting engagement goes sideways.</p>
                <p>Our team is distributed across India, the US, the UK, Germany, Singapore, and Australia. We work remotely by default but maintain delivery hubs in Hyderabad and Amsterdam for client workshops, training, and team gatherings.</p>
                <p>Every team member — regardless of seniority — spends time in client delivery. No &ldquo;advisory only&rdquo; roles. Everyone builds.</p>
              </div>
              <Link href="/company/careers-servicenow-jobs" className="inline-flex items-center gap-2 mt-6 text-indigo-600 font-semibold text-sm hover:underline">
                Join the team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quote card */}
            <div className="rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl" style={{ background: 'linear-gradient(135deg, #f8faff, #f0f0ff)' }}>
              <Quote className="h-10 w-10 text-indigo-200 mb-6" />
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;We don&apos;t hire people who just want to configure ServiceNow. We hire people who care about whether what they build actually makes someone&apos;s workday better. That mindset changes everything — from how we scope projects to how we handle bugs.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">iB</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">ifBash Leadership</div>
                  <div className="text-xs text-gray-500">Founded 2016 · Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-10" style={{ background: 'radial-gradient(ellipse at bottom left, #4f46e5, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-indigo-400" />
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Why Clients Stay</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">What people say after working with us.</h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <div className="rounded-2xl p-8 md:p-12 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="flex justify-center gap-0.5 mb-6">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 text-amber-400 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                      <div className="font-semibold text-white">{t.author}</div>
                      <div className="text-sm text-slate-500 mb-3">{t.context}</div>
                      <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/15 rounded-full px-3 py-1">{t.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-indigo-500 w-7' : 'bg-white/20 hover:bg-white/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Let&apos;s talk about what you need.</h2>
              <p className="text-indigo-100 text-lg max-w-xl mx-auto mb-8">
                No pressure. No pitch deck. Just a conversation about where you are, where you want to go, and whether we can help. We&apos;ll tell you honestly if we&apos;re not the right fit — and point you to someone who is.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white text-indigo-700 transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all text-sm">
                  See client results
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
