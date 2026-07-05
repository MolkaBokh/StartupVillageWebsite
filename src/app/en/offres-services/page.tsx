import type { Metadata } from "next";
import OffresServicesContent from "@/components/offres-services/OffresServicesContent";

export const metadata: Metadata = {
  title: "Offers & Services — Startup Village",
  description:
    "Spaces, services and support designed to meet the needs of entrepreneurs, businesses and innovative communities.",
};

export default function Page() {
  return <OffresServicesContent lang="en" />;
}
