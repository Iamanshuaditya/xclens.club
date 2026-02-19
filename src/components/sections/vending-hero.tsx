"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; // Assuming we have access to lucide-react icons

const VendingHero = () => {
    // Assets
    const assets = {
        moon: "/assets/vending/middlemoon.jpg",
        leftPhone: "/assets/vending/leftphone.jpg",
        rightPhone: "/assets/vending/rightphone.jpg",
        bottom: "/assets/vending/bottom.jpg",
    };

    // Animation Variants
    const transitions = {
        slow: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const },
        spring: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
        stagger: { delayChildren: 0.2, staggerChildren: 0.1 }
    };

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#E8E6E1] text-[#333]">

            {/* 1. Header Elements (Top Left/Right) */}
            <motion.div
                className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="flex flex-col">
                    <h1 className="text-6xl md:text-8xl font-medium leading-[0.85] tracking-tighter text-[#A0A5AA]">
                        Conscious<br />
                        Dating<br />
                        App
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-lg font-medium tracking-tight text-[#1a1a1a]">
                        A dating app without dopamine <br />
                        addiction.
                    </p>
                </div>
            </motion.div>

            {/* 2. Main Visual Composition */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-10 md:translate-y-0">

                {/* Middle Moon (Center Background) */}
                <motion.div
                    className="absolute z-10 w-[90vw] md:w-[65vh] aspect-square"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={transitions.slow}
                >
                    <Image
                        src={assets.moon}
                        alt="Moon background"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Left Phone */}
                <motion.div
                    className="absolute z-0 left-[-5%] md:left-[15%] top-[20%] w-[40vw] md:w-[25vh] aspect-[9/16] -rotate-12"
                    initial={{ x: -100, opacity: 0, rotate: -20 }}
                    animate={{ x: 0, opacity: 1, rotate: -12 }}
                    transition={{ ...transitions.slow, delay: 0.3 }}
                >
                    <Image
                        src={assets.leftPhone}
                        alt="App Interface Left"
                        fill
                        className="object-contain opacity-60"
                    />
                </motion.div>

                {/* Right Phone */}
                <motion.div
                    className="absolute z-0 right-[-5%] md:right-[15%] top-[20%] w-[40vw] md:w-[25vh] aspect-[9/16] rotate-12"
                    initial={{ x: 100, opacity: 0, rotate: 20 }}
                    animate={{ x: 0, opacity: 1, rotate: 12 }}
                    transition={{ ...transitions.slow, delay: 0.3 }}
                >
                    <Image
                        src={assets.rightPhone}
                        alt="App Interface Right"
                        fill
                        className="object-contain opacity-60"
                    />
                </motion.div>
            </div>

            {/* 3. Bottom Foreground (Plants/Hills) */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] z-20 pointer-events-none"
                initial={{ y: "100%" }}
                animate={{ y: "10%" }} // Slight offset to ground it
                transition={{ ...transitions.slow, delay: 0.2 }}
            >
                <Image
                    src={assets.bottom}
                    alt="Foreground nature elements"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
            </motion.div>

            {/* 4. Center Content & CTA */}
            <div className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-20">

                <motion.div
                    className="text-center max-w-2xl px-4 mb-12 mt-[-5vh]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transitions.slow, delay: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
                        Let&apos;s help you meet <br />
                        someone who truly gets you
                    </h2>
                    <p className="text-[#1a1a1a]/40 text-sm md:text-base max-w-md mx-auto">
                        Find genuine connections built on shared <br />
                        values, interests, and goals.
                    </p>
                </motion.div>

                {/* Auth Buttons */}
                <motion.div
                    className="flex flex-col gap-3 w-full max-w-sm px-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                delayChildren: 0.2,
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {/* Primary Email Button */}

                </motion.div>
            </div>

        </section>
    );
};

export default VendingHero;
