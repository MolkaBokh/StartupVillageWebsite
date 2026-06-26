import type { Metadata } from "next";
import PartenairesContent from "@/components/partenaires/PartenairesContent";

export const metadata: Metadata = {
  title: "Partners & Ecosystem — Startup Village",
  description:
    "A network of experts, investors, media and institutions that accelerates projects within Startup Village.",
};

export default function Page() {
  return <PartenairesContent lang="en" />;
}
