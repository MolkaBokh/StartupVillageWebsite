import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import ServiceSection from "./ServiceSection";

const BASE = "/assets/images/offres-services";

const REUNION_IMGS = [
  { src: `${BASE}/reunion-1.png`, alt: "Salle de réunion 1" },
  { src: `${BASE}/reunion-2.png`, alt: "Salle de réunion 2" },
  { src: `${BASE}/reunion-3.png`, alt: "Salle de réunion 3" },
  { src: `${BASE}/reunion-4.png`, alt: "Salle de réunion 4" },
  { src: `${BASE}/reunion-5.png`, alt: "Salle de réunion 5" },
  { src: `${BASE}/reunion-6.png`, alt: "Salle de réunion 6" },
];
const STUDIO_IMGS = [
  { src: `${BASE}/studio-1.png`, alt: "Studio 1" },
  { src: `${BASE}/studio-2.png`, alt: "Studio 2" },
];

const EYEBROW_COLORS = ["#6FA83C", "#25AFE0", "#F5B339", "#1A2238", "#E21C57", "#25AFE0"];

const T = {
  fr: {
    heroTitle: "Offres & Services",
    heroSubtitle: "Des espaces, services et accompagnements pensés pour répondre aux besoins des entrepreneurs, entreprises et communautés innovantes.",
    heroCta: "Découvrir les offres",
    learnMore: "En savoir plus",
    services: [
      {
        title: "Salles de réunion & formation",
        body: "Des espaces équipés pour organiser réunions, formations, ateliers, séminaires et sessions de travail collaboratives.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "Domiciliation",
        body: "Une adresse professionnelle au cœur de Startup Village pour structurer votre activité et renforcer votre présence.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "Domiciliation" }],
        reverse: true,
      },
      {
        title: "Accompagnement startups",
        body: "Un accompagnement pour aider les porteurs de projets et startups à structurer, développer et accélérer leurs initiatives.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "Accompagnement startups" }],
        reverse: false,
      },
      {
        title: "Studio",
        body: "Un espace dédié à la création de contenus, aux interviews, podcasts, vidéos et formats digitaux professionnels.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "Incubation",
        body: "Un cadre d'accompagnement pour transformer une idée en projet viable, tester son marché et préparer sa croissance.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "Incubation" }],
        reverse: false,
      },
      {
        title: "CoChef – Incubateur culinaire & Catering",
        body: "Un espace dédié à l'innovation culinaire, à l'accompagnement des projets food et à l'organisation de prestations de restauration. CoChef propose également un service de catering pour les événements, conférences, formations et rencontres organisés au Startup Village ou en extérieur.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
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
    learnMore: "Learn more",
    services: [
      {
        title: "Meeting & training rooms",
        body: "Equipped spaces for meetings, training sessions, workshops, seminars and collaborative work sessions.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "Business address",
        body: "A professional address at the heart of Startup Village to structure your activity and strengthen your presence.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "Business address" }],
        reverse: true,
      },
      {
        title: "Startup support",
        body: "Tailored support to help project owners and startups structure, develop and accelerate their initiatives.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "Startup support" }],
        reverse: false,
      },
      {
        title: "Studio",
        body: "A dedicated space for content creation, interviews, podcasts, videos and professional digital formats.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "Incubation",
        body: "A support framework to turn an idea into a viable project, test its market and prepare for growth.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "Incubation" }],
        reverse: false,
      },
      {
        title: "CoChef – Culinary Incubator & Catering",
        body: "A space dedicated to culinary innovation, food project support and catering services. CoChef also provides catering for events, conferences, training sessions and meetings held at Startup Village or off-site.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
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
    learnMore: "اعرف المزيد",
    services: [
      {
        title: "قاعات الاجتماعات والتكوين",
        body: "فضاءات مجهّزة لتنظيم الاجتماعات والتكوينات وورش العمل والندوات وجلسات العمل التشاركية.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "التوطين",
        body: "عنوان مهني في قلب ستارتب فيليج لهيكلة نشاطك وتعزيز حضورك.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "التوطين" }],
        reverse: true,
      },
      {
        title: "مرافقة الشركات الناشئة",
        body: "مرافقة لمساعدة أصحاب المشاريع والشركات الناشئة على هيكلة مبادراتهم وتطويرها وتسريعها.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "مرافقة الشركات الناشئة" }],
        reverse: false,
      },
      {
        title: "الاستوديو",
        body: "فضاء مخصّص لإنتاج المحتوى والمقابلات والبودكاست والفيديوهات والأشكال الرقمية الاحترافية.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "الحاضنة",
        body: "إطار مرافقة لتحويل الفكرة إلى مشروع قابل للتطبيق، واختبار سوقها والتحضير للنموّ.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "الحاضنة" }],
        reverse: false,
      },
      {
        title: "CoChef – حاضنة الطهي والتوريد الغذائي",
        body: "فضاء مخصّص للابتكار الطهي ومرافقة المشاريع الغذائية وتنظيم خدمات الإطعام. تقدّم CoChef أيضًا خدمة توريد غذائي للفعاليات والمؤتمرات والتكوينات واللقاءات المنظّمة في ستارتب فيليج أو خارجه.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
      },
    ],
    ctaTitle: "هل لديك حاجة محدّدة؟",
    ctaText: "فريقنا يرافقك للعثور على العرض الأنسب لمشروعك أو فريقك أو فعاليتك.",
    ctaBtn: "اتصل بنا",
  },
} as const;

export default function OffresServicesContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* HERO — centered, matches Espace de Vie style */}
      <section className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden md:min-h-[580px]">
        <img
          src={`${BASE}/hero.png`}
          alt={t.heroTitle}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,34,56,0.30) 0%, rgba(26,34,56,0.60) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-[56px]">{t.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed md:text-xl">{t.heroSubtitle}</p>
          <div className="mt-9">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
            >
              {t.heroCta}
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES — horizontal sections with carousel */}
      <div id="services">
        {t.services.map((service, i) => (
          <div key={service.title} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
            <ServiceSection
              eyebrowColor={EYEBROW_COLORS[i]}
              title={service.title}
              body={service.body}
              ctaLabel={t.learnMore}
              ctaHref={contact}
              images={service.imgs as { src: string; alt: string }[]}
              reverse={service.reverse}
            />
          </div>
        ))}
      </div>

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
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
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
