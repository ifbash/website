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
        // Cool tinted base — the page carries a hint of colour before any
        // accent is used. Cards stay pure white so they lift off it.
        paper: '#EAF4F8',
        surface: '#FFFFFF',
        wash: '#D9EAF2',
        ink: {
          DEFAULT: '#0B1417',
          body: '#22333A',
          soft: '#3D5259',
        },
        // Cool greys. `faint` is decorative only — below AA for copy.
        slate: {
          DEFAULT: '#52696F',
          light: '#5C7278',
          faint: '#7A9098',
        },
        // sea = the ServiceNow platform. sky = the AI layer on top.
        // `bright` on either is ~9:1 on ink and ~1.9:1 on paper: it is the
        // shine — glows, fills, dark bands — and NEVER text on a light
        // surface. See the brightness rule in lib/design.ts.
        sea: {
          DEFAULT: '#00707C',
          deep: '#005059',
          mid: '#00939F',
          bright: '#1FD3E3',
          soft: '#79D8E2',
          tint: '#C8E9EE',
          strong: '#A6DCE5',
        },
        sky: {
          DEFAULT: '#0A6FB0',
          deep: '#075287',
          mid: '#1090D8',
          bright: '#3FC6FF',
          soft: '#86CDF2',
          tint: '#CCE6F8',
          strong: '#AFD9F5',
        },
        hairline: {
          DEFAULT: '#CBE1E9',
          soft: '#DCEBF1',
        },
        onink: {
          DEFAULT: '#E8F4F6',
          muted: '#9FB6BC',
          faint: '#7E969D',
          line: '#1E2C31',
          fill: '#15242A',
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
