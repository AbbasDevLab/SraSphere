import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Handshake, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About Us | Technology With a Business-First Mindset",
  description:
    "SraSphere bridges the gap between business challenges and practical technology solutions. Learn about our philosophy, mission, vision and working approach.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Lightbulb,
    title: "Clarity before code",
    description: "We make sure the problem is understood before a single line is written.",
  },
  {
    icon: Handshake,
    title: "Honest advice",
    description: "If a simpler or cheaper option serves you better, we will say so.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description: "Agreed scope, visible progress and systems built to last.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership",
    description: "Launch day is the beginning of the relationship, not the end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Technology With a Business-First Mindset."
        description="SraSphere exists to bridge the gap between the challenges a business faces every day and the technology that can actually solve them."
      />

      {/* Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Business challenges first. Technology second."
              description="Technology is only valuable when it moves a business forward. Too many projects start with a tool and hunt for a purpose — ours start with a conversation about how your business works, where it hurts and where it needs to go. Only then do we recommend the technology, and only the technology the problem genuinely requires."
            />
            <p className="mt-5 leading-relaxed text-slate-600">
              That mindset shapes how we work with startups, small businesses and growing organisations
              across e-commerce, retail and professional services — combining business understanding,
              technical expertise and practical implementation in every engagement.
            </p>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <div className="rounded-2xl bg-navy-900 p-8">
                <Compass className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">Mission</h3>
                <p className="mt-3 leading-relaxed text-navy-100">
                  &ldquo;To help businesses leverage technology to operate smarter, serve customers better
                  and grow sustainably.&rdquo;
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-navy-900/10 bg-cloud p-8">
                <Eye className="h-6 w-6 text-cyan-600" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy-900">Vision</h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  &ldquo;To become a trusted technology partner for businesses seeking meaningful digital
                  transformation.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Working approach */}
      <section className="bg-cloud py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Working Approach"
              title="How an engagement with us feels."
              align="center"
            />
          </FadeIn>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
            {[
              {
                step: "Listen",
                text: "We learn your operations, customers and constraints before proposing anything.",
              },
              {
                step: "Recommend",
                text: "You get a clear proposal: what to build, why, what it costs and what it will change.",
              },
              {
                step: "Build & support",
                text: "We deliver in visible stages, then stay on to maintain and improve the result.",
              },
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-7">
                  <p className="font-heading text-sm font-bold text-cyan-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-semibold text-navy-900">{item.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Values" title="What we hold ourselves to." />
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 bg-hero-grid py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s build something that moves your business forward.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-8 text-sm font-semibold text-navy-900 transition-all hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/25"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
