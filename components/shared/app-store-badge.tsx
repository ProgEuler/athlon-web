import { Apple, Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const badge =
  "inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-85";

function Badge({
  href,
  icon,
  small,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  small: string;
  label: string;
}) {
  return (
    <a href={href} className={badge}>
      {icon}
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px]">{small}</span>
        <span className="text-lg font-semibold">{label}</span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-3", className)}>
      <Badge
        href={siteConfig.appStoreUrl}
        icon={<Apple className="size-6 fill-current" />}
        small="Download on the"
        label="App Store"
      />
      <Badge
        href={siteConfig.playStoreUrl}
        icon={<Play className="size-6 fill-current" />}
        small="Get it on"
        label="Google Play"
      />
    </div>
  );
}
