import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { BrandLogo } from "@/components/layout/brand-logo";

export function Footer() {
  return (
    <footer className="bg-[#0B1320] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href="/" aria-label="SraSphere home" className="block w-[164px]">
              <BrandLogo />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              A digital solutions studio helping businesses build a stronger digital presence and make technology work
              for them.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-4 space-y-3">
              {siteConfig.navItems.slice(1).map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-slate-300 transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Get in touch</h2>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              href={`mailto:${siteConfig.links.email}`}
            >
              {siteConfig.links.email} <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a
              className="mt-3 flex w-fit items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <div className="mt-6 flex gap-3 text-xs text-slate-400">
              {siteConfig.legalItems.slice(0, 2).map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Thoughtful technology for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
}
