"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MARQUEE_TEXT = [
  "UI UX Design",
  "App Development",
  "Brand Identity",
  "Web Development",
  "SEO",
  "SaaS Platforms",
];

export default function Marquee() {
  const container = useRef(null);

  useGSAP(() => {
    // Infinite horizontal scroll
    gsap.to('.marquee-track', {
      xPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full py-[80px] bg-[var(--brand-dark)] overflow-hidden border-t border-b border-[#333]">
      <div className="marquee-track flex whitespace-nowrap w-[200%]">
        {/* Render twice for seamless looping */}
        {[1, 2].map((_, index) => (
          <div key={index} className="flex items-center justify-around w-1/2">
            {MARQUEE_TEXT.map((text, i) => (
              <React.Fragment key={i}>
                <span className="text-[32px] md:text-[48px] font-bold text-white uppercase tracking-wider px-8">
                  {text}
                </span>
                <span className="w-3 h-3 bg-[var(--brand-accent)] rounded-full mx-4"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
