/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import "@/styles/actualites.css";
import { withLang, type Lang } from "@/config/navigation";

const IMG = "/assets/images/actualites/";

type CatKey = "tech" | "entr" | "events" | "spaces" | "art";

const CATEGORIES: Record<CatKey, { color: string; fr: string; en: string; ar: string }> = {
  tech: { color: "#25afe0", fr: "IA & Tech", en: "AI & Tech", ar: "الذكاء الاصطناعي والتقنية" },
  entr: { color: "#e21c57", fr: "Entrepreneuriat", en: "Entrepreneurship", ar: "ريادة الأعمال" },
  events: { color: "#f5b339", fr: "Événements", en: "Events", ar: "فعاليات" },
  spaces: { color: "#77b457", fr: "Espaces", en: "Spaces", ar: "الفضاءات" },
  art: { color: "#0b2545", fr: "Art & Design", en: "Art & Design", ar: "الفنّ والتصميم" },
};

const FILTER_KEYS: ("all" | CatKey)[] = ["all", "tech", "entr", "events", "spaces", "art"];

type Loc = { fr: string; en: string; ar: string };
type Article = {
  date: Loc;
  title: Loc;
  cat: CatKey;
  img: string;
  link: string;
};

const ARTICLES: Article[] = [
  { date: { fr: "12 Jun 2026", en: "12 Jun 2026", ar: "12 يونيو 2026" }, title: { fr: "Startup Village donne vie à ses statues sur Pinterest", en: "Startup Village brings its statues to life on Pinterest", ar: "ستارتب فيليج يبعث الحياة في منحوتاته على Pinterest" }, cat: "art", img: `${IMG}statues-pinterest.jpg`, link: "#" },
  { date: { fr: "Mai 2026", en: "May 2026", ar: "مايو 2026" }, title: { fr: "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble", en: "Innovation Talks: Italy–Tunisia, building innovation together", ar: "Innovation Talks: إيطاليا–تونس، نبني الابتكار معًا" }, cat: "entr", img: `${IMG}innovation-talks.png`, link: "/actualites/innovation-talks-italie-tunisie" },
  { date: { fr: "05 May 2026", en: "05 May 2026", ar: "05 مايو 2026" }, title: { fr: "Quels sont les services pour les entrepreneurs en Tunisie ?", en: "What services are available for entrepreneurs in Tunisia?", ar: "ما هي الخدمات المتاحة لروّاد الأعمال في تونس؟" }, cat: "entr", img: `${IMG}services-entrepreneurs.webp`, link: "#" },
  { date: { fr: "20 Apr 2026", en: "20 Apr 2026", ar: "20 أبريل 2026" }, title: { fr: "Quels sont les meilleurs espaces de travail collaboratif ?", en: "What are the best collaborative workspaces?", ar: "ما هي أفضل فضاءات العمل المشترك؟" }, cat: "spaces", img: `${IMG}meilleurs-espaces.jpg`, link: "#" },
  { date: { fr: "16 Apr 2026", en: "16 Apr 2026", ar: "16 أبريل 2026" }, title: { fr: "Maher Lahmer à Startup Village : IA, LLM et stratégie startup en Tunisie", en: "Maher Lahmer at Startup Village: AI, LLMs and startup strategy in Tunisia", ar: "ماهر لحمر في ستارتب فيليج: الذكاء الاصطناعي ونماذج اللغة الكبيرة واستراتيجية الشركات الناشئة في تونس" }, cat: "tech", img: `${IMG}maher-lahmer.png`, link: "/actualites/maher-lahmer" },
  { date: { fr: "13 Apr 2026", en: "13 Apr 2026", ar: "13 أبريل 2026" }, title: { fr: "Nabil Ben Saidane à Startup Village : l'Agentic AI en pratique", en: "Nabil Ben Saidane at Startup Village: Agentic AI in practice", ar: "نبيل بن سعيدان في ستارتب فيليج: الذكاء الاصطناعي الوكيل عمليًا" }, cat: "tech", img: `${IMG}nabil-ben-saidane.png`, link: "#" },
  { date: { fr: "17 Jun 2025", en: "17 Jun 2025", ar: "17 يونيو 2025" }, title: { fr: "Startup Village s'agrandit : Charguia, nouveau hub de l'entrepreneuriat", en: "Startup Village expands: Charguia, a new entrepreneurship hub", ar: "ستارتب فيليج يتوسّع: الشرقية، قطب جديد لريادة الأعمال" }, cat: "entr", img: `${IMG}charguia-hub.png`, link: "#" },
  { date: { fr: "02 May 2025", en: "02 May 2025", ar: "02 مايو 2025" }, title: { fr: "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens", en: "Imed Zitouni, Google: Artificial intelligence, innovation and Tunisian talent", ar: "عماد زيتوني من Google: الذكاء الاصطناعي والابتكار والمواهب التونسية" }, cat: "tech", img: `${IMG}imed-zitouni.png`, link: "#" },
  { date: { fr: "11 Apr 2025", en: "11 Apr 2025", ar: "11 أبريل 2025" }, title: { fr: "Le Saut Décisif : Karim Beguir, l'IA africaine à l'échelle mondiale", en: "The Decisive Leap: Karim Beguir, African AI on the global stage", ar: "القفزة الحاسمة: كريم بقير، الذكاء الاصطناعي الإفريقي على الساحة العالمية" }, cat: "tech", img: `${IMG}karim-beguir.png`, link: "#" },
  { date: { fr: "2024", en: "2024", ar: "2024" }, title: { fr: "Lancement de la Deuxième Édition d'Upcycl'Art", en: "Launch of the second edition of Upcycl'Art", ar: "إطلاق النسخة الثانية من Upcycl'Art" }, cat: "art", img: `${IMG}upcyclart.jpg`, link: "#" },
  { date: { fr: "24 May 2023", en: "24 May 2023", ar: "24 مايو 2023" }, title: { fr: "Startup Village en collaboration avec l'ATD lance un appel à candidature pour une exposition Upcycling", en: "Startup Village, in partnership with ATD, launches a call for applications for an Upcycling exhibition", ar: "ستارتب فيليج بالتعاون مع ATD يطلق دعوة للترشّح لمعرض إعادة التدوير" }, cat: "art", img: `${IMG}atd-upcycling.jpg`, link: "#" },
  { date: { fr: "12 Jul 2022", en: "12 Jul 2022", ar: "12 يوليو 2022" }, title: { fr: "Startup Village : Une histoire qui commence", en: "Startup Village: A story that begins", ar: "ستارتب فيليج: حكاية تبدأ" }, cat: "events", img: `${IMG}histoire-qui-commence.jpg`, link: "#" },
  { date: { fr: "28 Jun 2022", en: "28 Jun 2022", ar: "28 يونيو 2022" }, title: { fr: "Kids Day : Les coulisses du Marketing Digital", en: "Kids Day: Behind the scenes of Digital Marketing", ar: "Kids Day: كواليس التسويق الرقمي" }, cat: "events", img: `${IMG}kids-day.png`, link: "#" },
  { date: { fr: "28 Jun 2022", en: "28 Jun 2022", ar: "28 يونيو 2022" }, title: { fr: "Une journée aux couleurs du Design Thinking", en: "A day in the colors of Design Thinking", ar: "يوم بألوان التفكير التصميمي" }, cat: "events", img: `${IMG}design-thinking.png`, link: "#" },
];

const T = {
  fr: {
    label: "ACTUALITÉS",
    title: "Actualités & événements du Village",
    intro: "Retrouvez les temps forts, articles, rencontres et événements qui rythment la vie de Startup Village.",
    tabArticles: "Articles",
    tabEvents: "Upcoming Events",
    all: "Tous",
    empty: "Aucun article dans cette catégorie.",
    readMore: "Lire la suite",
    eventAvail: "Places disponibles",
    eventSpeaker: "Avec Nathaniel Wilson, Foreign Service Officer, U.S. Department of State",
    eventLoc: "Startup Village Menzah",
    register: "S'inscrire",
  },
  en: {
    label: "NEWS",
    title: "Village news & events",
    intro: "Discover the highlights, articles, encounters and events that shape life at Startup Village.",
    tabArticles: "Articles",
    tabEvents: "Upcoming Events",
    all: "All",
    empty: "No articles in this category.",
    readMore: "Read more",
    eventAvail: "Seats available",
    eventSpeaker: "With Nathaniel Wilson, Foreign Service Officer, U.S. Department of State",
    eventLoc: "Startup Village Menzah",
    register: "Register",
  },
  ar: {
    label: "الأخبار",
    title: "أخبار وفعاليات القرية",
    intro: "اكتشف أبرز اللحظات والمقالات واللقاءات والفعاليات التي تنبض بها حياة ستارتب فيليج.",
    tabArticles: "المقالات",
    tabEvents: "الفعاليات القادمة",
    all: "الكل",
    empty: "لا توجد مقالات في هذه الفئة.",
    readMore: "اقرأ المزيد",
    eventAvail: "أماكن متاحة",
    eventSpeaker: "مع ناثانيال ويلسون، موظف في السلك الدبلوماسي، وزارة الخارجية الأمريكية",
    eventLoc: "ستارتب فيليج المنزه",
    register: "سجّل",
  },
} as const;

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ActualitesContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const [activeTab, setActiveTab] = useState<"articles" | "events">("articles");
  const [activeFilter, setActiveFilter] = useState<"all" | CatKey>("all");

  const list = useMemo(
    () => ARTICLES.filter((a) => activeFilter === "all" || a.cat === activeFilter),
    [activeFilter]
  );

  const switchTab = (tab: "articles" | "events") => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterLabel = (key: "all" | CatKey) => (key === "all" ? t.all : CATEGORIES[key][lang]);

  return (
    <div className="actualites-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container">
          <span className="label">{t.label}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <div className="tabs-wrap">
        <div className="container">
          <div className="tabs" role="tablist">
            <button className={`tab${activeTab === "articles" ? " active" : ""}`} role="tab" onClick={() => switchTab("articles")}>
              {t.tabArticles}<span className="count">{ARTICLES.length}</span>
            </button>
            <button className={`tab${activeTab === "events" ? " active" : ""}`} role="tab" onClick={() => switchTab("events")}>
              {t.tabEvents}<span className="count">1</span>
            </button>
          </div>
        </div>
      </div>

      <main className="container">
        {/* ===== Articles panel ===== */}
        <section className={`panel${activeTab === "articles" ? " active" : ""}`}>
          <div className="filters">
            {FILTER_KEYS.map((key) => (
              <button key={key} className={`chip${key === activeFilter ? " active" : ""}`} onClick={() => setActiveFilter(key)}>
                {filterLabel(key)}
              </button>
            ))}
          </div>
          <div className="grid">
            {list.map((a) => (
              <article className="card" key={a.title.en}>
                <a className="thumb" href={a.link === "#" ? "#" : withLang(a.link, lang)}>
                  <span className="cat-badge" style={{ background: CATEGORIES[a.cat].color }}>
                    {CATEGORIES[a.cat][lang]}
                  </span>
                  <img src={a.img} alt={a.title[lang]} loading="lazy" />
                </a>
                <div className="body">
                  <div className="date">{a.date[lang]}</div>
                  <h2 className="text-base font-bold text-navy-950">{a.title[lang]}</h2>
                  <a className="more" href={a.link === "#" ? "#" : withLang(a.link, lang)}>
                    {t.readMore} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 && <div className="empty">{t.empty}</div>}
        </section>

        {/* ===== Events panel ===== */}
        <section className={`panel${activeTab === "events" ? " active" : ""}`}>
          <div className="events-grid">
            <article className="event-card">
              <a className="event-cover" href="https://luma.com/5kycidm1" target="_blank" rel="noopener" aria-label={t.register}>
                <img src={`${IMG}beyond-ai.png`} alt="Beyond AI: Technologies & Trends Shaping the Future of Entrepreneurship" loading="lazy" />
                <span className="avail">{t.eventAvail}</span>
              </a>
              <div className="event-body">
                <div className="day">24 June 2026</div>
                <h2 className="text-base font-bold text-navy-950">Beyond AI: Technologies &amp; Trends Shaping the Future of Entrepreneurship</h2>
                <p className="speaker">{t.eventSpeaker}</p>
                <div className="event-meta">
                  <span className="m">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                    24 June 2026
                  </span>
                  <span className="m">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    4PM
                  </span>
                  <span className="m">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    {t.eventLoc}
                  </span>
                </div>
                <a className="btn-register" href="https://luma.com/5kycidm1" target="_blank" rel="noopener">
                  {t.register}
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
