"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { budgetOptions, serviceOptions } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type EnquiryFormData = {
  fullName: string;
  email: string;
  companyName: string;
  country: string;
  service: string;
  budget: string;
  projectDescription: string;
};

const inputStyles =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/25";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EnquiryFormData>({ defaultValues: { service: "", budget: "" } });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitState("submitting");
    setServerError("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json().catch(() => null);

      if (response.ok && body?.ok) {
        setSubmitState("success");
        reset();
      } else {
        setServerError(
          typeof body?.error === "string"
            ? body.error
            : "We could not send your enquiry. Please try again or email us directly.",
        );
        setSubmitState("error");
      }
    } catch {
      setServerError("Network problem — please check your connection and try again.");
      setSubmitState("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-navy-900">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            {...register("fullName", {
              required: "Please enter your full name",
              minLength: { value: 2, message: "Name looks too short" },
            })}
            className={cn(inputStyles, errors.fullName && "border-red-400")}
            placeholder="e.g. Amna Khan"
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.fullName.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
            })}
            className={cn(inputStyles, errors.email && "border-red-400")}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-navy-900">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            {...register("companyName", { required: "Please enter your company name" })}
            className={cn(inputStyles, errors.companyName && "border-red-400")}
            placeholder="Your company or organisation"
            aria-invalid={Boolean(errors.companyName)}
          />
          {errors.companyName ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.companyName.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-navy-900">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            id="country"
            {...register("country", { required: "Please enter your country" })}
            className={cn(inputStyles, errors.country && "border-red-400")}
            placeholder="e.g. United Kingdom"
            aria-invalid={Boolean(errors.country)}
          />
          {errors.country ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.country.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-900">
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <Controller
            control={control}
            name="service"
            rules={{ required: "Please choose a service" }}
            render={({ field }) => (
              <select
                id="service"
                {...field}
                className={cn(inputStyles, errors.service && "border-red-400")}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.service ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.service.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-navy-900">
            Estimated Budget <span className="text-red-500">*</span>
          </label>
          <Controller
            control={control}
            name="budget"
            rules={{ required: "Please choose a budget range" }}
            render={({ field }) => (
              <select
                id="budget"
                {...field}
                className={cn(inputStyles, errors.budget && "border-red-400")}
                aria-invalid={Boolean(errors.budget)}
              >
                <option value="" disabled>
                  Select a budget range…
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.budget ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.budget.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="projectDescription" className="mb-1.5 block text-sm font-medium text-navy-900">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDescription"
          rows={5}
          {...register("projectDescription", {
            required: "Please describe your project or challenge",
            minLength: { value: 20, message: "Please give us at least a couple of sentences (20+ characters)" },
          })}
          className={cn(inputStyles, "resize-y", errors.projectDescription && "border-red-400")}
          placeholder="What are you trying to achieve? What is the current situation, and what would success look like?"
          aria-invalid={Boolean(errors.projectDescription)}
        />
        {errors.projectDescription ? (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.projectDescription.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-8 text-sm font-semibold text-white transition hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitState === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>

      {submitState === "success" ? (
        <div
          role="status"
          className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <p>
            Thank you — your enquiry has been received. We will review it and get back to you shortly.
          </p>
        </div>
      ) : null}

      {submitState === "error" ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <p>{serverError}</p>
        </div>
      ) : null}
    </form>
  );
}
