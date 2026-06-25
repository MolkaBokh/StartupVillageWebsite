import Button from './Button'

export default function HeroFullBleed({ image, alt, title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="relative flex h-[460px] w-full items-center justify-center overflow-hidden md:h-[620px]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,34,56,0.25) 0%, rgba(26,34,56,0.55) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[700px] px-8 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-[64px]">{title}</h1>
        <p className="mt-6 text-base md:mt-6 md:text-xl">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" href={primaryCta.href} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          <Button variant="ghost" href={secondaryCta.href} className="w-full sm:w-auto">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
