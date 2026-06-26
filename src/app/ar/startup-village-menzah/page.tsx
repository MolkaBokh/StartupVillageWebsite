import type { Metadata } from "next";
import MenzahContent from "@/components/startup-village/MenzahContent";

export const metadata: Metadata = {
  title: "ستارتب فيليج المنزه",
  description: "ستارتب فيليج المنزه — منظومة الابتكار والإعلام وريادة الأعمال.",
};

export default function Page() {
  return <MenzahContent lang="ar" />;
}
