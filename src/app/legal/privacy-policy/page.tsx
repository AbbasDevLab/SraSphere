import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SraSphere privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <p>
          SraSphere respects your privacy and collects only the information required to communicate, deliver services,
          and improve product experience.
        </p>
        <p>
          We do not sell personal data. Information submitted through our forms is used solely for business
          communication and project-related correspondence.
        </p>
        <p>
          Security controls are applied to protect stored information, and we continuously improve safeguards as part
          of our security-first approach.
        </p>
      </div>
    </div>
  );
}
