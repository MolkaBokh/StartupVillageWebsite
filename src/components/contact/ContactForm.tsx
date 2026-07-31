"use client";

import { useEffect, useState } from "react";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import SpaceTypeCard from "@/components/contact/SpaceTypeCard";
import type { Lang } from "@/config/navigation";
import { REQUEST_TYPES, TYPE_PARAM_KEY } from "@/data/contactRequestTypes";

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
    sending: "Envoi en cours…",
    errorText: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
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
    sending: "Sending…",
    errorText: "Something went wrong while sending. Please try again.",
    sites: ["Startup Village Menzah", "Startup Village Charguia", "I don't know yet"],
    subject: "New request",
    fields: { name: "Full name", email: "Email", phone: "Phone", org: "Organisation", type: "Request type", site: "Preferred site", people: "Number of people", date: "Preferred date", message: "Message" },
  },
  ar: {
    successTitle: "شكرًا على طلبك!",
    successText: "سيتواصل معك فريقنا قريبًا جدًا لتنظيم زيارتك.",
    needTitle: "ما هي حاجتك؟",
    infoTitle: "معلوماتك",
    fullName: "الاسم الكامل",
    fullNamePh: "اسمك ولقبك",
    email: "البريد الإلكتروني",
    emailPh: "you@example.com",
    phone: "رقم الهاتف",
    phonePh: "+216 XX XXX XXX",
    org: "المؤسسة",
    orgPh: "اسم شركتك",
    requestType: "نوع الطلب",
    site: "الموقع المفضّل",
    select: "اختر",
    people: "عدد الأشخاص",
    peoplePh: "مثال: 4",
    date: "التاريخ المفضّل",
    message: "الرسالة",
    messagePh: "أخبرنا عن مشروعك أو احتياجاتك الخاصة",
    consent: "أوافق على أن يرسل لي ستارتب فيليج تحديثات وعروضًا واستبيانات مفيدة حول منتجاته وخدماته. وفقًا للائحة حماية البيانات (RGPD)، يمكنك إلغاء الاشتراك في أي وقت.",
    submit: "أرسل طلبي",
    sending: "جارٍ الإرسال…",
    errorText: "حدث خطأ أثناء الإرسال. يُرجى المحاولة مرة أخرى.",
    sites: ["ستارتب فيليج المنزه", "ستارتب فيليج الشرقية", "لا أعرف بعد"],
    subject: "طلب جديد",
    fields: { name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "الهاتف", org: "المؤسسة", type: "نوع الطلب", site: "الموقع المفضّل", people: "عدد الأشخاص", date: "التاريخ المفضّل", message: "الرسالة" },
  },
} as const;

type Props = {
  lang?: Lang;
  requestType: string;
  onRequestTypeChange: (value: string) => void;
};

export default function ContactForm({ lang = "fr", requestType, onRequestTypeChange }: Props) {
  const t = T[lang];
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("type");
    const key = param ? TYPE_PARAM_KEY[param] : undefined;
    const match = key ? REQUEST_TYPES.find((r) => r.key === key) : undefined;
    if (match) onRequestTypeChange(match[lang]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => (data.get(key) ?? "").toString().trim();
    const f = t.fields;
    const fields = [
      { label: f.name, value: value("full_name") },
      { label: f.email, value: value("email") },
      { label: f.phone, value: value("phone") },
      { label: f.org, value: value("organisation") },
      { label: f.type, value: value("request_type") || requestType },
      { label: f.site, value: value("site") },
      { label: f.people, value: value("people_count") },
      { label: f.date, value: value("desired_date") },
      { label: f.message, value: value("message") },
    ];

    setError(false);
    setSending(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, replyTo: value("email") }),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="rounded-2xl border border-black/10 bg-primary-50 p-12 text-center"
      >
        <h2 className="text-2xl font-bold text-navy-950">{t.successTitle}</h2>
        <p className="mt-3 text-navy-950/70">{t.successText}</p>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate className="scroll-mt-24 space-y-12" aria-label={t.needTitle}>
      <div>
        <h2 id="contact-need-heading" className="text-xl font-bold text-navy-950">{t.needTitle}</h2>
        <div role="group" aria-labelledby="contact-need-heading" className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REQUEST_TYPES.map((type) => (
            <SpaceTypeCard
              key={type.key}
              label={type[lang]}
              icon={type.icon}
              selected={requestType === type[lang]}
              onSelect={() => onRequestTypeChange(type[lang])}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-navy-950">{t.infoTitle}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="cf-full_name" required>{t.fullName}</Label>
            <Input id="cf-full_name" type="text" name="full_name" required placeholder={t.fullNamePh} aria-required="true" />
          </div>
          <div>
            <Label htmlFor="cf-email" required>{t.email}</Label>
            <Input id="cf-email" type="email" name="email" required placeholder={t.emailPh} aria-required="true" />
          </div>
          <div>
            <Label htmlFor="cf-phone" required>{t.phone}</Label>
            <Input id="cf-phone" type="tel" name="phone" required placeholder={t.phonePh} aria-required="true" />
          </div>
          <div>
            <Label htmlFor="cf-organisation">{t.org}</Label>
            <Input id="cf-organisation" type="text" name="organisation" placeholder={t.orgPh} />
          </div>
          <div>
            <Label htmlFor="cf-request_type" required>{t.requestType}</Label>
            <Select id="cf-request_type" name="request_type" required value={requestType} onChange={(e) => onRequestTypeChange(e.target.value)} aria-required="true">
              <option value="" disabled>{t.select}</option>
              {REQUEST_TYPES.map((r) => (
                <option key={r.key} value={r[lang]}>{r[lang]}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="cf-site" required>{t.site}</Label>
            <Select id="cf-site" name="site" required defaultValue="" aria-required="true">
              <option value="" disabled>{t.select}</option>
              {t.sites.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="cf-people_count">{t.people}</Label>
            <Input id="cf-people_count" type="number" name="people_count" min={1} placeholder={t.peoplePh} />
          </div>
          <div>
            <Label htmlFor="cf-desired_date">{t.date}</Label>
            <Input id="cf-desired_date" type="date" name="desired_date" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="cf-message">{t.message}</Label>
            <Textarea id="cf-message" name="message" placeholder={t.messagePh} />
          </div>
        </div>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="rgpd"
          required
          aria-required="true"
          className="mt-1 h-4 w-4 rounded border-black/20 text-primary-500 focus:ring-primary-500"
        />
        <span className="text-sm text-navy-950/70">{t.consent}</span>
      </label>

      <div aria-live="assertive" aria-atomic="true">
        {error && (
          <p role="alert" className="text-sm font-medium text-red-600">{t.errorText}</p>
        )}
      </div>

      <Button type="submit" disabled={sending} className="disabled:opacity-60">
        {sending ? t.sending : t.submit}
      </Button>
    </form>
  );
}
