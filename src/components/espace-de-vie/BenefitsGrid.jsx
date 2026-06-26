const ICONS = {
  flex: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M4 9h7V4M20 15h-7v5M4 9l16 6" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M2 20c0-2.8 2.4-5 6-5s6 2.2 6 5M10 20c0-2.8 2.4-5 6-5s6 2.2 6 5" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9h18M8 3v4M16 3v4M8 14l2 2 4-4" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
}

const ICON_ORDER = ['flex', 'community', 'events', 'pin']

const DEFAULT_ITEMS = ['Espaces flexibles', 'Communauté active', "Événements toute l'année", 'Deux adresses stratégiques']

export default function BenefitsGrid({ title, items = DEFAULT_ITEMS }) {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-xl font-bold uppercase tracking-[2px] text-sv-navy md:text-2xl">
          {title}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-sv-blue">{ICONS[ICON_ORDER[i]]}</span>
              <span className="text-sm font-bold text-sv-navy">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
