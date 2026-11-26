import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Cloud,
  Code2,
  Globe2,
  HeartPulse,
  Smartphone,
  ShoppingBag,
  Store,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { services, projects } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Digital Solutions for Growing Businesses",
  description: siteConfig.description,
};

const principles = [
  {
    number: "01",
    title: "Business-first thinking",
    description: "We begin with your goals and challenges, not a predetermined technology stack.",
  },
  {
    number: "02",
    title: "Practical solutions",
    description: "The right-sized approach for the problem, your team and the way you work.",
  },
  {
    number: "03",
    title: "Long-term growth",
    description: "Thoughtful foundations that can adapt as your business and needs change.",
  },
];

const industries = [
  { title: "Healthcare & clinics", description: "Make information and appointment journeys clearer.", icon: HeartPulse },
  { title: "Restaurants & cafes", description: "Support discovery, ordering and day-to-day operations.", icon: Store },
  { title: "Real estate", description: "Present properties and connect enquiries with your team.", icon: Building2 },
  { title: "E-commerce", description: "Create a considered online shopping experience.", icon: ShoppingBag },
  { title: "Professional services", description: "Help clients understand your expertise and get in touch.", icon: BriefcaseBusiness },
  { title: "Growing businesses", description: "Connect useful technology with the way your business works.", icon: Workflow },
];

const process = [
  { number: "01", title: "Discover", description: "Understand your business, objectives and requirements." },
  { number: "02", title: "Design", description: "Plan the experience and technical solution around your needs." },
  { number: "03", title: "Develop", description: "Build, test and refine the agreed solution together." },
  { number: "04", title: "Launch", description: "Deploy the finished work and provide agreed support." },
];

const serviceIcons = {
  website: Globe2,
  ecommerce: ShoppingBag,
  automation: Workflow,
  mobile: Smartphone,
  custom: Code2,
  cloud: Cloud,
};

const reasons = [
  "Solutions shaped around your business requirements.",
  "Modern, responsive experiences built for real people.",
  "Practical technology with room to scale.",
  "Clear communication from discovery to delivery.",
  "A focus on usability and meaningful business outcomes.",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0B1320] text-white">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-30" />
        <div aria-hidden="true" className="absolute -right-36 -top-56 h-[35rem] w-[35rem] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="relative mx-auto grid min-h-0 w-full max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[570px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              Your Digital Technology Partner
            </p>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Turning Business Challenges Into{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Digital Solutions.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We help businesses establish their digital presence, streamline operations and build technology that
              supports long-term growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="gap-2">
                Start a Project <ArrowRight aria-hidden="true" size={16} />
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                Explore Our Services
              </ButtonLink>
            </div>
            <p className="mt-9 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{siteConfig.tagline}</p>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-blue-300/15" />
            <div aria-hidden="true" className="absolute inset-[18%] rounded-full border border-cyan-200/10" />
            <div aria-hidden="true" className="absolute inset-[3%] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative aspect-square w-[72%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_100px_rgba(37,99,235,0.22)]">
              <Image
                src="/brand/Glossy_Blue_S-Wave_Logo.png"
                alt="SraSphere blue wave monogram"
                fill
                priority
                sizes="(max-width: 1024px) 72vw, 320px"
                className="object-contain"
              />
            </div>
            <div className="absolute left-[2%] top-[25%] rounded-2xl border border-white/10 bg-[#111f33]/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.16em] text-blue-200">Digital presence</p>
              <p className="mt-1 text-sm font-medium text-white">Made for people</p>
            </div>
            <div className="absolute bottom-[18%] right-0 rounded-2xl border border-white/10 bg-[#111f33]/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-200">Business systems</p>
              <p className="mt-1 text-sm font-medium text-white">Built to work</p>
            </div>
            <span aria-hidden="true" className="absolute right-[13%] top-[10%] h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_#67e8f9]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <p className="section-eyebrow">A better way to build</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Technology That Works for Your Business.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Every business has different challenges. We bring together technology, strategy and practical execution
              to make everyday operations simpler and digital growth more achievable.
            </p>
            <LinkArrow href="/about" label="Get to know us" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <span className="text-xs font-semibold tracking-[0.16em] text-blue-600">{principle.number}</span>
                <h3 className="mt-8 text-base font-semibold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="section-eyebrow">What we do</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Solutions Designed Around Your Business.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                From a stronger online presence to connected business tools, get the right support for your next step.
              </p>
            </div>
            <LinkArrow href="/services" label="Explore all services" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-400">{service.number}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Learn more <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1320] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Why SraSphere</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              More than technology. A better way forward.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The best solution starts with understanding what it needs to do for your business.
            </p>
          </div>
          <ul className="divide-y divide-white/10">
            {reasons.map((reason, index) => (
              <li key={reason} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="pt-0.5 text-xs font-bold tracking-widest text-blue-300">0{index + 1}</span>
                <span className="text-sm leading-6 text-slate-200 sm:text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Who we work with</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Technology for the way you work.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We shape each engagement around the people, services and processes behind the business.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ title, description, icon: Icon }) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#E6F0FF] text-blue-700">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Selected work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ideas made tangible.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A selection of project work and clearly labelled concept demonstrations.
              </p>
            </div>
            <LinkArrow href="/work" label="View our work" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={`/work/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <ProjectVisual kind={project.visual} />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{project.type}</p>
                  <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                    View project <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Portfolio examples include academic, internal and concept work. Concept demonstrations are not presented as
            completed client engagements.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">A clear process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From business challenge to digital solution.
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.number} className="border-t-2 border-blue-100 pt-5">
                <p className="text-sm font-bold tracking-widest text-blue-600">{step.number}</p>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#0B1320] px-6 py-10 text-white sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Let&apos;s talk</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to take your business online?</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Let&apos;s discuss your ideas and find the right digital solution for your business.
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0 gap-2 self-start lg:self-auto">
            Let&apos;s Talk <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function LinkArrow({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
      {label} <ArrowDownRight aria-hidden="true" size={16} />
    </Link>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className="relative h-52 overflow-hidden bg-[#0B1320] p-5">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.35),transparent_44%)]" />
      {kind === "access" && (
        <div className="relative mx-auto grid h-full max-w-[290px] grid-cols-[0.7fr_1.3fr] gap-3 rounded-xl border border-white/15 bg-slate-900/80 p-3 shadow-2xl">
          <div className="rounded-lg bg-blue-600/20 p-3">
            <div className="h-3 w-12 rounded bg-blue-300/70" />
            <div className="mt-5 space-y-2">{[1, 2, 3].map((item) => <div key={item} className="h-1.5 rounded bg-white/15" />)}</div>
          </div>
          <div className="space-y-2 rounded-lg bg-white/[0.04] p-3">
            <div className="flex items-center justify-between"><span className="h-2 w-14 rounded bg-white/40" /><span className="h-4 w-10 rounded-full bg-emerald-300/20" /></div>
            {[1, 2, 3].map((item) => <div key={item} className="flex h-7 items-center gap-2 rounded bg-white/[0.05] px-2"><span className="h-3 w-3 rounded-full bg-blue-300/60" /><span className="h-1.5 w-20 rounded bg-white/20" /></div>)}
          </div>
        </div>
      )}
      {kind === "commerce" && (
        <div className="relative mx-auto flex h-full max-w-[290px] items-center gap-3 rounded-xl border border-white/15 bg-slate-900/80 p-3 shadow-2xl">
          <div className="grid h-full flex-1 grid-cols-2 gap-2">
            {["from-blue-300/30 to-cyan-200/5", "from-amber-200/25 to-orange-100/5"].map((tone) => (
              <div key={tone} className={`rounded-lg bg-gradient-to-br ${tone}`} />
            ))}
          </div>
          <div className="flex w-[42%] flex-col justify-center">
            <div className="h-2 w-12 rounded bg-white/50" />
            <div className="mt-3 h-1.5 w-full rounded bg-white/15" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/15" />
            <div className="mt-4 h-6 w-20 rounded-full bg-blue-500/70" />
          </div>
        </div>
      )}
      {kind === "management" && (
        <div className="relative mx-auto h-full max-w-[290px] rounded-xl border border-white/15 bg-slate-900/80 p-4 shadow-2xl">
          <div className="flex items-center justify-between"><div className="h-2 w-20 rounded bg-white/35" /><div className="h-5 w-5 rounded-full bg-blue-300/40" /></div>
          <div className="mt-4 grid grid-cols-3 gap-2">{[1, 2, 3].map((item) => <div key={item} className="h-8 rounded-md bg-white/[0.06]" />)}</div>
          <div className="mt-3 flex h-[4.5rem] items-end gap-2 rounded-lg bg-white/[0.04] px-4 pt-3">{[35, 55, 42, 75, 58, 88, 66, 94].map((height, index) => <div key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300/80" />)}</div>
        </div>
      )}
      <div className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-300">
        <Check aria-hidden="true" size={11} /> Project visual
      </div>
    </div>
  );
}
