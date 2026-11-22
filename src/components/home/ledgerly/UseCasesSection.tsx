'use client';

import React, { useState } from 'react';

const audiences = [
  {
    id: 'dtc',
    title: 'DTC & E-Commerce',
    headline: 'Scale your store to 8-figures.',
    scenario: 'Headless Shopify builds, dropshipping automation, and ROAS-focused ad campaigns.',
    metric: { label: 'Average ROAS', value: '4.8x' },
    activeColor: 'bg-emerald-50 border border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    barColor: 'bg-emerald-500'
  },
  {
    id: 'local',
    title: 'Local Businesses',
    headline: 'Dominate your local market.',
    scenario: 'Google Maps optimization, Social Media (SMO), and lead generation funnels that keep your phone ringing.',
    metric: { label: 'Lead Volume', value: '+312%' },
    activeColor: 'bg-blue-50 border border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-800',
    barColor: 'bg-blue-500'
  },
  {
    id: 'startups',
    title: 'Startups & SaaS',
    headline: 'Launch fast. Iterate faster.',
    scenario: 'Complex web applications, custom CRM integrations, and waitlist landing pages that convert traffic into users.',
    metric: { label: 'Time to Market', value: '4 Weeks' },
    activeColor: 'bg-purple-50 border border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-800',
    barColor: 'bg-purple-500'
  },
  {
    id: 'marketplace',
    title: 'Marketplace Sellers',
    headline: 'Own the Amazon buy box.',
    scenario: 'Amazon FBA ranking strategies, Flipkart brand scaling, and listing optimizations that drive organic sales.',
    metric: { label: 'Organic Sales', value: '+140%' },
    activeColor: 'bg-orange-50 border border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-800',
    barColor: 'bg-orange-500'
  }
];

export default function UseCasesSection() {
  const [activeId, setActiveId] = useState('dtc');

  return (
    <section className="bg-white/60 backdrop-blur-lg py-32">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] text-[#1D1D1D] font-medium tracking-tight mb-16 max-w-2xl">
          We scale businesses of all sizes.
        </h2>

        <div className="flex flex-col lg:flex-row h-[500px] lg:h-[600px] gap-4 w-full">
          {audiences.map((audience) => {
            const isActive = activeId === audience.id;
            return (
              <div
                key={audience.id}
                onMouseEnter={() => setActiveId(audience.id)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col lg:flex-row items-stretch will-change-[flex,transform,opacity]
                  ${isActive ? `flex-[4] min-h-[300px] lg:min-h-0 ${audience.activeColor}` : 'flex-[0.7] min-h-[60px] lg:min-h-0 bg-[#F8FAFC] border border-zinc-200 hover:bg-zinc-100'}`}
              >
                {/* Inactive State - Vertical Text on Desktop, Horizontal on Mobile */}
                <div className={`p-4 lg:p-6 flex items-center justify-between lg:justify-center w-full lg:w-auto h-full absolute inset-0 z-10 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <h3 className="text-[#1D1D1D] font-medium text-lg whitespace-nowrap lg:-rotate-90 origin-center">
                    {audience.title}
                  </h3>
                </div>

                {/* Active State Content */}
                <div className={`p-6 md:p-10 h-full w-full flex flex-col justify-between transition-opacity duration-700 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-colors duration-500 ${audience.badgeColor}`}>
                      {audience.title}
                    </span>
                    <h3 className="text-[28px] md:text-[36px] text-[#1D1D1D] font-semibold leading-tight mb-4">
                      {audience.headline}
                    </h3>
                    <p className="text-zinc-500 text-base md:text-xl max-w-md">
                      {audience.scenario}
                    </p>
                  </div>
                  
                  {/* Mini UI Component */}
                  <div className="mt-8 self-start bg-white border border-zinc-200 rounded-xl p-5 shadow-sm min-w-[250px]">
                    <div className="text-sm text-zinc-500 font-medium mb-1">{audience.metric.label}</div>
                    <div className="text-2xl font-semibold text-[#1D1D1D]">{audience.metric.value}</div>
                    <div className="mt-4 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full w-2/3 transition-colors duration-500 ${audience.barColor}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
