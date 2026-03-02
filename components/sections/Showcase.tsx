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

// ── Showcase slides data ──────────────────────────────────────────
const showcaseSlides = [
    {
        id: 0,
        label: "/Showcase",
        title: "we specialize in\ndesigning and crafting\nhigh-quality wooden\nproducts that blend\naesthetics.",
        description: "We create intuitive and visually engaging digital experiences that enhance user interaction and satisfaction.",
        image: "/images/cards/7FZC1fiWDceTZbwIDDn1Yjuc4fc.avif",
        miniCardNumber: "/01",
        miniCardTitle: "Designing in\nSolution",
    },
    {
        id: 1,
        label: "/Showcase",
        title: "transforming ideas\ninto powerful digital\nexperiences that\ncaptivate and\ninspire.",
        description: "Our team of experts combines strategy, design, and technology to deliver exceptional results for every project.",
        image: "/images/cards/jWO5Gx4kdaGVzq6aIT3Ex1FDI.avif",
        miniCardNumber: "/02",
        miniCardTitle: "Creative\nStrategy",
    },
    {
        id: 2,
        label: "/Showcase",
        title: "building modern\nand scalable\nsolutions that drive\ngrowth and\ninnovation.",
        description: "We leverage cutting-edge technologies and design principles to create products that stand the test of time.",
        image: "/images/cards/N7KAFWy5X23pmtFlR6mbQETepo.avif",
        miniCardNumber: "/03",
        miniCardTitle: "Digital\nInnovation",
    },
];

// ── Helper: get paginated numbers ──
function getPaginationNumbers(activeIndex: number, total: number) {
    const active = activeIndex + 1;
    const rest: number[] = [];
    for (let i = 1; i <= total; i++) {
        if (i !== active) rest.push(i);
    }
    return { active, rest };
}

// ── Main Showcase Component ───────────────────────────────────────
export default function Showcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slide = showcaseSlides[currentIndex];

    const goNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
    };

    const contentVariants = {
        enter: () => ({
            x: 100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
        exit: () => ({
            x: -100,
            opacity: 0,
            transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
        }),
    };

    const { active, rest } = getPaginationNumbers(currentIndex, showcaseSlides.length);

    return (
        <section id="showcase" className="bg-neutral-100 py-10 md:py-16 xl:py-18 2xl:py-20">
            <div className="mx-2.5 px-5 md:mx-3.5 md:px-22">
                {/* ── Two cards ── */}
                <div data-cursor="large" className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">

                    {/* ═══════════ LEFT CARD — White, text content — enters from left ═══════════ */}
                    <motion.div
                        className="flex flex-col justify-between bg-white rounded-4xl p-6 py-10 md:rounded-[50px] lg:w-1/2 lg:p-10 lg:py-12 xl:p-11 xl:py-13 2xl:p-12 2xl:py-14 min-h-[450px] lg:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[700px] 3xl:min-h-[800px] overflow-hidden"
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >

                        {/* Top: pagination + description */}
                        <div className="flex flex-col gap-6">
                            {/* Pagination indicator — functional */}
                            <div className="flex items-center max-w-2xl w-full">
                                {/* Active dot */}
                                <div className="flex items-center justify-center size-14 rounded-full bg-neutral-100 shrink-0">
                                    <span className="text-lg font-bold text-neutral-900">
                                        0{active}
                                    </span>
                                </div>
                                {/* Line */}
                                <div className="flex-1 h-px bg-neutral-900 mr-5" />
                                {/* Inactive numbers */}
                                <div className="flex items-center gap-4">
                                    {rest.map((n) => (
                                        <span key={n} className="text-lg md:text-xl text-neutral-400 font-medium">
                                            0{n}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description text — animated */}
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.p
                                    key={`desc-${slide.id}`}
                                    custom={direction}
                                    variants={contentVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-lg"
                                >
                                    {slide.description}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Bottom: label + title + navigation buttons */}
                        <div className="flex flex-col gap-5 mt-10 lg:mt-0">
                            {/* Label */}
                            <span className="text-lg md:text-xl text-neutral-500 font-medium tracking-wide">
                                {slide.label}
                            </span>

                            {/* Title — animated */}
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.h2
                                    key={`title-${slide.id}`}
                                    custom={direction}
                                    variants={contentVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight md:text-5xl lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.2rem] whitespace-pre-line"
                                >
                                    {slide.title}
                                </motion.h2>
                            </AnimatePresence>

                            {/* Navigation buttons */}
                            <div className="flex items-center gap-4 mt-2">
                                <button
                                    onClick={goPrev}
                                    className="flex items-center justify-center size-14 rounded-full bg-neutral-100 text-neutral-900 cursor-pointer border-none transition-all duration-200 hover:bg-neutral-200 hover:scale-105"
                                    aria-label="Previous"
                                >
                                    <ArrowLeft />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="flex items-center justify-center size-14 rounded-full bg-neutral-900 text-white cursor-pointer border-none transition-all duration-200 hover:bg-neutral-800 hover:scale-105"
                                    aria-label="Next"
                                >
                                    <ArrowRight />
                                </button>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <CtaButton label="View Case" variant="dark" />
                            </div>
                        </div>
                    </motion.div>

                    {/* ═══════════ RIGHT CARD — Image with mini card overlay — enters from below ═══════════ */}
                    <motion.div
                        className="relative lg:w-1/2 min-h-[400px] lg:min-h-0 rounded-4xl md:rounded-[50px] overflow-hidden"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Background image */}
                        <Image
                            src={slide.image}
                            alt="Showcase project"
                            fill
                            className="object-cover"
                        />

                        {/* Mini card overlay — bottom-right */}
                        <div className="absolute bottom-4 right-4 z-20 md:bottom-6 md:right-6">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden w-56 md:w-64">
                                <div className="flex items-stretch min-h-28 md:min-h-32">
                                    {/* Card image — left */}
                                    <div className="m-2 mr-0 w-20 shrink-0 rounded-xl overflow-hidden relative md:m-2.5 md:mr-0 md:w-24">
                                        <Image
                                            src={slide.image}
                                            alt="Project thumbnail"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Card content — right */}
                                    <div className="flex flex-col justify-center flex-1 p-3 pl-3.5 md:p-3.5 md:pl-4">
                                        <p className="text-sm text-white/50 font-medium tracking-wide">
                                            {slide.miniCardNumber}
                                        </p>
                                        <p className="text-base font-bold text-white leading-tight mt-1 whitespace-pre-line md:text-lg">
                                            {slide.miniCardTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
