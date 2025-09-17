# AI Agent Instructions for ifBash Website

## Project Overview
This is a Next.js 15+ TypeScript website built with modern React patterns and Tailwind CSS. The site serves as a corporate website for ifBash, showcasing ServiceNow consulting and implementation services.

## Key Architecture Patterns

### 1. Next.js App Router Structure
- Uses Next.js 15+ App Router pattern with TypeScript
- Pages and routes are defined in the `app/` directory
- Each route has its own directory containing a `page.tsx` file
- Shared layouts are defined in `layout.tsx` files

### 2. Component Architecture
- UI components are centralized in `components/ui/`
- Built on Radix UI primitives with Tailwind styling
- Component patterns follow shadcn/ui conventions
- Reusable layouts and patterns in root `components/` directory

### 3. Styling Approach
- Tailwind CSS for styling with `tailwind-merge` for class merging
- Custom theme configuration in `tailwind.config.ts`
- Global styles defined in `app/globals.css`
- Uses class-variance-authority for component variants

## Development Workflow

### Common Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

### Component Guidelines
1. New UI components should be added to `components/ui/`
2. Follow existing component patterns using Radix UI primitives
3. Utilize the shadcn/ui style system and Tailwind classes
4. Maintain TypeScript type safety throughout

### Route Guidelines
1. Create new routes by adding directories in `app/`
2. Each route needs a `page.tsx` file
3. Share layouts using `layout.tsx` files
4. Place route-specific components in the route directory

## Integration Points
- Form handling: Uses `react-hook-form` with Zod validation
- UI Components: Built on Radix UI primitives
- Animations: Powered by Framer Motion
- Charts/Data Viz: Uses Recharts library
- Theme System: Managed by `next-themes`

## Code Conventions
1. Use TypeScript for type safety
2. Implement responsive designs using Tailwind breakpoints
3. Follow Next.js App Router conventions for data fetching and routing
4. Use hooks from `/hooks` directory for shared functionality

## Key Files to Reference
- `app/layout.tsx`: Root layout and metadata
- `components/ui/button.tsx`: Example UI component pattern
- `lib/utils.ts`: Shared utility functions
- `components.json`: shadcn/ui configuration