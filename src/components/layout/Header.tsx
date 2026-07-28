"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { getNavItems, getSubmenu, langFromPath, toLang, withLang, type Lang } from "@/config/navigation";

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const lang = langFromPath(pathname);
  const navItems = getNavItems(lang);
  const submenu = getSubmenu(lang);
  const home = withLang("/", lang);
  const langHrefs: Record<Lang, string> = {
    fr: toLang(pathname, "fr"),
    en: toLang(pathname, "en"),
    ar: toLang(pathname, "ar"),
  };

  const isActive = (href: string) =>
    href === home ? pathname === home : pathname === href || pathname.startsWith(`${href}/`);

  const startupVillageActive = submenu.some((item) => isActive(item.href));

  function openDropdown() {
    setDropdownOpen(true);
    // Focus first item on next tick after render
    requestAnimationFrame(() => menuItemRefs.current[0]?.focus());
  }

  function closeDropdown() {
    setDropdownOpen(false);
    dropdownTriggerRef.current?.focus();
  }

  function handleTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dropdownOpen ? closeDropdown() : openDropdown();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!dropdownOpen) setDropdownOpen(true);
      requestAnimationFrame(() => menuItemRefs.current[0]?.focus());
    } else if (e.key === "Escape") {
      closeDropdown();
    }
  }

  function handleMenuKeyDown(e: React.KeyboardEvent, index: number, total: number) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      menuItemRefs.current[(index + 1) % total]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      menuItemRefs.current[(index - 1 + total) % total]?.focus();
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy-950/10 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left — logo only (visually enlarged via zoom, header height unchanged) */}
        <div className="scale-[1.3]">
          <Logo height={56} href={home} />
        </div>

        {/* Center — desktop navigation */}
        <nav
          aria-label={lang === "ar" ? "التنقل الرئيسي" : lang === "en" ? "Main navigation" : "Navigation principale"}
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  ref={dropdownTriggerRef}
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  onKeyDown={handleTriggerKeyDown}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition ${
                    startupVillageActive ? "text-accent-500" : "text-navy-950/80 hover:text-accent-500"
                  }`}
                >
                  {item.label}
                  <svg viewBox="0 0 12 8" className="h-3 w-3" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-20 pt-2">
                    <div
                      role="menu"
                      className="w-60 rounded-xl border border-navy-950/10 bg-white py-2 shadow-lg"
                    >
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          ref={(el) => { menuItemRefs.current[idx] = el; }}
                          onClick={() => setDropdownOpen(false)}
                          onKeyDown={(e) => handleMenuKeyDown(e, idx, item.children!.length)}
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
          <LanguageSelector lang={lang} hrefs={langHrefs} className="hidden md:flex" />

          <button
            type="button"
            aria-label={mobileOpen
              ? (lang === "ar" ? "إغلاق القائمة" : lang === "en" ? "Close menu" : "Fermer le menu")
              : (lang === "ar" ? "فتح القائمة" : lang === "en" ? "Open menu" : "Ouvrir le menu")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy-950 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label={lang === "ar" ? "القائمة المحمولة" : lang === "en" ? "Mobile menu" : "Menu mobile"}
          className="border-t border-navy-950/10 bg-white px-6 py-4 md:hidden"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <div className="flex flex-col gap-1">
            {/* Category label — use navy-950/60 (4.75:1) instead of /40 (2.56:1) */}
            <p className="px-2 pt-1 text-xs font-bold uppercase tracking-wide text-navy-950/60">
              {navItems[0].label}
            </p>
            {submenu.map((child) => (
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

            {navItems.filter((item) => !item.children).map((item) => (
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

            <LanguageSelector lang={lang} hrefs={langHrefs} className="mt-3 px-3" />
          </div>
        </nav>
      )}
    </header>
  );
}
