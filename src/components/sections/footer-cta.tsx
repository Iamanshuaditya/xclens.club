import React from 'react';
import Image from 'next/image';

/**
 * FooterCTA Component
 * Clones the pre-footer call-to-action section with the "Start your journey toward lasting growth" 
 * headline and white pill button over a cinematic dark forest and lake landscape background.
 * Theme: Light (but this specific section is visually dark as per design instructions)
 */
const FooterCTA: React.FC = () => {
  // Asset from the provided list
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/d2uBbkp0Rt0I4a1wRFyW2hKrQE-4.jpg";

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Dark forest and lake landscape"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="select-none"
        />
        {/* Cinematic Overlay as per High Level Design: rgba(0,0,0,0.4) */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
      </div>

      {/* Modern Serene Architectural Grid Lines (Vertical) */}
      <div className="absolute inset-0 pointer-events-none z-[2] flex justify-center">
        <div className="w-full max-w-[1200px] h-full flex justify-between px-[40px]">
          <div className="w-px h-full bg-white/10" />
          <div className="w-px h-full bg-white/10" />
          <div className="w-px h-full bg-white/10" />
          <div className="w-px h-full bg-white/10" />
          <div className="w-px h-full bg-white/10" />
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative z-[3] flex flex-col items-center text-center">
        <div className="max-w-[800px] flex flex-col items-center gap-10">
          <h2 className="text-white font-display text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em]">
            Start your journey toward lasting growth.
          </h2>
          
          <a 
            href="https://cal.com/flamby/x"
            className="group flex items-center"
          >
            <div className="bg-white text-black px-8 py-[14px] rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-sm">
              Take the first step now
            </div>
          </a>
        </div>
      </div>

      {/* Subtle Bottom Gradient Fade to pure black (for smooth transition to Main Footer) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[4]" />
    </section>
  );
};

export default FooterCTA;