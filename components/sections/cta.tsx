import { AppStoreBadge } from "@/components/shared/app-store-badge";
import { cta, testimonials } from "@/config/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/40 py-28">
      {/* decorative scattered cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex -rotate-6 scale-110 flex-wrap content-center justify-center gap-4 opacity-40"
      >
        {testimonials.slice(0, 10).map((t) => (
          <div
            key={t.handle}
            className="h-20 w-48 rounded-xl border bg-background"
          />
        ))}
      </div>
      <div className="relative mx-auto flex max-w-xl flex-col items-center px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {cta.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{cta.description}</p>
        <AppStoreBadge className="mt-8" />
      </div>
    </section>
  );
}
