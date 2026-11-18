import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  dark?: boolean;
};

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  dark = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/brand/logo-dark.png.svg" : "/brand/logo-light.png.svg"}
        alt="SraSphere logo"
        className={cn("h-9 w-9", markClassName)}
        width={36}
        height={36}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-tight",
            dark ? "text-white" : "text-navy-900",
            wordmarkClassName,
          )}
        >
          SraSphere
        </span>
      ) : null}
    </span>
  );
}
