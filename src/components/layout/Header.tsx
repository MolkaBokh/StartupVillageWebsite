"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { NAV_ITEMS, STARTUP_VILLAGE_SUBMENU } from "@/config/navigation";

/**
 * Shared site header.
 *
 * Visual structure follows the Startup-Village-Homepage header: a clean white
 * bar, the same 72rem container, px-6 / py-4 proportions and bottom hairline.
 * The navigation model follows the Startup Village Menzah page: a left logo
 * (image only), a centered nav with a "Startup Village" dropdown, and the
 * FR / ENG language selector on the right. Includes a responsive mobile menu.
 */
export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const startupVillageActive = STARTUP_VILLAGE_SUBMENU.some((item) => isActive(item.href));

  return (
    <header className="border-b border-navy-950/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left — logo only */}
        <Logo height={56} />

        {/* Center — desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition ${
                    startupVillageActive ? "text-accent-500" : "text-navy-950/80 hover:text-accent-500"
                  }`}
                >
                  {item.label}
                  <svg viewBox="0 0 12 8" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </button>

                {dropdownOpen && (
                  // The outer wrapper starts flush with the trigger (top-full,
                  // no margin) and uses pt-2 as an invisible "hover bridge" so
                  // the cursor never crosses a dead gap between the trigger and
                  // the panel — keeping the dropdown open and its links clickable.
                  <div className="absolute left-0 top-full z-20 pt-2">
                    <div className="w-60 rounded-xl border border-navy-950/10 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-2 text-sm font-medium transition ${
                            isActive(child.href)
                              ? "text-accent-500"
                              : "text-navy-950/80 hover:bg-navy-950/5 hover:text-accent-500"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition ${
                  isActive(item.href) ? "text-accent-500" : "text-navy-950/80 hover:text-accent-500"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right — language selector (desktop) + burger (mobile) */}
        <div className="flex items-center gap-3">
          <LanguageSelector className="hidden md:flex" />

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy-950 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-navy-950/10 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <p className="px-2 pt-1 text-xs font-bold uppercase tracking-wide text-navy-950/40">
              Startup Village
            </p>
            {STARTUP_VILLAGE_SUBMENU.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive(child.href) ? "text-accent-500" : "text-navy-950/80 hover:bg-navy-950/5"
                }`}
              >
                {child.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-navy-950/10" />

            {NAV_ITEMS.filter((item) => !item.children).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold tracking-wide transition ${
                  isActive(item.href) ? "text-accent-500" : "text-navy-950/80 hover:bg-navy-950/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <LanguageSelector className="mt-3 px-3" />
          </div>
        </nav>
      )}
    </header>
  );
}
