import type { Metadata } from "next";
import MaherLahmerContent from "@/components/actualites/MaherLahmerContent";

export const metadata: Metadata = {
  title: "Maher Lahmer at Startup Village: AI, LLMs and startup strategy — Startup Village",
  description:
    "A recap of the session with Maher Lahmer at Startup Village: generative AI, LLMs and strategy for startups in Tunisia.",
};

export default function Page() {
  return <MaherLahmerContent lang="en" />;
}
