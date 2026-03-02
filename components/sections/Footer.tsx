"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

// ── Icons ──────────────────────────────────────────────────────────
const IconX = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.634l4.717 6.237 5.643-6.237zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
);

const IconSpotify = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.223.367-.703.483-1.07.261-2.993-1.83-6.76-2.245-11.198-1.233-.42.096-.84-.173-.936-.593-.096-.42.173-.84.593-.936 4.869-1.112 9.035-.64 12.35 1.388.368.225.484.706.261 1.073zm1.47-3.253c-.28.455-.878.603-1.333.323-3.425-2.105-8.646-2.716-12.695-1.487-.513.155-1.053-.135-1.208-.648-.155-.513.135-1.053.648-1.208 4.62-1.403 10.37-.714 14.266 1.68.455.28.603.878.322 1.333zm.126-3.447C15.148 8.257 8.535 8.038 4.707 9.198c-.628.19-1.29-.162-1.48-1.026-.19-.628.162-1.29.826-1.48 4.397-1.335 11.69-1.076 16.25 1.63.565.334.75 1.066.416 1.632-.334.565-1.066.75-1.632.416z" />
    </svg>
);

const IconLinkedin = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-neutral-100 py-10 md:py-16 xl:py-18 2xl:py-20">
            <div className="mx-2.5 md:mx-3.5">
                {/* ── Main rounded black card ── */}
                <div data-cursor="large" className="relative rounded-4xl md:rounded-[50px] overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 bg-black md:min-h-[550px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[750px]">
                    {/* Background Image with extra dark overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/cards/lI938j8IVRDakrPO5qLopvjOAag.avif"
                            alt="Footer Background"
                            fill
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl">
                        <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-tight mix-blend-difference md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                            Digital products<br />
                            creatives & immersive
                        </h2>

                        {/* Mobile: normal size (same as About) */}
                        <div className="md:hidden">
                            <CtaButton label="Start Today" variant="white" />
                        </div>
                        {/* Desktop: large size */}
                        <div className="hidden md:block">
                            <CtaButton label="Start Today" variant="white" size="large" />
                        </div>
                    </div>

                    {/* Floating small card (bottom-left) */}
                    <div className="absolute bottom-8 left-8 z-20 hidden md:block">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 w-72 text-left">
                            <p className="text-lg text-white/90 leading-relaxed mb-4">
                                Evolving ideas into their final form through the development
                            </p>
                            <div className="flex -space-x-3">
                                {["daniel", "emma", "lucas", "oliviahart"].map((name) => (
                                    <div key={name} className="size-10 rounded-full border-2 border-neutral-900 overflow-hidden bg-neutral-800">
                                        <Image
                                            src={`/images/avatars/${name}.webp`}
                                            alt={name}
                                            width={40}
                                            height={40}
                                            className="grayscale"
                                        />
                                    </div>
                                ))}
                                <div className="size-10 rounded-full border-2 border-neutral-900 bg-white flex items-center justify-center text-black text-xs font-bold">
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="mt-10 px-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:px-12">
                    <p className="text-neutral-500 text-lg font-medium">
                        Copyright 2025, All Rights Reserved
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="size-12 rounded-full bg-white flex items-center justify-center text-black transition-transform hover:scale-110 shadow-sm border border-neutral-200">
                            <IconX />
                        </a>
                        <a href="#" className="size-12 rounded-full bg-white flex items-center justify-center text-black transition-transform hover:scale-110 shadow-sm border border-neutral-200">
                            <IconSpotify />
                        </a>
                        <a href="#" className="size-12 rounded-full bg-white flex items-center justify-center text-black transition-transform hover:scale-110 shadow-sm border border-neutral-200">
                            <IconLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
