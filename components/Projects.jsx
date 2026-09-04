"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Code2,
  Heart,
} from "lucide-react";

const projects = [
  {
    title: "My First Project",
    description:
      "A cute and interactive web project built with modern frontend technologies.",
    tags: ["Next.js", "React", "Tailwind"],
    demo: "#",
    github: "#",
    icon: Code2,
  },
  {
    title: "Creative Website",
    description:
      "A responsive website focused on clean visuals, smooth interactions, and a fun user experience.",
    tags: ["React", "JavaScript", "CSS"],
    demo: "#",
    github: "#",
    icon: Sparkles,
  },
  {
    title: "Little App",
    description:
      "A small application made to practice logic, UI design, and interactive components.",
    tags: ["JavaScript", "UI/UX"],
    demo: "#",
    github: "#",
    icon: Heart,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="cute-background relative overflow-hidden px-6 py-28"
    >
      {/* Decorative sparkles */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[7%] top-28 text-2xl text-[#efa2b9]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-36 text-xl text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      <div className="mx-auto max-w-6xl">
        {/* =========================
            HEADER
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
            little things I've built
          </div>

          <h2 className="sparkle-font text-5xl text-[#654954] sm:text-6xl">
            My Projects
            <span className="text-[#d96f91]"> ♡</span>
          </h2>

          <p className="cute-font mx-auto mt-5 max-w-2xl text-base leading-8 text-[#795b65] sm:text-lg">
            Some of the little ideas I've turned into real, clickable
            experiences through code.
          </p>
        </motion.div>

        {/* =========================
            PROJECT GRID
        ========================== */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass group overflow-hidden rounded-[2rem] transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#efa2b9]/15"
              >
                {/* =====================
                    PROJECT VISUAL
                ====================== */}

                <div className="relative m-3 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff0f4] via-[#fff7f2] to-[#ffe8ef]">
                  <div className="relative flex aspect-[16/10] items-center justify-center">
                    {/* Decorative circles */}

                    <div className="absolute left-8 top-7 h-3 w-3 rounded-full bg-[#f5b3c7]/60" />

                    <div className="absolute right-10 top-10 h-5 w-5 rounded-full bg-[#ffd4df]/70" />

                    <div className="absolute bottom-8 left-12 h-4 w-4 rounded-full bg-[#f3c8a8]/40" />

                    {/* Main icon */}

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/75 text-[#d96f91] shadow-xl shadow-[#d96f91]/10 backdrop-blur-md"
                    >
                      <Icon size={42} strokeWidth={1.7} />

                      <span className="absolute -right-3 -top-3 text-lg text-[#efa2b9]">
                        ✦
                      </span>

                      <span className="absolute -bottom-2 -left-3 text-sm text-[#f2b5c8]">
                        ✧
                      </span>
                    </motion.div>

                    {/* Project number */}

                    <div className="absolute bottom-4 right-4 rounded-full bg-white/75 px-3 py-1.5 backdrop-blur-md">
                      <span className="cute-font text-xs text-[#d96f91]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* =====================
                    CONTENT
                ====================== */}

                <div className="px-5 pb-5 pt-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="sparkle-font text-2xl text-[#654954]">
                      {project.title}
                    </h3>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="mt-1 text-[#efa2b9]"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  <p className="cute-font mt-2 text-sm leading-6 text-[#856873]">
                    {project.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="cute-font rounded-full bg-[#fff0f4] px-3 py-1.5 text-xs text-[#d96f91]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.demo}
                      className="cute-font flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f39ab5] px-4 py-2.5 text-xs text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f91]"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={project.github}
                      className="cute-font flex items-center justify-center gap-2 rounded-full border border-[#efb4c6] bg-white/70 px-4 py-2.5 text-xs text-[#d96f91] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <Code2 size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="cute-font text-sm text-[#a07884]">
            more little projects coming soon...
            <span className="ml-2 text-[#d96f91]">♡</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}