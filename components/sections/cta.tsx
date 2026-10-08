import Image from "next/image";
import { FadeIn } from "@/components/motion/in-view";
import { AppStoreBadge } from "@/components/shared/app-store-badge";
import { cta, testimonials, type Testimonial } from "@/config/site";
import { cn } from "@/lib/utils";

/** Split the testimonials into rows for the drifting background. */
const ROWS = [0, 1, 2].map((r) => testimonials.filter((_, i) => i % 3 === r));

function GhostCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-20 w-56 shrink-0 items-center gap-3 rounded-xl border bg-background px-4 shadow-sm">
      <Image
        src={t.avatar}
        alt=""
        width={36}
        height={36}
        className="rounded-full"
        unoptimized
      />
      <div className="flex-1 space-y-2">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/20" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/10" />
      </div>
    </div>
  );
}

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/40 py-28">
      {/* Endless drifting rows of cards behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex -rotate-6 scale-125 flex-col justify-center gap-4 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"
      >
        {ROWS.map((row, r) => (
          <div
            key={r}
            className={cn("drift flex w-max gap-4", r % 2 && "drift-reverse")}
            style={{ "--drift-dur": `${50 + r * 12}s` } as React.CSSProperties}
          >
            {/* Two identical halves so the -50% loop is seamless */}
            {[...row, ...row, ...row, ...row].map((t, i) => (
              <GhostCard key={`${t.handle}-${i}`} t={t} />
            ))}
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-4 text-center">
        <FadeIn scale={0.95}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {cta.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-3 text-muted-foreground">{cta.description}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <AppStoreBadge className="mt-8" />
        </FadeIn>
      </div>
    </section>
  );
}
