import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/assets/images/startups/hero.png"
        alt="Communauté d'entrepreneurs collaborant chez Startup Village"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-sv-navy/25" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-6 py-16 md:min-h-[640px] md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sv-pink">
          Startups
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Les startups qui font vivre le Village
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          Des entrepreneurs, créateurs et innovateurs qui imaginent, testent et
          développent leurs solutions au sein de Startup Village.
        </p>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sv-pink px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sv-pink/90"
          >
            Rejoindre le Village
          </Link>
          <Link
            href="/espace-de-vie"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white"
          >
            Découvrir nos espaces
          </Link>
        </div>
      </div>
    </section>
  );
}
