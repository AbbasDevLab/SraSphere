import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore selected project work and concept demonstrations from SraSphere across business software, visitor management and e-commerce.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Our work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Thoughtful solutions for real business challenges.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A selection of project work and concept demonstrations that show how digital products can make everyday
            tasks clearer.
          </p>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[#0B1320] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.36),transparent_48%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#0B1320]/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-200">
                    Illustrative visual
                  </span>
                  <div className="relative w-full max-w-[290px] rounded-xl border border-white/15 bg-slate-900/80 p-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="h-2 w-24 rounded bg-white/40" />
                      <span className="rounded-full bg-blue-400/20 px-2 py-1 text-[9px] text-blue-200">
                        {index === 2 ? "CONCEPT" : "PROJECT"}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => <div key={item} className="h-8 rounded-md bg-white/[0.06]" />)}
                    </div>
                    <div className="mt-3 flex h-16 items-end gap-2 rounded-lg bg-white/[0.04] px-4 pt-3">
                      {[38, 63, 48, 82, 57, 91].map((height, bar) => (
                        <div key={bar} style={{ height: `${height}%` }} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300/80" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{project.type}</p>
                  <h2 className="mt-2 text-xl font-semibold">{project.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    View project <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                  <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
                    Portfolio example · No client outcome or performance result is implied.
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-5 text-slate-500">
            Selected work includes academic, internal and concept projects. Concept demonstrations are labelled and are
            not represented as completed client engagements.
          </p>
        </div>
      </section>
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#E6F0FF] p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Have a business challenge to solve?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Let&apos;s explore the right solution together.</p>
          </div>
          <ButtonLink href="/contact" className="gap-2">
            Discuss your project <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
