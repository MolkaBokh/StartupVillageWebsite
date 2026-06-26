const IMG = "/assets/images/responsabilites/";
export const RESPONSABILITES_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.responsabilites-page {
  --sv-blue:#25AFE0; --sv-yellow:#F5B339; --sv-pink:#E21C57; --sv-green:#77B457; --sv-navy:#0F2748;
  --sv-ink:#0F2748; --sv-muted:#5a6b80; --sv-line:#e7ebf1; --sv-bg:#ffffff; --sv-bg-soft:#f7f9fc;
  --maxw:1180px; --radius:18px; --ease:cubic-bezier(0.22, 0.61, 0.36, 1);
  font-family:'Inter', system-ui, -apple-system, sans-serif;
  color:var(--sv-ink); background:var(--sv-bg); line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
.responsabilites-page * { box-sizing:border-box; }
.responsabilites-page img { display:block; max-width:100%; height:auto; }
.responsabilites-page h1,.responsabilites-page h2,.responsabilites-page h3,.responsabilites-page h4 {
  font-family:'Plus Jakarta Sans','Inter',sans-serif; margin:0; line-height:1.12; letter-spacing:-0.02em; color:var(--sv-navy);
}
.responsabilites-page .container { width:100%; max-width:var(--maxw); margin-inline:auto; padding-inline:24px; }
.responsabilites-page .br-desktop { display:none; }

/* SECTION 1 — HERO ÉDITORIAL */
.responsabilites-page .hero {
  position:relative;
  padding:132px 0 108px;
  background-image:
    linear-gradient(90deg, rgba(15,39,72,0.30) 0%, rgba(15,39,72,0.20) 60%, rgba(15,39,72,0.12) 100%),
    url('${IMG}hero.png');
  background-size:cover; background-position:center; background-repeat:no-repeat;
}
.responsabilites-page .hero .container { position:relative; z-index:1; }
.responsabilites-page .hero__label { margin:0 0 22px; text-transform:uppercase; letter-spacing:0.22em; font-size:13px; font-weight:600; color:var(--sv-blue); }
.responsabilites-page .hero__title { font-size:clamp(2.4rem, 5.4vw, 4.1rem); font-weight:800; max-width:16ch; color:#fff; text-shadow:0 2px 18px rgba(15,39,72,0.45); }
.responsabilites-page .hero__text { margin:28px 0 0; max-width:62ch; font-size:clamp(1.05rem, 1.6vw, 1.22rem); color:rgba(255,255,255,0.94); text-shadow:0 1px 12px rgba(15,39,72,0.4); }
.responsabilites-page .hero__badges { list-style:none; display:flex; flex-wrap:wrap; gap:14px; margin:40px 0 0; padding:0; }
.responsabilites-page .badge { font-weight:600; font-size:14px; padding:9px 20px; border-radius:999px; color:#fff; }
.responsabilites-page .badge--blue { background:var(--sv-blue); }
.responsabilites-page .badge--pink { background:var(--sv-pink); }
.responsabilites-page .badge--green { background:var(--sv-green); }

/* SECTION TITLE */
.responsabilites-page .section-title { font-size:clamp(1.8rem, 3.4vw, 2.6rem); font-weight:700; margin-bottom:32px; }

/* SECTION 2 — NOS ENGAGEMENTS */
.responsabilites-page .engagements { padding:60px 0; }
.responsabilites-page .engagements__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
.responsabilites-page .engagement-card { background:var(--sv-bg); border:1px solid var(--sv-line); border-radius:var(--radius); padding:38px 32px; transition:transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease); }
.responsabilites-page .engagement-card:hover { transform:translateY(-4px); box-shadow:0 18px 40px rgba(15,39,72,0.08); border-color:transparent; }
.responsabilites-page .engagement-card__bar { display:block; width:46px; height:5px; border-radius:999px; margin-bottom:26px; }
.responsabilites-page .engagement-card__bar--blue { background:var(--sv-blue); }
.responsabilites-page .engagement-card__bar--pink { background:var(--sv-pink); }
.responsabilites-page .engagement-card__bar--green { background:var(--sv-green); }
.responsabilites-page .engagement-card__title { font-size:1.32rem; font-weight:700; margin-bottom:12px; }
.responsabilites-page .engagement-card__text { margin:0; color:var(--sv-muted); font-size:1rem; }

/* SECTION 3 — RÉALISATIONS */
.responsabilites-page .realisations { padding:24px 0 60px; }
.responsabilites-page .realisation { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:32px 0; }
.responsabilites-page .realisation--reverse .realisation__media { order:2; }
.responsabilites-page .realisation__media { border-radius:var(--radius); overflow:hidden; box-shadow:0 24px 60px rgba(15,39,72,0.12); }
.responsabilites-page .realisation__media img { width:100%; height:460px; object-fit:cover; transition:transform 0.6s var(--ease); }
.responsabilites-page .realisation__media:hover img { transform:scale(1.04); }
.responsabilites-page .realisation__index { display:inline-block; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:14px; letter-spacing:0.12em; color:var(--sv-yellow); margin-bottom:16px; }
.responsabilites-page .realisation__title { font-size:clamp(1.6rem, 2.8vw, 2.2rem); font-weight:700; margin-bottom:18px; max-width:18ch; }
.responsabilites-page .realisation__text { margin:0; color:var(--sv-muted); font-size:1.08rem; max-width:52ch; }

/* SECTION 4 — PHOTO MANIFESTE */
.responsabilites-page .manifeste { position:relative; min-height:360px; display:grid; place-items:center; padding:80px 24px; background-image:url('${IMG}3.png'); background-size:cover; background-position:center; background-attachment:fixed; }
.responsabilites-page .manifeste__overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,39,72,0.5), rgba(15,39,72,0.4)); }
.responsabilites-page .manifeste__quote { position:relative; z-index:1; margin:0; max-width:22ch; text-align:center; color:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:clamp(1.7rem, 3.6vw, 2.8rem); line-height:1.25; letter-spacing:-0.02em; text-wrap:balance; }

/* SECTION 5 — CTA FINAL */
.responsabilites-page .cta { background:var(--sv-navy); padding:72px 0; text-align:center; }
.responsabilites-page .cta__title { color:#fff; font-size:clamp(1.9rem, 3.8vw, 2.9rem); font-weight:700; max-width:20ch; margin:0 auto 32px; text-wrap:balance; }
.responsabilites-page .cta__button { display:inline-block; text-decoration:none; background:var(--sv-blue); color:#fff; font-weight:600; font-size:1.05rem; padding:16px 38px; border-radius:999px; transition:transform 0.2s var(--ease), background 0.2s var(--ease), box-shadow 0.2s var(--ease); }
.responsabilites-page .cta__button:hover { background:var(--sv-yellow); color:var(--sv-navy); transform:translateY(-2px); box-shadow:0 14px 30px rgba(245,179,57,0.35); }

/* RESPONSIVE */
@media (min-width:720px) {
  .responsabilites-page .br-desktop { display:inline; }
}
@media (max-width:960px) {
  .responsabilites-page .engagements__grid { grid-template-columns:1fr; max-width:520px; }
  .responsabilites-page .realisation { grid-template-columns:1fr; gap:32px; padding:40px 0; }
  .responsabilites-page .realisation--reverse .realisation__media { order:0; }
  .responsabilites-page .realisation__media img { height:320px; }
}
@media (max-width:760px) {
  .responsabilites-page .hero { padding:96px 0 72px; }
  .responsabilites-page .engagements, .responsabilites-page .cta { padding:44px 0; }
  .responsabilites-page .manifeste { background-attachment:scroll; min-height:360px; }
}
`;
