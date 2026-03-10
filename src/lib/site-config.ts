export const siteConfig = {
  name: "SraSphere",
  description:
    "SraSphere builds scalable SaaS platforms, automation systems, and secure cloud solutions for modern businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.srasphere.com",
  links: {
    email: "team@srasphere.com",
    phone: "+44 7435 440972",
  },
  studios: {
    pakistan: "NICL, Daftarkhawan, Lahore",
    uk: "80 West Wycombe Road, High Wycombe, HP11 2LP",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legalItems: [
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/terms-of-service", label: "Terms of Service" },
    { href: "/legal/refund-policy", label: "Refund Policy" },
  ],
};
