"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <nav className="glass rounded-full px-5 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="sparkle-font text-2xl text-[#d96f91]"
          >
            Arin ✦
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cute-font text-sm text-[#795b65] transition hover:text-[#d96f91]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="cute-font rounded-full bg-[#f39ab5] px-5 py-2 text-sm text-white shadow-md shadow-[#f39ab5]/20 transition hover:-translate-y-0.5 hover:bg-[#d96f91]"
            >
              Let's Talk ✨
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full bg-[#ffdce7] p-2 text-[#d96f91] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-3 border-t border-[#f4d9df] pt-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="cute-font rounded-2xl px-4 py-2 text-[#795b65] hover:bg-[#fff1e7]"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}