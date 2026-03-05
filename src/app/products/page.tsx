import type { Metadata } from "next";
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
  },
  {
    title: "Business Automation Suite",
    description:
      "A centralized suite that automates approvals, lead routing, invoicing, and internal process orchestration.",
    features: ["Workflow automation engine", "Integrated notifications", "Audit logs and reporting"],
  },
  {
    title: "Custom SaaS Solutions",
    description:
      "Tailored SaaS architecture and implementation for startups and enterprises with complex product requirements.",
    features: ["Modular architecture", "Secure API layers", "Scalable multi-tenant setup"],
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

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <FadeIn key={product.title} delay={index * 0.05}>
            <Card title={product.title} description={product.description} className="h-full">
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
    </div>
  );
}
