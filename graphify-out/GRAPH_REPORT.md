# Graph Report - website  (2026-07-24)

## Corpus Check
- 100 files · ~66,553 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 473 nodes · 823 edges · 72 communities (20 shown, 52 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.59)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `228b49e0`
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
- pill-button.tsx
- package.json
- get-started/page.tsx
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
- next
- postcss
- @radix-ui/react-navigation-menu
- react-dom
- react-hook-form
- tailwind-merge
- tailwindcss
- tailwindcss-animate
- @types/node
- @types/react
- @types/react-dom
- zod
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `DisplayHeading()` - 26 edges
2. `Section()` - 26 edges
3. `Eyebrow()` - 25 edges
4. `Accented()` - 24 edges
5. `CtaBand()` - 21 edges
6. `cn()` - 21 edges
7. `PageHero()` - 20 edges
8. `PillLink()` - 20 edges
9. `compilerOptions` - 16 edges
10. `FaqSection()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `IndustriesIndexPage()` --indirect_call--> `slug()`  [INFERRED]
  app/industries/page.tsx → components/nav-data.ts
- `PortfolioIndexPage()` --calls--> `slug()`  [EXTRACTED]
  app/portfolio/page.tsx → components/nav-data.ts
- `Page()` --calls--> `getServiceEntry()`  [EXTRACTED]
  app/services/ai-automation/page.tsx → lib/service-data.ts
- `Page()` --calls--> `getServiceEntry()`  [EXTRACTED]
  app/services/crm-customer-experience/page.tsx → lib/service-data.ts
- `Page()` --calls--> `getServiceEntry()`  [EXTRACTED]
  app/services/custom-apps/page.tsx → lib/service-data.ts

## Import Cycles
- None detected.

## Communities (72 total, 52 thin omitted)

### Community 1 - "index.ts"
Cohesion: 0.06
Nodes (57): principles, openRoles, perks, teams, whereWeActuallyAre, faqs, models, phases (+49 more)

### Community 2 - "getServiceEntry"
Cohesion: 0.24
Nodes (10): Page(), Page(), Page(), Page(), Page(), Page(), ServicePage(), getServiceEntry() (+2 more)

### Community 3 - "chat-widget.tsx"
Cohesion: 0.13
Nodes (14): CallState, capabilities, ChatWidget(), Mode, QUICK_OPTIONS, ask(), CHIPS, speak() (+6 more)

### Community 4 - "portfolio/[slug]/page.tsx"
Cohesion: 0.18
Nodes (15): IndustriesIndexPage(), metadata, PortfolioIndexPage(), generateMetadata(), PortfolioProductPage(), Entry, portfolioCategories, slug() (+7 more)

### Community 5 - "header.tsx"
Cohesion: 0.07
Nodes (28): libreBaskerville, metadata, metadata, practices, Footer(), footerLinks, DROP, Header() (+20 more)

### Community 8 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 13 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 15 - "dependencies"
Cohesion: 0.29
Nodes (7): @anthropic-ai/sdk, autoprefixer, dependencies, @anthropic-ai/sdk, autoprefixer, @radix-ui/react-accordion, @radix-ui/react-accordion

### Community 16 - "AI Agent Instructions for ifBash Website"
Cohesion: 0.14
Nodes (13): 1. Next.js App Router Structure, 2. Component Architecture, 3. Styling Approach, AI Agent Instructions for ifBash Website, Code Conventions, Common Commands, Component Guidelines, Development Workflow (+5 more)

### Community 20 - "pill-button.tsx"
Cohesion: 0.13
Nodes (17): Width, WIDTHS, FeatureCard(), FeatureGrid(), BaseProps, classesFor(), ON_INK_VARIANTS, PillButton() (+9 more)

### Community 24 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 26 - "get-started/page.tsx"
Cohesion: 0.25
Nodes (6): faqJsonLd, faqs, formSchema, FormValues, services, steps

### Community 39 - "industry-data.ts"
Cohesion: 0.31
Nodes (8): generateMetadata(), IndustryPage(), industryItems, getIndustryEntry(), industryEntries, IndustryEntry, industryMeta(), industrySlugs

### Community 41 - "hero-showcase.tsx"
Cohesion: 0.19
Nodes (12): AgentChatDemo(), CALL_LINES, HeroShowcase(), INCIDENTS, MobileDemo(), PANELS, rise(), ServiceNowDemo() (+4 more)

## Knowledge Gaps
- **191 isolated node(s):** `extends`, `next/core-web-vitals`, `metadata`, `CallState`, `capabilities` (+186 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `cn`, `index.ts`, `zod`, `carousel.tsx`, `app/layout.tsx`, `use-toast.ts`, `command.tsx`, `package.json`, `clsx`, `eslint`, `framer-motion`, `@hookform/resolvers`, `lucide-react`, `next`, `postcss`, `@radix-ui/react-navigation-menu`, `react-dom`, `react-hook-form`, `tailwind-merge`, `tailwindcss`, `tailwindcss-animate`, `@types/node`, `@types/react`, `@types/react-dom`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Why does `react` connect `index.ts` to `header.tsx`, `dependencies`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `FaqSection()` connect `index.ts` to `portfolio/[slug]/page.tsx`, `industry-data.ts`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `metadata` to the rest of the system?**
  _191 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06382978723404255 - nodes in this community are weakly interconnected._
- **Should `chat-widget.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `header.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06767676767676768 - nodes in this community are weakly interconnected._