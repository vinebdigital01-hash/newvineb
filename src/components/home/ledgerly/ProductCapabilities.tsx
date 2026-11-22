'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Code, ShoppingCart, TrendingUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
  {
    title: 'High-Performance Web Dev',
    description: 'Custom landing pages, bespoke CRMs, high-converting sales funnels, and scalable web apps built on modern tech stacks like Next.js.',
    icon: Code,
  },
  {
    title: 'Elite E-Commerce',
    description: 'Headless Shopify setups, dropshipping infrastructure, and custom storefronts designed with one singular goal: maximizing your AOV.',
    icon: ShoppingCart,
  },
  {
    title: 'Omnichannel Growth',
    description: 'Scalable Meta Ads, Google Ads, Amazon Seller optimization, and Google Maps local SEO to turn your new platform into a revenue engine.',
    icon: TrendingUp,
  },
];

export default function ProductCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            force3D: true, // Hardware acceleration
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section className="relative py-32 bg-black" ref={containerRef}>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] -scale-x-100"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4" type="video/mp4" />
          </video>
          {/* Lighter gradient overlay to ensure text readability but keep video visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>
      </div>

      <div className="container mx-auto px-[16px] 2xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 relative">
          
          {/* Left Column (Sticky) */}
          <div className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-16">
            <h2 className="text-[48px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              One agency.<br />
              <span className="text-white/90">Complete digital dominance.</span>
            </h2>
            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
              We replace fragmented freelancers and slow agencies with a unified strike team. We build the architecture, create the funnels, and drive the traffic.
            </p>
          </div>

          {/* Right Column (Scrolling Stack) */}
          <div className="flex flex-col gap-32 py-16 lg:py-32">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                ref={el => { cardsRef.current[index] = el; }}
                className="bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col will-change-[transform,opacity]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                  <cap.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
