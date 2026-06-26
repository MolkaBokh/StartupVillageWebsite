import type { Metadata } from "next";
import Hero from "@/components/startups/Hero";
import LogoWall from "@/components/startups/LogoWall";
import FinalCta from "@/components/startups/FinalCta";
import "@/styles/startups.css";

export const metadata: Metadata = {
  title: "Startups | Startup Village",
  description:
    "The startups, entrepreneurs and innovators who bring the Startup Village ecosystem to life.",
};

export default function StartupsPage() {
  return (
    <div className="startups-page">
      <Hero lang="en" />
      <LogoWall lang="en" />
      <FinalCta lang="en" />
    </div>
  );
}
