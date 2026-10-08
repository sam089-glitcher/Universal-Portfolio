"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { projects, stats } from "@/components/data";
import { SiteNav } from "@/components/site-nav";

// Highlight set showcasing 1 standout piece from each category (Issue 1)
const highlightProjects = [
  projects[0], // Poster Design: The Door To Heaven
  projects[1], // Editorial Visual: GOD
  projects[2], // Social Creative: All Good Thing
  projects[3], // Apparel & Merch: T-shirt Mockup
  projects[9], // Typography & Art: Blith Typography
];

// Dedicated category subsets (Zero cross-section card duplication)
const posterProjects = [projects[0], projects[4], projects[7], projects[8]];
const tShirtProjects = [projects[3], projects[9]];
const socialProjects = [projects[2], projects[1], projects[5], projects[11]];
const typographyProjects = [projects[9], projects[10], projects[6], projects[5]];

function PageNumber({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className={dark ? "page-number text-lime" : "page-number text-black"}>
      {children}
    </p>
  );
}

function WorkThumb({ project, tall = false }: { project: typeof projects[number]; tall?: boolean }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      className={tall ? "work-thumb h-[20rem] rounded-xl overflow-hidden" : "work-thumb h-[18rem] rounded-xl overflow-hidden"}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 20vw, 50vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="text-xs font-semibold">{project.title}</span>
    </Link>
  );
}

export function PortfolioSite() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <SiteNav />
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 bg-lime"
        style={{ width: progressWidth }}
      />
      <main className="bg-paper text-ink">
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section id="home" className="deck-page deck-dark isolate overflow-hidden">
          <div className="noise absolute inset-0 opacity-25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_36%,rgba(203,244,39,0.2),transparent_20rem)]" />
          <div className="relative z-10 grid min-h-screen gap-8 px-8 py-8 pt-24 md:px-12 md:py-12 md:pt-28 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-zinc-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  Visual &amp; Graphic Designer
                </span>
                <span className="hidden items-center gap-2 md:flex text-zinc-300">
                  <Globe2 className="h-4 w-4 text-lime" /> Based in India
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="py-10"
              >
                <h1 className="display-title max-w-[900px] text-white">
                  Saumitra
                  <br />
                  Misra
                </h1>
                <div className="mt-2 flex items-center gap-4 md:mt-4">
                  <span className="h-px w-24 bg-lime" />
                  <p className="signature text-4xl text-lime">Portfolio</p>
                </div>
              </motion.div>

              <div className="grid gap-8 text-xs font-semibold tracking-wider text-white md:grid-cols-2">
                <div className="border-l-2 border-lime pl-4 space-y-1.5 text-zinc-300">
                  <p className="text-white font-bold">Poster &amp; Editorial Design</p>
                  <p>Branding &amp; Visual Identity</p>
                  <p>UI/UX &amp; Frontend Design</p>
                  <p>Social Media Creatives</p>
                  <p>Creative Direction</p>
                </div>
                <div className="self-end text-left md:text-right space-y-1 text-zinc-300">
                  <p className="text-zinc-400">Available For</p>
                  <p className="text-white font-bold">Freelance Projects</p>
                  <p className="text-white font-bold">Collaborations</p>
                  <p className="text-lime font-bold">Design Opportunities</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative min-h-[520px] lg:min-h-0"
            >
              <div className="absolute bottom-16 right-0 h-[76%] w-[70%] bg-lime" />
              <Image
                src="/Assets/pfp2_circle.png"
                alt="Saumitra Misra"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              />
            </motion.div>
          </div>
        </section>

        {/* ====================================================================
            ABOUT ME SECTION (Rebalanced & Prominent Stat Cards - Issue 7)
            ==================================================================== */}
        <section id="about" className="deck-page bg-paper">
          <div className="mx-auto grid min-h-screen max-w-7xl gap-8 p-8 md:gap-12 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
                <PageNumber>01</PageNumber>
                <p className="section-kicker text-black">Background &amp; Philosophy</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="display-title text-black">
                    About
                    <br />
                    Me
                  </h2>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="h-px w-16 bg-lime" />
                    <p className="signature text-4xl text-lime">Hello!</p>
                  </div>
                </div>

                <div className="max-w-xl space-y-3 text-sm font-medium leading-relaxed text-neutral-700">
                  <p>
                    I&apos;m Saumitra Misra, a B.Tech CSE student at GLA University
                    with a dedicated focus on visual communications and user experience design.
                    I craft high-contrast, memorable visuals that convey brand narrative with precision.
                  </p>
                  <p>
                    From promotional poster campaigns and social identity systems to Figma-based
                    interface prototypes, I blend creative intuition with structured engineering principles.
                  </p>
                </div>

                {/* Stat Cards - Prominent, anchored under body paragraph (Issue 7) */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-neutral-300 bg-white/90 p-4 shadow-sm transition hover:border-black"
                    >
                      <p className="text-2xl font-black text-black">{s.value}</p>
                      <p className="mt-1 text-xs font-semibold leading-tight text-neutral-500">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Canva Specialist", "Figma Intermediate", "Poster Art", "UI Design", "Editorial"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Editorial Framing for Photo */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[480px] w-full max-w-[420px] rounded-3xl border-2 border-black bg-neutral-900 p-3 shadow-2xl overflow-hidden sm:h-[520px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src="/Assets/mypic.jpg"
                  alt="Saumitra Misra"
                  fill
                  className="object-cover grayscale contrast-125 rounded-2xl"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <p className="signature text-4xl text-lime">Saumitra Misra</p>
                  <p className="text-xs font-semibold tracking-wider text-zinc-300 mt-1">
                    Designer • Creator • GLA University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-black bg-black p-4 text-xs font-semibold tracking-wider text-white">
            <span>Designing ideas into impact.</span>
            <span className="text-center">Scroll for selected works</span>
            <span className="text-right">Open to collaboration</span>
          </div>
        </section>

        {/* ====================================================================
            WORK OVERVIEW SECTION (1 Highlight per Discipline - Issue 1)
            ==================================================================== */}
        <section id="work" className="deck-page deck-dark">
          <div className="noise absolute inset-0 opacity-20" />
          <div className="relative z-10 flex min-h-screen flex-col justify-between p-8 md:p-12">
            <div className="flex justify-between">
              <PageNumber dark>02</PageNumber>
              <p className="section-kicker text-white">Work Overview</p>
            </div>
            <div>
              <h2 className="display-title text-white">
                Selected
                <br />
                <span className="text-lime">Work</span>
              </h2>
              <div className="mt-8 grid gap-4 border-b border-lime/30 pb-5 text-xs font-semibold tracking-wider text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { num: "01", name: "Poster Design" },
                  { num: "02", name: "Editorial Visual" },
                  { num: "03", name: "Social Creative" },
                  { num: "04", name: "Apparel & Merch" },
                  { num: "05", name: "Typography & Art" },
                ].map((item) => (
                  <div key={item.num} className="border-l border-lime/40 pl-3">
                    <p className="mb-0.5 text-base font-bold text-lime">{item.num}</p>
                    <p className="text-zinc-300">{item.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {highlightProjects.map((project) => (
                  <WorkThumb key={`highlight-${project.title}`} project={project} />
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs font-semibold tracking-wider text-zinc-400">
              <span>Creative work • Real impact</span>
              <span>Design that connects</span>
            </div>
          </div>
        </section>

        {/* ====================================================================
            POSTER DESIGNS SECTION (Dedicated Posters Only - Zero Duplicate)
            ==================================================================== */}
        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.28fr]">
            <div>
              <div className="mb-12 flex justify-between">
                <PageNumber dark>03</PageNumber>
                <p className="section-kicker text-white">
                  Work Samples • Poster Series
                </p>
              </div>
              <h2 className="display-title text-white">
                Poster
                <br />
                <span className="text-lime">Designs</span>
              </h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {posterProjects.map((project) => (
                  <WorkThumb key={`poster-${project.title}`} project={project} tall />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 text-sm font-semibold leading-relaxed text-zinc-300">
              <Globe2 className="h-9 w-9 text-lime" />
              <p>Bold, high-contrast visuals crafted to grab attention and communicate core ideas powerfully.</p>
              <div className="mt-6 text-4xl text-lime">+</div>
              <p className="mt-auto text-xs font-semibold tracking-wider text-zinc-400">Design that connects</p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            T-SHIRT MOCKUPS SECTION
            ==================================================================== */}
        <section className="deck-page bg-paper">
          <div className="grid min-h-screen items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.44fr_0.56fr]">
            <div>
              <PageNumber>04</PageNumber>
              <h2 className="display-title mt-12 text-black">
                T-shirt
                <br />
                <span className="text-lime">Mockups</span>
              </h2>
              <p className="mt-8 max-w-xs text-sm font-semibold leading-relaxed text-neutral-700">
                Streetwear inspired designs with bold typography and custom framing.
                Made to stand out.
              </p>
              <p className="mt-12 text-xs font-semibold tracking-wider text-neutral-500">Wear your personality</p>
            </div>
            <div>
              <p className="mb-6 text-right text-xs font-semibold tracking-wider text-neutral-500">
                Work Samples • Apparel Concepts
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {tShirtProjects.map((project) => (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="relative h-[26rem] overflow-hidden rounded-2xl border border-neutral-300 bg-white/80 p-4 transition-transform hover:-translate-y-1 shadow-sm"
                    key={`tshirt-${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SOCIAL MEDIA DESIGNS SECTION
            ==================================================================== */}
        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[0.46fr_0.54fr]">
            <div>
              <PageNumber dark>05</PageNumber>
              <h2 className="display-title mt-12 text-white">
                Social Media
                <br />
                <span className="text-lime">Designs</span>
                <Sparkles className="ml-4 inline h-10 w-10 text-lime" />
              </h2>
              <p className="mt-8 max-w-xs border-l border-zinc-400 pl-6 text-sm font-semibold leading-relaxed text-zinc-300">
                Engaging, aesthetic and on-brand social media designs that help brands
                connect with their audience.
              </p>
              <p className="mt-12 text-xs font-semibold tracking-wider text-zinc-400">
                Design • Strategy • Impact
              </p>
            </div>
            <div>
              <p className="mb-6 text-right text-xs font-semibold tracking-wider text-zinc-400">
                Work Samples • Social &amp; Campaign Visuals
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {socialProjects.map((project) => (
                  <WorkThumb key={`${project.title}-social`} project={project} tall />
                ))}
              </div>
              <p className="mt-10 text-right text-xs font-semibold tracking-wider text-zinc-400">
                Content that connects
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            TYPOGRAPHY & ART SECTION (Renamed & Fixed Content - Issues 2 & 8)
            ==================================================================== */}
        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex flex-col justify-between">
              <PageNumber dark>06</PageNumber>
              <div>
                <h2 className="display-title text-white">
                  Typography
                  <br />
                  <span className="text-lime">Art</span>
                </h2>
                <p className="mt-8 max-w-xs text-sm font-semibold leading-relaxed text-zinc-300">
                  Custom letterforms, editorial typography, and abstract visual compositions crafted with experimental textures.
                </p>
              </div>
              <p className="text-xs font-semibold tracking-wider text-zinc-400">
                Designed to solve • Built to delight
              </p>
            </div>
            <div>
              <p className="mb-6 text-right text-xs font-semibold tracking-wider text-zinc-400">
                Work Samples • Typography &amp; Art
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {typographyProjects.map((project) => (
                  <WorkThumb key={`${project.title}-typography`} project={project} tall />
                ))}
              </div>
              <ArrowUpRight className="ml-auto mt-8 h-8 w-8 text-lime" />
            </div>
          </div>
        </section>

        {/* ====================================================================
            CONTACT SECTION
            ==================================================================== */}
        <section id="contact" className="deck-page bg-paper">
          <div className="min-h-screen p-8 md:p-14 lg:p-20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <PageNumber>07</PageNumber>
                <p className="section-kicker text-black">Get in Touch</p>
              </div>

              <div className="mt-6">
                <h2 className="display-title text-black">
                  Let&apos;s Work
                </h2>
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-20 bg-lime" />
                  <p className="signature text-4xl text-lime">Together</p>
                </div>
              </div>

              {/* Balanced 3-Column Contact Grid */}
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {/* Column 1: Collaboration Services */}
                <div className="rounded-2xl border border-neutral-300 bg-white/80 p-6 shadow-sm">
                  <p className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
                    Available For
                  </p>
                  <ul className="space-y-2 text-sm font-bold text-neutral-900">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-lime" /> Freelance Design Projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-lime" /> Brand &amp; Poster Campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-lime" /> UI/UX &amp; Web Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-lime" /> Full-time Opportunities
                    </li>
                  </ul>
                </div>

                {/* Column 2: Direct Contact Channels */}
                <div className="rounded-2xl border border-neutral-300 bg-white/80 p-6 shadow-sm">
                  <p className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
                    Direct Contact
                  </p>
                  <div className="space-y-3 text-sm font-semibold text-neutral-800">
                    <Link
                      href="mailto:saumitramisra95@gmail.com"
                      className="flex items-center gap-3 transition hover:text-black"
                    >
                      <Mail className="h-4 w-4 text-neutral-500" /> saumitramisra95@gmail.com
                    </Link>
                    <Link
                      href="tel:+919555942512"
                      className="flex items-center gap-3 transition hover:text-black"
                    >
                      <Phone className="h-4 w-4 text-neutral-500" /> +91 9555942512
                    </Link>
                    <span className="flex items-center gap-3 text-neutral-600">
                      <MapPin className="h-4 w-4 text-neutral-500" /> Mathura / India
                    </span>
                  </div>
                </div>

                {/* Column 3: Social & Creative Handles */}
                <div className="rounded-2xl border border-neutral-300 bg-white/80 p-6 shadow-sm">
                  <p className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
                    Social &amp; Visual Work
                  </p>
                  <div className="space-y-3 text-sm font-semibold text-neutral-800">
                    <Link
                      href="https://www.instagram.com/the._.deadshadow/"
                      target="_blank"
                      className="flex items-center gap-3 transition hover:text-black"
                    >
                      <Instagram className="h-4 w-4 text-neutral-500" /> @the._.deadshadow
                    </Link>
                    <Link
                      href="https://www.instagram.com/editorinwildness/"
                      target="_blank"
                      className="flex items-center gap-3 transition hover:text-black"
                    >
                      <Instagram className="h-4 w-4 text-neutral-500" /> @editorinwildness
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-300 pt-6 text-xs font-medium text-neutral-600">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span>© {new Date().getFullYear()} Saumitra Misra. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-lime" /> Based in India • IT Act 2000 Compliant
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-neutral-700">
                <Link href="/privacy" className="hover:text-black transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-black transition">
                  Terms &amp; Conditions
                </Link>
                <Link href="/cookies" className="hover:text-black transition">
                  Cookie Policy
                </Link>
                <Link href="/refunds" className="hover:text-black transition">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
