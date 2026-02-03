import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight } from 'lucide-react';

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

export default function LabsPage() {
    return (
        <main className={`min-h-screen bg-[#FDFBF7] text-[#111] ${instrumentSerif.variable}`}>
            <Navbar />

            {/* HERO - Ultra Minimal & Bold */}
            <section className="pt-48 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <span className="inline-block py-1 px-3 border border-black/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">Labs & Studio</span>
                        <h1 className="text-[10vw] md:text-[7rem] leading-[0.85] font-serif tracking-tight mb-12">
                            We Engineer <br />
                            <span className="italic font-light opacity-60">Outcomes.</span>
                        </h1>
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-end pb-4">
                        <p className="text-lg md:text-xl font-light leading-relaxed border-l border-black/20 pl-6">
                            Labs is our playground. Studio is our engine. We bridge the gap between "Napkin Sketch" and "Market Dominance" for elite funders.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS - Timeline Style */}
            <section className="py-32 border-t border-black/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
                        <h2 className="text-6xl font-serif">The Process</h2>
                        <span className="text-sm font-mono text-black/40 uppercase tracking-widest mt-4 md:mt-0">Rigorous • Transparent • Rapid</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10 border-t border-b border-black/10">
                        {[
                            { step: "01", title: "Pitch & Filter", desc: "We validate validity, market fit, and technical feasibility." },
                            { step: "02", title: "Squad Assembly", desc: "Recruiting a bespoke team from our fellowship pool." },
                            { step: "03", title: "Build & Model", desc: "Rapid prototyping sprints and MVP development." },
                            { step: "04", title: "Scale or Kill", desc: "Data-driven decisions. Scale if it works, pivot if it doesn't." }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 md:p-12 hover:bg-[#F3F3F3] transition-colors duration-500 min-h-[300px] flex flex-col justify-between">
                                <span className="text-sm font-mono text-black/30 mb-8 block">{item.step}</span>
                                <div>
                                    <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                                    <p className="text-sm text-black/60 leading-relaxed font-light font-sans">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUDIENCE & CONTROL - Dark Theme Contrast */}
            <section className="py-24 mx-4 md:mx-6 bg-[#111] rounded-[40px] text-[#E5E5E5] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                    {/* Top Row: Who is this for */}
                    <div className="grid lg:grid-cols-2 gap-24 mb-32">
                        <div>
                            <h2 className="text-5xl font-serif mb-12">Who is this for?</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "VCs & Angels", desc: "Who have a thesis but no operational bandwidth." },
                                    { title: "Domain Experts", desc: "Doctors, Lawyers, Engineers with industry secrets." },
                                    { title: "Corporate Innovation", desc: "R&D units needing speed outside bureaucracy." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-baseline group">
                                        <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                                        <div className="border-b border-white/10 pb-8 w-full group-hover:border-white/30 transition-colors">
                                            <h4 className="text-2xl font-serif mb-2">{item.title}</h4>
                                            <p className="text-white/50 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

                            <h2 className="text-5xl font-serif mb-12 relative z-10">Strategic Control</h2>
                            <div className="grid gap-6 relative z-10">
                                <div className="p-10 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-crosshair">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-serif">Retain Control</h3>
                                        <span className="px-3 py-1 text-[10px] uppercase tracking-widest border border-white/20 rounded-full">Hands-on</span>
                                    </div>
                                    <p className="text-white/60 font-light">You act as CEO. We are your fractional C-Suite.</p>
                                </div>
                                <div className="p-10 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-crosshair">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-serif">Delegate Leadership</h3>
                                        <span className="px-3 py-1 text-[10px] uppercase tracking-widest border border-white/20 rounded-full">Hands-off</span>
                                    </div>
                                    <p className="text-white/60 font-light">We appoint an interim CEO. You act as Chairman.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Funding Models */}
                    <div className="pt-20 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <h2 className="text-5xl font-serif">Funding Models</h2>
                            <p className="text-white/40">Flexible structures aligned with incentives.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Equity", sub: "Shared Risk", desc: "We take a stake in exchange for reduced fees." },
                                { title: "Debt / RevShare", sub: "Cash Flow", desc: "Venture debt or Revenue Share Agreements." },
                                { title: "Fee / Grant", sub: "Transactional", desc: "Standard service fee. You retain 100% equity." }
                            ].map((model, i) => (
                                <div key={i} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4B483] mb-4 block">{model.sub}</span>
                                    <h3 className="text-3xl font-serif mb-4">{model.title}</h3>
                                    <p className="text-white/50 text-sm">{model.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SCENARIOS */}
            <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-serif mb-16 text-center">Projected Scenarios</h2>
                <div className="grid md:grid-cols-3 gap-12 group-hover-container">
                    <div className="text-center p-8 transition-opacity duration-500 hover:opacity-100 opacity-50 hover:scale-105">
                        <span className="text-xs font-bold uppercase text-red-500 tracking-widest mb-4 block">Worst Case</span>
                        <h3 className="text-2xl font-serif mb-4">Fast Fail</h3>
                        <p className="text-black/60 font-light text-sm leading-relaxed">Small exploration budget lost. Millions saved in opportunity cost.</p>
                    </div>

                    <div className="text-center p-8 scale-105 border-x border-black/5 bg-[#F9F9F9]">
                        <span className="text-xs font-bold uppercase text-black/40 tracking-widest mb-4 block">Base Case</span>
                        <h3 className="text-2xl font-serif mb-4">Sustainable Biz</h3>
                        <p className="text-black/60 font-light text-sm leading-relaxed">A solid product solving a real problem. Generates revenue and sustains itself.</p>
                    </div>

                    <div className="text-center p-8 transition-opacity duration-500 hover:opacity-100 opacity-50 hover:scale-105">
                        <span className="text-xs font-bold uppercase text-green-600 tracking-widest mb-4 block">Best Case</span>
                        <h3 className="text-2xl font-serif mb-4">The Unicorn</h3>
                        <p className="text-black/60 font-light text-sm leading-relaxed">Deep market resonance. Viral growth. Ready for Series A.</p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="bg-white border-t border-black/5 py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl md:text-8xl font-serif mb-12">Start Building.</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left mb-16 max-w-2xl mx-auto">
                        <div className="p-8 bg-[#FAFAFA] border border-black/5">
                            <span className="font-mono text-xs text-black/30 mb-2 block">01</span>
                            <h4 className="font-bold text-lg mb-2">Book a Call</h4>
                            <p className="text-sm text-black/60 font-light">Paid consultation to filter intent. Fee waiver available via referral.</p>
                        </div>
                        <div className="p-8 bg-[#FAFAFA] border border-black/5">
                            <span className="font-mono text-xs text-black/30 mb-2 block">02</span>
                            <h4 className="font-bold text-lg mb-2">Recruit & Build</h4>
                            <p className="text-sm text-black/60 font-light">We assemble the squad and execute immediately.</p>
                        </div>
                    </div>

                    <a href="/contact" className="inline-flex items-center gap-3 text-lg font-medium hover:gap-6 transition-all duration-300 group">
                        Pitch Your Idea <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            <CtaFooter />
        </main>
    );
}
