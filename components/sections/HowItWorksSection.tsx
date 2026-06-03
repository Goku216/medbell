import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StatBox } from "@/components/ui/StatusBadge";

// ─── Step Screen Components ───────────────────────────────

function AddMedicineScreen() {
  return (
    <>
      <div className="bg-brand-red px-3 py-2 text-white text-[0.65rem] font-extrabold flex items-center gap-1.5">
        <Icon name="chevron-left" className="w-3 h-3" />
        Add Medicine
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center py-1.5 border-b border-gray-100 text-[0.6rem]">
          <span className="text-neutral-gray font-semibold">Medicine Name</span>
        </div>
        <div className="text-[0.7rem] font-extrabold py-1.5 pb-2">
          Blood Pressure Tablet
        </div>
        {[
          ["Time", "9:00 AM"],
          ["Dose", "1 Tablet"],
          ["Repeat", "Daily"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-center py-1.5 border-b border-gray-100 text-[0.6rem] last:border-0"
          >
            <span className="text-neutral-gray font-semibold">{label}</span>
            <span className="font-extrabold">{value}</span>
          </div>
        ))}
        <button className="mt-2 bg-brand-red text-white w-full rounded-lg py-1.5 text-[0.65rem] font-extrabold cursor-default">
          Save Medicine
        </button>
      </div>
    </>
  );
}

function NotificationScreen() {
  return (
    <div className="bg-[#1C1C1E] h-full p-2.5 flex flex-col gap-2">
      <div className="text-white text-[1.8rem] font-extrabold text-center font-head">
        9:00
      </div>
      <div className="text-white/60 text-[0.6rem] text-center -mt-1">
        Tuesday, 20 May
      </div>
      <div className="flex-1" />
      <div className="bg-white/15 rounded-xl p-2.5 flex items-center gap-2 backdrop-blur-sm">
        <div className="w-7 h-7 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="bell" className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <div className="text-[0.6rem] font-extrabold text-white">
            MedBell · now
          </div>
          <div className="text-[0.55rem] text-white/70">
            Time to take Blood Pressure Tablet · 1 Tablet at 9:00 AM
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackScreen() {
  return (
    <>
      <div className="bg-brand-red px-3 py-2 text-white">
        <div className="text-[0.55rem] opacity-80">Today</div>
        <div className="text-[0.7rem] font-extrabold">Next Medicine</div>
        <div className="text-[0.85rem] font-extrabold">
          9:00 AM — Blood Pressure Tablet
        </div>
      </div>
      <button className="bg-status-taken w-[calc(100%-24px)] mx-3 my-2 text-white rounded-lg py-1.5 text-[0.6rem] font-extrabold flex items-center justify-center gap-1 cursor-default">
        <Icon name="check" className="w-3 h-3 text-white" />
        Mark as Taken
      </button>
      <div className="px-3">
        <div className="text-[0.6rem] font-bold text-neutral-gray mb-1">
          Today&apos;s Schedule
        </div>
        {[
          ["1:00 PM — Vitamin D3", "1 Tablet"],
          ["8:00 PM — Calcium", "1 Tablet"],
        ].map(([left, right]) => (
          <div
            key={left}
            className="flex justify-between text-[0.6rem] py-1 border-b border-gray-100 last:border-0"
          >
            <span>{left}</span>
            <span>{right}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function CaregiverScreen() {
  return (
    <>
      <div className="bg-white px-3 py-2 border-b border-gray-100 text-[0.7rem] font-extrabold">
        Caregiver Dashboard
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
        <div className="w-7 h-7 bg-brand-red rounded-full text-[0.6rem] font-extrabold text-white flex items-center justify-center">
          M
        </div>
        <div>
          <div className="text-[0.65rem] font-extrabold">Mom (Savitri Devi)</div>
          <div className="text-[0.55rem] text-neutral-gray">
            67 Years · View Dashboard →
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2">
        <StatBox count={2} label="Taken" status="taken" />
        <StatBox count={0} label="Missed" status="missed" />
        <StatBox count={1} label="Pending" status="pending" />
      </div>
      <div className="px-3">
        <div className="flex justify-between text-[0.55rem] font-bold text-neutral-gray mb-1">
          <span>Recent Activity</span>
          <span className="text-brand-red">View All</span>
        </div>
        {[
          ["9:00 AM Blood Pressure Tablet", "Taken", "text-status-taken"],
          ["8:00 AM Vitamin D3", "Taken", "text-status-taken"],
        ].map(([text, status, color]) => (
          <div
            key={text}
            className="flex justify-between text-[0.55rem] py-0.75 border-b border-gray-100 last:border-0"
          >
            <span>{text}</span>
            <span className={`font-bold ${color}`}>{status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

const STEP_SCREENS = [
  AddMedicineScreen,
  NotificationScreen,
  TrackScreen,
  CaregiverScreen,
];

const STEPS = [
  {
    number: 1,
    title: "Add Medicines",
    description:
      "Add your loved one's medicines, timings, and dosage in just a few taps.",
    icon: "plus-clipboard",
  },
  {
    number: 2,
    title: "Get Reminders",
    description:
      "Timely reminders notify your loved one to take their medicines on time, every time.",
    icon: "bell",
  },
  {
    number: 3,
    title: "Track Medicine Intake",
    description: "Your loved one can mark medicines as taken, so nothing is missed.",
    icon: "check-square",
  },
  {
    number: 4,
    title: "Caregiver Gets Notified",
    description:
      "Caregivers receive instant alerts and can monitor medicine intake from anywhere.",
    icon: "users",
  },
];

const BOTTOM_CARDS = [
  {
    icon: "heart",
    title: "Peace of mind for your whole family.",
    desc: "Stay connected, informed, and worry-free knowing your loved ones are taking care of their health.",
  },
  {
    icon: "users",
    title: "Care together, from anywhere.",
    desc: "MedBell brings families closer with real-time updates and reliable medicine tracking.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-[100px] bg-neutral-light"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            id="hiw-heading"
            label="How It Works"
            title={
              <>
                Simple steps for better care,
                <br />
                <span className="text-brand-red">together.</span>
              </>
            }
            subtitle="MedBell makes it easy for families to manage medicines and stay connected."
          />
        </div>

        {/* Steps grid */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Dashed connector line — desktop only */}
          <div
            className="absolute top-[38px] left-[12.5%] right-[12.5%] h-0.5 hidden lg:block"
            style={{
              background:
                "repeating-linear-gradient(90deg,#E8141E 0,#E8141E 8px,transparent 8px,transparent 18px)",
            }}
            aria-hidden="true"
          />

          {STEPS.map((step, index) => {
            const StepScreen = STEP_SCREENS[index];
            return (
              <li
                key={step.number}
                className="flex flex-col items-center text-center relative z-10 px-3"
              >
                {/* Step number */}
                <div className="w-[52px] h-[52px] bg-brand-red text-white rounded-full flex items-center justify-center font-head font-extrabold text-[1.15rem] mb-5 shadow-[0_4px_20px_rgba(232,20,30,.3)]">
                  {step.number}
                </div>

                {/* Phone mockup */}
                <PhoneMockup size="sm" className="mb-5">
                  <StepScreen />
                </PhoneMockup>

                <h3 className="font-head font-extrabold text-[0.95rem] mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.8rem] text-neutral-gray leading-[1.6]">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Bottom highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[60px]">
          {BOTTOM_CARDS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-card p-6 flex items-start gap-4 shadow-card"
            >
              <div className="w-11 h-11 bg-brand-red-soft rounded-[12px] flex items-center justify-center flex-shrink-0">
                <Icon name={icon} className="w-[22px] h-[22px] text-brand-red" />
              </div>
              <div>
                <h4 className="font-head font-extrabold text-[0.95rem] mb-1.5">
                  {title}
                </h4>
                <p className="text-[0.82rem] text-neutral-gray leading-[1.6]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
