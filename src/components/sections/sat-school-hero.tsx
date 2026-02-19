"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Exact Book Data from actualsaat.md
const booksData = [
  { id: 1, src: "https://framerusercontent.com/images/WdJtZFRz1a5uCspzEuvcPaLMHnQ.png?width=352&height=500 ", width: 352, height: 500, angle: 0 },
  { id: 2, src: "https://framerusercontent.com/images/j5yxyVe1iu9w0CySlM3LEa3Zpss.png?width=329&height=500 ", width: 329, height: 500, angle: 45 },
  { id: 3, src: "https://framerusercontent.com/images/AiHY69YkACiQQY2EgvfKvVOkrGw.png?width=270&height=500 ", width: 270, height: 500, angle: 90 },
  { id: 4, src: "https://framerusercontent.com/images/k42PNZ5dHw6E8vAVsvC8DDWAE4.png?width=329&height=500 ", width: 329, height: 500, angle: 135 },
  { id: 5, src: "https://framerusercontent.com/images/Re9q7l7CKkmAcr5LLd7NejdHqs.png?width=331&height=500 ", width: 331, height: 500, angle: 180 }, // -181 ~ 180
  { id: 6, src: "https://framerusercontent.com/images/HoTkmNxq3kU8tsYMhQ32ynbaqCo.png?width=323&height=500 ", width: 323, height: 500, angle: 225 },
  { id: 7, src: "https://framerusercontent.com/images/NGbEdh3cH7zSpi24rl4raehw72A.png?width=401&height=600 ", width: 401, height: 600, angle: 270 },
  { id: 8, src: "https://framerusercontent.com/images/hOEZAHOENY57BgnRVXf35nAclA.png?width=354&height=500 ", width: 354, height: 500, angle: 315 },
];

const NOISE_IMG = "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256 ";

const FramerBook = ({ src, width, height }: { src: string, width: number, height: number }) => {
  const depth = 44; // Matches translateZ(22px) + translateZ(-22px)

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: 'rotate(45deg) rotateX(-40deg) rotateY(-5deg)', // Exact book tilt
      }}
    >
      {/* Cover (Front) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateZ(${depth / 2}px)`, // 22px
          backfaceVisibility: 'hidden',
          borderRadius: '2px', // Slight rounding
          overflow: 'hidden',
          backgroundColor: '#fff', // fallback
        }}
      >
        <Image
          src={src}
          alt="Book Cover"
          fill
          className="object-cover"
          sizes={`${width}px`}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.4, // Subtle noise
            pointerEvents: 'none'
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-black/50 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Back */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateZ(-${depth / 2}px) rotateY(180deg)`, // -22px
          backgroundColor: '#1a1a1a', // Dark back cover
          backfaceVisibility: 'hidden',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.1,
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Right (Pages) - The visible page edge on the side */}
      <div
        style={{
          position: 'absolute',
          width: `${depth}px`,
          height: `${height}px`,
          right: 0,
          top: 0,
          transformOrigin: 'right',
          transform: 'rotateY(-90deg)',
          backgroundColor: '#f5f5f0', // Page color
          overflow: 'hidden'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.1,
          }}
        />
        {/* Page striations */}
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(0,0,0,0.03) 3px)' }} />
      </div>

      {/* Spine (Left) */}
      <div
        style={{
          position: 'absolute',
          width: `${depth}px`,
          height: `${height}px`,
          left: 0,
          top: 0,
          transformOrigin: 'left',
          transform: 'rotateY(90deg)',
          backgroundColor: '#111',
          overflow: 'hidden'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.2,
          }}
        />
        {/* Shine on spine */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Top (Pages) */}
      <div
        style={{
          position: 'absolute',
          width: `${width}px`,
          height: `${depth}px`,
          top: 0,
          left: 0,
          transformOrigin: 'top',
          transform: 'rotateX(-90deg)',
          backgroundColor: '#f5f5f0',
          overflow: 'hidden'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.1,
          }}
        />
      </div>

      {/* Bottom (Pages) */}
      <div
        style={{
          position: 'absolute',
          width: `${width}px`,
          height: `${depth}px`,
          bottom: 0,
          left: 0,
          transformOrigin: 'bottom',
          transform: 'rotateX(90deg)',
          backgroundColor: '#f5f5f0',
          overflow: 'hidden'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${NOISE_IMG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '153.5px',
            opacity: 0.1,
          }}
        />
      </div>
    </div>
  );
};

const SatSchoolHero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center min-h-screen" style={{ isolation: 'isolate' }}>

      {/* Container matching "Hero" wrapper layout */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 items-center h-full pt-20">

        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center relative z-20 pt-10 lg:pt-0 pl-4 lg:pl-0">

          {/* Headline */}
          <div className="mb-4">
            <h1 className="font-[var(--font-instrument-serif)] text-white text-[50px] md:text-[60px] lg:text-[68px] leading-[1.1] font-light tracking-[-0.03em]">
              Come to Get<br />
              Awe-Inspired
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            <h1 className="font-sans text-white text-[18px] font-medium tracking-normal leading-[1.3]">
              *Intellectually
            </h1>
          </div>

          {/* Description */}
          <div className="font-sans text-white text-[18px] md:text-[20px] font-medium tracking-normal mb-8 max-w-[450px] leading-[1.3]">
            <p>Find your tribe - Talk, Think and Network.</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mb-20 whitespace-nowrap">
            <a
              href="https://rzp.io/rzp/sWf80Lp "
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[60px] px-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <span className="font-sans text-black font-medium text-[16px] transition-colors">
                Read More
              </span>
            </a>
            <a
              href="https://rzp.io/rzp/sWf80Lp "
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[60px] px-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <span className="font-sans text-black font-medium text-[16px] transition-colors">
                I want to come!!
              </span>
            </a>
          </div>

          {/* Quote & Profile */}
          <div className="relative pl-6 border-l border-white/20 max-w-[480px]">
            <p className="font-[var(--font-instrument-serif)] text-white/90 text-[14px] leading-[1.6] italic mb-6">
              “I host Invite-only Sessions where we build intellectual competences to ignite the PolyMaths within us.
              <br /><br />
              Learn the Mental Models to become great Capital Allocators, think investors, Entrepreneurs or even Innovators and Builders”
            </p>

            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="https://framerusercontent.com/images/710veydyjYi2K9KDA8l6qn1kAtc.jpg "
                  alt="Neelmani Bagaria"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-sans text-white/90 text-[12px] font-medium">
                Neelmani Bagaria
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Books Animation */}
        <div
          className="relative h-[500px] lg:h-[700px] w-full"
        >
          {/* Arm Wrap - The main 3D oriented container, centered in right column */}
          <div
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1400px',
              transform: 'scale(0.5) rotateX(55deg)'
            }}
          >
            {/* ARMS - The spinning element */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {booksData.map((book) => {
                // Radius for the book orbit: Framer uses huge transforms, visually inferred as ~500-600px
                const radius = 550;

                return (
                  <div
                    key={book.id}
                    className="absolute top-0 left-0"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotate(${book.angle}deg) translateX(${radius}px)`,
                    }}
                  >
                    {/* Book Holder anchor point - Center the book at the "Arm" tip */}
                    <div className="relative -ml-[50%] -mt-[50%]" style={{ transformStyle: 'preserve-3d' }}>
                      <FramerBook src={book.src} width={book.width} height={book.height} />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Ambient depth gradient simulation */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default SatSchoolHero;