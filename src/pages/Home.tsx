import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Image from "./Image";
import Works from "./Works";
import { fadeUp } from "../animations/fadeUp";
import { ANIMATION } from "../animations/config";
import ContentBox from "../components/common/ContentBox";

const BOX_HEIGHT_TOP = 340;
const BOX_HEIGHT_BOTTOM = 340;

const IMAGE_BOX_HEIGHT = 700;
const WORKS_BOX_HEIGHT = 700;

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* 上段 */}
      <div style={{ display: "flex", gap: "32px" }}>
        {/* About */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: ANIMATION.duration,
            delay: ANIMATION.delayStep * 1,
          }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <ContentBox height={BOX_HEIGHT_TOP}>
            <About />
          </ContentBox>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: ANIMATION.duration,
            delay: ANIMATION.delayStep * 2,
          }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <ContentBox height={BOX_HEIGHT_TOP}>
            <Skills />
          </ContentBox>
        </motion.div>
      </div>

      {/* 下段 */}
      <div style={{ display: "flex", gap: "32px" }}>
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: ANIMATION.duration,
            delay: ANIMATION.delayStep * 3,
          }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <ContentBox height={IMAGE_BOX_HEIGHT}>
            <Image />
          </ContentBox>
        </motion.div>

        {/* Works */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: ANIMATION.duration,
            delay: ANIMATION.delayStep * 4,
          }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <ContentBox height={WORKS_BOX_HEIGHT }>
            <Works />
          </ContentBox>
        </motion.div>
      </div>
    </div>
  );
}
