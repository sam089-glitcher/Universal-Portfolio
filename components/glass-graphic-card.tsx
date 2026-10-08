"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Sparkles, Terminal, Code2, CheckCircle2 } from "lucide-react";
import { contactDetails } from "@/components/development-data";

export function GlassGraphicCard() {
  const [viewMode, setViewMode] = useState<"graphic" | "terminal">("graphic");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    { title: "Developer.", sub: "Full Stack & Cloud Systems", tag: "Java • Python • Next.js" },
    { title: "AI Engineer.", sub: "Gemini LLMs & ML Models", tag: "Vertex AI • RAG • PyTorch" },
    { title: "Architect.", sub: "Scalable APIs & Data Pipelines", tag: "REST • MySQL • MongoDB" },
  ];

  // Mouse tilt effect state
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[480px] flex-col items-center">
      {/* Prominent Switcher Toggle Pill */}
      <div className="mb-5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 p-1.5 backdrop-blur-xl shadow-xl">
        <button
          type="button"
          onClick={() => setViewMode("graphic")}
          className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
            viewMode === "graphic"
              ? "bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-lg shadow-rose-600/40"
              : "text-zinc-300 hover:text-white"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          Glass Graphic
        </button>
        <button
          type="button"
          onClick={() => setViewMode("terminal")}
          className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
            viewMode === "terminal"
              ? "bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-lg shadow-rose-600/40"
              : "text-zinc-300 hover:text-white"
          }`}
        >
          <Terminal className="h-4 w-4" />
          Terminal Spec
        </button>
      </div>

      {/* Main Showcase Stage with 3D Spheres from Reference Graphic */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] p-4 sm:h-[560px]"
        style={{ perspective: 1000 }}
      >
        {/* Sphere 1: Top-Right Deep Crimson Shaded Sphere */}
        <motion.div
          animate={{
            x: isHovered ? mousePos.x * -20 : 0,
            y: isHovered ? mousePos.y * -20 : [0, -6, 0],
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="sphere-crimson-dark pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] opacity-95 sm:-right-12 sm:-top-12 sm:h-[360px] sm:w-[360px]"
        />

        {/* Sphere 2: Bottom-Center Vibrant Glowing Crimson 3D Sphere */}
        <motion.div
          animate={{
            x: isHovered ? mousePos.x * 25 : 0,
            y: isHovered ? mousePos.y * 25 : [0, 8, 0],
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="sphere-crimson-bright pointer-events-none absolute -bottom-24 -left-12 h-[380px] w-[380px] opacity-95 sm:-bottom-28 sm:-left-8 sm:h-[440px] sm:w-[440px]"
        />

        {/* Ambient Volumetric Red Glow Behind */}
        <div className="sphere-crimson-ambient pointer-events-none absolute inset-0 blur-[60px] opacity-60" />

        {/* Dynamic Card Display */}
        <AnimatePresence mode="wait">
          {viewMode === "graphic" ? (
            <motion.div
              key="graphic-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: isHovered ? mousePos.y * -14 : 0,
                rotateY: isHovered ? mousePos.x * 14 : 0,
              }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="glass-morphic-card relative z-10 flex h-[460px] w-full max-w-[370px] flex-col justify-between rounded-[2.5rem] p-7 text-white sm:h-[490px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Top Row: Interactive Status Badge & Live Badge */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/70 px-3 py-1 text-xs font-bold text-rose-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                  </span>
                  ACTIVE DEV
                </span>
                <span className="font-mono text-xs text-white/70">SPEC 2026</span>
              </div>

              {/* Center Content: Role Carousel */}
              <div className="my-auto py-4">
                <p className="font-mono text-xs uppercase tracking-widest text-rose-300">
                  Engineering Track
                </p>

                {/* Role Titles with Quick Click to Cycle */}
                <div
                  onClick={() => setRoleIndex((prev) => (prev + 1) % roles.length)}
                  className="group/role mt-2 cursor-pointer select-none"
                  title="Click to toggle specialization focus"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={roles[roleIndex].title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-4xl font-black uppercase tracking-tight text-white drop-shadow-md transition group-hover/role:text-rose-200 sm:text-5xl">
                        {roles[roleIndex].title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-zinc-300">
                        {roles[roleIndex].sub}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Micro Pill for Current Domain */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  <Code2 className="h-3.5 w-3.5 text-rose-400" />
                  <span>{roles[roleIndex].tag}</span>
                </div>
              </div>

              {/* Bottom Row: Handle & Social Tag */}
              <div className="flex items-center justify-between border-t border-white/15 pt-4 text-xs">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 text-xs font-bold text-white/90 transition hover:text-white"
                >
                  <Github className="h-3.5 w-3.5 text-rose-400 transition group-hover:scale-110" />
                  <span>@SaumitraMisra</span>
                </a>

                <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                  CSE • 2027
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="terminal-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="glass-morphic-card relative z-10 flex h-[460px] w-full max-w-[370px] flex-col justify-between rounded-[2.5rem] p-6 text-white sm:h-[490px]"
            >
              {/* Terminal Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-zinc-300">
                      saumitra@workspace:~
                    </span>
                  </div>
                  <span className="rounded-full bg-rose-950/80 border border-rose-500/30 px-2.5 py-0.5 font-mono text-xs font-bold text-rose-300">
                    AI + DEV
                  </span>
                </div>

                {/* Code Body */}
                <div className="mt-3 space-y-2 font-mono text-xs leading-relaxed text-zinc-200">
                  <p className="text-zinc-400">// Verified Architecture Stack</p>
                  <p>
                    <span className="text-rose-400">const</span> engineer = {"{"}
                  </p>
                  <div className="pl-3.5 space-y-1">
                    <p>
                      name: <span className="text-emerald-300">&quot;Saumitra Misra&quot;</span>,
                    </p>
                    <p>
                      degree: <span className="text-emerald-300">&quot;B.Tech CSE (2027)&quot;</span>,
                    </p>
                    <p>
                      focus: [<span className="text-amber-300">&quot;Full Stack&quot;</span>, <span className="text-amber-300">&quot;Vertex AI&quot;</span>],
                    </p>
                    <p>
                      languages: [<span className="text-rose-300">&quot;Java&quot;</span>, <span className="text-rose-300">&quot;Python&quot;</span>, <span className="text-rose-300">&quot;TS&quot;</span>],
                    </p>
                    <p>
                      data: [<span className="text-rose-300">&quot;MySQL&quot;</span>, <span className="text-rose-300">&quot;MongoDB&quot;</span>],
                    </p>
                    <p>
                      badges: <span className="text-cyan-300">8+ Cloud Badges</span>,
                    </p>
                    <p>
                      status: <span className="text-emerald-400">&quot;Ready to Build&quot;</span>
                    </p>
                  </div>
                  <p>{"};"}</p>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="border-t border-white/10 pt-3">
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5" /> compiled: true
                  </span>
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-rose-300 hover:underline"
                  >
                    sam089-glitcher
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-3 text-center text-xs text-zinc-400">
        Interactive 3D Glassmorphism Graphic &bull; Hover or toggle to explore
      </p>
    </div>
  );
}
