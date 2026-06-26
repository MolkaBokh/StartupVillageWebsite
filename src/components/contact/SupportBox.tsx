import Link from "next/link";

const LINKS = [
  { label: "Nous contacter directement", href: "mailto:contact@startupvillage.tn" },
  { label: "Découvrir nos espaces", href: "/espace-de-vie" },
  { label: "Voir nos événements", href: "/actualites" },
];

export default function SupportBox() {
  return (
    <div className="rounded-2xl border border-black/10 bg-primary-50 p-8">
      <h3 className="text-lg font-bold text-navy-950">Besoin d&apos;aide ?</h3>
      <ul className="mt-5 space-y-4">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
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
