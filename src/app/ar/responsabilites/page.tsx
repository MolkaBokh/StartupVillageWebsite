import type { Metadata } from "next";
import ResponsabilitesContent from "@/components/responsabilites/ResponsabilitesContent";

export const metadata: Metadata = {
  title: "المسؤولية المجتمعية — ستارتب فيليج",
  description:
    "نهج بيئي مسؤول في قلب ستارتب فيليج: الاقتصاد الدائري والفنّ المسؤول والمجتمع الملتزم.",
};

export default function Page() {
  return <ResponsabilitesContent lang="ar" />;
}
