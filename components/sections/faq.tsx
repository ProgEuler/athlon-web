import { FadeIn, Stagger, StaggerItem } from "@/components/motion/in-view";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-2xl px-4 pb-20">
      <FadeIn>
        <SectionHeading title="Frequently asked questions" />
      </FadeIn>
      <Accordion className="mt-10">
        <Stagger stagger={0.08}>
          {faqs.map((f) => (
            <StaggerItem key={f.q}>
              <AccordionItem value={f.q} className="border-b">
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            </StaggerItem>
          ))}
        </Stagger>
      </Accordion>
    </section>
  );
}
