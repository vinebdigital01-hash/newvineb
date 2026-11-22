"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MaskedAvatars } from "@/components/ui/MaskedAvatars";

const HERO_IMAGES = [
  { src: "/images/hero/hero-10.webp", alt: "mobile phone" },
  { src: "/images/hero/hero-5.webp", alt: "mobile phone with AI" },
  { src: "/images/hero/hero-11.webp", alt: "mobile phone UI UX Design" },
  { src: "/images/hero/hero-1.webp", alt: "Face Scan Aura AI" },
  { src: "/images/hero/hero-2.webp", alt: "aura ai laptop with green background" },
  { src: "/images/hero/brand-identity-hero.webp", alt: "Brand identity design" },
  { src: "/images/hero/hero-4.webp", alt: "graph chart" },
  { src: "/images/hero/hero-6.webp", alt: "computer screen" },
  { src: "/images/hero/hero-8.webp", alt: "credit card" },
  { src: "/images/hero/hero-9.webp", alt: "stay in control" }, // Ends up 2nd from top
  { src: "/images/hero/hero-7.webp", alt: "aura AI" }, // Ends up on TOP
];

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [cardOrder, setCardOrder] = useState<number[]>(
    HERO_IMAGES.map((_, i) => i)
  );

  // Card cycling logic — mimics the original deck animation
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Step 1: After mount, trigger the "in" state (cards fan out)
    const inTimer = setTimeout(() => {
      header.classList.add("in");
    }, 800);

    // Step 2: After fan-out completes, switch to "inited" state
    const initedTimer = setTimeout(() => {
      header.classList.remove("in");
      header.classList.add("inited");
    }, 3000);

    // Step 3: Start cycling cards every 3s
    let cycleInterval: ReturnType<typeof setInterval>;
    const cycleTimer = setTimeout(() => {
      cycleInterval = setInterval(() => {
        // Get the last card (top of stack) and add .drop class
        const cards = header.querySelectorAll(".homeHeader__mediaCard");
        const lastCard = cards[cards.length - 1] as HTMLElement;
        if (lastCard) {
          lastCard.classList.add("drop");
          // After drop animation completes, move card to front of DOM
          setTimeout(() => {
            lastCard.classList.remove("drop");
            const parent = lastCard.parentElement;
            if (parent) {
              parent.insertBefore(lastCard, parent.firstChild);
            }
          }, 800);
        }
      }, 3000);
    }, 3500);

    return () => {
      clearTimeout(inTimer);
      clearTimeout(initedTimer);
      clearTimeout(cycleTimer);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, []);

  // GSAP animations for text and fade elements
  useGSAP(() => {
    // Hero title word-by-word reveal
    gsap.fromTo(
      ".hero-title-main .w",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 1.0,
      }
    );

    // Description and buttons fade in
    gsap.fromTo(
      ".fade",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 1.6,
      }
    );
    // Split the text apart when the images appear (desktop only)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Line 1 gap
      gsap.to(".split-left", {
        x: -100,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 1.2, // starts right when the images fan out
      });
      gsap.to(".split-right", {
        x: 100,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 1.2,
      });

      // Line 2 gap
      gsap.to(".split-left-2", {
        x: -100,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 1.2,
      });
      gsap.to(".split-right-2", {
        x: 100,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 1.2,
      });
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="hero-sections bg-[var(--brand-dark)] text-white relative"
    >
      <div className="container mx-auto px-[16px] md:px-0 relative w-full pt-[180px] lg:pt-[220px] pb-[60px]">
        <div className="hero-blocks w-full">
          <section className="homeHeader relative w-full" ref={headerRef}>
            {/* Hero Content */}
            <div className="homeHeader__content relative z-20">
              <h1 className="hero-title-main text-[36px] sm:text-[48px] md:text-[72px] xl:text-[96px] leading-[1.1] font-bold flex flex-col items-center justify-center w-full">
                <div className="text relative flex flex-col w-full">
                  {/* Mobile: simple centered text, Desktop: split for card gap */}
                  <div className="relative flex flex-wrap justify-center lg:justify-normal items-center w-full">
                    <span className="w split-left lg:w-1/2 text-center lg:text-right lg:pr-6 inline-block relative z-30" data-i="1">
                      We Design
                    </span>
                    <span className="w split-right lg:w-1/2 text-center lg:text-left lg:pl-6 inline-block ml-3 lg:ml-0 relative z-30" data-i="2">
                      &amp; Build
                    </span>
                  </div>
                  <div className="relative flex flex-wrap justify-center lg:justify-normal items-center w-full mt-1 lg:mt-2">
                    <span className="w split-left-2 lg:w-1/2 text-center lg:text-right lg:pr-6 inline-block relative z-30 drop-shadow-md" data-i="3">
                      Experiences
                    </span>
                    <span className="w split-right-2 lg:w-1/2 text-center lg:text-left lg:pl-6 inline-block ml-3 lg:ml-0 relative z-30 drop-shadow-md" data-i="4">
                      That Convert
                    </span>
                  </div>
                </div>
              </h1>

              <div className="md:text-[18px] lg:text-[20px] lg:leading-[1.64] mx-auto pt-[16px] lg:pt-[44px] md:max-w-[740px] text-[#B5B5B5] font-normal fade text-center">
                <p className="description">
                  We design high-performing websites, mobile apps, and SaaS
                  platforms that delight users. And we build websites that turn
                  those experiences into results. Enhance your brand, drive
                  sales, and grow your revenue with us.
                </p>
              </div>
            </div>

            {/* Stacked Card Deck — mobile: centered below text, desktop: in the gap */}
            <div className="flex justify-center my-6 lg:my-0 lg:absolute lg:left-[50%] lg:-translate-x-1/2 lg:-top-[60px] xl:-top-[80px]">
              <div className="homeHeader__mediaCards relative w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] lg:w-auto lg:h-auto z-10 pointer-events-none" ref={cardsRef}>
                {HERO_IMAGES.map((img, i) => (
                  <div key={i} className="homeHeader__mediaCard">
                    <Image
                      alt={img.alt}
                      className="media"
                      width={180}
                      height={232}
                      sizes="(max-width: 768px) 140px, 180px"
                      src={img.src}
                      priority={i >= HERO_IMAGES.length - 3}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Footer — CTAs */}
            <div className="homeHeader__footer">
              <div className="hero-bottom-block pt-[24px] md:pt-[40px] fade">
                <div className="hero-inner">
                  <div className="flex justify-center items-center flex-row gap-[28px] flex-wrap md:flex-nowrap">
                    <div className="buttons-wrapper flex flex-row gap-[24px] flex-wrap md:flex-nowrap justify-center items-center">
                      <a
                        aria-label="See Our Portfolio"
                        className="bg-[#9AFD0D] text-black font-semibold text-[14px] sm:text-[16px] px-[24px] sm:px-[32px] py-[12px] sm:py-[14px] rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                        href="/projects"
                      >
                        See Our Portfolio
                      </a>

                      <div className="scale-75 sm:scale-90 md:scale-100 origin-center">
                        <MaskedAvatars size={52} border={2} column={35} movement={0.1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
