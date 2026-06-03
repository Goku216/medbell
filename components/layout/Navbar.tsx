"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/**
 * MedBell logo SVG mark
 */
export function LogoMark() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="38" height="38" rx="10" fill="#FFF0F0" />
      <path
        d="M19 8C14.58 8 11 11.58 11 16C11 18.4 12 20.6 13.6 22.2L19 30L24.4 22.2C26 20.6 27 18.4 27 16C27 11.58 23.42 8 19 8Z"
        fill="#E8141E"
        opacity=".15"
      />
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
  );
}

export function Navbar() {
  const sectionIds = NAV_LINKS.map(({ href }) => href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav
        className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5">
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

        {/* Desktop nav links */}
        <ul
          className="hidden lg:flex items-center gap-8"
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-[0.9rem] font-semibold transition-colors relative pb-1",
                    isActive
                      ? "text-neutral-dark after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red after:rounded-full"
                      : "text-neutral-gray hover:text-neutral-dark"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="#download" variant="primary">
            <Icon name="download" className="w-4 h-4" />
            Download App
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-neutral-dark rounded-full transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-neutral-dark rounded-full transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-neutral-dark rounded-full transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2.5 text-[0.9rem] font-semibold text-neutral-gray hover:text-neutral-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Button href="#download" variant="primary" className="w-full justify-center">
              <Icon name="download" className="w-4 h-4" />
              Download App
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
