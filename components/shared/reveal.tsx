"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Fades (and optionally slides) its children in after `delay` seconds. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
