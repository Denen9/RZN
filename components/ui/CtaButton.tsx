"use client";

import React from "react";

// ── Lightning Icon ────────────────────────────────────────────────
const LightningIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10h7l-9 13v-9H4l9-13z" />
    </svg>
);

interface CtaButtonProps {
    label: string;
    variant?: "dark" | "light" | "white";
    size?: "normal" | "large";
    className?: string;
}

export default function CtaButton({
    label,
    variant = "dark",
    size = "normal",
    className = ""
}: CtaButtonProps) {
    const isLarge = size === "large";

    return (
        <button
            className={`
                group flex items-center rounded-full border-none cursor-pointer
                transition-all duration-500 ease-[0.25,0.46,0.45,0.94]
                ${isLarge
                    ? "py-3 pl-10 pr-3 gap-6 hover:gap-14 hover:pr-5"
                    : "py-2.5 pl-6 pr-2.5 gap-3 hover:gap-8 hover:pr-4"
                }
                ${variant === "dark" ? "bg-neutral-900 text-white hover:bg-neutral-800" : ""}
                ${variant === "light" ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30" : ""}
                ${variant === "white" ? "bg-white text-neutral-900 hover:bg-neutral-100 shadow-xl" : ""}
                ${className}
            `}
        >
            <span className={`font-medium tracking-wide ${isLarge ? "text-2xl" : "text-base"}`}>
                {label}
            </span>
            <span
                className={`
                    flex items-center justify-center rounded-full
                    transition-transform duration-300 group-hover:rotate-12
                    ${isLarge ? "size-16" : "size-12"}
                    ${variant === "white" ? "bg-neutral-900 text-white" : ""}
                    ${variant === "dark" ? "bg-white text-black" : ""}
                    ${variant === "light" ? "bg-white/20 text-white" : ""}
                `}
            >
                <LightningIcon />
            </span>
        </button>
    );
}


