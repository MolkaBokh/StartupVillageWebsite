import type { Metadata } from "next";
import MenzahContent from "@/components/startup-village/MenzahContent";

export const metadata: Metadata = {
  title: "Startup Village Menzah",
  description:
    "Startup Village Menzah — The ecosystem of innovation, media and entrepreneurship.",
};

export default function Page() {
  return <MenzahContent lang="en" />;
}
