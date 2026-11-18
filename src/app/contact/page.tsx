import type { Metadata } from "next";
import { Mail, MessageCircle, Linkedin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Start Your Project",
  description:
    "Tell SraSphere about your business challenge. Reach us through the project enquiry form, email or WhatsApp — serving clients in Pakistan, the UK and the UAE.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);
  const hasLinkedIn = Boolean(siteConfig.contact.linkedin);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About Your Project."
        description="Share a few details about your business and what you are trying to achieve. We review every enquiry personally and respond with honest, practical next steps."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          {/* Contact channels */}
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-navy-900">How to reach us</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Choose whichever channel suits you. For project enquiries, the form gives us the
                  context we need to respond usefully on the first reply.
                </p>
              </div>

              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-cyan-300/60 hover:shadow-md hover:shadow-navy-900/5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-900">Email</span>
                      <span className="mt-1 block text-sm text-slate-600">{siteConfig.contact.email}</span>
                    </span>
                  </a>
                </li>

                {hasWhatsApp ? (
                  <li>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-cyan-300/60 hover:shadow-md hover:shadow-navy-900/5"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold text-navy-900">WhatsApp</span>
                        <span className="mt-1 block text-sm text-slate-600">
                          {siteConfig.contact.whatsappDisplay || siteConfig.contact.whatsappNumber}
                        </span>
                      </span>
                    </a>
                  </li>
                ) : null}

                {hasLinkedIn ? (
                  <li>
                    <a
                      href={siteConfig.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-cyan-300/60 hover:shadow-md hover:shadow-navy-900/5"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                        <Linkedin className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold text-navy-900">LinkedIn</span>
                        <span className="mt-1 block text-sm text-slate-600">
                          Follow SraSphere on LinkedIn
                        </span>
                      </span>
                    </a>
                  </li>
                ) : null}

                <li className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-cloud p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 ring-1 ring-navy-900/10">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">Response time</span>
                    <span className="mt-1 block text-sm text-slate-600">
                      Within 1–2 business days. We work across Pakistan, UK and UAE time zones.
                    </span>
                  </span>
                </li>
              </ul>

              <p className="text-xs leading-relaxed text-slate-500">
                Your details are used only to respond to your enquiry. See our{" "}
                <a href="/legal/privacy-policy" className="underline hover:text-navy-900">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
