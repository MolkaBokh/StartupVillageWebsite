import type { Metadata } from "next";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Startups | Startup Village",
};

export default function Page() {
  return <PagePlaceholder title="Startups" source="startup-startups-page" />;
}
