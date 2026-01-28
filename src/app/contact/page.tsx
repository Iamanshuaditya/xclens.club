import Navbar from "@/components/sections/navbar";
import ContactHero from "@/components/sections/contact-hero";
import ContactForms from "@/components/sections/contact-forms";
import CtaFooter from "@/components/sections/cta-footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <ContactForms />
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
