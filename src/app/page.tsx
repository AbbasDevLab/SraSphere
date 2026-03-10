import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const stats = [
  { value: "99.9%", label: "Target Platform Uptime" },
  { value: "< 200ms", label: "Optimized API Response Goal" },
  { value: "24/7", label: "Infrastructure Observability" },
  { value: "Enterprise", label: "Security & Compliance Mindset" },
];

const processSteps = [
  {
    title: "Discovery & System Blueprint",
    description: "We map product goals, architecture constraints, and growth requirements into a clear technical plan.",
  },
  {
    title: "Build & Integrate",
    description: "Our engineers ship modular services, polished interfaces, and reliable integrations with your existing stack.",
  },
  {
    title: "Scale & Evolve",
    description: "We continue with optimization, security hardening, and feature expansion to support long-term product maturity.",
  },
];

const deliveryMetrics = [
  { label: "Production Releases", value: "80+" },
  { label: "Client Satisfaction", value: "4.9/5" },
  { label: "Avg Delivery Velocity", value: "2.4x faster" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300">
            Product Engineering Partner
          </p>
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-900/20">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Featured Product</p>
            <h2 className="mt-2 text-2xl font-semibold">SraSphere Orbit Suite</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              A modular SaaS operating layer for sales, operations, and automated growth workflows with live analytics.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-slate-950/25 p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/orbit-demo-reel.svg"
                  alt="Orbit Suite product feature visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-white/15 p-2">
                  <p className="text-sm font-semibold">1.8M</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-blue-100">Events/day</p>
                </div>
                <div className="rounded-lg bg-white/15 p-2">
                  <p className="text-sm font-semibold">99.98%</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-blue-100">Uptime</p>
                </div>
                <div className="rounded-lg bg-white/15 p-2">
                  <p className="text-sm font-semibold">140ms</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-blue-100">Avg latency</p>
                </div>
              </div>
            </div>
            <ButtonLink href="/products" variant="secondary" className="mt-6 border-white/40 bg-white/10 text-white hover:bg-white/20">
              View Product Details <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
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

      <section className="py-8">
        <FadeIn className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 md:grid-cols-3">
            {deliveryMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="py-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">How We Deliver</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Our process is designed for clarity, velocity, and measurable business outcomes.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={0.05 * index}>
              <Card
                title={step.title}
                description={step.description}
                className="h-full border-slate-300/80 dark:border-slate-800"
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Execution Standards</h2>
        </FadeIn>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <FadeIn className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Engineering Governance</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Architecture reviews, coding standards, CI quality gates, and security checklists are built into every
              release cycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Operational Reliability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              We design for observability, incident readiness, and resilient infrastructure so your platform scales
              with confidence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <FadeIn className="rounded-3xl border border-slate-200/80 bg-slate-900 p-8 text-slate-100 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Engagement Model</p>
          <h2 className="mt-3 text-3xl font-semibold">From MVP to enterprise scale, with one technology partner</h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-300 md:grid-cols-3">
            <p>Dedicated engineering pods tailored to your product roadmap and release cadence.</p>
            <p>Transparent execution with sprint-based delivery, technical documentation, and architecture reviews.</p>
            <p>Post-launch reliability support across performance, security, and feature iteration.</p>
          </div>
        </FadeIn>
      </section>

      <section className="py-12">
        <FadeIn className="rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Build with confidence</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            Need a software house that thinks long term?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Partner with SraSphere to architect, launch, and scale software platforms that become core business assets.
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
