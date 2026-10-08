import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, Settings, CheckCircle2, Sliders } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Cookie Policy | Saumitra Misra",
  description: "Cookie policy, local storage usage, and consent management for Saumitra Misra's portfolio.",
};

export default function CookiePolicyPage() {
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
              <span className="rounded-full bg-amber-950/80 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <Cookie className="h-3.5 w-3.5" /> Cookie &amp; Storage Transparency
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Understand how and why cookies and browser storage technologies are used on this portfolio.
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
            <Link href="/cookies" className="rounded-lg bg-lime text-black px-3 py-1">
              Cookie Policy
            </Link>
            <Link href="/refunds" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-zinc-300 hover:text-white transition">
              Refund Policy
            </Link>
          </div>

          {/* Body Sections */}
          <div className="mt-12 space-y-12 text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
            {/* 1. What are cookies */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Cookie className="h-5 w-5 text-lime" />
                1. What Are Cookies &amp; Local Storage?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device by websites you visit.
                Similar technologies include HTML5 Local Storage, which allows websites to store small amounts
                of preference data directly within your web browser.
              </p>
            </section>

            {/* 2. Cookies we use */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Settings className="h-5 w-5 text-lime" />
                2. Categories of Storage Used on This Site
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">Essential &amp; Preference Storage</h3>
                    <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-xs text-emerald-300">
                      Strictly Necessary
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Used to remember your cookie consent decisions (<code className="text-lime">sm_cookie_consent</code>)
                    and preserve interactive component settings so the notice does not continuously interrupt your browsing.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">Third-Party Tracking Cookies</h3>
                    <span className="rounded bg-rose-950/80 border border-rose-500/30 px-2 py-0.5 text-xs text-rose-300">
                      None
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    We do not deploy third-party advertising cookies, cross-site trackers, or behavioral profiling scripts.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Managing and Disabling Cookies */}
            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <Sliders className="h-5 w-5 text-lime" />
                3. How to Control or Delete Cookies
              </h2>
              <p>
                You can manage or delete cookies at any time via your browser settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                <li>
                  <strong className="text-white">Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data.
                </li>
                <li>
                  <strong className="text-white">Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.
                </li>
                <li>
                  <strong className="text-white">Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.
                </li>
              </ul>
              <p className="text-sm">
                If you have questions regarding this Cookie Policy, contact us at:
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
