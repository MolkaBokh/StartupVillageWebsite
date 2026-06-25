/**
 * Central navigation model for the final Startup Village website.
 *
 * Single source of truth consumed by the shared Header (and reused by the
 * Footer). The structure mirrors the navigation currently used on the
 * Startup Village Menzah page: a "Startup Village" dropdown grouping the
 * institutional pages, followed by the four top-level sections.
 *
 * Routes match the final project page structure (see src/app/*).
 */

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  /** Optional dropdown rendered under this item. */
  children?: NavLink[];
};

/** "Startup Village ▼" dropdown contents. */
export const STARTUP_VILLAGE_SUBMENU: NavLink[] = [
  { label: "Présentation", href: "/presentation" },
  { label: "Startup Village Menzah", href: "/menzah" },
  { label: "Startup Village Charguia", href: "/charguia" },
  { label: "Responsabilités", href: "/responsabilites" },
  { label: "Partenaires", href: "/partenaires" },
];

/** Primary (center) navigation. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Startup Village", href: "/presentation", children: STARTUP_VILLAGE_SUBMENU },
  { label: "Espace de Vie", href: "/espace-de-vie" },
  { label: "Startups", href: "/startups" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

/** Language options for the language selector. */
export const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "ENG" },
] as const;
