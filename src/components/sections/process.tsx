// components/process-section.tsx
"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Reflect on Where you Stand",
    description: "Together we explore the depth of what you know and clinically record it. Clearly identifying to us and key stakeholders the foundation on which we build."
  },
  {
    number: "2",
    title: "Define your Vision",
    description: "Next we translate your fleeting thoughts into structured aspirations that evolve and compound over time, enriched with nuances. So that you can achieve more."
  },
  {
    number: "3",
    title: "Act with Confidence",
    description: "Along your journey, the going will get tough; at this point, it's the purpose and discipline, that'll fuel the effort to push through the thick. We ensure that your purpose and discipline values are ironclad."
  },
  {
    number: "4",
    title: "Strategy and Execution",
    description: "Finally we review your journey identify lessons from every success and setback, refine your plan for continuous growth, and empower you to sustain momentum long after our time together."
  }
]

export function ProcessSection() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring animation for natural feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform scroll progress to horizontal movement
  // -75% means we scroll through 4 cards (showing 1 at a time approximately)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f5f5f7]"
      style={{
        height: "400vh", // Long scroll distance for smooth animation
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Header Content */}
        <div className="max-w-[1400px] mx-auto px-8 w-full mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Left: Title */}
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50">
                Process
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif text-gray-900 leading-[1.1] tracking-tight">
                Ensure Your Goals<br />
                in Four Steps
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:max-w-[360px] lg:pt-16">
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                This four-step path that carried me from uncertainty to unstoppable momentum can do the same for you.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Cards Track */}
        <div className="relative w-full overflow-visible">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-8 will-change-transform"
          >
            {steps.map((step, index) => (
              <article
                key={index}
                className="flex-shrink-0 w-[420px] bg-[#fafafa]/90 backdrop-blur-sm rounded-[2rem] p-10 border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-start gap-4 mb-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f4a261]/20 flex items-center justify-center">
                    <span className="text-[#e76f51] text-sm font-semibold">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-gray-900 leading-tight pt-0.5">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-[1.8] text-[15px] pl-12 font-light">
                  {step.description}
                </p>
              </article>
            ))}

            {/* Spacer for last card */}
            <div className="flex-shrink-0 w-[200px]" />
          </motion.div>
        </div>

        {/* Optional: Progress bar at bottom */}
        <div className="max-w-[1400px] mx-auto px-8 w-full mt-16">
          <div className="w-48 h-1 bg-gray-200/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#f4a261] rounded-full origin-left"
              style={{
                scaleX: smoothProgress,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection