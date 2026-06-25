import type { Metadata } from "next";
import Hero from "@/components/startups/Hero";
import LogoWall from "@/components/startups/LogoWall";
import FinalCta from "@/components/startups/FinalCta";
import "@/styles/startups.css";

export const metadata: Metadata = {
  title: "Startups | Startup Village",
  description:
    "Les startups, entrepreneurs et innovateurs qui font vivre l'écosystème Startup Village.",
};

export default function StartupsPage() {
  return (
    <div className="startups-page">
      <Hero />
      <LogoWall />
      <FinalCta />
    </div>
  );
}
