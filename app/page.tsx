import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CaregiverSection } from "@/components/sections/CaregiverSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FAQSection } from "@/components/sections/FAQSection";

/**
 * Home page — statically generated at build time.
 *
 * Architecture decisions:
 * - All sections are Server Components by default (no "use client" unless state/effects needed)
 * - Navbar & FAQ require client interactivity so they carry "use client"
 * - Page-level component itself remains a pure server component
 * - Each section is independently importable and composable
 */
export default function HomePage() {
  return (
    <>
      {/* Sticky navbar — needs scroll tracking (client) */}
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Skip-to-content target for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-brand-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CaregiverSection />
        <AboutSection />
        <TestimonialsSection />
        <DownloadSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
