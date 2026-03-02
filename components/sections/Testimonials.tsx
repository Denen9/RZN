"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ── Quote Icon ────────────────────────────────────────────────────
const QuoteIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
);

// ── Star Icon ─────────────────────────────────────────────────────
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#0a0a0a" : "none"} stroke="#0a0a0a" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

// ── Arrow Icons ───────────────────────────────────────────────────
const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
);

const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

// ── Testimonials data ─────────────────────────────────────────────
const testimonials = [
    {
        id: 0,
        name: "Olivia Hart",
        role: "CEO at Lumina Design",
        avatar: "/images/avatars/oliviahart.webp",
        quote: "Working with this team completely transformed our digital presence. Their creative approach and strategic thinking elevated our brand beyond what we imagined possible. Every deliverable exceeded expectations.",
        rating: 5,
        project: "Brand Identity Redesign",
    },
    {
        id: 1,
        name: "James Chen",
        role: "Founder of NovaTech",
        avatar: "/images/avatars/james.webp",
        quote: "The attention to detail is remarkable. They didn't just create a website — they crafted an experience. Our conversion rates tripled within the first quarter after launch.",
        rating: 5,
        project: "E-commerce Platform",
    },
    {
        id: 2,
        name: "Maria Rossi",
        role: "Creative Director at Forma",
        avatar: "/images/avatars/maria.webp",
        quote: "What sets them apart is how they listen. They understood our vision instantly and brought ideas we hadn't even considered. The final product was nothing short of spectacular.",
        rating: 5,
        project: "Digital Campaign",
    },
    {
        id: 3,
        name: "Daniel Adler",
        role: "VP of Product at SkyLine",
        avatar: "/images/avatars/daniel.webp",
        quote: "From ideation to execution, the entire process was seamless. Their designers and strategists worked as an extension of our team. We're already planning our next project together.",
        rating: 5,
        project: "Product Launch Strategy",
    },
];

// ── Main Testimonials Component ───────────────────────────────────
export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const goNext = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[current];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.97,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.97,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
        }),
    };

    return (
        <section id="testimonials" className="bg-neutral-100 py-14 md:py-20 xl:py-22 2xl:py-24 overflow-hidden">
            <div className="mx-2.5 px-5 md:mx-3.5 md:px-22">

                {/* ── Top: Label + Title Row ── */}
                <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-end lg:justify-between lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <span className="text-lg md:text-xl text-neutral-500 font-medium tracking-wide">
                            /Testimonials
                        </span>
                        <h2 data-cursor="large" className="text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight md:text-5xl lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.2rem]">
                            What Our Clients<br />
                            Say About Us
                        </h2>
                    </div>

                    {/* Navigation arrows - desktop only, mobile shows below */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={goPrev}
                            className="flex items-center justify-center size-14 rounded-full bg-white text-neutral-900 cursor-pointer border border-neutral-200 transition-all duration-200 hover:bg-neutral-200 hover:scale-105 shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={goNext}
                            className="flex items-center justify-center size-14 rounded-full bg-neutral-900 text-white cursor-pointer border-none transition-all duration-200 hover:bg-neutral-800 hover:scale-105 shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* ── Main Cards Layout ── */}
                <div data-cursor="large" className="flex flex-col gap-5 lg:flex-row lg:gap-6 lg:items-stretch">

                    {/* ═══════════ LEFT — Featured testimonial card — enters from left ═══════════ */}
                    <motion.div
                        className="lg:w-3/5 min-h-[400px] lg:min-h-[480px] xl:min-h-[500px] 2xl:min-h-[520px]"
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={testimonial.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="h-full"
                            >
                                <div className="relative h-full bg-white rounded-4xl md:rounded-[50px] p-6 lg:p-12 flex flex-col justify-between overflow-hidden">

                                    {/* Decorative quote mark */}
                                    <div className="absolute top-6 right-6 md:top-10 md:right-10">
                                        <QuoteIcon />
                                    </div>

                                    {/* Top: Project label + Stars */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <span className="text-lg text-neutral-500 font-medium bg-neutral-100 px-5 py-2 rounded-full w-fit">
                                            {testimonial.project}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <StarIcon key={i} filled={i < testimonial.rating} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Center: Quote text */}
                                    <p className="text-xl md:text-2xl lg:text-5xl font-medium text-black leading-snug tracking-tight my-8 lg:my-0">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>

                                    {/* Bottom: Avatar + info */}
                                    <div className="flex items-center gap-4">
                                        <div className="size-14 md:size-16 rounded-full overflow-hidden shrink-0 border-2 border-neutral-200">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={64}
                                                height={64}
                                                className="object-cover grayscale w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl md:text-2xl font-semibold text-neutral-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-lg text-neutral-500 font-medium">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* ═══════════ RIGHT — Stats + brand logos column ═══════════ */}
                    <div className="flex flex-col gap-5 lg:w-2/5 lg:gap-6">

                        {/* Trust metrics card — enters from right */}
                        <motion.div
                            className="relative rounded-4xl md:rounded-[50px] p-6 lg:p-12 flex flex-col gap-6 text-white overflow-hidden"
                            initial={{ x: 80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <Image
                                src="/images/cards/N7KAFWy5X23pmtFlR6mbQETepo.avif"
                                alt="Trust background"
                                fill
                                loading="lazy"
                                className="object-cover z-0"
                            />
                            <div className="absolute inset-0 bg-black/70 z-0" />

                            <span className="relative z-10 text-lg text-white/60 font-medium">Trust & Results</span>

                            <div className="relative z-10 grid grid-cols-2 gap-6">
                                <div>
                                    <span className="text-4xl md:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight">98%</span>
                                    <p className="text-lg text-white/60 font-medium mt-1">Client Retention</p>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight">4.9</span>
                                    <p className="text-lg text-white/60 font-medium mt-1">Average Rating</p>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight">150+</span>
                                    <p className="text-lg text-white/60 font-medium mt-1">Projects Delivered</p>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight">12</span>
                                    <p className="text-lg text-white/60 font-medium mt-1">Countries Served</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Brand trust card — enters from below */}
                        <motion.div
                            className="bg-white rounded-4xl md:rounded-[50px] p-6 lg:p-12 flex-1 flex flex-col justify-between"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-lg text-neutral-500 font-medium">Trusted by</span>
                                <p className="text-xl md:text-2xl font-medium text-neutral-900 leading-snug">
                                    Leading brands across industries trust us to deliver transformative digital solutions.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-8">
                                <div className="flex -space-x-3">
                                    {["emma", "ethan", "lucas", "maria", "james"].map((name) => (
                                        <div key={name} className="size-11 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                                            <Image
                                                src={`/images/avatars/${name}.webp`}
                                                alt={name}
                                                width={44}
                                                height={44}
                                                className="grayscale w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="size-11 rounded-full border-2 border-white bg-neutral-900 flex items-center justify-center text-white text-sm font-bold">
                                        +82
                                    </div>
                                </div>
                                <p className="text-lg text-neutral-500 font-medium">Happy clients worldwide</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Mobile navigation arrows ── */}
                <div className="flex items-center justify-center gap-5 mt-8 lg:hidden">
                    <button
                        onClick={goPrev}
                        className="flex items-center justify-center size-14 rounded-full bg-white text-neutral-900 cursor-pointer border border-neutral-200 transition-all duration-200 hover:bg-neutral-200 hover:scale-105 shadow-sm"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-neutral-900" : "size-2.5 bg-neutral-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goNext}
                        className="flex items-center justify-center size-14 rounded-full bg-neutral-900 text-white cursor-pointer border-none transition-all duration-200 hover:bg-neutral-800 hover:scale-105 shadow-sm"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
