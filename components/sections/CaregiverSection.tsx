import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { StatBox } from "@/components/ui/StatusBadge";
import { CAREGIVER_FEATURES, CAREGIVER_TAGS } from "@/data";

/**
 * Dashboard card preview
 */
function CaregiverDashboard() {
  const activityRows = [
    { time: "9:00 AM", name: "Blood Pressure Tablet", status: "taken", color: "text-status-taken" },
    { time: "1:00 PM", name: "Vitamin D3", status: "missed", color: "text-brand-red" },
    { time: "8:00 PM", name: "Calcium Tablet", status: "pending", color: "text-status-pending" },
  ] as const;

  return (
    <div className="bg-brand-red-soft rounded-[24px] p-8 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-brand-red-mid rounded-full opacity-40 pointer-events-none" />

      <div className="bg-white rounded-[16px] p-5 shadow-[0_8px_32px_rgba(0,0,0,.10)] relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-head font-extrabold text-[0.95rem]">
            Caregiver Dashboard
          </h3>
          <span className="text-[0.7rem] text-brand-red font-bold cursor-default">
            ← Back
          </span>
        </div>

        {/* Profile row */}
        <div className="flex items-center gap-2.5 bg-neutral-light rounded-xl px-3.5 py-2.5 mb-3.5 border-[1.5px] border-gray-100">
          <div className="w-9 h-9 bg-brand-red rounded-full text-[0.8rem] font-extrabold text-white flex items-center justify-center">
            SD
          </div>
          <div className="flex-1">
            <div className="font-extrabold text-[0.85rem]">Mom (Savitri Devi)</div>
            <div className="text-[0.7rem] text-neutral-gray">67 Years</div>
          </div>
          <Icon name="chevron" className="w-4 h-4 text-brand-red" />
        </div>

        <p className="text-[0.7rem] font-bold text-neutral-gray mb-2">
          Today&apos;s Summary · 20 May, 2024
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3.5">
          <StatBox count={2} label="Taken" status="taken" />
          <StatBox count={1} label="Missed" status="missed" />
          <StatBox count={1} label="Pending" status="pending" />
        </div>

        {/* Activity list */}
        <div className="text-[0.75rem]">
          <div className="flex justify-between font-bold text-neutral-gray mb-2">
            <span>Recent Activity</span>
            <span className="text-brand-red cursor-default">View All</span>
          </div>
          {activityRows.map(({ time, name, status, color }) => (
            <div
              key={time}
              className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0"
            >
              <span className="text-neutral-gray font-semibold">{time}</span>
              <span className="font-bold">{name}</span>
              <span className={`font-extrabold text-[0.7rem] ${color}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating missed dose alert */}
      <div className="absolute -bottom-5 -right-5 bg-white rounded-[14px] px-4 py-3 shadow-notif border-l-4 border-brand-red w-[210px] animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-red rounded-[8px] flex items-center justify-center flex-shrink-0">
            <Icon name="bell" className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-[0.7rem] font-extrabold text-brand-red">
              Missed Dose Alert
            </div>
            <div className="text-[0.65rem] text-neutral-gray font-semibold">
              Mom missed 1:00 PM Vitamin D3
            </div>
          </div>
          <div className="text-[0.58rem] text-neutral-gray self-start">
            1m ago
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaregiverSection() {
  return (
    <section
      id="caregiver"
      className="py-[100px] bg-white"
      aria-labelledby="caregiver-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Visual */}
          <div className="relative overflow-visible">
            <p className="font-head text-[0.78rem] font-bold tracking-[0.12em] uppercase text-brand-red mb-2">
              Caregiver Integration
            </p>
            <CaregiverDashboard />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              id="caregiver-heading"
              label="For Caregivers"
              title={
                <>
                  Stay connected.
                  <br />
                  <span className="text-brand-red">Stay worry-free.</span>
                </>
              }
              subtitle="MedBell keeps caregivers informed about their loved ones' medicine schedules and health — from anywhere in the world."
              align="left"
            />

            {/* Feature list */}
            <div className="flex flex-col gap-5 my-8">
              {CAREGIVER_FEATURES.map(({ id, icon, title, description }) => (
                <div key={id} className="flex items-start gap-3.5">
                  <div className="w-[46px] h-[46px] bg-brand-red-soft rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Icon name={icon} className="w-[22px] h-[22px] text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-head font-extrabold text-[0.95rem] mb-1">
                      {title}
                    </h4>
                    <p className="text-[0.82rem] text-neutral-gray leading-[1.6]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CAREGIVER_TAGS.map(({ label, icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 bg-brand-red-soft rounded-[8px] px-3 py-1.5 text-[0.75rem] font-bold text-neutral-dark"
                >
                  <Icon name={icon} className="w-3.5 h-3.5 text-brand-red" />
                  {label}
                </span>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 bg-neutral-light rounded-[14px] px-5 py-4 border-[1.5px] border-gray-100">
              <div className="w-10 h-10 bg-brand-red rounded-[10px] flex items-center justify-center flex-shrink-0">
                <Icon name="heart" className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-head font-extrabold text-[1.1rem] leading-tight">
                  Peace of mind for the people who care.
                </p>
                <p className="text-[0.78rem] text-neutral-gray">
                  MedBell helps you stay close to your loved ones, no matter the distance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
