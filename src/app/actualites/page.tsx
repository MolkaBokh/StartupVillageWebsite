import type { Metadata } from "next";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Actualités | Startup Village",
};

export default function Page() {
  return <PagePlaceholder title="Actualités" source="actualites" />;
}
