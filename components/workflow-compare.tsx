'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, RotateCcw, Check } from 'lucide-react';

/**
 * Animated comparison: a ticket finding its queue with and without an agent.
 *
 * The thing being shown is REASSIGNMENTS, not elapsed time. Handoff count is
 * structural — it follows from whether the ticket was classified correctly on
 * arrival — whereas "3 days down to 4 minutes" would be an invented metric of
 * exactly the kind this site removed everywhere else. The caption says it is
 * illustrative, per the standard set out on /work.
 *
 * Navy is the platform as it runs today; mulberry is the AI layer on top. The
 * two-colour split is the positioning, so the visual carries it too.
 */

const MANUAL = ['Service Desk', 'Network Ops', 'Back to Service Desk', 'Desktop Support'];
const AGENT = ['Service Desk', 'Desktop Support'];

const STEP_MS = 1100;

function Track({
  stops, tone, bounces,
}: {
  stops: string[];
  tone: 'navy' | 'mulberry';
  bounces: number[];
}) {
  const reduce = useReducedMotion();
  const [at, setAt] = useState(0);

  useEffect(() => {
    if (reduce) { setAt(stops.length - 1); return; }
    const id = setInterval(() => setAt((n) => (n + 1) % (stops.length + 1)), STEP_MS);
    return () => clearInterval(id);
  }, [stops.length, reduce]);

  const dot = tone === 'navy' ? 'bg-navy' : 'bg-mulberry';
  const ring = tone === 'navy' ? 'border-navy-strong' : 'border-mulberry-strong';
  const fill = tone === 'navy' ? 'bg-navy-tint' : 'bg-mulberry-tint';
  const text = tone === 'navy' ? 'text-navy' : 'text-mulberry';

  return (
    <ol className="space-y-0">
      {stops.map((stop, i) => {
        const reached = at >= i;
        const isBounce = bounces.includes(i);
        return (
          <li key={`${stop}-${i}`}>
            <div className="flex items-center gap-3.5">
              <motion.span
                animate={{ scale: at === i ? 1.15 : 1, opacity: reached ? 1 : 0.35 }}
                transition={{ duration: 0.3 }}
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${ring} ${
                  reached ? fill : 'bg-surface'
                }`}
              >
                {isBounce ? (
                  <RotateCcw className={`h-3.5 w-3.5 ${text}`} />
                ) : i === stops.length - 1 && reached ? (
                  <Check className={`h-3.5 w-3.5 ${text}`} />
                ) : (
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                )}
              </motion.span>
              <motion.span
                animate={{ opacity: reached ? 1 : 0.4 }}
                className={`text-sm ${reached ? 'text-ink-body' : 'text-stone-faint'} ${
                  isBounce ? 'italic' : ''
                }`}
              >
                {stop}
              </motion.span>
            </div>
            {i < stops.length - 1 && (
              <div className="ms-[13px] h-6 w-px bg-hairline relative overflow-hidden">
                <motion.span
                  animate={{ scaleY: at > i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  style={{ transformOrigin: 'top' }}
                  className={`absolute inset-0 ${dot}`}
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function WorkflowCompare() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-hairline bg-surface p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy mb-1">
            Triaged by hand
          </div>
          <p className="text-[13px] text-stone-light mb-5">Two reassignments before it lands.</p>
          <Track stops={MANUAL} tone="navy" bounces={[2]} />
        </div>

        <div className="rounded-2xl border border-mulberry-strong bg-surface p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-mulberry mb-1">
            Triaged by an agent
          </div>
          <p className="text-[13px] text-stone-light mb-5">Classified on arrival. No reassignment.</p>
          <Track stops={AGENT} tone="mulberry" bounces={[]} />
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed text-stone-light">
        <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-1 text-stone-faint" />
        <span>
          Illustrative, not measured. What an agent removes is the <em className="not-italic text-stone">reassignment</em>{' '}
          — the ticket that sat in the wrong queue because nobody read it properly on arrival. We
          will not publish a time saving until it is your instance and your numbers.
        </span>
      </p>
    </div>
  );
}
