import type { Metadata } from "next";
import Hero from "@/components/startups/Hero";
import LogoWall from "@/components/startups/LogoWall";
import FinalCta from "@/components/startups/FinalCta";
import "@/styles/startups.css";

export const metadata: Metadata = {
  title: "الشركات الناشئة | ستارتب فيليج",
  description: "الشركات الناشئة وروّاد الأعمال والمبتكرون الذين تنبض بهم منظومة ستارتب فيليج.",
};

export default function StartupsPage() {
  return (
    <div className="startups-page" dir="rtl">
      <Hero lang="ar" />
      <LogoWall lang="ar" />
      <FinalCta lang="ar" />
    </div>
  );
}
