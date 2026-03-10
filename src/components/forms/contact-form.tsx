"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-fuchsia-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-fuchsia-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            placeholder="you@company.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Company
          </label>
          <input
            id="company"
            {...register("company", { required: "Company name is required" })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-fuchsia-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            placeholder="Company name"
          />
          {errors.company ? <p className="mt-1 text-xs text-red-500">{errors.company.message}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", {
              required: "Please enter a message",
              minLength: { value: 20, message: "Message should be at least 20 characters" },
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-fuchsia-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            placeholder="Tell us about your product, workflow, or platform goals."
          />
          {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-600 px-6 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {isSuccess ? (
        <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
          Thanks, your message has been submitted successfully. Our team will respond shortly.
        </div>
      ) : null}
    </div>
  );
}
