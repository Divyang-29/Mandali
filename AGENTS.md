# Project Guidelines & Agent Instructions: Mandali

## Core Mandates

### 1. Anti-AI Design Standard (Mandatory for all Frontend/UI work)
Whenever building, styling, refactoring, or reviewing frontend components, landing pages, or web interfaces in this project, you **MUST strictly enforce the `anti-ai-design` skill** located at `.agents/skills/anti-ai-design/SKILL.md`.

- **Never** default to generic SaaS templates, floating blurry ambient blobs, multi-color gradient text, or neon glowing borders.
- **Never** use repetitive identical rounded cards or leave orphaned grid slots (e.g. 5 cards in a 3-column layout).
- **Never** hide critical visual product proof or interactive mockups on mobile screens (`hidden sm:flex` is banned).
- **Always** maintain the established brand design system:
  - Brand Midnight Navy (`#0B192C`)
  - Warm Sandstone canvas (`#F8F7F4` / `#FBFBFA`)
  - Heritage Saffron accent (`#D97706` / `#F59E0B`)
  - Verified Emerald status (`#059669`)
  - Typography: **Plus Jakarta Sans** (display/headings), **Inter** (UI/body), and **Newsreader italic** (editorial quotes).
- **Always** ensure every button, modal, dropdown, and tab actually works—no dead stubs, placeholder alert boxes, or 404 links.
- **Before declaring any frontend task complete**, run the Post-Flight "AI Slop Removal" audit defined in `.agents/skills/anti-ai-design/SKILL.md`.

### 2. Code Quality & Performance
- Use React 19 + Vite + Tailwind CSS + Lucide Icons.
- Keep components modular, accessible, and strictly typed/prop-checked.
- Ensure all builds pass with 0 errors and 0 lint warnings (`npm run lint` and `npm run build`).

