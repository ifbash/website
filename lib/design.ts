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
 * `#22C7D6` is 1.94:1 on paper. It fails at every size, including display. If a
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
export const PAPER = '#F3F9FB'; // page background — pale cyan wash
export const SURFACE = '#FFFFFF'; // cards, alternating sections
export const WASH = '#E4F0F4'; // deeper tint — hover fills, inset panels

// ── Ink ─────────────────────────────────────────────────────────────
export const INK = '#0B1417'; // 17.5:1 on PAPER — headlines, buttons, dark bands
export const INK_BODY = '#22333A'; // 12.3:1 — card titles, strong body
export const INK_SOFT = '#3D5259'; // 7.8:1 — nav links, tertiary headings

// ── Muted text ──────────────────────────────────────────────────────
// All three sit at their contrast floor. SLATE_FAINT is decorative only
// (chevrons, index numerals) — never put copy in it.
export const SLATE = '#52696F'; // 5.5:1 AA — body secondary
export const SLATE_LIGHT = '#5C7278'; // 4.8:1 AA — small print, captions
export const SLATE_FAINT = '#7A9098'; // 3.2:1 — decorative marks only

// ── Sea — the ServiceNow platform (primary) ─────────────────────────
export const SEA = '#0A5C63'; // 7.3:1 on PAPER (AAA) — text, links, active
export const SEA_DEEP = '#07454B'; // 10.1:1 — pressed / hover-darken
export const SEA_MID = '#0E8C96'; // 3.8:1 — large display + UI edges only
export const SEA_BRIGHT = '#22C7D6'; // 9.1:1 ON INK — the shine. Never on paper.
export const SEA_SOFT = '#7FD2DA'; // 10.8:1 on INK — accent on dark bands
export const SEA_TINT = '#DEF3F5'; // icon wells, accent wash
export const SEA_STRONG = '#C2E7EB'; // icon well hover

// ── Sky — the AI layer (secondary) ──────────────────────────────────
export const SKY = '#0B6BA8'; // 5.4:1 on PAPER (AA) — text, links on AI pages
export const SKY_DEEP = '#08527F'; // 7.8:1 (AAA) — pressed / hover-darken
export const SKY_MID = '#1E93D0'; // 3.2:1 — large display + UI edges only
export const SKY_BRIGHT = '#4FC3F7'; // 9.3:1 ON INK — the shine. Never on paper.
export const SKY_SOFT = '#8ECBEC'; // 10.6:1 on INK — accent on dark bands
export const SKY_TINT = '#E2F1FA'; // icon wells, accent wash
export const SKY_STRONG = '#C6E4F5'; // icon well hover

// ── Rules ───────────────────────────────────────────────────────────
export const HAIRLINE = '#D6E6EA'; // section dividers, card borders
export const HAIRLINE_SOFT = '#E4EFF2'; // inner dividers, menu rules

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
export const SHADOW_ACCENT = '0 8px 24px rgba(10,92,99,0.22)';
/** The glow that gives the site its shine — bright cyan, dark surfaces only. */
export const GLOW_SEA = '0 0 32px rgba(34,199,214,0.35)';
export const GLOW_SKY = '0 0 32px rgba(79,195,247,0.35)';

/** Standard page gutter — every section body uses this. */
export const CONTAINER = 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto';
