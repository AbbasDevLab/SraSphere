import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export function Card({ title, description, className, children }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-fuchsia-200/50 bg-white/75 p-6 shadow-[0_10px_35px_rgba(111,53,219,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(197,24,173,0.14)] dark:border-fuchsia-900/30 dark:bg-slate-900/75",
        className,
      )}
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
