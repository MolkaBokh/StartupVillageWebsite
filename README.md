# Startup Village — Website

Final, merged **Startup Village** website. This repository consolidates the
previously separate page repositories into a single Next.js application with a
shared design system, header and footer.

> **Status — Step 1: Shared architecture & design system.**
> This step builds the foundation only. **No page content has been merged yet.**
> Each route renders an integration-ready placeholder; the actual sections are
> migrated from their source repositories in step 2.

---

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme` in `src/styles/globals.css`)
- **Plus Jakarta Sans** via `next/font` (typography reference)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Folder structure

```
StartupVillageWebsite/
├── public/
│   └── assets/                    # Consolidated asset store (see assets/README.md)
│       ├── images/
│       ├── icons/
│       ├── logos/
│       │   └── startup-village-logo.svg
│       └── fonts/
├── src/
│   ├── app/                       # Routes (App Router) — placeholders in step 1
│   │   ├── layout.tsx             # Root layout: font + Header + Footer + shell
│   │   ├── page.tsx               # /                (Présentation / accueil)
│   │   ├── presentation/page.tsx  # /presentation
│   │   ├── menzah/page.tsx        # /menzah
│   │   ├── charguia/page.tsx      # /charguia
│   │   ├── espace-de-vie/page.tsx # /espace-de-vie
│   │   ├── startups/page.tsx      # /startups
│   │   ├── partenaires/page.tsx   # /partenaires
│   │   ├── responsabilites/page.tsx
│   │   ├── actualites/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Shared header (reusable)
│   │   │   └── Footer.tsx          # Shared footer (reusable)
│   │   ├── ui/
│   │   │   ├── Logo.tsx            # Brand logo (image only)
│   │   │   ├── LanguageSelector.tsx# FR / ENG selector
│   │   │   └── PagePlaceholder.tsx # Step-1 scaffold
│   │   └── icons/
│   │       └── SocialIcons.tsx     # Footer social icons
│   ├── config/
│   │   └── navigation.ts           # Single source of truth for nav structure
│   └── styles/
│       ├── globals.css             # Tailwind import + design tokens (@theme)
│       ├── typography.css          # Font, heading hierarchy, weights
│       ├── layout.css              # Container + section spacing philosophy
│       └── components.css          # Reusable component classes (btn, card…)
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Architecture decisions

| Area | Decision | Reference |
| --- | --- | --- |
| **Overall architecture** | Next.js App Router, `src/app` routing, root layout wraps every page with the shared Header + Footer. | `Startup-Village-Homepage` |
| **Footer** | Ported verbatim as the official footer (contact / newsletter / socials + copyright). | `Startup-Village-Homepage` |
| **Typography** | Single typeface — **Plus Jakarta Sans** (weights 400–800), with the same heading hierarchy and tight-tracking/bold-headline philosophy. | `startup-startups-page` |
| **Header** | Homepage visual structure (clean white bar, 72rem container, `px-6 py-4`, hairline border, responsive) + the Menzah-page navigation model. | Homepage (visual) + Menzah (nav) |
| **Color system** | Homepage chrome palette (navy / primary-cyan / accent-pink) kept so the shared chrome stays identical; full brand palette exposed as tokens. | `Startup-Village-Homepage` |
| **CSS architecture** | Split into `globals` / `typography` / `layout` / `components` for clear separation of concerns. | — |
| **Navigation model** | Centralized in `src/config/navigation.ts` so Header (and later Footer/sitemap) share one source of truth. | — |
| **Assets** | Consolidated under `public/assets/{images,icons,logos,fonts}`. | — |

### Header specification (as built)

- **Left:** Startup Village logo **only** (image, no text node).
- **Center:**
  - **Startup Village ▼** — dropdown: Présentation · Startup Village Menzah ·
    Startup Village Charguia · Responsabilités · Partenaires
  - Espace de Vie · Startups · Actualités · Contact
- **Right:** FR / ENG language selector.
- Fully responsive with a mobile burger menu.

---

## Reusable components created

- `components/layout/Header.tsx` — shared site header (logo + dropdown nav + language selector + mobile menu).
- `components/layout/Footer.tsx` — official shared footer.
- `components/ui/Logo.tsx` — brand logo (image only), linked to home.
- `components/ui/LanguageSelector.tsx` — FR / ENG selector.
- `components/ui/PagePlaceholder.tsx` — integration-ready page scaffold.
- `components/icons/SocialIcons.tsx` — footer social icon set.
- `config/navigation.ts` — shared navigation model.
- CSS component classes: `.sv-btn`, `.sv-card`, `.sv-chip`, `.sv-divider`, plus
  type utilities `.sv-display`, `.sv-eyebrow`, `.sv-lead` and layout helpers
  `.sv-container`, `.sv-section`, `.sv-shell`.

---

## Files ready for page integration in step 2

Each route below ships a placeholder today; replace the placeholder body with
the migrated sections from the listed source repository (the shared
header/footer/shell stay in place):

| Route | File | Source repository |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | `Startup-Village-Homepage` (home) + `Home-page-SV` |
| `/presentation` | `src/app/presentation/page.tsx` | `presentation` |
| `/menzah` | `src/app/menzah/page.tsx` | `Startup-Village-Homepage` (startup-village-menzah) |
| `/charguia` | `src/app/charguia/page.tsx` | `charguia` |
| `/espace-de-vie` | `src/app/espace-de-vie/page.tsx` | `startup-village-espace-vie` |
| `/startups` | `src/app/startups/page.tsx` | `startup-startups-page` |
| `/partenaires` | `src/app/partenaires/page.tsx` | `startup-partenaires` |
| `/responsabilites` | `src/app/responsabilites/page.tsx` | `responsabilites` |
| `/actualites` | `src/app/actualites/page.tsx` | `actualites` |
| `/contact` | `src/app/contact/page.tsx` | `contact` |
