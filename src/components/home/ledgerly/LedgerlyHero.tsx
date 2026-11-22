'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sparkles, Star, Shield, Zap } from 'lucide-react';
import { MacBookMockup } from './dashboard-showcase/MacBookMockup';
import { ClientCommandCenter } from './dashboard-showcase/ClientCommandCenter';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LedgerlyHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from('.hero-element', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-8 pb-8 overflow-hidden font-sans min-h-[600px]">
      <div className="absolute inset-0 z-0 bg-black/10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="hero-element text-[56px] md:text-[72px] lg:text-[88px] font-bold text-[#1D1D1D] tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            We scale brands with <br />
            <span className="inline-flex items-center align-middle whitespace-nowrap">
              <span className="mr-3">intelligent</span>
              {/* 3D-like AI Badge */}
              <span className="relative inline-flex items-center justify-center bg-gradient-to-b from-[#334155] to-[#0F172A] text-white rounded-2xl px-5 py-3 text-3xl md:text-5xl mt-[-10px] shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] border border-[#475569]">
                <Sparkles className="w-8 h-8 mr-2 text-[#93C5FD]" /> ROI
              </span>
            </span>
          </h1>
          
          <p className="hero-element text-xl text-[#1D1D1D] font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Dominate your market with high-converting web architecture, elite e-commerce solutions, and data-driven omnichannel growth marketing.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-[#3B82F6] text-white rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:bg-[#2563EB] hover:-translate-y-1 transition-all w-full sm:w-auto">
              Book a Strategy Call
            </button>
            <button className="bg-white text-[#1D1D1D] rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all w-full sm:w-auto">
              View Our Work
            </button>
          </div>

          <div className="hero-element flex flex-wrap items-center justify-center gap-6 md:gap-12 bg-white/70 backdrop-blur-md py-3 px-8 rounded-full border border-white/40 shadow-sm inline-flex">
            <div className="flex items-center gap-2 text-sm text-[#1D1D1D] font-semibold">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              4.9/5 customer rating
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="flex items-center gap-2 text-sm text-[#1D1D1D] font-semibold">
              <Shield className="w-5 h-5 text-[#10B981]" />
              Bank-level protection
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="flex items-center gap-2 text-sm text-[#1D1D1D] font-semibold">
              <Zap className="w-5 h-5 text-[#EF4444]" />
              Live financial insights
            </div>
          </div>
        </div>

        {/* MacBook Dashboard Mockup */}
        <div className="hero-element relative w-full mx-auto z-30">
          <MacBookMockup>
            <ClientCommandCenter />
          </MacBookMockup>
        </div>
      </div>
    </section>
  );
}
