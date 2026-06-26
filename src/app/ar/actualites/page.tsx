import type { Metadata } from "next";
import ActualitesContent from "@/components/actualites/ActualitesContent";

export const metadata: Metadata = {
  title: "الأخبار والفعاليات — ستارتب فيليج",
  description:
    "اكتشف أبرز اللحظات والمقالات واللقاءات والفعاليات التي تنبض بها حياة ستارتب فيليج.",
};

export default function Page() {
  return <ActualitesContent lang="ar" />;
}
