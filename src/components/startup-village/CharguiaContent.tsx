/* eslint-disable @next/next/no-img-element */
import { type ReactNode } from "react";
import { withLang, type Lang } from "@/config/navigation";
import { CHARGUIA_STYLES } from "./charguiaStyles";

/**
 * Startup Village Charguia page body (bilingual). Identical markup, scoped
 * styles, images and CSS marquee; only text and CTA hrefs differ.
 */

const IMG = "/assets/images/charguia/";

const GALLERY = ["espace-1.png", "espace-2.png", "espace-3.png", "espace-4.png", "espace-5.jpeg", "espace-6.png"];

const LOGOS = [
  { file: "alania.png", name: "Alania" },
  { file: "farmasi.png", name: "Farmasi" },
  { file: "global-it-vision.png", name: "Global IT Vision" },
  { file: "seniatna.png", name: "Seniatna" },
  { file: "skytek.png", name: "Skytek" },
  { file: "waycon.png", name: "Waycon" },
  { file: "franchiselab.png", name: "FranchiseLab" },
  { file: "it-grow.png", name: "I.T Grow" },
  { file: "kamioun.png", name: "Kamioun" },
  { file: "open-work.png", name: "Open Work" },
  { file: "misk.jpg", name: "Misk" },
  { file: "nexflow.png", name: "Nexflow" },
  { file: "takt.webp", name: "Takt" },
  { file: "best-tech-system.jpg", name: "Best Tech System" },
  { file: "design-lab.jpg", name: "Design Lab" },
];

const T = {
  fr: {
    heroSub: "L'espace d'innovation dédié à l'e-commerce",
    heroBtn: "RÉSERVER UN ESPACE",
    introTitle: "Startup Village Charguia",
    introTitleSub: "L'espace hybride du e-commerce et de l'innovation",
    introP1: "Un nouveau chapitre dans l'aventure Startup Village : nous nous agrandissons et choisissons Charguia pour ouvrir un deuxième site, au cœur de la zone industrielle, à deux pas de l'aéroport et des grands axes logistiques.",
    introP2: "Né de l'envie d'aller plus loin, ce nouveau lieu incarne notre vision d'un travail plus fluide, plus humain, et encore plus connecté au monde.",
    introP3a: "Au Startup Village Charguia, on ne vient pas juste pour travailler.",
    introP3b: "On vient pour créer, stocker, expédier, collaborer, produire… et respirer.",
    statsTitle: ["Un espace stratégique", "pour des usages concrets"],
    statsP: "Ici, tout a été pensé pour accompagner les pratiques professionnelles d'aujourd'hui : hybrides, rapides et connectées.",
    stats: [
      { h: "17 bureaux privatifs", s: "+120 postes" },
      { h: "2 espaces Coworking", s: "+90 postes" },
      { h: "3 salles de réunions", s: "+20 postes" },
      { h: "1 salle polyvalente", s: "+70 postes" },
    ],
    galleryBand: "DÉCOUVREZ NOS ESPACES",
    spaceAlt: "Espace",
    coStorageTitle: "Co-Storage",
    coStorageSub: "Logistique intégrée, pensée pour les marques agiles",
    coStorageP: [
      "À Charguia, un entrepôt de 1000 m³ est intégré directement à l'espace de travail.",
      "Une approche fluide et connectée, pour rapprocher les équipes de leurs opérations grâce à une expertise de plus de 10 années dans la gestion de stock, un ERP dédié et une chambre froide pour une conservation alimentaire spécifique.",
      "Une solution souple, pour les e-commerçants et créateurs qui misent sur l'autonomie et la réactivité.",
    ],
    coStorageBtn: "Je dépose mon stock",
    strip: ["Gestion optimisée des stocks", "Préparation des commandes sur place", "Suivi des mouvements et inventaires", "Appui logistique et une distribution autonome"],
    marketBtn: "Je rejoins le concept",
    logosTitle: "Ils nous font confiance",
    villageoisTitle: "POURQUOI DEVENIR VILLAGEOIS ?",
    villageoisLead: "Devenez membre !",
    benefits: ["Warehouse & logistique", "Emplacement stratégique", "Accès à une communauté diversifiée d'entrepreneurs et de créatifs"],
    villageoisBtn: "Je rejoins la communauté",
  },
  en: {
    heroSub: "The innovation hub dedicated to e-commerce",
    heroBtn: "BOOK A SPACE",
    introTitle: "Startup Village Charguia",
    introTitleSub: "The hybrid hub of e-commerce and innovation",
    introP1: "A new chapter in the Startup Village story: we're expanding and choosing Charguia to open a second site, at the heart of the industrial zone, just steps from the airport and major logistics routes.",
    introP2: "Born from the desire to go further, this new place embodies our vision of work that is more fluid, more human and even more connected to the world.",
    introP3a: "At Startup Village Charguia, you don't come just to work.",
    introP3b: "You come to create, store, ship, collaborate, produce… and breathe.",
    statsTitle: ["A strategic space", "for concrete uses"],
    statsP: "Everything here is designed to support today's professional practices: hybrid, fast and connected.",
    stats: [
      { h: "17 private offices", s: "+120 seats" },
      { h: "2 coworking areas", s: "+90 seats" },
      { h: "3 meeting rooms", s: "+20 seats" },
      { h: "1 multipurpose room", s: "+70 seats" },
    ],
    galleryBand: "DISCOVER OUR SPACES",
    spaceAlt: "Space",
    coStorageTitle: "Co-Storage",
    coStorageSub: "Integrated logistics, built for agile brands",
    coStorageP: [
      "At Charguia, a 1,000 m³ warehouse is integrated directly into the workspace.",
      "A smooth, connected approach that brings teams closer to their operations, powered by over 10 years of stock-management expertise, a dedicated ERP and a cold room for specific food storage.",
      "A flexible solution for e-merchants and creators who value autonomy and responsiveness.",
    ],
    coStorageBtn: "I drop off my stock",
    strip: ["Optimized stock management", "On-site order preparation", "Movement tracking and inventory", "Logistics support and independent distribution"],
    marketBtn: "I'm joining the concept",
    logosTitle: "They trust us",
    villageoisTitle: "WHY BECOME A VILLAGER?",
    villageoisLead: "Become a member!",
    benefits: ["Warehouse & logistics", "Strategic location", "Access to a diverse community of entrepreneurs and creatives"],
    villageoisBtn: "I'm joining the community",
  },
  ar: {
    heroSub: "فضاء الابتكار المخصّص للتجارة الإلكترونية",
    heroBtn: "احجز فضاءً",
    introTitle: "ستارتب فيليج الشرقية",
    introTitleSub: "الفضاء الهجين للتجارة الإلكترونية والابتكار",
    introP1: "فصل جديد في مسيرة ستارتب فيليج: نتوسّع ونختار الشرقية لافتتاح موقع ثانٍ، بقلب المنطقة الصناعية، على بُعد خطوات من المطار والمحاور اللوجستية الكبرى.",
    introP2: "وُلِد هذا المكان الجديد من الرغبة في المضيّ أبعد، وهو يجسّد رؤيتنا لعمل أكثر سلاسة وإنسانية وارتباطًا بالعالم.",
    introP3a: "في ستارتب فيليج الشرقية، لا تأتي للعمل فحسب.",
    introP3b: "تأتي للإبداع والتخزين والشحن والتعاون والإنتاج… والتنفّس.",
    statsTitle: ["فضاء استراتيجي", "لاستخدامات ملموسة"],
    statsP: "هنا، صُمِّم كلّ شيء لمواكبة الممارسات المهنية اليوم: هجينة وسريعة ومترابطة.",
    stats: [
      { h: "17 مكتبًا خاصًا", s: "+120 مقعدًا" },
      { h: "فضاءان للعمل المشترك", s: "+90 مقعدًا" },
      { h: "3 قاعات اجتماعات", s: "+20 مقعدًا" },
      { h: "قاعة متعدّدة الأغراض", s: "+70 مقعدًا" },
    ],
    galleryBand: "اكتشف فضاءاتنا",
    spaceAlt: "فضاء",
    coStorageTitle: "Co-Storage",
    coStorageSub: "خدمات لوجستية مدمجة، مصمّمة للعلامات الرشيقة",
    coStorageP: [
      "في الشرقية، مستودع بمساحة 1000 م³ مدمج مباشرة في فضاء العمل.",
      "نهج سلس ومترابط يقرّب الفرق من عملياتها، بالاعتماد على خبرة تتجاوز 10 سنوات في إدارة المخزون، ونظام ERP مخصّص، وغرفة تبريد لحفظ غذائي خاص.",
      "حلّ مرن لتجّار التجارة الإلكترونية والمبدعين الذين يراهنون على الاستقلالية وسرعة الاستجابة.",
    ],
    coStorageBtn: "أودِع مخزوني",
    strip: ["إدارة محسّنة للمخزون", "تحضير الطلبات في الموقع", "تتبّع الحركات والجرد", "دعم لوجستي وتوزيع مستقل"],
    marketBtn: "أنضمّ إلى المفهوم",
    logosTitle: "هم يثقون بنا",
    villageoisTitle: "لماذا تصبح من سكان القرية؟",
    villageoisLead: "كن عضوًا!",
    benefits: ["مستودعات ولوجستيك", "موقع استراتيجي", "الوصول إلى مجتمع متنوّع من روّاد الأعمال والمبدعين"],
    villageoisBtn: "أنضمّ إلى المجتمع",
  },
} as const;

const MARKET: Record<Lang, { sub: ReactNode; p1: ReactNode; p2: ReactNode }> = {
  fr: {
    sub: (<><b>Le concept store collaboratif</b> du Startup Village Charguia</>),
    p1: (<><b>Market &amp; Co</b> est un <b>concept store multi-enseignes</b> installé au cœur de <b>Startup Village Charguia</b>. Pensé comme une <b>boutique partagée</b>, il réunit en un seul lieu une diversité de produits : <b>artisanat, design, art, alimentation, cosmétique naturelle, accessoires</b> et bien plus encore.</>),
    p2: (<>{"L'objectif est de "}<b>faciliter l&apos;accès à la vente physique</b> pour les <b>entrepreneurs, artisans, producteurs et créateurs</b>, tout en offrant au public une expérience de <b>consommation locale, variée et authentique</b>.</>),
  },
  en: {
    sub: (<><b>The collaborative concept store</b> of Startup Village Charguia</>),
    p1: (<><b>Market &amp; Co</b> is a <b>multi-brand concept store</b> set at the heart of <b>Startup Village Charguia</b>. Designed as a <b>shared boutique</b>, it brings together in one place a diversity of products: <b>crafts, design, art, food, natural cosmetics, accessories</b> and much more.</>),
    p2: (<>The goal is to <b>make access to physical retail easier</b> for <b>entrepreneurs, artisans, producers and creators</b>, while offering the public a <b>local, varied and authentic</b> shopping experience.</>),
  },
  ar: {
    sub: (<><b>المتجر التشاركي للمفاهيم</b> في ستارتب فيليج الشرقية</>),
    p1: (<><b>Market &amp; Co</b> هو <b>متجر مفاهيم متعدّد العلامات</b> يقع بقلب <b>ستارتب فيليج الشرقية</b>. صُمِّم كـ<b>متجر مشترك</b>، يجمع في مكان واحد تنوّعًا من المنتجات: <b>الحرف اليدوية والتصميم والفنّ والغذاء ومستحضرات التجميل الطبيعية والإكسسوارات</b> وغير ذلك الكثير.</>),
    p2: (<>الهدف هو <b>تيسير الوصول إلى البيع المباشر</b> لـ<b>روّاد الأعمال والحرفيين والمنتجين والمبدعين</b>، مع تقديم تجربة <b>استهلاك محلّي متنوّع وأصيل</b> للجمهور.</>),
  },
};

export default function CharguiaContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const m = MARKET[lang];
  const contact = withLang("/contact", lang);

  return (
    <div className="charguia-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <style>{CHARGUIA_STYLES}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__overlay"></div>
        <div className="hero__inner">
          <h1>Startup Village Charguia</h1>
          <p>{t.heroSub}</p>
          <a href={contact} className="btn btn--blue">{t.heroBtn}</a>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section" id="concept">
        <div className="container intro-split">
          <div className="intro-split__media">
            <img src={`${IMG}2-sv-charguia.png`} alt={t.introTitle} loading="lazy" />
          </div>
          <div className="intro-split__text">
            <h2>{t.introTitle}</h2>
            <p className="intro-split__subtitle">{t.introTitleSub}</p>
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
            <p>
              {t.introP3a}
              <br />
              {t.introP3b}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--pt-tight" id="espace-vie">
        <div className="container">
          <div className="head-center">
            <h2>
              {t.statsTitle[0]}
              <br />
              {t.statsTitle[1]}
            </h2>
            <p>{t.statsP}</p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19v2M18 19v2M7 14h10a2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2ZM9 14V8a3 3 0 0 1 6 0v6M9 8H7a2 2 0 0 0-2 2v2" /></svg></div>
              <h3>{t.stats[0].h}</h3>
              <span>{t.stats[0].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg></div>
              <h3>{t.stats[1].h}</h3>
              <span>{t.stats[1].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg></div>
              <h3>{t.stats[2].h}</h3>
              <span>{t.stats[2].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg></div>
              <h3>{t.stats[3].h}</h3>
              <span>{t.stats[3].s}</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="container">
        <div className="gallery-band">
          <h2>{t.galleryBand}</h2>
        </div>
      </div>
      <section className="section section--tight" id="startups">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((file, i) => (
              <figure key={file}>
                <img src={`${IMG}${file}`} alt={`${t.spaceAlt} ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CO-STORAGE */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media"></div>
            <div className="split__body">
              <h2>{t.coStorageTitle}</h2>
              <span className="sub">{t.coStorageSub}</span>
              {t.coStorageP.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <a href={withLang("/contact?type=stock", lang)} className="btn btn--yellow">{t.coStorageBtn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <div className="container">
        <div className="strip">
          <div className="s-blue">{t.strip[0]}</div>
          <div className="s-yellow">{t.strip[1]}</div>
          <div className="s-pink">{t.strip[2]}</div>
          <div className="s-green">{t.strip[3]}</div>
        </div>
      </div>

      {/* MARKET & CO */}
      <section className="section">
        <div className="container">
          <div className="market">
            <div className="market__card">
              <h2>Market &amp; Co</h2>
              <span className="sub">{m.sub}</span>
              <p>{m.p1}</p>
              <p>{m.p2}</p>
              <a href={withLang("/contact?type=market", lang)} className="btn btn--yellow">{t.marketBtn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="section section--tight logos-wrap logos-white">
        <div className="container logos">
          <div className="logos__title">
            <h2>{t.logosTitle}</h2>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {LOGOS.map((logo) => (
                <img key={logo.file} src={`${IMG}${logo.file}`} alt={logo.name} loading="lazy" />
              ))}
              {LOGOS.map((logo) => (
                <img key={`${logo.file}-dup`} src={`${IMG}${logo.file}`} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VILLAGEOIS */}
      <section className="section villageois" id="contact">
        <div className="container">
          <h2>{t.villageoisTitle}</h2>
          <p className="lead">{t.villageoisLead}</p>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7.5v9l-9 5-9-5v-9l9-5 9 5Z" /><path d="M3 7.5l9 5 9-5" /><path d="M12 12.5V22" /></svg></div>
              <h3>{t.benefits[0]}</h3>
            </div>
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <h3>{t.benefits[1]}</h3>
            </div>
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg></div>
              <h3>{t.benefits[2]}</h3>
            </div>
          </div>
          <a href={contact} className="btn btn--blue">{t.villageoisBtn}</a>
        </div>
      </section>

      {/* MAP */}
      <section className="map section--tight">
        <div className="container">
          <iframe
            title="Startup Village Charguia"
            src="https://www.google.com/maps?q=Startup+Village+Charguia,+28+Rue+8612,+Tunis&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
