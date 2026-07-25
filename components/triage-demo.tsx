'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Loader2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import {
  SAMPLE_TICKETS, priorityFor, LEVEL_LABEL,
  type TriageResult, type TriageResponse, type Level,
} from '@/lib/triage';
import { PillButton } from '@/components/site';

/**
 * The live triage demo. A visitor pastes a real ticket and watches an agent
 * classify, route, and draft a reply to it.
 *
 * Note the deliberate absence of AnimatePresence mode="wait" around the result
 * panel — that wedges on rapid re-submits (the same trap hero-showcase.tsx
 * documents). Keyed remounts instead.
 */

const PRIORITY_STYLE: Record<string, string> = {
  P1: 'bg-sky text-paper',
  P2: 'bg-sky-tint text-sky-deep border border-sky-strong',
  P3: 'bg-sea-tint text-sea-deep border border-sea-strong',
  P4: 'bg-wash text-slate border border-hairline',
  P5: 'bg-wash text-slate-light border border-hairline',
};

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-l-2 border-hairline pl-3.5 py-0.5">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light mb-1">
        {label}
      </div>
      <div className="text-sm text-ink-body leading-snug">{value}</div>
    </div>
  );
}

export function TriageDemo() {
  const [ticket, setTicket] = useState('');
  const [state, setState] = useState<'idle' | 'working' | 'done' | 'error'>('idle');
  const [result, setResult] = useState<TriageResult | null>(null);
  const [simulated, setSimulated] = useState(false);
  const [error, setError] = useState('');
  const [runId, setRunId] = useState(0);
  // The working indicator loops forever, which is precisely what
  // prefers-reduced-motion is for. Hold it steady instead of pulsing.
  const reduce = useReducedMotion();

  async function run(text: string) {
    if (text.trim().length < 15 || state === 'working') return;
    setState('working');
    setError('');
    try {
      const res = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticket: text }),
      });
      const data = (await res.json()) as TriageResponse;
      if (!data.ok || !data.result) {
        setError(data.error || 'Something went wrong. Try again in a moment.');
        setState('error');
        return;
      }
      setResult(data.result);
      setSimulated(data.simulated);
      setRunId((n) => n + 1);
      setState('done');
    } catch {
      setError('Could not reach the agent. Try again in a moment.');
      setState('error');
    }
  }

  const priority = result ? priorityFor(result.impact as Level, result.urgency as Level) : null;

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {/* ── Input ─────────────────────────────────────────────────── */}
      <div className="flex flex-col rounded-2xl border border-hairline bg-surface p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky mb-4">
          Inbound ticket
        </div>

        <textarea
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          rows={7}
          maxLength={1200}
          placeholder="Paste a real support ticket — messy, angry, vague, whatever you actually get. The agent reads it the way an analyst would."
          className="w-full flex-1 min-h-[9rem] resize-none rounded-xl border border-hairline bg-paper p-4 text-sm leading-relaxed text-ink-body placeholder:text-slate-faint focus:border-sky-soft focus:outline-none focus:ring-2 focus:ring-sky-tint transition-colors"
        />

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light me-1">
            Or try
          </span>
          {SAMPLE_TICKETS.map((s) => (
            <button
              key={s.label}
              onClick={() => { setTicket(s.body); run(s.body); }}
              disabled={state === 'working'}
              className="rounded-full border border-hairline bg-paper px-3 py-1.5 text-[12px] font-medium text-ink-soft transition-all hover:border-sky-soft hover:text-sky disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          <PillButton
            onClick={() => run(ticket)}
            disabled={ticket.trim().length < 15 || state === 'working'}
            variant="accent"
            size="md"
            className="!bg-sky hover:!bg-sky-deep"
          >
            {state === 'working' ? (
              <>Triaging<Loader2 className="h-4 w-4 animate-spin" /></>
            ) : (
              <>Triage it<ArrowRight className="h-4 w-4" /></>
            )}
          </PillButton>
          <span className="text-[12px] text-slate-light">{ticket.length}/1200</span>
        </div>
      </div>

      {/* ── Output ────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-hairline bg-surface p-6 min-h-[22rem] flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
            Agent output
          </div>
          {state === 'done' && (
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 rounded-full ${
                simulated
                  ? 'bg-wash text-slate border border-hairline'
                  : 'bg-sky-tint text-sky-deep'
              }`}
            >
              {simulated ? 'Simulated' : 'Live · Claude'}
            </span>
          )}
        </div>

        {state === 'idle' && (
          <p className="text-sm text-slate-light leading-relaxed my-auto">
            Nothing here yet. Paste a ticket or pick a sample — this runs on your text, in your
            browser, right now. It is the same engineering we would put on your instance.
          </p>
        )}

        {state === 'error' && (
          <div className="my-auto flex items-start gap-2.5 text-sm text-slate">
            <AlertTriangle className="h-4 w-4 text-sky shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        {state === 'working' && (
          <div className="my-auto space-y-3">
            {['Reading the ticket', 'Judging impact and urgency', 'Choosing a queue', 'Drafting a reply'].map(
              (step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: reduce ? 1 : 0.25 }}
                  animate={reduce ? { opacity: 1 } : { opacity: [0.25, 1, 0.25] }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 1.4, repeat: Infinity, delay: i * 0.35 }
                  }
                  className="font-mono text-[12px] text-slate"
                >
                  {step}…
                </motion.div>
              ),
            )}
          </div>
        )}

        <AnimatePresence>
          {state === 'done' && result && priority && (
            <motion.div
              key={runId}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.35 }}
              className="space-y-4"
            >
              {/* Priority — derived from the matrix, not guessed */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`rounded-lg px-3 py-1.5 font-mono text-sm font-medium ${PRIORITY_STYLE[priority.code]}`}>
                  {priority.code} · {priority.label}
                </span>
                {result.isMajorIncident && (
                  <span className="rounded-lg bg-ink px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-onink">
                    Major incident
                  </span>
                )}
              </div>

              <p className="text-sm text-ink-body leading-relaxed font-medium">{result.summary}</p>

              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3.5">
                <Field label="Category" value={`${result.category} › ${result.subcategory}`} />
                <Field label="Assignment group" value={result.assignmentGroup} />
                <Field
                  label="Impact × Urgency"
                  value={`${LEVEL_LABEL[result.impact as Level]} × ${LEVEL_LABEL[result.urgency as Level]}`}
                />
                <Field label="SLA target (example policy)" value={priority.sla} />
              </div>

              <div className="rounded-xl bg-paper border border-hairline-soft p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light mb-2">
                  Drafted first response
                </div>
                <p className="text-sm text-slate leading-relaxed">{result.draftReply}</p>
              </div>

              <div className="flex items-start gap-2 text-[12px] text-slate-light leading-relaxed">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky shrink-0 mt-0.5" />
                <span>
                  <span className="text-slate">Why: </span>{result.reasoning}
                  {' '}Priority is computed from the impact × urgency matrix, the same way the
                  platform does it — the model does not pick it.
                </span>
              </div>

              {simulated && (
                <p className="text-[12px] text-slate-light leading-relaxed border-t border-hairline-soft pt-3">
                  This ran on a keyword fallback because the live model is not configured on this
                  deployment. We label simulations rather than passing them off as live.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
