'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "They completely rebuilt our headless Shopify store and launched a Meta ads campaign that drove a 300% increase in ROAS within the first month. Incredible team.",
    name: "Sarah Jenkins",
    role: "Founder, Luxe Beauty"
  },
  {
    quote: "The custom CRM they developed saved our sales team 40 hours a week. It's blazing fast, perfectly tailored to our workflow, and looks stunning.",
    name: "Marcus Cole",
    role: "Operations Director, ScaleUp"
  },
  {
    quote: "Our Google Maps rankings skyrocketed and the new sales funnel they designed doubled our lead volume. Highly recommend their growth services.",
    name: "Elena Rodriguez",
    role: "Owner, Elevate Fitness"
  }
];

export default function LedgerlyTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    // Auto-scrolling infinite marquee
    gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 35, // Adjust speed as needed
      repeat: -1,
      force3D: true
    });
  }, { scope: sectionRef });

  // Duplicate for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="bg-white/70 backdrop-blur-md py-32 overflow-hidden">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] text-[#1D1D1D] font-medium tracking-tight mb-20 text-center">
          Real results.<br />Happy partners.
        </h2>

        {/* Marquee Track Container with fade edges */}
        <div 
          className="relative w-full overflow-hidden flex items-center py-4"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div ref={trackRef} className="flex gap-8 w-max pl-4">
            {duplicatedTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm w-[350px] md:w-[450px] flex-shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="font-serif text-[80px] text-[#3B82F6]/20 leading-none -ml-4 -mt-6 mb-2">
                  "
                </div>
                <p className="text-lg text-[#1D1D1D] leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="w-12 h-[1px] bg-zinc-300 mb-6"></div>
                <div>
                  <div className="font-semibold text-[#1D1D1D]">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
