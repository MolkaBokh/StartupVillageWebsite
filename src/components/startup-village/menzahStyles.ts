export const MENZAH_STYLES = `
.menzah-page {
  --navy:#0B2A4A; --blue:#25AFE0; --yellow:#F5B339; --pink:#E21C57; --green:#77B457;
  --ink:#14233a; --muted:#5a6b80; --soft:#f5f8fb;
  --radius:16px; --radius-sm:12px;
  --shadow:0 4px 16px rgba(11,42,74,.08);
  --shadow-sm:0 2px 8px rgba(11,42,74,.06);
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

.menzah-page .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-weight:600; font-size:15px; letter-spacing:.02em; padding:15px 30px; border-radius:999px; border:none; cursor:pointer; transition:transform .18s ease, background .18s ease; }
.menzah-page .btn:hover { transform:translateY(-2px); }
.menzah-page .btn--blue { background:var(--blue); color:#fff; }
.menzah-page .btn--blue:hover { background:#1f8cc0; }
.menzah-page .btn--green { background:var(--green); color:#fff; font-size:17px; padding:18px 40px; }
.menzah-page .btn--green:hover { background:#5d9340; }

/* HERO */
.menzah-page .hero { position:relative; min-height:560px; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff; overflow:hidden; }
.menzah-page .hero__bg { position:absolute; inset:0; background-position:center; background-size:cover; background-repeat:no-repeat; transform:scale(1.02); }
.menzah-page .hero__overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(11,42,74,.45), rgba(11,42,74,.62)); }
.menzah-page .hero__inner { position:relative; z-index:2; padding:90px 24px; max-width:880px; }
.menzah-page .hero h1 { color:#fff; font-size:clamp(34px,6vw,66px); font-weight:800; letter-spacing:.01em; }
.menzah-page .hero p { font-size:clamp(16px,2.4vw,22px); font-weight:400; margin:18px 0 34px; opacity:.96; }

/* INTRO — split layout (image left, text right) */
.menzah-page .intro-section { background:#fff; }
.menzah-page .intro-split { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
.menzah-page .intro-split__media { border-radius:var(--radius); overflow:hidden; }
.menzah-page .intro-split__media img { width:100%; height:100%; object-fit:cover; display:block; max-height:520px; }
.menzah-page .intro-split__text h2 { font-size:clamp(22px,2.8vw,32px); font-weight:700; margin-bottom:24px; color:var(--navy); line-height:1.2; }
.menzah-page .intro-split__text p { color:var(--muted); font-size:16px; line-height:1.7; margin:0 0 16px; }
.menzah-page .intro-split__text p:last-child { margin-bottom:0; }

/* STATS */
.menzah-page .head-center { text-align:center; max-width:760px; margin:0 auto 56px; }
.menzah-page .head-center h2 { font-size:clamp(28px,4vw,44px); font-weight:700; }
.menzah-page .head-center p { color:var(--muted); font-size:17px; margin-top:18px; }
.menzah-page .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:26px; }
.menzah-page .stat { text-align:center; padding:34px 20px; border-radius:var(--radius); background:var(--soft); border:1px solid #eef2f6; transition:transform .2s ease, box-shadow .2s ease; }
.menzah-page .stat:hover { transform:translateY(-4px); box-shadow:var(--shadow-sm); }
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
.menzah-page .pole:hover { transform:translateY(-4px); }
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
  .menzah-page .intro-split { grid-template-columns:1fr; gap:36px; }
  .menzah-page .intro-split__media img { max-height:360px; }
}
@media (max-width:640px) {
  .menzah-page .section { padding:56px 0; }
  .menzah-page .gallery { grid-template-columns:1fr; }
  .menzah-page .stats { grid-template-columns:1fr; }
}
`;
