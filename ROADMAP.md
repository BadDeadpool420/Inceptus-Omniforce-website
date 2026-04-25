# Inceptus Omniforce — Build Roadmap

> Last updated: April 2026  
> Status legend: ✅ Done · 🚧 In progress · 📋 Planned · 💡 Future idea

---

## Phase 0 — Foundation ✅

| Item | Status |
|------|--------|
| Next.js 15 App Router scaffold | ✅ |
| Tailwind CSS v4 + dark theme | ✅ |
| 3D hero (React Three Fiber) | ✅ |
| Construction-tape banner + typewriter | ✅ |
| Navigation (glass-morphism, hamburger) | ✅ |
| SVG hexagonal logo (`OmniforceLogo`) | ✅ |
| Projects showcase (6 cards) | ✅ |
| Mascot section (Nova + video player) | ✅ |
| AI Learning Hub (4 courses + resources) | ✅ |
| About section (stats + tech stack) | ✅ |
| Footer | ✅ |
| Organised `src/` folder structure | ✅ |
| Shared `types/`, `hooks/`, `lib/data/` | ✅ |
| `copilot-setup-steps.yml` + Copilot instructions | ✅ |

---

## Phase 1 — Core Pages 📋

### 1.1 Projects page  `/projects`
- Full filterable project grid
- Filter by status (Live / Beta / WIP) and tags
- Each card links to a project detail page `/projects/[slug]`
- **Skills needed:** `filesystem` MCP (read existing data), `fetch` MCP (check Framer Motion filter docs)
- **Data:** extend `src/lib/data/projects.ts` with `slug`, `longDescription`, `screenshots[]`

### 1.2 Learn AI page  `/learn`
- Expanded AI learning hub with route-level layout
- Individual course pages `/learn/[courseId]`
- Lesson viewer with code blocks + copy button
- **Skills needed:** `filesystem` MCP to scaffold route structure
- **Data:** extend `src/lib/data/courses.ts` with `lessons[]` array

### 1.3 Mascot page  `/mascot`
- Full-screen Nova showcase
- Lore timeline, art gallery (lightbox), ability cards
- Video autoplay with poster fallback
- **Data:** new `src/lib/data/mascot.ts`

---

## Phase 2 — Shared UI Component Library 📋

Create these reusable primitives in `src/components/ui/`:

| Component | Description | Priority |
|-----------|-------------|----------|
| `Button.tsx` | Primary / secondary / ghost variants | 🔴 High |
| `Badge.tsx` | Status chips (Live / Beta / WIP) | 🔴 High |
| `Card.tsx` | Glass card with optional glow border | 🔴 High |
| `SectionHeader.tsx` | Label + h2 + subtitle block | 🟡 Medium |
| `GlowCard.tsx` | Card with colored radial glow on hover | 🟡 Medium |
| `CodeBlock.tsx` | Syntax-highlighted code with copy | 🟡 Medium |
| `Modal.tsx` | Accessible dialog/lightbox | 🟡 Medium |
| `Toast.tsx` | Notification snackbar | 🟢 Low |

---

## Phase 3 — Interactivity & Data 📋

### 3.1 Email waitlist (AI Hub)
- Wire the "Notify Me" form to an email provider (Resend / Mailchimp)
- Server Action in `app/actions/waitlist.ts`
- **MCP needed:** `fetch` to read Resend API docs

### 3.2 GitHub-powered project data (optional)
- Replace static `projects.ts` array with a `fetch()` call to GitHub API
- Pull real star counts, last-commit dates, README excerpts
- Cache with Next.js `revalidate`

### 3.3 Contact / feedback form
- Simple form → email via Resend or Formspree
- Field: name, message, topic (Project / Learning / Mascot / Other)

---

## Phase 4 — Testing 📋

No tests exist yet. Recommended install:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", globals: true },
});
```

Priority test targets:
- `hooks/useTypewriter` — unit test cycling + deletion logic
- `lib/data/projects` — validate schema of each entry
- `ui/ProgressBar` — snapshot + animation class test
- `ui/Badge` — renders correct color per status

---

## Phase 5 — Performance & SEO 📋

| Task | Notes |
|------|-------|
| `next/image` for all raster images | Replace `<img>` tags |
| `<Suspense>` around ThreeScene | Better loading UX |
| `generateMetadata()` per page | OG tags, Twitter cards |
| `sitemap.xml` | `app/sitemap.ts` |
| `robots.txt` | `app/robots.ts` |
| Lighthouse audit ≥ 90 | Target after Phase 3 |

---

## Phase 6 — Deployment 📋

**Hosting:** Namecheap · **Domain (registered):** `www.inceptusomniforce.com` · **Repo:** `BadDeadpool420/Inceptus-Omniforce-website`

| Task | Notes |
|------|-------|
| Build static export | Run `npm run build` (outputs to `out/`) — ready for Namecheap upload |
| Upload to Namecheap | Upload the contents of `out/` to `public_html/` via cPanel File Manager or FTP |
| Domain already live | `http://www.inceptusomniforce.com` — managed in Namecheap DNS panel |
| Enable HTTPS | Activate free AutoSSL / Let's Encrypt in Namecheap cPanel → `https://www.inceptusomniforce.com` |
| Redirect HTTP → HTTPS | Add `.htaccess` rule in `public_html/` once SSL is active |
| Environment variables | Store secrets (e.g. `RESEND_API_KEY`) in `.env.local` locally; bake public vars into build |
| GitHub Actions CI | Lint + type-check on every PR (already wired via `copilot-setup-steps.yml`) |
| Auto-deploy on merge | Optional: add a `deploy.yml` workflow using `appleboy/scp-action` to FTP/SCP the `out/` folder to Namecheap on push to `main` |

---

## MCP Servers — What We Need & How to Get Them

### Servers already available in Copilot sessions
| Server | What it unlocks |
|--------|----------------|
| `github` | Read/write issues, PRs, search code |
| `filesystem` | Read/write files in the workspace |
| `fetch` | Fetch URLs — read docs, check npm APIs |

### Servers to consider adding (future)
| Server | Use case | Install |
|--------|----------|---------|
| **Resend MCP** | Send transactional email from Copilot sessions | npm: `@resend/mcp` |
| **Figma MCP** | Pull design tokens directly from Figma files | [figma.com/developers/mcp](https://www.figma.com/developers/mcp) |
| **Supabase MCP** | Read/write a Postgres DB for dynamic content | [supabase.com/docs/guides/ai/mcp](https://supabase.com/docs/guides/ai/mcp) |

---

## VS Code Copilot Hooks (local dev)

VS Code Copilot supports hooks that run automatically during coding sessions.  
Reference: https://code.visualstudio.com/docs/copilot/customization/hooks

Recommended hooks to add to `.vscode/settings.json`:

```json
{
  "github.copilot.chat.codeGeneration.instructions": [
    { "file": ".github/copilot-instructions.md" }
  ]
}
```

This makes every Copilot inline suggestion and chat response aware of our folder conventions,
color palette, and data-decoupling rules.

---

## Next Immediate Actions (start here)

1. **`Button.tsx` + `Badge.tsx`** — unblock all other components that need them
2. **`/projects` route** — most-requested page; data is already ready in `lib/data/projects.ts`
3. **`vitest` setup** — add testing before the codebase grows further
4. **`generateMetadata()`** per sub-page — 5-minute SEO win (metadataBase already set to `https://www.inceptusomniforce.com`)
5. **Deploy to Namecheap** — run `npm run build`, upload `out/` to `public_html/` via cPanel, activate AutoSSL
