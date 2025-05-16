"use client"
import React, { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";

interface VelocityMapping {
    input: [number, number];
    output: [number, number];
}

interface VelocityTextProps {
    children: React.ReactNode;
    baseVelocity: number;
    scrollContainerRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

const ScrollVelocity: React.FC<VelocityTextProps> = ({
    children,
    baseVelocity,
    scrollContainerRef,
    className = "",
    damping = 10,
    stiffness = 100,
    numCopies = 2,
    velocityMapping = { input: [0, 1000], output: [0, 10] },
    parallaxClassName = "",
    scrollerClassName = "",
    parallaxStyle = {},
    scrollerStyle = {},
}) => {
    const { scrollY } = scrollContainerRef
        ? useScroll({ container: scrollContainerRef })
        : useScroll();
    const velocity = useVelocity(scrollY);
    const smooth = useSpring(velocity, { damping, stiffness });
    const velocityFactor = useTransform(smooth, velocityMapping.input, velocityMapping.output);
    const x = useMotionValue(0);

    function wrap(min: number, max: number, v: number): number {
        const range = max - min;
        const mod = ((v - min) % range + range) % range;
        return mod + min;
    }

    const copyRef = useRef<HTMLSpanElement>(null);
    const [copyWidth, setCopyWidth] = useState(0);

    useLayoutEffect(() => {
        if (copyRef.current) setCopyWidth(copyRef.current.offsetWidth);
    }, [children]);

    const xTransformed = useTransform(x, (v) => copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`);

    useAnimationFrame((_, delta) => {
        const moveBy = baseVelocity * delta / 1000 * (1 + velocityFactor.get());
        x.set(x.get() + moveBy);
    });

    const items = Array.from({ length: numCopies }).map((_, i) => (
        <span key={i} ref={i === 0 ? copyRef : undefined} className={scrollerClassName} style={scrollerStyle}>
            {children}
        </span>
    ));

    return (
        <div ref={scrollContainerRef} className={`overflow-hidden whitespace-nowrap ${className}`} style={parallaxStyle}>
            <motion.div style={{ display: 'inline-flex', x: xTransformed }} className={parallaxClassName}>
                {items}
            </motion.div>
        </div>
    );
};

export default ScrollVelocity;
