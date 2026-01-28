import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  // Asset found in the provided <assets> tag
  const heroImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/EhuG74CStbxIw5e7LrBaklPUrs-1.png";

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Panoramic mountain landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle overlay for text legibility if needed, based on typical editorial design */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Grid Lines - Replicating the "Editorial Minimalist" grid system */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="container h-full relative mx-auto px-6 max-w-[1200px]">
          <div className="absolute left-0 top-0 w-px h-full bg-white/10" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-white/10" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-white/10" />
          <div className="absolute left-3/4 top-0 w-px h-full bg-white/10" />
          <div className="absolute right-0 top-0 w-px h-full bg-white/10" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-[1200px] flex flex-col items-center text-center">
        <h1 className="font-display text-white mb-6 tracking-tight leading-[1.1] text-[48px] md:text-[72px] lg:text-[100px]">
          About Me
        </h1>
        <p className="font-sans text-white/90 text-[16px] md:text-[18px] max-w-[500px] mx-auto leading-[1.6]">
          After years of coaching and research, I’ve developed a clear framework that empowers you.
        </p>
      </div>

      {/* Bottom Masking Effect for Seamless Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent z-20" />
    </section>
  );
};

export default AboutHero;