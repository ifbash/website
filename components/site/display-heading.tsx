import * as React from 'react';
import { cn } from '@/lib/utils';

type Level = 'h1' | 'h2' | 'h3';
type Size = 'xl' | 'lg' | 'md' | 'sm';

/**
 * Fluid display sizes — one scale for the whole site.
 *
 * Each step carries its own tracking: display type needs progressively tighter
 * letter-spacing as it grows, and the single -0.015em that used to sit in
 * globals.css was too loose at 3.6rem and too tight at 1.4rem.
 *
 * The scale went back UP when the display face changed. It had been shrunk to
 * accommodate Libre Baskerville, which set ~18% wider than intended; a grotesk
 * sets narrower, and `text-wrap: balance` (in .font-display) handles the
 * orphaned-word problem that the shrinking was really working around.
 */
const SIZES: Record<Size, { fontSize: string; letterSpacing: string }> = {
  xl: { fontSize: 'clamp(2.5rem, 5.6vw, 4.25rem)', letterSpacing: '-0.030em' },
  lg: { fontSize: 'clamp(2.1rem, 4.6vw, 3.4rem)', letterSpacing: '-0.025em' },
  md: { fontSize: 'clamp(1.8rem, 3.9vw, 2.75rem)', letterSpacing: '-0.020em' },
  sm: { fontSize: 'clamp(1.45rem, 2.6vw, 1.95rem)', letterSpacing: '-0.015em' },
};

/**
 * Display heading — the body face at 700. One superfamily across the site, so
 * hierarchy is carried by weight and size rather than by a second family.
 */
export function DisplayHeading({
  as = 'h2',
  size = 'md',
  onInk = false,
  className,
  children,
}: {
  as?: Level;
  size?: Size;
  onInk?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = as;
  return (
    <Tag
      className={cn('font-display leading-[1.06]', onInk ? 'text-onink' : 'text-ink', className)}
      style={SIZES[size]}
    >
      {children}
    </Tag>
  );
}

/**
 * Accented clause inside a display heading.
 *
 * Signals with colour, NOT italics. The italic word-accent is the single most
 * recognisable marker of the default template look this site is moving away
 * from, and an italic grotesk reads weak next to a 700-weight roman. The
 * component API is unchanged, so no call site needed editing.
 *
 * `accent` swaps navy for mulberry on AI-layer pages — see lib/design.ts.
 */
export function Accented({
  onInk = false,
  accent = 'navy',
  children,
}: {
  onInk?: boolean;
  accent?: 'navy' | 'mulberry';
  children: React.ReactNode;
}) {
  const color =
    accent === 'mulberry'
      ? onInk
        ? 'text-sky-soft'
        : 'text-sky'
      : onInk
        ? 'text-sea-soft'
        : 'text-sea';
  return <span className={color}>{children}</span>;
}
