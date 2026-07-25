"use client";

import { useEffect } from "react";

export function LenisProvider() {
  useEffect(() => {
    // Smooth scroll is motion the user did not ask for, and Lenis overrides the
    // browser's own scrolling. Anyone who has asked for reduced motion gets
    // native scroll instead — we simply never initialise it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        // Was 1.1s. At that length the page kept gliding for over a second
        // after the wheel stopped, so buttons drifted out from under the
        // cursor mid-click. 0.7 still feels smooth and settles predictably.
        duration: 0.7,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      let raf: number;
      const animate = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);

      cleanup = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });

    return () => cleanup?.();
  }, []);

  return null;
}
