import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SraSphere terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Terms of Service</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <p>
          By engaging with SraSphere services, you agree to use our platforms and deliverables in compliance with
          applicable laws and agreed project scopes.
        </p>
        <p>
          Service timelines, pricing, and support terms are governed by individual contracts and statements of work.
        </p>
        <p>
          SraSphere reserves the right to update these terms as required to reflect operational, legal, or security
          changes.
        </p>
      </div>
    </div>
  );
}
