"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { budgetOptions, serviceOptions, siteConfig } from "@/lib/site-config";

type EnquiryFormData = {
  fullName: string;
  email: string;
  companyName: string;
  country: string;
  service: string;
  budget: string;
  projectDescription: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    defaultValues: { service: "", budget: "" },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitState("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, budget: data.budget || null }),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok === true) {
        setSubmitState("success");
        reset();
        return;
      }

      setServerError(
        typeof result?.error === "string"
          ? result.error
          : "We could not submit your enquiry. Please email us directly.",
      );
      setSubmitState("error");
    } catch {
      setServerError("We could not reach the enquiry service. Please try again or email us directly.");
      setSubmitState("error");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full name *" error={errors.fullName?.message}>
            <input
              id="fullName"
              autoComplete="name"
              placeholder="Your full name"
              className={fieldClassName}
              {...register("fullName", { required: "Please enter your name." })}
            />
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
          <FormField label="Company name *" error={errors.companyName?.message}>
            <input
              id="companyName"
              autoComplete="organization"
              placeholder="Your company or organisation"
              className={fieldClassName}
              {...register("companyName", { required: "Please enter your company name." })}
            />
          </FormField>
          <FormField label="Country *" error={errors.country?.message}>
            <input
              id="country"
              autoComplete="country-name"
              placeholder="Your country"
              className={fieldClassName}
              {...register("country", { required: "Please enter your country." })}
            />
          </FormField>
          <FormField label="Service required *" error={errors.service?.message}>
            <select
              id="service"
              className={fieldClassName}
              {...register("service", { required: "Please select a service." })}
            >
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </FormField>
          <FormField label="Estimated budget (optional)">
            <select id="budget" className={fieldClassName} {...register("budget")}>
              <option value="">Prefer not to say</option>
              {budgetOptions.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
            </select>
          </FormField>
        </div>
        <FormField label="Project details *" error={errors.projectDescription?.message}>
          <textarea
            id="projectDescription"
            rows={5}
            placeholder="What are you trying to achieve? What would success look like?"
            className={`${fieldClassName} resize-y`}
            {...register("projectDescription", {
              required: "Please tell us a little about your project.",
              minLength: { value: 20, message: "Please add a little more detail (at least 20 characters)." },
              maxLength: { value: 5000, message: "Please keep project details under 5,000 characters." },
            })}
          />
        </FormField>
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {submitState === "submitting" ? "Sending enquiry…" : "Send enquiry"}
        </button>
        {submitState === "success" && (
          <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            Thanks — your enquiry has been received. We&apos;ll be in touch.
          </p>
        )}
        {submitState === "error" && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
            {serverError}{" "}
            <a className="font-semibold underline underline-offset-2" href={`mailto:${siteConfig.links.email}`}>
              Email {siteConfig.links.email}
            </a>
          </p>
        )}
        <p className="text-xs leading-5 text-slate-500">
          Your enquiry is submitted to SraSphere for follow-up. Please don&apos;t include sensitive personal information.
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
  const id = children.props.id;

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
