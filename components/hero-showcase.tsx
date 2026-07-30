'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Settings, Bot, Phone, Smartphone, Globe, CheckCircle2, FileText, Calendar, Mic } from 'lucide-react';

const CYCLE_MS = 5600;

const TABS = [
  { key: 'servicenow', label: 'ServiceNow', icon: Settings },
  { key: 'agent', label: 'AI Agent', icon: Bot },
  { key: 'voice', label: 'Voice', icon: Phone },
  { key: 'mobile', label: 'Mobile', icon: Smartphone },
  { key: 'web', label: 'Web', icon: Globe },
] as const;

type TabKey = (typeof TABS)[number]['key'];

// ── helpers ─────────────────────────────────────────────────────────

function TypedText({ text, delay = 0, speed = 16, className = '' }: { text: string; delay?: number; speed?: number; className?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setN((v) => {
          if (v >= text.length) {
            clearInterval(interval);
            return v;
          }
          return v + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);
  return (
    <span className={className}>
      {text.slice(0, n)}
      {n > 0 && n < text.length && <span className="typing-caret" />}
    </span>
  );
}

// Cross-fades one status pill into another at `at` seconds.
function Flip({ from, to, at, fromCls, toCls }: { from: React.ReactNode; to: React.ReactNode; at: number; fromCls: string; toCls: string }) {
  return (
    <span className="inline-grid justify-items-end">
      <motion.span style={{ gridArea: '1/1' }} className={fromCls} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: at, duration: 0.25 }}>
        {from}
      </motion.span>
      <motion.span style={{ gridArea: '1/1' }} className={toCls} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: at, duration: 0.3 }}>
        {to}
      </motion.span>
    </span>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

// ── ServiceNow demo ─────────────────────────────────────────────────

const INCIDENTS = [
  { id: 'INC0014502', title: 'VPN authentication failing — Berlin office', pri: 'P2', resolveAt: 1.5 },
  { id: 'INC0014503', title: 'Laptop provisioning for new joiner', pri: 'P3', resolveAt: 2.4 },
  { id: 'INC0014504', title: 'Payroll app timeout on approvals', pri: 'P1', resolveAt: -1 }, // escalates
  { id: 'INC0014505', title: 'Password reset — finance shared account', pri: 'P3', resolveAt: 3.3 },
];

function ServiceNowDemo() {
  return (
    <div className="h-full flex flex-col p-4">
      <motion.div {...rise(0.1)} className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-green-500/15 flex items-center justify-center"><Settings className="h-3.5 w-3.5 text-green-400" /></div>
          <span className="text-[12px] font-semibold text-white">IT Service Desk</span>
          <span className="text-[10px] text-onink-faint">· Now Assist enabled</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] text-green-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Agent active
        </span>
      </motion.div>

      <div className="space-y-1.5 flex-1">
        {INCIDENTS.map(({ id, title, pri, resolveAt }, i) => (
          <motion.div key={id} {...rise(0.25 + i * 0.15)}
            className="flex items-center gap-3 rounded-lg border border-onink-line px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <span className="text-[10px] font-mono text-onink-faint shrink-0">{id}</span>
            <span className="text-[11px] text-onink-muted flex-1 truncate">{title}</span>
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${pri === 'P1' ? 'bg-red-500/15 text-red-400' : pri === 'P2' ? 'bg-amber-500/15 text-amber-400' : 'bg-white/10 text-onink-muted'}`}>{pri}</span>
            {resolveAt > 0 ? (
              <Flip at={resolveAt}
                from="Open" fromCls="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300"
                to={<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Resolved · AI</span>}
                toCls="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 whitespace-nowrap inline-flex items-center" />
            ) : (
              <Flip at={2.8}
                from="Open" fromCls="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300"
                to="→ Routed to human + context" toCls="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sea/15 text-sea-soft whitespace-nowrap" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div {...rise(3.8)} className="flex items-center justify-between mt-3 pt-3 border-t border-onink-line">
        <span className="text-[10px] text-onink-faint font-mono">Tonight: <span className="text-green-400 font-bold">3 auto-resolved</span> · 1 smart handoff</span>
        <span className="text-[10px] text-onink-faint font-mono">Avg time to resolve: <span className="text-white font-bold">41s</span></span>
      </motion.div>
    </div>
  );
}

// ── Claude agent chat demo ──────────────────────────────────────────

function AgentChatDemo() {
  return (
    <div className="h-full flex flex-col p-4">
      <motion.div {...rise(0.1)} className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 agent-orb" />
        <div>
          <div className="text-[12px] font-semibold text-white leading-tight">Customer Support Agent</div>
          <div className="text-[10px] text-onink-faint">Built on Claude · grounded in your policies</div>
        </div>
      </motion.div>

      <div className="flex-1 space-y-2.5">
        <motion.div {...rise(0.4)} className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md px-3 py-2 text-[11px] text-white" style={{ background: 'linear-gradient(135deg, #B23A2B, #C8482F)' }}>
            Hi — can I get a refund on our enterprise plan? We signed up two weeks ago.
          </div>
        </motion.div>

        <motion.div {...rise(1.1)} className="flex justify-start">
          <div className="max-w-[88%] rounded-2xl rounded-bl-md px-3 py-2 text-[11px] text-onink leading-relaxed" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <TypedText delay={1400} speed={14}
              text="Yes — enterprise plans include a 30-day refund window, and you're on day 12, so you qualify in full. I can start it right now; refunds land in 3–5 business days. Shall I proceed?" />
          </div>
        </motion.div>

        <motion.div {...rise(4.2)} className="flex items-center gap-2 pl-1">
          <span className="inline-flex items-center gap-1 text-[9px] text-onink-faint border border-white/10 rounded-full px-2 py-0.5">
            <FileText className="h-2.5 w-2.5" /> source: refund-policy.md §4
          </span>
          <span className="inline-flex items-center gap-1 text-[9px] text-green-400 border border-green-500/25 bg-green-500/10 rounded-full px-2 py-0.5">
            <CheckCircle2 className="h-2.5 w-2.5" /> account verified
          </span>
        </motion.div>
      </div>

      <motion.div {...rise(4.6)} className="mt-3 pt-3 border-t border-onink-line flex items-center justify-between">
        <span className="text-[10px] text-onink-faint">Answers with sources — never guesses.</span>
        <Link href="/agent" className="text-[10px] font-semibold text-sea-soft hover:text-sea-soft">Talk to our live agent →</Link>
      </motion.div>
    </div>
  );
}

// ── Voice call demo ─────────────────────────────────────────────────

const CALL_LINES = [
  { who: 'Agent', at: 0.9, text: 'Hi Priya, ifBash agent here — you asked for a platform demo. Is now a good time?' },
  { who: 'Priya', at: 2.2, text: 'Yes, perfect timing actually.' },
  { who: 'Agent', at: 3.0, text: 'Great — I have Thursday 3 PM open with our consultant. Booking it now.' },
];

function VoiceDemo() {
  return (
    <div className="h-full flex flex-col p-4">
      <motion.div {...rise(0.1)} className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-sea/25 flex items-center justify-center"><Phone className="h-3.5 w-3.5 text-sea-soft" /></div>
          <span className="text-[12px] font-semibold text-white">Outbound call</span>
          <span className="text-[10px] text-onink-faint">· +91 ••••• ••210</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] text-green-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> 00:42
        </span>
      </motion.div>

      {/* Waveform */}
      <motion.div {...rise(0.3)} className="flex items-center justify-center gap-[3px] h-10 mb-3">
        {Array.from({ length: 32 }).map((_, i) => (
          <span key={i} className="wave-bar w-[3px] rounded-full bg-gradient-to-t from-sea to-sea-soft"
            style={{ animationDelay: `${(i % 8) * 0.11}s`, height: `${8 + ((i * 7) % 22)}px` }} />
        ))}
      </motion.div>

      <div className="flex-1 space-y-2">
        {CALL_LINES.map(({ who, at, text }) => (
          <motion.div key={text} {...rise(at)} className="flex gap-2 items-start">
            <span className={`text-[9px] font-bold uppercase tracking-wide shrink-0 mt-0.5 ${who === 'Agent' ? 'text-sea-soft' : 'text-cyan-300'}`}>{who}</span>
            <span className="text-[11px] text-onink-muted leading-relaxed">{text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div {...rise(4.1)} className="mt-3 pt-3 border-t border-onink-line flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-green-400">
          <Calendar className="h-3 w-3" /> Meeting booked — invite sent, CRM updated
        </span>
        <span className="text-[10px] text-onink-faint">English · العربية · हिन्दी</span>
      </motion.div>
    </div>
  );
}

// ── Mobile app demo ─────────────────────────────────────────────────

function MobileDemo() {
  return (
    <div className="h-full flex items-center justify-center gap-6 p-4">
      {/* Phone frame */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-[168px] h-[330px] rounded-[2rem] border-[5px] border-white/15 overflow-hidden shrink-0" style={{ background: '#181312' }}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-black/80 z-10" />
        <div className="p-3 pt-7 h-full flex flex-col">
          <motion.div {...rise(0.5)} className="text-[10px] text-onink-muted mb-0.5">Good evening, Aisha</motion.div>
          <motion.div {...rise(0.65)} className="text-[13px] font-bold text-white mb-2.5">Your fleet today</motion.div>
          <motion.div {...rise(0.9)} className="rounded-xl p-2.5 mb-2.5" style={{ background: 'linear-gradient(135deg, #B23A2B, #C8482F)' }}>
            <div className="text-[8px] text-sea-soft mb-0.5">Deliveries completed</div>
            <div className="text-lg font-bold text-white leading-none">1,284</div>
            <div className="text-[8px] text-sea-soft mt-1">↑ 12% vs yesterday</div>
          </motion.div>
          <div className="flex items-end gap-1.5 h-12 mb-2.5 px-1">
            {[38, 62, 45, 80, 58, 92, 70].map((h, i) => (
              <motion.span key={i} className="flex-1 rounded-sm bg-sea-soft/60"
                initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.3 + i * 0.1, duration: 0.4, ease: 'easeOut' }} />
            ))}
          </div>
          {[
            { label: 'Route 12 — on time', dot: 'bg-green-400', at: 2.3 },
            { label: 'Route 4 — AI rerouted traffic', dot: 'bg-sea-soft', at: 2.55 },
          ].map(({ label, dot, at }) => (
            <motion.div key={label} {...rise(at)} className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 mb-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-[9px] text-onink-muted">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Side notes */}
      <div className="hidden sm:flex flex-col gap-2.5 max-w-[180px]">
        {[
          { text: 'iOS + Android from one codebase', at: 1.0 },
          { text: 'AI assistant inside the app, on Claude', at: 1.5 },
          { text: 'Design → store submission, end to end', at: 2.0 },
        ].map(({ text, at }) => (
          <motion.div key={text} {...rise(at)} className="rounded-xl border border-white/10 px-3 py-2.5 text-[11px] text-onink-muted" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Website build demo ──────────────────────────────────────────────

function WebDemo() {
  return (
    <div className="h-full flex flex-col p-4">
      <motion.div {...rise(0.1)} className="rounded-xl border border-white/10 overflow-hidden flex-1 flex flex-col" style={{ background: '#181312' }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-onink-line" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-2 rounded-md bg-white/5 px-2.5 py-1 text-[9px] text-onink-faint font-mono">https://your-brand.com</div>
        </div>
        {/* Page assembling */}
        <div className="flex-1 p-3 flex flex-col gap-2">
          <motion.div {...rise(0.6)} className="flex items-center justify-between">
            <span className="w-14 h-2.5 rounded bg-white/20" />
            <span className="flex gap-2">
              <span className="w-8 h-2 rounded bg-white/10" /><span className="w-8 h-2 rounded bg-white/10" />
              <span className="w-12 h-2.5 rounded bg-sea-soft/70" />
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
            className="rounded-lg h-[76px] flex flex-col justify-center px-4 gap-1.5" style={{ background: 'linear-gradient(135deg, rgba(178,58,43,0.5), rgba(242,163,143,0.35))' }}>
            <span className="w-2/3 h-3 rounded bg-white/85" />
            <span className="w-1/2 h-2 rounded bg-white/45" />
            <span className="w-16 h-4 rounded-md bg-white/90 mt-1" />
          </motion.div>
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[1.7, 1.9, 2.1].map((at, i) => (
              <motion.div key={i} {...rise(at)} className="rounded-lg border border-onink-line p-2 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="w-6 h-6 rounded-md bg-sea-soft/30" />
                <span className="w-full h-1.5 rounded bg-white/20" />
                <span className="w-2/3 h-1.5 rounded bg-white/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div {...rise(3.0)} className="flex items-center justify-between mt-3">
        <div className="flex gap-2">
          {[
            { score: '99', label: 'Performance' },
            { score: '100', label: 'SEO' },
            { score: '100', label: 'Access.' },
          ].map(({ score, label }, i) => (
            <motion.span key={label} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.2 + i * 0.15 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1">
              <span className="text-[11px] font-bold text-green-400">{score}</span>
              <span className="text-[9px] text-onink-muted">{label}</span>
            </motion.span>
          ))}
        </div>
        <span className="text-[10px] text-onink-faint">Next.js · AI-native · SEO-ready</span>
      </motion.div>
    </div>
  );
}

// ── Main showcase ───────────────────────────────────────────────────

const PANELS: Record<TabKey, React.ComponentType> = {
  servicenow: ServiceNowDemo,
  agent: AgentChatDemo,
  voice: VoiceDemo,
  mobile: MobileDemo,
  web: WebDemo,
};

export function HeroShowcase() {
  const [active, setActive] = useState<TabKey>('servicenow');
  const [paused, setPaused] = useState(false);
  const [round, setRound] = useState(0); // bump to restart a panel's animations

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      const idx = TABS.findIndex((x) => x.key === active);
      setActive(TABS[(idx + 1) % TABS.length].key);
      setRound((r) => r + 1);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, paused, round]);

  const Panel = PANELS[active];

  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 flex flex-col w-full"
      style={{ background: '#1A1714', boxShadow: '0 32px 64px rgba(23,21,15,0.22)', height: '480px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab strip */}
      <div className="flex items-stretch border-b border-white/10 shrink-0" style={{ background: '#241A15' }}>
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => { setActive(key); setRound((r) => r + 1); }}
            // The visible label is `hidden sm:inline`, so below the sm breakpoint
            // this button contains only an icon and had no accessible name at all.
            // aria-label covers every width rather than depending on the span.
            aria-label={label}
            aria-pressed={active === key}
            className={`relative flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] sm:text-xs font-semibold transition-colors ${
              active === key ? 'text-white' : 'text-onink-faint hover:text-onink-muted'
            }`}
          >
            <Icon className={`h-3.5 w-3.5 ${active === key ? 'text-sea-soft' : ''}`} />
            <span className="hidden sm:inline">{label}</span>
            {active === key && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                <span
                  key={`${key}-${round}-${paused ? 'p' : 'r'}`}
                  className="block h-full bg-gradient-to-r from-sea to-sea-soft"
                  style={{ animation: paused ? 'none' : `tabProgress ${CYCLE_MS}ms linear forwards`, width: paused ? '100%' : undefined }}
                />
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active demo — keyed remount restarts each panel's animation timeline */}
      <div className="flex-1 min-h-0 relative">
        <motion.div
          key={`${active}-${round}`}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Panel />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-onink-line shrink-0" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <span className="text-[10px] text-onink-faint font-mono">Demos — the experiences we build for clients</span>
        <Link href="/agent" className="inline-flex items-center gap-1.5 py-1.5 text-[11px] font-semibold text-sea-soft hover:text-sea-soft transition-colors">
          <Mic className="h-3 w-3" /> Talk to our real agent
        </Link>
      </div>
    </div>
  );
}
