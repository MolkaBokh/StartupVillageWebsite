import type { Metadata } from "next";
import ResponsabilitesContent from "@/components/responsabilites/ResponsabilitesContent";

export const metadata: Metadata = {
  title: "Responsabilité ESG — Startup Village",
  description:
    "Une démarche écoresponsable au cœur du Startup Village : économie circulaire, art responsable et communauté engagée.",
};

export default function Page() {
  return <ResponsabilitesContent lang="fr" />;
}
