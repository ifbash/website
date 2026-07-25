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
        paper: '#FAF8F4',
        surface: '#FFFFFF',
        wash: '#F4F1EA',
        ink: {
          DEFAULT: '#141210',
          body: '#2A2721',
          soft: '#4A463C',
        },
        stone: {
          DEFAULT: '#6B6659',
          light: '#757064',
          faint: '#918D81',
        },
        // The AI-layer accent. Navy marks the ServiceNow platform, mulberry
        // marks what we build on top of it — the colour system states the
        // positioning rather than decorating it. See lib/design.ts.
        mulberry: {
          DEFAULT: '#7D2E55',
          deep: '#5E2140',
          soft: '#C98BA8',
          tint: '#F7EAF1',
          strong: '#EFD8E4',
        },
        navy: {
          DEFAULT: '#1B3A5C',
          deep: '#12293F',
          soft: '#7C9AB8',
          tint: '#E9EFF5',
          strong: '#D6E2EE',
        },
        hairline: {
          DEFAULT: '#E7E2D9',
          soft: '#EDE8DE',
        },
        onink: {
          DEFAULT: '#F3F0E9',
          muted: '#A39C8B',
          faint: '#8C8472',
          line: '#2E2921',
          fill: '#221E17',
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
