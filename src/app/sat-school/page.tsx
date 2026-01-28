import Navbar from "@/components/sections/navbar";
import SatSchoolHero from "@/components/sections/sat-school-hero";
import BookComposition from "@/components/sections/book-composition";
import BioQuote from "@/components/sections/bio-quote";
import CtaBanner from "@/components/sections/cta-banner";
import FooterSatSchool from "@/components/sections/footer-sat-school";

export default function SatSchoolPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SatSchoolHero />
      <div className="container mx-auto px-6 relative z-10 -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            {/* The text content is already in SatSchoolHero, 
                but BioQuote can be placed here if it's separate */}
            <BioQuote />
          </div>
          <div className="lg:col-span-6 hidden lg:block">
            <BookComposition />
          </div>
        </div>
      </div>
      <CtaBanner />
      <FooterSatSchool />
    </main>
  );
}
