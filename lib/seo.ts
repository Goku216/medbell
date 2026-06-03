import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/constants";

/**
 * Organization structured data for Google Knowledge Panel
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@medbell.in",
      contactType: "customer support",
    },
    sameAs: [
      "https://instagram.com/medbell",
      "https://twitter.com/medbell",
      "https://linkedin.com/company/medbell",
    ],
  };
}

/**
 * SoftwareApplication schema for App Store discoverability
 */
export function getSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    operatingSystem: "Android, iOS",
    applicationCategory: "HealthApplication",
    description: SITE_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2400",
      bestRating: "5",
    },
  };
}

/**
 * FAQPage schema for rich results in SERP
 */
export function getFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
