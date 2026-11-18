import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outlineLight";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = BaseProps & {
  href: string;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white shadow-lg shadow-navy-900/15 hover:bg-navy-700",
  secondary:
    "border border-navy-900/15 bg-white text-navy-900 hover:border-navy-900/30 hover:bg-navy-50",
  ghost: "text-navy-900 hover:bg-navy-50",
  outlineLight:
    "border border-white/25 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-white/10",
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 disabled:cursor-not-allowed disabled:opacity-60",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
