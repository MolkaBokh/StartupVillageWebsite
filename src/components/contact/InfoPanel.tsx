import { Button } from "@/components/ui/Button";
import type { Lang } from "@/config/navigation";

const T = {
  fr: {
    menzah: "Startup Village Menzah",
    menzahAddr: ["Immeuble Essadi Tour C-D, Mezzanine", "10 Décembre, Av. Habib Bourguiba", "Tunis 1004"],
    charguia: "Startup Village Charguia",
    charguiaAddr: "Adresse disponible sur Google Maps",
    phone: "Téléphone",
    phoneVal: "+216 XX XXX XXX",
    email: "Email",
    cta: "Réserver une visite",
  },
  en: {
    menzah: "Startup Village Menzah",
    menzahAddr: ["Essadi Building, Tower C-D, Mezzanine", "10 Décembre, Av. Habib Bourguiba", "Tunis 1004"],
    charguia: "Startup Village Charguia",
    charguiaAddr: "Address available on Google Maps",
    phone: "Phone",
    phoneVal: "+216 XX XXX XXX",
    email: "Email",
    cta: "Book a visit",
  },
  ar: {
    menzah: "ستارتب فيليج المنزه",
    menzahAddr: ["عمارة الصادي، برج C-D، الميزانين", "10 ديسمبر، شارع الحبيب بورقيبة", "تونس 1004"],
    charguia: "ستارتب فيليج الشرقية",
    charguiaAddr: "العنوان متاح على خرائط Google",
    phone: "الهاتف",
    phoneVal: "+216 XX XXX XXX",
    email: "البريد الإلكتروني",
    cta: "احجز زيارة",
  },
} as const;

export default function InfoPanel({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <aside className="lg:sticky lg:top-24">
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
          {t.cta}
        </Button>
      </div>
    </aside>
  );
}
