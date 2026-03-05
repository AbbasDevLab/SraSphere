import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Industry-focused digital solutions by SraSphere.",
};

const industries = [
  {
    title: "Retail",
    description: "Unified systems for inventory, customer workflows, and branch-level performance visibility.",
  },
  {
    title: "Education",
    description: "Secure digital platforms for enrollment, communication, and academic operations.",
  },
  {
    title: "Service Businesses",
    description: "Automation pipelines for scheduling, billing, customer relationship workflows, and reporting.",
  },
  {
    title: "Enterprises",
    description: "Scalable cloud infrastructure and process orchestration for cross-functional teams.",
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
            <Card title={industry.title} description={industry.description} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
