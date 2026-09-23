"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, FileText, Sparkles, Code2, Database } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  projectPage?: boolean;
};

const navItems = [
  { label: "Creative", href: "/", icon: Sparkles },
  { label: "Software & AI", href: "/development", icon: Code2 },
  { label: "Database & Cloud", href: "/database-cloud", icon: Database },
  { label: "Projects", href: "/projects", icon: ArrowUpRight },
];

export function SiteNav({ projectPage = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const getActiveStyles = (href: string) => {
    if (href === "/") {
      return "text-lime bg-lime/10 border-lime/30 shadow-[0_0_15px_rgba(201,242,43,0.22)]";
    }
    if (href === "/development") {
      return "text-rose-400 bg-rose-950/60 border-rose-500/40 shadow-[0_0_15px_rgba(225,29,72,0.3)]";
    }
    if (href === "/database-cloud") {
      return "text-amber-200 bg-amber-950/60 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]";
    }
    if (href === "/projects") {
      return "text-cyan-300 bg-cyan-950/60 border-cyan-500/40 shadow-[0_0_15px_rgba(125,246,255,0.25)]";
    }
    return "text-foreground bg-white/10 border-white/20";
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1160px,calc(100%-2rem))] -translate-x-1/2 rounded-xl border border-white/10 bg-[#080806]/85 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link href="/" aria-label="Saumitra Misra home" className="group flex items-center gap-2">
          <Image
            src="/Assets/Saumitra.png"
            alt="Saumitra"
            width={118}
            height={54}
            priority
            className="h-auto w-24 sm:w-28 transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1.5 font-bebas text-[1.1rem] tracking-[0.06em] md:flex">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg border border-transparent px-3.5 py-1.5 transition-all duration-200",
                  active
                    ? cn(getActiveStyles(item.href), "font-black")
                    : "text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mx-1 h-4 w-px bg-white/15" />

          <Link
            href="#contact"
            className="rounded-lg border border-white/10 px-3.5 py-1.5 text-muted-foreground transition hover:border-white/25 hover:bg-white/5 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Quick Action: Resume Download Button (Desktop) */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/Assets/Saumitra Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 font-bebas text-[1.02rem] tracking-[0.08em] text-cream transition hover:border-white/30 hover:bg-white/10"
          >
            <FileText className="h-3.5 w-3.5 text-lime" />
            Resume
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="h-9 w-9 px-0 border-white/15 bg-white/5 text-foreground hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          variant="outline"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={cn(
          "grid transition-all duration-300 ease-in-out md:hidden",
          open ? "grid-rows-[1fr] pt-3 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-1.5 rounded-lg border border-white/10 bg-[#0e0f14]/95 p-3 backdrop-blur-2xl">
            <p className="px-2 py-1 font-bebas text-[0.85rem] tracking-[0.14em] text-muted-foreground">
              Portfolio Profiles
            </p>
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2.5 font-bebas text-[1.15rem] tracking-[0.06em] transition",
                    active
                      ? cn(getActiveStyles(item.href), "font-black")
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                  )}
                </Link>
              );
            })}

            <div className="my-1 border-t border-white/10" />

            <div className="grid grid-cols-2 gap-2 pt-1 font-bebas text-[1.05rem] tracking-[0.06em]">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 py-2 text-center text-cream hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="/Assets/Saumitra Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-md border border-lime/30 bg-lime/10 py-2 text-center text-lime hover:bg-lime/20"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
