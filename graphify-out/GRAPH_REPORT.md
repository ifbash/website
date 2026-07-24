# Graph Report - website  (2026-07-24)

## Corpus Check
- 127 files · ~74,769 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 587 nodes · 1060 edges · 77 communities (24 shown, 53 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.59)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53e61145`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- cn
- index.ts
- getServiceEntry
- chat-widget.tsx
- portfolio/[slug]/page.tsx
- header.tsx
- carousel.tsx
- app/layout.tsx
- compilerOptions
- scroll-animation.tsx
- use-toast.ts
- utils.ts
- command.tsx
- components.json
- dependencies
- AI Agent Instructions for ifBash Website
- choosing-between-a-servicenow-app-and-a-standalone-product.md
- what-an-ai-agent-actually-does-on-a-servicenow-instance.md
- @anthropic-ai/sdk
- pill-button.tsx
- _drafts/README.md
- gray-matter
- marked
- package.json
- get-started/page.tsx
- @radix-ui/react-accordion
- autoprefixer
- react-dom
- industry-data.ts
- work/layout.tsx
- hero-showcase.tsx
- agent/layout.tsx
- call/route.ts
- chat/route.ts
- lead/route.ts
- about-us/layout.tsx
- careers-servicenow-jobs/layout.tsx
- news-events-servicenow/layout.tsx
- cookies/page.tsx
- engage/layout.tsx
- get-started/layout.tsx
- learning-center-servicenow/layout.tsx
- privacy/page.tsx
- ai-agents/layout.tsx
- ai-automation/layout.tsx
- claude-ai-engineering/layout.tsx
- crm-customer-experience/layout.tsx
- custom-apps/layout.tsx
- digital-transformation/layout.tsx
- managed-services-support/layout.tsx
- mobile-app-development/layout.tsx
- servicenow-implementation/layout.tsx
- voice-agents/layout.tsx
- web-mobile-development/layout.tsx
- website-development/layout.tsx
- terms/page.tsx
- .eslintrc.json
- clsx
- eslint
- framer-motion
- @hookform/resolvers
- lucide-react
- postcss
- react-hook-form
- tailwind-merge
- tailwindcss-animate
- @types/node
- @types/react
- @types/react-dom
- zod
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `Section()` - 30 edges
2. `DisplayHeading()` - 26 edges
3. `Eyebrow()` - 26 edges
4. `Accented()` - 24 edges
5. `CtaBand()` - 23 edges
6. `cn()` - 23 edges
7. `PageHero()` - 21 edges
8. `PillLink()` - 21 edges
9. `ar` - 16 edges
10. `compilerOptions` - 16 edges

## Surprising Connections (you probably didn't know these)
- `IndustriesIndexPage()` --indirect_call--> `slug()`  [INFERRED]
  app/industries/page.tsx → components/nav-data.ts
- `generateMetadata()` --calls--> `getInsight()`  [EXTRACTED]
  app/insights/[slug]/page.tsx → lib/insights.ts
- `GET()` --calls--> `getAllInsights()`  [EXTRACTED]
  app/llms.txt/route.ts → lib/insights.ts
- `PortfolioIndexPage()` --calls--> `slug()`  [EXTRACTED]
  app/portfolio/page.tsx → components/nav-data.ts
- `Page()` --calls--> `getServiceEntry()`  [EXTRACTED]
  app/services/ai-automation/page.tsx → lib/service-data.ts

## Import Cycles
- None detected.

## Communities (77 total, 53 thin omitted)

### Community 1 - "index.ts"
Cohesion: 0.05
Nodes (72): principles, openRoles, perks, teams, whereWeActuallyAre, faqs, models, phases (+64 more)

### Community 2 - "getServiceEntry"
Cohesion: 0.24
Nodes (10): Page(), Page(), Page(), Page(), Page(), Page(), ServicePage(), getServiceEntry() (+2 more)

### Community 3 - "chat-widget.tsx"
Cohesion: 0.13
Nodes (14): CallState, capabilities, ChatWidget(), Mode, QUICK_OPTIONS, ask(), CHIPS, speak() (+6 more)

### Community 4 - "portfolio/[slug]/page.tsx"
Cohesion: 0.09
Nodes (20): libreBaskerville, metadata, DROP, Header(), LanguageToggle(), LenisProvider(), LocaleDirection(), AccordionContent (+12 more)

### Community 5 - "header.tsx"
Cohesion: 0.07
Nodes (37): IndustriesIndexPage(), metadata, generateMetadata(), IndustryPage(), PortfolioIndexPage(), generateMetadata(), PortfolioProductPage(), metadata (+29 more)

### Community 7 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): args, body, client, descMatch, DRAFTS, out, slug, tagArg (+1 more)

### Community 8 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 10 - "use-toast.ts"
Cohesion: 0.08
Nodes (24): metadata, metadata, metadata, metadata, metadata, plexArabic, metadata, practiceHrefs (+16 more)

### Community 13 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 15 - "dependencies"
Cohesion: 0.18
Nodes (11): geist, lenis, next, dependencies, geist, lenis, next, @radix-ui/react-navigation-menu (+3 more)

### Community 16 - "AI Agent Instructions for ifBash Website"
Cohesion: 0.14
Nodes (13): 1. Next.js App Router Structure, 2. Component Architecture, 3. Styling Approach, AI Agent Instructions for ifBash Website, Code Conventions, Common Commands, Component Guidelines, Development Workflow (+5 more)

### Community 17 - "choosing-between-a-servicenow-app-and-a-standalone-product.md"
Cohesion: 0.29
Nodes (6): Build it on ServiceNow when the work is workflow, Build standalone when the work is product, Questions that settle it quickly, The middle answer is common, The two failure modes, What we do about it

### Community 18 - "what-an-ai-agent-actually-does-on-a-servicenow-instance.md"
Cohesion: 0.33
Nodes (5): An agent is a loop, not a feature, How to tell a real one from a repackaged chatbot, The honest constraint, The useful work is unglamorous, Where an agent must stop

### Community 20 - "pill-button.tsx"
Cohesion: 0.67
Nodes (3): Footer(), react, react

### Community 24 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 26 - "get-started/page.tsx"
Cohesion: 0.25
Nodes (6): faqJsonLd, faqs, formSchema, FormValues, services, steps

### Community 39 - "industry-data.ts"
Cohesion: 0.16
Nodes (19): InsightsIndex(), metadata, esc(), GET(), generateMetadata(), generateStaticParams(), InsightPage(), PROSE (+11 more)

### Community 41 - "hero-showcase.tsx"
Cohesion: 0.19
Nodes (12): AgentChatDemo(), CALL_LINES, HeroShowcase(), INCIDENTS, MobileDemo(), PANELS, rise(), ServiceNowDemo() (+4 more)

## Knowledge Gaps
- **238 isolated node(s):** `extends`, `next/core-web-vitals`, `metadata`, `CallState`, `capabilities` (+233 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `cn`, `zod`, `carousel.tsx`, `command.tsx`, `@anthropic-ai/sdk`, `pill-button.tsx`, `gray-matter`, `marked`, `package.json`, `@radix-ui/react-accordion`, `autoprefixer`, `react-dom`, `clsx`, `eslint`, `framer-motion`, `@hookform/resolvers`, `lucide-react`, `postcss`, `react-hook-form`, `tailwind-merge`, `tailwindcss-animate`, `@types/node`, `@types/react`, `@types/react-dom`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `react` connect `pill-button.tsx` to `index.ts`, `dependencies`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `FaqSection()` connect `index.ts` to `pill-button.tsx`, `header.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `metadata` to the rest of the system?**
  _238 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.054184132898618224 - nodes in this community are weakly interconnected._
- **Should `chat-widget.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `portfolio/[slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._