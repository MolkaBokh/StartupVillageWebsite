import type { Metadata } from "next";
import ActualitesContent from "@/components/actualites/ActualitesContent";

export const metadata: Metadata = {
  title: "News & events — Startup Village",
  description:
    "Discover the highlights, articles, encounters and events that shape life at Startup Village.",
};

export default function Page() {
  return <ActualitesContent lang="en" />;
}
