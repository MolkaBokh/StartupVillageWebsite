'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Image = { src: string; alt: string }

type Props = {
  eyebrowColor: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
  images: Image[]
  reverse?: boolean
}

export default function ServiceSection({
  eyebrowColor,
  title,
  body,
  ctaLabel,
  ctaHref,
  images,
  reverse = false,
}: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = images.length

  const goTo = (i: number) => setIndex(((i % total) + total) % total)

  useEffect(() => {
    if (total <= 1 || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5500)
    return () => clearInterval(id)
  }, [total, paused])

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">

          {/* Image / carousel */}
          <div
            className={`relative h-[280px] w-full overflow-hidden rounded-xl md:h-[440px] ${reverse ? 'md:order-2' : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
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
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={() => goTo(index + 1)}
                  className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 text-white backdrop-blur hover:bg-black/40 md:flex"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      aria-label={`Image ${i + 1} sur ${total}`}
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
              className="mb-1 block h-1.5 w-9 rounded-full"
              style={{ background: eyebrowColor }}
            />
            <h2 className="mt-4 text-2xl font-bold text-sv-navy md:text-[26px]">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-sv-navy/60">{body}</p>
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sv-cyan px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1c9fce]"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
