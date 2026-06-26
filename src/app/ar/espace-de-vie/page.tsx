import type { Metadata } from "next";
import EspaceDeVieContent from "@/components/espace-de-vie/EspaceDeVieContent";
import "@/styles/espace-de-vie.css";

export const metadata: Metadata = {
  title: "فضاءات العيش — ستارتب فيليج",
  description:
    "حيث تنبض الحياة في الابتكار: مبنى تاريخي ومجتمع نابض بالحياة والموطن اليومي للابتكار التونسي.",
};

export default function Page() {
  return (
    <div className="espace-de-vie-page" dir="rtl">
      <EspaceDeVieContent lang="ar" />
    </div>
  );
}
