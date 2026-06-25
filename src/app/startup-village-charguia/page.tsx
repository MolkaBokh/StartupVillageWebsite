/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Village — Charguia",
  description:
    "Startup Village Charguia — L'espace hybride du e-commerce et de l'innovation.",
};

// Charguia page assets, imported locally from the source repository into the
// shared asset store (single source of truth). Original filenames contained
// spaces / special characters and have been sanitized.
const IMG = "/assets/images/charguia/";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

.charguia-page {
  --navy:#0B2A4A; --blue:#25AFE0; --yellow:#F5B339; --pink:#E21C57; --green:#77B457;
  --ink:#14233a; --muted:#5a6b80; --bg:#ffffff; --soft:#f5f8fb;
  --radius:22px; --radius-sm:14px;
  --shadow:0 18px 50px -20px rgba(11,42,74,.28);
  --shadow-sm:0 10px 30px -16px rgba(11,42,74,.30);
  --maxw:1180px;
  --font-head:'Poppins',system-ui,sans-serif;
  --font-body:'Inter',system-ui,sans-serif;
  font-family:var(--font-body); color:var(--ink); background:var(--bg); line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
.charguia-page * { box-sizing:border-box; }
.charguia-page img { max-width:100%; display:block; }
.charguia-page a { color:inherit; text-decoration:none; }
.charguia-page h1,.charguia-page h2,.charguia-page h3,.charguia-page h4 { font-family:var(--font-head); color:var(--navy); margin:0; line-height:1.15; }

.charguia-page .container { width:100%; max-width:var(--maxw); margin:0 auto; padding:0 24px; }
.charguia-page .section { padding:84px 0; }
.charguia-page .section--tight { padding:60px 0; }
.charguia-page .section--pb-tight { padding-bottom:40px; }
.charguia-page .section--pt-tight { padding-top:40px; }

.charguia-page .eyebrow { display:inline-block; font-family:var(--font-head); font-weight:600; font-size:13px; letter-spacing:.14em; text-transform:uppercase; color:var(--blue); margin-bottom:14px; }

.charguia-page .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-family:var(--font-head); font-weight:600; font-size:15px; letter-spacing:.02em; padding:15px 30px; border-radius:999px; border:none; cursor:pointer; transition:transform .18s ease, box-shadow .18s ease, background .18s ease; }
.charguia-page .btn:hover { transform:translateY(-2px); }
.charguia-page .btn--blue { background:var(--blue); color:#fff; box-shadow:0 14px 30px -12px rgba(37,175,224,.7); }
.charguia-page .btn--yellow { background:var(--yellow); color:var(--navy); box-shadow:0 14px 30px -12px rgba(245,179,57,.7); }
.charguia-page .btn--green { background:var(--green); color:#fff; box-shadow:0 14px 30px -12px rgba(119,180,87,.7); font-size:17px; padding:18px 40px; }

/* HERO */
.charguia-page .hero { position:relative; min-height:560px; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff; overflow:hidden; }
.charguia-page .hero__bg { position:absolute; inset:0; background:url('${IMG}1-hero.png') center/cover no-repeat; transform:scale(1.02); }
.charguia-page .hero__overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.30), rgba(0,0,0,.42)); }
.charguia-page .hero__inner { position:relative; z-index:2; padding:90px 24px; max-width:880px; }
.charguia-page .hero h1 { color:#fff; font-size:clamp(34px,6vw,66px); font-weight:800; letter-spacing:.01em; text-shadow:0 6px 30px rgba(0,0,0,.3); }
.charguia-page .hero p { font-size:clamp(16px,2.4vw,22px); font-weight:400; margin:18px 0 34px; opacity:.96; }

/* INTRO CARD */
.charguia-page .intro { position:relative; }
.charguia-page .intro__media { position:relative; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); min-height:540px; background:url('${IMG}2-sv-charguia.png') center/cover no-repeat; display:flex; align-items:center; justify-content:flex-end; }
.charguia-page .intro__media::after { content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(11,42,74,.12), rgba(11,42,74,.35)); }
.charguia-page .intro__card { position:relative; z-index:2; margin:40px; max-width:620px; background:rgba(11,42,74,.92); color:#fff; padding:44px 46px; border-radius:var(--radius); box-shadow:var(--shadow); }
.charguia-page .intro__card h2 { color:#fff; font-size:clamp(24px,3.2vw,34px); font-weight:700; }
.charguia-page .intro__card .sub { display:block; color:var(--blue); font-family:var(--font-head); font-weight:600; font-size:17px; margin:16px 0 18px; }
.charguia-page .intro__card p { color:rgba(255,255,255,.9); font-size:15.5px; margin:0 0 14px; }
.charguia-page .intro__card p:last-child { margin-bottom:0; }

/* STATS */
.charguia-page .head-center { text-align:center; max-width:760px; margin:0 auto 56px; }
.charguia-page .head-center h2 { font-size:clamp(28px,4vw,44px); font-weight:700; }
.charguia-page .head-center p { color:var(--muted); font-size:17px; margin-top:18px; }
.charguia-page .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:26px; }
.charguia-page .stat { text-align:center; padding:34px 20px; border-radius:var(--radius); background:var(--soft); border:1px solid #eef2f6; transition:transform .2s ease, box-shadow .2s ease; }
.charguia-page .stat:hover { transform:translateY(-6px); box-shadow:var(--shadow-sm); }
.charguia-page .stat__icon { width:54px; height:54px; margin:0 auto 18px; color:var(--navy); }
.charguia-page .stat__icon svg { width:100%; height:100%; stroke:var(--navy); }
.charguia-page .stat h3 { font-size:18px; font-weight:700; }
.charguia-page .stat span { display:block; color:var(--blue); font-weight:600; font-family:var(--font-head); font-size:14px; margin-top:6px; }

/* GALLERY */
.charguia-page .gallery-band { background:var(--blue); color:#fff; text-align:center; padding:30px 0; }
.charguia-page .gallery-band h2 { color:#fff; font-size:clamp(22px,3.4vw,34px); letter-spacing:.04em; font-weight:700; }
.charguia-page .gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:22px; }
.charguia-page .gallery figure { margin:0; border-radius:0; overflow:hidden; box-shadow:var(--shadow-sm); aspect-ratio:16 / 10; }
.charguia-page .gallery img { width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
.charguia-page .gallery figure:hover img { transform:scale(1.06); }

/* CO-STORAGE */
.charguia-page .split { display:grid; grid-template-columns:1.05fr .95fr; gap:0; align-items:stretch; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); }
.charguia-page .split__media { position:relative; min-height:520px; background:url('${IMG}co-storage.png') center/cover no-repeat; }
.charguia-page .split__body { background:var(--navy); color:#fff; padding:56px 52px; display:flex; flex-direction:column; justify-content:center; }
.charguia-page .split__body h2 { color:#fff; font-size:clamp(28px,3.6vw,40px); font-weight:800; letter-spacing:.02em; }
.charguia-page .split__body .sub { color:var(--blue); font-family:var(--font-head); font-weight:600; font-size:18px; margin:14px 0 22px; }
.charguia-page .split__body p { color:rgba(255,255,255,.88); font-size:15.5px; margin:0 0 16px; }
.charguia-page .split__body .btn { align-self:flex-start; margin-top:14px; }

/* SERVICE STRIP */
.charguia-page .strip { display:grid; grid-template-columns:repeat(4,1fr); }
.charguia-page .strip div { color:#fff; text-align:center; font-family:var(--font-head); font-weight:600; font-size:16px; padding:36px 24px; display:flex; align-items:center; justify-content:center; }
.charguia-page .strip .s-blue { background:var(--blue); }
.charguia-page .strip .s-yellow { background:var(--yellow); }
.charguia-page .strip .s-pink { background:var(--pink); }
.charguia-page .strip .s-green { background:var(--green); }

/* MARKET & CO */
.charguia-page .market { position:relative; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); min-height:560px; background:url('${IMG}market-co.png') center/cover no-repeat; display:flex; align-items:center; justify-content:flex-end; }
.charguia-page .market::before { content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(11,42,74,.15), rgba(11,42,74,.05)); }
.charguia-page .market__card { position:relative; z-index:2; margin:40px; max-width:600px; background:#fff; padding:46px 48px; border-radius:var(--radius); box-shadow:var(--shadow); }
.charguia-page .market__card h2 { font-size:clamp(28px,3.4vw,40px); font-weight:800; }
.charguia-page .market__card .sub { display:block; font-family:var(--font-head); font-weight:600; font-size:17px; color:var(--ink); margin:14px 0 22px; }
.charguia-page .market__card .sub b { color:var(--navy); }
.charguia-page .market__card p { color:var(--muted); font-size:15.5px; margin:0 0 16px; }
.charguia-page .market__card p b { color:var(--ink); }
.charguia-page .market__card .btn { margin-top:10px; }

/* LOGOS */
.charguia-page .logos-wrap { background:var(--soft); }
.charguia-page .logos { display:grid; grid-template-columns:280px 1fr; gap:48px; align-items:center; }
.charguia-page .logos__title h2 { font-size:clamp(26px,3.4vw,38px); font-weight:800; line-height:1.1; }
.charguia-page .marquee { overflow:hidden; -webkit-mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.charguia-page .marquee__track { display:flex; align-items:center; gap:56px; width:max-content; animation:charguiaScroll 28s linear infinite; }
.charguia-page .marquee:hover .marquee__track { animation-play-state:paused; }
.charguia-page .marquee__track img { height:52px; width:auto; object-fit:contain; }
@keyframes charguiaScroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }

/* VILLAGEOIS */
.charguia-page .villageois { text-align:center; }
.charguia-page .villageois h2 { font-size:clamp(28px,4vw,44px); font-weight:800; }
.charguia-page .villageois > .container > p.lead { color:var(--muted); font-size:18px; margin:14px 0 50px; }
.charguia-page .benefits { display:grid; grid-template-columns:repeat(3,1fr); gap:36px; max-width:880px; margin:0 auto 50px; }
.charguia-page .benefit__icon { width:56px; height:56px; margin:0 auto 16px; }
.charguia-page .benefit__icon svg { width:100%; height:100%; stroke:var(--navy); }
.charguia-page .benefit h3 { font-size:18px; font-weight:600; color:var(--ink); }

/* MAP */
.charguia-page .map { padding:0 0 60px; }
.charguia-page .map iframe { width:100%; height:460px; border:0; display:block; border-radius:var(--radius); box-shadow:var(--shadow-sm); }

/* RESPONSIVE */
@media (max-width:980px) {
  .charguia-page .stats { grid-template-columns:repeat(2,1fr); }
  .charguia-page .split { grid-template-columns:1fr; }
  .charguia-page .split__media { min-height:320px; }
  .charguia-page .logos { grid-template-columns:1fr; gap:28px; text-align:center; }
}
@media (max-width:640px) {
  .charguia-page .section { padding:56px 0; }
  .charguia-page .gallery { grid-template-columns:1fr; }
  .charguia-page .stats { grid-template-columns:1fr; }
  .charguia-page .strip { grid-template-columns:1fr 1fr; }
  .charguia-page .benefits { grid-template-columns:1fr; }
  .charguia-page .intro__card, .charguia-page .market__card { margin:16px; padding:32px 26px; }
  .charguia-page .split__body { padding:40px 28px; }
}
`;

const GALLERY = [
  { file: "espace-1.png", alt: "Espace 1" },
  { file: "espace-2.png", alt: "Espace 2" },
  { file: "espace-3.png", alt: "Espace 3" },
  { file: "espace-4.png", alt: "Espace 4" },
  { file: "espace-5.jpeg", alt: "Espace 5" },
  { file: "espace-6.png", alt: "Espace 6" },
];

const LOGOS = [
  { file: "alania.png", name: "Alania" },
  { file: "farmasi.png", name: "Farmasi" },
  { file: "global-it-vision.png", name: "Global IT Vision" },
  { file: "seniatna.png", name: "Seniatna" },
  { file: "skytek.png", name: "Skytek" },
  { file: "waycon.png", name: "Waycon" },
  { file: "franchiselab.png", name: "FranchiseLab" },
  { file: "it-grow.png", name: "I.T Grow" },
  { file: "kamioun.png", name: "Kamioun" },
  { file: "open-work.png", name: "Open Work" },
];

export default function StartupVillageCharguiaPage() {
  return (
    <div className="charguia-page">
      <style>{STYLES}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__overlay"></div>
        <div className="hero__inner">
          <h1>Startup Village - Charguia</h1>
          <p>{"L'espace d'innovation dédié à l'e-commerce"}</p>
          <a href="#contact" className="btn btn--blue">RÉSERVER UN ESPACE</a>
        </div>
      </section>

      {/* INTRO — NOUVEAU CHAPITRE */}
      <section className="section section--pb-tight" id="concept">
        <div className="container intro">
          <div className="intro__media">
            <div className="intro__card">
              <h2>{"Startup Village Charguia – L'espace hybride du e-commerce et de l'innovation"}</h2>
              <span className="sub">{"Un nouveau chapitre dans l'aventure Startup Village"}</span>
              <p>{"Startup Village s'agrandit et choisit Charguia pour ouvrir un deuxième site, dans un emplacement stratégique au cœur de la zone industrielle, à deux pas de l'aéroport et des grands axes logistiques."}</p>
              <p>{"Né de l'envie d'aller plus loin, ce nouveau lieu incarne notre vision d'un travail plus fluide, plus humain, et encore plus connecté au monde."}</p>
              <p>
                {"Au Startup Village Charguia, on ne vient pas juste pour travailler."}
                <br />
                {"On vient pour créer, stocker, expédier, collaborer, produire… et respirer."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC USAGE */}
      <section className="section section--pt-tight" id="espace-vie">
        <div className="container">
          <div className="head-center">
            <h2>
              Un espace stratégique
              <br />
              pour des usages concrets
            </h2>
            <p>{"Ici, tout a été pensé pour accompagner les pratiques professionnelles d'aujourd'hui : hybrides, rapides et connectées."}</p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19v2M18 19v2M7 14h10a2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2ZM9 14V8a3 3 0 0 1 6 0v6M9 8H7a2 2 0 0 0-2 2v2" /></svg></div>
              <h3>17 bureaux privatifs</h3>
              <span>+120 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg></div>
              <h3>2 espaces Coworking</h3>
              <span>+90 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg></div>
              <h3>3 salles de réunions</h3>
              <span>+20 positions</span>
            </div>
            <div className="stat">
              <div className="stat__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg></div>
              <h3>1 salle polyvalente</h3>
              <span>+70 positions</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="container">
        <div className="gallery-band">
          <h2>DÉCOUVREZ NOS ESPACES</h2>
        </div>
      </div>
      <section className="section section--tight" id="startups">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((g) => (
              <figure key={g.file}>
                <img src={`${IMG}${g.file}`} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CO-STORAGE */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media"></div>
            <div className="split__body">
              <h2>Co-Storage</h2>
              <span className="sub">Logistique intégrée, pensée pour les marques agiles</span>
              <p>{"À Charguia, un entrepôt de 1000 m³ est intégré directement à l'espace de travail."}</p>
              <p>{"Une approche fluide et connectée, pour rapprocher les équipes de leurs opérations grâce à une expertise de plus de 10 années dans la gestion de stock, un ERP dédié et une chambre froide pour une conservation alimentaire spécifique."}</p>
              <p>{"Une solution souple, pour les e-commerçants et créateurs qui misent sur l'autonomie et la réactivité."}</p>
              <a href="#contact" className="btn btn--yellow">Je dépose mon stock</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <div className="container">
        <div className="strip">
          <div className="s-blue">Gestion optimisée des stocks</div>
          <div className="s-yellow">Préparation des commandes sur place</div>
          <div className="s-pink">Suivi des mouvements et inventaires</div>
          <div className="s-green">Appui logistique et une distribution autonome</div>
        </div>
      </div>

      {/* MARKET & CO */}
      <section className="section">
        <div className="container">
          <div className="market">
            <div className="market__card">
              <h2>Market &amp; Co</h2>
              <span className="sub"><b>Le concept store collaboratif</b> du Startup Village Charguia</span>
              <p><b>Market &amp; Co</b> est un <b>concept store multi-enseignes</b> installé au cœur de <b>Startup Village Charguia</b>. Pensé comme une <b>boutique partagée</b>, il réunit en un seul lieu une diversité de produits : <b>artisanat, design, art, alimentation, cosmétique naturelle, accessoires</b> et bien plus encore.</p>
              <p>{"L'objectif est de "}<b>faciliter l&apos;accès à la vente physique</b> pour les <b>entrepreneurs, artisans, producteurs et créateurs</b>, tout en offrant au public une expérience de <b>consommation locale, variée et authentique</b>.</p>
              <a href="#contact" className="btn btn--yellow">Je rejoins le concept</a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="section section--tight logos-wrap">
        <div className="container logos">
          <div className="logos__title">
            <h2>Ils y sont déjà</h2>
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

      {/* VILLAGEOIS */}
      <section className="section villageois" id="contact">
        <div className="container">
          <h2>POURQUOI DEVENIR VILLAGEOIS ?</h2>
          <p className="lead">Devenez membre !</p>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19v2M18 19v2M7 14h10a2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2ZM9 14V8a3 3 0 0 1 6 0v6M9 8H7a2 2 0 0 0-2 2v2" /></svg></div>
              <h3>Confort</h3>
            </div>
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" /></svg></div>
              <h3>Internet haut débit</h3>
            </div>
            <div className="benefit">
              <div className="benefit__icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a3 3 0 1 0-2.5-4.5M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M16 15a4 4 0 0 1 4 4v1" /></svg></div>
              <h3>{"Accès à une communauté diversifiée d'entrepreneurs et de créatifs"}</h3>
            </div>
          </div>
          <a href="#contact" className="btn btn--green">Je rejoins la communauté</a>
        </div>
      </section>

      {/* MAP */}
      <section className="map section--tight">
        <div className="container">
          <iframe
            title="Startup Village Charguia"
            src="https://www.google.com/maps?q=Startup+Village+Charguia,+28+Rue+8612,+Tunis&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
