/**
 * Locale configuration.
 *
 * English stays at the root (`/services`, `/work`) because those URLs are
 * already indexed — moving them behind `/en` would throw away every existing
 * ranking signal. Arabic lives under `/ar`. The pairing between the two is
 * declared once in ROUTE_PAIRS and drives both the header toggle and the
 * hreflang tags, so they can't drift apart.
 */

export const LOCALES = ['en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, { label: string; native: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en: { label: 'English', native: 'English', dir: 'ltr', htmlLang: 'en' },
  ar: { label: 'Arabic', native: 'العربية', dir: 'rtl', htmlLang: 'ar' },
};

export const SITE = 'https://ifbash.com';

/**
 * Has a native Arabic speaker signed off on lib/i18n/ar.ts?
 *
 * Everything in that file is MACHINE TRANSLATED. Google treats unreviewed
 * machine translation as spam, and Gulf enterprise buyers — the exact audience
 * /ar exists to reach — notice immediately. Shipping it indexed does more harm
 * than shipping nothing, so until this is true the Arabic surface is:
 *   - noindex (app/ar/layout.tsx)
 *   - excluded from the sitemap (app/sitemap.ts)
 *   - not advertised via hreflang (alternatesFor / alternatesForAr below)
 *
 * The pages stay live and linked, so anyone sent the URL still gets Arabic.
 * FLIP THIS TO true THE DAY A NATIVE SPEAKER SIGNS OFF — that one change
 * restores indexing, the sitemap entries, and hreflang together.
 */
export const AR_REVIEWED = false;

/**
 * Every page that exists in both languages, English path first.
 * Adding a translated page means adding one line here — the toggle, the
 * hreflang alternates and the Arabic sitemap entries all read from this.
 */
export const ROUTE_PAIRS: ReadonlyArray<{ en: string; ar: string }> = [
  { en: '/', ar: '/ar' },
  { en: '/services', ar: '/ar/services' },
  { en: '/services/servicenow-implementation', ar: '/ar/services/servicenow-implementation' },
  { en: '/services/ai-agents', ar: '/ar/services/ai-agents' },
  { en: '/services/voice-agents', ar: '/ar/services/voice-agents' },
  { en: '/services/website-development', ar: '/ar/services/website-development' },
  { en: '/services/mobile-app-development', ar: '/ar/services/mobile-app-development' },
  { en: '/work', ar: '/ar/work' },
  { en: '/engage', ar: '/ar/engage' },
  { en: '/company/about-us', ar: '/ar/company/about-us' },
  { en: '/contactus', ar: '/ar/contactus' },
  { en: '/get-started', ar: '/ar/get-started' },
];

/** Locale of a pathname. Anything under /ar is Arabic. */
export function localeOf(pathname: string): Locale {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';
}

/**
 * The counterpart URL for the language toggle.
 * Falls back to the other locale's home page when the current page has no
 * translation — better than a 404, and honest: there is no Arabic version.
 */
export function counterpart(pathname: string): { href: string; exact: boolean } {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const isAr = localeOf(clean) === 'ar';

  const pair = ROUTE_PAIRS.find((p) => (isAr ? p.ar === clean : p.en === clean));
  if (pair) return { href: isAr ? pair.en : pair.ar, exact: true };

  return { href: isAr ? '/' : '/ar', exact: false };
}

/** hreflang alternates for a given English path, if it has an Arabic twin. */
export function alternatesFor(enPath: string) {
  const pair = ROUTE_PAIRS.find((p) => p.en === enPath);
  if (!pair) return undefined;
  // Pointing hreflang at a noindexed page contradicts itself; English just
  // declares itself canonical until the Arabic side is reviewed.
  if (!AR_REVIEWED) return { canonical: enPath };
  return {
    canonical: enPath,
    languages: {
      en: `${SITE}${pair.en}`,
      ar: `${SITE}${pair.ar}`,
      'x-default': `${SITE}${pair.en}`,
    },
  };
}

/** hreflang alternates for a given Arabic path. */
export function alternatesForAr(arPath: string) {
  const pair = ROUTE_PAIRS.find((p) => p.ar === arPath);
  if (!pair) return { canonical: arPath };
  if (!AR_REVIEWED) return { canonical: arPath };
  return {
    canonical: arPath,
    languages: {
      en: `${SITE}${pair.en}`,
      ar: `${SITE}${pair.ar}`,
      'x-default': `${SITE}${pair.en}`,
    },
  };
}
