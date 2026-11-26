import type { Metadata } from "next";
import { ArrowRight, Compass, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how SraSphere helps businesses use technology effectively through clear communication and practical digital solutions.",
};

const values = [
  {
    title: "Business before technology",
    description: "We begin by understanding the people, goals and processes behind each project.",
    icon: Compass,
  },
  {
    title: "Practical by design",
    description: "We focus on useful, right-sized solutions instead of complexity for its own sake.",
    icon: Lightbulb,
  },
  {
    title: "Clear collaboration",
    description: "We value honest communication, shared understanding and visible progress.",
    icon: Handshake,
  },
  {
    title: "Built with care",
    description: "We consider usability, maintainability and the long-term needs of the solution.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">About SraSphere</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Technology should make business feel simpler.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            SraSphere is a digital solutions studio focused on helping businesses use technology effectively — from
            digital experiences to the systems that support everyday work.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <p className="section-eyebrow">Our mission</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Make useful technology more accessible to growing businesses.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Every business has its own goals, constraints and ways of working. Our role is to understand those
              realities and help find a digital solution that fits.
            </p>
            <p>
              We bring strategy, design and development together so the work is clear from the first conversation
              through launch. We focus on practical outcomes, thoughtful experiences and technology that can evolve
              with the people who depend on it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Our approach</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A thoughtful partner, not a template.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our work is shaped by your business requirements, with clear decisions and collaboration at every stage.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#0B1320] p-7 text-white sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Work with us</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Have an idea or a business challenge?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Let&apos;s understand what you need and see how we can help.
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0 gap-2">
            Start a conversation <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
