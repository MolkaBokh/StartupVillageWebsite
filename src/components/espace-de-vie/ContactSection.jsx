'use client'

import { useState } from 'react'
import Container from './Container'
import Button from './Button'

const T = {
  fr: {
    title: 'Votre place vous attend au village',
    intro: "Réservez une visite, demandez un devis ou échangez avec notre équipe pour trouver l'espace adapté à votre besoin.",
    name: 'Nom et prénom*',
    type: 'Type de demande*',
    select: 'Sélectionner',
    org: 'Organisation',
    phone: 'Téléphone*',
    email: 'Email*',
    site: 'Site souhaité*',
    people: 'Nombre de personnes',
    message: 'Message',
    consent: "J'accepte de recevoir par email les actualités de Startup Village et de ses partenaires : newsletters exclusives, invitations à des événements et enquêtes digitales. Conformément à la réglementation RGPD, vous pouvez vous désinscrire à tout moment.",
    submit: 'Envoyer ma demande',
    sending: 'Envoi en cours…',
    successTitle: 'Merci pour votre demande !',
    successText: 'Notre équipe vous recontactera très prochainement.',
    errorText: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    requestTypes: ['Demander une visite', 'Rejoindre le Club Startup Village', 'Demander un bureau privé', 'Réserver une salle', 'Organiser un événement', 'Déposer mon stock', 'Intégrer Market & Co', "Demande d'information", 'Autre'],
    sites: ['Startup Village Menzah', 'Startup Village Charguia', 'Peu importe'],
    fields: { name: 'Nom et prénom', type: 'Type de demande', org: 'Organisation', phone: 'Téléphone', email: 'Email', site: 'Site souhaité', people: 'Nombre de personnes', message: 'Message' },
  },
  en: {
    title: 'Your place is waiting at the village',
    intro: 'Book a visit, request a quote or talk to our team to find the space that fits your needs.',
    name: 'Full name*',
    type: 'Request type*',
    select: 'Select',
    org: 'Organisation',
    phone: 'Phone*',
    email: 'Email*',
    site: 'Preferred site*',
    people: 'Number of people',
    message: 'Message',
    consent: 'I agree to receive Startup Village and partner news by email: exclusive newsletters, event invitations and digital surveys. In accordance with GDPR, you can unsubscribe at any time.',
    submit: 'Send my request',
    sending: 'Sending…',
    successTitle: 'Thank you for your request!',
    successText: 'Our team will get back to you very soon.',
    errorText: 'Something went wrong while sending. Please try again.',
    requestTypes: ['Book a visit', 'Join the Startup Village Club', 'Request a private office', 'Book a room', 'Host an event', 'Drop off my stock', 'Join Market & Co', 'Request information', 'Other'],
    sites: ['Startup Village Menzah', 'Startup Village Charguia', 'No preference'],
    fields: { name: 'Full name', type: 'Request type', org: 'Organisation', phone: 'Phone', email: 'Email', site: 'Preferred site', people: 'Number of people', message: 'Message' },
  },
  ar: {
    title: 'مكانك في انتظارك في القرية',
    intro: 'احجز زيارة، اطلب عرض سعر أو تحدّث مع فريقنا للعثور على الفضاء المناسب لاحتياجك.',
    name: 'الاسم الكامل*',
    type: 'نوع الطلب*',
    select: 'اختر',
    org: 'المؤسسة',
    phone: 'الهاتف*',
    email: 'البريد الإلكتروني*',
    site: 'الموقع المفضّل*',
    people: 'عدد الأشخاص',
    message: 'الرسالة',
    consent: 'أوافق على تلقّي أخبار ستارتب فيليج وشركائه عبر البريد الإلكتروني: نشرات حصرية ودعوات إلى الفعاليات واستبيانات رقمية. وفقًا للائحة حماية البيانات (RGPD)، يمكنك إلغاء الاشتراك في أي وقت.',
    submit: 'أرسل طلبي',
    sending: 'جارٍ الإرسال…',
    successTitle: 'شكرًا على طلبك!',
    successText: 'سيتواصل معك فريقنا قريبًا جدًا.',
    errorText: 'حدث خطأ أثناء الإرسال. يُرجى المحاولة مرة أخرى.',
    requestTypes: ['طلب زيارة', 'الانضمام إلى نادي ستارتب فيليج', 'طلب مكتب خاص', 'حجز قاعة', 'تنظيم فعالية', 'إيداع مخزوني', 'الانضمام إلى Market & Co', 'طلب معلومات', 'أخرى'],
    sites: ['ستارتب فيليج المنزه', 'ستارتب فيليج الشرقية', 'لا تفضيل'],
    fields: { name: 'الاسم الكامل', type: 'نوع الطلب', org: 'المؤسسة', phone: 'الهاتف', email: 'البريد الإلكتروني', site: 'الموقع المفضّل', people: 'عدد الأشخاص', message: 'الرسالة' },
  },
}

export default function ContactSection({ lang = 'fr' }) {
  const t = T[lang]
  const [form, setForm] = useState({
    name: '', requestType: '', organisation: '', phone: '', email: '', site: '', people: '', message: '', consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const f = t.fields
    const fields = [
      { label: f.name, value: form.name },
      { label: f.type, value: form.requestType },
      { label: f.org, value: form.organisation },
      { label: f.phone, value: form.phone },
      { label: f.email, value: form.email },
      { label: f.site, value: form.site },
      { label: f.people, value: form.people },
      { label: f.message, value: form.message },
    ]

    setError(false)
    setSending(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, replyTo: form.email }),
      })
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-2xl font-bold uppercase tracking-[2px] text-sv-navy md:text-[34px]">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sv-grey">{t.intro}</p>
        </div>

        {submitted ? (
          <div className="mx-auto mt-12 max-w-[760px] rounded-2xl border border-sv-grey/20 bg-sv-navy/5 p-12 text-center">
            <h3 className="text-2xl font-bold text-sv-navy">{t.successTitle}</h3>
            <p className="mt-3 text-sv-grey">{t.successText}</p>
          </div>
        ) : (
        <form onSubmit={onSubmit} className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:col-span-1">
            <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-sv-navy">{t.name}</label>
            <input id="contact-name" type="text" required value={form.name} onChange={update('name')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-type" className="mb-1 block text-sm font-bold text-sv-navy">{t.type}</label>
            <select id="contact-type" required value={form.requestType} onChange={update('requestType')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy">
              <option value="" disabled>{t.select}</option>
              {t.requestTypes.map((rt) => (<option key={rt} value={rt}>{rt}</option>))}
            </select>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-org" className="mb-1 block text-sm font-bold text-sv-navy">{t.org}</label>
            <input id="contact-org" type="text" value={form.organisation} onChange={update('organisation')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-bold text-sv-navy">{t.phone}</label>
            <input id="contact-phone" type="tel" required value={form.phone} onChange={update('phone')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-sv-navy">{t.email}</label>
            <input id="contact-email" type="email" required value={form.email} onChange={update('email')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-site" className="mb-1 block text-sm font-bold text-sv-navy">{t.site}</label>
            <select id="contact-site" required value={form.site} onChange={update('site')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy">
              <option value="" disabled>{t.select}</option>
              {t.sites.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-people" className="mb-1 block text-sm font-bold text-sv-navy">{t.people}</label>
            <input id="contact-people" type="text" value={form.people} onChange={update('people')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-sv-navy">{t.message}</label>
            <textarea id="contact-message" rows={4} value={form.message} onChange={update('message')} className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy" />
          </div>

          <div className="md:col-span-2 flex items-start gap-3">
            <input id="contact-consent" type="checkbox" checked={form.consent} onChange={update('consent')} className="mt-1 h-4 w-4 shrink-0" />
            <label htmlFor="contact-consent" className="text-sm leading-relaxed text-sv-grey">{t.consent}</label>
          </div>

          {error && (
            <p className="md:col-span-2 text-center text-sm font-medium text-red-600">{t.errorText}</p>
          )}

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="primary" disabled={sending} className="mt-2 w-full disabled:opacity-60 sm:w-auto">{sending ? t.sending : t.submit}</Button>
          </div>
        </form>
        )}
      </Container>
    </section>
  )
}
