import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
import SalleReunionFormationContent from "@/components/offres-services/SalleReunionFormationContent";
import { SERVICE_SLUGS, offerTitle } from "@/data/offresServices";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "salles-reunion-formation") {
    return {
      title: "Location de salles de réunion à Tunis | Espaces professionnels | Startup Village",
      description:
        "Réservez une salle de réunion à Tunis adaptée à vos besoins. Startup Village propose des espaces professionnels équipés pour réunions, formations, workshops, comités de direction et rendez-vous clients.",
    };
  }

  const title = offerTitle(slug, "fr");
  return { title: title ? `${title} | Startup Village` : "Offres & Services | Startup Village" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "salles-reunion-formation") {
    return <SalleReunionFormationContent />;
  }
  return <OfferComingSoon slug={slug} lang="fr" />;
}
