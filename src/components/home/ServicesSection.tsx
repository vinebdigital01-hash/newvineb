"use client";
import React from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CircularGallery = dynamic(() => import("@/components/ui/circular-gallery").then((mod) => mod.CircularGallery), {
  ssr: false, // OGL WebGL requires browser APIs
});

export default function ServicesSection() {
  useGSAP(() => {
    gsap.fromTo("#image-palced", 
      { width: 0 },
      {
        width: () => window.innerWidth >= 1024 ? 130 : 100,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: ".video-images-section",
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        }
      }
    );
  });

  return (
    <>
      <section className="services-section relative w-full pt-[80px] lg:pt-0">
        <div className="container mx-auto px-[16px] 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="six2eight-heading">
                <div className="block-top">
                  <div className="block-title">
                    <span className="bg-[#6060603D] text-white text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
                      <span className="w-[12px] h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex"></span>
                      Services
                    </span>
                  </div>
                </div>
                <div className="main-heading mt-[12px]">
                  <h2 className="main-title text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.13] lg:leading-[64px]  font-semibold tracking-tight">
                    <span>We help </span>
                    <span
                      id="image-palced"
                      className="w-0 inline-block align-middle relative h-[40px] lg:h-[56px] transition-none"
                    ></span>
                    <span> you design</span>
                    <br />
                    <span>
                      and build better digital products. All in ONE place!
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="services-descriptions lg:pl-[32px]">
                <div className="text-[16px] leading-[24px] mt-[12px] lg:mt-[24px]">
                  <p className="text-[#B5B5B5] text-[18px] lg:text-[20px] lg:leading-[32px] font-normal">
                    You need a partner who gets your business and covers
                    everything. From branding to UI/UX design and web
                    development, you can rely on us for everything.
                  </p>
                </div>
                <div className="btn-wrapper mt-[48px] text-white">
                  <a
                    className="solid-buttons button-slide transition-all duration-300 ease-in-out max-sm:!py-[10px]"
                    href="/our-services"
                  >
                    <div className="button-text-wrapper">
                      <span className="button-text">See All Services</span>
                      <span
                        className="button-text button-text-hover"
                        aria-hidden="true"
                      >
                        See All Services
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white relative">
          <div className="w-full mx-auto pl-[16px] lg:pl-0">
            <div className="grid grid-cols-12 mt-[32px] md:mt-[40px] lg:mt-[80px]">
              <div className="col-span-12">
                <div className="pb-[80px]">
                  <div className="container mx-auto px-[16px] 2xl:px-0">
                    <div
                      className="service-splide-container w-full h-[600px] md:h-[700px] rounded-[40px] overflow-hidden"
                      style={{
                        position: "relative",
                        zIndex: "1",
                      }}
                    >
                      <CircularGallery 
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.05}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
