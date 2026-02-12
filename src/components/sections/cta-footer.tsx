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
      <footer className="relative z-10 w-full px-6 md:px-12 pb-10 pt-24">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
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

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 md:gap-10">
            <a href="/" className="font-display text-[20px] md:text-[24px] text-white hover:text-white/70 transition-colors">Home</a>
            <a href="/about" className="font-display text-[20px] md:text-[24px] text-white hover:text-white/70 transition-colors">About</a>
            <a href="/blog" className="font-display text-[20px] md:text-[24px] text-white hover:text-white/70 transition-colors">Blog</a>
            <a href="/contact" className="font-display text-[20px] md:text-[24px] text-white hover:text-white/70 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
