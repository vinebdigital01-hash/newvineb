"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Hide if scrolling down past 50px and mobile menu is not open
        if (currentScrollY > lastScrollY && currentScrollY > 50 && !isMobileMenuOpen) {
          setIsVisible(false);
        } 
        // Show if scrolling up
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
<header className={`site-header fixed top-0 w-full z-[99999] left-0 right-0 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
  <div className="container mx-auto px-[16px] md:px-0 transition-all duration-300 text-center pt-[16px] md:pt-[32px]">
    <div className="header-inner-wrappers bg-[#111111]/90 border border-[#2A2A2A] text-[#929292] inline-flex items-center lg:justify-between w-auto rounded-full p-[10px] pl-[24px] pr-[10px] relative z-[3] backdrop-blur-md shadow-2xl">
      <div className="hidden lg:flex items-center justify-between gap-[40px] xl:gap-[80px]">
        
        {/* Logo */}
        <div className="header-logo flex-shrink-0">
          <a aria-label="Home" href="/" className="flex items-center gap-2">
            <img src="/vineb-logo.png" alt="VinebDigital" className="h-10 w-auto drop-shadow-md" />
          </a>
        </div>
        
        {/* Menu Items */}
        <div className="header-menu">
          <nav className="component primary-navigation flex" role="navigation" aria-label="Main Menu menu">
            <ul className="main-navigation flex items-center gap-[16px] xl:gap-[32px]">
              <li className="nav-item"><a className="inline-block px-[8px] text-[17px] font-medium text-[#c0c0c0] hover:text-white transition-colors" href="/our-services">Services</a></li>
              <li className="nav-item"><a className="inline-block px-[8px] text-[17px] font-medium text-[#c0c0c0] hover:text-white transition-colors" href="/projects">Work</a></li>
              <li className="nav-item"><a className="inline-block px-[8px] text-[17px] font-medium text-[#c0c0c0] hover:text-white transition-colors" href="/about-us">About Us</a></li>
              <li className="nav-item"><a className="inline-block px-[8px] text-[17px] font-medium text-[#c0c0c0] hover:text-white transition-colors" href="/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Button */}
        <div className="header-button flex-shrink-0">
          <a className="bg-white text-black font-bold text-[16px] px-[28px] py-[14px] rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]" aria-label="Get Started" href="/contact-us">
            Get Started
          </a>
        </div>

      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center justify-between w-full px-2">
        <button 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle p-2 hover:bg-white/10 text-white rounded-full transition-colors" 
          aria-label="Toggle navigation" 
          aria-controls="primary-navigation" 
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          )}
        </button>
        <div className="header-logo">
          <a aria-label="Home" href="/" className="flex items-center gap-2">
            <img src="/vineb-logo.png" alt="VinebDigital" className="h-8 w-auto drop-shadow-md" />
          </a>
        </div>
        <a className="p-2 hover:bg-white/10 text-white rounded-full transition-colors" aria-label="Contact us" href="/contact-us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
    
    {/* Mobile Dropdown Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden bg-[#111111]/95 border border-[#2A2A2A] rounded-3xl mt-4 p-6 text-left shadow-2xl backdrop-blur-md animate-in slide-in-from-top-4 fade-in duration-300">
        <ul className="flex flex-col gap-6">
          <li><a href="/our-services" className="text-white text-lg font-medium block hover:text-[var(--brand-accent)] transition-colors">Services</a></li>
          <li><a href="/projects" className="text-white text-lg font-medium block hover:text-[var(--brand-accent)] transition-colors">Work</a></li>
          <li><a href="/about-us" className="text-white text-lg font-medium block hover:text-[var(--brand-accent)] transition-colors">About Us</a></li>
          <li><a href="/blog" className="text-white text-lg font-medium block hover:text-[var(--brand-accent)] transition-colors">Blog</a></li>
        </ul>
        <div className="mt-8">
          <a className="block text-center bg-[#9AFD0D] text-black font-bold text-[16px] px-[28px] py-[14px] rounded-full hover:bg-white transition-colors duration-300" href="/contact-us">
            Get Started
          </a>
        </div>
      </div>
    )}
  </div>
</header>
    </>
  );
}
