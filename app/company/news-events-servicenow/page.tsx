'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Clock, MapPin, Users, Calendar, Quote, Star, MessageCircle, Mail, Bell, Newspaper, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const featuredArticles = [
  {
    title: 'What we learned from 1,500 ServiceNow go-lives',
    category: 'Lessons from the Field',
    type: 'Article',
    date: '2026-03-12',
    readTime: '14 min',
    author: 'Architecture Team',
    excerpt: 'After 1,500 implementations, patterns emerge. This piece covers the six decisions that correlate most strongly with project success — and the three that surprisingly don\'t matter at all. Some findings contradict what ServiceNow\'s own implementation methodology recommends. We explain why.',
    tags: ['Implementation', 'Best Practices', 'Lessons Learned'],
  },
  {
    title: 'Agentic AI on ServiceNow: what\'s real and what\'s still science fiction',
    category: 'Technology Analysis',
    type: 'Article',
    date: '2026-02-28',
    readTime: '11 min',
    author: 'AI Practice Lead',
    excerpt: 'We\'ve deployed Now Assist, Virtual Agent, and predictive intelligence across dozens of client environments. Some of it is genuinely transformative. Some of it still needs another year or two of maturing before it\'s enterprise-ready. This is our honest assessment of the current state — not the marketing version.',
    tags: ['AI', 'Now Assist', 'Virtual Agent', 'Reality Check'],
  },
  {
    title: 'ServiceNow Washington DC release: the features that actually change things',
    category: 'Platform Updates',
    type: 'Analysis',
    date: '2026-01-20',
    readTime: '9 min',
    author: 'Technical Architecture Team',
    excerpt: 'Every release comes with a long list of new features. Most of them are incremental. A few are genuinely important. We cut through the noise and identify the four Washington DC changes that will actually affect how you build and run your ServiceNow instance.',
    tags: ['Washington DC', 'Platform', 'Release Notes'],
  },
];

const events = [
  {
    title: 'ServiceNow ITSM Masterclass: from out-of-the-box to actually useful',
    date: '2026-05-28',
    time: '3:00 PM IST',
    type: 'Webinar',
    duration: '75 minutes',
    speaker: 'Lead ITSM Architect & Senior Developer',
    about: 'Most ITSM deployments stay too close to baseline — they technically work but nobody likes using them. This session covers the configurations, UI changes, and automation patterns that turn a functional ITSM instance into one your teams actually prefer.',
    registered: '380+',
  },
  {
    title: 'Building your first custom app on ServiceNow: a hands-on workshop',
    date: '2026-06-12',
    time: '11:00 AM IST',
    type: 'Webinar',
    duration: '90 minutes',
    speaker: 'App Engine Team Lead',
    about: 'Bring your laptop. We\'ll build a working custom application on App Engine together — from data model to UI to workflow. This is not a demo. You\'ll follow along and have a functioning app by the end.',
    registered: '210+',
  },
  {
    title: 'ServiceNow for manufacturing leaders: roundtable discussion',
    date: '2026-06-25',
    time: '10:00 AM IST',
    type: 'In-Person',
    duration: 'Half day',
    location: 'Pune, India',
    speaker: 'Manufacturing Practice Lead + two client guests',
    about: 'A candid discussion with manufacturing IT leaders about what\'s worked (and what hasn\'t) in their ServiceNow journeys. Not a sales event — a peer conversation. Lunch included. Space limited to 40 people.',
    registered: '180+',
  },
];

const allItems = [
  ...featuredArticles.map(a => ({ ...a, kind: 'article' as const })),
  ...events.map(e => ({ ...e, kind: 'event' as const, excerpt: e.about, tags: [e.type], readTime: e.duration, author: e.speaker, category: 'Events', type: e.type })),
  {
    title: 'Why we stopped doing fixed-bid projects (and what we do instead)',
    category: 'How We Work',
    type: 'Article',
    date: '2026-01-05',
    readTime: '7 min',
    author: 'Co-founder',
    excerpt: 'Fixed bids create bad incentives for both sides. The client wants more scope for the same price. The consultant wants to cut corners to protect margin. We switched to a different model three years ago and it transformed our client relationships.',
    tags: ['Business', 'Pricing', 'Transparency'],
    kind: 'article' as const,
  },
  {
    title: 'The ServiceNow certification path that actually leads to competence',
    category: 'Career Advice',
    type: 'Guide',
    date: '2025-12-10',
    readTime: '10 min',
    author: 'Learning & Development Lead',
    excerpt: 'Certifications prove you can pass a test. They don\'t prove you can configure a working instance. This guide maps the certifications that actually build real skills — and the ones that are mostly resume padding. Includes the study path we use internally for new consultants.',
    tags: ['Certification', 'CSA', 'Career', 'Learning'],
    kind: 'article' as const,
  },
  {
    title: 'Integrating ServiceNow with SAP: war stories from the trenches',
    category: 'Technical Deep Dives',
    type: 'Article',
    date: '2025-11-18',
    readTime: '16 min',
    author: 'Integration Architect',
    excerpt: 'SAP integration is one of the most common requests we get — and one of the most consistently underestimated. This covers three real integration projects, what went wrong, what went right, and the architecture patterns that survived production.',
    tags: ['Integration', 'SAP', 'Architecture', 'Integration Hub'],
    kind: 'article' as const,
  },
];

const categories = ['All', 'Lessons from the Field', 'Technology Analysis', 'Platform Updates', 'Events', 'How We Work', 'Career Advice', 'Technical Deep Dives'];

export default function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFeatured, setCurrentFeatured] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentFeatured(prev => (prev + 1) % featuredArticles.length), 7000);
    return () => clearInterval(t);
  }, []);

  const filtered = allItems.filter(item => {
    const mc = selectedCategory === 'All' || item.category === selectedCategory;
    const ms = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return mc && ms;
  });

  const fmtDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #d97706, #dc2626)', boxShadow: '0 8px 32px rgba(217,119,6,0.35)' }} aria-label="Get updates">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">Stay updated</span>
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#0c0404', minHeight: '55vh' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #d97706, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-2 text-amber-300 text-sm mb-6">
            <Newspaper className="h-4 w-4" />
            News & Events
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl mx-auto mb-6">
            What we&apos;re thinking about.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">What we&apos;re building.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Honest writing about ServiceNow, AI, and enterprise technology — from the people who work with it every day. No sponsored content. No paywall. Just things we think are worth sharing.
          </p>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-amber-600" />
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Featured</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Our most-read pieces.</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentFeatured * 100}%)` }}>
                {featuredArticles.map((a, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <div className="lg:col-span-2 p-8 flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #1a0a0a, #2a1010)' }}>
                        <span className="text-xs font-semibold text-amber-400 bg-amber-500/15 rounded-full px-3 py-1 inline-block w-fit mb-4">{a.category}</span>
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 mb-4">{String(i + 1).padStart(2, '0')}</div>
                        <div className="text-xs text-slate-500 space-y-1">
                          <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {fmtDate(a.date)} &middot; {a.readTime}</div>
                          <div>By {a.author}</div>
                        </div>
                      </div>
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">{a.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{a.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {a.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg border border-amber-100">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {featuredArticles.map((_, i) => (
                <button key={i} onClick={() => setCurrentFeatured(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentFeatured ? 'bg-amber-600 w-7' : 'bg-gray-300 hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section id="events" className="py-20 relative overflow-hidden" style={{ background: '#0c0404' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Upcoming Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Join us. They&apos;re free.</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map(e => {
              const d = new Date(e.date);
              return (
                <div key={e.title} className="rounded-2xl border border-white/8 hover:border-amber-500/30 transition-all duration-200 overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="flex items-center gap-3 p-5 border-b border-white/8">
                    <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0" style={{ background: 'rgba(217,119,6,0.15)' }}>
                      <span className="text-xl font-bold text-amber-400 leading-none">{d.getDate()}</span>
                      <span className="text-xs text-amber-500/70">{d.toLocaleDateString('en-US', { month: 'short' })}</span>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${e.type === 'Webinar' ? 'text-blue-400 bg-blue-500/15' : 'text-green-400 bg-green-500/15'}`}>{e.type}</span>
                      <h3 className="text-sm font-bold text-white mt-1.5 leading-snug">{e.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center text-xs text-slate-400 gap-2"><Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" /> {e.time} IST &middot; {e.duration}</div>
                    {e.location && <div className="flex items-center text-xs text-slate-400 gap-2"><MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" /> {e.location}</div>}
                    <div className="flex items-center text-xs text-slate-400 gap-2"><Users className="h-3.5 w-3.5 text-amber-500 shrink-0" /> {e.registered} registered</div>
                    <p className="text-xs text-slate-500 leading-relaxed pt-2">{e.about}</p>
                  </div>
                  <div className="px-5 pb-5">
                    <Link href="/get-started" className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, #d97706, #dc2626)', boxShadow: '0 4px 16px rgba(217,119,6,0.2)' }}>
                      Register free <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ALL CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-amber-600" />
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Everything</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">All articles and events.</h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input type="text" placeholder="Search articles and events..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button key={c} onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === c ? 'bg-amber-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => {
              const isEvent = item.kind === 'event';
              return (
                <div key={i} className="group border border-gray-200 hover:border-amber-300 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isEvent ? 'text-blue-700 bg-blue-50' : 'text-amber-700 bg-amber-50'}`}>{item.category}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2.5 py-1">{item.type}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug group-hover:text-amber-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1 line-clamp-2">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.slice(0, 2).map(t => <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md">{t}</span>)}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {fmtDate(item.date)}</span>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  <Link href="/get-started" className="mt-3 w-full text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    {isEvent ? 'Register' : 'Read more'} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && <div className="text-center py-16"><Newspaper className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">Nothing matches. Try a different search.</p></div>}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0c0404' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-12 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, #d97706, transparent 70%)' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <Bell className="h-10 w-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">One email a month. Maybe two.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">New articles, upcoming events, and things we found interesting. No spam — we hate it as much as you do.</p>
          <div className="max-w-md mx-auto flex gap-3 mb-8">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors" />
            <button className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #d97706, #dc2626)', boxShadow: '0 4px 16px rgba(217,119,6,0.3)' }}>Subscribe</button>
          </div>
          <div className="flex items-center justify-center gap-5 text-slate-500 text-xs">
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> news@ifbash.com</span>
          </div>
        </div>
      </section>
    </>
  );
}
