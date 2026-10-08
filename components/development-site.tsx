"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ChevronRight,
  Code2,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Globe2,
} from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { GlassGraphicCard } from "@/components/glass-graphic-card";
import {
  coCurricularActivities,
  contactDetails,
  devCertifications,
  devExperience,
  devProjects,
  devSpecialties,
  techStackData,
} from "@/components/development-data";
import { cn } from "@/lib/utils";

export function DevelopmentSite() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>("Languages");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const techCategories = Object.keys(techStackData);

  const filteredProjects =
    activeTab === "All"
      ? devProjects
      : activeTab === "AI / ML"
      ? devProjects.filter((p) => p.category.includes("AI") || p.category.includes("Machine Learning"))
      : activeTab === "Full Stack"
      ? devProjects.filter((p) => p.category.includes("Full Stack") || p.category.includes("Web"))
      : devProjects.filter((p) => p.category.includes("Data Science") || p.category.includes("Analytics"));

  return (
    <div className="development-theme relative selection:bg-rose-500/30 selection:text-rose-200">
      {/* Scroll indicator bar with Red theme accent */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-rose-700 via-rose-500 to-red-400"
        style={{ width: progressWidth }}
      />

      <SiteNav />

      {/* Background ambient lighting with 3D Spherical Graphics */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="sphere-crimson-dark absolute -top-40 right-[-10%] h-[38rem] w-[38rem] opacity-60 blur-[1px]" />
        <div className="sphere-crimson-bright absolute top-[35%] -left-36 h-[34rem] w-[34rem] opacity-50 blur-[2px]" />
        <div className="sphere-crimson-ambient absolute bottom-16 right-[5%] h-[32rem] w-[32rem] blur-[80px] opacity-70" />
        <div className="dev-grid-bg absolute inset-0 opacity-35" />
      </div>

      <main className="relative z-10 pt-24 md:pt-28">
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section className="relative px-5 py-12 md:px-12 lg:px-20 lg:py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            {/* Top Sub-Header Bar */}
            <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-cream/90">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                Software Engineer &amp; AI
              </span>
              <span className="hidden items-center gap-2 md:flex text-zinc-300">
                <Globe2 className="h-4 w-4 text-rose-500" /> Based in India
              </span>
            </div>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Column: Signature Display Heading */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="py-4"
              >
                <h1 className="display-title max-w-[950px] text-cream">
                  Saumitra
                  <br />
                  Misra
                </h1>
                {/* Non-overlapping signature placement */}
                <div className="mt-2 flex items-center gap-4 md:mt-3">
                  <span className="h-px w-24 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Software &amp; AI</p>
                </div>

                {/* Editorial Two-Column Overview */}
                <div className="mt-10 grid gap-8 text-xs font-semibold text-cream md:grid-cols-2">
                  <div className="border-l-2 border-rose-500 pl-4 space-y-1.5">
                    <p>Java &amp; Python Developer</p>
                    <p>Full Stack Web Systems</p>
                    <p>AI &amp; Machine Learning</p>
                    <p>Vertex AI &amp; Gemini LLMs</p>
                    <p>REST &amp; Backend APIs</p>
                  </div>
                  <div className="self-end text-left md:text-right space-y-1 text-zinc-300">
                    <p className="text-zinc-400">Available For</p>
                    <p className="text-white font-bold">Software Engineering</p>
                    <p className="text-white font-bold">AI/ML Internships</p>
                    <p className="text-rose-400 font-bold">Full Stack Builds</p>
                  </div>
                </div>

                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                  I build scalable web applications, backend systems, AI-powered solutions and
                  developer-focused products using modern software technologies.
                </p>

                {/* Specialties / Core Roles Matrix */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Software Engineer",
                    "Java Developer",
                    "Full Stack Developer",
                    "Python Developer",
                    "AI/ML Enthusiast",
                    "Prompt Engineer",
                    "Backend Developer",
                    "Frontend Developer",
                    "API Developer",
                  ].map((role) => (
                    <span
                      key={role}
                      className="rounded-lg border border-rose-500/20 bg-[#12131c]/90 px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-200 transition-all hover:border-rose-500/50 hover:bg-rose-950/40 hover:text-white"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-rose-600/25 transition-all hover:from-rose-500 hover:to-red-500 hover:shadow-rose-600/40 hover:-translate-y-0.5"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    Explore Projects
                  </a>
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-bold text-zinc-200 backdrop-blur transition-all hover:border-rose-500/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4 text-rose-400" />
                    GitHub Profile
                  </a>
                  <a
                    href={contactDetails.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/30 px-5 py-3.5 text-xs sm:text-sm font-bold text-rose-300 transition-all hover:border-rose-500/60 hover:bg-rose-900/40 hover:text-rose-200 hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Crimson Spheres & Frosted Glassmorphism Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex items-center justify-center lg:justify-end"
              >
                <GlassGraphicCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            AREAS OF EXPERTISE / SPECIALTIES CARDS
            ==================================================================== */}
        <section className="px-5 py-20 md:px-12 lg:px-20 border-t border-white/5 bg-[#090b12]/60 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-rose-400">01 / Capabilities</p>
                <h2 className="display-title text-cream">
                  Core
                  <br />
                  <span className="text-rose-500">Domains</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-5xl">Specialties</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
                Applied software engineering and AI competencies built through academic coursework,
                cloud credentials, and production project deliverables.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {devSpecialties.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative rounded-2xl border border-white/10 bg-[#10121c]/90 p-6 backdrop-blur dev-card-glow"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-950/40 text-rose-400 transition-colors group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white transition group-hover:text-rose-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            TECHNOLOGY STACK SECTION
            ==================================================================== */}
        <section id="tech-stack" className="px-5 py-20 md:px-12 lg:px-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-rose-400">02 / Technologies</p>
                <h2 className="display-title text-cream">
                  Tech
                  <br />
                  <span className="text-rose-500">Stack</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-5xl">Verified Tools</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-zinc-300 leading-relaxed">
                Accurately reflecting verified technical proficiencies, frameworks, and cloud services
                demonstrated across active coursework and repository deliverables.
              </p>
            </div>

            {/* Category Switcher Tabs */}
            <div className="mt-12 flex flex-wrap gap-2">
              {techCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedTechCategory(category)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
                    selectedTechCategory === category
                      ? "border border-rose-500 bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                      : "border border-white/10 bg-[#12141f] text-zinc-400 hover:border-white/20 hover:text-white",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Active Category Display Grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {techStackData[selectedTechCategory]?.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[#11131c]/90 px-4 py-3.5 backdrop-blur transition hover:border-rose-500/40 hover:bg-[#151824]"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                    <span className="text-sm font-bold text-white">{tech.name}</span>
                  </div>
                  {tech.level && (
                    <span className="rounded-md bg-rose-950/60 border border-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-300">
                      {tech.level}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Full Stack Overview Matrix */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-[#0c0e16]/80 p-6 md:p-8">
              <h3 className="section-kicker text-rose-400">
                Stack Summary at a Glance
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="border-l-2 border-rose-500/60 pl-4">
                  <h4 className="text-sm font-bold text-white">Full Stack &amp; Systems</h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Java, Python, JavaScript, Next.js, React, Tailwind CSS, Node.js, Express, REST APIs, HTML5/CSS3.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/60 pl-4">
                  <h4 className="text-sm font-bold text-white">Data &amp; Machine Learning</h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Scikit-Learn, Logistic Regression, Classification Benchmarks, Pandas, NumPy, Matplotlib, Streamlit.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/60 pl-4">
                  <h4 className="text-sm font-bold text-white">AI, Cloud &amp; Databases</h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Google Cloud Vertex AI, Gemini Multimodal RAG, Prompt Design, AWS Educate Storage, MySQL, MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            FEATURED PROJECTS SECTION (With Full-Card Click Target)
            ==================================================================== */}
        <section id="projects" className="px-5 py-20 md:px-12 lg:px-20 border-t border-white/5 bg-[#090b12]/50 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-rose-400">03 / Selected Deliverables</p>
                <h2 className="display-title text-cream">
                  Featured
                  <br />
                  <span className="text-rose-500">Projects</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-5xl">Code &amp; AI</p>
                </div>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2">
                {["All", "AI / ML", "Full Stack", "Data Science"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-xl px-4 py-2 text-xs font-bold tracking-wider transition",
                      activeTab === tab
                        ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                        : "border border-white/10 bg-[#12141f] text-zinc-400 hover:text-white",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid with Whole-Card Click Targets */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11131c]/90 p-6 backdrop-blur dev-card-glow cursor-pointer transition-all duration-300 hover:border-rose-500/50 hover:-translate-y-1"
                >
                  {/* Whole-Card Click Target */}
                  <a
                    href={project.githubUrl || contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                    aria-label={`Explore repository and architecture for ${project.title}`}
                  />

                  <div>
                    {/* Top Row: Category tag and external link */}
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-lavonia text-2xl text-rose-400 leading-none">
                        {project.category}
                      </p>
                      {project.githubUrl && (
                        <span className="relative z-20 rounded-lg border border-white/10 p-2 text-zinc-400 transition group-hover:border-rose-500/50 group-hover:bg-rose-950/50 group-hover:text-white">
                          <Github className="h-4 w-4" />
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 font-august text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white transition group-hover:text-rose-300">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                      {project.description}
                    </p>

                    {/* Key Functionality points */}
                    <div className="mt-5 space-y-1.5 border-t border-white/5 pt-4">
                      <p className="section-kicker text-zinc-400">
                        Key Capabilities:
                      </p>
                      {project.keyFunctionality.map((func, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <ChevronRight className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                          <span>{func}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech tags and CTA */}
                  <div className="mt-6 border-t border-white/5 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-400 transition group-hover:text-rose-300">
                        Code &amp; Architecture <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            PROFESSIONAL EXPERIENCE & EDUCATION (Horizontally Aligned Columns)
            ==================================================================== */}
        <section id="experience" className="px-5 py-20 md:px-12 lg:px-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            {/* Section Header Spanning Across Columns for Perfect Alignment */}
            <div className="mb-12">
              <p className="section-kicker text-rose-400">04 / Background</p>
              <h2 className="display-title text-cream">
                Work &amp;
                <br />
                <span className="text-rose-500">Experience</span>
              </h2>
              {/* Non-overlapping subtitle */}
              <div className="mt-2 flex items-center gap-3">
                <span className="h-px w-16 bg-rose-500" />
                <p className="signature text-4xl text-rose-500 md:text-5xl">Journey &amp; Education</p>
              </div>
            </div>

            {/* Two-Column Grid Aligned at the Same Baseline */}
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] items-start">
              {/* Left Column: Experience */}
              <div>
                <p className="section-kicker text-rose-400">Industry Track</p>
                <h3 className="mt-2 font-august text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
                  Leadership &amp; Roles
                </h3>

                <div className="mt-6 space-y-6">
                  {devExperience.map((item, index) => (
                    <motion.div
                      key={item.organization + item.role}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative rounded-2xl border border-white/10 bg-[#10121b]/90 p-6 pt-7 backdrop-blur dev-card-glow overflow-hidden"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="rounded-md bg-rose-950/70 border border-rose-500/30 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-300">
                              {item.type}
                            </span>
                          </div>
                          {/* Lavonia Classy cursive script for Organization */}
                          <p className="font-lavonia text-xl sm:text-2xl text-rose-400 leading-normal select-none tracking-wide break-words pt-0.5">
                            {item.organization}
                          </p>
                          {/* August bold condensed uppercase for Role */}
                          <h3 className="mt-1 font-august text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white leading-tight break-words">
                            {item.role}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-400">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-rose-950/40 px-2.5 py-1 text-xs font-medium text-rose-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Education & Hackathons */}
              <div>
                <p className="section-kicker text-rose-400">Academic Foundation</p>
                <h3 className="mt-2 font-august text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
                  GLA University CSE
                </h3>

                {/* Education Card */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-[#10121b]/90 p-6 pt-7 backdrop-blur dev-card-glow overflow-hidden">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-950/50 text-rose-400 shrink-0 mt-1">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-lavonia text-lg sm:text-xl text-rose-400 leading-normal break-words pt-0.5">
                        GLA University, Mathura
                      </p>
                      <h4 className="mt-1 font-august text-xl sm:text-2xl font-bold uppercase tracking-wider text-white leading-tight break-words">
                        Bachelors of Technology (CSE)
                      </h4>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Undergraduate degree program in Computer Science &amp; Engineering (2023 - 2027).
                    Coursework encompassing Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++),
                    Database Management Systems (DBMS), Operating Systems, Machine Learning, and Computer Networks.
                  </p>
                </div>

                {/* Hackathon & Extracurricular Accomplishments */}
                <div className="mt-6">
                  <p className="section-kicker text-rose-400 mb-3">
                    Hackathons &amp; Activities
                  </p>
                  <div className="space-y-3">
                    {coCurricularActivities.map((act) => (
                      <div
                        key={act.title}
                        className="rounded-2xl border border-white/10 bg-[#0e1017]/80 p-5 pt-6 transition hover:border-rose-500/30 overflow-hidden"
                      >
                        <div className="min-w-0">
                          <p className="font-august text-sm sm:text-base font-bold uppercase tracking-wider text-rose-400 leading-tight break-words">
                            {act.organizer}
                          </p>
                          <h5 className="mt-1 font-lavonia text-xl sm:text-2xl text-white leading-normal break-words">
                            {act.title}
                          </h5>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">{act.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            CERTIFICATIONS & BADGES SECTION
            ==================================================================== */}
        <section id="certifications" className="px-5 py-20 md:px-12 lg:px-20 border-t border-white/5 bg-[#080910] overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-rose-400">05 / Accreditations</p>
                <h2 className="display-title text-cream">
                  Skill
                  <br />
                  <span className="text-rose-500">Badges</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-5xl">Verified</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-zinc-300 leading-relaxed">
                Demonstrated competencies validated through Google Cloud, AWS Educate, and MongoDB technical skill badges.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {devCertifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#10121b]/90 p-6 transition hover:border-rose-500/50 hover:bg-[#141624] dev-card-glow"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-lavonia text-xl text-rose-400 leading-none">
                        {cert.issuer}
                      </p>
                      <Award className="h-4 w-4 text-rose-400" />
                    </div>
                    <h3 className="mt-2 font-august text-lg sm:text-xl font-bold uppercase tracking-wider text-white leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-white/5 pt-3 flex items-center justify-between text-xs text-zinc-400">
                    <span>{cert.category}</span>
                    <span className="font-semibold text-rose-300">{cert.badgeType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            DEVELOPER CTA SECTION
            ==================================================================== */}
        <section id="contact" className="px-5 py-24 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
          <div className="mx-auto max-w-5xl rounded-3xl border border-rose-500/30 bg-gradient-to-b from-[#141624] to-[#0b0d14] p-8 md:p-16 shadow-2xl dev-card-glow text-center">
            <p className="section-kicker text-rose-400 mb-4">06 / Contact &amp; Collaboration</p>

            <h2 className="display-title text-cream">
              Let&apos;s Build
            </h2>
            {/* Non-overlapping subtitle */}
            <div className="mt-2 flex items-center justify-center gap-4 md:mt-3">
              <span className="h-px w-20 bg-rose-500" />
              <p className="signature text-4xl text-rose-500 md:text-6xl">Together</p>
              <span className="h-px w-20 bg-rose-500" />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-sm md:text-base leading-relaxed text-zinc-300">
              Whether you are hiring for software engineering roles, developing machine learning products,
              or looking for collaborative technical expertise, let&apos;s connect.
            </p>

            {/* Direct contact link row */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition hover:from-rose-500 hover:to-red-500 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:border-rose-500/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4 text-rose-400" />
                GitHub
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:border-rose-500/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4 text-rose-400" />
                LinkedIn
              </a>
              <a
                href={contactDetails.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-6 py-3.5 text-xs sm:text-sm font-bold text-rose-200 transition hover:border-rose-500 hover:bg-rose-900/50 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="mt-10 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8 text-xs sm:text-sm text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-rose-400" /> {contactDetails.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-rose-400" /> {contactDetails.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-400" /> {contactDetails.location}
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#06070a] px-5 py-8 md:px-12">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© {new Date().getFullYear()} Saumitra Misra. All rights reserved.</p>
              <span className="hidden sm:inline">•</span>
              <p>Governed by IT Act, 2000 (India)</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 font-semibold">
              <Link href="/privacy" className="hover:text-rose-400 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-rose-400 transition">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-rose-400 transition">
                Cookies
              </Link>
              <Link href="/refunds" className="hover:text-rose-400 transition">
                Refunds
              </Link>
              <span className="text-zinc-600">|</span>
              <Link href="/" className="hover:text-rose-400 transition">
                Creative
              </Link>
              <Link href="/database-cloud" className="hover:text-rose-400 transition">
                Database &amp; Cloud
              </Link>
              <Link href="/projects" className="hover:text-rose-400 transition">
                Archive
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
