import Image from "next/image";
import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    eyebrow: "Startups",
    title: "Les startups qui font vivre le Village",
    text: "Des entrepreneurs, créateurs et innovateurs qui imaginent, testent et développent leurs solutions au sein de Startup Village.",
    cta1: "Rejoindre le Village",
    cta2: "Découvrir nos espaces",
    alt: "Communauté d'entrepreneurs collaborant chez Startup Village",
  },
  en: {
    eyebrow: "Startups",
    title: "The startups that bring the Village to life",
    text: "Entrepreneurs, creators and innovators who imagine, test and build their solutions within Startup Village.",
    cta1: "Join the Village",
    cta2: "Explore our spaces",
    alt: "Community of entrepreneurs collaborating at Startup Village",
  },
} as const;

export default function Hero({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="relative isolate overflow-hidden">
      <Image src="/assets/images/startups/hero.png" alt={t.alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-sv-navy/25" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-6 py-16 md:min-h-[640px] md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sv-pink">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          {t.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{t.text}</p>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={withLang("/contact", lang)}
            className="inline-flex items-center justify-center rounded-full bg-sv-pink px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sv-pink/90"
          >
            {t.cta1}
          </Link>
          <Link
            href={withLang("/espace-de-vie", lang)}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white"
          >
            {t.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
