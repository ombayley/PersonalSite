// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/site-data";

export function HeroSection() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs mb-6">
            <Badge variant="secondary" className="rounded-full">
              Open to interesting roles
            </Badge>
            <span className="opacity-70">{DATA.location}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              {DATA.title}
            </span>
            <br />
            {DATA.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg opacity-80">
            {DATA.blurb}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${DATA.email}`}>
              <Button className="rounded-2xl">
                <Mail className="w-4 h-4 mr-2" /> Email me
              </Button>
            </a>
            <a href={DATA.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-2xl">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
            </a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-2xl">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Button>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-4">
            {DATA.highlights.map((h, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-2xl md:text-3xl font-semibold">
                    {h.value}
                  </div>
                  <div className="text-xs opacity-70 uppercase tracking-wide">
                    {h.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
