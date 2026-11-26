import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  BriefcaseBusiness,
  ShoppingBag,
  Smartphone,
  Utensils,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrbitalSphere } from "@/components/visuals/orbital-sphere";
import { serviceCategories } from "@/lib/services";
import { projects } from "@/lib/projects";
import { insights } from "@/lib/insights";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SraSphere | Software Development & Digital Transformation Company",
  description:
    "SraSphere helps startups and growing businesses build websites, e-commerce stores, business software and automation. Technology. Simplified. Business. Amplified.",
  alternates: { canonical: "/" },
};

const benefits = [
  {
    title: "Business-first thinking",
    description: "We start with your objectives, not with a technology preference.",
  },
  {
    title: "Practical technology solutions",
    description: "Right-sized systems that solve the problem without over-engineering.",
  },
  {
    title: "Long-term digital growth",
    description: "Foundations that can evolve as your business, team and customers grow.",
  },
];

const approachSteps = [
  { number: "01", title: "Discover", description: "Understand the business, objectives and requirements." },
  { number: "02", title: "Design", description: "Plan the user experience and technical solution." },
  { number: "03", title: "Develop", description: "Build, test and refine the agreed solution." },
  { number: "04", title: "Launch", description: "Deploy the finished project and provide agreed support." },
];

const industries = [
  { title: "Healthcare & Dental", description: "Clear websites, enquiry journeys and practical tools for patient-facing teams.", icon: HeartPulse },
  { title: "Restaurants & Cafes", description: "Digital menus, ordering experiences and systems that help service teams move faster.", icon: Utensils },
  { title: "Real Estate", description: "Property-led experiences that make listings, enquiries and follow-up easier to manage.", icon: Building2 },
  { title: "E-commerce", description: "Storefronts and customer journeys that help products get discovered and purchased.", icon: ShoppingBag },
  { title: "Professional Services", description: "Credible digital presence and automation for firms built on expertise and trust.", icon: BriefcaseBusiness },
  { title: "Growing Businesses", description: "Focused technology foundations for teams moving beyond manual processes.", icon: Smartphone },
];

const whyPoints = [
  "Understanding business objectives before recommending technology.",
  "Solutions tailored to actual requirements.",
  "Clear communication and project visibility.",
  "Practical and scalable implementations.",
  "Ongoing technical assistance.",
];

// Structured data: Organization + services
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: ["Pakistan", "United Kingdom", "United Arab Emirates"],
  slogan: siteConfig.tagline,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-navy-900 bg-hero-grid">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(115,213,233,0.12),transparent_55%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your Digital Technology Partner
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              Turning Business Challenges Into Digital Solutions.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              We help businesses establish their digital presence, streamline operations and build
              technology that supports long-term growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-7 text-sm font-semibold text-navy-900 transition-all hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/25"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-cyan-300/60 hover:bg-white/5"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-navy-300">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <OrbitalSphere />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="bg-cloud py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Introduction"
              title="Technology That Works for Your Business."
              description="Every business has different challenges. We bring together technology, strategy and practical execution to create solutions that make everyday operations simpler and business growth more achievable."
            />
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.06}>
                <div className="h-full rounded-xl border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  <h3 className="mt-4 font-semibold text-navy-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Solutions Designed Around Your Business."
              description="Six connected capabilities, one accountable team. Every engagement starts with understanding what your business actually needs."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <FadeIn key={category.id} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-xl hover:shadow-navy-900/8">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <span className="font-heading text-4xl font-bold text-navy-900/8">{category.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy-900">{category.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.shortDescription}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.services.slice(0, 4).map((service) => (
                      <li
                        key={service}
                        className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                      >
                        {service}
                      </li>
                    ))}
                    {category.services.length > 4 ? (
                      <li className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-500">
                        +{category.services.length - 4} more
                      </li>
                    ) : null}
                  </ul>
                  <Link
                    href={`/services#${category.id}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
                  >
                    Explore Solutions
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES */}
      <section className="bg-cloud py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Digital solutions that fit the way your industry works."
              description="Every sector has its own customers, constraints and operating rhythm. We keep the technology practical and shape the experience around the people who use it."
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <FadeIn key={industry.title} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border border-navy-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pale-blue bg-[#E6F0FF] text-[#2563EB] transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                    <industry.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED WORK */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                dark
                eyebrow="Our Work"
                title="Turning Ideas Into Practical Solutions."
                description="Selected projects from our academic, internal and concept work — each one built around a real business problem."
              />
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                View all work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.mockup.accent}22, #101827 60%)`,
                    }}
                  >
                    <MockupGraphic type={project.mockup.type} accent={project.mockup.accent} />
                    <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/20" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {project.reference} — {project.categoryLabel}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-100">
                      {project.cardDescription}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="From Business Challenge to Digital Solution."
              align="center"
              className="max-w-3xl"
            />
          </FadeIn>

          {/* Desktop: horizontal timeline */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-navy-900/15" />
              <div className="grid grid-cols-4 gap-6">
                {approachSteps.map((step, index) => (
                  <FadeIn key={step.number} delay={index * 0.08}>
                    <div className="relative">
                      <div className="h-[15px] w-[15px] rounded-full border-2 border-cyan-500 bg-white" />
                      <p className="mt-5 font-heading text-sm font-bold text-cyan-600">{step.number}</p>
                      <h3 className="mt-1 font-semibold text-navy-900">{step.title}</h3>
                      <p className="mt-2 pr-4 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="relative mt-12 lg:hidden">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-navy-900/15" />
            <div className="space-y-8">
              {approachSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.05}>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-cyan-500 bg-white" />
                    <p className="font-heading text-sm font-bold text-cyan-600">{step.number}</p>
                    <h3 className="mt-1 font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY SRASPHERE */}
      <section className="bg-cloud py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Why SraSphere"
              title="More Than Technology. A Better Way Forward."
              description="Plenty of companies can write software. Fewer take the time to understand what the software is for. That difference shapes everything we build."
            />
          </FadeIn>
          <div className="space-y-4">
            {whyPoints.map((point, index) => (
              <FadeIn key={point} delay={index * 0.06}>
                <div className="flex items-start gap-4 rounded-xl border border-navy-900/10 bg-white p-5">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-navy-900">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INSIGHTS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Insights"
                title="Perspectives on Technology and Business."
              />
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
              >
                All insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Editorial previews — full articles coming soon
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {insights.map((insight, index) => (
              <FadeIn key={insight.slug} delay={index * 0.07}>
                <Link
                  href={`/insights#${insight.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                    {insight.topic}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-navy-900">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{insight.description}</p>
                  <p className="mt-auto pt-5 text-xs text-slate-400">{insight.readTime}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-navy-900 bg-hero-grid py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Let&apos;s Talk
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Have a Business Challenge in Mind?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
              Let&apos;s explore how the right technology can help your business move forward.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-8 text-sm font-semibold text-navy-900 transition-all hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/25"
            >
              Let&apos;s Talk About Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// Decorative abstract UI mockup used on work cards (no stock imagery).
function MockupGraphic({ type, accent }: { type: "dashboard" | "storefront" | "operations"; accent: string }) {
  if (type === "storefront") {
    return (
      <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`rounded-md ${i === 1 ? "h-24 w-20 opacity-90" : "h-16 w-14 opacity-50"}`}
            style={{ background: `${accent}55`, border: `1px solid ${accent}88` }}
          />
        ))}
      </div>
    );
  }
  if (type === "operations") {
    return (
      <div className="absolute inset-0 flex flex-col justify-center gap-2 px-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: `${accent}88` }} />
            <div
              className="h-2 rounded-full"
              style={{ width: `${70 - i * 12}%`, background: `${accent}44` }}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-end gap-3 px-10 pb-10">
      {[35, 55, 42, 70, 58, 85].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${h}%`,
            background: i === 5 ? accent : `${accent}55`,
            border: `1px solid ${accent}66`,
          }}
        />
      ))}
    </div>
  );
}
