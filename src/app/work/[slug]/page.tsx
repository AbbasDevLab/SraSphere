import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/lib/content";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#0B1320] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft aria-hidden="true" size={15} /> All work
          </Link>
        </div>
      </section>
      <section className="bg-[#0B1320] px-4 pb-14 text-white sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">{project.type}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{project.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{project.description}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-300">
              <Check aria-hidden="true" size={14} className="text-blue-300" />
              Portfolio example — no client results are implied
            </p>
          </div>
          <div
            role="img"
            aria-label={`Conceptual interface visual for ${project.name}`}
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-[#12284a] to-blue-900 p-6"
          >
            <div aria-hidden="true" className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-blue-200/15" />
            <div className="relative w-full max-w-[390px] rounded-xl border border-white/15 bg-slate-900/80 p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="h-2 w-24 rounded bg-white/40" />
                <span className="h-5 w-5 rounded-full bg-blue-300/40" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {project.focusAreas.map((area) => (
                  <div key={area} className="rounded-lg bg-white/[0.06] p-2.5">
                    <span className="block h-1.5 w-8 rounded bg-blue-200/60" />
                    <span className="mt-3 block text-[9px] leading-4 text-slate-300">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex h-20 items-end gap-2 rounded-lg bg-white/[0.04] px-4 pt-3">
                {[38, 63, 48, 82, 57, 91, 69, 84].map((height, index) => (
                  <div key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300/80" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="section-eyebrow">Project focus</p>
            <h2 className="mt-3 text-2xl font-semibold">What this work explores</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.focusAreas.map((area) => (
                <li key={area} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl bg-[#E6F0FF] p-6">
            <h2 className="text-lg font-semibold">Project context</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              This portfolio entry describes the project focus and design direction. It does not claim a particular
              customer, commercial outcome, performance result or technology stack.
            </p>
            <ButtonLink href="/contact" className="mt-6 gap-2">
              Discuss a similar project <ArrowRight aria-hidden="true" size={15} />
            </ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
