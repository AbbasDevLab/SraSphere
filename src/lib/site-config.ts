export const siteConfig = {
  name: "SraSphere",
  tagline: "Technology. Simplified. Business. Amplified.",
  description:
    "SraSphere is a technology solutions company helping startups and growing businesses build digital experiences, streamline operations and adopt modern technology.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://srasphere.com",
  // Editable placeholders — replace with live details before launch.
  contact: {
    // TODO: replace with the real business email when supplied.
    email: "",
    // TODO: replace with the real WhatsApp number (digits only, with country code) when supplied.
    whatsappNumber: "",
    whatsappDisplay: "",
    // TODO: replace with the real LinkedIn page URL when supplied.
    linkedin: "",
    instagram: "https://instagram.com/srasphere",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
  ],
  legalItems: [
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/terms-of-service", label: "Terms of Service" },
  ],
} as const;

export const serviceOptions = [
  "Website Development",
  "E-commerce Development",
  "Business Software",
  "ERP / CRM / POS",
  "Custom Software",
  "Automation / AI",
  "Other",
] as const;

export const budgetOptions = [
  "Under $500",
  "$500-$1,000",
  "$1,000-$3,000",
  "$3,000-$5,000",
  "$5,000+",
] as const;
