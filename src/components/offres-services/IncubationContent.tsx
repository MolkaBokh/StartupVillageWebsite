import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Incubation" service page — replaces the generic "Bientôt
 * disponible" placeholder for this one offer only. FR wording is supplied
 * verbatim by the business; EN/AR are natural professional translations
 * with the same content, no additions or omissions. "(....ans)" is kept
 * literally unchanged in every language, as instructed.
 */

const BASE = "/assets/images/offres-services";

type Step = { title: string; text: string };
type Faq = { q: string; a: string };

type Copy = {
  h1: string;
  heroSubtitle: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  whyJoinTitle: string;
  whyJoinP1: string;
  whyJoinP2: string;
  whyJoinP3: string;
  bringTitle: string;
  bringP1: string;
  bringIntro: string;
  bringItems: string[];
  bringClosing: string;
  audienceTitle: string;
  audienceIntro: string;
  audienceItems: string[];
  audienceClosing: string;
  whySvTitle: string;
  whySvP1: string;
  whySvIntro: string;
  whySvItems: string[];
  whySvClosing: string;
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
    h1: "Donnez à votre startup les meilleures conditions pour grandir",
    heroSubtitle: "Un accompagnement porté par deux acteurs de l'innovation",
    heroP1: "L'incubation proposée par Startup Village est développée en partenariat avec MEDIANET Incubator, une Startup Support Organization (SSO) reconnue en Tunisie.",
    heroP2: "Depuis plus de (....ans), MEDIANET Incubator accompagne des porteurs de projets et des startups à travers des programmes d'incubation structurés, favorisant l'émergence de projets innovants et leur développement.",
    heroP3: "En associant l'expertise de MEDIANET Incubator à la force du réseau et de la communauté Startup Village, les entrepreneurs bénéficient d'un accompagnement complet, d'un accès privilégié à des experts, de nombreuses opportunités de networking et d'un environnement propice à la croissance.",
    whyJoinTitle: "Pourquoi intégrer notre programme d'incubation ?",
    whyJoinP1: "L'incubation ne consiste pas uniquement à recevoir des conseils.",
    whyJoinP2: "Elle permet aux entrepreneurs d'évoluer dans un environnement où ils peuvent apprendre, tester leurs idées, rencontrer les bonnes personnes et construire des bases solides pour leur entreprise.",
    whyJoinP3: "En rejoignant Startup Village, vous évoluez au cœur de l'un des principaux hubs entrepreneuriaux de Tunisie, où se rencontrent startups, investisseurs, entreprises, institutions, programmes internationaux et experts de l'innovation.",
    bringTitle: "Ce que nous vous apportons",
    bringP1: "Notre accompagnement est pensé pour répondre aux défis rencontrés par les jeunes entreprises.",
    bringIntro: "Les startups incubées peuvent bénéficier de :",
    bringItems: ["Mentorat personnalisé", "Coaching entrepreneurial", "Accompagnement stratégique", "Mise en relation avec des investisseurs", "Accès à un réseau de partenaires", "Opportunités de networking", "Participation aux événements de Startup Village", "Immersion dans une communauté entrepreneuriale active"],
    bringClosing: "Notre objectif est de vous aider à prendre les bonnes décisions au bon moment et à accélérer le développement de votre projet.",
    audienceTitle: "À qui s'adresse ce programme ?",
    audienceIntro: "Notre programme d'incubation s'adresse aux :",
    audienceItems: ["Porteurs de projet", "Startups en phase de création", "Jeunes entreprises innovantes", "Entrepreneurs souhaitant structurer leur activité", "Équipes fondatrices à la recherche d'un accompagnement"],
    audienceClosing: "Que votre projet soit encore au stade de l'idée ou déjà lancé, nous vous aidons à franchir les prochaines étapes de votre développement.",
    whySvTitle: "Pourquoi Startup Village ?",
    whySvP1: "Au-delà de l'accompagnement, vous rejoignez une communauté entrepreneuriale reconnue.",
    whySvIntro: "Chaque année, Startup Village accueille :",
    whySvItems: ["Plus de 100 événements", "Plus de 1 000 visiteurs", "Plus de 50 délégations internationales", "Des représentants de plus de 20 pays", "Une communauté de plus de 500 Villageois"],
    whySvClosing: "Vous évoluez dans un environnement où les rencontres, les collaborations et les opportunités font partie du quotidien.",
    stepsTitle: "Comment rejoindre le programme ?",
    steps: [
      { title: "Prenez contact avec nous", text: "Expliquez-nous votre projet via notre site web, notre formulaire de contact ou nos réseaux sociaux." },
      { title: "Étudions votre startup", text: "Notre équipe analysera votre projet afin d'identifier les besoins de votre entreprise et les opportunités d'accompagnement." },
      { title: "Intégrez le programme", text: "Si votre projet correspond au programme d'incubation, vous bénéficierez d'un accompagnement personnalisé réalisé avec Startup Village et MEDIANET Incubator." },
      { title: "Développez votre entreprise", text: "Construisez votre réseau, renforcez votre stratégie et faites évoluer votre startup dans un environnement stimulant." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Qui peut intégrer le programme d'incubation ?", a: "Toute startup ou porteur de projet souhaitant bénéficier d'un accompagnement entrepreneurial peut déposer sa candidature." },
      { q: "À quel stade de développement peut-on être incubé ?", a: "Le programme s'adresse aussi bien aux entrepreneurs en phase de création qu'aux startups déjà lancées qui souhaitent accélérer leur développement." },
      { q: "Qui assure l'accompagnement ?", a: "Le programme est proposé par Startup Village en partenariat avec MEDIANET Incubator, combinant leurs expertises et leurs réseaux au service des entrepreneurs." },
      { q: "Le programme est-il réservé aux membres de Startup Village ?", a: "Non. Toute startup intéressée peut prendre contact avec notre équipe pour découvrir les modalités d'intégration." },
      { q: "Comment déposer sa candidature ?", a: "Vous pouvez nous contacter directement via notre formulaire de contact, notre site internet ou nos réseaux sociaux." },
    ],
    ctaTitle: "Transformez votre ambition en entreprise durable",
    ctaText: "Rejoignez un programme d'incubation pensé pour accompagner les entrepreneurs qui souhaitent construire, développer et faire grandir leur startup au sein d'un écosystème reconnu.",
    ctaBtn1: "Déposer sa candidature",
    ctaBtn2: "Nous contacter",
  },
  en: {
    h1: "Give your startup the best conditions to grow",
    heroSubtitle: "Support led by two players in innovation",
    heroP1: "The incubation program offered by Startup Village is developed in partnership with MEDIANET Incubator, a recognized Startup Support Organization (SSO) in Tunisia.",
    heroP2: "For over (....ans), MEDIANET Incubator has supported project owners and startups through structured incubation programs, fostering the emergence of innovative projects and their development.",
    heroP3: "By combining MEDIANET Incubator's expertise with the strength of the Startup Village network and community, entrepreneurs benefit from comprehensive support, privileged access to experts, numerous networking opportunities and an environment conducive to growth.",
    whyJoinTitle: "Why join our incubation program?",
    whyJoinP1: "Incubation is not just about receiving advice.",
    whyJoinP2: "It allows entrepreneurs to grow in an environment where they can learn, test their ideas, meet the right people and build solid foundations for their company.",
    whyJoinP3: "By joining Startup Village, you become part of one of Tunisia's leading entrepreneurial hubs, where startups, investors, companies, institutions, international programs and innovation experts meet.",
    bringTitle: "What we offer you",
    bringP1: "Our support is designed to address the challenges faced by young companies.",
    bringIntro: "Incubated startups can benefit from:",
    bringItems: ["Personalized mentoring", "Entrepreneurial coaching", "Strategic support", "Introductions to investors", "Access to a network of partners", "Networking opportunities", "Participation in Startup Village events", "Immersion in an active entrepreneurial community"],
    bringClosing: "Our goal is to help you make the right decisions at the right time and accelerate the development of your project.",
    audienceTitle: "Who is this program for?",
    audienceIntro: "Our incubation program is aimed at:",
    audienceItems: ["Project owners", "Startups in the creation phase", "Innovative young companies", "Entrepreneurs looking to structure their business", "Founding teams seeking support"],
    audienceClosing: "Whether your project is still at the idea stage or already launched, we help you take the next steps in your development.",
    whySvTitle: "Why Startup Village?",
    whySvP1: "Beyond the support, you join a recognized entrepreneurial community.",
    whySvIntro: "Every year, Startup Village welcomes:",
    whySvItems: ["More than 100 events", "More than 1,000 visitors", "More than 50 international delegations", "Representatives from more than 20 countries", "A community of more than 500 Villagers"],
    whySvClosing: "You evolve in an environment where meetings, collaborations and opportunities are part of everyday life.",
    stepsTitle: "How to join the program?",
    steps: [
      { title: "Get in touch with us", text: "Tell us about your project via our website, our contact form or our social media." },
      { title: "We review your startup", text: "Our team will analyze your project to identify your company's needs and the support opportunities available." },
      { title: "Join the program", text: "If your project fits the incubation program, you will benefit from personalized support delivered with Startup Village and MEDIANET Incubator." },
      { title: "Grow your company", text: "Build your network, strengthen your strategy and grow your startup in a stimulating environment." },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Who can join the incubation program?", a: "Any startup or project owner wishing to benefit from entrepreneurial support can apply." },
      { q: "At what stage of development can you be incubated?", a: "The program is aimed at entrepreneurs in the creation phase as well as startups already launched who want to accelerate their development." },
      { q: "Who provides the support?", a: "The program is offered by Startup Village in partnership with MEDIANET Incubator, combining their expertise and networks in service of entrepreneurs." },
      { q: "Is the program reserved for Startup Village members?", a: "No. Any interested startup can contact our team to learn about the terms of joining." },
      { q: "How do I apply?", a: "You can contact us directly via our contact form, our website or our social media." },
    ],
    ctaTitle: "Turn your ambition into a sustainable company",
    ctaText: "Join an incubation program designed to support entrepreneurs who want to build, develop and grow their startup within a recognized ecosystem.",
    ctaBtn1: "Apply now",
    ctaBtn2: "Contact us",
  },
  ar: {
    h1: "امنح شركتك الناشئة أفضل الظروف للنموّ",
    heroSubtitle: "مرافقة يقودها فاعلان في مجال الابتكار",
    heroP1: "برنامج الاحتضان الذي يقترحه ستارتب فيليج طُوِّر بشراكة مع MEDIANET Incubator، وهي منظمة دعم للشركات الناشئة (SSO) معترف بها في تونس.",
    heroP2: "منذ أكثر من (....ans)، ترافق MEDIANET Incubator أصحاب المشاريع والشركات الناشئة من خلال برامج احتضان مهيكلة، تُسهم في بروز مشاريع مبتكرة وتطويرها.",
    heroP3: "من خلال الجمع بين خبرة MEDIANET Incubator وقوة شبكة ومجتمع ستارتب فيليج، يستفيد روّاد الأعمال من مرافقة شاملة، ووصول مميّز إلى خبراء، والعديد من فرص التواصل، وبيئة مواتية للنموّ.",
    whyJoinTitle: "لماذا الانضمام إلى برنامج الاحتضان لدينا؟",
    whyJoinP1: "الاحتضان لا يقتصر فقط على تلقّي النصائح.",
    whyJoinP2: "إنّه يتيح لروّاد الأعمال التطوّر في بيئة يمكنهم فيها التعلّم واختبار أفكارهم ولقاء الأشخاص المناسبين وبناء أسس متينة لشركتهم.",
    whyJoinP3: "بانضمامك إلى ستارتب فيليج، تتطوّر في قلب أحد أهمّ مراكز ريادة الأعمال في تونس، حيث تلتقي الشركات الناشئة والمستثمرون والشركات والمؤسسات والبرامج الدولية وخبراء الابتكار.",
    bringTitle: "ما الذي نقدّمه لكم",
    bringP1: "صُمِّمت مرافقتنا للاستجابة للتحدّيات التي تواجهها الشركات الناشئة.",
    bringIntro: "يمكن للشركات الناشئة المحتضنة الاستفادة من:",
    bringItems: ["توجيه شخصي", "تدريب على ريادة الأعمال", "مرافقة استراتيجية", "التواصل مع مستثمرين", "الوصول إلى شبكة من الشركاء", "فرص للتواصل", "المشاركة في فعاليات ستارتب فيليج", "الانغماس في مجتمع ريادي نشط"],
    bringClosing: "هدفنا هو مساعدتكم على اتخاذ القرارات الصحيحة في الوقت المناسب وتسريع تطوير مشروعكم.",
    audienceTitle: "لمن يوجَّه هذا البرنامج؟",
    audienceIntro: "يوجَّه برنامج الاحتضان لدينا إلى:",
    audienceItems: ["أصحاب المشاريع", "الشركات الناشئة في طور الإنشاء", "الشركات الشابة المبتكرة", "روّاد الأعمال الراغبين في هيكلة نشاطهم", "الفرق المؤسِّسة الباحثة عن مرافقة"],
    audienceClosing: "سواء كان مشروعكم لا يزال في مرحلة الفكرة أو انطلق بالفعل، نساعدكم على اجتياز المراحل المقبلة من تطوّركم.",
    whySvTitle: "لماذا ستارتب فيليج؟",
    whySvP1: "إلى جانب المرافقة، تنضمّون إلى مجتمع ريادي معترف به.",
    whySvIntro: "يستقبل ستارتب فيليج كلّ سنة:",
    whySvItems: ["أكثر من 100 فعالية", "أكثر من 1000 زائر", "أكثر من 50 وفدًا دوليًا", "ممثّلين من أكثر من 20 دولة", "مجتمعًا يضمّ أكثر من 500 من سكان القرية"],
    whySvClosing: "تتطوّرون في بيئة تشكّل فيها اللقاءات والتعاون والفرص جزءًا من الحياة اليومية.",
    stepsTitle: "كيف تنضمّون إلى البرنامج؟",
    steps: [
      { title: "تواصلوا معنا", text: "أخبرونا عن مشروعكم عبر موقعنا الإلكتروني أو نموذج الاتصال أو شبكات التواصل الاجتماعي الخاصة بنا." },
      { title: "ندرس مشروعكم", text: "سيحلّل فريقنا مشروعكم لتحديد احتياجات شركتكم وفرص المرافقة المتاحة." },
      { title: "انضمّوا إلى البرنامج", text: "إذا كان مشروعكم يتوافق مع برنامج الاحتضان، ستستفيدون من مرافقة شخصية تُنفَّذ بالتعاون بين ستارتب فيليج وMEDIANET Incubator." },
      { title: "طوّروا شركتكم", text: "ابنوا شبكتكم، وعزّزوا استراتيجيتكم، وطوّروا شركتكم الناشئة في بيئة محفّزة." },
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "من يمكنه الانضمام إلى برنامج الاحتضان؟", a: "يمكن لأيّ شركة ناشئة أو صاحب مشروع يرغب في الاستفادة من مرافقة ريادية تقديم ترشّحه." },
      { q: "في أيّ مرحلة تطوّر يمكن الاستفادة من الاحتضان؟", a: "يوجَّه البرنامج لكلّ من روّاد الأعمال في طور الإنشاء والشركات الناشئة المنطلقة بالفعل والراغبة في تسريع تطوّرها." },
      { q: "من يتكفّل بالمرافقة؟", a: "يُقترح البرنامج من طرف ستارتب فيليج بشراكة مع MEDIANET Incubator، بالجمع بين خبراتهما وشبكاتهما في خدمة روّاد الأعمال." },
      { q: "هل البرنامج مخصّص لأعضاء ستارتب فيليج فقط؟", a: "لا. يمكن لأيّ شركة ناشئة مهتمّة التواصل مع فريقنا لاكتشاف طرق الانضمام." },
      { q: "كيف يمكن تقديم الترشّح؟", a: "يمكنكم التواصل معنا مباشرة عبر نموذج الاتصال أو موقعنا الإلكتروني أو شبكات التواصل الاجتماعي الخاصة بنا." },
    ],
    ctaTitle: "حوّلوا طموحكم إلى شركة مستدامة",
    ctaText: "انضمّوا إلى برنامج احتضان مصمَّم لمرافقة روّاد الأعمال الراغبين في بناء شركتهم الناشئة وتطويرها وتنميتها ضمن منظومة معترف بها.",
    ctaBtn1: "تقديم الترشّح",
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

export default function IncubationContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/incubation.png`}
          alt={t.h1}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,39,72,0.6) 0%, rgba(15,39,72,0.82) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center text-white md:px-8">
          <h1 className="text-4xl font-bold leading-tight md:text-[50px]">{t.h1}</h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg font-semibold text-white md:text-xl">{t.heroSubtitle}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP1}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP2}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/90 md:text-lg">{t.heroP3}</p>
        </div>
      </section>

      {/* 2. POURQUOI INTÉGRER NOTRE PROGRAMME D'INCUBATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whyJoinTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyJoinP1}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyJoinP2}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyJoinP3}</p>
        </div>
      </section>

      {/* 3. CE QUE NOUS VOUS APPORTONS */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.bringTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.bringP1}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.bringIntro}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.bringItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-sv-navy/10 bg-white px-4 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-sv-navy/70">{t.bringClosing}</p>
        </div>
      </section>

      {/* 4. À QUI S'ADRESSE CE PROGRAMME */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.audienceTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.audienceIntro}</p>

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

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.audienceClosing}</p>
        </div>
      </section>

      {/* 5. POURQUOI STARTUP VILLAGE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-green" />
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whySvTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.whySvP1}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.whySvIntro}</p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {t.whySvItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-sv-navy/10 bg-white px-4 py-3.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sv-green text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-sv-navy sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-sv-navy/70">{t.whySvClosing}</p>
        </div>
      </section>

      {/* 6. COMMENT REJOINDRE LE PROGRAMME */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-sv-navy md:text-4xl">{t.stepsTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-sv-navy/10 bg-slate-50/60 px-6 py-8 text-center">
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
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.ctaBtn1}
            </Link>
            <Link
              href={contact}
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
