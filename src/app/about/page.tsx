import Navbar from "@/components/sections/navbar";
import AboutHero from "@/components/sections/about-hero";
import AboutOverview from "@/components/sections/about-overview";
import GuidedCoaching from "@/components/sections/guided-coaching";
import CtaFooter from "@/components/sections/cta-footer";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutOverview />
      <WhyChooseUs />
      <GuidedCoaching />
      <CtaFooter />

      {/* Background Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
        <div className="grid-guide grid-guide-1" />
        <div className="grid-guide grid-guide-2" />
        <div className="grid-guide grid-guide-3" />
        <div className="grid-guide grid-guide-4" />
      </div>
    </main>
  );
}
