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

      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-rose-600/10 blur-[130px]" />
        <div className="absolute top-[35%] -left-32 h-[32rem] w-[32rem] rounded-full bg-red-800/10 blur-[140px]" />
        <div className="absolute bottom-20 right-[5%] h-[28rem] w-[28rem] rounded-full bg-rose-900/10 blur-[120px]" />
        <div className="dev-grid-bg absolute inset-0 opacity-40" />
      </div>

      <main className="relative z-10 pt-24 md:pt-28">
        {/* ====================================================================
            HERO SECTION
            ==================================================================== */}
        <section className="relative px-5 py-12 md:px-12 lg:px-20 lg:py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            {/* Top Sub-Header Bar */}
            <div className="flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream/80">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                Software Engineer & AI
              </span>
              <span className="hidden items-center gap-2 md:flex">
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
                <div className="-mt-3 flex items-center gap-4 md:-mt-8">
                  <span className="h-px w-24 bg-rose-500" />
                  <p className="signature text-5xl text-rose-500 md:text-7xl">Software & AI</p>
                </div>

                {/* Editorial Two-Column Ticker (Matches Homepage Layout) */}
                <div className="mt-10 grid gap-8 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-cream md:grid-cols-2">
                  <div className="border-l-2 border-rose-500 pl-4 space-y-1">
                    <p>Java & Python Developer</p>
                    <p>Full Stack Web Systems</p>
                    <p>AI & Machine Learning</p>
                    <p>Vertex AI & Gemini LLMs</p>
                    <p>REST & Backend APIs</p>
                  </div>
                  <div className="self-end text-left md:text-right space-y-1 text-zinc-400">
                    <p>Available For</p>
                    <p className="text-white font-extrabold">Software Engineering</p>
                    <p className="text-white font-extrabold">AI/ML Internships</p>
                    <p className="text-white font-extrabold">Full Stack Builds</p>
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
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/25 transition-all hover:from-rose-500 hover:to-red-500 hover:shadow-rose-600/40 hover:-translate-y-0.5"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    Explore Projects
                  </a>
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-zinc-200 backdrop-blur transition-all hover:border-rose-500/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4 text-rose-400" />
                    GitHub Profile
                  </a>
                  <a
                    href={contactDetails.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/30 px-5 py-3.5 text-sm font-bold text-rose-300 transition-all hover:border-rose-500/60 hover:bg-rose-900/40 hover:text-rose-200 hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Interactive Terminal & Spec Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                {/* Outer Glow frame */}
                <div className="relative rounded-2xl border border-rose-500/30 bg-[#0e1017]/95 p-6 shadow-2xl backdrop-blur-xl dev-card-glow">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-xs text-zinc-400">
                        saumitra@workspace:~
                      </span>
                    </div>
                    <span className="rounded bg-rose-950/80 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-rose-300">
                      AI + DEV
                    </span>
                  </div>

                  {/* Terminal Code Content */}
                  <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-zinc-300">
                    <p className="text-zinc-500">// Developer Profile & Architecture Stack</p>
                    <p>
                      <span className="text-rose-400">const</span> developer = {"{"}
                    </p>
                    <div className="pl-4 space-y-1">
                      <p>
                        name: <span className="text-emerald-300">&quot;Saumitra Misra&quot;</span>,
                      </p>
                      <p>
                        degree: <span className="text-emerald-300">&quot;B.Tech CSE, GLA University (2027)&quot;</span>,
                      </p>
                      <p>
                        focus: [<span className="text-amber-300">&quot;Software Engineering&quot;</span>, <span className="text-amber-300">&quot;Vertex AI & Gemini&quot;</span>, <span className="text-amber-300">&quot;ML Models&quot;</span>],
                      </p>
                      <p>
                        languages: [<span className="text-rose-300">&quot;Java&quot;</span>, <span className="text-rose-300">&quot;Python&quot;</span>, <span className="text-rose-300">&quot;TypeScript&quot;</span>, <span className="text-rose-300">&quot;C&quot;</span>],
                      </p>
                      <p>
                        databases: [<span className="text-rose-300">&quot;MySQL&quot;</span>, <span className="text-rose-300">&quot;MongoDB&quot;</span>],
                      </p>
                      <p>
                        certifications: <span className="text-cyan-300">8+ Skill Badges (GCP, AWS, Mongo)</span>,
                      </p>
                      <p>
                        availability: <span className="text-emerald-400">&quot;Open to Internships & Software Roles&quot;</span>
                      </p>
                    </div>
                    <p>{"};"}</p>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[0.72rem] text-zinc-400">
                      <span className="flex items-center gap-1.5 text-rose-300">
                        <Terminal className="h-3.5 w-3.5" /> status: ready_to_compile
                      </span>
                      <span>Mathura / Prayagraj, IN</span>
                    </div>
                  </div>
                </div>
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
                <div className="-mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Specialties</p>
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
                  className="group relative rounded-xl border border-white/10 bg-[#10121c]/90 p-5 backdrop-blur dev-card-glow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-950/40 text-rose-400 transition-colors group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white transition group-hover:text-rose-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
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
                <div className="-mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Verified Tools</p>
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
                  onClick={() => setSelectedTechCategory(category)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
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
                    <span className="h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                    <span className="text-sm font-bold text-white">{tech.name}</span>
                  </div>
                  {tech.level && (
                    <span className="rounded bg-rose-950/60 border border-rose-500/20 px-2 py-0.5 text-[0.68rem] font-semibold text-rose-300">
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
                  <h4 className="text-sm font-bold text-white">Full Stack & Systems</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Java, Python, JavaScript, Next.js, React, Tailwind CSS, Node.js, Express, REST APIs, HTML5/CSS3.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/60 pl-4">
                  <h4 className="text-sm font-bold text-white">Data & Machine Learning</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Scikit-Learn, Logistic Regression, Classification Benchmarks, Pandas, NumPy, Matplotlib, Streamlit.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/60 pl-4">
                  <h4 className="text-sm font-bold text-white">AI, Cloud & Databases</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Google Cloud Vertex AI, Gemini Multimodal RAG, Prompt Design, AWS Educate Storage, MySQL, MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            FEATURED PROJECTS SECTION
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
                <div className="-mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Code & AI</p>
                </div>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2">
                {["All", "AI / ML", "Full Stack", "Data Science"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-lg px-3.5 py-1.5 text-xs font-bold tracking-wider transition",
                      activeTab === tab
                        ? "bg-rose-600 text-white"
                        : "border border-white/10 bg-[#12141f] text-zinc-400 hover:text-white",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11131c]/90 p-6 backdrop-blur dev-card-glow"
                >
                  <div>
                    {/* Top Row: Category tag and external link */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-rose-950/70 border border-rose-500/30 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-rose-300">
                        {project.category}
                      </span>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:border-rose-500/50 hover:bg-rose-950/50 hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition group-hover:text-rose-300">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                      {project.description}
                    </p>

                    {/* Key Functionality points */}
                    <div className="mt-5 space-y-1.5 border-t border-white/5 pt-4">
                      <p className="section-kicker text-zinc-400">
                        Key Capabilities:
                      </p>
                      {project.keyFunctionality.map((func, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-rose-500 mt-0.5" />
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
                          className="rounded bg-white/5 px-2 py-0.5 text-[0.65rem] font-medium text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <a
                        href={project.githubUrl || contactDetails.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 transition hover:text-rose-300"
                      >
                        Code & Architecture <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            PROFESSIONAL EXPERIENCE & EDUCATION SECTION
            ==================================================================== */}
        <section id="experience" className="px-5 py-20 md:px-12 lg:px-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              {/* Left Column: Experience */}
              <div>
                <p className="section-kicker text-rose-400">04 / Background</p>
                <h2 className="display-title text-cream">
                  Work &amp;
                  <br />
                  <span className="text-rose-500">Experience</span>
                </h2>
                <div className="-mt-2 flex items-center gap-3 mb-8">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Journey</p>
                </div>

                <div className="space-y-6">
                  {devExperience.map((item, index) => (
                    <motion.div
                      key={item.organization + item.role}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative rounded-2xl border border-white/10 bg-[#10121b]/90 p-6 backdrop-blur dev-card-glow"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="rounded bg-rose-950/70 border border-rose-500/30 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-rose-300">
                            {item.type}
                          </span>
                          <h3 className="mt-2 text-lg font-bold text-white">{item.role}</h3>
                          <p className="text-sm font-semibold text-rose-400">{item.organization}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-400">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-xs leading-relaxed text-zinc-300">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-rose-950/40 px-2 py-0.5 text-[0.65rem] font-medium text-rose-200"
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
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  GLA University CSE
                </h3>

                {/* Education Card */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-[#10121b]/90 p-6 backdrop-blur dev-card-glow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-950/50 text-rose-400">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Bachelors of Technology (CSE)
                      </h4>
                      <p className="text-xs text-rose-300 font-semibold">GLA University, Mathura</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-zinc-300 leading-relaxed">
                    Undergraduate degree program in Computer Science & Engineering (2023 - 2027).
                    Coursework encompassing Data Structures & Algorithms, Object-Oriented Programming (Java/C++),
                    Database Management Systems (DBMS), Operating Systems, Machine Learning, and Computer Networks.
                  </p>
                </div>

                {/* Co-Curricular & Workshops */}
                <div className="mt-8">
                  <h4 className="section-kicker text-zinc-400 mb-4">
                    Technical Workshops & Competitions
                  </h4>
                  <div className="space-y-3">
                    {coCurricularActivities.map((act) => (
                      <div
                        key={act.title}
                        className="rounded-xl border border-white/10 bg-[#0e1017]/80 p-4 transition hover:border-rose-500/30"
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-white">{act.title}</h5>
                          <span className="text-[0.68rem] text-rose-400 font-semibold">{act.organizer}</span>
                        </div>
                        <p className="mt-1 text-[0.72rem] text-zinc-400">{act.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            CERTIFICATIONS & SKILL BADGES SECTION
            ==================================================================== */}
        <section id="certifications" className="px-5 py-20 md:px-12 lg:px-20 border-t border-white/5 bg-[#090b12]/60 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-rose-400">05 / Accreditations</p>
                <h2 className="display-title text-cream">
                  Skill
                  <br />
                  <span className="text-rose-500">Badges</span>
                </h2>
                <div className="-mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-rose-500" />
                  <p className="signature text-4xl text-rose-500 md:text-6xl">Verified</p>
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
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#10121b]/90 p-5 transition hover:border-rose-500/50 hover:bg-[#141624] dev-card-glow"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-rose-950/80 border border-rose-500/30 px-2 py-0.5 text-[0.65rem] font-bold text-rose-300">
                        {cert.issuer}
                      </span>
                      <Award className="h-4 w-4 text-rose-400" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-white/5 pt-3 flex items-center justify-between text-[0.68rem] text-zinc-400">
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
            <p className="section-kicker text-rose-400 mb-4">06 / Contact & Collaboration</p>

            <h2 className="display-title text-cream">
              Let&apos;s Build
            </h2>
            <div className="-mt-3 flex items-center justify-center gap-4 md:-mt-8">
              <span className="h-px w-20 bg-rose-500" />
              <p className="signature text-5xl text-rose-500 md:text-7xl">Together</p>
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
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition hover:from-rose-500 hover:to-red-500 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-rose-500/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4 text-rose-400" />
                GitHub
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-rose-500/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4 text-rose-400" />
                LinkedIn
              </a>
              <a
                href={contactDetails.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-6 py-3.5 text-sm font-bold text-rose-200 transition hover:border-rose-500 hover:bg-rose-900/50 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="mt-10 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8 text-xs text-zinc-400 font-mono">
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
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Saumitra Misra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-rose-400 transition">
                Creative Portfolio
              </Link>
              <Link href="/database-cloud" className="hover:text-rose-400 transition">
                Database & Cloud
              </Link>
              <Link href="/projects" className="hover:text-rose-400 transition">
                Design Archive
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
