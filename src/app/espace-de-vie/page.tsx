import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EspaceDeVieContent from "@/components/espace-de-vie/EspaceDeVieContent";
import "@/styles/espace-de-vie.css";

// Police de la page source (Espace de Vie).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--ev-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espace de Vie — Startup Village",
  description:
    "Là où l'innovation prend vie : un bâtiment historique, une communauté vivante et le quotidien tunisien de l'innovation.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} espace-de-vie-page`}>
      <EspaceDeVieContent />
    </div>
  );
}
