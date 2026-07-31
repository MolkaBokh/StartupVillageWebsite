import Image from "next/image";
import Link from "next/link";
import PartnerLogo from "@/components/partenaires/PartnerLogo";
import { getPartners } from "@/lib/getPartners";
import { withLang, type Lang } from "@/config/navigation";
import "@/styles/partenaires.css";

/**
 * Partenaires page body (bilingual). Identical markup, styling, logo wall and
 * images; only text and the CTA href differ.
 */

const T = {
  fr: {
    title: "Un réseau qui accélère les projets",
    intro: "Entrepreneurs, investisseurs, experts, médias et institutions se rencontrent au sein d'un même écosystème pour faire avancer les idées plus vite.",
    wallTitle: "Un réseau construit autour de l'innovation",
    wallText: "Startup Village s'appuie sur un réseau de partenaires engagés pour accompagner les entrepreneurs dans leurs défis stratégiques, technologiques, financiers et médiatiques.",
    valueTitle: "Ce que l'écosystème apporte aux entrepreneurs",
    cards: [
      { title: "Expertise", text: "Des conseils stratégiques, technologiques et opérationnels pour structurer et faire avancer les projets." },
      { title: "Financement", text: "Des connexions avec des investisseurs, partenaires financiers et acteurs capables de soutenir la croissance." },
      { title: "Visibilité", text: "Des opportunités médias, événements et contenus pour faire rayonner les initiatives du Village." },
      { title: "Réseau", text: "Des mises en relation avec entrepreneurs, décideurs, mentors et institutions." },
    ],
    finalTitle: "Rejoignez un écosystème qui fait avancer les projets.",
    finalText: "Startup Village connecte les entrepreneurs aux ressources, expertises et opportunités dont ils ont besoin pour grandir.",
    finalCta: "Devenir partenaire",
    heroAlt: "L'écosystème Startup Village : rencontres, événements et networking",
  },
  en: {
    title: "A network that accelerates projects",
    intro: "Entrepreneurs, investors, experts, media and institutions meet within a single ecosystem to move ideas forward faster.",
    wallTitle: "A network built around innovation",
    wallText: "Startup Village relies on a network of committed partners to support entrepreneurs through their strategic, technological, financial and media challenges.",
    valueTitle: "What the ecosystem brings to entrepreneurs",
    cards: [
      { title: "Expertise", text: "Strategic, technological and operational guidance to structure and advance projects." },
      { title: "Funding", text: "Connections with investors, financial partners and players able to support growth." },
      { title: "Visibility", text: "Media, event and content opportunities to give the Village's initiatives the spotlight they deserve." },
      { title: "Network", text: "Introductions to entrepreneurs, decision-makers, mentors and institutions." },
    ],
    finalTitle: "Join an ecosystem that moves projects forward.",
    finalText: "Startup Village connects entrepreneurs to the resources, expertise and opportunities they need to grow.",
    finalCta: "Become a partner",
    heroAlt: "The Startup Village ecosystem: encounters, events and networking",
  },
  ar: {
    title: "شبكة تُسرّع المشاريع",
    intro: "يلتقي روّاد الأعمال والمستثمرون والخبراء ووسائل الإعلام والمؤسسات داخل منظومة واحدة لدفع الأفكار إلى الأمام بسرعة أكبر.",
    wallTitle: "شبكة مبنية حول الابتكار",
    wallText: "يعتمد ستارتب فيليج على شبكة من الشركاء الملتزمين لمرافقة روّاد الأعمال في تحدّياتهم الاستراتيجية والتكنولوجية والمالية والإعلامية.",
    valueTitle: "ما تقدّمه المنظومة لروّاد الأعمال",
    cards: [
      { title: "الخبرة", text: "إرشاد استراتيجي وتكنولوجي وتشغيلي لهيكلة المشاريع ودفعها قدمًا." },
      { title: "التمويل", text: "روابط مع مستثمرين وشركاء ماليين وفاعلين قادرين على دعم النمو." },
      { title: "الظهور", text: "فرص إعلامية وفعاليات ومحتوى لإبراز مبادرات القرية." },
      { title: "الشبكة", text: "ربط بروّاد الأعمال وصنّاع القرار والمرشدين والمؤسسات." },
    ],
    finalTitle: "انضمّ إلى منظومة تدفع المشاريع إلى الأمام.",
    finalText: "يربط ستارتب فيليج روّاد الأعمال بالموارد والخبرات والفرص التي يحتاجونها للنموّ.",
    finalCta: "كن شريكًا",
    heroAlt: "منظومة ستارتب فيليج: لقاءات وفعاليات وتواصل",
  },
} as const;

const CARD_COLORS = ["bg-sv-cyan", "bg-sv-green", "bg-sv-pink", "bg-sv-yellow"];

// Grid positions (1-indexed) whose logos should appear visually larger.
const LARGE_LOGO_INDEXES = new Set([0, 4, 5, 6, 7, 8]); // logos #1, 5, 6, 7, 8, 9

export default function PartenairesContent({ lang = "fr" }: { lang?: Lang }) {
  const partners = getPartners();
  const t = T[lang];

  return (
    <div className="partenaires-page bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <main>
        {/* SECTION 1 — HERO IMAGE (centered, matches Offres & Services style) */}
        <section className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden md:min-h-[580px]">
          <Image
            src="/assets/images/partenaires/hero.png"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(26,34,56,0.30) 0%, rgba(26,34,56,0.60) 100%)" }}
          />
          <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-[56px]">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed md:text-xl">{t.intro}</p>
            <div className="mt-9">
              <Link
                href={withLang("/contact", lang)}
                className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
              >
                {t.finalCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — LOGO WALL */}
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-content px-6 py-12 lg:px-8 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-sv-navy sm:text-4xl">{t.wallTitle}</h2>
              <p className="mt-3 text-lg leading-relaxed text-sv-navy/60">{t.wallText}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {partners.map((partner, i) => (
                <PartnerLogo key={partner.logo} partner={partner} large={LARGE_LOGO_INDEXES.has(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — VALUE */}
        <section className="mx-auto max-w-content px-6 py-12 lg:px-8 lg:py-16">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-sv-navy sm:text-4xl">{t.valueTitle}</h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-[0_14px_30px_-20px_rgba(15,39,72,0.2)]"
              >
                <span className={`block h-1.5 w-9 rounded-full ${CARD_COLORS[i]}`} />
                <h3 className="mt-4 text-lg font-bold text-sv-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/60">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — CTA FINAL */}
        <section className="bg-sv-navy">
          <div className="mx-auto max-w-content px-6 py-16 text-center lg:px-8 lg:py-20">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t.finalTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{t.finalText}</p>
            <div className="mt-8">
              <Link
                href={withLang("/contact", lang)}
                className="font-sans inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
              >
                {t.finalCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
