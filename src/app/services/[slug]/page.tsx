import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/lib/content";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#0B1320] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft aria-hidden="true" size={15} /> All services
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Service {service.number}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{service.introduction}</p>
          <ButtonLink href="/contact" className="mt-8 gap-2">
            Discuss your project <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8 lg:py-20">
        <div className="space-y-14">
          <section>
            <p className="section-eyebrow">The challenge</p>
            <h2 className="mt-3 text-2xl font-semibold">What this service can help solve</h2>
            <ul className="mt-6 space-y-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  {problem}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-eyebrow">What we offer</p>
            <h2 className="mt-3 text-2xl font-semibold">A considered approach, shaped to your requirements.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="section-eyebrow">How we work</p>
            <h2 className="mt-3 text-2xl font-semibold">A clear path from idea to launch.</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Discover", "Understand your goals, users and constraints."],
                ["02", "Plan", "Agree on scope, priorities and a practical solution."],
                ["03", "Build", "Develop and refine the work with clear communication."],
                ["04", "Launch", "Test, release and hand over the agreed solution."],
              ].map(([number, title, description]) => (
                <li key={number} className="rounded-xl bg-[#F8FAFC] p-4">
                  <span className="text-xs font-bold tracking-widest text-blue-600">{number}</span>
                  <h3 className="mt-2 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="section-eyebrow">Common questions</p>
            <h2 className="mt-3 text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-slate-200">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="py-5">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Where it can fit</p>
          <h2 className="mt-3 text-xl font-semibold">Relevant applications</h2>
          <ul className="mt-4 space-y-3">
            {service.applications.map((application) => (
              <li key={application} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {application}
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-slate-200 pt-6">
            <h3 className="font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share what you&apos;re working towards and we can discuss the right next step.
            </p>
            <ButtonLink href="/contact" className="mt-5 w-full gap-2">
              Start a conversation <ArrowRight aria-hidden="true" size={15} />
            </ButtonLink>
          </div>
        </aside>
      </div>
    </>
  );
}
