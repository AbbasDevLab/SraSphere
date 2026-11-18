import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-cyan-300" : "text-cyan-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-tight sm:text-4xl",
          dark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 leading-relaxed", dark ? "text-navy-100" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
