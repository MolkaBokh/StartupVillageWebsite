import type { Metadata } from "next";
import InnovationTalksContent from "@/components/actualites/InnovationTalksContent";

export const metadata: Metadata = {
  title: "Innovation Talks : Italie–Tunisie, construire l'innovation ensemble — Startup Village",
  description:
    "Retour sur les Innovation Talks à Startup Village avec S.E. Alessandro Prunas, Ambassadeur d'Italie en Tunisie, autour de la coopération technologique italo-tunisienne.",
};

export default function Page() {
  return <InnovationTalksContent lang="fr" />;
}
