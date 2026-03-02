import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Stats", href: "#stats" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Showcase", href: "#showcase" },
];

// ── Icons (Simplified versions for Navbar) ────────────────────────
const IconX = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
);

const IconSpotify = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.223.367-.703.483-1.07.261-2.993-1.83-6.76-2.245-11.198-1.233-.42.096-.84-.173-.936-.593-.096-.42.173-.84.593-.936 4.869-1.112 9.035-.64 12.35 1.388.368.225.484.706.261 1.073zm1.47-3.253c-.28.455-.878.603-1.333.323-3.425-2.105-8.646-2.716-12.695-1.487-.513.155-1.053-.135-1.208-.648-.155-.513.135-1.053.648-1.208 4.62-1.403 10.37-.714 14.266 1.68.455.28.603.878.322 1.333zm.126-3.447C15.148 8.257 8.535 8.038 4.707 9.198c-.628.19-1.29-.162-1.48-1.026-.19-.628.162-1.29.826-1.48 4.397-1.335 11.69-1.076 16.25 1.63.565.334.75 1.066.416 1.632-.334.565-1.066.75-1.632.416z" />
    </svg>
);

const IconLinkedin = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Bloquear scroll cuando el menú esté abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="max-w-5xl absolute top-0 mx-auto left-0 right-0 z-50 px-2.5 pt-3.5 md:px-3.5">
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-4xl md:rounded-[2.5rem] px-4 py-2.5 md:px-6 md:py-3">

                    {/* Logo */}
                    <div className="flex items-center justify-center size-12 rounded-2xl bg-white/10 border border-white/15 shrink-0 z-50">
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
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden items-center justify-center size-12 rounded-2xl bg-white/10 border border-white/15 text-white cursor-pointer z-50 transition-transform active:scale-90"
                        aria-label="Toggle Menu"
                    >
                        <div className="relative size-6">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="absolute top-1.5 left-0 w-6 h-0.5 bg-white rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="absolute top-4.5 left-0 w-6 h-0.5 bg-white rounded-full"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-0 z-40 md:hidden flex flex-col pt-24"
                    >
                        {/* Backdrop blur effect */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />

                        {/* Menu Card Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="relative mx-3.5 bg-neutral-900 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col p-8 pt-10"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 + idx * 0.05 }}
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className="text-4xl font-semibold text-white/50 hover:text-white transition-colors no-underline tracking-tight"
                                    >
                                        <span className="text-xl font-medium text-white/20 mr-4">0{idx + 1}</span>
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm text-white/30 font-medium uppercase tracking-widest">Follow Us</span>
                                    <div className="flex items-center gap-4">
                                        <a href="#" className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                                            <IconX />
                                        </a>
                                        <a href="#" className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                                            <IconSpotify />
                                        </a>
                                        <a href="#" className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                                            <IconLinkedin />
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <CtaButton label="Start Today" variant="white" className="w-full justify-between" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
