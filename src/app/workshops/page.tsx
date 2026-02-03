"use client";

import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight, ArrowRight, Play, BookOpen, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

const fadeInSlow: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
};

const staggerGrid: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const slideUp: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WorkshopsPage() {
    return (
        <main className={`min-h-screen bg-[#050505] text-[#E5E5E5] ${instrumentSerif.variable} selection:bg-white selection:text-black`}>
            <Navbar />

            {/* HERO SECTION - Deep & Philosophical */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
                {/* Subtle Grain/Noise Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")' }}></div>

                {/* Ambient Glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.span
                        className="inline-block py-1 px-4 border border-white/10 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-8 backdrop-blur-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        The Xcelens Atelier
                    </motion.span>

                    <motion.h1
                        className="text-[12vw] md:text-[8rem] leading-[0.85] font-serif tracking-tight mb-8 text-white mix-blend-overlay"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Design Your <br />
                        <span className="italic text-white opacity-90">Mind.</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                        variants={fadeInSlow}
                        initial="hidden"
                        animate="visible"
                    >
                        We don't just teach skills; we re-architect frameworks. Blending hard technical mastery with philosophical depth for the intermediate to the expert.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <a href="#schedule" className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-full text-base font-medium overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Schedule <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <span className="text-sm text-white/40">Next Season Begins Oct 2026</span>
                    </motion.div>
                </div>
            </section>

            {/* PHILOSOPHY & STRUCTURE - Grid Layout */}
            <section className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-16">
                        <div className="md:col-span-4 sticky top-24 self-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-6xl font-serif mb-6 leading-tight">The Anatomy of Learning</h2>
                                <p className="text-white/50 text-lg">Our pedagogical approach is designed to break inertia and induce flow.</p>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 grid gap-8">
                            {[
                                {
                                    icon: <BookOpen className="w-6 h-6" />,
                                    title: "Theory & Frameworks",
                                    desc: "Deconstructing first principles. We strip away the noise to understand the 'Why' before the 'How'."
                                },
                                {
                                    icon: <Users className="w-6 h-6" />,
                                    title: "Interactive Synthesis",
                                    desc: "Peer-to-peer friction. We mandate debate, role-play, and collaborative problem solving to solidify concepts."
                                },
                                {
                                    icon: <Play className="w-6 h-6" />,
                                    title: "Radical Application",
                                    desc: "Zero-stake practice contexts followed by high-stake real-world execution. The only proof of knowledge is output."
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="group p-10 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-500"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-4 text-indigo-400">
                                        {step.icon}
                                        <span className="text-xs font-mono uppercase tracking-widest text-white/30">Phase 0{i + 1}</span>
                                    </div>
                                    <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                                    <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILL CATEGORIES - Horizontal Scroll or Grid */}
            <section className="py-32 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-20 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-4 block">Curriculum</span>
                        <h2 className="text-5xl md:text-7xl font-serif">Areas of Mastery</h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { title: "Life Design", tags: ["Systems Thinking", "Habit Arch.", "Philosophy"] },
                            { title: "Decision Intelligence", tags: ["Game Theory", "Mental Models", "Risk"] },
                            { title: "AI Synthesis", tags: ["LLM Prompting", "Workflow Auto", "Creative AI"] }
                        ].map((area, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#050505] p-12 hover:bg-[#0a0a0a] transition-colors group"
                                variants={slideUp}
                            >
                                <h3 className="text-3xl font-serif mb-8 group-hover:text-indigo-300 transition-colors">{area.title}</h3>
                                <div className="space-y-3">
                                    {area.tags.map(tag => (
                                        <div key={tag} className="flex items-center gap-3 text-white/50">
                                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                            <span className="font-mono text-sm">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WORKSHOPS LIST - Sorted by Season */}
            <section id="schedule" className="py-32 px-6 bg-[#0E0E0E]">
                <div className="max-w-7xl mx-auto">

                    {/* SEASON HEADER */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0 mb-16 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2 block">Current Season</span>
                            <h2 className="text-5xl font-serif">Season 04: The Awakening</h2>
                        </div>
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
                            <button className="whitespace-nowrap px-4 py-2 rounded-full border border-white/10 text-sm text-white/50 hover:bg-white hover:text-black transition-colors">Season 03</button>
                            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-white text-black text-sm font-medium">Season 04</button>
                            <button className="whitespace-nowrap px-4 py-2 rounded-full border border-white/10 text-sm text-white/50 hover:bg-white hover:text-black transition-colors">Season 05</button>
                        </div>
                    </div>

                    {/* FEATURED / UPCOMING */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-24">
                        <motion.div
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Placeholder for workshop image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/20 transition-colors duration-500"></div>

                            <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Flagship</span>
                                        <h3 className="text-4xl font-serif mb-2">Sat School</h3>
                                        <p className="text-white/70 mb-6 max-w-md">Our premier weekend intensive for high-agency individuals. The absolute convergence of all our pillars.</p>
                                    </div>
                                    <a href="/sat-school" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                { date: "Oct 12", title: "Cognitive Architecture", status: "Open" },
                                { date: "Nov 04", title: "AI for Creatives", status: "Filling Fast" },
                                { date: "Dec 10", title: "Systems Leadership", status: "Waitlist" }
                            ].map((ws, i) => (
                                <motion.div
                                    key={i}
                                    className="p-8 border border-white/10 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group"
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="flex flex-col text-center w-16">
                                            <span className="text-sm font-bold uppercase tracking-widest text-white/40">{ws.date.split(' ')[0]}</span>
                                            <span className="text-2xl font-serif">{ws.date.split(' ')[1]}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-serif group-hover:text-indigo-400 transition-colors">{ws.title}</h4>
                                            <span className="text-xs text-white/40 uppercase tracking-widest">Single Session • 4 Hours</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${ws.status === 'Open' ? 'border-green-500/30 text-green-400' :
                                            ws.status === 'Waitlist' ? 'border-red-500/30 text-red-400' : 'border-yellow-500/30 text-yellow-400'
                                            }`}>
                                            {ws.status}
                                        </span>
                                        <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* PAST ARCHIVE */}
                    <div className="pt-20 border-t border-white/5">
                        <h3 className="text-2xl font-serif mb-8 text-white/60">Archive / Past Workshops</h3>
                        <div className="grid md:grid-cols-4 gap-6 opacity-60 hover:opacity-100 transition-opacity">
                            {[
                                "Season 01: Origins",
                                "Season 02: Expansion",
                                "Design Thinking 101",
                                "No-Code Summer"
                            ].map((item, i) => (
                                <div key={i} className="p-6 border border-white/5 rounded-xl hover:border-white/20">
                                    <h4 className="font-serif text-lg mb-2">{item}</h4>
                                    <span className="text-xs text-white/40 uppercase tracking-widest">Completed</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 px-6 flex flex-col items-center text-center bg-[#050505]">
                <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-6">Join the Intellectual Dojo</span>
                <motion.h2
                    className="text-5xl md:text-8xl font-serif mb-10 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Master Your Craft.
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <motion.button
                        className="btn-pill bg-white text-black px-12 py-4 text-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        Subscribe for Updates
                    </motion.button>
                    <motion.button
                        className="btn-pill border border-white/20 text-white px-12 py-4 text-lg hover:bg-white/5"
                        whileHover={{ scale: 1.05 }}
                    >
                        Request Custom Session
                    </motion.button>
                </div>
            </section>

            <CtaFooter />
        </main>
    );
}
