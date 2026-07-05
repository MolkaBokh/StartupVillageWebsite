import type { Metadata } from "next";
import OffresServicesContent from "@/components/offres-services/OffresServicesContent";

export const metadata: Metadata = {
  title: "العروض والخدمات — ستارتب فيليج",
  description:
    "فضاءات وخدمات ومرافقة مصمّمة لتلبية احتياجات روّاد الأعمال والشركات والمجتمعات المبتكرة.",
};

export default function Page() {
  return <OffresServicesContent lang="ar" />;
}
