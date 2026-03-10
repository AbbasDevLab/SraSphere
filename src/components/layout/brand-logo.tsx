import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/brand/logo-light.png"
        alt="SraSphere brand logo"
        width={180}
        height={180}
        className={cn("block rounded-lg dark:hidden", imageClassName)}
        priority
      />
      <Image
        src="/brand/logo-dark.png"
        alt="SraSphere brand logo"
        width={180}
        height={180}
        className={cn("hidden rounded-lg dark:block", imageClassName)}
        priority
      />
    </div>
  );
}
