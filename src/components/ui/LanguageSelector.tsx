import Link from "next/link";
import type { Lang } from "@/config/navigation";

type LanguageSelectorProps = {
  lang: Lang;
  /** Link to the French version of the current page. */
  frHref: string;
  /** Link to the English version of the current page. */
  enHref: string;
  className?: string;
};

/**
 * FR / ENG language selector.
 *
 * Each label links to the same page in the other language; the active language
 * is highlighted. The current language and target hrefs are computed by the
 * Header from the pathname.
 */
export default function LanguageSelector({ lang, frHref, enHref, className = "" }: LanguageSelectorProps) {
  const items: { code: Lang; label: string; href: string }[] = [
    { code: "fr", label: "FR", href: frHref },
    { code: "en", label: "ENG", href: enHref },
  ];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {items.map((item, i) => (
        <span key={item.code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-navy-950/25" aria-hidden>|</span>}
          <Link
            href={item.href}
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
