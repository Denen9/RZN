"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

// ── Social Icons (SVG inline) ─────────────────────────────────────
const IconX = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
);

const IconSpotify = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
);

const IconLinkedin = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

// ── Arrow Icons (same size-14 as About) ───────────────────────────
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
const cards = [
    {
        id: 0,
        number: "/01",
        title: "Design in\nSolution",
        image: "/images/cards/ajnaCykjlkH0owAJBGxPsbEbA.avif",
    },
    {
        id: 1,
        number: "/02",
        title: "Building\nExperiences",
        image: "/images/cards/lI938j8IVRDakrPO5qLopvjOAag.avif",
    },
    {
        id: 2,
        number: "/03",
        title: "Strategic\nCreativity",
        image: "/images/cards/N7KAFWy5X23pmtFlR6mbQETepo.avif",
    },
];

// ── Main Hero Component ───────────────────────────────────────────
export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const goNext = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % cards.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const card = cards[current];

    const cardVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 60 : -60,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.35, ease: "easeOut" as const },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -60 : 60,
            opacity: 0,
            transition: { duration: 0.25, ease: "easeOut" as const },
        }),
    };

    return (
        <section className="bg-neutral-100 py-3.5">
            {/* ── Contenedor principal con margin (crea el borde visual) ── */}
            <div className="relative mx-2.5 rounded-4xl overflow-hidden h-dvh md:mx-3.5 md:rounded-[2.5rem] md:min-h-screen">

                {/* ── Background image con animación scale ── */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Image
                        src="/images/gwcl0i8PykRTbZTrb3qX1u5Cex0qwfqwfqfwaf.webp"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover object-[70%_center] md:object-center"
                    />
                </motion.div>

                {/* ── Navbar (absolute, blur) ── */}
                <Navbar />

                {/* ── Content container ── */}
                <div className="absolute inset-0 flex flex-col justify-between px-5 py-8 md:px-22 md:py-12">

                    {/* Espaciador para el navbar */}
                    <div className="h-20" />

                    {/* ── Headline ── */}
                    <motion.div
                        className="max-w-full my-auto md:max-w-2xl mix-blend-difference md:mix-blend-normal"
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h1 data-cursor="large" className="font-[Inter,sans-serif] font-medium text-3xl leading-tight text-white tracking-tight sm:text-[1.75rem] xl:text-4xl 2xl:text-5xl">
                            We are a<br />
                            digital guild rooted in<br />
                            strategic creativity —<br />
                            poised to fulfill greatest<br />
                            campaigns.
                        </h1>
                    </motion.div>

                    {/* ── Bottom-right card (absolute) ── */}
                    <motion.div
                        className="absolute bottom-24 right-5 z-30 w-[calc(100%-2.5rem)] md:bottom-24 md:right-22 md:w-auto xl:bottom-28 2xl:bottom-32"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden w-full xl:w-sm 2xl:w-lg">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={card.id}
                                    custom={direction}
                                    variants={cardVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="flex items-stretch"
                                >
                                    {/* Card image — ocupa todo el alto */}
                                    <div className="m-2.5 mr-0 w-28 shrink-0 rounded-xl overflow-hidden relative md:w-36">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Card content — right side */}
                                    <div className="flex flex-col justify-between flex-1 p-4 pl-5 md:p-5 md:pl-6">
                                        {/* Text top */}
                                        <div>
                                            <p className="text-sm text-white/50 font-medium tracking-wide">
                                                {card.number}
                                            </p>
                                            <p className="text-base font-bold text-white leading-tight mt-1 whitespace-pre-line md:text-lg">
                                                {card.title}
                                            </p>
                                        </div>

                                        {/* Arrow buttons — same size-14 as About */}
                                        <div className="flex justify-end gap-3 mt-4">
                                            <button
                                                onClick={goPrev}
                                                className="flex items-center justify-center size-14 rounded-full bg-white text-black cursor-pointer border-none transition-all duration-200 hover:bg-neutral-200 hover:scale-105"
                                                aria-label="Previous card"
                                            >
                                                <ArrowLeft />
                                            </button>
                                            <button
                                                onClick={goNext}
                                                className="flex items-center justify-center size-14 rounded-full bg-white text-black cursor-pointer border-none transition-all duration-200 hover:bg-neutral-200 hover:scale-105"
                                                aria-label="Next card"
                                            >
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* ── Social media box (absolute bottom-left, inverted corners) ── */}
                    <div
                        className="absolute bottom-0 left-0 z-30 flex items-end"
                    >
                        <div className="social-box relative bg-neutral-100 rounded-tr-3xl py-3.5 px-5 flex items-center gap-3">
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-12 rounded-full bg-white text-black shrink-0 transition-transform duration-200 no-underline hover:scale-110">
                                <IconX />
                            </a>
                            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-12 rounded-full bg-white text-black shrink-0 transition-transform duration-200 no-underline hover:scale-110">
                                <IconSpotify />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-12 rounded-full bg-white text-black shrink-0 transition-transform duration-200 no-underline hover:scale-110">
                                <IconLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block absolute -bottom-10 left-0 right-0 text-center text-[8rem] text-white tracking-tighter select-none pointer-events-none z-10 leading-none mix-blend-difference sm:text-[10rem] md:-bottom-20 md:text-[15rem] xl:-bottom-20 xl:text-[14rem] 2xl:-bottom-28 2xl:text-[20rem]">
                        Of-Brand
                    </div>
                </div>
            </div>
        </section>
    );
}
