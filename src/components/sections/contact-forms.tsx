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
    <section className="relative w-full bg-[#f2f3f4] py-[120px] px-10 overflow-hidden">
      {/* Architectural Grid Lines - Based on the design tokens and layout grid */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-0">
        <div className="grid grid-cols-4 h-full w-full border-x border-[#E5E5E5]/30">
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
          <div className="border-r border-[#E5E5E5]/30 h-full"></div>
        </div>
      </div>

      <div className="container max-w-[1200px] mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Contact Form Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[12px] shadow-sm overflow-hidden">
          {/* Left: Vintage Telephone Image */}
          <div className="relative aspect-square md:aspect-auto h-full min-h-[500px]">
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
          <div className="p-10 flex flex-col justify-center">
            <h3 className="font-display text-[32px] mb-8 text-black">Fill Out the Form</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-[#666666]">Name*</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-[#666666]">Surname</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-[#666666]">Email*</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-[#666666]">Message*</label>
                <textarea 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 min-h-[100px] resize-none focus:outline-none focus:border-black transition-colors"
                  placeholder=""
                  required
                />
              </div>

              <button 
                type="submit"
                className="btn-primary mt-4 w-full bg-black text-white rounded-full py-4 font-semibold text-[14px] transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Send message
              </button>
              
              <p className="text-[12px] text-[#666666] mt-2">
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
          <div className="p-10 flex flex-col justify-center items-start gap-6">
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