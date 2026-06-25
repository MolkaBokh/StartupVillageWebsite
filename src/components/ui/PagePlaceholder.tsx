type PagePlaceholderProps = {
  /** Page title. */
  title: string;
  /** Which source repository's content lands here in step 2. */
  source: string;
};

/**
 * Foundation-only page scaffold.
 *
 * Step 1 intentionally ships NO page content. Each route renders this
 * placeholder so the architecture (routing, header, footer, type scale) can be
 * verified end-to-end. In step 2 the body of each page is replaced with the
 * migrated sections from its source repository — the surrounding shell stays.
 */
export default function PagePlaceholder({ title, source }: PagePlaceholderProps) {
  return (
    <section className="sv-section">
      <div className="sv-container">
        <span className="sv-eyebrow text-primary-600">Startup Village</span>
        <h1 className="mt-3">{title}</h1>
        <div className="sv-divider mt-5" />
        <p className="sv-lead mt-6 max-w-2xl">
          Page prête pour l’intégration du contenu (étape&nbsp;2).
        </p>
        <p className="mt-2 max-w-2xl text-sm text-navy-950/50">
          Contenu source&nbsp;: <code className="font-semibold">{source}</code>
        </p>
      </div>
    </section>
  );
}
