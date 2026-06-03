"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Tracks which section (by id) is currently scrolled into view.
 * Uses a top offset to trigger earlier than the viewport edge.
 *
 * @param sectionIds - Array of section IDs to watch (without #)
 * @param offset - Pixels from top to trigger activation (default: 100)
 * @returns The id of the currently active section
 *
 * @example
 * const activeSection = useScrollSpy(["home", "features", "faq"]);
 */
export function useScrollSpy(
  sectionIds: string[],
  offset: number = 100
): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? ""
  );

  const handleScroll = useCallback(() => {
    let current = sectionIds[0] ?? "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - offset) {
        current = id;
      }
    }

    setActiveSection(current);
  }, [sectionIds, offset]);

  useEffect(() => {
    // Run once on mount to set initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
