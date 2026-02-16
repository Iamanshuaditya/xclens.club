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
  return (
    <section className="relative bg-[#f5f5f7] py-[120px] md:py-[160px]">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50">
              Process
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif text-gray-900 leading-[1.1] tracking-tight">
              Ensure Your Goals<br />
              in Four Steps
            </h2>
          </div>

          <div className="lg:max-w-[360px] lg:pt-16">
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              This four-step path that carried me from uncertainty to unstoppable momentum can do the same for you.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-[#fafafa]/90 backdrop-blur-sm rounded-[2rem] p-10 border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f4a261]/20 flex items-center justify-center">
                  <span className="text-[#e76f51] text-sm font-semibold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 leading-tight pt-0.5">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-500 leading-[1.8] text-[15px] pl-12 font-light">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
