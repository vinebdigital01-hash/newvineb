'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const brands = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Arc', 'Ramp'];

export default function TrustStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'none',
      });
    }
  }, []);

  return (
    <section className="pt-24 pb-12 overflow-hidden bg-white">
      <div className="container mx-auto px-[16px] 2xl:px-0 mb-10 text-center">
        <p className="text-sm text-[#4D585F] uppercase tracking-widest">
          Trusted by founders, investors, and finance-forward teams.
        </p>
      </div>

      <div 
        className="w-full"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <div 
          ref={trackRef} 
          className="flex w-max will-change-transform"
        >
          {/* First set */}
          <div className="flex items-center">
            {brands.map((brand, i) => (
              <div key={`brand-1-${i}`} className="mx-8 shrink-0">
                <span className="font-bold text-gray-300 text-[32px] tracking-wider">{brand}</span>
              </div>
            ))}
          </div>
          {/* Second set for seamless looping */}
          <div className="flex items-center">
            {brands.map((brand, i) => (
              <div key={`brand-2-${i}`} className="mx-8 shrink-0">
                <span className="font-bold text-gray-300 text-[32px] tracking-wider">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
