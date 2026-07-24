import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'accent' | 'outline' | 'quiet';
type Size = 'sm' | 'md' | 'lg';

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-[15px] gap-2',
};

/**
 * Hover is pure CSS. The previous implementation drove background changes
 * with onMouseEnter/onMouseLeave handlers, which fought React's rendering
 * and left the hover state stuck on touch devices.
 */
const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-ink text-paper shadow-[0_8px_24px_rgba(20,18,16,0.18)] hover:bg-navy hover:-translate-y-0.5',
  accent:
    'bg-navy text-paper shadow-[0_8px_24px_rgba(27,58,92,0.22)] hover:bg-navy-deep hover:-translate-y-0.5',
  outline:
    'border border-hairline text-ink hover:border-navy hover:text-navy hover:-translate-y-0.5',
  quiet: 'text-stone hover:text-navy',
};

const ON_INK_VARIANTS: Record<Variant, string> = {
  primary:
    'bg-paper text-ink shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-navy-soft hover:-translate-y-0.5',
  accent:
    'bg-navy text-paper shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:bg-navy-soft hover:text-ink hover:-translate-y-0.5',
  outline:
    'border border-onink-line text-onink hover:border-navy-soft hover:text-navy-soft hover:-translate-y-0.5',
  quiet: 'text-onink-muted hover:text-navy-soft',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  onInk?: boolean;
  className?: string;
  children: React.ReactNode;
};

function classesFor({ variant = 'primary', size = 'lg', onInk, className }: BaseProps) {
  return cn(
    'inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap',
    'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
    SIZES[size],
    variant === 'quiet' ? 'px-0 py-0' : '',
    (onInk ? ON_INK_VARIANTS : VARIANTS)[variant],
    className,
  );
}

export function PillLink({
  href,
  ...props
}: BaseProps & { href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const { variant, size, onInk, className, children, ...rest } = props;
  return (
    <Link href={href} className={classesFor({ variant, size, onInk, className, children })} {...rest}>
      {children}
    </Link>
  );
}

export function PillButton({
  type = 'button',
  ...props
}: BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>) {
  const { variant, size, onInk, className, children, ...rest } = props;
  return (
    <button
      type={type}
      className={cn(classesFor({ variant, size, onInk, className, children }), 'disabled:opacity-60')}
      {...rest}
    >
      {children}
    </button>
  );
}
