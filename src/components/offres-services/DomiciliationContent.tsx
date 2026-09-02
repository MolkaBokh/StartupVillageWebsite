import Link from "next/link";
import { withLang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Domiciliation" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. French content
 * is supplied verbatim by the business; do not alter wording.
 */

const BASE = "/assets/images/offres-services";

const STATS = [
  { value: "100", label: "Événements" },
  { value: "1 000", label: "Visiteurs" },
  { value: "50", label: "Délégations internationales" },
  { value: "20", label: "Pays" },
  { value: "500", label: "Villageois" },
];

const ADVANTAGES = [
  "Une adresse professionnelle à Tunis pour votre siège social",
  "La réception de votre courrier",
  "Des tarifs préférentiels sur la réservation des salles de réunion",
  "La possibilité d'accueillir vos clients dans un environnement professionnel",
  "Un accès à une communauté dynamique d'entrepreneurs et d'entreprises",
  "Un cadre reconnu par les acteurs de l'innovation et de l'entrepreneuriat",
];

const PROFILES = [
  "Entrepreneurs en création d'entreprise",
  "Startups",
  "Freelances souhaitant professionnaliser leur activité",
  "PME",
  "Grandes entreprises ouvrant une implantation en Tunisie",
  "Organisations internationales et programmes d'accompagnement",
  "Cabinets de conseil",
];

const ECOSYSTEM = [
  "Des entrepreneurs",
  "Des startups innovantes",
  "Des investisseurs",
  "Des accélérateurs",
  "Des organisations internationales",
  "Des universités",
  "Des programmes d'accompagnement",
  "Des événements professionnels tout au long de l'année",
];

const STEPS = [
  {
    title: "Prenez contact avec notre équipe",
    text: "Expliquez-nous votre projet et vos besoins.",
  },
  {
    title: "Constituez votre dossier",
    text: "Notre équipe vous accompagne dans les démarches liées à votre domiciliation.",
  },
  {
    title: "Installez votre siège social",
    text: "Votre entreprise bénéficie d'une adresse professionnelle au sein de Startup Village.",
  },
  {
    title: "Développez votre activité",
    text: "Profitez de nos espaces, de notre communauté et des nombreux événements organisés tout au long de l'année.",
  },
];

const FAQ = [
  {
    q: "Qui peut bénéficier du service de domiciliation ?",
    a: "Toute entreprise, startup, PME, grande entreprise ou entrepreneur souhaitant disposer d'une adresse professionnelle peut bénéficier de notre service.",
  },
  {
    q: "Puis-je recevoir mon courrier chez Startup Village ?",
    a: "Oui. La réception de votre courrier est incluse dans notre service de domiciliation.",
  },
  {
    q: "Puis-je réserver une salle de réunion ?",
    a: "Oui. Les entreprises domiciliées bénéficient de tarifs préférentiels pour la réservation de nos salles de réunion.",
  },
  {
    q: "Puis-je recevoir mes clients sur place ?",
    a: "Oui. Vous pouvez accueillir vos partenaires et clients dans un cadre professionnel en réservant l'un de nos espaces de réunion.",
  },
  {
    q: "La domiciliation est-elle réservée aux startups ?",
    a: "Non. Notre service est ouvert aux startups, PME, grandes entreprises, cabinets de conseil, associations et organisations ayant besoin d'une adresse professionnelle.",
  },
  {
    q: "Startup Village est-il uniquement un espace de coworking ?",
    a: "Non. Startup Village est un écosystème entrepreneurial qui rassemble espaces de travail, événements, accompagnement, studios de production, domiciliation et une communauté active d'acteurs de l'innovation.",
  },
  {
    q: "Où se situe votre service de domiciliation ?",
    a: "Notre service est proposé sur nos sites de Startup Village El Menzah et Startup Village Charguia, à Tunis.",
  },
];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DomiciliationContent() {
  const contact = withLang("/contact", "fr");

  return (
    <div dir="ltr">
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/domiciliation.png`}
          alt="Domiciliation d'entreprise à Startup Village, Tunis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[52px]">
            Domiciliez votre entreprise au cœur de l&apos;écosystème entrepreneurial tunisien
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Créer une entreprise est une étape importante. Lui offrir une adresse professionnelle reconnue l&apos;est
            tout autant.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Avec le service de domiciliation de Startup Village, vous bénéficiez d&apos;une adresse professionnelle à
            Tunis tout en intégrant un environnement où entrepreneurs, startups, entreprises, investisseurs et
            organisations internationales se rencontrent chaque jour.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Bien plus qu&apos;une simple adresse administrative, Startup Village vous ouvre les portes d&apos;un
            écosystème vivant qui favorise les échanges, les opportunités et le développement de votre activité.
          </p>
        </div>
      </section>

      {/* 2. POURQUOI CHOISIR STARTUP VILLAGE POUR VOTRE DOMICILIATION */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">
              Pourquoi choisir Startup Village pour votre domiciliation ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              Une adresse est souvent le premier contact entre votre entreprise et vos clients, partenaires ou
              investisseurs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              En choisissant Startup Village, vous installez votre siège social dans un lieu reconnu pour son rôle
              central dans l&apos;innovation et l&apos;entrepreneuriat en Tunisie.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              Chaque année, notre communauté accueille des événements, des visiteurs, des délégations
              internationales, ainsi qu&apos;une communauté active de villageois.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              Votre entreprise bénéficie ainsi d&apos;une adresse qui inspire confiance et d&apos;un environnement
              propice aux connexions professionnelles.
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

      {/* 3. LES AVANTAGES DE NOTRE SERVICE DE DOMICILIATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-blue" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">
              Les avantages de notre service de domiciliation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              Notre offre de domiciliation a été pensée pour répondre aux besoins des entrepreneurs, startups et
              entreprises à la recherche d&apos;une solution professionnelle, flexible et évolutive.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
              En domiciliant votre entreprise chez Startup Village, vous profitez notamment de :
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {ADVANTAGES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-slate-50/60 px-4 py-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNE SOLUTION ADAPTÉE À CHAQUE ÉTAPE DE VOTRE DÉVELOPPEMENT */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-green" />
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">
            Une solution adaptée à chaque étape de votre développement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">
            Que vous soyez en phase de création ou déjà en activité, notre service de domiciliation s&apos;adapte à
            vos besoins.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">
            Il est particulièrement adapté aux :
          </p>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {PROFILES.map((profile) => (
              <span
                key={profile}
                className="rounded-full border border-sv-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PLUS QU'UNE ADRESSE, UN ÉCOSYSTÈME */}
      <section className="bg-sv-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Plus qu&apos;une adresse, un écosystème</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Choisir Startup Village, c&apos;est rejoindre un lieu où les idées prennent vie.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Au quotidien, vous évoluez dans un environnement qui rassemble :
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {ECOSYSTEM.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/70">
            Votre domiciliation devient ainsi une porte d&apos;entrée vers un réseau qui peut contribuer au
            développement de votre entreprise.
          </p>
        </div>
      </section>

      {/* 6. COMMENT ÇA FONCTIONNE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">Comment ça fonctionne ?</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-sv-navy/10 bg-slate-50/60 px-6 py-8 text-center"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sv-cyan-btn text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-bold text-sv-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-slate-50/60 py-16 md:py-20">
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
            Donnez à votre entreprise une adresse qui reflète ses ambitions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Rejoignez un écosystème où entreprises, startups et organisations développent leurs projets dans un
            environnement reconnu, professionnel et connecté.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              Demander un devis
            </Link>
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
