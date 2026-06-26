import type { Metadata } from "next";
import PartenairesContent from "@/components/partenaires/PartenairesContent";

export const metadata: Metadata = {
  title: "الشركاء والمنظومة — ستارتب فيليج",
  description:
    "شبكة من الخبراء والمستثمرين ووسائل الإعلام والمؤسسات تُسرّع المشاريع داخل ستارتب فيليج.",
};

export default function Page() {
  return <PartenairesContent lang="ar" />;
}
