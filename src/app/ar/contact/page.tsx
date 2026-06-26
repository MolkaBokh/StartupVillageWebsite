import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "اتصل بنا — ستارتب فيليج",
  description:
    "احجز زيارة، اطلب عرض سعر أو تحدّث مع فريقنا للعثور على الفضاء المناسب لاحتياجك.",
};

export default function ContactPage() {
  return <ContactContent lang="ar" />;
}
