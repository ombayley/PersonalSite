// src/components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

type ContactSectionProps = {
  year: number;
};

export function ContactSection({ year }: ContactSectionProps) {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium">Let&apos;s talk</h3>
            <p className="mt-2 text-sm opacity-80">
              Have a role, project, or idea? I&apos;m happy to chat.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${DATA.email}`}>
                <Button className="rounded-2xl">
                  <Mail className="w-4 h-4 mr-2" /> {DATA.email}
                </Button>
              </a>
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-2xl">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href={DATA.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-2xl">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 opacity-80">
              <MapPin className="w-4 h-4" /> {DATA.location}
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Calendar className="w-4 h-4" /> © {year} {DATA.name}
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Download className="w-4 h-4" />
              <a
                className="hover:underline"
                href={DATA.links.resume}
              >
                Download full CV
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
