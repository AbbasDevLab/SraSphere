import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Home",
  description: "SraSphere builds modern SaaS and cloud software ecosystems.",
};

const offerings = [
  {
    title: "SaaS Platforms",
    description:
      "End-to-end product engineering for high-growth SaaS products with resilient architecture and maintainable code.",
  },
  {
    title: "Business Automation",
    description:
      "Workflow systems that remove repetitive operations and connect teams, data, and decision points in real time.",
  },
  {
    title: "Secure Cloud Systems",
    description:
      "Cloud-native solutions designed for observability, security controls, and long-term scale.",
  },
];

const highlights = [
  "Scalable Architecture",
  "Security-First Approach",
  "Modern Tech Stack",
  "Long-Term Product Vision",
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Powering Intelligent Digital Ecosystems
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We build scalable SaaS platforms, automation systems, and secure cloud solutions for modern businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/products">Explore Products</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-900/20">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Featured Product</p>
            <h2 className="mt-2 text-2xl font-semibold">SraSphere Orbit Suite</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              A modular SaaS operating layer for sales, operations, and automated growth workflows.
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <div className="h-2 w-24 rounded bg-white/80" />
              <div className="mt-3 h-2 w-full rounded bg-white/40" />
              <div className="mt-2 h-2 w-4/5 rounded bg-white/30" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg bg-white/20" />
                <div className="h-14 rounded-lg bg-white/20" />
                <div className="h-14 rounded-lg bg-white/20" />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Core Offerings</h2>
        </FadeIn>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {offerings.map((offering, index) => (
            <FadeIn key={offering.title} delay={0.05 * index}>
              <Card title={offering.title} description={offering.description} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Why Choose SraSphere</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <FadeIn
              key={item}
              delay={0.04 * index}
              className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-12">
        <FadeIn className="rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Build with confidence
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            Ready to launch your next software ecosystem?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Partner with SraSphere to ship resilient digital products that support your growth for years, not months.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/solutions" variant="secondary">
              View Solutions
            </ButtonLink>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
