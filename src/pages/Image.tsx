import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";

const images = [photo1, photo2, photo3, photo4, photo5];

const slideVariants = {
  enter: (direction: 1 | -1) => ({
    x: direction === 1 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 1 | -1) => ({
    x: direction === 1 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const AUTO_SLIDE_INTERVAL = 4000;

export default function Image() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -80) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
      resetAutoSlide();
    } else if (info.offset.x > 80) {
      setDirection(-1);
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      resetAutoSlide();
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Image</h2>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              userSelect: "none",
              cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
