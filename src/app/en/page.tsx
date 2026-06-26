import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Startup Village Tunisia — Where innovation comes to life",
  description:
    "Startup Village is the Tunisian entrepreneurial ecosystem bringing together startups, entrepreneurs, companies, investors and creators around coworking spaces, events, training and collaboration in Menzah and Charguia.",
};

export default function Page() {
  return <HomeContent lang="en" />;
}
