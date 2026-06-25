'use client'

import { useState } from 'react'
import Container from './Container'
import Button from './Button'

const REQUEST_TYPES = [
  'Demander une visite',
  'Rejoindre le Club Startup Village',
  'Demander un bureau privé',
  'Réserver une salle',
  'Organiser un événement',
  'Déposer mon stock',
  'Intégrer Market & Co',
  "Demande d'information",
  'Autre',
]

const SITES = ['Startup Village Menzah', 'Startup Village Charguia', 'Peu importe']

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    requestType: '',
    organisation: '',
    phone: '',
    email: '',
    site: '',
    people: '',
    message: '',
    consent: false,
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
            Votre place vous attend au village
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sv-grey">
            Réservez une visite, demandez un devis ou échangez avec notre équipe pour trouver l'espace adapté à votre besoin.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:col-span-1">
            <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-sv-navy">
              Nom et prénom*
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-type" className="mb-1 block text-sm font-bold text-sv-navy">
              Type de demande*
            </label>
            <select
              id="contact-type"
              required
              value={form.requestType}
              onChange={update('requestType')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            >
              <option value="" disabled>
                Sélectionner
              </option>
              {REQUEST_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-org" className="mb-1 block text-sm font-bold text-sv-navy">
              Organisation
            </label>
            <input
              id="contact-org"
              type="text"
              value={form.organisation}
              onChange={update('organisation')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-bold text-sv-navy">
              Téléphone*
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={form.phone}
              onChange={update('phone')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-sv-navy">
              Email*
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="contact-site" className="mb-1 block text-sm font-bold text-sv-navy">
              Site souhaité*
            </label>
            <select
              id="contact-site"
              required
              value={form.site}
              onChange={update('site')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            >
              <option value="" disabled>
                Sélectionner
              </option>
              {SITES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-people" className="mb-1 block text-sm font-bold text-sv-navy">
              Nombre de personnes
            </label>
            <input
              id="contact-people"
              type="text"
              value={form.people}
              onChange={update('people')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-sv-navy">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={form.message}
              onChange={update('message')}
              className="w-full rounded border border-sv-grey/30 px-4 py-3 text-sv-navy"
            />
          </div>

          <div className="md:col-span-2 flex items-start gap-3">
            <input
              id="contact-consent"
              type="checkbox"
              checked={form.consent}
              onChange={update('consent')}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <label htmlFor="contact-consent" className="text-sm leading-relaxed text-sv-grey">
              J'accepte de recevoir par email les actualités de Startup Village et de ses partenaires : newsletters
              exclusives, invitations à des événements et enquêtes digitales. Conformément à la réglementation RGPD,
              vous pouvez vous désinscrire à tout moment.
            </label>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="primary" className="mt-2 w-full sm:w-auto">
              Envoyer ma demande
            </Button>
          </div>
        </form>
      </Container>
    </section>
  )
}
