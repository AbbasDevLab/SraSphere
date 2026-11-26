import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SraSphere | Technology. Simplified. Business. Amplified.",
    template: "%s | SraSphere",
  },
  description: siteConfig.description,
  keywords: [
    "Software Development Company",
    "Web Development Services",
    "Business Automation",
    "ERP Implementation",
    "Shopify Development",
    "Custom Software Solutions",
    "Digital Transformation",
  ],
  openGraph: {
    title: "SraSphere | Technology. Simplified. Business. Amplified.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SraSphere",
    description: siteConfig.description,
  },
  icons: {
    icon: [{ url: "/brand/Glossy_Blue_S-Wave_Logo.png", type: "image/png" }],
    shortcut: "/brand/Glossy_Blue_S-Wave_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-white font-sans text-charcoal antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
