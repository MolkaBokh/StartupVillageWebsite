import HeroFullBleed from './HeroFullBleed'
import BenefitsGrid from './BenefitsGrid'
import MagentaDivider from './MagentaDivider'
import RoomCarousel from './RoomCarousel'
import CraftGrid from './CraftGrid'
import CommunityCard from './CommunityCard'
import ContactSection from './ContactSection'
import { images } from '@/data/espaceImages'

export default function EspaceDeVieContent() {
  return (
    <>
      {/* S0 — Hero */}
      <HeroFullBleed
        image={images.hero}
        alt="Hall en marbre du Startup Village avec totem signalétique Startup et Medianet"
        title="Là où l'innovation prend vie"
        subtitle="Un bâtiment historique. Une communauté vivante. Le quotidien tunisien de l'innovation."
        primaryCta={{ label: 'Réserver un espace', href: '/contact' }}
        secondaryCta={{ label: 'Visiter le village', href: '/contact?type=stock' }}
      />

      {/* S1B — Pourquoi choisir Startup Village */}
      <BenefitsGrid title="Pourquoi choisir Startup Village ?" />

      {/* S2 — Green divider */}
      <div id="espaces">
        <MagentaDivider title="Découvrez nos espaces" color="green" />
      </div>

      {/* S3A — Salle Avant-Première: image left, text right */}
      <RoomCarousel
        eyebrow="Salle Avant-Première"
        eyebrowColor="#6FA83C"
        title="Salle Avant-Première"
        subtitle="Un espace qui s'adapte à votre événement, et non l'inverse."
        body="De 10 à plus de 60 personnes, Avant-Première se transforme selon vos besoins : conférence, workshop, projection, formation, théâtre, team building, lancement produit ou événement privé."
        ctaLabel="En savoir plus"
        ctaHref="/contact"
        autoplay
        autoplayInterval={5500}
        images={[
          { src: images.avantPremiere1, alt: 'Salle Avant-Première, vue projection' },
          { src: images.avantPremiere2, alt: 'Salle Avant-Première, public assis' },
          { src: images.avantPremiere3, alt: 'Salle Avant-Première, scène' },
          { src: images.avantPremiere4, alt: 'Salle Avant-Première, ambiance' },
          { src: images.avantPremiereYoga, alt: 'Salle Avant-Première, séance de yoga' },
        ]}
      />

      {/* S3B — Terrasses: text left, image right */}
      <RoomCarousel
        eyebrow="Les Terrasses Exchanges"
        eyebrowColor="#2BB3E0"
        title="Les Terrasses Exchanges"
        subtitle="Un espace de détente et d'interaction en pleine ville."
        body="Ouvertes sur la ville, les Terrasses Exchanges ont été conçues comme un lieu de détente, d'échange et de convivialité pour les villageois. Elles peuvent également être privatisées pour des événements, workshops ou team buildings."
        ctaLabel="En savoir plus"
        ctaHref="/contact"
        reverse
        images={[
          { src: images.terrasse2, alt: 'Les Terrasses Exchanges, vue panoramique' },
          { src: images.terrasse1, alt: 'Les Terrasses Exchanges, espace assis' },
          { src: images.terrasse3, alt: 'Les Terrasses Exchanges, soirée' },
        ]}
      />

      {/* S3C — Salles de réunion & formation: image left, text right */}
      <RoomCarousel
        eyebrow="Réunion · Formation"
        eyebrowColor="#E0205F"
        title="Salles de réunion & formation"
        subtitle="Des espaces pensés pour un usage précis."
        body="Au Startup Village, nous ne proposons pas des salles standardisées. Chaque espace est conçu autour d'un besoin : réfléchir, collaborer, former, présenter ou avancer sur un projet dans un environnement fonctionnel et inspirant."
        ctaLabel="En savoir plus"
        ctaHref="/contact"
        autoplay
        autoplayInterval={5500}
        images={[
          { src: images.reunion1, alt: 'Salle de réunion 1' },
          { src: images.reunion2, alt: 'Salle de réunion 2' },
          { src: images.reunion3, alt: 'Salle de réunion 3' },
          { src: images.reunion4, alt: 'Salle de réunion 4' },
        ]}
      />

      {/* S3D — Studio d'enregistrement: text left, image right */}
      <RoomCarousel
        eyebrow="Studio"
        eyebrowColor="#1A2238"
        title="Studio d'enregistrement"
        body="Un espace équipé pour enregistrer podcasts, interviews, formations en ligne, vidéos et contenus de marque dans des conditions professionnelles."
        ctaLabel="En savoir plus"
        ctaHref="/contact"
        reverse
        images={[
          { src: images.studio1, alt: "Studio d'enregistrement, vue 1" },
          { src: images.studio2, alt: "Studio d'enregistrement, vue 2" },
        ]}
      />

      {/* S4 — Plus qu'un espace de travail */}
      <CraftGrid
        title="Plus qu'un espace de travail"
        caption="Des espaces pensés pour travailler, échanger, déjeuner, créer et se retrouver. Ici, chaque lieu participe à l'expérience : les espaces communs, les lieux de passage, les terrasses et les moments partagés."
        images={[
          { src: images.coChef, alt: 'Espace cuisine partagé CoChef' },
          { src: images.basketCorridor, alt: 'Corridor du Startup Village' },
          { src: images.artisanat, alt: 'Détail décoratif du Startup Village' },
          { src: images.expositionArtistique, alt: "Espace d'exposition artistique du Startup Village" },
          { src: images.galerieArtCouloir, alt: "Galerie d'art dans un couloir du Startup Village" },
          { src: images.coinDetenteIndustriel, alt: 'Coin détente au style industriel du Startup Village' },
        ]}
      />

      {/* S5 — Une communauté en mouvement */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[2px] text-sv-navy md:text-[34px]">
            Une communauté en mouvement
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            <CommunityCard
              image={images.networking}
              alt="Moment de networking entre entrepreneurs"
              color="blue"
              title="Networking & rencontres"
              body="Des rencontres spontanées entre startups, mentors et partenaires au cœur du village."
            />
            <CommunityCard
              image={images.avantPremiereYoga}
              alt="Séance de yoga collective au village"
              color="green"
              title="Bien-être & équilibre"
              body="Yoga, sport et rituels qui rythment la vie quotidienne des villageois."
            />
            <CommunityCard
              image={images.movieNight}
              alt="Soirée Movie Night organisée au village"
              color="magenta"
              title="Culture & expériences"
              body="Projections, soirées et événements qui font vivre la communauté autrement."
            />
            <CommunityCard
              image={images.studio1}
              alt="Création de contenu en studio"
              color="navy"
              title="Création de contenu"
              body="Podcasts, interviews et formations en ligne dans un studio équipé et prêt à l'emploi."
            />
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/actualites"
              className="inline-flex items-center justify-center rounded bg-sv-blue px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#1f9bc4]"
            >
              Découvrir les événements
            </a>
          </div>
        </div>
      </section>

      {/* S6 — Contact form (final CTA of the guided visit) */}
      <ContactSection />
    </>
  )
}
