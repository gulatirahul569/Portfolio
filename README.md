# Rahul Gulati — Portfolio

Personal portfolio website of **Rahul Gulati**, a Full Stack Developer specializing in the MERN stack. Built as a fast, modern single-page site showcasing projects, skills, experience, and education.

**Live:** https://portfolio-five-virid-tj39kgc5ab.vercel.app/
**Repo:** [github.com/gulatirahul569/Portfolio](https://github.com/gulatirahul569/Portfolio)

## About

This site presents an overview of my work as a Full Stack Developer — hands-on experience building responsive, scalable web applications with MongoDB, Express.js, React.js, and Node.js. It includes:

- **Profile & Summary** — role, tagline, contact details, and a short bio
- **Skills** — core technologies with notes on proficiency (React, Node.js, Express, MongoDB, Tailwind CSS, etc.)
- **Focus Areas** — REST API design, JWT authentication, RBAC middleware, MongoDB schema modelling, responsive UI, admin dashboards, and cloud deployment
- **Projects** — case studies with problem, solution, highlights, tech stack, and live/repo links (e.g. Roto, School ERP, CodeForge, Zorestia)
- **Experience** — a timeline of internships, industrial training, and current role
- **Education** — academic background
- **Achievements** — awards and recognitions

## Tech Stack

Built with a modern, type-safe React setup:

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework
- **[TanStack Router](https://tanstack.com/router)** — type-safe routing
- **[TanStack Query](https://tanstack.com/query)** — data fetching & caching
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** + **shadcn-style components** — accessible, composable UI primitives
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — forms and validation
- **[Recharts](https://recharts.org/)** — data visualization
- **[Vite](https://vitejs.dev/)** — build tooling
- **ESLint** + **Prettier** — linting and formatting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bun](https://bun.sh/) (repo includes a `bun.lock`) — or npm/pnpm/yarn if you prefer

### Installation

```bash
git clone https://github.com/gulatirahul569/Portfolio.git
cd Portfolio
bun install
# or: npm install
```

### Development

```bash
bun run dev
# or: npm run dev
```

The app will start on the local Vite dev server (check your terminal output for the exact URL).

### Build

```bash
bun run build
# or: npm run build
```

Creates a production build. Use `build:dev` for a development-mode build.

### Preview

```bash
bun run preview
```

Serves the production build locally for a final check before deploying.

### Lint & Format

```bash
bun run lint     # run ESLint
bun run format   # format with Prettier
```

## Project Structure

```
Portfolio/
├── public/           # Static assets
├── src/               # Application source (routes, components, data)
├── components.json    # shadcn/ui component config
├── eslint.config.js   # ESLint configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json
```

## Deployment

The project builds to static output via Vite and can be deployed to any static/edge hosting provider (e.g. Vercel, Netlify, Cloudflare Pages).

```bash
bun run build
```

Deploy the resulting output directory according to your chosen host's instructions.

## Contact

**Rahul Gulati** — Full Stack Developer, Chandigarh, India

- 📧 [rahulgulati425@gmail.com](mailto:rahulgulati425@gmail.com)
- 📱 +91 7888581685
- 💻 [GitHub](https://github.com/gulatirahul569)
- 🔗 [LinkedIn](https://www.linkedin.com/in/gulatirahul/)

## License

This project is personal portfolio source code. Feel free to reference the structure, but please don't reuse the content or branding as your own.
