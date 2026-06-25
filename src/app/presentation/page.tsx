import type { Metadata } from "next";
import PresentationContent from "@/components/presentation/PresentationContent";

export const metadata: Metadata = {
  title: "Le Concept — Startup Village",
  description:
    "Startup Village, l'espace de travail collaboratif qui vous ressemble et vous rassemble. Découvrez notre concept, notre mission et notre vision.",
};

export default function Page() {
  return <PresentationContent />;
}
