import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Rendered height in px (width scales automatically). */
  height?: number;
  className?: string;
  /** Wrap in a link to home. Defaults to true. */
  href?: string | null;
};

/**
 * Startup Village brand logo (image only — no text node).
 * Source asset lives at /assets/logos/startup-village-logo.svg.
 */
export default function Logo({ height = 40, className = "", href = "/" }: LogoProps) {
  const img = (
    <Image
      src="/assets/logos/startup-village-logo.svg"
      alt="Startup Village"
      height={height}
      width={Math.round((232 / 48) * height)}
      priority
      className={className}
    />
  );

  if (href === null) return img;

  return (
    <Link href={href} aria-label="Startup Village — accueil" className="inline-flex items-center">
      {img}
    </Link>
  );
}
