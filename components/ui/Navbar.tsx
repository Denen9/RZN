"use client";

import CtaButton from "@/components/ui/CtaButton";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Stats", href: "#stats" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Showcase", href: "#showcase" },
];

export default function Navbar() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="max-w-5xl absolute top-0 mx-auto left-0 right-0 z-40 px-2.5 pt-3.5 md:px-3.5">
            <div className="flex items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-4xl md:rounded-[2.5rem] px-4 py-2.5 md:px-6 md:py-3">

                {/* Logo */}
                <div className="flex items-center justify-center size-12 rounded-2xl bg-white/10 border border-white/15 shrink-0">
                    <span className="text-white font-bold text-lg tracking-tight">RZN</span>
                </div>

                {/* Nav links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="px-4 py-2 text-base text-white/80 font-medium rounded-full transition-all duration-200 no-underline hover:text-white hover:bg-white/10"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <CtaButton label="Start Today" variant="dark" />
                </div>

                {/* Mobile menu button */}
                <button
                    className="flex md:hidden items-center justify-center size-12 rounded-2xl bg-white/10 border border-white/15 text-white cursor-pointer"
                    aria-label="Menu"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
