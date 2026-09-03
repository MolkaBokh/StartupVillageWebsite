import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Soft Landing" service page — replaces the generic "Bientôt
 * disponible" placeholder for this one offer only. FR wording is supplied
 * verbatim by the business; EN/AR are natural professional translations
 * with the same content, no additions or omissions.
 */

const BASE = "/assets/images/offres-services";

type Item = { title: string; text: string };
type Step = { number: string; title: string; text: string };
type Faq = { q: string; a: string };

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  heroP4: string;
  whatTitle: string;
  whatP1: string;
  whatP2: string;
  whatP3: string;
  whyTunisiaTitle: string;
  whyTunisiaP1: string;
  whyTunisiaP2: string;
  whyTunisiaP3: string;
  bringTitle: string;
  bringIntro: string;
  bringItems: Item[];
  bringBtn: string;
  gatewayTitle: string;
  gatewayP1: string;
  gatewayIntro: string;
  gatewayStats: string[];
  gatewayClosing: string;
  audienceTitle: string;
  audienceItems: string[];
  journeyTitle: string;
  journeySteps: Step[];
  faqTitle: string;
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn1: string;
  ctaBtn2: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Soft Landing en Tunisie : entrez dans un nouvel écosystème avec les bons repères",
    heroP1: "Développer son activité sur un nouveau marché ne consiste pas simplement à y installer un bureau.",
    heroP2: "Il faut comprendre son environnement, identifier les bons interlocuteurs, créer un réseau local et trouver les premières opportunités.",
    heroP3: "Avec son offre Soft Landing, Startup Village accompagne les startups, entreprises et organisations internationales qui souhaitent découvrir, tester ou développer leur présence en Tunisie.",
    heroP4: "Notre objectif : vous permettre d'aborder le marché tunisien progressivement, avec un accompagnement local et un accès direct à un écosystème entrepreneurial dynamique.",
    whatTitle: "Qu'est-ce que le Soft Landing ?",
    whatP1: "Le Soft Landing désigne un accompagnement destiné aux entreprises et startups qui souhaitent s'implanter sur un nouveau marché tout en limitant les risques et les difficultés liés à leur expansion.",
    whatP2: "Plutôt que de construire immédiatement une présence locale complète, l'entreprise peut commencer par découvrir son nouvel environnement, tester son marché, rencontrer ses premiers partenaires et comprendre les spécificités de l'écosystème.",
    whatP3: "Startup Village agit comme un point d'entrée local pour faciliter cette première implantation en Tunisie.",
    whyTunisiaTitle: "Pourquoi choisir la Tunisie comme nouveau marché ?",
    whyTunisiaP1: "La Tunisie constitue un environnement particulièrement intéressant pour les entreprises souhaitant développer leur activité en Afrique, dans la région MENA ou depuis l'Europe vers de nouveaux marchés.",
    whyTunisiaP2: "Mais entrer sur un nouveau marché nécessite surtout de comprendre qui rencontrer, comment fonctionner et où trouver les bonnes opportunités.",
    whyTunisiaP3: "C'est précisément là que notre approche Soft Landing intervient.",
    bringTitle: "Ce que Startup Village peut vous apporter",
    bringIntro: "Votre parcours de Soft Landing peut être adapté à vos objectifs et à votre niveau d'implantation.",
    bringItems: [
      { title: "Un point d'ancrage local", text: "Disposez temporairement d'un environnement professionnel pour travailler, rencontrer vos partenaires et commencer à développer votre activité en Tunisie." },
      { title: "Une immersion dans l'écosystème", text: "Startup Village vous permet d'évoluer au contact d'entrepreneurs, startups, entreprises, investisseurs, organisations internationales et acteurs de l'innovation." },
      { title: "Une orientation sur le marché local", text: "Comprenez mieux l'environnement entrepreneurial tunisien et identifiez les interlocuteurs pertinents pour votre développement." },
      { title: "Un réseau professionnel", text: "Nous pouvons faciliter les mises en relation avec des acteurs de notre réseau selon la nature de votre projet et vos besoins." },
      { title: "Des opportunités de networking", text: "Participez à des événements, rencontres et activités organisés au sein de Startup Village pour commencer à construire votre réseau local." },
      { title: "Un accompagnement vers les bons partenaires", text: "Selon vos besoins, nous pouvons vous orienter vers les ressources et partenaires pertinents pour les différentes étapes de votre implantation." },
    ],
    bringBtn: "Soft Landing",
    gatewayTitle: "Une porte d'entrée vers l'écosystème entrepreneurial tunisien",
    gatewayP1: "Startup Village est naturellement positionné comme un point de rencontre entre les acteurs locaux et internationaux.",
    gatewayIntro: "Chaque année, nous accueillons :",
    gatewayStats: ["+100 événements", "+1 000 visiteurs", "50+ délégations internationales", "20+ pays représentés", "500+ Villageois"],
    gatewayClosing: "Cette dimension internationale fait de Startup Village un environnement particulièrement adapté aux entreprises qui souhaitent comprendre le marché tunisien et commencer à y construire leur réseau.",
    audienceTitle: "Pour qui ?",
    audienceItems: [
      "Startups internationales souhaitant explorer le marché tunisien",
      "Entreprises étrangères envisageant une implantation en Tunisie",
      "Entreprises tunisiennes souhaitant préparer leur expansion vers de nouveaux marchés",
      "Programmes d'internationalisation",
      "Organisations internationales",
      "Entrepreneurs internationaux",
      "Investisseurs et acteurs de l'écosystème",
    ],
    journeyTitle: "Un parcours adapté à votre projet",
    journeySteps: [
      { number: "01", title: "Découvrir", text: "Comprendre l'écosystème tunisien et identifier les premières opportunités." },
      { number: "02", title: "S'installer", text: "Disposer d'un point d'ancrage professionnel pour commencer votre activité localement." },
      { number: "03", title: "Se connecter", text: "Rencontrer les entrepreneurs, entreprises, partenaires et acteurs pertinents pour votre projet." },
      { number: "04", title: "Tester", text: "Explorer le marché, valider vos hypothèses et identifier vos premières opportunités commerciales." },
      { number: "05", title: "Développer", text: "Structurer progressivement votre présence et votre activité en Tunisie." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Qu'est-ce qu'un Soft Landing pour une startup ?", a: "Le Soft Landing est un accompagnement permettant à une startup ou une entreprise de découvrir et d'intégrer progressivement un nouveau marché avec un accompagnement local, plutôt que de s'y implanter immédiatement de manière complète." },
      { q: "Startup Village accompagne-t-il les entreprises étrangères ?", a: "Oui. Notre offre Soft Landing s'adresse notamment aux entreprises et startups internationales souhaitant explorer le marché tunisien et développer leur réseau local." },
      { q: "Peut-on disposer d'un espace de travail pendant le Soft Landing ?", a: "Oui. Startup Village peut constituer un point d'ancrage professionnel permettant aux entreprises internationales de travailler depuis la Tunisie pendant leur phase d'exploration ou d'implantation." },
      { q: "Startup Village peut-il mettre une entreprise en relation avec des acteurs locaux ?", a: "Selon les besoins et le projet, nous pouvons faciliter des mises en relation avec des entrepreneurs, entreprises, partenaires et acteurs de notre réseau." },
      { q: "Le Soft Landing garantit-il la réussite d'une implantation en Tunisie ?", a: "Non. Le Soft Landing vise à faciliter l'exploration et l'intégration d'un nouveau marché en réduisant les frictions liées à l'implantation. Les résultats dépendent naturellement du projet, de son marché et de sa stratégie." },
      { q: "Le programme est-il réservé aux startups ?", a: "Non. L'offre peut également s'adresser aux PME, entreprises établies, organisations internationales et autres structures souhaitant développer une présence en Tunisie." },
    ],
    ctaTitle: "Vous envisagez de vous développer en Tunisie ?",
    ctaText: "Parlons de votre projet et construisons ensemble votre première étape sur le marché tunisien.",
    ctaBtn1: "Demander un devis",
    ctaBtn2: "Nous contacter",
  },
  en: {
    h1: "Soft Landing in Tunisia: enter a new ecosystem with the right bearings",
    heroP1: "Growing your business in a new market isn't just about setting up an office there.",
    heroP2: "You need to understand the environment, identify the right contacts, build a local network and find your first opportunities.",
    heroP3: "With its Soft Landing offer, Startup Village supports startups, companies and international organizations wishing to discover, test or develop their presence in Tunisia.",
    heroP4: "Our goal: to help you approach the Tunisian market gradually, with local support and direct access to a dynamic entrepreneurial ecosystem.",
    whatTitle: "What is Soft Landing?",
    whatP1: "Soft Landing refers to support designed for companies and startups wishing to establish themselves in a new market while limiting the risks and difficulties associated with their expansion.",
    whatP2: "Rather than immediately building a complete local presence, a company can start by discovering its new environment, testing its market, meeting its first partners and understanding the specifics of the ecosystem.",
    whatP3: "Startup Village acts as a local entry point to facilitate this initial establishment in Tunisia.",
    whyTunisiaTitle: "Why choose Tunisia as a new market?",
    whyTunisiaP1: "Tunisia is a particularly interesting environment for companies wishing to develop their business in Africa, in the MENA region, or from Europe toward new markets.",
    whyTunisiaP2: "But entering a new market above all requires understanding who to meet, how things work and where to find the right opportunities.",
    whyTunisiaP3: "That is precisely where our Soft Landing approach comes in.",
    bringTitle: "What Startup Village can offer you",
    bringIntro: "Your Soft Landing journey can be tailored to your goals and your stage of establishment.",
    bringItems: [
      { title: "A local anchor point", text: "Have temporary access to a professional environment to work, meet your partners and start developing your business in Tunisia." },
      { title: "Immersion in the ecosystem", text: "Startup Village lets you engage with entrepreneurs, startups, companies, investors, international organizations and innovation stakeholders." },
      { title: "Guidance on the local market", text: "Better understand the Tunisian entrepreneurial environment and identify the relevant contacts for your development." },
      { title: "A professional network", text: "We can facilitate introductions to stakeholders in our network according to the nature of your project and your needs." },
      { title: "Networking opportunities", text: "Take part in events, meetings and activities organized within Startup Village to start building your local network." },
      { title: "Guidance toward the right partners", text: "Depending on your needs, we can direct you to the relevant resources and partners for the different stages of your establishment." },
    ],
    bringBtn: "Soft Landing",
    gatewayTitle: "A gateway to the Tunisian entrepreneurial ecosystem",
    gatewayP1: "Startup Village is naturally positioned as a meeting point between local and international stakeholders.",
    gatewayIntro: "Every year, we welcome:",
    gatewayStats: ["+100 events", "+1,000 visitors", "50+ international delegations", "20+ countries represented", "500+ Villagers"],
    gatewayClosing: "This international dimension makes Startup Village a particularly suitable environment for companies wishing to understand the Tunisian market and start building their network there.",
    audienceTitle: "Who is it for?",
    audienceItems: [
      "International startups wishing to explore the Tunisian market",
      "Foreign companies considering establishing a presence in Tunisia",
      "Tunisian companies preparing their expansion into new markets",
      "Internationalization programs",
      "International organizations",
      "International entrepreneurs",
      "Investors and ecosystem stakeholders",
    ],
    journeyTitle: "A journey tailored to your project",
    journeySteps: [
      { number: "01", title: "Discover", text: "Understand the Tunisian ecosystem and identify the first opportunities." },
      { number: "02", title: "Set up", text: "Have a professional anchor point to start your activity locally." },
      { number: "03", title: "Connect", text: "Meet the entrepreneurs, companies, partners and stakeholders relevant to your project." },
      { number: "04", title: "Test", text: "Explore the market, validate your hypotheses and identify your first business opportunities." },
      { number: "05", title: "Develop", text: "Progressively structure your presence and your business in Tunisia." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "What is a Soft Landing for a startup?", a: "Soft Landing is support that allows a startup or company to discover and progressively integrate into a new market with local support, rather than establishing itself there fully right away." },
      { q: "Does Startup Village support foreign companies?", a: "Yes. Our Soft Landing offer is aimed in particular at international companies and startups wishing to explore the Tunisian market and develop their local network." },
      { q: "Can you have a workspace during the Soft Landing?", a: "Yes. Startup Village can serve as a professional anchor point allowing international companies to work from Tunisia during their exploration or establishment phase." },
      { q: "Can Startup Village put a company in touch with local stakeholders?", a: "Depending on the needs and the project, we can facilitate introductions to entrepreneurs, companies, partners and stakeholders in our network." },
      { q: "Does Soft Landing guarantee the success of an establishment in Tunisia?", a: "No. Soft Landing aims to facilitate the exploration and integration of a new market by reducing the friction associated with establishment. Results naturally depend on the project, its market and its strategy." },
      { q: "Is the program reserved for startups?", a: "No. The offer can also be aimed at SMEs, established companies, international organizations and other structures wishing to develop a presence in Tunisia." },
    ],
    ctaTitle: "Are you considering expanding into Tunisia?",
    ctaText: "Let's talk about your project and build your first step in the Tunisian market together.",
    ctaBtn1: "Request a quote",
    ctaBtn2: "Contact us",
  },
  ar: {
    h1: "Soft Landing في تونس: ادخلوا منظومة جديدة بالمعالم الصحيحة",
    heroP1: "تطوير نشاطكم في سوق جديدة لا يقتصر على فتح مكتب فيها.",
    heroP2: "يجب فهم البيئة المحيطة، وتحديد المحاورين المناسبين، وبناء شبكة محلية، وإيجاد أولى الفرص.",
    heroP3: "من خلال عرض Soft Landing، يرافق ستارتب فيليج الشركات الناشئة والشركات والمنظمات الدولية الراغبة في اكتشاف حضورها في تونس أو اختباره أو تطويره.",
    heroP4: "هدفنا: تمكينكم من مقاربة السوق التونسية تدريجيًا، بمرافقة محلية ووصول مباشر إلى منظومة ريادية نشطة.",
    whatTitle: "ما هو Soft Landing؟",
    whatP1: "يشير Soft Landing إلى مرافقة موجَّهة للشركات والشركات الناشئة الراغبة في التموقع في سوق جديدة مع الحدّ من المخاطر والصعوبات المرتبطة بتوسّعها.",
    whatP2: "بدلًا من بناء حضور محلّي كامل فورًا، يمكن للشركة أن تبدأ باكتشاف بيئتها الجديدة واختبار سوقها ولقاء أوّل شركائها وفهم خصوصيّات المنظومة.",
    whatP3: "يعمل ستارتب فيليج كنقطة دخول محلّية لتسهيل هذا التموقع الأوّلي في تونس.",
    whyTunisiaTitle: "لماذا اختيار تونس كسوق جديدة؟",
    whyTunisiaP1: "تشكّل تونس بيئة ذات أهمّية خاصة للشركات الراغبة في تطوير نشاطها في إفريقيا أو في منطقة الشرق الأوسط وشمال إفريقيا (MENA) أو انطلاقًا من أوروبا نحو أسواق جديدة.",
    whyTunisiaP2: "لكنّ دخول سوق جديدة يتطلّب قبل كلّ شيء فهم من يجب لقاؤه وكيفية العمل وأين تكمن الفرص المناسبة.",
    whyTunisiaP3: "وهنا بالضبط يتدخّل نهجنا في Soft Landing.",
    bringTitle: "ما الذي يمكن لستارتب فيليج تقديمه لكم",
    bringIntro: "يمكن تكييف مسار Soft Landing الخاص بكم مع أهدافكم ومستوى تموقعكم.",
    bringItems: [
      { title: "نقطة ارتكاز محلّية", text: "استفيدوا مؤقّتًا من بيئة احترافية للعمل ولقاء شركائكم وبدء تطوير نشاطكم في تونس." },
      { title: "انغماس في المنظومة", text: "يتيح لكم ستارتب فيليج التطوّر على تماسّ مع روّاد الأعمال والشركات الناشئة والشركات والمستثمرين والمنظمات الدولية وفاعلي الابتكار." },
      { title: "توجيه بخصوص السوق المحلّية", text: "افهموا بشكل أفضل البيئة الريادية التونسية وحدّدوا المحاورين المناسبين لتطوّركم." },
      { title: "شبكة مهنية", text: "يمكننا تسهيل التواصل مع فاعلين من شبكتنا حسب طبيعة مشروعكم واحتياجاتكم." },
      { title: "فرص للتواصل", text: "شاركوا في فعاليات ولقاءات وأنشطة منظَّمة داخل ستارتب فيليج للبدء في بناء شبكتكم المحلّية." },
      { title: "مرافقة نحو الشركاء المناسبين", text: "حسب احتياجاتكم، يمكننا توجيهكم نحو الموارد والشركاء المناسبين لمختلف مراحل تموقعكم." },
    ],
    bringBtn: "Soft Landing",
    gatewayTitle: "بوّابة نحو المنظومة الريادية التونسية",
    gatewayP1: "يتموقع ستارتب فيليج بشكل طبيعي كنقطة لقاء بين الفاعلين المحلّيين والدوليين.",
    gatewayIntro: "نستقبل كلّ سنة:",
    gatewayStats: ["+100 فعالية", "+1000 زائر", "+50 وفدًا دوليًا", "+20 دولة ممثَّلة", "+500 من سكان القرية"],
    gatewayClosing: "هذا البُعد الدولي يجعل من ستارتب فيليج بيئة مناسبة بشكل خاص للشركات الراغبة في فهم السوق التونسية والبدء في بناء شبكتها فيها.",
    audienceTitle: "لمن هذا موجَّه؟",
    audienceItems: [
      "شركات ناشئة دولية راغبة في استكشاف السوق التونسية",
      "شركات أجنبية تفكّر في التموقع في تونس",
      "شركات تونسية راغبة في تحضير توسّعها نحو أسواق جديدة",
      "برامج التدويل",
      "منظمات دولية",
      "روّاد أعمال دوليون",
      "مستثمرون وفاعلون في المنظومة",
    ],
    journeyTitle: "مسار يتكيّف مع مشروعكم",
    journeySteps: [
      { number: "01", title: "اكتشاف", text: "فهم المنظومة التونسية وتحديد أولى الفرص." },
      { number: "02", title: "التموقع", text: "الاستفادة من نقطة ارتكاز احترافية لبدء نشاطكم محليًا." },
      { number: "03", title: "التواصل", text: "لقاء روّاد الأعمال والشركات والشركاء والفاعلين المناسبين لمشروعكم." },
      { number: "04", title: "الاختبار", text: "استكشاف السوق والتحقّق من فرضيّاتكم وتحديد أولى فرصكم التجارية." },
      { number: "05", title: "التطوّر", text: "هيكلة حضوركم ونشاطكم في تونس تدريجيًا." },
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "ما هو الـ Soft Landing بالنسبة لشركة ناشئة؟", a: "Soft Landing هو مرافقة تتيح لشركة ناشئة أو شركة اكتشاف سوق جديدة والاندماج فيها تدريجيًا بمرافقة محلّية، بدلًا من التموقع فيها بشكل كامل وفوري." },
      { q: "هل يرافق ستارتب فيليج الشركات الأجنبية؟", a: "نعم. يوجَّه عرض Soft Landing لدينا بشكل خاص للشركات والشركات الناشئة الدولية الراغبة في استكشاف السوق التونسية وتطوير شبكتها المحلّية." },
      { q: "هل يمكن الاستفادة من فضاء عمل خلال الـ Soft Landing؟", a: "نعم. يمكن أن يشكّل ستارتب فيليج نقطة ارتكاز احترافية تتيح للشركات الدولية العمل انطلاقًا من تونس خلال مرحلة استكشافها أو تموقعها." },
      { q: "هل يمكن لستارتب فيليج ربط شركة بفاعلين محلّيين؟", a: "حسب الاحتياجات والمشروع، يمكننا تسهيل التواصل مع روّاد أعمال وشركات وشركاء وفاعلين من شبكتنا." },
      { q: "هل يضمن الـ Soft Landing نجاح التموقع في تونس؟", a: "لا. يهدف الـ Soft Landing إلى تسهيل استكشاف سوق جديدة والاندماج فيها من خلال تقليص الاحتكاكات المرتبطة بالتموقع. تعتمد النتائج طبيعيًا على المشروع وسوقه واستراتيجيّته." },
      { q: "هل البرنامج مخصّص للشركات الناشئة فقط؟", a: "لا. يمكن أن يوجَّه العرض أيضًا للمؤسسات الصغيرة والمتوسطة والشركات الراسخة والمنظمات الدولية وهياكل أخرى راغبة في تطوير حضور في تونس." },
    ],
    ctaTitle: "هل تفكّرون في التطوّر في تونس؟",
    ctaText: "لنتحدّث عن مشروعكم ولنبنِ معًا خطوتكم الأولى في السوق التونسية.",
    ctaBtn1: "طلب عرض سعر",
    ctaBtn2: "اتصل بنا",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SoftLandingContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contactSoftLanding = withLang("/contact?type=softlanding", lang);
  const contactQuote = withLang("/contact?type=quote", lang);
  const contactInfo = withLang("/contact?type=info", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/soft-landing.png`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.6) 0%, rgba(15,39,72,0.82) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[48px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP4}</p>
        </div>
      </section>

      {/* 2. QU'EST-CE QUE LE SOFT LANDING */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whatTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whatP1}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whatP2}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whatP3}</p>
        </div>
      </section>

      {/* 3. POURQUOI CHOISIR LA TUNISIE */}
      <section className="bg-slate-50/60 py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whyTunisiaTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyTunisiaP1}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyTunisiaP2}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyTunisiaP3}</p>
        </div>
      </section>

      {/* 4. CE QUE STARTUP VILLAGE PEUT VOUS APPORTER */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.bringTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.bringIntro}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.bringItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sv-navy/10 bg-slate-50/60 px-6 py-7">
                <h3 className="text-base font-bold text-sv-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/70">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={contactSoftLanding}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.bringBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UNE PORTE D'ENTRÉE VERS L'ÉCOSYSTÈME */}
      <section className="bg-sv-navy py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.gatewayTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{t.gatewayP1}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{t.gatewayIntro}</p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {t.gatewayStats.map((stat) => (
              <div key={stat} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center">
                <span className="text-base font-bold text-white sm:text-lg">{stat}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70">{t.gatewayClosing}</p>
        </div>
      </section>

      {/* 6. POUR QUI */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.audienceTitle}</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {t.audienceItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sv-navy/15 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UN PARCOURS ADAPTÉ À VOTRE PROJET */}
      <section className="bg-slate-50/60 py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.journeyTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.journeySteps.map((step) => (
              <div key={step.number} className="relative rounded-2xl border border-sv-navy/10 bg-white px-6 py-8 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sv-cyan-btn text-base font-bold text-white">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-bold text-sv-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <FaqAccordion items={t.faq} />
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{t.ctaText}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={contactQuote}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.ctaBtn1}
            </Link>
            <Link
              href={contactInfo}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
