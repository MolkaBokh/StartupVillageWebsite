import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";

/**
 * Dedicated "Déposer mon stock" (Co-Storage) service page — replaces the
 * generic "Bientôt disponible" placeholder for this one offer only. FR
 * wording is supplied verbatim by the business; EN/AR are natural
 * professional translations with the same content, no additions or
 * omissions.
 */

const BASE = "/assets/images/offres-services";

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  benefitsTitle: string;
  benefitsItems: string[];
  ctaTitle: string;
  ctaBtn: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Stockage & Click & Collect",
    heroP1: "Vous développez une activité e-commerce ou recherchez une solution de stockage flexible ?",
    heroP2: "Startup Village met à disposition des espaces de stockage adaptés aux besoins des entreprises, startups et commerçants.",
    heroP3: "Louez uniquement la surface dont vous avez besoin et bénéficiez d'une solution simple pour gérer votre logistique et vos opérations de Click & Collect.",
    benefitsTitle: "Les avantages",
    benefitsItems: ["Location au m²", "Gestion du stock", "Logistique", "Solution flexible", "Accessible à toutes les entreprises"],
    ctaTitle: "Optimisez votre logistique.",
    ctaBtn: "Nous contacter",
  },
  en: {
    h1: "Storage & Click & Collect",
    heroP1: "Are you growing an e-commerce business or looking for a flexible storage solution?",
    heroP2: "Startup Village provides storage spaces adapted to the needs of companies, startups and merchants.",
    heroP3: "Rent only the space you need and benefit from a simple solution to manage your logistics and your Click & Collect operations.",
    benefitsTitle: "The benefits",
    benefitsItems: ["Rental by m²", "Stock management", "Logistics", "Flexible solution", "Accessible to all businesses"],
    ctaTitle: "Optimize your logistics.",
    ctaBtn: "Contact us",
  },
  ar: {
    h1: "التخزين و Click & Collect",
    heroP1: "هل تطوّرون نشاطًا في التجارة الإلكترونية أو تبحثون عن حلّ تخزين مرن؟",
    heroP2: "يضع ستارتب فيليج تحت تصرّفكم فضاءات تخزين تتلاءم مع احتياجات الشركات والشركات الناشئة والتجّار.",
    heroP3: "استأجروا فقط المساحة التي تحتاجونها واستفيدوا من حلّ بسيط لإدارة لوجستيّاتكم وعمليّات Click & Collect الخاصة بكم.",
    benefitsTitle: "المزايا",
    benefitsItems: ["كراء بالمتر المربّع", "إدارة المخزون", "اللوجستيك", "حلّ مرن", "في متناول جميع الشركات"],
    ctaTitle: "حسِّنوا لوجستيّاتكم.",
    ctaBtn: "اتصل بنا",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CoStorageContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/costorage-offre.png`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.6) 0%, rgba(15,39,72,0.82) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
        </div>
      </section>

      {/* 2. LES AVANTAGES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.benefitsTitle}</h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.benefitsItems.map((item) => (
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

      {/* 3. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          <div className="mt-8">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
