# Mandali (themandali.com)

> **The platform built for independent convenience store owners.**  
> *“Never alone · Alone a store. Together a force.”*

Mandali is a private community and operations platform designed specifically for independent convenience store operators, cashiers, store managers, and licensed commercial service technicians across the United States.

---

## 🚀 Architecture & Tech Stack

- **Core Framework:** React 19 + Vite 8
- **Routing:** `react-router-dom` v7 (strict multi-page routing)
- **Styling Architecture:** Modular, co-located `.jsx` + `.css` components adhering to the [`anti-ai-design`](.agents/skills/anti-ai-design/SKILL.md) standard
- **Icons:** `lucide-react`
- **Linting & Verification:** `oxlint` (0 warnings, 0 errors)
- **Design System Tokens:**
  - **Brand Midnight Navy:** `#0B192C`
  - **Warm Sandstone Surface:** `#F8F7F4` & `#FBFBFA`
  - **Heritage Saffron Accent:** `#D97706` & `#F59E0B`
  - **Verified Emerald:** `#059669`
  - **Typography:** *Plus Jakarta Sans* (display), *Inter* (UI/body), *Newsreader* (editorial serif italics)

---

## 📁 Repository Structure

```
Mandali/
├── .agents/                      # Project skills & AI Council guidelines
├── AGENTS.md                     # Project rules & anti-ai-design mandates
├── frontend/
│   ├── public/                   # Static assets (favicons, logos)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer/           # Footer.jsx + Footer.css
│   │   │   ├── Layout/           # Layout.jsx + Layout.css (100dvh root shell)
│   │   │   └── Navbar/           # Navbar.jsx + Navbar.css (Off-canvas slide-over drawer)
│   │   ├── pages/
│   │   │   ├── AboutPage/        # AboutPage.jsx + AboutPage.css
│   │   │   ├── AiPage/           # AiPage.jsx + AiPage.css
│   │   │   ├── ApproachPage/     # ApproachPage.jsx + ApproachPage.css
│   │   │   ├── AuthPage/         # AuthPage.jsx + AuthPage.css (SMS OTP & verified flow)
│   │   │   ├── CareersPage/      # CareersPage.jsx + CareersPage.css
│   │   │   ├── ContactPage/      # ContactPage.jsx + ContactPage.css
│   │   │   ├── FaqPage/          # FaqPage.jsx + FaqPage.css
│   │   │   ├── FoundersPage/     # FoundersPage.jsx + FoundersPage.css
│   │   │   ├── HomePage/         # HomePage.jsx assembling 6 modular sections:
│   │   │   │   ├── HeroSection/
│   │   │   │   ├── StatsSection/
│   │   │   │   ├── FeaturesSection/
│   │   │   │   ├── HowItWorksSection/
│   │   │   │   ├── RoadmapSection/
│   │   │   │   └── WaitlistSection/
│   │   │   ├── LegalPage/        # LegalPage.jsx + LegalPage.css (Privacy, Terms, Support)
│   │   │   ├── MarketPage/       # MarketPage.jsx + MarketPage.css (NACS Market Thesis)
│   │   │   ├── StoryPage/        # StoryPage.jsx + StoryPage.css
│   │   │   └── WhyNowPage/       # WhyNowPage.jsx + WhyNowPage.css
│   │   ├── App.jsx               # Route definitions
│   │   ├── index.css             # Design tokens & safe area insets
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🛠️ Development & Build Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The site runs at `http://localhost:5173`.

### 3. Run Linter
```bash
npm run lint
```

### 4. Create Production Build
```bash
npm run build
```

---

## 📱 Cross-Platform Responsive Engineering

- **Off-Canvas Slide-Over Drawer (`< 1024px`):** Fixed right-aligned full-height panel with cubic-bezier transition, backdrop scrim blur, body scroll lock, Escape key dismissal, and safe area insets.
- **Apple HIG & Android Ergonomics:** Minimum 44px touch targets on coarse pointer devices.
- **iOS Safari Auto-Zoom Prevention:** Form inputs and selects locked to `>= 16px` on mobile viewports.
- **4-Tier Breakpoints:** Small Mobile (320px–480px), Large Mobile (481px–767px), Tablet (768px–1023px), and Desktop/Wide (1024px+).

