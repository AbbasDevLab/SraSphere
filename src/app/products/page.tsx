import type { Metadata } from "next";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore SraSphere products for SaaS, cloud and business automation.",
};

const products = [
  {
    title: "Cloud POS System",
    description:
      "An enterprise-ready cloud point-of-sale system designed for multi-location retail operations.",
    features: ["Multi-branch inventory sync", "Real-time analytics", "Role-based access control"],
    dataPoints: [
      { label: "Daily Transactions", value: "120K+" },
      { label: "Branch Sync Latency", value: "< 2s" },
      { label: "Inventory Accuracy", value: "99.4%" },
    ],
    image: "/images/cloud-pos-dashboard.svg",
  },
  {
    title: "Business Automation Suite",
    description:
      "A centralized suite that automates approvals, lead routing, invoicing, and internal process orchestration.",
    features: ["Workflow automation engine", "Integrated notifications", "Audit logs and reporting"],
    dataPoints: [
      { label: "Automated Workflows", value: "450+" },
      { label: "Processing Time Saved", value: "38%" },
      { label: "SLA Compliance", value: "97%" },
    ],
    image: "/images/automation-suite-workflow.svg",
  },
  {
    title: "Custom SaaS Solutions",
    description:
      "Tailored SaaS architecture and implementation for startups and enterprises with complex product requirements.",
    features: ["Modular architecture", "Secure API layers", "Scalable multi-tenant setup"],
    dataPoints: [
      { label: "Multi-tenant Scale", value: "1M+ users" },
      { label: "Release Frequency", value: "Weekly" },
      { label: "Platform Availability", value: "99.9%" },
    ],
    image: "/images/custom-saas-control-center.svg",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Products</h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Built for long-term operations, each product is engineered for performance, maintainability, and security.
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 p-4 text-slate-100 dark:border-slate-800">
          <div className="relative aspect-[16/8] overflow-hidden rounded-xl border border-slate-700">
            <Image
              src="/images/orbit-demo-reel.svg"
              alt="SraSphere product demo reel visual preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-blue-300">Product Feature Video</p>
                <p className="text-sm text-slate-200">Orbit Suite Demo Reel - 2m 18s</p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                <PlayCircle className="h-4 w-4" />
                Watch Preview
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <FadeIn key={product.title} delay={index * 0.05}>
            <Card title={product.title} description={product.description} className="h-full">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-800">
                <Image
                  src={product.image}
                  alt={`${product.title} interface preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 360px"
                />
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2">
                {product.dataPoints.map((point) => (
                  <div key={point.label} className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{point.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {product.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
              <ButtonLink href="/contact" className="mt-5">
                Request Demo
              </ButtonLink>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 rounded-3xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">Deployment Ready</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Production-grade architecture from day one
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          Every product module ships with observability hooks, role-based access, API-first design, and scalable
          infrastructure patterns to support long-term growth.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request Technical Walkthrough</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            See Industry Solutions
          </ButtonLink>
        </div>
      </FadeIn>
    </div>
  );
}
