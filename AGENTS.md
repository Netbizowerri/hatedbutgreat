# Hated But Great — Agent Guide

## Quick start

```bash
npm install          # install deps
npm run dev          # vite dev server on port 3000, host 0.0.0.0
npm run build        # vite build → dist/
npm run preview      # vite preview (serve built app)
npm run lint         # tsc --noEmit (type-check)
npm run lint:eslint  # ESLint check (src/)
npm run clean        # Cross-platform cleanup (dist/ server.js)
```

## Architecture

- **React 19 SPA** with Vite bundler. Entry: `src/main.tsx` → `src/App.tsx`.
- **react-router-dom v7** (createBrowserRouter). Routes in `src/App.tsx`:
  - `/` — Home, `/medical-excellence`, `/business-adventures`, `/entertainment-creativity`, `/talk-show`, `/contact`
  - `/privacy-policy`, `/terms-of-use`, `/disclaimer` (all via `LegalPage` component with `type` param)
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (no postcss/tailwind.config needed). Theme vars in `src/index.css` via `@theme {}`.
- **Path alias**: `@/*` → `src/` (configured in both `tsconfig.json` and `vite.config.ts`).
- **Code splitting**: All routes lazy-loaded via `React.lazy` + `<Suspense>` in `RootLayout`.
- **Profile modal state**: Centralized via `ProfileProvider` in `src/context/ProfileContext.tsx`. Use `useProfile().setSelectedProfile` on any page.
- **AI Studio app** (`metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`). No server-side code in this repo — Express is present in dependencies for the AI Studio runtime injection.

## Environment

- `GEMINI_API_KEY` — required for Gemini AI API calls (set in `.env.local`)
- `APP_URL` — auto-injected by AI Studio at runtime (Cloud Run service URL)
- `.env*` is gitignored (except `.env.example`)

## HMR & agent edits

The Vite config supports `DISABLE_HMR=true` to disable HMR + file watching during agent edits (prevents flickering). When this env var is set, `watch` becomes `null`.

## Styling conventions

- Dark theme (`bg-[#0A0A0A]`), Nigerian flag accent (`#008751`), Poppins font
- Utility classes to use: `.glass-card`, `.glass-card-light`, `.glass-input` (defined in `src/index.css` via `@layer utilities`)
- Animation classes: `.animate-float-slow`, `.animate-float-delayed`

## Forms & data

- Contact forms POST to **Formspree** endpoints (defined in `src/lib/formspree.ts`)
- Lead data also forwarded to **PrivyR** webhook
- Profile data is static in `src/data/profiles.ts` (no API/database)
- Types in `src/types.ts`: `Profile`, `TalkShowEpisode`, `StatItem`, `PillarCategory`

## Key gotchas

- No test framework is configured. Do not assume Jest, Vitest, or any test runner exists.
- React Router links: route paths use kebab-case (e.g., `/medical-excellence`).
- `useScrollToTop` hook resets scroll on route change (used in `RootLayout` via `ScrollToTop`).
- Always use `@/` path alias for imports (e.g., `@/components/ui/GlassCard`).
- 404 catch-all route exists (`/src/pages/NotFound.tsx`).
- `businessTimeline` data lives in `src/data/timeline.ts` (separate from profiles).
