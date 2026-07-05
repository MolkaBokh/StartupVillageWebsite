import type { Metadata } from "next";
import OffresServicesContent from "@/components/offres-services/OffresServicesContent";

export const metadata: Metadata = {
  title: "Offres & Services — Startup Village",
  description:
    "Des espaces, services et accompagnements pensés pour répondre aux besoins des entrepreneurs, entreprises et communautés innovantes.",
};

export default function Page() {
  return <OffresServicesContent lang="fr" />;
}
