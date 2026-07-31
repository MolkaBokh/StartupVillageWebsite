"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/config/navigation";

type ProfileKey = "entrepreneur" | "startup" | "pme" | "creator" | "institution";

type Profile = { key: ProfileKey; name: string; services: string[] };

type Copy = {
  profileTitle: string;
  profileSubtitle: string;
  infoCta: string;
  profiles: Profile[];
  menzah: string;
  menzahAddr: string[];
  charguia: string;
  charguiaAddr: string;
  phone: string;
  phoneVal: string;
  email: string;
  visitCta: string;
};

const T: Record<Lang, Copy> = {
  fr: {
    profileTitle: "Quel est votre profil ?",
    profileSubtitle: "Sélectionnez un profil pour affiner votre demande.",
    infoCta: "Demande d'information",
    profiles: [
      { key: "entrepreneur", name: "Entrepreneur / Porteur de projet", services: ["Accompagnement startups", "Domiciliation", "Demander une expertise"] },
      { key: "startup", name: "Startup", services: ["Coworking Space", "Salle de réunion / formation", "Soft Landing"] },
      { key: "pme", name: "PME / Entreprise", services: ["Salle de réunion / formation", "Organisation d'événements", "Food Lab"] },
      { key: "creator", name: "Créateur / Artisan / Marque", services: ["Louer un stand d'exposition", "Studios Audiovisuels", "Co-Storage"] },
      { key: "institution", name: "Organisation / Institution / Association", services: ["Organisation d'événements", "Salle de réunion / formation", "Coworking Space"] },
    ],
    menzah: "Startup Village Menzah",
    menzahAddr: ["Immeuble Essadi Tour C-D, Mezzanine", "10 Décembre, Av. Habib Bourguiba", "Tunis 1004"],
    charguia: "Startup Village Charguia",
    charguiaAddr: "Adresse disponible sur Google Maps",
    phone: "Téléphone",
    phoneVal: "+216 XX XXX XXX",
    email: "Email",
    visitCta: "Réserver une visite",
  },
  en: {
    profileTitle: "What's your profile?",
    profileSubtitle: "Select a profile to refine your request.",
    infoCta: "Request information",
    profiles: [
      { key: "entrepreneur", name: "Entrepreneur / Project owner", services: ["Startup support", "Business address", "Request expert advice"] },
      { key: "startup", name: "Startup", services: ["Coworking Space", "Meeting / training room", "Soft Landing"] },
      { key: "pme", name: "SME / Company", services: ["Meeting / training room", "Event organisation", "Food Lab"] },
      { key: "creator", name: "Creator / Artisan / Brand", services: ["Rent an exhibition stand", "Audiovisual Studios", "Co-Storage"] },
      { key: "institution", name: "Organisation / Institution / Association", services: ["Event organisation", "Meeting / training room", "Coworking Space"] },
    ],
    menzah: "Startup Village Menzah",
    menzahAddr: ["Essadi Building, Tower C-D, Mezzanine", "10 Décembre, Av. Habib Bourguiba", "Tunis 1004"],
    charguia: "Startup Village Charguia",
    charguiaAddr: "Address available on Google Maps",
    phone: "Phone",
    phoneVal: "+216 XX XXX XXX",
    email: "Email",
    visitCta: "Book a visit",
  },
  ar: {
    profileTitle: "ما هو ملفّك الشخصي؟",
    profileSubtitle: "اختر ملفًّا لتدقيق طلبك.",
    infoCta: "طلب معلومات",
    profiles: [
      { key: "entrepreneur", name: "رائد أعمال / صاحب مشروع", services: ["مرافقة الشركات الناشئة", "التوطين", "طلب خبرة"] },
      { key: "startup", name: "شركة ناشئة", services: ["مساحة العمل المشترك", "قاعة اجتماعات / تكوين", "الانطلاق السلس"] },
      { key: "pme", name: "مؤسسة صغيرة ومتوسطة / شركة", services: ["قاعة اجتماعات / تكوين", "تنظيم الفعاليات", "Food Lab"] },
      { key: "creator", name: "مبدع / حرفي / علامة", services: ["استئجار جناح عرض", "الاستوديوهات السمعية البصرية", "Co-Storage"] },
      { key: "institution", name: "منظمة / مؤسسة / جمعية", services: ["تنظيم الفعاليات", "قاعة اجتماعات / تكوين", "مساحة العمل المشترك"] },
    ],
    menzah: "ستارتب فيليج المنزه",
    menzahAddr: ["عمارة الصادي، برج C-D، الميزانين", "10 ديسمبر، شارع الحبيب بورقيبة", "تونس 1004"],
    charguia: "ستارتب فيليج الشرقية",
    charguiaAddr: "العنوان متاح على خرائط Google",
    phone: "الهاتف",
    phoneVal: "+216 XX XXX XXX",
    email: "البريد الإلكتروني",
    visitCta: "احجز زيارة",
  },
};

export default function ContactSidebar({
  lang = "fr",
  onSelectInfoRequest,
}: {
  lang?: Lang;
  onSelectInfoRequest: (requestType: string, profile: string) => void;
}) {
  const t = T[lang];
  const [selected, setSelected] = useState<ProfileKey | null>(null);

  function handleInfoRequest() {
    const profile = selected ? t.profiles.find((p) => p.key === selected)!.name : "";
    onSelectInfoRequest(t.infoCta, profile);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-black/10 p-6">
        <h2 className="text-base font-bold text-navy-950">{t.profileTitle}</h2>
        <p className="mt-1 text-xs text-navy-950/60">{t.profileSubtitle}</p>

        <div className="mt-4 space-y-2" role="group" aria-label={t.profileTitle}>
          {t.profiles.map((profile) => {
            const isSelected = selected === profile.key;
            return (
              <button
                type="button"
                key={profile.key}
                onClick={() => setSelected(isSelected ? null : profile.key)}
                aria-pressed={isSelected}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  isSelected ? "border-primary-500 bg-primary-50" : "border-black/10 hover:border-primary-300"
                }`}
              >
                <p className="text-sm font-bold text-navy-950">{profile.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-950/60">{profile.services.join(" · ")}</p>
              </button>
            );
          })}
        </div>

        <Button type="button" variant="primary" className="mt-5 w-full" onClick={handleInfoRequest}>
          {t.infoCta}
        </Button>
      </div>

      <div className="rounded-2xl border border-black/10 p-8">
        <h2 className="text-lg font-bold text-navy-950">{t.menzah}</h2>
        <p className="mt-2 text-sm text-navy-950/70">
          {t.menzahAddr[0]}
          <br />
          {t.menzahAddr[1]}
          <br />
          {t.menzahAddr[2]}
        </p>

        <h2 className="mt-6 text-lg font-bold text-navy-950">{t.charguia}</h2>
        <p className="mt-2 text-sm text-navy-950/70">{t.charguiaAddr}</p>

        <h2 className="mt-6 text-lg font-bold text-navy-950">{t.phone}</h2>
        <p className="mt-2 text-sm text-navy-950/70">{t.phoneVal}</p>

        <h2 className="mt-6 text-lg font-bold text-navy-950">{t.email}</h2>
        <p className="mt-2 text-sm text-navy-950/70">contact@startupvillage.tn</p>

        <Button variant="primary" className="mt-8 w-full">
          {t.visitCta}
        </Button>
      </div>
    </aside>
  );
}
