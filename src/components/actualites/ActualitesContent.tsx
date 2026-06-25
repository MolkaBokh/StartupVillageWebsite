/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import "@/styles/actualites.css";

const IMG = "/assets/images/actualites/";

const CAT_COLORS: Record<string, string> = {
  "IA & Tech": "#25afe0",
  Entrepreneuriat: "#e21c57",
  Événements: "#f5b339",
  Espaces: "#77b457",
  "Art & Design": "#0b2545",
};

type Article = { date: string; title: string; cat: string; img: string; link: string };

// Data (most recent → oldest), ported verbatim; image paths localized and the
// Maher Lahmer card pointed at its integrated detail route.
const ARTICLES: Article[] = [
  { date: "12 Jun 2026", title: "Startup Village donne vie à ses statues sur Pinterest", cat: "Art & Design", img: `${IMG}statues-pinterest.jpg`, link: "#" },
  { date: "Mai 2026", title: "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble", cat: "Entrepreneuriat", img: `${IMG}innovation-talks.png`, link: "#" },
  { date: "05 May 2026", title: "Quels sont les services pour les entrepreneurs en Tunisie ?", cat: "Entrepreneuriat", img: `${IMG}services-entrepreneurs.webp`, link: "#" },
  { date: "20 Apr 2026", title: "Quels sont les meilleurs espaces de travail collaboratif ?", cat: "Espaces", img: `${IMG}meilleurs-espaces.jpg`, link: "#" },
  { date: "16 Apr 2026", title: "Maher Lahmer à Startup Village : IA, LLM et stratégie startup en Tunisie", cat: "IA & Tech", img: `${IMG}maher-lahmer.png`, link: "/actualites/maher-lahmer" },
  { date: "13 Apr 2026", title: "Nabil Ben Saidane à Startup Village : l'Agentic AI en pratique", cat: "IA & Tech", img: `${IMG}nabil-ben-saidane.png`, link: "#" },
  { date: "17 Jun 2025", title: "Startup Village s'agrandit : Charguia, nouveau hub de l'entrepreneuriat", cat: "Entrepreneuriat", img: `${IMG}charguia-hub.png`, link: "#" },
  { date: "02 May 2025", title: "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens", cat: "IA & Tech", img: `${IMG}imed-zitouni.png`, link: "#" },
  { date: "11 Apr 2025", title: "Le Saut Décisif : Karim Beguir, l'IA africaine à l'échelle mondiale", cat: "IA & Tech", img: `${IMG}karim-beguir.png`, link: "#" },
  { date: "2024", title: "Lancement de la Deuxième Édition d'Upcycl'Art", cat: "Art & Design", img: `${IMG}upcyclart.jpg`, link: "#" },
  { date: "24 May 2023", title: "Startup Village en collaboration avec l'ATD lance un appel à candidature pour une exposition Upcycling", cat: "Art & Design", img: `${IMG}atd-upcycling.jpg`, link: "#" },
  { date: "12 Jul 2022", title: "Startup Village : Une histoire qui commence", cat: "Événements", img: `${IMG}histoire-qui-commence.jpg`, link: "#" },
  { date: "28 Jun 2022", title: "Kids Day : Les coulisses du Marketing Digital", cat: "Événements", img: `${IMG}kids-day.png`, link: "#" },
  { date: "28 Jun 2022", title: "Une journée aux couleurs du Design Thinking", cat: "Événements", img: `${IMG}design-thinking.png`, link: "#" },
];

const FILTERS = ["Tous", "IA & Tech", "Entrepreneuriat", "Événements", "Espaces", "Art & Design"];

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ActualitesContent() {
  const [activeTab, setActiveTab] = useState<"articles" | "events">("articles");
  const [activeFilter, setActiveFilter] = useState("Tous");

  const list = useMemo(
    () => ARTICLES.filter((a) => activeFilter === "Tous" || a.cat === activeFilter),
    [activeFilter]
  );

  const switchTab = (tab: "articles" | "events") => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="actualites-page">
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container">
          <span className="label">ACTUALITÉS</span>
          <h1>Actualités &amp; événements du Village</h1>
          <p>Retrouvez les temps forts, articles, rencontres et événements qui rythment la vie de Startup Village.</p>
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <div className="tabs-wrap">
        <div className="container">
          <div className="tabs" role="tablist">
            <button
              className={`tab${activeTab === "articles" ? " active" : ""}`}
              role="tab"
              onClick={() => switchTab("articles")}
            >
              Articles<span className="count">{ARTICLES.length}</span>
            </button>
            <button
              className={`tab${activeTab === "events" ? " active" : ""}`}
              role="tab"
              onClick={() => switchTab("events")}
            >
              Upcoming Events<span className="count">1</span>
            </button>
          </div>
        </div>
      </div>

      <main className="container">
        {/* ===== Articles panel ===== */}
        <section className={`panel${activeTab === "articles" ? " active" : ""}`}>
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`chip${f === activeFilter ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid">
            {list.map((a) => (
              <article className="card" key={a.title}>
                <a className="thumb" href={a.link}>
                  <span className="cat-badge" style={{ background: CAT_COLORS[a.cat] }}>
                    {a.cat}
                  </span>
                  <img src={a.img} alt={a.title} loading="lazy" />
                </a>
                <div className="body">
                  <div className="date">{a.date}</div>
                  <h3>{a.title}</h3>
                  <a className="more" href={a.link}>
                    Lire la suite <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 && <div className="empty">Aucun article dans cette catégorie.</div>}
        </section>

        {/* ===== Events panel ===== */}
        <section className={`panel${activeTab === "events" ? " active" : ""}`}>
          <div className="events-grid">
            <article className="event-card">
              <div className="event-cover">
                <img src={`${IMG}beyond-ai.png`} alt="Beyond AI: Technologies & Trends Shaping the Future of Entrepreneurship" loading="lazy" />
                <span className="avail">Places disponibles</span>
              </div>
              <div className="event-body">
                <div className="day">24 June 2026</div>
                <h3>Beyond AI: Technologies &amp; Trends Shaping the Future of Entrepreneurship</h3>
                <p className="speaker">Avec Nathaniel Wilson, Foreign Service Officer, U.S. Department of State</p>
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
                    Startup Village Menzah
                  </span>
                </div>
                <a className="btn-register" href="https://luma.com/5kycidm1" target="_blank" rel="noopener">
                  S&apos;inscrire
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
