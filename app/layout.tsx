import type { Metadata, Viewport } from "next";
import { Poppins, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_TAGLINE } from "@/constants";
import {
  getOrganizationSchema,
  getSoftwareAppSchema,
  getFAQSchema,
} from "@/lib/seo";
import { FAQ_ITEMS } from "@/data";

// ─── Font Optimization ────────────────────────────────────
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

// ─── Viewport ────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#E8141E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// ─── Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "medicine reminder app",
    "medication tracker India",
    "caregiver app",
    "missed dose alert",
    "elderly care app",
    "family health app",
    "MedBell",
    "medicine schedule",
    "pill reminder",
    "health tracker",
    "Indian family app",
    "parent care app",
  ],
  authors: [{ name: "MedBell Technologies Pvt. Ltd." }],
  creator: "MedBell Technologies",
  publisher: "MedBell Technologies Pvt. Ltd.",
  category: "Health & Fitness",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MedBell — Care Beyond Reminders. Medicine tracking app for Indian families.",
      },
    ],
  },

  // Twitter / X cards
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: "@medbell",
    site: "@medbell",
    images: ["/og-image.png"],
  },

  // App links for Google Play / App Store
  appLinks: {
    android: {
      package: "in.medbell.app",
      app_name: SITE_NAME,
    },
    ios: {
      url: "https://apps.apple.com/app/medbell",
      app_name: SITE_NAME,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#E8141E" },
    ],
  },

  manifest: "/site.webmanifest",
  canonical: SITE_URL,

  // Verification (add your tokens when available)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

// ─── Root Layout ──────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const softwareSchema = getSoftwareAppSchema();
  const faqSchema = getFAQSchema(FAQ_ITEMS);

  return (
    <html lang="en-IN" className={`${poppins.variable} ${manrope.variable}`}>
      <head>
        {/* Preconnect to Google Fonts origin (next/font handles the actual loading) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body text-neutral-dark bg-white antialiased overflow-x-hidden">
        {children}

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
