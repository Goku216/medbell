import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { FOOTER_COLUMNS, SOCIAL_LINKS_LIST } from "@/data";
import { CONTACT_EMAIL } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Medical disclaimer */}
        <div className="bg-white/5 rounded-[10px] px-4 py-3 mb-12 text-center">
          <p className="text-[0.72rem] text-white/35 leading-relaxed">
            ⚕️ MedBell is a reminder app and not a substitute for professional
            medical advice, diagnosis, or treatment. Always consult your doctor
            or healthcare provider for medical decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="block font-head font-extrabold text-[1.3rem] mb-3"
              aria-label="MedBell Home"
            >
              <span className="text-brand-red">Med</span>Bell
            </Link>
            <p className="text-[0.82rem] text-white/50 leading-[1.7] mb-5">
              Care beyond reminders. MedBell connects Indian families through
              medicine care — helping loved ones stay healthy and families stay
              close, no matter the distance.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS_LIST.map(({ label, href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/8 rounded-[10px] flex items-center justify-center transition-colors hover:bg-brand-red"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name={icon} className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column links */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={`${col.title} links`}>
              <h3 className="font-head font-bold text-[0.85rem] text-white/90 mb-4 uppercase tracking-[0.06em]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[0.82rem] text-white/45 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-5 flex flex-wrap justify-between items-center gap-3">
          <p className="text-[0.75rem] text-white/30">
            © {new Date().getFullYear()} MedBell Technologies Pvt. Ltd. Made
            with ❤️ in India.
          </p>
          <p className="text-[0.75rem] text-white/30">
            Designed for Indian families. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
