"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import GlitchText from "./GlitchText";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], typingSpeed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.rolesTyped);

  return (
    <section
      id="topo"
      className="relative min-h-screen flex flex-col items-start justify-center px-6 sm:px-10 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-mono text-xs sm:text-sm text-cyan tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
      >
        <span className="w-2 h-2 bg-crimson animate-pulse" />
        sistema iniciado // disponível para novos projetos
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="font-mono font-extrabold uppercase leading-[0.95] text-[13vw] sm:text-7xl md:text-8xl text-offwhite"
      >
        <GlitchText text={profile.name} className="text-glow-cyan" />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="mt-5 font-mono text-base sm:text-2xl text-crimson h-8 flex items-center"
      >
        <span>&gt; {typed}</span>
        <span className="inline-block w-2.5 h-5 sm:h-6 bg-crimson ml-1 animate-blink" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        className="mt-6 max-w-xl text-steel-light text-sm sm:text-base leading-relaxed"
      >
        {profile.shortBio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projetos"
          className="group relative inline-flex items-center gap-2 px-7 py-3 bg-cyan text-void font-mono text-sm font-bold uppercase tracking-wider clip-corner-sm transition-transform hover:-translate-y-0.5"
        >
          <FolderGit2 size={16} />
          Ver Projetos
        </a>
        <button
          type="button"
          onClick={() => {
            window.location.href = profile.cvUrl;
          }}
          className="group relative inline-flex items-center gap-2 px-7 py-3 border border-cyan/40 text-offwhite font-mono text-sm font-bold uppercase tracking-wider clip-corner-sm transition-colors hover:border-cyan hover:text-cyan"
        >
          <Download size={16} />
          Download CV
        </button>
      </motion.div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel hover:text-cyan transition-colors"
        aria-label="Rolar para a próxima seção"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
