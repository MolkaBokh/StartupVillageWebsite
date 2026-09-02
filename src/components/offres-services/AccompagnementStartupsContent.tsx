import Link from "next/link";
import { withLang } from "@/config/navigation";

/**
 * Dedicated "Accompagnement Startup" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. French content
 * is supplied verbatim by the business; do not alter wording.
 */

const BASE = "/assets/images/offres-services";

const SUPPORT_ITEMS = [
  "Mentorat personnalisé",
  "Coaching entrepreneurial",
  "Mise en relation avec des investisseurs",
  "Networking",
  "Accès à notre réseau de partenaires",
  "Participation à des événements de l'écosystème",
];

const AUDIENCES = ["Porteurs de projet", "Startups en création", "Startups en croissance", "Entrepreneurs innovants", "Programmes internationaux"];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AccompagnementStartupsContent() {
  const contact = withLang("/contact", "fr");

  return (
    <div dir="ltr">
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/accompagnement.png`}
          alt="Séance d'accompagnement et de mentorat pour startups à Startup Village"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">
            Développez votre startup avec un accompagnement adapté à chaque étape
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Créer une startup ne se résume pas à développer une idée.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Il faut structurer son projet, rencontrer les bonnes personnes, accéder aux bons partenaires et évoluer
            dans un environnement stimulant.
          </p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">
            Chez Startup Village, nous accompagnons les entrepreneurs à travers un réseau d&apos;experts, de
            partenaires, d&apos;investisseurs et d&apos;acteurs de l&apos;innovation pour accélérer leur
            développement.
          </p>
        </div>
      </section>

      {/* 2. NOTRE ACCOMPAGNEMENT COMPREND */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">Notre accompagnement comprend</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {SUPPORT_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-slate-50/60 px-4 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POUR QUI */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">Pour qui ?</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {AUDIENCES.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-sv-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMENT REJOINDRE STARTUP VILLAGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">Comment rejoindre Startup Village ?</h2>
          <p className="mt-6 text-base leading-relaxed text-sv-navy/70">
            Il suffit de nous contacter via notre formulaire de contact, notre site internet ou nos réseaux sociaux.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">
            Notre équipe prendra contact avec vous afin de comprendre vos besoins et vous orienter vers les solutions
            les plus adaptées.
          </p>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Donnez à votre projet les moyens de grandir.
          </h2>
          <div className="mt-8">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
