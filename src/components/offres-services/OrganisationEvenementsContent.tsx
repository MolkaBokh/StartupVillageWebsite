import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import ImageCarousel from "./ImageCarousel";

/**
 * Dedicated "Organiser un événement" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. FR wording is
 * supplied verbatim by the business; EN/AR are natural professional
 * translations with the same content, no additions or omissions.
 */

const BASE = "/assets/images/offres-services";
const ESPACE = "/assets/images/espace-de-vie";

// Reused from the Espace de Vie page carousels (Salle polyvalente / Terrasse Exchange)
const AVANT_PREMIERE_IMGS = [
  `${ESPACE}/Avant-premiere-1.png`,
  `${ESPACE}/Avant-premiere-2.png`,
  `${ESPACE}/avant-premiere-3.png`,
  `${ESPACE}/Avant-premiere-4.png`,
];
const SUNSET_IMGS = [`${ESPACE}/Terrasse-3.png`, `${ESPACE}/Terrasse-4.png`, `${ESPACE}/Terrasse-5.png`];
const SUNRISE_IMGS = [`${ESPACE}/Terrasse-1.png`, `${ESPACE}/Terrasse-2.png`];

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroStatsPrefix: string;
  heroStat1: string;
  heroStatsMid: string;
  heroStat2: string;
  heroStatsSuffix: string;
  spacesTitle: string;
  avantPremiereTitle: string;
  avantPremiereSubtitle: string;
  avantPremiereBadge: string;
  avantPremiereP1: string;
  avantPremiereP2: string;
  sunsetTitle: string;
  sunsetSubtitle: string;
  sunsetBadge: string;
  sunsetIntro: string;
  sunsetUses: string[];
  sunriseTitle: string;
  sunriseBadge: string;
  sunriseIntro: string;
  sunriseUses: string[];
  whyTitle: string;
  whyItems: string[];
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Donnez vie à vos événements dans un lieu qui rassemble l'écosystème entrepreneurial tunisien",
    heroP1: "Qu'il s'agisse d'une conférence, d'un séminaire, d'un lancement de produit, d'un hackathon ou d'un événement de networking, le choix du lieu joue un rôle essentiel dans la réussite de votre projet.",
    heroP2: "À Startup Village, nous mettons à votre disposition des espaces événementiels modulables, conçus pour accueillir des événements professionnels de toutes tailles dans un environnement moderne, inspirant et entièrement personnalisable.",
    heroStatsPrefix: "Chaque année, plus de",
    heroStat1: "100 événements",
    heroStatsMid: "sont organisés dans nos espaces, réunissant entrepreneurs, entreprises, investisseurs, institutions, organisations internationales et acteurs de l'innovation venus de plus de",
    heroStat2: "20 pays",
    heroStatsSuffix: ".",
    spacesTitle: "Nos espaces",
    avantPremiereTitle: "Salle Avant-Première",
    avantPremiereSubtitle: "Le cœur événementiel de Startup Village.",
    avantPremiereBadge: "100 m² · jusqu'à 80 personnes assises",
    avantPremiereP1: "Avec ses 100 m² et une capacité allant jusqu'à 80 personnes assises, la Salle Avant-Première accueille conférences, panels, ateliers, formations, émissions radio, hackathons, expositions, débats, lancements de produits et événements corporate.",
    avantPremiereP2: "Sa configuration entièrement modulable permet d'adapter l'espace à chaque format d'événement.",
    sunsetTitle: "Terrasse Sunset",
    sunsetSubtitle: "Pensée pour les moments de convivialité.",
    sunsetBadge: "Capacité : 50 personnes",
    sunsetIntro: "Avec une capacité de 50 personnes, cette terrasse est idéale pour :",
    sunsetUses: ["Afterworks", "Cocktails", "Networking", "Anniversaires d'entreprise", "Soirées privées", "Clôtures d'événements"],
    sunriseTitle: "Terrasse Sunrise",
    sunriseBadge: "Capacité : 20 personnes",
    sunriseIntro: "Attenante à la Salle Avant-Première, cette terrasse accueille principalement :",
    sunriseUses: ["Pauses café", "Espaces catering", "Accueils invités", "Networking matinal"],
    whyTitle: "Pourquoi organiser votre événement chez Startup Village ?",
    whyItems: [
      "Un lieu reconnu par l'écosystème entrepreneurial tunisien",
      "Des espaces entièrement modulables",
      "Un accompagnement dans l'organisation",
      "Une assistance technique selon les besoins",
      "Deux terrasses complémentaires",
      "La possibilité de bénéficier de notre partenaire culinaire",
    ],
    ctaTitle: "Organisons ensemble votre prochain événement.",
    ctaBtn: "Demander un devis",
  },
  en: {
    h1: "Bring your events to life in a place that brings together Tunisia's entrepreneurial ecosystem",
    heroP1: "Whether it's a conference, a seminar, a product launch, a hackathon or a networking event, the choice of venue plays an essential role in the success of your project.",
    heroP2: "At Startup Village, we provide modular event spaces designed to host professional events of all sizes in a modern, inspiring and fully customizable environment.",
    heroStatsPrefix: "Every year, more than",
    heroStat1: "100 events",
    heroStatsMid: "are organized in our spaces, bringing together entrepreneurs, companies, investors, institutions, international organizations and innovation stakeholders from more than",
    heroStat2: "20 countries",
    heroStatsSuffix: ".",
    spacesTitle: "Our spaces",
    avantPremiereTitle: "Salle Avant-Première",
    avantPremiereSubtitle: "The event heart of Startup Village.",
    avantPremiereBadge: "100 m² · up to 80 seated guests",
    avantPremiereP1: "With its 100 m² and a capacity of up to 80 seated people, the Salle Avant-Première hosts conferences, panels, workshops, training sessions, radio broadcasts, hackathons, exhibitions, debates, product launches and corporate events.",
    avantPremiereP2: "Its fully modular configuration allows the space to be adapted to any event format.",
    sunsetTitle: "Terrasse Sunset",
    sunsetSubtitle: "Designed for moments of conviviality.",
    sunsetBadge: "Capacity: 50 people",
    sunsetIntro: "With a capacity of 50 people, this terrace is ideal for:",
    sunsetUses: ["Afterworks", "Cocktails", "Networking", "Company anniversaries", "Private evenings", "Event closings"],
    sunriseTitle: "Terrasse Sunrise",
    sunriseBadge: "Capacity: 20 people",
    sunriseIntro: "Adjoining the Salle Avant-Première, this terrace mainly hosts:",
    sunriseUses: ["Coffee breaks", "Catering areas", "Guest receptions", "Morning networking"],
    whyTitle: "Why organize your event at Startup Village?",
    whyItems: [
      "A place recognized by the Tunisian entrepreneurial ecosystem",
      "Fully modular spaces",
      "Support with organization",
      "Technical assistance as needed",
      "Two complementary terraces",
      "The possibility of using our culinary partner",
    ],
    ctaTitle: "Let's organize your next event together.",
    ctaBtn: "Request a quote",
  },
  ar: {
    h1: "امنحوا الحياة لفعالياتكم في مكان يجمع منظومة ريادة الأعمال التونسية",
    heroP1: "سواء تعلّق الأمر بمؤتمر أو ندوة أو إطلاق منتج أو هاكاثون أو فعالية تواصل، يلعب اختيار المكان دورًا أساسيًا في نجاح مشروعكم.",
    heroP2: "في ستارتب فيليج، نضع تحت تصرّفكم فضاءات فعاليات قابلة للتعديل، مصمَّمة لاستقبال فعاليات مهنية بمختلف الأحجام في بيئة عصرية وملهمة وقابلة للتخصيص بالكامل.",
    heroStatsPrefix: "كلّ سنة، يُنظَّم أكثر من",
    heroStat1: "100 فعالية",
    heroStatsMid: "في فضاءاتنا، تجمع روّاد أعمال وشركات ومستثمرين ومؤسسات ومنظمات دولية وفاعلي ابتكار قادمين من أكثر من",
    heroStat2: "20 دولة",
    heroStatsSuffix: ".",
    spacesTitle: "فضاءاتنا",
    avantPremiereTitle: "Salle Avant-Première",
    avantPremiereSubtitle: "القلب النابض لفعاليات ستارتب فيليج.",
    avantPremiereBadge: "100 م² · حتى 80 شخصًا جالسًا",
    avantPremiereP1: "بمساحة 100 م² وسعة تصل إلى 80 شخصًا جالسًا، تستقبل Salle Avant-Première المؤتمرات والحلقات النقاشية وورش العمل والتكوينات والبرامج الإذاعية والهاكاثونات والمعارض والمناظرات وإطلاق المنتجات والفعاليات المؤسساتية.",
    avantPremiereP2: "يتيح تصميمها القابل للتعديل بالكامل تكييف الفضاء مع كلّ نوع من الفعاليات.",
    sunsetTitle: "Terrasse Sunset",
    sunsetSubtitle: "مصمَّمة للحظات الألفة.",
    sunsetBadge: "السعة: 50 شخصًا",
    sunsetIntro: "بسعة 50 شخصًا، هذه الشرفة مثالية لـ:",
    sunsetUses: ["أمسيات ما بعد العمل", "كوكتيلات", "تواصل", "أعياد ميلاد الشركات", "أمسيات خاصة", "اختتام الفعاليات"],
    sunriseTitle: "Terrasse Sunrise",
    sunriseBadge: "السعة: 20 شخصًا",
    sunriseIntro: "متاخمة لـ Salle Avant-Première، تستقبل هذه الشرفة بشكل رئيسي:",
    sunriseUses: ["فترات استراحة القهوة", "فضاءات التموين", "استقبال الضيوف", "تواصل صباحي"],
    whyTitle: "لماذا تنظّمون فعاليتكم في ستارتب فيليج؟",
    whyItems: [
      "مكان معترف به من قبل منظومة ريادة الأعمال التونسية",
      "فضاءات قابلة للتعديل بالكامل",
      "مرافقة في التنظيم",
      "مساعدة تقنية حسب الحاجة",
      "شرفتان متكاملتان",
      "إمكانية الاستفادة من شريكنا في مجال الطهي",
    ],
    ctaTitle: "لننظّم معًا فعاليتكم القادمة.",
    ctaBtn: "طلب عرض سعر",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OrganisationEvenementsContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  const avantPremiereImages = AVANT_PREMIERE_IMGS.map((src, i) => ({ src, alt: `${t.avantPremiereTitle} ${i + 1}` }));
  const sunsetImages = SUNSET_IMGS.map((src, i) => ({ src, alt: `${t.sunsetTitle} ${i + 1}` }));
  const sunriseImages = SUNRISE_IMGS.map((src, i) => ({ src, alt: `${t.sunriseTitle} ${i + 1}` }));

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/organisation-evenements.jpg`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">
            {t.heroStatsPrefix} <strong className="font-bold text-white">{t.heroStat1}</strong>{" "}
            {t.heroStatsMid}{" "}
            <strong className="font-bold text-white">{t.heroStat2}</strong>
            {t.heroStatsSuffix}
          </p>
        </div>
      </section>

      {/* 2. NOS ESPACES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.spacesTitle}</h2>

          {/* Salle Avant-Première */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <ImageCarousel images={avantPremiereImages} title={t.avantPremiereTitle} />
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-pink" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{t.avantPremiereTitle}</h3>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">{t.avantPremiereSubtitle}</p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-pink px-4 py-1.5 text-sm font-bold text-white">
                {t.avantPremiereBadge}
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.avantPremiereP1}</p>
              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.avantPremiereP2}</p>
            </div>
          </div>

          {/* Terrasse Sunset */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="md:order-2">
              <ImageCarousel images={sunsetImages} title={t.sunsetTitle} />
            </div>
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-blue" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{t.sunsetTitle}</h3>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">{t.sunsetSubtitle}</p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-blue px-4 py-1.5 text-sm font-bold text-white">
                {t.sunsetBadge}
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.sunsetIntro}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.sunsetUses.map((item) => (
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

          {/* Terrasse Sunrise */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <ImageCarousel images={sunriseImages} title={t.sunriseTitle} />
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-green" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{t.sunriseTitle}</h3>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-green px-4 py-1.5 text-sm font-bold text-white">
                {t.sunriseBadge}
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.sunriseIntro}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.sunriseUses.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                    <span className="text-sv-green">
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

      {/* 3. POURQUOI ORGANISER VOTRE ÉVÉNEMENT CHEZ STARTUP VILLAGE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.whyTitle}</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-white px-4 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
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
