"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/utils/cn";

export default function MobileMenu({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean, 
  setIsOpen: (val: boolean) => void 
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power4.inOut"
      });
      
      gsap.fromTo(
        linksRef.current?.children || [],
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power3.out",
          delay: 0.3 
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power4.inOut"
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-30 bg-[var(--brand-dark)] text-white transform translate-x-full md:hidden flex flex-col justify-center px-8"
    >
      <nav ref={linksRef} className="flex flex-col gap-6 text-5xl font-medium tracking-tighter">
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Home</Link>
        <Link href="/our-services" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Services</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Work</Link>
        <Link href="/about-us" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">About Us</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Blog</Link>
        <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[var(--brand-accent)] mt-8 text-3xl">Start a Project ↗</Link>
      </nav>
    </div>
  );
}
