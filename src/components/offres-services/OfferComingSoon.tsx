import Link from "next/link";
import { notFound } from "next/navigation";
import { withLang, type Lang } from "@/config/navigation";
import { offerTitle } from "@/data/offresServices";

const T = {
  fr: {
    eyebrow: "Bientôt disponible",
    lead: "Cette offre est en cours de préparation. Revenez bientôt pour découvrir tous les détails.",
    back: "Retour aux offres & services",
  },
  en: {
    eyebrow: "Coming soon",
    lead: "This offer is being prepared. Check back soon for all the details.",
    back: "Back to Offers & Services",
  },
  ar: {
    eyebrow: "قريبًا",
    lead: "هذا العرض قيد الإعداد. عد قريبًا لاكتشاف كل التفاصيل.",
    back: "العودة إلى العروض والخدمات",
  },
} as const;

export default function OfferComingSoon({ slug, lang = "fr" }: { slug: string; lang?: Lang }) {
  const title = offerTitle(slug, lang);
  if (!title) notFound();
  const t = T[lang];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
      <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-sv-pink">{t.eyebrow}</span>
      <h1 className="mt-4 text-3xl font-bold text-sv-navy sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-sv-navy/60">{t.lead}</p>
      <Link
        href={withLang("/offres-services", lang)}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
      >
        {t.back}
      </Link>
    </div>
  );
}
