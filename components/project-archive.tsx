"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Globe2, Sparkles, Filter } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { projects } from "@/components/data";
import { ProjectCard } from "@/components/project-card";
import { SiteNav } from "@/components/site-nav";
import { cn } from "@/lib/utils";

const filterCategories = [
  "All",
  "Poster Design",
  "Editorial Visual",
  "Social Creative",
  "Merch Concept",
  "Typography",
  "Experimental",
];

export function ProjectArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          (activeCategory === "Typography" && (p.category === "Typography" || p.title.toLowerCase().includes("typography") || p.title.toLowerCase().includes("text")))
        );

  return (
    <>
      <SiteNav projectPage />
      <main className="deck-dark relative isolate min-h-screen text-cream">
        <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 md:px-12 lg:px-20 lg:pt-36">
          <div className="absolute inset-0 -z-20 bg-[url('/Assets/huji25.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080806] via-[#080806]/80 to-transparent" />
          
          <div className="mx-auto max-w-7xl">
            {/* Top Bar with Return Button & Status */}
            <div className="mb-8 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider text-cream/90">
              <Button asChild variant="outline" className="h-10 px-4 border-white/20 bg-white/10 text-xs sm:text-sm font-semibold tracking-wider text-cream hover:bg-lime hover:text-black hover:border-lime transition-all">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <span className="hidden items-center gap-2 md:flex text-zinc-300">
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
              {/* Clean non-overlapping subtitle */}
              <div className="mt-2 flex items-center gap-4 md:mt-3">
                <span className="h-px w-24 bg-lime" />
                <p className="signature text-4xl text-lime md:text-6xl">Archive</p>
              </div>

              {/* Editorial Two-Column Discipline Overview */}
              <div className="mt-10 grid gap-8 text-xs sm:text-sm font-medium text-cream md:grid-cols-2">
                <div className="border-l-2 border-lime pl-4 space-y-2">
                  <p className="flex items-center gap-2 text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Poster &amp; Editorial Design
                  </p>
                  <p className="flex items-center gap-2 text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Branding &amp; Visual Identity
                  </p>
                  <p className="flex items-center gap-2 text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    UI/UX &amp; Web Experiences
                  </p>
                  <p className="flex items-center gap-2 text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Merchandise &amp; Mockups
                  </p>
                  <p className="flex items-center gap-2 text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Creative Direction
                  </p>
                </div>
                <div className="self-end text-left md:text-right space-y-2 text-zinc-400">
                  <p className="text-zinc-400">Curated Design Collection</p>
                  <p className="text-white font-semibold">Selected Experiments &amp; Typography</p>
                  <p className="text-white font-semibold">Campaign Visuals &amp; Print Posters</p>
                  <p className="text-lime font-semibold">GLA University Graphic Designer</p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                An exhaustive archive of selected experiments, identity design campaigns, poster art,
                and digital interface systems.
              </p>

              {/* Interactive Category Filter Pills */}
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 mr-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <Filter className="h-3.5 w-3.5 text-lime" />
                  Filter by Category:
                </div>
                {filterCategories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all",
                        active
                          ? "bg-lime text-black font-semibold shadow-[0_0_15px_rgba(201,242,43,0.3)]"
                          : "border border-white/15 bg-white/5 text-zinc-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            {/* Semantic Section Heading */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Archive Gallery
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                  Showing {filteredProjects.length} of {projects.length} curated works
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard {...project} key={project.title} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
