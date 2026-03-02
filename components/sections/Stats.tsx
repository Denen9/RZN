"use client";

import { motion } from "framer-motion";

// ── Stats data ────────────────────────────────────────────────────
const stats = [
    {
        id: 0,
        text: "By making your digital marketing agency website look professional, you can increase your",
        number: "12+",
        label: "Years of Services",
    },
    {
        id: 1,
        text: "By making your digital marketing agency website look professional, you can increase your",
        number: "80+",
        label: "Team Members",
    },
    {
        id: 2,
        text: "By making your digital marketing agency website look professional, you can increase your",
        number: "3K+",
        label: "Happy Clients",
    },
];

// ── Main Stats Component ──────────────────────────────────────────
export default function Stats() {
    return (
        <section id="stats" className="bg-neutral-100 py-10 md:py-20">
            <div className="mx-2.5 px-5 md:mx-3.5 md:px-22">
                <div data-cursor="large" className="flex flex-col gap-3 md:gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                                ease: [0.25, 0.46, 0.45, 0.94] as const,
                            }}
                            className="flex flex-col-reverse gap-6 bg-white rounded-4xl px-6 py-6 md:flex-row md:items-center md:justify-between md:rounded-[50px] md:px-8 md:py-7 xl:px-10 xl:py-8 2xl:px-12 2xl:py-9"
                        >
                            {/* Left — description text */}
                            <p className="text-lg text-neutral-500 leading-relaxed max-w-sm md:text-xl md:max-w-md">
                                {stat.text}
                            </p>

                            {/* Right — stat number + label */}
                            <div className="text-left md:text-right shrink-0 md:ml-6">
                                <span className="text-5xl text-neutral-900 tracking-tight md:text-7xl xl:text-7xl 2xl:text-8xl">
                                    {stat.number}
                                </span>
                                <p className="text-lg text-neutral-500 font-medium mt-1 md:text-xl">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
