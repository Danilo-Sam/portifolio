"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative z-10 px-6 sm:px-10 py-28 max-w-6xl mx-auto"
    >
      <SectionHeading
        index="04 / experiência"
        title="LINHA DO TEMPO"
        subtitle="Trajetória profissional em ordem cronológica."
      />

      <div className="mt-16 relative">
        <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-void-line" />

        <div className="space-y-12">
          {experience.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative sm:flex ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <span className="absolute left-0 sm:left-1/2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan border-4 border-void z-10" />

                <div
                  className={`pl-8 sm:pl-0 sm:w-[46%] ${
                    isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                  }`}
                >
                  <div className="bg-void-panel border border-void-line p-6 clip-corner-sm">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-cyan border border-cyan/30 px-2 py-1">
                      <Briefcase size={12} />
                      {item.period}
                    </span>
                    <h3 className="mt-4 font-mono font-bold text-lg text-offwhite">
                      {item.role}
                    </h3>
                    <p className="text-sm text-crimson font-mono">{item.company}</p>
                    <p className="mt-3 text-sm text-steel-light leading-relaxed">
                      {item.description}
                    </p>
                    <ul
                      className={`mt-4 space-y-1.5 ${
                        isLeft ? "sm:text-right" : ""
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-steel font-mono leading-relaxed"
                        >
                          <span className="text-cyan">▸ </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
