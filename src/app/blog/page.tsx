import Navbar from "@/components/sections/navbar";
import BlogHero from "@/components/sections/blog-hero";
import TrendingArticles from "@/components/sections/trending-articles";
import AllArticles from "@/components/sections/all-articles";
import CtaFooter from "@/components/sections/cta-footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogHero />
      <TrendingArticles />
      <AllArticles />
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
