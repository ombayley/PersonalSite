"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function Page() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.title = "Olly Bayley — Organic Chemist • Backend Developer";
  }, [dark]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative min-h-screen text-neutral-900 dark:text-neutral-100 scroll-smooth antialiased">
      {/* Fixed background layer */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-b
                 from-white to-neutral-100
                 dark:from-neutral-950 dark:to-neutral-950"
      />
      <div
        aria-hidden
        className="fixed -top-24 right-0 h-72 w-72 rounded-full blur-3xl opacity-20
                 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 -z-10"
      />

      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />

      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection year={year} />

      <footer className="py-10 text-center text-xs opacity-60">
        Built with React &amp; Tailwind · Smooth scroll, sticky nav, and tasteful
        motion.
      </footer>
    </div>
  );
}
