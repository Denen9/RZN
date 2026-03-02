"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";



// ── Arrow Icons ───────────────────────────────────────────────────
const ArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
);

const ArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);



// ── Cards data ────────────────────────────────────────────────────
const aboutCards = [
    {
        id: 0,
        topTitle: "Vision- provided",
        cardTitle: "Beautiful Vision Oriented",
        description: "From logos to brand guidelines, we shape identities that leave lasting impressions.",
        number: "01",
        image: "/images/cards/ajnaCykjlkH0owAJBGxPsbEbA.avif",
    },
    {
        id: 1,
        topTitle: "Nextgen-styled",
        cardTitle: "Modern Wood Provided",
        description: "From logos to brand guidelines, we shape identities that leave lasting impressions.",
        number: "02",
        image: "/images/cards/4dSYhvG1qxURxYoynH7D7s4tNhA.avif",
    },
    {
        id: 2,
        topTitle: "Future-driven",
        cardTitle: "Creative Strategy Design",
        description: "From logos to brand guidelines, we shape identities that leave lasting impressions.",
        number: "03",
        image: "/images/cards/N7KAFWy5X23pmtFlR6mbQETepo.avif",
    },
];

// ── Helper: get paginated numbers (active first, then rest in order) ──
function getPaginationNumbers(activeIndex: number, total: number) {
    const active = activeIndex + 1; // 1-indexed
    const rest: number[] = [];
    for (let i = 1; i <= total; i++) {
        if (i !== active) rest.push(i);
    }
    return { active, rest };
}

// ── Main About Component ──────────────────────────────────────────
export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Visible cards: current and current+1
    const leftCardIndex = currentIndex;
    const rightCardIndex = (currentIndex + 1) % aboutCards.length;

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % aboutCards.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + aboutCards.length) % aboutCards.length);
    };

    // Fade: solo opacidad, la card no se mueve
    const fadeVariants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    const { active, rest } = getPaginationNumbers(leftCardIndex, aboutCards.length);

    return (
        <section id="about" className="bg-neutral-100 py-14 md:py-24 xl:py-28 2xl:py-32">
            <div className="mx-2.5 px-5 md:mx-3.5 md:px-22">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-6 lg:items-stretch">

                    {/* ═══════════════ LEFT COLUMN ═══════════════ */}
                    <div className="flex flex-col justify-between lg:w-[35%] lg:min-h-[550px] xl:min-h-[600px] 2xl:min-h-[650px] 3xl:min-h-[700px]">

                        {/* Top box: pagination + text */}
                        <div className="flex flex-col gap-6">
                            {/* Pagination indicator — functional */}
                            <div className="flex items-center w-full max-w-lg">
                                {/* Active dot */}
                                <div className="flex items-center justify-center size-14 rounded-full bg-white shadow-sm shrink-0">
                                    <span className="text-lg font-bold text-neutral-900">
                                        0{active}
                                    </span>
                                </div>
                                {/* Line — stretches to fill */}
                                <div className="flex-1 h-px bg-neutral-900 mr-5" />
                                {/* Inactive numbers */}
                                <div className="flex items-center gap-4">
                                    {rest.map((n) => (
                                        <span key={n} className="text-lg md:text-xl text-neutral-400 font-medium tracking-tight">
                                            0{n}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description text */}
                            <p className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-[360px]">
                                We create intuitive and visually
                                engaging digital experiences that enhance user
                                interaction and satisfaction.
                            </p>
                        </div>

                        {/* Bottom box: /About label + title + button */}
                        <div className="flex flex-col gap-5 mt-10 lg:mt-0">
                            {/* Label */}
                            <span className="text-lg md:text-xl text-neutral-500 font-medium tracking-wide">
                                /About
                            </span>

                            {/* Title */}
                            <h2 data-cursor="large" className="text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight md:text-5xl lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.2rem]">
                                Empowering<br />
                                Visionary Founders<br />
                                From Day One
                            </h2>

                            {/* CTA Button */}
                            <div className="mt-2">
                                <CtaButton label="Start Today" variant="dark" />
                            </div>
                        </div>
                    </div>

                    {/* ═══════════════ RIGHT COLUMN — CARDS ═══════════════ */}
                    <div data-cursor="large" className="flex flex-col gap-6 lg:flex-row lg:flex-1 lg:gap-5 overflow-hidden">

                        {/* ── LEFT CARD — enters from below ── */}
                        <motion.div
                            className="flex-1 min-w-0"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`left-${aboutCards[leftCardIndex].id}`}
                                    variants={fadeVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="h-full"
                                >
                                    <AboutCard
                                        card={aboutCards[leftCardIndex]}
                                        size="large"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* ── RIGHT CARD + navigation buttons — enters from right ── */}
                        <motion.div
                            className="flex flex-col gap-5 flex-1 min-w-0"
                            initial={{ x: 80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="flex-1 min-h-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`right-${aboutCards[rightCardIndex].id}`}
                                        variants={fadeVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="h-full"
                                    >
                                        <AboutCard
                                            card={aboutCards[rightCardIndex]}
                                            size="small"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation arrows — hidden on mobile */}
                            <div className="hidden lg:flex items-center justify-center gap-5">
                                <button
                                    onClick={goPrev}
                                    className="flex items-center justify-center size-14 rounded-full bg-white text-neutral-900 cursor-pointer border border-neutral-200 transition-all duration-200 hover:bg-neutral-100 hover:scale-105 shadow-sm"
                                    aria-label="Previous card"
                                >
                                    <ArrowLeft />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="flex items-center justify-center size-14 rounded-full bg-neutral-900 text-white cursor-pointer border-none transition-all duration-200 hover:bg-neutral-800 hover:scale-105 shadow-sm"
                                    aria-label="Next card"
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── About Card Component ──────────────────────────────────────────
function AboutCard({
    card,
    size,
}: {
    card: (typeof aboutCards)[number];
    size: "large" | "small";
}) {
    const isLarge = size === "large";

    return (
        <div
            className={`
                relative overflow-hidden rounded-4xl h-full
                flex flex-col
                ${isLarge ? "min-h-[500px] lg:min-h-[600px]" : "min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px] lg:min-h-0"}
            `}
        >
            {/* Background image */}
            <Image
                src={card.image}
                alt={card.cardTitle}
                fill
                className="object-cover z-0 brightness-80"
            />
            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full p-6 lg:p-12 lg:justify-between">

                {/* Top: Title above card + "Our Values" */}
                <div>
                    <h3
                        className="
                            font-semibold text-white leading-tight tracking-tight
                            text-2xl md:text-3xl lg:text-4xl
                        "
                    >
                        {card.topTitle}
                    </h3>
                    <div className="mt-3 mb-8">
                        <span className="text-lg text-white/70 font-medium">Our</span>
                        <br />
                        <span className="text-lg text-white/70 font-medium">Values</span>
                    </div>
                </div>

                {/* Bottom: Card title + description + button + number */}
                <div className="flex flex-col gap-3">
                    <h4
                        className={`
                            font-semibold text-white leading-tight
                            ${isLarge ? "text-2xl md:text-3xl lg:text-3xl" : "text-xl md:text-2xl lg:text-2xl"}
                        `}
                    >
                        {card.cardTitle}
                    </h4>
                    <p
                        className={`
                            text-white/70 leading-relaxed
                            ${isLarge ? "text-lg" : "text-base md:text-lg"}
                        `}
                    >
                        {card.description}
                    </p>

                    {/* Button + Number row */}
                    <div className="flex items-end justify-between mt-1">
                        <CtaButton label="Learn More" variant="light" />
                        <span
                            className={`
                                font-bold text-white/20 leading-none select-none
                                ${isLarge ? "text-7xl lg:text-8xl" : "text-5xl lg:text-6xl"}
                            `}
                        >
                            {card.number}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
