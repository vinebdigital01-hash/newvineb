"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((mod) => mod.Globe3D),
  { ssr: false }
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sampleMarkers = [
  {
    lat: 20.5937,
    lng: 78.9629,
    label: "India",
    count: "50+ Projects",
    services: "Website Development, SEO, Ads"
  },
  {
    lat: 37.0902,
    lng: -95.7129,
    label: "United States",
    count: "15+ Projects",
    services: "Sales Funnel, Custom Software"
  },
  {
    lat: 55.3781,
    lng: -3.4360,
    label: "United Kingdom",
    count: "10+ Projects",
    services: "Google My Business, Local SEO"
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    label: "UAE (Dubai)",
    count: "8 Projects",
    services: "Amazon Seller Management"
  },
  {
    lat: -25.2744,
    lng: 133.7751,
    label: "Australia",
    count: "5 Projects",
    services: "Lead Generation"
  }
];

export default function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // State for hovering
  const [hoveredData, setHoveredData] = React.useState<any>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#020617] text-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Header & Tooltip Area */}
        <div ref={textRef} className="w-full lg:w-1/3 flex flex-col items-start text-left relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs lg:text-sm font-medium text-[#94A3B8] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Global Impact
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            We operate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">worldwide.</span>
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
            Hover over our global hubs to see the scale of projects and services we've delivered across different regions.
          </p>

          {/* Interactive Tooltip Card that updates on hover */}
          <div className="w-full min-h-[140px] rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl p-6 transition-all duration-700 relative overflow-hidden group">
            {/* Cinematic Liquid Glass edge highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-50 pointer-events-none rounded-3xl" />
            
            {hoveredData ? (
              <div className="flex flex-col h-full justify-center relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{hoveredData.label}</h3>
                <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  {hoveredData.count}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-medium">Key Services:</span> {hoveredData.services}
                </p>
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center relative z-10 animate-in fade-in duration-700">
                {/* Slow breathing ambient glow inside the card */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5 blur-2xl opacity-50 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                
                {/* Elegant cinematic text */}
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/20 relative z-20 select-none">
                  Select a Region
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: 3D Globe Container */}
        <div className="relative w-full lg:w-2/3 h-[50vh] md:h-[60vh] lg:h-[700px] overflow-visible">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#3B82F6] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />
          
          <Globe3D
            markers={sampleMarkers.map(m => ({ lat: m.lat, lng: m.lng, label: m.label }))}
            config={{
              radius: 2,
              showAtmosphere: false,
              bumpScale: 2,
              autoRotateSpeed: 0.45,
              enableZoom: false,
              enablePan: false,
              markerSize: 0.08,
            }}
            className="w-full h-full"
            onMarkerHover={(marker) => {
              if (marker) {
                const fullData = sampleMarkers.find(m => m.label === marker.label);
                setHoveredData(fullData);
              } else {
                setHoveredData(null);
              }
            }}
          />

          {/* Vignette Overlay for Depth */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,0.8)] rounded-[2rem]" />
        </div>
        
      </div>
    </section>
  );
}
