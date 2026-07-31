import {
  ClubIcon,
  DomiciliationIcon,
  EventIcon,
  ExpertiseIcon,
  FoodLabIcon,
  MarketIcon,
  MeetingRoomIcon,
  OfficeIcon,
  StockIcon,
  StudioIcon,
  VisitIcon,
} from "@/components/contact/icons";

/**
 * "Quel est votre besoin ?" service cards + the contact form's "Type de
 * demande" dropdown share this single list, so both always stay in sync.
 * Also used by ProfileFinder to resolve the label of the service it
 * preselects for a given visitor profile.
 */
export const REQUEST_TYPES = [
  { key: "visit", icon: <VisitIcon />, fr: "Demander une visite", en: "Book a visit", ar: "طلب زيارة" },
  { key: "club", icon: <ClubIcon />, fr: "Rejoindre le Club Startup Village", en: "Join the Startup Village Club", ar: "الانضمام إلى نادي ستارتب فيليج" },
  { key: "office", icon: <OfficeIcon />, fr: "Demander un bureau privé", en: "Request a private office", ar: "طلب مكتب خاص" },
  { key: "room", icon: <MeetingRoomIcon />, fr: "Réserver une salle de réunion / formation", en: "Book a meeting / training room", ar: "حجز قاعة اجتماعات / تكوين" },
  { key: "event", icon: <EventIcon />, fr: "Organiser un événement", en: "Host an event", ar: "تنظيم فعالية" },
  { key: "stock", icon: <StockIcon />, fr: "Déposer mon stock", en: "Drop off my stock", ar: "إيداع مخزوني" },
  { key: "standexpo", icon: <MarketIcon />, fr: "Louer un stand d'exposition", en: "Rent an exhibition stand", ar: "استئجار جناح عرض" },
  { key: "domiciliation", icon: <DomiciliationIcon />, fr: "Domiciliation d'entreprise", en: "Business domiciliation", ar: "توطين الشركة" },
  { key: "studio", icon: <StudioIcon />, fr: "Réserver un studio", en: "Book a studio", ar: "حجز استوديو" },
  { key: "expertise", icon: <ExpertiseIcon />, fr: "Demander une expertise", en: "Request expert advice", ar: "طلب خبرة" },
  { key: "foodlab", icon: <FoodLabIcon />, fr: "Louer le Food Lab", en: "Rent the Food Lab", ar: "استئجار Food Lab" },
] as const;

export type RequestTypeKey = (typeof REQUEST_TYPES)[number]["key"];

// URL ?type=… maps to a request-type key, pre-selected when the form opens.
// (kept as "market" externally so existing /contact?type=market links, e.g.
// from the Charguia page, keep working after the "standexpo" rename.)
export const TYPE_PARAM_KEY: Record<string, RequestTypeKey> = { stock: "stock", market: "standexpo" };
