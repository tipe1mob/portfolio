import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { ANIMATION } from "../../animations/config";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: ANIMATION.footerDuration }}
      style={{
        width: "100%",
        padding: "24px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {/* SNS / Links */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          fontSize: "24px",
        }}
      >
        {/* Twitter */}
        <a
          href="https://x.com/hotaru0_0_0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/type1mob"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaInstagram />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/tipe1mob"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaGithub />
        </a>

        {/* Gmail */}
        <a
          href="mailto:uematsukeita0001@gmail.com"
          style={{ color: "inherit" }}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* コピーライト */}
      <small style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Your Name
      </small>
    </motion.div>
  );
}
