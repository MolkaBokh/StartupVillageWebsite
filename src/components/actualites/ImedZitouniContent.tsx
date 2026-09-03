/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "@/styles/actualites-article.css";
import { withLang, type Lang } from "@/config/navigation";

const T = {
  fr: {
    back: "Retour aux actualités",
    title: "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens",
    meta: ["02 May 2025", "Startup Village El Menzah", "Lecture 2 min"],
    kicker: "TALK SHOW with Imed Zitouni, expert IA chez Google",
    subtitle: "Startup Village et Express FM au cœur de l'IA mondiale avec Imed Zitouni",
    p1: "Comment passe-t-on des bancs de l'ENSI aux sommets de la Tech mondiale chez Google ? C’est le parcours inspirant qui a captivé le Startup Village El Menzah le vendredi 2 mai 2025. Dès 7h30, notre Salle Avant-Première s'est transformée en un pôle d'émulation technologique majeur à l'occasion de l'émission EXPRESSO, diffusée en direct avec l'incontournable Wassim Ben Larbi.",
    p2: "Pour ce rendez-vous exceptionnel, nous avons eu le privilège d'accueillir un invité de marque : Imed Zitouni, actuellement Director of Engineering - GenAI, ML & Search chez Google. Au micro d'Express FM et face à notre communauté, cette figure emblématique du génie tunisien a retracé sa trajectoire unique, offrant un éclairage stratégique sur les coulisses, l'évolution et l'avenir de l'intelligence artificielle à l'échelle planétaire.",
    p3: "Cette matinée d'échange intense a permis aux startupeurs, ingénieurs et dirigeants présents de décrypter les standards d'excellence des géants de la tech et de nourrir leurs propres ambitions d'innovation.",
    p4: "Un immense merci à Imed Zitouni pour son partage d'expérience inspirant, à Wassim Ben Larbi pour ce grand moment de radio, ainsi qu'à tous les participants pour leur forte mobilisation !",
    published: "Publié le 02 May 2025 — Startup Village",
    seeAll: "Voir toutes les actualités",
  },
  en: {
    back: "Back to news",
    title: "Imed Zitouni, Google: Artificial intelligence, innovation and Tunisian talent",
    meta: ["02 May 2025", "Startup Village El Menzah", "2 min read"],
    kicker: "TALK SHOW with Imed Zitouni, AI expert at Google",
    subtitle: "Startup Village and Express FM at the heart of global AI with Imed Zitouni",
    p1: "How does one go from the classrooms of ENSI to the heights of global Tech at Google? That's the inspiring journey that captivated Startup Village El Menzah on Friday, May 2, 2025. From 7:30 a.m., our Salle Avant-Première turned into a major hub of technological excitement for the EXPRESSO show, broadcast live with the ever-popular Wassim Ben Larbi.",
    p2: "For this exceptional gathering, we had the privilege of welcoming a distinguished guest: Imed Zitouni, currently Director of Engineering - GenAI, ML & Search at Google. On Express FM's airwaves and before our community, this emblematic figure of Tunisian talent retraced his unique journey, offering strategic insight into the behind-the-scenes, evolution and future of artificial intelligence on a global scale.",
    p3: "This morning of intense exchange allowed the startuppers, engineers and executives present to unpack the standards of excellence set by tech giants and fuel their own innovation ambitions.",
    p4: "A huge thank you to Imed Zitouni for his inspiring shared experience, to Wassim Ben Larbi for this great radio moment, and to all the participants for their strong turnout!",
    published: "Published on 02 May 2025 — Startup Village",
    seeAll: "View all news",
  },
  ar: {
    back: "العودة إلى الأخبار",
    title: "عماد زيتوني من Google: الذكاء الاصطناعي والابتكار والمواهب التونسية",
    meta: ["02 مايو 2025", "ستارتب فيليج المنزه", "قراءة دقيقتين"],
    kicker: "TALK SHOW مع عماد زيتوني، خبير الذكاء الاصطناعي في Google",
    subtitle: "ستارتب فيليج و Express FM في قلب الذكاء الاصطناعي العالمي مع عماد زيتوني",
    p1: "كيف ينتقل المرء من مقاعد المدرسة الوطنية لعلوم الإعلامية (ENSI) إلى قمم التكنولوجيا العالمية في Google؟ هذه هي المسيرة الملهمة التي شدّت انتباه ستارتب فيليج المنزه يوم الجمعة 2 مايو 2025. ومنذ الساعة 7:30 صباحًا، تحوّلت قاعتنا Salle Avant-Première إلى قطب رئيسي للحماس التكنولوجي بمناسبة برنامج EXPRESSO، الذي بُثّ مباشرة برفقة وسيم بن العربي الذي لا غنى عنه.",
    p2: "بمناسبة هذا اللقاء الاستثنائي، حظينا بشرف استضافة ضيف مرموق: عماد زيتوني، الذي يشغل حاليًا منصب Director of Engineering - GenAI, ML & Search في Google. على ميكروفون Express FM وأمام مجتمعنا، استعرضت هذه الشخصية البارزة من العبقرية التونسية مسيرتها الفريدة، مقدّمةً رؤية استراتيجية حول كواليس الذكاء الاصطناعي وتطوّره ومستقبله على المستوى العالمي.",
    p3: "سمحت هذه الصبيحة المفعمة بالتبادل المكثّف لروّاد الشركات الناشئة والمهندسين والمسؤولين الحاضرين بتفكيك معايير التميّز لدى عمالقة التكنولوجيا وتغذية طموحاتهم الخاصة في الابتكار.",
    p4: "شكر جزيل لعماد زيتوني على مشاركته الملهمة لتجربته، ولوسيم بن العربي على هذه اللحظة الإذاعية الرائعة، وكذلك لجميع المشاركين على حضورهم القوي!",
    published: "نُشر في 02 مايو 2025 — ستارتب فيليج",
    seeAll: "عرض كلّ الأخبار",
  },
} as const;

export default function ImedZitouniContent({ lang = "fr" }: { lang?: Lang }) {
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
            <img src="/assets/images/actualites/imed-zitouni.png" alt="Imed Zitouni – Startup Village" />
          </div>

          <div className="prose">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--blue)", marginBottom: "10px" }}>
              {t.kicker}
            </p>
            <p className="lead">{t.subtitle}</p>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
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
