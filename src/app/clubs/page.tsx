"use client";

import React, { useState } from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import { Instrument_Serif, Inter } from "next/font/google";
import {
    Users, Library, Award, Globe, ArrowRight,
    ChevronDown, Zap, Shield, Target, Sparkles,
    Plus, Minus
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// --- Fonts ---
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// --- Sub-Components ---

// 1. Crystal Card Effect (Light Mode Premium)
function CrystalCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`group relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-100 z-0" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

// 2. Gradient Blob Background
function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/20 rounded-full blur-[100px] mix-blend-multiply"
            />
            <motion.div
                animate={{
                    x: [100, -100, 100],
                    y: [50, -50, 50],
                    rotate: [360, 180, 0],
                    scale: [1.2, 1, 1.2]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply"
            />
            <motion.div
                animate={{
                    x: [-50, 50, -50],
                    y: [100, -100, 100],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-orange-100/30 rounded-full blur-[120px] mix-blend-multiply"
            />
        </div>
    );
}

// 3. FAQ Accordion Item
function AccordionItem({ question, answer, i }: { question: string, answer: string, i: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-gray-100 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <span className="text-xl font-serif text-zinc-900 group-hover:text-black transition-colors">{question}</span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 transition-all duration-300 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-white text-zinc-400'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-zinc-500 leading-relaxed pr-8">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// --- Main Page Component ---

export default function ClubsPage() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

    return (
        <main className={`min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-black selection:text-white ${instrumentSerif.variable} ${inter.variable} font-sans overflow-x-hidden`}>
            {/* Inline Styles for hiding scrollbar */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <Navbar />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-black/80 z-[100] origin-left"
                style={{ scaleX: smoothProgress }}
            />

            <AmbientBackground />

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 px-6 z-10">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-10 shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">The Network v2.0</span>
                            </motion.div>

                            <motion.h1
                                className="text-[14vw] lg:text-[7.5rem] leading-[0.9] font-serif tracking-tight text-neutral-950 mb-8"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Student <span className="italic text-black/40">Clubs</span><br />
                                Reimagined.
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                We provide the operating system for high-agency communities.
                                <strong className="text-black font-medium"> Capital, resources, and connections</strong> to turn campus interest into global leverage.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <a href="#start-club" className="px-10 py-4 bg-zinc-950 text-white rounded-full font-medium text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                                    Start a Chapter <ArrowRight size={18} />
                                </a>
                                <button className="px-10 py-4 bg-white border border-gray-200 text-black rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                                    View Leaderboard
                                </button>
                            </motion.div>
                        </div>

                        {/* REFINED HERO CARD - PREMIUM DARK GLASS */}
                        <motion.div
                            className="lg:col-span-4 relative perspective-1000"
                            initial={{ opacity: 0, rotateX: 10, y: 40 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
                        >
                            <div className="relative z-10 bg-[#0A0A0A] p-8 rounded-[24px] shadow-2xl border border-white/10 text-white overflow-hidden group">
                                {/* Subtle internal gradients */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/20 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 blur-[80px] rounded-full pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-10 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                                            <Sparkles size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <div className="font-serif text-2xl tracking-wide">Xcelens Elite</div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Invitation Only</div>
                                        </div>
                                    </div>
                                    <Globe className="text-white/20" />
                                </div>

                                <div className="space-y-8 relative z-10">
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-sm text-white/40 font-medium">Network Volume</span>
                                            <span className="text-2xl font-mono">$124,500</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[78%] bg-white rounded-full relative">
                                                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent opacity-50"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl font-serif mb-1">52</div>
                                            <div className="text-[10px] uppercase tracking-wider text-white/40">Chapters</div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl font-serif mb-1">12k</div>
                                            <div className="text-[10px] uppercase tracking-wider text-white/40">Members</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Shadow/Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-b from-black/20 to-transparent blur-xl -z-10 rounded-[3rem]"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTELLECTUAL CAPITAL - FEATURES */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 md:text-center max-w-3xl mx-auto">
                        <motion.h2
                            className="text-5xl md:text-6xl font-serif mb-6 text-zinc-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            The Resource Vault.
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-500 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            More than just a club. We inject premium intellectual and operational capital into your ecosystem.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Library className="text-blue-600" size={32} strokeWidth={1.5} />,
                                title: "Proprietary Data",
                                desc: "Access Xcelens research databases, case study repositories, and framework libraries."
                            },
                            {
                                icon: <Users className="text-indigo-600" size={32} strokeWidth={1.5} />,
                                title: "Peer Network",
                                desc: "Connect with Presidents of other elite chapters. Bi-weekly roundtables and shared Slack."
                            },
                            {
                                icon: <Award className="text-orange-600" size={32} strokeWidth={1.5} />,
                                title: "Credentialing",
                                desc: "Certificates of Excellence for leadership teams, endorsed by our global advisory board."
                            },
                            {
                                icon: <Globe className="text-emerald-600" size={32} strokeWidth={1.5} />,
                                title: "Global Access",
                                desc: "Priority entry to Xcelens summits in Singapore, Dubai, and Bangalore."
                            },
                            {
                                icon: <Zap className="text-yellow-600" size={32} strokeWidth={1.5} />,
                                title: "Growth Kits",
                                desc: "Marketing templates, sponsorship decks, and event run-books ready to deploy."
                            },
                            {
                                icon: <Shield className="text-red-600" size={32} strokeWidth={1.5} />,
                                title: "Mentorship",
                                desc: "Direct office hours with industry veterans and Xcelens fellows."
                            }
                        ].map((item, i) => (
                            <CrystalCard key={i} className="p-8 md:p-10 flex flex-col items-start gap-8 hover:-translate-y-2 transition-transform duration-500">
                                {/* Explicit container sizing for icon stability */}
                                <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-zinc-900 group-hover:text-black">{item.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed font-light text-base">{item.desc}</p>
                                </div>
                            </CrystalCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLUEPRINT Timeline */}
            <section id="start-club" className="py-32 px-6 bg-white border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-start">
                        <div className="sticky top-40">
                            <h2 className="text-6xl md:text-8xl font-serif text-zinc-900 leading-none mb-10">
                                Build <br /> The <br /> <span className="text-zinc-300">Future.</span>
                            </h2>
                            <p className="text-xl text-zinc-500 mb-12 max-w-md">
                                Follow our proven 4-stage ratification process to transform your idea into an institution.
                            </p>
                            <button className="px-8 py-3 bg-zinc-100 hover:bg-zinc-200 text-black rounded-full font-medium transition-colors">
                                Download Handbook PDF
                            </button>
                        </div>

                        <div className="relative pl-8 md:pl-0">
                            <div className="absolute left-0 md:left-[39px] top-0 bottom-0 w-px bg-gray-200"></div>

                            {[
                                { step: "01", title: "Manifesto", desc: "Draft a constitution. Define your 'Why'. We provide templates for a compelling mission statement." },
                                { step: "02", title: "Core Team", desc: "Recruit your cabinet. President, Treasurer, Head of Ops. We need at least 3 founding members." },
                                { step: "03", title: "Ratification", desc: "Submit your charter to Xcelens. We vet for viability, potential impact, and institutional alignment." },
                                { step: "04", title: "Launch", desc: "Receive your 'Chapter Zero' kit. Digital assets, physical branding, and seed grant eligibility." }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    className="mb-20 relative pl-12"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="hidden md:block absolute left-[30px] top-2 w-5 h-5 rounded-full bg-white border-4 border-black z-10 transition-transform hover:scale-150 shadow-sm" />
                                    <div className="md:hidden absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-black z-10" />

                                    <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2 block">Phase {phase.step}</span>
                                    <h3 className="text-3xl font-serif mb-4 text-zinc-900">{phase.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed text-lg font-light">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HALL OF FAME - UPGRADED CARDS */}
            <section className="py-32 px-6 overflow-hidden bg-[#FAFAFA]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-5xl font-serif text-zinc-900">Hall of Fame</h2>
                        <div className="hidden md:flex gap-2">
                            {/* Nav Placeholders */}
                        </div>
                    </div>

                    <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar px-2">
                        {[
                            { name: "FinTech Society", uni: "Christ University", feat: "National Trading League", badge: "🏆 TOP PERFORMER" },
                            { name: "Design Collective", uni: "NIFT Bengaluru", feat: "Tokyo Design Week Feature", badge: "🎨 MOST CREATIVE" },
                            { name: "Policy Lab", uni: "Ashoka University", feat: "Municipal Policy Paper", badge: "📜 POLICY AWARD" },
                            { name: "Robotics Guild", uni: "IIT Delhi", feat: "Drone Swarm Research", badge: "🤖 INNOVATION" }
                        ].map((club, i) => (
                            <motion.div
                                key={i}
                                className="min-w-[340px] md:min-w-[440px] p-10 rounded-[32px] bg-white snap-center hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 cursor-pointer group flex flex-col justify-between h-[420px]"
                                whileHover={{ y: -10 }}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-zinc-950 text-white flex items-center justify-center font-serif text-2xl relative overflow-hidden">
                                            {/* Pseudo Logo */}
                                            <span className="z-10">{club.name.charAt(0)}</span>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold tracking-widest uppercase text-zinc-500 group-hover:bg-black group-hover:text-white transition-colors">
                                            {club.uni}
                                        </div>
                                    </div>
                                    <h3 className="text-4xl font-serif text-zinc-900 mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">{club.name}</h3>
                                    <p className="text-zinc-500 font-light text-lg">"{club.feat}"</p>
                                </div>

                                <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{club.badge}</span>
                                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                        <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - ANIMATED ACCORDION */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif mb-12 text-center text-zinc-900">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do we need faculty approval?", a: "Yes. Faculty advisors ensure institutional memory and longevity for the club. We provide a Faculty Pitch Deck to help you secure one." },
                            { q: "Is there a fee?", a: "No. Xcelens is a merit-based network. We invest in you through grants and resources, not the other way around." },
                            { q: "Can we migrate an existing club?", a: "Absolutely. We provide a 'Migration Kit' to upgrade your existing operations to Xcelens standards while retaining your history." },
                            { q: "What resources do we get immediately?", a: "Upon Ratification, you receive the Chapter Zero kit containing branding assets, a notion workspace template, and access to the Xcelens Vault." }
                        ].map((faq, i) => (
                            <AccordionItem key={i} question={faq.q} answer={faq.a} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* INSTITUTIONAL CTA */}
            <section className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
                <div className="max-w-[1400px] mx-auto bg-zinc-950 rounded-[3rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10">
                        <Target className="w-16 h-16 mx-auto mb-8 text-white/90" />
                        <h2 className="text-5xl md:text-7xl font-serif mb-8">Bring Xcelens to Campus.</h2>
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                            Empower your student body with the world's most advanced community infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                Partner As Institution
                            </button>
                            <button className="px-10 py-4 border border-white/20 hover:bg-white/10 rounded-full font-medium transition-colors">
                                Contact Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CtaFooter />
        </main>
    );
}
