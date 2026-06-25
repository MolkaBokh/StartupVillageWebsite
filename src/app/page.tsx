import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Startup Village Tunisia — Là où l'innovation prend vie",
  description:
    "Startup Village est l'écosystème entrepreneurial tunisien qui réunit startups, entrepreneurs, entreprises, investisseurs et créateurs autour d'espaces de coworking, d'événements, de formation et de collaboration à Menzah et Charguia.",
};

export default function Page() {
  return <HomeContent />;
}
