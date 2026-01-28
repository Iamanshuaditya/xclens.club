import React from 'react';
import Image from 'next/image';

const steps = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/icons/GdQjZKJ2niY3V3LHHzajnzwD8s-1.png",
    title: "Reflect on Where you Stand",
    description: "Together we explore the depth of what you know and clinically record it. Clearly identifying to us and to key stakeholders the foundation on which we build"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/icons/b3cNG9ABf3dAvFumWx5nrPoq0nc-2.png",
    title: "Define your Vision",
    description: "Next we translate your fleeting thoughts into structured aspirations that evolve and compound over time, enriched with nuances. So that you can achieve more"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/icons/RPf8u0C0vIYoH3PK0CUUV0FGFlc-3.png",
    title: "Act with Confidence",
    description: "Along your journey, the going will get tough, at this point, it's the purpose and discipline, that'll fuel the eeffort to push through the thick. We ensure that your purpose and discipline values are ironclad"
  },
  {
    // Fallback or specific asset if found, using the third icon for the 4th step as consistency or placeholder
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/icons/RPf8u0C0vIYoH3PK0CUUV0FGFlc-3.png",
    title: "Strategy and Execution",
    description: "Finally we review your journey identify lessons from every success and setback, refine your plan for continuous growth, and empower you to sustain momentum long after our time together."
  }
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-[140px]">
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container h-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E5E5E5]" />
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#E5E5E5] hidden md:block" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E5E5] hidden md:block" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-[#E5E5E5] hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#E5E5E5]" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header Area */}
        <div className="flex flex-col mb-20">
          <div className="mb-6">
            <span className="badge-pill bg-[#D1D5DB] text-[#374151] font-medium px-3 py-1 text-[12px] uppercase tracking-wider">
              Process
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display text-[48px] leading-[1.1] font-medium text-black max-w-[500px]">
              Ensure Your Goals in Four Steps
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#737373] max-w-[480px] pt-2">
              This four-step path that carried me from uncertainty to unstoppable momentum can do the same for you.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-[#F3F3F3] p-8 rounded-[12px] border border-[#E5E5E5] hover:bg-white transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-8 w-12 h-12 relative flex items-center justify-center">
                <Image 
                  src={step.icon} 
                  alt={step.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-display text-[24px] font-medium text-black mb-4 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#737373]">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative line separator for visual Polish */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-[#E5E5E5] hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;