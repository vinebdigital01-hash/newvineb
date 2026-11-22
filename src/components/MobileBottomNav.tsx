'use client';

import React from 'react';
import { Home, Briefcase, Target, Menu, MessageSquare } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  // Highlight based on route
  const getActiveTab = () => {
    if (pathname === '/our-services') return 'services';
    if (pathname === '/projects') return 'work';
    if (pathname === '/contact-us') return 'contact';
    if (pathname === '/more') return 'more';
    return 'home';
  };
  const activeTab = getActiveTab();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[80px]">
      {/* Notch SVG Background */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 80" 
        preserveAspectRatio="none" 
        className="absolute inset-0 w-full h-[80px] text-black fill-current z-0 drop-shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      >
        <path d="M0,24 C0,10.7 10.7,0 24,0 L145,0 C155,0 162,5 168,15 C174,25 182,38 200,38 C218,38 226,25 232,15 C238,5 245,0 255,0 L376,0 C389.3,0 400,10.7 400,24 L400,80 L0,80 Z" />
      </svg>

      {/* Glow Effect behind FAB */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-20 h-20 bg-[#97F700]/30 rounded-full blur-xl z-0 pointer-events-none" />

      {/* Floating Action Button (Center) */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
        <button 
          onClick={() => navigate('/contact-us')}
          className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-2 border-[#1A1A1A] hover:scale-105 transition-transform"
          aria-label="Contact Us"
        >
          <MessageSquare className="w-6 h-6 text-[#97F700] fill-[#97F700]" />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-6 pt-2">
        {/* Left Side */}
        <div className="flex w-[40%] justify-between pr-4">
          <button 
            onClick={() => navigate('/')}
            className="flex flex-col items-center gap-1.5 w-12"
          >
            <Home className={`w-6 h-6 ${activeTab === 'home' ? 'text-[#97F700]' : 'text-gray-400'}`} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            <span className={`text-[11px] font-semibold ${activeTab === 'home' ? 'text-[#97F700]' : 'text-gray-400'}`}>Home</span>
          </button>
          
          <button 
            onClick={() => navigate('/our-services')}
            className="flex flex-col items-center gap-1.5 w-12"
          >
            <Briefcase className={`w-6 h-6 ${activeTab === 'services' ? 'text-[#97F700]' : 'text-gray-400'}`} strokeWidth={activeTab === 'services' ? 2.5 : 2} />
            <span className={`text-[11px] font-semibold ${activeTab === 'services' ? 'text-[#97F700]' : 'text-gray-400'}`}>Services</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex w-[40%] justify-between pl-4">
          <button 
            onClick={() => navigate('/projects')}
            className="flex flex-col items-center gap-1.5 w-12"
          >
            <Target className={`w-6 h-6 ${activeTab === 'work' ? 'text-[#97F700]' : 'text-gray-400'}`} strokeWidth={activeTab === 'work' ? 2.5 : 2} />
            <span className={`text-[11px] font-semibold ${activeTab === 'work' ? 'text-[#97F700]' : 'text-gray-400'}`}>Work</span>
          </button>
          
          <button 
            onClick={() => navigate('/about-us')}
            className="flex flex-col items-center gap-1.5 w-12"
          >
            <Menu className={`w-6 h-6 ${activeTab === 'more' ? 'text-[#97F700]' : 'text-gray-400'}`} strokeWidth={activeTab === 'more' ? 2.5 : 2} />
            <span className={`text-[11px] font-semibold ${activeTab === 'more' ? 'text-[#97F700]' : 'text-gray-400'}`}>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
