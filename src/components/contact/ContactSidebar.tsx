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
  // The first profile is highlighted and active by default (see visual spec:
  // same light-blue tint as the former "Besoin d'aide ?" card); exactly one
  // profile is active at a time, so selecting another simply moves it there.
  const [selected, setSelected] = useState<ProfileKey>(t.profiles[0].key);

  function handleInfoRequest() {
    const profile = t.profiles.find((p) => p.key === selected)!.name;
    onSelectInfoRequest(t.infoCta, profile);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside className="lg:sticky lg:top-24">
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
                onClick={() => setSelected(profile.key)}
                aria-pressed={isSelected}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  isSelected ? "border-primary-500 bg-primary-50" : "border-black/10 bg-white hover:border-primary-300"
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
    </aside>
  );
}
