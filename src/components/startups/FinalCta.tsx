import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-white pb-20 pt-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-sv-navy md:text-4xl">
          Votre startup a sa place ici.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-sv-navy/65">
          Rejoignez un environnement conçu pour accélérer les rencontres, les
          collaborations et les projets ambitieux.
        </p>
        <div className="mt-9">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sv-cyan px-8 py-3.5 text-sm font-bold text-white transition hover:bg-sv-cyan/90"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
