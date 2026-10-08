"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Cloud,
  Database,
  Download,
  Github,
  HardDrive,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Globe2,
} from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { AuraBeigeGraphic } from "@/components/aura-beige-graphic";
import {
  cloudArchitectureLayers,
  dbCertifications,
  dbExpertisePillars,
  dbProjects,
  sqlConcepts,
} from "@/components/database-cloud-data";
import { contactDetails } from "@/components/development-data";
import { cn } from "@/lib/utils";

export function DatabaseCloudSite() {
  const [activeSqlId, setActiveSqlId] = useState<string>("complex-joins");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const currentSqlConcept =
    sqlConcepts.find((c) => c.id === activeSqlId) || sqlConcepts[0];

  return (
    <div className="database-cloud-theme relative selection:bg-amber-900/15 selection:text-amber-900">
      {/* Scroll indicator bar with Warm Amber theme accent */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500"
        style={{ width: progressWidth }}
      />

      <SiteNav />

      {/* Subtle blueprint paper grid background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="db-grid-bg absolute inset-0 opacity-70" />
        <div className="absolute -top-32 right-[-5%] h-[34rem] w-[34rem] rounded-full bg-amber-200/25 blur-[120px]" />
        <div className="absolute top-[40%] -left-20 h-[30rem] w-[30rem] rounded-full bg-stone-300/30 blur-[130px]" />
        <div className="absolute bottom-10 right-[15%] h-[24rem] w-[24rem] rounded-full bg-amber-100/40 blur-[100px]" />
      </div>

      <main className="relative z-10 pt-20 md:pt-24">
        {/* ====================================================================
            EDITORIAL STREETWEAR GRAPHIC CANVAS (Interactive 360 Visual Sandbox)
            ==================================================================== */}
        <section className="px-4 py-6 md:px-8 lg:px-12">
          <AuraBeigeGraphic />
        </section>

        {/* ====================================================================
            HERO SECTION: DETAILED TECHNICAL IDENTITY
            ==================================================================== */}
        <section className="px-5 py-12 md:px-12 lg:px-20 lg:py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            {/* Top Sub-Header Bar */}
            <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-stone-700">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600" />
                </span>
                Database &amp; Cloud Architect
              </span>
              <span className="hidden items-center gap-2 md:flex text-stone-600">
                <Globe2 className="h-4 w-4 text-amber-700" /> Based in India
              </span>
            </div>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Column: Heading and Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="py-4"
              >
                <h1 className="display-title max-w-[950px] text-stone-900">
                  Saumitra
                  <br />
                  Misra
                </h1>
                {/* Non-overlapping subtitle with positive margin */}
                <div className="mt-2 flex items-center gap-4 md:mt-3">
                  <span className="h-px w-24 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-6xl">Database &amp; Cloud</p>
                </div>

                {/* Editorial Two-Column Overview */}
                <div className="mt-10 grid gap-8 text-xs font-semibold text-stone-700 md:grid-cols-2">
                  <div className="border-l-2 border-amber-700 pl-4 space-y-1.5">
                    <p>SQL &amp; Query Optimization</p>
                    <p>Relational 3NF &amp; Schema Design</p>
                    <p>MySQL, PostgreSQL &amp; MongoDB</p>
                    <p>ACID Transactions &amp; Storage</p>
                    <p>Cloud Infrastructure &amp; Pipelines</p>
                  </div>
                  <div className="self-end text-left md:text-right space-y-1 text-stone-600">
                    <p className="text-stone-500">Available For</p>
                    <p className="text-stone-900 font-bold">Database Architecture</p>
                    <p className="text-stone-900 font-bold">Backend Infrastructure</p>
                    <p className="text-amber-800 font-bold">Data Engineering</p>
                  </div>
                </div>

                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                  I design, manage and work with databases, SQL systems, backend infrastructure and
                  cloud technologies to build reliable and scalable applications.
                </p>

                {/* Specialties / Core Domains Matrix */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Database Management",
                    "SQL",
                    "DBMS",
                    "Database Design",
                    "PostgreSQL",
                    "MySQL",
                    "MongoDB",
                    "Cloud Engineering",
                    "Backend Infrastructure",
                    "Data Management",
                    "API Infrastructure",
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-stone-800 shadow-sm transition hover:border-amber-700 hover:text-amber-900"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#sql-showcase"
                    className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-amber-100 shadow-md transition hover:bg-stone-800 hover:-translate-y-0.5"
                  >
                    <Terminal className="h-4 w-4 text-amber-300" />
                    Interactive SQL Engine
                  </a>
                  <a
                    href="#cloud-architecture"
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-stone-800 shadow-sm transition hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5"
                  >
                    <Cloud className="h-4 w-4 text-amber-700" />
                    Cloud Architecture
                  </a>
                  <a
                    href={contactDetails.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-amber-700/30 bg-amber-50 px-5 py-3.5 text-xs sm:text-sm font-bold text-amber-900 transition hover:bg-amber-100 hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Architectural ER & Schema Metric Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl border border-stone-300/80 bg-white p-6 shadow-xl backdrop-blur-xl db-card-shadow">
                  {/* Card Title */}
                  <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                        <HardDrive className="h-4 w-4" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                          Data Architecture Blueprint
                        </h2>
                        <p className="text-xs text-stone-500 font-medium">ACID Relational &amp; Document Store</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      LIVE SCHEMA
                    </span>
                  </div>

                  {/* Schema Entities Breakdown */}
                  <div className="mt-5 space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                      <div className="flex items-center justify-between text-stone-700 font-bold">
                        <span>TABLE: orders (Relational)</span>
                        <span className="text-xs text-amber-700 font-sans font-semibold">MySQL / InnoDB</span>
                      </div>
                      <div className="mt-2 space-y-1 text-xs text-stone-600">
                        <p className="text-stone-900 font-medium">
                          <span className="text-amber-700 font-bold">PK</span> order_id: BIGINT UNSIGNED
                        </p>
                        <p>
                          <span className="text-blue-700 font-bold">FK</span> customer_id → customers(id)
                        </p>
                        <p>total_amount: DECIMAL(10,2)</p>
                        <p>status: ENUM(&apos;PENDING&apos;,&apos;COMPLETED&apos;,&apos;CANCELLED&apos;)</p>
                        <p className="text-stone-500">// INDEX (customer_id, created_at)</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                      <div className="flex items-center justify-between text-stone-700 font-bold">
                        <span>COLLECTION: sensor_logs (NoSQL)</span>
                        <span className="text-xs text-emerald-700 font-sans font-semibold">MongoDB Document</span>
                      </div>
                      <div className="mt-2 space-y-1 text-xs text-stone-600">
                        <p>_id: ObjectId (BSON)</p>
                        <p>timestamp: ISODate, location: GeoJSON</p>
                        <p>metrics: {"{"} pm25: Float, pm10: Float, aqi: Int {"}"}</p>
                        <p className="text-stone-500">// Compound Index: {"{ timestamp: -1, location: 1 }"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="mt-5 pt-4 border-t border-stone-200 grid grid-cols-3 text-center text-xs">
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Integrity</p>
                      <p className="font-bold text-stone-900 mt-0.5">3NF Clean</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Safety</p>
                      <p className="font-bold text-stone-900 mt-0.5">ACID Compliant</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Platform</p>
                      <p className="font-bold text-stone-900 mt-0.5">AWS &amp; GCP</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            DATABASE EXPERTISE PILLARS (Visual & Structured)
            ==================================================================== */}
        <section className="px-5 py-20 md:px-12 lg:px-20 border-t border-stone-300/80 bg-[#fbf9f5] overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-amber-800">01 / Architecture</p>
                <h2 className="display-title text-stone-900">
                  Data
                  <br />
                  <span className="text-amber-700">Domains</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-5xl">Frameworks</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-stone-600 leading-relaxed">
                Systematic database engineering spanning relational database systems, NoSQL schema flexibility,
                analytical query structures, and ORM pipelines.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dbExpertisePillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm db-card-hover"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-extrabold tracking-tight text-stone-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mt-0.5">{pillar.subtitle}</p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600">
                    {pillar.description}
                  </p>

                  <div className="mt-5 border-t border-stone-200 pt-4">
                    <p className="section-kicker text-stone-500 mb-2">
                      Key Competencies
                    </p>
                    {/* Generously padded competency tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-stone-200 bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-800 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SQL & DBMS INTERACTIVE SHOWCASE SECTION
            ==================================================================== */}
        <section id="sql-showcase" className="px-5 py-20 md:px-12 lg:px-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-amber-800">02 / Query Engine</p>
                <h2 className="display-title text-stone-900">
                  SQL &amp;
                  <br />
                  <span className="text-amber-700">DBMS</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-5xl">Optimization</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-stone-600 leading-relaxed">
                Complex SQL queries, multi-table joins, aggregations with GROUP BY / HAVING,
                subqueries, and ACID-compliant transaction blocks.
              </p>
            </div>

            {/* Interactive Concept Selector */}
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.4fr_0.6fr] items-start">
              {/* Concept Tabs List */}
              <div className="space-y-3">
                {sqlConcepts.map((concept) => (
                  <button
                    key={concept.id}
                    type="button"
                    onClick={() => setActiveSqlId(concept.id)}
                    className={cn(
                      "w-full text-left rounded-xl p-4 sm:p-5 transition-all border",
                      activeSqlId === concept.id
                        ? "border-amber-700 bg-white shadow-md db-card-shadow"
                        : "border-stone-300/80 bg-white/60 hover:bg-white hover:border-stone-400",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                        {concept.category}
                      </span>
                      {activeSqlId === concept.id && (
                        <span className="flex h-2.5 w-2.5 rounded-full bg-amber-600" />
                      )}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-stone-900 leading-snug">
                      {concept.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                      {concept.explanation}
                    </p>
                  </button>
                ))}

                {/* DBMS Core Principles Box */}
                <div className="rounded-xl border border-stone-300 bg-[#f4efe5] p-5">
                  <h4 className="section-kicker text-stone-800">
                    DBMS Principles Applied
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                      <span><strong>Normalization:</strong> 1NF, 2NF, 3NF, BCNF anomaly prevention</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                      <span><strong>Relational Integrity:</strong> Primary, Foreign &amp; Composite key constraints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                      <span><strong>Indexing:</strong> B-Tree indexing on high-cardinality join fields</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                      <span><strong>ACID Isolation:</strong> Read Committed &amp; Serializable safety</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Code Display Console */}
              <div className="rounded-2xl border border-stone-800 bg-[#161514] p-6 shadow-2xl text-stone-200">
                {/* Console Bar */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-stone-400">
                      mysql&gt; {currentSqlConcept.id}.sql
                    </span>
                  </div>
                  <span className="rounded bg-amber-950/80 border border-amber-700/40 px-2.5 py-1 font-mono text-xs text-amber-300">
                    SQL QUERY
                  </span>
                </div>

                {/* SQL Code Block */}
                <pre className="mt-4 overflow-x-auto p-4 font-mono text-xs sm:text-sm leading-relaxed text-amber-100 bg-[#1e1c1a] rounded-xl border border-stone-800">
                  <code>{currentSqlConcept.syntaxSnippet}</code>
                </pre>

                {/* Explanation & Use Case */}
                <div className="mt-5 space-y-3 pt-3 border-t border-stone-800 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-amber-300">Architecture Rationale: </span>
                    <span className="text-stone-300">{currentSqlConcept.explanation}</span>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-400">Production Use Case: </span>
                    <span className="text-stone-400">{currentSqlConcept.useCase}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            VISUAL CLOUD ARCHITECTURE SECTION
            ==================================================================== */}
        <section id="cloud-architecture" className="px-5 py-20 md:px-12 lg:px-20 border-t border-stone-300/80 bg-[#fbf9f5] overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-amber-800">03 / Infrastructure</p>
                <h2 className="display-title text-stone-900">
                  Cloud
                  <br />
                  <span className="text-amber-700">Flow</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-5xl">End-to-End</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-stone-600 leading-relaxed">
                Visualizing how web applications interface with backend services, relational/document
                database systems, and cloud infrastructure pipelines.
              </p>
            </div>

            {/* Visual Architecture Flow Diagram */}
            <div className="mt-14 grid gap-6 md:grid-cols-4 relative">
              {cloudArchitectureLayers.map((layer) => (
                <div
                  key={layer.step}
                  className="relative flex flex-col justify-between rounded-2xl border border-stone-300 bg-white p-6 shadow-sm db-card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 font-mono text-xs font-bold text-amber-900">
                        {layer.step}
                      </span>
                      <span className="section-kicker text-stone-400">
                        Layer
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-stone-900 leading-snug">
                      {layer.layer}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600">
                      {layer.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-stone-200 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {layer.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-amber-50 border border-amber-200/60 px-2.5 py-1 text-xs font-semibold text-amber-900"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cloud Technologies Summary */}
            <div className="mt-12 rounded-2xl border border-stone-300 bg-white p-8 db-card-shadow">
              <h3 className="section-kicker text-amber-800">
                Cloud Platforms &amp; Persistence Technologies
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="border-l-2 border-amber-600 pl-4">
                  <h4 className="text-sm font-bold text-stone-900">Google Cloud Platform</h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Vertex AI APIs, Multimodal RAG pipelines, Cloud Storage document ingestion, and cloud-hosted application deployments.
                  </p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <h4 className="text-sm font-bold text-stone-900">AWS Educate &amp; Cloud Storage</h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    S3 object storage architectures, bucket lifecycle configurations, data persistence, and Generative AI cloud training.
                  </p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <h4 className="text-sm font-bold text-stone-900">Database Orchestration</h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    MySQL transactional databases, MongoDB document clusters, Supabase and Firebase real-time integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            DATABASE & CLOUD PROJECTS SECTION (With Full-Card Click Affordance)
            ==================================================================== */}
        <section id="projects" className="px-5 py-20 md:px-12 lg:px-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-amber-800">04 / Deliverables</p>
                <h2 className="display-title text-stone-900">
                  Data
                  <br />
                  <span className="text-amber-700">Projects</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-5xl">Pipelines</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-stone-600 leading-relaxed">
                Data-centric deliverables highlighting relational schema modeling, sensor data pipelines,
                cloud-backed document ingestion, and analytical feature warehouses.
              </p>
            </div>

            {/* Projects Grid with Whole-Card Click Targets */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {dbProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-stone-300 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-700/60 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Whole-Card Click Target */}
                  <a
                    href={project.githubUrl || contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700"
                    aria-label={`Explore repository and schema for ${project.title}`}
                  />

                  <div>
                    {/* Top Row: Category tag and github link */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-lg bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900">
                        {project.category}
                      </span>
                      {project.githubUrl && (
                        <span className="relative z-20 rounded-lg border border-stone-300 p-2 text-stone-600 transition group-hover:border-amber-700 group-hover:bg-stone-50 group-hover:text-stone-900">
                          <Github className="h-4 w-4" />
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-black tracking-tight text-stone-900 group-hover:text-amber-800 transition">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-5 space-y-2 border-t border-stone-200 pt-4">
                      <p className="section-kicker text-stone-500">
                        Database &amp; Architecture Highlights:
                      </p>
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech tags and action */}
                  <div className="mt-6 border-t border-stone-200 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-800 transition group-hover:text-amber-900">
                        Explore Repository &amp; Schema <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            DATABASE & CLOUD CERTIFICATIONS
            ==================================================================== */}
        <section id="certifications" className="px-5 py-20 md:px-12 lg:px-20 border-t border-stone-300/80 bg-[#fbf9f5] overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="section-kicker text-amber-800">05 / Accreditations</p>
                <h2 className="display-title text-stone-900">
                  Cloud
                  <br />
                  <span className="text-amber-700">Badges</span>
                </h2>
                {/* Non-overlapping subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-px w-16 bg-amber-700" />
                  <p className="signature text-4xl text-amber-700 md:text-5xl">Credentials</p>
                </div>
              </div>
              <p className="max-w-md text-sm text-stone-600 leading-relaxed">
                Official certifications and skill badges achieved across MongoDB, AWS Educate, and Google Cloud.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dbCertifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col justify-between rounded-2xl border border-stone-300 bg-white p-6 shadow-sm db-card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900">
                        {cert.issuer}
                      </span>
                      <Award className="h-4 w-4 text-amber-700" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-stone-900 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-stone-200 pt-3 text-xs font-semibold text-amber-800">
                    {cert.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            DATABASE & CLOUD CTA SECTION
            ==================================================================== */}
        <section id="contact" className="px-5 py-24 md:px-12 lg:px-20 border-t border-stone-300 overflow-hidden">
          <div className="mx-auto max-w-5xl rounded-3xl border border-stone-300 bg-white p-8 md:p-16 shadow-xl text-center db-card-shadow">
            <p className="section-kicker text-amber-800 mb-4">06 / Connect &amp; Architect</p>

            <h2 className="display-title text-stone-900">
              Let&apos;s Build
            </h2>
            {/* Non-overlapping subtitle */}
            <div className="mt-2 flex items-center justify-center gap-4 md:mt-3">
              <span className="h-px w-20 bg-amber-700" />
              <p className="signature text-4xl text-amber-700 md:text-6xl">Together</p>
              <span className="h-px w-20 bg-amber-700" />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-sm md:text-base leading-relaxed text-stone-600">
              Available for database modeling, SQL optimization, cloud storage pipelines,
              and full-stack engineering collaborations.
            </p>

            {/* Direct contact link row */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-amber-100 shadow-md transition hover:bg-stone-800 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4 text-amber-700" />
                GitHub
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4 text-amber-700" />
                LinkedIn
              </a>
              <a
                href={contactDetails.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-700/30 bg-amber-50 px-6 py-3.5 text-xs sm:text-sm font-bold text-amber-900 transition hover:bg-amber-100 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="mt-10 border-t border-stone-200 pt-8 flex flex-wrap justify-center gap-8 text-xs sm:text-sm text-stone-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-amber-700" /> {contactDetails.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-amber-700" /> {contactDetails.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-amber-700" /> {contactDetails.location}
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-300 bg-[#ede8df] px-5 py-8 md:px-12">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-600">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© {new Date().getFullYear()} Saumitra Misra. All rights reserved.</p>
              <span className="hidden sm:inline">•</span>
              <p>Governed by IT Act, 2000 (India)</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-stone-700 font-semibold">
              <Link href="/privacy" className="hover:text-amber-800 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-amber-800 transition">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-amber-800 transition">
                Cookies
              </Link>
              <Link href="/refunds" className="hover:text-amber-800 transition">
                Refunds
              </Link>
              <span className="text-stone-400">|</span>
              <Link href="/" className="hover:text-amber-800 transition">
                Creative
              </Link>
              <Link href="/development" className="hover:text-amber-800 transition">
                Software &amp; AI
              </Link>
              <Link href="/projects" className="hover:text-amber-800 transition">
                Archive
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
