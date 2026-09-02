import Link from "next/link";
import { withLang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Salles de réunion & formation" service page — replaces the
 * generic "Bientôt disponible" placeholder for this one offer only.
 * French content is supplied verbatim by the business; do not alter wording.
 */

const BASE = "/assets/images/offres-services";

const STATS = [
  { value: "100", label: "Événements" },
  { value: "1 000", label: "Visiteurs" },
  { value: "50", label: "Délégations internationales" },
  { value: "20", label: "Pays" },
  { value: "500", label: "Villageois" },
];

type Room = {
  name: string;
  subtitle: string;
  capacity: string;
  description: string[];
  equipements?: string[];
  idealPour?: string[];
  img: string;
  imgAlt: string;
  accent: string;
};

const ROOMS: Room[] = [
  {
    name: "Corporate Room",
    subtitle: "Pour vos réunions stratégiques en petit comité",
    capacity: "6 personnes",
    description: [
      "Pensée pour les réunions de direction, les rendez-vous clients, les entretiens ou les séances de travail nécessitant calme et concentration, la Corporate Room bénéficie d'une belle luminosité naturelle et d'une vue dégagée sur l'extérieur.",
    ],
    equipements: ["Écran TV HDMI", "Tableau blanc", "Wi-Fi haut débit", "Climatisation", "Lumière naturelle"],
    idealPour: ["Réunion d'équipe", "Rendez-vous client", "Briefing", "Entretien professionnel", "Session de travail"],
    img: `${BASE}/reunion-2.png`,
    imgAlt: "Corporate Room — salle de réunion lumineuse avec vue extérieure, Startup Village",
    accent: "#25AFE0",
  },
  {
    name: "Salle Confidentielle",
    subtitle: "Un espace conçu pour travailler en toute discrétion",
    capacity: "10 personnes",
    description: [
      "Unique au sein de Startup Village, cette salle garantit une confidentialité totale grâce à son aménagement qui préserve la confidentialité des échanges. Elle est particulièrement adaptée aux réunions sensibles, aux discussions stratégiques ou aux ateliers nécessitant une parfaite discrétion.",
    ],
    equipements: ["TV", "Tableau blanc", "Wi-Fi", "Climatisation"],
    idealPour: ["Comité de direction", "Réunion confidentielle", "Stratégie", "Négociation", "Recrutement"],
    img: `${BASE}/reunion-1.png`,
    imgAlt: "Salle Confidentielle — salle de réunion fermée, Startup Village",
    accent: "#E21C57",
  },
  {
    name: "Salle 23",
    subtitle: "Une salle polyvalente pour vos réunions du quotidien",
    capacity: "10 personnes",
    description: [
      "Fonctionnelle et entièrement équipée, la Salle 23 accueille aussi bien des réunions d'équipe que des formations, ateliers ou rendez-vous professionnels.",
      "Elle constitue une solution idéale pour les entreprises recherchant un espace professionnel flexible au cœur de Startup Village.",
    ],
    img: `${BASE}/reunion-6.png`,
    imgAlt: "Salle 23 — salle de réunion polyvalente, Startup Village",
    accent: "#6FA83C",
  },
];

const EQUIPEMENTS_INCLUS = [
  "Wi-Fi haut débit",
  "Écrans TV",
  "Connexion HDMI",
  "Tableaux blancs",
  "Climatisation",
  "Espaces lumineux",
  "Mobilier professionnel",
  "Accès par ascenseur",
  "Réservation à l'heure, à la demi-journée ou à la journée",
];

const AUDIENCES = [
  "Startups",
  "PME",
  "Grandes entreprises",
  "ONG",
  "Organisations internationales",
  "Ambassades",
  "Universités",
  "Cabinets de conseil",
  "Investisseurs",
  "Formateurs",
  "Freelances",
];

const FAQ = [
  {
    q: "Peut-on réserver une salle sans être membre ?",
    a: "Oui. Nos salles sont accessibles aussi bien aux membres de Startup Village qu'aux entreprises, organisations et particuliers extérieurs.",
  },
  {
    q: "Les salles sont-elles disponibles à l'heure ?",
    a: "Oui. Selon la salle choisie, il est possible de réserver à l'heure, à la demi-journée ou à la journée.",
  },
  {
    q: "Les salles disposent-elles d'un écran ?",
    a: "Toutes nos salles sont équipées d'écrans et d'une connexion Wi-Fi afin de faciliter vos présentations et réunions.",
  },
  {
    q: "Peut-on organiser une formation ?",
    a: "Oui. Nos salles accueillent régulièrement des formations professionnelles, ateliers, workshops et sessions de coaching.",
  },
  {
    q: "Proposez-vous un service de restauration ?",
    a: "Nous pouvons organiser un service de catering sur demande. Nous privilégions les prestations de notre partenaire CoChef, tout en laissant la possibilité de faire appel à un autre prestataire.",
  },
  {
    q: "Où se situe Startup Village ?",
    a: "Startup Village dispose de deux sites à Tunis : El Menzah et Charguia. Les salles présentées sur cette page sont situées à El Menzah.",
  },
];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function RoomCard({ room, reverse }: { room: Room; reverse: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
      <div className={`relative h-[280px] w-full overflow-hidden rounded-xl md:h-[420px] ${reverse ? "md:order-2" : ""}`}>
        <img src={room.img} alt={room.imgAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div>
        <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full" style={{ background: room.accent }} />
        <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{room.name}</h3>
        <p className="mt-2 text-base font-semibold text-sv-navy/80">{room.subtitle}</p>

        <span
          className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold text-white"
          style={{ background: room.accent }}
        >
          Capacité : {room.capacity}
        </span>

        {room.description.map((p) => (
          <p key={p} className="mt-4 text-base leading-relaxed text-sv-navy/70">
            {p}
          </p>
        ))}

        {room.equipements && (
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wide text-sv-navy">Équipements</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {room.equipements.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                  <span className="shrink-0" style={{ color: room.accent }}>
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {room.idealPour && (
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wide text-sv-navy">Idéal pour</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {room.idealPour.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sv-navy/15 bg-sv-navy/[0.03] px-3.5 py-1.5 text-sm font-medium text-sv-navy/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SalleReunionFormationContent() {
  const contact = withLang("/contact", "fr");

  return (
    <div dir="ltr">
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/reunion-4.png`}
          alt="Salle de réunion équipée à Startup Village, Tunis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[52px]">
            Louez une salle de réunion à Tunis adaptée à vos besoins
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Chez Startup Village, chaque réunion est une opportunité de faire avancer un projet, de prendre une
            décision stratégique ou de créer une nouvelle collaboration.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Nos salles de réunion accueillent aussi bien les startups que les PME, grandes entreprises, organisations
            internationales, investisseurs, universités ou associations à la recherche d'un environnement
            professionnel, calme et entièrement équipé.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Situées au cœur de l'écosystème entrepreneurial tunisien, nos salles offrent bien plus qu'un simple
            espace de travail : elles permettent de réunir vos équipes dans un cadre inspirant, moderne et facilement
            accessible.
          </p>
        </div>
      </section>

      {/* 2. POURQUOI CHOISIR STARTUP VILLAGE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">Pourquoi choisir Startup Village ?</h2>
            <p className="mt-4 text-lg font-semibold text-sv-navy/80">Parce qu'un lieu influence la qualité des échanges.</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              En choisissant Startup Village, vous profitez d'un environnement reconnu pour son dynamisme
              entrepreneurial, où se croisent chaque année plus de <strong className="text-sv-navy">100 événements</strong>,{" "}
              <strong className="text-sv-navy">1 000 visiteurs</strong>,{" "}
              <strong className="text-sv-navy">50 délégations internationales</strong> représentant plus de{" "}
              <strong className="text-sv-navy">20 pays</strong>, ainsi qu'une communauté active de plus de{" "}
              <strong className="text-sv-navy">500 Villageois</strong>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              Organiser votre réunion chez Startup Village, c'est accueillir vos collaborateurs ou vos clients dans un
              lieu vivant, professionnel et reconnu comme un point de rencontre incontournable de l'innovation en
              Tunisie.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-sv-navy/10 bg-white px-4 py-6 text-center shadow-[0_4px_12px_rgba(16,36,62,0.06)]"
              >
                <div className="text-2xl font-extrabold text-sv-pink md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-sv-navy/70 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROOM SHOWCASE */}
      <div>
        {ROOMS.map((room, i) => (
          <section key={room.name} className={i % 2 === 0 ? "bg-white py-16 md:py-20" : "bg-slate-50/60 py-16 md:py-20"}>
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <RoomCard room={room} reverse={i % 2 === 1} />
            </div>
          </section>
        ))}
      </div>

      {/* 4. LES ÉQUIPEMENTS INCLUS */}
      <section className="bg-sv-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Les équipements inclus</h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {EQUIPEMENTS_INCLUS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POUR QUI */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">Pour qui ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sv-navy/70">
            Nos salles sont régulièrement réservées par :
          </p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {AUDIENCES.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-sv-navy/15 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UNE LOCALISATION STRATÉGIQUE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
            <PinIcon />
          </span>
          <h2 className="mt-6 text-3xl font-bold text-sv-navy md:text-4xl">Une localisation stratégique</h2>
          <p className="mt-6 text-base leading-relaxed text-sv-navy/70">
            Startup Village est situé au cœur de Tunis, à El Menzah, dans un environnement facilement accessible et
            reconnu comme l'un des principaux lieux de rencontre de l'écosystème entrepreneurial tunisien.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
            En choisissant Startup Village, vous bénéficiez non seulement d'un espace professionnel, mais également
            d'un cadre favorisant les rencontres, les collaborations et les opportunités.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">FAQ</h2>
          <div className="mt-10">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Besoin d&apos;une salle de réunion à Tunis ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Notre équipe vous accompagne pour trouver l&apos;espace le plus adapté à votre réunion, votre formation
            ou votre événement professionnel.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              Demander un devis
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Réserver une salle
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
