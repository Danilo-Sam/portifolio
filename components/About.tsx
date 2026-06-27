"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="relative z-10 px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <SectionHeading index="01 / sobre" title="QUEM CODA ISSO" />

      <div className="mt-14 grid md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 bg-void-panel border border-void-line clip-corner"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-void-line">
            <span className="term-dot bg-crimson" />
            <span className="term-dot bg-amber" />
            <span className="term-dot bg-cyan" />
            <span className="ml-3 font-mono text-xs text-steel">
              bash — sobre.txt
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            {profile.bioTerminal.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p
                  key={i}
                  className={
                    line.startsWith(">")
                      ? "text-cyan mb-3"
                      : "text-steel-light mb-1"
                  }
                >
                  {line}
                </p>
              )
            )}
            <p className="text-steel-light">
              <span className="text-crimson">$</span>{" "}
              <span className="inline-block w-2 h-4 bg-cyan align-middle animate-blink" />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-void-panel border border-void-line p-5 clip-corner-sm"
            >
              <p className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan text-glow-cyan">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-steel">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
