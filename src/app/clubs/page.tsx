"use client";

import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import { Instrument_Serif } from "next/font/google";
import { Users, Library, Award, Globe, ArrowRight, Rocket, School, ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function ClubsPage() {
    return (
        <main className={`min-h-screen bg-[#FDFBF7] text-[#1A1A1A] ${instrumentSerif.variable}`}>
            <Navbar />

            {/* HERO - Institutional & Grand */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-black/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <motion.div
                            className="max-w-4xl"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-black/40">Xcelens Network</span>
                            </motion.div>
                            <h1 className="text-[10vw] md:text-[7.5rem] leading-[0.9] font-serif tracking-tight text-black mb-8 overflow-hidden">
                                <motion.div variants={fadeInUp}>Student Clubs</motion.div>
                                <motion.div variants={fadeInUp} className="text-black/30">& Communities</motion.div>
                            </h1>
                            <motion.p
                                variants={fadeInUp}
                                className="text-xl md:text-2xl font-light text-black/70 max-w-2xl leading-relaxed"
                            >
                                Empowering students and institutions to operationalize intellectual curiosity. We provide the capital, the framework, and the network to sustain high-agency interest groups.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="md:w-auto w-full"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <div className="p-8 bg-[#1A1A1A] text-white rounded-2xl max-w-sm ml-auto shadow-2xl">
                                <div className="text-3xl font-serif mb-2">50+</div>
                                <div className="text-sm text-white/60 mb-6">Active clubs across partner institutions</div>
                                <a href="#start-club" className="w-full py-3 bg-white text-black text-center rounded-full font-medium block hover:bg-white/90 transition-colors">
                                    Start a Club
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTELLECTUAL CAPITAL - The Offering */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <motion.div
                            className="lg:col-span-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl font-serif mb-6">Intellectual Capital</h2>
                            <p className="text-lg text-black/60 font-light">
                                A club is only as good as its resources. We inject premium assets into your ecosystem to ensure longevity and quality.
                            </p>
                        </motion.div>
                        <motion.div
                            className="lg:col-span-8 grid md:grid-cols-2 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: <Library className="text-blue-600" />, title: "Resource Vault", desc: "Access to Xcelens proprietary frameworks, playbooks, and research databases." },
                                { icon: <Users className="text-orange-600" />, title: "Peer Learning", desc: "Cross-pollination with other elite clubs. Joint sessions, debates, and hackathons." },
                                { icon: <Award className="text-purple-600" />, title: "Leadership Dev", desc: "Specialized training for Club Leads on governance, operations, and succession planning." },
                                { icon: <Globe className="text-green-600" />, title: "Global Access", desc: "Direct line to our fellowship network and international mentors." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="group p-8 border border-black/10 rounded-2xl hover:shadow-xl transition-all duration-300 bg-[#FAFAFA] hover:bg-white"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-white border border-black/5 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW TO START - The Framework */}
            <section id="start-club" className="py-32 px-6 md:px-12 bg-[#F3F3F3]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.h2
                        className="text-5xl md:text-6xl font-serif text-center mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Blueprint to Launch
                    </motion.h2>

                    <div className="relative">
                        {/* Connecting Line */}
                        <motion.div
                            className="absolute top-1/2 left-0 w-full h-[2px] bg-black/5 hidden md:block -translate-y-1/2 z-0"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />

                        <motion.div
                            className="grid md:grid-cols-4 gap-8 relative z-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { step: "01", title: "Manifesto", desc: "Define your club's thesis and constitution using our template." },
                                { step: "02", title: "Core Team", desc: "Recruit a President, Treasurer, and Ops Lead. Min 3 members." },
                                { step: "03", title: "Ratification", desc: "Submit application for Xcelens review and institutional approval." },
                                { step: "04", title: "Integration", desc: "Receive welcome kit, grant access, and launch event budget." }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="text-6xl font-serif text-black/5 mb-6">{phase.step}</div>
                                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                                    <p className="text-sm text-black/60">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:px-10 transition-all">
                            <Rocket size={18} /> Download Launch Toolkit
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* CASE STUDIES - Success Stories */}
            <section className="py-32 px-6 md:px-12 overflow-hidden bg-[#1A1A1A] text-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-5xl font-serif">Club Showcase</h2>
                        <a href="#" className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                            View all 50+ clubs <ArrowRight size={16} />
                        </a>
                    </div>

                    <motion.div
                        className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { name: "The FinTech Society", school: "Christ University", feat: "Hosted a national algo-trading hackathon with 500+ participants." },
                            { name: "Design & Ethics", school: "NIFT Bengaluru", feat: "Published a collaborative zine on 'AI in Fashion' distributed globally." },
                            { name: "Robotics Collective", school: "RV College", feat: "Secured $10k sponsorship for drone swarming research project." },
                            { name: "Debate Union", school: "Ashoka University", feat: "Won the Asian Parliamentary Championship 2025." }
                        ].map((club, i) => (
                            <motion.div
                                key={i}
                                className="min-w-[300px] md:min-w-[400px] bg-white/5 border border-white/10 rounded-2xl p-10 snap-center hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                                    <div>
                                        <h3 className="text-xl font-bold font-serif leading-none">{club.name}</h3>
                                        <span className="text-xs text-white/40 uppercase tracking-widest">{club.school}</span>
                                    </div>
                                </div>
                                <p className="text-lg font-light text-white/80 italic">"{club.feat}"</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQs - Accordion Style */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do we need faculty approval to start?", a: "Yes, we require one faculty advisor to sign off on the ratification charter to ensure institutional alignment." },
                            { q: "Is there a cost to join Xcelens Network?", a: "No. Institutional partnership is free. We operate on a grant, sponsorship, and fellowship recruitment model." },
                            { q: "Can we rebrand an existing club?", a: "Absolutely. We offer 'Migration Kits' to help existing clubs upgrade their operations and access our resources immediately." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                className="group border-b border-black/10 pb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-xl font-medium group-hover:pl-2 transition-all">{faq.q}</h3>
                                    <ChevronDown className="text-black/30 group-hover:text-black transition-colors" />
                                </div>
                                <p className="mt-4 text-black/60 hidden group-hover:block transition-all animate-fade-in pl-2">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INSTITUTIONAL CTA */}
            <section className="py-24 px-6 md:px-12 bg-[#F3F3F3]">
                <motion.div
                    className="max-w-[1400px] mx-auto bg-white rounded-[40px] p-12 md:p-24 text-center border border-black/5 shadow-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-8">
                        <School size={32} />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 text-black">Integrate Clubs Today.</h2>
                    <p className="text-xl text-black/50 max-w-2xl mx-auto mb-12">
                        For Deans and Student Councils: Bring the Xcelens infrastructure to your campus. Enhance student life with zero overhead.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-10 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform text-lg">
                            Partner with Us
                        </button>
                        <button className="px-10 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors text-lg">
                            Download Prospectus
                        </button>
                    </div>
                </motion.div>
            </section>

            <CtaFooter />
        </main>
    );
}
