"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SERVICES = [
  {
    title: "UI/UX Design",
    description: "User-centric design that converts.",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-11.webp"
  },
  {
    title: "Web Development",
    description: "High performance Next.js applications.",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-2.webp"
  },
  {
    title: "Branding",
    description: "Identity systems that stand out.",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/12/brand-identity-hero.webp"
  },
  {
    title: "SaaS Platforms",
    description: "Scalable B2B and B2C software.",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/hero-4.webp"
  }
];

export default function Services() {
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useGSAP(() => {
    const xSet = gsap.quickSetter(imageRef.current, "x", "px");
    const ySet = gsap.quickSetter(imageRef.current, "y", "px");

    const moveImage = (e: MouseEvent) => {
      // Get container bounds to make coordinates relative to the container
      if (!container.current) return;
      const rect = container.current.getBoundingClientRect();
      
      // We want to center the image on the cursor
      // Image is w-64 (256px) and h-80 (320px) roughly
      xSet(e.clientX - rect.left - 128);
      ySet(e.clientY - rect.top - 160);
    };

    if (container.current) {
      container.current.addEventListener("mousemove", moveImage);
    }

    return () => {
      if (container.current) {
        container.current.removeEventListener("mousemove", moveImage);
      }
    };
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full py-[120px] bg-[#070707] text-white">
      <div className="container mx-auto px-4 lg:px-0">
        
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-8">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center bg-[#1a1a1a] rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-accent)] mr-2"></div>
              <span className="text-sm font-medium">Services</span>
            </div>
            <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight">
              We help you design<br/>
              and build better digital<br/>
              products. All in ONE place!
            </h2>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-end">
            <p className="text-[#B5B5B5] text-[18px] leading-[1.6] mb-8">
              You need a partner who gets your business and covers everything. From branding to UI/UX design and web development, you can rely on us for everything.
            </p>
            <a href="#" className="border border-white hover:border-[var(--brand-accent)] text-white hover:text-[var(--brand-accent)] px-8 py-4 rounded-full max-w-fit transition-colors">
              See All Services
            </a>
          </div>
        </div>

        {/* Services List */}
        <div className="w-full relative border-t border-[#333]">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-[#333] cursor-pointer transition-colors hover:bg-[#111]"
              onMouseEnter={() => setHoveredImage(service.img)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <h3 className="text-[32px] md:text-[48px] font-semibold group-hover:text-[var(--brand-accent)] transition-colors px-4">
                {service.title}
              </h3>
              <p className="text-[#B5B5B5] text-[18px] px-4 mt-2 md:mt-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      <div 
        ref={imageRef}
        className={`pointer-events-none absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300 z-50 ${hoveredImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transformOrigin: "center center" }}
      >
        {hoveredImage && (
          <Image 
            src={hoveredImage} 
            alt="Service preview" 
            fill 
            className="object-cover"
            unoptimized
          />
        )}
      </div>

    </section>
  );
}
