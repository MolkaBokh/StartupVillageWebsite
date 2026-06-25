import { Button } from "@/components/ui/Button";

export default function InfoPanel() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-black/10 p-8">
        <h3 className="text-lg font-bold text-navy-950">Startup Village Menzah</h3>
        <p className="mt-2 text-sm text-navy-950/70">
          Immeuble Essadi Tour C-D, Mezzanine
          <br />
          10 Décembre, Av. Habib Bourguiba
          <br />
          Tunis 1004
        </p>

        <h3 className="mt-6 text-lg font-bold text-navy-950">Startup Village Charguia</h3>
        <p className="mt-2 text-sm text-navy-950/70">Adresse disponible sur Google Maps</p>

        <h3 className="mt-6 text-lg font-bold text-navy-950">Téléphone</h3>
        <p className="mt-2 text-sm text-navy-950/70">+216 XX XXX XXX</p>

        <h3 className="mt-6 text-lg font-bold text-navy-950">Email</h3>
        <p className="mt-2 text-sm text-navy-950/70">contact@startupvillage.tn</p>

        <Button variant="primary" className="mt-8 w-full">
          Réserver une visite
        </Button>
      </div>
    </aside>
  );
}
