import type { Metadata } from "next";
import ImedZitouniContent from "@/components/actualites/ImedZitouniContent";

export const metadata: Metadata = {
  title: "Imed Zitouni, Google: Artificial intelligence, innovation and Tunisian talent — Startup Village",
  description:
    "A recap of the Talk Show with Imed Zitouni, Director of Engineering at Google, hosted by Wassim Ben Larbi at Startup Village El Menzah with Express FM.",
};

export default function Page() {
  return <ImedZitouniContent lang="en" />;
}
