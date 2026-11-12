---
name: anti-ai-design
description: >-
  Enforces bespoke, high-craft, human-designed frontend experiences and strictly prevents generic AI-generated aesthetic tropes (purple/blue mesh gradients, floating blurry blobs, excessive glassmorphism, glowing neon borders, repetitive bento cards, and cookie-cutter SaaS templates). Use whenever designing, building, styling, reviewing, or refactoring user interfaces, landing pages, or web applications.
triggers:
  - design website
  - redesign
  - frontend design
  - anti-ai-design
  - build UI
  - style page
  - create landing page
  - review design
  - UI UX
version: 1.0.0
author: Mandali Core Team
---

# Anti-AI Design: The Human Craft Frontend Standard

## Purpose & Mandate
Most AI-generated frontend interfaces suffer from the **"AI Slop Syndrome"**: predictable hero sections with centered purple gradients, floating translucent glass cards with 8px unreadable text, repetitive 3-column bento grids with generic icons, and soulless stock illustrations.

**This skill mandates that every frontend layout, component, and style created in this codebase is built with the precision, authenticity, and editorial judgment of an elite human designer (Awwwards, Framer Site of the Year, Stripe, Linear, Airbnb standard).**

---

## The 10 Core Tenets of Anti-AI Design

### 1. Never Default to Generic SaaS Templates
- **Banned:** Centered headline + purple gradient pill + 2 generic buttons + floating laptop frame + 3 identical icon cards + pricing table + generic accordion FAQ + footer.
- **Enforced:** Craft an asymmetrical or editorial layout that directly reflects the physical or operational reality of the product. If the business is convenience stores, feature real register screens, shift handoffs, and wholesale order sheets—not abstract floating clouds.

### 2. Purge AI Aesthetic Clichés
- **No Floating Blurry Blobs:** Ban `blur-3xl bg-purple-500/30 rounded-full absolute -top-40`. If you need ambient light, use subtle tonal gradients grounded in warm neutrals or subtle radial vignettes.
- **No Neon Border Glows:** Ban `border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]`. Use crisp 1px borders (`border-stone-200`, `border-black/5`) with optical inset rings (`ring-1 ring-black/5`).
- **No Overbaked Glassmorphism:** Stop putting `backdrop-blur-xl bg-white/10 border-white/20` on every single surface. Glassmorphism is a rare accent (e.g., sticky headers or dropdown menus), never a primary card background.
- **No Multi-Color Gradient Text Spills:** Ban gratuitous `bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent` on 4-line paragraphs. Reserve subtle gradient accents for at most 1–2 key words, or use crisp high-contrast solid typography.

### 3. Break Card & Bento Monotony
- **Banned:** Six identical rounded boxes with an icon, an H3, and two lines of filler text.
- **Enforced:** Asymmetric content density. Mix high-density data tables, interactive tabs, split-screen storytelling, horizontal editorial timelines, live filters, and authentic simulated artifacts. No orphan grid slots (e.g., 5 cards in a 3-column grid).

### 4. Professional Typography & Optical Hierarchy
- **Pair with Deliberate Contrast:** Pair a high-character geometric heading face (e.g., **Plus Jakarta Sans**, **Cabinet Grotesk**, **General Sans**) with a hyper-legible UI body font (**Inter**, **Geist**, **Satoshi**), and an intentional serif accent (**Newsreader**, **Instrument Serif**, **Playfair**) for pull-quotes and community credentials.
- **Tighten Letter-Spacing on Large Type:** Always apply `tracking-tight` (`-0.02em` to `-0.03em`) on display headlines ($H1 \ge 36px$) to prevent loose, unpolished lettering.
- **Proportional Line-Heights:** Display type needs tight line height (`leading-[1.1]`), while body paragraphs need comfortable breathing room (`leading-relaxed` or `leading-[1.65]`). Never let paragraphs stretch wider than 65–75 characters.

### 5. Niche-Authentic Hero Architecture
- The Hero must tell a complete story before the user scrolls:
  - What is this?
  - Who is it for?
  - Why should I trust it right now?
  - What does the actual product look like?
- Show the **actual interface or physical artifact**, not an abstract concept. If it has a mobile experience, build an interactive preview with clickable tabs and real data, not a static mockup with fake placeholder squiggles.

### 6. Authentic Imagery Over Stock/Abstract Illustrations
- Never use generic purple vector humans holding oversized smartphones or abstract 3D clay spheres.
- Use high-resolution real-world product captures, contextual location photos, verified badges, real employee profile timelines, and genuine industry data.

### 7. Purposeful Micro-Interactions & Tactile Polish
- Animations must serve usability, not vanity:
  - Transition durations: **150ms to 250ms** (`duration-200 ease-out`). Never sluggish 600ms delays.
  - Active press states: `active:scale-[0.98]` or `active:translate-y-0.5` for real tactile feedback.
  - Interactive controls must actually work: tabs must switch, filters must filter, search inputs must react, and modals must trap focus and close on Escape/backdrop click.

### 8. Responsive-First: Mobile is Never an Afterthought
- **Never hide key visual proof on mobile (`hidden sm:flex`).** Mobile visitors must see the product demo, the metrics, and the social proof immediately.
- Use fluid responsive typography and stacking containers rather than simply cutting off half the layout on smaller screens.
- All interactive controls must meet minimum 44×44px touch target guidelines.

### 9. Benchmark Against Elite Human Standards
- Before designing, reference the standards set by:
  - **Stripe:** Subdued warm surfaces, razor-sharp 1px border hierarchy, authoritative typographic rhythm.
  - **Linear:** High information density, keyboard shortcuts, tactile dark-mode precision, purposeful micro-animations.
  - **Airbnb:** Warm, community-first human photography, approachable typography, reassuring trust badges.
  - **Awwwards / Framer Site of the Year:** Creative asymmetry, bespoke editorial headlines, unexpected brand personality.

### 10. Strict Systematic Design Tokens
- Lock in a cohesive token palette:
  - One dominant brand neutral (`#0B192C` or warm slate).
  - One warm background canvas (`#F8F7F4` or `#FBFBFA`, avoiding harsh pure `#FFFFFF` everywhere).
  - One deliberate primary action color.
  - One culturally resonant accent color (e.g., warm saffron `#D97706`).
  - Strict spacing scale (4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px).

---

## The Pre-Flight Execution Protocol

Whenever prompted to build or redesign a UI component or page:

```
[Step 1: Context & Niche Discovery]
   ↓
   • What is the authentic industry (e.g., convenience store operators, logistics, healthcare)?
   • What does the end user look at all day (registers, invoices, clipboard, WhatsApp)?
   • What is the primary conversion goal (join waitlist, book demo, verify identity)?

[Step 2: Aesthetic Thesis Definition]
   ↓
   • Define 1-2 sentence design thesis (e.g., "Warm Editorial Commerce: Stripe-grade trust with community warmth").
   • Choose color tokens, font pairings, and surface elevation rules.

[Step 3: Component Implementation]
   ↓
   • Write clean, production-ready React + Tailwind CSS code.
   • Zero TODOs, zero unclickable stubs, zero placeholder "Lorem ipsum" copy.

[Step 4: AI Slop Removal Audit]
   ↓
   • Run the Anti-AI Design checklist before submitting work.
```

---

## The "AI Slop Removal" Post-Flight Checklist

Before declaring any frontend work complete, verify every item:

| Check | Requirement | Pass? |
| :--- | :--- | :---: |
| **No Predictable Blobs** | Are all floating blurred ambient blobs removed? | [ ] |
| **No Broken Links/404s** | Do all buttons, navigation items, and CTAs either open modals, scroll to valid IDs, or execute real actions? | [ ] |
| **Mobile Proof Present** | Is the visual product preview visible and readable on `<640px` screens? (No `hidden sm:flex` cop-outs) | [ ] |
| **Readable Micro-Text** | Are all preview texts and badges $\ge 11px$ (no unreadable 8px text)? | [ ] |
| **Grid Balance** | Are there zero awkward orphan slots in feature grids? (e.g., 6 cards for 3-column, not 5) | [ ] |
| **Legible Contrast** | Do text and background combinations pass WCAG AA contrast standards? | [ ] |
| **Functional Interactions** | Do filter pills, tabs, language dropdowns, and modals actually execute state changes? | [ ] |
| **Authentic Voice** | Is all copy tailored specifically to the target audience rather than generic corporate buzzwords? | [ ] |

---

## How to Activate This Skill

1. **Automatic Activation:** This skill is registered in `.agents/skills/anti-ai-design/` and enforced across the workspace via project rules in `AGENTS.md`. Whenever the agent designs, builds, or touches UI code, it automatically adheres to these tenets.
2. **Explicit Invocation:** Mention `anti-ai-design`, `anti-ai`, or ask to *"apply the human design standard"* in any turn.
3. **Design Review Mode:** Use `/anti-ai-design audit` to run the post-flight checklist against any existing frontend file or live page.

