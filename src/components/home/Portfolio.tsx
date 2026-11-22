"use client";
import React from 'react';
import Image from 'next/image';

const PROJECTS = [
  {
    title: "DailyTime",
    category: "FinTech",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/03/Container-9.webp",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Vizerto",
    category: "AI",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/03/Container-8.webp",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Storytime Owls",
    category: "eCommerce",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/Story.webp",
    aspect: "aspect-square"
  },
  {
    title: "GunMade",
    category: "Healthcare",
    img: "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/Container-7.webp",
    aspect: "aspect-[16/9]"
  }
];

export default function Portfolio() {
  return (
    <section className="w-full bg-white text-black py-[120px] rounded-t-[40px] -mt-[40px] relative z-20">
      <div className="container mx-auto px-4 lg:px-0">
        
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center bg-[#f0f0f0] rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#070707] mr-2"></div>
            <span className="text-sm font-medium">Projects</span>
          </div>
          <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-[1.1] tracking-tight">
            Featured Work
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className={`group cursor-pointer relative ${idx % 2 !== 0 ? 'md:mt-[100px]' : ''}`}>
              <div className={`relative w-full rounded-[24px] overflow-hidden ${project.aspect} bg-gray-100`}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-[24px] font-bold">{project.title}</h3>
                <span className="text-[14px] font-medium px-4 py-2 bg-gray-100 rounded-full">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-[100px]">
          <a href="#" className="inline-block border border-black text-black hover:bg-[var(--brand-accent)] hover:border-[var(--brand-accent)] px-8 py-4 rounded-full font-semibold transition-colors">
            View All Work
          </a>
        </div>

      </div>
    </section>
  );
}
