"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-height-[100vh] w-full bg-[#000000] overflow-hidden flex flex-col pt-[160px] pb-[120px]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="mb-0">
            <h1 className="font-display text-white text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] tracking-[-0.02em] m-0">
              Come to Get<br />Awe-Inspired
            </h1>
            <p className="font-sans text-white text-[18px] md:text-[20px] mt-2 mb-6 font-medium tracking-[0.05em]">
              *Intellectually
            </p>
          </div>

          <p className="font-sans text-[#999999] text-[18px] mb-10 max-w-[400px]">
            Find your tribe - Talk, Think and Network.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a 
              href="https://rzp.io/rzp/sWf80Lp" 
              className="btn-pill btn-pill-primary min-w-[140px]"
            >
              Read More
            </a>
            <a 
              href="https://rzp.io/rzp/sWf80Lp" 
              className="btn-pill btn-pill-secondary min-w-[170px]"
            >
              I want to come!!
            </a>
          </div>

          {/* Quote Section */}
          <div className="quote-container border-l border-white/30 pl-6 mt-4 max-w-[420px]">
            <p className="font-display italic text-[#cccccc] text-[15px] leading-[1.6] mb-6">
              “I host Invite-only Sessions where we build intellectual competences to ignite the PolyMaths within us. <br /><br />
              Learn the Mental Models to become great Capital Allocators, think investors, Entrepreneurs or even Innovators and Builders”
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                <Image 
                  src="https://framerusercontent.com/images/710veydyjYi2K9KDA8l6qn1kAtc.jpg?width=64&height=64" 
                  alt="Neelmani Bagaria" 
                  width={32} 
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-sans text-[14px] text-white font-medium opacity-80">
                Neelmani Bagaria
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Book Assets (Simulating the Stack) */}
        <div className="lg:col-span-6 relative h-[600px] hidden lg:block perspective-[1000px]">
          {/* Ego is the Enemy */}
          <div className="absolute top-[0%] right-[5%] w-[300px] z-[5] transform rotate-y-[-25deg] rotate-z-[5deg] drop-shadow-[20px_40px_60px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105">
            <Image 
              src="https://framerusercontent.com/images/WdJtZFRz1a5uCspzEuvcPaLMHnQ.png?width=352&height=500" 
              alt="Ego is the Enemy"
              width={352}
              height={500}
              className="rounded-sm"
              priority
            />
          </div>

          {/* Jony Ive Book */}
          <div className="absolute top-[15%] right-[25%] w-[260px] z-[4] transform rotate-y-[-35deg] rotate-z-[15deg] drop-shadow-[20px_40px_60px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105">
            <Image 
              src="https://framerusercontent.com/images/j5yxyVe1iu9w0CySlM3LEa3Zpss.png?width=329&height=500" 
              alt="Jony Ive"
              width={329}
              height={500}
              className="rounded-sm"
            />
          </div>

          {/* Psychology of Money */}
          <div className="absolute top-[35%] right-[10%] w-[280px] z-[6] transform rotate-y-[-15deg] rotate-z-[-10deg] drop-shadow-[20px_40px_60px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105">
            <Image 
              src="https://framerusercontent.com/images/AiHY69YkACiQQY2EgvfKvVOkrGw.png?width=270&height=500" 
              alt="Psychology of Money"
              width={270}
              height={500}
              className="rounded-sm"
            />
          </div>

          {/* Hooked */}
          <div className="absolute top-[60%] right-[15%] w-[320px] z-[3] transform rotate-x-[10deg] rotate-y-[-20deg] rotate-z-[-2deg] drop-shadow-[20px_40px_60px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105">
            <Image 
              src="https://framerusercontent.com/images/k42PNZ5dHw6E8vAVsvC8DDWAE4.png?width=329&height=500" 
              alt="Hooked"
              width={329}
              height={500}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Background radial gradient to smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]"></div>
      
      <style jsx global>{`
        .rotate-y-[-25deg] {
          transform: perspective(1000px) rotateY(-25deg) rotateZ(5deg);
        }
        .rotate-y-[-35deg] {
          transform: perspective(1000px) rotateY(-35deg) rotateZ(15deg);
        }
        .rotate-y-[-15deg] {
          transform: perspective(1000px) rotateY(-15deg) rotateZ(-10deg);
        }
        .rotate-x-[10deg] {
          transform: perspective(1000px) rotateX(10deg) rotateY(-20deg) rotateZ(-2deg);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;