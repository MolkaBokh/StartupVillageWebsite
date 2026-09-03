import type { Metadata } from "next";
import InnovationTalksContent from "@/components/actualites/InnovationTalksContent";

export const metadata: Metadata = {
  title: "Innovation Talks: إيطاليا–تونس، نبني الابتكار معًا — ستارتب فيليج",
  description:
    "عودة إلى فعالية Innovation Talks في ستارتب فيليج مع سعادة السفير أليساندرو بروناس، سفير إيطاليا لدى تونس، حول التعاون التكنولوجي التونسي الإيطالي.",
};

export default function Page() {
  return <InnovationTalksContent lang="ar" />;
}
