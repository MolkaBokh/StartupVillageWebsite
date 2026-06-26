import HeroFullBleed from './HeroFullBleed'
import BenefitsGrid from './BenefitsGrid'
import MagentaDivider from './MagentaDivider'
import RoomCarousel from './RoomCarousel'
import CraftGrid from './CraftGrid'
import CommunityCard from './CommunityCard'
import ContactSection from './ContactSection'
import { images } from '@/data/espaceImages'
import { withLang } from '@/config/navigation'

/**
 * Espace de Vie page body (bilingual). Identical markup, components, images,
 * carousels and styling for both languages; only text and CTA hrefs differ.
 */

const T = {
  fr: {
    heroAlt: 'Hall en marbre du Startup Village avec totem signalétique Startup et Medianet',
    heroTitle: "Là où l'innovation prend vie",
    heroSubtitle: "Un bâtiment historique. Une communauté vivante. Le quotidien tunisien de l'innovation.",
    ctaPrimary: 'Réserver un espace',
    ctaSecondary: 'Visiter le village',
    benefitsTitle: 'Pourquoi choisir Startup Village ?',
    benefits: ['Espaces flexibles', 'Communauté active', "Événements toute l'année", 'Deux adresses stratégiques'],
    divider: 'Découvrez nos espaces',
    learnMore: 'En savoir plus',
    rooms: [
      {
        eyebrow: 'Salle Avant-Première', title: 'Salle Avant-Première',
        subtitle: "Un espace qui s'adapte à votre événement, et non l'inverse.",
        body: "De 10 à plus de 60 personnes, Avant-Première se transforme selon vos besoins : conférence, workshop, projection, formation, théâtre, team building, lancement produit ou événement privé.",
        alts: ['Salle Avant-Première, vue projection', 'Salle Avant-Première, public assis', 'Salle Avant-Première, scène', 'Salle Avant-Première, ambiance', 'Salle Avant-Première, séance de yoga'],
      },
      {
        eyebrow: 'Les Terrasses Exchanges', title: 'Les Terrasses Exchanges',
        subtitle: "Un espace de détente et d'interaction en pleine ville.",
        body: "Ouvertes sur la ville, les Terrasses Exchanges ont été conçues comme un lieu de détente, d'échange et de convivialité pour les villageois. Elles peuvent également être privatisées pour des événements, workshops ou team buildings.",
        alts: ['Les Terrasses Exchanges, vue panoramique', 'Les Terrasses Exchanges, espace assis', 'Les Terrasses Exchanges, soirée'],
      },
      {
        eyebrow: 'Réunion · Formation', title: 'Salles de réunion & formation',
        subtitle: 'Des espaces pensés pour un usage précis.',
        body: "Au Startup Village, nous ne proposons pas des salles standardisées. Chaque espace est conçu autour d'un besoin : réfléchir, collaborer, former, présenter ou avancer sur un projet dans un environnement fonctionnel et inspirant.",
        alts: ['Salle de réunion 1', 'Salle de réunion 2', 'Salle de réunion 3', 'Salle de réunion 4'],
      },
      {
        eyebrow: 'Studio', title: "Studio d'enregistrement", subtitle: null,
        body: "Un espace équipé pour enregistrer podcasts, interviews, formations en ligne, vidéos et contenus de marque dans des conditions professionnelles.",
        alts: ["Studio d'enregistrement, vue 1", "Studio d'enregistrement, vue 2"],
      },
    ],
    craftTitle: "Plus qu'un espace de travail",
    craftCaption: "Des espaces pensés pour travailler, échanger, déjeuner, créer et se retrouver. Ici, chaque lieu participe à l'expérience : les espaces communs, les lieux de passage, les terrasses et les moments partagés.",
    craftAlts: ['Espace cuisine partagé CoChef', 'Corridor du Startup Village', 'Détail décoratif du Startup Village', "Espace d'exposition artistique du Startup Village", "Galerie d'art dans un couloir du Startup Village", 'Coin détente au style industriel du Startup Village'],
    communityTitle: 'Une communauté en mouvement',
    community: [
      { title: 'Networking & rencontres', body: 'Des rencontres spontanées entre startups, mentors et partenaires au cœur du village.', alt: 'Moment de networking entre entrepreneurs' },
      { title: 'Bien-être & équilibre', body: 'Yoga, sport et rituels qui rythment la vie quotidienne des villageois.', alt: 'Séance de yoga collective au village' },
      { title: 'Culture & expériences', body: 'Projections, soirées et événements qui font vivre la communauté autrement.', alt: 'Soirée Movie Night organisée au village' },
      { title: 'Création de contenu', body: "Podcasts, interviews et formations en ligne dans un studio équipé et prêt à l'emploi.", alt: 'Création de contenu en studio' },
    ],
    eventsBtn: 'Découvrir les événements',
  },
  en: {
    heroAlt: 'Marble lobby of Startup Village with Startup and Medianet signage totem',
    heroTitle: 'Where innovation comes to life',
    heroSubtitle: 'A historic building. A living community. The everyday home of Tunisian innovation.',
    ctaPrimary: 'Book a space',
    ctaSecondary: 'Visit the village',
    benefitsTitle: 'Why choose Startup Village?',
    benefits: ['Flexible spaces', 'Active community', 'Events all year round', 'Two strategic locations'],
    divider: 'Discover our spaces',
    learnMore: 'Learn more',
    rooms: [
      {
        eyebrow: 'Avant-Première Room', title: 'Avant-Première Room',
        subtitle: 'A space that adapts to your event, not the other way around.',
        body: 'From 10 to over 60 people, Avant-Première transforms to fit your needs: conference, workshop, screening, training, theatre, team building, product launch or private event.',
        alts: ['Avant-Première Room, screening view', 'Avant-Première Room, seated audience', 'Avant-Première Room, stage', 'Avant-Première Room, atmosphere', 'Avant-Première Room, yoga session'],
      },
      {
        eyebrow: 'The Terrasses Exchanges', title: 'The Terrasses Exchanges',
        subtitle: 'A space to relax and connect in the heart of the city.',
        body: 'Open to the city, the Terrasses Exchanges were designed as a place to relax, exchange and socialize for villagers. They can also be privatized for events, workshops or team buildings.',
        alts: ['The Terrasses Exchanges, panoramic view', 'The Terrasses Exchanges, seating area', 'The Terrasses Exchanges, evening'],
      },
      {
        eyebrow: 'Meetings · Training', title: 'Meeting & training rooms',
        subtitle: 'Spaces designed for a specific purpose.',
        body: "At Startup Village, we don't offer one-size-fits-all rooms. Each space is built around a need: to think, collaborate, train, present or move a project forward in a functional and inspiring environment.",
        alts: ['Meeting room 1', 'Meeting room 2', 'Meeting room 3', 'Meeting room 4'],
      },
      {
        eyebrow: 'Studio', title: 'Recording studio', subtitle: null,
        body: 'A space equipped to record podcasts, interviews, online courses, videos and brand content in professional conditions.',
        alts: ['Recording studio, view 1', 'Recording studio, view 2'],
      },
    ],
    craftTitle: 'More than a workspace',
    craftCaption: 'Spaces designed to work, exchange, have lunch, create and come together. Here, every place is part of the experience: the common areas, the passageways, the terraces and the shared moments.',
    craftAlts: ['CoChef shared kitchen space', 'Startup Village corridor', 'Decorative detail of Startup Village', 'Art exhibition space at Startup Village', 'Art gallery in a Startup Village corridor', 'Industrial-style lounge corner at Startup Village'],
    communityTitle: 'A community in motion',
    community: [
      { title: 'Networking & encounters', body: 'Spontaneous encounters between startups, mentors and partners at the heart of the village.', alt: 'Networking moment between entrepreneurs' },
      { title: 'Well-being & balance', body: "Yoga, sport and rituals that pace the villagers' daily life.", alt: 'Group yoga session at the village' },
      { title: 'Culture & experiences', body: 'Screenings, parties and events that bring the community to life in a different way.', alt: 'Movie Night event at the village' },
      { title: 'Content creation', body: 'Podcasts, interviews and online courses in a fully equipped, ready-to-use studio.', alt: 'Content creation in the studio' },
    ],
    eventsBtn: 'Discover events',
  },
}

const ROOM_META = [
  { eyebrowColor: '#6FA83C', imgs: ['avantPremiere1', 'avantPremiere2', 'avantPremiere3', 'avantPremiere4', 'avantPremiereYoga'], autoplay: true, reverse: false },
  { eyebrowColor: '#2BB3E0', imgs: ['terrasse2', 'terrasse1', 'terrasse3'], autoplay: false, reverse: true },
  { eyebrowColor: '#E0205F', imgs: ['reunion1', 'reunion2', 'reunion3', 'reunion4'], autoplay: true, reverse: false },
  { eyebrowColor: '#1A2238', imgs: ['studio1', 'studio2'], autoplay: false, reverse: true },
]
const CRAFT_IMGS = ['coChef', 'basketCorridor', 'artisanat', 'expositionArtistique', 'galerieArtCouloir', 'coinDetenteIndustriel']
const COMMUNITY_META = [
  { img: 'networking', color: 'blue' },
  { img: 'avantPremiereYoga', color: 'green' },
  { img: 'movieNight', color: 'magenta' },
  { img: 'studio1', color: 'navy' },
]

export default function EspaceDeVieContent({ lang = 'fr' }) {
  const t = T[lang]
  const contact = withLang('/contact', lang)
  const contactStock = withLang('/contact?type=stock', lang)
  const news = withLang('/actualites', lang)

  return (
    <>
      {/* S0 — Hero */}
      <HeroFullBleed
        image={images.hero}
        alt={t.heroAlt}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: contact }}
        secondaryCta={{ label: t.ctaSecondary, href: contactStock }}
      />

      {/* S1B — Benefits */}
      <BenefitsGrid title={t.benefitsTitle} items={t.benefits} />

      {/* S2 — Green divider */}
      <div id="espaces">
        <MagentaDivider title={t.divider} color="green" />
      </div>

      {/* S3 — Room carousels */}
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

      {/* S4 — Craft grid */}
      <CraftGrid
        title={t.craftTitle}
        caption={t.craftCaption}
        images={CRAFT_IMGS.map((key, i) => ({ src: images[key], alt: t.craftAlts[i] }))}
      />

      {/* S5 — Une communauté en mouvement */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[2px] text-sv-navy md:text-[34px]">
            {t.communityTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {t.community.map((c, i) => (
              <CommunityCard
                key={i}
                image={images[COMMUNITY_META[i].img]}
                alt={c.alt}
                color={COMMUNITY_META[i].color}
                title={c.title}
                body={c.body}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={news}
              className="inline-flex items-center justify-center rounded bg-sv-blue px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#1f9bc4]"
            >
              {t.eventsBtn}
            </a>
          </div>
        </div>
      </section>

      {/* S6 — Contact form */}
      <ContactSection lang={lang} />
    </>
  )
}
