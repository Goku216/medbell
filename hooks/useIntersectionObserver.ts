"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  /**
   * Once true, stop observing (one-time reveal).
   * Set to false for elements that should re-animate on scroll.
   */
  once?: boolean;
}

/**
 * Tracks whether an element has entered the viewport.
 * Used for scroll-triggered fade-in animations.
 *
 * @example
 * const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
 * return <div ref={ref} className={isVisible ? "opacity-100" : "opacity-0"} />;
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px", once = true } =
    options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
