import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StatBox } from "@/components/ui/StatusBadge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { STORE_LINKS, STATS } from "@/constants";

/**
 * App bar inside hero phone mockup
 */
function PhoneAppHeader() {
  return (
    <div className="bg-brand-red px-[18px] pt-4 pb-3 text-white">
      <h4 className="text-[0.85rem] font-bold opacity-85">Today&apos;s Summary</h4>
      <h3 className="text-[1.1rem] font-extrabold">20 May, 2024</h3>
    </div>
  );
}

/**
 * Medicine row in the phone mockup list
 */
function MedRow({
  time,
  name,
  status,
}: {
  time: string;
  name: string;
  status: "taken" | "missed" | "pending";
}) {
  const colors = {
    taken: "text-status-taken",
    missed: "text-brand-red",
    pending: "text-status-pending",
  };
  const labels = { taken: "Taken", missed: "Missed", pending: "Pending" };

  return (
    <div className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0 text-[0.7rem]">
      <span className="text-neutral-gray font-semibold w-[55px]">{time}</span>
      <span className="flex-1 font-bold">{name}</span>
      <span className={`font-bold text-[0.65rem] ${colors[status]}`}>
        {labels[status]}
      </span>
    </div>
  );
}

/**
 * Bottom nav bar of phone mockup
 */
function PhoneNav() {
  const items = [
    { icon: "dashboard", label: "Dashboard", active: true },
    { icon: "clipboard", label: "Medicines", active: false },
    { icon: "bell", label: "Alerts", active: false },
    { icon: "user", label: "Profile", active: false },
  ];

  return (
    <div className="flex justify-around py-2.5 bg-white border-t border-gray-100 mt-2">
      {items.map(({ icon, label, active }) => (
        <div
          key={label}
          className={`flex flex-col items-center gap-0.5 text-[0.55rem] font-semibold ${
            active ? "text-brand-red" : "text-neutral-gray"
          }`}
          aria-label={label}
        >
          <Icon name={icon} className="w-[18px] h-[18px]" />
          {label}
        </div>
      ))}
    </div>
  );
}

/**
 * Floating notification badge
 */
function FloatingNotification() {
  return (
    <div
      className="absolute bottom-[60px] right-[-80px] bg-white rounded-[16px] px-4 py-3 shadow-notif w-[220px] border-l-4 border-brand-red animate-notif-pop max-sm:right-[-20px] max-sm:bottom-5"
      role="alert"
      aria-label="Missed dose notification example"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-brand-red rounded-[10px] flex items-center justify-center flex-shrink-0">
          <Icon name="bell" className="w-[18px] h-[18px] text-white" />
        </div>
        <div className="flex-1">
          <div className="text-[0.75rem] font-extrabold text-brand-red">
            Missed Dose Alert
          </div>
          <div className="text-[0.68rem] text-neutral-gray font-semibold">
            Mom missed 1:00 PM
            <br />
            Vitamin D3
          </div>
        </div>
        <div className="text-[0.6rem] text-neutral-gray self-start">1m ago</div>
      </div>
    </div>
  );
}

/**
 * Caregiver status badge floating top-left of phone
 */
function CaregiverBadge() {
  return (
    <div
      className="absolute top-10 left-[-70px] bg-white rounded-[14px] px-3.5 py-2.5 shadow-notif animate-float-delayed max-sm:left-[-10px] max-sm:top-5"
      aria-label="Caregiver monitoring example"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-red-300 to-brand-red rounded-full flex items-center justify-center text-[0.7rem] font-extrabold text-white">
          SD
        </div>
        <div>
          <div className="text-[0.72rem] font-extrabold">Savitri Devi</div>
          <div className="text-[0.6rem] text-neutral-gray font-semibold">
            Your Mother · 67 yrs
          </div>
        </div>
      </div>
      <div className="mt-1 inline-flex items-center gap-1 bg-status-taken-bg text-status-taken rounded-full px-2 py-0.5 text-[0.58rem] font-bold">
        <span className="w-1.5 h-1.5 bg-status-taken rounded-full" />
        Active • All meds on track
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-20 pb-0 bg-hero-gradient overflow-hidden min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-red-soft border border-brand-red-mid rounded-full px-4 py-1.5 text-[0.8rem] font-bold text-brand-red mb-6">
              <span aria-hidden="true">🏆</span>
              Trusted by {STATS.familiesCount} Indian families
            </div>

            <h1
              id="hero-heading"
              className="font-head text-[clamp(2.4rem,5vw,3.5rem)] font-extrabold leading-[1.1] mb-5"
            >
              Never miss a dose.
              <br />
              <span className="text-brand-red">Even from far away.</span>
            </h1>

            <p className="text-neutral-gray text-[1.05rem] leading-[1.75] mb-8 max-w-[480px] mx-auto lg:mx-0">
              MedBell helps families stay connected through medicine care. Smart
              reminders, caregiver alerts, and real-time tracking — all in one
              place.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-3 mb-9 justify-center lg:justify-start">
              <Button
                href={STORE_LINKS.googlePlay}
                variant="store"
                store="google"
                aria-label="Download MedBell on Google Play"
              />
              <Button
                href={STORE_LINKS.appStore}
                variant="store"
                store="apple"
                aria-label="Download MedBell on App Store"
              />
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex" aria-hidden="true">
                {["SK", "RD", "PM"].map((initials, i) => (
                  <span
                    key={initials}
                    className={`w-[34px] h-[34px] rounded-full border-2 border-white bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center text-[0.65rem] font-bold text-white ${
                      i > 0 ? "-ml-2" : ""
                    }`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="w-[34px] h-[34px] rounded-full border-2 border-white bg-brand-red flex items-center justify-center text-[0.65rem] font-bold text-white -ml-2">
                  +
                </span>
              </div>
              <p className="text-[0.82rem] font-semibold text-neutral-gray">
                <strong className="text-neutral-dark">{STATS.familiesCount} families</strong>{" "}
                trust MedBell daily
              </p>
            </div>
          </div>

          {/* Phone visual */}
          <div className="relative flex justify-center items-end pb-0">
            <div className="relative animate-float">
              <CaregiverBadge />

              <PhoneMockup>
                <PhoneAppHeader />

                {/* Stats */}
                <div className="mx-3 my-3 bg-white rounded-[14px] px-3.5 py-3.5 shadow-card-red">
                  <p className="text-[0.65rem] font-bold text-neutral-gray mb-2">
                    DAILY OVERVIEW
                  </p>
                  <div className="flex gap-2">
                    <StatBox count={2} label="Taken" status="taken" />
                    <StatBox count={1} label="Missed" status="missed" />
                    <StatBox count={1} label="Pending" status="pending" />
                  </div>
                </div>

                {/* Medicine list */}
                <div className="mx-3 bg-white rounded-[14px] px-3.5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,.05)]">
                  <div className="flex justify-between items-center text-[0.62rem] font-extrabold text-neutral-gray border-b border-gray-100 pb-1 mb-1">
                    <span>Recent Activity</span>
                    <span className="text-brand-red">View All</span>
                  </div>
                  <MedRow time="9:00 AM" name="Blood Pressure Tablet" status="taken" />
                  <MedRow time="1:00 PM" name="Vitamin D3" status="missed" />
                  <MedRow time="8:00 PM" name="Calcium Tablet" status="pending" />
                </div>

                <PhoneNav />
              </PhoneMockup>

              <FloatingNotification />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
