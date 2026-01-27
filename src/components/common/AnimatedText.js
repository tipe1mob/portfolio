import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function AnimatedText({ text }) {
    return (_jsx(motion.h1, { initial: "hidden", animate: "visible", variants: {
            visible: {
                transition: {
                    staggerChildren: 0.05,
                },
            },
        }, children: text.split("").map((char, i) => (_jsx(motion.span, { variants: {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }, style: { display: "inline-block" }, children: char === " " ? "\u00A0" : char }, i))) }));
}
