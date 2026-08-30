# Portfolio — 2026

A single-page portfolio built with [Next.js](https://nextjs.org/) (App Router), featuring a full-screen vertical swipe experience powered by Swiper.js. Designed with a dark, minimal aesthetic using Tailwind CSS v4 and custom typography.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Deploy

```bash
# Production build
npm run build

# Start the production server
npm start
```

---

## Sections

The site is a single-page vertical swipe layout with five sections:

| # | Section | Highlights |
|---|---|---|
| 0 | **Hero** | Name headline, "Available for work" badge, looping code desktop background, green portrait panel on mobile |
| 1 | **About** | Bio, portrait image, animated stat counters that trigger on scroll |
| 2 | **Skills** | Categorized skill grid (Languages, Frameworks, Styling, Backend & DB, Tools & APIs, Practices) with staggered fade-in |
| 3 | **Projects** | **Desktop** — sidebar navigation + detail panel with tech icons; **Mobile** — horizontal Swiper carousel with pagination |
| 4 | **Contact** | Validated contact form + social links (Email, GitHub, LinkedIn) |

A fixed **NavBar** at the top highlights the active section and supports keyboard / mousewheel navigation throughout.

---

## Project Structure

```
app/
├── globals.css               # Tailwind v4 imports, theme variables, font utilities
├── layout.tsx                # Root layout — fonts, HTML/body setup
├── page.tsx                  # Entry point — orchestrates all sections in a vertical Swiper
└── components/
    ├── navbar/page.tsx       # Fixed top nav with mobile hamburger menu
    ├── hero/page.tsx         # Hero section with name & badge
    ├── about/page.tsx        # Bio + stats with CountUp component
    ├── skills/page.tsx       # Skill grid with scroll-triggered animations
    ├── projects/page.tsx     # Featured projects (desktop detail / mobile carousel)
    ├── contact/page.tsx      # Contact form + social links
    ├── footer/page.tsx       # Copyright & tagline
    ├── countup/page.tsx      # Reusable animated counter component
    └── skill-icons/page.tsx  # Maps skill names to Lucide icons
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Navigation:** Swiper.js 14 — vertical full-screen slides + mobile project carousel
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`), CSS custom properties, `clamp()` fluid typography
- **Icons:** Lucide React
- **Fonts:** Roboto (display) + Geist Mono (labels) via `next/font`
- **Language:** TypeScript

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Background | `#0C0910` | Near-black with purple undertone |
| Text | `#F5ECCD` | Warm cream |
| Green | `#0B6E4F` | Accent — name, side panels, section labels |
| Gold | `#E6AF2E` | Accent — active nav, badges, category headers |
