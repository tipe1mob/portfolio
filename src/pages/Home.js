import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Image from "./Image";
import Works from "./Works";
import { fadeUp } from "../animations/fadeUp";
import { ANIMATION } from "../animations/config";
import ContentBox from "../components/common/ContentBox";
const BOX_HEIGHT_TOP = 340;
const IMAGE_BOX_HEIGHT = 700;
const WORKS_BOX_HEIGHT = 700;
export default function Home() {
    return (_jsxs("div", { style: {
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
        }, children: [_jsxs("div", { style: { display: "flex", gap: "32px" }, children: [_jsx(motion.div, { variants: fadeUp, initial: "hidden", animate: "visible", transition: {
                            duration: ANIMATION.duration,
                            delay: ANIMATION.delayStep * 1,
                        }, style: { flex: 1, minWidth: 0 }, children: _jsx(ContentBox, { height: BOX_HEIGHT_TOP, children: _jsx(About, {}) }) }), _jsx(motion.div, { variants: fadeUp, initial: "hidden", animate: "visible", transition: {
                            duration: ANIMATION.duration,
                            delay: ANIMATION.delayStep * 2,
                        }, style: { flex: 1, minWidth: 0 }, children: _jsx(ContentBox, { height: BOX_HEIGHT_TOP, children: _jsx(Skills, {}) }) })] }), _jsxs("div", { style: { display: "flex", gap: "32px" }, children: [_jsx(motion.div, { variants: fadeUp, initial: "hidden", animate: "visible", transition: {
                            duration: ANIMATION.duration,
                            delay: ANIMATION.delayStep * 3,
                        }, style: { flex: 1, minWidth: 0 }, children: _jsx(ContentBox, { height: IMAGE_BOX_HEIGHT, children: _jsx(Image, {}) }) }), _jsx(motion.div, { variants: fadeUp, initial: "hidden", animate: "visible", transition: {
                            duration: ANIMATION.duration,
                            delay: ANIMATION.delayStep * 4,
                        }, style: { flex: 1, minWidth: 0 }, children: _jsx(ContentBox, { height: WORKS_BOX_HEIGHT, children: _jsx(Works, {}) }) })] })] }));
}
