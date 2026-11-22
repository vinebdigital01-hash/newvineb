'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Link, MoveRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  { id: 'strategize', label: 'Strategize' },
  { id: 'build', label: 'Build' },
  { id: 'scale', label: 'Scale' },
];

const tabContent = {
  strategize: {
    title: 'Audit, architect, and align.',
    description: 'We tear down your current funnels, analyze your market positioning, and map out a high-converting web architecture and ad strategy before a single line of code is written.',
    ui: (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Link className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <div className="h-4 w-24 bg-zinc-700 rounded mb-2"></div>
                <div className="h-3 w-16 bg-zinc-800 rounded"></div>
              </div>
            </div>
            <div className="h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  build: {
    title: 'Engineered for speed and sales.',
    description: 'Our developers and designers build blazing-fast landing pages, complex bespoke CRMs, and highly-optimized Shopify storefronts. We write clean code that converts.',
    ui: (
      <div className="h-full flex flex-col justify-end gap-2">
        <div className="flex items-end justify-between h-32 mb-6 gap-2">
          {[40, 70, 45, 90, 60, 100, 85].map((h, i) => (
            <div key={i} className="w-full bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
              <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: '2px' }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between p-4 rounded-xl bg-white/5 border border-white/5">
          <div>
            <div className="text-zinc-500 text-sm mb-1">Page Speed Score</div>
            <div className="text-white text-xl font-medium">99 / 100</div>
          </div>
          <div className="text-emerald-400 text-sm flex items-center">
            +42% faster
          </div>
        </div>
      </div>
    )
  },
  scale: {
    title: 'Turn on the traffic engine.',
    description: 'With the foundation built, we unleash targeted Meta Ads, Google Ads, and local SEO campaigns. We optimize Amazon listings and scale dropshipping funnels to the moon.',
    ui: (
      <div className="space-y-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
          <div className="text-emerald-400 text-sm font-medium mb-4">Live Campaign Status</div>
          <div className="text-white text-lg mb-2">ROAS is up 3.4x this week</div>
          <div className="text-zinc-400 text-sm mb-4">Ad spend efficiency has improved dramatically since the new landing page deployment.</div>
          <button className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
            View Analytics <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }
};

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState('strategize');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo('.wf-heading', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", force3D: true }
    )
    .fromTo('.wf-tabs',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", force3D: true },
      "-=0.4"
    )
    .fromTo('.wf-panel',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", force3D: true },
      "-=0.4"
    );
  }, { scope: containerRef });

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", force3D: true }
    );
  }, [activeTab]);

  return (
    <section ref={containerRef} className="bg-white/60 backdrop-blur-lg py-32 overflow-hidden">
      <div className="container mx-auto px-[16px] 2xl:px-0 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="wf-heading text-[32px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-black mb-10">
            Our proven framework<br/>for explosive growth.
          </h2>
          
          <div className="wf-tabs bg-gray-100/50 rounded-full p-1.5 inline-flex backdrop-blur-md border border-gray-200/50 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="wf-panel grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="bg-[#0A0A0A] rounded-[32px] p-8 border border-white/10 shadow-2xl relative overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]">
            {/* Ambient Glows */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-[0.05]"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-500 rounded-full mix-blend-screen filter blur-[80px] opacity-[0.05]"></div>
            
            {/* UI Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                </div>
              </div>
              <div ref={contentRef} className="flex-1">
                {tabContent[activeTab as keyof typeof tabContent].ui}
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-4">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>
            <button className="text-black font-medium flex items-center gap-2 group hover:gap-3 transition-all">
              Learn more <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
