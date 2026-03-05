import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
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
    </div>
  );
}
