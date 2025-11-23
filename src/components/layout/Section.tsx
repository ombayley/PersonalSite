// src/components/layout/Section.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
