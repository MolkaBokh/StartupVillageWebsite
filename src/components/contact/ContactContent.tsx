"use client";

import { useState } from "react";
import SupportBox from "@/components/contact/SupportBox";
import ProfileFinder from "@/components/contact/ProfileFinder";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import type { Lang } from "@/config/navigation";
import "@/styles/contact.css";

const T = {
  fr: {
    title: "Parlons de votre besoin",
    intro: "Dites-nous ce que vous recherchez, notre équipe vous orientera vers la solution la plus adaptée.",
  },
  en: {
    title: "Let's talk about your needs",
    intro: "Tell us what you're looking for and our team will guide you to the most suitable solution.",
  },
  ar: {
    title: "لنتحدّث عن حاجتك",
    intro: "أخبرنا بما تبحث عنه وسيرشدك فريقنا إلى الحلّ الأنسب.",
  },
} as const;

export default function ContactContent({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const [requestType, setRequestType] = useState("");

  return (
    <div className="contact-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <section className="bg-white pt-10 pb-6 sm:pt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold leading-tight text-navy-950 sm:text-5xl">{t.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-navy-950/70">{t.intro}</p>
          </div>

          <SupportBox lang={lang} />
        </div>
      </section>

      <ProfileFinder lang={lang} onSelect={setRequestType} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ContactForm lang={lang} requestType={requestType} onRequestTypeChange={setRequestType} />
        </div>
      </section>

      <MapSection lang={lang} />
    </div>
  );
}
