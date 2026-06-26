import type { Metadata } from "next";
import PartenairesContent from "@/components/partenaires/PartenairesContent";

export const metadata: Metadata = {
  title: "Partenaires & Écosystème — Startup Village",
  description:
    "Un réseau d'experts, d'investisseurs, de médias et d'institutions qui accélère les projets au sein de Startup Village.",
};

export default function Page() {
  return <PartenairesContent lang="fr" />;
}
