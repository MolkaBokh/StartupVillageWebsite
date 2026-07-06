"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langFromPath } from "@/config/navigation";
import {
  MailIcon,
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  PinterestIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

/**
 * Shared site footer — official footer for the final website (bilingual).
 *
 * Dark-navy band, three columns over a white copyright strip. Solid-white text,
 * stacks cleanly on mobile. Labels are localized from the current pathname.
 */

const T = {
  fr: {
    contact: "Contact",
    phone: "Téléphone",
    email: "Email",
    maps: "Voir sur Google Maps",
    newsletter: "Newsletter",
    newsletterText: "Recevez les actualités du village directement dans votre boîte mail.",
    emailPlaceholder: "votre@email.com",
    emailAria: "Votre adresse email",
    subscribe: "S'inscrire",
    follow: "Suivez-nous",
  },
  en: {
    contact: "Contact",
    phone: "Phone",
    email: "Email",
    maps: "View on Google Maps",
    newsletter: "Newsletter",
    newsletterText: "Get the latest village news delivered straight to your inbox.",
    emailPlaceholder: "you@email.com",
    emailAria: "Your email address",
    subscribe: "Subscribe",
    follow: "Follow us",
  },
  ar: {
    contact: "اتصل بنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    maps: "عرض على خرائط Google",
    newsletter: "النشرة البريدية",
    newsletterText: "تابع آخر أخبار القرية مباشرة في بريدك الإلكتروني.",
    emailPlaceholder: "you@email.com",
    emailAria: "عنوان بريدك الإلكتروني",
    subscribe: "اشترك",
    follow: "تابعنا",
  },
} as const;

const SOCIALS = [
  { label: "Email", href: "mailto:contact@startupvillage.tn", Icon: MailIcon },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=21620953953", Icon: WhatsAppIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/startup-villagetn/posts/?feedView=all&viewAsMember=true",
    Icon: LinkedInIcon,
  },
  { label: "Instagram", href: "https://www.instagram.com/startupvillage.tn", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/startupvillagetn", Icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@startup_village", Icon: TikTokIcon },
  { label: "Pinterest", href: "https://www.pinterest.com/Startup_Village/", Icon: PinterestIcon },
  { label: "YouTube", href: "https://www.youtube.com/@StartupVillage_tn", Icon: YouTubeIcon },
];

export default function Footer() {
  const lang = langFromPath(usePathname());
  const t = T[lang];

  return (
    <footer className="sv-footer bg-navy-950 text-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Column 1 — Contact */}
        <div className="space-y-5">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            {t.contact}
          </h3>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Startup Village Menzah</p>
            <p>Immeuble Essadi Tour C-D, Mezzanine</p>
            <p>10 Décembre, Av. Habib Bourguiba</p>
            <p>Tunis 1004</p>
            <p className="font-semibold">{t.phone}</p>
            <p>
              <Link href="tel:+21620953953" className="text-white hover:text-primary-400">
                +216 20 953 953
              </Link>
            </p>
            <Link
              href="https://maps.app.goo.gl/uHsWdk464XSp1oXU7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-white underline underline-offset-2 hover:text-primary-400"
            >
              {t.maps}
            </Link>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Startup Village Charguia</p>
            <p>28 Rue 8612, 1035 Charguia, Tunis</p>
            <p className="font-semibold">{t.phone}</p>
            <p>
              <Link href="tel:+21698798027" className="text-white hover:text-primary-400">
                +216 98 798 027
              </Link>
            </p>
            <Link
              href="https://maps.app.goo.gl/ZHzpDADjBXtsDvAV6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-white underline underline-offset-2 hover:text-primary-400"
            >
              {t.maps}
            </Link>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">{t.email}</p>
            <p>
              <Link
                href="mailto:contact@startupvillage.tn"
                className="text-white hover:text-primary-400"
              >
                contact@startupvillage.tn
              </Link>
            </p>
          </div>
        </div>

        {/* Column 2 — Newsletter */}
        <div className="space-y-5">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            {t.newsletter}
          </h3>
          <p className="text-sm leading-relaxed text-white">
            {t.newsletterText}
          </p>
          <form className="space-y-3">
            <input
              type="email"
              required
              placeholder={t.emailPlaceholder}
              aria-label={t.emailAria}
              className="w-full rounded-md border border-white/30 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-navy-950/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#1478a0] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#116080] sm:w-auto"
            >
              {t.subscribe}
            </button>
          </form>
        </div>

        {/* Column 3 — Suivez-nous */}
        <div className="space-y-5">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            {t.follow}
          </h3>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-navy-950"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-6 py-5 text-center text-sm text-white">
        © 2026 Medianet
      </div>
    </footer>
  );
}
