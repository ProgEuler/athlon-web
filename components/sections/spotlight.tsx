import { PhoneFrame } from "@/components/shared/phone-frame";
import { highlights, spotlight } from "@/config/site";

export function Spotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="flex flex-col items-center text-center">
        <h2 className="whitespace-pre-line text-3xl font-bold tracking-tight sm:text-5xl">
          {spotlight.title}
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          {spotlight.description}
        </p>
        <PhoneFrame
          src={spotlight.image}
          className="mt-10 w-60 sm:w-72"
          alt="Weekly plan screen"
        />
      </div>

      <div className="mt-24 grid gap-12 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.image} className="flex flex-col items-center text-center">
            <PhoneFrame src={h.image} className="w-48" />
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              {h.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
