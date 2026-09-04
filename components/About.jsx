"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Code2 } from "lucide-react";

const stats = [
  {
    number: "20+",
    label: "Projects",
    icon: "✦",
  },
  {
    number: "2+",
    label: "Years Learning",
    icon: "♡",
  },
  {
    number: "10+",
    label: "Technologies",
    icon: "✧",
  },
  {
    number: "∞",
    label: "Ideas",
    icon: "☁",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffaf4] px-6 py-28"
    >
      {/* =================================
          DECORATIONS
      ================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[6%] top-20 text-2xl text-[#efa2b9]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-32 text-xl text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      <div className="mx-auto max-w-6xl">

        {/* =================================
            SECTION TITLE
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="cute-font mb-4 inline-flex items-center gap-2 rounded-full bg-[#ffdce7]/60 px-4 py-2 text-xs text-[#d96f91]">
            <Sparkles size={14} />
            a little bit about me
          </div>

          <h2 className="sparkle-font text-5xl text-[#654954] sm:text-6xl">
            Who am I?
          </h2>

          <p className="cute-font mt-5 text-base leading-8 text-[#795b65] sm:text-lg">
            I'm someone who loves turning ideas into interactive things.
            I enjoy combining technology, creativity, and a little bit of
            cuteness to create experiences that feel personal. ♡
          </p>
        </motion.div>

        {/* =================================
            ABOUT CONTENT
        ================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================
              LEFT — ABOUT CARD
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass pink-glow rounded-[2.5rem] p-7">

              {/* mini heading */}

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffdce7] text-[#d96f91]">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="cute-font text-xs text-[#b2818e]">
                    currently
                  </p>

                  <p className="cute-font text-sm text-[#654954]">
                    building & learning
                  </p>
                </div>
              </div>

              {/* paragraph */}

              <p className="cute-font mt-7 text-sm leading-8 text-[#795b65]">
                I started learning how to build things with code because I
                wanted to understand how websites and applications actually
                work behind the screen.
              </p>

              <p className="cute-font mt-4 text-sm leading-8 text-[#795b65]">
                Since then, I've been exploring frontend development,
                backend development, UI design, and everything in between.
              </p>

              {/* favorite things */}

              <div className="mt-7">
                <p className="cute-font mb-3 text-xs text-[#b2818e]">
                  things I love ♡
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Coding",
                    "Web Design",
                    "UI/UX",
                    "Creative Ideas",
                    "Cute Things",
                  ].map((item) => (
                    <span
                      key={item}
                      className="cute-font rounded-full bg-[#fff0f4] px-3 py-2 text-xs text-[#d96f91]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* little signature */}

              <div className="mt-8 flex items-center gap-2 text-[#d96f91]">
                <Heart size={15} fill="#f39ab5" />
                <span className="sparkle-font text-lg">
                  made with curiosity
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT — STATS
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="glass group relative overflow-hidden rounded-[2rem] p-6 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(220,120,150,0.15)]"
              >
                {/* decorative glow */}

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ffdce7]/40 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                {/* icon */}

                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff0f4] text-lg text-[#d96f91]">
                  {stat.icon}
                </div>

                {/* number */}

                <p className="sparkle-font relative mt-5 text-4xl text-[#d96f91] sm:text-5xl">
                  {stat.number}
                </p>

                {/* label */}

                <p className="cute-font relative mt-1 text-sm text-[#795b65]">
                  {stat.label}
                </p>

                {/* bottom decoration */}

                <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-[#ffe5ec]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${55 + index * 10}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="h-full rounded-full bg-[#f39ab5]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}