import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { MetadataRoute } from "next";
import { portfolioSlugs } from "@/lib/portfolio-data";
import { industrySlugs } from "@/lib/industry-data";
import { getAllInsights } from "@/lib/insights";
import { ROUTE_PAIRS, AR_REVIEWED } from "@/lib/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://ifbash.com";

type Entry = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
  /** Page file for dynamic routes, whose URL doesn't map to a directory. */
  template?: string;
};

function git(args: string[]): string | undefined {
  try {
    return execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return undefined; // git not on PATH, or not a repository.
  }
}

/**
 * Can per-file history be trusted in this checkout?
 *
 * In a shallow clone the graft commit looks like it added every file, so
 * `git log -1 -- <path>` returns the same date for all of them. That is exactly
 * the "every page changed today" lie this module exists to remove, so when the
 * clone is shallow we decline to answer at all and emit no lastmod. CI passes
 * fetch-depth: 0 to get real dates; a shallow Vercel clone degrades to omitting
 * the field, which is honest — Google treats a missing lastmod as "unknown" and
 * falls back to its own crawl signals, whereas a wrong one teaches it to
 * distrust the field sitewide.
 */
const HISTORY_IS_TRUSTWORTHY = git(["rev-parse", "--is-shallow-repository"]) === "false";

/**
 * Last commit date for a path, in epoch ms, or undefined if unknown.
 *
 * Memoised because URLs share source files — all twelve /services/* pages read
 * lib/service-data.ts — so this shells out once per file instead of once per URL.
 */
const gitDates = new Map<string, number | undefined>();

function gitTimestamp(relPath: string): number | undefined {
  if (!HISTORY_IS_TRUSTWORTHY) return undefined;
  if (gitDates.has(relPath)) return gitDates.get(relPath);

  const out = git(["log", "-1", "--format=%cI", "--", relPath]);
  const parsed = out ? Date.parse(out) : NaN;
  const stamp = Number.isNaN(parsed) ? undefined : parsed;

  gitDates.set(relPath, stamp);
  return stamp;
}

/**
 * The page files a URL renders. Dynamic routes pass `template` because their
 * URL doesn't map to a directory — /industries/energy-utilities is rendered by
 * app/industries/[slug]/page.tsx.
 */
function pageFilesFor(urlPath: string, template?: string): string[] {
  if (template) return [template];
  const dir = urlPath === "/" ? "app" : `app${urlPath}`;
  // `git log` on a path that has never existed prints nothing rather than
  // failing, so naming a layout that isn't there costs one no-op call and saves
  // an fs.existsSync check.
  return [`${dir}/page.tsx`, `${dir}/layout.tsx`];
}

/**
 * Data modules a page file imports directly, e.g. lib/service-data.ts for the
 * six service pages that are thin wrappers over it.
 *
 * Read from the actual import statements rather than inferred from the URL. An
 * earlier version of this matched /services/* with a regex and attributed
 * lib/service-data.ts to all twelve service pages — but only six import it, so
 * editing one service's copy would have falsely bumped six unrelated URLs. The
 * import list can't drift from the truth the way a guess can.
 *
 * One level deep, from the page file only. Following imports transitively would
 * reach the shared UI components every page uses and re-couple all forty dates,
 * which is the problem this module exists to solve.
 */
const LIB_IMPORT = /from\s+['"]@\/lib\/([a-z0-9/-]+)['"]/g;

function libDepsOf(pageFile: string): string[] {
  let src: string;
  try {
    src = readFileSync(pageFile, "utf8");
  } catch {
    return []; // Path doesn't exist — e.g. a layout.tsx we probed for.
  }

  const deps = new Set<string>();
  for (const [, mod] of src.matchAll(LIB_IMPORT)) {
    // Probe both extensions; the wrong one just returns no git history.
    deps.add(`lib/${mod}.ts`);
    deps.add(`lib/${mod}.tsx`);
  }
  return [...deps];
}

/**
 * Every file whose content a URL depends on.
 *
 * Deliberately NOT app/layout.tsx: a nav or footer tweak changes every page's
 * markup but none of their content, and lastmod is supposed to mark a
 * significant content change. Telling Google all forty URLs changed because the
 * footer moved is the exact behaviour this whole function exists to stop.
 */
function sourcesFor(entry: Entry): string[] {
  const pages = pageFilesFor(entry.url, entry.template);
  return [...pages, ...pages.flatMap(libDepsOf)];
}

/**
 * Frontmatter date if the entry carries one, else the newest git date of the
 * files it renders, else nothing. Never build time — see HISTORY_IS_TRUSTWORTHY.
 */
function resolveLastModified(entry: Entry): Date | undefined {
  if (entry.lastModified) return entry.lastModified;

  const stamps = sourcesFor(entry)
    .map(gitTimestamp)
    .filter((s): s is number => s !== undefined);

  return stamps.length ? new Date(Math.max(...stamps)) : undefined;
}

function languagesFor(urlPath: string) {
  if (!AR_REVIEWED) return undefined;
  const pair = ROUTE_PAIRS.find((p) => p.en === urlPath || p.ar === urlPath);
  if (!pair) return undefined;
  return {
    en: `${BASE_URL}${pair.en}`,
    ar: `${BASE_URL}${pair.ar}`,
    "x-default": `${BASE_URL}${pair.en}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const core: Entry[] = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/get-started", priority: 0.9, changeFrequency: "monthly" },
    { url: "/contactus", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { url: "/work", priority: 0.9, changeFrequency: "monthly" },
    { url: "/engage", priority: 0.8, changeFrequency: "monthly" },
    { url: "/agent", priority: 0.9, changeFrequency: "monthly" },
    { url: "/trust", priority: 0.8, changeFrequency: "monthly" },
  ];

  const services: Entry[] = [
    { url: "/services/servicenow-implementation", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/ai-automation", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/crm-customer-experience", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/managed-services-support", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/custom-apps", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-transformation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ai-agents", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/voice-agents", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/claude-ai-engineering", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/website-development", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/web-mobile-development", priority: 0.8, changeFrequency: "monthly" },
  ];

  const company: Entry[] = [
    { url: "/company/about-us", priority: 0.7, changeFrequency: "monthly" },
    { url: "/company/careers-servicenow-jobs", priority: 0.6, changeFrequency: "monthly" },
    { url: "/company/news-events-servicenow", priority: 0.6, changeFrequency: "monthly" },
    { url: "/learning-center-servicenow", priority: 0.7, changeFrequency: "weekly" },
  ];

  const legal: Entry[] = [
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Single-template routes: every slug renders the same file, which imports the
  // data module the copy actually lives in.
  const industries: Entry[] = industrySlugs.map((s) => ({
    url: `/industries/${s}`,
    priority: 0.7,
    changeFrequency: "monthly",
    template: "app/industries/[slug]/page.tsx",
  }));

  const portfolio: Entry[] = portfolioSlugs.map((s) => ({
    url: `/portfolio/${s}`,
    priority: 0.6,
    changeFrequency: "monthly",
    template: "app/portfolio/[slug]/page.tsx",
  }));

  const posts = getAllInsights();
  const postDates = posts.map((p) => Date.parse(`${p.updated || p.date}T00:00:00Z`));
  const insights: Entry[] = [
    // The index renders the post list, so publishing is what changes it — not
    // the last edit to app/insights/page.tsx.
    ...(posts.length
      ? [
          {
            url: "/insights",
            priority: 0.8,
            changeFrequency: "weekly" as const,
            lastModified: new Date(Math.max(...postDates)),
          },
        ]
      : []),
    ...posts.map((p) => ({
      url: `/insights/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(`${p.updated || p.date}T00:00:00Z`),
    })),
  ];

  const arabic: Entry[] = AR_REVIEWED
    ? ROUTE_PAIRS.map((p) => ({
        url: p.ar,
        priority: p.ar === "/ar" ? 0.9 : 0.7,
        changeFrequency: "monthly" as const,
      }))
    : [];

  return [
    ...core,
    ...services,
    ...insights,
    ...industries,
    ...portfolio,
    ...company,
    ...legal,
    ...arabic,
  ].map((entry) => {
    const languages = languagesFor(entry.url);
    const lastModified = resolveLastModified(entry);
    return {
      url: `${BASE_URL}${entry.url}`,
      // Omitted rather than guessed when history is unavailable.
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}
