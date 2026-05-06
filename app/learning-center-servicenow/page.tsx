'use client';
import React from 'react';
import { ArrowRight, BookOpen, FileText, Video, Lightbulb, GraduationCap, Rocket, Brain, Shield, Workflow, Clock, Users, MessageCircle, Star, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    icon: Rocket,
    title: 'Your first ServiceNow implementation: what actually matters',
    description: 'After 1,500+ go-lives, we\'ve learned that successful implementations come down to about six decisions. Most teams spend months on the wrong ones. This guide walks through what to prioritise — and what to skip — based on real project data.',
    readTime: '12 min',
    level: 'Beginner',
    levelColor: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    icon: Brain,
    title: 'AI in ServiceNow beyond the buzzwords',
    description: 'Now Assist, predictive intelligence, virtual agents — the capabilities are real but most teams use about 20% of what\'s available. This piece covers what each AI feature actually does, where it delivers measurable ROI, and where it\'s still maturing.',
    readTime: '14 min',
    level: 'Intermediate',
    levelColor: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: Workflow,
    title: 'Flow Designer vs Business Rules: when to use what',
    description: 'One of the most common questions our architects get from client teams mid-implementation. The answer isn\'t "always use Flow Designer" — it depends on what you\'re automating, who maintains it, and how it interacts with other workflows.',
    readTime: '9 min',
    level: 'Intermediate',
    levelColor: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: Shield,
    title: 'SecOps deployment: lessons from 200+ security implementations',
    description: 'Security teams are different from IT teams. They have different SLAs, different escalation paths, and different compliance requirements. This guide covers the patterns that work — and the ones that cause security teams to abandon the platform.',
    readTime: '16 min',
    level: 'Advanced',
    levelColor: 'bg-violet-500/15 text-violet-400',
  },
  {
    icon: GraduationCap,
    title: 'Preparing for the CSA exam: what the courses don\'t teach you',
    description: 'The training courses cover the platform. They don\'t cover the exam format, the types of trick questions, or the topics that get disproportionate weight. This is the guide we give every new consultant before they sit for the CSA.',
    readTime: '11 min',
    level: 'All levels',
    levelColor: 'bg-amber-500/15 text-amber-400',
  },
  {
    icon: Clock,
    title: 'The 73-day implementation: how we compress timelines without cutting corners',
    description: 'The big consultancies quote 6-12 months for a ServiceNow implementation. We average 73 days. This isn\'t because we work harder — it\'s because we\'ve automated the setup, testing, and data migration phases that usually eat months. Here\'s the playbook.',
    readTime: '18 min',
    level: 'Practitioner',
    levelColor: 'bg-rose-500/15 text-rose-400',
  },
  {
    icon: Users,
    title: 'Change management for ServiceNow: the adoption playbook',
    description: 'The best-configured platform fails if nobody uses it. This guide covers the adoption patterns we\'ve seen work across manufacturing, healthcare, financial services, and government — including the communication templates we use with clients.',
    readTime: '10 min',
    level: 'Intermediate',
    levelColor: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: Lightbulb,
    title: 'Custom apps on ServiceNow: build vs buy vs configure',
    description: 'ServiceNow\'s App Engine is powerful, but not every problem needs a custom app. Sometimes the best answer is a configuration tweak to an existing module. This decision framework helps you evaluate the right approach for your use case.',
    readTime: '8 min',
    level: 'Intermediate',
    levelColor: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: Star,
    title: 'ITSM that doesn\'t feel like 2005: modern service desk design',
    description: 'Too many ServiceNow instances look and feel like legacy ticketing systems because the configuration follows legacy thinking. This guide covers modern service desk design — self-service first, AI routing, and dashboards people actually check.',
    readTime: '13 min',
    level: 'Intermediate',
    levelColor: 'bg-blue-500/15 text-blue-400',
  },
];

const videoTopics = [
  { title: 'ServiceNow instance walkthrough for new admins', duration: '24 min' },
  { title: 'Building your first flow in Flow Designer', duration: '18 min' },
  { title: 'Virtual Agent setup step by step', duration: '31 min' },
  { title: 'Performance Analytics: building useful dashboards', duration: '22 min' },
  { title: 'Integration Hub: connecting to external systems', duration: '27 min' },
  { title: 'Automated Testing Framework in practice', duration: '19 min' },
];

export default function LearningCenterPage() {
  return (
    <>

      {/* Chat */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.35)' }} aria-label="Ask an expert">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">Ask an expert</span>
        </Link>
      </div>

      {/* ── HERO: full-width, centered ── */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#07071a', minHeight: '50vh' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #4f46e5, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-2 text-indigo-300 text-sm mb-6">
            <BookOpen className="h-4 w-4" />
            Free knowledge from practitioners
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl mx-auto mb-6">
            Learn ServiceNow from people who build it every day.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Practical guides, tutorials, and decision frameworks written by the consultants who deliver 73-day implementations. No theory. No vendor pitch. Just what actually works.
          </p>
        </div>
      </section>

      {/* ── WRITTEN GUIDES ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-indigo-600" />
            <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Written Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">In-depth articles from the field.</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map(({ icon: Icon, title, description, readTime, level, levelColor }) => (
              <div key={title} className="group border border-gray-200 hover:border-indigo-300 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColor}`}>{level}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug group-hover:text-indigo-700 transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {readTime}</span>
                  <span className="text-xs text-indigo-600 font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read guide <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TUTORIALS ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10" style={{ background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-violet-400" />
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Video Tutorials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Watch and build alongside our architects.</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videoTopics.map(({ title, duration }) => (
              <div key={title} className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 hover:border-violet-500/30 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 group-hover:bg-violet-500/25 flex items-center justify-center shrink-0 transition-colors">
                  <Video className="h-5 w-5 text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-violet-400 transition-colors">{title}</h3>
                  <span className="text-xs text-slate-500">{duration}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have a specific question?</h2>
              <p className="text-indigo-100 text-lg max-w-xl mx-auto mb-8">
                Our consultants answer ServiceNow questions every day. No sales pitch — just straight answers from people who build on the platform for a living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white text-indigo-700 transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm">
                  Ask an expert <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all text-sm">
                  Read case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
