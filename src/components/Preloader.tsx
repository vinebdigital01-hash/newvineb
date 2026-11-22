"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const greetings = [
  "Hello",
  "你好",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "مرحبا",
  "হ্যালো",
  "Olá",
  "ہیلو",
  "Hallo",
];

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    
    // Animate text changes
    const interval = setInterval(() => {
      if (index < greetings.length - 1) {
        index++;
        setCurrentIndex(index);
      } else {
        clearInterval(interval);
        
        // When finished cycling, animate out the preloader
        const tl = gsap.timeline({
          onComplete: () => setIsFinished(true)
        });
        
        tl.to(textRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut"
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        }, "-=0.2");
      }
    }, 200); // Fast interval for rapid text flashing

    return () => clearInterval(interval);
  }, []);

  if (isFinished) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--brand-dark)] text-white overflow-hidden"
    >
      <div 
        ref={textRef}
        className="flex items-center text-4xl md:text-6xl font-medium tracking-tight"
      >
        <span className="flex items-center gap-2">
          {greetings[currentIndex]}
          <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-2" />
        </span>
      </div>
    </div>
  );
}
