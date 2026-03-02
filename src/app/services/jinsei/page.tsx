"use client";

import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { ArrowRight } from "lucide-react";
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

const dimensions = [
    { num: "01", name: "BODY", origin: "Health + Fitness", why: "Energy, habits, self-image" },
    { num: "02", name: "MIND", origin: "Intellectual + Emotional", why: "Learning how to think AND feel" },
    { num: "03", name: "CHARACTER", origin: "Character + Spiritual", why: "Values, identity, who you\u2019re becoming" },
    { num: "04", name: "RELATIONSHIPS", origin: "Social + Love", why: "Friendships, family, boundaries" },
    { num: "05", name: "PURPOSE", origin: "Career", why: "Direction, not career planning" },
    { num: "06", name: "MONEY", origin: "Financial", why: "Relationship with money, not wealth-building" },
    { num: "07", name: "LIFESTYLE", origin: "Quality of Life", why: "What does YOUR good life look like?" },
    { num: "08", name: "CONTRIBUTION", origin: "New", why: "Impact, legacy, what you give" },
];

const fourLayers = [
    { num: "01", title: "What I believe", label: "Premise.", desc: "Surface and challenge inherited assumptions before building on them." },
    { num: "02", title: "What I want", label: "Vision.", desc: "Define something vivid and personal \u2014 not borrowed from parents or peers." },
    { num: "03", title: "Why it matters", label: "Purpose.", desc: "Find the emotional anchor that makes it stick." },
    { num: "04", title: "What I\u2019ll try", label: "Strategy.", desc: "Reframed as experiments, not commitments. Designed to lower the stakes." },
];

const sessions = [
    { num: 1, name: "Wake Up", desc: "Honest self-assessment and energy tracking", source: "Stanford" },
    { num: 2, name: "Debug", desc: "Surface inherited beliefs and reframe them", source: "LifeBook" },
    { num: 3, name: "Dream", desc: "Guided visualization and Odyssey Plans", source: "Kell + Stanford" },
    { num: 4, name: "Anchor", desc: "The 5 Whys to find emotional purpose", source: "LifeBook" },
    { num: 5, name: "Prototype", desc: "Turn strategy into 30-day experiments", source: "Stanford + LifeBook" },
    { num: 6, name: "Compose", desc: "Assemble the Jinsei Book + commitment ceremony", source: "Jinsei" },
];

const journalQuadrants = [
    { title: "Flow", desc: "High energy, high engagement. This is your signal \u2014 the activities where you lose track of time and feel energized." },
    { title: "Sustain", desc: "High energy, low engagement. Useful activities that keep you going but don\u2019t spark fulfillment." },
    { title: "Auto Pilot", desc: "Low energy, low engagement. You\u2019re going through the motions \u2014 these activities reveal hidden time drains." },
    { title: "Danger", desc: "Low energy, high engagement. Burnout territory \u2014 the activities that consume you without giving back." },
];

const aeiouItems = [
    { num: "01", title: "Activities", desc: "What were you actually doing? Not the label, the specific action." },
    { num: "02", title: "Environments", desc: "Where were you? Alone? Noisy? Outdoors? Structured?" },
    { num: "03", title: "Interactions", desc: "Who were you with? What was the dynamic?" },
    { num: "04", title: "Objects", desc: "What tools or materials were you using?" },
    { num: "05", title: "Users", desc: "Who were you doing it for? Who benefited?" },
];

const methodology = [
    { num: "01", title: "Assess", desc: "Where am I now? Map your starting point with the Dashboard and Good Time Journal." },
    { num: "02", title: "Reframe", desc: "Am I solving the right problem? Challenge assumptions through belief reframing." },
    { num: "03", title: "Ideate", desc: "What lives could I live? Explore possibilities with Odyssey Plans and Mind Maps." },
    { num: "04", title: "Prototype", desc: "How do I test cheaply? Run low-risk experiments through conversations and experiences." },
    { num: "05", title: "Choose", desc: "Pick a path and move forward \u2014 knowing you can always iterate on your design." },
];

const outcomes = [
    { title: "Stress drops", desc: "When you stop carrying everyone else\u2019s expectations and start carrying your own clarity, pressure shifts from paralyzing to productive." },
    { title: "Clarity compounds", desc: "Each dimension reinforces the others. Purpose informs lifestyle. Character shapes relationships. Energy drives everything." },
    { title: "Effort stacks", desc: "Instead of scattered activities chosen for a resume, students build a portfolio of aligned experiments. Every move compounds." },
    { title: "The critical unlock", desc: "When a student says \u201CI don\u2019t want engineering,\u201D 3 weeks of energy data is more persuasive than \u201CI just don\u2019t feel like it.\u201D" },
];

// ─── Page ────────────────────────────────────────────────────────────

export default function JinseiPage() {
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
                                Life Coaching for Teens
                            </motion.span>

                            <motion.h1
                                className="text-[56px] md:text-[72px] lg:text-[88px] leading-[0.9] font-display tracking-[-0.03em] mb-4 text-black"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Jinsei
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl font-display text-[#999] mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Reclaim Your Life
                            </motion.p>

                            <motion.p
                                className="text-[15px] md:text-[17px] text-[#999] max-w-md mb-10 leading-[1.6]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                A 6-session life design programme that helps teens stop drifting and start
                                building a life that&rsquo;s actually theirs &mdash; backed by Stanford research,
                                LifeBook methodology, and real evidence.
                            </motion.p>

                            <motion.a
                                href="#enroll"
                                className="group inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full text-base font-medium hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Begin Your Journey
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Right — 8 dimensions preview grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-3"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        >
                            {dimensions.map((d, i) => (
                                <motion.div
                                    key={d.num}
                                    className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                                >
                                    <span className="text-[11px] font-mono text-black/20 block mb-1">{d.num}</span>
                                    <span className="text-[15px] font-display font-semibold text-black block leading-tight">{d.name}</span>
                                    <span className="text-[12px] text-[#999] mt-1 block leading-snug">{d.why}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="w-[72px] h-px bg-black/12 mt-12" />
                </div>
            </section>

            {/* ═══ THE 8 JINSEI DIMENSIONS ═══ */}
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
                            The 8 Jinsei Dimensions
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl leading-[1.6]">
                            Distilled from Lifebook&rsquo;s 12 adult dimensions into 8 that matter
                            at this life stage.
                        </p>
                    </motion.div>

                    {/* Table header — desktop only */}
                    <div className="hidden md:grid grid-cols-[3rem_1fr_1fr_1fr] gap-6 pb-4 border-b border-black/10 mb-2">
                        <span />
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999]">Dimension</span>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999] text-right">Origin</span>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999] text-right">Why It Matters</span>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {dimensions.map((d) => (
                            <motion.div
                                key={d.num}
                                className="grid grid-cols-1 md:grid-cols-[3rem_1fr_1fr_1fr] gap-2 md:gap-6 py-5 border-b border-black/10 group"
                                variants={staggerItem}
                            >
                                <span className="text-sm font-mono text-black/20">{d.num}</span>
                                <span className="text-lg font-display text-black group-hover:text-black/60 transition-colors">
                                    {d.name}
                                </span>
                                <span className="text-[#666] md:text-right">{d.origin}</span>
                                <span className="text-[#999] md:text-right">{d.why}</span>
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

            {/* ═══ 6 SESSIONS THAT CHANGE EVERYTHING ═══ */}
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
                            6 Sessions That Change Everything
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-xl leading-[1.6]">
                            Each session builds on the last &mdash; from awareness to action.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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

            {/* ═══ THE GOOD TIME JOURNAL ═══ */}
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
                            The Good Time Journal
                        </h2>
                        <p className="text-[15px] text-[#999] max-w-2xl mx-auto leading-[1.6]">
                            Borrowed from Stanford and enhanced for teens. Students track activities
                            across <span className="text-[#666] font-medium">Energy</span> and{" "}
                            <span className="text-[#666] font-medium">Engagement</span> &mdash;
                            generating 3 weeks of personal data that replaces &ldquo;follow your
                            passion&rdquo; with actual evidence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {journalQuadrants.map((q) => (
                            <motion.div
                                key={q.title}
                                className="p-8 rounded-[24px] bg-white/90 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow min-h-[220px] flex flex-col"
                                variants={staggerItem}
                            >
                                <h3 className="text-xl font-display text-black mb-3">
                                    {q.title}
                                </h3>
                                <p className="text-[#999] text-sm leading-relaxed">
                                    {q.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        className="text-center text-[#999] text-sm mt-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Combined with a processing calendar, students build an evidence-based map of what truly drives them.
                    </motion.p>
                </div>
            </section>

            {/* ═══ AEIOU FRAMEWORK ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
                <div className="max-w-5xl mx-auto">
                    <motion.span
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-8 block"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        AEIOU Framework
                    </motion.span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left — large descriptive text */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-display text-[#666] leading-[1.2]">
                                <span className="text-black">AEIOU:</span> Where the real insight
                                lives. Once a week, students review their high-engagement journal
                                entries using this framework &mdash; discovering it&rsquo;s not
                                &ldquo;math&rdquo; they love, it&rsquo;s problem-solving with spatial
                                reasoning in a quiet room.
                            </h2>
                        </motion.div>

                        {/* Right — 5 numbered items */}
                        <motion.div
                            className="space-y-8"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {aeiouItems.map((item) => (
                                <motion.div
                                    key={item.num}
                                    className="flex items-start gap-5 group"
                                    variants={staggerItem}
                                >
                                    <span className="text-sm font-mono text-black/20 pt-1 shrink-0">
                                        {item.num}
                                    </span>
                                    <p className="text-[#999] leading-relaxed">
                                        <span className="text-black font-medium">{item.title}</span>
                                        {" "}&mdash; {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ THE JINSEI METHODOLOGY ═══ */}
            <section className="py-20 md:py-28 px-6 bg-[#F2F3F4]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        The Jinsei Methodology
                    </motion.h2>

                    <motion.div
                        className="space-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {methodology.map((step) => (
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
            <section className="py-20 md:py-28 px-6 bg-[#EAEBEC]">
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
                            Three things happen when a student completes Jinsei &mdash; and one
                            critical unlock that changes the conversation at home.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {outcomes.map((o) => (
                            <motion.div
                                key={o.title}
                                className="p-8 md:p-10 rounded-[24px] bg-white/90 backdrop-blur-sm border border-[#E5E5E5]/60 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow"
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
                        Design a Life<br />That&rsquo;s Yours
                    </h2>
                    <p className="text-[#999] text-lg mb-10 max-w-lg mx-auto leading-[1.6]">
                        6 sessions. 8 dimensions. One life worth building. Stop drifting
                        and start designing.
                    </p>
                    <motion.a
                        href="#enroll"
                        className="inline-flex items-center gap-2 px-12 py-4 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        Enroll in Jinsei
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
