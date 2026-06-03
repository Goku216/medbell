import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_ITEMS } from "@/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-[100px] bg-about-gradient"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Story card */}
          <div>
            <SectionHeading
              id="about-heading"
              label="Our Story"
              title={
                <>
                  Born from a
                  <br />
                  <span className="text-brand-red">family&apos;s worry.</span>
                </>
              }
              align="left"
              className="mb-5"
            />

            <div className="bg-white rounded-[24px] p-8 shadow-card border-[1.5px] border-gray-100 relative overflow-hidden">
              {/* Decorative quote mark */}
              <span
                className="absolute top-[-16px] left-4 text-[8rem] text-brand-red-mid font-extrabold font-head leading-none pointer-events-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10 pt-10">
                <p className="text-[1rem] leading-[1.8] text-neutral-gray mb-5">
                  I was working in Bangalore when my mother back in Jaipur was
                  diagnosed with hypertension and diabetes. Every evening I&apos;d
                  call to check if she&apos;d taken her medicines — but there were days
                  she&apos;d forget, and I&apos;d only find out after something went wrong.
                  That helplessness became MedBell.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-brand-red to-red-400 rounded-full font-extrabold text-[0.9rem] text-white flex items-center justify-center">
                    DS
                  </div>
                  <div>
                    <cite className="font-extrabold text-[0.9rem] not-italic block">
                      Dipak Sharma
                    </cite>
                    <span className="text-[0.75rem] text-neutral-gray">
                      Founder, MedBell
                    </span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-brand-red-mid"
              aria-hidden="true"
            />

            <ol className="flex flex-col gap-5 relative">
              {TIMELINE_ITEMS.map(({ id, emoji, title, description }) => (
                <li key={id} className="flex gap-5">
                  {/* Timeline dot */}
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-[0.75rem] font-extrabold text-white flex-shrink-0 relative z-10">
                    {emoji}
                  </div>

                  <div className="pt-1.5">
                    <h3 className="font-head font-extrabold text-[0.95rem] mb-1">
                      {title}
                    </h3>
                    <p className="text-[0.82rem] text-neutral-gray leading-[1.6]">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
