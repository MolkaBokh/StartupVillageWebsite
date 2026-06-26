"use client";

import { useEffect, useState } from "react";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import SpaceTypeCard from "@/components/contact/SpaceTypeCard";
import type { Lang } from "@/config/navigation";
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

const CONTACT_EMAIL = "molkaboukhris224@gmail.com";

const REQUEST_TYPES = [
  { key: "visit", icon: <VisitIcon />, fr: "Demander une visite", en: "Book a visit" },
  { key: "club", icon: <ClubIcon />, fr: "Rejoindre le Club Startup Village", en: "Join the Startup Village Club" },
  { key: "office", icon: <OfficeIcon />, fr: "Demander un bureau privé", en: "Request a private office" },
  { key: "room", icon: <MeetingRoomIcon />, fr: "Réserver une salle", en: "Book a room" },
  { key: "event", icon: <EventIcon />, fr: "Organiser un événement", en: "Host an event" },
  { key: "stock", icon: <StockIcon />, fr: "Déposer mon stock", en: "Drop off my stock" },
  { key: "market", icon: <MarketIcon />, fr: "Intégrer Market & Co", en: "Join Market & Co" },
  { key: "info", icon: <InfoIcon />, fr: "Demande d'information", en: "Request information" },
  { key: "other", icon: <OtherIcon />, fr: "Autre", en: "Other" },
] as const;

// URL ?type=… maps to a request-type key, pre-selected when the form opens.
const TYPE_PARAM_KEY: Record<string, string> = { stock: "stock", market: "market" };

const T = {
  fr: {
    successTitle: "Merci pour votre demande !",
    successText: "Notre équipe vous recontactera très prochainement pour organiser votre visite.",
    needTitle: "Quel est votre besoin ?",
    infoTitle: "Vos informations",
    fullName: "Nom complet",
    fullNamePh: "Votre nom et prénom",
    email: "Adresse e-mail",
    emailPh: "vous@exemple.com",
    phone: "Numéro de téléphone",
    phonePh: "+216 XX XXX XXX",
    org: "Organisation",
    orgPh: "Nom de votre entreprise",
    requestType: "Type de demande",
    site: "Site souhaité",
    select: "Sélectionner",
    people: "Nombre de personnes",
    peoplePh: "Ex : 4",
    date: "Date souhaitée",
    message: "Message",
    messagePh: "Parlez-nous de votre projet ou de vos besoins spécifiques",
    consent: "J'accepte que Startup Village m'envoie des mises à jour, des offres et des enquêtes intéressantes sur ses produits et services. Conformément au RGPD, vous pouvez vous désabonner à tout moment.",
    submit: "Envoyer ma demande",
    sites: ["Startup Village Menzah", "Startup Village Charguia", "Je ne sais pas encore"],
    subject: "Nouvelle demande",
    fields: { name: "Nom complet", email: "Email", phone: "Téléphone", org: "Organisation", type: "Type de demande", site: "Site souhaité", people: "Nombre de personnes", date: "Date souhaitée", message: "Message" },
  },
  en: {
    successTitle: "Thank you for your request!",
    successText: "Our team will get back to you very soon to arrange your visit.",
    needTitle: "What do you need?",
    infoTitle: "Your details",
    fullName: "Full name",
    fullNamePh: "Your first and last name",
    email: "Email address",
    emailPh: "you@example.com",
    phone: "Phone number",
    phonePh: "+216 XX XXX XXX",
    org: "Organisation",
    orgPh: "Your company name",
    requestType: "Request type",
    site: "Preferred site",
    select: "Select",
    people: "Number of people",
    peoplePh: "e.g. 4",
    date: "Preferred date",
    message: "Message",
    messagePh: "Tell us about your project or your specific needs",
    consent: "I agree that Startup Village may send me updates, offers and interesting surveys about its products and services. In accordance with GDPR, you can unsubscribe at any time.",
    submit: "Send my request",
    sites: ["Startup Village Menzah", "Startup Village Charguia", "I don't know yet"],
    subject: "New request",
    fields: { name: "Full name", email: "Email", phone: "Phone", org: "Organisation", type: "Request type", site: "Preferred site", people: "Number of people", date: "Preferred date", message: "Message" },
  },
} as const;

export default function ContactForm({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const [requestType, setRequestType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("type");
    const key = param ? TYPE_PARAM_KEY[param] : undefined;
    const match = key ? REQUEST_TYPES.find((r) => r.key === key) : undefined;
    if (match) setRequestType(match[lang]);
  }, [lang]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => (data.get(key) ?? "").toString().trim();
    const f = t.fields;
    const subject = `${t.subject}${requestType ? ` — ${requestType}` : ""}`;
    const body = [
      `${f.name} : ${value("full_name")}`,
      `${f.email} : ${value("email")}`,
      `${f.phone} : ${value("phone")}`,
      `${f.org} : ${value("organisation")}`,
      `${f.type} : ${value("request_type") || requestType}`,
      `${f.site} : ${value("site")}`,
      `${f.people} : ${value("people_count")}`,
      `${f.date} : ${value("desired_date")}`,
      "",
      `${f.message} :`,
      value("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 bg-primary-50 p-12 text-center">
        <h3 className="text-2xl font-bold text-navy-950">{t.successTitle}</h3>
        <p className="mt-3 text-navy-950/70">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div>
        <h3 className="text-xl font-bold text-navy-950">{t.needTitle}</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REQUEST_TYPES.map((type) => (
            <SpaceTypeCard
              key={type.key}
              label={type[lang]}
              icon={type.icon}
              selected={requestType === type[lang]}
              onSelect={() => setRequestType(type[lang])}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy-950">{t.infoTitle}</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label required>{t.fullName}</Label>
            <Input type="text" name="full_name" required placeholder={t.fullNamePh} />
          </div>
          <div>
            <Label required>{t.email}</Label>
            <Input type="email" name="email" required placeholder={t.emailPh} />
          </div>
          <div>
            <Label required>{t.phone}</Label>
            <Input type="tel" name="phone" required placeholder={t.phonePh} />
          </div>
          <div>
            <Label>{t.org}</Label>
            <Input type="text" name="organisation" placeholder={t.orgPh} />
          </div>
          <div>
            <Label required>{t.requestType}</Label>
            <Select name="request_type" required value={requestType} onChange={(e) => setRequestType(e.target.value)}>
              <option value="" disabled>{t.select}</option>
              {REQUEST_TYPES.map((r) => (
                <option key={r.key} value={r[lang]}>{r[lang]}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label required>{t.site}</Label>
            <Select name="site" required defaultValue="">
              <option value="" disabled>{t.select}</option>
              {t.sites.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label>{t.people}</Label>
            <Input type="number" name="people_count" min={1} placeholder={t.peoplePh} />
          </div>
          <div>
            <Label>{t.date}</Label>
            <Input type="date" name="desired_date" />
          </div>
          <div className="sm:col-span-2">
            <Label>{t.message}</Label>
            <Textarea name="message" placeholder={t.messagePh} />
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
        <span className="text-sm text-navy-950/70">{t.consent}</span>
      </label>

      <Button type="submit">{t.submit}</Button>
    </form>
  );
}
