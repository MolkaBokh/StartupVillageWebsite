import type { Metadata } from "next";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact | Startup Village",
};

export default function Page() {
  return <PagePlaceholder title="Contact" source="contact" />;
}
