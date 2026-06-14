import type {
  FeatureCard,
  Step,
  CaregiverFeature,
  Testimonial,
  TimelineItem,
  FAQItem,
  FooterColumn,
  SocialLink,
} from "@/types";

// ─── Features ────────────────────────────────────────────
export const FEATURES: FeatureCard[] = [
  {
    id: "reminders",
    icon: "bell",
    title: "Smart Medicine Reminders",
    description:
      "Timely alerts for each medicine, so doses are never missed. Custom schedules for every family member.",
    bullets: ["Custom timings", "Repeat & snooze"],
  },
  {
    id: "caregiver-alerts",
    icon: "users",
    title: "Caregiver Alerts",
    description:
      "Caregivers get notified instantly if a dose is missed. Stay connected no matter the distance.",
    bullets: ["Missed dose alerts", "Real-time notifications"],
  },
  {
    id: "tracking",
    icon: "clipboard-check",
    title: "Medicine Tracking",
    description:
      "Track taken, missed & pending medicines with full history and daily overview reports.",
    bullets: ["Daily overview", "History & reports"],
  },
  {
    id: "dashboard",
    icon: "tablet",
    title: "Caregiver Dashboard",
    description:
      "Caregivers can view schedules, updates & history remotely. Full visibility in one place.",
    bullets: ["Multiple profiles", "At-a-glance updates"],
  },
  {
    id: "privacy",
    icon: "lock",
    title: "Safe & Private",
    description:
      "Your data is encrypted and always kept private. We never share your health data.",
    bullets: ["Secure & encrypted", "100% privacy"],
  },
  {
    id: "peace",
    icon: "heart",
    title: "Peace of Mind",
    description:
      "Stay connected and worry-free knowing your loved ones are always cared for, from anywhere.",
    bullets: ["Family connection", "Better health habits"],
  },
];

// ─── How It Works Steps ───────────────────────────────────
export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: "add-medicines",
    number: 1,
    icon: "plus-clipboard",
    title: "Add Medicines",
    description:
      "Add your loved one's medicines, timings, and dosage in just a few taps.",
  },
  {
    id: "get-reminders",
    number: 2,
    icon: "bell",
    title: "Get Reminders",
    description:
      "Timely reminders notify your loved one to take their medicines on time, every time.",
  },
  {
    id: "track-intake",
    number: 3,
    icon: "check-square",
    title: "Track Medicine Intake",
    description: "Your loved one can mark medicines as taken, so nothing is missed.",
  },
  {
    id: "caregiver-notified",
    number: 4,
    icon: "users",
    title: "Caregiver Gets Notified",
    description:
      "Caregivers receive instant alerts and can monitor medicine intake from anywhere.",
  },
];

// ─── Caregiver Features ───────────────────────────────────
export const CAREGIVER_FEATURES: CaregiverFeature[] = [
  {
    id: "instant-alerts",
    icon: "bell",
    title: "Instant Alerts",
    description:
      "Get notified immediately if a dose is missed, so you can follow up right away.",
  },
  {
    id: "realtime-updates",
    icon: "activity",
    title: "Real-time Updates",
    description:
      "See what medicines are taken, missed or pending — updated live throughout the day.",
  },
  {
    id: "care-anywhere",
    icon: "globe",
    title: "Care from Anywhere",
    description:
      "Monitor and support your loved ones from anywhere in the world, with full visibility.",
  },
];

export const CAREGIVER_TAGS = [
  { label: "View Schedules", icon: "calendar" },
  { label: "Missed Dose Alerts", icon: "bell" },
  { label: "History & Reports", icon: "bar-chart" },
  { label: "Multiple Profiles", icon: "users" },
  { label: "Secure & Private", icon: "lock" },
];

// ─── Testimonials ─────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rahul-khanna",
    quote:
      "Now I know my father never misses his medicines. I get an alert if anything is missed — it's like being right there beside him even from Mumbai.",
    author: "Rahul Khanna",
    location: "Mumbai • Son of heart patient",
    initials: "RK",
    tag: "Working Professional",
    rating: 5,
  },
  {
    id: "savitri-devi",
    quote:
      "This app is so simple even I can use it. The reminder bell is loud and clear. My daughter added all my medicines and now I never forget. Bahut achha hai!",
    author: "Savitri Devi",
    location: "Jaipur • Diabetic, 67 years",
    initials: "SD",
    tag: "Elderly User",
    rating: 5,
    avatarGradient: "from-rose-300 to-brand-red",
  },
  {
    id: "priya-sharma",
    quote:
      "This app gives me peace of mind I never had before. My parents are in Delhi and I'm in Bangalore — MedBell makes me feel like I'm right there with them.",
    author: "Priya Sharma",
    location: "Bangalore • Daughter & Caregiver",
    initials: "PS",
    tag: "Caregiver",
    rating: 5,
    avatarGradient: "from-red-300 to-red-500",
  },
  {
    id: "anita-mehta",
    quote:
      "We added both my in-laws to MedBell. The dashboard shows everything at once. Our family group chat is now about happy things, not medicine worries!",
    author: "Anita Mehta",
    location: "Pune • Managing 2 family members",
    initials: "AM",
    tag: "Family",
    rating: 5,
    avatarGradient: "from-red-200 to-red-400",
  },
  {
    id: "vijay-rao",
    quote:
      "My doctor suggested it. The tracking reports help him too — he can see my medicine history during consultations. Very useful feature that I didn't expect.",
    author: "Vijay Rao",
    location: "Hyderabad • BP & diabetes patient",
    initials: "VR",
    tag: "Doctor Referred",
    rating: 5,
    avatarGradient: "from-red-400 to-red-600",
  },
  {
    id: "mohan-gupta",
    quote:
      "My son set it up in 10 minutes. Now the app reminds me, I mark it done, and my son sees it. No more phone calls asking 'Papa did you take your tablet?'",
    author: "Mohan Gupta",
    location: "Delhi • 72 years, retired",
    initials: "MG",
    tag: "Senior Citizen",
    rating: 5,
    avatarGradient: "from-red-300 to-rose-600",
  },
];

// ─── About Timeline ───────────────────────────────────────
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "problem",
    emoji: "💡",
    title: "The Problem We Felt",
    description:
      "Millions of Indian families live apart. Children work in cities while parents age at home — often alone, managing complex medicine schedules.",
  },
  {
    id: "why",
    emoji: "❤️",
    title: "Why We Built MedBell",
    description:
      "We built MedBell because technology should bring families closer — not make care feel more distant. It's a bridge, not just a bell.",
  },
  {
    id: "mission",
    emoji: "🌱",
    title: "Our Mission",
    description:
      "To make compassionate, connected healthcare accessible to every Indian family — whether you live next door or 1,000 km away.",
  },
  {
    id: "today",
    emoji: "🚀",
    title: "Where We Are Today",
    description:
      "10,000+ families across India trust MedBell daily. We're just getting started — because every family deserves peace of mind.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "free",
    question: "Is MedBell free to use?",
    answer:
      "Yes! MedBell is free to download and use with all core features including reminders, tracking, and caregiver alerts. We offer optional premium features for power users.",
  },
  {
    id: "caregiver",
    question: "How does the caregiver feature work?",
    answer:
      "You simply add a caregiver (family member or friend) by sharing an invite link. They get their own app view with a dashboard showing all medicine activity in real-time.",
  },
  {
    id: "privacy",
    question: "Is my health data safe and private?",
    answer:
      "Absolutely. All data is encrypted end-to-end. We never sell or share your health data with anyone. You have full control over what caregivers can and cannot see.",
  },
  {
    id: "multiple",
    question: "Can I manage multiple family members?",
    answer:
      "Yes! You can add multiple profiles — for parents, grandparents, siblings — and manage all their medicine schedules from one caregiver dashboard.",
  },
  {
    id: "offline",
    question: "Does MedBell work without internet?",
    answer:
      "Medicine reminders will still ring locally without internet. For caregiver alerts and live updates to sync, a connection is needed.",
  },
  {
    id: "elderly",
    question: "Is the app easy enough for elderly users?",
    answer:
      "MedBell is designed with senior-friendliness as a priority — large text, clear buttons, simple navigation, and loud reminders. Our elderly users love it!",
  },
];

// ─── Footer ───────────────────────────────────────────────
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Caregiver", href: "#caregiver" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "#" },
      { label: "hello@medbell.in", href: "mailto:hello@medbell.in" },
    ],
  },
];

export const SOCIAL_LINKS_LIST: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
];
