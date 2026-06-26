import type { Metadata } from "next";
import ResponsabilitesContent from "@/components/responsabilites/ResponsabilitesContent";

export const metadata: Metadata = {
  title: "Responsibility — Startup Village",
  description:
    "An eco-responsible approach at the heart of Startup Village: circular economy, responsible art and an engaged community.",
};

export default function Page() {
  return <ResponsabilitesContent lang="en" />;
}
