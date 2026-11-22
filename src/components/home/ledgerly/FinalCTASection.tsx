'use client';

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blursRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blurs = gsap.utils.toArray('.aurora-blur');
    
    blurs.forEach((blur, i) => {
      gsap.to(blur as Element, {
        y: i % 2 === 0 ? '-30px' : '30px',
        x: i % 2 === 0 ? '30px' : '-30px',
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: true, // Hardware acceleration
      });
    });

    gsap.from('.cta-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    gsap.from('.cta-dashboard-card', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      force3D: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="bg-white/70 backdrop-blur-lg relative overflow-hidden py-40 flex flex-col items-center justify-center min-h-screen"
    >
      {/* Floating Aurora Blurs */}
      <div ref={blursRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blur absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-200/50 rounded-full blur-3xl mix-blend-multiply" />
        <div className="aurora-blur absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-200/50 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-[16px] 2xl:px-0 relative z-10 mb-20">
        <div className="cta-content flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-12">
          
          <h2 className="text-[64px] lg:text-[80px] text-[#1D1D1D] tracking-tight leading-[1.1] font-semibold">
            Ready to dominate your market?
          </h2>

          <button className="pl-6 pr-2 py-2 rounded-full bg-[#3B82F6] text-white flex items-center gap-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all group">
            <span className="text-lg font-medium">Book a Strategy Call</span>
            <div className="bg-white rounded-full p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowRight className="w-5 h-5 text-[#3B82F6]" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating mini dashboard card (bottom grounded) */}
      <div className="cta-dashboard-card absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-white/80 backdrop-blur-xl border border-white/40 rounded-t-[32px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-blue-500" />
          </div>
          <div>
            <div className="h-4 w-32 bg-gray-200 rounded-full mb-2" />
            <div className="h-3 w-24 bg-gray-100 rounded-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-2 w-full bg-gray-100 rounded-full" />
          <div className="h-2 w-5/6 bg-gray-100 rounded-full" />
          <div className="h-2 w-4/6 bg-gray-100 rounded-full" />
        </div>
      </div>
    </section>
  );
}
