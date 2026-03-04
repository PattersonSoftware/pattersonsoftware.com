# CLAUDE.md

This file provides guidance for Claude Code when working on this project.

## Project Overview

Patterson Software, LLC business website — a React/TypeScript single-page application deployed to GitHub Pages.

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — all styling via utility classes
- **Radix UI Themes** — accessible UI components (used for Contact dialog)
- **lucide-react** — icons

## Commands

```bash
npm run dev           # Start dev server with HMR
npm run build         # Type-check (tsc -b) then Vite production build
npm run lint          # ESLint on all .ts/.tsx files
npm run preview       # Serve production build locally
npm run test          # Vitest in watch mode
npm run test:run      # Run all tests once (for CI)
npm run test:coverage # Run tests with V8 coverage report
```

Always run `npm run build`, `npm run lint`, and `npm run test:run` before considering work complete.

## Project Structure

```
src/
  main.tsx                  # Entry point (React StrictMode)
  App.tsx                   # Root component — composes all sections
  index.css                 # Global Tailwind imports
  assets/logo.png
  components/
    Header.tsx              # Nav with mobile hamburger menu
    Footer.tsx              # Dynamic copyright year
    Logo.tsx                # Configurable logo image wrapper
    Service.tsx             # Reusable service card (icon, title, description)
    Contact.tsx             # Radix UI Dialog modal
  sections/
    HeroSection.tsx
    ServicesSection.tsx
    AboutSection.tsx
    ContactSection.tsx
```

## Code Conventions

- **Components:** Functional components with explicit `React.FC<Props>` typing and prop interfaces
- **Styling:** Tailwind utility classes only — no custom CSS except global imports in `index.css`
- **Responsive:** Mobile-first using `md:` breakpoint prefix
- **Accessibility:** Semantic HTML with ARIA roles; maintain this pattern when adding components
- **State:** Local `useState` only — no global state library
- **TypeScript:** Strict mode is on; `noUnusedLocals` and `noUnusedParameters` are enforced

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`), which runs `npm ci && npm run build` and deploys `/dist` to GitHub Pages.
