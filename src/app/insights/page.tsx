import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Perspectives on Technology and Business",
  description:
    "Editorial perspectives from SraSphere on digital presence, business automation, e-commerce platforms and practical technology adoption for growing businesses.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on Technology and Business."
        description="Practical thinking on digital presence, automation and technology decisions for growing businesses."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-800">
              These are editorial previews of upcoming articles. Full articles will be published here
              soon — subscribe to our newsletter or follow our social channels for launch updates.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.map((insight, index) => (
              <FadeIn key={insight.slug} delay={index * 0.07}>
                <article
                  id={insight.slug}
                  className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      {insight.topic}
                    </p>
                    <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                      Coming soon
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug text-navy-900">
                    {insight.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{insight.description}</p>
                  <p className="mt-auto pt-5 text-xs text-slate-400">{insight.readTime}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 rounded-2xl bg-navy-900 p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-white">
                  Want to talk about the topic instead of reading about it?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  If any of these subjects touch a challenge your business is facing right now, we are
                  happy to discuss it directly.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-navy-900 transition hover:bg-cyan-200"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
