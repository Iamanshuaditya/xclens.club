import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  // Asset from the provided list
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/e6v2jehngEj2cKlbvzPHaHI4JO8-1.png";

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Scenic mountain landscape with trees"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* hero-overlay as per globals.css or editorial guidelines */}
        <div className="absolute inset-0 bg-black/40 hero-overlay" />
      </div>

      {/* Vertical Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none container mx-auto flex justify-between px-10">
        <div className="w-[1px] h-full bg-[#E5E5E5] opacity-20" />
        <div className="w-[1px] h-full bg-[#E5E5E5] opacity-20" />
        <div className="w-[1px] h-full bg-[#E5E5E5] opacity-20" />
        <div className="w-[1px] h-full bg-[#E5E5E5] opacity-20" />
        <div className="w-[1px] h-full bg-[#E5E5E5] opacity-20" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[800px] mx-auto">
        <h1 className="font-display text-white text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] mb-6 tracking-[-0.01em]">
          Get In Touch
        </h1>
        <p className="font-sans text-white/90 text-[18px] md:text-[20px] leading-[1.6] max-w-[600px] mx-auto text-balance">
          Have questions or want to get started? Drop me a line below and I’ll reply as soon as I can.
        </p>
      </div>

      {/* Bottom fade for smooth transition to next section if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5]/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactHero;