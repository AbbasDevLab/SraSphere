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
        "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80",
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
