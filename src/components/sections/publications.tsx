// src/components/sections/PublicationsSection.tsx
"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/site-data";
import { fade } from "@/lib/animations";

type Publication = {
  authors: string[];
  title: string;
  year: string;
  journal: string;
  doi: string;
  volume?: string;
  pages?: string;
  image?: string; // TOC / graphical abstract, e.g. "/docs/graphical_abstracts/eRoboChem.png"
};

// Author names containing this are shown in bold
const HIGHLIGHT = "Bayley";

function doiUrl(doi: string) {
  return doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
}

function LinkIf({ href, className, children }: { href?: string; className?: string; children: ReactNode }) {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

function citation(p: Publication) {
  return [`${p.journal} ${p.year}`, p.volume, p.pages].filter(Boolean).join(", ") + ".";
}

function separator(authors: string[], i: number) {
  if (i === authors.length - 1) return "";
  // "A, B and C", but "A, …, C" when authors are omitted before the last
  return i === authors.length - 2 && authors[i] !== "…" ? " and " : ", ";
}

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm opacity-70">
      {authors.map((a, i) => (
        <span key={i}>
          {a.includes(HIGHLIGHT) ? <strong className="font-semibold opacity-100">{a}</strong> : a}
          {separator(authors, i)}
        </span>
      ))}
    </p>
  );
}

export function PublicationsSection() {
  const pubs: Publication[] = DATA.publications.filter((p) => p.title);
  const hasEqualContribution = pubs.some((p) => p.authors.some((a) => a.startsWith("*")));

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-10">
        {pubs.map((p, i) => (
          <motion.article
            key={i}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {/* Citation bar (only a link when there's a DOI) */}
            <LinkIf
              href={p.doi && doiUrl(p.doi)}
              className="group flex items-stretch overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/60"
            >
              <span className="flex items-center justify-center w-12 shrink-0 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white">
                <FileText className="w-5 h-5" />
              </span>
              <span className="flex flex-1 items-center justify-between gap-3 px-4 py-3 text-sm font-medium">
                <span className={p.doi ? "group-hover:underline" : "italic opacity-80"}>{citation(p)}</span>
                {p.doi && <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
              </span>
            </LinkIf>

            {/* Title/authors + graphical abstract */}
            <div className={`grid gap-3 ${p.image ? "md:grid-cols-2" : ""}`}>
              <Card className="rounded-2xl">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-base md:text-lg font-semibold leading-snug">
                    <LinkIf href={p.doi && doiUrl(p.doi)} className="hover:underline">
                      {p.title}
                    </LinkIf>
                  </h3>
                  <Authors authors={p.authors} />
                </CardContent>
              </Card>

              {/* Graphical abstract slot: click to open full size */}
              {p.image && (
                <Card className="rounded-2xl overflow-hidden">
                  <a
                    href={p.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center h-full min-h-40 p-4 bg-white"
                  >
                    <img
                      src={p.image}
                      alt={`Graphical abstract: ${p.title}`}
                      loading="lazy"
                      className="max-h-56 max-w-full w-auto object-contain transition-transform hover:scale-[1.02]"
                    />
                  </a>
                </Card>
              )}
            </div>
          </motion.article>
        ))}
      </div>
      {hasEqualContribution && <p className="mt-6 text-xs italic opacity-60">* Equal contribution.</p>}
    </Section>
  );
}
