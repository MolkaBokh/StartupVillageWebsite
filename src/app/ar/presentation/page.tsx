import type { Metadata } from "next";
import PresentationContent from "@/components/presentation/PresentationContent";

export const metadata: Metadata = {
  title: "المفهوم — ستارتب فيليج",
  description:
    "ستارتب فيليج، فضاء العمل التعاوني الذي يشبهك ويجمعك. اكتشف مفهومنا ومهمتنا ورؤيتنا.",
};

export default function Page() {
  return <PresentationContent lang="ar" />;
}
