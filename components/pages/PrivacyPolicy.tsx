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
    id: "introduction",
    title: "1. Introduction",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell ("we," "our," or "us") is a medication reminder and health tracking application. We take your privacy seriously, especially because MedBell handles sensitive health-related information. This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices you have.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          By using MedBell, you agree to the practices described in this policy. If you do not agree, please do not use the app.
        </p>
      </div>
    ),
  },
  {
    id: "infocollect",
    title: "2. Information We Collect",
    content: (
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">2.1 Account Information</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            When you create an account, we collect your name, email address, and profile photo. You may sign in using Google or Apple, in which case we receive only the information those services provide to us (name, email address, and profile picture). We do not receive your Google or Apple passwords.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">2.2 Health and Personal Information</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-2">
            MedBell is designed to help you manage health-related tasks. As part of using the app, you may enter:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
            <li>Medication names, dosages, schedules, and intake logs</li>
            <li>Vital signs such as blood pressure readings, blood sugar levels, heart rate, body temperature, weight, oxygen saturation, and respiratory rate</li>
            <li>Doctor appointments, check-up dates, notes, and reminder preferences</li>
            <li>Custom labels, notes, and any other information you choose to enter</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            This information is entered voluntarily by you and is used only to provide the app's core features.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">2.3 Caregiver and Patient Relationship Data</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you use MedBell's care network feature, the app stores information about connections between patient accounts and caregiver accounts, including connection request history and relationship status. Caregivers you link to your account will be able to view (but not edit) your health data as described in Section 5.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">2.4 Device and Technical Information</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            We collect device push notification tokens so we can deliver reminders to your device. We also collect basic app usage information such as sync timestamps. We do not collect your precise location, contacts, camera images, or any other device data beyond what is listed above.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">2.5 Subscription and Payment Information</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you subscribe to MedBell Pro, payment processing is handled entirely by Apple (App Store) or Google (Google Play) through our subscription partner RevenueCat. We do not see or store your credit card number or full payment details. We do receive confirmation of your subscription status, plan type, and purchase date.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "infouse",
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">We use the information we collect to:</p>
        <ul className="space-y-2 text-slate-600 text-sm pl-2">
          <li><span className="font-medium text-slate-700">Reminders and notifications:</span> Deliver medication reminders, vital sign alarms, and appointment notifications to your device, including alarm sounds that play even when your phone is locked or in sleep mode.</li>
          <li><span className="font-medium text-slate-700">Offline access:</span> Synchronize your health data across your devices so it is available when you are offline.</li>
          <li><span className="font-medium text-slate-700">Caregiver access:</span> Allow caregivers you have approved to view your health information within the app.</li>
          <li><span className="font-medium text-slate-700">Care network notifications:</span> Send you caregiver-related notifications, such as when a connection request is received or when an appointment is approaching.</li>
          <li><span className="font-medium text-slate-700">Subscription management:</span> Process and manage your subscription.</li>
          <li><span className="font-medium text-slate-700">App improvement:</span> Improve app stability by identifying and fixing technical issues.</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed pt-1">
          We do not use your health data for advertising, profiling, or any purpose unrelated to the app's core features.
        </p>
      </div>
    ),
  },
  {
    id: "datastorage",
    title: "4. Data Storage and Security",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">Your data is stored in two places:</p>
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
            <p className="text-sm font-semibold text-slate-800 mb-1">On your device</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              MedBell keeps a local copy of your data in an encrypted database on your phone. This allows the app to work fully without an internet connection.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
            <p className="text-sm font-semibold text-slate-800 mb-1">In the cloud</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your data is synced to Google Firebase, a secure cloud database infrastructure operated by Google LLC. Data is encrypted in transit (using TLS) and at rest within Firebase. Firebase is hosted on Google's servers, which may be located in the United States or other countries.
            </p>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          We implement reasonable security measures to protect your data. However, no method of transmission or storage is completely secure. We encourage you to use a strong, unique password for your Google or Apple account.
        </p>
      </div>
    ),
  },
  {
    id: "caregiveraccess",
    title: "5. Caregiver Access",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell allows patients to grant caregivers read-only access to their health data. This means:
        </p>
        <ul className="space-y-2 text-slate-600 text-sm pl-2">
          <li><span className="font-medium text-slate-700">What caregivers can see:</span> A caregiver you approve can view your medications, medication logs, vital records, and appointments within the app.</li>
          <li><span className="font-medium text-slate-700">What caregivers cannot do:</span> Caregivers cannot add, edit, or delete your health data.</li>
          <li><span className="font-medium text-slate-700">Your control:</span> You control who has caregiver access and can revoke it at any time from the Care Network section of the app. When you revoke access, the caregiver loses access immediately.</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          When you accept a caregiver connection or send a connection request, the other party's name and email address are shared with you so you can confirm the correct person. No health data is shared before a connection is accepted.
        </p>
      </div>
    ),
  },
  {
    id: "thirdparty",
    title: "6. Third-Party Services",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">MedBell uses the following third-party services to operate:</p>
        <ul className="space-y-3 text-slate-600 text-sm pl-2">
          <li>
            <span className="font-medium text-slate-700">Google Firebase (Google LLC)</span> — provides user authentication, cloud database storage, and push notification delivery.{" "}
            <a href="https://firebase.google.com/support/privacy" className="[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.
          </li>
          <li>
            <span className="font-medium text-slate-700">RevenueCat</span> — manages subscription status and in-app purchase validation.{" "}
            <a href="https://www.revenuecat.com/privacy" className="[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a>.
          </li>
          <li>
            <span className="font-medium text-slate-700">Google Sign-In</span> — optional authentication method. Governed by{" "}
            <a href="https://policies.google.com/privacy" className="[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
          </li>
          <li>
            <span className="font-medium text-slate-700">Sign in with Apple</span> — optional authentication method. Governed by{" "}
            <a href="https://www.apple.com/legal/privacy/" className="[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">Apple's Privacy Policy</a>.
          </li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          We do not sell your data to any third party. We do not share your health information with advertisers, data brokers, or analytics companies.
        </p>
      </div>
    ),
  },
  {
    id: "dataretention",
    title: "7. Data Retention and Deletion",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          We retain your data for as long as you have an active account. If you delete your account:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Your account profile and health data stored in our cloud database will be permanently deleted</li>
          <li>Local data stored on your device is removed when you uninstall the app</li>
          <li>Subscription history is retained by Apple or Google according to their own policies</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          To request account deletion, contact us at{" "}
          <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>.
        </p>
      </div>
    ),
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          MedBell is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at{" "}
          <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>{" "}
          and we will delete it promptly.
        </p>
      </div>
    ),
  },
  {
    id: "yourrights",
    title: "9. Your Rights",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          Depending on where you live, you may have the right to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Export your data in a portable format</li>
          <li>Withdraw consent at any time (which may affect your ability to use certain features)</li>
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>. We will respond within 30 days.
        </p>
      </div>
    ),
  },
  {
    id: "policychanges",
    title: "10. Changes to This Policy",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app or by email. The date at the top of this page reflects when the policy was last updated. Continued use of MedBell after changes take effect constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:
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
  { label: "Account info", detail: "Name, email, and profile photo collected at sign-up via Google or Apple." },
  { label: "Health data", detail: "Entered voluntarily by you; used only to power app features like reminders and tracking." },
  { label: "No advertising", detail: "Your health data is never used for ads, profiling, or purposes unrelated to the app." },
  { label: "Caregiver access", detail: "Read-only; you approve caregivers and can revoke access at any time." },
  { label: "Cloud storage", detail: "Synced to Google Firebase, encrypted in transit (TLS) and at rest." },
  { label: "Data deletion", detail: "Contact us at hello.medbell@gmail.com to permanently delete your account and data." },
];

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["introduction"]));

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
          <span className="text-xs text-slate-400 font-medium hidden sm:block">Privacy Policy · Last updated June 14, 2026</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-3 py-4">
          <div className="inline-flex items-center gap-2 [background:var(--red-soft)] [color:var(--red)] text-xs font-semibold px-3 py-1.5 rounded-full border [border-color:var(--red-mid)]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Privacy Matters
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            This policy describes how MedBell collects, uses, and protects your personal information when you use our app.
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
            <Link href="/terms" className="[color:var(--red)] hover:underline">Terms &amp; Conditions</Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
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
