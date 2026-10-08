"use client";

import { animate } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

/**
 * Hero logo. On load it starts large in the middle of a blank screen, holds
 * briefly, then shrinks up into its normal spot while the rest of the page
 * reveals (see INTRO_DELAY in hero.tsx).
 */
export function IntroLogo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.opacity = "1";
      return;
    }

    const rect = el.getBoundingClientRect();
    const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);
    const scale = window.innerWidth < 640 ? 1.5 : 2;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    el.style.transform = `translateY(${dy}px) scale(${scale})`;
    const controls = animate(
      [
        [el, { opacity: 1 }, { duration: 0.5 }],
        [
          el,
          { y: [dy, 0], scale: [scale, 1] },
          { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
        ],
      ],
      { onComplete: () => (body.style.overflow = prevOverflow) },
    );

    return () => {
      controls.stop();
      body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div ref={ref} className="opacity-0">
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={850}
        height={300}
        className="-my-6 h-40 w-auto"
        priority
      />
    </div>
  );
}
