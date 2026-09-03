import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Dedicated "Incubateur culinaire" (CoChef) service page — replaces the
 * generic "Bientôt disponible" placeholder for this one offer only. FR
 * wording is supplied verbatim by the business; EN/AR are natural
 * professional translations with the same content, no additions or
 * omissions.
 */

const BASE = "/assets/images/offres-services";

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  offerTitle: string;
  offerItems: string[];
  audienceTitle: string;
  audienceItems: string[];
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Développez votre activité culinaire dans un environnement professionnel",
    heroP1: "Vous lancez une marque alimentaire, un service traiteur ou un concept de restauration ?",
    heroP2: "Startup Village met à disposition un incubateur culinaire conçu pour accompagner les entrepreneurs de la food dans leurs premières étapes de développement.",
    heroP3: "Notre cuisine professionnelle permet de produire, tester, améliorer et commercialiser vos créations tout en bénéficiant d'un environnement entrepreneurial stimulant.",
    offerTitle: "Ce que nous proposons",
    offerItems: ["Cuisine professionnelle", "Cuisine partagée", "Tests produits", "Développement de concepts", "Meal Prep", "Catering pour les événements", "Accompagnement selon les projets"],
    audienceTitle: "Pour qui ?",
    audienceItems: ["Food startups", "Traiteurs", "Chefs", "Pâtissiers", "Marques alimentaires"],
    ctaTitle: "Faites grandir votre projet culinaire.",
    ctaBtn: "Louer le Food Lab",
  },
  en: {
    h1: "Grow your culinary business in a professional environment",
    heroP1: "Are you launching a food brand, a catering service or a restaurant concept?",
    heroP2: "Startup Village provides a culinary incubator designed to support food entrepreneurs through their first stages of development.",
    heroP3: "Our professional kitchen lets you produce, test, improve and market your creations while benefiting from a stimulating entrepreneurial environment.",
    offerTitle: "What we offer",
    offerItems: ["Professional kitchen", "Shared kitchen", "Product testing", "Concept development", "Meal Prep", "Event catering", "Project-based support"],
    audienceTitle: "Who is it for?",
    audienceItems: ["Food startups", "Caterers", "Chefs", "Pastry chefs", "Food brands"],
    ctaTitle: "Grow your culinary project.",
    ctaBtn: "Rent the Food Lab",
  },
  ar: {
    h1: "طوّر نشاطك في مجال الطهي ضمن بيئة احترافية",
    heroP1: "هل تطلقون علامة غذائية أو خدمة تموين أو مفهوم مطعم؟",
    heroP2: "يضع ستارتب فيليج تحت تصرّفكم حاضنة طهي مصمَّمة لمرافقة روّاد الأعمال في مجال الغذاء خلال مراحلهم الأولى من التطوّر.",
    heroP3: "يتيح لكم مطبخنا الاحترافي إنتاج إبداعاتكم واختبارها وتحسينها وتسويقها، مع الاستفادة من بيئة ريادية محفّزة.",
    offerTitle: "ما الذي نقترحه",
    offerItems: ["مطبخ احترافي", "مطبخ مشترك", "اختبار المنتجات", "تطوير المفاهيم", "Meal Prep", "توريد غذائي للفعاليات", "مرافقة حسب المشاريع"],
    audienceTitle: "لمن هذا موجَّه؟",
    audienceItems: ["شركات ناشئة في مجال الغذاء", "مورّدو تموين", "طهاة", "حلوانيون", "علامات غذائية"],
    ctaTitle: "نمِّ مشروعك في مجال الطهي.",
    ctaBtn: "استئجار Food Lab",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CochefContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact?type=foodlab", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/cochef.png`}
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
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
        </div>
      </section>

      {/* 2. CE QUE NOUS PROPOSONS */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.offerTitle}</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.offerItems.map((item) => (
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

      {/* 3. POUR QUI */}
      <section className="bg-slate-50/60 py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.audienceTitle}</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {t.audienceItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sv-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {item}
              </span>
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
