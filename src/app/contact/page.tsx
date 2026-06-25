import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SupportBox from "@/components/contact/SupportBox";
import InfoPanel from "@/components/contact/InfoPanel";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import "@/styles/contact.css";

// Police de la page source (Contact).
const inter = Inter({ subsets: ["latin"], variable: "--contact-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Contact — Startup Village",
  description:
    "Réservez une visite, demandez un devis ou échangez avec notre équipe pour trouver l'espace adapté à votre besoin.",
};

export default function ContactPage() {
  return (
    <div className={`${inter.variable} contact-page`}>
      <section className="bg-white pt-10 pb-6 sm:pt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold leading-tight text-navy-950 sm:text-5xl">
              Parlons de votre besoin
            </h1>
            <p className="mt-4 max-w-xl text-lg text-navy-950/70">
              Dites-nous ce que vous recherchez, notre équipe vous orientera vers la solution la
              plus adaptée.
            </p>
          </div>

          <SupportBox />
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <InfoPanel />
        </div>
      </section>

      <MapSection />
    </div>
  );
}
