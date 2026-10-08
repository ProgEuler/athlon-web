import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { footerLinks, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <Logo />
        <nav className="flex gap-6">
          {footerLinks.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <p>
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
