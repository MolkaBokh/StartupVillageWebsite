import type { Metadata } from "next";
import EspaceDeVieContent from "@/components/espace-de-vie/EspaceDeVieContent";
import "@/styles/espace-de-vie.css";

export const metadata: Metadata = {
  title: "Espace de Vie — Startup Village",
  description:
    "Là où l'innovation prend vie : un bâtiment historique, une communauté vivante et le quotidien tunisien de l'innovation.",
};

export default function Page() {
  return (
    <div className="espace-de-vie-page">
      <EspaceDeVieContent />
    </div>
  );
}
