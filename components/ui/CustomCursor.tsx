"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_SIZE = 10;
const CURSOR_SIZE_LARGE = 150;

export default function CustomCursor() {
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorSize = useMotionValue(CURSOR_SIZE);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const sizeSpringConfig = { damping: 20, stiffness: 300, mass: 0.8 };
    const springSize = useSpring(cursorSize, sizeSpringConfig);

    const opacityValue = useMotionValue(0);

    const moveCursor = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        opacityValue.set(1);
    }, [cursorX, cursorY, opacityValue]);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const cursorTarget = target.closest("[data-cursor]");

        if (cursorTarget) {
            const type = cursorTarget.getAttribute("data-cursor");
            if (type === "large") {
                cursorSize.set(CURSOR_SIZE_LARGE);
            }
        } else {
            cursorSize.set(CURSOR_SIZE);
        }
    }, [cursorSize]);

    useEffect(() => {
        // Detect touch device after mount (avoids SSR hydration mismatch)
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);

        if (isTouch) return;

        document.body.style.cursor = "none";

        const handleLeave = () => opacityValue.set(0);
        const handleEnter = () => opacityValue.set(1);

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.addEventListener("mouseleave", handleLeave);
        document.addEventListener("mouseenter", handleEnter);

        return () => {
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleLeave);
            document.removeEventListener("mouseenter", handleEnter);
        };
    }, [moveCursor, handleMouseOver, opacityValue]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-9999 rounded-full bg-white"
            style={{
                x: springX,
                y: springY,
                width: springSize,
                height: springSize,
                translateX: "-50%",
                translateY: "-50%",
                mixBlendMode: "difference",
                opacity: opacityValue,
            }}
        />
    );
}
