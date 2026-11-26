import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  variant?: "wordmark" | "compact";
};

export function BrandLogo({ className, imageClassName, variant = "wordmark" }: BrandLogoProps) {
  if (variant === "compact") {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        <Image
          src="/brand/Glossy_Blue_S-Wave_Logo.png"
          alt=""
          aria-hidden="true"
          width={1254}
          height={1254}
          className={cn("h-10 w-10 shrink-0 rounded-xl object-cover", imageClassName)}
          priority
        />
        <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-slate-950">
          {siteConfig.name}
        </span>
      </span>
    );
  }

  return (
    <span className={cn("block", className)}>
      <Image
        src="/brand/SraSphere_Digital_Solutions_Logo.png"
        alt="SraSphere Digital Solutions Studio"
        width={2000}
        height={667}
        sizes="(max-width: 640px) 140px, 180px"
        className={cn("block h-auto w-full", imageClassName)}
        priority
      />
    </span>
  );
}
