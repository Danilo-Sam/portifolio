"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-void/85 backdrop-blur-md border-b border-void-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#topo"
          className="font-mono text-sm sm:text-base text-offwhite hover:text-cyan transition-colors"
        >
          <span className="text-cyan">~/</span>portfolio
          <span className="text-crimson">$</span>
          <span className="inline-block w-2 h-4 bg-cyan ml-1 align-middle animate-blink" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-steel hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <span className="flex items-center gap-2 font-mono text-[11px] text-steel pl-2 border-l border-void-line">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            ONLINE
          </span>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-offwhite"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-b border-void-line px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.15em] text-steel hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
