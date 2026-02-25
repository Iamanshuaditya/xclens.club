import React from 'react';

const reasons = [
    {
        number: '001',
        title: 'Deep Empathy',
        desc: 'We listen attentively to your story and tailor each session so you feel truly understood and supported.',
    },
    {
        number: '002',
        title: 'Proven Expertise',
        desc: 'We draw on over eight years of expertise to help you navigate every challenge with confident clarity now.',
    },
    {
        number: '003',
        title: 'Continuous Guidance',
        desc: 'You receive check-ins, resources, and motivation that sustain your ongoing progress.',
    },
    {
        number: '004',
        title: 'Measurable Results',
        desc: 'We set clear milestones, track every step, and celebrate each success to fuel lasting progress today.',
    },
    {
        number: '005',
        title: 'Tailored Strategies',
        desc: 'We co-design plans leveraging your strengths to address challenges, align every step with your vision.',
    },
    {
        number: '006',
        title: 'Trust & Privacy',
        desc: 'I uphold confidentiality respect to create a safe environment where you can explore and grow freely.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative w-full bg-white py-[100px] md:py-[120px] overflow-hidden">
            {/* Vertical divider lines */}
            <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
                <div className="w-full max-w-[1248px] h-full flex justify-between px-6">
                    <div className="w-[1px] h-full bg-[rgba(0,0,0,0.06)]"></div>
                    <div className="w-[1px] h-full bg-[rgba(0,0,0,0.06)]"></div>
                    <div className="w-[1px] h-full bg-[rgba(0,0,0,0.06)]"></div>
                    <div className="w-[1px] h-full bg-[rgba(0,0,0,0.06)]"></div>
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-[1248px]">
                {/* Heading */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-black italic">
                        Why Choose Xcelens?
                    </h2>
                </div>

                {/* 3×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className={`text-center px-6 md:px-10 lg:px-14 py-10 md:py-14
                ${/* Right border for columns 0,1 in each row */ ''}
                ${(i % 3 !== 2) ? 'md:border-r md:border-[rgba(0,0,0,0.06)]' : ''}
                ${/* Top border for second row */ ''}
                ${i >= 3 ? 'border-t border-[rgba(0,0,0,0.06)]' : ''}
                ${/* Mobile: border-bottom for all except last */ ''}
                ${i < 5 ? 'border-b border-[rgba(0,0,0,0.06)] md:border-b-0' : ''}
              `}
                        >
                            {/* Number */}
                            <span className="block text-[13px] font-sans font-semibold tracking-[0.05em] text-[#D4740C] mb-4">
                                {item.number}
                            </span>

                            {/* Title */}
                            <h3 className="font-display text-[22px] md:text-[24px] lg:text-[26px] leading-[1.2] tracking-[-0.01em] text-black mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#6B6B6B] font-sans max-w-[280px] mx-auto">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
