"use client";

import Link from "next/link";
import { ArrowLeft, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { projects } from "@/components/data";
import { ProjectCard } from "@/components/project-card";
import { SiteNav } from "@/components/site-nav";

export function ProjectArchive() {
  return (
    <>
      <SiteNav projectPage />
      <main className="deck-dark relative isolate min-h-screen text-cream">
        <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 md:px-12 lg:px-20 lg:pt-36">
          <div className="absolute inset-0 -z-20 bg-[url('/Assets/huji25.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080806] via-[#080806]/80 to-transparent" />
          
          <div className="mx-auto max-w-7xl">
            {/* Top Bar with Return Button & Status */}
            <div className="mb-8 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream/80">
              <Button asChild variant="outline" className="h-9 px-3 border-white/20 bg-white/5 text-xs text-cream hover:bg-white/10 hover:text-white">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-3.5 w-3.5" /> Back to Home
                </Link>
              </Button>
              <span className="hidden items-center gap-2 md:flex">
                <Globe2 className="h-4 w-4 text-lime" /> Visual Design Archive • Based in India
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="py-4"
            >
              <h1 className="display-title max-w-[950px] text-cream">
                Selected
                <br />
                Works
              </h1>
              <div className="-mt-3 flex items-center gap-4 md:-mt-8">
                <span className="h-px w-24 bg-lime" />
                <p className="signature text-5xl text-lime md:text-7xl">Archive</p>
              </div>

              {/* Editorial Two-Column Ticker */}
              <div className="mt-10 grid gap-8 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-cream md:grid-cols-2">
                <div className="border-l-2 border-lime pl-4 space-y-1">
                  <p>Poster &amp; Editorial Design</p>
                  <p>Branding &amp; Visual Identity</p>
                  <p>UI/UX &amp; Web Experiences</p>
                  <p>Merchandise &amp; Mockups</p>
                  <p>Creative Direction</p>
                </div>
                <div className="self-end text-left md:text-right space-y-1 text-zinc-400">
                  <p>Curated Archive</p>
                  <p className="text-white font-extrabold">Selected Experiments</p>
                  <p className="text-white font-extrabold">Campaign Visuals</p>
                  <p className="text-white font-extrabold">GLA University</p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                An exhaustive archive of selected experiments, identity design campaigns, poster art,
                and digital interface systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 lg:px-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
