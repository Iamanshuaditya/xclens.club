import Image from 'next/image';

const GuidedCoaching = () => {
  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden py-[120px]">
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1200px] mx-auto px-6">
        <div className="w-[1px] h-full bg-[#E0E0E0] opacity-50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0] opacity-50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0] opacity-50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0] opacity-50"></div>
        <div className="w-[1px] h-full bg-[#E0E0E0] opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-20 max-w-[800px]">
          <h2 className="font-display text-[48px] leading-[1.1] text-black tracking-[-0.02em]">
            Gain Real Results with Guided Coaching
          </h2>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left Side: Portrait Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[3/4] w-full rounded-[12px] overflow-hidden bg-muted">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/kRkWizxa2KU2TPaW0oS4omwSHFY-3.jpg"
                alt="Guided coaching portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Framework Points */}
          <div className="lg:col-span-7 flex flex-col gap-12 pt-4">
            {/* Framework Item 1 */}
            <div className="group flex flex-col gap-4 max-w-[480px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-black"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-display text-[24px] text-black leading-tight">Clarity Framework</h3>
              </div>
              <p className="font-sans text-[16px] text-[#666666] leading-[1.6] pl-14">
                A clear roadmap that turns your vision into simple, achievable milestones.
              </p>
            </div>

            {/* Framework Item 2 */}
            <div className="group flex flex-col gap-4 max-w-[480px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-black"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-display text-[24px] text-black leading-tight">Skill Building</h3>
              </div>
              <p className="font-sans text-[16px] text-[#666666] leading-[1.6] pl-14">
                Focused exercises, tools and tactics to boost skills and build confidence.
              </p>
            </div>

            {/* Framework Item 3 */}
            <div className="group flex flex-col gap-4 max-w-[480px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-black"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-display text-[24px] text-black leading-tight">Momentum Maintenance</h3>
              </div>
              <p className="font-sans text-[16px] text-[#666666] leading-[1.6] pl-14">
                Support through updates, to keep you moving forward and building momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidedCoaching;