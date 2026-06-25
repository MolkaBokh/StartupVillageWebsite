const BACKGROUNDS = {
  magenta: 'bg-sv-magenta',
  green: 'bg-sv-green',
}

export default function MagentaDivider({ title, color = 'magenta' }) {
  return (
    <section className="w-full bg-white px-6 py-8 md:px-10 md:py-12">
      <div
        className={`mx-auto flex h-[100px] w-full max-w-[1200px] items-center justify-center md:h-[140px] ${BACKGROUNDS[color]}`}
      >
        <h2 className="text-2xl font-bold uppercase tracking-[2px] text-white md:text-[34px]">
          {title}
        </h2>
      </div>
    </section>
  )
}
