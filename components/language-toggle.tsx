'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { counterpart, localeOf } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

/**
 * Language flip. Sends you to the same page in the other language when a
 * translation exists, and to that language's home page when it doesn't —
 * with the link title saying so, rather than pretending and 404ing.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname() || '/';
  const locale = localeOf(pathname);
  const { href, exact } = counterpart(pathname);

  const goingTo = locale === 'en' ? 'ar' : 'en';
  const label = goingTo === 'ar' ? 'العربية' : 'English';

  return (
    <Link
      href={href}
      hrefLang={goingTo}
      lang={goingTo}
      title={
        exact
          ? label
          : goingTo === 'ar'
            ? 'هذه الصفحة غير متوفرة بالعربية بعد — الانتقال إلى الصفحة الرئيسية'
            : 'This page is not available in English — going to the home page'
      }
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface',
        'px-3 h-8 text-[13px] font-medium text-ink-soft',
        'hover:border-navy-strong hover:text-navy hover:bg-navy-tint transition-colors',
        className,
      )}
    >
      <Languages className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span className={goingTo === 'ar' ? 'font-sans' : ''}>{label}</span>
    </Link>
  );
}
