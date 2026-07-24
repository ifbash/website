import * as React from 'react';
import { cn } from '@/lib/utils';

type Level = 'h1' | 'h2' | 'h3';
type Size = 'xl' | 'lg' | 'md' | 'sm';

/**
 * Fluid display sizes — one scale for the whole site.
 * Tuned for Libre Baskerville, which sets ~18% wider than the condensed face
 * used previously; the whole scale came down accordingly so headlines keep
 * their intended line breaks instead of orphaning a word.
 */
const SIZES: Record<Size, string> = {
  xl: 'clamp(2.15rem, 4.9vw, 3.6rem)',
  lg: 'clamp(1.85rem, 4.1vw, 2.95rem)',
  md: 'clamp(1.7rem, 3.7vw, 2.6rem)',
  sm: 'clamp(1.4rem, 2.5vw, 1.85rem)',
};

/**
 * Serif display heading. Body copy stays on Geist — this is only for
 * headlines, where the serif is the brand differentiator.
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
      className={cn('font-display leading-[1.08]', onInk ? 'text-onink' : 'text-ink', className)}
      style={{ fontSize: SIZES[size] }}
    >
      {children}
    </Tag>
  );
}

/** Accented clause inside a display heading. */
export function Accented({
  onInk = false,
  children,
}: {
  onInk?: boolean;
  children: React.ReactNode;
}) {
  return <em className={onInk ? 'text-navy-soft' : 'text-navy'}>{children}</em>;
}
