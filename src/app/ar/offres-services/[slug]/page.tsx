import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
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
  return <OfferComingSoon slug={slug} lang="ar" />;
}
