"use client";

import { useState } from "react";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import SpaceTypeCard from "@/components/contact/SpaceTypeCard";
import {
  ClubIcon,
  EventIcon,
  InfoIcon,
  MarketIcon,
  MeetingRoomIcon,
  OfficeIcon,
  OtherIcon,
  StockIcon,
  VisitIcon,
} from "@/components/contact/icons";

const REQUEST_TYPES = [
  { label: "Demander une visite", icon: <VisitIcon /> },
  { label: "Rejoindre le Club Startup Village", icon: <ClubIcon /> },
  { label: "Demander un bureau privé", icon: <OfficeIcon /> },
  { label: "Réserver une salle", icon: <MeetingRoomIcon /> },
  { label: "Organiser un événement", icon: <EventIcon /> },
  { label: "Déposer mon stock", icon: <StockIcon /> },
  { label: "Intégrer Market & Co", icon: <MarketIcon /> },
  { label: "Demande d'information", icon: <InfoIcon /> },
  { label: "Autre", icon: <OtherIcon /> },
];

const SITES = [
  "Startup Village Menzah",
  "Startup Village Charguia",
  "Je ne sais pas encore",
];

export default function ContactForm() {
  const [requestType, setRequestType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 bg-primary-50 p-12 text-center">
        <h3 className="text-2xl font-bold text-navy-950">Merci pour votre demande !</h3>
        <p className="mt-3 text-navy-950/70">
          Notre équipe vous recontactera très prochainement pour organiser votre visite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div>
        <h3 className="text-xl font-bold text-navy-950">Quel est votre besoin ?</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REQUEST_TYPES.map((type) => (
            <SpaceTypeCard
              key={type.label}
              label={type.label}
              icon={type.icon}
              selected={requestType === type.label}
              onSelect={() => setRequestType(type.label)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy-950">Vos informations</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label required>Nom complet</Label>
            <Input type="text" name="full_name" required placeholder="Votre nom et prénom" />
          </div>

          <div>
            <Label required>Adresse e-mail</Label>
            <Input type="email" name="email" required placeholder="vous@exemple.com" />
          </div>

          <div>
            <Label required>Numéro de téléphone</Label>
            <Input type="tel" name="phone" required placeholder="+216 XX XXX XXX" />
          </div>

          <div>
            <Label>Organisation</Label>
            <Input type="text" name="organisation" placeholder="Nom de votre entreprise" />
          </div>

          <div>
            <Label required>Type de demande</Label>
            <Select
              name="request_type"
              required
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
            >
              <option value="" disabled>
                Sélectionner
              </option>
              {REQUEST_TYPES.map((t) => (
                <option key={t.label} value={t.label}>
                  {t.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label required>Site souhaité</Label>
            <Select name="site" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              {SITES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label>Nombre de personnes</Label>
            <Input type="number" name="people_count" min={1} placeholder="Ex : 4" />
          </div>

          <div>
            <Label>Date souhaitée</Label>
            <Input type="date" name="desired_date" />
          </div>

          <div className="sm:col-span-2">
            <Label>Message</Label>
            <Textarea
              name="message"
              placeholder="Parlez-nous de votre projet ou de vos besoins spécifiques"
            />
          </div>
        </div>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="rgpd"
          required
          className="mt-1 h-4 w-4 rounded border-black/20 text-primary-500 focus:ring-primary-500"
        />
        <span className="text-sm text-navy-950/70">
          J&apos;accepte que Startup Village m&apos;envoie des mises à jour, des offres et des
          enquêtes intéressantes sur ses produits et services. Conformément au RGPD, vous pouvez
          vous désabonner à tout moment.
        </span>
      </label>

      <Button type="submit">Envoyer ma demande</Button>
    </form>
  );
}
