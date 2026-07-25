"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Smooth scrolling.
 *
 * ⚠ Lenis caches the document height when it initialises and clamps scrolling
 * to that value. It does NOT watch for the page getting taller. On this site it
 * always initialises too early to measure correctly — it is dynamically
 * imported, so it runs after first paint, and then:
 *
 *   - six IBM Plex weights finish loading and reflow every line of text
 *   - the chat widget mounts
 *   - client components hydrate
 *
 * Each of those makes the page taller than Lenis thinks it is, and the result
 * is that the last screenful — the footer — becomes unreachable. That is a
 * scroll bug that looks like a layout bug, which is what makes it hard to spot.
 *
 * So the resize wiring below is not optional polish; without it the footer is
 * cut off. Three triggers, and all three are load-bearing:
 *   1. ResizeObserver on <body>  — catches any content-driven height change
 *   2. document.fonts.ready      — catches the reflow when webfonts swap in
 *   3. pathname change           — catches client-side navigation to a longer page
 */
export function LenisProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Smooth scroll is motion the user did not ask for, and Lenis overrides the
    // browser's own scrolling. Anyone who has asked for reduced motion gets
    // native scroll instead — we simply never initialise it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      const lenis = new Lenis({
        // Was 1.1s. At that length the page kept gliding for over a second
        // after the wheel stopped, so buttons drifted out from under the
        // cursor mid-click. 0.7 still feels smooth and settles predictably.
        duration: 0.7,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      let raf = requestAnimationFrame(function animate(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      });

      // 1. Any content-driven height change.
      const ro = new ResizeObserver(() => lenis.resize());
      ro.observe(document.body);

      // 2. Webfont swap — the single biggest reflow on this site.
      document.fonts?.ready.then(() => lenis.resize()).catch(() => {});

      // 3. Belt and braces for late images or third-party mounts.
      const onLoad = () => lenis.resize();
      window.addEventListener("load", onLoad);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        window.removeEventListener("load", onLoad);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
    // Re-created per route: a client-side nav to a longer page would otherwise
    // keep the previous page's height and clip the bottom again.
  }, [pathname]);

  return null;
}
