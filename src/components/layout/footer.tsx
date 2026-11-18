import Link from "next/link";
import { Mail, MessageCircle, Linkedin, Instagram, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { BrandLogo } from "@/components/layout/brand-logo";

const serviceLinks = [
  { label: "Digital Experiences", hash: "#digital-experiences" },
  { label: "Business Solutions", hash: "#business-solutions" },
  { label: "Software Engineering", hash: "#software-engineering" },
  { label: "Digital Intelligence", hash: "#digital-intelligence" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLogo dark />
            <p className="mt-5 max-w-sm text-sm leading-6 text-navy-100">
              SraSphere is a technology solutions company helping startups and growing businesses build
              digital experiences, streamline operations and adopt modern technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.contact.linkedin ? (
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SraSphere on LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-navy-100 transition hover:border-cyan-300/60 hover:text-cyan-300"
                >
                  <Linkedin size={16} />
                </a>
              ) : null}
              {siteConfig.contact.instagram ? (
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SraSphere on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-navy-100 transition hover:border-cyan-300/60 hover:text-cyan-300"
                >
                  <Instagram size={16} />
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-100 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-navy-100 transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.hash}>
                  <Link
                    href={`/services${service.hash}`}
                    className="text-navy-100 transition hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-navy-100">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail size={16} className="text-cyan-300" />
                  {siteConfig.contact.email}
                </a>
              </li>
              {hasWhatsApp ? (
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <MessageCircle size={16} className="text-cyan-300" />
                    WhatsApp: {siteConfig.contact.whatsappDisplay}
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                <span>
                  Serving clients across Pakistan, the United Kingdom and the United Arab Emirates.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-navy-300 sm:flex-row sm:items-center">
          <p>
            &copy; {year} SraSphere. {siteConfig.tagline}
          </p>
          <div className="flex flex-wrap gap-5">
            {siteConfig.legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
