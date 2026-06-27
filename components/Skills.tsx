"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Server, MonitorSmartphone, Database, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups, type SkillGroup } from "@/lib/data";

const icons: Record<SkillGroup["icon"], ReactNode> = {
  backend: <Server size={18} />,
  frontend: <MonitorSmartphone size={18} />,
  database: <Database size={18} />,
  tools: <Wrench size={18} />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <SectionHeading
        index="02 / skills"
        title="STACK TÉCNICA"
        subtitle="Tecnologias que uso no dia a dia para construir produtos completos — do banco de dados à interface final."
      />

      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gIdx * 0.08 }}
            className="bg-void-panel border border-void-line p-6 clip-corner"
          >
            <div className="flex items-center gap-3 mb-6 text-cyan">
              {icons[group.icon]}
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-offwhite">
                {group.category}
              </h3>
            </div>

            <div className="space-y-5">
              {group.skills.map((skill, sIdx) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-xs text-steel-light">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-cyan">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1.5 bg-void-line overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: sIdx * 0.06 }}
                      className="h-full bg-gradient-to-r from-cyan to-crimson"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
