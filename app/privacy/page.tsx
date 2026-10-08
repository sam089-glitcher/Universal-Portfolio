import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Database, Eye, Globe2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Privacy Policy | Saumitra Misra",
  description: "Privacy policy, data protection standards, and third-party disclosure for Saumitra Misra's portfolio.",
};

export default function PrivacyPage() {
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
              <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Compliance &amp; Transparency
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
              This privacy policy explains how personal information is handled when you browse this portfolio,
              submit an inquiry, or interact with technical demonstrations.
            </p>
          </div>

          {/* Quick Tabs to Other Policies */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="text-zinc-500 mr-1">Legal Hub:</span>
            <Link href="/privacy" className="rounded-lg bg-lime text-black px-3 py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
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
            {/* 1. What data is collected */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Database className="h-5 w-5 text-lime" />
                1. Information We Collect
              </h2>
              <p>
                We believe in absolute data minimization. This portfolio is primarily an informational and creative showcase.
                We only collect data that you voluntarily provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Direct Communication:</strong> If you reach out via email, phone, or contact forms,
                  we collect your name, email address, message contents, and project brief details to respond to your inquiry.
                </li>
                <li>
                  <strong className="text-white">Technical Device Data:</strong> Standard HTTP request data automatically processed by our hosting provider (Vercel), such as IP address, browser user-agent, operating system, and request timestamps, used strictly for system telemetry, security diagnostics, and CDN optimization.
                </li>
                <li>
                  <strong className="text-white">Local Preference State:</strong> Client-side storage (such as localStorage) used to store your cookie consent choice and interactive turntable or theme states.
                </li>
              </ul>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm text-zinc-300">
                <strong className="text-white">Zero Data Selling:</strong> We do not sell, rent, monetize, or trade your personal information with data brokers or marketing aggregators under any circumstances.
              </div>
            </section>

            {/* 2. Third-Party Embeds & Services */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Globe2 className="h-5 w-5 text-lime" />
                2. Third-Party Services &amp; Embeds
              </h2>
              <p>
                To provide high performance, modern typography, and global availability, this portfolio interfaces with trusted service providers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Vercel Inc.:</strong> Hosting, edge CDN delivery, and serverless compute infrastructure.
                </li>
                <li>
                  <strong className="text-white">Google Fonts &amp; Cloudflare CDN:</strong> Web typography delivery and asset caching.
                </li>
                <li>
                  <strong className="text-white">GitHub:</strong> External links to public open-source project repositories and architecture code.
                </li>
                <li>
                  <strong className="text-white">Social Media Links:</strong> Outbound links to Instagram and LinkedIn profiles. Clicking these external links connects you directly to the respective third-party platforms governed by their own privacy policies.
                </li>
              </ul>
            </section>

            {/* 3. Consent & Control */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Lock className="h-5 w-5 text-lime" />
                3. Your Rights &amp; Consent
              </h2>
              <p>
                You retain complete control over your personal communication records:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Right of Access &amp; Rectification:</strong> You may request a copy of any correspondence you have sent or ask for corrections.
                </li>
                <li>
                  <strong className="text-white">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may email us at any time requesting the deletion of prior emails or project discussions.
                </li>
                <li>
                  <strong className="text-white">Cookie Revocation:</strong> You can clear your browser cookies or localStorage cache at any moment to reset your consent preferences.
                </li>
              </ul>
            </section>

            {/* 4. Applicable Local & International Laws */}
            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-lime" />
                4. Applicable Laws &amp; Jurisdiction
              </h2>
              <p className="text-sm">
                This website is operated by Saumitra Misra from India. Information practices comply with the
                <strong className="text-white"> Information Technology Act, 2000</strong> of India, the
                <strong className="text-white"> Digital Personal Data Protection Act (DPDP)</strong>, and observe core principles of the EU General Data Protection Regulation (GDPR) for international visitors.
              </p>
              <p className="text-sm">
                For privacy inquiries or data removal requests, contact directly at:
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
