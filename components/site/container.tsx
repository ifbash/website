import * as React from 'react';
import { cn } from '@/lib/utils';

type Width = 'default' | 'narrow' | 'wide' | 'prose';

const WIDTHS: Record<Width, string> = {
  // Standard page gutter — matches the homepage.
  default: 'w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl',
  // Editorial columns (practice index, long-form sections).
  narrow: 'w-[92%] md:w-[88%] lg:w-[84%] max-w-4xl',
  // Mega grids (product listings, 5-up industry rows).
  wide: 'w-[92%] md:w-[90%] lg:w-[88%] max-w-7xl',
  // Reading measure (legal, learning center).
  prose: 'w-[92%] max-w-2xl',
};

export function Container({
  width = 'default',
  className,
  children,
}: {
  width?: Width;
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(WIDTHS[width], 'mx-auto', className)}>{children}</div>;
}
