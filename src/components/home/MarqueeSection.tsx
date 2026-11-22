"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeSection() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // The text starts shifted far left (exactly at the end of the text) and moves to the right
    gsap.fromTo(textRef.current, 
      { 
        x: () => {
          if (!textRef.current) return 0;
          // Calculate the exact distance needed to hide the left side and show the right edge
          return -(textRef.current.scrollWidth - window.innerWidth + 40); // 40px for safety padding
        } 
      },
      { 
        x: '0%',     // Move exactly to the left edge
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,           // Pins the section in place
          anticipatePin: 1,    // Smooth pinning for mobile
          start: 'center center', // Pin when the section reaches the center of the screen
          end: '+=3000',       // Extended pinned scroll duration since the text is very big now
          scrub: 1, // Smooth scrub
          refreshPriority: 0,
          invalidateOnRefresh: true, // Recalculate the x distance if the window is resized
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="marquee-section relative w-full bg-transparent py-[60px] lg:py-[100px] overflow-hidden flex items-center mt-[40px] lg:mt-[80px]">
      <div 
        ref={textRef} 
        className="marquee-text whitespace-nowrap flex items-center gap-[32px] md:gap-[56px] lg:gap-[80px] text-white font-bold text-[64px] md:text-[100px] lg:text-[160px] tracking-tighter w-fit will-change-transform"
      >
        {/* Left Side */}
        <span className="text-transparent" style={{ WebkitTextStroke: '2px #9AFD0D' }}>
          MARKETING
        </span>
        
        {/* Visual Element 1: Star/Sparkle Icon */}
        <div className="flex items-center justify-center text-[#9AFD0D]">
          <svg width="0.8em" height="0.8em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <span>DRIVES</span>
        
        {/* Visual Element 2: Pill Shape with Right Arrow */}
        <div className="w-[100px] h-[50px] md:w-[180px] md:h-[80px] lg:w-[240px] lg:h-[110px] rounded-full bg-[#9AFD0D] inline-flex items-center justify-center flex-shrink-0">
            <svg width="0.6em" height="0.6em" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </div>
        
        {/* Center: Stylized Text (GROWTH) */}
        <span className="italic text-[#9AFD0D] font-serif font-medium relative">
          GROWTH
          <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-[#9AFD0D] rounded-full"></div>
        </span>
        
        {/* Visual Element 3: Pill Shape with Left Arrow */}
        <div className="w-[100px] h-[50px] md:w-[180px] md:h-[80px] lg:w-[240px] lg:h-[110px] rounded-full bg-[#9AFD0D] inline-flex items-center justify-center flex-shrink-0">
            <svg width="0.6em" height="0.6em" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
        </div>

        <span>DRIVES</span>
        
        {/* Visual Element 4: Star/Sparkle Icon */}
        <div className="flex items-center justify-center text-[#9AFD0D]">
          <svg width="0.8em" height="0.8em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        
        {/* Right Side */}
        <span className="text-transparent" style={{ WebkitTextStroke: '2px #9AFD0D' }}>
          MARKETING
        </span>
      </div>
    </section>
  );
}
