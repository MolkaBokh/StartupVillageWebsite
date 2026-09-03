import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
import SalleReunionFormationContent from "@/components/offres-services/SalleReunionFormationContent";
import DomiciliationContent from "@/components/offres-services/DomiciliationContent";
import OrganisationEvenementsContent from "@/components/offres-services/OrganisationEvenementsContent";
import AccompagnementStartupsContent from "@/components/offres-services/AccompagnementStartupsContent";
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

  if (slug === "salles-reunion-formation") {
    return {
      title: "استئجار قاعات اجتماعات في تونس | فضاءات احترافية | ستارتب فيليج",
      description:
        "احجزوا قاعة اجتماعات في تونس تلائم احتياجاتكم. يوفّر ستارتب فيليج فضاءات احترافية ومجهّزة للاجتماعات والتكوينات وورش العمل ولجان الإدارة ومواعيد العملاء.",
    };
  }

  if (slug === "domiciliation") {
    return {
      title: "توطين الشركات في تونس | عنوان مهني | ستارتب فيليج",
      description:
        "وطّنوا شركتكم أو شركتكم الناشئة في ستارتب فيليج. استفيدوا من عنوان مهني في تونس، واستلام بريدكم، ومزايا حصرية، ووصول إلى منظومة ريادية نشطة.",
    };
  }

  if (slug === "organisation-evenements") {
    return {
      title: "تأجير فضاءات فعاليات في تونس | ستارتب فيليج",
      description:
        "نظّموا مؤتمراتكم وندواتكم وحلقاتكم النقاشية وأمسياتكم وفعالياتكم المهنية في فضاءات قابلة للتعديل في قلب ستارتب فيليج.",
    };
  }

  if (slug === "accompagnement-startups") {
    return { title: "مرافقة الشركات الناشئة وروّاد الأعمال | ستارتب فيليج" };
  }

  const title = offerTitle(slug, "ar");
  return { title: title ? `${title} | ستارتب فيليج` : "العروض والخدمات | ستارتب فيليج" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "salles-reunion-formation") {
    return <SalleReunionFormationContent lang="ar" />;
  }
  if (slug === "domiciliation") {
    return <DomiciliationContent lang="ar" />;
  }
  if (slug === "organisation-evenements") {
    return <OrganisationEvenementsContent lang="ar" />;
  }
  if (slug === "accompagnement-startups") {
    return <AccompagnementStartupsContent lang="ar" />;
  }
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
