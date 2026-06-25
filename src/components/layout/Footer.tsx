import Link from "next/link";
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
 * Shared site footer — official footer for the final website.
 *
 * Dark-navy band, three columns (Contact / Newsletter / Suivez-nous) over a
 * white copyright strip. All content is rendered in solid white (no grey /
 * low-opacity body text) and the layout stacks cleanly on mobile.
 */

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
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Column 1 — Contact */}
        <div className="space-y-5">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Contact
          </h3>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Startup Village Menzah</p>
            <p>Immeuble Essadi Tour C-D, Mezzanine</p>
            <p>10 Décembre, Av. Habib Bourguiba</p>
            <p>Tunis 1004</p>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Startup Village Charguia</p>
            <p>28 Rue 8612, 1035 Charguia, Tunis</p>
            <Link
              href="https://maps.app.goo.gl/ZHzpDADjBXtsDvAV6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-white underline underline-offset-2 hover:text-primary-400"
            >
              Voir sur Google Maps
            </Link>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Téléphone</p>
            <p>
              <Link href="tel:+21620953953" className="text-white hover:text-primary-400">
                +216 20 953 953
              </Link>
            </p>
            <p>
              <Link href="tel:+21698798027" className="text-white hover:text-primary-400">
                +216 98 798 027
              </Link>
            </p>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-white">
            <p className="font-semibold">Email</p>
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
            Newsletter
          </h3>
          <p className="text-sm leading-relaxed text-white">
            Recevez les actualités du village directement dans votre boîte mail.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              required
              placeholder="votre@email.com"
              aria-label="Votre adresse email"
              className="w-full rounded-md border border-white/30 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-navy-950/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue/90 sm:w-auto"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>

        {/* Column 3 — Suivez-nous */}
        <div className="space-y-5">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Suivez-nous
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
