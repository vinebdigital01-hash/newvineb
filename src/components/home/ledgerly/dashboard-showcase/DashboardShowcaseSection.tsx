"use client";

import React, { useRef } from "react";
import { MacBookMockup } from "./MacBookMockup";
import { ClientCommandCenter } from "./ClientCommandCenter";
import { ArrowRight, BarChart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DashboardShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Text entrance
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // MacBook mockup entrance (scale and fade)
    gsap.fromTo(
      mockupRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#F5F5F7] py-24 md:py-32 overflow-hidden font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Text','Inter',sans-serif]"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Header Text */}
        <div ref={textRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 text-sm font-medium text-slate-600 mb-6 shadow-sm">
            <BarChart className="w-4 h-4 text-blue-500" />
            Client Command Center
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Built for growth. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Designed for clients.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Give your clients a crystal-clear view of their marketing performance with our proprietary analytics dashboard. Beautiful, real-time, and built to prove ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#111114] hover:bg-[#1D1D1F] text-white rounded-full text-base font-medium transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              See our results
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-base font-medium transition-all shadow-sm border border-black/5 hover:-translate-y-0.5">
              Book a demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MacBook Mockup */}
        <div ref={mockupRef} className="w-full">
          <MacBookMockup>
            <ClientCommandCenter />
          </MacBookMockup>
        </div>

      </div>
    </section>
  );
}
