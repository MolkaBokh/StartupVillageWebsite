import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "ستارتب فيليج تونس — حيث تنبض الحياة في الابتكار",
  description:
    "ستارتب فيليج هي المنظومة الريادية التونسية التي تجمع الشركات الناشئة وروّاد الأعمال والمؤسسات والمستثمرين والمبدعين حول فضاءات العمل المشترك والفعاليات والتكوين والتعاون في المنزه والشرقية.",
};

export default function Page() {
  return <HomeContent lang="ar" />;
}
