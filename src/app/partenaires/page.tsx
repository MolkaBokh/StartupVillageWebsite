import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PartnerLogo from "@/components/partenaires/PartnerLogo";
import { getPartners } from "@/lib/getPartners";
import "@/styles/partenaires.css";

export const metadata: Metadata = {
  title: "Partenaires & Écosystème — Startup Village",
  description:
    "Un réseau d'experts, d'investisseurs, de médias et d'institutions qui accélère les projets au sein de Startup Village.",
};

const HERO_BADGES = [
  { label: "Expertise", color: "bg-sv-cyan" },
  { label: "Financement", color: "bg-sv-green" },
  { label: "Accompagnement", color: "bg-sv-yellow" },
  { label: "Visibilité", color: "bg-sv-pink" },
];

const VALUE_CARDS = [
  {
    title: "Expertise",
    color: "bg-sv-cyan",
    text: "Des conseils stratégiques, technologiques et opérationnels pour structurer et faire avancer les projets.",
  },
  {
    title: "Financement",
    color: "bg-sv-green",
    text: "Des connexions avec des investisseurs, partenaires financiers et acteurs capables de soutenir la croissance.",
  },
  {
    title: "Visibilité",
    color: "bg-sv-pink",
    text: "Des opportunités médias, événements et contenus pour faire rayonner les initiatives du Village.",
  },
  {
    title: "Réseau",
    color: "bg-sv-yellow",
    text: "Des mises en relation avec entrepreneurs, décideurs, mentors et institutions.",
  },
];

export default function PartenairesPage() {
  const partners = getPartners();

  return (
    <div className="partenaires-page bg-white">
      <main>
        {/* SECTION 1 — HERO IMAGE */}
        <section className="relative isolate overflow-hidden">
          {/* Image de fond plein écran */}
          <Image
            src="/assets/images/partenaires/hero.png"
            alt="L'écosystème Startup Village : rencontres, événements et networking"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          {/* Overlay sombre subtil pour la lisibilité (≈ 30%) */}
          <div className="absolute inset-0 -z-10 bg-sv-navy/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sv-navy/60 via-sv-navy/30 to-transparent" />

          <div className="mx-auto max-w-content px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-28">
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-sv-pink drop-shadow-[0_1px_6px_rgba(15,39,72,0.6)]">
                Partenaires &amp; Écosystème
              </span>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.5rem]">
                Un réseau qui accélère les projets
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                Entrepreneurs, investisseurs, experts, médias et institutions se
                rencontrent au sein d&apos;un même écosystème pour faire avancer
                les idées plus vite.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {HERO_BADGES.map((badge) => (
                  <span
                    key={badge.label}
                    className="font-sans inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 py-1.5 pl-3 pr-4 text-sm font-semibold text-sv-navy shadow-sm backdrop-blur"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${badge.color}`} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — LOGO WALL */}
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-content px-6 py-12 lg:px-8 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-sv-navy sm:text-4xl">
                Un réseau construit autour de l&apos;innovation
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-sv-navy/60">
                Startup Village s&apos;appuie sur un réseau de partenaires
                engagés pour accompagner les entrepreneurs dans leurs défis
                stratégiques, technologiques, financiers et médiatiques.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {partners.map((partner) => (
                <PartnerLogo key={partner.logo} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — CE QUE L'ÉCOSYSTÈME APPORTE */}
        <section className="mx-auto max-w-content px-6 py-12 lg:px-8 lg:py-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-sv-navy sm:text-4xl">
            Ce que l&apos;écosystème apporte aux entrepreneurs
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-[0_14px_30px_-20px_rgba(15,39,72,0.2)]"
              >
                <span className={`block h-1.5 w-9 rounded-full ${card.color}`} />
                <h3 className="mt-4 text-lg font-semibold text-sv-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/60">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — CTA FINAL */}
        <section className="bg-sv-navy">
          <div className="mx-auto max-w-content px-6 py-16 text-center lg:px-8 lg:py-20">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Rejoignez un écosystème qui fait avancer les projets.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              Startup Village connecte les entrepreneurs aux ressources,
              expertises et opportunités dont ils ont besoin pour grandir.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="font-sans inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.03] hover:bg-[#1c9fce]"
              >
                Nous contacter
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
