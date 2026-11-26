import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white shadow-lg shadow-blue-900/10 hover:bg-blue-700",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
