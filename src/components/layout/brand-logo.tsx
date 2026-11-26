import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  dark?: boolean;
};

export function BrandLogo({ className, imageClassName, dark = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex overflow-hidden rounded-md bg-navy-900 shadow-sm",
        dark ? "ring-1 ring-white/10" : "ring-1 ring-navy-900/10",
        className,
      )}
    >
      <Image
        src="/brand/SraSphere_Digital_Solutions_Logo.png"
        alt="SraSphere Digital Solutions Studio"
        width={2172}
        height={724}
        priority
        className={cn("block h-10 w-auto object-contain", imageClassName)}
      />
    </span>
  );
}
