"use client";

import { useState } from "react";

type CarouselImage = { src: string; alt: string };

export default function ImageCarousel({
  images,
  title,
  className = "h-[280px] w-full overflow-hidden rounded-xl md:h-[420px]",
}: {
  images: CarouselImage[];
  title: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  };

  if (total <= 1) {
    return (
      <div className={`relative ${className}`}>
        <img src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
        />
      ))}
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-sv-navy text-sv-navy hover:bg-sv-navy hover:text-white md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next image"
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
            aria-label={`View image ${i + 1} of ${total}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full border-2 border-sv-navy ${i === index ? "bg-sv-navy" : "bg-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}
