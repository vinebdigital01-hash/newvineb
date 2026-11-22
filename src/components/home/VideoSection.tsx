"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const container = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const blueOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entry animation (chote se bada)
    gsap.fromTo(figureRef.current, 
      { opacity: 0, scale: 0.85, y: 100 },
      { 
        opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out',
        force3D: true, // Enable GPU acceleration
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: true, // Removed 1s smoothing delay which causes extreme overlap jitter
        }
      }
    );

    // 2. Shrink animation (Fake Pin)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top', 
        scrub: true,
        invalidateOnRefresh: true, // Recalculate dynamic values (x, y, width) on screen resize or orientation change
      }
    });

    // Shrink the video and fade in the blue overlay
    tl.to(figureRef.current, {
      duration: 1,
      width: () => window.innerWidth >= 1024 ? '130px' : '100px',
      height: () => window.innerWidth >= 1024 ? '56px' : '40px',
      borderRadius: '40px',
      paddingBottom: '0',
      force3D: true, // Enable GPU acceleration for layout changes
      x: () => {
        const t = document.querySelector('#image-palced');
        if (!t || !container.current) return 0;
        const targetRect = t.getBoundingClientRect();
        const containerRect = container.current.getBoundingClientRect();
        
        const finalTargetWidth = window.innerWidth >= 1024 ? 130 : 100;
        const targetCenterX = targetRect.left + finalTargetWidth / 2;
        const containerCenterX = containerRect.left + containerRect.width / 2;
        
        return targetCenterX - containerCenterX;
      },
      y: () => {
        const t = document.querySelector('#image-palced');
        if (!t || !container.current) return 0;
        const targetRect = t.getBoundingClientRect();
        const containerRect = container.current.getBoundingClientRect();
        
        const finalTargetHeight = window.innerWidth >= 1024 ? 56 : 40;
        const targetCenterY = targetRect.top + finalTargetHeight / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        
        return targetCenterY - containerCenterY;
      },
      ease: 'power1.inOut'
    }, 0)
    .to(".mute-btn", {
      duration: 1,
      scale: () => window.innerWidth >= 1024 ? 0.33 : 0.8,
      right: () => window.innerWidth >= 1024 ? '-32px' : '4px',
      bottom: () => window.innerWidth >= 1024 ? '-32px' : '4px',
      ease: 'power1.inOut'
    }, 0)
    .to(blueOverlayRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut'
    }, 0.5); // fade in halfway through the shrink

    // Ensure ScrollTrigger recalculates after fonts load, as font changes shift the gap position
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

  }, { scope: container });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section ref={container} className="video-images-section bg-transparent pointer-events-none text-white w-full relative z-50">
      <div className="w-full relative mx-auto px-[16px] lg:px-0 top-0 h-screen flex flex-col justify-center">
        <div className="relative w-full flex justify-center pointer-events-auto">
          <figure ref={figureRef} style={{ willChange: 'transform, width, height' }} className="video-figure relative w-full lg:w-[90vw] rounded-[24px] overflow-hidden mx-auto m-0 pb-[40.55%] bg-[#1a1a1a] flex items-center justify-center">
            
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
              src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4"
            />

            {/* The blue overlay that fades in as it shrinks */}
            <div ref={blueOverlayRef} className="absolute inset-0 w-full h-full bg-[#0A197D] opacity-0 flex items-center justify-center rounded-[40px] z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00A3FF"/>
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <button 
              onClick={toggleMute}
              className="mute-btn absolute bottom-4 right-4 lg:bottom-[36px] lg:right-[36px] z-50 bg-[#9AFD0D] w-[40px] h-[40px] lg:w-[120px] lg:h-[120px] backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110" 
              aria-label="Toggle mute"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="lg:!w-[50px] lg:!h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12Z" fill="black"></path>
                <path d="M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12Z" fill="black"></path>
                <path d="M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="black"></path>
              </svg>
            </button>
          </figure>
        </div>
      </div>
    </section>
  );
}
