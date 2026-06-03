import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { FEATURES } from "@/data";
import { STORE_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Single feature card
 */
function FeatureCard({
  icon,
  title,
  description,
  bullets,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  delay: number;
}) {
  return (
    <article
      className={cn(
        "bg-white border-[1.5px] border-gray-100 rounded-card p-6 transition-all duration-300 cursor-default",
        "hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(232,20,30,.12)] hover:border-brand-red-mid"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-[54px] h-[54px] bg-brand-red-soft rounded-[14px] flex items-center justify-center mb-4">
        <Icon name={icon} className="w-[26px] h-[26px] text-brand-red" />
      </div>

      <h3 className="font-head font-extrabold text-[1rem] mb-2">{title}</h3>
      <p className="text-[0.85rem] text-neutral-gray leading-[1.65] mb-4">
        {description}
      </p>

      {/* Bullet pills */}
      <div className="flex flex-wrap gap-1.5">
        {bullets.map((bullet) => (
          <span
            key={bullet}
            className="flex items-center gap-1 text-[0.75rem] font-bold text-neutral-dark"
          >
            {/* Checkmark circle */}
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="8" fill="#E8141E" />
              <path
                d="M5 8l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {bullet}
          </span>
        ))}
      </div>
    </article>
  );
}

/**
 * Bottom CTA bar below feature cards
 */
function FeaturesCTA() {
  return (
    <div className="mt-12 bg-brand-red-soft rounded-[20px] px-10 py-8 flex items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-4">
        <Icon
          name="users"
          className="w-11 h-11 text-brand-red flex-shrink-0"
        />
        <div>
          <h3 className="font-head font-extrabold text-[1.1rem]">
            Care made simple. Connection made stronger.
          </h3>
          <p className="text-[0.85rem] text-neutral-gray">
            With MedBell, you&apos;re never far from the people who matter.
          </p>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Button
          href={STORE_LINKS.googlePlay}
          variant="store-sm"
          store="google"
          aria-label="Get MedBell on Google Play"
        />
        <Button
          href={STORE_LINKS.appStore}
          variant="store-sm"
          store="apple"
          aria-label="Download MedBell on App Store"
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-[100px] bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <FadeUp>
            <SectionHeading
              id="features-heading"
              label="Features"
              title={
                <>
                  Everything you need,
                  <br />
                  for better care{" "}
                  <span className="text-brand-red">together.</span>
                </>
              }
              subtitle="MedBell is more than a reminder app. It connects families and caregivers so your loved ones never miss a dose."
            />
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FadeUp key={feature.id} delay={([0, 1, 2, 1, 2, 3][index] ?? 0) as 0 | 1 | 2 | 3}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bullets={feature.bullets}
                delay={[0, 100, 200, 100, 200, 300][index] ?? 0}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <FeaturesCTA />
        </FadeUp>
      </div>
    </section>
  );
}
