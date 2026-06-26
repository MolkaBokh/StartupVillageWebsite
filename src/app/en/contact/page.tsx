import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Startup Village",
  description:
    "Book a visit, request a quote or talk to our team to find the space that fits your needs.",
};

export default function ContactPage() {
  return <ContactContent lang="en" />;
}
