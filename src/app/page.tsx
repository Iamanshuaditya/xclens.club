import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProcessSection from "@/components/sections/process";
import ServicesSection from "@/components/sections/services";
import BlogPreview from "@/components/sections/blog-preview";
import CtaFooter from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <BlogPreview />
      <CtaFooter />
      
      {/* Background Vertical Grid Lines - Matching the high-level design */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
        <div className="grid-guide grid-guide-1" />
        <div className="grid-guide grid-guide-2" />
        <div className="grid-guide grid-guide-3" />
        <div className="grid-guide grid-guide-4" />
      </div>
    </main>
  );
}
