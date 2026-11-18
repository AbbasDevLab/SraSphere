"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-navy-900/10" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link
          href="/"
          aria-label="SraSphere home"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
        >
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
                  active ? "text-navy-900" : "text-slate-600 hover:text-navy-900",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-indicator"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan-500"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-10 items-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 transition hover:bg-navy-50 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: "auto" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: "auto" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-navy-900/10 bg-white md:hidden"
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-medium",
                    pathname === item.href
                      ? "bg-navy-50 text-navy-900"
                      : "text-slate-600 hover:bg-navy-50 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex h-11 items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
