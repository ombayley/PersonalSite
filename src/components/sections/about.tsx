// src/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/Section";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-12"
      >
        {/* Photo */}
        <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center p-6 md:p-4">
          <img
            src="/docs/obayley_photo.jpeg"
            alt="Olly Bayley"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
          />
        </div>

        {/* About text */}
        <Card className="rounded-2xl md:col-span-10 lg:col-span-10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4" /> Currently based in {DATA.location}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm opacity-90">
            {DATA.about}
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
