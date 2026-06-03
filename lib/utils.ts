import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely — resolves conflicts using tailwind-merge
 * and conditionals using clsx.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Map medicine status to Tailwind color classes
 */
export function getStatusClasses(status: "taken" | "missed" | "pending"): {
  text: string;
  bg: string;
} {
  const map = {
    taken: { text: "text-status-taken", bg: "bg-status-taken-bg" },
    missed: { text: "text-brand-red", bg: "bg-status-missed-bg" },
    pending: { text: "text-status-pending", bg: "bg-status-pending-bg" },
  } as const;
  return map[status];
}

/**
 * Delay class helper for staggered animations
 */
export function delayClass(index: number, base = 100): string {
  return `[animation-delay:${index * base}ms]`;
}
