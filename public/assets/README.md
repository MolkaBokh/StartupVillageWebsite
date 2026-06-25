# Assets

Centralized, consolidated asset store for the final Startup Village website.
All shared media referenced by pages and components lives here and is served
from `/assets/...`.

```
assets/
├── images/   # Photography, illustrations, backgrounds (shared across pages)
├── icons/    # Standalone icon files (UI / decorative)
├── logos/    # Brand & partner logos  →  startup-village-logo.svg (header)
└── fonts/    # Local font files, if any (the UI font, Plus Jakarta Sans,
               # is loaded via next/font; this folder is for any self-hosted
               # faces added later)
```

## Conventions
- Reference assets with absolute public paths, e.g. `/assets/logos/startup-village-logo.svg`.
- Keep page-specific imagery prefixed or grouped so step-2 migrations stay tidy.
- Optimize before committing (compress PNG/JPG, minify SVG).
