import type { Lang } from "@/config/navigation";

const T = {
  fr: {
    title: "Nous trouver",
    menzah: "Startup Village Menzah",
    menzahAddr: "Immeuble Essadi Tour C-D, Mezzanine, 10 Décembre, Av. Habib Bourguiba, Tunis 1004",
    charguia: "Startup Village Charguia",
    charguiaPrefix: "Adresse disponible sur ",
    maps: "Google Maps",
  },
  en: {
    title: "Find us",
    menzah: "Startup Village Menzah",
    menzahAddr: "Essadi Building, Tower C-D, Mezzanine, 10 Décembre, Av. Habib Bourguiba, Tunis 1004",
    charguia: "Startup Village Charguia",
    charguiaPrefix: "Address available on ",
    maps: "Google Maps",
  },
} as const;

export default function MapSection({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="border-t border-black/5 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-navy-950">{t.title}</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-6">
            <p className="font-bold text-navy-950">{t.menzah}</p>
            <p className="mt-1 text-sm text-navy-950/70">{t.menzahAddr}</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6">
            <p className="font-bold text-navy-950">{t.charguia}</p>
            <p className="mt-1 text-sm text-navy-950/70">
              {t.charguiaPrefix}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Startup+Village+Charguia+Tunis"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary-600 hover:text-accent-500"
              >
                {t.maps}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
          <iframe
            title="Startup Village Menzah"
            src="https://maps.google.com/maps?q=Immeuble%20Essadi%20Tour%20C-D%2C%2010%20D%C3%A9cembre%2C%20Av.%20Habib%20Bourguiba%2C%20Tunis%201004&t=&z=15&ie=UTF8&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
