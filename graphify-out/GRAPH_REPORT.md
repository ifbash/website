# Graph Report - website  (2026-07-24)

## Corpus Check
- 153 files · ~96,814 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 829 nodes · 1273 edges · 138 communities (48 shown, 90 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.57)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b0132287`
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
- nav-data.ts
- dependencies
- AI Agent Instructions for ifBash Website
- menubar.tsx
- context-menu.tsx
- dropdown-menu.tsx
- pill-button.tsx
- alert-dialog.tsx
- sheet.tsx
- table.tsx
- package.json
- get-started/page.tsx
- breadcrumb.tsx
- drawer.tsx
- select.tsx
- card.tsx
- toggle-group.tsx
- generate-portfolio-pages.js
- alert.tsx
- input-otp.tsx
- avatar.tsx
- badge.tsx
- tabs.tsx
- fix-layouts.js
- industry-data.ts
- work/layout.tsx
- hero-showcase.tsx
- gen-remaining.js
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
- radio-group.tsx
- sonner.tsx
- .eslintrc.json
- @anthropic-ai/sdk
- autoprefixer
- clsx
- cmdk
- date-fns
- embla-carousel-react
- eslint
- framer-motion
- @hookform/resolvers
- input-otp
- lucide-react
- @netlify/next
- next
- next.config.js
- next.config.ts
- @next/swc-wasm-nodejs
- next-themes
- postcss
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-context-menu
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- @radix-ui/react-label
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- @radix-ui/react-slot
- @radix-ui/react-switch
- @radix-ui/react-tabs
- @radix-ui/react-toast
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @radix-ui/react-tooltip
- @radix-ui/react-visually-hidden
- react-dom
- react-hook-form
- react-resizable-panels
- recharts
- sonner
- tailwind-merge
- tailwindcss
- tailwindcss-animate
- @types/node
- @types/react
- @types/react-dom
- vaul
- zod
- config
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 86 edges
2. `DisplayHeading()` - 26 edges
3. `Section()` - 26 edges
4. `Eyebrow()` - 25 edges
5. `Accented()` - 24 edges
6. `CtaBand()` - 21 edges
7. `PageHero()` - 20 edges
8. `PillLink()` - 20 edges
9. `compilerOptions` - 16 edges
10. `FaqSection()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `IndustriesIndexPage()` --indirect_call--> `slug()`  [INFERRED]
  app/industries/page.tsx → components/nav-data.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `BreadcrumbSeparator()` --calls--> `cn()`  [EXTRACTED]
  components/ui/breadcrumb.tsx → lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  components/ui/breadcrumb.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (138 total, 90 thin omitted)

### Community 0 - "cn"
Cohesion: 0.16
Nodes (17): Button, ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis() (+9 more)

### Community 1 - "index.ts"
Cohesion: 0.06
Nodes (65): principles, openRoles, perks, teams, whereWeActuallyAre, faqs, models, phases (+57 more)

### Community 2 - "getServiceEntry"
Cohesion: 0.24
Nodes (10): Page(), Page(), Page(), Page(), Page(), Page(), ServicePage(), getServiceEntry() (+2 more)

### Community 3 - "chat-widget.tsx"
Cohesion: 0.13
Nodes (14): CallState, capabilities, ChatWidget(), Mode, QUICK_OPTIONS, ask(), CHIPS, speak() (+6 more)

### Community 4 - "portfolio/[slug]/page.tsx"
Cohesion: 0.23
Nodes (13): IndustriesIndexPage(), PortfolioIndexPage(), generateMetadata(), PortfolioProductPage(), Header(), portfolioCategories, slug(), getPortfolioEntry() (+5 more)

### Community 5 - "header.tsx"
Cohesion: 0.11
Nodes (14): DROP, NavItem, practices, workItems, AccordionContent, AccordionItem, AccordionTrigger, NavigationMenu (+6 more)

### Community 6 - "carousel.tsx"
Cohesion: 0.05
Nodes (36): Footer(), Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext (+28 more)

### Community 7 - "app/layout.tsx"
Cohesion: 0.29
Nodes (5): instrumentSerif, metadata, LenisProvider(), lenis, lenis

### Community 8 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, src, **/*.ts (+19 more)

### Community 10 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 11 - "utils.ts"
Cohesion: 0.08
Nodes (14): Checkbox, HoverCardContent, Input, InputProps, PopoverContent, Progress, ScrollArea, ScrollBar (+6 more)

### Community 12 - "command.tsx"
Cohesion: 0.12
Nodes (15): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 13 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 14 - "nav-data.ts"
Cohesion: 0.19
Nodes (10): metadata, practices, footerLinks, aiAgentsItems, companyItems, industryItems, PortfolioCategory, Practice (+2 more)

### Community 15 - "dependencies"
Cohesion: 0.13
Nodes (15): class-variance-authority, eslint-config-next, geist, dependencies, class-variance-authority, eslint-config-next, geist, @radix-ui/react-accordion (+7 more)

### Community 16 - "AI Agent Instructions for ifBash Website"
Cohesion: 0.14
Nodes (13): 1. Next.js App Router Structure, 2. Component Architecture, 3. Styling Approach, AI Agent Instructions for ifBash Website, Code Conventions, Common Commands, Component Guidelines, Development Workflow (+5 more)

### Community 17 - "menubar.tsx"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 18 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 19 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 20 - "pill-button.tsx"
Cohesion: 0.25
Nodes (8): BaseProps, classesFor(), ON_INK_VARIANTS, PillButton(), Size, SIZES, Variant, VARIANTS

### Community 21 - "alert-dialog.tsx"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 22 - "sheet.tsx"
Cohesion: 0.22
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 23 - "table.tsx"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 24 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 26 - "get-started/page.tsx"
Cohesion: 0.25
Nodes (6): faqJsonLd, faqs, formSchema, FormValues, services, steps

### Community 27 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 28 - "drawer.tsx"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 29 - "select.tsx"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 30 - "card.tsx"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 31 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 32 - "generate-portfolio-pages.js"
Cohesion: 0.29
Nodes (5): allPages, fs, morePages, pages, path

### Community 33 - "alert.tsx"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 34 - "input-otp.tsx"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 35 - "avatar.tsx"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 36 - "badge.tsx"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 37 - "tabs.tsx"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 38 - "fix-layouts.js"
Cohesion: 0.50
Nodes (3): fs, layouts, p

### Community 39 - "industry-data.ts"
Cohesion: 0.22
Nodes (8): generateMetadata(), IndustryPage(), Entry, getIndustryEntry(), IndustryEntry, industryMeta(), industrySlugs, portfolioSlugs

### Community 41 - "hero-showcase.tsx"
Cohesion: 0.19
Nodes (12): AgentChatDemo(), CALL_LINES, HeroShowcase(), INCIDENTS, MobileDemo(), PANELS, rise(), ServiceNowDemo() (+4 more)

## Knowledge Gaps
- **400 isolated node(s):** `extends`, `next/core-web-vitals`, `metadata`, `CallState`, `capabilities` (+395 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **90 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `index.ts`, `portfolio/[slug]/page.tsx`, `header.tsx`, `carousel.tsx`, `use-toast.ts`, `utils.ts`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `pill-button.tsx`, `alert-dialog.tsx`, `sheet.tsx`, `table.tsx`, `breadcrumb.tsx`, `drawer.tsx`, `select.tsx`, `card.tsx`, `toggle-group.tsx`, `alert.tsx`, `input-otp.tsx`, `avatar.tsx`, `badge.tsx`, `tabs.tsx`, `radio-group.tsx`?**
  _High betweenness centrality (0.256) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `vaul`, `zod`, `carousel.tsx`, `app/layout.tsx`, `package.json`, `@anthropic-ai/sdk`, `autoprefixer`, `clsx`, `cmdk`, `date-fns`, `embla-carousel-react`, `eslint`, `framer-motion`, `@hookform/resolvers`, `input-otp`, `lucide-react`, `@netlify/next`, `next`, `@next/swc-wasm-nodejs`, `next-themes`, `postcss`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-slot`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toast`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`, `@radix-ui/react-visually-hidden`, `react-dom`, `react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `tailwind-merge`, `tailwindcss`, `tailwindcss-animate`, `@types/node`, `@types/react`, `@types/react-dom`?**
  _High betweenness centrality (0.224) - this node is a cross-community bridge._
- **Why does `react` connect `carousel.tsx` to `index.ts`, `use-toast.ts`, `dependencies`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `metadata` to the rest of the system?**
  _400 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05711318795430945 - nodes in this community are weakly interconnected._
- **Should `chat-widget.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `header.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11462450592885376 - nodes in this community are weakly interconnected._