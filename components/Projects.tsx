"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const statusColor: Record<string, string> = {
  "CURSO EBAC": "text-cyan border-cyan/40",
  "PROJETO PESSOAL": "text-amber border-amber/40",
};
const defaultStatusColor = "text-steel border-steel/40";

export default function Projects() {
  return (
    <section id="projetos" className="relative z-10 px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <SectionHeading
        index="03 / projetos"
        title="PROJETOS EM DESTAQUE"
        subtitle="Projetos práticos desenvolvidos durante a formação Full Stack Java na EBAC, com foco em front-end — a base sobre a qual venho construindo o conhecimento em back-end com Java e Spring Boot."
      />

      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group bg-void-panel border border-void-line clip-corner overflow-hidden flex flex-col"
          >
            <div className="relative h-36 border-b border-void-line bg-grid flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-crimson/10" />
              <Terminal
                size={40}
                className="text-cyan/40 group-hover:text-cyan transition-colors"
              />
              <span
                className={`absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wider px-2 py-1 border ${statusColor[project.status] ?? defaultStatusColor}`}
              >
                {project.status}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-mono text-lg text-offwhite font-bold">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-steel-light leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase px-2 py-1 bg-void border border-void-line text-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 font-mono text-xs uppercase tracking-wide">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-steel hover:text-cyan transition-colors"
                  >
                    <Github size={14} /> Código
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-steel hover:text-crimson transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
