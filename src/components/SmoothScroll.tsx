"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.6,
      smoothWheel: true,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // --- Snap on wheel end ---
    let snapTimeout: ReturnType<typeof setTimeout>;
    let isSnapping = false;

    const sections = () =>
      Array.from(document.querySelectorAll("section")) as HTMLElement[];

    const snap = () => {
      if (isSnapping) return;

      const scrollY = lenis.scroll;
      const vh = window.innerHeight;

      let best: HTMLElement | null = null;
      let bestDist = Infinity;

      sections().forEach((sec) => {
        const dist = Math.abs(sec.offsetTop - scrollY);
        if (dist < bestDist) { bestDist = dist; best = sec; }
      });

      if (best && bestDist < vh * 0.65) {
        isSnapping = true;
        lenis.scrollTo((best as HTMLElement).offsetTop, {
          duration: 0.55,
          easing: (t: number) => 1 - (1 - t) * (1 - t), // ease-out-quad: fast & crisp
        });
        setTimeout(() => { isSnapping = false; }, 600);
      }
    };

    const onWheel = () => {
      if (isSnapping) return;
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snap, 180); // fire 180ms after wheel stops
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      clearTimeout(snapTimeout);
      window.removeEventListener("wheel", onWheel);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
