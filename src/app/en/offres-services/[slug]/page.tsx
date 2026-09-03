import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
import StudiosAudiovisuelsContent from "@/components/offres-services/StudiosAudiovisuelsContent";
import IncubationContent from "@/components/offres-services/IncubationContent";
import CochefContent from "@/components/offres-services/CochefContent";
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
  const title = offerTitle(slug, "en");
  return { title: title ? `${title} | Startup Village` : "Offers & Services | Startup Village" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "studios-audiovisuels") {
    return <StudiosAudiovisuelsContent lang="en" />;
  }
  if (slug === "incubation") {
    return <IncubationContent lang="en" />;
  }
  if (slug === "cochef") {
    return <CochefContent lang="en" />;
  }
  return <OfferComingSoon slug={slug} lang="en" />;
}
