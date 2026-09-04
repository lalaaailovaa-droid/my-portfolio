"use client";

import { motion } from "framer-motion";

export default function FloatingMascot({
  size = "w-20 h-20",
  delay = 0,
  duration = 5,
  className = "",
}) {
  return (
    <motion.img
      src="/images/mascot.png"
      alt="Floating mascot"
      className={`absolute ${size} object-contain drop-shadow-[0_10px_18px_rgba(210,110,143,0.2)] ${className}`}
      animate={{
        y: [0, -18, 0],
        x: [0, 8, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}