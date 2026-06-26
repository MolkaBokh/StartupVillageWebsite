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
      { h: "Innovation & Co-création", p: "Encourager les échanges d'idées, les collaborations transversales et les méthodes agiles." },
      { h: "Qualité de Vie & Bien-être", p: "Offrir un cadre accueillant et propice à la concentration, à la détente et à l'épanouissement." },
      { h: "Ouverture & Inclusion", p: "Accueillir la diversité des profils, des secteurs et des talents pour enrichir la communauté." },
    ],
    villageoisKicker: "Un cadre de vie et de travail",
    villageoisTitle: "Être Villageois, c'est :",
    communauteTitle: "UNE COMMUNAUTÉ SANS FRONTIÈRES",
    engagementKicker: "Notre engagement",
    engagementTitle: "Un Lieu Humain et Responsable",
    ctaTitle: "Je rejoins l'aventure Startup Village",
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
      { h: "Innovation & Co-creation", p: "Encouraging the exchange of ideas, cross-disciplinary collaboration and agile methods." },
      { h: "Quality of Life & Well-being", p: "Offering a welcoming setting that fosters focus, relaxation and personal growth." },
      { h: "Openness & Inclusion", p: "Welcoming a diversity of profiles, sectors and talents to enrich the community." },
    ],
    villageoisKicker: "A place to live and to work",
    villageoisTitle: "Being a Villager means :",
    communauteTitle: "A COMMUNITY WITHOUT BORDERS",
    engagementKicker: "Our commitment",
    engagementTitle: "A Human and Responsible Place",
    ctaTitle: "I'm joining the Startup Village adventure",
    ctaBtn: "I'm joining the Startup Village adventure",
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
    intro: (
      <>
        <b>Startup Village</b> est un <b>espace de travail collaboratif</b> conçu pour stimuler
        l&apos;<b>innovation</b>, la <b>créativité</b> et le <b>bien-être au travail</b>. Dans une
        <b> ambiance conviviale et humaine</b>, il réunit une <b>communauté</b> diversifiée
        d&apos;<b>entrepreneurs, investisseurs, médias, artistes, freelances</b> et <b>équipes hybrides</b>
        en quête de <b>sens</b>, de <b>connexion</b> et de <b>collaboration</b>.
      </>
    ),
    missionP1: (
      <>
        Un lieu où l&apos;on peut <b>innover, co-créer et grandir ensemble</b> dans un cadre qui valorise
        autant <b>la qualité de vie</b> que <b>la réussite collective</b>. Ici, <b>l&apos;expérimentation
        est une force</b>, et <b>l&apos;échec</b>, une étape précieuse vers la réussite. Chaque idée testée,
        chaque tentative est célébrée comme une preuve de <b>courage</b>, d&apos;<b>apprentissage</b> et de
        <b> dépassement de soi</b>.
      </>
    ),
    missionP2: (
      <>
        Nos <b>espaces de coworking, bureaux privés, salles de réunion, studios créatifs, zones de
        détente</b> et notre <b>warehouse modulable</b> sont conçus pour <b>stimuler la créativité</b>,
        favoriser la collaboration et accompagner chaque projet vers son plein potentiel.
      </>
    ),
    visionP1: (
      <>
        Chez <b>Startup Village</b>, nous encourageons une <b>culture du travail flexible et humain</b>,
        fondée sur la <b>collaboration</b>, le <b>bien-être au travail</b>, la <b>recherche de sens</b>,
        et l&apos;<b>impact positif</b>.
      </>
    ),
    visionP2: (
      <>
        Notre vision est portée par l&apos;idée qu&apos;un <b>environnement de travail inspirant et bienveillant</b>
        peut favoriser à la fois la <b>performance durable</b>, l&apos;<b>épanouissement personnel</b> et la
        <b> création de valeur collective</b>.
      </>
    ),
    villageois: [
      <>Se connecter à une <b>communauté bienveillante et diverse</b></>,
      <>Accéder à une <b>offre complète</b>&nbsp;: bureaux, coworking, studios, salles de réunion, espaces événementiels et warehouse</>,
      <>Participer à une <b>programmation régulière et variée</b>, mêlant <b>talks inspirants</b>, <b>activités de bien-être</b>, <b>ateliers créatifs</b>, et <b>rencontres de networking</b></>,
      <>Bénéficier d&apos;un <b>accès à l&apos;incubation et au financement</b> pour faire grandir son projet</>,
      <>Profiter d&apos;un <b>accès à l&apos;expertise</b> via un réseau de mentors, professionnels et partenaires</>,
      <>Être accompagné dans les <b>procédures de gestion administrative, comptable et financière</b>, avec des services de <b>domiciliation</b> adaptés</>,
      <>Évoluer dans un <b>écosystème connecté à la recherche scientifique</b> pour innover durablement</>,
    ],
    communaute: [
      <>Que vous soyez basé à <b>Tunis, Paris ou Berlin</b>, Startup Village vous ouvre ses portes et vous connecte à une <b>communauté dynamique, inclusive et ouverte sur le monde</b>.</>,
      <>Nous avons le privilège d&apos;<b>accueillir des visiteurs internationaux</b> et de collaborer avec des <b>programmes venus des quatre coins du globe</b>.</>,
      <>Conçus pour répondre aux besoins des <b>travailleurs nomades</b>, des <b>entrepreneurs internationaux</b>, des <b>équipes hybrides</b> et des <b>talents créatifs</b>, nos espaces favorisent la <b>flexibilité</b>, la <b>connexion humaine</b> et la <b>recherche de sens</b>.</>,
    ],
    engagement: [
      <>Au <b>Startup Village</b>, nous cultivons une ambiance <b>chaleureuse et inspirante</b>, où il fait bon <b>travailler, créer et collaborer</b>.</>,
      <>Engagés pour un <b>impact positif</b>, nous intégrons le <b>design durable</b>, le <b>respect de l&apos;environnement</b> et le <b>bien-être au travail</b> dans chacun de nos espaces.</>,
      <>Parce que la <b>performance naît de l&apos;équilibre</b>.</>,
    ],
  },
  en: {
    intro: (
      <>
        <b>Startup Village</b> is a <b>collaborative workspace</b> designed to fuel
        <b> innovation</b>, <b>creativity</b> and <b>well-being at work</b>. In a
        <b> warm and human atmosphere</b>, it brings together a diverse <b>community</b> of
        <b> entrepreneurs, investors, media, artists, freelancers</b> and <b>hybrid teams</b>
        in search of <b>meaning</b>, <b>connection</b> and <b>collaboration</b>.
      </>
    ),
    missionP1: (
      <>
        A place where you can <b>innovate, co-create and grow together</b> in a setting that values
        <b> quality of life</b> as much as <b>collective success</b>. Here, <b>experimentation
        is a strength</b>, and <b>failure</b> a valuable step toward success. Every idea tested,
        every attempt is celebrated as proof of <b>courage</b>, <b>learning</b> and
        <b> self-improvement</b>.
      </>
    ),
    missionP2: (
      <>
        Our <b>coworking spaces, private offices, meeting rooms, creative studios, lounge
        areas</b> and our <b>modular warehouse</b> are designed to <b>spark creativity</b>,
        foster collaboration and help every project reach its full potential.
      </>
    ),
    visionP1: (
      <>
        At <b>Startup Village</b>, we nurture a <b>flexible and human work culture</b>,
        built on <b>collaboration</b>, <b>well-being at work</b>, the <b>search for meaning</b>,
        and <b>positive impact</b>.
      </>
    ),
    visionP2: (
      <>
        Our vision is driven by the belief that an <b>inspiring and caring work environment</b>
        can foster <b>sustainable performance</b>, <b>personal fulfilment</b> and the
        <b> creation of collective value</b> all at once.
      </>
    ),
    villageois: [
      <>Connecting to a <b>caring and diverse community</b></>,
      <>Accessing a <b>complete offering</b>&nbsp;: offices, coworking, studios, meeting rooms, event spaces and a warehouse</>,
      <>Taking part in a <b>regular and varied programme</b>, blending <b>inspiring talks</b>, <b>well-being activities</b>, <b>creative workshops</b> and <b>networking encounters</b></>,
      <>Benefiting from <b>access to incubation and funding</b> to grow your project</>,
      <>Enjoying <b>access to expertise</b> through a network of mentors, professionals and partners</>,
      <>Being supported with <b>administrative, accounting and financial management procedures</b>, including tailored <b>business domiciliation</b> services</>,
      <>Evolving within an <b>ecosystem connected to scientific research</b> to innovate sustainably</>,
    ],
    communaute: [
      <>Whether you&apos;re based in <b>Tunis, Paris or Berlin</b>, Startup Village opens its doors and connects you to a <b>dynamic, inclusive and globally open community</b>.</>,
      <>We have the privilege of <b>welcoming international visitors</b> and collaborating with <b>programmes from around the world</b>.</>,
      <>Designed to meet the needs of <b>digital nomads</b>, <b>international entrepreneurs</b>, <b>hybrid teams</b> and <b>creative talents</b>, our spaces foster <b>flexibility</b>, <b>human connection</b> and the <b>search for meaning</b>.</>,
    ],
    engagement: [
      <>At <b>Startup Village</b>, we cultivate a <b>warm and inspiring atmosphere</b>, a great place to <b>work, create and collaborate</b>.</>,
      <>Committed to <b>positive impact</b>, we build <b>sustainable design</b>, <b>respect for the environment</b> and <b>well-being at work</b> into every one of our spaces.</>,
      <>Because <b>performance is born from balance</b>.</>,
    ],
  },
};

export default function PresentationContent({ lang = "fr" }: { lang?: Lang }) {
  const slides = CAROUSEL_IMAGES.length;
  const [index, setIndex] = useState(0);
  const t = T[lang];
  const prose = PROSE[lang];
  const contactHref = withLang("/contact", lang);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides), 5000);
    return () => clearInterval(timer);
  }, [index, slides]);

  const go = (i: number) => setIndex(((i % slides) + slides) % slides);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  return (
    <div className="presentation-page">
      {/* 1. HERO */}
      <section className="hero">
        <img src="/assets/images/concept-hero.jpg" alt="Startup Village" />
        <div className="hero-caption">
          <div className="container">
            <span className="hero-eyebrow">{t.heroEyebrow}</span>
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

      {/* 3. NOTRE MISSION */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/notre-mission.png" alt={t.missionTitle} />
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

      {/* 4. NOTRE VISION */}
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
            <img src="/assets/images/notre-vision.png" alt={t.visionTitle} />
          </div>
        </div>
      </section>

      {/* 5. NOS PILIERS FONDATEURS */}
      <section className="piliers">
        <img className="bg" src="/assets/images/nos-piliers.jpg" alt="" aria-hidden="true" />
        <div className="container">
          <h2>{t.pillarsTitle}</h2>
          <div className="accent-bar"></div>
          <div className="cards">
            {t.pillars.map((c, i) => (
              <div className="card" key={i}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UN CADRE DE VIE ET DE TRAVAIL */}
      <section className="split">
        <div className="container">
          <div className="media-col">
            <img src="/assets/images/etre-villageois.jpg" alt={t.villageoisKicker} />
          </div>
          <div className="text-col">
            <span className="kicker">{t.villageoisKicker}</span>
            <h2>{t.villageoisTitle}</h2>
            <ul className="villageois-list">
              {prose.villageois.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
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
          </div>
        </div>
      </section>

      {/* 8. UN LIEU HUMAIN ET RESPONSABLE (carousel) */}
      <section className="split carousel-row alt">
        <div className="container">
          <div className="carousel" id="carousel">
            <div className="carousel-track" id="carouselTrack" style={{ transform: `translateX(-${index * 100}%)` }}>
              {CAROUSEL_IMAGES.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
            <button className="carousel-btn prev" aria-label="Prev" onClick={prev}>‹</button>
            <button className="carousel-btn next" aria-label="Next" onClick={next}>›</button>
            <div className="carousel-dots" id="carDots">
              {CAROUSEL_IMAGES.map((img, i) => (
                <button key={img.src} className={i === index ? "active" : undefined} aria-label={`${i + 1}`} onClick={() => go(i)} />
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
