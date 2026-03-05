import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "SraSphere refund policy.",
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Refund Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <p>
          Refund eligibility is defined per contract and milestone structure. For custom software engagements, completed
          work phases are generally non-refundable.
        </p>
        <p>
          Subscription-based products may include trial or prorated cancellation terms where explicitly stated.
        </p>
        <p>
          For billing concerns, contact hello@srasphere.com so we can review and resolve the issue promptly.
        </p>
      </div>
    </div>
  );
}
