/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, type ReactNode } from "react";
import "@/styles/presentation.css";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Présentation (« Le Concept ») page body — integrated from the `presentation`
 * repository. Bilingual: identical markup, styling, images and carousel; only
 * text and CTA hrefs differ. Bold-rich paragraphs are kept as per-language JSX
 * fragments so the visual emphasis is preserved exactly.
 */

/* Outline icons for the 5 founding pillars (inline SVG, Lucide-style) */
const PILLAR_ICONS = [
  /* Incubation & Accélération — rocket */
  <svg key="rocket" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.5-1.5 4 0 4s2.5-2.5 4-4l-4 0Z"/><path d="M9.5 14.5 4.5 19.5"/><path d="M12 2C6.5 2 4 7 4 12c0 1.4.3 2.7.8 3.9L16 4.8A9.8 9.8 0 0 0 12 2Z"/><path d="M12 2c5.5 0 8 5 8 10 0 1.4-.3 2.7-.8 3.9L8 4.8A9.8 9.8 0 0 1 12 2Z"/><circle cx="12" cy="12" r="2"/></svg>,
  /* Soft Landing & Internationalisation — globe */
  <svg key="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  /* Communauté & Collaboration — users */
  <svg key="users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  /* Innovation & Création — lightbulb */
  <svg key="bulb" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
  /* Croissance & Opportunités — trending up */
  <svg key="trending" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

const CAROUSEL_IMAGES = [
  { src: "/assets/images/carousel-1.png", alt: "Startup Village — 1" },
  { src: "/assets/images/carousel-2.png", alt: "Startup Village — 2" },
  { src: "/assets/images/carousel-3.jpg", alt: "Startup Village — 3" },
  { src: "/assets/images/carousel-4.png", alt: "Startup Village — 4" },
];

const T = {
  fr: {
    heroEyebrow: "Le Concept",
    heroTitle: "L'espace qui vous ressemble et vous rassemble",
    introKicker: "Le Concept",
    introTitle: "LE CONCEPT",
    introSubtitle: "L'espace qui vous ressemble et vous rassemble",
    missionKicker: "Notre mission",
    missionTitle: "NOTRE MISSION",
    missionLead: "Créer un environnement de travail collaboratif et inspirant",
    visionKicker: "Notre vision",
    visionTitle: "NOTRE VISION",
    visionLead: "Bâtir un futur de travail humain, plus durable et plus connecté",
    pillarsTitle: "NOS PILIERS FONDATEURS",
    pillars: [
      { h: "Incubation & Accélération",           p: "Accompagner les startups de l'idée au lancement grâce à des programmes d'incubation, de mentorat et d'accélération." },
      { h: "Soft Landing & Internationalisation",  p: "Faciliter l'implantation en Tunisie et l'ouverture à l'international pour les entrepreneurs et équipes en mobilité." },
      { h: "Communauté & Collaboration",           p: "Réunir une communauté diverse d'entrepreneurs, créatifs et professionnels pour co-créer et grandir ensemble." },
      { h: "Innovation & Création",                p: "Stimuler la créativité, les échanges d'idées et les projets transversaux dans un environnement inspirant." },
      { h: "Croissance & Opportunités",            p: "Connecter les villageois aux ressources, partenaires et opportunités qui accélèrent leur développement." },
    ],
    villageoisKicker: "Un cadre de vie et de travail",
    villageoisCta: "Devenir membre",
    villageoisTitle: "Être Villageois, c'est :",
    communauteTitle: "UNE COMMUNAUTÉ SANS FRONTIÈRES",
    softLandingCta: "Découvrir notre offre Soft Landing",
    engagementKicker: "Notre engagement",
    engagementTitle: "Un Lieu Humain et Responsable",
    ctaTitle: "Prêt à faire partie de l'aventure ?",
    ctaBtn: "Je rejoins l'aventure Startup Village",
  },
  en: {
    heroEyebrow: "The Concept",
    heroTitle: "The space that reflects you and brings you together",
    introKicker: "The Concept",
    introTitle: "THE CONCEPT",
    introSubtitle: "The space that reflects you and brings you together",
    missionKicker: "Our mission",
    missionTitle: "OUR MISSION",
    missionLead: "Creating a collaborative and inspiring work environment",
    visionKicker: "Our vision",
    visionTitle: "OUR VISION",
    visionLead: "Building a more human, sustainable and connected future of work",
    pillarsTitle: "OUR FOUNDING PILLARS",
    pillars: [
      { h: "Incubation & Acceleration",            p: "Supporting startups from idea to launch through incubation, mentoring and acceleration programmes." },
      { h: "Soft Landing & Internationalisation",   p: "Easing establishment in Tunisia and opening doors internationally for entrepreneurs and mobile teams." },
      { h: "Community & Collaboration",             p: "Bringing together a diverse community of entrepreneurs, creatives and professionals to co-create and grow." },
      { h: "Innovation & Creation",                 p: "Sparking creativity, idea exchange and cross-disciplinary projects in an inspiring environment." },
      { h: "Growth & Opportunities",                p: "Connecting villagers to the resources, partners and opportunities that accelerate their development." },
    ],
    villageoisKicker: "A place to live and to work",
    villageoisCta: "Become a member",
    villageoisTitle: "Being a Villager means :",
    communauteTitle: "A COMMUNITY WITHOUT BORDERS",
    softLandingCta: "Discover our Soft Landing offer",
    engagementKicker: "Our commitment",
    engagementTitle: "A Human and Responsible Place",
    ctaTitle: "Ready to be part of the adventure?",
    ctaBtn: "I'm joining the Startup Village adventure",
  },
  ar: {
    heroEyebrow: "المفهوم",
    heroTitle: "الفضاء الذي يشبهك ويجمعك",
    introKicker: "المفهوم",
    introTitle: "المفهوم",
    introSubtitle: "الفضاء الذي يشبهك ويجمعك",
    missionKicker: "مهمتنا",
    missionTitle: "مهمتنا",
    missionLead: "بناء بيئة عمل تعاونية وملهمة",
    visionKicker: "رؤيتنا",
    visionTitle: "رؤيتنا",
    visionLead: "بناء مستقبل عمل أكثر إنسانية واستدامة وترابطًا",
    pillarsTitle: "ركائزنا التأسيسية",
    pillars: [
      { h: "الاحتضان والتسريع",             p: "مرافقة الشركات الناشئة من الفكرة حتى الإطلاق عبر برامج الاحتضان والتوجيه والتسريع." },
      { h: "الانطلاق السلس والتدويل",        p: "تيسير الاستقرار في تونس والانفتاح على الأسواق الدولية لروّاد الأعمال والفرق المتنقّلة." },
      { h: "المجتمع والتعاون",               p: "جمع مجتمع متنوّع من روّاد الأعمال والمبدعين والمحترفين للإبداع المشترك والنموّ معًا." },
      { h: "الابتكار والإبداع",              p: "تحفيز الإبداع وتبادل الأفكار والمشاريع العابرة للتخصّصات في بيئة ملهمة." },
      { h: "النموّ والفرص",                  p: "ربط سكان القرية بالموارد والشركاء والفرص التي تسرّع مسيرة تطوّرهم." },
    ],
    villageoisKicker: "إطار للعيش والعمل",
    villageoisCta: "الانضمام كعضو",
    villageoisTitle: "أن تكون من سكان القرية يعني:",
    communauteTitle: "مجتمع بلا حدود",
    softLandingCta: "اكتشف عرض الانطلاق السلس لدينا",
    engagementKicker: "التزامنا",
    engagementTitle: "مكان إنساني ومسؤول",
    ctaTitle: "مستعدّ لتكون جزءًا من المغامرة؟",
    ctaBtn: "أنضمّ إلى مغامرة ستارتب فيليج",
  },
} as const;

const PROSE: Record<Lang, {
  intro: ReactNode;
  missionP1: ReactNode;
  missionP2: ReactNode;
  visionP1: ReactNode;
  visionP2: ReactNode;
  villageois: ReactNode[];
  communaute: ReactNode[];
  engagement: ReactNode[];
}> = {
  fr: {
    intro:
      "Startup Village est un espace de travail collaboratif conçu pour stimuler l'innovation, la créativité et le bien-être au travail. Dans une ambiance conviviale et humaine, il réunit une communauté diversifiée d'entrepreneurs, investisseurs, médias, artistes, freelances et équipes hybrides en quête de sens, de connexion et de collaboration.",
    missionP1:
      "Un lieu où l'on peut innover, co-créer et grandir ensemble, dans un cadre qui valorise la qualité de vie, l'expérimentation et la réussite collective. Chaque idée et chaque tentative deviennent une source d'apprentissage et de progrès.",
    missionP2:
      "Nos espaces de coworking, bureaux privés, salles de réunion, studios créatifs et espaces modulables sont conçus pour stimuler la créativité, favoriser la collaboration et accompagner chaque projet.",
    visionP1:
      "Chez Startup Village, nous encourageons une culture du travail flexible et humain, fondée sur la collaboration, le bien-être au travail, la recherche de sens, et l'impact positif.",
    visionP2:
      "Notre vision est portée par l'idée qu'un environnement de travail inspirant et bienveillant peut favoriser à la fois la performance durable, l'épanouissement personnel et la création de valeur collective.",
    villageois: [
      "Rejoindre une communauté bienveillante et diverse.",
      "Profiter d'une offre complète : bureaux, coworking, studios et salles de réunion.",
      "Participer à une programmation variée : talks, bien-être, ateliers et networking.",
      "Accéder à l'incubation et au financement pour son projet.",
      "Bénéficier d'un réseau de mentors et de partenaires.",
      "Être accompagné dans la gestion administrative et la domiciliation.",
      "Évoluer dans un écosystème connecté à la recherche scientifique.",
    ],
    communaute: [
      "Que vous soyez basé à Tunis, Paris ou Berlin, Startup Village vous ouvre ses portes et vous connecte à une communauté dynamique, inclusive et ouverte sur le monde.",
      "Nous avons le privilège d'accueillir des visiteurs internationaux et de collaborer avec des programmes venus des quatre coins du globe.",
      "Conçus pour répondre aux besoins des travailleurs nomades, des entrepreneurs internationaux, des équipes hybrides et des talents créatifs, nos espaces favorisent la flexibilité, la connexion humaine et la recherche de sens.",
    ],
    engagement: [
      "Au Startup Village, nous cultivons une ambiance chaleureuse et inspirante, où il fait bon travailler, créer et collaborer.",
      "Engagés pour un impact positif, nous intégrons le design durable, le respect de l'environnement et le bien-être au travail dans chacun de nos espaces.",
      "Parce que la performance naît de l'équilibre.",
    ],
  },
  en: {
    intro:
      "Startup Village is a collaborative workspace designed to fuel innovation, creativity and well-being at work. In a warm and human atmosphere, it brings together a diverse community of entrepreneurs, investors, media, artists, freelancers and hybrid teams in search of meaning, connection and collaboration.",
    missionP1:
      "A place to innovate, co-create and grow together, in a setting that values quality of life, experimentation and collective success. Every idea and every attempt becomes a source of learning and progress.",
    missionP2:
      "Our coworking spaces, private offices, meeting rooms, creative studios and modular spaces are designed to spark creativity, foster collaboration and support every project.",
    visionP1:
      "At Startup Village, we nurture a flexible and human work culture, built on collaboration, well-being at work, the search for meaning, and positive impact.",
    visionP2:
      "Our vision is driven by the belief that an inspiring and caring work environment can foster sustainable performance, personal fulfilment and the creation of collective value all at once.",
    villageois: [
      "Join a caring and diverse community.",
      "Enjoy a complete offering: offices, coworking, studios and meeting rooms.",
      "Take part in varied programming: talks, wellness, workshops and networking.",
      "Access incubation and funding for your project.",
      "Benefit from a network of mentors and partners.",
      "Get support with administrative management and business domiciliation.",
      "Grow within an ecosystem connected to scientific research.",
    ],
    communaute: [
      "Whether you're based in Tunis, Paris or Berlin, Startup Village opens its doors and connects you to a dynamic, inclusive and globally open community.",
      "We have the privilege of welcoming international visitors and collaborating with programmes from around the world.",
      "Designed to meet the needs of digital nomads, international entrepreneurs, hybrid teams and creative talents, our spaces foster flexibility, human connection and the search for meaning.",
    ],
    engagement: [
      "At Startup Village, we cultivate a warm and inspiring atmosphere, a great place to work, create and collaborate.",
      "Committed to positive impact, we build sustainable design, respect for the environment and well-being at work into every one of our spaces.",
      "Because performance is born from balance.",
    ],
  },
  ar: {
    intro:
      "ستارتب فيليج هو فضاء عمل تعاوني مصمَّم لتحفيز الابتكار والإبداع والرفاهية في العمل. في أجواء ودّية وإنسانية، يجمع مجتمعًا متنوّعًا من روّاد الأعمال والمستثمرين ووسائل الإعلام والفنّانين والمستقلّين والفرق الهجينة الباحثين عن المعنى والتواصل والتعاون.",
    missionP1:
      "مكان للابتكار والإبداع المشترك والنموّ معًا، في إطار يثمّن جودة الحياة والتجربة والنجاح الجماعي. كلّ فكرة وكلّ محاولة تصبح مصدر تعلّم وتقدّم.",
    missionP2:
      "صُمِّمت فضاءات العمل المشترك والمكاتب الخاصة وقاعات الاجتماعات والاستوديوهات الإبداعية والفضاءات القابلة للتعديل لتحفيز الإبداع ودعم التعاون ومرافقة كلّ مشروع.",
    visionP1:
      "في ستارتب فيليج، نشجّع ثقافة عمل مرنة وإنسانية، قائمة على التعاون والرفاهية في العمل والبحث عن المعنى والأثر الإيجابي.",
    visionP2:
      "تنطلق رؤيتنا من قناعة بأنّ بيئة عمل ملهمة ومراعية قادرة على تحقيق أداء مستدام وازدهار شخصي وخلق قيمة جماعية في آنٍ واحد.",
    villageois: [
      "الانضمام إلى مجتمع متنوّع ومتعاطف.",
      "الاستفادة من عرض متكامل: مكاتب، عمل مشترك، استوديوهات وقاعات اجتماعات.",
      "المشاركة في برمجة متنوّعة: محاضرات، أنشطة رفاهية، ورش وفرص تواصل.",
      "الوصول إلى الاحتضان والتمويل لمشروعك.",
      "الاستفادة من شبكة مرشدين وشركاء.",
      "الحصول على مرافقة في الإدارة والتوطين.",
      "التطوّر ضمن منظومة مرتبطة بالبحث العلمي.",
    ],
    communaute: [
      "سواء كنت في تونس أو باريس أو برلين، يفتح لك ستارتب فيليج أبوابه ويربطك بمجتمع ديناميكي وشامل ومنفتح على العالم.",
      "يشرّفنا استقبال زوّار دوليين والتعاون مع برامج من مختلف أنحاء العالم.",
      "صُمِّمت فضاءاتنا لتلبية احتياجات العاملين الرُّحَّل وروّاد الأعمال الدوليين والفرق الهجينة والمواهب الإبداعية، فهي تعزّز المرونة والتواصل الإنساني والبحث عن المعنى.",
    ],
    engagement: [
      "في ستارتب فيليج، نرعى أجواء دافئة وملهمة، حيث يطيب العمل والإبداع والتعاون.",
      "التزامًا منّا بأثر إيجابي، ندمج التصميم المستدام واحترام البيئة والرفاهية في العمل في كلّ فضاءاتنا.",
      "لأنّ الأداء يولد من التوازن.",
    ],
  },
};

export default function PresentationContent({ lang = "fr" }: { lang?: Lang }) {
  const slides = CAROUSEL_IMAGES.length;
  const [index, setIndex] = useState(0);
  const t = T[lang];
  const prose = PROSE[lang];
  const contactHref = withLang("/contact", lang);
  const softLandingHref = `${contactHref}?subject=${encodeURIComponent("Demande Soft Landing")}`;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides), 5000);
    return () => clearInterval(timer);
  }, [index, slides]);

  const go = (i: number) => setIndex(((i % slides) + slides) % slides);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  return (
    <div className="presentation-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="hero">
        <img src="/assets/images/concept-hero.jpg" alt="Startup Village" loading="eager" />
        <div className="hero-caption">
          <div className="container">
            <h1>{t.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="intro" id="concept">
        <div className="container">
          <span className="kicker">{t.introKicker}</span>
          <h2>{t.introTitle}</h2>
          <p className="subtitle">{t.introSubtitle}</p>
          <div className="accent-bar"></div>
          <p>{prose.intro}</p>
        </div>
      </section>

      {/* 3. NOTRE VISION */}
      <section className="split alt">
        <div className="container">
          <div className="text-col">
            <span className="kicker">{t.visionKicker}</span>
            <h2>{t.visionTitle}</h2>
            <h3>{t.visionLead}</h3>
            <p>{prose.visionP1}</p>
            <p>{prose.visionP2}</p>
          </div>
          <div className="media-col">
            <img src="/assets/images/notre-vision.png" alt={t.visionTitle} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 4. NOTRE MISSION */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/notre-mission.png" alt={t.missionTitle} loading="lazy" />
          </div>
          <div className="text-col">
            <span className="kicker">{t.missionKicker}</span>
            <h2>{t.missionTitle}</h2>
            <h3>{t.missionLead}</h3>
            <p>{prose.missionP1}</p>
            <p>{prose.missionP2}</p>
          </div>
        </div>
      </section>

      {/* 5. NOS PILIERS FONDATEURS */}
      <section className="piliers">
        <div className="container">
          <h2>{t.pillarsTitle}</h2>
          <div className="accent-bar"></div>
          <div className="pillars-row">
            {PILLAR_ICONS.map((icon, i) => (
              <div className="pillar" key={i}>
                <span className="pillar-icon">{icon}</span>
                <h3>{t.pillars[i].h}</h3>
                <p>{t.pillars[i].p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UN CADRE DE VIE ET DE TRAVAIL */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/etre-villageois.jpg" alt={t.villageoisKicker} loading="lazy" />
          </div>
          <div className="text-col">
            <span className="kicker">{t.villageoisKicker}</span>
            <h2>{t.villageoisTitle}</h2>
            <ul className="villageois-list">
              {prose.villageois.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
            <a href={contactHref} className="btn villageois-cta">{t.villageoisCta}</a>
          </div>
        </div>
      </section>

      {/* 7. UNE COMMUNAUTÉ SANS FRONTIÈRES */}
      <section className="communaute">
        <div className="container">
          <div className="inner">
            <h2>{t.communauteTitle}</h2>
            <div className="accent-bar"></div>
            {prose.communaute.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a href={softLandingHref} className="btn communaute-cta">{t.softLandingCta}</a>
          </div>
        </div>
      </section>

      {/* 8. UN LIEU HUMAIN ET RESPONSABLE (carousel) */}
      <section className="split carousel-row alt">
        <div className="container">
          <div
            className="carousel"
            id="carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={t.engagementTitle}
          >
            <div className="carousel-track" id="carouselTrack" style={{ transform: `translateX(-${index * 100}%)` }}>
              {CAROUSEL_IMAGES.map((img, i) => (
                <img key={img.src} src={img.src} alt={img.alt} loading={i === 0 ? "eager" : "lazy"} aria-hidden={i !== index} />
              ))}
            </div>
            <button className="carousel-btn prev" aria-label={lang === "ar" ? "صورة سابقة" : lang === "en" ? "Previous image" : "Image précédente"} onClick={prev}><span aria-hidden>‹</span></button>
            <button className="carousel-btn next" aria-label={lang === "ar" ? "صورة تالية" : lang === "en" ? "Next image" : "Image suivante"} onClick={next}><span aria-hidden>›</span></button>
            <div className="carousel-dots" id="carDots">
              {CAROUSEL_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  className={i === index ? "active" : undefined}
                  aria-label={lang === "ar" ? `الصورة ${i + 1} من ${slides}` : lang === "en" ? `Image ${i + 1} of ${slides}` : `Image ${i + 1} sur ${slides}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>
          <div className="text-col">
            <span className="kicker">{t.engagementKicker}</span>
            <h2>{t.engagementTitle}</h2>
            {prose.engagement.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container cta-final-content">
          <h2>{t.ctaTitle}</h2>
          <a href={contactHref} className="btn">{t.ctaBtn}</a>
        </div>
      </section>
    </div>
  );
}
