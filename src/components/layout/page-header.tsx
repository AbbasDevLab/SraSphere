import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-900 bg-hero-grid",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(115,213,233,0.12),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">{description}</p>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
