import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { ANIMATION } from "../../animations/config";

const title = "植松 蛍太 ポートフォリオ";

export default function Header() {
  return (
    <motion.h1
      style={{
        textAlign: "center",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.18, // ★ 1文字ずつの間隔
          },
        },
      }}
    >
      {title.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={fadeUp}
          transition={{ duration: ANIMATION.duration }}
          style={{
            display: "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
