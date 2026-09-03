import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import FaqAccordion from "./FaqAccordion";

/**
 * Dedicated "Salles de réunion & formation" service page — replaces the
 * generic "Bientôt disponible" placeholder for this one offer only. FR
 * wording is supplied verbatim by the business; EN/AR are natural
 * professional translations with the same content, no additions or
 * omissions.
 */

const BASE = "/assets/images/offres-services";

type Stat = { value: string; label: string };
type Room = {
  name: string;
  subtitle: string;
  capacity: string;
  description: string[];
  equipements?: string[];
  idealPour?: string[];
  img: string;
  imgAlt: string;
  accent: string;
};
type Faq = { q: string; a: string };

type Copy = {
  h1: string;
  heroP1: string;
  heroP2: string;
  heroP3: string;
  whyTitle: string;
  whySubtitle: string;
  whyP1: string;
  whyP2: string;
  stats: Stat[];
  rooms: Room[];
  capacityLabel: string;
  equipLabel: string;
  idealLabel: string;
  equipmentsTitle: string;
  equipmentsIncluded: string[];
  audienceTitle: string;
  audienceIntro: string;
  audiences: string[];
  locationTitle: string;
  locationP1: string;
  locationP2: string;
  faqTitle: string;
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn1: string;
  ctaBtn2: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    h1: "Louez une salle de réunion à Tunis adaptée à vos besoins",
    heroP1: "Chez Startup Village, chaque réunion est une opportunité de faire avancer un projet, de prendre une décision stratégique ou de créer une nouvelle collaboration.",
    heroP2: "Nos salles de réunion accueillent aussi bien les startups que les PME, grandes entreprises, organisations internationales, investisseurs, universités ou associations à la recherche d'un environnement professionnel, calme et entièrement équipé.",
    heroP3: "Situées au cœur de l'écosystème entrepreneurial tunisien, nos salles offrent bien plus qu'un simple espace de travail : elles permettent de réunir vos équipes dans un cadre inspirant, moderne et facilement accessible.",
    whyTitle: "Pourquoi choisir Startup Village ?",
    whySubtitle: "Parce qu'un lieu influence la qualité des échanges.",
    whyP1: "En choisissant Startup Village, vous profitez d'un environnement reconnu pour son dynamisme entrepreneurial, où se croisent chaque année des événements, des visiteurs, des délégations internationales, ainsi qu'une communauté active de Villageois.",
    whyP2: "Organiser votre réunion chez Startup Village, c'est accueillir vos collaborateurs ou vos clients dans un lieu vivant, professionnel et reconnu comme un point de rencontre incontournable de l'innovation en Tunisie.",
    stats: [
      { value: "100", label: "Événements" },
      { value: "1 000", label: "Visiteurs" },
      { value: "50", label: "Délégations internationales" },
      { value: "20", label: "Pays" },
      { value: "500", label: "Villageois" },
    ],
    rooms: [
      {
        name: "Corporate Room",
        subtitle: "Pour vos réunions stratégiques en petit comité",
        capacity: "6 personnes",
        description: [
          "Pensée pour les réunions de direction, les rendez-vous clients, les entretiens ou les séances de travail nécessitant calme et concentration, la Corporate Room bénéficie d'une belle luminosité naturelle et d'une vue dégagée sur l'extérieur.",
        ],
        equipements: ["Écran TV HDMI", "Tableau blanc", "Wi-Fi haut débit", "Climatisation", "Lumière naturelle"],
        idealPour: ["Réunion d'équipe", "Rendez-vous client", "Briefing", "Entretien professionnel", "Session de travail"],
        img: `${BASE}/reunion-1.png`,
        imgAlt: "Corporate Room — salle de réunion lumineuse avec vue extérieure, Startup Village",
        accent: "#25AFE0",
      },
      {
        name: "Salle Confidentielle",
        subtitle: "Un espace conçu pour travailler en toute discrétion",
        capacity: "10 personnes",
        description: [
          "Unique au sein de Startup Village, cette salle garantit une confidentialité totale grâce à son aménagement qui préserve la confidentialité des échanges. Elle est particulièrement adaptée aux réunions sensibles, aux discussions stratégiques ou aux ateliers nécessitant une parfaite discrétion.",
        ],
        equipements: ["TV", "Tableau blanc", "Wi-Fi", "Climatisation"],
        idealPour: ["Comité de direction", "Réunion confidentielle", "Stratégie", "Négociation", "Recrutement"],
        img: `${BASE}/reunion-6.png`,
        imgAlt: "Salle Confidentielle — salle de réunion fermée, Startup Village",
        accent: "#E21C57",
      },
      {
        name: "Salle 23",
        subtitle: "Une salle polyvalente pour vos réunions du quotidien",
        capacity: "10 personnes",
        description: [
          "Fonctionnelle et entièrement équipée, la Salle 23 accueille aussi bien des réunions d'équipe que des formations, ateliers ou rendez-vous professionnels.",
          "Elle constitue une solution idéale pour les entreprises recherchant un espace professionnel flexible au cœur de Startup Village.",
        ],
        img: `${BASE}/reunion-2.png`,
        imgAlt: "Salle 23 — salle de réunion polyvalente, Startup Village",
        accent: "#6FA83C",
      },
    ],
    capacityLabel: "Capacité",
    equipLabel: "Équipements",
    idealLabel: "Idéal pour",
    equipmentsTitle: "Les équipements inclus",
    equipmentsIncluded: [
      "Wi-Fi haut débit",
      "Écrans TV",
      "Connexion HDMI",
      "Tableaux blancs",
      "Climatisation",
      "Espaces lumineux",
      "Mobilier professionnel",
      "Accès par ascenseur",
      "Réservation à l'heure, à la demi-journée ou à la journée",
    ],
    audienceTitle: "Pour qui ?",
    audienceIntro: "Nos salles sont régulièrement réservées par :",
    audiences: ["Startups", "PME", "Grandes entreprises", "ONG", "Organisations internationales", "Ambassades", "Universités", "Cabinets de conseil", "Investisseurs", "Formateurs", "Freelances"],
    locationTitle: "Une localisation stratégique",
    locationP1: "Startup Village est situé au cœur de Tunis, à El Menzah, dans un environnement facilement accessible et reconnu comme l'un des principaux lieux de rencontre de l'écosystème entrepreneurial tunisien.",
    locationP2: "En choisissant Startup Village, vous bénéficiez non seulement d'un espace professionnel, mais également d'un cadre favorisant les rencontres, les collaborations et les opportunités.",
    faqTitle: "FAQ",
    faq: [
      { q: "Peut-on réserver une salle sans être membre ?", a: "Oui. Nos salles sont accessibles aussi bien aux membres de Startup Village qu'aux entreprises, organisations et particuliers extérieurs." },
      { q: "Les salles sont-elles disponibles à l'heure ?", a: "Oui. Selon la salle choisie, il est possible de réserver à l'heure, à la demi-journée ou à la journée." },
      { q: "Les salles disposent-elles d'un écran ?", a: "Toutes nos salles sont équipées d'écrans et d'une connexion Wi-Fi afin de faciliter vos présentations et réunions." },
      { q: "Peut-on organiser une formation ?", a: "Oui. Nos salles accueillent régulièrement des formations professionnelles, ateliers, workshops et sessions de coaching." },
      { q: "Proposez-vous un service de restauration ?", a: "Nous pouvons organiser un service de catering sur demande. Nous privilégions les prestations de notre partenaire CoChef, tout en laissant la possibilité de faire appel à un autre prestataire." },
      { q: "Où se situe Startup Village ?", a: "Startup Village dispose de deux sites à Tunis : El Menzah et Charguia. Les salles présentées sur cette page sont situées à El Menzah." },
    ],
    ctaTitle: "Besoin d'une salle de réunion à Tunis ?",
    ctaText: "Notre équipe vous accompagne pour trouver l'espace le plus adapté à votre réunion, votre formation ou votre événement professionnel.",
    ctaBtn1: "Demander un devis",
    ctaBtn2: "Réserver une salle",
  },
  en: {
    h1: "Rent a meeting room in Tunis tailored to your needs",
    heroP1: "At Startup Village, every meeting is an opportunity to move a project forward, make a strategic decision or create a new collaboration.",
    heroP2: "Our meeting rooms welcome startups as well as SMEs, large companies, international organizations, investors, universities and associations looking for a professional, quiet and fully equipped environment.",
    heroP3: "Located at the heart of the Tunisian entrepreneurial ecosystem, our rooms offer much more than a simple workspace: they let you bring your teams together in an inspiring, modern and easily accessible setting.",
    whyTitle: "Why choose Startup Village?",
    whySubtitle: "Because a place shapes the quality of exchanges.",
    whyP1: "By choosing Startup Village, you enjoy an environment recognized for its entrepreneurial dynamism, where events, visitors, international delegations and an active community of Villagers come together every year.",
    whyP2: "Organizing your meeting at Startup Village means welcoming your colleagues or clients in a lively, professional place recognized as an essential meeting point for innovation in Tunisia.",
    stats: [
      { value: "100", label: "Events" },
      { value: "1,000", label: "Visitors" },
      { value: "50", label: "International delegations" },
      { value: "20", label: "Countries" },
      { value: "500", label: "Villagers" },
    ],
    rooms: [
      {
        name: "Corporate Room",
        subtitle: "For your strategic meetings in a small group",
        capacity: "6 people",
        description: [
          "Designed for management meetings, client appointments, interviews or work sessions requiring calm and focus, the Corporate Room benefits from beautiful natural light and an open view to the outside.",
        ],
        equipements: ["HDMI TV screen", "Whiteboard", "High-speed Wi-Fi", "Air conditioning", "Natural light"],
        idealPour: ["Team meeting", "Client appointment", "Briefing", "Professional interview", "Work session"],
        img: `${BASE}/reunion-1.png`,
        imgAlt: "Corporate Room — bright meeting room with an outside view, Startup Village",
        accent: "#25AFE0",
      },
      {
        name: "Salle Confidentielle",
        subtitle: "A space designed to work with complete discretion",
        capacity: "10 people",
        description: [
          "Unique within Startup Village, this room guarantees total confidentiality thanks to its layout, which preserves the privacy of discussions. It is particularly suited to sensitive meetings, strategic discussions or workshops requiring perfect discretion.",
        ],
        equipements: ["TV", "Whiteboard", "Wi-Fi", "Air conditioning"],
        idealPour: ["Management committee", "Confidential meeting", "Strategy", "Negotiation", "Recruitment"],
        img: `${BASE}/reunion-6.png`,
        imgAlt: "Salle Confidentielle — closed meeting room, Startup Village",
        accent: "#E21C57",
      },
      {
        name: "Salle 23",
        subtitle: "A versatile room for your everyday meetings",
        capacity: "10 people",
        description: [
          "Functional and fully equipped, Salle 23 hosts team meetings as well as training sessions, workshops or professional appointments.",
          "It is an ideal solution for companies looking for a flexible professional space at the heart of Startup Village.",
        ],
        img: `${BASE}/reunion-2.png`,
        imgAlt: "Salle 23 — versatile meeting room, Startup Village",
        accent: "#6FA83C",
      },
    ],
    capacityLabel: "Capacity",
    equipLabel: "Equipment",
    idealLabel: "Ideal for",
    equipmentsTitle: "Equipment included",
    equipmentsIncluded: [
      "High-speed Wi-Fi",
      "TV screens",
      "HDMI connection",
      "Whiteboards",
      "Air conditioning",
      "Bright spaces",
      "Professional furniture",
      "Elevator access",
      "Hourly, half-day or full-day booking",
    ],
    audienceTitle: "Who for?",
    audienceIntro: "Our rooms are regularly booked by:",
    audiences: ["Startups", "SMEs", "Large companies", "NGOs", "International organizations", "Embassies", "Universities", "Consulting firms", "Investors", "Trainers", "Freelancers"],
    locationTitle: "A strategic location",
    locationP1: "Startup Village is located at the heart of Tunis, in El Menzah, in an easily accessible environment recognized as one of the main meeting places of the Tunisian entrepreneurial ecosystem.",
    locationP2: "By choosing Startup Village, you benefit not only from a professional space, but also from a setting that fosters meetings, collaborations and opportunities.",
    faqTitle: "FAQ",
    faq: [
      { q: "Can I book a room without being a member?", a: "Yes. Our rooms are accessible to Startup Village members as well as to external companies, organizations and individuals." },
      { q: "Are the rooms available by the hour?", a: "Yes. Depending on the room chosen, it is possible to book by the hour, half-day or full day." },
      { q: "Do the rooms have a screen?", a: "All our rooms are equipped with screens and a Wi-Fi connection to facilitate your presentations and meetings." },
      { q: "Can training be organized?", a: "Yes. Our rooms regularly host professional training courses, workshops and coaching sessions." },
      { q: "Do you offer catering?", a: "We can arrange a catering service upon request. We favor services from our partner CoChef, while leaving the possibility to use another provider." },
      { q: "Where is Startup Village located?", a: "Startup Village has two sites in Tunis: El Menzah and Charguia. The rooms presented on this page are located in El Menzah." },
    ],
    ctaTitle: "Need a meeting room in Tunis?",
    ctaText: "Our team helps you find the space best suited to your meeting, training session or professional event.",
    ctaBtn1: "Request a quote",
    ctaBtn2: "Book a room",
  },
  ar: {
    h1: "استأجروا قاعة اجتماعات في تونس تلائم احتياجاتكم",
    heroP1: "في ستارتب فيليج، كلّ اجتماع فرصة لدفع مشروع إلى الأمام، أو اتخاذ قرار استراتيجي، أو خلق تعاون جديد.",
    heroP2: "تستقبل قاعات اجتماعاتنا الشركات الناشئة والمؤسسات الصغيرة والمتوسطة والشركات الكبرى والمنظمات الدولية والمستثمرين والجامعات والجمعيات الباحثة عن بيئة مهنية وهادئة ومجهّزة بالكامل.",
    heroP3: "تقع قاعاتنا في قلب المنظومة الريادية التونسية، وتوفّر أكثر بكثير من مجرّد فضاء عمل: فهي تتيح لكم جمع فرقكم في إطار ملهم وعصري وسهل الوصول إليه.",
    whyTitle: "لماذا تختارون ستارتب فيليج؟",
    whySubtitle: "لأنّ المكان يؤثّر في جودة التبادلات.",
    whyP1: "باختياركم ستارتب فيليج، تستفيدون من بيئة معروفة بديناميكيّتها الريادية، حيث تلتقي كلّ سنة فعاليات وزوّار ووفود دولية، إضافة إلى مجتمع نشط من سكان القرية.",
    whyP2: "تنظيم اجتماعكم في ستارتب فيليج يعني استقبال زملائكم أو عملائكم في مكان نابض بالحياة ومهني ومعترف به كنقطة لقاء أساسية للابتكار في تونس.",
    stats: [
      { value: "100", label: "فعالية" },
      { value: "1000", label: "زائر" },
      { value: "50", label: "وفدًا دوليًا" },
      { value: "20", label: "دولة" },
      { value: "500", label: "من سكان القرية" },
    ],
    rooms: [
      {
        name: "Corporate Room",
        subtitle: "لاجتماعاتكم الاستراتيجية في لجنة مصغّرة",
        capacity: "6 أشخاص",
        description: [
          "مصمَّمة لاجتماعات الإدارة ومواعيد العملاء والمقابلات أو جلسات العمل التي تتطلّب هدوءًا وتركيزًا، تستفيد Corporate Room من إضاءة طبيعية جميلة وإطلالة مفتوحة على الخارج.",
        ],
        equipements: ["شاشة تلفاز HDMI", "سبّورة بيضاء", "واي فاي عالي السرعة", "تكييف", "إضاءة طبيعية"],
        idealPour: ["اجتماع فريق", "موعد عميل", "إحاطة", "مقابلة مهنية", "جلسة عمل"],
        img: `${BASE}/reunion-1.png`,
        imgAlt: "Corporate Room — قاعة اجتماعات مضيئة بإطلالة خارجية، ستارتب فيليج",
        accent: "#25AFE0",
      },
      {
        name: "Salle Confidentielle",
        subtitle: "فضاء مصمَّم للعمل بكلّ سرّية",
        capacity: "10 أشخاص",
        description: [
          "فريدة داخل ستارتب فيليج، تضمن هذه القاعة سرّية تامة بفضل تصميمها الذي يحافظ على خصوصية النقاشات. وهي ملائمة بشكل خاص للاجتماعات الحسّاسة والنقاشات الاستراتيجية أو ورش العمل التي تتطلّب سرّية تامة.",
        ],
        equipements: ["تلفاز", "سبّورة بيضاء", "واي فاي", "تكييف"],
        idealPour: ["لجنة إدارة", "اجتماع سرّي", "استراتيجية", "تفاوض", "توظيف"],
        img: `${BASE}/reunion-6.png`,
        imgAlt: "Salle Confidentielle — قاعة اجتماعات مغلقة، ستارتب فيليج",
        accent: "#E21C57",
      },
      {
        name: "Salle 23",
        subtitle: "قاعة متعدّدة الاستخدامات لاجتماعاتكم اليومية",
        capacity: "10 أشخاص",
        description: [
          "وظيفية ومجهّزة بالكامل، تستقبل Salle 23 اجتماعات الفرق وكذلك التكوينات وورش العمل والمواعيد المهنية.",
          "تشكّل حلًّا مثاليًا للشركات الباحثة عن فضاء مهني مرن في قلب ستارتب فيليج.",
        ],
        img: `${BASE}/reunion-2.png`,
        imgAlt: "Salle 23 — قاعة اجتماعات متعدّدة الاستخدامات، ستارتب فيليج",
        accent: "#6FA83C",
      },
    ],
    capacityLabel: "السعة",
    equipLabel: "التجهيزات",
    idealLabel: "مثالي لـ",
    equipmentsTitle: "التجهيزات المشمولة",
    equipmentsIncluded: [
      "واي فاي عالي السرعة",
      "شاشات تلفاز",
      "اتصال HDMI",
      "سبّورات بيضاء",
      "تكييف",
      "فضاءات مضيئة",
      "أثاث مهني",
      "وصول عبر مصعد",
      "حجز بالساعة أو نصف اليوم أو اليوم الكامل",
    ],
    audienceTitle: "لمن؟",
    audienceIntro: "تُحجز قاعاتنا بانتظام من قبل:",
    audiences: ["شركات ناشئة", "مؤسسات صغيرة ومتوسطة", "شركات كبرى", "منظمات غير حكومية", "منظمات دولية", "سفارات", "جامعات", "مكاتب استشارية", "مستثمرين", "مدرّبين", "مستقلّين"],
    locationTitle: "موقع استراتيجي",
    locationP1: "يقع ستارتب فيليج في قلب تونس، بالمنزه، في بيئة سهلة الوصول ومعترف بها كأحد أهمّ أماكن اللقاء في المنظومة الريادية التونسية.",
    locationP2: "باختياركم ستارتب فيليج، تستفيدون ليس فقط من فضاء مهني، بل أيضًا من إطار يعزّز اللقاءات والتعاون والفرص.",
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "هل يمكن حجز قاعة دون أن أكون عضوًا؟", a: "نعم. قاعاتنا متاحة لأعضاء ستارتب فيليج وكذلك للشركات والمنظمات والأفراد من خارجه." },
      { q: "هل القاعات متاحة بالساعة؟", a: "نعم. حسب القاعة المختارة، يمكن الحجز بالساعة أو نصف اليوم أو اليوم الكامل." },
      { q: "هل تتوفّر القاعات على شاشة؟", a: "جميع قاعاتنا مجهّزة بشاشات واتصال واي فاي لتسهيل عروضكم واجتماعاتكم." },
      { q: "هل يمكن تنظيم تكوين؟", a: "نعم. تستقبل قاعاتنا بانتظام تكوينات مهنية وورش عمل وجلسات تدريب." },
      { q: "هل تقترحون خدمة إطعام؟", a: "يمكننا تنظيم خدمة تموين عند الطلب. نفضّل خدمات شريكنا CoChef، مع إتاحة إمكانية اللجوء إلى مزوّد آخر." },
      { q: "أين يقع ستارتب فيليج؟", a: "يتوفّر ستارتب فيليج على موقعين في تونس: المنزه والشرقية. القاعات المعروضة في هذه الصفحة تقع بالمنزه." },
    ],
    ctaTitle: "بحاجة إلى قاعة اجتماعات في تونس؟",
    ctaText: "يرافقكم فريقنا لإيجاد الفضاء الأنسب لاجتماعكم أو تكوينكم أو فعاليتكم المهنية.",
    ctaBtn1: "طلب عرض سعر",
    ctaBtn2: "حجز قاعة",
  },
};

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function RoomCard({
  room,
  reverse,
  capacityLabel,
  equipLabel,
  idealLabel,
  ctaLabel,
  ctaHref,
}: {
  room: Room;
  reverse: boolean;
  capacityLabel: string;
  equipLabel: string;
  idealLabel: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
      <div className={`relative h-[280px] w-full overflow-hidden rounded-xl md:h-[420px] ${reverse ? "md:order-2" : ""}`}>
        <img src={room.img} alt={room.imgAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div>
        <span aria-hidden="true" className="mb-1 block h-1.5 w-9 rounded-full" style={{ background: room.accent }} />
        <h3 className="mt-4 text-2xl font-bold text-sv-navy md:text-[28px]">{room.name}</h3>
        <p className="mt-2 text-base font-semibold text-sv-navy/80">{room.subtitle}</p>

        <span
          className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold text-white"
          style={{ background: room.accent }}
        >
          {capacityLabel} : {room.capacity}
        </span>

        {room.description.map((p) => (
          <p key={p} className="mt-4 text-base leading-relaxed text-sv-navy/70">
            {p}
          </p>
        ))}

        {room.equipements && (
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wide text-sv-navy">{equipLabel}</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {room.equipements.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-sv-navy/80">
                  <span className="shrink-0" style={{ color: room.accent }}>
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {room.idealPour && (
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wide text-sv-navy">{idealLabel}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {room.idealPour.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sv-navy/15 bg-sv-navy/[0.03] px-3.5 py-1.5 text-sm font-medium text-sv-navy/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: room.accent }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SalleReunionFormationContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);
  const contactRoom = withLang("/contact?type=room", lang);
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. HERO */}
      <section className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
        <img
          src={`${BASE}/reunion-4.png`}
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

      {/* 2. POURQUOI CHOISIR STARTUP VILLAGE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="mx-auto mb-4 block h-1.5 w-9 rounded-full bg-sv-pink" />
            <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.whyTitle}</h2>
            <p className="mt-4 text-lg text-sv-navy/80">{t.whySubtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP1}</p>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.whyP2}</p>
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

      {/* 3. ROOM SHOWCASE */}
      <div>
        {t.rooms.map((room, i) => (
          <section key={room.name} className={i % 2 === 0 ? "bg-white py-16 md:py-20" : "bg-slate-50/60 py-16 md:py-20"}>
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <RoomCard
                room={room}
                reverse={i % 2 === 1}
                capacityLabel={t.capacityLabel}
                equipLabel={t.equipLabel}
                idealLabel={t.idealLabel}
                ctaLabel={t.ctaBtn2}
                ctaHref={contactRoom}
              />
            </div>
          </section>
        ))}
      </div>

      {/* 4. LES ÉQUIPEMENTS INCLUS */}
      <section className="bg-sv-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">{t.equipmentsTitle}</h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {t.equipmentsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POUR QUI */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold text-sv-navy md:text-4xl">{t.audienceTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sv-navy/70">{t.audienceIntro}</p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {t.audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-sv-navy/15 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold text-sv-navy"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UNE LOCALISATION STRATÉGIQUE */}
      <section className="bg-slate-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sv-cyan-btn text-white">
            <PinIcon />
          </span>
          <h2 className="mt-6 text-3xl font-bold text-sv-navy md:text-4xl">{t.locationTitle}</h2>
          <p className="mt-6 text-base leading-relaxed text-sv-navy/70">{t.locationP1}</p>
          <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{t.locationP2}</p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-white py-16 md:py-20">
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
