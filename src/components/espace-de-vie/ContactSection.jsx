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
    requestTypes: ['Demander une visite', 'Rejoindre le Club Startup Village', 'Demander un bureau privé', 'Réserver une salle', 'Organiser un événement', 'Déposer mon stock', 'Intégrer Market & Co', "Demande d'information", 'Autre'],
    sites: ['Startup Village Menzah', 'Startup Village Charguia', 'Peu importe'],
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
    requestTypes: ['Book a visit', 'Join the Startup Village Club', 'Request a private office', 'Book a room', 'Host an event', 'Drop off my stock', 'Join Market & Co', 'Request information', 'Other'],
    sites: ['Startup Village Menzah', 'Startup Village Charguia', 'No preference'],
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
    requestTypes: ['طلب زيارة', 'الانضمام إلى نادي ستارتب فيليج', 'طلب مكتب خاص', 'حجز قاعة', 'تنظيم فعالية', 'إيداع مخزوني', 'الانضمام إلى Market & Co', 'طلب معلومات', 'أخرى'],
    sites: ['ستارتب فيليج المنزه', 'ستارتب فيليج الشرقية', 'لا تفضيل'],
  },
}

export default function ContactSection({ lang = 'fr' }) {
  const t = T[lang]
  const [form, setForm] = useState({
    name: '', requestType: '', organisation: '', phone: '', email: '', site: '', people: '', message: '', consent: false,
  })

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
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

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="primary" className="mt-2 w-full sm:w-auto">{t.submit}</Button>
          </div>
        </form>
      </Container>
    </section>
  )
}
