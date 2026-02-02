"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Assets
  const bgMountains = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/pZasYjdU5uyeteUs7SDxSSOuXwc-1.png";
  const bgMist = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/5WZyS0IjIwGgUzZVvNrwjLW5BY-2.png";
  const bgTreeForeground = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wL4H4qgQ3dQ3uX4GRQOjYk0kQ-3.png";

  // Animation Configuration (timing matched to video)
  const bgTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as const // Smooth ease-out cubic
  };

  const treeTransition = {
    delay: 0.5, // Starts after background begins settling
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
    mass: 0.8
  };

  const textTransition = {
    delay: 1.0, // Starts after tree settles (approx 1.0s mark)
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  };

  const buttonContainerTransition = {
    delayChildren: 1.0, // Sync with text appearance
    staggerChildren: 0.1
  };

  const buttonTransition = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1] as const
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden flex flex-col items-center justify-start text-center pt-[120px]">

      <motion.div
        className="absolute -top-[30%] h-[150%] w-full z-0 select-none pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={bgTransition}
      >
        {/* Mountains */}
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
        {/* Mist */}
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
      </motion.div>

      {/* Layer 3: Foreground Tree (Elastic Scale Up from Bottom) */}
      <motion.div
        className="absolute bottom-0 w-full h-[100vh] z-[1] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={treeTransition}
        style={{ transformOrigin: '50% 100%' }} // Grows from bottom center (cliff base)
      >
        <Image
          src={bgTreeForeground}
          alt="Prominent orange tree on cliff"
          fill
          priority
          className="object-contain object-bottom"
          sizes="100vw"
        />
      </motion.div>

      {/* Light Overlay for Legibility */}
      <div
        className="absolute inset-0 z-[2] opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 60%)' }}
      />

      {/* Hero Content (Text + Buttons) */}
      <div className="relative z-10 container flex flex-col items-center px-6 h-full">

        {/* Title (Slide Up + Fade) */}
        <motion.div
          className="max-w-[800px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
        >
          <h1
            className="text-[90px] font-normal leading-[99px] text-[#000000] tracking-tight text-center"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            From Overwhelm <br />
            to Breakthrough
          </h1>
        </motion.div>

        {/* CTA Buttons (Staggered Slide Up) */}
        <motion.div
          className="flex flex-row items-center justify-center gap-3 z-20"
          initial="initial"
          animate="animate"
          transition={buttonContainerTransition}
        >
          <motion.a
            href="https://cal.com/flamby/x"
            className="btn-pill bg-black text-white hover:opacity-90 min-w-[180px] inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-opacity"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={buttonTransition}
          >
            Start your journey
          </motion.a>

          <motion.a
            href="/sat-school"
            className="btn-pill bg-white text-black border border-[#E5E5E5] hover:bg-[#f9f9f9] min-w-[130px] inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={buttonTransition}
          >
            Sat School
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Gradients for UI Integration */}
      {/* Decorative Gradients for UI Integration - Removed as per user request to remove "white gradient thing" */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" /> */}
    </section>
  );
};

export default HeroSection;