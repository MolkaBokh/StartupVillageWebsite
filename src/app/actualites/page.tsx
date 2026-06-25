import type { Metadata } from "next";
import ActualitesContent from "@/components/actualites/ActualitesContent";

export const metadata: Metadata = {
  title: "Actualités & événements — Startup Village",
  description:
    "Retrouvez les temps forts, articles, rencontres et événements qui rythment la vie de Startup Village.",
};

export default function Page() {
  return <ActualitesContent />;
}
