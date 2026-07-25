/**
 * ifBash design tokens — single source of truth.
 *
 * Cool tinted base, near-black ink, hairline rules, and TWO accents that mean
 * different things:
 *
 *   sea  (blue-green) → the ServiceNow platform practice — primary, most surfaces
 *   sky  (blue)       → the AI layer built on top — agent/voice/Claude pages
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
 * `#1FD3E3` is 1.64:1 on paper. It fails at every size, including display. If a
 * bright value ends up on light copy the page becomes unreadable, so the shine
 * lives in graphics and on dark bands, never in body type on paper.
 *
 * ── Accent history — four hues have been rejected, know why ────────────
 *   terracotta #C4553B  read as Anthropic coral
 *   pine       #14584C  read as ServiceNow-adjacent GREEN
 *   navy       #1B3A5C  correct but inert: dark, desaturated, no energy
 *   mulberry   #7D2E55  same problem, and paired with navy it read as one dark
 * The current pair is cyan-leaning on purpose: `sea` is deliberately steered
 * blue-ward so it does not repeat pine's ServiceNow-green problem, while still
 * reading green-blue. Do NOT drift it toward lime.
 *
 * Known and accepted: this palette does NOT match the logo, which is a vivid
 * magenta→violet→indigo gradient. That mismatch is a deliberate client choice
 * (2026-07-25) — raise it before "fixing" the palette to match the mark.
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
// The page is tinted rather than white or cream: a hint of cyan so colour is
// present even before any accent is used. Cards stay pure white so they lift.
export const PAPER = '#EAF4F8'; // page background — tinted cyan, clearly not white
export const SURFACE = '#FFFFFF'; // cards, alternating sections
export const WASH = '#D9EAF2'; // deeper tint — hover fills, inset panels

// ── Ink ─────────────────────────────────────────────────────────────
export const INK = '#0B1417'; // 16.7:1 on PAPER — headlines, buttons, dark bands
export const INK_BODY = '#22333A'; // 11.7:1 — card titles, strong body
export const INK_SOFT = '#3D5259'; // 7.4:1 — nav links, tertiary headings

// ── Muted text ──────────────────────────────────────────────────────
// All three sit at their contrast floor. SLATE_FAINT is decorative only
// (chevrons, index numerals) — never put copy in it.
export const SLATE = '#52696F'; // 5.5:1 AA — body secondary
export const SLATE_LIGHT = '#5C7278'; // 4.8:1 AA — small print, captions
export const SLATE_FAINT = '#7A9098'; // 3.2:1 — decorative marks only

// ── Sea — the ServiceNow platform (primary) ─────────────────────────
export const SEA = '#00707C'; // 5.2:1 on PAPER (AA) — text, links, active
export const SEA_DEEP = '#005059'; // 8.2:1 (AAA) — pressed / hover-darken
export const SEA_MID = '#00939F'; // 3.3:1 — large display + UI edges only
export const SEA_BRIGHT = '#1FD3E3'; // 10.2:1 ON INK — the shine. 1.6:1 on paper.
export const SEA_SOFT = '#79D8E2'; // 11.3:1 on INK — accent on dark bands
export const SEA_TINT = '#C8E9EE'; // icon wells, accent wash
export const SEA_STRONG = '#A6DCE5'; // icon well hover

// ── Sky — the AI layer (secondary) ──────────────────────────────────
export const SKY = '#0A6FB0'; // 4.8:1 on PAPER (AA) — text, links on AI pages
export const SKY_DEEP = '#075287'; // 7.3:1 (AAA) — pressed / hover-darken
export const SKY_MID = '#1090D8'; // 3.1:1 — large display + UI edges only
export const SKY_BRIGHT = '#3FC6FF'; // 9.5:1 ON INK — the shine. 1.8:1 on paper.
export const SKY_SOFT = '#86CDF2'; // 10.7:1 on INK — accent on dark bands
export const SKY_TINT = '#CCE6F8'; // icon wells, accent wash
export const SKY_STRONG = '#AFD9F5'; // icon well hover

// ── Rules ───────────────────────────────────────────────────────────
export const HAIRLINE = '#CBE1E9'; // section dividers, card borders
export const HAIRLINE_SOFT = '#DCEBF1'; // inner dividers, menu rules

// ── On-ink variants (text/rules over INK backgrounds) ───────────────
export const ON_INK = '#E8F4F6'; // 16.6:1
export const ON_INK_MUTED = '#9FB6BC'; // 8.8:1
export const ON_INK_FAINT = '#7E969D'; // 6.0:1
export const ON_INK_LINE = '#1E2C31';
export const ON_INK_FILL = '#15242A';

// ── Shared shadows ──────────────────────────────────────────────────
export const SHADOW_BUTTON = '0 8px 24px rgba(11,20,23,0.18)';
export const SHADOW_CARD = '0 8px 30px rgba(11,20,23,0.07)';
export const SHADOW_MENU =
  '0 24px 64px rgba(11,20,23,0.10), 0 8px 16px rgba(11,20,23,0.04)';
export const SHADOW_ACCENT = '0 8px 24px rgba(0,112,124,0.22)';
/** The glow that gives the site its shine — bright cyan, dark surfaces only. */
export const GLOW_SEA = '0 0 32px rgba(31,211,227,0.35)';
export const GLOW_SKY = '0 0 32px rgba(63,198,255,0.35)';

/** Standard page gutter — every section body uses this. */
export const CONTAINER = 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto';
