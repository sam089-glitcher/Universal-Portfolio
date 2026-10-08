"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("sm_cookie_consent");
      if (!consent) {
        // Small delay so page loads smoothly before showing banner
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access fallback
      setVisible(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("sm_cookie_consent", "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("sm_cookie_consent", "declined");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          role="region"
          aria-label="Cookie and privacy consent notice"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#0a0c12]/95 p-5 shadow-2xl backdrop-blur-2xl text-cream"
        >
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lime">
              <Cookie className="h-5 w-5" />
            </div>

            <div className="flex-1 pr-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold tracking-tight text-white">
                  Privacy &amp; Cookie Notice
                </h3>
                <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> GDPR &amp; IT Act
                </span>
              </div>

              <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                This portfolio uses essential cookies and local storage to remember your visual preferences
                and verify performance. We do not sell personal data or track you across third-party websites.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/privacy"
                  className="text-zinc-400 underline underline-offset-4 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
                <span className="text-zinc-600">•</span>
                <Link
                  href="/cookies"
                  className="text-zinc-400 underline underline-offset-4 hover:text-white transition"
                >
                  Cookie Policy
                </Link>
                <span className="text-zinc-600">•</span>
                <Link
                  href="/terms"
                  className="text-zinc-400 underline underline-offset-4 hover:text-white transition"
                >
                  Terms &amp; Conditions
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="rounded-xl bg-lime px-4 py-2 text-xs font-bold text-black transition hover:bg-lime/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Essential Only
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDecline}
              aria-label="Dismiss cookie notice"
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
