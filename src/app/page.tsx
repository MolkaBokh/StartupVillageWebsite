import type { Metadata } from "next";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Startup Village",
};

export default function Page() {
  return <PagePlaceholder title="Présentation" source="Startup-Village-Homepage (home) + Home-page-SV" />;
}
