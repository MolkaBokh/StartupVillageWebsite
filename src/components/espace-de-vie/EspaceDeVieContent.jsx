import HeroFullBleed from './HeroFullBleed'
import Button from './Button'
import BenefitsGrid from './BenefitsGrid'
import MagentaDivider from './MagentaDivider'
import RoomCarousel from './RoomCarousel'
import ContactSection from './ContactSection'
import { images } from '@/data/espaceImages'
import { withLang } from '@/config/navigation'

const T = {
  fr: {
    heroAlt: 'Hall en marbre du Startup Village avec totem signalétique Startup et Medianet',
    heroTitle: "Là où l'innovation prend vie",
    heroSubtitle: "Un bâtiment historique. Une communauté vivante. Le quotidien tunisien de l'innovation.",
    ctaPrimary: 'Devenir membre',
    benefitsTitle: 'Pourquoi choisir Startup Village ?',
    benefits: ['Espaces flexibles', 'Communauté active', "Événements toute l'année", 'Deux adresses stratégiques'],
    divider: 'Découvrez nos espaces',
    learnMore: 'En savoir plus',
    rooms: [
      {
        eyebrow: 'Salle polyvalente', title: 'Salle polyvalente',
        subtitle: "Un espace qui s'adapte à votre événement, et non l'inverse.",
        body: "De 10 à plus de 60 personnes, la salle polyvalente se transforme selon vos besoins : conférence, workshop, projection, formation, théâtre, team building, lancement produit ou événement privé.",
        alts: ['Salle polyvalente, vue projection', 'Salle polyvalente, public assis', 'Salle polyvalente, scène', 'Salle polyvalente, ambiance'],
      },
      {
        eyebrow: 'Les Terrasses Exchanges', title: 'Les Terrasses Exchanges',
        subtitle: "Un espace de détente et d'interaction en pleine ville.",
        body: "Ouvertes sur la ville, les Terrasses Exchanges ont été conçues comme un lieu de détente, d'échange et de convivialité pour les villageois. Elles peuvent également être privatisées pour des événements, workshops ou team buildings.",
        alts: ['Les Terrasses Exchanges, vue panoramique', 'Les Terrasses Exchanges, espace assis', 'Les Terrasses Exchanges, soirée', 'Les Terrasses Exchanges, détail', 'Les Terrasses Exchanges, ambiance'],
      },
    ],
    cochefTitle: 'CoChef – La cantine du Startup Village',
    cochefBody: "CoChef est l'espace de restauration du Startup Village. Plus qu'une cantine, c'est un lieu de rencontre où les villageois se retrouvent autour d'un café, d'un déjeuner ou d'un brunch.",
    galleryTitle: 'Un espace, plusieurs vies',
  },
  en: {
    heroAlt: 'Marble lobby of Startup Village with Startup and Medianet signage totem',
    heroTitle: 'Where innovation comes to life',
    heroSubtitle: 'A historic building. A living community. The everyday home of Tunisian innovation.',
    ctaPrimary: 'Become a member',
    benefitsTitle: 'Why choose Startup Village?',
    benefits: ['Flexible spaces', 'Active community', 'Events all year round', 'Two strategic locations'],
    divider: 'Discover our spaces',
    learnMore: 'Learn more',
    rooms: [
      {
        eyebrow: 'Multipurpose Room', title: 'Multipurpose Room',
        subtitle: 'A space that adapts to your event, not the other way around.',
        body: 'From 10 to over 60 people, the multipurpose room transforms to fit your needs: conference, workshop, screening, training, theatre, team building, product launch or private event.',
        alts: ['Multipurpose Room, screening view', 'Multipurpose Room, seated audience', 'Multipurpose Room, stage', 'Multipurpose Room, atmosphere'],
      },
      {
        eyebrow: 'The Terrasses Exchanges', title: 'The Terrasses Exchanges',
        subtitle: 'A space to relax and connect in the heart of the city.',
        body: 'Open to the city, the Terrasses Exchanges were designed as a place to relax, exchange and socialize for villagers. They can also be privatized for events, workshops or team buildings.',
        alts: ['The Terrasses Exchanges, panoramic view', 'The Terrasses Exchanges, seating area', 'The Terrasses Exchanges, evening', 'The Terrasses Exchanges, detail', 'The Terrasses Exchanges, atmosphere'],
      },
    ],
    cochefTitle: 'CoChef – The Startup Village Canteen',
    cochefBody: 'CoChef is the dining space of Startup Village. More than a canteen, it\'s a meeting place where villagers come together over a coffee, lunch or brunch.',
    galleryTitle: 'One space, many lives',
  },
  ar: {
    heroAlt: 'بهو رخامي في ستارتب فيليج مع لافتة Startup وMedianet',
    heroTitle: 'حيث تنبض الحياة في الابتكار',
    heroSubtitle: 'مبنى تاريخي. مجتمع نابض بالحياة. الموطن اليومي للابتكار التونسي.',
    ctaPrimary: 'انضمّ إلينا',
    benefitsTitle: 'لماذا تختار ستارتب فيليج؟',
    benefits: ['فضاءات مرنة', 'مجتمع نشط', 'فعاليات على مدار السنة', 'موقعان استراتيجيان'],
    divider: 'اكتشف فضاءاتنا',
    learnMore: 'اعرف المزيد',
    rooms: [
      {
        eyebrow: 'القاعة متعددة الاستخدامات', title: 'القاعة متعددة الاستخدامات',
        subtitle: 'فضاء يتكيّف مع فعاليتك، لا العكس.',
        body: 'من 10 إلى أكثر من 60 شخصًا، تتحوّل القاعة متعددة الاستخدامات حسب احتياجاتك: مؤتمر، ورشة، عرض، تكوين، مسرح، بناء فرق، إطلاق منتج أو فعالية خاصة.',
        alts: ['القاعة متعددة الاستخدامات، منظر العرض', 'القاعة متعددة الاستخدامات، جمهور جالس', 'القاعة متعددة الاستخدامات، المنصة', 'القاعة متعددة الاستخدامات، الأجواء'],
      },
      {
        eyebrow: 'شرفات Terrasses Exchanges', title: 'شرفات Terrasses Exchanges',
        subtitle: 'فضاء للاسترخاء والتفاعل في قلب المدينة.',
        body: 'مفتوحة على المدينة، صُمِّمت شرفات Terrasses Exchanges كمكان للاسترخاء والتبادل والألفة لسكان القرية. كما يمكن خصخصتها للفعاليات وورش العمل وأنشطة بناء الفرق.',
        alts: ['شرفات Terrasses Exchanges، منظر بانورامي', 'شرفات Terrasses Exchanges، منطقة جلوس', 'شرفات Terrasses Exchanges، أمسية', 'شرفات Terrasses Exchanges، تفصيل', 'شرفات Terrasses Exchanges، أجواء'],
      },
    ],
    cochefTitle: 'CoChef – مطعم ستارتب فيليج',
    cochefBody: 'CoChef هو فضاء الإطعام في ستارتب فيليج. أكثر من مجرّد مطعم، إنّه مكان لقاء يجتمع فيه السكان حول قهوة أو غداء أو برانش.',
    galleryTitle: 'فضاء واحد، حيوات متعدّدة',
  },
}

const ROOM_META = [
  { eyebrowColor: '#6FA83C', imgs: ['avantPremiere1', 'avantPremiere2', 'avantPremiere3', 'avantPremiere4'], autoplay: true, reverse: false },
  { eyebrowColor: '#2BB3E0', imgs: ['terrasse1', 'terrasse2', 'terrasse3', 'terrasse4', 'terrasse5'], autoplay: false, reverse: true },
]

const GALLERY_KEYS = ['galerie1', 'galerie2', 'galerie3', 'galerie4', 'galerie5', 'galerie6']

export default function EspaceDeVieContent({ lang = 'fr' }) {
  const t = T[lang]
  const contact = withLang('/contact', lang)

  return (
    <>
      {/* S0 — Hero */}
      <HeroFullBleed
        image={images.hero}
        alt={t.heroAlt}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: contact }}
      />

      {/* S1 — Benefits */}
      <BenefitsGrid title={t.benefitsTitle} items={t.benefits} />

      {/* S2 — Divider */}
      <div id="espaces">
        <MagentaDivider title={t.divider} color="green" />
      </div>

      {/* S3 — Room carousels (Salle polyvalente + Terrasses) */}
      {t.rooms.map((room, i) => (
        <RoomCarousel
          key={i}
          eyebrow={room.eyebrow}
          eyebrowColor={ROOM_META[i].eyebrowColor}
          title={room.title}
          subtitle={room.subtitle || undefined}
          body={room.body}
          ctaLabel={t.learnMore}
          ctaHref={contact}
          autoplay={ROOM_META[i].autoplay}
          autoplayInterval={5500}
          reverse={ROOM_META[i].reverse}
          images={ROOM_META[i].imgs.map((key, j) => ({ src: images[key], alt: room.alts[j] }))}
        />
      ))}

      {/* S4 — CoChef */}
      <section className="bg-[#f5f8fb] py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl">
              <img
                src={images.coChef}
                alt={t.cochefTitle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-sv-navy md:text-[30px]">{t.cochefTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-sv-grey">{t.cochefBody}</p>
              <Button variant="primary" href={contact} className="mt-8">
                {t.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* S5 — Gallery: Un espace, plusieurs vies */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[2px] text-sv-navy md:text-[34px]">
            {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY_KEYS.map((key, i) => (
              <div key={key} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={images[key]}
                  alt={`${t.galleryTitle} ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6 — Contact */}
      <ContactSection lang={lang} />
    </>
  )
}
