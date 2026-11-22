"use client"
import React from 'react'
import StaggeredGrid, { BentoItem } from '@/components/ui/staggered-grid'
import { Sparkles, Zap, Gauge, Target, Shield, MonitorPlay, Layers, Eye, Code, Flame } from 'lucide-react'

const imagesData: string[] = [
    "/bento_web_experience_1784821364703.jpg",
    "/bento_product_design_1784821374070.jpg",
    "/bento_commerce_1784821385431.jpg",
];

// Core Deliverables (Central Bento Group)
const bentoItemsData: BentoItem[] = [
    {
        id: 1,
        title: "Immersive Web Experiences",
        subtitle: "WebGL, GSAP, & Award-winning Sites",
        description: "Engaging 3D websites.",
        icon: <MonitorPlay className="w-6 h-6" />,
        image: "/bento_web_experience_1784821364703.jpg"
    },
    {
        id: 2,
        title: "Scalable Product Design",
        subtitle: "SaaS Platforms & Mobile Apps",
        description: "Building SaaS products that scale.",
        icon: <Layers className="w-6 h-6" />,
        image: "/bento_product_design_1784821374070.jpg"
    },
    {
        id: 3,
        title: "High-Conversion Commerce",
        subtitle: "Headless Shopify & Premium Webflow",
        description: "Premium eCommerce experiences.",
        icon: <Target className="w-6 h-6" />,
        image: "/bento_commerce_1784821385431.jpg"
    }
];

export default function CraftSection() {
    return (
        <section className="relative w-full bg-[var(--brand-dark)] text-white z-10 py-[80px]">
            <div className="container mx-auto px-[16px] md:px-0 text-center">
                {/* 
                <StaggeredGrid
                    centerText="THE CRAFT"
                    images={imagesData}
                    bentoItems={bentoItemsData}
                    showFooter={false}
                /> 
                */}
                <h2 className="text-2xl text-zinc-500 uppercase tracking-widest font-bold">The Craft (Grid Hidden)</h2>
            </div>
        </section>
    )
}
