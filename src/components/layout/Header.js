import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { ANIMATION } from "../../animations/config";
const title = "植松 蛍太 ポートフォリオ";
export default function Header() {
    return (_jsx(motion.h1, { style: {
            textAlign: "center",
            display: "inline-block",
            whiteSpace: "nowrap",
        }, initial: "hidden", animate: "visible", variants: {
            visible: {
                transition: {
                    staggerChildren: 0.18, // ★ 1文字ずつの間隔
                },
            },
        }, children: title.split("").map((char, index) => (_jsx(motion.span, { variants: fadeUp, transition: { duration: ANIMATION.duration }, style: {
                display: "inline-block",
            }, children: char === " " ? "\u00A0" : char }, index))) }));
}
