import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Subscribe to product updates</p>
          <form className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full rounded-full border border-slate-300 bg-white px-4 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            />
            <button
              type="button"
              className="h-10 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} {siteConfig.name}. Built for long-term digital ecosystems.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {siteConfig.legalItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
