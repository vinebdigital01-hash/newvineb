import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import ServicesSection from "@/components/home/ServicesSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import {
  LedgerlyHero,
  TrustStrip,
  ProductCapabilities,
  SecuritySection,
  UseCasesSection,
  LedgerlyTestimonials,
  FAQSection,
  FinalCTASection,
  GlobalPresenceSection,
  ProvenFrameworkSection,
} from "@/components/home/ledgerly";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 bg-[var(--brand-dark)]">
        <HeroSection />
        <VideoSection />
        <ServicesSection />
        <MarqueeSection />
      </div>
      
      {/* Ledgerly Sections */}
      <div className="relative z-10">
        <LedgerlyHero />
        <TrustStrip />
      </div>

      <div className="relative z-10">
        <ProductCapabilities />
        <ProvenFrameworkSection />
        <SecuritySection />
        <GlobalPresenceSection />
        <UseCasesSection />
        <LedgerlyTestimonials />
        <FAQSection />
        <FinalCTASection />
      </div>
    </main>
  );
}
