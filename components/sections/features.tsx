import { SectionHeading } from "@/components/shared/section-heading";
import { features } from "@/config/site";

export function Features() {
  return (
    <section id="features" className="border-y bg-muted/40 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          title="Everything you need to stay on time"
          description="Powerful features that make planning feel effortless."
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
