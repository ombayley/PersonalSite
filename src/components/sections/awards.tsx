// src/components/sections/AwardsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, GraduationCap, Star, Mic } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

const ICONS = {
  award: Trophy,
  competition: Medal,
  scholarship: GraduationCap,
  honour: Star,
} as const;

export function AwardsSection() {
  return (
    <Section id="awards" title="Awards & Honours">
      <div className="grid md:grid-cols-2 gap-3">
        {DATA.awards.map((a, i) => {
          const Icon = ICONS[a.kind as keyof typeof ICONS] ?? Trophy;
          return (
            <motion.div
              key={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-3"
            >
              <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white">
                <Icon className="w-4 h-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">{a.title}</div>
                <div className="text-xs opacity-70">{a.event}</div>
              </div>
              <span className="text-xs tabular-nums opacity-60">{a.year}</span>
            </motion.div>
          );
        })}
      </div>

      {DATA.invitedTalks.length > 0 && (
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
        >
          <span className="inline-flex items-center gap-2 font-medium">
            <Mic className="w-4 h-4" /> Invited talks
          </span>
          <span className="opacity-70">{DATA.invitedTalks.join(" · ")}</span>
        </motion.div>
      )}
    </Section>
  );
}
