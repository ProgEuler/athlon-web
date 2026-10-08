import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-4xl px-4 py-20">
      <SectionHeading
        title="Loved by thousands"
        description="See what people are saying about AthlonGo."
      />
      <div className="mt-12 columns-1 gap-4 sm:columns-2">
        {testimonials.map((t) => (
          <Card key={t.handle} className="mb-4 break-inside-avoid">
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
