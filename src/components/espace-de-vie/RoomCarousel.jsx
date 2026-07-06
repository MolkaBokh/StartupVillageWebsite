'use client'

import { useEffect, useState } from 'react'
import Button from './Button'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function RoomCarousel({
  images,
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  body,
  ctaLabel,
  ctaHref,
  autoplay = false,
  autoplayInterval = 5500,
  reverse = false,
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = images.length
  const reducedMotion = usePrefersReducedMotion()

  const goTo = (i) => setIndex(((i % total) + total) % total)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1)
    if (e.key === 'ArrowLeft') goTo(index - 1)
  }

  useEffect(() => {
    if (!autoplay || paused || total <= 1 || reducedMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, autoplayInterval)
    return () => clearInterval(id)
  }, [autoplay, paused, total, autoplayInterval, reducedMotion])

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div
            className={`relative h-[280px] w-full overflow-hidden rounded-xl md:h-[440px] ${reverse ? 'md:order-2' : ''}`}
            role="region"
            aria-roledescription="carousel"
            aria-label={title}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
                aria-hidden={i !== index}
              />
            ))}
            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Image précédente"
                  onClick={() => goTo(index - 1)}
                  className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-sv-navy text-sv-navy hover:bg-sv-navy hover:text-white md:flex"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={() => goTo(index + 1)}
                  className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-sv-navy text-sv-navy hover:bg-sv-navy hover:text-white md:flex"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      aria-label={`Voir l'image ${i + 1} sur ${total}`}
                      aria-current={i === index}
                      onClick={() => goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full border-2 border-sv-navy ${
                        i === index ? 'bg-sv-navy' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: eyebrowColor }}>
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold text-sv-navy md:text-[26px]">{title}</h2>
            {subtitle && <p className="mt-2 text-lg font-bold italic text-sv-grey">{subtitle}</p>}
            <p className="mt-4 text-base leading-relaxed text-sv-grey">{body}</p>
            {ctaLabel && (
              <Button variant="primary" href={ctaHref} className="mt-8" aria-label={`${ctaLabel} — ${title}`}>
                {ctaLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
