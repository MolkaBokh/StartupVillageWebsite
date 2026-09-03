export type Startup = {
  name: string;
  /**
   * Logo filename located in `public/assets/images/startups/logos/`.
   * Set to null to render the clean text fallback instead.
   */
  logo: string | null;
};

export const startups: Startup[] = [
  { name: "Alder", logo: "alder.png" },
  { name: "Apprentus", logo: "apprentus.png" },
  { name: "Atslik", logo: "atslik.png" },
  { name: "BHS", logo: "bhs.png" },
  { name: "Bmoov", logo: "bmoov.png" },
  { name: "Chtelix", logo: "chtelix.png" },
  { name: "CIL4Sys", logo: "cil4sys.png" },
  { name: "Club Privé", logo: "club-prive.png" },
  { name: "Cochef", logo: "cochef.png" },
  { name: "EMP", logo: "emp.png" },
  { name: "Iley'Com", logo: "ileycom.png" },
  { name: "Inty", logo: "inty.png" },
  { name: "Kamioun", logo: "kamioun.png" },
  { name: "KeeF", logo: "keef.png" },
  { name: "Lightresa", logo: "lightresa.png" },
  { name: "Poslik", logo: "poslik.png" },
  { name: "Rezoli", logo: "rezoli.png" },
  { name: "Seniatna", logo: "seniatna.png" },
  { name: "Sky Light", logo: "skylight.png" },
  { name: "SRT", logo: "srt.png" },
  { name: "Ukla", logo: "ukla.png" },
  { name: "Word Flow", logo: "wordflow.png" },
  { name: "Misk", logo: "misk.jpg" },
  { name: "Nexflow", logo: "nexflow.png" },
  { name: "Takt", logo: "takt.webp" },
  { name: "Best Tech System", logo: "best-tech-system.jpg" },
  { name: "Design Lab", logo: "design-lab.jpg" },
  { name: "Lysa", logo: "lysa.png" },
  { name: "Qore", logo: "qore.png" },
  { name: "TechTalent", logo: "techtalent.png" },
];
