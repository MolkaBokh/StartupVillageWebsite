/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useRef } from "react";
import "@/styles/home.css";
import "@/styles/actualites.css";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Home page body — integrated from the `Home-page-SV` repository. Bilingual:
 * markup, classes, images and the stat count-up animation are identical for
 * both languages; only the text (from the dictionary below) and CTA hrefs
 * differ. Styling lives in src/styles/home.css (scoped under `.home-page`).
 */

/* ---- Article data (mirrors ActualitesContent, latest 4 shown on home) ---- */
type CatKey = "tech" | "entr" | "events" | "spaces" | "art";
const IMG_ACT = "/assets/images/actualites/";

const CATEGORIES: Record<CatKey, { color: string; fr: string; en: string; ar: string }> = {
  tech:   { color: "#25afe0", fr: "IA & Tech",       en: "AI & Tech",        ar: "الذكاء الاصطناعي والتقنية" },
  entr:   { color: "#e21c57", fr: "Entrepreneuriat", en: "Entrepreneurship",  ar: "ريادة الأعمال" },
  events: { color: "#f5b339", fr: "Événements",      en: "Events",           ar: "فعاليات" },
  spaces: { color: "#77b457", fr: "Espaces",         en: "Spaces",           ar: "الفضاءات" },
  art:    { color: "#0b2545", fr: "Art & Design",    en: "Art & Design",     ar: "الفنّ والتصميم" },
};


type Loc = { fr: string; en: string; ar: string };
type Article = { date: Loc; title: Loc; cat: CatKey; img: string; link: string };

const ARTICLES: Article[] = [
  { date: { fr: "12 Jun 2026", en: "12 Jun 2026", ar: "12 يونيو 2026" }, title: { fr: "Startup Village donne vie à ses statues sur Pinterest", en: "Startup Village brings its statues to life on Pinterest", ar: "ستارتب فيليج يبعث الحياة في منحوتاته على Pinterest" }, cat: "art",    img: `${IMG_ACT}statues-pinterest.jpg`,          link: "#" },
  { date: { fr: "Mai 2026",    en: "May 2026",    ar: "مايو 2026"       }, title: { fr: "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble", en: "Innovation Talks: Italy–Tunisia, building innovation together", ar: "Innovation Talks: إيطاليا–تونس، نبني الابتكار معًا" }, cat: "entr",   img: `${IMG_ACT}innovation-talks.png`,            link: "/actualites/innovation-talks-italie-tunisie" },
  { date: { fr: "05 May 2026", en: "05 May 2026", ar: "05 مايو 2026"    }, title: { fr: "Quels sont les services pour les entrepreneurs en Tunisie ?", en: "What services are available for entrepreneurs in Tunisia?", ar: "ما هي الخدمات المتاحة لروّاد الأعمال في تونس؟" }, cat: "entr",   img: `${IMG_ACT}services-entrepreneurs.webp`,     link: "#" },
  { date: { fr: "20 Apr 2026", en: "20 Apr 2026", ar: "20 أبريل 2026"  }, title: { fr: "Quels sont les meilleurs espaces de travail collaboratif ?", en: "What are the best collaborative workspaces?", ar: "ما هي أفضل فضاءات العمل المشترك؟" }, cat: "spaces", img: `${IMG_ACT}meilleurs-espaces.jpg`,           link: "#" },
  { date: { fr: "16 Apr 2026", en: "16 Apr 2026", ar: "16 أبريل 2026"  }, title: { fr: "Maher Lahmer à Startup Village : IA, LLM et stratégie startup en Tunisie", en: "Maher Lahmer at Startup Village: AI, LLMs and startup strategy in Tunisia", ar: "ماهر لحمر في ستارتب فيليج: الذكاء الاصطناعي ونماذج اللغة الكبيرة واستراتيجية الشركات الناشئة في تونس" }, cat: "tech",   img: `${IMG_ACT}maher-lahmer.png`,                link: "/actualites/maher-lahmer" },
  { date: { fr: "13 Apr 2026", en: "13 Apr 2026", ar: "13 أبريل 2026"  }, title: { fr: "Nabil Ben Saidane à Startup Village : l'Agentic AI en pratique", en: "Nabil Ben Saidane at Startup Village: Agentic AI in practice", ar: "نبيل بن سعيدان في ستارتب فيليج: الذكاء الاصطناعي الوكيل عمليًا" }, cat: "tech",   img: `${IMG_ACT}nabil-ben-saidane.png`,           link: "#" },
  { date: { fr: "17 Jun 2025", en: "17 Jun 2025", ar: "17 يونيو 2025"  }, title: { fr: "Startup Village s'agrandit : Charguia, nouveau hub de l'entrepreneuriat", en: "Startup Village expands: Charguia, a new entrepreneurship hub", ar: "ستارتب فيليج يتوسّع: الشرقية، قطب جديد لريادة الأعمال" }, cat: "entr",   img: `${IMG_ACT}charguia-hub.png`,                link: "#" },
  { date: { fr: "02 May 2025", en: "02 May 2025", ar: "02 مايو 2025"   }, title: { fr: "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens", en: "Imed Zitouni, Google: Artificial intelligence, innovation and Tunisian talent", ar: "عماد زيتوني من Google: الذكاء الاصطناعي والابتكار والمواهب التونسية" }, cat: "tech",   img: `${IMG_ACT}imed-zitouni.png`,                link: "/actualites/imed-zitouni" },
  { date: { fr: "11 Apr 2025", en: "11 Apr 2025", ar: "11 أبريل 2025"  }, title: { fr: "Le Saut Décisif : Karim Beguir, l'IA africaine à l'échelle mondiale", en: "The Decisive Leap: Karim Beguir, African AI on the global stage", ar: "القفزة الحاسمة: كريم بقير، الذكاء الاصطناعي الإفريقي على الساحة العالمية" }, cat: "tech",   img: `${IMG_ACT}karim-beguir.png`,                link: "#" },
  { date: { fr: "2024",        en: "2024",        ar: "2024"             }, title: { fr: "Lancement de la Deuxième Édition d'Upcycl'Art", en: "Launch of the second edition of Upcycl'Art", ar: "إطلاق النسخة الثانية من Upcycl'Art" }, cat: "art",    img: `${IMG_ACT}upcyclart.jpg`,                   link: "#" },
  { date: { fr: "24 May 2023", en: "24 May 2023", ar: "24 مايو 2023"   }, title: { fr: "Startup Village en collaboration avec l'ATD lance un appel à candidature pour une exposition Upcycling", en: "Startup Village, in partnership with ATD, launches a call for applications for an Upcycling exhibition", ar: "ستارتب فيليج بالتعاون مع ATD يطلق دعوة للترشّح لمعرض إعادة التدوير" }, cat: "art",    img: `${IMG_ACT}atd-upcycling.jpg`,               link: "#" },
  { date: { fr: "12 Jul 2022", en: "12 Jul 2022", ar: "12 يوليو 2022"  }, title: { fr: "Startup Village : Une histoire qui commence", en: "Startup Village: A story that begins", ar: "ستارتب فيليج: حكاية تبدأ" }, cat: "events", img: `${IMG_ACT}histoire-qui-commence.jpg`,     link: "#" },
  { date: { fr: "28 Jun 2022", en: "28 Jun 2022", ar: "28 يونيو 2022"  }, title: { fr: "Kids Day : Les coulisses du Marketing Digital", en: "Kids Day: Behind the scenes of Digital Marketing", ar: "Kids Day: كواليس التسويق الرقمي" }, cat: "events", img: `${IMG_ACT}kids-day.png`,                   link: "#" },
  { date: { fr: "28 Jun 2022", en: "28 Jun 2022", ar: "28 يونيو 2022"  }, title: { fr: "Une journée aux couleurs du Design Thinking", en: "A day in the colors of Design Thinking", ar: "يوم بألوان التفكير التصميمي" }, cat: "events", img: `${IMG_ACT}design-thinking.png`,            link: "#" },
];

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const T = {
  fr: {
    heroTitle: "L'un des plus grands espaces dédiés à l'entrepreneuriat en Afrique !",
    heroSubtitle: "Des espaces de coworking, des bureaux privés et des services pensés pour faire grandir les projets.",
    ctaVisit: "Rejoindre la communauté",
    ctaDiscover: "Découvrir nos espaces",
    statsEyebrow: "Chiffres clés",
    statsTitle: "Un écosystème qui a de l'impact",
    statLabels: ["Villageois", "Bureaux privés", "Événements annuels", "d'espaces", "Studios audio & podcast", "Sites", "Espaces de réunion, de formation et de coworking"],
    universEyebrow: "Nos univers",
    universTitle: "Nos espaces & services",
    univers: [
      { h: "Coworking & Bureaux Privés",              p: "Postes flexibles, bureaux privés et espaces de coworking pensés pour les startups et entreprises qui veulent évoluer au cœur d'un écosystème actif à Menzah comme à Charguia." },
      { h: "Événements & programmation",              p: "Conférences, meetups et soirées networking qui rythment la vie du village toute l'année, en salle comme en terrasse, pour multiplier les rencontres entre entrepreneurs." },
      { h: "Studio & Création de contenu",            p: "Un studio podcast et vidéo équipé pour produire des contenus professionnels : interviews, formations en ligne et capsules de marque, sans quitter le village." },
      { h: "Incubateur Culinaire & Catering Cochef",  p: "Cochef est l'incubateur culinaire du village : cuisine professionnelle, traiteur on-demand et espace de création pour les entrepreneurs du food." },
      { h: "Market & Co",                             p: "Un espace de vente et d'exposition dédié aux créateurs, artisans et marques locales qui souhaitent rencontrer leur public au cœur du village." },
      { h: "CoStorage",                               p: "Des solutions de stockage flexibles et sécurisées pour les entrepreneurs, startups et e-commerçants qui ont besoin d'un espace logistique au village." },
      { h: "Réunions, Formations & Team Building",    p: "Des salles lumineuses et modulables pour réunions d'équipe, ateliers et formations, du brainstorming intime au séminaire complet." },
      { h: "Incubation",                              p: "Un programme d'incubation pour accompagner les startups de l'idée au lancement, avec mentoring, accès aux réseaux et ressources du village." },
    ],
    universCta: "Explorer tous nos espaces",
    lifeEyebrow: "La vie au village",
    lifeTitle: "Un espace, plusieurs vies",
    stories: [
      { h: "Un environnement qui donne envie de créer", p: "Couleurs, sculptures et recoins inattendus : dès l'entrée, le village installe un cadre de travail différent, pensé pour stimuler la créativité au quotidien des villageois." },
      { h: "Des espaces qui rassemblent la communauté", p: "Expositions, œuvres et lieux de passage deviennent des points de rencontre entre villageois — l'occasion d'échanger, de collaborer et de tisser des liens au-delà du travail." },
      { h: "Conçu pour la rencontre et la collaboration", p: "Postes partagés, coins informels et espaces ouverts favorisent les échanges spontanés entre entrepreneurs, startups et créateurs qui composent le quotidien du village." },
    ],
    lifeCta: "Rejoindre la communauté",
    partnersEyebrow: "Ils nous font confiance",
    partnersTitle: "Des partenaires qui font grandir l'écosystème",
    partnersLead: "Des partenaires, médias, entreprises et acteurs de l'écosystème accompagnent Startup Village dans son développement.",
    eventsEyebrow: "Événements & actualités",
    eventsTitle: "La vie du village en mouvement",
    eventsAll: "Tous",
    eventsReadMore: "Lire la suite",
    eventsCta: "Plus d'actualités",
    finalTitle: "Prêt à rejoindre l'écosystème Startup Village ?",
    finalText: "Rejoignez notre communauté et découvrez nos espaces, nos événements et nos services.",
    finalCta: "Rejoindre la communauté",
  },
  en: {
    heroTitle: "One of the largest spaces dedicated to entrepreneurship in Africa!",
    heroSubtitle: "Coworking spaces, private offices and services designed to help projects grow.",
    ctaVisit: "Join the community",
    ctaDiscover: "Explore our spaces",
    statsEyebrow: "Key figures",
    statsTitle: "An ecosystem that makes an impact",
    statLabels: ["Villagers", "Private offices", "Annual events", "of space", "Audio & podcast studios", "Sites", "Meeting, training & coworking spaces"],
    universEyebrow: "Our worlds",
    universTitle: "Our spaces & services",
    univers: [
      { h: "Coworking & Private Offices",              p: "Flexible desks, private offices and coworking spaces designed for startups and companies that want to grow at the heart of an active ecosystem, in Menzah and Charguia alike." },
      { h: "Events & Programming",                     p: "Conferences, meetups and networking evenings that pace village life all year long, indoors and on the terrace, multiplying connections between entrepreneurs." },
      { h: "Studio & Content Creation",                p: "A fully equipped podcast and video studio to produce professional content: interviews, online courses and brand stories, without leaving the village." },
      { h: "Culinary Incubator & Catering Cochef",     p: "Cochef is the village's culinary incubator: professional kitchen, on-demand catering and a creative space for food entrepreneurs." },
      { h: "Market & Co",                              p: "A dedicated sales and exhibition space for creators, artisans and local brands who want to meet their audience at the heart of the village." },
      { h: "CoStorage",                                p: "Flexible and secure storage solutions for entrepreneurs, startups and e-commerce businesses that need logistics space at the village." },
      { h: "Meetings, Training & Team Building",       p: "Bright, modular rooms for team meetings, workshops and training — from intimate brainstorms to full-scale seminars." },
      { h: "Incubation",                               p: "An incubation programme to support startups from idea to launch, with mentoring, access to networks and village resources." },
    ],
    universCta: "Explore all our spaces",
    lifeEyebrow: "Life at the village",
    lifeTitle: "One space, many lives",
    stories: [
      { h: "An environment that makes you want to create", p: "Colors, sculptures and unexpected corners: from the entrance, the village sets a different kind of workspace, designed to spark the villagers' everyday creativity." },
      { h: "Spaces that bring the community together", p: "Exhibitions, artworks and shared passageways become meeting points between villagers — a chance to exchange, collaborate and build bonds beyond work." },
      { h: "Designed for connection and collaboration", p: "Shared desks, informal corners and open spaces encourage spontaneous exchanges between the entrepreneurs, startups and creators who make up daily village life." },
    ],
    lifeCta: "Join the community",
    partnersEyebrow: "They trust us",
    partnersTitle: "Partners who help the ecosystem grow",
    partnersLead: "Partners, media, companies and ecosystem players support Startup Village in its development.",
    eventsEyebrow: "Events & news",
    eventsTitle: "Village life in motion",
    eventsAll: "All",
    eventsReadMore: "Read more",
    eventsCta: "More news",
    finalTitle: "Ready to join the Startup Village ecosystem?",
    finalText: "Join our community and discover our spaces, events and services.",
    finalCta: "Join the community",
  },
  ar: {
    heroTitle: "أحد أكبر الفضاءات المخصّصة لريادة الأعمال في إفريقيا!",
    heroSubtitle: "فضاءات عمل مشترك ومكاتب خاصة وخدمات مصمَّمة لمساعدة المشاريع على النمو.",
    ctaVisit: "انضم إلى المجتمع",
    ctaDiscover: "اكتشف فضاءاتنا",
    statsEyebrow: "أرقام رئيسية",
    statsTitle: "منظومة ذات أثر حقيقي",
    statLabels: ["سكان القرية", "مكاتب خاصة", "فعاليات سنوية", "من المساحات", "استوديوهات صوت وبودكاست", "مواقع", "فضاءات اجتماعات وتكوين وعمل مشترك"],
    universEyebrow: "عوالمنا",
    universTitle: "فضاءاتنا وخدماتنا",
    univers: [
      { h: "عمل مشترك ومكاتب خاصة",           p: "مكاتب مرنة ومكاتب خاصة وفضاءات عمل مشترك مصمَّمة للشركات الناشئة والمؤسسات الراغبة في النمو داخل منظومة نشطة، في المنزه والشرقية على حد سواء." },
      { h: "فعاليات وبرمجة",                   p: "مؤتمرات ولقاءات وأمسيات تواصل تنبض بها القرية على مدار السنة، داخل القاعات وعلى الشرفات، لمضاعفة فرص اللقاء بين روّاد الأعمال." },
      { h: "استوديو وصناعة المحتوى",            p: "استوديو مجهّز للبودكاست والفيديو لإنتاج محتوى احترافي: مقابلات ودورات عبر الإنترنت ومحتوى للعلامات التجارية، دون مغادرة القرية." },
      { h: "حاضنة الطهي والتموين كوشيف",       p: "كوشيف هي حاضنة الطهي في القرية: مطبخ احترافي وخدمات تموين عند الطلب وفضاء إبداعي لروّاد أعمال قطاع الغذاء." },
      { h: "ماركت & كو",                        p: "فضاء مخصّص للبيع والعرض للمبدعين والحرفيين والعلامات التجارية المحلية الراغبين في لقاء جمهورهم في قلب القرية." },
      { h: "كوستوريج",                          p: "حلول تخزين مرنة وآمنة للمقاولين والشركات الناشئة وتجّار الإنترنت الذين يحتاجون إلى فضاء لوجستي في القرية." },
      { h: "اجتماعات وتكوين وبناء الفريق",     p: "قاعات مضيئة وقابلة للتعديل لاجتماعات الفرق وورش العمل والتكوين، من العصف الذهني المصغّر إلى الندوات الكاملة." },
      { h: "حضانة الشركات الناشئة",             p: "برنامج احتضان لمرافقة الشركات الناشئة من الفكرة حتى الإطلاق، مع التوجيه والوصول إلى شبكات وموارد القرية." },
    ],
    universCta: "اكتشف جميع فضاءاتنا",
    lifeEyebrow: "الحياة في القرية",
    lifeTitle: "فضاء واحد، حيوات متعددة",
    stories: [
      { h: "بيئة تُلهم الإبداع", p: "ألوان ومنحوتات وزوايا غير متوقعة: منذ المدخل، تهيّئ القرية إطار عمل مختلفًا، مصمَّمًا لتحفيز إبداع سكان القرية يوميًا." },
      { h: "فضاءات تجمع المجتمع", p: "تتحوّل المعارض والأعمال الفنية وممرّات المرور إلى نقاط لقاء بين سكان القرية — فرصة للتبادل والتعاون ونسج العلاقات إلى ما هو أبعد من العمل." },
      { h: "مصمَّمة للقاء والتعاون", p: "مكاتب مشتركة وزوايا غير رسمية وفضاءات مفتوحة تشجّع على التبادل العفوي بين روّاد الأعمال والشركات الناشئة والمبدعين الذين يصنعون الحياة اليومية للقرية." },
    ],
    lifeCta: "انضم إلى المجتمع",
    partnersEyebrow: "هم يثقون بنا",
    partnersTitle: "شركاء يساهمون في نمو المنظومة",
    partnersLead: "شركاء ووسائل إعلام وشركات وفاعلون في المنظومة يرافقون ستارتب فيليج في مسيرة تطوّرها.",
    eventsEyebrow: "فعاليات وأخبار",
    eventsTitle: "حياة القرية في حركة دائمة",
    eventsAll: "الكل",
    eventsReadMore: "اقرأ المزيد",
    eventsCta: "المزيد من الأخبار",
    finalTitle: "هل أنت مستعدّ للانضمام إلى منظومة ستارتب فيليج؟",
    finalText: "انضم إلى مجتمعنا واكتشف فضاءاتنا وفعالياتنا وخدماتنا.",
    finalCta: "انضم إلى المجتمع",
  },
} as const;

export default function HomeContent({ lang = "fr" }: { lang?: Lang }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const t = T[lang];
  const href = (p: string) => withLang(p, lang);

  const HOME_ARTICLE_TITLES = [
    "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble",
    "Le Saut Décisif : Karim Beguir, l'IA africaine à l'échelle mondiale",
    "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens",
  ];
  const visibleArticles = useMemo(
    () => ARTICLES.filter((a) => HOME_ARTICLE_TITLES.includes(a.title.fr)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Stat count-up on scroll into view (ported from js/main.js)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const statNumbers = root.querySelectorAll<HTMLElement>(".stat-number");

    const animateCount = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || "0", 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      statNumbers.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      statNumbers.forEach((el) => {
        el.textContent = (el.dataset.count || "") + (el.dataset.suffix || "");
      });
    }
  }, []);

  const STAT_META = [
    { count: "1000", suffix: "+" },
    { count: "100", suffix: "+" },
    { count: "200", suffix: "+" },
    { count: "5000", suffix: " m²" },
    { count: "5", suffix: "+" },
    { count: "2", suffix: "" },
    { count: "100", suffix: "+" },
  ];
  const STAT_ICONS = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 20v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h6" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 8V3h-5M3 16v5h5M21 3l-7 7M3 21l7-7" /></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" /></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
    <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></svg>,
  ];

  const UNIVERS_IMG: { src: string; accent: string; hoverSrc?: string }[] = [
    { src: "/assets/images/02-coworking-cothinking-space.jpg", accent: "accent-blue",   hoverSrc: "/assets/images/bureaux-privés-hover.png" },
    { src: "/assets/images/03-events-terrace-conference.png",   accent: "accent-yellow", hoverSrc: "/assets/images/event-hover.jpg" },
    { src: "/assets/images/04-studio-podcast-content-creation.png", accent: "accent-pink" },
    { src: "/assets/images/cochef-homepage.png",                accent: "accent-green"  },
    { src: "/assets/images/market-co-homepage.png",             accent: "accent-blue"   },
    { src: "/assets/images/costorage-homepage.png",             accent: "accent-yellow" },
    { src: "/assets/images/05-training-meeting-room.png",       accent: "accent-pink"   },
    { src: "/assets/images/incubation-homepage.png",            accent: "accent-green"  },
  ];

  const STORY_IMG = [
    "/assets/images/06-village-figurines-hallway.png",
    "/assets/images/07-village-art-gallery.png",
    "/assets/images/08-village-creative-workspace.jpg",
  ];

  return (
    <div className="home-page" ref={rootRef} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-media">
          <img src="/assets/images/01-hero-reception.png" alt="" role="presentation" loading="eager" />
          <div className="hero-scrim"></div>
        </div>
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="cta-group">
            <a href={href("/contact")} className="btn btn-primary">{t.ctaVisit}</a>
            <a href={href("/espace-de-vie")} className="btn btn-ghost">{t.ctaDiscover}</a>
          </div>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS */}
      <section className="section section-light stats-section">
        <div className="container">
          <p className="eyebrow center">{t.statsEyebrow}</p>
          <h2 className="section-title center">{t.statsTitle}</h2>
          <div className="stats-grid">
            {STAT_META.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-icon" aria-hidden="true">{STAT_ICONS[i]}</span>
                <span className="stat-number" data-count={s.count} data-suffix={s.suffix}>0</span>
                <span className="stat-label">{t.statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOS UNIVERS — 8 cards (2 rows × 4 col) */}
      <section className="section section-white" id="nos-univers">
        <div className="container">
          <p className="eyebrow center">{t.universEyebrow}</p>
          <h2 className="section-title center">{t.universTitle}</h2>
          <div className="univers-grid">
            {t.univers.map((c, i) => {
              const hoverSrc = UNIVERS_IMG[i].hoverSrc;
              return (
                <article className={`univers-card ${UNIVERS_IMG[i].accent}${hoverSrc ? " univers-card--swap" : ""}`} key={i}>
                  <div className={`univers-media${hoverSrc ? " has-hover" : ""}`}>
                    <img src={UNIVERS_IMG[i].src} alt={c.h} loading="lazy" className={hoverSrc ? "img-default" : undefined} />
                    {hoverSrc && <img src={hoverSrc} alt="" aria-hidden="true" loading="lazy" className="img-hover" />}
                  </div>
                  <div className="univers-body">
                    <h3>{c.h}</h3>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="section-cta center">
            <a href={href("/espace-de-vie")} className="btn btn-primary">{t.universCta}</a>
          </div>
        </div>
      </section>

      {/* 4. LA VIE AU VILLAGE */}
      <section className="section section-cream" id="espace-de-vie">
        <div className="container">
          <p className="eyebrow center">{t.lifeEyebrow}</p>
          <h2 className="section-title center">{t.lifeTitle}</h2>

          {t.stories.map((s, i) => (
            <div className={`story-block${i === 1 ? " reverse" : ""}`} key={i}>
              <div className="story-media">
                <img src={STORY_IMG[i]} alt={s.h} loading="lazy" />
              </div>
              <div className="story-text">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}

          <div className="section-cta center">
            <a href={href("/contact")} className="btn btn-primary">{t.lifeCta}</a>
          </div>
        </div>
      </section>

      {/* 5. ILS NOUS FONT CONFIANCE */}
      <section className="section section-white">
        <div className="container">
          <p className="eyebrow center">{t.partnersEyebrow}</p>
          <h2 className="section-title center">{t.partnersTitle}</h2>
          <p className="section-lead center">{t.partnersLead}</p>
          <div className="partners-logo-wrap">
            <img src="/assets/images/partenaires-new.jpeg" alt={t.partnersEyebrow} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 6. ACTUALITÉS — article cards with category filters */}
      <section className="section section-cream" id="actualites">
        <div className="container">
          <p className="eyebrow">{t.eventsEyebrow}</p>
          <h2 className="section-title">{t.eventsTitle}</h2>

          <div className="actualites-page home-actualites-panel">
            {/* Article cards grid */}
            <div className="grid">
              {visibleArticles.map((a) => (
                <article className="card" key={a.title.en}>
                  <a className="thumb" href={a.link === "#" ? "#" : withLang(a.link, lang)}>
                    <span className="cat-badge" style={{ background: CATEGORIES[a.cat].color }}>
                      {CATEGORIES[a.cat][lang]}
                    </span>
                    <img src={a.img} alt={a.title[lang]} loading="lazy" />
                  </a>
                  <div className="body">
                    <div className="date">{a.date[lang]}</div>
                    <h3>{a.title[lang]}</h3>
                    <a className="more" href={a.link === "#" ? "#" : withLang(a.link, lang)}>
                      {t.eventsReadMore} <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="section-cta center">
            <a href={href("/actualites")} className="btn btn-primary">{t.eventsCta}</a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / CTA */}
      <section className="cta-final" id="contact">
        <div className="container cta-final-content">
          <h2>{t.finalTitle}</h2>
          <p>{t.finalText}</p>
          <a href={href("/contact")} className="btn btn-primary">{t.finalCta}</a>
        </div>
      </section>
    </div>
  );
}
