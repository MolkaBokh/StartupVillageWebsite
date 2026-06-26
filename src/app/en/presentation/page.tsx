import type { Metadata } from "next";
import PresentationContent from "@/components/presentation/PresentationContent";

export const metadata: Metadata = {
  title: "The Concept — Startup Village",
  description:
    "Startup Village, the collaborative workspace that reflects you and brings you together. Discover our concept, our mission and our vision.",
};

export default function Page() {
  return <PresentationContent lang="en" />;
}
