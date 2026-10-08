"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, RotateCw, Play, Pause, Layers, Eye } from "lucide-react";

const ROTATION_FRAMES = [
  { angle: 0, label: "Front (0°)", tag: "0°", src: "/Assets/techwear_0.jpg" },
  { angle: 45, label: "Front-Right (45°)", tag: "45°", src: "/Assets/techwear_45.jpg" },
  { angle: 90, label: "Right Profile (90°)", tag: "90°", src: "/Assets/techwear_90.jpg" },
  { angle: 135, label: "Back-Right (135°)", tag: "135°", src: "/Assets/techwear_135.jpg" },
  { angle: 180, label: "Back (180°)", tag: "180°", src: "/Assets/techwear_180.jpg" },
  { angle: 225, label: "Back-Left (225°)", tag: "225°", src: "/Assets/techwear_225.jpg" },
  { angle: 270, label: "Left Profile (270°)", tag: "270°", src: "/Assets/techwear_270.jpg" },
  { angle: 315, label: "Front-Left (315°)", tag: "315°", src: "/Assets/techwear_315.jpg" },
];

export function AuraBeigeGraphic() {
  const [mode, setMode] = useState<"data" | "aura">("data");
  const [frameIndex, setFrameIndex] = useState<number>(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragStartXRef = useRef<number>(0);
  const startFrameRef = useRef<number>(0);

  // Auto-spin turntable timer
  useEffect(() => {
    if (!isAutoSpinning || isDragging) return;
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % ROTATION_FRAMES.length);
    }, 450);
    return () => clearInterval(interval);
  }, [isAutoSpinning, isDragging]);

  // Mouse & Touch Drag-to-Rotate handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    dragStartXRef.current = clientX;
    startFrameRef.current = frameIndex;
  };

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const deltaX = clientX - dragStartXRef.current;
      const pixelsPerFrame = 28; // drag sensitivity
      const frameDelta = Math.floor(deltaX / pixelsPerFrame);
      const totalFrames = ROTATION_FRAMES.length;
      const rawIndex = (startFrameRef.current + frameDelta) % totalFrames;
      const newIndex = (rawIndex + totalFrames) % totalFrames;
      setFrameIndex(newIndex);
    },
    [isDragging],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Global listeners while dragging
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX);
    const onMouseUp = () => handlePointerUp();
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => handlePointerUp();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const currentFrame = ROTATION_FRAMES[frameIndex];

  return (
    <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-6">
      {/* Prominent Mode Switcher & Technical Value Proposition Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-600 animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-700">
            Interactive 360° Visual Sandbox • High-Performance Web Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-stone-400 bg-white/90 p-1 shadow-md backdrop-blur">
          <button
            type="button"
            onClick={() => setMode("data")}
            className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase transition ${
              mode === "data"
                ? "bg-stone-900 text-amber-100 shadow"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Data Mode
          </button>
          <button
            type="button"
            onClick={() => setMode("aura")}
            className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase transition ${
              mode === "aura"
                ? "bg-stone-900 text-amber-100 shadow"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Aura Mode
          </button>
        </div>
      </div>

      {/* Main Framed Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-stone-800/80 bg-[#f4efe6] p-6 shadow-2xl sm:p-10 md:p-12"
      >
        {/* Paper Grain & Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d3cbbd_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/[0.03] via-transparent to-stone-900/[0.06]" />

        {/* Top Header Row with Clear Component-Level Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-wider text-stone-900">
          {/* Brand Mark with Star Cluster */}
          <div className="flex items-center gap-2">
            <div className="leading-tight">
              <span className="block font-black uppercase tracking-tight text-base sm:text-lg">
                {mode === "data" ? "Data" : "Aura"}
              </span>
              <span className="block -mt-1 text-xs uppercase font-bold text-stone-700">
                {mode === "data" ? "cloud" : "store"}
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-stone-900 text-xs font-bold ml-1">
              <span>✦</span>
              <span className="text-[0.65rem] -mt-1">✦</span>
              <span>✦</span>
            </div>
          </div>

          {/* Component-Level 360 Angle Controller (Replaced faux global nav) */}
          <div className="hidden items-center gap-2 rounded-xl border border-stone-400/80 bg-white/70 px-3 py-1.5 sm:flex text-stone-800">
            <Eye className="h-3.5 w-3.5 text-amber-700" />
            <span className="font-semibold text-xs text-stone-700">360° View Angle:</span>
            <div className="flex items-center gap-1 font-bold text-xs">
              {[
                { label: "Front", idx: 0 },
                { label: "Right", idx: 2 },
                { label: "Back", idx: 4 },
                { label: "Left", idx: 6 },
              ].map((pos) => (
                <button
                  key={pos.label}
                  type="button"
                  onClick={() => {
                    setIsAutoSpinning(false);
                    setFrameIndex(pos.idx);
                  }}
                  className={`rounded px-2 py-0.5 transition ${
                    frameIndex === pos.idx ? "bg-stone-900 text-amber-100" : "hover:bg-stone-200 text-stone-700"
                  }`}
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>

          {/* System Spec & Telemetry */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-700">
            <span>Canvas ID: SM-003.201</span>
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
          </div>
        </div>

        {/* ====================================================================
            MONUMENTAL SPLIT CENTERPIECE & CENTRAL 360° TECHWEAR TURNTABLE
            ==================================================================== */}
        <div className="relative z-10 mt-6 sm:mt-10 flex flex-col items-center justify-center">
          {/* Background Split Words */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between select-none pointer-events-none px-2 sm:px-6">
            <span className="font-sans font-black tracking-tighter text-stone-950 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] leading-none opacity-95">
              {mode === "data" ? "DATA" : "Aura"}
            </span>
            <span className="font-sans font-black tracking-tighter text-stone-950 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] leading-none text-right opacity-95">
              {mode === "data" ? "CLOUD" : "store"}
            </span>
          </div>

          {/* 360 Interactive Model Turntable Stage */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Interactive Model Display with Drag-to-Rotate */}
            <div
              onMouseDown={(e) => handlePointerDown(e.clientX)}
              onTouchStart={(e) => {
                if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX);
              }}
              className={`group relative select-none touch-pan-y ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              title="Click and drag horizontally to rotate 360°"
            >
              {/* Turntable Platform Shadow & Compass Base Ring */}
              <div className="pointer-events-none absolute -bottom-3 left-1/2 h-10 w-[220px] sm:w-[280px] md:w-[320px] -translate-x-1/2 rounded-[50%] bg-stone-900/10 blur-[8px]" />
              <div className="pointer-events-none absolute -bottom-1 left-1/2 h-7 w-[200px] sm:w-[260px] md:w-[300px] -translate-x-1/2 rounded-[50%] border border-stone-800/30 bg-stone-900/5">
                {/* Rotating tick mark on platform */}
                <div
                  className="absolute inset-0 rounded-[50%] transition-transform duration-200"
                  style={{ transform: `rotate(${currentFrame.angle}deg)` }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-amber-700" />
                </div>
              </div>

              {/* Image Stack for 0-latency instant 360 rotation */}
              <div className="relative h-[340px] w-[240px] sm:h-[440px] sm:w-[310px] md:h-[500px] md:w-[350px]">
                {ROTATION_FRAMES.map((frame, idx) => (
                  <div
                    key={frame.angle}
                    className={`absolute inset-0 transition-opacity duration-150 ${
                      idx === frameIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={frame.src}
                      alt={`360 Techwear Lookbook - ${frame.label}`}
                      fill
                      priority={idx === 0 || idx === 4}
                      loading="eager"
                      className="object-contain mix-blend-multiply drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] filter contrast-105"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Drag overlay badge visible on hover / drag */}
              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-stone-800/40 bg-white/90 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-stone-900 opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100">
                {isDragging ? `Rotating ${currentFrame.tag}` : "Drag horizontally to rotate"}
              </div>
            </div>

            {/* 360 Control Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
              {/* Play / Pause Auto-spin Button */}
              <button
                type="button"
                onClick={() => setIsAutoSpinning((v) => !v)}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 transition ${
                  isAutoSpinning
                    ? "border-amber-700 bg-amber-700 text-white shadow-sm"
                    : "border-stone-800/60 bg-white/90 text-stone-900 hover:bg-stone-900 hover:text-white"
                }`}
                title={isAutoSpinning ? "Pause auto-rotation" : "Auto-spin 360°"}
              >
                {isAutoSpinning ? (
                  <>
                    <Pause className="h-3.5 w-3.5" />
                    <span className="font-bold tracking-wider">Pause</span>
                  </>
                ) : (
                  <>
                    <RotateCw className="h-3.5 w-3.5" />
                    <span className="font-bold tracking-wider">360° Spin</span>
                  </>
                )}
              </button>

              {/* Cardinal Angle Quick Jumps */}
              <div className="flex items-center gap-1 rounded-full border border-stone-800/30 bg-white/70 p-1 backdrop-blur">
                {[
                  { index: 0, label: "0° Front" },
                  { index: 2, label: "90°" },
                  { index: 4, label: "180° Back" },
                  { index: 6, label: "270°" },
                ].map((item) => (
                  <button
                    key={item.index}
                    type="button"
                    onClick={() => {
                      setIsAutoSpinning(false);
                      setFrameIndex(item.index);
                    }}
                    className={`rounded-full px-3 py-1 font-bold transition text-xs ${
                      frameIndex === item.index
                        ? "bg-stone-900 text-amber-100"
                        : "text-stone-700 hover:text-stone-950"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Angle Tag Indicator */}
              <div className="flex items-center gap-1.5 rounded-full border border-stone-800/40 bg-stone-900 px-3 py-1.5 text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-bold">{currentFrame.angle}°</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            BOTTOM EDITORIAL KICKER & FLOATING PREVIEW CARD
            ==================================================================== */}
        <div className="relative z-10 mt-6 flex flex-col justify-between gap-8 pt-4 sm:flex-row sm:items-end">
          {/* Bottom-Left Editorial Manifesto Block */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded border border-stone-900 px-2 py-0.5 font-mono text-xs font-bold text-stone-900">
                プラ
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-600">
                {mode === "data" ? "RDBMS • ACID Certified" : "Series 01 // Archive"}
              </span>
            </div>

            {/* Headline */}
            <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-stone-950 leading-tight">
              {mode === "data"
                ? "Databases without excess. Only scale."
                : "Clothes without excess. Only style."}
            </h3>

            {/* Technical Manifesto Text */}
            <p className="mt-2 text-xs sm:text-sm font-mono leading-relaxed text-stone-700">
              {mode === "data"
                ? "Modern relational schemas, natural sharding, and structured query design. For systems requiring ACID resilience and verified throughput."
                : "Modern silhouettes, natural fabrics, and honest design. For those who choose simplicity and quality."}
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
              className="inline-flex items-center gap-1.5 rounded-full border border-stone-900 bg-stone-900 px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-amber-100 transition hover:bg-stone-800 hover:text-white"
            >
              <span>{mode === "data" ? "Explore Architecture" : "View Collection"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
