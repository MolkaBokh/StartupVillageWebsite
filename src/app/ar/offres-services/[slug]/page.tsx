import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
import StudiosAudiovisuelsContent from "@/components/offres-services/StudiosAudiovisuelsContent";
import IncubationContent from "@/components/offres-services/IncubationContent";
import CochefContent from "@/components/offres-services/CochefContent";
import CoStorageContent from "@/components/offres-services/CoStorageContent";
import MarketCoContent from "@/components/offres-services/MarketCoContent";
import SoftLandingContent from "@/components/offres-services/SoftLandingContent";
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
  const title = offerTitle(slug, "ar");
  return { title: title ? `${title} | ستارتب فيليج` : "العروض والخدمات | ستارتب فيليج" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "studios-audiovisuels") {
    return <StudiosAudiovisuelsContent lang="ar" />;
  }
  if (slug === "incubation") {
    return <IncubationContent lang="ar" />;
  }
  if (slug === "cochef") {
    return <CochefContent lang="ar" />;
  }
  if (slug === "co-storage") {
    return <CoStorageContent lang="ar" />;
  }
  if (slug === "louer-stand-exposition") {
    return <MarketCoContent lang="ar" />;
  }
  if (slug === "soft-landing") {
    return <SoftLandingContent lang="ar" />;
  }
  return <OfferComingSoon slug={slug} lang="ar" />;
}
