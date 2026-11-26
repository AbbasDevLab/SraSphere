import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { insights } from "@/lib/content";

type InsightPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: InsightPageProps): Metadata {
  const article = insights.find((item) => item.slug === params.slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default function InsightArticlePage({ params }: InsightPageProps) {
  const article = insights.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = insights.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <article>
      <header className="bg-[#0B1320] px-4 pb-12 pt-8 text-white sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft aria-hidden="true" size={15} /> All insights
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
            <span>{article.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{article.description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <figure
          role="img"
          aria-label={`Illustration for ${article.category}`}
          className="relative flex aspect-[16/7] min-h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1320] via-[#12284a] to-blue-900"
        >
          <div aria-hidden="true" className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-blue-200/15" />
          <div aria-hidden="true" className="absolute -right-1 -top-10 h-56 w-56 rounded-full border border-cyan-100/10" />
          <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-blue-100 shadow-xl backdrop-blur">
            <BookOpen aria-hidden="true" size={27} />
          </div>
          <figcaption className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[0.16em] text-blue-100/80">
            {article.category}
          </figcaption>
        </figure>

        <div className="mx-auto mt-10 max-w-3xl">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-9">
              <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <div className="mt-12 rounded-2xl bg-[#E6F0FF] p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Have a question about this for your business?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Tell us what you&apos;re working through and we can discuss a practical next step.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
              Talk to SraSphere <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>

        <aside className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold">Related articles</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">{item.category}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600">
                  {item.readingTime} <ArrowRight aria-hidden="true" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
