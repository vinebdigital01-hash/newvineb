'use client';

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for exploring the platform.',
    features: ['Basic analytics', 'Up to 3 projects', 'Community support', '1GB storage'],
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '$19',
    description: 'Best for growing businesses.',
    features: ['Advanced analytics', 'Unlimited projects', 'Priority email support', '10GB storage', 'Custom domains'],
    isPopular: true,
  },
  {
    name: 'Scale',
    price: '$49',
    description: 'For large scale organizations.',
    features: ['Enterprise analytics', 'Unlimited everything', '24/7 phone support', 'Unlimited storage', 'Custom integrations', 'Dedicated account manager'],
    isPopular: false,
  }
];

export default function PricingSection() {
  const container = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(false);

  useGSAP(() => {
    gsap.from('.pricing-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-32 relative text-zinc-900">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-zinc-900 mb-6">
            Simple, transparent pricing.
          </h2>
          <div className="flex items-center justify-center">
            <div className="bg-zinc-100 p-1 rounded-full inline-flex relative w-56">
              <div 
                className={`absolute top-1 bottom-1 w-[108px] bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out ${isAnnual ? 'translate-x-[108px]' : 'translate-x-0'}`}
              />
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 w-1/2 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 w-1/2 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card h-full">
              {plan.isPopular ? (
                <div className="relative p-[2px] rounded-3xl overflow-hidden h-full flex flex-col group">
                  <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,#3B82F6_100%)] animate-[spin_3s_linear_infinite]" />
                  <div className="absolute inset-[2px] bg-white rounded-[22px] z-10" />
                  <div className="relative z-20 p-8 flex flex-col h-full bg-white rounded-[22px]">
                    <div className="mb-8">
                      <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Most Popular</span>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-extrabold">{plan.price}</span>
                        <span className="text-zinc-500">/month</span>
                      </div>
                      <p className="text-zinc-500 text-sm">{plan.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          <span className="text-zinc-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border border-zinc-200 rounded-3xl p-8 h-full flex flex-col bg-white">
                  <div className="mb-8 mt-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                    <p className="text-zinc-500 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-zinc-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium py-3 px-4 rounded-xl transition-colors">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
