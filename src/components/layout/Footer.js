import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { ANIMATION } from "../../animations/config";
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope, } from "react-icons/fa";
export default function Footer() {
    return (_jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, transition: { duration: ANIMATION.footerDuration }, style: {
            width: "100%",
            padding: "24px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
        }, children: [_jsxs("div", { style: {
                    display: "flex",
                    gap: "24px",
                    fontSize: "24px",
                }, children: [_jsx("a", { href: "https://x.com/hotaru0_0_0", target: "_blank", rel: "noopener noreferrer", style: { color: "inherit" }, children: _jsx(FaTwitter, {}) }), _jsx("a", { href: "https://www.instagram.com/type1mob", target: "_blank", rel: "noopener noreferrer", style: { color: "inherit" }, children: _jsx(FaInstagram, {}) }), _jsx("a", { href: "https://github.com/tipe1mob", target: "_blank", rel: "noopener noreferrer", style: { color: "inherit" }, children: _jsx(FaGithub, {}) }), _jsx("a", { href: "mailto:uematsukeita0001@gmail.com", style: { color: "inherit" }, children: _jsx(FaEnvelope, {}) })] }), _jsxs("small", { style: { opacity: 0.7 }, children: ["\u00A9 ", new Date().getFullYear(), " Your Name"] })] }));
}
