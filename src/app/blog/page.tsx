import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on SaaS architecture, automation, and cloud systems.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Blog</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Content structure is ready. Articles on architecture, scaling, and product strategy will be published soon.
      </p>
    </div>
  );
}
