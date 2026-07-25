'use client';

import { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import {
  MODELS, DEFAULT_ASSUMPTIONS, PRICES_AS_OF, computeCost, formatUsd, type Model,
} from '@/lib/agent-cost';

/**
 * "What does an agent actually cost to run" — the question every buyer asks
 * third and nobody answers on a marketing site.
 *
 * Form choices, deliberately:
 * - The monthly figure is a HERO NUMBER, not a chart. One value, read once.
 * - The model comparison is magnitude on an ORDERED scale (cheap -> expensive),
 *   so it uses one hue light->dark, not three categorical colours. Rainbow
 *   categorical hues here would imply the models are unrelated categories.
 * - Bars are direct-labelled, so there is no legend and no axis to read.
 * - Values and labels wear ink tokens; only the bar carries the colour.
 */

const RAMP = ['bg-sky-strong', 'bg-sky-soft', 'bg-sky'];

function Slider({
  label, value, min, max, step, onChange, format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  format: (n: number) => string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light">
          {label}
        </span>
        <span className="font-mono text-sm text-ink-body">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-sky cursor-pointer"
      />
    </label>
  );
}

export function AgentCostCalculator() {
  const [conversations, setConversations] = useState(2000);
  const [turns, setTurns] = useState(6);
  const [caching, setCaching] = useState(true);
  const [selected, setSelected] = useState<Model>(MODELS[0]);

  const rows = useMemo(
    () =>
      MODELS.map((m) => ({
        model: m,
        cost: computeCost(m, {
          conversationsPerMonth: conversations,
          turnsPerConversation: turns,
          caching,
        }),
      })),
    [conversations, turns, caching],
  );

  const active = rows.find((r) => r.model.id === selected.id)!;
  const max = Math.max(...rows.map((r) => r.cost.perMonth));

  return (
    <div className="grid lg:grid-cols-5 gap-5">
      {/* ── Controls ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 rounded-2xl border border-hairline bg-surface p-6 space-y-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
          Your numbers
        </div>

        <Slider
          label="Conversations / month"
          value={conversations}
          min={100}
          max={50000}
          step={100}
          onChange={setConversations}
          format={(n) => n.toLocaleString('en-US')}
        />
        <Slider
          label="Messages / conversation"
          value={turns}
          min={2}
          max={20}
          step={1}
          onChange={setTurns}
          format={(n) => String(n)}
        />

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={caching}
            onChange={(e) => setCaching(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-sky cursor-pointer"
          />
          <span>
            <span className="block text-sm text-ink-body">Prompt caching</span>
            <span className="block text-[12px] text-slate-light leading-relaxed">
              Re-reads the fixed system prompt at a tenth of the input rate.
            </span>
          </span>
        </label>

        {active.cost.cachingInert && (
          <p className="flex items-start gap-2 rounded-xl bg-wash border border-hairline p-3 text-[12px] leading-relaxed text-slate">
            <Info className="h-3.5 w-3.5 text-sky shrink-0 mt-0.5" />
            <span>
              Caching is on but does nothing on {active.model.name}: its minimum cacheable prefix
              is {active.model.cacheMinimum.toLocaleString('en-US')} tokens and this system prompt
              is {DEFAULT_ASSUMPTIONS.systemTokens}. No error, no saving — the kind of thing that
              quietly wastes a budget.
            </span>
          </p>
        )}
      </div>

      {/* ── Result ────────────────────────────────────────────────── */}
      <div className="lg:col-span-3 rounded-2xl border border-hairline bg-surface p-6">
        {/* Hero number */}
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light mb-1.5">
          {active.model.name} · estimated monthly
        </div>
        <div className="font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-none text-ink mb-2 tabular-nums">
          {formatUsd(active.cost.perMonth)}
        </div>
        <p className="text-sm text-slate mb-7">
          {formatUsd(active.cost.perConversation)} per conversation ·{' '}
          {formatUsd(active.cost.perYear)} a year
        </p>

        {/* Ordered magnitude — one hue, light to dark, direct-labelled */}
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light mb-3">
          Same workload, each model
        </div>
        <div className="space-y-2.5 mb-6">
          {rows.map((r, i) => {
            const isActive = r.model.id === selected.id;
            return (
              <button
                key={r.model.id}
                onClick={() => setSelected(r.model)}
                title={`${r.model.name} — ${formatUsd(r.cost.perConversation)} per conversation`}
                className="w-full text-left group"
                aria-pressed={isActive}
              >
                <span className="flex items-baseline justify-between mb-1.5">
                  <span className={`text-sm ${isActive ? 'text-ink font-medium' : 'text-slate'}`}>
                    {r.model.name}
                  </span>
                  <span className="font-mono text-sm text-ink-body tabular-nums">
                    {formatUsd(r.cost.perMonth)}
                  </span>
                </span>
                <span className="block h-2.5 w-full rounded-full bg-wash overflow-hidden">
                  <span
                    className={`block h-full rounded-full transition-all duration-500 motion-reduce:transition-none ${RAMP[i]} ${
                      isActive ? '' : 'opacity-70 group-hover:opacity-100'
                    }`}
                    style={{ width: `${Math.max(2, (r.cost.perMonth / max) * 100)}%` }}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[13px] text-slate leading-relaxed border-t border-hairline-soft pt-4">
          <span className="text-ink-body">{active.model.note}</span> Picking the model is most of
          the cost decision — and most agents do not need the expensive one.
        </p>
      </div>

      {/* ── Assumptions, stated ───────────────────────────────────── */}
      <div className="lg:col-span-5 rounded-2xl border border-hairline bg-paper p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light mb-2">
          What this assumes
        </div>
        <p className="text-[13px] text-slate leading-relaxed">
          A {DEFAULT_ASSUMPTIONS.systemTokens}-token system prompt, ~{DEFAULT_ASSUMPTIONS.userTokens}{' '}
          tokens per user message and ~{DEFAULT_ASSUMPTIONS.replyTokens} per reply, with the full
          conversation resent each turn — so turn six pays for turns one through five, which is the
          part napkin estimates miss. Anthropic list prices as of {PRICES_AS_OF}; tool calls,
          retrieval, and retries are extra. Your real numbers come out of the scoping call, not a
          slider — this is here so the order of magnitude is not a mystery.
        </p>
      </div>
    </div>
  );
}
