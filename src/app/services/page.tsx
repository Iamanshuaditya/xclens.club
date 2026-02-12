"use client";

import * as React from "react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { Star } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const benefits = [
  {
    title: "Clarity",
    description:
      "Define your career aspirations and set achievable milestones.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Yx8HzJ9dJuN8MaCmJEtK79B5u8-4.png",
  },
  {
    title: "Support",
    description:
      "Receive personalized guidance tailored to your unique strengths.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/ewAqhKeUdtYR8p81zwehpcpB4ek-5.png",
  },
  {
    title: "Confidence",
    description:
      "Build the skills and mindset needed to excel in any role.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/LXq27ZG7hrKeXuYWZ2M7w3YAIvM-6.png",
  },
];

const testimonials = [
  {
    rating: 4,
    quote:
      "The coaching completely changed my outlook. I now have the confidence to tackle anything.",
    name: "Jane D.",
  },
  {
    rating: 5,
    quote:
      "The sessions helped me clarify my goals and take steps I never thought possible.",
    name: "Michael R.",
  },
  {
    rating: 5,
    quote:
      "I feel empowered, motivated, and ready to achieve my dreams.",
    name: "Sophia L.",
  },
  {
    rating: 5,
    quote:
      "The personalized guidance made all the difference. My mindset has completely shifted for the better.",
    name: "Daniel W.",
  },
];

function TestimonialsSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f3f3f3]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 w-full mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="space-y-6">
              <span className="badge-pill bg-[#D1D5DB] text-[#374151]">
                Testimonials
              </span>
              <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-black tracking-[-0.02em]">
                What Clients Say
              </h2>
            </div>
            <div className="lg:max-w-[360px] lg:pt-16">
              <p className="font-sans text-[18px] leading-[1.6] text-[#666666] font-light">
                Real stories of growth, success, and transformation through
                coaching.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative w-full overflow-visible">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-6 md:pl-8 will-change-transform"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex-shrink-0 w-[340px] md:w-[400px] bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 border border-[#e5e5e5]/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "fill-[#666666] text-[#666666]"
                            : "fill-none text-[#D1D5DB]"
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-[15px] leading-[1.8] text-[#333333] font-light">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Name */}
                <p className="font-sans text-[14px] font-medium text-black mt-8">
                  {testimonial.name}
                </p>
              </article>
            ))}

            {/* Spacer */}
            <div className="flex-shrink-0 w-[200px]" />
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="max-w-[1200px] mx-auto px-6 w-full mt-16">
          <div className="w-48 h-1 bg-gray-200/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black/30 rounded-full origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center text-center max-w-[700px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display text-[clamp(48px,8vw,80px)] leading-[1.1] text-black tracking-[-0.02em] mb-6"
            >
              Mindset Coaching
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-[18px] leading-[1.6] text-[#666666] max-w-[440px]"
            >
              Find your path, develop your skills, and achieve professional
              growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative w-full py-[120px] overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Left: Abstract Shape */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px]">
                {/* Back capsule - lighter orange */}
                <div
                  className="absolute left-0 top-0 w-[200px] h-[360px] md:w-[220px] md:h-[400px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #C8864A 0%, #D4955A 50%, #B8773F 100%)",
                  }}
                />
                {/* Front capsule - darker orange, overlapping */}
                <div
                  className="absolute left-[60px] md:left-[70px] top-[30px] w-[180px] h-[300px] md:w-[200px] md:h-[340px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #A06030 0%, #C07840 50%, #8B5028 100%)",
                  }}
                />
                {/* Highlight ellipse overlay */}
                <div
                  className="absolute left-[20px] top-[60px] w-[160px] h-[240px] md:w-[180px] md:h-[280px] rounded-full opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #E8A060 0%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Right: Overview Text */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-[48px] leading-[1.1] text-black tracking-[-0.02em]">
                Overview
              </h2>
              <p className="font-sans text-[16px] leading-[1.6] text-[#666666] max-w-[500px]">
                Our mindset coaching program is designed to help you overcome
                mental barriers, build resilience, and develop the inner
                confidence needed for lasting professional success. Through
                personalized sessions, we work together to align your thinking
                with your ambitions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Matching Homepage Service Cards */}
      <section className="relative w-full py-[140px] bg-[#f3f3f3] overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="mb-[60px]">
              <span className="badge-pill mb-4 bg-[#D1D5DB] text-[#374151]">
                Benefits
              </span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-[600px]">
                  <h2 className="font-display text-[48px] leading-[1.2] text-black mb-6">
                    Empower Yourself to Grow Professionally
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.6] text-black/70">
                    Achieve your goals with structured coaching designed to build
                    clarity, support, and lasting confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Cards Grid - Same as Homepage Services */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative flex flex-col h-[520px] bg-black rounded-[12px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto p-8 z-20">
                    <h3 className="font-display text-[24px] text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-[16px] leading-[1.4] text-white/80">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scroll */}
      <TestimonialsSection />

      <CtaFooter />

      {/* Background Vertical Grid Lines - Global */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
        <div className="grid-guide grid-guide-1" />
        <div className="grid-guide grid-guide-2" />
        <div className="grid-guide grid-guide-3" />
        <div className="grid-guide grid-guide-4" />
      </div>
    </main>
  );
}
