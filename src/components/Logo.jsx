import React from "react";
import { Image } from "@/components/ui/image";
import { SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export default function Logo({ className, variant = "full" }) {
  if (variant === "mark") {
    return (
      <Image
        src={SITE.logoUrl}
        alt={`${SITE.name} logo`}
        className={cn("object-contain", className)}
        fittingType="fit"
      />
    );
  }
  return (
    <Image
      src={SITE.logoUrl}
      alt={`${SITE.name} logo`}
      className={cn("object-contain", className)}
      fittingType="fit"
    />
  );
}