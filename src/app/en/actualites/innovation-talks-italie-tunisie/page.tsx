import type { Metadata } from "next";
import InnovationTalksContent from "@/components/actualites/InnovationTalksContent";

export const metadata: Metadata = {
  title: "Innovation Talks: Italy–Tunisia, building innovation together — Startup Village",
  description:
    "A recap of the Innovation Talks at Startup Village with H.E. Alessandro Prunas, Ambassador of Italy to Tunisia, on Italian–Tunisian technological cooperation.",
};

export default function Page() {
  return <InnovationTalksContent lang="en" />;
}
