// src/components/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {DATA.experience.map((job, i) => (
          <motion.div
            key={i}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4" />
                <div className="font-medium">
                  {job.role} · {job.company}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {job.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm opacity-90">{job.summary}</p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
              {job.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2"
                >
                  <ChevronRight className="w-4 h-4 opacity-60 mt-1" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
