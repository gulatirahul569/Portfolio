# Full-Stack Engineer Portfolio Plan

## Goal
Build a dark, minimal, developer-focused portfolio that showcases Rahul Gulati's work — especially CodeForge (online compiler) and Roto (e-commerce) — as full-stack engineering case studies.

## Important Framework Note
This Lovable project uses **TanStack Start**, not Next.js. TanStack Start is a full-stack React framework with file-based routing, server functions, and SSR/SSG support, so the final result can match a Next.js portfolio in behavior and appearance. If a literal Next.js codebase is required, this plan can be adapted to Next.js App Router, but it cannot be built inside this project.

## Proposed Scope (TanStack Start)
Single-page portfolio with anchored sections:

1. **Hero** — Name, one-line tagline, CTA buttons (View Projects, Contact), typed or animated intro text.
2. **About** — Short bio, current focus, location/availability, and a downloadable resume link.
3. **Projects** — Two featured case studies (CodeForge, Roto) with problem, solution, tech stack, live/demo links, and GitHub links.
4. **Skills** — Tech stack grid: React, Node.js, Express, MongoDB, JavaScript, Tailwind, etc.
5. **Experience / Education** — Timeline or list format (can be minimal if limited).
6. **Contact** — Email, GitHub, LinkedIn (if provided), and a simple contact form.
7. **Footer** — Copyright and social links.

## Design Direction
- **Style:** Dark minimal / developer aesthetic.
- **Palette:** Near-black background (`#0a0a0a`), dark surface (`#171717`), green accent (`#22c55e`), off-white text (`#e5e5e5`).
- **Typography:** Monospace or geometric sans for headings, clean sans for body.
- **Motion:** Subtle scroll reveals, hover lifts on project cards, typed hero text.
- **Layout:** Hero + stacked full-width sections, project cards in a responsive grid.

## Data Sources
- Static JSON for projects, skills, and bio.
- Optional: GitHub API integration to fetch live repo stats (stars, forks, languages) via a server function.

## Technical Plan
- Replace `src/routes/index.tsx` placeholder with the portfolio page.
- Add sections as small components under `src/components/portfolio/`.
- Use Tailwind CSS variables for the dark theme.
- Add route-level `head()` metadata for SEO.
- No backend persistence required unless contact form submissions are wanted.

## Out of Scope (unless requested)
- Blog/CMS
- Admin dashboard
- Authentication
- Multi-page routing beyond anchor sections

## Next Steps
Approve this plan to build the portfolio in this TanStack Start project. If a literal Next.js project is required, let me know and I can provide a Next.js blueprint instead.
