import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F3F4] py-[120px]">
      <div className="container relative z-10 mx-auto max-w-[1200px] px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column: Image & Form Wrapper */}
          <div className="flex flex-col gap-10 md:flex-row md:items-stretch">
            {/* Portrait Image */}
            <div className="relative h-[600px] w-full shrink-0 overflow-hidden rounded-[24px] md:w-[320px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/XSBBz1Lys8f0FzO0YaU4Jbf1KDA-2.jpg"
                alt="Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>

            {/* Form Section */}
            <div className="flex w-full flex-col justify-center rounded-[24px] border border-[#E5E5E5] bg-white p-8 md:p-12">
              <h3 className="mb-8 font-display text-[32px] font-normal leading-[1.3] text-[#1A1A1A]">
                Fill Out the Form
              </h3>
              
              <form className="flex flex-col gap-5">
                <div className="group relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-[24px] border border-[#E5E5E5] bg-transparent px-6 py-4 font-sans text-[18px] text-[#1A1A1A] outline-none transition-all focus:border-[#000000]"
                  />
                </div>
                
                <div className="group relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-[24px] border border-[#E5E5E5] bg-transparent px-6 py-4 font-sans text-[18px] text-[#1A1A1A] outline-none transition-all focus:border-[#000000]"
                  />
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-[24px] border border-[#E5E5E5] bg-transparent px-6 py-4 font-sans text-[18px] text-[#1A1A1A] outline-none transition-all focus:border-[#000000]"
                  />
                </div>

                <div className="group relative">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full resize-none rounded-[24px] border border-[#E5E5E5] bg-transparent px-6 py-4 font-sans text-[18px] text-[#1A1A1A] outline-none transition-all focus:border-[#000000]"
                  ></textarea>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                  <button
                    type="submit"
                    className="inline-flex h-[56px] items-center justify-center rounded-full bg-[#000000] px-8 py-3 font-sans text-[16px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    Send message
                  </button>
                  <p className="text-center font-sans text-[12px] text-[#666666]">
                    By submitting, you accept our privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Consultancy Card */}
          <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#E5E5E5] bg-white">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://framerusercontent.com/images/CzXwCDZwSuLbuZ6BDH1CWXvO1w.png?width=800&height=1200"
                alt="Consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
              <h3 className="mb-4 font-display text-[32px] font-normal leading-[1.3] text-[#1A1A1A]">
                Book Your Online Consultation
              </h3>
              <p className="mb-8 font-sans text-[18px] leading-[1.6] text-[#666666]">
                Connect for a complimentary strategy call to explore your goals and map out a plan for real progress
              </p>
              <a
                href="https://cal.com/flamby/x"
                className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-[#000000] px-8 py-3 font-sans text-[16px] font-semibold text-white transition-opacity hover:opacity-80 md:w-max"
              >
                Book a call now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Editorial Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.1]">
        <div className="mx-auto flex h-full max-w-[1200px] justify-between px-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-[#000000]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;