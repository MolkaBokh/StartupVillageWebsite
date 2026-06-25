const COLORS = {
  green: 'bg-sv-green',
  blue: 'bg-sv-blue',
  magenta: 'bg-sv-magenta',
  navy: 'bg-sv-navy',
}

export default function CommunityCard({ image, alt, color, title, body }) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <img src={image} alt={alt} className="h-[110px] w-full object-cover" loading="lazy" />
      <div className={`flex flex-1 flex-col gap-2 p-5 text-white ${COLORS[color]}`}>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
