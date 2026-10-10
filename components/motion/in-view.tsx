"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal helpers. Pure CSS transitions (see `.rv` in globals.css) plus a
 * single IntersectionObserver, so no animation library ships to the client.
 */

/** Adds `is-visible` to the element once it first scrolls into view. */
function useReveal<T extends HTMLElement>(amount: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        io.disconnect();
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return ref;
}

/** Fades + slides up once when scrolled into view. */
export function FadeIn({
  children,
  delay = 0,
  y = 32,
  scale = 1,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      className={cn("rv", className)}
      style={
        {
          "--rv-y": `${y}px`,
          "--rv-scale": scale,
          "--rv-delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

/** Reveals its <StaggerItem> children one after another when in view. */
export function Stagger({
  children,
  stagger = 0.1,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) =>
        isValidElement<{ index?: number; stagger?: number }>(child)
          ? cloneElement(child, { index: i, stagger })
          : child,
      )}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  stagger?: number;
}) {
  return (
    <div
      className={cn("rv rv-item", className)}
      style={
        {
          "--rv-y": "32px",
          "--rv-delay": `${index * stagger}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

/** Icon badge that pops in when its Stagger parent reveals. */
export function PopIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("rv-pop", className)}>{children}</div>;
}
