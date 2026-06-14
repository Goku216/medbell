"use client"
import Link from "next/link";
import { useState } from "react";
import { LogoMark } from "../layout/Navbar";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          By downloading, installing, or using the MedBell mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          These Terms apply to all users of MedBell, including patients and caregivers.
        </p>
      </div>
    ),
  },
  {
    id: "description",
    title: "2. Description of the App",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        MedBell is a personal health management app that helps individuals track medication schedules, log vital signs, manage doctor appointments, and optionally share that information with trusted caregivers. The App provides local alarm notifications, cloud synchronization, and a caregiver access feature called Care Network.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "3. Important Medical Disclaimer",
    content: (
      <div className="space-y-3">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          <p className="text-amber-800 text-sm font-semibold mb-1">MedBell is NOT a medical device.</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            MedBell is a reminder and tracking tool. It does NOT provide medical advice, diagnosis, or treatment.
          </p>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Nothing in MedBell should be interpreted as medical advice or a substitute for consultation with a qualified healthcare professional. Medication reminders are based entirely on the schedules you enter and are provided as a convenience only. You are solely responsible for verifying the accuracy of your medication information, dosages, and schedules with your doctor or pharmacist.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          Never disregard professional medical advice or delay seeking it because of something you read or tracked in MedBell. In a medical emergency, contact your local emergency services immediately.
        </p>
      </div>
    ),
  },
  {
    id: "eligibility",
    title: "4. Eligibility and Account Requirements",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">To use MedBell, you must:</p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Be at least 13 years of age</li>
          <li>Have a valid Google or Apple account to sign in</li>
          <li>Provide accurate information when setting up your profile</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. If you believe your account has been compromised, contact us immediately.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          You may not create an account on behalf of another person without their express consent, except when acting as a legal guardian for a minor in your care.
        </p>
      </div>
    ),
  },
  {
    id: "subscription",
    title: "5. Free Trial and Subscription",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell offers a <span className="font-medium text-slate-700">7-day free trial</span> for new users. During the free trial, you have full access to all features. No payment is required during the trial period.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          After the free trial ends, certain features require a MedBell Pro subscription. Subscription plans are billed through the Apple App Store or Google Play Store depending on your device. Pricing and billing intervals are displayed within the App before you subscribe.
        </p>
        <ul className="space-y-2 text-slate-600 text-sm pl-2">
          <li><span className="font-medium text-slate-700">Billing:</span> Subscriptions automatically renew at the end of each billing period unless you cancel at least 24 hours before the renewal date.</li>
          <li><span className="font-medium text-slate-700">Cancellation:</span> You can cancel your subscription at any time through your Apple or Google account settings. Cancellation takes effect at the end of your current billing period. We do not offer refunds for partial periods, except where required by applicable law.</li>
          <li><span className="font-medium text-slate-700">Subscription Management:</span> All billing is managed by Apple or Google. MedBell does not process payments directly and cannot issue refunds on their behalf. Please contact Apple or Google support for billing disputes.</li>
          <li><span className="font-medium text-slate-700">Free Caregiver Access:</span> Caregivers can use MedBell's Care Network features for free. A subscription is not required to view a patient's data as a caregiver.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "carenetwork",
    title: "6. Care Network Feature",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          The Care Network feature allows patients to share their health data with trusted caregivers within the App.
        </p>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2">As a patient, you acknowledge that:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
            <li>Any caregiver you approve will be able to view your medication list, medication logs, vital records, and appointments</li>
            <li>You are responsible for only connecting with people you trust</li>
            <li>You can revoke caregiver access at any time</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2">As a caregiver, you acknowledge that:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
            <li>You may only access patient data for patients who have explicitly approved your connection</li>
            <li>Health data you view in MedBell is confidential and must not be shared outside the App without the patient's consent</li>
            <li>You must not use the information you access for any purpose other than supporting the patient's health management</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "responsibilities",
    title: "7. User Responsibilities",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">You agree that you will:</p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Enter accurate health information to the best of your ability</li>
          <li>Not rely on MedBell as your sole method of medication management</li>
          <li>Keep the App updated to benefit from bug fixes and security improvements</li>
          <li>Not attempt to access another user's data without authorization</li>
          <li>Not use the App for any unlawful purpose</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          You are solely responsible for the accuracy of the data you enter into MedBell. Incorrect medication names, dosages, or schedules entered by you may result in missed or incorrect reminders. MedBell bears no responsibility for errors in data you provide.
        </p>
      </div>
    ),
  },
  {
    id: "alarms",
    title: "8. Alarm and Notification Reliability",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell uses system alarms and push notifications to deliver reminders. However, we cannot guarantee that every alarm will fire at the exact scheduled time due to factors outside our control, including:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Device battery-saving settings or manufacturer-specific background restrictions</li>
          <li>Do Not Disturb or Focus modes enabled on your device</li>
          <li>Device being powered off or out of service</li>
          <li>Operating system restrictions on background processes</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          You should not rely solely on MedBell alarms for time-critical medications. Always consult your healthcare provider about medication schedules and keep independent reminders as a backup for critical doses.
        </p>
      </div>
    ),
  },
  {
    id: "ip",
    title: "9. Intellectual Property",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          All content, design, code, and features within MedBell are owned by or licensed to us and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for your personal, non-commercial use.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          You may not copy, modify, distribute, sell, reverse engineer, or create derivative works from any part of MedBell.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          To the maximum extent permitted by applicable law, MedBell and its developers shall not be liable for:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Any health outcomes, missed medications, or medical incidents arising from use or failure of the App</li>
          <li>Loss of data due to device failure, app crashes, or sync errors</li>
          <li>Any indirect, incidental, or consequential damages arising from your use of the App</li>
          <li>Interruptions in service, including notification failures</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          Our total liability to you for any claim arising out of these Terms shall not exceed the amount you paid for a MedBell Pro subscription in the 12 months preceding the claim.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed text-slate-500 italic">
          Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In those jurisdictions, our liability is limited to the maximum extent permitted by law.
        </p>
      </div>
    ),
  },
  {
    id: "warranties",
    title: "11. Disclaimer of Warranties",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We do not warrant that the App will be error-free, uninterrupted, or free of viruses or other harmful components.
        </p>
      </div>
    ),
  },
  {
    id: "termination",
    title: "12. Termination",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or misuse the Care Network feature. You may terminate your account at any time by contacting us and requesting deletion.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Upon termination, your right to use the App ceases immediately. Sections 3, 9, 10, 11, and 13 of these Terms survive termination.
        </p>
      </div>
    ),
  },
  {
    id: "governing",
    title: "13. Governing Law",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of MedBell shall be resolved through good-faith negotiation first, and if unresolved, through the courts of competent jurisdiction in your place of residence.
      </p>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We may update these Terms from time to time. We will notify you of significant changes through the App or by email. Continued use of MedBell after the updated Terms take effect constitutes your acceptance of the changes.
      </p>
    ),
  },
  {
    id: "contact",
    title: "15. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          If you have questions about these Terms, please contact us at:
        </p>
        <address className="not-italic bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 space-y-0.5">
          <p className="font-semibold">MedBell</p>
          <p>
            Email:{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>
          </p>
        </address>
      </div>
    ),
  },
];

const summaryPoints = [
  { label: "Not medical advice", detail: "MedBell is a reminder tool only — not a medical device. Always consult your doctor." },
  { label: "7-day free trial", detail: "Full access for 7 days free, then a Pro subscription is required for premium features." },
  { label: "Free for caregivers", detail: "Care Network access is always free for caregivers — no subscription needed." },
  { label: "Your data responsibility", detail: "You are responsible for the accuracy of medication and health data you enter." },
  { label: "Alarm reliability", detail: "Alarms may not always fire due to device restrictions. Don't rely solely on the app for critical doses." },
  { label: "Dispute resolution", detail: "Disputes are resolved first through good-faith negotiation before legal proceedings." },
];

export default function TermsAndConditions() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["acceptance"]));

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => setOpenSections(new Set(sections.map((s) => s.id)));
  const collapseAll = () => setOpenSections(new Set());

  return (
    <div style={{ "--red": "#e8141e", "--red-soft": "#fff0f0", "--red-mid": "#ffcfcf" } as React.CSSProperties} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#fff0f0] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-20 backdrop-blur-sm bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <div>
              <div className="font-head font-extrabold text-[1.45rem] text-neutral-dark leading-none">
                <span className="text-brand-red">Med</span>Bell
              </div>
              <div className="text-[0.7rem] text-neutral-gray font-medium mt-0.5">
                Care beyond reminders.
              </div>
            </div>
          </Link>
          <span className="text-xs text-slate-400 font-medium hidden sm:block">Terms &amp; Conditions · Last updated June 14, 2026</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-3 py-4">
          <div className="inline-flex items-center gap-2 [background:var(--red-soft)] [color:var(--red)] text-xs font-semibold px-3 py-1.5 rounded-full border [border-color:var(--red-mid)]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Terms &amp; Conditions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Please read these Terms carefully before using MedBell. By using the app, you agree to be bound by these Terms.
          </p>
          <p className="text-xs text-slate-400">
            Questions? Contact us at{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:underline">hello.medbell@gmail.com</a>
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="[background:var(--red)] px-5 py-4">
            <h2 className="text-white font-bold text-base tracking-tight flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Summary of Key Points
            </h2>
            <p className="[color:var(--red-mid)] text-xs mt-0.5">A quick overview — click any section below for full details.</p>
          </div>
          <div className="divide-y divide-slate-100">
            {summaryPoints.map(({ label, detail }) => (
              <div key={label} className="flex items-start gap-3 px-5 py-3 hover:bg-slate-50/60 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full [background:var(--red)] mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-800">{label}: </span>
                  <span className="text-sm text-slate-600">{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Table of Contents</h2>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="text-xs [color:var(--red)] font-medium transition-colors"
              >
                Expand all
              </button>
              <span className="text-slate-300">·</span>
              <button
                onClick={collapseAll}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors"
              >
                Collapse all
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  toggle(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="text-left text-xs [color:var(--red)] hover:[background:var(--red-soft)] px-2 py-1.5 rounded-md transition-colors truncate"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-2">
          {sections.map((section) => {
            const isOpen = openSections.has(section.id);
            return (
              <div
                key={section.id}
                id={section.id}
                className={`bg-white rounded-2xl border transition-all duration-200 shadow-sm overflow-hidden ${
                  isOpen ? "[border-color:var(--red-mid)] [box-shadow:0_1px_3px_var(--red-soft)]" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold transition-colors ${
                    isOpen ? "[color:var(--red)]" : "text-slate-800 group-hover:[color:var(--red)]"
                  }`}>
                    {section.title}
                  </span>
                  <span className={`flex-shrink-0 ml-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <svg className={`w-4 h-4 transition-colors ${isOpen ? "[color:var(--red)]" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-slate-100 pt-4">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="text-center space-y-2 py-6 border-t border-slate-200">
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
            <Link href="/privacy-policy" className="[color:var(--red)] hover:underline">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms &amp; Conditions</Link>
          </div>
          <p className="text-xs text-slate-400">
            © 2026 MedBell ·{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:underline">hello.medbell@gmail.com</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
