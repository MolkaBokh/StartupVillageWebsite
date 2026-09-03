import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Dedicated "Market & Co" service page — replaces the generic "Bientôt
 * disponible" placeholder for this one offer only. FR wording is supplied
 * verbatim by the business; EN/AR are natural professional translations
 * with the same content, no additions or omissions.
 */

const BASE = "/assets/images/offres-services";

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  whyTitle: string;
  whyItems: string[];
  audienceTitle: string;
  audienceItems: string[];
  stepsTitle: string;
  steps: string[];
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Faites découvrir vos produits dans un espace de vente partagé",
    heroP1: "Lancer un produit sur le marché ne devrait pas nécessiter l'ouverture d'une boutique entière.",
    heroP2: "Avec Market & Co, Startup Village met à disposition un espace de vente partagé où les entrepreneurs, artisans, créateurs et petites entreprises peuvent exposer, tester et commercialiser leurs produits auprès d'une communauté active.",
    heroP3: "Situé à Startup Village Charguia, Market & Co démocratise l'accès au marché en offrant une solution flexible, accessible et sans les contraintes d'un commerce traditionnel.",
    whyTitle: "Pourquoi Market & Co ?",
    whyItems: [
      "Commercialisez vos produits sans ouvrir une boutique.",
      "Testez votre marché avant d'investir davantage.",
      "Profitez d'une visibilité auprès de la communauté Startup Village.",
      "Partagez un espace avec d'autres marques et créateurs.",
      "Bénéficiez d'une rotation régulière pour mettre en avant de nouveaux produits.",
    ],
    audienceTitle: "Pour qui ?",
    audienceItems: ["Artisans", "Créateurs", "Marques locales", "Startups", "Producteurs", "Petites entreprises", "Entrepreneurs souhaitant valider leur offre"],
    stepsTitle: "Comment ça fonctionne ?",
    steps: [
      "Déposez votre candidature.",
      "Notre équipe étudie votre projet",
      "Installez vos produits dans votre espace dédié.",
      "Faites découvrir votre marque à une communauté engagée.",
    ],
    ctaTitle: "Exposez vos produits et rencontrez vos futurs clients.",
    ctaBtn: "Demander un devis",
  },
  en: {
    h1: "Showcase your products in a shared retail space",
    heroP1: "Launching a product on the market shouldn't require opening an entire store.",
    heroP2: "With Market & Co, Startup Village provides a shared retail space where entrepreneurs, artisans, creators and small businesses can showcase, test and sell their products to an active community.",
    heroP3: "Located at Startup Village Charguia, Market & Co democratizes access to the market by offering a flexible, accessible solution without the constraints of a traditional store.",
    whyTitle: "Why Market & Co?",
    whyItems: [
      "Sell your products without opening a store.",
      "Test your market before investing further.",
      "Enjoy visibility with the Startup Village community.",
      "Share a space with other brands and creators.",
      "Benefit from regular rotation to showcase new products.",
    ],
    audienceTitle: "Who is it for?",
    audienceItems: ["Artisans", "Creators", "Local brands", "Startups", "Producers", "Small businesses", "Entrepreneurs looking to validate their offer"],
    stepsTitle: "How does it work?",
    steps: [
      "Submit your application.",
      "Our team reviews your project",
      "Set up your products in your dedicated space.",
      "Introduce your brand to an engaged community.",
    ],
    ctaTitle: "Showcase your products and meet your future customers.",
    ctaBtn: "Request a quote",
  },
  ar: {
    h1: "اعرضوا منتجاتكم في فضاء بيع مشترك",
    heroP1: "إطلاق منتج في السوق لا يجب أن يتطلّب فتح متجر كامل.",
    heroP2: "مع Market & Co، يضع ستارتب فيليج تحت تصرّفكم فضاء بيع مشترك يمكن فيه لروّاد الأعمال والحرفيين والمبدعين والمؤسسات الصغيرة عرض منتجاتهم واختبارها وتسويقها لدى مجتمع نشط.",
    heroP3: "يقع Market & Co في ستارتب فيليج الشرقية، ويُتيح الوصول إلى السوق بحلّ مرن وفي المتناول ودون قيود التجارة التقليدية.",
    whyTitle: "لماذا Market & Co؟",
    whyItems: [
      "سوّقوا منتجاتكم دون فتح متجر.",
      "اختبروا سوقكم قبل الاستثمار أكثر.",
      "استفيدوا من ظهور لدى مجتمع ستارتب فيليج.",
      "شاركوا فضاءً مع علامات ومبدعين آخرين.",
      "استفيدوا من تناوب منتظم لإبراز منتجات جديدة.",
    ],
    audienceTitle: "لمن هذا موجَّه؟",
    audienceItems: ["حرفيون", "مبدعون", "علامات محلية", "شركات ناشئة", "منتجون", "مؤسسات صغيرة", "روّاد أعمال راغبون في اختبار عرضهم"],
    stepsTitle: "كيف يعمل؟",
    steps: [
      "قدّموا ترشّحكم.",
      "يدرس فريقنا مشروعكم",
      "ركّبوا منتجاتكم في فضائكم المخصّص.",
      "عرّفوا بعلامتكم لدى مجتمع ملتزم.",
    ],
    ctaTitle: "اعرضوا منتجاتكم والتقوا بعملائكم المستقبليين.",
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

export default function MarketCoContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/louer-stand-exposition.jpg`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.6) 0%, rgba(15,39,72,0.82) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
        </div>
      </section>

      {/* 2. POURQUOI MARKET & CO */}
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

      {/* 3. POUR QUI */}
      <section className="bg-slate-50/60 py-16 md:py-20">
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

      {/* 4. COMMENT ÇA FONCTIONNE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.stepsTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <div key={step} className="relative rounded-2xl border border-sv-navy/10 bg-slate-50/60 px-6 py-8 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sv-cyan-btn text-lg font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-5 text-sm leading-relaxed text-sv-navy/80">{step}</p>
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
