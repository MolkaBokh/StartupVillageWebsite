/* eslint-disable @next/next/no-img-element */
import { withLang, type Lang } from "@/config/navigation";
import { RESPONSABILITES_STYLES } from "@/components/responsabilites-styles";

/**
 * Responsabilités page body (bilingual). Identical markup, scoped styles and
 * images; only text and CTA hrefs differ.
 */

const IMG = "/assets/images/responsabilites/";

const T = {
  fr: {
    label: "Responsabilités",
    titleA: "Une Démarche Écoresponsable",
    titleB: " au Cœur du Village",
    heroText: "Le village met en place une démarche écoresponsable. Chaque villageois adopte des gestes du quotidien pour réduire son impact environnemental. Ceci implique davantage le village dans la responsabilité sociétale des entreprises (RSE).",
    engagementsTitle: "Nos engagements",
    cards: [
      { h: "Économie circulaire", p: "Nous favorisons la réutilisation des matériaux et la transformation créative des ressources existantes." },
      { h: "Art responsable", p: "De nombreuses œuvres présentes dans le Village sont conçues à partir d'objets récupérés et détournés." },
      { h: "Communauté engagée", p: "Villageois, partenaires et visiteurs contribuent à une culture d'innovation plus consciente et durable." },
    ],
    realisations: [
      { img: "1.png", alt: "Œuvre d'art réalisée à partir de matériaux récupérés au Village", index: "01", title: "L'art au service de l'écoresponsabilité", text: "Au Village, l'art raconte une autre histoire de la matière. Les œuvres naissent d'objets récupérés et détournés, transformés en créations singulières. Chaque pièce rappelle qu'un déchet peut devenir beauté et que la créativité est un puissant levier écologique." },
      { img: "2.jpg", alt: "Atelier de création et d'innovation autour de l'économie circulaire", index: "02", title: "Création et innovation au service de l'économie circulaire", text: "L'innovation guide notre manière de produire et de consommer. Dans les ateliers du Village, ressources et savoir-faire se réinventent pour prolonger la vie des matériaux. Une approche concrète où l'économie circulaire devient un moteur de progrès partagé." },
    ],
    a11yTitle: "Un site accessible à tous",
    a11yText: "Le site Startup Village a été conçu selon les bonnes pratiques internationales d'accessibilité numérique (WCAG) afin d'offrir une expérience inclusive. Navigation au clavier, compatibilité avec les lecteurs d'écran, contrastes adaptés, structure sémantique et prise en compte des besoins des personnes en situation de handicap permettent au plus grand nombre d'accéder facilement à nos contenus et services.",
    manifeste: "Chaque détail du Village reflète notre volonté de créer autrement.",
    ctaTitle: "Construire l'innovation de demain, de manière responsable.",
    ctaBtn: "Découvrir Startup Village",
  },
  en: {
    label: "Responsibility",
    titleA: "An Eco-Responsible Approach",
    titleB: " at the Heart of the Village",
    heroText: "The village is putting in place an eco-responsible approach. Every villager adopts everyday habits to reduce their environmental impact, deepening the village's commitment to corporate social responsibility (CSR).",
    engagementsTitle: "Our commitments",
    cards: [
      { h: "Circular economy", p: "We promote the reuse of materials and the creative transformation of existing resources." },
      { h: "Responsible art", p: "Many of the artworks in the Village are created from salvaged and repurposed objects." },
      { h: "Engaged community", p: "Villagers, partners and visitors contribute to a more conscious and sustainable culture of innovation." },
    ],
    realisations: [
      { img: "1.png", alt: "Artwork made from materials salvaged at the Village", index: "01", title: "Art in service of eco-responsibility", text: "At the Village, art tells another story of matter. The works are born from salvaged and repurposed objects, transformed into singular creations. Each piece is a reminder that waste can become beauty and that creativity is a powerful ecological lever." },
      { img: "2.jpg", alt: "Creation and innovation workshop around the circular economy", index: "02", title: "Creation and innovation in service of the circular economy", text: "Innovation guides the way we produce and consume. In the Village's workshops, resources and know-how reinvent themselves to extend the life of materials. A concrete approach where the circular economy becomes a driver of shared progress." },
    ],
    a11yTitle: "A site accessible to everyone",
    a11yText: "The Startup Village website has been designed in accordance with international digital accessibility best practices (WCAG) to provide an inclusive experience. Keyboard navigation, screen reader compatibility, adapted contrasts, semantic structure and consideration for the needs of people with disabilities allow as many people as possible to easily access our content and services.",
    manifeste: "Every detail of the Village reflects our determination to create differently.",
    ctaTitle: "Building tomorrow's innovation, responsibly.",
    ctaBtn: "Discover Startup Village",
  },
  ar: {
    label: "المسؤولية المجتمعية",
    titleA: "نهج بيئي مسؤول",
    titleB: " في قلب القرية",
    heroText: "تعتمد القرية نهجًا بيئيًا مسؤولًا. يتبنّى كلّ فرد من سكان القرية عادات يومية لتقليل أثره البيئي، بما يعمّق التزام القرية بالمسؤولية المجتمعية للمؤسسات.",
    engagementsTitle: "التزاماتنا",
    cards: [
      { h: "الاقتصاد الدائري", p: "نشجّع إعادة استخدام المواد والتحويل الإبداعي للموارد المتاحة." },
      { h: "الفنّ المسؤول", p: "تُصنع العديد من الأعمال الفنية في القرية من أشياء مُستعادة ومعاد توظيفها." },
      { h: "مجتمع ملتزم", p: "يساهم سكان القرية والشركاء والزوّار في ثقافة ابتكار أكثر وعيًا واستدامة." },
    ],
    realisations: [
      { img: "1.png", alt: "عمل فنّي مصنوع من مواد مُستعادة في القرية", index: "01", title: "الفنّ في خدمة المسؤولية البيئية", text: "في القرية، يروي الفنّ حكاية أخرى للمادة. تُولد الأعمال من أشياء مُستعادة ومعاد توظيفها، تتحوّل إلى إبداعات فريدة. كلّ قطعة تذكّر بأنّ النفاية يمكن أن تصبح جمالًا وأنّ الإبداع رافعة بيئية قوية." },
      { img: "2.jpg", alt: "ورشة إبداع وابتكار حول الاقتصاد الدائري", index: "02", title: "الإبداع والابتكار في خدمة الاقتصاد الدائري", text: "يوجّه الابتكار طريقتنا في الإنتاج والاستهلاك. في ورش القرية، تتجدّد الموارد والمهارات لإطالة عمر المواد. نهج ملموس يصبح فيه الاقتصاد الدائري محرّكًا لتقدّم مشترك." },
    ],
    a11yTitle: "موقع في متناول الجميع",
    a11yText: "صُمِّم موقع ستارتب فيليج وفق أفضل الممارسات الدولية لإمكانية الوصول الرقمي (WCAG) لتقديم تجربة شاملة للجميع. التنقّل بلوحة المفاتيح، والتوافق مع قارئات الشاشة، والتباينات الملائمة، والبنية الدلالية، ومراعاة احتياجات الأشخاص في وضعية إعاقة — كلّ ذلك يُمكّن أكبر عدد ممكن من الوصول بسهولة إلى محتوياتنا وخدماتنا.",
    manifeste: "كلّ تفصيل في القرية يعكس إرادتنا في الإبداع بشكل مختلف.",
    ctaTitle: "نبني ابتكار الغد بمسؤولية.",
    ctaBtn: "اكتشف ستارتب فيليج",
  },
} as const;

const BAR_COLORS = ["engagement-card__bar--blue", "engagement-card__bar--pink", "engagement-card__bar--green"];

export default function ResponsabilitesContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];

  return (
    <div className="responsabilites-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <style>{RESPONSABILITES_STYLES}</style>

      <main>
        {/* SECTION 1 — HERO ÉDITORIAL */}
        <section className="hero">
          <div className="container">
            <h1 className="hero__title">{t.titleA}{t.titleB}</h1>
            <p className="hero__text">{t.heroText}</p>
          </div>
        </section>

        {/* SECTION 2 — NOS ENGAGEMENTS */}
        <section className="engagements">
          <div className="container">
            <h2 className="section-title">{t.engagementsTitle}</h2>
            <div className="engagements__grid">
              {t.cards.map((c, i) => (
                <article className="engagement-card" key={i}>
                  <span className={`engagement-card__bar ${BAR_COLORS[i]}`}></span>
                  <h3 className="engagement-card__title">{c.h}</h3>
                  <p className="engagement-card__text">{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESSIBILITÉ NUMÉRIQUE */}
        <section className="engagements section--pb-tight">
          <div className="container">
            <h2 className="section-title">{t.a11yTitle}</h2>
            <p className="engagement-card__text">{t.a11yText}</p>
          </div>
        </section>

        {/* SECTION 3 — RÉALISATIONS */}
        <section className="realisations">
          <div className="container">
            {t.realisations.map((r, i) => (
              <article className={`realisation${i === 1 ? " realisation--reverse" : ""}`} key={i}>
                <div className="realisation__media">
                  <img src={`${IMG}${r.img}`} alt={r.alt} loading="lazy" />
                </div>
                <div className="realisation__body">
                  <span className="realisation__index">{r.index}</span>
                  <h3 className="realisation__title">{r.title}</h3>
                  <p className="realisation__text">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 4 — PHOTO MANIFESTE */}
        <section className="manifeste" aria-label={t.label}>
          <div className="manifeste__overlay"></div>
          <p className="manifeste__quote">{t.manifeste}</p>
        </section>

        {/* SECTION 5 — CTA FINAL */}
        <section className="cta">
          <div className="container">
            <h2 className="cta__title">{t.ctaTitle}</h2>
            <a href={withLang("/contact", lang)} className="cta__button">{t.ctaBtn}</a>
          </div>
        </section>
      </main>
    </div>
  );
}
