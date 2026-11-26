"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <nav aria-label="Main navigation" className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
      {siteConfig.navItems.map((item) => {
        const isCurrent =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
              isCurrent
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="SraSphere home" className="inline-flex shrink-0">
          <BrandLogo variant="compact" />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navLinks}
          <ButtonLink href="/contact" className="h-10 gap-2 px-5">
            Let&apos;s Talk <ArrowRight aria-hidden="true" size={15} />
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-800 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
              {navLinks}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Let&apos;s Talk <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
