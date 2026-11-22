"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9]">
          We are a team of <span className="text-gray-400">digital natives</span> and creative thinkers.
        </h1>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative mb-24">
        <img 
          ref={imageRef}
          src="/images/image-2747.webp" 
          alt="Agency Office" 
          className="absolute top-[-20%] left-0 w-full h-[140%] object-cover"
        />
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Story.</h2>
        <div className="text-xl md:text-2xl text-gray-600 space-y-6">
          <p>
            Founded with a rebellious spirit and a lofty objective, Vineb Digital was built to challenge the status quo of web design.
          </p>
          <p>
            We believe that every digital touchpoint is an opportunity to create a meaningful connection with your audience. That&apos;s why we blend striking aesthetics with robust engineering.
          </p>
        </div>
      </div>

      <div className="bg-[var(--brand-dark)] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Neeraj Kumar", "Lead Designer", "Lead Developer"].map((member, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-3xl mb-6 bg-gray-800 aspect-[3/4]">
                  <img src="/images/Team-Member-Image.webp" alt={member} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold">{member}</h3>
                <p className="text-gray-400">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
