'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Send, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { streamChat, type ChatMessage as Msg } from '@/lib/chat-client';

type Mode = 'chat' | 'lead' | 'done';

const QUICK_OPTIONS = [
  { label: 'Scope a project', question: 'I want to scope a project with ifBash. How does that work?' },
  { label: 'What can an AI agent do?', question: 'What can an AI agent do for my business?' },
  { label: 'Services overview', question: 'What services does ifBash offer?' },
  { label: 'Talk to the team', question: '' },
];

const FIELD =
  'w-full bg-white/5 border border-onink-line focus:border-sky-soft rounded-xl px-3.5 py-2.5 text-[13px] text-onink placeholder:text-onink-faint outline-none transition-colors';

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: 'Hi — I\'m the ifBash agent. Ask me about AI agents, ServiceNow, or web & mobile builds — or pick an option below.' },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [lead, setLead] = useState({ name: '', email: '', message: '' });
  const [leadError, setLeadError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const askRef = useRef<(q: string) => void>(() => {});

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, mode, open]);

  // Page sections can open the widget with a seeded question via CustomEvent.
  useEffect(() => {
    function onSeed(e: Event) {
      const q = (e as CustomEvent<string>).detail;
      if (typeof q === 'string' && q.trim()) {
        setOpen(true);
        setMode('chat');
        askRef.current(q);
      }
    }
    window.addEventListener('seed-agent', onSeed);
    return () => window.removeEventListener('seed-agent', onSeed);
  }, []);

  async function ask(question: string) {
    if (!question.trim() || busy) return;
    const history: Msg[] = [...messages, { role: 'user', content: question }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setBusy(true);
    await streamChat(history, (soFar) => {
      setMessages([...history, { role: 'assistant', content: soFar }]);
    });
    setBusy(false);
  }
  askRef.current = ask;

  // The homepage hero has the speaking agent — no floating widget there.
  if (pathname === '/') return null;

  async function submitLead() {
    setLeadError('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      setLeadError('Please enter a valid work email.');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'chat widget' }),
      });
      const data = await res.json();
      if (data.ok) {
        setMode('done');
      } else {
        setLeadError(data.error || 'Something went wrong — email connect@ifbash.com instead.');
      }
    } catch {
      setLeadError('Something went wrong — email connect@ifbash.com instead.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="w-[calc(100vw-2rem)] sm:w-[380px] rounded-2xl overflow-hidden border border-onink-line shadow-2xl flex flex-col bg-ink"
          style={{ height: 'min(560px, calc(100vh - 8rem))' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-onink-line shrink-0 bg-onink-fill">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-sky text-paper font-semibold text-xs">
                iB
              </div>
              <div>
                <div className="text-sm font-semibold text-onink leading-tight">ifBash Assistant</div>
                <div className="text-[11px] text-onink-faint">Typically replies in seconds</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-onink-faint hover:text-onink transition-colors p-1">
              <X className="h-4 w-4" />
            </button>
          </div>

          {mode === 'chat' && (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-sky text-paper rounded-br-md'
                          : 'bg-white/[0.06] text-onink-muted rounded-bl-md'
                      }`}
                    >
                      {m.content || <Loader2 className="h-4 w-4 text-sky-soft animate-spin" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick options */}
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {QUICK_OPTIONS.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => (o.question ? ask(o.question) : setMode('lead'))}
                    disabled={busy}
                    className="text-[11px] font-medium text-sky-soft border border-onink-line hover:border-sky-soft hover:bg-white/[0.06] rounded-full px-3 py-1 transition-all disabled:opacity-50"
                  >
                    {o.label}
                  </button>
                ))}
                <a
                  href="/agent"
                  className="text-[11px] font-medium text-onink-muted border border-onink-line hover:border-sky-soft hover:text-sky-soft rounded-full px-3 py-1 transition-all"
                >
                  🎙 Prefer to talk? Try the voice agent
                </a>
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  ask(input);
                }}
                className="flex items-center gap-2 px-3 py-3 border-t border-onink-line shrink-0"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question…"
                  className="flex-1 bg-white/5 border border-onink-line focus:border-sky-soft rounded-xl px-3.5 py-2 text-[13px] text-onink placeholder:text-onink-faint outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-sky text-paper disabled:opacity-40 transition-all hover:bg-sky-soft hover:text-ink hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </>
          )}

          {mode === 'lead' && (
            <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col">
              <button onClick={() => setMode('chat')} className="flex items-center gap-1.5 text-[12px] text-onink-faint hover:text-onink-muted mb-4 transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to chat
              </button>
              <div className="text-onink font-semibold text-base mb-1">Talk to the team</div>
              <p className="text-onink-faint text-[12px] mb-5">Leave your details and we&apos;ll reply within one business day — usually with a scoping call slot.</p>
              <div className="space-y-3">
                <input
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  placeholder="Your name"
                  className={FIELD}
                />
                <input
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  type="email"
                  placeholder="Work email"
                  className={FIELD}
                />
                <textarea
                  value={lead.message}
                  onChange={(e) => setLead({ ...lead, message: e.target.value })}
                  rows={3}
                  placeholder="What are you looking to do? (optional)"
                  className={`${FIELD} resize-none`}
                />
                {leadError && <p className="text-red-400 text-[12px]">{leadError}</p>}
                <button
                  onClick={submitLead}
                  disabled={busy}
                  className="w-full rounded-xl py-2.5 text-sm font-semibold bg-sky text-paper transition-all hover:bg-sky-soft hover:text-ink hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {busy ? 'Sending…' : 'Send'}
                </button>
              </div>
            </div>
          )}

          {mode === 'done' && (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-12 h-12 rounded-full bg-sky/25 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-sky-soft" />
              </div>
              <div className="text-onink font-semibold mb-1.5">Thanks — we&apos;ve got it.</div>
              <p className="text-onink-faint text-[13px]">Someone from the team will reach out within one business day.</p>
              <button onClick={() => setMode('chat')} className="mt-5 text-[12px] text-sky-soft hover:text-onink font-medium transition-colors">
                Back to chat
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Chat with ifBash'}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-sky text-paper shadow-[0_8px_32px_rgba(10,92,99,0.35)] hover:shadow-xl hover:bg-sky-deep transition-all duration-300 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />}
        {!open && <span className="absolute inset-0 rounded-full animate-ping bg-sky opacity-20" />}
      </button>
    </div>
  );
}
