"use client";

import React from 'react';
import Navbar from '@/components/sections/navbar';
import CtaFooter from '@/components/sections/cta-footer';
import {
    ArrowRight, Clock, Users, MapPin, Laptop, NotebookPen,
    FileText, ChevronDown, CheckCircle2, XCircle, Zap, Star,
    Calendar, Timer, Video, Sparkles, Quote, MessageCircle
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

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

// ─── FAQ Accordion ──────────────────────────────────────────────────

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = React.useState(false);
    return (
        <motion.div
            className="border-b border-white/[0.06]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-7 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-white/90 group-hover:text-white transition-colors pr-8">
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'bg-white/10 rotate-180' : 'group-hover:border-white/20'}`}>
                    <ChevronDown size={16} className="text-white/50" />
                </div>
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
                        <p className="text-white/50 text-base leading-relaxed pb-7 max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Spots Pulse Dot ────────────────────────────────────────────────

function PulseDot() {
    return (
        <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-400" />
        </span>
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
        stats: { workshops: 24, students: 500, rating: 4.9 },
        initials: "PS",
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
            <section className="relative w-full min-h-[85vh] flex flex-col justify-end px-6 md:px-12 pt-32 pb-16 overflow-hidden">
                {/* Ambient gradient orbs */}
                <motion.div
                    className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    {/* Season + Format badges row */}
                    <motion.div
                        className="flex flex-wrap items-center gap-3 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase text-indigo-300 backdrop-blur-md">
                            <Sparkles size={12} />
                            {workshop.season}
                        </span>
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-4 border border-white/[0.06] rounded-full text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 backdrop-blur-md">
                            <Video size={12} />
                            {workshop.format}
                        </span>
                    </motion.div>

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
                        className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-white/40 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-white/30" />
                            {workshop.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-2">
                            <Clock size={14} className="text-white/30" />
                            {workshop.time}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-2">
                            <Timer size={14} className="text-white/30" />
                            {workshop.duration}
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
                            <span className="text-4xl md:text-5xl font-serif text-white">{workshop.price}</span>
                            <span className="text-sm text-white/30 border-l border-white/10 pl-3">{workshop.priceNote}</span>
                        </div>
                        <motion.a
                            href="#register"
                            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full text-base font-medium overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 flex items-center gap-2">
                                Register Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10" />
            </section>

            {/* ═══ QUICK INFO BAR ═══ */}
            <section className="relative z-20 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-3 border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { label: "Skill Level", value: workshop.level, icon: <Zap size={16} className="text-amber-400" /> },
                            { label: "Max Participants", value: `${workshop.maxParticipants} seats`, icon: <Users size={16} className="text-indigo-400" /> },
                            { label: "Spots Left", value: `${workshop.spotsLeft} remaining`, icon: <PulseDot />, accent: true },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center text-center py-6 md:py-8 px-4 ${i < 2 ? 'border-r border-white/[0.06]' : ''}`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    {stat.icon}
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                                        {stat.label}
                                    </span>
                                </div>
                                <span className={`text-lg md:text-xl font-serif ${stat.accent ? 'text-red-400' : 'text-white'}`}>
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ THE HOOK ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
                <motion.div
                    className="max-w-3xl mx-auto text-center relative"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Decorative quote marks */}
                    <Quote size={48} className="text-indigo-500/10 mx-auto mb-6" />
                    <p className="text-2xl md:text-[1.75rem] font-serif text-white/80 leading-[1.5] tracking-tight">
                        {workshop.hook}
                    </p>
                    <div className="mt-8 w-12 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mx-auto" />
                </motion.div>
            </section>

            {/* ═══ WHAT YOU'LL LEARN ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif">
                            What You&rsquo;ll Learn
                        </h2>
                        <span className="text-sm text-white/30 font-mono">{workshop.learnings.length} key outcomes</span>
                    </motion.div>

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
                                className="flex items-start gap-6 py-6 border-t border-white/[0.06] group hover:bg-white/[0.01] -mx-4 px-4 rounded-xl transition-colors"
                                variants={staggerItem}
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono shrink-0 mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-lg md:text-xl text-white/60 leading-relaxed group-hover:text-white/90 transition-colors">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ WHO THIS IS FOR ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Who This Is For
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* For you */}
                        <motion.div
                            className="relative p-8 md:p-10 border border-emerald-500/10 rounded-2xl bg-emerald-500/[0.02] overflow-hidden"
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Subtle glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-emerald-400" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400/70">
                                    This is for you if&hellip;
                                </span>
                            </div>
                            <div className="space-y-5">
                                {workshop.forYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <CheckCircle2 size={16} className="text-emerald-400/60 shrink-0 mt-1" />
                                        <span className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Not for you */}
                        <motion.div
                            className="relative p-8 md:p-10 border border-white/[0.04] rounded-2xl bg-white/[0.01] overflow-hidden"
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <XCircle size={16} className="text-red-400/60" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                                    This is NOT for you if&hellip;
                                </span>
                            </div>
                            <div className="space-y-5">
                                {workshop.notForYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <XCircle size={16} className="text-red-400/30 shrink-0 mt-1" />
                                        <span className="text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ WORKSHOP FLOW / AGENDA ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif">
                            Workshop Flow
                        </h2>
                        <span className="text-sm text-white/30 font-mono">{workshop.duration} total</span>
                    </motion.div>

                    <motion.div
                        className="relative"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Timeline connector line */}
                        <div className="absolute left-[3.25rem] md:left-[4.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-transparent pointer-events-none hidden md:block" />

                        {workshop.agenda.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-6 md:gap-10 py-6 md:py-8 group relative"
                                variants={staggerItem}
                            >
                                {/* Time + dot */}
                                <div className="flex flex-col items-center shrink-0">
                                    <span className="text-sm font-mono text-white/25 w-12 md:w-16 text-center">
                                        {item.time}
                                    </span>
                                    {/* Timeline dot — visible on md+ */}
                                    <div className="hidden md:flex mt-2 w-3 h-3 rounded-full border-2 border-indigo-500/30 bg-[#050505] group-hover:border-indigo-400 group-hover:bg-indigo-500/20 transition-all relative z-10" />
                                </div>

                                {/* Content card */}
                                <div className="flex-1 p-5 md:p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] group-hover:bg-white/[0.03] group-hover:border-white/[0.08] transition-all">
                                    <h3 className="text-xl font-serif text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
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
            <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Photo / Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent border border-white/[0.08] flex items-center justify-center overflow-hidden">
                                {/* Gradient avatar with initials */}
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                                    <span className="text-5xl md:text-6xl font-serif text-white/40">{workshop.coach.initials}</span>
                                </div>
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -inset-2 rounded-full border border-indigo-500/10 pointer-events-none" />
                            <div className="absolute -inset-4 rounded-full border border-indigo-500/5 pointer-events-none" />
                        </div>

                        <div className="text-center md:text-left">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/50 mb-3 block">
                                Your Coach
                            </span>
                            <h3 className="text-4xl md:text-5xl font-serif text-white mb-5">
                                {workshop.coach.name}
                            </h3>
                            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
                                {workshop.coach.bio}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                {[
                                    { value: `${workshop.coach.stats.workshops}+`, label: "Workshops" },
                                    { value: `${workshop.coach.stats.students}+`, label: "Students" },
                                    { value: `${workshop.coach.stats.rating}`, label: "Avg Rating" },
                                ].map((s, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="text-2xl font-serif text-white">{s.value}</span>
                                        <span className="text-xs text-white/30 uppercase tracking-wider">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ WHAT TO BRING ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        What to Bring
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.whatToBring.map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative p-6 md:p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group overflow-hidden"
                                variants={staggerItem}
                            >
                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="text-white/30 mb-5 group-hover:text-indigo-300 transition-colors">
                                    <BringIcon type={item.icon} />
                                </div>
                                <h4 className="text-base font-serif text-white mb-2">{item.title}</h4>
                                <p className="text-[13px] text-white/35 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ FAQs ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <div>
                        {workshop.faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SOCIAL PROOF ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">
                            What Past Participants Say
                        </h2>
                        <p className="text-white/40 text-base">
                            Join 200+ students who&rsquo;ve transformed their personal brand
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workshop.testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                className="relative p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02] flex flex-col justify-between hover:border-white/[0.1] transition-all group overflow-hidden"
                                variants={staggerItem}
                            >
                                {/* Quote icon */}
                                <Quote size={24} className="text-indigo-500/15 mb-4" />
                                <p className="text-lg font-serif text-white/70 leading-relaxed mb-8 group-hover:text-white/85 transition-colors">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-white/50">{t.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-white/60 font-medium block leading-tight">{t.author}</span>
                                        <span className="text-xs text-white/30">{t.school}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ BOTTOM CTA ═══ */}
            <section id="register" className="relative py-28 md:py-36 px-6 flex flex-col items-center text-center bg-[#050505] overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

                <motion.div
                    className="relative z-10 max-w-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400/60 mb-6">
                        <PulseDot />
                        Only {workshop.spotsLeft} spots left
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Ready to Build<br />Your Brand?
                    </h2>
                    <p className="text-white/40 text-lg mb-10">
                        Don&rsquo;t wait for the next cohort. Secure your spot now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <motion.a
                            href="#register"
                            className="group relative btn-pill bg-white text-black px-14 py-4 text-lg overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10">Register Now &mdash; {workshop.price}</span>
                        </motion.a>
                    </div>
                    <p className="text-sm text-white/25 mt-8 flex items-center justify-center gap-1">
                        <MessageCircle size={14} />
                        Questions? DM us on{' '}
                        <a href="#" className="underline hover:text-white/50 transition-colors">Instagram</a>
                        {' '}or{' '}
                        <a href="#" className="underline hover:text-white/50 transition-colors">WhatsApp</a>
                    </p>
                </motion.div>
            </section>

            {/* ═══ STICKY MOBILE CTA ═══ */}
            <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3 flex items-center justify-between">
                <div>
                    <span className="text-xl font-serif text-white">{workshop.price}</span>
                    <span className="text-[10px] text-white/30 block">{workshop.spotsLeft} spots left</span>
                </div>
                <a
                    href="#register"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black rounded-full text-sm font-medium"
                >
                    Register Now
                    <ArrowRight size={16} />
                </a>
            </div>

            {/* Spacer for sticky bar on mobile */}
            <div className="h-16 md:hidden" />

            <CtaFooter />
        </main>
    );
}
