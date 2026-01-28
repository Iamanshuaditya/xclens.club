import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // Assets mapped from the provided list
  const bgMountains = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/pZasYjdU5uyeteUs7SDxSSOuXwc-1.png";
  const bgMist = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/5WZyS0IjIwGgUzZVvNrwjLW5BY-2.png";
  const bgTreeForeground = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wL4H4qgQ3dQ3uX4GRQOjYk0kQ-3.png";

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden flex flex-col items-center justify-start text-center pt-[140px]">
      {/* Layered Background System */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Layer 1: Background Mountains & Sky */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgMountains}
            alt="Landscape background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Layer 2: Middle Mist/Atmosphere */}
        <div className="absolute inset-0 w-full h-full opacity-90">
          <Image
            src={bgMist}
            alt="Atmospheric mist"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Layer 3: Foreground Cliff with Orange Tree */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgTreeForeground}
            alt="Prominent orange tree on cliff"
            fill
            priority
            className="object-cover object-bottom scale-105"
            sizes="100vw"
          />
        </div>
        
        {/* Light Overlay for Legibility */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 60%)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container flex flex-col items-center px-6">
        <div className="max-w-[800px] mb-8">
          <h1 className="font-display text-[80px] font-semibold leading-[1.1] text-[#000000] tracking-tight mb-8">
            From Overwhelm <br />
            to Breakthrough
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://cal.com/flamby/x"
            className="btn-pill bg-black text-white hover:opacity-90 min-w-[180px]"
          >
            Start your journey
          </a>
          <a
            href="/sat-school"
            className="btn-pill bg-white text-black border border-[#E5E5E5] hover:bg-[#f9f9f9] min-w-[130px]"
          >
            Sat School
          </a>
        </div>
      </div>

      {/* Decorative Gradients for UI Integration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;