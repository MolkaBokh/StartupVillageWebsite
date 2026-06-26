/**
 * Central navigation model for the final Startup Village website.
 *
 * Trilingual: French at the root (/...), English under /en/..., Arabic under
 * /ar/... (RTL). The same component tree renders all three; only labels, hrefs
 * (prefixed per language) and text content differ.
 */

export type Lang = "fr" | "en" | "ar";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  /** Optional dropdown rendered under this item. */
  children?: NavLink[];
};

const PREFIX: Record<Lang, string> = { fr: "", en: "/en", ar: "/ar" };

/** Prefix a root-relative path with the language base. */
export function withLang(path: string, lang: Lang): string {
  const base = PREFIX[lang];
  if (!base) return path;
  if (path === "/") return base;
  return `${base}${path}`;
}

/** The current language inferred from a pathname. */
export function langFromPath(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "fr";
}

/** Same route in the other language, used by the language switcher. */
export function toLang(pathname: string, lang: Lang): string {
  const current = langFromPath(pathname);
  // Strip the existing language prefix ("/en" or "/ar"), keeping the rest.
  const stripped = current === "fr" ? pathname : pathname.slice(3) || "/";
  return withLang(stripped || "/", lang);
}

const SUBMENU_LABELS: Record<Lang, string[]> = {
  fr: ["Présentation", "Startup Village Menzah", "Startup Village Charguia", "Responsabilités", "Partenaires"],
  en: ["Overview", "Startup Village Menzah", "Startup Village Charguia", "Responsibility", "Partners"],
  ar: ["نبذة", "ستارتب فيليج المنزه", "ستارتب فيليج الشرقية", "المسؤولية المجتمعية", "الشركاء"],
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
  ar: ["ستارتب فيليج", "فضاءات العيش", "الشركات الناشئة", "الأخبار", "اتصل بنا"],
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
  { code: "ar", label: "AR" },
] as const;
