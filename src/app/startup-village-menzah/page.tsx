/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Village Menzah",
  description:
    "Startup Village Menzah — L'écosystème de l'innovation, des médias et de l'entrepreneuriat.",
};

// Menzah page assets, imported locally from the source repository into the
// shared asset store (single source of truth).
const IMG = "/assets/images/menzah/";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

.menzah-page {
  --navy:#0B2A4A; --blue:#25AFE0; --yellow:#F5B339; --pink:#E21C57; --green:#77B457;
  --ink:#14233a; --muted:#5a6b80; --soft:#f5f8fb;
  --radius:22px; --radius-sm:14px;
  --shadow:0 18px 50px -20px rgba(11,42,74,.28);
  --shadow-sm:0 10px 30px -16px rgba(11,42,74,.30);
  --maxw:1180px;
  --font-head:'Poppins',system-ui,sans-serif;
  --font-body:'Inter',system-ui,sans-serif;
  font-family:var(--font-body); color:var(--ink); line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
.menzah-page * { box-sizing:border-box; }
.menzah-page img { max-width:100%; display:block; }
.menzah-page a { color:inherit; text-decoration:none; }
.menzah-page h1,.menzah-page h2,.menzah-page h3,.menzah-page h4 { font-family:var(--font-head); color:var(--navy); margin:0; line-height:1.15; }

.menzah-page .container { width:100%; max-width:var(--maxw); margin:0 auto; padding:0 24px; }
.menzah-page .section { padding:84px 0; }
.menzah-page .section--tight { padding:60px 0; }
.menzah-page .section--pb-tight { padding-bottom:40px; }
.menzah-page .section--pt-tight { padding-top:40px; }

.menzah-page .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-family:var(--font-head); font-weight:600; font-size:15px; letter-spacing:.02em; padding:15px 30px; border-radius:999px; border:none; cursor:pointer; transition:transform .18s ease, box-shadow .18s ease, background .18s ease; }
.menzah-page .btn:hover { transform:translateY(-2px); }
.menzah-page .btn--blue { background:var(--blue); color:#fff; box-shadow:0 14px 30px -12px rgba(37,175,224,.7); }
.menzah-page .btn--green { background:var(--green); color:#fff; box-shadow:0 14px 30px -12px rgba(119,180,87,.7); font-size:17px; padding:18px 40px; }

/* HERO */
.menzah-page .hero { position:relative; min-height:560px; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff; overflow:hidden; }
.menzah-page .hero__bg { position:absolute; inset:0; background-position:center; background-size:cover; background-repeat:no-repeat; transform:scale(1.02); }
.menzah-page .hero__overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(11,42,74,.45), rgba(11,42,74,.62)); }
.menzah-page .hero__inner { position:relative; z-index:2; padding:90px 24px; max-width:880px; }
.menzah-page .hero h1 { color:#fff; font-size:clamp(34px,6vw,66px); font-weight:800; letter-spacing:.01em; text-shadow:0 6px 30px rgba(0,0,0,.3); }
.menzah-page .hero p { font-size:clamp(16px,2.4vw,22px); font-weight:400; margin:18px 0 34px; opacity:.96; }

/* INTRO */
.menzah-page .intro { position:relative; }
.menzah-page .intro__media { position:relative; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); min-height:560px; background-position:center; background-size:cover; background-repeat:no-repeat; display:flex; align-items:center; justify-content:flex-start; }
.menzah-page .intro__media::after { content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(11,42,74,.12), rgba(11,42,74,.35)); }
.menzah-page .intro__card { position:relative; z-index:2; margin:40px; max-width:640px; background:rgba(11,42,74,.92); color:#fff; padding:44px 46px; border-radius:var(--radius); box-shadow:var(--shadow); }
.menzah-page .intro__card h2 { color:#fff; font-size:clamp(24px,3.2vw,34px); font-weight:700; }
.menzah-page .intro__card p { color:rgba(255,255,255,.9); font-size:15.5px; margin:18px 0 14px; }
.menzah-page .intro__card p:last-child { margin-bottom:0; }

/* STATS */
.menzah-page .head-center { text-align:center; max-width:760px; margin:0 auto 56px; }
.menzah-page .head-center h2 { font-size:clamp(28px,4vw,44px); font-weight:700; }
.menzah-page .head-center p { color:var(--muted); font-size:17px; margin-top:18px; }
.menzah-page .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:26px; }
.menzah-page .stat { text-align:center; padding:34px 20px; border-radius:var(--radius); background:var(--soft); border:1px solid #eef2f6; transition:transform .2s ease, box-shadow .2s ease; }
.menzah-page .stat:hover { transform:translateY(-6px); box-shadow:var(--shadow-sm); }
.menzah-page .stat__icon { width:54px; height:54px; margin:0 auto 18px; }
.menzah-page .stat__icon svg { width:100%; height:100%; stroke:var(--navy); }
.menzah-page .stat h3 { font-size:18px; font-weight:700; }
.menzah-page .stat span { display:block; color:var(--blue); font-weight:600; font-family:var(--font-head); font-size:14px; margin-top:6px; }

/* GALLERY */
.menzah-page .gallery-band { background:var(--blue); color:#fff; text-align:center; padding:30px 0; border-radius:var(--radius-sm); }
.menzah-page .gallery-band h2 { color:#fff; font-size:clamp(22px,3.4vw,34px); letter-spacing:.04em; font-weight:700; }
.menzah-page .gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:22px; margin-top:34px; }
.menzah-page .gallery figure { margin:0; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow-sm); aspect-ratio:16/10; }
.menzah-page .gallery img { width:100%; height:100%; object-fit:cover; border-radius:var(--radius); transition:transform .5s ease; }
.menzah-page .gallery figure:hover img { transform:scale(1.06); }

/* LOGOS */
.menzah-page .logos { display:grid; grid-template-columns:280px 1fr; gap:48px; align-items:center; }
.menzah-page .logos__title h2 { font-size:clamp(26px,3.4vw,38px); font-weight:800; line-height:1.1; }
.menzah-page .marquee { overflow:hidden; -webkit-mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.menzah-page .marquee__track { display:flex; align-items:center; gap:56px; width:max-content; animation:menzahScroll 28s linear infinite; }
.menzah-page .marquee:hover .marquee__track { animation-play-state:paused; }
.menzah-page .marquee__track img { height:52px; width:auto; object-fit:contain; }
@keyframes menzahScroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }

/* PÔLES */
.menzah-page .poles { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
.menzah-page .pole { border-radius:var(--radius); padding:40px 34px; color:#fff; box-shadow:var(--shadow-sm); display:flex; flex-direction:column; gap:16px; text-align:center; align-items:center; justify-content:center; transition:transform .2s ease, box-shadow .2s ease; }
.menzah-page .pole:hover { transform:translateY(-6px); box-shadow:var(--shadow); }
.menzah-page .pole h3 { color:#fff; font-size:22px; font-weight:800; letter-spacing:.04em; }
.menzah-page .pole p { color:rgba(255,255,255,.94); font-size:15px; margin:0; }
.menzah-page .pole--ia { background:var(--green); }
.menzah-page .pole--media { background:var(--blue); }
.menzah-page .pole--food { background:var(--pink); }
.menzah-page .poles-cta { text-align:center; margin-top:50px; }

/* MAP */
.menzah-page .map { padding:0 0 60px; }
.menzah-page .map__card { max-width:560px; margin:0 auto 24px; text-align:center; border:1px solid #eef2f6; border-radius:var(--radius-sm); padding:20px 22px; box-shadow:var(--shadow-sm); background:#fff; }
.menzah-page .map__card h3 { font-size:18px; font-weight:700; }
.menzah-page .map__card p { color:var(--muted); margin:6px 0 0; font-size:14.5px; }
.menzah-page .map__card a { color:var(--blue); font-weight:600; }
.menzah-page .map iframe { width:100%; height:460px; border:0; display:block; border-radius:var(--radius); box-shadow:var(--shadow-sm); }

/* RESPONSIVE */
@media (max-width:980px) {
  .menzah-page .stats { grid-template-columns:repeat(2,1fr); }
  .menzah-page .poles { grid-template-columns:1fr; }
  .menzah-page .logos { grid-template-columns:1fr; gap:28px; text-align:center; }
}
@media (max-width:640px) {
  .menzah-page .section { padding:56px 0; }
  .menzah-page .gallery { grid-template-columns:1fr; }
  .menzah-page .stats { grid-template-columns:1fr; }
  .menzah-page .intro__card { margin:16px; padding:32px 26px; }
}
`;

const GALLERY = [
  "1.jpg", "2.jpg", "3.png", "4.png", "5.jpg",
  "6.png", "7.jpg", "8.jpg", "9.jpg", "10.png",
];

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

export default function StartupVillageMenzahPage() {
  return (
    <div className="menzah-page">
      <style>{STYLES}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url('${IMG}Hero.jpg')` }} />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <h1>Startup Village Menzah</h1>
          <p>{"L'écosystème de l'innovation, des médias et de l'entrepreneuriat"}</p>
          <a href="#contact" className="btn btn--blue">RÉSERVER UN ESPACE</a>
        </div>
      </section>

      {/* INTRO — LÀ OÙ TOUT A COMMENCÉ */}
      <section className="section section--pb-tight" id="concept">
        <div className="container intro">
          <div
            className="intro__media"
            style={{ backgroundImage: `url('${IMG}la-ou-tout-a-commence.jpg')` }}
          >
            <div className="intro__card">
              <h2>{"Startup Village Menzah – Là où tout a commencé"}</h2>
              <p>{"Le 20 novembre 2021, Startup Village Menzah a ouvert ses portes, donnant naissance à un écosystème d'innovation et de co-création inédit en Tunisie. Niché dans un bâtiment historique conçu par le célèbre architecte Olivier Clément Cacoub, cet espace unique a été imaginé et transformé grâce à un travail collaboratif de 10 mois, réunissant villageois, architectes et scénographes autour d'un projet commun."}</p>
              <p>{"Plus qu'un simple espace de coworking à Tunis, Startup Village Menzah est un lieu de vie chaleureux, pensé pour favoriser l'émergence d'idées novatrices, le développement de projets entrepreneuriaux et l'épanouissement des talents tunisiens. Il offre un cadre stimulant pour les startups, freelances, créateurs et porteurs de projets, alliant créativité, convivialité et collaboration."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC USAGE / STATS */}
      <section className="section section--pt-tight" id="espace-vie">
        <div className="container">
          <div className="head-center">
            <h2>
              Un espace stratégique
              <br />
              pour des usages pratiques
            </h2>
            <p>{"Ici, tout a été pensé pour accompagner les pratiques professionnelles d'aujourd'hui : hybrides, rapides et connectées."}</p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19v2M18 19v2M7 14h10a2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2ZM9 14V8a3 3 0 0 1 6 0v6M9 8H7a2 2 0 0 0-2 2v2" /></svg>
              </div>
              <h3>17 bureaux privatifs</h3>
              <span>+120 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
              </div>
              <h3>2 espaces Coworking</h3>
              <span>+90 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg>
              </div>
              <h3>4 salles de réunions</h3>
              <span>+40 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg>
              </div>
              <h3>1 salle polyvalente</h3>
              <span>+70 positions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPACES GALLERY */}
      <section className="section section--tight" id="startups">
        <div className="container">
          <div className="gallery-band">
            <h2>DÉCOUVREZ NOS ESPACES</h2>
          </div>
          <div className="gallery">
            {GALLERY.map((file, i) => (
              <figure key={file}>
                <img src={`${IMG}${file}`} alt={`Espace ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS — ILS Y SONT DÉJÀ */}
      <section className="section section--tight">
        <div className="container logos">
          <div className="logos__title">
            <h2>{"Ils y sont déjà"}</h2>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {LOGOS.map((logo) => (
                <img key={logo.file} src={`${IMG}${logo.file}`} alt={logo.name} />
              ))}
              {LOGOS.map((logo) => (
                <img key={`${logo.file}-dup`} src={`${IMG}${logo.file}`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS PÔLES D'EXPERTISE */}
      <section className="section" id="contact">
        <div className="container">
          <div className="head-center">
            <h2>{"NOS PÔLES D'EXPERTISE"}</h2>
          </div>
          <div className="poles">
            <div className="pole pole--ia">
              <h3>IA FIRST</h3>
              <p>{"Startup Village rassemble l'expertise de Medianet et Saphir Consult, deux acteurs majeurs du digital avec plus de 20 ans d'expérience internationale. Cette alliance permet d'offrir un accompagnement solide et global aux porteurs de projets technologiques."}</p>
            </div>
            <div className="pole pole--media">
              <h3>MEDIA LAB</h3>
              <p>{"Grâce à notre partenariat avec Express FM, la première radio économique en Tunisie, MediaLab offre un environnement d'incubation unique pour les startups médias et journalisme : studios d'enregistrement, coaching média, data journalisme, et bien plus."}</p>
            </div>
            <div className="pole pole--food">
              <h3>FOOD LAB</h3>
              <p>{"À travers notre collaboration avec CoChef, nous avons créé un laboratoire Foodtech où les entrepreneurs peuvent tester de nouveaux concepts culinaires, accueillir des chefs en résidence, et expérimenter des projets innovants dans l'alimentation."}</p>
            </div>
          </div>
          <div className="poles-cta">
            <a href="#contact" className="btn btn--green">Je rejoins la communauté</a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map section--tight">
        <div className="container">
          <div className="map__card">
            <h3>Startup Village Menzah</h3>
            <p>
              <a href="https://maps.app.goo.gl/PYNjuifqJJaxQQmi6" target="_blank" rel="noopener noreferrer">
                Voir sur Google Maps
              </a>
            </p>
          </div>
          <iframe
            title="Startup Village Menzah - Carte"
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
