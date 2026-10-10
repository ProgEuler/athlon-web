"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

/** Seconds the logo rests in the middle of the screen before flying up. */
const HOLD_MS = 500;
const FLY_MS = 700;

// Module-level so client-side navigations back to "/" don't replay it,
// while a hard reload (fresh module) does.
let played = false;

/**
 * Full-screen splash: logo centered on a blank screen, then it glides into the
 * hero logo's position (#hero-logo) while the overlay fades away.
 * Server-rendered, so it covers the page from the very first paint.
 */
export function Splash() {
  const [done, setDone] = useState(played);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (played) return;

    const finish = () => {
      played = true;
      document.documentElement.dataset.splash = "done";
      setDone(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const timer = setTimeout(() => {
      const hero = document.getElementById("hero-logo");
      const logo = logoRef.current;
      const overlay = overlayRef.current;
      if (!hero || !logo || !overlay) return finish();

      const to = hero.getBoundingClientRect();
      const from = logo.getBoundingClientRect();
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      logo.style.transition = `transform ${FLY_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`;
      logo.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1)`;
      overlay.style.transition = `background-color ${FLY_MS * 0.9}ms ease`;
      overlay.style.backgroundColor = "transparent";

      logo.addEventListener("transitionend", finish, { once: true });
      setTimeout(finish, FLY_MS + 300); // safety net
    }, HOLD_MS);

    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <Image
        ref={logoRef}
        src={siteConfig.logo}
        alt=""
        width={640}
        height={221}
        priority
        className="splash-logo h-40 w-auto"
        style={{ transform: "scale(1.7)" }}
      />
    </div>
  );
}
