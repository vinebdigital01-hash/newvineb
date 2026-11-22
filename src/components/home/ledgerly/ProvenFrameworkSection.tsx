'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ArrowRight, Battery, Wifi, Signal } from 'lucide-react';

type Tab = 'Strategize' | 'Build' | 'Scale';

const tabs: Tab[] = ['Strategize', 'Build', 'Scale'];

const tabContent = {
  Strategize: {
    headline: 'Audit, architect, and align.',
    copy: 'We tear down your current funnels, analyze your market positioning, and map out a high-converting web architecture and ad strategy before a single line of code is written.',
    cta: 'Learn more',
  },
  Build: {
    headline: 'Engineered for speed and sales.',
    copy: 'Our developers and designers build blazing-fast landing pages, complex bespoke CRMs, and highly-optimized Shopify storefronts. We write clean code that converts.',
    cta: 'Learn more',
  },
  Scale: {
    headline: 'Turn on the traffic engine.',
    copy: 'With the foundation built, we unleash targeted Meta Ads, Google Ads, and local SEO campaigns. We optimize Amazon listings and scale dropshipping funnels to the moon.',
    cta: 'Learn more',
  }
};

export default function ProvenFrameworkSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Strategize');
  const [inView, setInView] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    if (phoneStageRef.current) {
      observer.observe(phoneStageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: Tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setBounceKey(prev => prev + 1); // Trigger bounce animation
    }
  };

  const handlePhoneClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1200);
  };

  const isReduced = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  return (
    <section className="bg-zinc-50 py-4 md:py-6 overflow-hidden" ref={sectionRef}>
      
      {/* Injecting user's complex keyframes and exact shadows */}
      <style dangerouslySetInnerHTML={{__html: `
        .phone-stage { perspective: 1700px; display: flex; justify-content: center; align-items: center; }
        .phone-wrap {
          transform-style: preserve-3d;
          transform: translateY(-660px) rotateY(180deg) rotateX(-10deg) rotateZ(-8deg) scale(.9);
          cursor: pointer;
        }
        .phone-wrap:hover {
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
        }
        .phone-wrap.reduced { transform: none !important; animation: none !important; }
        .phone-wrap.drop-anim { animation: dropFlip 1.55s cubic-bezier(.2,.65,.3,1) forwards; }
        
        @keyframes dropFlip {
          0%   { transform: translateY(-660px) rotateY(180deg) rotateX(-10deg) rotateZ(-8deg) scale(.9); }
          40%  { transform: translateY(-170px) rotateY(480deg) rotateX(6deg)   rotateZ(4deg)  scale(.96); }
          65%  { transform: translateY(42px)   rotateY(650deg) rotateX(-3deg)  rotateZ(-2deg) scale(1.02); }
          82%  { transform: translateY(-12px)  rotateY(705deg) rotateX(1.5deg) rotateZ(1deg)  scale(1); }
          100% { transform: translateY(0)      rotateY(720deg) rotateX(0deg)   rotateZ(0deg)  scale(1); }
        }

        .phone-wrap.bounce { animation: bounce 0.5s cubic-bezier(.34,1.56,.64,1) forwards; }
        @keyframes bounce {
          0% { transform: scale(1) translateY(0) rotate(0); }
          35% { transform: scale(1.018) translateY(-5px) rotate(-.6deg); }
          100% { transform: scale(1) translateY(0) rotate(0); }
        }

        .phone-wrap.spin-anim { animation: spinRound 1.2s cubic-bezier(.2,.8,.3,1) forwards; }
        @keyframes spinRound {
          0% { transform: scale(1) rotateY(0deg) rotateX(0deg); }
          50% { transform: scale(0.85) rotateY(180deg) rotateX(15deg); }
          100% { transform: scale(1) rotateY(360deg) rotateX(0deg); }
        }

        .phone-back-glass {
          background: linear-gradient(155deg,#2c2c2e 0%,#1c1c1e 55%,#101012 100%);
          box-shadow: inset 0 0 0 2px rgba(0,0,0,.6);
        }
        .phone-back-glass::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(115deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(255,255,255,.04) 100%);
          pointer-events: none;
        }

        .camera-module {
          background: linear-gradient(160deg,#232326,#131315);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.06), 0 6px 14px rgba(0,0,0,.4);
        }
        
        .cam-lens {
          background: radial-gradient(circle at 35% 30%, #4a5a6b, #0d1216 65%);
          box-shadow: inset 0 0 0 3px #05070a, inset 0 0 10px rgba(255,255,255,.08);
        }
        .cam-lens::after {
          content: ''; position: absolute; inset: 22%; border-radius: 50%;
          background: radial-gradient(circle at 40% 35%, rgba(120,170,255,.35), transparent 60%);
        }
        
        .flash-led { box-shadow: inset 0 0 0 2px #9a9b9f; }
        
        .back-brand {
          background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.16), transparent 65%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.1);
        }

        .screen-glass::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(115deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 78%, rgba(255,255,255,.05) 100%);
          pointer-events: none; z-index: 8;
        }

        .screen-flash { animation: flash .5s ease-out 1.05s forwards; }
        @keyframes flash { 0% { opacity: .95; } 100% { opacity: 0; } }
      `}} />

      <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl">
        
        {/* Header & Tabs */}
        <div className="flex flex-col items-center mb-3 lg:mb-5 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0b0b0d] tracking-tight leading-[1.12] mb-4">
            Our proven framework <br className="hidden md:block"/> for explosive growth.
          </h2>
          
          <div className="relative inline-flex bg-[rgba(10,10,12,.06)] p-1.5 rounded-full backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative px-5 py-2 text-[14px] font-semibold transition-colors outline-none rounded-full z-10 ${
                  activeTab === tab ? 'text-[#0b0b0d]' : 'text-[#6b6d74] hover:text-[#0b0b0d]'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="frameworkTabIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,.12),0_0_0_1px_rgba(0,0,0,.03)]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center max-w-5xl mx-auto">
          
          {/* Left Column: iPhone Mockup
               Strategy: outer box is exactly 222×480px (=296×640 × 0.75) which controls layout space.
               Phone inside is position:absolute + scale(0.75) from top-left so it fills that box visually.
               Section overflow:hidden clips the drop animation above the section boundary. */}
          <div className="shrink-0" ref={phoneStageRef}
            style={{ width: '222px', height: '480px', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0,
              transformOrigin: 'top left',
              transform: 'scale(0.75)'
            }}>
              <div 
                id="phoneWrap"
                key={isSpinning ? 'spin' : bounceKey}
                className={`relative w-[296px] h-[640px] phone-wrap ${
                  inView && !isReduced 
                    ? (isSpinning ? 'spin-anim' : (bounceKey > 0 ? 'bounce' : 'drop-anim')) 
                    : (isReduced ? 'reduced' : '')
                }`}
                onClick={handlePhoneClick}
                title="Click to spin!"
              >
                
                {/* Hardware Buttons */}
                <div className="absolute left-[-3px] top-[118px] w-[4px] h-[24px] bg-gradient-to-b from-[#d9dadd] to-[#8b8c90] rounded-[4px] shadow-[inset_0_0_1px_rgba(255,255,255,.6)] z-30" />
                <div className="absolute left-[-3px] top-[160px] w-[4px] h-[48px] bg-gradient-to-b from-[#d9dadd] to-[#8b8c90] rounded-[4px] shadow-[inset_0_0_1px_rgba(255,255,255,.6)] z-30" />
                <div className="absolute left-[-3px] top-[216px] w-[4px] h-[48px] bg-gradient-to-b from-[#d9dadd] to-[#8b8c90] rounded-[4px] shadow-[inset_0_0_1px_rgba(255,255,255,.6)] z-30" />
                
                <div className="absolute right-[-3px] top-[182px] w-[4px] h-[64px] bg-gradient-to-b from-[#d9dadd] to-[#8b8c90] rounded-[4px] shadow-[inset_0_0_1px_rgba(255,255,255,.6)] z-30" />

                {/* Back of Phone */}
                <div className="absolute inset-0 rounded-[48px] phone-back-glass flex justify-center backface-hidden" style={{ transform: 'translateZ(-1px) rotateY(180deg)' }}>
                  {/* Camera Module */}
                  <div className="absolute top-[24px] left-[24px] w-[116px] h-[122px] rounded-[28px] camera-module flex flex-wrap justify-between p-3">
                    <div className="w-[42px] h-[42px] rounded-full cam-lens relative" />
                    <div className="w-[42px] h-[42px] rounded-full cam-lens relative" />
                    <div className="w-[42px] h-[42px] rounded-full cam-lens relative" />
                    <div className="w-[18px] h-[18px] rounded-full flash-led absolute right-[32px] top-[52px] bg-gradient-to-br from-[#f8f9fa] to-[#d2d3d7]" />
                    <div className="w-[10px] h-[10px] rounded-full absolute right-[36px] bottom-[28px] bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,.1)]" />
                  </div>
                  
                  {/* Brand Logo (Apple Logo placeholder) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[40px] back-brand rounded-full" />
                </div>

                {/* Phone Front */}
                <div className="absolute inset-0 rounded-[58px] p-[4px] bg-gradient-to-br from-[#e2e3e5] via-[#75767a] to-[#e8e9eb] shadow-[0_42px_70px_-24px_rgba(0,0,0,.5),0_14px_24px_-10px_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.5)] backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="screen-glass relative w-full h-full bg-[#08080a] rounded-[55px] overflow-hidden shadow-[inset_0_0_0_2px_rgba(0,0,0,.6)]">
                    
                    {/* Screen Flash Sequence */}
                    {inView && !isReduced && <div className="screen-flash absolute inset-0 bg-white z-[7] pointer-events-none" />}

                    {/* Dynamic Island */}
                    <motion.div 
                      initial={isReduced ? { opacity: 1 } : { opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: isReduced ? 0 : 1.25, duration: 0.5 }}
                      className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-black rounded-[20px] z-[6]"
                    >
                       <div className="absolute right-[14px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#141a24] shadow-[inset_0_0_0_1px_#2a3542]" />
                    </motion.div>

                    {/* Status Bar */}
                    <motion.div 
                      initial={isReduced ? { opacity: 1 } : { opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: isReduced ? 0 : 1.35, duration: 0.5 }}
                      className="absolute top-[15px] left-0 right-0 z-[6] flex justify-between items-center px-6 h-[24px] text-white text-[13px] font-semibold tracking-[-0.01em]"
                    >
                      <span>9:41</span>
                      <span className="flex items-center gap-[5px]">
                        <Signal className="w-3.5 h-3.5 text-white fill-white" />
                        <Wifi className="w-3.5 h-3.5 text-white" />
                        <Battery className="w-[18px] h-[18px] text-white fill-white opacity-90" />
                      </span>
                    </motion.div>

                    {/* App Content Area */}
                    <div className="absolute inset-x-0 bottom-0 top-[52px] pt-5 px-4 pb-[22px] z-[5]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.4, ease: 'easeOut', delay: (inView && !isReduced && activeTab === 'Strategize') ? 1.4 : 0 }}
                          className="w-full h-full flex flex-col"
                        >
                          {activeTab === 'Strategize' && <AuditScreen inView={inView} isReduced={isReduced} />}
                          {activeTab === 'Build' && <PerformanceScreen />}
                          {activeTab === 'Scale' && <LiveScreen />}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="flex-1 flex flex-col justify-center pl-4 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, position: 'absolute' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h3 className="text-[36px] font-bold text-[#0b0b0d] mb-[16px] tracking-[-0.02em] font-tight">
                  {tabContent[activeTab].headline}
                </h3>
                <p className="text-[17px] text-[#6b6d74] leading-[1.7] mb-[28px] max-w-[460px]">
                  {tabContent[activeTab].copy}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#0b0b0d] font-semibold text-[15px] group outline-none focus-visible:ring-2 focus-visible:ring-[#0b0b0d] rounded-sm"
                >
                  {tabContent[activeTab].cta}
                  <ArrowRight className="w-4 h-4 ml-[7px] transform transition-transform group-hover:translate-x-[3px]" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-components for screen content

function AuditScreen({ inView, isReduced }: { inView: boolean, isReduced: boolean }) {
  const items = [
    { title: 'Funnel audit — checkout flow', subtitle: '14 screens mapped · exported to Figma', status: 'done' },
    { title: 'Competitor positioning report', subtitle: '6 competitors benchmarked', status: 'done' },
    { title: 'Ad + sitemap architecture', subtitle: 'Meta, Google & SEO structure', status: 'review' },
  ];

  return (
    <>
      <div className="flex flex-col gap-[2px] mb-4">
        <span className="text-[10.5px] text-[#8b8c92] font-semibold tracking-[0.02em]">VINE / AUDIT · SOLSTICE SKINCARE</span>
        <span className="text-[16px] text-[#f2f2f3] font-bold tracking-[-0.01em]">Discovery workspace</span>
      </div>

      <div className="space-y-[9px]">
        {items.map((item, i) => (
          <motion.div 
            initial={isReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isReduced ? 0 : (inView ? 1.5 + (i * 0.07) : i * 0.07), duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            key={i} 
            className="bg-[#141417] p-[11px_12px] rounded-[14px] border border-[#1f1f23] flex items-center gap-[11px]"
          >
            <div className="w-[30px] h-[30px] rounded-[9px] bg-[#1e1e22] flex items-center justify-center shrink-0">
               <Target className="w-3.5 h-3.5 text-[#a9abb3]" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-[12.5px] font-semibold text-[#eaeaec] tracking-[-0.01em] whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</h5>
              <p className="text-[10.5px] text-[#7b7c82] mt-[2px] whitespace-nowrap overflow-hidden text-ellipsis">{item.subtitle}</p>
            </div>
            <div className="flex items-center gap-[5px] shrink-0">
               <div className={`w-[7px] h-[7px] rounded-full ${item.status === 'done' ? 'bg-[#1fae63] shadow-[0_0_0_3px_rgba(31,174,99,.18)]' : 'bg-[#d99a1b] shadow-[0_0_0_3px_rgba(217,154,27,.18)]'}`} />
               <span className="text-[9.5px] text-[#8b8c92] font-semibold">{item.status === 'done' ? 'Done' : 'Review'}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function PerformanceScreen() {
  const bars = [96, 94, 99, 89, 99, 95, 92];
  const labels = ['Home', 'PDP', 'Check', 'Blog', 'Land', 'Cart', 'Acct'];

  return (
    <>
      <div className="flex flex-col gap-[2px] mb-4">
        <span className="text-[10.5px] text-[#8b8c92] font-semibold tracking-[0.02em]">VINE / PERFORMANCE</span>
        <span className="text-[16px] text-[#f2f2f3] font-bold tracking-[-0.01em]">Lighthouse scores</span>
      </div>

      <div className="bg-[#141417] border border-[#1f1f23] rounded-[16px] p-[16px_14px_14px] mb-[12px]">
        <div className="flex justify-between items-end h-[150px] px-[2px]">
          {bars.map((score, i) => (
            <div key={i} className="flex flex-col items-center gap-[5px] w-[13%]">
              <span className="text-[9px] text-[#8b8c92] font-bold">{score}</span>
              <div className="h-[104px] w-full flex items-end justify-center">
                <motion.div 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.06) }}
                  className="w-[18px] rounded-[5px_5px_2px_2px] bg-gradient-to-b from-[#5b93ff] to-[#1d4ed8] shadow-[inset_0_0_0_1px_rgba(255,255,255,.1)] origin-bottom"
                  style={{ height: `${score}%` }}
                />
              </div>
              <span className="text-[8.5px] text-[#6a6b70]">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#111114] border border-[#1f1f23] rounded-[16px] p-[14px_16px]">
        <div>
          <div className="text-[10.5px] text-[#8b8c92] font-semibold mb-[4px]">Page speed score</div>
          <div className="text-[20px] text-white font-bold tracking-[-0.02em]">99 / 100</div>
        </div>
        <div className="text-[12px] text-[#1fae63] font-bold bg-[#1fae631f] px-[9px] py-[5px] rounded-[8px]">
          +42% faster
        </div>
      </div>
    </>
  );
}

function LiveScreen() {
  return (
    <>
      <div className="flex flex-col gap-[2px] mb-4">
        <span className="text-[10.5px] text-[#8b8c92] font-semibold tracking-[0.02em]">VINE / CAMPAIGNS</span>
        <span className="text-[16px] text-[#f2f2f3] font-bold tracking-[-0.01em]">Live performance</span>
      </div>

      <div className="bg-gradient-to-b from-[#1fae6323] to-[#1fae630c] border border-[#1fae6359] rounded-[16px] p-[16px] mb-[12px]">
        <div className="flex items-center gap-[6px] text-[11px] font-bold text-[#1fae63] mb-[10px] uppercase tracking-[0.03em]">
          <motion.span 
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-[6px] h-[6px] rounded-full bg-[#1fae63]" 
          /> 
          Live campaign status
        </div>
        <h5 className="text-[15.5px] font-bold text-white tracking-[-0.01em] mb-[6px]">ROAS is up 3.4x this week</h5>
        <p className="text-[11.5px] text-[#a7b3ad] leading-[1.4] mb-[12px]">Ad spend efficiency has improved since the new landing page deployment.</p>
        <button className="inline-flex items-center gap-[6px] bg-[#1fae63] text-[#04150b] text-[12px] font-bold px-[14px] py-[9px] rounded-[10px]">
          View analytics
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="flex gap-[10px]">
        <div className="flex-1 bg-[#141417] border border-[#1f1f23] rounded-[14px] p-[11px_12px]">
          <div className="text-[9.5px] text-[#8b8c92] font-semibold mb-[5px]">Ad spend</div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-bold text-white">$12,480</span>
            <span className="text-[10px] text-[#1fae63] font-bold">↑18%</span>
          </div>
          <svg className="mt-[6px] w-full" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
            <polyline points="0,16 15,14 30,15 45,9 60,10 75,5 100,3" fill="none" stroke="#1fae63" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="flex-1 bg-[#141417] border border-[#1f1f23] rounded-[14px] p-[11px_12px]">
          <div className="text-[9.5px] text-[#8b8c92] font-semibold mb-[5px]">Conversions</div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-bold text-white">842</span>
            <span className="text-[10px] text-[#1fae63] font-bold">↑24%</span>
          </div>
          <svg className="mt-[6px] w-full" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
            <polyline points="0,17 15,13 30,14 45,8 60,9 75,4 100,2" fill="none" stroke="#1fae63" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </>
  );
}

