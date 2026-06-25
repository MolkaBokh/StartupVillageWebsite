import Link from "next/link";
import {
  MailIcon,
  GlobeIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  PinterestIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

/**
 * Shared site footer — official footer for the final website, ported from
 * Startup-Village-Homepage. Three columns (contact / newsletter / socials)
 * over a navy band with a copyright strip.
 */

const SOCIALS = [
  { label: "Email", href: "mailto:contact@startupvillage.tn", Icon: MailIcon },
  { label: "Site", href: "/", Icon: GlobeIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com", Icon: TikTokIcon },
  { label: "Pinterest", href: "https://www.pinterest.com", Icon: PinterestIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YouTubeIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-primary-400">
            Contact
          </h3>
          <p className="text-sm text-white/80">Menzah 1, Tunis</p>
          <p className="text-sm text-white/80">Charguia, Tunis</p>
          <p className="mt-2 text-sm text-white/80">+216 00 000 000</p>
          <p className="text-sm text-white/80">contact@startupvillage.tn</p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-primary-400">
            Newsletter
          </h3>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Votre email"
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm placeholder:text-white/50"
            />
            <button
              type="submit"
              className="rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold hover:bg-accent-600"
            >
              OK
            </button>
          </form>
        </div>

        <div>
          <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-primary-400">
            Suivez-nous
          </h3>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent-500"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © {year} Startup Village — Développé par Medianet
      </div>
    </footer>
  );
}
