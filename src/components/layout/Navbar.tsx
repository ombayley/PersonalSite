// src/components/layout/Navbar.tsx
"use client";

import { Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/site-data";

type NavbarProps = {
  dark: boolean;
  toggleDark: () => void;
};

export function Navbar({ dark, toggleDark }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {DATA.name}
        </a>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">
            About
          </a>
          <a href="#education" className="hover:opacity-80">
            Education
          </a>
          <a href="#experience" className="hover:opacity-80">
            Experience
          </a>
          <a href="#projects" className="hover:opacity-80">
            Projects
          </a>
          <a href="#skills" className="hover:opacity-80">
            Skills
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleDark}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a href={DATA.links.resume} className="hidden sm:inline-flex">
            <Button size="sm" className="rounded-2xl">
              <Download className="w-4 h-4 mr-2" /> Download CV
            </Button>
          </a>
        </div>
      </nav>
    </div>
  );
}
