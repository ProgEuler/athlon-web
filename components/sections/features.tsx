import {
  FadeIn,
  PopIn,
  Stagger,
  StaggerItem,
} from "@/components/motion/in-view";
import { SectionHeading } from "@/components/shared/section-heading";
import { features } from "@/config/site";

export function Features() {
  return (
    <section id="features" className="border-y bg-muted/40 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <FadeIn>
          <SectionHeading
            title="Everything you need to play more"
            description="From booking the pitch to settling the score, AthlonGo has you covered."
          />
        </FadeIn>
        <Stagger
          stagger={0.08}
          className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <StaggerItem
              key={title}
              className="group flex flex-col items-center text-center"
            >
              <PopIn className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </PopIn>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                {description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
