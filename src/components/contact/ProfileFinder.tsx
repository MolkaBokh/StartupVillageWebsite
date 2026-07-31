"use client";

import type { ComponentType } from "react";
import type { Lang } from "@/config/navigation";
import { REQUEST_TYPES, type RequestTypeKey } from "@/data/contactRequestTypes";
import {
  CreatorIcon,
  EntrepreneurIcon,
  InstitutionIcon,
  PmeIcon,
  StartupProfileIcon,
} from "@/components/contact/icons";

type ProfileKey = "entrepreneur" | "startup" | "pme" | "creator" | "institution";

const PROFILE_ICONS: Record<ProfileKey, ComponentType<{ className?: string }>> = {
  entrepreneur: EntrepreneurIcon,
  startup: StartupProfileIcon,
  pme: PmeIcon,
  creator: CreatorIcon,
  institution: InstitutionIcon,
};

// The single most relevant contact request-type preselected when a visitor
// picks this profile — chosen from within that profile's own recommended
// services list below, so the auto-selected value always matches something
// the visitor just saw recommended.
const PRIMARY_REQUEST_KEY: Record<ProfileKey, RequestTypeKey> = {
  entrepreneur: "expertise",
  startup: "room",
  pme: "event",
  creator: "standexpo",
  institution: "studio",
};

type Profile = { key: ProfileKey; name: string; description: string; services: string[] };

const T: Record<Lang, { title: string; subtitle: string; cta: string; profiles: Profile[] }> = {
  fr: {
    title: "Vous ne savez pas encore ce dont vous avez besoin ?",
    subtitle: "Choisissez votre profil et découvrez les services les plus adaptés.",
    cta: "Choisir ce profil",
    profiles: [
      {
        key: "entrepreneur",
        name: "Entrepreneur / Porteur de projet",
        description: "Vous portez un projet et cherchez un cadre pour le structurer et le faire grandir.",
        services: ["Accompagnement startups", "Coworking Space", "Domiciliation", "Studios Audiovisuels", "Demander une expertise"],
      },
      {
        key: "startup",
        name: "Startup",
        description: "Votre startup est lancée et a besoin d'espaces et de services pour accélérer son développement.",
        services: ["Coworking Space", "Salle de réunion / formation", "Studios Audiovisuels", "Organisation d'événements", "Co-Storage", "Soft Landing"],
      },
      {
        key: "pme",
        name: "PME / Entreprise",
        description: "Votre entreprise recherche des espaces professionnels et des services pour ses équipes et ses événements.",
        services: ["Coworking Space", "Salle de réunion / formation", "Organisation d'événements", "Louer un stand d'exposition", "Studios Audiovisuels", "Food Lab"],
      },
      {
        key: "creator",
        name: "Créateur / Artisan / Marque",
        description: "Vous créez et souhaitez présenter, vendre ou produire vos créations dans un lieu vivant.",
        services: ["Louer un stand d'exposition", "Studios Audiovisuels", "Co-Storage", "Organisation d'événements"],
      },
      {
        key: "institution",
        name: "Organisation / Institution / Association",
        description: "Vous représentez une organisation et cherchez un cadre pour vos réunions, formations et événements.",
        services: ["Organisation d'événements", "Salle de réunion / formation", "Studios Audiovisuels", "Coworking Space"],
      },
    ],
  },
  en: {
    title: "Not sure yet what you need?",
    subtitle: "Choose your profile and discover the services best suited to you.",
    cta: "Choose this profile",
    profiles: [
      {
        key: "entrepreneur",
        name: "Entrepreneur / Project owner",
        description: "You're carrying a project and looking for a framework to structure it and help it grow.",
        services: ["Startup support", "Coworking Space", "Business address", "Audiovisual Studios", "Request expert advice"],
      },
      {
        key: "startup",
        name: "Startup",
        description: "Your startup is up and running and needs spaces and services to accelerate its growth.",
        services: ["Coworking Space", "Meeting / training room", "Audiovisual Studios", "Event organisation", "Co-Storage", "Soft Landing"],
      },
      {
        key: "pme",
        name: "SME / Company",
        description: "Your company is looking for professional spaces and services for its teams and events.",
        services: ["Coworking Space", "Meeting / training room", "Event organisation", "Rent an exhibition stand", "Audiovisual Studios", "Food Lab"],
      },
      {
        key: "creator",
        name: "Creator / Artisan / Brand",
        description: "You create, and want to showcase, sell or produce your work in a vibrant space.",
        services: ["Rent an exhibition stand", "Audiovisual Studios", "Co-Storage", "Event organisation"],
      },
      {
        key: "institution",
        name: "Organisation / Institution / Association",
        description: "You represent an organisation and are looking for a setting for your meetings, training and events.",
        services: ["Event organisation", "Meeting / training room", "Audiovisual Studios", "Coworking Space"],
      },
    ],
  },
  ar: {
    title: "لم تحدّد بعد ما تحتاجه؟",
    subtitle: "اختر ملفّك الشخصي واكتشف الخدمات الأنسب لك.",
    cta: "اختر هذا الملف الشخصي",
    profiles: [
      {
        key: "entrepreneur",
        name: "رائد أعمال / صاحب مشروع",
        description: "لديك مشروع وتبحث عن إطار لهيكلته وتنميته.",
        services: ["مرافقة الشركات الناشئة", "مساحة العمل المشترك", "التوطين", "الاستوديوهات السمعية البصرية", "طلب خبرة"],
      },
      {
        key: "startup",
        name: "شركة ناشئة",
        description: "شركتك الناشئة انطلقت وتحتاج إلى فضاءات وخدمات لتسريع تطوّرها.",
        services: ["مساحة العمل المشترك", "قاعة اجتماعات / تكوين", "الاستوديوهات السمعية البصرية", "تنظيم الفعاليات", "Co-Storage", "الانطلاق السلس"],
      },
      {
        key: "pme",
        name: "مؤسسة صغيرة ومتوسطة / شركة",
        description: "شركتك تبحث عن فضاءات مهنية وخدمات لفرقها وفعالياتها.",
        services: ["مساحة العمل المشترك", "قاعة اجتماعات / تكوين", "تنظيم الفعاليات", "استئجار جناح عرض", "الاستوديوهات السمعية البصرية", "Food Lab"],
      },
      {
        key: "creator",
        name: "مبدع / حرفي / علامة",
        description: "أنت مبدع وتريد عرض إبداعاتك أو بيعها أو إنتاجها في مكان نابض بالحياة.",
        services: ["استئجار جناح عرض", "الاستوديوهات السمعية البصرية", "Co-Storage", "تنظيم الفعاليات"],
      },
      {
        key: "institution",
        name: "منظمة / مؤسسة / جمعية",
        description: "تمثّل منظمة وتبحث عن إطار لاجتماعاتك وتكويناتك وفعالياتك.",
        services: ["تنظيم الفعاليات", "قاعة اجتماعات / تكوين", "الاستوديوهات السمعية البصرية", "مساحة العمل المشترك"],
      },
    ],
  },
};

export default function ProfileFinder({
  lang = "fr",
  onSelect,
}: {
  lang?: Lang;
  onSelect: (value: string) => void;
}) {
  const t = T[lang];

  function handleSelect(profileKey: ProfileKey) {
    const requestKey = PRIMARY_REQUEST_KEY[profileKey];
    const match = REQUEST_TYPES.find((r) => r.key === requestKey);
    if (match) onSelect(match[lang]);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="border-y border-black/5 bg-primary-50/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">{t.title}</h2>
          <p className="mt-3 text-lg text-navy-950/70">{t.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {t.profiles.map((profile) => {
            const Icon = PROFILE_ICONS[profile.key];
            return (
              <div
                key={profile.key}
                className="flex w-full flex-col rounded-2xl border border-black/10 bg-white p-6 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-950">{profile.name}</h3>
                <p className="mt-2 text-sm text-navy-950/70">{profile.description}</p>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {profile.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-navy-950/80">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {service}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleSelect(profile.key)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1478a0] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#116080]"
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
