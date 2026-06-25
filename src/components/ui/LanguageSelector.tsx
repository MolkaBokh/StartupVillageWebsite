"use client";

import { useState } from "react";
import { LANGUAGES } from "@/config/navigation";

type LanguageSelectorProps = {
  className?: string;
};

/**
 * FR / ENG language selector.
 *
 * Foundation-only: switches the visually-active language locally. Real i18n
 * routing is wired up in a later step — this just establishes the control and
 * its placement in the header (right side).
 */
export default function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const [active, setActive] = useState<string>(LANGUAGES[0].code);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-navy-950/25" aria-hidden>|</span>}
          <button
            type="button"
            onClick={() => setActive(lang.code)}
            aria-pressed={active === lang.code}
            className={`text-sm font-semibold tracking-wide transition ${
              active === lang.code
                ? "text-accent-500"
                : "text-navy-950/60 hover:text-navy-950"
            }`}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );
}
