import React from 'react';
import Image from 'next/image';

/**
 * CTABanner Component
 * 
 * Features a large cinematic background image of an autumn tree by a lake,
 * high-contrast serif typography, and a pill-shaped primary CTA button.
 * 
 * Theme: Dark
 * Assets: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/d2uBbkp0Rt0I4a1wRFyW2hKrQE-10.jpg
 */

const CTABanner = () => {
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/d2uBbkp0Rt0I4a1wRFyW2hKrQE-10.jpg";

  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Autumn tree by a lake"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Top Gradient for transition from previous section */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-[1200px] mx-auto pt-20">
        <h2 className="font-display text-white mb-8 max-w-[800px]" style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: '1.1', letterSpacing: '-0.01em' }}>
          Start your journey toward lasting growth.
        </h2>
        
        <div className="mt-4">
          <a
            href="#"
            className="btn-pill btn-pill-primary inline-flex items-center justify-center bg-white text-black font-semibold rounded-full px-8 py-3 transition-transform duration-200 hover:scale-105"
            style={{ 
              fontSize: '15px',
              fontFamily: 'var(--font-sans)',
              minWidth: '200px'
            }}
          >
            Take the first step now
          </a>
        </div>
      </div>

      {/* Decorative Blur / Edge Fade (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default CTABanner;