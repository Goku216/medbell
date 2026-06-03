"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: React.ElementType;
}

const DELAY_CLASSES: Record<number, string> = {
  0: "",
  1: "[transition-delay:100ms]",
  2: "[transition-delay:200ms]",
  3: "[transition-delay:300ms]",
  4: "[transition-delay:400ms]",
};

/**
 * Wraps children in a scroll-triggered fade-up reveal animation.
 * Uses IntersectionObserver — fires once when element enters viewport.
 * Respects `prefers-reduced-motion` via CSS (globals.css).
 *
 * @example
 * <FadeUp delay={1}>
 *   <FeatureCard ... />
 * </FadeUp>
 */
export function FadeUp({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: FadeUpProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        DELAY_CLASSES[delay],
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
