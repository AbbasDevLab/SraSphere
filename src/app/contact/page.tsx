import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Instagram } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell SraSphere about your business and project. Get in touch about website development, e-commerce, automation and custom digital solutions.",
};

export default function ContactPage() {
  const whatsappNumber = siteConfig.links.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi SraSphere, I'd like to discuss a project.")}`
    : undefined;

  return (
    <>
      <section className="bg-[#0B1320] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl py-4 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Share a few details about your business and what you&apos;re working towards. We&apos;ll help you explore
            practical next steps.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-8">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold">How to reach us</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Choose the channel that works for you. For project enquiries, the form gives us context to respond
              usefully.
            </p>
            <div className="mt-7 space-y-3">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Mail aria-hidden="true" size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">Email</span>
                  <span className="block break-all text-sm font-medium text-slate-900">{siteConfig.links.email}</span>
                </span>
                <ArrowUpRight aria-hidden="true" size={16} className="ml-auto shrink-0 text-slate-400" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Instagram aria-hidden="true" size={19} />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Instagram</span>
                  <span className="block text-sm font-medium text-slate-900">@srasphere</span>
                </span>
                <ArrowUpRight aria-hidden="true" size={16} className="ml-auto text-slate-400" />
              </a>
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                    <MessageCircle aria-hidden="true" size={19} />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">WhatsApp</span>
                    <span className="block text-sm font-medium text-slate-900">Message our team</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={16} className="ml-auto text-slate-400" />
                </a>
              )}
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Your details are used to respond to your enquiry. See our{" "}
              <a href="/legal/privacy-policy" className="font-medium text-blue-700 underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </aside>

          <div>
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Tell us about your project</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fields marked * are required. Estimated budget is optional.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
