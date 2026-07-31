'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Image = { src: string; alt: string }

type Props = {
  eyebrowColor: string
  title: string
  body: string
  ctaLabel: string
  ctaAriaLabel?: string
  ctaHref: string
  images: Image[]
  reverse?: boolean
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function ServiceSection({
  eyebrowColor,
  title,
  body,
  ctaLabel,
  ctaAriaLabel,
  ctaHref,
  images,
  reverse = false,
}: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = images.length
  const reducedMotion = usePrefersReducedMotion()

  const goTo = (i: number) => setIndex(((i % total) + total) % total)

  useEffect(() => {
    if (total <= 1 || paused || reducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5500)
    return () => clearInterval(id)
  }, [total, paused, reducedMotion])

  return (
    <section className="bg-white py-10 md:py-14" aria-label={title}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">

          {/* Image / carousel */}
          <div
            className={`relative h-[280px] w-full overflow-hidden rounded-xl md:h-[440px] ${reverse ? 'md:order-2' : ''}`}
            role="region"
            aria-roledescription="carousel"
            aria-label={title}
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
                  className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 text-white backdrop-blur hover:bg-black/40 md:flex"
                >
                  <span aria-hidden>‹</span>
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={() => goTo(index + 1)}
                  className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 text-white backdrop-blur hover:bg-black/40 md:flex"
                >
                  <span aria-hidden>›</span>
                </button>
                <div role="tablist" aria-label={`Diapositives : ${title}`} className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`${img.alt} — image ${i + 1} sur ${total}`}
                      onClick={() => goTo(i)}
                      className={`h-2 w-2 rounded-full border-2 border-white transition-colors ${
                        i === index ? 'bg-white' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Text */}
          <div>
            <span
              aria-hidden="true"
              className="mb-1 block h-1.5 w-9 rounded-full"
              style={{ background: eyebrowColor }}
            />
            <h2 className="mt-4 text-2xl font-bold text-sv-navy md:text-[26px]">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/70">{body}</p>
            <Link
              href={ctaHref}
              aria-label={ctaAriaLabel ?? ctaLabel}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sv-cyan-btn px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sv-cyan-btn-hover"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
