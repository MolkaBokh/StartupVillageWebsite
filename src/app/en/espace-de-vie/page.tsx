import type { Metadata } from "next";
import EspaceDeVieContent from "@/components/espace-de-vie/EspaceDeVieContent";
import "@/styles/espace-de-vie.css";

export const metadata: Metadata = {
  title: "Life at the Village — Startup Village",
  description:
    "Where innovation comes to life: a historic building, a living community and the everyday home of Tunisian innovation.",
};

export default function Page() {
  return (
    <div className="espace-de-vie-page">
      <EspaceDeVieContent lang="en" />
    </div>
  );
}
