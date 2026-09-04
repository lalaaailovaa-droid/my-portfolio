"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Heart,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);

    const body = encodeURIComponent(
      `Hi Arin!\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:bieblz.arinn@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="cute-background relative overflow-hidden px-6 py-28"
    >
      {/* Decorative sparkles */}

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
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
        animate={{ y: [0, 8, 0], rotate: [0, -12, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[9%] top-32 text-xl text-[#f2b5c8]"
      >
        ✧
      </motion.div>

      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="cute-font mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm text-[#d96f91] shadow-sm backdrop-blur-md">
            <Mail size={15} />
            let's create something together
          </div>

          <h2 className="sparkle-font text-5xl text-[#654954] sm:text-6xl">
            Let's Talk
            <span className="text-[#d96f91]"> ♡</span>
          </h2>

          <p className="cute-font mx-auto mt-5 max-w-2xl text-base leading-8 text-[#795b65] sm:text-lg">
            Have an idea, a project, or just want to say hi?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass overflow-hidden rounded-[2.5rem] p-5 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left side */}

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ffe8ef] via-[#fff1f4] to-[#fff5eb] p-7 sm:p-9">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />

              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#f39ab5]/10 blur-2xl" />

              <div className="relative z-10">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/75 text-[#d96f91] shadow-sm">
                  <Heart
                    size={25}
                    fill="#f39ab5"
                  />
                </div>

                <h3 className="sparkle-font text-3xl text-[#654954]">
                  Say hello!
                </h3>

                <p className="cute-font mt-4 text-sm leading-7 text-[#856873]">
                  I'm always excited to meet new people, hear
                  interesting ideas, and build something fun together.
                </p>

                <div className="mt-8">
                  <p className="cute-font text-xs text-[#a07884]">
                    EMAIL ME AT
                  </p>

                  <a
                    href="mailto:bieblz.arinn@gmail.com"
                    className="cute-font mt-2 inline-flex items-center gap-2 text-sm text-[#d96f91] transition hover:text-[#b95879]"
                  >
                    bieblz.arinn@gmail.com
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white/55 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8bcf9b] shadow-sm" />

                  <p className="cute-font text-xs text-[#795b65]">
                    Open to new ideas & projects
                  </p>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-7 right-7 text-2xl text-[#efa2b9]"
              >
                ♡
              </motion.div>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-2 sm:p-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="cute-font mb-2 block text-sm text-[#654954]"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="your lovely name..."
                  className="cute-font w-full rounded-2xl border border-[#f0d2dc] bg-white/60 px-5 py-3.5 text-sm text-[#654954] outline-none backdrop-blur-md transition placeholder:text-[#b99aa3] focus:border-[#e9a0b8] focus:bg-white/80 focus:ring-4 focus:ring-[#f39ab5]/10"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="cute-font mb-2 block text-sm text-[#654954]"
                >
                  Your email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="cute-font w-full rounded-2xl border border-[#f0d2dc] bg-white/60 px-5 py-3.5 text-sm text-[#654954] outline-none backdrop-blur-md transition placeholder:text-[#b99aa3] focus:border-[#e9a0b8] focus:bg-white/80 focus:ring-4 focus:ring-[#f39ab5]/10"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="cute-font mb-2 block text-sm text-[#654954]"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="tell me what's on your mind..."
                  className="cute-font w-full resize-none rounded-2xl border border-[#f0d2dc] bg-white/60 px-5 py-3.5 text-sm text-[#654954] outline-none backdrop-blur-md transition placeholder:text-[#b99aa3] focus:border-[#e9a0b8] focus:bg-white/80 focus:ring-4 focus:ring-[#f39ab5]/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="cute-font mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#f39ab5] px-6 py-3.5 text-sm text-white shadow-lg shadow-[#f39ab5]/20 transition hover:bg-[#d96f91]"
              >
                Send Message
                <Send size={15} />
              </motion.button>

              <p className="cute-font mt-3 text-center text-[11px] text-[#a07884]">
                made with a little bit of code & a lot of ♡
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}