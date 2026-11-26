import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
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
