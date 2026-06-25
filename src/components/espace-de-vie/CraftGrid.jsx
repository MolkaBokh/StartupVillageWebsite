export default function CraftGrid({ title, images, caption }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] text-sv-navy md:text-[34px]">
          {title}
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-[160px] w-full object-cover sm:h-[220px] md:h-[280px]"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-8 text-base text-sv-grey">{caption}</p>
      </div>
    </section>
  )
}
