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
        src="/brand/logo.svg"
        alt="SraSphere brand logo"
        width={512}
        height={512}
        className={cn("block rounded-lg", imageClassName)}
        priority
      />
    </div>
  );
}
