'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Mic, MicOff, Phone, ArrowRight, CheckCircle, Loader2, Bot, Calendar,
  MessageSquare, Zap, Globe, Shield, Volume2,
} from 'lucide-react';

import { streamChat, type ChatMessage as Turn } from '@/lib/chat-client';

type CallState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'unsupported';

const capabilities = [
  { icon: Zap, title: 'Instant lead response', desc: 'Answers visitor questions the moment they land — no forms, no waiting.' },
  { icon: MessageSquare, title: 'Qualification & objections', desc: 'Asks the right questions, handles objections, and routes hot leads to a human.' },
  { icon: Calendar, title: 'Meeting booking', desc: 'Books scoping calls straight into the team calendar with full conversation context.' },
  { icon: Bot, title: 'Built on Claude', desc: 'The same agentic AI engineering we deliver for clients — running on our own site.' },
  { icon: Globe, title: 'Web + phone', desc: 'Talk in the browser now, or get a call on your phone — same agent, both channels.' },
  { icon: Shield, title: 'No data games', desc: 'Conversations are used to help you, not to spam you. No marketing follow-ups.' },
];

export default function AgentPage() {
  const [callState, setCallState] = useState<CallState>('idle');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [interim, setInterim] = useState('');
  const [micError, setMicError] = useState('');
  const recRef = useRef<any>(null);
  const activeRef = useRef(false);
  const turnsRef = useRef<Turn[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [phone, setPhone] = useState({ name: '', company: '', number: '', website: '' });
  const [phoneStatus, setPhoneStatus] = useState<'idle' | 'sending' | 'live' | 'callback' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [turns, interim]);

  useEffect(() => () => stopCall(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function speak(text: string, onDone: () => void) {
    setCallState('speaking');
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.02;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => /en[-_](US|GB|IN)/i.test(v.lang) && /female|natural|online/i.test(v.name)) || voices.find((v) => v.lang.startsWith('en'));
    if (preferred) u.voice = preferred;
    u.onend = onDone;
    u.onerror = onDone;
    window.speechSynthesis.speak(u);
  }

  async function handleUtterance(text: string) {
    if (!text.trim()) {
      if (activeRef.current) startListening();
      return;
    }
    const next: Turn[] = [...turnsRef.current, { role: 'user', content: text }];
    turnsRef.current = next;
    setTurns(next);
    setCallState('thinking');
    const reply = await streamChat(next, (soFar) => {
      turnsRef.current = [...next, { role: 'assistant', content: soFar }];
      setTurns(turnsRef.current);
    });
    speak(reply, () => {
      if (activeRef.current) startListening();
      else setCallState('idle');
    });
  }

  function startListening() {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setCallState('unsupported');
      return;
    }
    const rec = new SR();
    recRef.current = rec;
    rec.lang = 'en-IN';
    rec.interimResults = true;
    rec.continuous = false;
    let finalText = '';
    rec.onresult = (e: any) => {
      let interimText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
        else interimText += e.results[i][0].transcript;
      }
      setInterim(interimText);
    };
    rec.onend = () => {
      setInterim('');
      if (!activeRef.current) return;
      if (finalText.trim()) handleUtterance(finalText);
      else if (activeRef.current) startListening(); // silence — keep listening
    };
    rec.onerror = (e: any) => {
      setInterim('');
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        setMicError('Microphone access was blocked. Allow mic access and try again — or use the phone option.');
        stopCall();
      }
    };
    setCallState('listening');
    try {
      rec.start();
    } catch {
      /* already started */
    }
  }

  function startCall() {
    setMicError('');
    activeRef.current = true;
    const greeting = "Hi, this is the ifBash agent. Ask me anything about ServiceNow, AI on Claude, or building your web and mobile products — how can I help?";
    if (turnsRef.current.length === 0) {
      turnsRef.current = [{ role: 'assistant', content: greeting }];
      setTurns(turnsRef.current);
      speak(greeting, () => {
        if (activeRef.current) startListening();
      });
    } else {
      startListening();
    }
  }

  function stopCall() {
    activeRef.current = false;
    try {
      recRef.current?.stop();
    } catch { /* noop */ }
    window.speechSynthesis?.cancel();
    setInterim('');
    setCallState('idle');
  }

  async function requestCall(e: React.FormEvent) {
    e.preventDefault();
    setPhoneError('');
    setPhoneStatus('sending');
    try {
      const res = await fetch('/api/agent/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: phone.name, company: phone.company, phone: phone.number, website: phone.website }),
      });
      const data = await res.json();
      if (data.ok) setPhoneStatus(data.mode === 'live' ? 'live' : 'callback');
      else {
        setPhoneStatus('error');
        setPhoneError(data.error || 'Something went wrong.');
      }
    } catch {
      setPhoneStatus('error');
      setPhoneError('Something went wrong — email connect@ifbash.com and we will call you.');
    }
  }

  const inputCls =
    'w-full bg-white/5 border border-white/10 focus:border-sky/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-onink-faint outline-none transition-colors';

  const stateLabel: Record<CallState, string> = {
    idle: 'Tap to start — mic access required',
    listening: 'Listening… speak now',
    thinking: 'Thinking…',
    speaking: 'Agent speaking…',
    unsupported: 'Voice needs Chrome or Edge — use the phone option instead',
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: '#0B1417' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #8ECBEC 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.12]" style={{ background: 'radial-gradient(ellipse at top, #0B6BA8, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-16 lg:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky/10 border border-sky/25 rounded-full px-4 py-2 text-sky-soft text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              ifBash Agent · Live demo
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              Talk to our AI agent —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-soft to-sky-soft animate-gradient-text">right now.</span>
            </h1>
            <p className="text-lg text-onink-muted max-w-2xl mx-auto">
              This is the kind of agent we build for clients — running live on our own site. Speak through your browser, or leave your number and we&apos;ll call you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* ── Browser call card ── */}
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-sky-soft mb-2">Browser call</div>
              <h2 className="text-xl font-bold text-white mb-2">Talk now in your browser</h2>
              <p className="text-sm text-onink-muted mb-6">Click, allow mic access, and speak. No phone needed. Works best in Chrome or Edge on desktop.</p>

              {/* Transcript */}
              <div ref={scrollRef} className="flex-1 min-h-[180px] max-h-[240px] overflow-y-auto rounded-xl border border-white/8 p-4 mb-5 space-y-2.5" style={{ background: 'rgba(0,0,0,0.25)' }}>
                {turns.length === 0 && !interim && (
                  <p className="text-onink-faint text-[13px]">Transcript will appear here when the call starts.</p>
                )}
                {turns.map((t, i) => (
                  <div key={i} className="text-[13px] leading-relaxed">
                    <span className={t.role === 'user' ? 'text-sky-soft font-semibold' : 'text-sky-soft font-semibold'}>
                      {t.role === 'user' ? 'You' : 'Agent'}:
                    </span>{' '}
                    <span className="text-onink">{t.content}</span>
                  </div>
                ))}
                {interim && <div className="text-[13px] text-onink-muted italic">{interim}…</div>}
              </div>

              {micError && <p className="text-red-400 text-xs mb-3">{micError}</p>}

              <div className="flex items-center gap-4">
                <button
                  onClick={() => (callState === 'idle' || callState === 'unsupported' ? startCall() : stopCall())}
                  className="relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: callState === 'idle' || callState === 'unsupported'
                      ? 'linear-gradient(135deg, #0B6BA8, #1E93D0)'
                      : 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    boxShadow: '0 8px 32px rgba(10,92,99,0.35)',
                  }}
                >
                  {callState === 'idle' || callState === 'unsupported' ? (
                    <><Mic className="h-4 w-4" /> Start the call</>
                  ) : (
                    <><MicOff className="h-4 w-4" /> End call</>
                  )}
                </button>
                <div className="flex items-center gap-2 text-[12px] text-onink-muted">
                  {callState === 'listening' && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                  {callState === 'thinking' && <Loader2 className="h-3.5 w-3.5 animate-spin text-sky-soft" />}
                  {callState === 'speaking' && <Volume2 className="h-3.5 w-3.5 text-sky-soft animate-pulse" />}
                  {stateLabel[callState]}
                </div>
              </div>
            </div>

            {/* ── Phone call card ── */}
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-sky-soft mb-2">We call you</div>
              <h2 className="text-xl font-bold text-white mb-2">Get a call on your phone</h2>
              <p className="text-sm text-onink-muted mb-6">Prefer a real call, or mic access is blocked? Leave your number.</p>

              {phoneStatus === 'live' || phoneStatus === 'callback' ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                    <CheckCircle className="h-7 w-7 text-green-400" />
                  </div>
                  {phoneStatus === 'live' ? (
                    <>
                      <div className="text-white font-semibold mb-2">Calling you now…</div>
                      <p className="text-onink-muted text-sm max-w-xs">Your phone should ring within 30 seconds. Answer and just start talking.</p>
                    </>
                  ) : (
                    <>
                      <div className="text-white font-semibold mb-2">Request received.</div>
                      <p className="text-onink-muted text-sm max-w-xs">A consultant will call you back within one business day.</p>
                    </>
                  )}
                </div>
              ) : (
                <form onSubmit={requestCall} className="flex-1 flex flex-col gap-4">
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" value={phone.website} onChange={(e) => setPhone({ ...phone, website: e.target.value })} />
                  <input placeholder="Your name *" required className={inputCls} value={phone.name} onChange={(e) => setPhone({ ...phone, name: e.target.value })} />
                  <input placeholder="Company (optional)" className={inputCls} value={phone.company} onChange={(e) => setPhone({ ...phone, company: e.target.value })} />
                  <div>
                    <input placeholder="Mobile number, e.g. +91 98765 43210 *" required className={inputCls} value={phone.number} onChange={(e) => setPhone({ ...phone, number: e.target.value })} />
                    <p className="text-[11px] text-onink-faint mt-1.5">International format with country code, e.g. +91 for India.</p>
                  </div>
                  {phoneError && <p className="text-red-400 text-xs">{phoneError}</p>}
                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={phoneStatus === 'sending'}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
                      style={{ background: 'linear-gradient(135deg, #1E93D0, #0B6BA8)', boxShadow: '0 8px 32px rgba(10,92,99,0.35)' }}
                    >
                      {phoneStatus === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" /> Connecting…</>) : (<><Phone className="h-4 w-4" /> Call me</>)}
                    </button>
                    <p className="text-[11px] text-onink-faint mt-2.5 text-center">One demo/callback call only. No marketing, no follow-up texts.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT DOES ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-sky" />
              <span className="text-sky text-sm font-semibold tracking-widest uppercase">In production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-2xl">
              We build agents like this<br />for your business too.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-hairline rounded-2xl p-6 hover:border-sky-soft hover:shadow-[0_8px_30px_rgba(10,92,99,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-sky-tint flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-sky" />
                </div>
                <h3 className="font-bold text-ink mb-2 text-base">{title}</h3>
                <p className="text-sm text-slate-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #0B6BA8, #1E93D0)', boxShadow: '0 8px 32px rgba(10,92,99,0.35)' }}
            >
              Build one for your business <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
