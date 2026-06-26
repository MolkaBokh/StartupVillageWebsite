"use client";

import Image from "next/image";
import { useState } from "react";
import { startups, type Startup } from "@/data/startups";
import { type Lang } from "@/config/navigation";

function LogoItem({ startup }: { startup: Startup }) {
  const [errored, setErrored] = useState(false);
  const showImage = startup.logo && !errored;

  return (
    <div className="flex h-[116px] items-center justify-center border-b border-r border-[#E5E7EB] bg-white px-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      {showImage ? (
        <Image
          src={`/assets/images/startups/logos/${startup.logo}`}
          alt={startup.name}
          width={180}
          height={72}
          className="max-h-16 w-auto max-w-[150px] object-contain"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="text-center text-sm font-bold uppercase tracking-wide text-sv-navy/50">
          {startup.name}
        </span>
      )}
    </div>
  );
}

const T = {
  fr: {
    title: "Un écosystème d'innovation et de collaboration",
    text: "Startup Village rassemble entrepreneurs, startups et partenaires dans un environnement pensé pour favoriser les rencontres, le partage d'expertise et la croissance.",
    wallTitle: "Ils font partie du Village",
    wallText: "Une sélection de startups résidentes et partenaires qui contribuent à la dynamique de l'écosystème.",
  },
  en: {
    title: "An ecosystem of innovation and collaboration",
    text: "Startup Village brings together entrepreneurs, startups and partners in an environment designed to spark connections, share expertise and drive growth.",
    wallTitle: "They're part of the Village",
    wallText: "A selection of resident startups and partners who contribute to the ecosystem's momentum.",
  },
  ar: {
    title: "منظومة للابتكار والتعاون",
    text: "يجمع ستارتب فيليج روّاد الأعمال والشركات الناشئة والشركاء في بيئة مصمّمة لتحفيز اللقاءات وتبادل الخبرات ودفع النمو.",
    wallTitle: "هم جزء من القرية",
    wallText: "مجموعة مختارة من الشركات الناشئة المقيمة والشركاء الذين يساهمون في ديناميكية المنظومة.",
  },
} as const;

export default function LogoWall({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="bg-white pb-14 pt-6 md:pb-16 md:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Compact intro */}
        <div className="max-w-3xl">
          <div className="flex h-1.5 w-24 overflow-hidden rounded-full">
            <span className="flex-1 bg-sv-pink" />
            <span className="flex-1 bg-sv-cyan" />
            <span className="flex-1 bg-sv-yellow" />
            <span className="flex-1 bg-sv-green" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-sv-navy md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sv-navy/65">
            {t.text}
          </p>
        </div>

        {/* Logo wall heading */}
        <h3 className="mt-12 text-2xl font-extrabold tracking-tight text-sv-navy md:text-3xl">
          {t.wallTitle}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-sv-navy/65">
          {t.wallText}
        </p>

        <div className="mt-8 grid grid-cols-2 border-l border-t border-[#E5E7EB] sm:grid-cols-3 lg:grid-cols-5">
          {startups.map((startup) => (
            <LogoItem key={startup.name} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  );
}
