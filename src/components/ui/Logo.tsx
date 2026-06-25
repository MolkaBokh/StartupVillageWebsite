import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Rendered height in px (width scales with the source aspect ratio). */
  height?: number;
  className?: string;
  /** Wrap in a link to home. Defaults to true. */
  href?: string | null;
};

/* Source logo intrinsic dimensions (logo.png is square, 225×225). */
const LOGO_W = 225;
const LOGO_H = 225;

/**
 * Startup Village brand logo (image only — no text node).
 * Uses the uploaded brand asset at /assets/logos/logo.png.
 */
export default function Logo({ height = 44, className = "", href = "/" }: LogoProps) {
  const img = (
    <Image
      src="/assets/logos/logo.png"
      alt="Startup Village"
      height={height}
      width={Math.round((LOGO_W / LOGO_H) * height)}
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
