import type { Metadata } from "next";
import { ArrowRight, Cloud, Code2, Globe2, ShoppingBag, Smartphone, Workflow } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/lib/content";

const serviceIcons = {
  website: Globe2,
  ecommerce: ShoppingBag,
  automation: Workflow,
  mobile: Smartphone,
  custom: Code2,
  cloud: Cloud,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore website development, e-commerce, business automation, mobile apps, custom software and cloud technology services from SraSphere.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The right digital solution for your next step.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Practical technology services to help your business build a stronger digital presence and work more
            efficiently.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article key={service.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-400">{service.number}</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  Explore service <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#E6F0FF] p-7 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Not sure what your business needs?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              Tell us what you are trying to solve. We&apos;ll help you explore a practical next step.
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0 gap-2">
            Discuss your project <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
