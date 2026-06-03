import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 mb-4"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-amber-400 text-[1rem]" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-[100px] bg-neutral-light"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <SectionHeading
            id="testimonials-heading"
            label="Testimonials"
            title={
              <>
                Loved by families
                <br />
                <span className="text-brand-red">across India.</span>
              </>
            }
            subtitle="Real stories from real families who trust MedBell every day."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(
            ({ id, quote, author, location, initials, tag, rating, avatarGradient }) => (
              <article
                key={id}
                className="bg-white rounded-card p-7 shadow-card border-[1.5px] border-gray-100 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,.1)]"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 bg-brand-red-soft text-brand-red text-[0.65rem] font-bold px-2.5 py-1 rounded-full">
                  {tag}
                </span>

                <StarRating rating={rating} />

                <blockquote>
                  <p className='text-[0.9rem] leading-[1.7] text-neutral-gray mb-5 italic before:content-["\\""] before:text-brand-red before:text-[1.4rem] before:font-extrabold before:leading-none before:align-[-6px] after:content-["\\""] after:text-brand-red after:text-[1.4rem] after:font-extrabold after:leading-none after:align-[-6px]'>
  {quote}
</p>
                  <footer className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                        avatarGradient ?? "from-red-300 to-brand-red"
                      } font-extrabold text-[0.8rem] text-white flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div>
                      <cite className="font-extrabold text-[0.85rem] not-italic block">
                        {author}
                      </cite>
                      <span className="text-[0.72rem] text-neutral-gray">
                        {location}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
