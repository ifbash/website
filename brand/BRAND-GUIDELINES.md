# ifBash Brand Guidelines

**Edition:** Brick & Charcoal · 2026-07-27
**Applies to:** all print, web, social, product, and partner uses of the ifBash brand.

---

## 1. Brand in one paragraph

ifBash is a technology consultancy with three practices: ServiceNow delivery, AI agents engineered on Claude, and web & mobile product development. The visual identity is **Brick & Charcoal**: a warm brick red for the ServiceNow platform practice (`sea`), an azure for the AI layer built on top (`sky`), a bone-tinted warm neutral base with charcoal ink, and a single warm **highlighter amber** (`marker`) reserved for hand-drawn annotation strokes. The warm/cool complementary duotone replaces the earlier indigo pair, which read as a generic AI-startup gradient. The identity is honest, engineered, and human — clean layout with deliberate hand-marked moments.

---

## 2. Logo

### 2.1 The lockup

The primary lockup is the **triangle mark + handwritten "ifBash" wordmark** in a brick→ember gradient (`logo/logo-primary.png`). The wordmark is **custom hand-drawn lettering — not a font**. Never retype it, never substitute a script font, never redraw the mark.

### 2.2 Variants and when to use them

| File | Use |
|------|-----|
| `logo/logo-primary.png` | Default. Color gradient on light backgrounds only |
| `logo/logo-reversed.png` | White silhouette on dark/ink backgrounds (footer, dark slides) |
| `logo/logo-mono.png` | Single-color charcoal — print, legal, fax, engraving, one-color contexts |
| `logo/logo-stacked.png` | Mark above wordmark — square-ish spaces (avatars, profile images) |
| `logo/logo-stacked-reversed.png` | Stacked in white, for dark square spaces |
| `logo/mark-color.png` | The triangle alone, color — favicons, app icons, avatars |
| `logo/mark-white.png` / `mark-ink.png` / `mark-brick.png` | Mark as a solid silhouette |

### 2.3 Rules

- **Clear space:** keep empty space around the lockup of at least the height of the triangle mark on all sides.
- **Minimum size:** full lockup ≥ 110 px wide digital / 30 mm print. Below that, use `mark-color.png`.
- **Backgrounds:** primary lockup on `paper`/white/light imagery only. On `ink` or dark imagery use the reversed white version. Never place the gradient lockup on a colored or busy background.
- **Don't:** rotate, stretch, recolor outside these variants, add effects (shadows, outlines), or place the mark inside shapes that fight its silhouette.

---

## 3. Color system

Full swatch sheet: `color/palette.png`. Source of truth in code: `lib/design.ts` (mirrored in `tailwind.config.ts`).

### 3.1 Core

| Role | Hex | Usage |
|------|-----|-------|
| Paper | `#F8F5F1` | Page background — warm bone tint, clearly not white |
| Surface | `#FFFFFF` | Cards and alternating sections |
| Wash | `#F1E9E1` | Alternate bands, hover fills, inset panels |
| Ink | `#181312` | Headlines, buttons, dark bands — charcoal (~16:1 on paper) |
| Ink body | `#3A2A26` | Strong body, card titles (~10:1) |
| Slate | `#6E5B52` | Secondary body, warm grey (~6:1 AA) |
| Hairline | `#E5DCD2` | Borders and dividers |

### 3.2 The two hues — they mean different things

| | Hex | Meaning |
|---|-----|---------|
| **Sea (brick)** | `#B23A2B` | The ServiceNow platform practice — primary accent, most surfaces (~7:1 AAA on paper) |
| **Sky (azure)** | `#2563EB` | The AI layer — accent on agent/voice/Claude surfaces only (~4.8:1 AA) |

Never use `sky` as a general-purpose second color; the sea/sky split states the company's positioning ("we build ServiceNow, then we build the AI layer on top"). Keep `sea` on the red side of orange — drift toward coral reads as Anthropic, drift toward violet-pink reads as the rejected AI-gradient look.

Each hue ships as a ramp (`deep → DEFAULT → mid → bright → soft → strong → tint`). **The brightness rule:** `bright` values (`#F0836F`, `#60A5FA`) are the shine — glows, fills, and text ON dark ink bands only. They fail contrast on light surfaces; never set copy in them on paper.

### 3.3 Marker amber

`#D97706` — highlighter amber, used **only** for hand-drawn strokes (circles, scribble underlines, squiggle arrows). It is the human counterweight in the palette. Never body text, never fills, never large areas.

### 3.4 Gradients

- **Accent text gradient:** brick → ember (`from-sea to-sea-mid`) — a monochrome warm ramp — for emphasized display-heading phrases on light surfaces. (Brick→azure muddies mid-gradient; do not cross the two hues in one gradient.)
- **CTA gradient:** `from-sea to-sea-mid` (brick family) for primary buttons; azure family for AI-layer buttons. Glow shadows always match the element's own hue.

---

## 4. Typography

All type is the **IBM Plex** superfamily (Open Font License). Files in `fonts/`:

| Face | Use |
|------|-----|
| `IBMPlexSans-Bold.ttf` | Display headings (tracking −0.02em to −0.03em) |
| `IBMPlexSans-SemiBold.ttf` | Buttons, nav, labels, card titles |
| `IBMPlexSans-Regular.ttf` | Body copy |
| `IBMPlexSans-Italic.ttf` | Margin notes, hand annotations |
| `IBMPlexMono-Regular.ttf` | Code, URLs, data, captions |
| `IBMPlexSansArabic-*.ttf` | Arabic (`/ar`) surfaces — Latin faces carry no Arabic glyphs |
| `IBMPlexSans-VF.ttf` / `Italic-VF.ttf` | Variable masters (weight 100–700) for design tools |

Hierarchy is carried by **weight and size**, never by a second family. Display scale (fluid clamp): xl 4.25rem → lg 3.4rem → md 2.75rem → sm 1.95rem. Do not use italics for emphasis inside display headings — use the accent gradient.

**Fallback stack:** `ui-sans-serif, system-ui, sans-serif` · Arabic fallback `Segoe UI, Tahoma, sans-serif`.

---

## 5. Iconography

- Product/UI icons: **Lucide** (`lucide-react`), 1.5–2 px strokes, rounded joins, in `sea` or `slate`.
- Brand icon: `icons/icon-{16..512}.png` + `apple-touch-icon.png` — the triangle mark with built-in padding. Use the size closest above the render target; never upscale.
- Hand-drawn strokes (`Scribble`, `CircleMark`, `SquiggleArrow` components) are part of the brand language — marker amber, always decorative, always on light surfaces.

---

## 6. Hand-drawn layer (the crafted signature)

The identity allows — encourages — a small number of hand-marked moments per page: one circled key phrase, one scribbled underline, one margin note. Rules:

1. Maximum **two** hand-drawn accents per viewport.
2. Always amber `#D97706`, always drawn as if by highlighter.
3. They annotate real meaning (a number, a promise, a differentiator) — never decoration for its own sake.

---

## 7. Social & web assets

| Asset | File | Notes |
|-------|------|-------|
| Social share card | `social/og-card.png` (1200×630) | Wired to OpenGraph + Twitter metadata |
| Favicon | `public/favicon.png` (512) | Transparent, works on light/dark browser chrome |
| Apple touch icon | `icons/apple-touch-icon.png` (180) | |
| Tagline | "We build ServiceNow. Then we build the AI layer on top." | Keep verbatim, including the period structure |

---

## 8. Voice (short version)

Direct, honest, engineered. We say "a written plan in two working days", not "industry-leading solutions". We never claim outcomes we can't show. The copy is confident enough to admit "AI helped build this site" — that honesty IS the brand.

---

## 9. Palette history

Five accent directions have been rejected — do not resurrect them without a client decision:

| Direction | Why it was rejected |
|-----------|---------------------|
| terracotta `#C4553B` | Read as Anthropic coral |
| pine `#14584C` | Read as ServiceNow-adjacent green |
| navy `#1B3A5C` | Correct but inert — dark, desaturated, no energy |
| mulberry `#7D2E55` | Same problem; paired with navy read as one dark |
| cyan-teal `#00707C` | Client found the overall scheme unappealing |
| indigo `#4338CA` (Executive Indigo) | "Resembles AI colors totally" — generic AI-startup gradient, client 2026-07-27 |

---

*Generated 2026-07-27. Code source of truth: `lib/design.ts` + `tailwind.config.ts`. Regenerate assets via `scripts/brand_suite.py` and `scripts/og_card.py`.*
