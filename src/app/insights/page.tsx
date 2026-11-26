import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives from SraSphere on website development, business technology, digital growth, e-commerce and automation.",
};

const categories = [
  "Website Development",
  "Business Technology",
  "Digital Growth",
  "E-commerce",
  "Automation",
  "Digital Transformation",
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Insights</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Perspectives on technology and business.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Practical thinking on digital presence, automation and technology decisions for growing businesses.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
                {category}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-600">
            Straightforward perspectives and practical starting points for making technology work better in your business.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((article, index) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className={`relative flex h-44 items-center justify-center overflow-hidden ${index % 2 === 0 ? "bg-[#0B1320]" : "bg-[#132b4b]"}`}>
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.45),transparent_48%)]" />
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-blue-100 backdrop-blur">
                    <BookOpen aria-hidden="true" size={26} />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#0B1320]/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-200">
                    SraSphere insights
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{article.category}</p>
                  <h2 className="mt-3 text-lg font-semibold leading-snug">{article.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.description}</p>
                  <span className="mt-5 inline-flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    {article.readingTime}
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-700">
                      Read article <ArrowRight aria-hidden="true" size={14} className="transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#E6F0FF] p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Want to discuss a topic for your business?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">We&apos;re happy to talk through the challenge with you.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
            Get in touch <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
