import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import { Instrument_Serif } from "next/font/google";
import { MoveRight } from 'lucide-react';

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

export default function SiFellowshipPage() {
    return (
        <main className={`min-h-screen bg-[#FDFBF7] text-[#1A1A1A] ${instrumentSerif.variable} selection:bg-black selection:text-white`}>
            <Navbar />

            {/* HERO SECTION - Minimal & typographic */}
            <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

                    <div className="flex items-center gap-3 animate-fade-in-up opacity-0 translate-y-4" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
                        <div className="h-[1px] w-8 bg-black/20"></div>
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Cohort 01 Applications Open</span>
                        <div className="h-[1px] w-8 bg-black/20"></div>
                    </div>

                    <h1 className="text-[12vw] md:text-[8rem] leading-[0.8] tracking-tight font-serif text-black animate-fade-in-up opacity-0 translate-y-8" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
                        Si Fellowship
                    </h1>

                    <p className="text-lg md:text-2xl text-black/70 max-w-2xl font-light leading-relaxed animate-fade-in-up opacity-0 translate-y-8" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
                        Designed for the chosen few. A play on the Anglo-Spanish crossover that implores you to <span className="italic font-serif text-black">say yes</span>, while subtly suggesting you stand watch for the future.
                    </p>

                    {/* Key Details Strip */}
                    <div className="w-full max-w-4xl mt-16 border-y border-black/10 py-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 animate-fade-in-up opacity-0 translate-y-8" style={{ animationFillMode: 'forwards', animationDelay: '0.7s' }}>
                        <div className="text-center md:text-left px-8 md:border-r border-black/10 w-full md:w-1/3">
                            <span className="block text-xs font-medium uppercase tracking-widest text-black/40 mb-2">Location</span>
                            <span className="text-xl font-serif">Bengaluru, IN</span>
                        </div>
                        <div className="text-center px-8 md:border-r border-black/10 w-full md:w-1/3">
                            <span className="block text-xs font-medium uppercase tracking-widest text-black/40 mb-2">Duration</span>
                            <span className="text-xl font-serif">100 Days</span>
                        </div>
                        <div className="text-center md:text-right px-8 w-full md:w-1/3">
                            <span className="block text-xs font-medium uppercase tracking-widest text-black/40 mb-2">Start Date</span>
                            <span className="text-xl font-serif">Jan 01, 2026</span>
                        </div>
                    </div>

                    <div className="mt-12 animate-fade-in-up opacity-0 translate-y-8" style={{ animationFillMode: 'forwards', animationDelay: '0.9s' }}>
                        <a href="https://tally.so/r/D4KXkl" target="_blank" className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#1A1A1A] text-[#FDFBF7] rounded-full text-sm font-medium tracking-wide overflow-hidden transition-all hover:px-12">
                            <span className="relative z-10 flex items-center gap-3">
                                Apply for Fellowship <MoveRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* THESIS - Magazine Style Layout */}
            <section className="py-32 px-6 md:px-12 border-t border-black/5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32">
                                <span className="text-9xl font-serif absolute -top-20 -left-10 opacity-[0.03] pointer-events-none select-none">Why</span>
                                <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 relative z-10">
                                    The Future Belongs to Elite Designers.
                                </h2>
                                <div className="h-[2px] w-24 bg-black/10 mb-8"></div>
                                <p className="text-sm font-medium uppercase tracking-widest text-black/40">The Thesis</p>
                            </div>
                        </div>
                        <div className="lg:col-span-7 space-y-12">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/80">
                                Design is no longer just aesthetics; it is the modern tool for trust. Yet, the fraternity has faced hardship. The few who weather the storm are rewarded <span className="underline decoration-1 underline-offset-4 decoration-black/30">asymmetrically</span>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="p-8 bg-[#F3F3F3] rounded-t-[2px] rounded-b-[20px]">
                                    <span className="text-4xl font-serif mb-4 block text-black/20">01</span>
                                    <h4 className="text-lg font-bold mb-3 uppercase tracking-wide">Domination</h4>
                                    <p className="text-black/60 font-light leading-relaxed">
                                        Si is building the backbone for designers to rely upon, ensuring the chosen few dominate their industries.
                                    </p>
                                </div>
                                <div className="p-8 bg-[#1A1A1A] text-[#FDFBF7] rounded-t-[2px] rounded-b-[20px]">
                                    <span className="text-4xl font-serif mb-4 block text-white/20">02</span>
                                    <h4 className="text-lg font-bold mb-3 uppercase tracking-wide">Exploration</h4>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        An all-expenses-paid 2-week exploration of the country. Travel, shoot content, and supercharge output with AI.
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-black/60 border-l-[3px] border-black/10 pl-6 italic">
                                "This is a highly selective fellowship. Only 1 fellow accepted at a time. Evaluated solely on proof of work."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAM DETAILS - Clean Typography */}
            <section className="py-32 px-6 md:px-12 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8">
                        <h2 className="text-5xl md:text-6xl font-serif">The Program Era</h2>
                        <span className="text-sm font-mono text-black/40">Cohort 1 • Jan 26</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {/* Objectives List */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-10 text-black/40">Objectives</h3>
                            <ul className="space-y-0">
                                {[
                                    "Cultivate potential to lead design globally",
                                    "Accelerated holistic learning environment",
                                    "Mastery of AI Synthesizers (Midjourney, Firefly, Opus)",
                                    "No-code Execution (Framer, Webflow, Dora)"
                                ].map((item, i) => (
                                    <li key={i} className="group flex items-baseline gap-6 py-6 border-b border-black/5 hover:border-black/20 transition-colors cursor-default">
                                        <span className="text-xs font-mono text-black/30">0{i + 1}</span>
                                        <span className="text-xl md:text-2xl font-light group-hover:pl-2 transition-all duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Deliverables Cards */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-10 text-black/40">Deliverables</h3>
                            <div className="space-y-6">
                                <div className="group p-8 border border-black/5 bg-white hover:bg-black hover:text-white transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-2xl font-serif">The Content Machine</h4>
                                        <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="font-light opacity-80 mb-6">Automated workflow system using Opus, Glide, & Make.</p>
                                    <div className="flex gap-2 text-[10px] md:text-xs">
                                        {['HEIGEN', 'OPUS', 'PREMIERE'].map(tag => (
                                            <span key={tag} className="border border-current px-2 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="group p-8 border border-black/5 bg-white hover:bg-black hover:text-white transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-2xl font-serif">The Playbook</h4>
                                        <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="font-light opacity-80">
                                        Your "README.md" for design. A documentation of your entire journey and cognitive patterns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REMUNERATION - High-End Layout */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto bg-[#111111] text-[#E5E5E5] rounded-[2rem] overflow-hidden relative">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 min-h-[600px]">
                        <div className="p-12 md:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-none">The<br />Rewa—rd</h2>
                                <p className="text-white/60 text-lg max-w-sm font-light">
                                    We believe in disproportionate rewards for disproportionate outputs.
                                </p>
                            </div>

                            <div className="mt-16 space-y-8">
                                <div>
                                    <div className="text-5xl md:text-7xl font-light tracking-tighter mb-2">40K<span className="text-2xl align-top opacity-50">+</span></div>
                                    <div className="text-sm uppercase tracking-widest opacity-40">INR Total Remuneration</div>
                                </div>
                                <div className="flex flex-col gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                                    <div className="flex justify-between items-center text-lg font-light">
                                        <span>Week 6 Milestone</span>
                                        <span className="font-mono opacity-80">20,000 INR</span>
                                    </div>
                                    <div className="h-[1px] w-full bg-white/10 my-1"></div>
                                    <div className="flex justify-between items-center text-lg font-light">
                                        <span>Completion</span>
                                        <span className="font-mono opacity-80">20,000 INR</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-[#D4B483] pt-2">
                                        <span>Variable Bonus</span>
                                        <span className="font-mono">2k - 10k INR</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 md:p-20 flex flex-col justify-center relative z-10 bg-white/[0.02]">
                            <h3 className="text-2xl font-serif mb-12">Network & Resources</h3>

                            <div className="space-y-10">
                                <div className="group">
                                    <span className="block text-xs font-bold uppercase tracking-widest text-white/30 mb-2 group-hover:text-[#D4B483] transition-colors">Access</span>
                                    <p className="text-2xl text-white/90 font-light leading-snug">
                                        Warm introductions to LocalHost Fellows, GrowthX community, and The Knowledge Society.
                                    </p>
                                </div>

                                <div className="group">
                                    <span className="block text-xs font-bold uppercase tracking-widest text-white/30 mb-2 group-hover:text-[#D4B483] transition-colors">Career</span>
                                    <p className="text-2xl text-white/90 font-light leading-snug">
                                        Strategic assistance to land premium freelance clients (Founders & Startups).
                                    </p>
                                </div>

                                <div className="pt-10 border-t border-white/10">
                                    <a href="https://growth.design/case-studies" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        Coming soon: TMS Production Access <span className="text-xs opacity-50">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 flex flex-col items-center justify-center text-center bg-white px-6">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to define the future?</h2>
                <a href="https://tally.so/r/D4KXkl" target="_blank" className="relative group overflow-hidden bg-black text-white px-12 py-5 rounded-full font-medium text-lg transition-transform hover:-translate-y-1">
                    <span className="relative z-10">Begin Application</span>
                </a>
            </section>

            <CtaFooter />
        </main>
    );
}
