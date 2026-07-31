/* eslint-disable @next/next/no-img-element */
import { withLang, type Lang } from "@/config/navigation";
import { MENZAH_STYLES } from "./menzahStyles";
import MagentaDivider from "@/components/espace-de-vie/MagentaDivider";

/**
 * Startup Village Menzah page body (bilingual). Identical markup, scoped styles,
 * images and CSS marquee for both languages; only text and CTA hrefs differ.
 */

const IMG = "/assets/images/menzah/";

const GALLERY = ["1.jpg", "2.jpg", "3.png", "4.png", "5.jpg", "6.png", "7.jpg", "8.jpg", "9.jpg", "10.png"];

const LOGOS = [
  { file: "logo-1.png", name: "ExpressFm" },
  { file: "logo-2.png", name: "Qualipro" },
  { file: "logo-3.png", name: "Medianet" },
  { file: "logo-4.png", name: "Chtelix" },
  { file: "logo-5.png", name: "EMP" },
  { file: "logo-6.png", name: "Alder" },
  { file: "logo-7.png", name: "Skylight" },
  { file: "logo-8.png", name: "Keef" },
  { file: "logo-9.png", name: "Poslik" },
];

const T = {
  fr: {
    heroSub: "L'écosystème de l'innovation, des médias, de l'entrepreneuriat et du Hub IA",
    heroBtn: "RÉSERVER UN ESPACE",
    introTitle: "Startup Village Menzah – Là où tout a commencé",
    introP1: "Le 20 novembre 2021, Startup Village Menzah a ouvert ses portes, donnant naissance à un écosystème d'innovation et de co-création unique en Tunisie. Installé dans un bâtiment emblématique imaginé par l'architecte Olivier Clément Cacoub, ce lieu est le fruit de dix mois de collaboration entre architectes, scénographes et futurs villageois.",
    introP2: "Aujourd'hui, Startup Village Menzah est bien plus qu'un espace de coworking : c'est un lieu de vie dédié aux startups, entrepreneurs, créateurs et freelances. Pensé pour favoriser l'innovation, la collaboration et le développement des projets, il est également entièrement accessible aux personnes à mobilité réduite (PMR).",
    statsTitle: ["Un espace stratégique", "pour des usages pratiques"],
    statsP: "Ici, tout a été pensé pour accompagner les pratiques professionnelles d'aujourd'hui : hybrides, rapides et connectées.",
    stats: [
      { h: "17 bureaux privatifs", s: "+120 postes" },
      { h: "2 espaces Coworking", s: "+90 postes" },
      { h: "4 salles de réunions", s: "+40 postes" },
      { h: "1 salle polyvalente", s: "+70 postes" },
    ],
    galleryBand: "DÉCOUVREZ NOS ESPACES",
    spaceAlt: "Espace",
    logosTitle: "Ils y sont déjà",
    polesTitle: "NOS PÔLES D'EXPERTISE",
    poles: [
      { h: "IA FIRST", p: "Startup Village rassemble l'expertise de Medianet et Saphir Consult, deux acteurs majeurs du digital avec plus de 20 ans d'expérience internationale. Cette alliance permet d'offrir un accompagnement solide et global aux porteurs de projets technologiques." },
      { h: "MEDIA LAB", p: "Grâce à notre partenariat avec Express FM, la première radio économique en Tunisie, MediaLab offre un environnement d'incubation unique pour les startups médias et journalisme : studios d'enregistrement, coaching média, data journalisme, et bien plus." },
      { h: "FOOD LAB", p: "À travers notre collaboration avec CoChef, nous avons créé un laboratoire Foodtech où les entrepreneurs peuvent tester de nouveaux concepts culinaires, accueillir des chefs en résidence, et expérimenter des projets innovants dans l'alimentation." },
    ],
    polesCta: "Je rejoins la communauté",
    mapTitle: "Startup Village Menzah",
    mapLink: "Voir sur Google Maps",
  },
  en: {
    heroSub: "The ecosystem of innovation, media and entrepreneurship",
    heroBtn: "BOOK A SPACE",
    introTitle: "Startup Village Menzah – Where it all began",
    introP1: "On 20 November 2021, Startup Village Menzah opened its doors, giving rise to a one-of-a-kind innovation and co-creation ecosystem in Tunisia. Housed in an iconic building designed by architect Olivier Clément Cacoub, the space is the result of ten months of collaboration between architects, set designers and future villagers.",
    introP2: "Today, Startup Village Menzah is far more than a coworking space: it's a home for startups, entrepreneurs, creators and freelancers. Designed to foster innovation, collaboration and project growth, it is also fully accessible to people with reduced mobility (PRM).",
    statsTitle: ["A strategic space", "for practical, everyday uses"],
    statsP: "Everything here is designed to support today's professional practices: hybrid, fast and connected.",
    stats: [
      { h: "17 private offices", s: "+120 seats" },
      { h: "2 coworking areas", s: "+90 seats" },
      { h: "4 meeting rooms", s: "+40 seats" },
      { h: "1 multipurpose room", s: "+70 seats" },
    ],
    galleryBand: "DISCOVER OUR SPACES",
    spaceAlt: "Space",
    logosTitle: "They're already here",
    polesTitle: "OUR AREAS OF EXPERTISE",
    poles: [
      { h: "IA FIRST", p: "Startup Village brings together the expertise of Medianet and Saphir Consult, two major digital players with over 20 years of international experience. This alliance delivers solid, end-to-end support to technology project leaders." },
      { h: "MEDIA LAB", p: "Thanks to our partnership with Express FM, Tunisia's leading business radio, MediaLab offers a unique incubation environment for media and journalism startups: recording studios, media coaching, data journalism and much more." },
      { h: "FOOD LAB", p: "Through our collaboration with CoChef, we created a Foodtech lab where entrepreneurs can test new culinary concepts, host chefs in residence and experiment with innovative food projects." },
    ],
    polesCta: "I'm joining the community",
    mapTitle: "Startup Village Menzah",
    mapLink: "View on Google Maps",
  },
  ar: {
    heroSub: "منظومة الابتكار والإعلام وريادة الأعمال",
    heroBtn: "احجز فضاءً",
    introTitle: "ستارتب فيليج المنزه – حيث بدأ كلّ شيء",
    introP1: "في 20 نوفمبر 2021، فتح ستارتب فيليج المنزه أبوابه، ليُطلق منظومة ابتكار وإبداع مشترك فريدة من نوعها في تونس. يقع هذا الفضاء داخل مبنى مميّز صمّمه المعماري أوليفييه كليمون كاكوب، وهو ثمرة عشرة أشهر من التعاون بين المعماريين ومصمّمي المشاهد وسكان القرية المستقبليين.",
    introP2: "اليوم، ستارتب فيليج المنزه أكثر بكثير من فضاء عمل مشترك: إنّه مكان حياة مخصّص للشركات الناشئة وروّاد الأعمال والمبدعين والمستقلّين. صُمِّم لتحفيز الابتكار والتعاون وتطوير المشاريع، وهو أيضًا متاح بالكامل للأشخاص ذوي الإعاقة الحركية (PMR).",
    statsTitle: ["فضاء استراتيجي", "لاستخدامات عملية"],
    statsP: "هنا، صُمِّم كلّ شيء لمواكبة الممارسات المهنية اليوم: هجينة وسريعة ومترابطة.",
    stats: [
      { h: "17 مكتبًا خاصًا", s: "+120 مقعدًا" },
      { h: "فضاءان للعمل المشترك", s: "+90 مقعدًا" },
      { h: "4 قاعات اجتماعات", s: "+40 مقعدًا" },
      { h: "قاعة متعدّدة الأغراض", s: "+70 مقعدًا" },
    ],
    galleryBand: "اكتشف فضاءاتنا",
    spaceAlt: "فضاء",
    logosTitle: "هم هنا بالفعل",
    polesTitle: "أقطاب خبرتنا",
    poles: [
      { h: "IA FIRST", p: "يجمع ستارتب فيليج خبرة Medianet وSaphir Consult، وهما فاعلان رئيسيان في المجال الرقمي بأكثر من 20 عامًا من الخبرة الدولية. يتيح هذا التحالف تقديم مرافقة متينة وشاملة لأصحاب المشاريع التكنولوجية." },
      { h: "MEDIA LAB", p: "بفضل شراكتنا مع Express FM، أوّل إذاعة اقتصادية في تونس، يوفّر MediaLab بيئة احتضان فريدة للشركات الناشئة في الإعلام والصحافة: استوديوهات تسجيل، تدريب إعلامي، صحافة البيانات، وغير ذلك الكثير." },
      { h: "FOOD LAB", p: "عبر تعاوننا مع CoChef، أنشأنا مختبرًا في تكنولوجيا الغذاء يمكن فيه لروّاد الأعمال اختبار مفاهيم طهي جديدة واستضافة طهاة مقيمين وتجربة مشاريع مبتكرة في مجال الغذاء." },
    ],
    polesCta: "أنضمّ إلى المجتمع",
    mapTitle: "ستارتب فيليج المنزه",
    mapLink: "عرض على خرائط Google",
  },
} as const;

export default function MenzahContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const contact = withLang("/contact", lang);

  return (
    <div className="menzah-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <style>{MENZAH_STYLES}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url('${IMG}Hero.jpg')` }} />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <h1>Startup Village Menzah</h1>
          <p>{t.heroSub}</p>
          <a href={contact} className="btn btn--blue">{t.heroBtn}</a>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section" id="concept">
        <div className="container intro-split">
          <div className="intro-split__media">
            <img src={`${IMG}la-ou-tout-a-commence.jpg`} alt={t.introTitle} loading="lazy" />
          </div>
          <div className="intro-split__text">
            <h2>{t.introTitle}</h2>
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--pt-tight" id="espace-vie">
        <div className="container">
          <div className="head-center">
            <h2>
              {t.statsTitle[0]}
              <br />
              {t.statsTitle[1]}
            </h2>
            <p>{t.statsP}</p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19v2M18 19v2M7 14h10a2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2ZM9 14V8a3 3 0 0 1 6 0v6M9 8H7a2 2 0 0 0-2 2v2" /></svg></div>
              <h3>{t.stats[0].h}</h3>
              <span>{t.stats[0].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg></div>
              <h3>{t.stats[1].h}</h3>
              <span>{t.stats[1].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg></div>
              <h3>{t.stats[2].h}</h3>
              <span>{t.stats[2].s}</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg></div>
              <h3>{t.stats[3].h}</h3>
              <span>{t.stats[3].s}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPACES GALLERY */}
      <div id="startups">
        <MagentaDivider title={t.galleryBand} color="green" />
      </div>
      <section className="section section--tight">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((file, i) => (
              <figure key={file}>
                <img src={`${IMG}${file}`} alt={`${t.spaceAlt} ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="section section--tight">
        <div className="container logos">
          <div className="logos__title">
            <h2>{t.logosTitle}</h2>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {LOGOS.map((logo) => (
                <img key={logo.file} src={`${IMG}${logo.file}`} alt={logo.name} loading="lazy" />
              ))}
              {LOGOS.map((logo) => (
                <img key={`${logo.file}-dup`} src={`${IMG}${logo.file}`} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PÔLES */}
      <section className="section" id="contact">
        <div className="container">
          <div className="head-center">
            <h2>{t.polesTitle}</h2>
          </div>
          <div className="poles">
            <div className="pole pole--ia">
              <h3>{t.poles[0].h}</h3>
              <p>{t.poles[0].p}</p>
            </div>
            <div className="pole pole--media">
              <h3>{t.poles[1].h}</h3>
              <p>{t.poles[1].p}</p>
            </div>
            <div className="pole pole--food">
              <h3>{t.poles[2].h}</h3>
              <p>{t.poles[2].p}</p>
            </div>
          </div>
          <div className="poles-cta">
            <a href={contact} className="btn btn--blue">{t.polesCta}</a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map section--tight">
        <div className="container">
          <div className="map__card">
            <h3>{t.mapTitle}</h3>
            <p>
              <a href="https://maps.app.goo.gl/PYNjuifqJJaxQQmi6" target="_blank" rel="noopener noreferrer">
                {t.mapLink}
              </a>
            </p>
          </div>
          <iframe
            title="Startup Village Menzah"
            src="https://maps.google.com/maps?q=Startup%20Village%20Menzah%20Tunis&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
