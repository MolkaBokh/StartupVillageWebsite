import Link from "next/link";
import { withLang, type Lang } from "@/config/navigation";
import ServiceSection from "./ServiceSection";
import { EYEBROW_COLORS, OFFRES_SERVICES_T, SERVICE_SLUGS } from "@/data/offresServices";

const BASE = "/assets/images/offres-services";

export default function OffresServicesContent({ lang = "fr" }: { lang?: Lang }) {
  const t = OFFRES_SERVICES_T[lang];
  const contact = withLang("/contact", lang);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* HERO — centered, matches Espace de Vie style */}
      <section className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden md:min-h-[580px]">
        <img
          src={`${BASE}/hero.png`}
          alt={t.heroTitle}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,34,56,0.30) 0%, rgba(26,34,56,0.60) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-[56px]">{t.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed md:text-xl">{t.heroSubtitle}</p>
          <div className="mt-9">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.heroCta}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES — horizontal sections with carousel */}
      <div id="services">
        {t.services.map((service, i) => (
          <div key={service.title} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
            <ServiceSection
              eyebrowColor={EYEBROW_COLORS[i]}
              title={service.title}
              body={service.body}
              ctaLabel={t.learnMore}
              ctaAriaLabel={`${t.learnMore} — ${service.title}`}
              ctaHref={withLang(`/offres-services/${SERVICE_SLUGS[i]}`, lang)}
              images={service.imgs}
              reverse={service.reverse}
            />
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="bg-sv-navy">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-8 lg:py-14">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{t.ctaText}</p>
          <div className="mt-8">
            <Link
              href={contact}
              className="inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
