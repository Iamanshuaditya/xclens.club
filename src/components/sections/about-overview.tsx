"use client";

import React from 'react';
import Image from 'next/image';

const AboutOverview = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5] py-[120px]">
      {/* Decorative Vertical Grid System */}
      <div className="vertical-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-[60px]">
          {/* Main Panorama Image */}
          <div className="w-full h-auto overflow-hidden rounded-[12px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/gibiJ5atYBHNSl9MblgIylEWR0-2.png"
              alt="Panoramic nature landscape"
              width={1905}
              height={1000}
              className="w-full object-cover aspect-[21/9]"
              priority
            />
          </div>

          {/* Content Layout: 2-Column Desktop Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            {/* Title Column */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-[48px] leading-[1.1] text-black tracking-[-0.02em]">
                Your Path to Real Change
              </h2>
            </div>

            {/* Narrative & Stats Column */}
            <div className="lg:col-span-7 flex flex-col gap-[60px]">
              {/* Detailed Narrative */}
              <div>
                <p className="font-sans text-[16px] leading-[1.6] text-black">
                  Drawing on more than 8 years of research-backed coaching and personalized insight, 
                  Neelmani empowers students to break through barriers and achieve measurable growth. 
                  His unique blend of structured frameworks and empathetic guidance ensures 
                  sustainable transformation at every stage of your journey.
                </p>
              </div>

              {/* Numerical Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Years Experience */}
                <div className="flex flex-col gap-2">
                  <span className="font-display text-[64px] leading-[1] text-black">
                    8
                  </span>
                  <span className="font-sans text-[12px] font-medium uppercase tracking-[0.05em] text-[#666666]">
                    Years Experience
                  </span>
                </div>

                {/* Group Sessions */}
                <div className="flex flex-col gap-2">
                  <span className="font-display text-[64px] leading-[1] text-black">
                    7
                  </span>
                  <span className="font-sans text-[12px] font-medium uppercase tracking-[0.05em] text-[#666666]">
                    Group Sessions
                  </span>
                </div>

                {/* Private Sessions */}
                <div className="flex flex-col gap-2">
                  <span className="font-display text-[64px] leading-[1] text-black">
                    50+
                  </span>
                  <span className="font-sans text-[12px] font-medium uppercase tracking-[0.05em] text-[#666666]">
                    Private Sessions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .grid-line {
          width: 1px;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.05);
        }
        @media (max-width: 1024px) {
          .vertical-grid {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutOverview;