/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import "@/styles/presentation.css";

/**
 * Présentation (« Le Concept ») page body — integrated verbatim from the
 * `presentation` repository (index.html). Markup, classes, copy, images and
 * the carousel interaction are reproduced exactly; only the source <header>
 * and <footer> are omitted because those are provided by the shared
 * components. Styling lives in src/styles/presentation.css (scoped under
 * `.presentation-page`).
 */

const CAROUSEL_IMAGES = [
  { src: "/assets/images/carousel-1.png", alt: "Startup Village — espace 1" },
  { src: "/assets/images/carousel-2.png", alt: "Startup Village — espace 2" },
  { src: "/assets/images/carousel-3.jpg", alt: "Startup Village — espace 3" },
  { src: "/assets/images/carousel-4.png", alt: "Startup Village — espace 4" },
];

export default function PresentationContent() {
  const slides = CAROUSEL_IMAGES.length;
  const [index, setIndex] = useState(0);

  // Autoplay every 5s; resets whenever `index` changes (matches source restart()).
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, slides]);

  const go = (i: number) => setIndex(((i % slides) + slides) % slides);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  return (
    <div className="presentation-page">
      {/* 1. HERO */}
      <section className="hero">
        <img src="/assets/images/concept-hero.jpg" alt="Espace de coworking Startup Village" />
        <div className="hero-caption">
          <div className="container">
            <span className="hero-eyebrow">Le Concept</span>
            <h1>L&apos;espace qui vous ressemble et vous rassemble</h1>
          </div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="intro" id="concept">
        <div className="container">
          <span className="kicker">Le Concept</span>
          <h2>LE CONCEPT</h2>
          <p className="subtitle">L&apos;espace qui vous ressemble et vous rassemble</p>
          <div className="accent-bar"></div>
          <p>
            <b>Startup Village</b> est un <b>espace de travail collaboratif</b> conçu pour stimuler
            l&apos;<b>innovation</b>, la <b>créativité</b> et le <b>bien-être au travail</b>. Dans une
            <b> ambiance conviviale et humaine</b>, il réunit une <b>communauté</b> diversifiée
            d&apos;<b>entrepreneurs, investisseurs, médias, artistes, freelances</b> et <b>équipes hybrides</b>
            en quête de <b>sens</b>, de <b>connexion</b> et de <b>collaboration</b>.
          </p>
        </div>
      </section>

      {/* 3. NOTRE MISSION */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/notre-mission.png" alt="Notre mission — Cothinking Space" />
          </div>
          <div className="text-col">
            <span className="kicker">Notre mission</span>
            <h2>NOTRE MISSION</h2>
            <h3>Créer un environnement de travail collaboratif et inspirant</h3>
            <p>
              Un lieu où l&apos;on peut <b>innover, co-créer et grandir ensemble</b> dans un cadre qui valorise
              autant <b>la qualité de vie</b> que <b>la réussite collective</b>. Ici, <b>l&apos;expérimentation
              est une force</b>, et <b>l&apos;échec</b>, une étape précieuse vers la réussite. Chaque idée testée,
              chaque tentative est célébrée comme une preuve de <b>courage</b>, d&apos;<b>apprentissage</b> et de
              <b> dépassement de soi</b>.
            </p>
            <p>
              Nos <b>espaces de coworking, bureaux privés, salles de réunion, studios créatifs, zones de
              détente</b> et notre <b>warehouse modulable</b> sont conçus pour <b>stimuler la créativité</b>,
              favoriser la collaboration et accompagner chaque projet vers son plein potentiel.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NOTRE VISION */}
      <section className="split alt">
        <div className="container">
          <div className="text-col">
            <span className="kicker">Notre vision</span>
            <h2>NOTRE VISION</h2>
            <h3>Bâtir un futur de travail humain, plus durable et plus connecté</h3>
            <p>
              Chez <b>Startup Village</b>, nous encourageons une <b>culture du travail flexible et humain</b>,
              fondée sur la <b>collaboration</b>, le <b>bien-être au travail</b>, la <b>recherche de sens</b>,
              et l&apos;<b>impact positif</b>.
            </p>
            <p>
              Notre vision est portée par l&apos;idée qu&apos;un <b>environnement de travail inspirant et bienveillant</b>
              peut favoriser à la fois la <b>performance durable</b>, l&apos;<b>épanouissement personnel</b> et la
              <b> création de valeur collective</b>.
            </p>
          </div>
          <div className="media-col">
            <img src="/assets/images/notre-vision.png" alt="Notre vision — échanges et rencontres" />
          </div>
        </div>
      </section>

      {/* 5. NOS PILIERS FONDATEURS */}
      <section className="piliers">
        <img className="bg" src="/assets/images/nos-piliers.jpg" alt="" aria-hidden="true" />
        <div className="container">
          <h2>NOS PILIERS FONDATEURS</h2>
          <div className="accent-bar"></div>
          <div className="cards">
            <div className="card">
              <h3>Innovation &amp; Co-création</h3>
              <p>Encourager les échanges d&apos;idées, les collaborations transversales et les méthodes agiles.</p>
            </div>
            <div className="card">
              <h3>Qualité de Vie &amp; Bien-être</h3>
              <p>Offrir un cadre accueillant et propice à la concentration, à la détente et à l&apos;épanouissement.</p>
            </div>
            <div className="card">
              <h3>Ouverture &amp; Inclusion</h3>
              <p>Accueillir la diversité des profils, des secteurs et des talents pour enrichir la communauté.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UN CADRE DE VIE ET DE TRAVAIL */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/etre-villageois.jpg" alt="Un cadre de vie et de travail — Startup Village" />
          </div>
          <div className="text-col">
            <span className="kicker">Un cadre de vie et de travail</span>
            <h2>Être Villageois, c&apos;est&nbsp;:</h2>
            <ul className="villageois-list">
              <li>Se connecter à une <b>communauté bienveillante et diverse</b></li>
              <li>Accéder à une <b>offre complète</b>&nbsp;: bureaux, coworking, studios, salles de réunion, espaces événementiels et warehouse</li>
              <li>Participer à une <b>programmation régulière et variée</b>, mêlant <b>talks inspirants</b>, <b>activités de bien-être</b>, <b>ateliers créatifs</b>, et <b>rencontres de networking</b></li>
              <li>Bénéficier d&apos;un <b>accès à l&apos;incubation et au financement</b> pour faire grandir son projet</li>
              <li>Profiter d&apos;un <b>accès à l&apos;expertise</b> via un réseau de mentors, professionnels et partenaires</li>
              <li>Être accompagné dans les <b>procédures de gestion administrative, comptable et financière</b>, avec des services de <b>domiciliation</b> adaptés</li>
              <li>Évoluer dans un <b>écosystème connecté à la recherche scientifique</b> pour innover durablement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. UNE COMMUNAUTÉ SANS FRONTIÈRES */}
      <section className="communaute">
        <div className="container">
          <div className="inner">
            <h2>UNE COMMUNAUTÉ SANS FRONTIÈRES</h2>
            <div className="accent-bar"></div>
            <p>
              Que vous soyez basé à <b>Tunis, Paris ou Berlin</b>, Startup Village vous ouvre ses portes et
              vous connecte à une <b>communauté dynamique, inclusive et ouverte sur le monde</b>.
            </p>
            <p>
              Nous avons le privilège d&apos;<b>accueillir des visiteurs internationaux</b> et de collaborer avec
              des <b>programmes venus des quatre coins du globe</b>.
            </p>
            <p>
              Conçus pour répondre aux besoins des <b>travailleurs nomades</b>, des <b>entrepreneurs
              internationaux</b>, des <b>équipes hybrides</b> et des <b>talents créatifs</b>, nos espaces
              favorisent la <b>flexibilité</b>, la <b>connexion humaine</b> et la <b>recherche de sens</b>.
            </p>
          </div>
        </div>
      </section>

      {/* 8. UN LIEU HUMAIN ET RESPONSABLE (carousel) */}
      <section className="split carousel-row alt">
        <div className="container">
          <div className="carousel" id="carousel">
            <div
              className="carousel-track"
              id="carouselTrack"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
            <button className="carousel-btn prev" aria-label="Précédent" onClick={prev}>‹</button>
            <button className="carousel-btn next" aria-label="Suivant" onClick={next}>›</button>
            <div className="carousel-dots" id="carDots">
              {CAROUSEL_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  className={i === index ? "active" : undefined}
                  aria-label={`Aller à la diapositive ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>
          <div className="text-col">
            <span className="kicker">Notre engagement</span>
            <h2>Un Lieu Humain et Responsable</h2>
            <p>
              Au <b>Startup Village</b>, nous cultivons une ambiance <b>chaleureuse et inspirante</b>, où il
              fait bon <b>travailler, créer et collaborer</b>.
            </p>
            <p>
              Engagés pour un <b>impact positif</b>, nous intégrons le <b>design durable</b>, le <b>respect de
              l&apos;environnement</b> et le <b>bien-être au travail</b> dans chacun de nos espaces.
            </p>
            <p>Parce que la <b>performance naît de l&apos;équilibre</b>.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Je rejoins l&apos;aventure Startup Village</h2>
        <a href="#" className="btn">Je rejoins l&apos;aventure Startup Village</a>
      </section>
    </div>
  );
}
