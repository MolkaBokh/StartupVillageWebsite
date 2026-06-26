/**
 * Central navigation model for the final Startup Village website.
 *
 * Bilingual: the French site lives at the root (/...) and the English site
 * under /en/.... The same component tree renders both; only labels, hrefs
 * (prefixed with /en for English) and text content differ.
 */

export type Lang = "fr" | "en";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  /** Optional dropdown rendered under this item. */
  children?: NavLink[];
};

/** Prefix a root-relative path with the language base (/en for English). */
export function withLang(path: string, lang: Lang): string {
  if (lang === "fr") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

/** The current language inferred from a pathname. */
export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

/** Same route in the other language, used by the language switcher. */
export function toLang(pathname: string, lang: Lang): string {
  const stripped =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  return withLang(stripped || "/", lang);
}

const SUBMENU_LABELS: Record<Lang, string[]> = {
  fr: ["Présentation", "Startup Village Menzah", "Startup Village Charguia", "Responsabilités", "Partenaires"],
  en: ["Overview", "Startup Village Menzah", "Startup Village Charguia", "Responsibility", "Partners"],
};

const SUBMENU_PATHS = [
  "/presentation",
  "/startup-village-menzah",
  "/startup-village-charguia",
  "/responsabilites",
  "/partenaires",
];

const NAV_LABELS: Record<Lang, string[]> = {
  fr: ["Startup Village", "Espace de Vie", "Startups", "Actualités", "Contact"],
  en: ["Startup Village", "Life at the Village", "Startups", "News", "Contact"],
};

const NAV_PATHS = ["/presentation", "/espace-de-vie", "/startups", "/actualites", "/contact"];

/** Build the localized "Startup Village ▼" dropdown contents. */
export function getSubmenu(lang: Lang): NavLink[] {
  return SUBMENU_PATHS.map((path, i) => ({
    label: SUBMENU_LABELS[lang][i],
    href: withLang(path, lang),
  }));
}

/** Build the localized primary (center) navigation. */
export function getNavItems(lang: Lang): NavItem[] {
  return NAV_PATHS.map((path, i) => ({
    label: NAV_LABELS[lang][i],
    href: withLang(path, lang),
    children: i === 0 ? getSubmenu(lang) : undefined,
  }));
}

/** Language options for the language selector. */
export const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "ENG" },
] as const;
