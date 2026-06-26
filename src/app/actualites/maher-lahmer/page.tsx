import type { Metadata } from "next";
import MaherLahmerContent from "@/components/actualites/MaherLahmerContent";

export const metadata: Metadata = {
  title: "Maher Lahmer à Startup Village : IA, LLM et stratégie startup — Startup Village",
  description:
    "Retour sur la rencontre avec Maher Lahmer à Startup Village : IA générative, LLM et stratégie pour les startups en Tunisie.",
};

export default function Page() {
  return <MaherLahmerContent lang="fr" />;
}
