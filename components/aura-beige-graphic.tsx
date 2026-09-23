"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";

export function AuraBeigeGraphic() {
  const [mode, setMode] = useState<"aura" | "data">("aura");

  return (
    <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-6">
      {/* Mode Switcher Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-stone-600">
            Editorial Lookbook &bull; Beige Canvas
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-stone-400/80 bg-white/70 p-1 shadow-sm backdrop-blur">
          <button
            onClick={() => setMode("aura")}
            className={`rounded-full px-3.5 py-1 font-mono text-[0.68rem] font-bold uppercase transition ${
              mode === "aura"
                ? "bg-stone-900 text-amber-100 shadow"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Aura Mode
          </button>
          <button
            onClick={() => setMode("data")}
            className={`rounded-full px-3.5 py-1 font-mono text-[0.68rem] font-bold uppercase transition ${
              mode === "data"
                ? "bg-stone-900 text-amber-100 shadow"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Data Mode
          </button>
        </div>
      </div>

      {/* Main Framed Canvas (Exact Replica of User Reference Graphic) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[3rem] border border-stone-800/80 bg-[#f4efe6] p-6 shadow-2xl sm:p-10 md:p-12"
      >
        {/* Paper Grain & Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d3cbbd_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/[0.03] via-transparent to-stone-900/[0.06]" />

        {/* Top Header Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[0.72rem] tracking-wider text-stone-900">
          {/* Brand Mark with Star Cluster */}
          <div className="flex items-center gap-2">
            <div className="leading-tight">
              <span className="block font-black uppercase tracking-tight text-base sm:text-lg">
                {mode === "aura" ? "Aura" : "Data"}
              </span>
              <span className="block -mt-1 text-[0.68rem] uppercase font-bold text-stone-700">
                {mode === "aura" ? "store" : "cloud"}
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-stone-900 text-[0.7rem] font-bold ml-1">
              <span>✦</span>
              <span className="text-[0.55rem] -mt-1">✦</span>
              <span>✦</span>
            </div>
          </div>

          {/* Center Lowercase Spaced Tech Menu */}
          <nav className="hidden items-center gap-7 sm:flex text-stone-700 font-medium lowercase tracking-widest text-[0.75rem]">
            <a href="#sql-showcase" className="hover:text-black transition hover:underline underline-offset-4">
              main
            </a>
            <a href="#sql-showcase" className="hover:text-black transition hover:underline underline-offset-4">
              queries
            </a>
            <a href="#cloud-architecture" className="hover:text-black transition hover:underline underline-offset-4">
              custom
            </a>
            <a href="#database-projects" className="hover:text-black transition hover:underline underline-offset-4">
              about
            </a>
            <a href="#contact" className="hover:text-black transition hover:underline underline-offset-4">
              contact
            </a>
          </nav>

          {/* Account / System ID */}
          <div className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-wider text-stone-700">
            <span>account id - 003.201</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          </div>
        </div>

        {/* ====================================================================
            MONUMENTAL SPLIT CENTERPIECE & CENTRAL TECHWEAR FIGURE
            ==================================================================== */}
        <div className="relative z-10 mt-6 sm:mt-10 grid min-h-[380px] sm:min-h-[460px] md:min-h-[500px] items-center">
          {/* Background Split Words ("Aura store" or "Data cloud") */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between select-none pointer-events-none px-2 sm:px-6">
            <span className="font-sans font-black tracking-tighter text-stone-950 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] leading-none opacity-95">
              {mode === "aura" ? "Aura" : "DATA"}
            </span>
            <span className="font-sans font-black tracking-tighter text-stone-950 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] leading-none text-right opacity-95">
              {mode === "aura" ? "store" : "CLOUD"}
            </span>
          </div>

          {/* Central Full-Body Techwear Figure */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative z-10 mx-auto flex items-center justify-center py-2"
          >
            <div className="relative h-[340px] w-[240px] sm:h-[440px] sm:w-[310px] md:h-[500px] md:w-[350px]">
              <Image
                src="/Assets/aura_techwear_hero.jpg"
                alt="Editorial Techwear Lookbook"
                fill
                priority
                className="object-contain mix-blend-multiply drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] filter contrast-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ====================================================================
            BOTTOM EDITORIAL KICKER & FLOATING PREVIEW CARD
            ==================================================================== */}
        <div className="relative z-10 mt-6 flex flex-col justify-between gap-8 pt-4 sm:flex-row sm:items-end">
          {/* Bottom-Left Editorial Manifesto Block */}
          <div className="max-w-md">
            {/* Japanese Packaging Glyph */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded border border-stone-900 px-2 py-0.5 font-mono text-[0.72rem] font-bold text-stone-900">
                プラ
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-stone-600">
                {mode === "aura" ? "series 01 // archive" : "rdbms // acid certified"}
              </span>
            </div>

            {/* Headline */}
            <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-stone-950 leading-tight">
              {mode === "aura"
                ? "Clothes without excess. Only style."
                : "Databases without excess. Only scale."}
            </h3>

            {/* Technical Manifesto Text in Lowercase Spaced Font */}
            <p className="mt-2 text-xs sm:text-[0.78rem] font-mono leading-relaxed text-stone-700">
              {mode === "aura"
                ? "Modern silhouettes, natural fabrics, and honest design. For those who choose simplicity and quality."
                : "Modern relational schemas, natural sharding, and honest query design. For those who choose simplicity, ACID resilience, and verified throughput."}
            </p>
          </div>

          {/* Bottom-Right Floating Product / Architecture Preview Card */}
          <div className="flex flex-col items-start sm:items-end gap-3 self-end">
            <div className="group relative w-36 sm:w-44 rounded-2xl border border-stone-800/90 bg-[#ede7dc] p-2.5 shadow-xl transition-transform hover:-translate-y-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-950 border border-stone-800">
                <Image
                  src="/Assets/aura_jacket_card.jpg"
                  alt="2025 Collection Puffer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 flex items-center justify-center">
                <span className="font-mono text-xs font-black tracking-widest text-stone-900">
                  2025
                </span>
              </div>
            </div>

            {/* Pill CTA Button */}
            <a
              href="#sql-showcase"
              className="inline-flex items-center gap-1.5 rounded-full border border-stone-900 bg-transparent px-5 py-2 font-mono text-xs font-bold lowercase tracking-wider text-stone-950 transition hover:bg-stone-950 hover:text-amber-100"
            >
              <span>{mode === "aura" ? "new collection" : "explore architecture"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
