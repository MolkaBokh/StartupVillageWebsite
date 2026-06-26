import type { Metadata } from "next";
import CharguiaContent from "@/components/startup-village/CharguiaContent";

export const metadata: Metadata = {
  title: "Startup Village — Charguia",
  description:
    "Startup Village Charguia — The hybrid hub of e-commerce and innovation.",
};

export default function Page() {
  return <CharguiaContent lang="en" />;
}
