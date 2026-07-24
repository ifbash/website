'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { localeOf, LOCALE_META } from '@/lib/i18n/config';

/**
 * Keeps <html lang> and <html dir> in step with the current route.
 *
 * The Arabic layout sets these with a blocking inline script so the first
 * paint is already RTL. That script only runs on a full document load, so on
 * client-side navigation — /ar back to /, say — the attributes would otherwise
 * stay stuck on Arabic. This corrects them on every route change.
 */
export function LocaleDirection() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const meta = LOCALE_META[localeOf(pathname)];
    const el = document.documentElement;
    if (el.lang !== meta.htmlLang) el.lang = meta.htmlLang;
    if (el.dir !== meta.dir) el.dir = meta.dir;
    el.setAttribute('data-locale', localeOf(pathname));
  }, [pathname]);

  return null;
}
