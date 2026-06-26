import Link from "next/link";
import { LANGUAGES, type Lang } from "@/config/navigation";

type LanguageSelectorProps = {
  lang: Lang;
  /** Target href for the same page in each language. */
  hrefs: Record<Lang, string>;
  className?: string;
};

/**
 * FR | ENG | AR language selector.
 *
 * Each label links to the same page in the corresponding language; the active
 * language is highlighted. Targets are computed by the Header from the pathname.
 */
export default function LanguageSelector({ lang, hrefs, className = "" }: LanguageSelectorProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LANGUAGES.map((item, i) => (
        <span key={item.code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-navy-950/25" aria-hidden>|</span>}
          <Link
            href={hrefs[item.code]}
            aria-current={lang === item.code ? "true" : undefined}
            className={`text-sm font-semibold tracking-wide transition ${
              lang === item.code ? "text-accent-500" : "text-navy-950/60 hover:text-navy-950"
            }`}
          >
            {item.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
