/**
 * ifBash design tokens — single source of truth.
 *
 * Warm paper base, near-black ink, one deep-navy accent, hairline rules.
 * Accent history: terracotta (read as Anthropic coral) -> pine (read as
 * ServiceNow-adjacent green) -> deep navy, chosen 2026-07-24. Navy is none
 * of those, nor the indigo/violet every AI consultancy uses, and it carries
 * enterprise weight for the ServiceNow practice.
 *
 * These same values are mirrored in tailwind.config.ts as named colors
 * (bg-paper, text-ink, border-hairline, text-navy …). Prefer the Tailwind
 * classes in markup; import from here when a value is needed in JS
 * (inline gradients, canvas, framer-motion style props).
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
// 11.1:1 on PAPER (AAA). NAVY_SOFT is 6.4:1 on INK (AA) — it exists so the
// accent stays visible on dark bands, where NAVY itself would disappear.
export const NAVY = '#1B3A5C'; // eyebrows, links, active states
export const NAVY_DEEP = '#12293F'; // pressed / hover-darken
export const NAVY_SOFT = '#7C9AB8'; // accent on ink backgrounds
export const NAVY_TINT = '#E9EFF5'; // icon wells, accent wash
export const NAVY_TINT_STRONG = '#D6E2EE'; // icon well hover

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
