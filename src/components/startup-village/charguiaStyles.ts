const IMG = "/assets/images/charguia/";
export const CHARGUIA_STYLES = `
.charguia-page {
  --navy:#0B2A4A; --blue:#1478A0; --yellow:#F5B339; --pink:#E21C57; --green:#77B457;
  --ink:#14233a; --muted:#5a6b80; --bg:#ffffff; --soft:#f5f8fb;
  --radius:16px; --radius-sm:12px;
  --shadow:0 4px 16px rgba(11,42,74,.08);
  --shadow-sm:0 2px 8px rgba(11,42,74,.06);
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
.charguia-page .section { padding:64px 0; }
.charguia-page .section--tight { padding:46px 0; }
.charguia-page .section--pb-tight { padding-bottom:30px; }
.charguia-page .section--pt-tight { padding-top:30px; }

.charguia-page .eyebrow { display:inline-block; font-family:var(--font-head); font-weight:600; font-size:13px; letter-spacing:.14em; text-transform:uppercase; color:var(--blue); margin-bottom:14px; }

.charguia-page .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-weight:600; font-size:15px; letter-spacing:.02em; padding:15px 30px; border-radius:999px; border:none; cursor:pointer; transition:transform .18s ease, background .18s ease; }
.charguia-page .btn:hover { transform:translateY(-2px); }
.charguia-page .btn--blue { background:var(--blue); color:#fff; }
.charguia-page .btn--blue:hover { background:#116080; }
.charguia-page .btn--yellow { background:var(--yellow); color:var(--navy); }
.charguia-page .btn--yellow:hover { background:#d99b27; }
.charguia-page .btn--green { background:var(--green); color:#fff; font-size:17px; padding:18px 40px; }
.charguia-page .btn--green:hover { background:#5d9340; }

/* HERO */
.charguia-page .hero { position:relative; min-height:560px; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff; overflow:hidden; }
.charguia-page .hero__bg { position:absolute; inset:0; background:url('${IMG}1-hero.png') center/cover no-repeat; transform:scale(1.02); }
.charguia-page .hero__overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.30), rgba(0,0,0,.42)); }
.charguia-page .hero__inner { position:relative; z-index:2; padding:90px 24px; max-width:880px; }
.charguia-page .hero h1 { color:#fff; font-size:clamp(34px,6vw,66px); font-weight:800; letter-spacing:.01em; }
.charguia-page .hero p { font-size:clamp(16px,2.4vw,22px); font-weight:400; margin:18px 0 34px; opacity:.96; }

/* INTRO — split layout (image left, text right) */
.charguia-page .intro-section { background:#fff; }
.charguia-page .intro-split { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
.charguia-page .intro-split__media { border-radius:var(--radius); overflow:hidden; }
.charguia-page .intro-split__media img { width:100%; height:100%; object-fit:cover; display:block; max-height:520px; }
.charguia-page .intro-split__text h2 { font-size:clamp(22px,2.8vw,32px); font-weight:800; color:var(--navy); line-height:1.2; margin-bottom:6px; }
.charguia-page .intro-split__subtitle { font-size:clamp(15px,1.8vw,18px); font-weight:600; color:var(--blue); margin:0 0 16px !important; }
.charguia-page .intro-split__text p { color:var(--muted); font-size:16px; line-height:1.7; margin:0 0 10px; }
.charguia-page .intro-split__text p:last-child { margin-bottom:0; }

/* STATS */
.charguia-page .head-center { text-align:center; max-width:760px; margin:0 auto 56px; }
.charguia-page .head-center h2 { font-size:clamp(28px,4vw,44px); font-weight:700; }
.charguia-page .head-center p { color:var(--muted); font-size:17px; margin-top:18px; }
.charguia-page .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:26px; }
.charguia-page .stat { text-align:center; padding:34px 20px; border-radius:var(--radius); background:var(--soft); border:1px solid #eef2f6; transition:transform .2s ease, box-shadow .2s ease; }
.charguia-page .stat:hover { transform:translateY(-4px); box-shadow:var(--shadow-sm); }
.charguia-page .stat__icon { width:54px; height:54px; margin:0 auto 18px; color:var(--navy); }
.charguia-page .stat__icon svg { width:100%; height:100%; stroke:var(--navy); }
.charguia-page .stat h3 { font-size:18px; font-weight:700; }
.charguia-page .stat span { display:block; color:var(--blue); font-weight:600; font-family:var(--font-head); font-size:14px; margin-top:6px; }

/* GALLERY */
.charguia-page .gallery-band { background:var(--blue); color:#fff; text-align:center; padding:30px 0; }
.charguia-page .gallery-band h2 { color:#fff; font-size:clamp(22px,3.4vw,34px); letter-spacing:.04em; font-weight:700; }
.charguia-page .gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:22px; }
.charguia-page .gallery figure { margin:0; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow-sm); aspect-ratio:16 / 10; }
.charguia-page .gallery img { width:100%; height:100%; object-fit:cover; }

/* CO-STORAGE */
.charguia-page .split { display:grid; grid-template-columns:1.05fr .95fr; gap:0; align-items:stretch; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow); }
.charguia-page .split__media { position:relative; min-height:520px; background:url('${IMG}co-storage-final-charguia.png') center/cover no-repeat; }
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
.charguia-page .logos-white { background:#fff; }
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
.charguia-page .map { padding:0 0 46px; }
.charguia-page .map iframe { width:100%; height:460px; border:0; display:block; border-radius:var(--radius); box-shadow:var(--shadow-sm); }

/* RESPONSIVE */
@media (max-width:980px) {
  .charguia-page .stats { grid-template-columns:repeat(2,1fr); }
  .charguia-page .split { grid-template-columns:1fr; }
  .charguia-page .split__media { min-height:320px; }
  .charguia-page .logos { grid-template-columns:1fr; gap:28px; text-align:center; }
  .charguia-page .intro-split { grid-template-columns:1fr; gap:36px; }
  .charguia-page .intro-split__media img { max-height:360px; }
}
@media (max-width:640px) {
  .charguia-page .section { padding:42px 0; }
  .charguia-page .gallery { grid-template-columns:1fr; }
  .charguia-page .stats { grid-template-columns:1fr; }
  .charguia-page .strip { grid-template-columns:1fr 1fr; }
  .charguia-page .benefits { grid-template-columns:1fr; }
  .charguia-page .market__card { margin:16px; padding:32px 26px; }
  .charguia-page .split__body { padding:40px 28px; }
}
`;
