// src/components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

export function SkillsSection() {
  const { languages, groups } = DATA.skills;

  return (
    <Section id="skills" title="Skills">
      {/* Languages */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        {languages.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-3"
          >
            {l.icon}
            <div className="leading-tight">
              <div className="text-sm font-medium">{l.name}</div>
              <div className="text-xs opacity-60">{l.level}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Skill groups */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <motion.div
            key={g.name}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white [&>svg]:w-4 [&>svg]:h-4">
                    {g.icon}
                  </span>
                  {g.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
                {g.note && <p className="text-xs opacity-60">{g.note}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
