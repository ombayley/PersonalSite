// src/components/sections/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm opacity-80">{p.tagline}</div>
                <div className="text-sm opacity-90">{p.description}</div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2 flex gap-3">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
