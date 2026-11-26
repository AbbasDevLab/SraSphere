"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { siteConfig } from "@/lib/site-config";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  budget?: string;
  message: string;
};

const fieldClassName =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const body = [
      `Full name: ${data.name}`,
      `Business email: ${data.email}`,
      `Company: ${data.company}`,
      `Country: ${data.country}`,
      `Service required: ${data.service}`,
      `Estimated budget: ${data.budget || "Not specified"}`,
      "",
      "Project details:",
      data.message,
    ].join("\n");
    const subject = encodeURIComponent(`Project enquiry from ${data.name}`);
    const encodedBody = encodeURIComponent(body);
    window.location.assign(`mailto:${siteConfig.links.email}?subject=${subject}&body=${encodedBody}`);
    setStatus(
      `Your email app should open with this enquiry addressed to ${siteConfig.links.email}. Please review and send it there.`,
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full name *" error={errors.name?.message}>
            <input id="name" autoComplete="name" placeholder="Your full name" className={fieldClassName} {...register("name", { required: "Please enter your name." })} />
          </FormField>
          <FormField label="Business email *" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClassName}
              {...register("email", {
                required: "Please enter your email.",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address." },
              })}
            />
          </FormField>
          <FormField label="Company name *" error={errors.company?.message}>
            <input id="company" autoComplete="organization" placeholder="Your company or organisation" className={fieldClassName} {...register("company", { required: "Please enter your company name." })} />
          </FormField>
          <FormField label="Country *" error={errors.country?.message}>
            <input id="country" autoComplete="country-name" placeholder="Your country" className={fieldClassName} {...register("country", { required: "Please enter your country." })} />
          </FormField>
          <FormField label="Service required *" error={errors.service?.message}>
            <select id="service" className={fieldClassName} defaultValue="" {...register("service", { required: "Please select a service." })}>
              <option value="" disabled>Select a service</option>
              <option>Website Design & Development</option>
              <option>E-commerce Solutions</option>
              <option>Business Automation</option>
              <option>Mobile App Development</option>
              <option>Custom Digital Solutions</option>
              <option>Cloud & Technology Solutions</option>
              <option>Not sure yet</option>
            </select>
          </FormField>
          <FormField label="Estimated budget (optional)">
            <select id="budget" className={fieldClassName} defaultValue="" {...register("budget")}>
              <option value="">Prefer not to say</option>
              <option>Under $500</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
            </select>
          </FormField>
        </div>
        <FormField label="Project details *" error={errors.message?.message}>
          <textarea
            id="message"
            rows={5}
            placeholder="What are you trying to achieve? What would success look like?"
            className={`${fieldClassName} resize-y`}
            {...register("message", {
              required: "Please tell us a little about your project.",
              minLength: { value: 20, message: "Please add a little more detail (at least 20 characters)." },
            })}
          />
        </FormField>
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          Continue to email
        </button>
        <p aria-live="polite" className="text-sm leading-6 text-slate-600">
          {status}
        </p>
        <p className="text-xs leading-5 text-slate-500">
          Submitting opens your email app so you can review and send your enquiry directly to SraSphere.
        </p>
      </form>
    </div>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ id: string }>;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
