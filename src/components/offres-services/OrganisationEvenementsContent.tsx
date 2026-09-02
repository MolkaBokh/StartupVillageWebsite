import Link from "next/link";
import { withLang } from "@/config/navigation";

/**
 * Dedicated "Organiser un événement" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. French content
 * is supplied verbatim by the business; do not alter wording.
 */

const BASE = "/assets/images/offres-services";
const AVANT_PREMIERE_IMG = "/assets/images/espace-de-vie/Avant-premiere-1.png";

const BENEFITS = [
  "Un lieu reconnu par l'écosystème entrepreneurial tunisien",
  "Des espaces entièrement modulables",
  "Un accompagnement dans l'organisation",
  "Une assistance technique selon les besoins",
  "Deux terrasses complémentaires",
  "La possibilité de bénéficier de notre partenaire culinaire",
];

const SUNSET_USES = ["Afterworks", "Cocktails", "Networking", "Anniversaires d'entreprise", "Soirées privées", "Clôtures d'événements"];
const SUNRISE_USES = ["Pauses café", "Espaces catering", "Accueils invités", "Networking matinal"];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OrganisationEvenementsContent() {
  const contact = withLang("/contact", "fr");

  return (
    <div dir="ltr">
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/organisation-evenements.jpg`}
          alt="Événement professionnel organisé à Startup Village, Tunis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">
            Donnez vie à vos événements dans un lieu qui rassemble l&apos;écosystème entrepreneurial tunisien
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">
            Qu&apos;il s&apos;agisse d&apos;une conférence, d&apos;un séminaire, d&apos;un lancement de produit,
            d&apos;un hackathon ou d&apos;un événement de networking, le choix du lieu joue un rôle essentiel dans la
            réussite de votre projet.
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">
            À Startup Village, nous mettons à votre disposition des espaces événementiels modulables, conçus pour
            accueillir des événements professionnels de toutes tailles dans un environnement moderne, inspirant et
            entièrement personnalisable.
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">
            Chaque année, plus de <strong className="font-bold text-white">100 événements</strong>{" "}
            sont organisés dans nos espaces, réunissant entrepreneurs, entreprises, investisseurs, institutions,
            organisations internationales et acteurs de l&apos;innovation venus de plus de{" "}
            <strong className="font-bold text-white">20 pays</strong>.
          </p>
        </div>
      </section>

      {/* 2. NOS ESPACES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">Nos espaces</h2>

          {/* Salle Avant-Première */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl md:h-[420px]">
              <img
                src={AVANT_PREMIERE_IMG}
                alt="Salle Avant-Première — espace événementiel modulable, Startup Village"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-pink" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">Salle Avant-Première</h3>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">Le cœur événementiel de Startup Village.</p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-pink px-4 py-1.5 text-sm font-bold text-white">
                100 m² · jusqu&apos;à 80 personnes assises
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
                Avec ses 100 m² et une capacité allant jusqu&apos;à 80 personnes assises, la Salle Avant-Première
                accueille conférences, panels, ateliers, formations, émissions radio, hackathons, expositions,
                débats, lancements de produits et événements corporate.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
                Sa configuration entièrement modulable permet d&apos;adapter l&apos;espace à chaque format
                d&apos;événement.
              </p>
            </div>
          </div>

          {/* Terrasse Sunset / Terrasse Sunrise */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-sv-navy/10 bg-slate-50/60 p-8">
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-blue" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy">Terrasse Sunset</h3>
              <p className="mt-2 text-base font-semibold text-sv-navy/80">Pensée pour les moments de convivialité.</p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-blue px-4 py-1.5 text-sm font-bold text-white">
                Capacité : 50 personnes
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
                Avec une capacité de 50 personnes, cette terrasse est idéale pour :
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SUNSET_USES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                    <span className="text-sv-blue">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-sv-navy/10 bg-slate-50/60 p-8">
              <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full bg-sv-green" />
              <h3 className="mt-4 text-2xl font-bold text-sv-navy">Terrasse Sunrise</h3>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-sv-green px-4 py-1.5 text-sm font-bold text-white">
                Capacité : 20 personnes
              </span>

              <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
                Attenante à la Salle Avant-Première, cette terrasse accueille principalement :
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SUNRISE_USES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                    <span className="text-sv-green">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POURQUOI ORGANISER VOTRE ÉVÉNEMENT CHEZ STARTUP VILLAGE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">
            Pourquoi organiser votre événement chez Startup Village ?
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-white px-4 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Organisons ensemble votre prochain événement.
          </h2>
          <div className="mt-8">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
