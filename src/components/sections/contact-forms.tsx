"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ContactForms Section
 * Clones the main content section containing:
 * 1. A contact form paired with an image of a vintage telephone.
 * 2. A CTA card for online consultations featuring a bright interior image.
 */
export default function ContactForms() {
  return (
    <section className="relative w-full bg-[#f2f3f4] py-[40px] md:py-[120px] overflow-hidden">
      {/* Architectural Grid Lines - Based on the design tokens and layout grid */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-0">
        <div className="grid grid-cols-4 h-full w-full border-x border-[#E5E5E5]/30">
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10 flex flex-col gap-6 md:gap-10">

        {/* Contact Form Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[12px] shadow-sm overflow-hidden">
          {/* Left: Vintage Telephone Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/XSBBz1Lys8f0FzO0YaU4Jbf1KDA-2.jpg"
              alt="Vintage telephone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Contact Form */}
          <div className="p-5 md:p-10 flex flex-col justify-center">
            <h3 className="font-display text-[24px] md:text-[32px] mb-4 md:mb-8 text-black">Fill Out the Form</h3>

            <form className="flex flex-col gap-3 md:gap-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[#D4D4D4] py-2 md:py-4 text-[15px] md:text-[24px] text-[#1A1A1A] placeholder:text-[#C0C0C0] focus:outline-none focus:border-black transition-colors"
                placeholder="Name*"
                required
              />

              <input
                type="text"
                className="w-full bg-transparent border-b border-[#D4D4D4] py-2 md:py-4 text-[15px] md:text-[24px] text-[#1A1A1A] placeholder:text-[#C0C0C0] focus:outline-none focus:border-black transition-colors"
                placeholder="Surname"
              />

              <input
                type="email"
                className="w-full bg-transparent border-b border-[#D4D4D4] py-2 md:py-4 text-[15px] md:text-[24px] text-[#1A1A1A] placeholder:text-[#C0C0C0] focus:outline-none focus:border-black transition-colors"
                placeholder="Email*"
                required
              />

              <textarea
                className="w-full bg-transparent border-b border-[#D4D4D4] py-2 md:py-4 min-h-[80px] md:min-h-[120px] resize-none text-[15px] md:text-[24px] text-[#1A1A1A] placeholder:text-[#C0C0C0] focus:outline-none focus:border-black transition-colors"
                placeholder="Message*"
                required
              />

              <button
                type="submit"
                className="mt-2 md:mt-4 w-full bg-black text-white rounded-full py-3 md:py-4 font-semibold text-[14px] md:text-[16px] transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Send message
              </button>

              <p className="text-[12px] md:text-[14px] text-[#1A1A1A] leading-[1.5]">
                By submitting, you accept our privacy policy.
              </p>
            </form>
          </div>
        </div>

        {/* Consultation CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[12px] shadow-sm overflow-hidden min-h-[400px]">
          {/* Left: Interior Studio Image */}
          <div className="relative aspect-video md:aspect-auto">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/CzXwCDZwSuLbuZ6BDH1CWXvO1w-3.png"
              alt="Bright interior studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Consultation Text & Button */}
          <div className="p-6 md:p-10 flex flex-col justify-center items-start gap-6">
            <div className="max-w-[400px] flex flex-col gap-4">
              <h3 className="font-display text-[32px] text-black">
                Book Your Online Consultation
              </h3>
              <p className="text-[16px] text-[#666666] leading-relaxed">
                Connect for a complimentary strategy call to explore your goals and map out a plan for real progress
              </p>
            </div>

            <a
              href="https://cal.com/flamby/x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white rounded-full px-8 py-3 font-semibold text-[14px] transition-all hover:opacity-90 hover:translate-y-[-1px]"
            >
              Book a call now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}