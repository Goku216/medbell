// ─── Navigation ─────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Features ────────────────────────────────────────────
export interface FeatureCard {
  id: string;
  icon: string; // SVG path key
  title: string;
  description: string;
  bullets: string[];
}

// ─── How It Works ─────────────────────────────────────────
export interface Step {
  id: string;
  number: number;
  icon: string;
  title: string;
  description: string;
}

// ─── Caregiver Features ───────────────────────────────────
export interface CaregiverFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// ─── Testimonials ─────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  initials: string;
  tag: string;
  rating: number;
  avatarGradient?: string;
}

// ─── Timeline ─────────────────────────────────────────────
export interface TimelineItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

// ─── FAQ ──────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Footer ───────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// ─── Medicine Status ──────────────────────────────────────
export type MedicineStatus = "taken" | "missed" | "pending";

export interface MedicineEntry {
  time: string;
  name: string;
  status: MedicineStatus;
}

// ─── Social Link ──────────────────────────────────────────
export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "twitter" | "linkedin" | "facebook";
}
