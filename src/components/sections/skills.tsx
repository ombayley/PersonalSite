// src/components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {DATA.skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-3"
          >
            {s.icon}
            <span className="text-sm">{s.name}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
