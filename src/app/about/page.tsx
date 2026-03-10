import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SraSphere vision, mission, and roadmap.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">About SraSphere</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          We are a product-focused software house building scalable platforms for businesses that need reliability,
          speed, and long-term technology direction.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6">
        <FadeIn>
          <Card
            title="Vision"
            description="To become a long-term technology partner helping businesses run on intelligent, scalable digital ecosystems."
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Card
            title="Mission"
            description="Design secure, modern, and adaptable software systems that solve real operational bottlenecks and support sustained growth."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card
            title="Founder Story"
            description="SraSphere started with a simple belief: businesses deserve software that evolves with them. What began as custom platform delivery grew into a roadmap of reusable SaaS capabilities for multiple industries."
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <Card
            title="Future Roadmap"
            description="Our next phase includes deeper AI-assisted automation, stronger analytics tooling, and expansion of productized cloud modules for enterprise-grade deployments."
          />
        </FadeIn>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <FadeIn className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2024</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Established SraSphere delivery framework with focus on SaaS and operational automation.
          </p>
        </FadeIn>
        <FadeIn delay={0.05} className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2025</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Expanded into cloud-native multi-tenant systems and reusable product modules for faster deployments.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2026+</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Roadmap includes AI-enabled workflows, deeper analytics intelligence, and global delivery partnerships.
          </p>
        </FadeIn>
      </section>

      <FadeIn className="mt-12 rounded-3xl border border-slate-200/80 bg-slate-900 p-8 text-slate-100 dark:border-slate-700">
        <p className="text-sm uppercase tracking-[0.16em] text-fuchsia-300">Work With Us</p>
        <h2 className="mt-3 text-3xl font-semibold">Looking for a long-term software partner?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          We help teams launch faster, reduce technical risk, and operate mission-critical products with confidence.
        </p>
        <div className="mt-6">
          <ButtonLink href="/contact">Book a Strategy Call</ButtonLink>
        </div>
      </FadeIn>
    </div>
  );
}
