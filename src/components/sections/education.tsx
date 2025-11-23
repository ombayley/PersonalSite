// src/components/sections/EducationSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {DATA.education.map((study, i) => (
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
                  {study.program} · {study.school}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {study.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {study.location}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm opacity-90">{study.summary}</p>

            {study.file && (
              <div className="mt-4">
                <a href={study.file} download>
                  <Button variant="outline" className="rounded-2xl">
                    <Download className="w-4 h-4 mr-2" /> Download Thesis
                  </Button>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
