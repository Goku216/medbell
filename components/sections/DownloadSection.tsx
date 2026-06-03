import { Button } from "@/components/ui/Button";
import { STORE_LINKS } from "@/constants";

function DownloadPhonePreview() {
  return (
    <div className="w-[200px] bg-neutral-dark rounded-[32px] p-2 shadow-[0_24px_60px_rgba(0,0,0,.3)]">
      <div className="bg-brand-red-soft rounded-[26px] h-[380px] flex flex-col items-center justify-center gap-3">
        {/* App icon */}
        <div className="w-[70px] h-[70px] bg-white rounded-[20px] flex items-center justify-center shadow-[0_4px_20px_rgba(232,20,30,.2)]">
          <svg
            viewBox="0 0 38 38"
            width="36"
            height="36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M19 30L13.6 22.2C12 20.6 11 18.4 11 16C11 11.58 14.58 8 19 8C23.42 8 27 11.58 27 16C27 18.4 26 20.6 24.4 22.2L19 30Z"
              stroke="#E8141E"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M16 16h6M19 13v6"
              stroke="#E8141E"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 className="font-head font-extrabold text-[1rem] text-neutral-dark">
          MedBell
        </h3>
        <p className="text-[0.72rem] text-neutral-gray text-center px-4">
          Care beyond reminders
        </p>
        <button
          className="bg-brand-red text-white rounded-[10px] px-6 py-2.5 font-extrabold text-[0.8rem] cursor-default"
          tabIndex={-1}
          aria-hidden="true"
        >
          Open App
        </button>
      </div>
    </div>
  );
}

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-[80px] bg-brand-red relative overflow-hidden"
      aria-labelledby="download-heading"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/8 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[60px] -left-[60px] w-[300px] h-[300px] bg-white/6 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[60px] items-center">
          {/* Content */}
          <div>
            <h2
              id="download-heading"
              className="font-head text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white leading-[1.15] mb-3"
            >
              Start caring better
              <br />
              with MedBell.
            </h2>
            <p className="text-white/80 text-[1.05rem] mb-7">
              Never miss a dose. Never worry alone.
              <br />
              Download free for iOS and Android.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                href={STORE_LINKS.googlePlay}
                variant="download"
                store="google"
                aria-label="Download MedBell on Google Play"
              />
              <Button
                href={STORE_LINKS.appStore}
                variant="download"
                store="apple"
                aria-label="Download MedBell on App Store"
              />
            </div>
          </div>

          {/* Phone preview — hidden on mobile */}
          <div className="hidden lg:block">
            <DownloadPhonePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
