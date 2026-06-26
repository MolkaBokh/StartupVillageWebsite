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
    eyebrow: "Partenaires & Écosystème",
    title: "Un réseau qui accélère les projets",
    intro: "Entrepreneurs, investisseurs, experts, médias et institutions se rencontrent au sein d'un même écosystème pour faire avancer les idées plus vite.",
    badges: ["Expertise", "Financement", "Accompagnement", "Visibilité"],
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
    finalCta: "Nous contacter",
    heroAlt: "L'écosystème Startup Village : rencontres, événements et networking",
  },
  en: {
    eyebrow: "Partners & Ecosystem",
    title: "A network that accelerates projects",
    intro: "Entrepreneurs, investors, experts, media and institutions meet within a single ecosystem to move ideas forward faster.",
    badges: ["Expertise", "Funding", "Support", "Visibility"],
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
    finalCta: "Contact us",
    heroAlt: "The Startup Village ecosystem: encounters, events and networking",
  },
  ar: {
    eyebrow: "الشركاء والمنظومة",
    title: "شبكة تُسرّع المشاريع",
    intro: "يلتقي روّاد الأعمال والمستثمرون والخبراء ووسائل الإعلام والمؤسسات داخل منظومة واحدة لدفع الأفكار إلى الأمام بسرعة أكبر.",
    badges: ["الخبرة", "التمويل", "المرافقة", "الظهور"],
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
    finalCta: "اتصل بنا",
    heroAlt: "منظومة ستارتب فيليج: لقاءات وفعاليات وتواصل",
  },
} as const;

const BADGE_COLORS = ["bg-sv-cyan", "bg-sv-green", "bg-sv-yellow", "bg-sv-pink"];
const CARD_COLORS = ["bg-sv-cyan", "bg-sv-green", "bg-sv-pink", "bg-sv-yellow"];

export default function PartenairesContent({ lang = "fr" }: { lang?: Lang }) {
  const partners = getPartners();
  const t = T[lang];

  return (
    <div className="partenaires-page bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <main>
        {/* SECTION 1 — HERO IMAGE */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/assets/images/partenaires/hero.png"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-sv-navy/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sv-navy/60 via-sv-navy/30 to-transparent" />

          <div className="mx-auto max-w-content px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-28">
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-sv-pink drop-shadow-[0_1px_6px_rgba(15,39,72,0.6)]">
                {t.eyebrow}
              </span>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.5rem]">
                {t.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{t.intro}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {t.badges.map((label, i) => (
                  <span
                    key={label}
                    className="font-sans inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 py-1.5 pl-3 pr-4 text-sm font-semibold text-sv-navy shadow-sm backdrop-blur"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${BADGE_COLORS[i]}`} />
                    {label}
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
              <h2 className="text-3xl font-semibold tracking-tight text-sv-navy sm:text-4xl">{t.wallTitle}</h2>
              <p className="mt-3 text-lg leading-relaxed text-sv-navy/60">{t.wallText}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {partners.map((partner) => (
                <PartnerLogo key={partner.logo} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — VALUE */}
        <section className="mx-auto max-w-content px-6 py-12 lg:px-8 lg:py-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-sv-navy sm:text-4xl">{t.valueTitle}</h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-[0_14px_30px_-20px_rgba(15,39,72,0.2)]"
              >
                <span className={`block h-1.5 w-9 rounded-full ${CARD_COLORS[i]}`} />
                <h3 className="mt-4 text-lg font-semibold text-sv-navy">{card.title}</h3>
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
                className="font-sans inline-flex items-center gap-2 rounded-full bg-sv-cyan px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.03] hover:bg-[#1c9fce]"
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
