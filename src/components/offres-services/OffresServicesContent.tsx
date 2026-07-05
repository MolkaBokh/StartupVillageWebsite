import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

const BASE = "/assets/images/offres-services";

const T = {
  fr: {
    heroTitle: "Offres & Services",
    heroSubtitle: "Des espaces, services et accompagnements pensés pour répondre aux besoins des entrepreneurs, entreprises et communautés innovantes.",
    heroCta: "Découvrir les offres",
    servicesTitle: "Nos services",
    learnMore: "En savoir plus",
    services: [
      {
        title: "Salles de réunion & formation",
        text: "Des espaces équipés pour organiser réunions, formations, ateliers, séminaires et sessions de travail collaboratives.",
        img: `${BASE}/reunion-1.png`,
      },
      {
        title: "Domiciliation",
        text: "Une adresse professionnelle au cœur de Startup Village pour structurer votre activité et renforcer votre présence.",
        img: `${BASE}/domiciliation.png`,
      },
      {
        title: "Accompagnement startups",
        text: "Un accompagnement pour aider les porteurs de projets et startups à structurer, développer et accélérer leurs initiatives.",
        img: `${BASE}/accompagnement.png`,
      },
      {
        title: "Studio",
        text: "Un espace dédié à la création de contenus, aux interviews, podcasts, vidéos et formats digitaux professionnels.",
        img: `${BASE}/studio-1.png`,
      },
      {
        title: "Incubation",
        text: "Un cadre d'accompagnement pour transformer une idée en projet viable, tester son marché et préparer sa croissance.",
        img: `${BASE}/incubation.png`,
      },
      {
        title: "CoChef",
        text: "La cantine du Startup Village, pensée pour les pauses, les déjeuners, les brunchs, les événements privés et les moments de convivialité.",
        img: `${BASE}/cochef.png`,
      },
    ],
    ctaTitle: "Vous avez un besoin spécifique ?",
    ctaText: "Notre équipe vous accompagne pour trouver l'offre la plus adaptée à votre projet, votre équipe ou votre événement.",
    ctaBtn: "Nous contacter",
  },
  en: {
    heroTitle: "Offers & Services",
    heroSubtitle: "Spaces, services and support designed to meet the needs of entrepreneurs, businesses and innovative communities.",
    heroCta: "Discover our offers",
    servicesTitle: "Our services",
    learnMore: "Learn more",
    services: [
      {
        title: "Meeting & training rooms",
        text: "Equipped spaces for meetings, training sessions, workshops, seminars and collaborative work sessions.",
        img: `${BASE}/reunion-1.png`,
      },
      {
        title: "Business address",
        text: "A professional address at the heart of Startup Village to structure your activity and strengthen your presence.",
        img: `${BASE}/domiciliation.png`,
      },
      {
        title: "Startup support",
        text: "Tailored support to help project owners and startups structure, develop and accelerate their initiatives.",
        img: `${BASE}/accompagnement.png`,
      },
      {
        title: "Studio",
        text: "A dedicated space for content creation, interviews, podcasts, videos and professional digital formats.",
        img: `${BASE}/studio-1.png`,
      },
      {
        title: "Incubation",
        text: "A support framework to turn an idea into a viable project, test its market and prepare for growth.",
        img: `${BASE}/incubation.png`,
      },
      {
        title: "CoChef",
        text: "The Startup Village canteen, designed for breaks, lunches, brunches, private events and convivial moments.",
        img: `${BASE}/cochef.png`,
      },
    ],
    ctaTitle: "Do you have a specific need?",
    ctaText: "Our team will help you find the offer best suited to your project, team or event.",
    ctaBtn: "Contact us",
  },
  ar: {
    heroTitle: "العروض والخدمات",
    heroSubtitle: "فضاءات وخدمات ومرافقة مصمّمة لتلبية احتياجات روّاد الأعمال والشركات والمجتمعات المبتكرة.",
    heroCta: "اكتشف العروض",
    servicesTitle: "خدماتنا",
    learnMore: "اعرف المزيد",
    services: [
      {
        title: "قاعات الاجتماعات والتكوين",
        text: "فضاءات مجهّزة لتنظيم الاجتماعات والتكوينات وورش العمل والندوات وجلسات العمل التشاركية.",
        img: `${BASE}/reunion-1.png`,
      },
      {
        title: "التوطين",
        text: "عنوان مهني في قلب ستارتب فيليج لهيكلة نشاطك وتعزيز حضورك.",
        img: `${BASE}/domiciliation.png`,
      },
      {
        title: "مرافقة الشركات الناشئة",
        text: "مرافقة لمساعدة أصحاب المشاريع والشركات الناشئة على هيكلة مبادراتهم وتطويرها وتسريعها.",
        img: `${BASE}/accompagnement.png`,
      },
      {
        title: "الاستوديو",
        text: "فضاء مخصّص لإنتاج المحتوى والمقابلات والبودكاست والفيديوهات والأشكال الرقمية الاحترافية.",
        img: `${BASE}/studio-1.png`,
      },
      {
        title: "الحاضنة",
        text: "إطار مرافقة لتحويل الفكرة إلى مشروع قابل للتطبيق، واختبار سوقها والتحضير للنموّ.",
        img: `${BASE}/incubation.png`,
      },
      {
        title: "CoChef",
        text: "مطعم ستارتب فيليج، مصمَّم للاستراحات والغدادات والبرانش والفعاليات الخاصة ولحظات المؤانسة.",
        img: `${BASE}/cochef.png`,
      },
    ],
    ctaTitle: "هل لديك حاجة محدّدة؟",
    ctaText: "فريقنا يرافقك للعثور على العرض الأنسب لمشروعك أو فريقك أو فعاليتك.",
    ctaBtn: "اتصل بنا",
  },
} as const;

const CARD_COLORS = ["bg-sv-cyan", "bg-sv-green", "bg-sv-yellow", "bg-sv-pink", "bg-sv-cyan", "bg-sv-green"];

export default function OffresServicesContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={`${BASE}/hero.png`}
          alt={t.heroTitle}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-sv-navy/50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sv-navy/60 via-sv-navy/30 to-transparent" />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{t.heroSubtitle}</p>
            <div className="mt-8">
              <a
                href="#services"
                className="font-sans inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
              >
                {t.heroCta}
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => (
              <div
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-shadow hover:shadow-[0_14px_30px_-20px_rgba(15,39,72,0.18)]"
              >
                {/* Card image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute left-4 top-4 h-1.5 w-9 rounded-full ${CARD_COLORS[i]}`} />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-sv-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sv-navy/60">{service.text}</p>
                  <div className="mt-5">
                    <Link
                      href={contact}
                      className="font-sans inline-flex items-center gap-1.5 rounded-full bg-sv-cyan px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
                    >
                      {t.learnMore}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{t.ctaText}</p>
          <div className="mt-8">
            <Link
              href={contact}
              className="font-sans inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
            >
              {t.ctaBtn}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
