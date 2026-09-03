import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Domiciliation" service page — replaces the generic
 * "Bientôt disponible" placeholder for this one offer only. FR wording is
 * supplied verbatim by the business; EN/AR are natural professional
 * translations with the same content, no additions or omissions.
 */

const BASE = "/assets/images/offres-services";

type Stat = { value: string; label: string };
type Step = { title: string; text: string };
type Faq = { q: string; a: string };

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  whyTitle: string;
  whyP1: string;
  whyP2: string;
  whyP3: string;
  whyP4: string;
  stats: Stat[];
  advantagesTitle: string;
  advantagesP1: string;
  advantagesP2: string;
  advantages: string[];
  solutionTitle: string;
  solutionP1: string;
  solutionP2: string;
  profiles: string[];
  ecosystemTitle: string;
  ecosystemP1: string;
  ecosystemP2: string;
  ecosystem: string[];
  ecosystemClosing: string;
  stepsTitle: string;
  steps: Step[];
  faqTitle: string;
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn1: string;
  ctaBtn2: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Domiciliez votre entreprise au cœur de l'écosystème entrepreneurial tunisien",
    heroP1: "Créer une entreprise est une étape importante. Lui offrir une adresse professionnelle reconnue l'est tout autant.",
    heroP2: "Avec le service de domiciliation de Startup Village, vous bénéficiez d'une adresse professionnelle à Tunis tout en intégrant un environnement où entrepreneurs, startups, entreprises, investisseurs et organisations internationales se rencontrent chaque jour.",
    heroP3: "Bien plus qu'une simple adresse administrative, Startup Village vous ouvre les portes d'un écosystème vivant qui favorise les échanges, les opportunités et le développement de votre activité.",
    whyTitle: "Pourquoi choisir Startup Village pour votre domiciliation ?",
    whyP1: "Une adresse est souvent le premier contact entre votre entreprise et vos clients, partenaires ou investisseurs.",
    whyP2: "En choisissant Startup Village, vous installez votre siège social dans un lieu reconnu pour son rôle central dans l'innovation et l'entrepreneuriat en Tunisie.",
    whyP3: "Chaque année, notre communauté accueille des événements, des visiteurs, des délégations internationales, ainsi qu'une communauté active de villageois.",
    whyP4: "Votre entreprise bénéficie ainsi d'une adresse qui inspire confiance et d'un environnement propice aux connexions professionnelles.",
    stats: [
      { value: "100", label: "Événements" },
      { value: "1 000", label: "Visiteurs" },
      { value: "50", label: "Délégations internationales" },
      { value: "20", label: "Pays" },
      { value: "500", label: "Villageois" },
    ],
    advantagesTitle: "Les avantages de notre service de domiciliation",
    advantagesP1: "Notre offre de domiciliation a été pensée pour répondre aux besoins des entrepreneurs, startups et entreprises à la recherche d'une solution professionnelle, flexible et évolutive.",
    advantagesP2: "En domiciliant votre entreprise chez Startup Village, vous profitez notamment de :",
    advantages: [
      "Une adresse professionnelle à Tunis pour votre siège social",
      "La réception de votre courrier",
      "Des tarifs préférentiels sur la réservation des salles de réunion",
      "La possibilité d'accueillir vos clients dans un environnement professionnel",
      "Un accès à une communauté dynamique d'entrepreneurs et d'entreprises",
      "Un cadre reconnu par les acteurs de l'innovation et de l'entrepreneuriat",
    ],
    solutionTitle: "Une solution adaptée à chaque étape de votre développement",
    solutionP1: "Que vous soyez en phase de création ou déjà en activité, notre service de domiciliation s'adapte à vos besoins.",
    solutionP2: "Il est particulièrement adapté aux :",
    profiles: [
      "Entrepreneurs en création d'entreprise",
      "Startups",
      "Freelances souhaitant professionnaliser leur activité",
      "PME",
      "Grandes entreprises ouvrant une implantation en Tunisie",
      "Organisations internationales et programmes d'accompagnement",
      "Cabinets de conseil",
    ],
    ecosystemTitle: "Plus qu'une adresse, un écosystème",
    ecosystemP1: "Choisir Startup Village, c'est rejoindre un lieu où les idées prennent vie.",
    ecosystemP2: "Au quotidien, vous évoluez dans un environnement qui rassemble :",
    ecosystem: [
      "Des entrepreneurs",
      "Des startups innovantes",
      "Des investisseurs",
      "Des accélérateurs",
      "Des organisations internationales",
      "Des universités",
      "Des programmes d'accompagnement",
      "Des événements professionnels tout au long de l'année",
    ],
    ecosystemClosing: "Votre domiciliation devient ainsi une porte d'entrée vers un réseau qui peut contribuer au développement de votre entreprise.",
    stepsTitle: "Comment ça fonctionne ?",
    steps: [
      { title: "Prenez contact avec notre équipe", text: "Expliquez-nous votre projet et vos besoins." },
      { title: "Constituez votre dossier", text: "Notre équipe vous accompagne dans les démarches liées à votre domiciliation." },
      { title: "Installez votre siège social", text: "Votre entreprise bénéficie d'une adresse professionnelle au sein de Startup Village." },
      { title: "Développez votre activité", text: "Profitez de nos espaces, de notre communauté et des nombreux événements organisés tout au long de l'année." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Qui peut bénéficier du service de domiciliation ?", a: "Toute entreprise, startup, PME, grande entreprise ou entrepreneur souhaitant disposer d'une adresse professionnelle peut bénéficier de notre service." },
      { q: "Puis-je recevoir mon courrier chez Startup Village ?", a: "Oui. La réception de votre courrier est incluse dans notre service de domiciliation." },
      { q: "Puis-je réserver une salle de réunion ?", a: "Oui. Les entreprises domiciliées bénéficient de tarifs préférentiels pour la réservation de nos salles de réunion." },
      { q: "Puis-je recevoir mes clients sur place ?", a: "Oui. Vous pouvez accueillir vos partenaires et clients dans un cadre professionnel en réservant l'un de nos espaces de réunion." },
      { q: "La domiciliation est-elle réservée aux startups ?", a: "Non. Notre service est ouvert aux startups, PME, grandes entreprises, cabinets de conseil, associations et organisations ayant besoin d'une adresse professionnelle." },
      { q: "Startup Village est-il uniquement un espace de coworking ?", a: "Non. Startup Village est un écosystème entrepreneurial qui rassemble espaces de travail, événements, accompagnement, studios de production, domiciliation et une communauté active d'acteurs de l'innovation." },
      { q: "Où se situe votre service de domiciliation ?", a: "Notre service est proposé sur nos sites de Startup Village El Menzah et Startup Village Charguia, à Tunis." },
    ],
    ctaTitle: "Donnez à votre entreprise une adresse qui reflète ses ambitions",
    ctaText: "Rejoignez un écosystème où entreprises, startups et organisations développent leurs projets dans un environnement reconnu, professionnel et connecté.",
    ctaBtn1: "Demander un devis",
    ctaBtn2: "Nous contacter",
  },
  en: {
    h1: "Domicile your business at the heart of the Tunisian entrepreneurial ecosystem",
    heroP1: "Setting up a business is an important step. Giving it a recognized professional address is just as important.",
    heroP2: "With Startup Village's domiciliation service, you get a professional address in Tunis while joining an environment where entrepreneurs, startups, companies, investors and international organizations meet every day.",
    heroP3: "Far more than a simple administrative address, Startup Village opens the doors to a living ecosystem that fosters exchanges, opportunities and the growth of your business.",
    whyTitle: "Why choose Startup Village for your domiciliation?",
    whyP1: "An address is often the first point of contact between your company and your clients, partners or investors.",
    whyP2: "By choosing Startup Village, you set up your registered office in a place recognized for its central role in innovation and entrepreneurship in Tunisia.",
    whyP3: "Every year, our community welcomes events, visitors, international delegations, as well as an active community of Villagers.",
    whyP4: "Your company thus benefits from an address that inspires confidence and an environment conducive to professional connections.",
    stats: [
      { value: "100", label: "Events" },
      { value: "1,000", label: "Visitors" },
      { value: "50", label: "International delegations" },
      { value: "20", label: "Countries" },
      { value: "500", label: "Villagers" },
    ],
    advantagesTitle: "The advantages of our domiciliation service",
    advantagesP1: "Our domiciliation offer was designed to meet the needs of entrepreneurs, startups and companies seeking a professional, flexible and scalable solution.",
    advantagesP2: "By domiciling your business at Startup Village, you notably enjoy:",
    advantages: [
      "A professional address in Tunis for your registered office",
      "Mail handling",
      "Preferential rates on meeting room bookings",
      "The ability to host your clients in a professional environment",
      "Access to a dynamic community of entrepreneurs and companies",
      "A setting recognized by innovation and entrepreneurship stakeholders",
    ],
    solutionTitle: "A solution adapted to every stage of your development",
    solutionP1: "Whether you are in the creation phase or already active, our domiciliation service adapts to your needs.",
    solutionP2: "It is particularly suited to:",
    profiles: [
      "Entrepreneurs setting up a business",
      "Startups",
      "Freelancers looking to professionalize their activity",
      "SMEs",
      "Large companies opening a presence in Tunisia",
      "International organizations and support programs",
      "Consulting firms",
    ],
    ecosystemTitle: "More than an address, an ecosystem",
    ecosystemP1: "Choosing Startup Village means joining a place where ideas come to life.",
    ecosystemP2: "Every day, you operate in an environment that brings together:",
    ecosystem: [
      "Entrepreneurs",
      "Innovative startups",
      "Investors",
      "Accelerators",
      "International organizations",
      "Universities",
      "Support programs",
      "Professional events throughout the year",
    ],
    ecosystemClosing: "Your domiciliation thus becomes a gateway to a network that can contribute to the growth of your business.",
    stepsTitle: "How does it work?",
    steps: [
      { title: "Contact our team", text: "Tell us about your project and your needs." },
      { title: "Build your file", text: "Our team supports you through the steps related to your domiciliation." },
      { title: "Set up your registered office", text: "Your company benefits from a professional address within Startup Village." },
      { title: "Grow your business", text: "Enjoy our spaces, our community and the many events organized throughout the year." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Who can benefit from the domiciliation service?", a: "Any company, startup, SME, large company or entrepreneur wishing to have a professional address can benefit from our service." },
      { q: "Can I receive my mail at Startup Village?", a: "Yes. Mail handling is included in our domiciliation service." },
      { q: "Can I book a meeting room?", a: "Yes. Domiciled companies benefit from preferential rates for booking our meeting rooms." },
      { q: "Can I receive my clients on site?", a: "Yes. You can welcome your partners and clients in a professional setting by booking one of our meeting spaces." },
      { q: "Is domiciliation reserved for startups?", a: "No. Our service is open to startups, SMEs, large companies, consulting firms, associations and organizations needing a professional address." },
      { q: "Is Startup Village only a coworking space?", a: "No. Startup Village is an entrepreneurial ecosystem that brings together workspaces, events, support, production studios, domiciliation and an active community of innovation stakeholders." },
      { q: "Where is your domiciliation service located?", a: "Our service is offered at our Startup Village El Menzah and Startup Village Charguia sites, in Tunis." },
    ],
    ctaTitle: "Give your business an address that reflects its ambitions",
    ctaText: "Join an ecosystem where companies, startups and organizations develop their projects in a recognized, professional and connected environment.",
    ctaBtn1: "Request a quote",
    ctaBtn2: "Contact us",
  },
  ar: {
    h1: "وطّنوا شركتكم في قلب المنظومة الريادية التونسية",
    heroP1: "تأسيس شركة مرحلة مهمّة. منحها عنوانًا مهنيًا معترفًا به لا يقلّ أهمّية.",
    heroP2: "من خلال خدمة التوطين في ستارتب فيليج، تحصلون على عنوان مهني في تونس مع الانضمام إلى بيئة يلتقي فيها روّاد الأعمال والشركات الناشئة والشركات والمستثمرون والمنظمات الدولية يوميًا.",
    heroP3: "أكثر بكثير من مجرّد عنوان إداري، يفتح لكم ستارتب فيليج أبواب منظومة نابضة بالحياة تعزّز التبادلات والفرص وتطوّر نشاطكم.",
    whyTitle: "لماذا تختارون ستارتب فيليج لتوطين شركتكم؟",
    whyP1: "غالبًا ما يكون العنوان أوّل نقطة تواصل بين شركتكم وعملائكم أو شركائكم أو مستثمريكم.",
    whyP2: "باختياركم ستارتب فيليج، تُقيمون مقرّكم الاجتماعي في مكان معترف به لدوره المحوري في الابتكار وريادة الأعمال في تونس.",
    whyP3: "يستقبل مجتمعنا كلّ سنة فعاليات وزوّارًا ووفودًا دولية، إضافة إلى مجتمع نشط من سكان القرية.",
    whyP4: "تستفيد شركتكم بذلك من عنوان يبعث على الثقة وبيئة مواتية للتواصل المهني.",
    stats: [
      { value: "100", label: "فعالية" },
      { value: "1000", label: "زائر" },
      { value: "50", label: "وفدًا دوليًا" },
      { value: "20", label: "دولة" },
      { value: "500", label: "من سكان القرية" },
    ],
    advantagesTitle: "مزايا خدمة التوطين لدينا",
    advantagesP1: "صُمِّم عرض التوطين لدينا لتلبية احتياجات روّاد الأعمال والشركات الناشئة والشركات الباحثة عن حلّ مهني ومرن وقابل للتطوّر.",
    advantagesP2: "بتوطين شركتكم في ستارتب فيليج، تستفيدون خصوصًا من:",
    advantages: [
      "عنوان مهني في تونس لمقرّكم الاجتماعي",
      "استلام بريدكم",
      "أسعار تفضيلية على حجز قاعات الاجتماعات",
      "إمكانية استقبال عملائكم في بيئة مهنية",
      "وصول إلى مجتمع نشط من روّاد الأعمال والشركات",
      "إطار معترف به من قبل فاعلي الابتكار وريادة الأعمال",
    ],
    solutionTitle: "حلّ يتكيّف مع كلّ مرحلة من تطوّركم",
    solutionP1: "سواء كنتم في طور الإنشاء أو نشيطين بالفعل، تتكيّف خدمة التوطين لدينا مع احتياجاتكم.",
    solutionP2: "تلائم بشكل خاص:",
    profiles: [
      "روّاد أعمال بصدد إنشاء شركة",
      "شركات ناشئة",
      "مستقلّون راغبون في احتراف نشاطهم",
      "مؤسسات صغيرة ومتوسطة",
      "شركات كبرى تفتح تموقعًا في تونس",
      "منظمات دولية وبرامج مرافقة",
      "مكاتب استشارية",
    ],
    ecosystemTitle: "أكثر من عنوان، منظومة",
    ecosystemP1: "اختيار ستارتب فيليج يعني الانضمام إلى مكان تنبض فيه الأفكار بالحياة.",
    ecosystemP2: "تتطوّرون يوميًا في بيئة تجمع:",
    ecosystem: [
      "روّاد أعمال",
      "شركات ناشئة مبتكرة",
      "مستثمرين",
      "مسرّعات أعمال",
      "منظمات دولية",
      "جامعات",
      "برامج مرافقة",
      "فعاليات مهنية على مدار السنة",
    ],
    ecosystemClosing: "يصبح توطينكم بذلك بوّابة نحو شبكة يمكن أن تساهم في تطوّر شركتكم.",
    stepsTitle: "كيف يعمل؟",
    steps: [
      { title: "تواصلوا مع فريقنا", text: "اشرحوا لنا مشروعكم واحتياجاتكم." },
      { title: "أعدّوا ملفّكم", text: "يرافقكم فريقنا في الإجراءات المرتبطة بتوطينكم." },
      { title: "أقيموا مقرّكم الاجتماعي", text: "تستفيد شركتكم من عنوان مهني داخل ستارتب فيليج." },
      { title: "طوّروا نشاطكم", text: "استفيدوا من فضاءاتنا ومجتمعنا والفعاليات العديدة المنظَّمة على مدار السنة." },
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "من يمكنه الاستفادة من خدمة التوطين؟", a: "يمكن لأيّ شركة أو شركة ناشئة أو مؤسسة صغيرة ومتوسطة أو شركة كبرى أو رائد أعمال يرغب في الحصول على عنوان مهني الاستفادة من خدمتنا." },
      { q: "هل يمكنني استلام بريدي في ستارتب فيليج؟", a: "نعم. استلام بريدكم مشمول في خدمة التوطين لدينا." },
      { q: "هل يمكنني حجز قاعة اجتماعات؟", a: "نعم. تستفيد الشركات الموطَّنة من أسعار تفضيلية لحجز قاعات اجتماعاتنا." },
      { q: "هل يمكنني استقبال عملائي في المكان؟", a: "نعم. يمكنكم استقبال شركائكم وعملائكم في إطار مهني بحجز أحد فضاءات اجتماعاتنا." },
      { q: "هل التوطين مخصّص للشركات الناشئة فقط؟", a: "لا. خدمتنا مفتوحة للشركات الناشئة والمؤسسات الصغيرة والمتوسطة والشركات الكبرى والمكاتب الاستشارية والجمعيات والمنظمات المحتاجة إلى عنوان مهني." },
      { q: "هل ستارتب فيليج مجرّد فضاء عمل مشترك؟", a: "لا. ستارتب فيليج منظومة ريادية تجمع فضاءات عمل وفعاليات ومرافقة واستوديوهات إنتاج وتوطينًا ومجتمعًا نشطًا من فاعلي الابتكار." },
      { q: "أين تقع خدمة التوطين لديكم؟", a: "تُقترح خدمتنا في موقعي ستارتب فيليج المنزه وستارتب فيليج الشرقية، في تونس." },
    ],
    ctaTitle: "امنحوا شركتكم عنوانًا يعكس طموحاتها",
    ctaText: "انضمّوا إلى منظومة تطوّر فيها الشركات والشركات الناشئة والمنظمات مشاريعها في بيئة معترف بها ومهنية ومترابطة.",
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

export default function DomiciliationContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contactQuote = withLang("/contact?type=quote", lang);
  const contactInfo = withLang("/contact?type=info", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/domiciliation.png`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.55) 0%, rgba(15,39,72,0.78) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[52px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
        </div>
      </section>

      {/* 2. POURQUOI CHOISIR STARTUP VILLAGE POUR VOTRE DOMICILIATION */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whyTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP1}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP2}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP3}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP4}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-sv-navy/10 bg-white px-4 py-6 text-center shadow-[0_4px_12px_rgba(16,36,62,0.06)]"
              >
                <div className="text-2xl font-extrabold text-sv-pink md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-sv-navy/70 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LES AVANTAGES DE NOTRE SERVICE DE DOMICILIATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-blue" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.advantagesTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.advantagesP1}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.advantagesP2}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.advantages.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-slate-50/60 px-4 py-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNE SOLUTION ADAPTÉE À CHAQUE ÉTAPE DE VOTRE DÉVELOPPEMENT */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-green" />
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.solutionTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.solutionP1}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.solutionP2}</p>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {t.profiles.map((profile) => (
              <span
                key={profile}
                className="rounded-full border border-sv-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PLUS QU'UNE ADRESSE, UN ÉCOSYSTÈME */}
      <section className="bg-sv-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.ecosystemTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{t.ecosystemP1}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{t.ecosystemP2}</p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.ecosystem.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/70">{t.ecosystemClosing}</p>
        </div>
      </section>

      {/* 6. COMMENT ÇA FONCTIONNE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.stepsTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-sv-navy/10 bg-slate-50/60 px-6 py-8 text-center"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sv-cyan-btn text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-bold text-sv-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-navy/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <FaqAccordion items={t.faq} />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
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
