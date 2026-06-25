import fs from "node:fs";
import path from "node:path";

export type Partner = {
  name: string;
  logo: string;
};

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"]);

// Fichiers du dossier qui ne sont pas des logos partenaires.
// "hero" est l'image de fond de la page (réutilisée depuis le même dossier).
const EXCLUDE = new Set(["partenaires-event", "hero"]);

// Noms d'affichage propres pour les marques dont le slug ne suffit pas.
const NAME_OVERRIDES: Record<string, string> = {
  ey: "EY",
  cdc: "CDC",
  cotub: "COTUB",
  emp: "EMP",
  cil4sys: "CIL4Sys",
  africinvest: "AfricInvest",
  "total-energies": "TotalEnergies",
  express: "Express FM",
  "magic-hotels": "Magic Hotels & Resorts",
  "royal-asbu": "Royal ASBU",
  "i.t-grow": "I.T Grow",
  "iley-com": "Iley'Com",
  "club-privileges": "Club Privilèges",
  "colibri-pelican": "Colibri & Pelican",
  "market-co": "Market&Co",
  "global-it-vision": "Global IT Vision",
  "medianet-incubator": "Medianet Incubator",
  "adenauer-stiftung": "Adenauer Stiftung",
};

function prettify(slug: string): string {
  if (NAME_OVERRIDES[slug]) return NAME_OVERRIDES[slug];
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

/**
 * Lit tous les logos présents dans /public/assets/images/partenaires/ au moment
 * du build et construit la liste du logo wall. Ajouter un logo dans ce dossier
 * suffit pour qu'il apparaisse — aucune liste manuelle à maintenir.
 */
export function getPartners(): Partner[] {
  const dir = path.join(process.cwd(), "public", "assets", "images", "partenaires");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXT.has(path.extname(file).toLowerCase()))
    .map((file) => path.parse(file).name)
    .filter((slug) => !EXCLUDE.has(slug))
    .sort((a, b) => a.localeCompare(b, "fr"))
    .map((slug) => ({
      name: prettify(slug),
      logo: `/assets/images/partenaires/${slug}${getExt(files, slug)}`,
    }));
}

function getExt(files: string[], slug: string): string {
  const match = files.find((f) => path.parse(f).name === slug);
  return match ? path.extname(match) : ".png";
}
