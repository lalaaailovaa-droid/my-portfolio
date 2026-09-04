"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="cute-background relative overflow-hidden px-6 pb-8 pt-16">
      {/* =========================
          DECORATIVE SPARKLES
      ========================== */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-10 text-xl text-[#efa2b9]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 7, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-16 text-lg text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      <div className="mx-auto max-w-6xl">
        {/* =========================
            MAIN FOOTER CARD
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[2.5rem] px-6 py-8 sm:px-10"
        >
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
            {/* Logo / Message */}

            <div className="text-center md:text-left">
              <a
                href="#home"
                className="sparkle-font text-3xl text-[#d96f91] transition hover:text-[#c95f82]"
              >
                Arin ✦
              </a>

              <p className="cute-font mt-2 text-sm text-[#8f6c77]">
                building little things with a lot of ♡
              </p>
            </div>

            {/* Navigation */}

            <nav className="cute-font flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#8f6c77]">
              <a
                href="#home"
                className="transition hover:text-[#d96f91]"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition hover:text-[#d96f91]"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition hover:text-[#d96f91]"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition hover:text-[#d96f91]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#d96f91]"
              >
                Contact
              </a>
            </nav>

            {/* Back to top */}

            <motion.a
              href="#home"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f39ab5] text-white shadow-lg shadow-[#f39ab5]/20 transition hover:bg-[#d96f91]"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.a>
          </div>

          {/* Divider */}

          <div className="my-7 h-px bg-[#efd9df]" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="cute-font text-xs text-[#a07884]">
              © {new Date().getFullYear()} Arin. All rights reserved.
            </p>

            <div className="cute-font flex items-center gap-2 text-xs text-[#a07884]">
              made with
              <Heart
                size={13}
                fill="#f39ab5"
                className="text-[#f39ab5]"
              />
              and
              <Sparkles
                size={13}
                className="text-[#efa2b9]"
              />
            </div>
          </div>
        </motion.div>

        {/* Tiny ending text */}

        <p className="cute-font mt-6 text-center text-[11px] text-[#b18b96]">
          thanks for visiting my little corner of the internet ♡
        </p>
      </div>
    </footer>
  );
}