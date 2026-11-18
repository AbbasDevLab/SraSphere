import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectMockup } from "@/components/visuals/project-mockup";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work | Case Studies & Demonstrations",
  description:
    "Selected SraSphere projects: a visitor management system, an e-commerce jewellery experience and a business management concept — each built around a real business problem.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Turning Ideas Into Practical Solutions."
        description="A selection of our academic, internal and concept work. Each project is presented honestly for what it is — a demonstration of how we approach real business problems."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-navy-900/10"
                    style={{
                      background: `linear-gradient(135deg, ${project.mockup.accent}22, #101827 60%)`,
                    }}
                  >
                    <ProjectMockup type={project.mockup.type} accent={project.mockup.accent} />
                    <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/15" />
                  </Link>
                </FadeIn>

                <FadeIn delay={0.08}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      {project.reference} — {project.categoryLabel}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-navy-900">{project.title}</h2>
                    <p className="mt-4 leading-relaxed text-slate-600">{project.cardDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                      {project.slug === "access360"
                        ? "Academic project"
                        : project.slug === "dahera"
                          ? "Concept retail build"
                          : "Internal concept"}
                    </p>
                    <div className="mt-7">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-700"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn className="mt-20 rounded-2xl bg-cloud p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <SectionHeading
                eyebrow="Your project next"
                title="Have a challenge like these?"
                description="Tell us about it. We will respond with an honest view of what the solution should look like."
              />
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-700"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
