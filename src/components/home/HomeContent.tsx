/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import "@/styles/home.css";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Home page body — integrated from the `Home-page-SV` repository. Bilingual:
 * markup, classes, images and the stat count-up animation are identical for
 * both languages; only the text (from the dictionary below) and CTA hrefs
 * differ. Styling lives in src/styles/home.css (scoped under `.home-page`).
 */

const T = {
  fr: {
    heroTitle: "L'un des plus grands espaces de coworking en Afrique !",
    heroSubtitle: "Le village des créatifs responsables !",
    ctaVisit: "Réserver une visite",
    ctaDiscover: "Découvrir nos espaces",
    statsEyebrow: "Chiffres clés",
    statsTitle: "Un écosystème qui a de l'impact",
    statLabels: ["Villageois", "Bureaux privés", "Événements mensuels", "d'espaces", "Studio d'enregistrement", "Sites : Menzah & Charguia"],
    universEyebrow: "Nos univers",
    universTitle: "Nos espaces & services",
    univers: [
      { h: "Coworking & bureaux privés", p: "Postes flexibles, bureaux privés et espaces de coworking pensés pour les startups et entreprises qui veulent évoluer au cœur d'un écosystème actif à Menzah comme à Charguia." },
      { h: "Événements & networking", p: "Conférences, meetups et soirées networking qui rythment la vie du village toute l'année, en salle comme en terrasse, pour multiplier les rencontres entre entrepreneurs." },
      { h: "Studio & création de contenu", p: "Un studio podcast et vidéo équipé pour produire des contenus professionnels : interviews, formations en ligne et capsules de marque, sans quitter le village." },
      { h: "Réunions & formations", p: "Des salles lumineuses et modulables pour réunions d'équipe, ateliers et formations, du brainstorming intime au séminaire complet." },
    ],
    universCta: "Explorer tous nos espaces",
    lifeEyebrow: "La vie au village",
    lifeTitle: "Un quotidien qui se vit, pas seulement un lieu de travail",
    stories: [
      { h: "Un environnement qui donne envie de créer", p: "Couleurs, sculptures et recoins inattendus : dès l'entrée, le village installe un cadre de travail différent, pensé pour stimuler la créativité au quotidien des villageois." },
      { h: "Des espaces qui rassemblent la communauté", p: "Expositions, œuvres et lieux de passage deviennent des points de rencontre entre villageois — l'occasion d'échanger, de collaborer et de tisser des liens au-delà du travail." },
      { h: "Conçu pour la rencontre et la collaboration", p: "Postes partagés, coins informels et espaces ouverts favorisent les échanges spontanés entre entrepreneurs, startups et créateurs qui composent le quotidien du village." },
    ],
    lifeCta: "Réserver une visite",
    partnersEyebrow: "Ils nous font confiance",
    partnersTitle: "Des partenaires qui font grandir l'écosystème",
    partnersLead: "Des partenaires, médias, entreprises et acteurs de l'écosystème accompagnent Startup Village dans son développement.",
    eventsEyebrow: "Événements & actualités",
    eventsTitle: "La vie du village en mouvement",
    events: [
      { tag: "Conférence", h: "Conférence annuelle Startup Village", p: "L'écosystème tunisien réuni pour une journée de keynotes, de rencontres et de partage entre startups et investisseurs." },
      { tag: "Networking", h: "Soirée networking entrepreneurs", p: "Un rendez-vous régulier pour connecter villageois, partenaires et porteurs de projets autour d'un moment convivial." },
      { tag: "Presse", h: "Startup Village dans les médias", p: "Retrouvez les interviews et reportages qui racontent l'évolution de l'écosystème entrepreneurial tunisien." },
    ],
    eventsCta: "Découvrir tous les événements",
    finalTitle: "Prêt à rejoindre l'écosystème Startup Village ?",
    finalText: "Réservez une visite et découvrez nos espaces, nos événements et notre communauté.",
    finalCta: "Réserver une visite",
  },
  en: {
    heroTitle: "One of the largest coworking spaces in Africa!",
    heroSubtitle: "The village of responsible creators.",
    ctaVisit: "Book a visit",
    ctaDiscover: "Explore our spaces",
    statsEyebrow: "Key figures",
    statsTitle: "An ecosystem that makes an impact",
    statLabels: ["Villagers", "Private offices", "Monthly events", "of space", "Recording studio", "Sites: Menzah & Charguia"],
    universEyebrow: "Our worlds",
    universTitle: "Our spaces & services",
    univers: [
      { h: "Coworking & private offices", p: "Flexible desks, private offices and coworking spaces designed for startups and companies that want to grow at the heart of an active ecosystem, in Menzah and Charguia alike." },
      { h: "Events & networking", p: "Conferences, meetups and networking evenings that pace village life all year long, indoors and on the terrace, multiplying connections between entrepreneurs." },
      { h: "Studio & content creation", p: "A fully equipped podcast and video studio to produce professional content: interviews, online courses and brand stories, without leaving the village." },
      { h: "Meetings & training", p: "Bright, modular rooms for team meetings, workshops and training — from intimate brainstorms to full-scale seminars." },
    ],
    universCta: "Explore all our spaces",
    lifeEyebrow: "Life at the village",
    lifeTitle: "A daily experience to live, not just a place to work",
    stories: [
      { h: "An environment that makes you want to create", p: "Colors, sculptures and unexpected corners: from the entrance, the village sets a different kind of workspace, designed to spark the villagers' everyday creativity." },
      { h: "Spaces that bring the community together", p: "Exhibitions, artworks and shared passageways become meeting points between villagers — a chance to exchange, collaborate and build bonds beyond work." },
      { h: "Designed for connection and collaboration", p: "Shared desks, informal corners and open spaces encourage spontaneous exchanges between the entrepreneurs, startups and creators who make up daily village life." },
    ],
    lifeCta: "Book a visit",
    partnersEyebrow: "They trust us",
    partnersTitle: "Partners who help the ecosystem grow",
    partnersLead: "Partners, media, companies and ecosystem players support Startup Village in its development.",
    eventsEyebrow: "Events & news",
    eventsTitle: "Village life in motion",
    events: [
      { tag: "Conference", h: "Startup Village annual conference", p: "The Tunisian ecosystem gathered for a day of keynotes, encounters and exchange between startups and investors." },
      { tag: "Networking", h: "Entrepreneurs networking evening", p: "A regular get-together connecting villagers, partners and project owners around a friendly moment." },
      { tag: "Press", h: "Startup Village in the media", p: "Discover the interviews and reports telling the story of Tunisia's growing entrepreneurial ecosystem." },
    ],
    eventsCta: "Discover all events",
    finalTitle: "Ready to join the Startup Village ecosystem?",
    finalText: "Book a visit and discover our spaces, our events and our community.",
    finalCta: "Book a visit",
  },
} as const;

export default function HomeContent({ lang = "fr" }: { lang?: Lang }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const t = T[lang];
  const href = (p: string) => withLang(p, lang);

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
    { count: "500", suffix: "+" },
    { count: "30", suffix: "+" },
    { count: "15", suffix: "+" },
    { count: "1000", suffix: " m²" },
    { count: "1", suffix: "" },
    { count: "2", suffix: "" },
  ];
  const STAT_ICONS = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 20v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h6" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 8V3h-5M3 16v5h5M21 3l-7 7M3 21l7-7" /></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" /></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  ];
  const UNIVERS_IMG = [
    { src: "/assets/images/02-coworking-cothinking-space.jpg", accent: "accent-blue" },
    { src: "/assets/images/03-events-terrace-conference.png", accent: "accent-yellow" },
    { src: "/assets/images/04-studio-podcast-content-creation.png", accent: "accent-pink" },
    { src: "/assets/images/05-training-meeting-room.png", accent: "accent-green" },
  ];
  const STORY_IMG = [
    "/assets/images/06-village-figurines-hallway.png",
    "/assets/images/07-village-art-gallery.png",
    "/assets/images/08-village-creative-workspace.jpg",
  ];
  const EVENT_IMG = [
    "/assets/images/10-events-main-conference.png",
    "/assets/images/11-events-networking-reception.png",
    "/assets/images/12-events-media-interview.png",
  ];

  return (
    <div className="home-page" ref={rootRef}>
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-media">
          <img src="/assets/images/01-hero-reception.png" alt="Startup Village" loading="eager" />
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

      {/* 3. NOS UNIVERS */}
      <section className="section section-white" id="nos-univers">
        <div className="container">
          <p className="eyebrow center">{t.universEyebrow}</p>
          <h2 className="section-title center">{t.universTitle}</h2>
          <div className="univers-grid">
            {t.univers.map((c, i) => (
              <article className={`univers-card ${UNIVERS_IMG[i].accent}`} key={i}>
                <div className="univers-media">
                  <img src={UNIVERS_IMG[i].src} alt={c.h} loading="lazy" />
                </div>
                <div className="univers-body">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
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
          <div className="partners-wall">
            <img src="/assets/images/09-partners-logo-wall.png" alt="Startup Village partners" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 6. ÉVÉNEMENTS & ACTUALITÉS */}
      <section className="section section-cream" id="startups">
        <div className="container">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">{t.eventsEyebrow}</p>
              <h2 className="section-title">{t.eventsTitle}</h2>
            </div>
          </div>
          <div className="events-grid">
            {t.events.map((e, i) => (
              <article className="event-card" key={i}>
                <div className="event-media">
                  <img src={EVENT_IMG[i]} alt={e.h} loading="lazy" />
                  <span className="event-tag">{e.tag}</span>
                </div>
                <div className="event-body">
                  <h3>{e.h}</h3>
                  <p>{e.p}</p>
                </div>
              </article>
            ))}
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
