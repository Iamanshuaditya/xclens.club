import React from 'react';
import Image from 'next/image';

export default function CtaFooter() {
  const ctaBgImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/d2uBbkp0Rt0I4a1wRFyW2hKrQE-12.jpg";

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col overflow-hidden">
      {/* Background Image - spans entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaBgImage}
          alt="Dramatic landscape with orange tree"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Top dark gradient for navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        {/* Bottom heavy black gradient for footer legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent" />
      </div>

      {/* CTA Content - centered in upper area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-[800px] flex flex-col items-center gap-8">
          <h2 className="font-display text-white text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em]">
            Start your journey<br />toward lasting growth.
          </h2>

          <a
            href="https://cal.com/flamby/x"
            className="bg-white text-black font-sans font-semibold text-[16px] px-8 py-[14px] rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Take the first step now
          </a>
        </div>
      </div>

      {/* Footer Content - sitting on the dark gradient at bottom */}
      <footer className="relative z-10 w-full px-6 md:px-12 pb-12 pt-24">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-start">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[14px] font-medium text-white/60">
              Have a question? Email me at
            </p>
            <a
              href="mailto:neelmani@xcelens.club"
              className="font-display text-[24px] md:text-[28px] text-white hover:text-white/70 transition-colors"
            >
              neelmani@xcelens.club
            </a>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex flex-col gap-8 md:text-right">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-left md:text-right">
              <div className="flex flex-col gap-4">
                <span className="text-xs text-white/40 uppercase tracking-widest font-sans">Company</span>
                <a href="/" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Home</a>
                <a href="/about" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">About</a>
                <a href="/services" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Services</a>
                <a href="/blog" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Blog</a>
                <a href="/contact" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs text-white/40 uppercase tracking-widest font-sans">Programs</span>
                <a href="/si-fellowship" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Fellowship</a>
                <a href="/labs" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Labs</a>
                <a href="/sat-school" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Sat School</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs text-white/40 uppercase tracking-widest font-sans">Community</span>
                <a href="/workshops" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Workshops</a>
                <a href="/clubs" className="font-display text-[20px] text-white hover:text-white/70 transition-colors">Clubs</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1200px] mx-auto w-full mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[12px] text-white/40">
            &copy; 2026 Xcelens All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-sans text-[12px] text-white/40 hover:text-white/60 transition-colors">Privacy</a>
            <a href="/cookies" className="font-sans text-[12px] text-white/40 hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
