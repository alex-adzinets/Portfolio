import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={screen.width > 800 ? "inline-block h-24 w-[1px] translate-y-1 bg-white":"inline-block h-8 w-[1px] translate-y-1 bg-white"}
    />
  );
}
