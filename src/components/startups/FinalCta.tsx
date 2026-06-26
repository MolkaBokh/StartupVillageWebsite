import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    title: "Votre startup a sa place ici.",
    text: "Rejoignez un environnement conçu pour accélérer les rencontres, les collaborations et les projets ambitieux.",
    cta: "Nous contacter",
  },
  en: {
    title: "Your startup belongs here.",
    text: "Join an environment built to accelerate connections, collaborations and ambitious projects.",
    cta: "Contact us",
  },
} as const;

export default function FinalCta({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="bg-white pb-20 pt-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-sv-navy md:text-4xl">{t.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-sv-navy/65">{t.text}</p>
        <div className="mt-9">
          <Link
            href={withLang("/contact", lang)}
            className="inline-flex items-center justify-center rounded-full bg-sv-cyan px-8 py-3.5 text-sm font-bold text-white transition hover:bg-sv-cyan/90"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
