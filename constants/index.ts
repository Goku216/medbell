// ─── Site Metadata ────────────────────────────────────────
export const SITE_NAME = "MedBell";
export const SITE_URL = "https://medbell.in";
export const SITE_TAGLINE = "Care Beyond Reminders";
export const SITE_DESCRIPTION =
  "MedBell helps Indian families stay connected through medicine care. Smart reminders, caregiver alerts, and real-time tracking — all in one place.";

// ─── Social ───────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/medbell",
  twitter: "https://twitter.com/medbell",
  linkedin: "https://linkedin.com/company/medbell",
  facebook: "https://facebook.com/medbell",
};

export const CONTACT_EMAIL = "hello@medbell.in";

// ─── Store Links ──────────────────────────────────────────
export const STORE_LINKS = {
  googlePlay: "#download",
  appStore: "#download",
};

// ─── Stats ────────────────────────────────────────────────
export const STATS = {
  familiesCount: "10,000+",
  rating: "4.9",
  reviewCount: "2,400+",
};

// ─── Colors (mirrored for JS usage) ──────────────────────
export const COLORS = {
  red: "#E8141E",
  redSoft: "#FFF0F0",
  redMid: "#FFCFCF",
  dark: "#111111",
  gray: "#4B5563",
  light: "#F9FAFB",
  white: "#FFFFFF",
  taken: "#10B981",
  takenBg: "#ECFDF5",
  missed: "#E8141E",
  missedBg: "#FFF1F0",
  pending: "#F59E0B",
  pendingBg: "#FFFBEB",
} as const;


export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Caregiver", href: "#caregiver" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;
