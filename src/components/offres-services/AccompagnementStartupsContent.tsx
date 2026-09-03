import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Dedicated "Accompagnement Startup" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. FR wording is
 * supplied verbatim by the business; EN/AR are natural professional
 * translations with the same content, no additions or omissions.
 */

const BASE = "/assets/images/offres-services";

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  supportTitle: string;
  supportItems: string[];
  audienceTitle: string;
  audienceItems: string[];
  joinTitle: string;
  joinP1: string;
  joinP2: string;
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Développez votre startup avec un accompagnement adapté à chaque étape",
    heroP1: "Créer une startup ne se résume pas à développer une idée.",
    heroP2: "Il faut structurer son projet, rencontrer les bonnes personnes, accéder aux bons partenaires et évoluer dans un environnement stimulant.",
    heroP3: "Chez Startup Village, nous accompagnons les entrepreneurs à travers un réseau d'experts, de partenaires, d'investisseurs et d'acteurs de l'innovation pour accélérer leur développement.",
    supportTitle: "Notre accompagnement comprend",
    supportItems: ["Mentorat personnalisé", "Coaching entrepreneurial", "Mise en relation avec des investisseurs", "Networking", "Accès à notre réseau de partenaires", "Participation à des événements de l'écosystème"],
    audienceTitle: "Pour qui ?",
    audienceItems: ["Porteurs de projet", "Startups en création", "Startups en croissance", "Entrepreneurs innovants", "Programmes internationaux"],
    joinTitle: "Comment rejoindre Startup Village ?",
    joinP1: "Il suffit de nous contacter via notre formulaire de contact, notre site internet ou nos réseaux sociaux.",
    joinP2: "Notre équipe prendra contact avec vous afin de comprendre vos besoins et vous orienter vers les solutions les plus adaptées.",
    ctaTitle: "Donnez à votre projet les moyens de grandir.",
    ctaBtn: "Nous contacter",
  },
  en: {
    h1: "Grow your startup with support tailored to every stage",
    heroP1: "Building a startup is not just about developing an idea.",
    heroP2: "It requires structuring your project, meeting the right people, accessing the right partners and growing in a stimulating environment.",
    heroP3: "At Startup Village, we support entrepreneurs through a network of experts, partners, investors and innovation stakeholders to accelerate their growth.",
    supportTitle: "Our support includes",
    supportItems: ["Personalized mentoring", "Entrepreneurial coaching", "Introductions to investors", "Networking", "Access to our partner network", "Participation in ecosystem events"],
    audienceTitle: "Who is it for?",
    audienceItems: ["Project owners", "Startups in creation", "Growing startups", "Innovative entrepreneurs", "International programs"],
    joinTitle: "How to join Startup Village?",
    joinP1: "Simply contact us via our contact form, our website or our social media.",
    joinP2: "Our team will get in touch with you to understand your needs and guide you toward the most suitable solutions.",
    ctaTitle: "Give your project the means to grow.",
    ctaBtn: "Contact us",
  },
  ar: {
    h1: "طوّروا شركتكم الناشئة بمرافقة تتكيّف مع كلّ مرحلة",
    heroP1: "إنشاء شركة ناشئة لا يقتصر على تطوير فكرة.",
    heroP2: "يجب هيكلة مشروعكم ولقاء الأشخاص المناسبين والوصول إلى الشركاء المناسبين والتطوّر في بيئة محفّزة.",
    heroP3: "في ستارتب فيليج، نرافق روّاد الأعمال من خلال شبكة من الخبراء والشركاء والمستثمرين وفاعلي الابتكار لتسريع نموّهم.",
    supportTitle: "مرافقتنا تشمل",
    supportItems: ["توجيه شخصي", "تدريب على ريادة الأعمال", "التواصل مع مستثمرين", "التواصل الشبكي", "الوصول إلى شبكة شركائنا", "المشاركة في فعاليات المنظومة"],
    audienceTitle: "لمن هذا موجَّه؟",
    audienceItems: ["أصحاب المشاريع", "شركات ناشئة في طور الإنشاء", "شركات ناشئة في طور النموّ", "روّاد أعمال مبتكرون", "برامج دولية"],
    joinTitle: "كيف تنضمّون إلى ستارتب فيليج؟",
    joinP1: "يكفي التواصل معنا عبر نموذج الاتصال أو موقعنا الإلكتروني أو شبكات التواصل الاجتماعي الخاصة بنا.",
    joinP2: "سيتواصل معكم فريقنا لفهم احتياجاتكم وتوجيهكم نحو الحلول الأنسب.",
    ctaTitle: "امنحوا مشروعكم وسائل النموّ.",
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

export default function AccompagnementStartupsContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact?type=info", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/accompagnement.png`}
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

      {/* 2. NOTRE ACCOMPAGNEMENT COMPREND */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.supportTitle}</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.supportItems.map((item) => (
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
            {t.audienceItems.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-sv-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMENT REJOINDRE STARTUP VILLAGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.joinTitle}</h2>
          <p className="mt-6 text-base leading-relaxed text-sv-navy/70">{t.joinP1}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.joinP2}</p>
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
