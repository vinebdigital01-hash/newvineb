"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PARALLAX_IMAGES = [
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-1.webp", alt: "AI Face Scan", speed: 0.8, top: "10%", left: "5%", w: 180 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-2.webp", alt: "Laptop", speed: 1.2, top: "60%", left: "10%", w: 220 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/12/brand-identity-hero.webp", alt: "Brand", speed: 0.9, top: "20%", left: "25%", w: 200 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-4.webp", alt: "Chart", speed: 1.5, top: "75%", left: "30%", w: 190 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-6.webp", alt: "Screen", speed: 0.7, top: "15%", right: "25%", w: 210 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-7.webp", alt: "Aura", speed: 1.3, top: "65%", right: "30%", w: 170 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-8.webp", alt: "Card", speed: 1.1, top: "5%", right: "5%", w: 160 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-9.webp", alt: "Control", speed: 0.85, top: "80%", right: "10%", w: 240 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-10.webp", alt: "Phone", speed: 1.4, top: "35%", right: "15%", w: 150 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-5.webp", alt: "Phone AI", speed: 0.95, top: "45%", left: "15%", w: 170 },
  { src: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-11.webp", alt: "Phone UI", speed: 1.25, top: "50%", right: "20%", w: 180 },
];

export default function HeroParallax() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal text
    gsap.fromTo('.hero-text-reveal', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out" }
    );

    // Fade in description and buttons
    gsap.fromTo('.hero-fade',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.8, ease: "power2.out" }
    );

    // Parallax images
    gsap.utils.toArray('.parallax-image').forEach((img: any) => {
      const speed = parseFloat(img.getAttribute('data-speed') || "1");
      
      // Float in animation
      gsap.fromTo(img, 
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: Math.random() * 0.5 + 0.5 }
      );

      // Scroll parallax
      gsap.to(img, {
        y: -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100dvh] flex items-center justify-center pt-[120px] pb-[60px] overflow-hidden bg-[#070707]">
      
      {/* Background Parallax Images */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {PARALLAX_IMAGES.map((img, i) => (
          <div 
            key={i} 
            className="parallax-image absolute"
            data-speed={img.speed}
            style={{ top: img.top, left: img.left, right: img.right }}
          >
            <div className="relative rounded-[24px] overflow-hidden" style={{ width: img.w, height: img.w * 1.3 }}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="text-[40px] md:text-[72px] lg:text-[84px] leading-[1.1] font-bold tracking-tight mb-8">
          <div className="overflow-hidden">
            <h1 className="hero-text-reveal text-white">
              <i className="text-[var(--brand-accent)] font-serif italic pr-2">UI UX</i> 
              Design &amp;
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-text-reveal text-white">
              Web Development
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-text-reveal text-[var(--brand-accent)]">
              Agency
            </h1>
          </div>
        </div>

        <p className="hero-fade text-[#B5B5B5] text-[18px] md:text-[20px] max-w-[740px] leading-[1.6] mb-12">
          We design high-performing websites, mobile apps, and SaaS platforms that delight users. And we build websites that turn those experiences into results. Enhance your brand, drive sales, and grow your revenue with us.
        </p>

        <div className="hero-fade flex flex-col sm:flex-row items-center gap-4">
          <a href="#" className="bg-[var(--brand-accent)] text-[#070707] font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105">
            See Our Portfolio
          </a>
          <div className="flex items-center -space-x-4">
            {[1,2,3].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-[#070707] overflow-hidden relative">
                <Image src={`https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/03/Container-9.webp`} alt="work" fill className="object-cover" unoptimized />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-[#070707] bg-[#1a1a1a] flex items-center justify-center text-xs">
              +50
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
