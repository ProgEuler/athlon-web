import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { Logo } from "@/components/shared/logo";
import { navLinks, siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Reveal
        y={0}
        delay={1.2}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4"
      >
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <Button
          size="sm"
          nativeButton={false}
          render={<a href={siteConfig.appStoreUrl} />}
        >
          Download
        </Button>
      </Reveal>
    </header>
  );
}
