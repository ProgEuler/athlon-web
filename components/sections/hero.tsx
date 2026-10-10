import { AppStoreBadge } from "@/components/shared/app-store-badge";
import Image from "next/image";
import { PhoneFrame } from "@/components/shared/phone-frame";
import { Reveal } from "@/components/shared/reveal";
import { Splash } from "@/components/shared/splash";
import { screenshots, siteConfig } from "@/config/site";

/** Seconds before the content starts revealing (logo intro runs first). */
const INTRO_DELAY = 0.3;

export function Hero() {
  return (
    <section className="overflow-hidden pt-12 sm:pt-20">
      <Splash />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <Image
          id="hero-logo"
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={640}
          height={221}
          className="-my-6 h-40 w-auto"
          priority
        />
        <Reveal delay={INTRO_DELAY}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>
        </Reveal>
        <Reveal delay={INTRO_DELAY + 0.1}>
          <p className="mt-4 max-w-xl text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>
        </Reveal>
        <Reveal delay={INTRO_DELAY + 0.2}>
          <AppStoreBadge className="mt-8" />
        </Reveal>
      </div>

      {/* Staggered, edge-bleeding phone row that rises in last */}
      <Reveal delay={INTRO_DELAY + 0.4} y={120} duration={0.9}>
        <div className="mt-14 flex justify-center gap-4 sm:gap-6">
          {screenshots.map((src, i) => (
            <PhoneFrame
              key={src}
              src={src}
              priority={i < 3}
              className={`w-40 sm:w-56 ${
                i % 2 === 0 ? "translate-y-0" : "translate-y-10"
              } ${i === 0 || i === 4 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
