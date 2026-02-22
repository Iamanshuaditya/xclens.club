import React from 'react';

const benefits = [
  {
    number: "001",
    title: "Deep Empathy",
    description: "I listen attentively to your story and tailor each session so you feel truly understood and supported."
  },
  {
    number: "002",
    title: "Proven Expertise",
    description: "I draw on over eight years of expertise to help you navigate every challenge with confident clarity now."
  },
  {
    number: "003",
    title: "Continuous Guidance",
    description: "You receive check-ins, resources, and motivation that sustain your ongoing progress."
  },
  {
    number: "004",
    title: "Measurable Results",
    description: "We set clear milestones, track every step, and celebrate each success to fuel lasting progress today."
  },
  {
    number: "005",
    title: "Tailored Strategies",
    description: "We co-design plans leveraging your strengths to address challenges, align every step with your vision."
  },
  {
    number: "006",
    title: "Trust & Privacy",
    description: "I uphold confidentiality respect to create a safe environment where you can explore and grow freely."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="relative w-full bg-white py-[100px] overflow-hidden">
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-between max-w-[1200px] mx-auto px-6 pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#E0E0E0]/50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0]/50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0]/50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0]/50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0]/50"></div>
      </div>

      <div className="container relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header - Centered */}
          <div className="text-center">
            <h2 className="font-display text-[48px] leading-[1.1] text-black">
              Why Choose Neelmani?
            </h2>
          </div>

          {/* Benefits Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-[50px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* Number Label - Orange */}
                <span className="font-sans text-[14px] font-semibold text-[#D4772C]">
                  {benefit.number}
                </span>

                {/* Benefit Headline */}
                <h3 className="font-display text-[22px] leading-[1.2] text-black">
                  {benefit.title}
                </h3>

                {/* Benefit Description */}
                <p className="font-sans text-[14px] leading-[1.6] text-[#666666] max-w-[280px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
