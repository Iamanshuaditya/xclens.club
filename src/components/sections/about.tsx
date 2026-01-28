import React from "react";

const AboutSection = () => {
  return (
    <section
      className="framer-619jvl relative bg-[#f3f3f3] py-[100px] md:py-[140px] overflow-hidden"
      data-framer-name="about"
      id="about"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="container h-full relative">
          <div className="absolute left-[0%] top-0 bottom-0 w-[1px] bg-[#e5e5e5]"></div>
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-[#e5e5e5]"></div>
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#e5e5e5]"></div>
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-[#e5e5e5]"></div>
          <div className="absolute left-[100%] top-0 bottom-0 w-[1px] bg-[#e5e5e5]"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge and Heading */}
          <div className="flex flex-col gap-[20px] mb-[60px]">
            <div>
              <span className="badge-pill bg-[#d1d5db] text-[#374151] px-[12px] py-[4px] rounded-full text-[12px] font-medium font-sans uppercase tracking-wider">
                About
              </span>
            </div>
            <h2 className="font-display text-[32px] md:text-[48px] font-medium leading-[1.2] max-w-[700px] text-black">
              Transform Your Life with a Proven Coaching Method
            </h2>
          </div>

          {/* Video Embed */}
          <div className="relative w-full aspect-video rounded-[12px] overflow-hidden mb-[60px] shadow-sm">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/coqLWoUe5sQ"
              title="Xcelens Info - Website landing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description and Button Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16">
            <p className="font-sans text-[18px] leading-[1.6] text-black max-w-[640px]">
              I spent years juggling endless to-do lists and battling a constant
              storm of self doubt, stayed up late researching habit change,
              interviewing top performers, and testing every strategy on myself.
            </p>
            <div className="shrink-0">
              <a
                href="./about"
                className="btn-pill bg-black text-white px-[24px] py-[12px] rounded-full text-[16px] font-semibold transition-transform hover:scale-105 inline-block"
              >
                Discover my story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;