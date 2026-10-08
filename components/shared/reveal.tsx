import { cn } from "@/lib/utils";

/**
 * Fades + slides its children in after `delay` seconds.
 * Pure CSS (see `.reveal` in globals.css) so it runs without waiting for JS.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
          "--reveal-dur": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
