# Copilot Instructions — Inceptus Omniforce Website

> These instructions are read automatically by GitHub Copilot before every session.
> They provide project context, coding conventions, and guidance on available MCP servers.

---

## Project overview

**Inceptus Omniforce** is a dark-themed, WebGL-powered Next.js 15 website.  
It serves as a personal hub for AI projects, a learning platform, and a showcase for the "Nova" anime mascot.

**Current state:** Under active construction. The landing page is live; full sub-pages are next.

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) — TypeScript |
| Styling | Tailwind CSS v4 |
| 3D / WebGL | React Three Fiber + Three.js + @react-three/drei |
| Animation | Framer Motion |
| Runtime | Node.js 20, npm |

---

## Folder conventions

```
src/
├── app/               # Next.js App Router — one folder per route
│   └── (route)/
│       ├── page.tsx
│       └── layout.tsx (optional)
├── components/
│   ├── layout/        # Navigation, Footer — page-wide chrome
│   ├── sections/      # Full-width page sections (one file per section)
│   ├── three/         # All WebGL / Three.js code lives here
│   └── ui/            # Small reusable primitives (buttons, cards, badges)
├── hooks/             # Custom React hooks (useTypewriter, etc.)
├── lib/
│   └── data/          # Static data arrays (projects.ts, courses.ts)
└── types/
    └── index.ts       # Shared TypeScript interfaces
```

**Rules:**
- All imports use the `@/` alias (maps to `src/`).
- Data is **never** hard-coded inside components — it lives in `src/lib/data/`.
- Shared types live in `src/types/index.ts`; import with `import type { … } from "@/types"`.
- New page routes go under `src/app/<route>/page.tsx`.
- New reusable UI pieces go in `src/components/ui/`.
- New page sections go in `src/components/sections/`.

---

## Coding conventions

- **"use client"** directive at the top of every component that uses React state, effects, or browser APIs.
- Server components (no interactivity) do not need the directive.
- Heavy Three.js components must be dynamically imported with `{ ssr: false }`.
- `motion.*` from Framer Motion for all entrance / hover / scroll animations.
- `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations.
- CSS classes: Tailwind utility-first; custom classes only in `globals.css`.
- Color palette: `#020617` bg · `#06b6d4` cyan · `#a855f7` purple · `#f59e0b` gold.

---

## MCP servers available to Copilot

The following MCP (Model Context Protocol) servers are available during Copilot sessions.
Use them to accelerate tasks without leaving the agent loop:

### `github` MCP server
- Read/write issues, PRs, and comments.
- Search code, read file contents, list branches.
- Use for: understanding open issues, creating PRs, searching for existing patterns.

### `filesystem` MCP server
- Read and write files in the repo workspace.
- Use for: reading existing component code before generating new files.

### `fetch` / browser MCP server  
- Fetch external URLs and parse page content.
- Use for: reading documentation, checking npm package APIs, fetching design inspiration.
- Example: fetch `https://www.framer.com/motion/animation/` before writing complex animations.

### When to reach for an MCP server
| Task | Server to use |
|------|--------------|
| Check if a component already exists | `filesystem` |
| Read Three.js / Framer Motion docs | `fetch` |
| Find open GitHub issues before coding | `github` |
| Verify a package's latest version | `fetch` → npmjs.com |
| Search for similar code patterns in the repo | `filesystem` or `github` |

---

## Key areas for next-build sessions

### 1. Sub-pages (App Router routes)
Each of these should become a proper `app/<route>/page.tsx`:
- `/projects` — full filterable project grid with search + status filter
- `/learn` — AI learning hub with route-level layout
- `/mascot` — dedicated Nova page with lore, art gallery

### 2. Shared UI components still needed
| Component | Location | Priority |
|-----------|----------|----------|
| `Button.tsx` | `ui/` | High |
| `Badge.tsx` | `ui/` | High |
| `Card.tsx` | `ui/` | High |
| `SectionHeader.tsx` | `ui/` | Medium |
| `GlowCard.tsx` | `ui/` | Medium |

### 3. Data + CMS wiring
- `src/lib/data/projects.ts` — already decoupled, ready for API fetch
- `src/lib/data/courses.ts` — same
- Future: swap static arrays for `fetch()` calls to a headless CMS or GitHub API

### 4. Testing
No tests exist yet. Recommended setup:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```
Priority tests: hooks (`useTypewriter`), data helpers, UI primitives.

### 5. Performance
- Add `next/image` for any raster images (mascot poster, avatars).
- Add `loading="lazy"` to below-fold images.
- Add `Suspense` boundaries around Three.js canvas.

---

## Mascot video
Place `mascot.mp4` (and optionally `mascot-poster.jpg`) in the `public/` folder.
The `MascotSection` video player auto-detects the file — no code changes needed.

---

## Do not
- Add `console.log` calls in production code.
- Hard-code data inside component JSX — put it in `lib/data/`.
- Use `any` TypeScript type — always define proper interfaces in `src/types/index.ts`.
- Commit `node_modules/`, `.next/`, or other build artifacts.
