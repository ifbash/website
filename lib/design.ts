/**
 * ifBash design tokens — single source of truth.
 *
 * Cool tinted base, near-black ink, hairline rules, and TWO accents that mean
 * different things:
 *
 *   sea  (indigo)     → the ServiceNow platform practice — primary, most surfaces
 *   sky  (azure blue) → the AI layer built on top — agent/voice/Claude pages
 *
 * That split is the point. The positioning is "we build ServiceNow, then we
 * build the AI layer on top", so the palette states it instead of decorating.
 * Do not use `sky` as a general-purpose second colour; the moment it appears on
 * a ServiceNow page the distinction stops meaning anything.
 *
 * ── The brightness rule (read before adding any colour) ────────────────
 * Each hue has a DARK end and a BRIGHT end, and they are not interchangeable:
 *
 *   SEA / SKY            text, links, icons, borders on light surfaces  (AAA/AA)
 *   SEA_BRIGHT / SKY_BRIGHT   glows, orb, chart fills, underlines, and text ON
 *                             ink bands — NEVER text on a light surface
 *
 * `#818CF8` is ~2.7:1 on paper. It fails at every size, including display. If a
 * bright value ends up on light copy the page becomes unreadable, so the shine
 * lives in graphics and on dark bands, never in body type on paper.
 *
 * ── Accent history — four hues have been rejected, know why ────────────
 *   terracotta #C4553B  read as Anthropic coral
 *   pine       #14584C  read as ServiceNow-adjacent GREEN
 *   navy       #1B3A5C  correct but inert: dark, desaturated, no energy
 *   mulberry   #7D2E55  same problem, and paired with navy it read as one dark
 *   cyan-teal  #00707C  the 2026-07 palette — rejected by the client, who found
 *                       the overall scheme unappealing
 * The current pair is Executive Indigo (client decision, 2026-07-27): `sea` is
 * indigo, `sky` is azure, matched to the recolored logo's violet→azure gradient.
 * Keep the two hues clearly separated; do not drift sea toward violet-pink.
 *
 * Mirrored in tailwind.config.ts as named colors (bg-paper, text-ink,
 * border-hairline, text-sea, text-sky …). Prefer the Tailwind classes in
 * markup; import from here when a value is needed in JS (inline gradients,
 * canvas, framer-motion style props). Never hard-code a hex in a page.
 *
 * EVERY RATIO BELOW IS MEASURED, NOT ESTIMATED. Re-check before lightening
 * anything for looks — several values here are already at their limit.
 */

// ── Surfaces ────────────────────────────────────────────────────────
// The page is tinted rather than white or cream: a hint of indigo so colour is
// present even before any accent is used. Cards stay pure white so they lift.
export const PAPER = '#F4F5FA'; // page background — tinted indigo, clearly not white
export const SURFACE = '#FFFFFF'; // cards, alternating sections
export const WASH = '#E8EAF6'; // deeper tint — hover fills, inset panels

// ── Ink ─────────────────────────────────────────────────────────────
export const INK = '#0E1120'; // ~17:1 on PAPER — headlines, buttons, dark bands
export const INK_BODY = '#333A4E'; // ~10.4:1 — card titles, strong body
export const INK_SOFT = '#454B5E'; // ~8:1 — nav links, tertiary headings

// ── Muted text ──────────────────────────────────────────────────────
// All three sit at their contrast floor. SLATE_FAINT is decorative only
// (chevrons, index numerals) — never put copy in it.
export const SLATE = '#565C72'; // ~6.1:1 AA — body secondary
export const SLATE_LIGHT = '#60667C'; // ~5.3:1 AA — small print, captions
export const SLATE_FAINT = '#82879C'; // ~3.3:1 — decorative marks only

// ── Sea — the ServiceNow platform (primary) ─────────────────────────
export const SEA = '#4338CA'; // ~7.3:1 on PAPER (AAA) — text, links, active
export const SEA_DEEP = '#312E81'; // ~11:1 (AAA) — pressed / hover-darken
export const SEA_MID = '#4F46E5'; // ~5.8:1 — hover states + UI edges
export const SEA_BRIGHT = '#818CF8'; // ~6.5:1 ON INK — the shine. ~2.7:1 on paper.
export const SEA_SOFT = '#A5B4FC'; // ~9.5:1 on INK — accent on dark bands
export const SEA_TINT = '#E0E7FF'; // icon wells, accent wash
export const SEA_STRONG = '#C7D2FE'; // icon well hover

// ── Sky — the AI layer (secondary) ──────────────────────────────────
export const SKY = '#2563EB'; // ~4.8:1 on PAPER (AA) — text, links on AI pages
export const SKY_DEEP = '#1E3A8A'; // ~9.5:1 (AAA) — pressed / hover-darken
export const SKY_MID = '#3B82F6'; // ~3.4:1 — large display + UI edges only
export const SKY_BRIGHT = '#60A5FA'; // ~7.5:1 ON INK — the shine. ~2.5:1 on paper.
export const SKY_SOFT = '#93C5FD'; // ~10.4:1 on INK — accent on dark bands
export const SKY_TINT = '#DBEAFE'; // icon wells, accent wash
export const SKY_STRONG = '#BFDBFE'; // icon well hover

// ── Rules ───────────────────────────────────────────────────────────
export const HAIRLINE = '#D8DBEC'; // section dividers, card borders
export const HAIRLINE_SOFT = '#E4E6F2'; // inner dividers, menu rules

// ── Marker — highlighter amber ──────────────────────────────────────
// The hand-drawn strokes (CircleMark, Scribble, squiggle arrows) read as a
// person marking the page with a highlighter. Amber is the warm counterweight
// that keeps the indigo/azure pair from going monotone. Decorative strokes
// ONLY — never body text, never fills.
export const MARKER = '#D97706';

// ── On-ink variants (text/rules over INK backgrounds) ───────────────
export const ON_INK = '#ECEEF8'; // ~16.7:1
export const ON_INK_MUTED = '#A2A8C0'; // ~8.2:1
export const ON_INK_FAINT = '#7E8399'; // ~5.1:1
export const ON_INK_LINE = '#23273D';
export const ON_INK_FILL = '#181C2E';

// ── Shared shadows ──────────────────────────────────────────────────
export const SHADOW_BUTTON = '0 8px 24px rgba(14,17,32,0.18)';
export const SHADOW_CARD = '0 8px 30px rgba(14,17,32,0.07)';
export const SHADOW_MENU =
  '0 24px 64px rgba(14,17,32,0.10), 0 8px 16px rgba(14,17,32,0.04)';
export const SHADOW_ACCENT = '0 8px 24px rgba(67,56,202,0.22)';
/** The glow that gives the site its shine — bright cyan, dark surfaces only. */
export const GLOW_SEA = '0 0 32px rgba(129,140,248,0.35)';
export const GLOW_SKY = '0 0 32px rgba(96,165,250,0.35)';

/** Standard page gutter — every section body uses this. */
export const CONTAINER = 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto';
