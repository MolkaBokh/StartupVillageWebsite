import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Dedicated "Studio Podcast" (Studios Audiovisuels) service page — replaces
 * the generic "Bientôt disponible" placeholder for this one offer only.
 * Trilingual: FR wording is supplied verbatim by the business; EN/AR are
 * natural professional translations with the same content, no additions or
 * omissions.
 */

const BASE = "/assets/images/offres-services";

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  skyTitle: string;
  skySubtitle: string;
  skyImgAlt: string;
  servicesLabel: string;
  skyServices: string[];
  expressTitle: string;
  expressSubtitle: string;
  expressImgAlt: string;
  idealLabel: string;
  expressIdeal: string[];
  whyTitle: string;
  whyItems: string[];
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Produisez des contenus audio et vidéo professionnels",
    heroP1: "Le contenu est un levier essentiel de communication.",
    heroP2: "Startup Village met à disposition deux studios complémentaires permettant aux entreprises, agences, créateurs de contenu et médias de produire des podcasts, interviews, vidéos et campagnes publicitaires de qualité professionnelle.",
    skyTitle: "SkyStudio",
    skySubtitle: "Un studio dédié à la production audiovisuelle.",
    skyImgAlt: "SkyStudio — studio de production audiovisuelle, Startup Village",
    servicesLabel: "Services proposés :",
    skyServices: ["Podcasts vidéo", "Podcasts audio", "Interviews", "Product shooting", "Création de contenu", "Captation en extérieur", "Montage", "Livraison prête à publier", "Location de matériel"],
    expressTitle: "Express FM Studio",
    expressSubtitle: "Le studio historique de la radio Express FM.",
    expressImgAlt: "Express FM Studio — studio radio historique, Startup Village",
    idealLabel: "Idéal pour :",
    expressIdeal: ["Voix off", "Publicités radio", "Spots audio", "Podcasts audio", "Interviews"],
    whyTitle: "Pourquoi choisir nos studios ?",
    whyItems: ["Accompagnement par des professionnels", "Production clé en main", "Matériel professionnel", "Possibilité de tournage en extérieur", "Montage et postproduction"],
    ctaTitle: "Donnez de la voix à votre marque.",
    ctaBtn: "Nous contacter",
  },
  en: {
    h1: "Produce professional audio and video content",
    heroP1: "Content is an essential lever of communication.",
    heroP2: "Startup Village provides two complementary studios enabling companies, agencies, content creators and media outlets to produce podcasts, interviews, videos and advertising campaigns of professional quality.",
    skyTitle: "SkyStudio",
    skySubtitle: "A studio dedicated to audiovisual production.",
    skyImgAlt: "SkyStudio — audiovisual production studio, Startup Village",
    servicesLabel: "Services offered:",
    skyServices: ["Video podcasts", "Audio podcasts", "Interviews", "Product shooting", "Content creation", "Outdoor filming", "Editing", "Publish-ready delivery", "Equipment rental"],
    expressTitle: "Express FM Studio",
    expressSubtitle: "The historic studio of Express FM radio.",
    expressImgAlt: "Express FM Studio — historic radio studio, Startup Village",
    idealLabel: "Ideal for:",
    expressIdeal: ["Voice-over", "Radio advertising", "Audio spots", "Audio podcasts", "Interviews"],
    whyTitle: "Why choose our studios?",
    whyItems: ["Support from professionals", "Turnkey production", "Professional equipment", "Possibility of outdoor filming", "Editing and post-production"],
    ctaTitle: "Give your brand a voice.",
    ctaBtn: "Contact us",
  },
  ar: {
    h1: "أنتج محتوى صوتيًا ومرئيًا احترافيًا",
    heroP1: "المحتوى رافعة أساسية للتواصل.",
    heroP2: "يضع ستارتب فيليج تحت تصرّفكم استوديوهين متكاملين يتيحان للشركات والوكالات وصنّاع المحتوى ووسائل الإعلام إنتاج بودكاست ومقابلات وفيديوهات وحملات إعلانية بجودة احترافية.",
    skyTitle: "SkyStudio",
    skySubtitle: "استوديو مخصّص للإنتاج السمعي البصري.",
    skyImgAlt: "SkyStudio — استوديو الإنتاج السمعي البصري، ستارتب فيليج",
    servicesLabel: "الخدمات المقترحة:",
    skyServices: ["بودكاست فيديو", "بودكاست صوتي", "مقابلات", "تصوير المنتجات", "صناعة المحتوى", "التصوير في الخارج", "المونتاج", "تسليم جاهز للنشر", "كراء المعدّات"],
    expressTitle: "Express FM Studio",
    expressSubtitle: "الاستوديو التاريخي لإذاعة Express FM.",
    expressImgAlt: "استوديو Express FM — الاستوديو التاريخي للإذاعة، ستارتب فيليج",
    idealLabel: "مثالي لـ:",
    expressIdeal: ["تعليق صوتي", "إشهارات إذاعية", "فقرات صوتية", "بودكاست صوتي", "مقابلات"],
    whyTitle: "لماذا تختار استوديوهاتنا؟",
    whyItems: ["مرافقة من قبل محترفين", "إنتاج متكامل", "معدّات احترافية", "إمكانية التصوير في الخارج", "المونتاج وما بعد الإنتاج"],
    ctaTitle: "امنح علامتك التجارية صوتًا.",
    ctaBtn: "اتصل بنا",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StudiosAudiovisuelsContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/studio-1.png`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
        </div>
      </section>

      {/* 2. SKYSTUDIO */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl md:h-[420px]">
              <img src={`${BASE}/studio-2.png`} alt={t.skyImgAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-pink" />
              <h2 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{t.skyTitle}</h2>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">{t.skySubtitle}</p>

              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-sv-navy">{t.servicesLabel}</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.skyServices.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                    <span className="text-sv-pink">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPRESS FM STUDIO */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl md:h-[420px] md:order-2">
              <img src={`${BASE}/studio-3-offres.jpg`} alt={t.expressImgAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-blue" />
              <h2 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{t.expressTitle}</h2>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">{t.expressSubtitle}</p>

              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-sv-navy">{t.idealLabel}</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.expressIdeal.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                    <span className="text-sv-blue">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POURQUOI CHOISIR NOS STUDIOS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.whyTitle}</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-slate-50/60 px-4 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          <div className="mt-8">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
