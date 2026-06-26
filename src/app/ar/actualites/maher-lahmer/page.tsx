import type { Metadata } from "next";
import MaherLahmerContent from "@/components/actualites/MaherLahmerContent";

export const metadata: Metadata = {
  title: "ماهر لحمر في ستارتب فيليج: الذكاء الاصطناعي ونماذج اللغة الكبيرة واستراتيجية الشركات الناشئة — ستارتب فيليج",
  description:
    "عودة إلى لقاء ماهر لحمر في ستارتب فيليج: الذكاء الاصطناعي التوليدي ونماذج اللغة الكبيرة واستراتيجية الشركات الناشئة في تونس.",
};

export default function Page() {
  return <MaherLahmerContent lang="ar" />;
}
