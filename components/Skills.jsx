"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Smartphone,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    level: 85,
    icon: Code2,
    description: "Interactive web experiences",
  },
  {
    name: "React",
    level: 80,
    icon: Code2,
    description: "Building dynamic interfaces",
  },
  {
    name: "Next.js",
    level: 78,
    icon: Sparkles,
    description: "Modern full-stack web apps",
  },
  {
    name: "Tailwind CSS",
    level: 88,
    icon: Palette,
    description: "Cute & responsive styling",
  },
  {
    name: "Database",
    level: 70,
    icon: Database,
    description: "Working with application data",
  },
  {
    name: "Git & GitHub",
    level: 75,
    icon: GitBranch,
    description: "Version control & collaboration",
  },
  {
    name: "Responsive Design",
    level: 82,
    icon: Smartphone,
    description: "Beautiful on every screen",
  },
  {
    name: "UI / UX",
    level: 76,
    icon: Palette,
    description: "Simple & enjoyable interfaces",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="cute-background relative overflow-hidden px-6 py-28"
    >
      {/* Decorative sparkles */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-24 text-2xl text-[#efa2b9]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-40 text-xl text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="cute-font mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm text-[#d96f91] shadow-sm backdrop-blur-md">
            <Sparkles size={15} />
            things I love to build with
          </div>

          <h2 className="sparkle-font text-5xl text-[#654954] sm:text-6xl">
            My Skills
            <span className="text-[#d96f91]"> ♡</span>
          </h2>

          <p className="cute-font mx-auto mt-5 max-w-2xl text-base leading-8 text-[#795b65] sm:text-lg">
            A little collection of technologies and tools I use to turn
            ideas into interactive digital experiences.
          </p>
        </motion.div>

        {/* =========================
            SKILLS GRID
        ========================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.02,
                }}
                className="glass group rounded-[2rem] p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#efa2b9]/10"
              >
                {/* Icon + percentage */}

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe4ec] text-[#d96f91] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={20} />
                  </div>

                  <span className="cute-font rounded-full bg-white/70 px-3 py-1 text-xs text-[#d96f91] shadow-sm">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill name */}

                <h3 className="cute-font text-lg font-semibold text-[#654954]">
                  {skill.name}
                </h3>

                <p className="cute-font mt-1 min-h-[40px] text-xs leading-5 text-[#a07884]">
                  {skill.description}
                </p>

                {/* Progress bar */}

                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-[#f9e4ea]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.05,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#f39ab5] to-[#d96f91]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM NOTE
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <div className="glass inline-flex items-center gap-3 rounded-full px-5 py-3">
            <span className="text-[#f39ab5]">♡</span>

            <p className="cute-font text-sm text-[#795b65]">
              Always learning, always building, always curious ✨
            </p>

            <span className="text-[#f39ab5]">♡</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}