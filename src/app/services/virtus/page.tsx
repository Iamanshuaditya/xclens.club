"use client";

import { useRef } from "react";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// ─── Animation Variants ─────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const staggerItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Data ────────────────────────────────────────────────────────────

const hallmarks = [
    {
        num: "01",
        name: "CRITICAL THINKING",
        desc: "Analyse problems, evaluate claims, interrogate data, and make better decisions",
    },
    {
        num: "02",
        name: "CREATIVE THINKING",
        desc: "Discover patterns, build models, solve problems, and apply research methods",
    },
    {
        num: "03",
        name: "EFFECTIVE COMMUNICATION",
        desc: "Command language, design messages, and make ideas land — every time",
    },
    {
        num: "04",
        name: "EFFECTIVE INTERACTION",
        desc: "Negotiate, navigate systems, resolve dilemmas, and lead with awareness",
    },
];

const fourLayerProcess = [
    {
        num: "01",
        question: "What do I know?",
        title: "FRAMEWORK",
        desc: "Learn the concept, the vocabulary, and the mental model. Understand the tool before you pick it up.",
    },
    {
        num: "02",
        question: "Can I spot it?",
        title: "RECOGNITION",
        desc: "Identify it in the wild — in news, conversations, case studies, and your own behaviour. Pattern recognition is the bridge between theory and instinct.",
    },
    {
        num: "03",
        question: "Can I use it?",
        title: "APPLICATION",
        desc: "Apply the skill to a real problem — in session, under time pressure, with feedback. Knowing isn't doing. Application proves understanding.",
    },
    {
        num: "04",
        question: "Can I teach it?",
        title: "TRANSFER",
        desc: "Explain it to someone else. Adapt it to a new domain. If you can teach it, you own it. The Feynman test.",
    },
];

const sessions = [
    {
        num: 1,
        name: "Dissect",
        desc: "Break problems into variables, gaps, and game boards. Learn to find the right problem before solving it.",
        source: "Critical Thinking — Analysing Problems",
    },
    {
        num: 2,
        name: "Interrogate",
        desc: "Torture claims like a prosecutor. Plausibility, testability, context, and interpretive loss.",
        source: "Critical Thinking — Evaluating Claims & Notifications",
    },
    {
        num: 3,
        name: "Quantify",
        desc: "Read data without being fooled. Correlation, significance, probability, and confidence intervals.",
        source: "Critical Thinking — Analysing Data",
    },
    {
        num: 4,
        name: "Decide",
        desc: "Map decisions under uncertainty. Biases, decision trees, utility, and psychological drivers.",
        source: "Critical Thinking — Analysing Decisions",
    },
    {
        num: 5,
        name: "Invent",
        desc: "Discover patterns, build models, and solve problems under constraints using design thinking.",
        source: "Creative Thinking — Discovery & Problem-Solving",
    },
    {
        num: 6,
        name: "Investigate",
        desc: "Apply research methods. Design studies, control for bias, and separate signal from noise.",
        source: "Creative Thinking — Research Methods",
    },
    {
        num: 7,
        name: "Command",
        desc: "Command language. Structure arguments. Read your audience. Make ideas land — written and spoken.",
        source: "Communication",
    },
    {
        num: 8,
        name: "Negotiate",
        desc: "Negotiate, read power dynamics, interact with complex systems, and lead with ethical awareness.",
        source: "Effective Interaction",
    },
];

const virtusJournal = [
    { title: "Daily Spot", desc: "One skill you noticed in the real world today — in a conversation, article, argument, or decision. What was it? How was it used (or misused)?" },
    { title: "Problem Log", desc: "Problems you encountered this week, decomposed using Virtus frameworks. Variables, gaps, decision trees — applied to your actual life." },
    { title: "Claim Tracker", desc: "Claims you heard that you evaluated instead of accepting. Source, evidence, fallacy check. Build the habit of intellectual self-defence." },
    { title: "Debate Notes", desc: "Arguments you had or observed. What was the real disagreement? Run it through RISA. Who argued better, and why?" },
    { title: "Case Study File", desc: "One real-world case study per week — from news, business, history, or personal experience — analysed using that week's skill cluster." },
    { title: "Teach Back Log", desc: "What you taught someone this week. What you learned by teaching it. The Feynman record." },
    { title: "Weekly Reflection", desc: "\"What's the sharpest piece of thinking I did this week — and the sloppiest?\" One page, every Sunday." },
];

const virtusMethodology = [
    { num: "01", title: "Expose", desc: "What don't I know that I don't know? Reveal blind spots, unexamined assumptions, and untrained instincts." },
    { num: "02", title: "Equip", desc: "Learn the framework. Get the vocabulary. Understand the mental model — not just the definition, but how and when to deploy it." },
    { num: "03", title: "Exercise", desc: "Apply the skill to a live problem — under time pressure, with feedback, in front of peers. Pressure-tested understanding." },
    { num: "04", title: "Embed", desc: "Practise in the real world. Spot it in conversations, news, decisions. Use the journal to log every application." },
    { num: "05", title: "Export", desc: "Teach it. Adapt it. Apply it to a domain no one showed you. If you can transfer it, the skill is yours." },
];

const virtusOutcomes = [
    { title: "Problem → System", desc: "When you can decompose any problem into variables, gaps, and game boards, nothing feels overwhelming. Complexity becomes components." },
    { title: "Noise Becomes Signal", desc: "Students stop accepting claims at face value. They evaluate evidence, check sources, spot fallacies, and ask \"under what conditions?\" — automatically." },
    { title: "Ideas Land", desc: "Knowing something and communicating it are different skills. Virtus students structure arguments, read audiences, and make people listen — in writing, in speech, and in room with power dynamics." },
    { title: "Thinking Becomes Visible", desc: "The journal and teach-back system makes thinking tangible. Students can see their own reasoning improve week over week — and so can their parents and teachers." },
    { title: "The Critical Unlock", desc: "When a student walks into a college interview, a debate, a boardroom, or a difficult conversation — and they can decompose the problem, evaluate the claims, communicate their position, and navigate the room — they don't need to be the smartest person there. They just need to be the clearest thinker." },
];

// ─── Page ────────────────────────────────────────────────────────────

export default function VirtusPage() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = 340;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-[#F2F3F4]">
            <Navbar />

            {/* ═══ HERO ═══ */}
            <section className="w-full pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-6 md:px-12 bg-[#F2F3F4]">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left — text */}
                        <div>
                            <motion.span
                                className="inline-block py-1.5 px-5 border border-black/10 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase text-[#999] mb-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Skills Coaching for Teens
                            </motion.span>

                            <motion.h1
                                className="text-[56px] md:text-[72px] lg:text-[88px] leading-[0.9] font-display tracking-[-0.03em] mb-4 text-black"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Virtus
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl font-display text-[#999] mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Sharpen How You Think, Speak, and Solve
                            </motion.p>

                            <motion.p
                                className="text-[15px] md:text-[17px] text-[#999] max-w-md mb-10 leading-[1.6]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                An 8-session intellectual skills programme that equips teens with the
                                thinking tools schools never teach &mdash; critical analysis, creative
                                problem-solving, persuasive communication, and systems-level interaction
                                &mdash; drawn from Harvard debate, game theory, design thinking, and
                                behavioural science.
                            </motion.p>

                            <motion.a
                                href="#enroll"
                                className="group inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full text-base font-medium hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Sharpen Your Edge
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Right — 4 hallmarks preview grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-3"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        >
                            {hallmarks.map((h, i) => (
                                <motion.div
                                    key={h.num}
                                    className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                                >
                                    <span className="text-[11px] font-mono text-black/20 block mb-1">{h.num}</span>
                                    <span className="text-[15px] font-display font-semibold text-black block leading-tight">{h.name}</span>
                                    <span className="text-[12px] text-[#999] mt-1 block leading-snug">{h.desc}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="w-[72px] h-px bg-black/12 mt-12" />
                </div>
            </section>

            {/* ═══ THE 4 HALLMARKS — SCROLLING CARDS ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex items-end justify-between mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
                                The 4 Hallmarks
                            </h2>
                            <p className="text-[15px] text-[#999] max-w-2xl leading-[1.6]">
                                Four intellectual capabilities that separate sharp thinkers from everyone else.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:border-black/30 transition-colors"
                            >
                                <ChevronLeft size={18} className="text-black/40" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:border-black/30 transition-colors"
                            >
                                <ChevronRight size={18} className="text-black/40" />
                            </button>
                        </div>
                    </motion.div>

                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
                    >
                        {hallmarks.map((h, i) => (
                            <motion.div
                                key={h.num}
                                className="min-w-[300px] md:min-w-[320px] flex-shrink-0 p-8 md:p-10 border border-[#E5E5E5]/60 rounded-[24px] bg-white/90 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow snap-start"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-5xl md:text-6xl font-mono text-black/10 block mb-6 leading-none">
                                    {h.num}
                                </span>
                                <h3 className="text-xl md:text-2xl font-display text-black mb-4 leading-tight">
                                    {h.name}
                                </h3>
                                <p className="text-[#999] text-sm leading-relaxed">
                                    {h.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ THE 4-LAYER PROCESS ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#F2F3F4]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        The 4-Layer Process
                    </motion.h2>

                    <motion.div
                        className="space-y-16 md:space-y-20"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {fourLayerProcess.map((layer) => (
                            <motion.div
                                key={layer.num}
                                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group"
                                variants={staggerItem}
                            >
                                <span className="text-6xl md:text-7xl font-mono text-black/10 shrink-0 leading-none">
                                    {layer.num}
                                </span>
                                <div className="flex-1">
                                    <p className="text-lg text-[#999] italic mb-2">{layer.question}</p>
                                    <h3 className="text-3xl md:text-5xl font-display text-black mb-4 group-hover:text-black/60 transition-colors">
                                        {layer.title}
                                    </h3>
                                </div>
                                <p className="text-[#999] leading-relaxed max-w-sm md:pt-4">
                                    {layer.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ 8 SESSIONS THAT SHARPEN EVERYTHING ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
                            8 Sessions That Sharpen Everything
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-xl leading-[1.6]">
                            Each session builds a new layer of intellectual capability &mdash; from
                            breaking problems apart to commanding a room.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {sessions.map((s) => (
                            <motion.div
                                key={s.num}
                                className="p-8 border border-[#E5E5E5]/60 rounded-[24px] bg-white/90 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow group flex flex-col"
                                variants={staggerItem}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-6">
                                    Session {s.num}
                                </span>

                                {/* Timeline dot */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors" />
                                    <div className="h-px flex-1 bg-black/10" />
                                </div>

                                <h3 className="text-2xl font-display text-black mb-3 group-hover:text-black/70 transition-colors">
                                    {s.name}
                                </h3>
                                <p className="text-[#999] text-sm leading-relaxed mb-6 flex-1">
                                    {s.desc}
                                </p>
                                <span className="text-xs text-[#6B7A5A] font-medium">
                                    {s.source}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ THE VIRTUS JOURNAL ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#F2F3F4]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                            The Virtus Journal
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl mx-auto leading-[1.6]">
                            A thinking journal designed to turn intellectual skills into daily habits.
                            Students don&rsquo;t just practise in sessions &mdash; they spot, apply, and
                            refine these skills in their everyday lives, building a personal library of
                            real-world case studies.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {virtusJournal.map((j) => (
                            <motion.div
                                key={j.title}
                                className="p-8 rounded-[24px] bg-white/90 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow flex flex-col"
                                variants={staggerItem}
                            >
                                <h3 className="text-xl font-display text-black mb-3">
                                    {j.title}
                                </h3>
                                <p className="text-[#999] text-sm leading-relaxed">
                                    {j.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ THE VIRTUS METHODOLOGY ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        The Virtus Methodology
                    </motion.h2>

                    <motion.div
                        className="space-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {virtusMethodology.map((step) => (
                            <motion.div
                                key={step.num}
                                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-t border-black/10 group"
                                variants={staggerItem}
                            >
                                <span className="text-4xl md:text-5xl font-mono text-black/10 shrink-0 w-20">
                                    {step.num}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-display text-black shrink-0 md:w-56 group-hover:text-black/60 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[#999] leading-relaxed flex-1">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ OUTCOMES — WHY THIS ACTUALLY WORKS ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#F2F3F4]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4 block">
                            Outcomes
                        </span>
                        <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
                            Why This Actually Works
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl leading-[1.6]">
                            Four things happen when a student completes Virtus &mdash; and one fundamental
                            shift that changes how they navigate school, careers, and life.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {virtusOutcomes.map((o) => (
                            <motion.div
                                key={o.title}
                                className={`p-8 md:p-10 rounded-[24px] bg-white/90 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow ${o.title === "The Critical Unlock" ? "sm:col-span-2" : ""}`}
                                variants={staggerItem}
                            >
                                <h3 className="text-xl md:text-2xl font-display text-black mb-4">
                                    {o.title}
                                </h3>
                                <p className="text-[#999] leading-relaxed">
                                    {o.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ BOTTOM CTA ═══ */}
            <section id="enroll" className="py-28 md:py-36 px-6 flex flex-col items-center text-center bg-[#F2F3F4]">
                <motion.div
                    className="max-w-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                        Sharpen Your<br />Edge
                    </h2>
                    <p className="text-[#999] text-lg mb-10 max-w-lg mx-auto leading-[1.6]">
                        8 sessions. 4 hallmarks. One intellectual toolkit. Stop relying on what
                        school teaches and start building what it doesn&rsquo;t.
                    </p>
                    <motion.a
                        href="#enroll"
                        className="inline-flex items-center gap-2 px-12 py-4 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        Sharpen Your Edge
                        <ArrowRight size={18} />
                    </motion.a>
                    <p className="text-sm text-[#999] mt-8">
                        Questions? DM us on{" "}
                        <a href="#" className="underline hover:text-[#666] transition-colors">Instagram</a>
                        {" "}or{" "}
                        <a href="#" className="underline hover:text-[#666] transition-colors">WhatsApp</a>
                    </p>
                </motion.div>
            </section>

            <CtaFooter />
        </main>
    );
}
