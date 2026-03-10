import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Industry-focused digital solutions by SraSphere.",
};

const industries = [
  {
    title: "Retail",
    description: "Unified systems for inventory, customer workflows, and branch-level performance visibility.",
    impact: "Reduced stockouts by 31% with real-time syncing.",
  },
  {
    title: "Education",
    description: "Secure digital platforms for enrollment, communication, and academic operations.",
    impact: "Cut manual admin work by 42% across departments.",
  },
  {
    title: "Service Businesses",
    description: "Automation pipelines for scheduling, billing, customer relationship workflows, and reporting.",
    impact: "Improved booking-to-payment cycle by 2.3x.",
  },
  {
    title: "Enterprises",
    description: "Scalable cloud infrastructure and process orchestration for cross-functional teams.",
    impact: "Enabled high-availability workloads at enterprise scale.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Solutions</h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          SraSphere designs adaptable platforms tailored to each industry&apos;s operational realities.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {industries.map((industry, index) => (
          <FadeIn key={industry.title} delay={index * 0.05}>
            <Card title={industry.title} description={industry.description}>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">{industry.impact}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <section className="mt-14">
        <FadeIn className="rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">Delivery Model</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            Industry playbooks, adapted to your workflows
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            We combine reusable accelerators with custom engineering to deliver faster outcomes without forcing generic
            templates into your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Discuss Your Industry Use Case</ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Explore Product Modules
            </ButtonLink>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
