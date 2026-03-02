"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// ── Play Icon (triangle) ──────────────────────────────────────────
const PlayIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

// ── Audio waveform bars (decorative) ──────────────────────────────
const AudioWaveform = () => {
    const bars = [3, 8, 5, 12, 7, 14, 6, 10, 4, 13, 8, 5, 11, 6, 9, 4, 12, 7, 3, 10, 8, 14, 5, 7, 11, 4, 9, 6, 13, 3];
    return (
        <div className="flex items-center gap-[1.5px] h-10">
            {bars.map((h, i) => (
                <div
                    key={i}
                    className="w-[4px] rounded-full bg-neutral-400"
                    style={{ height: `${h * 2}px` }}
                />
            ))}
        </div>
    );
};

// ── Scroll Reveal Text Component ──────────────────────────────────
function ScrollRevealText({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "start 0.15"],
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className="flex flex-wrap justify-center gap-x-[0.35em]">
            {/* Indentation spacer — pushes "We" as if it's an indented paragraph (hidden on mobile) */}
            <span className="hidden md:inline-block w-[4em] lg:w-[6em] shrink-0" />
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return (
                    <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />
                );
            })}
        </div>
    );
}

function Word({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const color = useTransform(progress, range, ["#e5e5e5", "#0a0a0a"]);
    return (
        <motion.span
            style={{ color }}
            className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-6xl"
        >
            {word}
        </motion.span>
    );
}

// ── Main Features Component ───────────────────────────────────────
export default function Features() {
    return (
        <section id="features" className="bg-neutral-100 py-3.5">
            {/* ── White rounded container (like Hero pattern) ── */}
            <div className="relative mx-2.5 rounded-4xl overflow-hidden bg-white md:mx-3.5 md:rounded-[2.5rem]">
                <div className="px-5 py-16 md:px-16 md:py-20 xl:px-18 xl:py-22 2xl:px-22 2xl:py-24">

                    {/* ── Label — enters from below ── */}
                    <motion.div
                        className="text-center mb-6"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="text-lg md:text-xl text-neutral-500 font-medium tracking-wide">
                            /Features
                        </span>
                    </motion.div>

                    {/* ── Scroll reveal text — enters from below ── */}
                    <motion.div
                        className="max-w-7xl mx-auto text-center mb-12 md:mb-16"
                        data-cursor="large"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <ScrollRevealText
                            text="We are a team of visionary designers, strategists, innovators dedicated to crafting exceptional digital experiences. Our mission is to bridge creativity with functionality,"
                        />
                    </motion.div>

                    {/* ── Cards row ── */}
                    <div data-cursor="large" className="flex flex-col gap-4 lg:flex-row lg:gap-5">

                        {/* ═══════════ LEFT CARD (3/4) — Video/Image card — enters from below ═══════════ */}
                        <motion.div
                            className="relative overflow-hidden rounded-4xl lg:w-4/6 min-h-[300px] sm:min-h-[350px] md:min-h-[420px]"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Background image */}
                            <Image
                                src="/images/heroimage.webp"
                                alt="Featured project"
                                fill
                                loading="lazy"
                                className="object-cover z-0"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10" />

                            {/* Play button — centered — large frosted circle with black triangle */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <button
                                    className="flex items-center justify-center size-24 rounded-full bg-white/25 backdrop-blur-xl cursor-pointer border border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/35"
                                    aria-label="Play video"
                                >
                                    <PlayIcon size={28} color="#0a0a0a" />
                                </button>
                            </div>

                            {/* Bottom-left: Avatar + quote */}
                            <div className="absolute bottom-0 left-0 z-20 p-5 md:p-6 flex items-end gap-3">
                                {/* Avatar */}
                                <div className="relative flex flex-col items-center gap-1.5">
                                    <div className="size-10 rounded-full overflow-hidden border-2 border-white/30">
                                        <Image
                                            src="/images/avatars/emma.webp"
                                            alt="Emma"
                                            width={40}
                                            height={40}
                                            className="object-cover grayscale"
                                        />
                                    </div>
                                    <span className="text-sm text-white/80 font-medium">Emma</span>
                                </div>

                                {/* Quote badge */}
                                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
                                    <p className="text-lg text-white font-medium">&quot;Can&apos;t imagine without them&quot;</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* ═══════════ RIGHT CARD (1/4) — Insights card — enters from below ═══════════ */}
                        <motion.div
                            className="flex flex-col justify-between overflow-hidden rounded-4xl bg-neutral-100 p-6 lg:p-12 lg:w-2/6 min-h-[300px]"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >

                            {/* Top: label + insights */}
                            <div>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-lg text-neutral-500 font-medium">Woodmetal</span>
                                    <span className="text-base text-neutral-900 font-semibold bg-white px-3 py-1.5 rounded-full">insights</span>
                                </div>

                                {/* Name */}
                                <h3 className="text-3xl font-medium text-neutral-900 leading-tight tracking-tight mb-4 md:text-5xl xl:text-5xl 2xl:text-6xl">
                                    Lucas Hart
                                </h3>

                                {/* Waveform visualization */}
                                <AudioWaveform />
                            </div>

                            {/* Bottom: description + avatar */}
                            <div className="flex items-end justify-between mt-5">
                                <p className="text-lg text-neutral-900 font-semibold leading-tight max-w-[65%]">
                                    Global best agency Seative<br />
                                    Digital recommended...
                                </p>
                                <div className="size-24 rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src="/images/avatars/lucas.webp"
                                        alt="Lucas"
                                        width={56}
                                        height={56}
                                        className="object-cover grayscale w-full h-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
