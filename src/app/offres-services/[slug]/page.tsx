import type { Metadata } from "next";
import OfferComingSoon from "@/components/offres-services/OfferComingSoon";
import SalleReunionFormationContent from "@/components/offres-services/SalleReunionFormationContent";
import DomiciliationContent from "@/components/offres-services/DomiciliationContent";
import OrganisationEvenementsContent from "@/components/offres-services/OrganisationEvenementsContent";
import AccompagnementStartupsContent from "@/components/offres-services/AccompagnementStartupsContent";
import StudiosAudiovisuelsContent from "@/components/offres-services/StudiosAudiovisuelsContent";
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

  if (slug === "domiciliation") {
    return {
      title: "Domiciliation d'entreprise à Tunis | Adresse professionnelle | Startup Village",
      description:
        "Domiciliez votre entreprise ou votre startup à Startup Village. Profitez d'une adresse professionnelle à Tunis, de la réception du courrier, d'avantages exclusifs et d'un accès à un écosystème entrepreneurial dynamique.",
    };
  }

  if (slug === "organisation-evenements") {
    return {
      title: "Location d'espaces événementiels à Tunis | Startup Village",
      description:
        "Organisez vos conférences, séminaires, panels, afterworks et événements professionnels dans des espaces modulables au cœur de Startup Village.",
    };
  }

  if (slug === "accompagnement-startups") {
    return { title: "Accompagnement des startups et entrepreneurs | Startup Village" };
  }

  const title = offerTitle(slug, "fr");
  return { title: title ? `${title} | Startup Village` : "Offres & Services | Startup Village" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "salles-reunion-formation") {
    return <SalleReunionFormationContent />;
  }
  if (slug === "domiciliation") {
    return <DomiciliationContent />;
  }
  if (slug === "organisation-evenements") {
    return <OrganisationEvenementsContent />;
  }
  if (slug === "accompagnement-startups") {
    return <AccompagnementStartupsContent />;
  }
  if (slug === "studios-audiovisuels") {
    return <StudiosAudiovisuelsContent lang="fr" />;
  }
  return <OfferComingSoon slug={slug} lang="fr" />;
}
