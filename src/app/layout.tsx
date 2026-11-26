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
    default: "SraSphere | Digital Solutions Studio",
    template: "%s | SraSphere",
  },
  description: siteConfig.description,
  openGraph: {
    title: "SraSphere | Digital Solutions Studio",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/srasphere-wordmark.png",
        width: 2000,
        height: 667,
        alt: "SraSphere Digital Solutions Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SraSphere | Digital Solutions Studio",
    description: siteConfig.description,
    images: ["/brand/srasphere-wordmark.png"],
  },
  icons: {
    icon: "/brand/srasphere-mark.png",
    shortcut: "/brand/srasphere-mark.png",
    apple: "/brand/srasphere-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
