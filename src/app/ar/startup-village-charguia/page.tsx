import type { Metadata } from "next";
import CharguiaContent from "@/components/startup-village/CharguiaContent";

export const metadata: Metadata = {
  title: "ستارتب فيليج — الشرقية",
  description: "ستارتب فيليج الشرقية — الفضاء الهجين للتجارة الإلكترونية والابتكار.",
};

export default function Page() {
  return <CharguiaContent lang="ar" />;
}
