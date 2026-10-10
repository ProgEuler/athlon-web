import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={640}
        height={221}
        className="-my-3 h-14 w-auto"
        priority
      />
    </Link>
  );
}
