import React from 'react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0C0B]">
      {/* Background Container */}
      <div className="relative h-[640px] w-full md:h-[720px] lg:h-[800px]">
        {/* Background Image: cinematic landscape with a tree on a hill */}
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/d2uBbkp0Rt0I4a1wRFyW2hKrQE-12.jpg"
            alt="Cinematic landscape with a golden tree on a hill"
            fill
            className="object-cover object-center brightness-[0.4] contrast-[1.1]"
            priority
          />
          {/* Gradient Overlay for bottom transition to footer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* Content Overlay */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="max-w-[800px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="mb-10 font-display text-[42px] leading-[1.1] text-white md:text-[56px] lg:text-[72px]">
              Start your journey toward lasting growth.
            </h2>
            
            <div className="flex justify-center">
              <a
                href="https://cal.com/flamby/x"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 transition-all duration-300 hover:bg-[#F2F3F4] active:scale-95"
              >
                <span className="relative font-sans text-[16px] font-semibold tracking-tight text-black">
                  Take the first step now
                </span>
                
                {/* Subtle hover reflection effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Horizontal Divider Lines (Visual Guides Matching Site Style) */}
        <div className="absolute bottom-0 left-0 right-0 h-px w-full bg-white/10" />
      </div>

      {/* Decorative vertical grid line matching high-level design if needed for continuity */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-6 md:px-24 opacity-5">
        <div className="h-full w-px bg-white" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="hidden h-full w-px bg-white lg:block" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="h-full w-px bg-white" />
      </div>
    </section>
  );
};

export default CTASection;