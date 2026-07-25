/**
 * ifBash design tokens — single source of truth.
 *
 * Warm paper base, near-black ink, hairline rules, and TWO accents that mean
 * different things:
 *
 *   navy      → the ServiceNow platform practice (primary, most surfaces)
 *   mulberry  → the AI layer we build on top of it (agent/voice/Claude pages)
 *
 * That split is the point. The positioning is "we build ServiceNow, then we
 * build the AI layer on top" — so the palette states it instead of decorating.
 * Do not use mulberry as a general-purpose second colour; if it appears on a
 * ServiceNow page the distinction stops meaning anything.
 *
 * Accent history: terracotta (read as Anthropic coral) -> pine (read as
 * ServiceNow-adjacent green) -> deep navy, chosen 2026-07-24. Navy is none of
 * those, nor the indigo/violet every AI consultancy uses, and it carries
 * enterprise weight. Mulberry was added 2026-07-25 and is deliberately clear of
 * all four dead zones plus amber, which is part of the same default palette
 * terracotta came from.
 *
 * These same values are mirrored in tailwind.config.ts as named colors
 * (bg-paper, text-ink, border-hairline, text-navy, text-mulberry …). Prefer the
 * Tailwind classes in markup; import from here when a value is needed in JS
 * (inline gradients, canvas, framer-motion style props).
 *
 * Every contrast ratio below is measured, not estimated. Do not lighten a value
 * for looks without re-checking it.
 */

// ── Surfaces ────────────────────────────────────────────────────────
export const PAPER = '#FAF8F4'; // page background
export const SURFACE = '#FFFFFF'; // cards, alternating sections
export const WASH = '#F4F1EA'; // subtle warm fill, hover backgrounds

// ── Ink ─────────────────────────────────────────────────────────────
export const INK = '#141210'; // headlines, buttons, dark bands
export const INK_BODY = '#2A2721'; // card titles, strong body
export const INK_SOFT = '#4A463C'; // nav links, tertiary headings

// ── Muted text ──────────────────────────────────────────────────────
export const STONE = '#6B6659'; // body secondary
export const STONE_LIGHT = '#757064'; // small print, captions
export const STONE_FAINT = '#918D81'; // chevrons, index numerals

// ── Accent — deep navy ──────────────────────────────────────────────
// 11.0:1 on PAPER (AAA). NAVY_SOFT is 6.4:1 on INK (AA) — it exists so the
// accent stays visible on dark bands, where NAVY itself would disappear.
export const NAVY = '#1B3A5C'; // eyebrows, links, active states
export const NAVY_DEEP = '#12293F'; // pressed / hover-darken
export const NAVY_MID = '#3D6A94'; // gradient partner for NAVY; 4.9:1 on PAPER
export const NAVY_SOFT = '#7C9AB8'; // accent on ink backgrounds
export const NAVY_TINT = '#E9EFF5'; // icon wells, accent wash
export const NAVY_TINT_STRONG = '#D6E2EE'; // icon well hover

// ── Signature accent — mulberry (the AI layer) ──────────────────────
// Used ONLY on AI/agent surfaces: /services/ai-agents, /services/voice-agents,
// /services/claude-ai-engineering, /agent, the chat widget, the voice hero.
// 8.3:1 on PAPER (AAA). MULBERRY_SOFT is 6.9:1 on INK (AA) and plays the same
// role NAVY_SOFT does — keeping the accent visible on dark bands.
export const MULBERRY = '#7D2E55'; // eyebrows, links, active states on AI pages
export const MULBERRY_DEEP = '#5E2140'; // pressed / hover-darken — 11.2:1 on PAPER
export const MULBERRY_SOFT = '#C98BA8'; // accent on ink backgrounds
export const MULBERRY_TINT = '#F7EAF1'; // icon wells, accent wash
export const MULBERRY_TINT_STRONG = '#EFD8E4'; // icon well hover

// ── Rules ───────────────────────────────────────────────────────────
export const HAIRLINE = '#E7E2D9'; // section dividers, card borders
export const HAIRLINE_SOFT = '#EDE8DE'; // inner dividers, menu rules

// ── On-ink variants (text/rules over INK backgrounds) ───────────────
export const ON_INK = '#F3F0E9';
export const ON_INK_MUTED = '#A39C8B';
export const ON_INK_FAINT = '#8C8472';
export const ON_INK_LINE = '#2E2921';
export const ON_INK_FILL = '#221E17';

// ── Shared shadows ──────────────────────────────────────────────────
export const SHADOW_BUTTON = '0 8px 24px rgba(20,18,16,0.18)';
export const SHADOW_CARD = '0 8px 30px rgba(20,18,16,0.06)';
export const SHADOW_MENU =
  '0 24px 64px rgba(20,18,16,0.10), 0 8px 16px rgba(20,18,16,0.04)';
export const SHADOW_ACCENT = '0 8px 24px rgba(27,58,92,0.22)';

/** Standard page gutter — every section body uses this. */
export const CONTAINER = 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto';
