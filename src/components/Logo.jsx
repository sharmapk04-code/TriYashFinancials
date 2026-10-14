import React from "react";
import { Image } from "@/components/ui/image";
import { SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export default function Logo({ className, src }) {
  return (
    <Image
      src={src || SITE.logoUrl}
      alt={`${SITE.name} logo`}
      className={cn("object-contain", className)}
      fittingType="fit"
    />
  );
}