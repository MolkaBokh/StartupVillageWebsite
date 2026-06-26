import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    title: "Besoin d'aide ?",
    links: [
      { label: "Nous contacter directement", href: "mailto:contact@startupvillage.tn" },
      { label: "Découvrir nos espaces", href: "/espace-de-vie" },
      { label: "Voir nos événements", href: "/actualites" },
    ],
  },
  en: {
    title: "Need help?",
    links: [
      { label: "Contact us directly", href: "mailto:contact@startupvillage.tn" },
      { label: "Explore our spaces", href: "/espace-de-vie" },
      { label: "See our events", href: "/actualites" },
    ],
  },
} as const;

export default function SupportBox({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const resolve = (href: string) => (href.startsWith("/") ? withLang(href, lang) : href);

  return (
    <div className="rounded-2xl border border-black/10 bg-primary-50 p-8">
      <h3 className="text-lg font-bold text-navy-950">{t.title}</h3>
      <ul className="mt-5 space-y-4">
        {t.links.map((link) => (
          <li key={link.label}>
            <Link
              href={resolve(link.href)}
              className="flex items-center justify-between text-sm font-bold text-primary-700 transition-colors hover:text-accent-500"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
