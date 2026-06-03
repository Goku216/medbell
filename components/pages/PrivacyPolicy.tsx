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
    id: "infocollect",
    title: "1. What Information Do We Collect?",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Personal Information You Disclose to Us</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            We collect personal information that you voluntarily provide when you register on the Services, express interest in our products, participate in activities, or contact us.
          </p>
          <p className="text-slate-600 text-sm font-medium mb-2">Personal information collected may include:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
            <li>Names</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Usernames</li>
            <li>Passwords</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Sensitive Information</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-2">When necessary and with your consent, we process:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm pl-2">
            <li>Health data</li>
            <li>Financial data</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Payment Data</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Payment data is handled and stored by <strong>Apple Inc.</strong>, <strong>Google LLC</strong>, and <strong>RevenueCat, Inc.</strong> You may review their privacy policies at{" "}
            <a href="https://www.apple.com/legal/privacy/" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">Apple</a>,{" "}
            <a href="https://policies.google.com/privacy/" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">Google</a>, and{" "}
            <a href="https://www.revenuecat.com/privacy/" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">RevenueCat</a>.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Application Data</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-2">If you use our application(s), we may also collect:</p>
          <ul className="space-y-2 text-slate-600 text-sm pl-2">
            <li><span className="font-medium text-slate-700">Mobile Device Access:</span> Access to reminders, storage, and other device features.</li>
            <li><span className="font-medium text-slate-700">Mobile Device Data:</span> Device ID, model, manufacturer, OS version, IP address, and app feature usage.</li>
            <li><span className="font-medium text-slate-700">Push Notifications:</span> We may request permission to send push notifications. You can opt out in device settings.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Information Automatically Collected</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-2">
            We automatically collect certain information when you visit or use the Services, including:
          </p>
          <ul className="space-y-1 text-slate-600 text-sm pl-2 list-disc list-inside">
            <li>Log and usage data (IP address, browser type, pages viewed, timestamps)</li>
            <li>Device data (hardware model, OS, ISP/carrier)</li>
            <li>Location data (based on IP address or GPS if permitted)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-2">Google API</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our use of information received from Google APIs adheres to the{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              Google API Services User Data Policy
            </a>, including the Limited Use requirements.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "infouse",
    title: "2. How Do We Process Your Information?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.
        </p>
        <p className="text-slate-600 text-sm font-medium">We process your personal information for reasons including:</p>
        <ul className="space-y-2 text-slate-600 text-sm pl-2">
          <li><span className="font-medium text-slate-700">Account creation and authentication:</span> To create and maintain your account.</li>
          <li><span className="font-medium text-slate-700">Service delivery:</span> To provide you with the requested services.</li>
          <li><span className="font-medium text-slate-700">User-to-user communications:</span> If you use features allowing communication with other users.</li>
          <li><span className="font-medium text-slate-700">Feedback requests:</span> To contact you about your use of our Services.</li>
          <li><span className="font-medium text-slate-700">Usage trends:</span> To better understand how our Services are used and improve them.</li>
          <li><span className="font-medium text-slate-700">Vital interests:</span> To prevent harm when necessary.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "legalbases",
    title: "3. What Legal Bases Do We Rely On?",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We only process your personal information when we have a valid legal reason under applicable law — such as with your consent, to comply with laws, to fulfill contractual obligations, or to serve legitimate business interests.
        </p>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2 underline underline-offset-2">If you are in the EU or UK:</p>
          <ul className="space-y-2 text-slate-600 text-sm pl-2">
            <li><span className="font-medium text-slate-700">Consent:</span> When you have given us permission for a specific purpose. You can withdraw at any time.</li>
            <li><span className="font-medium text-slate-700">Performance of a Contract:</span> When necessary to fulfill our contractual obligations.</li>
            <li><span className="font-medium text-slate-700">Legitimate Interests:</span> To analyze and improve our Services.</li>
            <li><span className="font-medium text-slate-700">Legal Obligations:</span> To comply with laws, cooperate with authorities, or defend legal rights.</li>
            <li><span className="font-medium text-slate-700">Vital Interests:</span> To protect your safety or that of a third party.</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2 underline underline-offset-2">If you are in Canada:</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We process your information with your express or implied consent, which you may withdraw at any time. In exceptional cases, we may process without consent as permitted by law (e.g., fraud prevention, legal compliance, journalistic purposes).
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "whoshare",
    title: "4. When and With Whom Do We Share Your Information?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We may share information in specific situations and with specific third parties.
        </p>
        <ul className="space-y-2 text-slate-600 text-sm pl-2">
          <li><span className="font-medium text-slate-700">Business Transfers:</span> In connection with mergers, sales, financing, or acquisitions.</li>
          <li><span className="font-medium text-slate-700">Other Users:</span> When you interact in public areas of the Services, your information may be visible to all users. Social network contacts may also see your name, profile photo, and activity descriptions.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "sociallogins",
    title: "5. How Do We Handle Your Social Logins?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          If you choose to register or log in using a social media account, we may have access to certain information about you.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          When registering via a social media provider (e.g. Facebook, X), we receive profile information such as your name, email address, friends list, and profile picture. We use this information only as described in this Privacy Notice. We are not responsible for the practices of your third-party social media provider — please review their own privacy policies.
        </p>
      </div>
    ),
  },
  {
    id: "inforetain",
    title: "6. How Long Do We Keep Your Information?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We retain personal information only as long as you have an active account with us, unless a longer period is legally required. When we no longer have a legitimate need to process your information, we will delete or anonymize it. If deletion is not immediately possible (e.g., backup archives), we will securely isolate it until deletion is feasible.
        </p>
      </div>
    ),
  },
  {
    id: "infosafe",
    title: "7. How Do We Keep Your Information Safe?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We aim to protect your personal information through a system of organizational and technical security measures.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We have implemented appropriate technical and organizational security measures. However, no electronic transmission or storage technology is 100% secure. We cannot guarantee that unauthorized third parties will never be able to circumvent our security. Transmission of personal information to and from our Services is at your own risk. Please access the Services only within a secure environment.
        </p>
      </div>
    ),
  },
  {
    id: "infominors",
    title: "8. Do We Collect Information from Minors?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          We do not knowingly collect data from or market to children under 18 years of age.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We do not knowingly collect, solicit data from, or market to children under 18 (or the equivalent age in your jurisdiction), nor do we knowingly sell such personal information. By using our Services, you confirm that you are at least 18 or a parent/guardian consenting on behalf of a minor. If we learn we have collected data from anyone under 18, we will deactivate the account and delete such data. Please contact us at{" "}
          <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a> if you become aware of such data.
        </p>
      </div>
    ),
  },
  {
    id: "privacyrights",
    title: "9. What Are Your Privacy Rights?",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          Depending on your location, you may have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          In regions such as the EEA, UK, Switzerland, and Canada, your rights may include: access and copy, rectification or erasure, restriction of processing, data portability, and objecting to automated decision-making.
        </p>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">Withdrawing Consent</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            You may withdraw consent at any time by contacting us at{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>. Withdrawal does not affect the lawfulness of processing that occurred prior to withdrawal.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">Account Information</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            You may review or update your account by logging into account settings. Upon requesting account termination, we will deactivate or delete your account and data, though we may retain some information for legal compliance, fraud prevention, or investigations.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "DNT",
    title: "10. Controls for Do-Not-Track Features",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Most browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. No uniform technology standard for recognizing and implementing DNT signals has been finalized, so we do not currently respond to DNT browser signals. California law requires us to disclose this: we do not currently honor DNT signals. If a future standard is adopted that we must follow, we will update this Privacy Notice accordingly.
      </p>
    ),
  },
  {
    id: "uslaws",
    title: "11. Do United States Residents Have Specific Privacy Rights?",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed italic">
          If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have certain privacy rights.
        </p>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2">Categories of Personal Information Collected (Last 12 Months)</p>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 w-2/5">Category</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 w-2/5">Examples</th>
                  <th className="text-center px-3 py-2 font-semibold text-slate-700 w-1/5">Collected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["A. Identifiers", "Contact details, name, alias, email, IP address, account name", "YES"],
                  ["B. Personal info (CA Customer Records)", "Name, contact info, financial information", "YES"],
                  ["C. Protected classification characteristics", "Gender, age, race, ethnicity, national origin", "YES"],
                  ["D. Commercial information", "Transaction info, purchase history, payment info", "NO"],
                  ["E. Biometric information", "Fingerprints and voiceprints", "NO"],
                  ["F. Internet or network activity", "Browsing history, search history, interactions with our Services", "NO"],
                  ["G. Geolocation data", "Device location", "NO"],
                  ["H. Audio, electronic, sensory", "Images, audio, video recordings", "NO"],
                  ["I. Professional/employment information", "Job title, work history, professional qualifications", "NO"],
                  ["J. Education information", "Student records and directory information", "NO"],
                  ["K. Inferences drawn from personal info", "Profiles of preferences and characteristics", "YES"],
                  ["L. Sensitive personal information", "Account login information and health data", "YES"],
                ].map(([category, examples, collected]) => (
                  <tr key={category} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-3 py-2 text-slate-700 align-top">{category}</td>
                    <td className="px-3 py-2 text-slate-600 align-top">{examples}</td>
                    <td className="px-3 py-2 text-center align-top">
                      <span className={`inline-flex items-center justify-center w-10 h-6 rounded-full text-xs font-bold ${
                        collected === "YES"
                          ? "[background:var(--red-soft)] [color:var(--red)]"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        {collected}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-2">Your Rights</p>
          <ul className="space-y-1 text-slate-600 text-sm pl-2 list-disc list-inside">
            <li>Right to know whether we are processing your data</li>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccuracies</li>
            <li>Right to request deletion</li>
            <li>Right to obtain a copy of your data</li>
            <li>Right to non-discrimination for exercising your rights</li>
            <li>Right to opt out of targeted advertising, data sales, or profiling</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">How to Exercise Your Rights</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Submit a{" "}
            <a href="https://app.termly.io/dsar/edccf37c-809e-4b94-b535-b31c0377abfa" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">data subject access request</a>
            {" "}or email us at{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "policyupdates",
    title: "12. Do We Make Updates to This Notice?",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Revised" date at the top. If we make material changes, we may notify you by prominently posting a notice or by sending you a direct notification. We encourage you to review this Privacy Notice frequently.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. How Can You Contact Us About This Notice?",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          If you have questions or comments, you may email us at{" "}
          <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2">hello.medbell@gmail.com</a>
          {" "}or contact us by post at:
        </p>
        <address className="not-italic bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 space-y-0.5">
          <p className="font-semibold">MedBell</p>
          <p>Gouri goun basti</p>
          <p>Chalsa, West Bengal 735206</p>
          <p>India</p>
        </address>
      </div>
    ),
  },
  {
    id: "request",
    title: "14. How Can You Review, Update, or Delete Your Data?",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Based on applicable laws of your country or state, you may have the right to request access to your personal information, request corrections, or request deletion. You may also have the right to withdraw consent. These rights may be limited in some circumstances. To request a review, update, or deletion, please fill out and submit a{" "}
        <a href="https://app.termly.io/dsar/edccf37c-809e-4b94-b535-b31c0377abfa" className="[color:var(--red)] hover:[color:var(--red)] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
          data subject access request
        </a>.
      </p>
    ),
  },
];

const summaryPoints = [
  { label: "Personal information", detail: "Collected when you interact with our Services — see Section 1." },
  { label: "Sensitive information", detail: "Health and financial data may be processed with your consent." },
  { label: "Third-party data", detail: "We do not collect information from third parties." },
  { label: "How we use it", detail: "To provide Services, communicate, ensure security, and comply with law." },
  { label: "Who we share with", detail: "In specific situations only — see Section 4." },
  { label: "Security", detail: "Reasonable organizational and technical measures are in place." },
  { label: "Your rights", detail: "Vary by location — see Section 9 for full details." },
];

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["infocollect"]));

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
          <span className="text-xs text-slate-400 font-medium hidden sm:block">Privacy Policy · Last updated May 27, 2026</span>
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
            This notice describes how MedBell collects, uses, and protects your personal information when you use our Services.
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
                className="text-xs [color:var(--red)] hover:[color:var(--red)] font-medium transition-colors"
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
                className="text-left text-xs [color:var(--red)] hover:[color:var(--red)] hover:[background:var(--red-soft)] px-2 py-1.5 rounded-md transition-colors truncate"
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
       
          <p className="text-xs text-slate-400">
            © 2026 MedBell · Chalsa, West Bengal, India ·{" "}
            <a href="mailto:hello.medbell@gmail.com" className="[color:var(--red)] hover:underline">hello.medbell@gmail.com</a>
          </p>
        </footer>
      </main>
    </div>
  );
}