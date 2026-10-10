import { FadeIn, Stagger, StaggerItem } from "@/components/motion/in-view";
import { PhoneFrame } from "@/components/shared/phone-frame";
import { highlights, spotlight } from "@/config/site";

export function Spotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="whitespace-pre-line text-3xl font-bold tracking-tight sm:text-5xl">
            {spotlight.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-3 max-w-md text-muted-foreground">
            {spotlight.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={80} scale={0.92}>
          <PhoneFrame
            src={spotlight.image}
            className="mt-10 w-60 sm:w-72"
            alt="Booking screen"
          />
        </FadeIn>
      </div>

      <Stagger stagger={0.15} className="mt-24 grid gap-12 md:grid-cols-3">
        {highlights.map((h) => (
          <StaggerItem
            key={h.image}
            className="group flex flex-col items-center text-center"
          >
            <PhoneFrame
              src={h.image}
              className="w-48 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-1"
            />
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              {h.text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
