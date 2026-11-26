'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import OptionWheel from '@/components/ui/OptionWheel';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: 'Website Development',
    description: 'We build blazing-fast, highly converting websites and web applications tailored to scale your brand and delight your users.',
    features: ['Next.js & React Architecture', 'Headless CMS Integration', 'Core Web Vitals Optimization', 'Bespoke UI/UX Design']
  },
  {
    title: 'Search Engine Optimization',
    description: 'Dominate search rankings with data-driven SEO strategies that drive high-intent organic traffic directly to your offers.',
    features: ['Technical SEO Audits', 'High-Authority Link Building', 'Keyword Gap Analysis', 'On-Page Content Optimization']
  },
  {
    title: 'Performance Marketing',
    description: 'Maximize your ROI with precision-targeted ad campaigns across Google, Meta, and TikTok, scaled profitably.',
    features: ['Multi-Channel Media Buying', 'ROAS-Driven Bidding', 'A/B Creative Testing', 'Advanced Pixel Tracking']
  },
  {
    title: 'Google My Business',
    description: 'Turn local searches into foot traffic and calls. We fully optimize your GMB profile to rank in the coveted Local Pack.',
    features: ['Local SEO Strategy', 'Review Generation Campaigns', 'Profile Optimization', 'Local Citation Building']
  },
  {
    title: 'Amazon Seller Management',
    description: 'Scale your e-commerce brand on the world\'s largest marketplace with end-to-end account management and optimization.',
    features: ['Listing Optimization (SEO)', 'Amazon PPC Management', 'A+ Content Creation', 'Inventory Forecasting']
  },
  {
    title: 'Sales Funnels',
    description: 'Stop losing leads. We engineer high-converting sales funnels designed to turn cold traffic into loyal paying customers.',
    features: ['Lead Magnet Creation', 'Landing Page Optimization', 'Automated Email Sequences', 'Upsell/Downsell Pathways']
  },
  {
    title: 'Social Media Management',
    description: 'Build a cult-like following with viral content strategies and community management that elevates your brand presence.',
    features: ['Organic Growth Strategy', 'Short-Form Video Production', 'Community Engagement', 'Influencer Partnerships']
  },
  {
    title: 'Brand Identity Design',
    description: 'Stand out in a crowded market with a premium, cohesive brand identity that commands authority and trust.',
    features: ['Logo & Typography Systems', 'Brand Guidelines', 'Marketing Collateral', 'Visual Positioning']
  },
  {
    title: 'Content Strategy',
    description: 'Educate, engage, and convert. We craft compelling content that aligns with your buyer\'s journey and positions you as an authority.',
    features: ['Blog & Article Writing', 'Whitepapers & E-Books', 'Video Scripting', 'Content Distribution']
  },
  {
    title: 'Conversion Rate Optimization',
    description: 'Squeeze more profit out of your existing traffic through rigorous data analysis and continuous A/B split testing.',
    features: ['Heatmap & Session Analysis', 'A/B & Multivariate Testing', 'Friction Point Removal', 'Checkout Optimization']
  }
];

export default function SecuritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress internally, map to array index
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [wheelValue, setWheelValue] = useState(0);
  const [wheelFontSize, setWheelFontSize] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      setWheelFontSize(window.innerWidth < 1024 ? 1.5 : 2.2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    let rafId = 0;
    let pendingProgress = 0;
    let scheduled = false;

    const applyProgress = () => {
      scheduled = false;
      const maxIndex = SERVICES.length - 1;
      const exactValue = pendingProgress * maxIndex;
      setWheelValue(exactValue);

      const snappedIndex = Math.round(exactValue);
      if (
        snappedIndex !== activeIndexRef.current &&
        snappedIndex >= 0 &&
        snappedIndex <= maxIndex
      ) {
        activeIndexRef.current = snappedIndex;
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.18,
          overwrite: true,
          onComplete: () => {
            setActiveIndex(snappedIndex);
            gsap.to(contentRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
            });
          },
        });
      }
    };

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.35,
        anticipatePin: 1,
        onUpdate: (self) => {
          pendingProgress = self.progress;
          if (!scheduled) {
            scheduled = true;
            rafId = requestAnimationFrame(applyProgress);
          }
        },
      },
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, { scope: containerRef });

  const activeService = SERVICES[activeIndex];

  return (
    <section ref={containerRef} className="relative bg-[#020617] text-white">
      {/* 
        This is the inner container that gets pinned. 
        It takes up 100vh so it fills the screen while pinned.
      */}
      <div ref={pinnedRef} className="h-screen w-full relative overflow-hidden flex flex-col justify-center">
        
        {/* Subtle grid background for tech vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial gradient to highlight the wheel area */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full lg:h-[80vh] py-10 lg:py-0">
          
          {/* LEFT: Option Wheel */}
          <div className="h-[20vh] lg:h-full w-full relative flex items-center justify-start pointer-events-none lg:pointer-events-auto">
            {/* 
              We pass externalValue driven by scroll progress. 
              disableScroll=true so GSAP handles the scrolling, not the wheel itself.
            */}
            <OptionWheel
              items={SERVICES.map(s => s.title)}
              externalValue={wheelValue}
              disableScroll={true}
              textColor="#64748b"
              activeColor="#ffffff"
              fontSize={wheelFontSize}
              spacing={3}
              curve={1.5}
              tilt={8}
              inset={20}
              className="lg:pl-10"
            />
          </div>

          {/* RIGHT: Dynamic Service Details */}
          <div className="flex-1 lg:h-full w-full flex flex-col justify-center pr-0 lg:pr-10 pb-16 lg:pb-0">
            <div className="mb-4 lg:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs lg:text-sm font-medium text-[#94A3B8] mb-2 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
                Growth Architecture
              </div>
            </div>

            <div ref={contentRef} className="will-change-[opacity,transform]">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 lg:mb-6 leading-[1.1]">
                {activeService.title}
              </h2>
              <p className="text-base md:text-xl text-[#94A3B8] mb-6 lg:mb-10 leading-relaxed max-w-xl">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-12">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#3B82F6] shrink-0" />
                    <span className="text-sm lg:text-base text-[#F1F5F9] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="/contact-us"
                  className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Book a Strategy Call</span>
                  <ArrowRight className="relative z-10 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E2E8F0] to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
