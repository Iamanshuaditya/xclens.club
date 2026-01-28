import React from 'react';
import Image from 'next/image';

const ConsultationCard = () => {
  return (
    <section className="w-full flex justify-center py-[60px] md:py-[80px] px-6 md:px-10 bg-[#F2F3F4]">
      <div 
        className="max-w-[1200px] w-full bg-white rounded-[24px] border border-[#E5E5E5] overflow-hidden flex flex-col md:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        style={{ minHeight: '440px' }}
      >
        {/* Left Side: Image Container */}
        <div className="w-full md:w-[45%] lg:w-[40%] relative min-h-[300px] md:min-h-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/CzXwCDZwSuLbuZ6BDH1CWXvO1w-3.png"
            alt="Consultation Booking"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-[55%] lg:w-[60%] p-10 md:p-14 lg:p-16 flex flex-col justify-center items-start space-y-6">
          <div className="space-y-4">
            <h3 className="font-display text-[32px] md:text-[40px] leading-[1.2] text-[#1A1A1A]">
              Book Your Online Consultation
            </h3>
            <p className="font-sans text-[18px] leading-[1.6] text-[#666666] max-w-[480px]">
              Connect for a complimentary strategy call to explore your goals and map out a plan for real progress
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="https://cal.com/flamby/x"
              className="inline-flex items-center justify-center h-[56px] px-10 rounded-full bg-[#000000] text-white font-sans text-[16px] font-semibold transition-all duration-300 hover:opacity-80 active:scale-[0.98]"
            >
              Book a call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCard;