export const siteConfig = {
  name: "SraSphere",
  tagline: "Technology. Simplified. Business. Amplified.",
  description:
    "SraSphere helps businesses establish their digital presence, streamline operations and build technology that supports long-term growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.srasphere.com",
  links: {
    email: "srasphereofficial@gmail.com",
    instagram: "https://instagram.com/srasphere",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
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
  "Website Design & Development",
  "E-commerce Solutions",
  "Business Automation",
  "Mobile App Development",
  "Custom Digital Solutions",
  "Cloud & Technology Solutions",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $500",
  "$500-$1,000",
  "$1,000-$3,000",
  "$3,000-$5,000",
  "$5,000+",
] as const;
