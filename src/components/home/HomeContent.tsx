/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import "@/styles/home.css";

/**
 * Home page body — integrated verbatim from the `Home-page-SV` repository
 * (index.html <main>). Markup, classes, copy, images, icons and the stat
 * count-up animation are reproduced exactly; only the source <header> and
 * <footer> are omitted because those are provided by the shared components.
 *
 * Styling lives in src/styles/home.css (scoped under `.home-page`).
 */
export default function HomeContent() {
  const rootRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="home-page" ref={rootRef}>
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-media">
          <img
            src="/assets/images/01-hero-reception.png"
            alt="Accueil et réception de Startup Village, logo Startup Village sur le mur"
            loading="eager"
          />
          <div className="hero-scrim"></div>
        </div>
        <div className="container hero-content">
          <h1>L&apos;un des plus grands espaces de coworking en Afrique !</h1>
          <p className="hero-subtitle">Le village des créatifs responsables !</p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">Réserver une visite</a>
            <a href="#nos-univers" className="btn btn-ghost">Découvrir nos espaces</a>
          </div>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS */}
      <section className="section section-light stats-section">
        <div className="container">
          <p className="eyebrow center">Chiffres clés</p>
          <h2 className="section-title center">Un écosystème qui a de l&apos;impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 20v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </span>
              <span className="stat-number" data-count="500" data-suffix="+">0</span>
              <span className="stat-label">Villageois</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h6" /></svg>
              </span>
              <span className="stat-number" data-count="30" data-suffix="+">0</span>
              <span className="stat-label">Bureaux privés</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              </span>
              <span className="stat-number" data-count="15" data-suffix="+">0</span>
              <span className="stat-label">Événements mensuels</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 8V3h-5M3 16v5h5M21 3l-7 7M3 21l7-7" /></svg>
              </span>
              <span className="stat-number" data-count="1000" data-suffix=" m²">0</span>
              <span className="stat-label">d&apos;espaces</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" /></svg>
              </span>
              <span className="stat-number" data-count="1" data-suffix="">0</span>
              <span className="stat-label">Studio d&apos;enregistrement</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <span className="stat-number" data-count="2" data-suffix="">0</span>
              <span className="stat-label">Sites : Menzah &amp; Charguia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS UNIVERS */}
      <section className="section section-white" id="nos-univers">
        <div className="container">
          <p className="eyebrow center">Nos univers</p>
          <h2 className="section-title center">Nos espaces &amp; services</h2>
          <div className="univers-grid">
            <article className="univers-card accent-blue">
              <div className="univers-media">
                <img src="/assets/images/02-coworking-cothinking-space.jpg" alt="Espace de coworking et bureaux privés Startup Village" loading="lazy" />
              </div>
              <div className="univers-body">
                <h3>Coworking &amp; bureaux privés</h3>
                <p>Postes flexibles, bureaux privés et espaces de coworking pensés pour les startups et entreprises qui veulent évoluer au cœur d&apos;un écosystème actif à Menzah comme à Charguia.</p>
              </div>
            </article>
            <article className="univers-card accent-yellow">
              <div className="univers-media">
                <img src="/assets/images/03-events-terrace-conference.png" alt="Événement networking en terrasse à Startup Village" loading="lazy" />
              </div>
              <div className="univers-body">
                <h3>Événements &amp; networking</h3>
                <p>Conférences, meetups et soirées networking qui rythment la vie du village toute l&apos;année, en salle comme en terrasse, pour multiplier les rencontres entre entrepreneurs.</p>
              </div>
            </article>
            <article className="univers-card accent-pink">
              <div className="univers-media">
                <img src="/assets/images/04-studio-podcast-content-creation.png" alt="Studio podcast et création de contenu Startup Village" loading="lazy" />
              </div>
              <div className="univers-body">
                <h3>Studio &amp; création de contenu</h3>
                <p>Un studio podcast et vidéo équipé pour produire des contenus professionnels : interviews, formations en ligne et capsules de marque, sans quitter le village.</p>
              </div>
            </article>
            <article className="univers-card accent-green">
              <div className="univers-media">
                <img src="/assets/images/05-training-meeting-room.png" alt="Salle de réunion et formation Startup Village" loading="lazy" />
              </div>
              <div className="univers-body">
                <h3>Réunions &amp; formations</h3>
                <p>Des salles lumineuses et modulables pour réunions d&apos;équipe, ateliers et formations, du brainstorming intime au séminaire complet.</p>
              </div>
            </article>
          </div>
          <div className="section-cta center">
            <a href="#contact" className="btn btn-primary">Explorer tous nos espaces</a>
          </div>
        </div>
      </section>

      {/* 4. LA VIE AU VILLAGE */}
      <section className="section section-cream" id="espace-de-vie">
        <div className="container">
          <p className="eyebrow center">La vie au village</p>
          <h2 className="section-title center">Un quotidien qui se vit, pas seulement un lieu de travail</h2>

          <div className="story-block">
            <div className="story-media">
              <img src="/assets/images/06-village-figurines-hallway.png" alt="Couloir décoré et créatif de Startup Village" loading="lazy" />
            </div>
            <div className="story-text">
              <h3>Un environnement qui donne envie de créer</h3>
              <p>Couleurs, sculptures et recoins inattendus : dès l&apos;entrée, le village installe un cadre de travail différent, pensé pour stimuler la créativité au quotidien des villageois.</p>
            </div>
          </div>

          <div className="story-block reverse">
            <div className="story-media">
              <img src="/assets/images/07-village-art-gallery.png" alt="Galerie d'art et espace de vie au sein de Startup Village" loading="lazy" />
            </div>
            <div className="story-text">
              <h3>Des espaces qui rassemblent la communauté</h3>
              <p>Expositions, œuvres et lieux de passage deviennent des points de rencontre entre villageois — l&apos;occasion d&apos;échanger, de collaborer et de tisser des liens au-delà du travail.</p>
            </div>
          </div>

          <div className="story-block">
            <div className="story-media">
              <img src="/assets/images/08-village-creative-workspace.jpg" alt="Espace de travail créatif et collaboratif à Startup Village" loading="lazy" />
            </div>
            <div className="story-text">
              <h3>Conçu pour la rencontre et la collaboration</h3>
              <p>Postes partagés, coins informels et espaces ouverts favorisent les échanges spontanés entre entrepreneurs, startups et créateurs qui composent le quotidien du village.</p>
            </div>
          </div>

          <div className="section-cta center">
            <a href="#contact" className="btn btn-primary">Réserver une visite</a>
          </div>
        </div>
      </section>

      {/* 5. ILS NOUS FONT CONFIANCE */}
      <section className="section section-white">
        <div className="container">
          <p className="eyebrow center">Ils nous font confiance</p>
          <h2 className="section-title center">Des partenaires qui font grandir l&apos;écosystème</h2>
          <p className="section-lead center">Des partenaires, médias, entreprises et acteurs de l&apos;écosystème accompagnent Startup Village dans son développement.</p>
          <div className="partners-wall">
            <img src="/assets/images/09-partners-logo-wall.png" alt="Logos des partenaires de Startup Village" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 6. ÉVÉNEMENTS & ACTUALITÉS */}
      <section className="section section-cream" id="startups">
        <div className="container">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">Événements &amp; actualités</p>
              <h2 className="section-title">La vie du village en mouvement</h2>
            </div>
          </div>
          <div className="events-grid">
            <article className="event-card">
              <div className="event-media">
                <img src="/assets/images/10-events-main-conference.png" alt="Conférence principale organisée à Startup Village" loading="lazy" />
                <span className="event-tag">Conférence</span>
              </div>
              <div className="event-body">
                <h3>Conférence annuelle Startup Village</h3>
                <p>L&apos;écosystème tunisien réuni pour une journée de keynotes, de rencontres et de partage entre startups et investisseurs.</p>
              </div>
            </article>
            <article className="event-card">
              <div className="event-media">
                <img src="/assets/images/11-events-networking-reception.png" alt="Réception networking entre entrepreneurs à Startup Village" loading="lazy" />
                <span className="event-tag">Networking</span>
              </div>
              <div className="event-body">
                <h3>Soirée networking entrepreneurs</h3>
                <p>Un rendez-vous régulier pour connecter villageois, partenaires et porteurs de projets autour d&apos;un moment convivial.</p>
              </div>
            </article>
            <article className="event-card">
              <div className="event-media">
                <img src="/assets/images/12-events-media-interview.png" alt="Interview média de Startup Village" loading="lazy" />
                <span className="event-tag">Presse</span>
              </div>
              <div className="event-body">
                <h3>Startup Village dans les médias</h3>
                <p>Retrouvez les interviews et reportages qui racontent l&apos;évolution de l&apos;écosystème entrepreneurial tunisien.</p>
              </div>
            </article>
          </div>
          <div className="section-cta center">
            <a href="#contact" className="btn btn-primary">Découvrir tous les événements</a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / CTA */}
      <section className="cta-final" id="contact">
        <div className="container cta-final-content">
          <h2>Prêt à rejoindre l&apos;écosystème Startup Village ?</h2>
          <p>Réservez une visite et découvrez nos espaces, nos événements et notre communauté.</p>
          <a href="mailto:contact@startupvillage.tn" className="btn btn-primary">Réserver une visite</a>
        </div>
      </section>
    </div>
  );
}
