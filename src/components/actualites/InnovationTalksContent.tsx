/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "@/styles/actualites-article.css";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    back: "Retour aux actualités",
    title: "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble",
    meta: ["Mai 2026", "Startup Village", "Lecture 3 min"],
    subtitle:
      "Alessandro Prunas, Ambassadeur d'Italie : « L'innovation transfrontalière repose sur le dialogue direct et le partage d'expertises industrielles »",
    p1: "Dans le cadre de nos initiatives d'ouverture internationale, Startup Village a accueilli l’Ambassade d’Italie à Tunis à l'occasion des Innovation Talks. Retour sur une soirée d'échange stratégique qui a réuni entrepreneurs, investisseurs et acteurs institutionnels autour des opportunités de coopération technologique entre les deux rives de la Méditerranée.",
    p2: "Stimuler les synergies entre les écosystèmes entrepreneuriaux italien et tunisien : tel était l'objectif de cette rencontre. L’événement a été rehaussé par la présence d'une délégation officielle de haut niveau et de Son Excellence Alessandro Prunas, Ambassadeur d’Italie en Tunisie. Dans son intervention inspirante, l'Ambassadeur a mis en lumière l'importance stratégique de la collaboration technologique et la volonté des institutions italiennes de soutenir les maillages industriels et entrepreneuriaux avec l'écosystème tunisien.",
    p3: "Loin des rencontres protocolaires classiques, cette soirée a offert un espace de dialogue direct et authentique. Un des grands moments forts a été le panel croisé entre deux jeunes pousses à forte valeur technologique, modéré avec brio par Wassim Ben Larbi.",
    p4: "Les présentations et les sessions de questions-réponses avec une audience engagée ont permis de décrypter les défis communs auxquels font face les fondateurs des deux pays, notamment en matière d'accès aux marchés européens et africains, de conformité réglementaire et de transfert de technologies.",
    pull: "Ces moments d'échange sont le véritable moteur des écosystèmes : ils créent des ponts durables entre les idées, les talents et les opportunités de business",
    p5: "Un grand merci à l'Ambassade d'Italie en Tunisie ainsi qu'à tous les fondateurs, innovateurs qui ont fait de cette rencontre un véritable moment de co-creation.",
    published: "Publié en Mai 2026 — Startup Village",
    seeAll: "Voir toutes les actualités",
  },
  en: {
    back: "Back to news",
    title: "Innovation Talks: Italy–Tunisia, building innovation together",
    meta: ["May 2026", "Startup Village", "3 min read"],
    subtitle:
      "Alessandro Prunas, Ambassador of Italy: “Cross-border innovation is built on direct dialogue and the sharing of industrial expertise”",
    p1: "As part of our international outreach initiatives, Startup Village welcomed the Embassy of Italy in Tunis for the Innovation Talks. A look back at an evening of strategic exchange that brought together entrepreneurs, investors and institutional stakeholders around opportunities for technological cooperation between the two shores of the Mediterranean.",
    p2: "Boosting synergies between the Italian and Tunisian entrepreneurial ecosystems: that was the goal of this gathering. The event was elevated by the presence of a high-level official delegation and His Excellency Alessandro Prunas, Ambassador of Italy to Tunisia. In an inspiring address, the Ambassador highlighted the strategic importance of technological collaboration and the willingness of Italian institutions to support industrial and entrepreneurial ties with the Tunisian ecosystem.",
    p3: "Far from a classic protocol gathering, the evening offered a space for direct and authentic dialogue. One of the standout moments was the cross panel between two high-tech-value startups, brilliantly moderated by Wassim Ben Larbi.",
    p4: "The presentations and Q&A sessions with an engaged audience made it possible to unpack the common challenges faced by founders from both countries, particularly around access to European and African markets, regulatory compliance and technology transfer.",
    pull: "These moments of exchange are the true driving force of ecosystems: they build lasting bridges between ideas, talent and business opportunities",
    p5: "A big thank you to the Embassy of Italy in Tunisia, as well as to all the founders and innovators who made this gathering a true moment of co-creation.",
    published: "Published in May 2026 — Startup Village",
    seeAll: "View all news",
  },
  ar: {
    back: "العودة إلى الأخبار",
    title: "Innovation Talks: إيطاليا–تونس، نبني الابتكار معًا",
    meta: ["مايو 2026", "ستارتب فيليج", "قراءة 3 دقائق"],
    subtitle:
      "أليساندرو بروناس، سفير إيطاليا: «يقوم الابتكار العابر للحدود على الحوار المباشر وتبادل الخبرات الصناعية»",
    p1: "في إطار مبادراتنا للانفتاح الدولي، استضاف ستارتب فيليج سفارة إيطاليا في تونس بمناسبة Innovation Talks. عودة إلى أمسية تبادل استراتيجي جمعت روّاد أعمال ومستثمرين وفاعلين مؤسساتيين حول فرص التعاون التكنولوجي بين ضفّتي المتوسط.",
    p2: "تحفيز أوجه التآزر بين المنظومتين الريادية الإيطالية والتونسية: كان هذا هو هدف هذا اللقاء. تميّزت الفعالية بحضور وفد رسمي رفيع المستوى وسعادة السفير أليساندرو بروناس، سفير إيطاليا لدى تونس. وفي كلمته الملهمة، سلّط السفير الضوء على الأهمية الاستراتيجية للتعاون التكنولوجي وعلى استعداد المؤسسات الإيطالية لدعم الروابط الصناعية والريادية مع المنظومة التونسية.",
    p3: "بعيدًا عن اللقاءات البروتوكولية التقليدية، أتاحت هذه الأمسية فضاءً للحوار المباشر والصادق. وكانت إحدى أبرز اللحظات جلسة نقاش متقاطعة بين شركتين ناشئتين ذواتَي قيمة تكنولوجية عالية، أدارها ببراعة وسيم بن العربي.",
    p4: "سمحت العروض وجلسات الأسئلة والأجوبة مع جمهور متفاعل بتفكيك التحدّيات المشتركة التي يواجهها مؤسّسو الشركات في البلدين، ولا سيّما فيما يتعلّق بالوصول إلى الأسواق الأوروبية والإفريقية، والامتثال التنظيمي، ونقل التكنولوجيا.",
    pull: "هذه اللحظات من التبادل هي المحرّك الحقيقي للمنظومات: إذ تخلق جسورًا دائمة بين الأفكار والمواهب وفرص الأعمال",
    p5: "شكر جزيل لسفارة إيطاليا في تونس وكذلك لجميع المؤسّسين والمبتكرين الذين جعلوا من هذا اللقاء لحظة حقيقية للإبداع المشترك.",
    published: "نُشر في مايو 2026 — ستارتب فيليج",
    seeAll: "عرض كلّ الأخبار",
  },
} as const;

export default function InnovationTalksContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const news = withLang("/actualites", lang);

  return (
    <div className="article-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <article className="article">
        <div className="container">
          <Link className="back" href={news}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            {t.back}
          </Link>
          <h1>{t.title}</h1>
          <div className="meta">
            <span>{t.meta[0]}</span><span className="sep"></span>
            <span>{t.meta[1]}</span><span className="sep"></span>
            <span>{t.meta[2]}</span>
          </div>

          <div className="cover">
            <img src="/assets/images/actualites/innovation-talks.png" alt="Innovation Talks – Startup Village" />
          </div>

          <div className="prose">
            <p className="lead">{t.subtitle}</p>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>

            <div className="pull">{t.pull}</div>

            <p>{t.p5}</p>
          </div>

          <div className="end-cta">
            <span style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>{t.published}</span>
            <Link className="btn" href={news}>
              {t.seeAll}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
