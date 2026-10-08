import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle, FileCheck, HelpCircle } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Refund Policy | Saumitra Misra",
  description: "Refund policy, freelance commission milestones, and revision terms for Saumitra Misra's design services.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <SiteNav />
      <main className="deck-dark min-h-screen text-cream pt-28 pb-20 px-5 md:px-12 lg:px-20 selection:bg-lime/20 selection:text-lime">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 hover:border-lime/40 hover:bg-lime/10 hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <span className="font-mono text-xs text-zinc-500">
              Last Updated: October 2026
            </span>
          </div>

          {/* Header */}
          <div className="border-b border-white/10 pb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full bg-purple-950/80 border border-purple-500/30 px-3 py-1 text-xs font-semibold text-purple-300 flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" /> Commission &amp; Service Terms
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              Refund Policy
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Transparent terms regarding deposits, milestones, revisions, and refunds for custom graphic design,
              UI prototyping, and freelance software engineering services.
            </p>
          </div>

          {/* Quick Tabs to Other Policies */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="text-zinc-500 mr-1">Legal Hub:</span>
            <Link href="/privacy" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Cookie Policy
            </Link>
            <Link href="/refunds" className="rounded-lg bg-lime text-black px-3 py-1">
              Refund Policy
            </Link>
          </div>

          {/* Body Sections */}
          <div className="mt-12 space-y-12 text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
            {/* 1. Nature of Services */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <FileCheck className="h-5 w-5 text-lime" />
                1. Nature of Custom Design &amp; Development Services
              </h2>
              <p>
                This portfolio showcases digital services, custom visual designs, and software engineering solutions.
                Because custom design work and code architecture involve dedicated labor and intellectual creation,
                we employ clear milestone-based agreements rather than automated one-click physical merchandise returns.
              </p>
            </section>

            {/* 2. Deposit & Milestone Policy */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-lime" />
                2. Project Deposits &amp; Cancellation Stages
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-bold text-white text-base">Prior to Project Kickoff</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    If a client requests cancellation before any design discovery, moodboards, concept sketching,
                    or development work has begun, the initial deposit is <strong className="text-emerald-300">100% refundable</strong> minus any transaction processing fees.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-bold text-white text-base">Active In-Progress Work</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Once initial draft concepts, mockups, or codebase repositories have been delivered,
                    the initial deposit becomes non-refundable to cover expended creative and engineering hours.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Revisions & Satisfaction Guarantee */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 text-lime" />
                3. Iterative Revisions &amp; Scope Adjustments
              </h2>
              <p>
                To guarantee client satisfaction without disputes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Included Revisions:</strong> Standard project proposals include 2 to 3 revision cycles where visual adjustments, color palette tuning, typography tweaks, or layout refinements are executed.
                </li>
                <li>
                  <strong className="text-white">Mutual Approval Gates:</strong> Deliverables require client approval at each milestone before proceeding to subsequent production phases.
                </li>
                <li>
                  <strong className="text-white">Final Handover:</strong> Upon final milestone sign-off and transfer of production-ready vector assets or source code, the project is deemed complete and non-refundable.
                </li>
              </ul>
            </section>

            {/* 4. Contact & Inquiries */}
            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <HelpCircle className="h-5 w-5 text-lime" />
                4. Questions Regarding Invoices or Commissions
              </h2>
              <p className="text-sm">
                For any questions about project scopes, invoices, or bespoke milestone structures, please reach out to:
                <br />
                <a href="mailto:saumitramisra95@gmail.com" className="text-lime font-mono text-sm underline underline-offset-4">
                  saumitramisra95@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
