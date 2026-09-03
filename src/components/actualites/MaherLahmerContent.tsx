/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "@/styles/actualites-article.css";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    back: "Retour aux actualités",
    title: "Maher Lahmer à Startup Village : IA, LLM et stratégie startup en Tunisie",
    meta: ["16 Apr 2026", "Startup Village Menzah", "Lecture 4 min"],
    lead: "Startup Village a accueilli Maher Lahmer pour une rencontre dédiée à l'intelligence artificielle générative, aux grands modèles de langage (LLM) et à la manière dont les jeunes startups tunisiennes peuvent en faire un véritable levier de croissance.",
    p1: "Devant une salle comble de fondateurs, d'ingénieurs et de curieux, l'échange a rapidement dépassé le simple effet de mode autour de l'IA pour s'attaquer aux vraies questions : par où commencer, quels cas d'usage privilégier, et comment construire une stratégie produit solide quand la technologie évolue chaque semaine.",
    h2a: "Comprendre les LLM avant de les déployer",
    p2: "Maher Lahmer a d'abord pris le temps de démystifier le fonctionnement des grands modèles de langage. Loin d'être des « boîtes magiques », ces modèles reposent sur des principes que tout entrepreneur tech gagne à comprendre pour évaluer ce qui est réellement réalisable — et ce qui relève encore du fantasme.",
    bullets: [
      "Identifier les tâches où l'IA générative apporte une vraie valeur ajoutée.",
      "Distinguer prototypage rapide et mise en production fiable.",
      "Anticiper les coûts d'inférence et les enjeux de données.",
    ],
    pull: "« L'IA n'est pas une fin en soi : c'est un accélérateur au service d'un problème client clairement défini. »",
    h2b: "Une stratégie startup ancrée dans le réel tunisien",
    p3: "La seconde partie de la rencontre s'est concentrée sur la stratégie. Comment une startup tunisienne peut-elle se positionner face aux géants internationaux ? La réponse, selon l'intervenant, tient dans la proximité avec le marché local, la rapidité d'exécution et la capacité à transformer une contrainte en avantage concurrentiel.",
    p4: "Les échanges avec la salle ont fait émerger des cas concrets : automatisation du support client, génération de contenu, analyse de documents ou encore assistants métiers spécialisés. Autant de pistes immédiatement actionnables pour les startups présentes.",
    h2c: "Un écosystème qui se construit ensemble",
    p5: "Cette session illustre l'esprit de Startup Village : créer des espaces où les talents se rencontrent, partagent et avancent ensemble. Les rencontres comme celle de Maher Lahmer nourrissent une communauté d'entrepreneurs prête à faire de l'IA un atout durable pour la Tunisie.",
    published: "Publié le 16 Apr 2026 — Startup Village",
    seeAll: "Voir toutes les actualités",
  },
  en: {
    back: "Back to news",
    title: "Maher Lahmer at Startup Village: AI, LLMs and startup strategy in Tunisia",
    meta: ["16 Apr 2026", "Startup Village Menzah", "4 min read"],
    lead: "Startup Village welcomed Maher Lahmer for a session dedicated to generative artificial intelligence, large language models (LLMs) and how young Tunisian startups can turn them into a real growth lever.",
    p1: "In front of a packed room of founders, engineers and curious minds, the conversation quickly moved beyond the hype around AI to tackle the real questions: where to start, which use cases to prioritize, and how to build a solid product strategy when the technology evolves every week.",
    h2a: "Understanding LLMs before deploying them",
    p2: "Maher Lahmer first took the time to demystify how large language models work. Far from being “magic boxes”, these models rely on principles that every tech entrepreneur benefits from understanding in order to assess what is truly achievable — and what still belongs to fantasy.",
    bullets: [
      "Identify the tasks where generative AI delivers real added value.",
      "Distinguish rapid prototyping from reliable production.",
      "Anticipate inference costs and data challenges.",
    ],
    pull: "“AI is not an end in itself: it's an accelerator at the service of a clearly defined customer problem.”",
    h2b: "A startup strategy rooted in the Tunisian reality",
    p3: "The second part of the session focused on strategy. How can a Tunisian startup position itself against international giants? The answer, according to the speaker, lies in closeness to the local market, speed of execution and the ability to turn a constraint into a competitive advantage.",
    p4: "Discussions with the audience surfaced concrete cases: customer support automation, content generation, document analysis and specialized business assistants — as many immediately actionable avenues for the startups present.",
    h2c: "An ecosystem built together",
    p5: "This session embodies the spirit of Startup Village: creating spaces where talents meet, share and move forward together. Encounters like Maher Lahmer's nourish a community of entrepreneurs ready to make AI a lasting asset for Tunisia.",
    published: "Published on 16 Apr 2026 — Startup Village",
    seeAll: "View all news",
  },
  ar: {
    back: "العودة إلى الأخبار",
    title: "ماهر لحمر في ستارتب فيليج: الذكاء الاصطناعي ونماذج اللغة الكبيرة واستراتيجية الشركات الناشئة في تونس",
    meta: ["16 أبريل 2026", "ستارتب فيليج المنزه", "قراءة 4 دقائق"],
    lead: "استضاف ستارتب فيليج ماهر لحمر في لقاء مخصّص للذكاء الاصطناعي التوليدي ونماذج اللغة الكبيرة (LLM) وكيف يمكن للشركات الناشئة التونسية الشابة أن تجعل منها رافعة حقيقية للنموّ.",
    p1: "أمام قاعة غاصّة بالمؤسّسين والمهندسين والفضوليين، تجاوز النقاش سريعًا مجرّد الموضة حول الذكاء الاصطناعي ليعالج الأسئلة الحقيقية: من أين نبدأ، وأيّ حالات استخدام نعطيها الأولوية، وكيف نبني استراتيجية منتج متينة بينما تتطوّر التقنية كلّ أسبوع.",
    h2a: "فهم نماذج اللغة الكبيرة قبل نشرها",
    p2: "بدأ ماهر لحمر بتبسيط طريقة عمل نماذج اللغة الكبيرة. فهذه النماذج، بعيدًا عن كونها «صناديق سحرية»، تقوم على مبادئ يستفيد كلّ رائد أعمال تقني من فهمها لتقييم ما هو قابل للتحقيق فعلًا — وما لا يزال ضربًا من الخيال.",
    bullets: [
      "تحديد المهام التي يضيف فيها الذكاء الاصطناعي التوليدي قيمة حقيقية.",
      "التمييز بين النمذجة السريعة والإنتاج الموثوق.",
      "توقّع تكاليف الاستدلال وتحدّيات البيانات.",
    ],
    pull: "«الذكاء الاصطناعي ليس غاية في حدّ ذاته: إنه مسرّع في خدمة مشكلة عميل محدّدة بوضوح.»",
    h2b: "استراتيجية شركة ناشئة متجذّرة في الواقع التونسي",
    p3: "تركّز الجزء الثاني من اللقاء على الاستراتيجية. كيف يمكن لشركة ناشئة تونسية أن تتموضع أمام العمالقة الدوليين؟ الجواب، بحسب المتحدّث، يكمن في القرب من السوق المحلّي وسرعة التنفيذ والقدرة على تحويل القيد إلى ميزة تنافسية.",
    p4: "أبرزت النقاشات مع الحضور حالات ملموسة: أتمتة دعم العملاء، توليد المحتوى، تحليل المستندات أو المساعدين المتخصّصين للأعمال — وكلّها مسارات قابلة للتطبيق فورًا للشركات الناشئة الحاضرة.",
    h2c: "منظومة تُبنى معًا",
    p5: "تجسّد هذه الجلسة روح ستارتب فيليج: خلق فضاءات يلتقي فيها المواهب ويتشاركون ويتقدّمون معًا. لقاءات مثل لقاء ماهر لحمر تغذّي مجتمعًا من روّاد الأعمال مستعدًّا لجعل الذكاء الاصطناعي رصيدًا دائمًا لتونس.",
    published: "نُشر في 16 أبريل 2026 — ستارتب فيليج",
    seeAll: "عرض كلّ الأخبار",
  },
} as const;

export default function MaherLahmerContent({ lang = "fr" }: { lang?: Lang }) {
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
            <img src="/assets/images/actualites/maher-lahmer.png" alt="Maher Lahmer at Startup Village" />
          </div>

          <div className="prose">
            <p className="lead">{t.lead}</p>
            <p>{t.p1}</p>

            <h2>{t.h2a}</h2>
            <p>{t.p2}</p>
            <ul>
              {t.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="pull">{t.pull}</div>

            <h2>{t.h2b}</h2>
            <p>{t.p3}</p>
            <p>{t.p4}</p>

            <h2>{t.h2c}</h2>
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
