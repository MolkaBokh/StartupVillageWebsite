import Image from "next/image";
import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    title: "Les startups qui font vivre le Village",
    text: "Des entrepreneurs, créateurs et innovateurs qui imaginent, testent et développent leurs solutions au sein de Startup Village.",
    cta1: "Rejoindre la communauté",
    cta2: "Découvrir nos espaces",
    alt: "Communauté d'entrepreneurs collaborant chez Startup Village",
  },
  en: {
    title: "The startups that bring the Village to life",
    text: "Entrepreneurs, creators and innovators who imagine, test and build their solutions within Startup Village.",
    cta1: "Join the community",
    cta2: "Discover our spaces",
    alt: "Community of entrepreneurs collaborating at Startup Village",
  },
  ar: {
    title: "الشركات الناشئة التي تنبض بها القرية",
    text: "روّاد أعمال ومبدعون ومبتكرون يتخيّلون ويختبرون ويطوّرون حلولهم داخل ستارتب فيليج.",
    cta1: "انضمّ إلى المجتمع",
    cta2: "اكتشف فضاءاتنا",
    alt: "مجتمع من روّاد الأعمال يتعاون في ستارتب فيليج",
  },
} as const;

export default function Hero({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden md:min-h-[580px]">
      <Image
        src="/assets/images/startups/hero-startup-final.jpg"
        alt={t.alt}
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(26,34,56,0.30) 0%, rgba(26,34,56,0.60) 100%)" }}
      />
      <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-[56px]">{t.title}</h1>
        <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed md:text-xl">{t.text}</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href={withLang("/contact", lang)}
            className="inline-flex items-center justify-center rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
          >
            {t.cta1}
          </Link>
          <Link
            href={withLang("/offres-services", lang)}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-base font-bold text-white transition hover:border-white"
          >
            {t.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
