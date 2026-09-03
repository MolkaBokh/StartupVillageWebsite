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
      title: "Meeting Room Rental in Tunis | Professional Spaces | Startup Village",
      description:
        "Book a meeting room in Tunis tailored to your needs. Startup Village offers professional, fully-equipped spaces for meetings, training sessions, workshops, executive committees and client appointments.",
    };
  }

  if (slug === "domiciliation") {
    return {
      title: "Business Domiciliation in Tunis | Professional Address | Startup Village",
      description:
        "Domicile your business or startup at Startup Village. Enjoy a professional address in Tunis, mail handling, exclusive benefits and access to a dynamic entrepreneurial ecosystem.",
    };
  }

  if (slug === "organisation-evenements") {
    return {
      title: "Event Space Rental in Tunis | Startup Village",
      description:
        "Organize your conferences, seminars, panels, afterworks and professional events in modular spaces at the heart of Startup Village.",
    };
  }

  if (slug === "accompagnement-startups") {
    return { title: "Startup and Entrepreneur Support | Startup Village" };
  }

  const title = offerTitle(slug, "en");
  return { title: title ? `${title} | Startup Village` : "Offers & Services | Startup Village" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "salles-reunion-formation") {
    return <SalleReunionFormationContent lang="en" />;
  }
  if (slug === "domiciliation") {
    return <DomiciliationContent lang="en" />;
  }
  if (slug === "organisation-evenements") {
    return <OrganisationEvenementsContent lang="en" />;
  }
  if (slug === "accompagnement-startups") {
    return <AccompagnementStartupsContent lang="en" />;
  }
  if (slug === "studios-audiovisuels") {
    return <StudiosAudiovisuelsContent lang="en" />;
  }
  if (slug === "incubation") {
    return <IncubationContent lang="en" />;
  }
  if (slug === "cochef") {
    return <CochefContent lang="en" />;
  }
  if (slug === "co-storage") {
    return <CoStorageContent lang="en" />;
  }
  if (slug === "louer-stand-exposition") {
    return <MarketCoContent lang="en" />;
  }
  if (slug === "soft-landing") {
    return <SoftLandingContent lang="en" />;
  }
  return <OfferComingSoon slug={slug} lang="en" />;
}
