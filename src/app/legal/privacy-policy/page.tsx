import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SraSphere handles information submitted through the website enquiry form.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <p>
          When you send a project enquiry, SraSphere collects the details you provide, including your name, business
          email, company, country, service interest and project description. Estimated budget is optional.
        </p>
        <p>
          Enquiry details are submitted to the website backend and stored in the SraSphere Supabase project so the team
          can review and respond. The public website can submit enquiries but cannot read stored submissions.
        </p>
        <p>
          The information is used to respond to your enquiry and discuss related project work. Please do not include
          sensitive personal information in the form. To ask about information you have submitted, email{" "}
          <a className="font-medium text-blue-700 underline underline-offset-2" href="mailto:srasphereofficial@gmail.com">
            srasphereofficial@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
