"use client"
import Link from "next/link";
import { LogoMark } from "../layout/Navbar";

export default function DeleteAccount() {
  return (
    <div
      style={{ "--red": "#e8141e", "--red-soft": "#fff0f0", "--red-mid": "#ffcfcf" } as React.CSSProperties}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#fff0f0] font-sans"
    >
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-20 backdrop-blur-sm bg-white/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
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
          <span className="text-xs text-slate-400 font-medium hidden sm:block">Account Deletion</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        {/* Hero */}
        <div className="text-center space-y-3 py-4">
          <div className="inline-flex items-center gap-2 bg-red-50 [color:var(--red)] text-xs font-semibold px-3 py-1.5 rounded-full border [border-color:var(--red-mid)]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Account Deletion
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Delete Your Account &amp; Data
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            You have the right to delete your MedBell account and all associated data at any time. This action is permanent and cannot be undone.
          </p>
        </div>

        {/* In-app method — highlighted first */}
        <div className="bg-white rounded-2xl border-2 [border-color:var(--red-mid)] shadow-sm overflow-hidden">
          <div className="[background:var(--red)] px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-base">Delete directly in the app</h2>
              <p className="text-white/70 text-xs mt-0.5">Fastest method — takes effect immediately</p>
            </div>
            <span className="ml-auto bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Recommended</span>
          </div>
          <div className="px-5 py-5 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              You can delete your account and all data directly from within the MedBell app without needing to contact us.
            </p>
            <ol className="space-y-3">
              {[
                { step: "1", text: "Open the MedBell app and sign in to your account." },
                { step: "2", text: "Tap the Profile icon in the bottom navigation bar." },
                { step: "3", text: "Tap Account." },
                { step: "4", text: "Select \"Delete Account\" and follow the on-screen confirmation steps." },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full [background:var(--red)] text-white text-xs font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ol>
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-start gap-2.5">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <p className="text-amber-700 text-xs leading-relaxed">
                <span className="font-semibold">This action is irreversible.</span> Once you confirm deletion in the app, your account and all associated health data will be permanently removed.
              </p>
            </div>
          </div>
        </div>

        {/* Email method */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="w-8 h-8 [background:var(--red-soft)] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 [color:var(--red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-800 font-bold text-base">Request deletion by email</h2>
              <p className="text-slate-400 text-xs mt-0.5">If you can't access the app</p>
            </div>
          </div>
          <div className="px-5 py-5 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              If you are unable to access the app, you can request account deletion by sending us an email with the following details.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Send email to</p>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <a
                    href="mailto:hello.medbell@gmail.com?subject=Account%20Deletion%20Request%20%E2%80%93%20MedBell"
                    className="text-sm font-medium [color:var(--red)] hover:underline"
                  >
                    hello.medbell@gmail.com
                  </a>
                  <a
                    href="mailto:hello.medbell@gmail.com?subject=Account%20Deletion%20Request%20%E2%80%93%20MedBell"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 [background:var(--red)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Open Email
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email subject line</p>
                </div>
                <div className="px-4 py-3">
                  <code className="text-sm text-slate-700 font-mono">&quot;Account Deletion Request – MedBell&quot;</code>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Include in your email</p>
                </div>
                <ul className="px-4 py-3 space-y-2">
                  {[
                    "The email address linked to your MedBell account",
                    "The sign-in method you used (Google or Apple)",
                    "Your full name (as registered in the app)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                      <svg className="w-4 h-4 [color:var(--red)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What gets deleted / retained */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-emerald-50 border-b border-emerald-100 px-4 py-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <h3 className="text-sm font-bold text-emerald-800">What will be deleted</h3>
            </div>
            <ul className="px-4 py-4 space-y-2.5">
              {[
                "Account information (name, email, user ID)",
                "Medication schedules and reminder history",
                "Vital sign logs and health records",
                "Doctor appointments and notes",
                "Caregiver and care network connections",
                "App usage data stored in our system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-bold text-slate-700">What may be retained</h3>
            </div>
            <ul className="px-4 py-4 space-y-2.5">
              {[
                "Subscription transaction records (managed by Apple / Google)",
                "Anonymous, non-identifiable analytics data",
                "Data required by law or for fraud prevention",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-3">
                Retained data is held for up to 30–90 days where required by law or platform policies, then permanently deleted.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-5 flex items-start gap-4">
          <div className="w-10 h-10 [background:var(--red-soft)] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 [color:var(--red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-1">Deletion timeline</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Once your request is verified, your data will be permanently deleted within <span className="font-medium text-slate-700">7–30 business days</span>. You will receive a confirmation email when deletion is complete.
            </p>
          </div>
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
