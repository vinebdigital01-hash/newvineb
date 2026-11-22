'use client';

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What platforms do you build on?",
    answer: "We specialize in modern, high-performance tech stacks. For web apps, we use React and Next.js. For e-commerce, we build headless Shopify storefronts. We also develop custom CRMs and tailored sales funnels from scratch."
  },
  {
    question: "Do you handle ad budgets directly?",
    answer: "You always retain ownership of your ad accounts. You pay the ad platforms directly for your ad spend, while we charge a separate retainer for strategy, management, and ongoing optimization."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard landing page or sales funnel takes 2-3 weeks. Complex bespoke CRMs or headless Shopify builds generally range from 6-12 weeks depending on custom features and data migrations."
  },
  {
    question: "Do you offer SEO and local optimization?",
    answer: "Yes! We specialize in Google Maps optimization, local SEO, and overarching Social Media Optimization (SMO) to ensure your brand dominates local search intent."
  },
  {
    question: "Can you optimize our Amazon or Flipkart listings?",
    answer: "Absolutely. Our marketplace specialists run A/B tested listing optimizations, sponsored ads management, and organic ranking strategies specifically for Amazon FBA and Flipkart sellers."
  }
];

export default function FAQSection() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.from('.faq-item', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      force3D: true, // Hardware acceleration
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={container} className="bg-white/80 backdrop-blur-md py-32 text-zinc-900">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#1D1D1D] mb-6">
            Questions? We have answers.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-gray-200 last:border-b-0 will-change-[transform,opacity]">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
              >
                <span className="text-xl font-medium text-[#1D1D1D] group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 text-zinc-400 group-hover:text-blue-600 transition-colors relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute transition-all duration-300 ${openIndex === index ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                    <Plus className="w-6 h-6" />
                  </span>
                  <span className={`absolute transition-all duration-300 ${openIndex === index ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
                    <Minus className="w-6 h-6" />
                  </span>
                </span>
              </button>
              
              <div 
                className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-zinc-600 text-lg leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
