"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const InteractiveParticles = dynamic(
  () => import("./ui/interactive-particles"),
  { ssr: false }
);

const SOCIAL_BG =
  "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/03/psd-colorful-modern-shape-3d-rendering-1-1.webp";
const APPOINTMENT_IMG =
  "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/03/image-419.webp";

const socialLinks = [
  {
    name: "dribbble",
    href: "https://dribbble.com/vinebdigital",
    Icon: FaDribbble,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/vinebdigital",
    Icon: FaInstagram,
  },
  {
    name: "behance",
    href: "https://www.behance.net/vinebdigital",
    Icon: FaBehance,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/vinebdigital",
    Icon: FaLinkedinIn,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/vinebdigital",
    Icon: FaFacebookF,
  },
] as const;

function ParticlesWhenVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-[50vh] mt-[40px] lg:mt-[80px] overflow-hidden bg-[#000000] border-t border-white/10"
    >
      <div className="absolute inset-0 z-0">
        {visible && (
          <InteractiveParticles
            text="VINE B DIGITAL"
            allowUpload={false}
            color="#ffffff"
            background="#000000"
            maxDimension={320}
            size={1}
          />
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-wrapper overflow-hidden relative z-[99999]">
      <section className="social-media-sections pt-[70px] md:pt-[80px] lg:pt-[160px] bg-[#111111] relative px-0 overflow-hidden">
        <div className="video-wrapper absolute left-0 right-0 mx-auto">
          <div
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: "200px" }}
          >
            <img
              alt="Social Media BG"
              loading="lazy"
              width={700}
              height={700}
              decoding="async"
              className="w-full md:w-[50%] animate-circular-motion"
              style={{ color: "transparent", width: "auto", height: "auto" }}
              src={SOCIAL_BG}
            />
          </div>
        </div>

        <div className="container mx-auto relative">
          <div className="relative">
            <div className="vineb-heading text-center">
              <div className="block-top">
                <div className="block-title">
                  <span className="bg-[#6060603D] text-white text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
                    <span className="w-[12px] h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
                    Social Media
                  </span>
                </div>
              </div>
              <div className="main-heading mt-[12px]">
                <div className="main-title text-white text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] md:leading-[1.13] lg:leading-[82px] font-semibold tracking-tight max-sm:w-[74%] max-sm:mx-auto">
                  Join Us on Social Media
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social-media-wrapper mt-[32px] md:mt-[80px] lg:mt-[80px] relative">
          <div className="social-media-content">
            <div className="grid grid-cols-1">
              {socialLinks.map(({ name, href, Icon }) => (
                <div key={name} className="social-media-items">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-[16px] max-w-[64%] active:max-w-[94%] lg:max-w-[872px] mx-auto lg:hover:max-w-[1192px] h-[32px] md:h-[64px] lg:h-[90px] transition-all duration-300 ease-in-out transform lg:hover:scale-105 sm:active:h-[48px] md:active:h-[90px] lg:hover:h-[168px]"
                    aria-label={name}
                  >
                    <div className="social-media-name text-[#606060] text-[14px] md:text-[24px] lg:text-[32px] leading-[1.2] md:leading-[1.13] lg:leading-[42px] capitalize font-normal">
                      {name}
                    </div>
                    <div className="social-media-icon relative flex items-center justify-center transition-all duration-300 ease-in-out w-[32px] h-[32px] lg:group-hover:w-[120px] lg:group-hover:h-[120px]">
                      <Icon className="text-[#606060] group-hover:text-white transition-colors duration-300 w-6 h-6 md:w-8 md:h-8 lg:group-hover:w-[72px] lg:group-hover:h-[72px]" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-us-form"
        className="contact-forms px-[16px] min-2xl:px-0 bg-gradients-custom py-[64px] sm:py-[80px] lg:py-[160px]"
      >
        <div className="container mx-auto">
          <div className="vineb-heading text-center md:!text-left">
            <div className="block-top">
              <div className="block-title inline-flex">
                <span className="bg-[#6060603D] text-white text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
                  <span className="w-[12px] h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
                  Let’s Talk
                </span>
              </div>
            </div>
            <div className="main-heading mt-[12px]">
              <div className="main-title text-white text-[36px] md:text-[48px] xl:text-[72px] leading-[1.2] md:leading-[1.3] font-semibold mt-[16px]">
                Let’s Talk About Your Project
              </div>
            </div>
            <p className="text-[#B5B5B5] text-[16px] md:text-[20px] max-md:leading-[1.4] mt-0 md:mt-[16px] md:text-[24px] xl:text-[32px] leading-[42px] font-normal">
              Tell us what you’re building. We design and build high-quality
              digital products globally.
            </p>
          </div>
        </div>

        <div className="container mx-auto bg-white rounded-[20px] md:rounded-[32px] p-[16px] md:p-[40px] relative z-1 mt-[32px] lg:mt-[80px]">
          <form className="flex flex-wrap gap-[20px] sm:gap-[36px] lg:gap-[64px]">
            <div className="flex w-[100%]">
              <a
                href="/contact-us"
                className="bg-[#9AFD0D] button-slide text-black text-[20px] md:text-[24px] xl:text-[36px] font-semibold xl:leading-[44px] px-[40px] py-[12px] sm:px-[40px] sm:py-[12px] xl:py-[26px] rounded-[100px] flex items-center gap-[16px] hover:bg-[#111111] hover:text-white transition-all !duration-300 !ease-in-out max-sm:w-[100%] max-sm:justify-center cursor-pointer"
              >
                <div className="button-text-wrapper">
                  <span className="button-text">Get in Touch</span>
                  <span className="button-text button-text-hover" aria-hidden="true">
                    Get in Touch
                  </span>
                </div>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.30893 27.9821L26.7652 10.5264C27.408 9.88367 27.408 8.84163 26.7653 8.19891C26.1226 7.55619 25.0805 7.55617 24.4378 8.19887L6.9815 25.6546C6.33878 26.2973 6.33876 27.3394 6.98147 27.9821C7.62417 28.6248 8.66621 28.6248 9.30893 27.9821Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.4812 8.23562C13.5005 9.14435 14.2527 9.86544 15.1614 9.84623L25.3337 9.63109L25.1186 19.8034C25.0994 20.7121 25.8205 21.4643 26.7292 21.4836C27.6379 21.5028 28.3902 20.7817 28.4094 19.873L28.6267 9.59944C28.634 9.26326 28.6427 8.86496 28.6038 8.52314C28.5574 8.11437 28.4204 7.52978 27.9277 7.03709C27.435 6.5444 26.8504 6.40742 26.4417 6.36097C26.0998 6.32213 25.7015 6.33081 25.3654 6.33812L15.0918 6.55543C14.1831 6.57464 13.462 7.32689 13.4812 8.23562Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </form>
          <div className="media-wrapper absolute bottom-[20px] right-[20px] hidden md:flex md:min-w-[180px] lg:min-w-[320px]">
            <img
              alt="Appointment Image"
              width={324}
              height={356}
              decoding="async"
              loading="lazy"
              className="w-[100%] mx-auto mix-blend-color-difference animate-chat-swing"
              style={{ color: "transparent" }}
              src={APPOINTMENT_IMG}
            />
          </div>
        </div>
      </section>

      <div className="footer-inner relative">
        <div className="absolute top-auto bottom-0 left-0 -z-0 w-full mx-auto text-center opacity-12">
          <img
            alt=""
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="md:w-[50%] mx-auto animate-circular-motion"
            style={{ color: "transparent" }}
            src={SOCIAL_BG}
            aria-hidden="true"
          />
        </div>

        <div className="container px-[16px] md:px-0 mx-auto footer-main-wrap rounded-[20px] md:rounded-[36px] relative z-10 max-w-[93.333%] md:max-w-[96%] lg:max-w-[100%] max-sm:!pt-[24px]">
          <div className="footer-top-wrapper md:pb-[30px] lg:pb-0 overflow-hidden">
            <div className="grid grid-cols-12 lg:pb-[60px] gap-x-[20px] gap-y-[48px]">
              <div className="col-span-12 lg:col-span-4">
                <p className="text-white text-[18px] leading-[28px] description">
                  We are a global UI/UX design and web development agency. Our
                  vision is clear: we design apps, websites, and SaaS products
                  for maximum usability, driving growth and revenue for your
                  business.
                </p>
                <div className="social-media-wrapper mt-[40px] flex gap-[16px]">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={`footer-${name}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-item inline-flex bg-[#252528] w-[42px] h-[42px] rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#9AFD0D] hover:text-black text-[#929292]"
                      aria-label={name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <div className="grid grid-cols-3 gap-[24px] md:gap-[40px]">
                  <div className="widgets max-sm:min-w-[100px]">
                    <div className="text-[14px] font-semibold leading-[20px] mb-[24px] underline underline-offset-2 text-[#E7E7E7]">
                      Design Services
                    </div>
                    <nav aria-label="Design Services menu">
                      <ul className="main-navigation flex flex-col gap-[8px]">
                        {[
                          ["Web Design", "/services/web-design"],
                          ["Mobile App Design", "/services/mobile-app-design"],
                          ["SaaS Web & App Design", "/services/saas-web-application-design"],
                          ["Brand Identity Design", "/services/brand-identity-design"],
                          ["Motion Graphics Design", "/services/motion-graphics-design"],
                        ].map(([label, href]) => (
                          <li key={href} className="nav-item">
                            <a
                              className="inline-block px-[16px] text-[#929292] py-[12px] text-[16px] hover:text-[var(--brand-accent)]"
                              href={href}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <div className="widgets max-sm:min-w-[100px]">
                    <div className="text-[14px] font-semibold leading-[20px] mb-[24px] underline underline-offset-2 text-[#E7E7E7]">
                      Development Services
                    </div>
                    <nav aria-label="Development Services menu">
                      <ul className="main-navigation flex flex-col gap-[8px]">
                        {[
                          ["Web Development", "/services/web-development"],
                          ["WordPress Development", "/services/wordpress-development"],
                          ["Shopify Development", "/services/shopify-development"],
                          ["Webflow Development", "/services/webflow-development"],
                        ].map(([label, href]) => (
                          <li key={href} className="nav-item">
                            <a
                              className="inline-block px-[16px] text-[#929292] py-[12px] text-[16px] hover:text-[var(--brand-accent)]"
                              href={href}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <div className="widgets max-sm:min-w-[100px]">
                    <div className="text-[14px] font-semibold leading-[20px] mb-[24px] underline underline-offset-2 text-[#E7E7E7]">
                      Company
                    </div>
                    <nav aria-label="Company menu">
                      <ul className="main-navigation flex flex-col gap-[8px]">
                        {[
                          ["About Us", "/about-us"],
                          ["Contact Us", "/contact-us"],
                          ["FAQs", "/faq"],
                          ["Blogs", "/blog"],
                        ].map(([label, href]) => (
                          <li key={href} className="nav-item">
                            <a
                              className="inline-block px-[16px] text-[#929292] py-[12px] text-[16px] hover:text-[var(--brand-accent)]"
                              href={href}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="devider bg-[#262525] w-full h-[1px] mt-[32px] md:mt-0" />
          <div className="footer-bottom-wrapper pt-[40px]">
            <div className="grid lg:grid-cols-2 items-center text-[#929292]">
              <div>
                <p className="text-[14px]">
                  © 2026. VinebDigital. All rights reserved.
                </p>
              </div>
              <div className="lg:text-right">
                <nav aria-label="Footer Bottom menu">
                  <ul className="main-navigation flex gap-[8px] lg:justify-end">
                    <li className="nav-item">
                      <a
                        className="inline-block px-[16px] text-[#929292] py-[12px] text-[16px] hover:text-[var(--brand-accent)]"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="inline-block px-[16px] text-[#929292] py-[12px] text-[16px] hover:text-[var(--brand-accent)]"
                        href="/terms-and-conditions"
                      >
                        Terms of use
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ParticlesWhenVisible />
    </footer>
  );
}
