import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, ShieldAlert, Copyright, CheckCircle2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Terms & Conditions | Saumitra Misra",
  description: "Terms and conditions, copyright protections, transparent claims, and legal disclaimers for Saumitra Misra's portfolio.",
};

export default function TermsPage() {
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
              <span className="rounded-full bg-blue-950/80 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-300 flex items-center gap-1.5">
                <Scale className="h-3.5 w-3.5" /> Legal Terms &amp; Intellectual Property
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Rules, intellectual property rights, and terms of service governing the use of this website
              and professional visual design or software engineering engagements.
            </p>
          </div>

          {/* Quick Tabs to Other Policies */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="text-zinc-500 mr-1">Legal Hub:</span>
            <Link href="/privacy" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="rounded-lg bg-lime text-black px-3 py-1">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Cookie Policy
            </Link>
            <Link href="/refunds" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Refund Policy
            </Link>
          </div>

          {/* Body Sections */}
          <div className="mt-12 space-y-12 text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
            {/* 1. Acceptance of Terms */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-lime" />
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or browsing this website (<strong className="text-white">saumitra-misra.vercel.app</strong> or affiliated domains),
                you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions.
                If you do not agree, you should discontinue using the site.
              </p>
            </section>

            {/* 2. Copyright & Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Copyright className="h-5 w-5 text-lime" />
                2. Copyright &amp; Intellectual Property Rights
              </h2>
              <p>
                All materials published across this portfolio are protected by copyright, trade dress, and intellectual property laws:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Visual Design &amp; Artwork:</strong> Poster art (including &quot;The Door To Heaven&quot;, &quot;GOD&quot;, &quot;Sukoon&quot;, and campaign posters), visual identities, editorial layouts, streetwear mockups, and graphic concepts are the intellectual property of <strong className="text-white">Saumitra Misra</strong>. Reproduction, scraping, commercial distribution, or unauthorized reuse without written permission is strictly prohibited.
                </li>
                <li>
                  <strong className="text-white">Source Code &amp; Software:</strong> Public software demonstrations and GitHub repositories linked from this site are subject to the specific open-source licenses (such as MIT or Apache 2.0) specified in their respective repositories.
                </li>
                <li>
                  <strong className="text-white">Third-Party Trademarks:</strong> Logos or trademarks of third parties (e.g., Google Cloud, AWS, MongoDB, Canva, Figma) displayed on this site belong to their respective owners and are used strictly for nominative reference to indicate verified certifications and technical tooling proficiencies.
                </li>
              </ul>
            </section>

            {/* 3. Authentic Claims & Transparent Representation */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-lime" />
                3. Authentic Claims, Credentials &amp; Zero Fake Reviews
              </h2>
              <p>
                In compliance with truth-in-advertising guidelines and digital ethics:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Academic Status:</strong> All academic references transparently state undergraduate B.Tech CSE enrollment at <strong className="text-white">GLA University, Mathura (2023 - 2027)</strong>.
                </li>
                <li>
                  <strong className="text-white">Verified Credentials:</strong> Certification badges (MongoDB, AWS Educate, Google Cloud) represent legitimate, earned accreditations verifiable on official badge registries.
                </li>
                <li>
                  <strong className="text-white">Zero Fabricated Testimonials:</strong> We do not publish fabricated reviews, paid celebrity endorsements, or synthetic client testimonials. Project outcomes reflect actual design explorations and prototype benchmarks.
                </li>
              </ul>
            </section>

            {/* 4. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <ShieldAlert className="h-5 w-5 text-lime" />
                4. Disclaimers &amp; Limitation of Liability
              </h2>
              <p className="text-sm">
                This portfolio is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind.
                While we strive for 100% uptime and accessibility compliance, Saumitra Misra shall not be liable for any indirect,
                incidental, or consequential damages resulting from site access, external link navigation, or reliance on technical snippets.
              </p>
            </section>

            {/* 5. Governing Law */}
            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Scale className="h-5 w-5 text-lime" />
                5. Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-sm">
                These Terms shall be construed and governed in accordance with the laws of <strong className="text-white">India</strong> and the
                <strong className="text-white"> Information Technology Act, 2000</strong>. Any dispute arising in connection with these terms
                shall be subject to the exclusive jurisdiction of the competent courts in Uttar Pradesh, India.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
