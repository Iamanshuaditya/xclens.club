"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Book data with cover images
 */
const booksData = [
  { id: 1, src: "https://framerusercontent.com/images/WdJtZFRz1a5uCspzEuvcPaLMHnQ.png", alt: "Elon Musk", color: "#272c1b" },
  { id: 2, src: "https://framerusercontent.com/images/NGbEdh3cH7zSpi24rl4raehw72A.png", alt: "Ego is the Enemy", color: "#d3252b" },
  { id: 3, src: "https://framerusercontent.com/images/AiHY69YkACiQQY2EgvfKvVOkrGw.png", alt: "Jony Ive", color: "#0c181b" },
  { id: 4, src: "https://framerusercontent.com/images/k42PNZ5dHw6E8vAVsvC8DDWAE4.png", alt: "Seeking Wisdom", color: "#b9cac2" },
  { id: 5, src: "https://framerusercontent.com/images/Re9q7l7CKkmAcr5LLd7NejdHqs.png", alt: "Naval Ravikant", color: "#ffef00" },
  { id: 6, src: "https://framerusercontent.com/images/HoTkmNxq3kU8tsYMhQ32ynbaqCo.png", alt: "Lessons of History", color: "#fff" },
  { id: 7, src: "https://framerusercontent.com/images/hOEZAHOENY57BgnRVXf35nAclA.png", alt: "Principles", color: "#020404" },
  { id: 8, src: "https://framerusercontent.com/images/j5yxyVe1iu9w0CySlM3LEa3Zpss.png", alt: "The Snowball", color: "#022e4a" },
];

/**
 * 3D Book component - renders a realistic book with cover, spine, page edges
 */
const Book3D = ({ src, alt, color }: { src: string; alt: string; color: string }) => {
  const SPINE_W = 30;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {/* Front Cover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backfaceVisibility: 'hidden',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="450px"
          unoptimized
        />
        {/* Light overlay for realism */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          mixBlendMode: 'overlay', opacity: 0.2,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
        }} />
        {/* Spine edge effect on left */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          mixBlendMode: 'overlay',
          background: 'linear-gradient(90deg, #fff 0%, #000 2% 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)',
        }} />
        {/* Darken blend for spine crease */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          mixBlendMode: 'darken', opacity: 0.51,
          background: 'linear-gradient(90deg, #fff 0%, #000 2%, rgba(0,0,0,0.42) 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)',
        }} />
      </div>

      {/* Spine (left edge) */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `-${SPINE_W / 2}px`,
        width: `${SPINE_W}px`, zIndex: 1,
        transformOrigin: 'right center',
        transform: 'rotateY(-90deg)',
        backgroundColor: color,
        filter: 'brightness(0.35)',
      }} />

      {/* Pages - right edge */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: '-10px',
        width: '44px', zIndex: 1,
        backgroundColor: '#ededed',
        overflow: 'hidden',
      }} />

      {/* Top page edge */}
      <div style={{
        position: 'absolute', top: '-22px', left: 0, right: '12px',
        height: '44px', zIndex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
      }} />

      {/* Bottom page edge */}
      <div style={{
        position: 'absolute', bottom: '-22px', left: 0, right: '12px',
        height: '44px', zIndex: 1,
        backgroundColor: '#485254',
        overflow: 'hidden',
      }} />

      {/* Hue overlay for book tint */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        backgroundColor: color,
        mixBlendMode: 'hue',
        overflow: 'hidden',
      }} />
    </div>
  );
};

/**
 * SatSchoolHero - Ferris wheel style book carousel
 *
 * The original Framer design uses:
 * 1. A large container (2002px tall) positioned over the hero
 * 2. A hub at center that spins (rotate: 0→360 via loop animation)
 * 3. 8 arms radiating outward (450px each), each holding a 3D book
 * 4. The whole thing is tilted with scale(0.5) rotate(47deg) rotateX(29deg) rotateY(-70deg)
 *    on the arm wrappers, creating the 3D depth perspective
 * 5. A diagonal mask hides the bottom-left portion
 * 
 * The visual result: Books appear to orbit in a 3D oval path - 
 * coming toward the viewer on one side and receding on the other.
 */
const SatSchoolHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const NUM_BOOKS = booksData.length;
  const ARM_LENGTH = 500; // distance from center to book

  return (
    <section className="relative w-full bg-black overflow-hidden min-h-screen">

      {/* ===== Text Content (absolute positioned for full control) ===== */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 h-full flex items-center">
          <div className="max-w-[480px] pointer-events-auto">
            {/* Headline */}
            <h1
              className="text-white leading-[1.1] font-light tracking-[-0.03em] mb-4"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(2.5rem, 4.5vw, 4.25rem)',
              }}
            >
              Come to Get<br />
              Awe-Inspired
            </h1>

            <p className="text-white text-lg font-medium leading-[1.3] mb-6 font-sans">
              *Intellectually
            </p>

            <p className="text-white text-lg font-medium leading-[1.3] mb-8 font-sans">
              Find your tribe - Talk, Think and Network.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-4 mb-14 flex-wrap">
              <a
                href="https://rzp.io/rzp/sWf80Lp"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105"
              >
                <span className="text-black font-medium text-[15px] font-sans">Read More</span>
              </a>
              <a
                href="https://rzp.io/rzp/sWf80Lp"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105"
              >
                <span className="text-black font-medium text-[15px] font-sans">I want to come!!</span>
              </a>
            </div>

            {/* Quote */}
            <div className="relative pl-5 border-l border-white/20 max-w-[420px]">
              <p className="text-white/60 text-[13px] leading-relaxed mb-3 font-sans">
                &quot;I host Invite-only Sessions where we build intellectual competences
                to ignite the PolyMaths within us.
              </p>
              <p className="text-white/60 text-[13px] leading-relaxed mb-4 font-sans">
                Learn the Mental Models to become great Capital Allocators,
                think investors, Entrepreneurs or even Innovators and Builders&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7 rounded-full overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/710veydyjYi2K9KDA8l6qn1kAtc.jpg"
                    alt="Neelmani Bagaria"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="text-white/90 text-[13px] font-medium font-sans">
                  Neelmani Bagaria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 3D Book Carousel (Ferris Wheel) ===== */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Large carousel container - mimics original 2002px tall stage */}
        <div
          style={{
            position: 'absolute',
            width: '90%',
            height: '2002px',
            // Center the wheel to the right of the page
            top: 'calc(50% - 1001px)',
            left: '55%',
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* The spinning hub - this is what actually rotates */}
          <div
            style={{
              position: 'relative',
              width: '100px',
              height: '100%',
              transformStyle: 'preserve-3d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: mounted ? 'bookWheelSpin 50s linear infinite' : 'none',
            }}
          >
            {/* 8 arms radiating from center, each holding a book */}
            {booksData.map((book, i) => {
              const angleDeg = (360 / NUM_BOOKS) * i;

              return (
                <div
                  key={book.id}
                  style={{
                    position: 'absolute',
                    width: `${ARM_LENGTH}px`,
                    height: '1px',
                    transformStyle: 'preserve-3d',
                    // Each arm points outward at its angle
                    transform: `rotate(${angleDeg}deg)`,
                    transformOrigin: 'left center',
                    left: '50%',
                    top: '50%',
                  }}
                >
                  {/* Book at the end of the arm */}
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      width: '450px',
                      height: '640px',
                      transform: `translateY(-50%) rotate(${-angleDeg}deg) scale(0.85) rotate(47deg) rotateX(29deg) rotateY(-70deg)`,
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                    }}
                  >
                    <Book3D src={book.src} alt={book.alt} color={book.color} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle diagonal mask to fade lower-left books */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background: 'black',
          mask: 'linear-gradient(135deg, transparent 0%, transparent 45%, black 65%)',
          WebkitMask: 'linear-gradient(135deg, transparent 0%, transparent 45%, black 65%)',
        }}
      />

      {/* Left fade gradient for text readability */}
      <div
        className="absolute inset-0 z-[15] pointer-events-none"
        style={{
          background: `linear-gradient(to right, 
            rgba(0,0,0,0.95) 0%, 
            rgba(0,0,0,0.8) 25%, 
            rgba(0,0,0,0.3) 42%, 
            transparent 55%
          )`,
        }}
      />

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes bookWheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default SatSchoolHero;