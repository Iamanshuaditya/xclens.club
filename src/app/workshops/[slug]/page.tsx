"use client";

import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import {
    ArrowRight, Clock, Users, MapPin, Laptop, NotebookPen,
    FileText, ChevronDown, CheckCircle2, XCircle
} from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// ─── Animation Variants ─────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const staggerItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// ─── FAQ Accordion ──────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="border-t border-white/10">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-white group-hover:text-white/80 transition-colors pr-8">
                    {question}
                </span>
                <ChevronDown
                    size={20}
                    className={`text-white/40 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/50 text-base leading-relaxed pb-6 max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Workshop Data (placeholder — will be dynamic later) ────────────

const workshop = {
    title: "Master the Art of Personal Branding",
    season: "Season 04",
    date: "March 15, 2026",
    time: "2:00 PM IST",
    duration: "2 Hours",
    format: "Live on Zoom",
    price: "₹499",
    priceNote: "Members get 50% off",
    level: "Intermediate",
    maxParticipants: 30,
    spotsLeft: 8,
    hook: "Most students spend 4 years building skills but zero time building a brand. In 2 hours, you'll walk away with a personal brand strategy that makes recruiters come to you — not the other way around.",
    learnings: [
        "Build a compelling LinkedIn profile that attracts opportunities without cold outreach",
        "Craft your personal positioning statement — the 10 words that define your professional identity",
        "Create a 30-day content calendar tailored to your niche and career goals",
        "Master the art of storytelling to make your experiences resonate with any audience",
        "Set up a personal website in under 15 minutes using a proven template",
    ],
    forYou: [
        "You're a student feeling lost about career direction and want clarity",
        "You have skills but nobody knows about them yet",
        "You want to stand out in internship and job applications",
        "You're ready to invest 2 hours for a skill that compounds forever",
    ],
    notForYou: [
        "You're looking for a quick-fix hack to go viral overnight",
        "You're not willing to put in consistent effort after the workshop",
        "You already have an established brand and 10k+ followers",
    ],
    agenda: [
        { time: "00:00", title: "Check-in & Introductions", desc: "Get to know your cohort, set intentions for the session" },
        { time: "00:15", title: "Concept Deep-Dive", desc: "The anatomy of a personal brand — frameworks, examples, and psychology" },
        { time: "00:45", title: "Hands-on Exercise", desc: "Build your brand kit live — positioning statement, bio, and profile audit" },
        { time: "01:30", title: "Breakout Discussions", desc: "Small group sessions to review each other's brands and give feedback" },
        { time: "01:50", title: "Q&A + Next Steps", desc: "Open floor for questions, plus your 7-day post-workshop action plan" },
    ],
    coach: {
        name: "Priya Sharma",
        bio: "Brand strategist who's helped 500+ students land dream roles at Google, McKinsey, and top startups. Former Head of Marketing at a YC-backed startup. TEDx speaker on the future of personal branding.",
    },
    whatToBring: [
        { icon: "laptop", title: "Laptop", desc: "For the hands-on profile building exercise" },
        { icon: "notebook", title: "Notebook", desc: "To jot down frameworks and personal reflections" },
        { icon: "linkedin", title: "LinkedIn Login", desc: "We'll be editing your profile live during the session" },
        { icon: "prework", title: "Pre-work", desc: "Complete the 5-minute brand audit quiz (sent after registration)" },
    ],
    faqs: [
        { q: "Will the session be recorded?", a: "Yes! All registered participants receive a recording within 24 hours. However, the magic happens live — breakout rooms and real-time feedback can't be replicated." },
        { q: "What's the refund policy?", a: "Full refund up to 48 hours before the workshop. After that, you can transfer your spot to a friend or attend the next cohort." },
        { q: "What if I can't attend live?", a: "You'll get the recording, slides, and all templates. But we strongly recommend attending live for the interactive exercises and peer feedback." },
        { q: "Do I need any prior experience?", a: "Nope. This workshop is designed for students who are starting from scratch. We'll meet you exactly where you are." },
    ],
    testimonials: [
        { quote: "I went from 200 to 3,000 LinkedIn followers in 2 months after this workshop. The positioning exercise alone was worth 10x the price.", author: "Arjun M.", school: "IIT Delhi" },
        { quote: "Finally understood why my resume wasn't getting callbacks. Fixed my brand in one session and landed 3 interviews that week.", author: "Sneha R.", school: "BITS Pilani" },
        { quote: "Priya doesn't just teach theory — she makes you build it right there. I walked out with a complete brand kit and a content plan.", author: "Kavya S.", school: "Christ University" },
    ],
};

// ─── Icon helper ────────────────────────────────────────────────────

function BringIcon({ type }: { type: string }) {
    const cls = "w-6 h-6";
    switch (type) {
        case "laptop": return <Laptop className={cls} />;
        case "notebook": return <NotebookPen className={cls} />;
        case "linkedin": return <Users className={cls} />;
        case "prework": return <FileText className={cls} />;
        default: return <FileText className={cls} />;
    }
}

// ─── Page ───────────────────────────────────────────────────────────

export default function WorkshopDetailPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#E5E5E5] selection:bg-white selection:text-black">
            <Navbar />

            {/* ═══ HERO ═══ */}
            <section className="relative w-full min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pt-32 pb-16 overflow-hidden">
                {/* Ambient glow */}
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.span
                        className="inline-block py-1.5 px-5 border border-white/10 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 mb-8 backdrop-blur-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {workshop.season}
                    </motion.span>

                    <motion.h1
                        className="text-[10vw] md:text-[5.5rem] leading-[0.9] font-serif tracking-tight mb-8 text-white max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {workshop.title}
                    </motion.h1>

                    {/* Meta row */}
                    <motion.div
                        className="flex flex-wrap items-center gap-3 md:gap-6 text-sm text-white/40 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="flex items-center gap-2">
                            <Clock size={14} />
                            {workshop.date} &middot; {workshop.time}
                        </span>
                        <span className="hidden md:inline text-white/20">—</span>
                        <span>{workshop.duration}</span>
                        <span className="hidden md:inline text-white/20">—</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/10 rounded-full text-xs">
                            <MapPin size={12} />
                            {workshop.format}
                        </span>
                    </motion.div>

                    {/* Price + CTA */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-serif text-white">{workshop.price}</span>
                            <span className="text-sm text-white/40">{workshop.priceNote}</span>
                        </div>
                        <a
                            href="#register"
                            className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full text-base font-medium hover:scale-105 transition-transform"
                        >
                            Register Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══ QUICK INFO BAR ═══ */}
            <section className="border-y border-white/5 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-white/10">
                    {[
                        { label: "Skill Level", value: workshop.level },
                        { label: "Max Participants", value: `${workshop.maxParticipants} seats` },
                        { label: "Spots Left", value: `${workshop.spotsLeft} remaining`, accent: true },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center text-center px-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1">
                                {stat.label}
                            </span>
                            <span className={`text-lg md:text-xl font-serif ${stat.accent ? 'text-red-400' : 'text-white'}`}>
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ THE HOOK ═══ */}
            <section className="py-24 md:py-32 px-6">
                <motion.p
                    className="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed text-center max-w-3xl mx-auto"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {workshop.hook}
                </motion.p>
            </section>

            {/* ═══ WHAT YOU'LL LEARN ═══ */}
            <section className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        What You&rsquo;ll Learn
                    </motion.h2>

                    <motion.div
                        className="space-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.learnings.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-6 py-6 border-t border-white/10 group"
                                variants={staggerItem}
                            >
                                <span className="text-sm font-mono text-white/20 pt-1 shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed group-hover:text-white transition-colors">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ WHO THIS IS FOR ═══ */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Who This Is For
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* For you */}
                        <motion.div
                            className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/[0.02]"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-8 block">
                                This is for you if&hellip;
                            </span>
                            <div className="space-y-5">
                                {workshop.forYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-white/60 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Not for you */}
                        <motion.div
                            className="p-8 md:p-10 border border-white/5 rounded-2xl bg-white/[0.01]"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-8 block">
                                This is NOT for you if&hellip;
                            </span>
                            <div className="space-y-5">
                                {workshop.notForYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <XCircle size={18} className="text-red-400/60 shrink-0 mt-0.5" />
                                        <span className="text-white/40 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ WORKSHOP FLOW / AGENDA ═══ */}
            <section className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Workshop Flow
                    </motion.h2>

                    <motion.div
                        className="space-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.agenda.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-8 md:gap-12 py-6 border-t border-white/10 group"
                                variants={staggerItem}
                            >
                                <span className="text-sm font-mono text-white/20 pt-1 shrink-0 w-12">
                                    {item.time}
                                </span>
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ YOUR COACH ═══ */}
            <section className="py-24 md:py-32 px-6">
                <motion.div
                    className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Photo placeholder */}
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Users size={48} className="text-white/20" />
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3 block">
                            Your Coach
                        </span>
                        <h3 className="text-4xl font-serif text-white mb-4">
                            {workshop.coach.name}
                        </h3>
                        <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                            {workshop.coach.bio}
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ═══ WHAT TO BRING ═══ */}
            <section className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        What to Bring
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.whatToBring.map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                                variants={staggerItem}
                            >
                                <div className="text-white/40 mb-4 group-hover:text-indigo-300 transition-colors">
                                    <BringIcon type={item.icon} />
                                </div>
                                <h4 className="text-base font-serif text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ FAQs ═══ */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <div>
                        {workshop.faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SOCIAL PROOF ═══ */}
            <section className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">
                            What Past Participants Say
                        </h2>
                        <p className="text-white/40 text-base">
                            Join 200+ students who&rsquo;ve transformed their personal brand
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] flex flex-col justify-between"
                                variants={staggerItem}
                            >
                                <p className="text-lg font-serif text-white/70 leading-relaxed mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <span className="text-sm text-white/30">
                                    &mdash; {t.author}, {t.school}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ BOTTOM CTA ═══ */}
            <section id="register" className="py-32 md:py-40 px-6 flex flex-col items-center text-center bg-[#050505]">
                <motion.div
                    className="max-w-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Ready to Build<br />Your Brand?
                    </h2>
                    <p className="text-white/40 text-lg mb-10">
                        Only {workshop.spotsLeft} spots left. Don&rsquo;t wait for the next cohort.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            href="#register"
                            className="btn-pill bg-white text-black px-12 py-4 text-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            Register Now &mdash; {workshop.price}
                        </motion.a>
                    </div>
                    <p className="text-sm text-white/30 mt-8">
                        Questions? DM us on{' '}
                        <a href="#" className="underline hover:text-white/50 transition-colors">Instagram</a>
                        {' '}or{' '}
                        <a href="#" className="underline hover:text-white/50 transition-colors">WhatsApp</a>
                    </p>
                </motion.div>
            </section>

            <CtaFooter />
        </main>
    );
}
