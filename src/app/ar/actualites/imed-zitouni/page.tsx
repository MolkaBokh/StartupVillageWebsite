import type { Metadata } from "next";
import ImedZitouniContent from "@/components/actualites/ImedZitouniContent";

export const metadata: Metadata = {
  title: "عماد زيتوني من Google: الذكاء الاصطناعي والابتكار والمواهب التونسية — ستارتب فيليج",
  description:
    "عودة إلى الحلقة الحوارية مع عماد زيتوني، Director of Engineering في Google، بإدارة وسيم بن العربي في ستارتب فيليج المنزه بالتعاون مع Express FM.",
};

export default function Page() {
  return <ImedZitouniContent lang="ar" />;
}
