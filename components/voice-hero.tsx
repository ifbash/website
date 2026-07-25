'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Mic, Send, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { streamChat, type ChatMessage } from '@/lib/chat-client';
// The voice agent is the AI layer, so it carries the mulberry accent rather
// than navy. Imported from the token source — the hex was hard-coded here in
// three places, against the rule documented in lib/design.ts.
import { MULBERRY } from '@/lib/design';

type Status = 'idle' | 'listening' | 'thinking' | 'speaking';

const CHIPS = [
  'What can an agent do for us?',
  'How fast is a ServiceNow go-live?',
  'Can you build our app?',
];

export function VoiceHero() {
  const [status, setStatus] = useState<Status>('idle');
  const [turns, setTurns] = useState<ChatMessage[]>([]);
  const [interim, setInterim] = useState('');
  const [input, setInput] = useState('');
  const [muted, setMuted] = useState(false);
  const [micError, setMicError] = useState('');
  const turnsRef = useRef<ChatMessage[]>([]);
  const busyRef = useRef(false);
  const recRef = useRef<any>(null);
  const mutedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  mutedRef.current = muted;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [turns, interim]);

  useEffect(() => () => {
    try { recRef.current?.stop(); } catch { /* noop */ }
    window.speechSynthesis?.cancel();
  }, []);

  function speak(text: string, onDone: () => void) {
    if (mutedRef.current || !window.speechSynthesis) {
      onDone();
      return;
    }
    setStatus('speaking');
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.03;
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => /en[-_](US|GB|IN)/i.test(v.lang) && /female|natural|online/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith('en'));
    if (preferred) u.voice = preferred;
    u.onend = onDone;
    u.onerror = onDone;
    window.speechSynthesis.speak(u);
  }

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busyRef.current) return;
    busyRef.current = true;
    setInput('');
    setStatus('thinking');

    const history: ChatMessage[] = [...turnsRef.current, { role: 'user', content: q }];
    turnsRef.current = [...history, { role: 'assistant', content: '' }];
    setTurns(turnsRef.current);

    const full = await streamChat(history, (soFar) => {
      turnsRef.current = [...history, { role: 'assistant', content: soFar }];
      setTurns(turnsRef.current);
    });

    speak(full, () => {
      setStatus('idle');
      busyRef.current = false;
    });
    if (mutedRef.current) {
      setStatus('idle');
      busyRef.current = false;
    }
  }

  function startMic() {
    if (busyRef.current) return;
    setMicError('');
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setMicError('Voice needs Chrome or Edge — type below instead.');
      return;
    }
    if (status === 'listening') {
      try { recRef.current?.stop(); } catch { /* noop */ }
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
      if (finalText.trim()) ask(finalText);
      else setStatus('idle');
    };
    rec.onerror = (e: any) => {
      setInterim('');
      setStatus('idle');
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        setMicError('Mic blocked — allow access, or type below.');
      }
    };
    setStatus('listening');
    try { rec.start(); } catch { /* already started */ }
  }

  const statusLabel: Record<Status, string> = {
    idle: 'Tap the orb and talk to me',
    listening: 'Listening — go ahead…',
    thinking: 'Thinking…',
    speaking: 'Speaking…',
  };

  const lastTurns = turns.slice(-2);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* The orb — tap to talk */}
      <button
        onClick={startMic}
        aria-label={status === 'listening' ? 'Stop listening' : 'Tap to talk to the agent'}
        className="relative group focus:outline-none"
        disabled={status === 'thinking'}
      >
        <div
          className={`w-28 h-28 sm:w-32 sm:h-32 agent-orb transition-transform duration-300 group-hover:scale-105 ${
            status === 'listening' ? 'agent-orb--listening' : status === 'thinking' ? 'agent-orb--thinking' : status === 'speaking' ? 'agent-orb--speaking' : ''
          }`}
        />
        <span className="absolute inset-0 flex items-center justify-center">
          {status === 'thinking'
            ? <Loader2 className="h-7 w-7 text-white/90 animate-spin" />
            : <Mic className={`h-7 w-7 text-white/90 transition-transform ${status === 'listening' ? 'scale-125' : ''}`} />}
        </span>
      </button>

      <div className="mt-4 flex items-center gap-2">
        <p className="text-sm font-medium" style={{ color: '#6B6659' }}>{statusLabel[status]}</p>
        <button
          onClick={() => { setMuted(!muted); if (!muted) window.speechSynthesis?.cancel(); }}
          aria-label={muted ? 'Unmute voice' : 'Mute voice'}
          className="p-1 rounded-md transition-colors hover:bg-black/5"
          style={{ color: '#757064' }}
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>
      {micError && <p className="mt-1 text-xs" style={{ color: MULBERRY }}>{micError}</p>}

      {/* Transcript — last exchange only, minimal */}
      <div ref={scrollRef} className={`w-full mt-5 space-y-2.5 overflow-y-auto transition-all ${lastTurns.length ? 'max-h-56' : 'max-h-0'}`}>
        {lastTurns.map((t, i) => (
          <div key={`${turns.length}-${i}`} className={`flex ${t.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[92%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${t.role === 'user' ? 'rounded-br-md text-white' : 'rounded-bl-md'}`}
              style={t.role === 'user'
                ? { background: '#141210' }
                : { background: '#FFFFFF', color: '#2A2721', border: '1px solid #E7E2D9', boxShadow: '0 2px 12px rgba(20,18,16,0.05)' }}
            >
              {t.content || <Loader2 className="h-4 w-4 animate-spin" style={{ color: MULBERRY }} />}
            </div>
          </div>
        ))}
        {interim && <p className="text-[13px] italic text-right" style={{ color: '#757064' }}>{interim}…</p>}
      </div>

      {/* Chips */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {CHIPS.map((c) => (
          <button
            key={c}
            onClick={() => ask(c)}
            disabled={status !== 'idle'}
            className="text-xs font-medium rounded-full px-3.5 py-1.5 transition-all disabled:opacity-40 hover:-translate-y-0.5"
            style={{ background: '#FFFFFF', border: '1px solid #E7E2D9', color: '#4A463C' }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Type fallback */}
      <form
        onSubmit={(e) => { e.preventDefault(); ask(input); }}
        className="mt-4 w-full flex items-center gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="…or type your question"
          className="flex-1 min-w-0 rounded-full px-4 py-2.5 text-[13px] outline-none transition-colors"
          style={{ background: '#FFFFFF', border: '1px solid #E7E2D9', color: '#141210' }}
        />
        <button
          type="submit"
          disabled={status !== 'idle' || !input.trim()}
          aria-label="Send"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 disabled:opacity-30 transition-all hover:scale-105"
          style={{ background: '#141210' }}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>

      <Link href="/agent" className="mt-4 text-xs font-medium transition-colors hover:underline" style={{ color: MULBERRY }}>
        Prefer a phone call? The agent can call you →
      </Link>
    </div>
  );
}
