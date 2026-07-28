/**
 * ifBash design tokens — single source of truth.
 *
 * Warm paper base, near-black charcoal ink, hairline rules, and TWO accents
 * that mean different things:
 *
 *   sea  (brick)      → the ServiceNow platform practice — primary, most surfaces
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
 * `#F0836F` is ~2.7:1 on paper. It fails at every size, including display. If a
 * bright value ends up on light copy the page becomes unreadable, so the shine
 * lives in graphics and on dark bands, never in body type on paper.
 *
 * ── Accent history — five hues have been rejected, know why ────────────
 *   terracotta #C4553B  read as Anthropic coral
 *   pine       #14584C  read as ServiceNow-adjacent GREEN
 *   navy       #1B3A5C  correct but inert: dark, desaturated, no energy
 *   mulberry   #7D2E55  same problem, and paired with navy it read as one dark
 *   cyan-teal  #00707C  the 2026-07 palette — rejected by the client, who found
 *                       the overall scheme unappealing
 *   indigo     #4338CA  the "Executive Indigo" pair — rejected by the client
 *                       2026-07-27: "resembles AI colors totally" (generic
 *                       AI-startup gradient)
 * The current pair is Brick & Charcoal (client decision, 2026-07-27): `sea` is
 * brick red, `sky` stays azure — a warm/cool complementary duotone instead of
 * the analogous AI-gradient look. Keep the two hues clearly separated; do not
 * drift sea toward orange-coral (Anthropic) or violet-pink.
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
// The page is tinted rather than white or cream: a warm bone tint so colour is
// present even before any accent is used. Cards stay pure white so they lift.
export const PAPER = '#F8F5F1'; // page background — warm bone tint, clearly not white
export const SURFACE = '#FFFFFF'; // cards, alternating sections
export const WASH = '#F1E9E1'; // deeper warm tint — hover fills, inset panels

// ── Ink ─────────────────────────────────────────────────────────────
export const INK = '#181312'; // ~17:1 on PAPER — headlines, buttons, dark bands
export const INK_BODY = '#3A2A26'; // ~10.4:1 — card titles, strong body
export const INK_SOFT = '#5A463F'; // ~8:1 — nav links, tertiary headings

// ── Muted text ──────────────────────────────────────────────────────
// All three sit at their contrast floor. SLATE_FAINT is decorative only
// (chevrons, index numerals) — never put copy in it.
export const SLATE = '#6E5B52'; // ~6.1:1 AA — body secondary
export const SLATE_LIGHT = '#7A675D'; // ~5.3:1 AA — small print, captions
export const SLATE_FAINT = '#9C8A80'; // ~3.3:1 — decorative marks only

// ── Sea — the ServiceNow platform (primary) ─────────────────────────
export const SEA = '#B23A2B'; // ~7.3:1 on PAPER (AAA) — text, links, active
export const SEA_DEEP = '#7C2418'; // ~11:1 (AAA) — pressed / hover-darken
export const SEA_MID = '#C8482F'; // ~5.8:1 — hover states + UI edges
export const SEA_BRIGHT = '#F0836F'; // ~6.5:1 ON INK — the shine. ~2.7:1 on paper.
export const SEA_SOFT = '#F2A38F'; // ~9.5:1 on INK — accent on dark bands
export const SEA_TINT = '#FBE9E2'; // icon wells, accent wash
export const SEA_STRONG = '#F6CDBF'; // icon well hover

// ── Sky — the AI layer (secondary) ──────────────────────────────────
export const SKY = '#2563EB'; // ~4.8:1 on PAPER (AA) — text, links on AI pages
export const SKY_DEEP = '#1E3A8A'; // ~9.5:1 (AAA) — pressed / hover-darken
export const SKY_MID = '#3B82F6'; // ~3.4:1 — large display + UI edges only
export const SKY_BRIGHT = '#60A5FA'; // ~7.5:1 ON INK — the shine. ~2.5:1 on paper.
export const SKY_SOFT = '#93C5FD'; // ~10.4:1 on INK — accent on dark bands
export const SKY_TINT = '#DBEAFE'; // icon wells, accent wash
export const SKY_STRONG = '#BFDBFE'; // icon well hover

// ── Rules ───────────────────────────────────────────────────────────
export const HAIRLINE = '#E5DCD2'; // section dividers, card borders
export const HAIRLINE_SOFT = '#EDE5DA'; // inner dividers, menu rules

// ── Marker — highlighter amber ──────────────────────────────────────
// The hand-drawn strokes (CircleMark, Scribble, squiggle arrows) read as a
// person marking the page with a highlighter. Amber is the warm counterweight
// that keeps the indigo/azure pair from going monotone. Decorative strokes
// ONLY — never body text, never fills.
export const MARKER = '#D97706';

// ── On-ink variants (text/rules over INK backgrounds) ───────────────
export const ON_INK = '#F7EEEA'; // ~16.7:1
export const ON_INK_MUTED = '#C0A79C'; // ~8.2:1
export const ON_INK_FAINT = '#99816F'; // ~5.1:1
export const ON_INK_LINE = '#33251F';
export const ON_INK_FILL = '#241A15';

// ── Shared shadows ──────────────────────────────────────────────────
export const SHADOW_BUTTON = '0 8px 24px rgba(24,19,18,0.18)';
export const SHADOW_CARD = '0 8px 30px rgba(24,19,18,0.07)';
export const SHADOW_MENU =
  '0 24px 64px rgba(24,19,18,0.10), 0 8px 16px rgba(24,19,18,0.04)';
export const SHADOW_ACCENT = '0 8px 24px rgba(178,58,43,0.22)';
/** The glow that gives the site its shine — bright cyan, dark surfaces only. */
export const GLOW_SEA = '0 0 32px rgba(240,131,111,0.35)';
export const GLOW_SKY = '0 0 32px rgba(96,165,250,0.35)';

/** Standard page gutter — every section body uses this. */
export const CONTAINER = 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto';
