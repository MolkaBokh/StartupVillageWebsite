import type { Metadata } from "next";
import ImedZitouniContent from "@/components/actualites/ImedZitouniContent";

export const metadata: Metadata = {
  title: "Imed Zitouni Google : Intelligence artificielle, innovation et talents tunisiens — Startup Village",
  description:
    "Retour sur le Talk Show avec Imed Zitouni, Director of Engineering chez Google, animé par Wassim Ben Larbi au Startup Village El Menzah avec Express FM.",
};

export default function Page() {
  return <ImedZitouniContent lang="fr" />;
}
