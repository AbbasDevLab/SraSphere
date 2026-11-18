import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Package, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services | Web, E-commerce, Software & Automation",
  description:
    "Digital experiences, business solutions, software engineering and digital intelligence. Explore how SraSphere helps businesses build, streamline and grow with technology.",
  alternates: { canonical: "/services" },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: serviceCategories.map((category, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: category.title,
      description: category.shortDescription,
      provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <PageHeader
        eyebrow="Services"
        title="Technology Services Built Around Business Outcomes."
        description="Four practices, one team. Whether you need a website, an operational system or intelligent automation, we start with the business problem and work backwards to the right solution."
      />

      {/* Jump links */}
      <div className="border-b border-navy-900/10 bg-cloud">
        <nav
          aria-label="Service categories"
          className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8"
        >
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-cyan-300/60 hover:text-cyan-700"
            >
              {category.number} · {category.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 py-16 lg:py-20 ${index > 0 ? "border-t border-navy-900/10" : ""}`}
          >
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <FadeIn>
                <div className="lg:sticky lg:top-28">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-cyan-300">
                    <category.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 font-heading text-sm font-bold tracking-widest text-cyan-600">
                    {category.number}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-navy-900">{category.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-600">{category.longDescription}</p>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-700"
                    >
                      Request a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.05}>
                  <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
                    <h3 className="flex items-center gap-2 font-semibold text-navy-900">
                      <Target className="h-5 w-5 text-cyan-600" />
                      Business problems it solves
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {category.businessProblems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
                    <h3 className="flex items-center gap-2 font-semibold text-navy-900">
                      <Package className="h-5 w-5 text-cyan-600" />
                      What you get
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {category.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FadeIn delay={0.15}>
                    <div className="h-full rounded-2xl border border-navy-900/10 bg-cloud p-7">
                      <h3 className="flex items-center gap-2 font-semibold text-navy-900">
                        <Users className="h-5 w-5 text-cyan-600" />
                        Who it&apos;s for
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.whoNeedsIt}</p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="h-full rounded-2xl border border-navy-900/10 bg-cloud p-7">
                      <h3 className="font-semibold text-navy-900">Included services</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {category.services.map((service) => (
                          <li
                            key={service}
                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-900/10"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy-900 bg-hero-grid py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              dark
              align="center"
              title="Not Sure Which Service Fits?"
              description="Describe your challenge in a few sentences. We'll tell you honestly what kind of solution it needs — even if it's simpler than you expect."
            />
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-8 text-sm font-semibold text-navy-900 transition-all hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/25"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
