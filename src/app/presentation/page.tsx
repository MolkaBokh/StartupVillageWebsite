import type { Metadata } from "next";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Présentation | Startup Village",
};

export default function Page() {
  return <PagePlaceholder title="Présentation" source="presentation" />;
}
