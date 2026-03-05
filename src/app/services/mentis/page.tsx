"use client";

import React from "react";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

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

const modules = [
    {
        num: "01",
        name: "THE FORGE",
        focus: "Identity & Standards",
        rewires: "Who you decide to be determines everything else",
        intro: "Who you decide to be determines everything else.",
        keyQuestion: "Who am I choosing to be — and what standards does that person hold?",
        mindsets: [
            { name: "High Standards", idea: "Your standards become your floor, not your ceiling" },
            { name: "Authenticity", idea: "Stop performing, start being" },
            { name: "Unapologetically Academic", idea: "Owning intellectual hunger without apology" },
            { name: "Un-shamefully Ambitious", idea: "Ambition is not a dirty word" },
            { name: "Boss Mentality", idea: "You are the CEO of your life — own every outcome" },
            { name: "Anti-Entitlement", idea: "Nothing is owed. Everything is earned or given" },
        ],
    },
    {
        num: "02",
        name: "THE LENS",
        focus: "Thinking & Perception",
        rewires: "How you see problems, form opinions, and process reality",
        intro: "How you see the problem IS the problem.",
        keyQuestion: "Am I seeing reality, or am I seeing my assumptions about reality?",
        mindsets: [
            { name: "Curiosity", idea: "The meta-skill. Questions > Answers" },
            { name: "Unconventional Thinking", idea: "Different angle = different insight" },
            { name: "Seek Understanding", idea: "Don't argue to win. Argue to learn" },
            { name: "Consume + Synthesize", idea: "Reading isn't knowing. Synthesis is" },
            { name: "Think Long Term", idea: "Zoom out. What does this look like in 5 years?" },
            { name: "Problem → Situations", idea: "Nothing is a \"problem\" — it's a situation to navigate" },
            { name: "Detachment", idea: "Not everything deserves your energy. Learn to triage" },
        ],
    },
    {
        num: "03",
        name: "THE ENGINE",
        focus: "Action & Execution",
        rewires: "Your relationship with doing, shipping, and time",
        intro: "Thinking without doing is intellectual entertainment.",
        keyQuestion: "What's the smallest move I can make in the next 60 minutes?",
        mindsets: [
            { name: "Bias Towards Action", idea: "Move. Adjust. Repeat. Paralysis is the real failure" },
            { name: "Done > Perfect", idea: "Perfectionism is procrastination in a tuxedo" },
            { name: "Figure It Out", idea: "Resourcefulness > Resources" },
            { name: "Be Intentional", idea: "Every action, meeting, hour — on purpose" },
            { name: "Plan Strategically", idea: "Strategy is the map. Tactics are your legs. Train both" },
            { name: "Consistency", idea: "Show up. Again. And again. That's it" },
            { name: "Be on Time", idea: "Punctuality = respect. For others and yourself" },
            { name: "Time > Money", idea: "You can earn more money. You cannot earn more time" },
        ],
    },
    {
        num: "04",
        name: "THE FURNACE",
        focus: "Resilience & Antifragility",
        rewires: "How you respond to pain, fear, failure, and chaos",
        intro: "Pressure doesn't break you. It reveals what you're made of — and makes you harder.",
        keyQuestion: "What would I do if I knew I couldn't be broken by the outcome?",
        mindsets: [
            { name: "Stoicism", idea: "Control the controllable. Accept the rest with grace" },
            { name: "Antifragility", idea: "Don't just survive chaos — grow from it" },
            { name: "Courage", idea: "Name the worst case. You'll usually find it's survivable" },
            { name: "Eliminate Fear of Failure", idea: "Every loss is tuition" },
            { name: "Become Unbreakable", idea: "Stack resilience until you're the person who doesn't quit" },
            { name: "Respond, Don't React", idea: "The gap between stimulus and response is where freedom lives" },
            { name: "Nerves → Excitement", idea: "Same chemical. Different story" },
            { name: "Healthy Indifference", idea: "Care deeply about what matters. Release everything else" },
        ],
    },
    {
        num: "05",
        name: "THE FLAME",
        focus: "Drive & Momentum",
        rewires: "What keeps you moving when motivation disappears",
        intro: "Motivation is a visitor. Systems and compounding are residents.",
        keyQuestion: "Am I building momentum, or am I starting over every Monday?",
        mindsets: [
            { name: "Persistence", idea: "Keep going after the motivation evaporates" },
            { name: "Ferocity", idea: "Controlled intensity. Channel energy into craft" },
            { name: "Compounding", idea: "1% daily = 37x in a year. Small wins stack" },
            { name: "Asymmetric Risk", idea: "Seek bets where downside is small and upside is massive" },
            { name: "Activator", idea: "Be the person who starts things. Initiative is rare" },
            { name: "Failure → Feedback", idea: "Every setback is data, not destiny" },
        ],
    },
    {
        num: "06",
        name: "THE MIRROR",
        focus: "Social & Emotional Intelligence",
        rewires: "How you show up for others — and yourself",
        intro: "The strongest people are the most self-aware — and the most generous.",
        keyQuestion: "Am I protecting myself from disappointment, or am I protecting myself from life?",
        mindsets: [
            { name: "Celebrate Others", idea: "Abundance mindset. Their win isn't your loss" },
            { name: "Vulnerability as Charisma", idea: "Disarm through openness, not armour" },
            { name: "Stop Optimising for Safety", idea: "Playing not-to-lose costs you the life you could have had" },
            { name: "Emotional Regulation", idea: "Master the space between feeling and acting" },
        ],
    },
];

const fourLayers = [
    {
        num: "01",
        title: "What I believe",
        label: "PREMISE",
        desc: "Surface and challenge inherited assumptions — mental software you didn\u2019t choose — before building on them.",
    },
    {
        num: "02",
        title: "What I want to think",
        label: "VISION",
        desc: "Define the upgraded mental model. Not abstract philosophy — what does this mindset look like operating in YOUR life?",
    },
    {
        num: "03",
        title: "Why it matters to ME",
        label: "PURPOSE",
        desc: "Find the personal story, wound, or aspiration that makes this mindset non-negotiable. Intellectual understanding isn\u2019t enough. Emotional anchoring is.",
    },
    {
        num: "04",
        title: "What I\u2019ll test",
        label: "STRATEGY",
        desc: "Design a 2-week micro-experiment. Framed as experiments, not commitments — because permission to fail is permission to start.",
    },
];

const sessions = [
    { num: 1, name: "Audit", desc: "Map your current mental operating system — beliefs, defaults, and inherited code", source: "Stoic + Behavioural" },
    { num: 2, name: "Forge", desc: "Identity architecture — who you decide to be and the standards that follow", source: "Epictetus + Goggins" },
    { num: 3, name: "Link", desc: "Rewrite your perception engine — how you see, question, and process reality", source: "Munger + Kahneman" },
    { num: 4, name: "Engine", desc: "Install an execution OS — action, shipping, deep work, and feedback loops", source: "Atomic Habits + Deep Work" },
    { num: 5, name: "Furnace", desc: "Build antifragility — resilience, stoicism, and growing from pressure", source: "Seneca + Taleb" },
    { num: 6, name: "Flame", desc: "Ignite compounding momentum — drive, systems, and purpose over passion", source: "Naval + Clear" },
    { num: 7, name: "Mirror", desc: "Social intelligence upgrade — vulnerability, honesty, and emotional mastery", source: "Brené Brown + Goleman" },
    { num: 8, name: "Ship", desc: "Assemble your Mentis System — the complete mental OS, commitments, and experiments", source: "Mentis" },
];

const mentisMethodology = [
    { num: "01", title: "Audit", desc: "Where is my mind now? Map current mental models, beliefs, and defaults across all 6 domains." },
    { num: "02", title: "Reframe", desc: "Am I running the right software? Challenge inherited and limiting beliefs through Premise work." },
    { num: "03", title: "Install", desc: "What new operating principles do I want? Define upgraded mindsets through Vision and Purpose layers." },
    { num: "04", title: "Experiment", desc: "How do I test this in real life? Run 2-week micro-experiments with daily tracking." },
    { num: "05", title: "Codify", desc: "Make it permanent. Write it into your Mentis Codex as personal doctrine you authored yourself." },
];

const mentisOutcomes = [
    { title: "Defaults Dissolve", desc: "When you surface the beliefs you never chose and replace them with ones you did, you stop running on autopilot. Decisions become deliberate." },
    { title: "Resilience Compounds", desc: "Each module reinforces the others. Identity fuels action. Action builds resilience. Resilience sustains momentum. Momentum sharpens perception." },
    { title: "Experiments Replace Anxiety", desc: "Instead of \"what if I fail?\" students ask \"what will I learn?\" The experiment frame turns every risk into data collection — and data isn't scary." },
    { title: "Doctrine Creates Speed", desc: "When you've written your operating principles, you don't freeze at decision points. You consult your Codex. Decisions that used to take weeks take seconds." },
    { title: "The Critical Unlock", desc: "When a student faces pressure, peer influence, or uncertainty, 8 weeks of practised principles and a self-authored Codex is more powerful than \"just be confident.\" They don't need motivation. They have doctrine." },
];

const mentisJournal = [
    { title: "Daily Log", desc: "One mindset practised today. What happened. What you noticed about yourself." },
    { title: "Belief Tracker", desc: "Inherited beliefs under active investigation. Where they came from. Whether they still serve you." },
    { title: "Experiment Log", desc: "2-week experiments: hypothesis → daily action → result. The scientific method applied to your own mind." },
    { title: "Discomfort Log", desc: "Voluntary discomforts attempted. What you feared. What actually happened. The gap between prediction and reality." },
    { title: "Compound Chain", desc: "Visual streak tracker for your ONE daily action. The only rule: don't break the chain." },
    { title: "Codex Drafts", desc: "Running drafts of your personal operating principles. Messy first, refined over time." },
    { title: "Weekly Reflection", desc: "\"What did I learn about how I think this week?\" — one page, every Sunday." },
];

// ─── Module Accordion Component ──────────────────────────────────────

function ModuleAccordion({
    module,
    index,
}: {
    module: (typeof modules)[0];
    index: number;
}) {
    const [open, setOpen] = React.useState(false);

    return (
        <motion.div
            className={`border border-[#E5E5E5]/60 rounded-[20px] bg-white/70 backdrop-blur-sm overflow-hidden transition-shadow ${open ? "shadow-[0_8px_40px_rgba(0,0,0,0.06)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.03)]"}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
            >
                <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
                    <span className="text-sm font-mono text-black/20 shrink-0">
                        {module.num}
                    </span>
                    <div className="min-w-0">
                        <span className="text-xl md:text-2xl font-display text-black block leading-tight group-hover:text-black/70 transition-colors">
                            {module.name}
                        </span>
                        <span className="text-sm text-[#999] mt-1 block">
                            {module.focus}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs text-[#999] hidden md:block max-w-[260px] text-right">
                        {module.rewires}
                    </span>
                    <div
                        className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${open ? "bg-black/5 rotate-180" : "group-hover:border-black/20"}`}
                    >
                        <ChevronDown size={16} className="text-black/40" />
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-8">
                            <div className="border-t border-black/[0.06] pt-6">
                                {/* Intro line */}
                                <p className="text-[15px] text-[#666] italic mb-6 max-w-xl">
                                    {module.intro}
                                </p>

                                {/* Mindsets grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {module.mindsets.map((m, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-[#F2F3F4]/80 border border-[#E5E5E5]/40"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2 shrink-0" />
                                            <div>
                                                <span className="text-sm font-display text-black font-medium block leading-tight">
                                                    {m.name}
                                                </span>
                                                <span className="text-xs text-[#999] mt-0.5 block leading-snug">
                                                    {m.idea}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Key question */}
                                <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] block mb-1">
                                        Key Question
                                    </span>
                                    <p className="text-[15px] font-display text-black/80 italic">
                                        &ldquo;{module.keyQuestion}&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────

export default function MentisPage() {
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
                                Mindset Coaching for Teens
                            </motion.span>

                            <motion.h1
                                className="text-[56px] md:text-[72px] lg:text-[88px] leading-[0.9] font-display tracking-[-0.03em] mb-4 text-black"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Mentis
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl font-display text-[#999] mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Upgrade Your Mental OS
                            </motion.p>

                            <motion.p
                                className="text-[15px] md:text-[17px] text-[#999] max-w-md mb-10 leading-[1.6]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                An 8-session mindset engineering programme that helps teens replace
                                inherited defaults with deliberate operating systems &mdash; built
                                from stoic philosophy, behavioural psychology, and real-world
                                performance science.
                            </motion.p>

                            <motion.a
                                href="#enroll"
                                className="group inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full text-base font-medium hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Start Your Upgrade
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Right — 6 modules preview grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-3"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        >
                            {modules.map((m, i) => (
                                <motion.div
                                    key={m.num}
                                    className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                                >
                                    <span className="text-[11px] font-mono text-black/20 block mb-1">{m.num}</span>
                                    <span className="text-[15px] font-display font-semibold text-black block leading-tight">{m.name}</span>
                                    <span className="text-[12px] text-[#999] mt-1 block leading-snug">{m.focus}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="w-[72px] h-px bg-black/12 mt-12" />
                </div>
            </section>

            {/* ═══ THE 6 MENTIS MODULES ═══ */}
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
                            The 6 Mentis Modules
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl leading-[1.6]">
                            36 mindsets clustered into 6 domains &mdash; each one a system
                            upgrade that builds on the last.
                        </p>
                    </motion.div>

                    {/* Table header — desktop only */}
                    <div className="hidden md:grid grid-cols-[3rem_1fr_1fr_1fr] gap-6 pb-4 border-b border-black/10 mb-2">
                        <span />
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999]">Module</span>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999] text-right">Focus</span>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999] text-right">What It Rewires</span>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {modules.map((m) => (
                            <motion.div
                                key={m.num}
                                className="grid grid-cols-1 md:grid-cols-[3rem_1fr_1fr_1fr] gap-2 md:gap-6 py-5 border-b border-black/10 group"
                                variants={staggerItem}
                            >
                                <span className="text-sm font-mono text-black/20">{m.num}</span>
                                <span className="text-lg font-display text-black group-hover:text-black/60 transition-colors">
                                    {m.name}
                                </span>
                                <span className="text-[#666] md:text-right">{m.focus}</span>
                                <span className="text-[#999] md:text-right">{m.rewires}</span>
                            </motion.div>
                        ))}
                    </motion.div>
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
                        {fourLayers.map((layer) => (
                            <motion.div
                                key={layer.num}
                                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group"
                                variants={staggerItem}
                            >
                                <span className="text-6xl md:text-7xl font-mono text-black/10 shrink-0 leading-none">
                                    {layer.num}
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-3xl md:text-5xl font-display text-black mb-4 group-hover:text-black/60 transition-colors">
                                        {layer.title}
                                    </h3>
                                </div>
                                <p className="text-[#999] leading-relaxed max-w-sm md:pt-4">
                                    <span className="text-[#666] font-medium">{layer.label}</span>{" "}
                                    {layer.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ 8 SESSIONS THAT CHANGE EVERYTHING ═══ */}
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
                            8 Sessions That Change Everything
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-xl leading-[1.6]">
                            Each session builds on the last &mdash; from awareness to rewiring
                            to action.
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

            {/* ═══ MODULE DETAIL — ACCORDION CARDS ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#F2F3F4]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
                            Inside Each Module
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl leading-[1.6]">
                            Each module expands to reveal its mindsets. Click to explore the
                            36 mental upgrades.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {modules.map((m, i) => (
                            <ModuleAccordion key={m.num} module={m} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ THE MENTIS JOURNAL ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                            The Mentis Journal
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl mx-auto leading-[1.6]">
                            A dedicated journaling system &mdash; physical or digital &mdash; that turns
                            reflection into rewiring. Students don&rsquo;t just think about mindsets. They
                            track them, test them, and watch themselves change in real-time data.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {mentisJournal.map((j) => (
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

            {/* ═══ THE MENTIS METHODOLOGY ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        The Mentis Methodology
                    </motion.h2>

                    <motion.div
                        className="space-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {mentisMethodology.map((step) => (
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
                            Four things happen when a student completes Mentis &mdash; and one
                            fundamental shift that changes how they move through the world.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {mentisOutcomes.map((o) => (
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
            <section id="enroll" className="py-28 md:py-36 px-6 flex flex-col items-center text-center bg-[#EAEBEC]">
                <motion.div
                    className="max-w-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                        Upgrade Your<br />Mental OS
                    </h2>
                    <p className="text-[#999] text-lg mb-10 max-w-lg mx-auto leading-[1.6]">
                        8 sessions. 6 domains. 36 mindsets. One deliberate operating system.
                        Stop running inherited code and start writing your own.
                    </p>
                    <motion.a
                        href="#enroll"
                        className="inline-flex items-center gap-2 px-12 py-4 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        Start Your Upgrade
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
