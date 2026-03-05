import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SraSphere for product demos, partnerships, and software consulting.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Contact Us</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Share your goals and we will help shape the right SaaS, automation, or cloud roadmap.
        </p>
        <div className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>Email: hello@srasphere.com</p>
          <p>Response time: within 24-48 business hours</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <ContactForm />
      </FadeIn>
    </div>
  );
}
