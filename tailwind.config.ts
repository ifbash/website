import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Display serif lives in globals.css as `.font-display` (it also sets
      // tracking). Body + mono are bound here to the next/font variables.
      fontFamily: {
        // One superfamily — see the note in app/layout.tsx. Display is the
        // same face at a heavier weight (.font-display in globals.css), not a
        // separate family.
        sans: ['var(--font-plex-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Arabic. The Latin faces carry no Arabic glyphs, so the /ar subtree
        // uses IBM Plex Sans Arabic — the same superfamily.
        arabic: ['var(--font-arabic)', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      colors: {
        // ── ifBash design tokens (mirrors lib/design.ts) ──────────────
        // Namespaced away from the shadcn keys below, which are bound to
        // CSS variables and used by components/ui/*.
        // Warm bone-tinted base — the page carries a hint of colour before
        // any accent is used. Cards stay pure white so they lift off it.
        paper: '#F8F5F1',
        surface: '#FFFFFF',
        wash: '#F1E9E1',
        ink: {
          DEFAULT: '#181312',
          body: '#3A2A26',
          soft: '#5A463F',
        },
        // Warm greys. `faint` is decorative only — below AA for copy.
        slate: {
          DEFAULT: '#6E5B52',
          light: '#7A675D',
          faint: '#9C8A80',
        },
        // sea = the ServiceNow platform (brick). sky = the AI layer (azure).
        // `bright` on either is ~6.5-7.5:1 on ink and ~2.5-2.7:1 on paper: it is the
        // shine — glows, fills, dark bands — and NEVER text on a light
        // surface. See the brightness rule in lib/design.ts.
        sea: {
          DEFAULT: '#B23A2B',
          deep: '#7C2418',
          mid: '#C8482F',
          bright: '#F0836F',
          soft: '#F2A38F',
          tint: '#FBE9E2',
          strong: '#F6CDBF',
        },
        sky: {
          DEFAULT: '#2563EB',
          deep: '#1E3A8A',
          mid: '#3B82F6',
          bright: '#60A5FA',
          soft: '#93C5FD',
          tint: '#DBEAFE',
          strong: '#BFDBFE',
        },
        hairline: {
          DEFAULT: '#E5DCD2',
          soft: '#EDE5DA',
        },
        // Highlighter amber — ONLY for hand-drawn strokes (CircleMark,
        // Scribble, margin marks). Never body text, never fills.
        marker: '#D97706',
        onink: {
          DEFAULT: '#F7EEEA',
          muted: '#C0A79C',
          faint: '#99816F',
          line: '#33251F',
          fill: '#241A15',
        },

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
