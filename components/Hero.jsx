"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Heart } from "lucide-react";
import FloatingMascot from "./FloatingMascot";

export default function Hero() {
  return (
    <section
      id="home"
      className="cute-background relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* =================================
          FLOATING MASCOTS
          These use mascot.png
      ================================== */}

      <FloatingMascot
        className="left-[5%] top-[25%]"
        size="w-20 h-20"
        duration={5}
      />

      <FloatingMascot
        className="right-[8%] top-[20%]"
        size="w-14 h-14"
        delay={1}
        duration={4}
      />

      <FloatingMascot
        className="left-[15%] bottom-[12%]"
        size="w-12 h-12"
        delay={0.5}
        duration={4.5}
      />

      <FloatingMascot
        className="right-[25%] bottom-[10%]"
        size="w-16 h-16"
        delay={1.5}
        duration={5}
      />

      {/* Extra sparkles */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[43%] top-[20%] text-xl text-[#efa2b9]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[43%] bottom-[25%] text-xl text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      {/* =================================
          MAIN CONTENT
      ================================== */}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* =================================
            LEFT SIDE
        ================================== */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Welcome */}

          <div className="cute-font mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm text-[#d96f91] shadow-sm backdrop-blur-md">
            <Sparkles size={15} />
            welcome to my little corner
          </div>

          {/* Heading */}

          <h1 className="sparkle-font text-6xl leading-[0.95] text-[#654954] sm:text-7xl lg:text-8xl">
            Hi, I'm
            <span className="block text-[#d96f91]">
              Arin!
            </span>
          </h1>

          {/* Role */}

          <div className="mt-7 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#efa2b9]" />

            <p className="cute-font text-lg text-[#d96f91] sm:text-xl">
              FullStack Developer
            </p>
          </div>

          {/* Description */}

          <p className="cute-font mt-6 max-w-xl text-base leading-8 text-[#795b65] sm:text-lg">
            I create cute, interactive, and meaningful digital experiences
            through code. Turning little ideas into something you can
            actually click, explore, and enjoy. ♡
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="cute-font rounded-full bg-[#f39ab5] px-7 py-3 text-sm text-white shadow-lg shadow-[#f39ab5]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#d96f91]"
            >
              See My Projects ✨
            </a>

            <a
              href="#about"
              className="cute-font rounded-full border border-[#efb4c6] bg-white/60 px-7 py-3 text-sm text-[#d96f91] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              More About Me
            </a>
          </div>

          {/* Tech stack */}

          <div className="cute-font mt-8 flex flex-wrap gap-2 text-xs text-[#9b747f]">
            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
              Next.js
            </span>

            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
              React
            </span>

            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
              JavaScript
            </span>

            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
              Tailwind
            </span>
          </div>
        </motion.div>

        {/* =================================
            RIGHT SIDE — CHARACTER
        ================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-md">

            {/* Soft glow */}

            <div className="absolute inset-8 rounded-[4rem] bg-[#f5abc1]/30 blur-3xl" />

            {/* Main glass card */}

            <div className="glass pink-glow relative rounded-[3rem] p-5">

              {/* Inner card */}

              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fff0f4] to-[#fff9f1]">

                {/* Top decoration */}

                <div className="flex items-center justify-between px-6 pt-5">
                  <div className="cute-font rounded-full bg-white/70 px-3 py-1.5 text-xs text-[#d96f91] shadow-sm">
                    hello ♡
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles
                      size={18}
                      className="text-[#efa2b9]"
                    />
                  </motion.div>
                </div>

                {/* =================================
                    CHARACTER IMAGE
                ================================== */}

                <div className="relative flex h-[430px] items-center justify-center">

                  {/* Glow behind character */}

                  <div className="absolute h-72 w-72 rounded-full bg-[#ffdce7]/70 blur-2xl" />

                  {/* CHARACTER.PNG */}

                  <motion.img
                    src="/images/character.png"
                    alt="Arin's character"
                    animate={{
                      y: [0, -9, 0],
                      rotate: [0, 1.5, -1.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 h-full w-full object-contain p-8 drop-shadow-[0_15px_20px_rgba(210,110,143,0.15)]"
                  />

                  {/* Heart */}

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-10 top-20 z-20"
                  >
                    <Heart
                      size={22}
                      fill="#f39ab5"
                      className="text-[#f39ab5]"
                    />
                  </motion.div>

                  {/* Sparkle */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-10 top-32 z-20 text-2xl text-[#e98ca9]"
                  >
                    ✦
                  </motion.div>

                  {/* Small sparkle */}

                  <motion.div
                    animate={{
                      y: [0, 7, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-24 right-12 z-20 text-xl text-[#f0a7bb]"
                  >
                    ✧
                  </motion.div>
                </div>

                {/* Bottom text */}

                <div className="pb-6 text-center">
                  <p className="sparkle-font text-2xl text-[#d96f91]">
                    nice to meet you!
                  </p>

                  <p className="cute-font mt-1 text-xs text-[#b2818e]">
                    thanks for stopping by ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Small badge */}

            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [4, 2, 4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 z-30 rounded-2xl bg-white px-4 py-3 shadow-xl"
            >
              <p className="cute-font text-xs text-[#d96f91]">
                made with ♡
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =================================
          SCROLL INDICATOR
      ================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="cute-font absolute bottom-7 left-1/2 -translate-x-1/2 text-xs text-[#b2818e]"
      >
        <span className="flex flex-col items-center gap-2">
          scroll down
          <ArrowDown size={16} />
        </span>
      </motion.a>
    </section>
  );
}