import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectMockup } from "@/components/visuals/project-mockup";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${project.categoryLabel}`,
    description: project.cardDescription,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const categoryLabels: Record<string, string> = {
  access360: "Academic project",
  dahera: "Concept retail build",
  "business-management-system": "Internal concept",
};

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const nextProject =
    projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 bg-hero-grid">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(115,213,233,0.12),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-100 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Our Work
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {project.reference} — {project.categoryLabel}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">
              {project.cardDescription}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-navy-100">
                {categoryLabels[project.slug]}
              </span>
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-navy-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mockup */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-navy-900/10 sm:aspect-[16/7]"
              style={{
                background: `linear-gradient(135deg, ${project.mockup.accent}22, #101827 60%)`,
              }}
              role="img"
              aria-label={`Abstract interface illustration for ${project.title}`}
            >
              <ProjectMockup type={project.mockup.type} accent={project.mockup.accent} />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Conceptual interface illustration — not a screenshot of a deployed system.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {[
                { title: "Overview", body: project.overview },
                { title: "The Business Challenge", body: project.challenge },
                { title: "The Proposed Solution", body: project.solution },
              ].map((block, index) => (
                <FadeIn key={block.title} delay={index * 0.05}>
                  <div>
                    <h2 className="text-2xl font-semibold text-navy-900">{block.title}</h2>
                    <p className="mt-4 leading-relaxed text-slate-600">{block.body}</p>
                  </div>
                </FadeIn>
              ))}

              <FadeIn>
                <div>
                  <h2 className="text-2xl font-semibold text-navy-900">Features</h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-navy-900/10 bg-white p-4 text-sm leading-relaxed text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="rounded-2xl bg-cloud p-8">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-navy-900">
                    <Layers className="h-5 w-5 text-cyan-600" />
                    Technology Stack
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-navy-900/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn>
                <div>
                  <h2 className="text-2xl font-semibold text-navy-900">Outcomes</h2>
                  <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-800">
                    {project.outcomeNote}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar CTA */}
            <aside>
              <FadeIn delay={0.1} className="lg:sticky lg:top-28">
                <div className="rounded-2xl bg-navy-900 p-7">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Need something similar?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100">
                    Whether it is a management system, an online store or a custom platform, we would
                    be glad to discuss your version of this problem.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-navy-900 transition hover:bg-cyan-200"
                  >
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-navy-900/10 bg-cloud py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Next project
            </p>
            <p className="mt-2 text-2xl font-semibold text-navy-900">{nextProject.title}</p>
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 text-sm font-semibold text-navy-900 transition hover:border-cyan-300/60"
          >
            View {nextProject.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
