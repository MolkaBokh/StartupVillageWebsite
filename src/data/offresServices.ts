import type { Lang } from "@/config/navigation";

/**
 * Shared content for the Offres & Services page: hero/CTA copy, the offers
 * grid (title, body, images, slug) and the eyebrow color per offer. The
 * page itself (OffresServicesContent) and the "coming soon" dedicated offer
 * pages (/offres-services/[slug]) both read from this single source so the
 * slug <-> title mapping never drifts out of sync.
 */

const BASE = "/assets/images/offres-services";

export type ServiceImage = { src: string; alt: string };

const REUNION_IMGS: ServiceImage[] = [
  { src: `${BASE}/reunion-1.png`, alt: "Salle de réunion 1" },
  { src: `${BASE}/reunion-2.png`, alt: "Salle de réunion 2" },
  { src: `${BASE}/reunion-3.png`, alt: "Salle de réunion 3" },
  { src: `${BASE}/reunion-4.png`, alt: "Salle de réunion 4" },
  { src: `${BASE}/reunion-5.png`, alt: "Salle de réunion 5" },
  { src: `${BASE}/reunion-6.png`, alt: "Salle de réunion 6" },
];
const STUDIO_IMGS: ServiceImage[] = [
  { src: `${BASE}/studio-1.png`, alt: "Studio 1" },
  { src: `${BASE}/studio-2.png`, alt: "Studio 2" },
  { src: `${BASE}/studio-3-offres.jpg`, alt: "Studio 3" },
];

/** Order-aligned with each language's `services` array below. */
export const SERVICE_SLUGS = [
  "salles-reunion-formation",
  "domiciliation",
  "accompagnement-startups",
  "studios-audiovisuels",
  "incubation",
  "cochef",
  "organisation-evenements",
  "soft-landing",
  "coworking-space",
  "co-storage",
  "louer-stand-exposition",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Order-aligned eyebrow accent color per offer. */
export const EYEBROW_COLORS = [
  "#6FA83C",
  "#25AFE0",
  "#F5B339",
  "#1A2238",
  "#E21C57",
  "#25AFE0",
  "#6FA83C",
  "#25AFE0",
  "#F5B339",
  "#1A2238",
  "#E21C57",
];

type ServiceEntry = {
  title: string;
  body: string;
  imgs: ServiceImage[];
  reverse: boolean;
};

type PageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  learnMore: string;
  services: ServiceEntry[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

export const OFFRES_SERVICES_T: Record<Lang, PageCopy> = {
  fr: {
    heroTitle: "Offres & Services",
    heroSubtitle: "Des espaces, services et accompagnements pensés pour répondre aux besoins des entrepreneurs, entreprises et communautés innovantes.",
    heroCta: "Nous contacter",
    learnMore: "En savoir plus",
    services: [
      {
        title: "Salles de réunion & formation",
        body: "Des espaces équipés pour organiser réunions, formations, ateliers, séminaires et sessions de travail collaboratives. Modulables et connectés, ils s'adaptent aussi bien à une réunion d'équipe qu'à une formation intensive ou un séminaire de plusieurs jours. Un cadre professionnel pensé pour stimuler la concentration et la performance de vos équipes.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "Domiciliation",
        body: "Une adresse professionnelle au cœur de Startup Village pour structurer votre activité et renforcer votre présence. Idéale pour les entrepreneurs et petites structures en quête de crédibilité, elle inclut la gestion de votre courrier et un accès privilégié à notre communauté. Une solution simple et flexible pour démarrer ou consolider votre activité sans contrainte immobilière.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "Domiciliation" }],
        reverse: true,
      },
      {
        title: "Accompagnement startups",
        body: "Un accompagnement pour aider les porteurs de projets et startups à structurer, développer et accélérer leurs initiatives. Nos experts vous apportent un conseil stratégique sur-mesure, une expertise métier pointue et un suivi personnalisé à chaque étape clé : structuration, développement commercial et accélération de la croissance. Vous pouvez solliciter une expertise ciblée dès qu'un besoin spécifique se présente.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "Accompagnement startups" }],
        reverse: false,
      },
      {
        title: "Studios Audiovisuels",
        body: "Un espace dédié à la création de contenus, aux interviews, podcasts, vidéos et formats digitaux professionnels. Équipé d'un matériel son, lumière et régie de qualité professionnelle, il permet de produire des contenus au rendu broadcast en toute autonomie. Un lieu idéal pour donner de la visibilité à votre marque, vos produits ou vos talents.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "Incubation",
        body: "Un cadre d'accompagnement pour transformer une idée en projet viable, tester son marché et préparer sa croissance. Le programme combine mentorat, ateliers pratiques et mises en relation avec des experts et investisseurs. Un tremplin concret pour valider votre modèle économique et passer à l'échelle.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "Incubation" }],
        reverse: false,
      },
      {
        title: "CoChef – Incubateur culinaire & Catering",
        body: "Un espace dédié à l'innovation culinaire, à l'accompagnement des projets food et à l'organisation de prestations de restauration. CoChef propose également un service de catering pour les événements, conférences, formations et rencontres organisés au Startup Village ou en extérieur. Une cuisine professionnelle et un accompagnement sur-mesure permettent de tester, produire et commercialiser vos concepts culinaires en toute sérénité.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
      },
      {
        title: "Organisation d'événements",
        body: "Des espaces modulables et une équipe dédiée pour organiser conférences, lancements de produits, ateliers et soirées networking clé en main. De la logistique à la scénographie, nous vous accompagnons pour faire de votre événement un succès mémorable.",
        imgs: [{ src: `${BASE}/organisation-evenements.jpg`, alt: "Organisation d'événements" }],
        reverse: false,
      },
      {
        title: "Soft Landing",
        body: "Une offre dédiée aux entrepreneurs et équipes internationales souhaitant s'implanter en Tunisie : accompagnement administratif, mise en réseau et accès immédiat à un environnement de travail clé en main. Un tremplin concret pour réussir votre installation et développer votre activité sur le marché tunisien et africain.",
        imgs: [{ src: `${BASE}/soft-landing-f.png`, alt: "Soft Landing" }],
        reverse: true,
      },
      {
        title: "Coworking Space",
        body: "Des espaces de coworking pensés pour la concentration et la collaboration, avec un accès flexible selon vos besoins : poste dédié, bureau partagé ou abonnement journalier. Un environnement stimulant pour évoluer au sein d'une communauté active d'entrepreneurs et de créatifs.",
        imgs: [{ src: `${BASE}/coworking.jpg`, alt: "Coworking Space" }],
        reverse: false,
      },
      {
        title: "Co-Storage",
        body: "Une solution logistique intégrée pensée pour les marques e-commerce : stockage, préparation de commandes et gestion des stocks au cœur même de votre espace de travail. Un entrepôt connecté à votre activité pour gagner en réactivité et en autonomie logistique.",
        imgs: [{ src: `${BASE}/costorage-offre.png`, alt: "Co-Storage" }],
        reverse: true,
      },
      {
        title: "Louer un stand d'exposition",
        body: "Un espace d'exposition et de vente au cœur de Startup Village pour présenter vos produits, rencontrer votre public et gagner en visibilité. Idéal pour les créateurs, artisans et marques qui souhaitent tester le commerce physique dans un lieu vivant et fréquenté.",
        imgs: [{ src: `${BASE}/louer-stand-exposition.jpg`, alt: "Louer un stand d'exposition" }],
        reverse: false,
      },
    ],
    ctaTitle: "Vous avez un besoin spécifique ?",
    ctaText: "Notre équipe vous accompagne pour trouver l'offre la plus adaptée à votre projet, votre équipe ou votre événement.",
    ctaBtn: "Nous contacter",
  },
  en: {
    heroTitle: "Offers & Services",
    heroSubtitle: "Spaces, services and support designed to meet the needs of entrepreneurs, businesses and innovative communities.",
    heroCta: "Contact us",
    learnMore: "Learn more",
    services: [
      {
        title: "Meeting & training rooms",
        body: "Equipped spaces for meetings, training sessions, workshops, seminars and collaborative work sessions. Modular and fully connected, they adapt just as well to a quick team meeting as to an intensive training course or a multi-day seminar. A professional setting designed to boost focus and performance.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "Business address",
        body: "A professional address at the heart of Startup Village to structure your activity and strengthen your presence. Ideal for entrepreneurs and small teams seeking credibility, it includes mail handling and privileged access to our community. A simple, flexible way to launch or consolidate your business without the burden of a physical office.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "Business address" }],
        reverse: true,
      },
      {
        title: "Startup support",
        body: "Tailored support to help project owners and startups structure, develop and accelerate their initiatives. Our experts provide bespoke strategic guidance, sharp business expertise and personalized support at every key stage: structuring, business development and growth acceleration. You can request targeted expertise as soon as a specific need arises.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "Startup support" }],
        reverse: false,
      },
      {
        title: "Audiovisual Studios",
        body: "A dedicated space for content creation, interviews, podcasts, videos and professional digital formats. Equipped with professional-grade sound, lighting and control gear, it lets you produce broadcast-quality content independently. The perfect place to give your brand, products or talent real visibility.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "Incubation",
        body: "A support framework to turn an idea into a viable project, test its market and prepare for growth. The programme combines mentoring, hands-on workshops and introductions to experts and investors. A concrete springboard to validate your business model and scale up.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "Incubation" }],
        reverse: false,
      },
      {
        title: "CoChef – Culinary Incubator & Catering",
        body: "A space dedicated to culinary innovation, food project support and catering services. CoChef also provides catering for events, conferences, training sessions and meetings held at Startup Village or off-site. A professional kitchen and tailored support let you test, produce and market your culinary concepts with complete peace of mind.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
      },
      {
        title: "Event organisation",
        body: "Modular spaces and a dedicated team to organise conferences, product launches, workshops and networking evenings, from A to Z. From logistics to staging, we help turn your event into a memorable success.",
        imgs: [{ src: `${BASE}/organisation-evenements.jpg`, alt: "Event organisation" }],
        reverse: false,
      },
      {
        title: "Soft Landing",
        body: "An offer dedicated to international entrepreneurs and teams looking to set up in Tunisia: administrative support, networking and immediate access to a turnkey work environment. A concrete springboard to a successful launch and growth across the Tunisian and African markets.",
        imgs: [{ src: `${BASE}/soft-landing-f.png`, alt: "Soft Landing" }],
        reverse: true,
      },
      {
        title: "Coworking Space",
        body: "Coworking spaces designed for focus and collaboration, with flexible access to match your needs: a dedicated desk, a shared office or a day pass. A stimulating environment to grow within an active community of entrepreneurs and creatives.",
        imgs: [{ src: `${BASE}/coworking.jpg`, alt: "Coworking Space" }],
        reverse: false,
      },
      {
        title: "Co-Storage",
        body: "An integrated logistics solution built for e-commerce brands: storage, order preparation and inventory management right at the heart of your workspace. A warehouse connected to your operations for greater responsiveness and logistics autonomy.",
        imgs: [{ src: `${BASE}/costorage-offre.png`, alt: "Co-Storage" }],
        reverse: true,
      },
      {
        title: "Rent an exhibition stand",
        body: "An exhibition and retail space at the heart of Startup Village to showcase your products, meet your audience and gain visibility. Perfect for creators, artisans and brands who want to test physical retail in a lively, well-frequented venue.",
        imgs: [{ src: `${BASE}/louer-stand-exposition.jpg`, alt: "Rent an exhibition stand" }],
        reverse: false,
      },
    ],
    ctaTitle: "Do you have a specific need?",
    ctaText: "Our team will help you find the offer best suited to your project, team or event.",
    ctaBtn: "Contact us",
  },
  ar: {
    heroTitle: "العروض والخدمات",
    heroSubtitle: "فضاءات وخدمات ومرافقة مصمّمة لتلبية احتياجات روّاد الأعمال والشركات والمجتمعات المبتكرة.",
    heroCta: "اتصل بنا",
    learnMore: "اعرف المزيد",
    services: [
      {
        title: "قاعات الاجتماعات والتكوين",
        body: "فضاءات مجهّزة لتنظيم الاجتماعات والتكوينات وورش العمل والندوات وجلسات العمل التشاركية. مرنة ومتّصلة، تتكيّف مع اجتماع سريع لفريقك أو تكوين مكثّف أو ندوة تمتد على عدّة أيام. إطار احترافي مصمَّم لتعزيز التركيز وأداء فرقك.",
        imgs: REUNION_IMGS,
        reverse: false,
      },
      {
        title: "التوطين",
        body: "عنوان مهني في قلب ستارتب فيليج لهيكلة نشاطك وتعزيز حضورك. مثالي لروّاد الأعمال والفرق الصغيرة الباحثة عن المصداقية، يشمل إدارة بريدك ووصولًا مميّزًا إلى مجتمعنا. حلّ بسيط ومرن لإطلاق نشاطك أو تعزيزه دون عبء مكتب فعلي.",
        imgs: [{ src: `${BASE}/domiciliation.png`, alt: "التوطين" }],
        reverse: true,
      },
      {
        title: "مرافقة الشركات الناشئة",
        body: "مرافقة لمساعدة أصحاب المشاريع والشركات الناشئة على هيكلة مبادراتهم وتطويرها وتسريعها. يقدّم خبراؤنا استشارة استراتيجية مصمَّمة خصّيصًا وخبرة قطاعية دقيقة ومرافقة شخصية في كلّ مرحلة أساسية: الهيكلة والتطوير التجاري وتسريع النموّ. يمكنك طلب خبرة محدّدة فور ظهور حاجة معيّنة.",
        imgs: [{ src: `${BASE}/accompagnement.png`, alt: "مرافقة الشركات الناشئة" }],
        reverse: false,
      },
      {
        title: "الاستوديوهات السمعية البصرية",
        body: "فضاء مخصّص لإنتاج المحتوى والمقابلات والبودكاست والفيديوهات والأشكال الرقمية الاحترافية. مجهّز بمعدّات صوت وإضاءة وتحكّم احترافية، يتيح إنتاج محتوى بجودة بثّ احترافية بكلّ استقلالية. مكان مثالي لمنح علامتك أو منتجاتك أو مواهبك ظهورًا حقيقيًا.",
        imgs: STUDIO_IMGS,
        reverse: true,
      },
      {
        title: "الحاضنة",
        body: "إطار مرافقة لتحويل الفكرة إلى مشروع قابل للتطبيق، واختبار سوقها والتحضير للنموّ. يجمع البرنامج بين التوجيه وورش عمل تطبيقية وفرص للتواصل مع خبراء ومستثمرين. نقطة انطلاق ملموسة لاختبار نموذجك الاقتصادي والانتقال إلى مرحلة التوسّع.",
        imgs: [{ src: `${BASE}/incubation.png`, alt: "الحاضنة" }],
        reverse: false,
      },
      {
        title: "CoChef – حاضنة الطهي والتوريد الغذائي",
        body: "فضاء مخصّص للابتكار الطهي ومرافقة المشاريع الغذائية وتنظيم خدمات الإطعام. تقدّم CoChef أيضًا خدمة توريد غذائي للفعاليات والمؤتمرات والتكوينات واللقاءات المنظّمة في ستارتب فيليج أو خارجه. مطبخ احترافي ومرافقة مصمَّمة خصّيصًا يتيحان لك اختبار مفاهيمك الطهوية وإنتاجها وتسويقها بكلّ اطمئنان.",
        imgs: [{ src: `${BASE}/cochef.png`, alt: "CoChef" }],
        reverse: true,
      },
      {
        title: "تنظيم الفعاليات",
        body: "فضاءات قابلة للتعديل وفريق مخصّص لتنظيم المؤتمرات وإطلاق المنتجات وورش العمل وأمسيات التواصل بشكل متكامل. من اللوجستيك إلى السينوغرافيا، نرافقك لجعل فعاليتك نجاحًا لا يُنسى.",
        imgs: [{ src: `${BASE}/organisation-evenements.jpg`, alt: "تنظيم الفعاليات" }],
        reverse: false,
      },
      {
        title: "الانطلاق السلس (Soft Landing)",
        body: "عرض مخصّص لروّاد الأعمال والفرق الدولية الراغبين في الاستقرار في تونس: مرافقة إدارية وربط بالشبكات ووصول فوري إلى بيئة عمل جاهزة. نقطة انطلاق ملموسة لنجاح استقرارك وتطوير نشاطك في السوق التونسية والإفريقية.",
        imgs: [{ src: `${BASE}/soft-landing-f.png`, alt: "الانطلاق السلس" }],
        reverse: true,
      },
      {
        title: "مساحة العمل المشترك",
        body: "فضاءات عمل مشترك مصمَّمة للتركيز والتعاون، مع وصول مرن حسب احتياجاتك: مكتب مخصّص أو مكتب مشترك أو اشتراك يومي. بيئة محفّزة للتطوّر ضمن مجتمع نشط من روّاد الأعمال والمبدعين.",
        imgs: [{ src: `${BASE}/coworking.jpg`, alt: "مساحة العمل المشترك" }],
        reverse: false,
      },
      {
        title: "Co-Storage",
        body: "حلّ لوجستي متكامل مصمَّم للعلامات التجارية في التجارة الإلكترونية: تخزين وتحضير للطلبات وإدارة للمخزون في قلب فضاء عملك. مستودع متّصل بنشاطك لمزيد من السرعة والاستقلالية اللوجستية.",
        imgs: [{ src: `${BASE}/costorage-offre.png`, alt: "Co-Storage" }],
        reverse: true,
      },
      {
        title: "استئجار جناح عرض",
        body: "فضاء للعرض والبيع في قلب ستارتب فيليج لعرض منتجاتك ولقاء جمهورك واكتساب ظهور أوسع. مثالي للمبدعين والحرفيين والعلامات الراغبين في اختبار البيع المباشر في مكان نابض بالحياة ومرتاد.",
        imgs: [{ src: `${BASE}/louer-stand-exposition.jpg`, alt: "استئجار جناح عرض" }],
        reverse: false,
      },
    ],
    ctaTitle: "هل لديك حاجة محدّدة؟",
    ctaText: "فريقنا يرافقك للعثور على العرض الأنسب لمشروعك أو فريقك أو فعاليتك.",
    ctaBtn: "اتصل بنا",
  },
};

export function offerTitle(slug: string, lang: Lang): string | undefined {
  const idx = SERVICE_SLUGS.indexOf(slug as ServiceSlug);
  if (idx === -1) return undefined;
  return OFFRES_SERVICES_T[lang].services[idx]?.title;
}
